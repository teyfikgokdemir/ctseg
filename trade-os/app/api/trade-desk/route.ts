import { NextRequest, NextResponse } from "next/server";
import { CaseCompanyRole, CaseCompanyStatus, CaseType, CompanyRole, DealStage, QuotationStatus, RfqChannel, TradeDocumentType, TradePriority, TradeTaskStatus, type Prisma } from "@prisma/client";
import { currentUser } from "@/lib/current-user";
import { db } from "@/lib/db";
import { companyIdentity, date, draftRfq, enumValue, money, nextReference, optionalText, text, validUrl } from "@/lib/trade-desk";

type Tx = Prisma.TransactionClient;
const bad = (error: string, status = 400) => NextResponse.json({ error }, { status });

async function caseExists(tx: Tx, caseId: string) {
  return tx.tradeCase.findUnique({ where: { id: caseId }, select: { id: true } });
}

async function resolveCompany(tx: Tx, input: Record<string, unknown>) {
  const name = text(input.name, 200);
  if (!name) throw new Error("Firma adı gerekli.");
  const website = input.website ? validUrl(input.website) : null;
  if (input.website && !website) throw new Error("Geçerli bir HTTP(S) web adresi gerekli.");
  const identity = companyIdentity(name, website);
  await tx.$executeRaw`SELECT pg_advisory_xact_lock(hashtext(${identity}))`;
  const candidates = await tx.company.findMany({ where: website ? { website: { contains: new URL(website).hostname.replace(/^www\./, ""), mode: "insensitive" } } : { name: { equals: name, mode: "insensitive" } }, select: { id: true, name: true, website: true, roles: true } });
  const existing = candidates.find((candidate) => companyIdentity(candidate.name, candidate.website) === identity);
  const role = enumValue(CompanyRole, input.role, CompanyRole.OTHER);
  if (existing) return tx.company.update({ where: { id: existing.id }, data: {
    roles: { set: [...new Set([...existing.roles, role])] },
    email: optionalText(input.email, 320) || undefined,
    phone: optionalText(input.phone, 80) || undefined,
  } });
  return tx.company.create({ data: {
    name, website, country: optionalText(input.country, 100), city: optionalText(input.city, 100),
    type: "OTHER", roles: [role], email: optionalText(input.email, 320), phone: optionalText(input.phone, 80),
    whatsapp: optionalText(input.whatsapp, 80), address: optionalText(input.address, 500), notes: optionalText(input.notes, 4000),
  } });
}

async function linkCompany(tx: Tx, caseId: string, companyId: string, input: Record<string, unknown>, userEmail: string) {
  if (!(await caseExists(tx, caseId))) throw new Error("Vaka bulunamadı.");
  const company = await tx.company.findUnique({ where: { id: companyId } });
  if (!company) throw new Error("Firma bulunamadı.");
  const existing = await tx.caseCompany.findUnique({ where: { caseId_companyId: { caseId, companyId } } });
  const roleInCase = enumValue(CaseCompanyRole, input.roleInCase, CaseCompanyRole.SUPPLIER);
  const link = await tx.caseCompany.upsert({ where: { caseId_companyId: { caseId, companyId } },
    create: { caseId, companyId, roleInCase, source: optionalText(input.source, 2000), notes: optionalText(input.notes, 4000) },
    update: { roleInCase, notes: optionalText(input.notes, 4000) || undefined, source: optionalText(input.source, 2000) || undefined },
  });
  if (!existing) await tx.dealActivity.create({ data: { caseId, companyId, userEmail, type: "COMPANY_ADDED", summary: `${company.name} vakaya eklendi.` } });
  return link;
}

export async function POST(request: NextRequest) {
  const user = await currentUser();
  if (!user) return bad("Yetkisiz.", 401);
  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return bad("Geçersiz JSON."); }
  const action = text(body.action, 80);
  try {
    switch (action) {
      case "case.create": {
        const title = text(body.title, 200);
        if (!title) return bad("Vaka başlığı gerekli.");
        const item = await db.$transaction(async (tx) => {
          const created = await tx.tradeCase.create({ data: {
            reference: nextReference(), type: enumValue(CaseType, body.type, CaseType.SOURCING), title,
            rawRequest: text(body.rawRequest, 4000) || title, productName: optionalText(body.productName, 200),
            productSpecification: optionalText(body.productSpecification, 1000), quantity: optionalText(body.quantity, 100),
            quantityUnit: optionalText(body.quantityUnit, 40), frequency: optionalText(body.frequency, 80),
            sourceCountry: optionalText(body.sourceCountry, 100), destinationCountry: optionalText(body.destinationCountry, 100),
            destination: optionalText(body.destinationCountry, 100), transportModes: [], createdById: user.id,
            ownerUserEmail: user.email, priority: enumValue(TradePriority, body.priority, TradePriority.NORMAL),
            nextAction: optionalText(body.nextAction, 500), nextActionAt: date(body.nextActionAt), notes: optionalText(body.notes, 4000),
          } });
          await tx.dealActivity.create({ data: { caseId: created.id, userEmail: user.email, type: "CASE_CREATED", summary: "Vaka oluşturuldu." } });
          return created;
        });
        return NextResponse.json({ case: item }, { status: 201 });
      }
      case "case.update": {
        const caseId = text(body.caseId);
        const existing = await db.tradeCase.findUnique({ where: { id: caseId } });
        if (!existing) return bad("Vaka bulunamadı.", 404);
        if (body.ownerUserEmail && !(await db.user.findFirst({ where: { email: text(body.ownerUserEmail, 320).toLowerCase(), active: true } }))) return bad("Sorumlu kullanıcı bulunamadı.");
        const stage = body.stage ? enumValue(DealStage, body.stage, existing.stage) : existing.stage;
        const item = await db.$transaction(async (tx) => {
          const updated = await tx.tradeCase.update({ where: { id: caseId }, data: {
            stage, title: body.title === undefined ? undefined : text(body.title, 200),
            productName: body.productName === undefined ? undefined : optionalText(body.productName, 200),
            productSpecification: body.productSpecification === undefined ? undefined : optionalText(body.productSpecification, 1000),
            quantity: body.quantity === undefined ? undefined : optionalText(body.quantity, 100),
            quantityUnit: body.quantityUnit === undefined ? undefined : optionalText(body.quantityUnit, 40),
            frequency: body.frequency === undefined ? undefined : optionalText(body.frequency, 80),
            sourceCountry: body.sourceCountry === undefined ? undefined : optionalText(body.sourceCountry, 100),
            destinationCountry: body.destinationCountry === undefined ? undefined : optionalText(body.destinationCountry, 100),
            ownerUserEmail: body.ownerUserEmail === undefined ? undefined : optionalText(body.ownerUserEmail, 320)?.toLowerCase(),
            priority: body.priority === undefined ? undefined : enumValue(TradePriority, body.priority, existing.priority),
            nextAction: body.nextAction === undefined ? undefined : optionalText(body.nextAction, 500),
            nextActionAt: body.nextActionAt === undefined ? undefined : date(body.nextActionAt),
            notes: body.notes === undefined ? undefined : optionalText(body.notes, 4000),
            closedAt: stage === DealStage.COMPLETED || stage === DealStage.LOST ? existing.closedAt || new Date() : null,
          } });
          if (stage !== existing.stage) await tx.dealActivity.create({ data: { caseId, userEmail: user.email, type: "STAGE_CHANGED", summary: `${existing.stage} → ${stage}`, metadata: { from: existing.stage, to: stage } } });
          return updated;
        });
        return NextResponse.json({ case: item });
      }
      case "company.create": {
        const company = await db.$transaction((tx) => resolveCompany(tx, body));
        return NextResponse.json({ company }, { status: 201 });
      }
      case "company.update": {
        const id = text(body.companyId);
        if (!(await db.company.findUnique({ where: { id } }))) return bad("Firma bulunamadı.", 404);
        const company = await db.company.update({ where: { id }, data: {
          name: body.name === undefined ? undefined : text(body.name, 200),
          country: body.country === undefined ? undefined : optionalText(body.country, 100),
          city: body.city === undefined ? undefined : optionalText(body.city, 100),
          email: body.email === undefined ? undefined : optionalText(body.email, 320),
          phone: body.phone === undefined ? undefined : optionalText(body.phone, 80),
          whatsapp: body.whatsapp === undefined ? undefined : optionalText(body.whatsapp, 80),
          address: body.address === undefined ? undefined : optionalText(body.address, 500),
          notes: body.notes === undefined ? undefined : optionalText(body.notes, 4000),
        } });
        return NextResponse.json({ company });
      }
      case "company.link": {
        const link = await db.$transaction((tx) => linkCompany(tx, text(body.caseId), text(body.companyId), body, user.email));
        return NextResponse.json({ link }, { status: 201 });
      }
      case "research.import": {
        const sourceUrl = body.sourceUrl ? validUrl(body.sourceUrl) : null;
        if (body.sourceUrl && !sourceUrl) return bad("Geçerli kaynak URL gerekli.");
        const result = await db.$transaction(async (tx) => {
          const company = await resolveCompany(tx, body);
          const link = await linkCompany(tx, text(body.caseId), company.id, { ...body, source: sourceUrl || "manual-external-research" }, user.email);
          return { company, link };
        });
        return NextResponse.json(result, { status: 201 });
      }
      case "contact.create": {
        const companyId = text(body.companyId);
        const name = text(body.name, 200);
        if (!name || !(await db.company.findUnique({ where: { id: companyId } }))) return bad("Firma ve kişi adı gerekli.");
        if (body.caseId && !(await db.caseCompany.findUnique({ where: { caseId_companyId: { caseId: text(body.caseId), companyId } } }))) return bad("Firma önce vakaya bağlanmalı.");
        const contact = await db.$transaction(async (tx) => {
          const created = await tx.contact.create({ data: { companyId, name, title: optionalText(body.title, 200), email: optionalText(body.email, 320), phone: optionalText(body.phone, 80), whatsapp: optionalText(body.whatsapp, 80), preferredChannel: body.preferredChannel ? enumValue(RfqChannel, body.preferredChannel, RfqChannel.EMAIL) : null, notes: optionalText(body.notes, 2000) } });
          if (body.caseId && await caseExists(tx, text(body.caseId))) await tx.dealActivity.create({ data: { caseId: text(body.caseId), companyId, userEmail: user.email, type: "CONTACT_ADDED", summary: `${name} iletişim kişisi eklendi.` } });
          return created;
        });
        return NextResponse.json({ contact }, { status: 201 });
      }
      case "quotation.create": {
        const caseId = text(body.caseId), companyId = text(body.companyId);
        const price = money(body.unitPrice), productName = text(body.productName, 200), currency = text(body.currency, 8).toUpperCase();
        if (!price || !productName || !/^[A-Z]{3}$/.test(currency)) return bad("Ürün, geçerli fiyat ve para birimi gerekli.");
        if (!(await db.caseCompany.findUnique({ where: { caseId_companyId: { caseId, companyId } } }))) return bad("Firma önce vakaya bağlanmalı.");
        const contactId = optionalText(body.contactId);
        if (contactId && !(await db.contact.findFirst({ where: { id: contactId, companyId } }))) return bad("İletişim kişisi firmaya ait değil.");
        const result = await db.$transaction(async (tx) => {
          const quotation = await tx.quotation.create({ data: {
            caseId, companyId, contactId, quotationDate: date(body.quotationDate) || new Date(), validUntil: date(body.validUntil),
            currency, unitPrice: price, unit: text(body.unit, 40) || "unit", quantity: money(body.quantity),
            quantityUnit: optionalText(body.quantityUnit, 40), totalPrice: money(body.totalPrice),
            incoterm: optionalText(body.incoterm, 40), deliveryLocation: optionalText(body.deliveryLocation, 200),
            moq: optionalText(body.moq, 100), leadTimeDays: body.leadTimeDays ? Number(body.leadTimeDays) : null,
            paymentTerms: optionalText(body.paymentTerms, 500), originCountry: optionalText(body.originCountry, 100),
            productName, specification: optionalText(body.specification, 1000), notes: optionalText(body.notes, 4000),
          } });
          await tx.caseCompany.update({ where: { caseId_companyId: { caseId, companyId } }, data: { status: CaseCompanyStatus.QUOTED } });
          await tx.dealActivity.create({ data: { caseId, companyId, userEmail: user.email, type: "QUOTATION_ADDED", summary: `${productName} teklifi kaydedildi.` } });
          return quotation;
        });
        return NextResponse.json({ quotation: result }, { status: 201 });
      }
      case "quotation.update": {
        const id = text(body.quotationId);
        const existing = await db.quotation.findUnique({ where: { id } });
        if (!existing || existing.deletedAt) return bad("Teklif bulunamadı.", 404);
        const quotation = await db.quotation.update({ where: { id }, data: { status: enumValue(QuotationStatus, body.status, existing.status), notes: body.notes === undefined ? undefined : optionalText(body.notes, 4000) } });
        return NextResponse.json({ quotation });
      }
      case "quotation.delete": {
        if (user.role !== "ADMIN") return bad("Yalnız yönetici teklif silebilir.", 403);
        const quotation = await db.quotation.update({ where: { id: text(body.quotationId) }, data: { deletedAt: new Date() } });
        return NextResponse.json({ quotation });
      }
      case "task.create": {
        const title = text(body.title, 200), caseId = optionalText(body.caseId), companyId = optionalText(body.companyId);
        if (!title) return bad("Görev başlığı gerekli.");
        if (caseId && !(await db.tradeCase.findUnique({ where: { id: caseId } }))) return bad("Vaka bulunamadı.");
        if (companyId && !(await db.company.findUnique({ where: { id: companyId } }))) return bad("Firma bulunamadı.");
        if (caseId && companyId && !(await db.caseCompany.findUnique({ where: { caseId_companyId: { caseId, companyId } } }))) return bad("Firma önce vakaya bağlanmalı.");
        const assignedToEmail = text(body.assignedToEmail, 320).toLowerCase() || user.email;
        if (!(await db.user.findFirst({ where: { email: assignedToEmail, active: true } }))) return bad("Sorumlu kullanıcı bulunamadı.");
        const task = await db.$transaction(async (tx) => {
          const created = await tx.tradeTask.create({ data: { title, caseId, companyId, description: optionalText(body.description, 2000), dueAt: date(body.dueAt), priority: enumValue(TradePriority, body.priority, TradePriority.NORMAL), assignedToEmail, createdByEmail: user.email } });
          if (caseId) await tx.dealActivity.create({ data: { caseId, companyId, userEmail: user.email, type: "TASK_CREATED", summary: `${title} görevi oluşturuldu.` } });
          return created;
        });
        return NextResponse.json({ task }, { status: 201 });
      }
      case "task.complete": {
        const id = text(body.taskId);
        const existing = await db.tradeTask.findUnique({ where: { id } });
        if (!existing) return bad("Görev bulunamadı.", 404);
        const task = await db.$transaction(async (tx) => {
          const updated = await tx.tradeTask.update({ where: { id }, data: { status: TradeTaskStatus.DONE, completedAt: new Date() } });
          if (existing.caseId && existing.status !== TradeTaskStatus.DONE) await tx.dealActivity.create({ data: { caseId: existing.caseId, companyId: existing.companyId, userEmail: user.email, type: "TASK_COMPLETED", summary: `${existing.title} tamamlandı.` } });
          return updated;
        });
        return NextResponse.json({ task });
      }
      case "document.create": {
        const caseId = optionalText(body.caseId), companyId = optionalText(body.companyId), quotationId = optionalText(body.quotationId);
        const name = text(body.name, 300);
        if (!name || (!caseId && !companyId && !quotationId)) return bad("Belge adı ve bağlantısı gerekli.");
        const sourceUrl = body.sourceUrl ? validUrl(body.sourceUrl) : null;
        if (body.sourceUrl && !sourceUrl) return bad("Geçerli kaynak URL gerekli.");
        if (caseId && !(await db.tradeCase.findUnique({ where: { id: caseId } }))) return bad("Vaka bulunamadı.");
        if (caseId && companyId && !(await db.caseCompany.findUnique({ where: { caseId_companyId: { caseId, companyId } } }))) return bad("Firma önce vakaya bağlanmalı.");
        if (quotationId && !(await db.quotation.findFirst({ where: { id: quotationId, deletedAt: null, caseId: caseId || undefined, companyId: companyId || undefined } }))) return bad("Teklif bağlantısı bulunamadı.");
        const document = await db.$transaction(async (tx) => {
          const created = await tx.tradeDocument.create({ data: { caseId, companyId, quotationId, name, type: enumValue(TradeDocumentType, body.type, TradeDocumentType.OTHER), sourceUrl, storageRef: optionalText(body.storageRef, 1000), notes: optionalText(body.notes, 2000), uploadedByEmail: user.email } });
          if (caseId) await tx.dealActivity.create({ data: { caseId, companyId, userEmail: user.email, type: "DOCUMENT_ADDED", summary: `${name} belge kaydı eklendi.` } });
          return created;
        });
        return NextResponse.json({ document }, { status: 201 });
      }
      case "rfq.prepare": {
        const caseId = text(body.caseId), companyId = text(body.companyId);
        const tradeCase = await db.tradeCase.findUnique({ where: { id: caseId } });
        const company = await db.company.findUnique({ where: { id: companyId } });
        if (!tradeCase || !company || !(await db.caseCompany.findUnique({ where: { caseId_companyId: { caseId, companyId } } }))) return bad("Firma önce vakaya bağlanmalı.");
        const draft = draftRfq(tradeCase, company, enumValue(RfqChannel, body.channel, RfqChannel.EMAIL));
        const saved = await db.$transaction(async (tx) => {
          const created = await tx.rfqDraft.create({ data: { caseId, companyId, ...draft, createdByEmail: user.email } });
          await tx.dealActivity.create({ data: { caseId, companyId, userEmail: user.email, type: "RFQ_PREPARED", summary: `${company.name} için RFQ taslağı hazırlandı.` } });
          return created;
        });
        return NextResponse.json({ draft: saved }, { status: 201 });
      }
      default: return bad("Bilinmeyen işlem.");
    }
  } catch (error) {
    console.error("Trade Desk operation failed", error);
    return bad(error instanceof Error && /gerekli|bulunamadı|ait değil|bağlanmalı|Geçerli/.test(error.message) ? error.message : "İşlem tamamlanamadı.", 400);
  }
}
