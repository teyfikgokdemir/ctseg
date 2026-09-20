import { beforeEach, describe, expect, it, vi } from "vitest";

const { currentUser, db } = vi.hoisted(() => {
  const db = {
    $transaction: vi.fn(), $queryRaw: vi.fn(),
    tradeCase: { create: vi.fn(), findUnique: vi.fn(), update: vi.fn(), count: vi.fn() },
    company: { findUnique: vi.fn(), findMany: vi.fn(), create: vi.fn(), update: vi.fn(), delete: vi.fn() },
    caseCompany: { findUnique: vi.fn(), upsert: vi.fn(), update: vi.fn() },
    contact: { findFirst: vi.fn(), findUnique: vi.fn(), create: vi.fn(), update: vi.fn() },
    quotation: { create: vi.fn(), findUnique: vi.fn(), findFirst: vi.fn(), update: vi.fn() },
    tradeTask: { create: vi.fn(), findUnique: vi.fn(), update: vi.fn(), count: vi.fn() },
    dealActivity: { create: vi.fn() },
    tradeDocument: { create: vi.fn() }, rfqDraft: { create: vi.fn() },
    user: { findFirst: vi.fn() },
  };
  return { currentUser: vi.fn(), db };
});
vi.mock("../lib/current-user", () => ({ currentUser }));
vi.mock("../lib/db", () => ({ db }));

import { POST } from "../app/api/trade-desk/route";
import { DELETE as DELETE_COMPANY } from "../app/api/companies/[id]/route";
import { caseQuotationWhere, dashboardWhere, draftRfq, loadDashboardMetrics } from "../lib/trade-desk";

const post = async (body: Record<string, unknown>) => POST(new Request("http://localhost/api/trade-desk", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) }) as never);
const tefyik = { id: "u1", email: "teyfik@teyfikgokdemir.com", role: "ADMIN" };
const mina = { id: "u2", email: "minafakhimi@icloud.com", role: "MANAGER" };

beforeEach(() => {
  vi.resetAllMocks();
  db.$transaction.mockImplementation(async (callback) => callback(db));
  db.$queryRaw.mockResolvedValue([]);
  db.tradeCase.create.mockResolvedValue({ id: "c1" });
  db.tradeCase.findUnique.mockResolvedValue({ id: "c1", stage: "NEW_REQUEST", priority: "NORMAL", closedAt: null });
  db.tradeCase.update.mockResolvedValue({ id: "c1", stage: "RFQ_SENT" });
  db.company.findUnique.mockResolvedValue({ id: "co1", name: "Acme", country: "Türkiye" });
  db.company.findMany.mockResolvedValue([]);
  db.company.create.mockResolvedValue({ id: "co1", name: "Acme" });
  db.caseCompany.findUnique.mockResolvedValue(null);
  db.caseCompany.upsert.mockResolvedValue({ caseId: "c1", companyId: "co1" });
  db.quotation.create.mockResolvedValue({ id: "q1", caseId: "c1", companyId: "co1" });
  db.dealActivity.create.mockResolvedValue({ id: "a1" });
  currentUser.mockResolvedValue(tefyik);
});

describe("Trade Desk workflows", () => {
  it("A: assigns a new case to Teyfik", async () => {
    expect((await post({ action: "case.create", title: "Feed trade" })).status).toBe(201);
    expect(db.tradeCase.create.mock.calls[0][0].data.ownerUserEmail).toBe(tefyik.email);
    expect(db.dealActivity.create.mock.calls[0][0].data.type).toBe("CASE_CREATED");
  });
  it("B: assigns a new case to Mina", async () => {
    currentUser.mockResolvedValue(mina);
    expect((await post({ action: "case.create", title: "Buyer deal" })).status).toBe(201);
    expect(db.tradeCase.create.mock.calls[0][0].data.ownerUserEmail).toBe(mina.email);
  });
  it("E: links a supplier to a case", async () => {
    expect((await post({ action: "company.link", caseId: "c1", companyId: "co1", roleInCase: "SUPPLIER" })).status).toBe(201);
    expect(db.caseCompany.upsert.mock.calls[0][0].create).toMatchObject({ caseId: "c1", companyId: "co1", roleInCase: "SUPPLIER" });
  });
  it("F: one company can be linked to two cases", async () => {
    await post({ action: "company.link", caseId: "c1", companyId: "co1" });
    await post({ action: "company.link", caseId: "c2", companyId: "co1" });
    expect(db.caseCompany.upsert.mock.calls.map((call) => call[0].create.caseId)).toEqual(["c1", "c2"]);
  });
  it("G: quotation requires a case-company link", async () => {
    const body = { action: "quotation.create", caseId: "c1", companyId: "co1", productName: "L-Threonine", unitPrice: "1300", currency: "USD" };
    expect((await post(body)).status).toBe(400);
    expect(db.quotation.create).not.toHaveBeenCalled();
    db.caseCompany.findUnique.mockResolvedValue({ caseId: "c1", companyId: "co1" });
    expect((await post(body)).status).toBe(201);
    expect(db.quotation.create.mock.calls[0][0].data).toMatchObject({ caseId: "c1", companyId: "co1", currency: "USD" });
  });
  it("H: comparison is scoped to this case and excludes soft-deleted quotes", () => {
    expect(caseQuotationWhere("c1", "USD", "RECEIVED")).toEqual({ caseId: "c1", deletedAt: null, currency: "USD", status: "RECEIVED" });
    expect(caseQuotationWhere("c2").caseId).toBe("c2");
  });
  it("I/J: due OPEN tasks qualify; DONE tasks are excluded", () => {
    const where = dashboardWhere(new Date("2026-09-20T12:00:00"));
    expect(where.todayTasks.status).toBe("OPEN");
    expect(where.todayTasks.dueAt.lt).toEqual(new Date("2026-09-21T00:00:00"));
    expect(where.openTasks.status).toBe("OPEN");
  });
  it("K: changing stage creates one activity", async () => {
    expect((await post({ action: "case.update", caseId: "c1", stage: "RFQ_SENT" })).status).toBe(200);
    expect(db.dealActivity.create.mock.calls[0][0].data).toMatchObject({ caseId: "c1", type: "STAGE_CHANGED", metadata: { from: "NEW_REQUEST", to: "RFQ_SENT" } });
  });
  it("L: research import reuses a matching company and links it", async () => {
    db.company.findMany.mockResolvedValue([{ id: "co1", name: "Acme", website: "https://acme.com", roles: [] }]);
    db.company.update.mockResolvedValue({ id: "co1", name: "Acme" });
    expect((await post({ action: "research.import", caseId: "c1", name: "Acme", website: "https://acme.com", sourceUrl: "https://acme.com/catalog" })).status).toBe(201);
    expect(db.company.create).not.toHaveBeenCalled();
    expect(db.caseCompany.upsert).toHaveBeenCalledOnce();
  });
  it("reuses a company when the same brand is imported from a subdomain", async () => {
    db.company.findMany.mockResolvedValue([{ id: "co1", name: "Acme", website: "https://www.acme.com", roles: [] }]);
    db.company.update.mockResolvedValue({ id: "co1", name: "Acme" });
    expect((await post({ action: "research.import", caseId: "c1", name: "Acme", website: "https://shop.acme.com" })).status).toBe(201);
    expect(db.company.findMany.mock.calls[0][0].where.website.contains).toBe("acme.com");
    expect(db.company.create).not.toHaveBeenCalled();
  });
  it("M: manual import creates a new company and case link", async () => {
    expect((await post({ action: "research.import", caseId: "c1", name: "Acme", website: "https://acme.com", roleInCase: "SUPPLIER" })).status).toBe(201);
    expect(db.company.create).toHaveBeenCalledOnce();
    expect(db.caseCompany.upsert).toHaveBeenCalledOnce();
  });
  it("N: dashboard metrics are returned from four DB counts", async () => {
    db.tradeCase.count.mockResolvedValueOnce(3).mockResolvedValueOnce(2);
    db.tradeTask.count.mockResolvedValueOnce(1).mockResolvedValueOnce(4);
    expect(await loadDashboardMetrics(db)).toEqual({ activeCases: 3, pendingQuotations: 2, todayTasks: 1, openTasks: 4 });
    expect(db.tradeCase.count).toHaveBeenCalledTimes(2);
    expect(db.tradeTask.count).toHaveBeenCalledTimes(2);
  });
  it("RFQ template is deterministic and never sends a message", () => {
    const tradeCase = { title: "Feed", productName: "L-Threonine", productSpecification: "98.5%", quantity: "100", quantityUnit: "MT", destinationCountry: "İran" };
    expect(draftRfq(tradeCase, { name: "Anadolu", country: "Türkiye" }, "EMAIL").language).toBe("tr");
    expect(draftRfq(tradeCase, { name: "Acme", country: "Germany" }, "WHATSAPP").language).toBe("en");
  });
  it("rejects unauthenticated operational writes", async () => {
    currentUser.mockResolvedValue(null);
    expect((await post({ action: "case.create", title: "Denied" })).status).toBe(401);
    expect(db.tradeCase.create).not.toHaveBeenCalled();
  });
  it("Mina cannot delete a quotation", async () => {
    currentUser.mockResolvedValue(mina);
    expect((await post({ action: "quotation.delete", quotationId: "q1" })).status).toBe(403);
    expect(db.quotation.update).not.toHaveBeenCalled();
  });
  it("only ADMIN can delete an unlinked company", async () => {
    currentUser.mockResolvedValue(mina);
    expect((await DELETE_COMPANY({} as never, { params: Promise.resolve({ id: "co1" }) })).status).toBe(403);
    currentUser.mockResolvedValue(tefyik);
    db.company.findUnique.mockResolvedValue({ id: "co1", _count: { cases: 0, buyerCases: 0, quotations: 0, tasks: 0, activities: 0, documents: 0, rfqDrafts: 0 } });
    db.company.delete.mockResolvedValue({ id: "co1" });
    expect((await DELETE_COMPANY({} as never, { params: Promise.resolve({ id: "co1" }) })).status).toBe(200);
    expect(db.company.delete).toHaveBeenCalledOnce();
  });
});
