import { runResearch } from '../lib/research/orchestrator';
﻿import { describe, it, expect } from "vitest";
import { SourceFetcher } from "../lib/research/source-fetcher";
import { parseIntent } from "../lib/research/intent-parser";

describe("SourceFetcher SSRF Protection", () => {
  it("should reject localhost and private IP strings", async () => {
    expect(SourceFetcher.isSafeUrl("http://localhost")).toBe(false);
    expect(await SourceFetcher.isSafeIP("127.0.0.1")).toBe(false);
    expect(await SourceFetcher.isSafeIP("169.254.169.254")).toBe(false);
    expect(SourceFetcher.isSafeUrl("file:///etc/passwd")).toBe(false);
  });
});

describe("Intent Parser", () => {
  it("should trigger clarification on ambiguous request", async () => {
    const res = await parseIntent("İran için L-Threonine araştır");
    console.log(res);
    expect(res.clarificationRequired).toBe(true);
  });
});

describe('Global Fetch Budget', () => {
  it('QUICK cannot fetch > 5 and DEEP cannot fetch > 15', async () => {
    // QUICK limit
    const quickReq = { rawRequest: 'test', type: 'SOURCING', mode: 'QUICK', maxQueries: 12, budgetTracker: { fetchesUsed: 0 } };
    const quickRun = await runResearch(quickReq as any);
    expect(quickReq.budgetTracker.fetchesUsed).toBeLessThanOrEqual(5);

    // DEEP limit
    const deepReq = { rawRequest: 'test', type: 'SOURCING', mode: 'DEEP', maxQueries: 12, budgetTracker: { fetchesUsed: 0 } };
    const deepRun = await runResearch(deepReq as any);
    expect(deepReq.budgetTracker.fetchesUsed).toBeLessThanOrEqual(15);
  });
});
