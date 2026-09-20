import { describe, expect, it, vi, beforeEach } from "vitest";

const { currentUser, findUnique, remove } = vi.hoisted(() => ({ currentUser: vi.fn(), findUnique: vi.fn(), remove: vi.fn() }));
vi.mock("../lib/current-user", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../lib/current-user")>();
  return { ...actual, currentUser };
});
vi.mock("../lib/db", () => ({ db: { tradeCase: { findUnique, delete: remove } } }));

import { identityForEmail } from "../lib/current-user";
import { DELETE } from "../app/api/cases/[id]/route";

beforeEach(() => { currentUser.mockReset(); findUnique.mockReset(); remove.mockReset(); });

describe("authenticated identity and deletion", () => {
  it("maps both approved emails without making Mina an admin", () => {
    expect(identityForEmail("teyfik@teyfikgokdemir.com", "teyfik@teyfikgokdemir.com")).toEqual({ name: "Teyfik Gökdemir", firstName: "Teyfik", role: "ADMIN" });
    expect(identityForEmail("minafakhimi@icloud.com", "minafakhimi@icloud.com")?.role).toBe("MANAGER");
    expect(identityForEmail("someone@example.com")).toBeNull();
  });
  it("returns 401 to anonymous users", async () => {
    currentUser.mockResolvedValue(null);
    expect((await DELETE({} as never, { params: Promise.resolve({ id: "case" }) })).status).toBe(401);
  });
  it("returns 403 to Mina", async () => {
    currentUser.mockResolvedValue({ role: "MANAGER", email: "minafakhimi@icloud.com" });
    expect((await DELETE({} as never, { params: Promise.resolve({ id: "case" }) })).status).toBe(403);
    expect(remove).not.toHaveBeenCalled();
  });
  it("allows Teyfik as admin", async () => {
    currentUser.mockResolvedValue({ role: "ADMIN", email: "teyfik@teyfikgokdemir.com" });
    findUnique.mockResolvedValue({ id: "case" });
    remove.mockResolvedValue({ id: "case" });
    expect((await DELETE({} as never, { params: Promise.resolve({ id: "case" }) })).status).toBe(200);
    expect(remove).toHaveBeenCalledOnce();
  });
});
