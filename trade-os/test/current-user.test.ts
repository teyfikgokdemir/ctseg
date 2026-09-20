import { afterEach, describe, expect, it, vi } from "vitest";

const { headerMock, upsertMock } = vi.hoisted(() => ({ headerMock: vi.fn(), upsertMock: vi.fn() }));
vi.mock("next/headers", () => ({ headers: headerMock }));
vi.mock("../lib/db", () => ({ db: { user: { upsert: upsertMock } } }));

import { currentUser } from "../lib/current-user";

const oldAllowlist = process.env.AUTHORIZED_EMAILS;
const oldAdmin = process.env.PRIMARY_ADMIN_EMAIL;
afterEach(() => {
  process.env.AUTHORIZED_EMAILS = oldAllowlist;
  process.env.PRIMARY_ADMIN_EMAIL = oldAdmin;
  vi.clearAllMocks();
});

describe("Cloudflare verified identity", () => {
  it("overwrites a stale Mina ADMIN role with MANAGER", async () => {
    process.env.AUTHORIZED_EMAILS = "teyfik@teyfikgokdemir.com,minafakhimi@icloud.com";
    process.env.PRIMARY_ADMIN_EMAIL = "teyfik@teyfikgokdemir.com";
    headerMock.mockResolvedValue({ get: () => "minafakhimi@icloud.com" });
    upsertMock.mockResolvedValue({ email: "minafakhimi@icloud.com", role: "MANAGER" });
    await currentUser();
    expect(upsertMock.mock.calls[0][0].update).toMatchObject({ name: "Mina Fakhimi", role: "MANAGER" });
  });
  it("rejects an email outside the allowlist", async () => {
    process.env.AUTHORIZED_EMAILS = "teyfik@teyfikgokdemir.com,minafakhimi@icloud.com";
    headerMock.mockResolvedValue({ get: () => "other@example.com" });
    expect(await currentUser()).toBeNull();
    expect(upsertMock).not.toHaveBeenCalled();
  });
});
