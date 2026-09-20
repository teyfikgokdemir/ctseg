import { describe, expect, it } from "vitest";
import { domainKey, resolveCompanies } from "../lib/research/company-resolver";
import type { ResearchFinding } from "../lib/research/types";

function finding(url: string, companyName?: string): ResearchFinding {
  return { url, title: "test", snippet: "", domain: new URL(url).hostname, adapter: "test", query: "test",
    language: "en", freshnessScore: 0, verificationScore: 0, historicalOnly: false, companyName };
}

describe("company identity", () => {
  it.each([
    ["example.com", "example.com"],
    ["supplier.com.tr", "supplier.com.tr"],
    ["supplier.co.uk", "supplier.co.uk"],
    ["sub.company.co.uk", "company.co.uk"],
  ])("normalizes %s to %s", (input, expected) => {
    expect(domainKey(input)).toBe(expected);
  });
  it("keeps two named brands on one parent domain distinct", () => {
    const companies = resolveCompanies([
      finding("https://parent.co.uk/alpha", "Alpha Trade"),
      finding("https://parent.co.uk/beta", "Beta Foods"),
    ]);
    expect(companies).toHaveLength(2);
    expect(new Set(companies.map((item) => item.key)).size).toBe(2);
  });
  it("merges the same named entity across subdomains", () => {
    expect(resolveCompanies([
      finding("https://www.supplier.com.tr/a", "Supplier Ltd"),
      finding("https://catalog.supplier.com.tr/b", "Supplier Ltd"),
    ])).toHaveLength(1);
  });
  it("retains negative source signals for final review", () => {
    const source = finding("https://supplier.co.uk/product", "Supplier Ltd");
    source.negativeSignals = ["NOT_FOUND", "ROLE_NOT_PROVEN"];
    expect(resolveCompanies([source])[0].negativeSignals).toEqual(["NOT_FOUND", "ROLE_NOT_PROVEN"]);
  });
});
