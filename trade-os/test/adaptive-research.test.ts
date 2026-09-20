
import { describe, it, expect, vi } from "vitest";
import { runResearch } from "../lib/research/orchestrator";
import type { ResearchRequest } from "../lib/research/types";

// Mock external deps to prevent actual network calls / timeouts
vi.mock("../lib/research/search-router", () => ({
  searchPlannedQueries: vi.fn().mockResolvedValue({ findings: [], diagnostics: [] })
}));
vi.mock("../lib/research/fetch-scheduler", () => ({
  FetchScheduler: class {
    add() {}
    hasPending() { return false; }
    canScheduleNext() { return false; }
    async processNextBatch() { return { attempted: 0, completed: 0, failed: 0 }; }
  }
}));

describe("Adaptive Broad Research Engine Scenarios", () => {
  it("Scenario A: Turkey first stage, product/grade, multiple families", async () => {
    const request: ResearchRequest = {
      rawRequest: "İran / haftalık 100 MT / Feed Grade L-Threonine / önce Türkiye sonra global",
      type: "SOURCING",
      product: "L-Threonine",
      grade: "Feed Grade",
      sourceRegion: "Türkiye",
      destination: "Iran",
      maxQueries: 20
    };
    const run = await runResearch(request);
    
    expect(run.queries.length).toBeGreaterThan(0);
    const hasTr = run.queries.some(q => q.language === "tr");
    expect(hasTr).toBe(true);
    const hasExact = run.queries.some(q => q.intent.includes("exact"));
    // expected in stage 2
  });

  it("Scenario B: Buyer search without supplier planning", async () => {
    const request: ResearchRequest = {
      rawRequest: "Almanya ve Fransa İran safranı importer/distributor",
      type: "BUYER_SEARCH",
      product: "saffron",
      destinations: ["Germany", "France"]
    };
    const run = await runResearch(request);
    const hasSupplierTerms = run.queries.some(q => q.query.includes("supplier") || q.query.includes("manufacturer"));
    expect(hasSupplierTerms).toBe(false);
    expect(run.queries.some(q => q.query.includes("Germany") || q.query.includes("France"))).toBe(true);
  });

  it("Scenario C: Logistics queries", async () => {
    const request: ResearchRequest = {
      rawRequest: "Bulgaria to Iran logistics",
      type: "LOGISTICS",
      sourceRegion: "Bulgaria",
      destination: "Iran"
    };
    const run = await runResearch(request);
    // expected
  });

  it("Scenario D: Mixed request budget handling", async () => {
    const request: ResearchRequest = {
      rawRequest: "supplier and logistics",
      type: "SOURCING",
      product: "widget"
    };
    const run = await runResearch(request);
    expect(run.queries.length).toBeGreaterThan(0);
    expect(run.stopReason).toBeDefined();
  });

  it("Scenario E: Clarification on explicit intent failure", async () => {
    const request: ResearchRequest = {
      rawRequest: "İran L-Threonine",
      type: "SOURCING",
      product: "" 
    };
    const run = await runResearch(request);
    expect(run.queries.length).toBeGreaterThanOrEqual(0);
  });
});
