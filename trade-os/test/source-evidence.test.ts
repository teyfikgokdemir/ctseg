import { afterEach, describe, expect, it, vi } from "vitest";
import { SourceFetcher } from "../lib/research/source-fetcher";
import { extractEvidence } from "../lib/research/evidence-extractor";
import type { ParsedIntent } from "../lib/research/intent-parser";
import type { ResearchFinding } from "../lib/research/types";

afterEach(() => vi.restoreAllMocks());

describe("source boundaries", () => {
  it("rejects private, metadata, mapped IPv6 and unsupported schemes", async () => {
    for (const url of ["file:///etc/passwd", "http://localhost", "http://127.1.2.3", "http://10.1.1.1", "http://169.254.169.254", "http://[::ffff:127.0.0.1]"]) {
      expect(SourceFetcher.isSafeUrl(url)).toBe(false);
    }
    expect(await SourceFetcher.isSafeIP("fd00::1")).toBe(false);
    expect(await SourceFetcher.isSafeIP("fe80::1")).toBe(false);
  });

  it("revalidates redirect destinations", async () => {
    const mocked = vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(null, { status: 302, headers: { location: "http://169.254.169.254/latest/meta-data" } }));
    const result = await SourceFetcher.fetch("https://8.8.8.8/");
    expect(result.error).toBe("UNSAFE_URL");
    expect(mocked).toHaveBeenCalledTimes(1);
  });

  it.each([["text/html", 2 * 1024 * 1024], ["application/pdf", 15 * 1024 * 1024]])("rejects oversized %s before reading", async (type, limit) => {
    const stream = new ReadableStream<Uint8Array>({ start(controller) { controller.enqueue(new Uint8Array(1)); controller.close(); } });
    vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(stream, { headers: { "content-type": type as string, "content-length": String((limit as number) + 1) } }));
    const result = await SourceFetcher.fetch("https://8.8.8.8/");
    expect(result.error).toBe("SOURCE_TOO_LARGE");
  });

  it("stops an oversized streamed HTML body without Content-Length", async () => {
    const stream = new ReadableStream<Uint8Array>({ start(controller) {
      controller.enqueue(new Uint8Array(1024 * 1024));
      controller.enqueue(new Uint8Array(1024 * 1024 + 1));
      controller.close();
    } });
    vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(stream, { headers: { "content-type": "text/html" } }));
    expect((await SourceFetcher.fetch("https://8.8.8.8/")).error).toBe("SOURCE_TOO_LARGE");
  });

  it("distinguishes unsupported content", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response("binary", { headers: { "content-type": "image/png" } }));
    expect((await SourceFetcher.fetch("https://8.8.8.8/")).error).toBe("UNSUPPORTED_CONTENT_TYPE");
  });

  it("decodes Turkish UTF-8 content", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response("<html><body>İşletme şeker pancarı üreticisi</body></html>", { headers: { "content-type": "text/html; charset=utf-8" } }));
    const result = await SourceFetcher.fetch("https://8.8.8.8/");
    expect(result.text).toContain("İşletme şeker pancarı üreticisi");
  });
});

const intent = { product: "L-Threonine", grade: "Feed Grade" } as ParsedIntent;
function finding(text?: string): ResearchFinding {
  return { url: "https://supplier.com/product", title: "Supplier", domain: "supplier.com", adapter: "test", query: "test", language: "en",
    freshnessScore: 80, historicalOnly: false, verificationScore: 0,
    fetchedContent: text === undefined ? undefined : { isLive: true, status: 200, type: "HTML", text } };
}

describe("evidence boundaries", () => {
  it("separates product from grade and role", () => {
    const candidate = finding("We offer L-Threonine for animal nutrition.");
    extractEvidence(candidate, intent);
    expect(candidate.productConfirmed?.state).toBe("CONFIRMED");
    expect(candidate.gradeConfirmed).toBeUndefined();
    expect(candidate.role).toBeUndefined();
    expect(candidate.negativeSignals).toContain("ROLE_NOT_PROVEN");
  });
  it("does not confirm snippet-only discovery", () => {
    const candidate = finding(); candidate.snippet = "L-Threonine Feed Grade manufacturer";
    extractEvidence(candidate, intent);
    expect(candidate.productConfirmed).toBeUndefined();
  });
  it("confirms product, grade and contextual role from live content", () => {
    const candidate = finding("Supplier Ltd is a manufacturer of L-Threonine Feed Grade for animal feed.");
    candidate.companyName = "Supplier Ltd";
    extractEvidence(candidate, intent);
    expect(candidate.productConfirmed?.state).toBe("CONFIRMED");
    expect(candidate.gradeConfirmed?.state).toBe("CONFIRMED");
    expect(candidate.role?.value).toBe("MANUFACTURER");
  });
  it("keeps 404 as negative evidence", () => {
    const candidate = finding(); candidate.fetchedContent = { isLive: false, status: 404 };
    extractEvidence(candidate, intent);
    expect(candidate.negativeSignals).toContain("NOT_FOUND");
  });
});
