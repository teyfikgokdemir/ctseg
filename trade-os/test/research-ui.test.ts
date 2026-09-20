import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("single research interaction", () => {
  it("keeps mode, round and budget controls out of the new case UI", () => {
    const source = readFileSync(new URL("../app/cases/new/research-client.tsx", import.meta.url), "utf8");
    expect(source).not.toMatch(/Hızlı Araştırma|Derin Araştırma|Round |İkinci tur|quick-modes|preferredType|researchMode/);
    expect(source).toContain("Örn. İran için haftalık 100 MT Feed Grade L-Threonine");
    expect(source).toContain("Araştırılıyor...");
  });
});
