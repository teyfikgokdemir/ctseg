import { afterEach, describe, expect, it, vi } from "vitest";
import dns from "node:dns/promises";
import { createServer } from "node:http";
import { PDFParse } from "pdf-parse";
import { SourceFetcher, extractPdfText, safeConnectionLookup } from "../lib/research/source-fetcher";
import { extractEvidence } from "../lib/research/evidence-extractor";
import type { ParsedIntent } from "../lib/research/intent-parser";
import type { ResearchFinding } from "../lib/research/types";

afterEach(() => vi.restoreAllMocks());

describe("source boundaries", () => {
  function textPdf(message: string): Buffer {
    const stream = `BT /F1 16 Tf 40 150 Td (${message}) Tj ET`;
    const objects = [
      "<< /Type /Catalog /Pages 2 0 R >>",
      "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
      "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 300 200] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
      "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
      `<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream`,
    ];
    let pdf = "%PDF-1.4\n";
    const offsets = [0];
    objects.forEach((object, index) => { offsets.push(Buffer.byteLength(pdf)); pdf += `${index + 1} 0 obj\n${object}\nendobj\n`; });
    const xref = Buffer.byteLength(pdf);
    pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
    offsets.slice(1).forEach((offset) => { pdf += `${String(offset).padStart(10, "0")} 00000 n \n`; });
    pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
    return Buffer.from(pdf, "ascii");
  }

  it("extracts text from a real minimal PDF and releases the parser", async () => {
    const destroy = vi.spyOn(PDFParse.prototype, "destroy");
    const pdf = textPdf("L-Threonine Feed Grade");
    expect(await extractPdfText(pdf)).toContain("L-Threonine Feed Grade");
    expect(destroy).toHaveBeenCalled();
  });

  it("reports malformed PDFs without leaking parser errors", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response("not a PDF", { headers: { "content-type": "application/pdf" } }));
    expect((await SourceFetcher.fetch("https://8.8.8.8/file.pdf")).error).toBe("UNREADABLE_PDF");
  });
  it.each(["127.0.0.1", "169.254.169.254", "fd00::1"])("rejects connection-time DNS rebinding to %s", async (rebound) => {
    const lookup = vi.spyOn(dns, "lookup").mockImplementationOnce(async () => [{ address: "8.8.8.8", family: 4 }] as never)
      .mockImplementationOnce(async () => [{ address: rebound, family: rebound.includes(":") ? 6 : 4 }] as never);
    expect(await SourceFetcher.isSafeIP("rebind.example")).toBe(true);
    await expect(new Promise<void>((resolve, reject) => safeConnectionLookup("rebind.example", {}, (error) =>
      error ? reject(error) : resolve()))).rejects.toThrow("UNSAFE_ADDRESS");
    expect(lookup).toHaveBeenCalledTimes(2);
  });

  it("allows a public connection-time address", async () => {
    vi.spyOn(dns, "lookup").mockImplementation(async () => [{ address: "8.8.8.8", family: 4 }] as never);
    await expect(new Promise<string>((resolve, reject) => safeConnectionLookup("public.example", {}, (error, address) =>
      error ? reject(error) : resolve(String(address))))).resolves.toBe("8.8.8.8");
  });
  it("rejects a rebound redirect host before a local TCP connection", async () => {
    let connections = 0;
    const server = createServer((_request, response) => { connections++; response.end("private"); });
    await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
    try {
      const address = server.address();
      if (!address || typeof address === "string") throw new Error("missing test port");
      vi.spyOn(dns, "lookup").mockImplementationOnce(async () => [{ address: "8.8.8.8", family: 4 }] as never)
        .mockImplementationOnce(async () => [{ address: "127.0.0.1", family: 4 }] as never);
      const result = await SourceFetcher.fetch(`http://rebind.example:${address.port}/`, 0, 1000);
      expect(result.isLive).toBe(false);
      expect(connections).toBe(0);
    } finally { await new Promise<void>((resolve) => server.close(() => resolve())); }
  });
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
  it.each([
    { status: 302, headers: { location: "http://127.0.0.1/" } },
    { status: 404, headers: { "content-type": "text/html" } },
    { status: 200, headers: { "content-type": "image/png" } },
    { status: 200, headers: { "content-type": "text/html", "content-length": String(2 * 1024 * 1024 + 1) } },
  ])("cancels a response body on early exit: $status $headers", async ({ status, headers }) => {
    const cancel = vi.fn();
    const stream = new ReadableStream<Uint8Array>({ cancel });
    vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(stream, { status,
      headers: Object.fromEntries(Object.entries(headers).filter(([, value]) => value !== undefined)) }));
    await SourceFetcher.fetch("https://8.8.8.8/");
    expect(cancel).toHaveBeenCalledOnce();
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
  it("does not treat an educational product mention as a commercial claim", () => {
    const candidate = finding("L-Threonine is used in feed.");
    extractEvidence(candidate, intent);
    expect(candidate.productConfirmed?.state).not.toBe("CONFIRMED");
  });
  it("confirms a direct company product listing", () => {
    const candidate = finding("Our products include L-Threonine.");
    extractEvidence(candidate, intent);
    expect(candidate.productConfirmed?.state).toBe("CONFIRMED");
  });
  it("confirms an explicit product-grade specification", () => {
    const candidate = finding("L-Threonine Feed Grade 98.5%.");
    extractEvidence(candidate, intent);
    expect(candidate.productConfirmed?.state).toBe("CONFIRMED");
    expect(candidate.gradeConfirmed?.state).toBe("CONFIRMED");
  });
  it("does not attach a distant grade category to the product", () => {
    const candidate = finding(`Feed Grade Products. ${"Other catalogue material. ".repeat(300)} Our products include L-Threonine.`);
    extractEvidence(candidate, intent);
    expect(candidate.gradeConfirmed?.state).not.toBe("CONFIRMED");
  });
  it("does not attribute a third-party manufacturer claim to the page company", () => {
    const candidate = finding("Our products include L-Threonine. Manufactured by ABC Chemicals.");
    candidate.companyName = "XYZ Trading";
    extractEvidence(candidate, intent);
    expect(candidate.role?.state).not.toBe("CONFIRMED");
  });
  it("confirms an explicit company manufacturer claim", () => {
    const candidate = finding("XYZ Chemicals is a manufacturer of L-Threonine.");
    candidate.companyName = "XYZ Chemicals";
    extractEvidence(candidate, intent);
    expect(candidate.role?.state).toBe("CONFIRMED");
  });
  it("does not use a snippet-only supplier role", () => {
    const candidate = finding("Our products include L-Threonine.");
    candidate.snippet = "XYZ is a supplier and manufacturer";
    extractEvidence(candidate, intent);
    expect(candidate.role?.state).not.toBe("CONFIRMED");
  });
  it("separates product from grade and role", () => {
    const candidate = finding("We offer L-Threonine for animal nutrition.");
    extractEvidence(candidate, intent);
    expect(candidate.productConfirmed?.state).toBe("CONFIRMED");
    expect(candidate.gradeConfirmed).toBeUndefined();
    expect(candidate.role).toBeUndefined();
    expect(candidate.negativeSignals).toContain("ROLE_NOT_PROVEN");
  });
  it("does not confirm a bare product mention without trade context", () => {
    const candidate = finding("The article briefly mentions L-Threonine in passing.");
    extractEvidence(candidate, intent);
    expect(candidate.productConfirmed).toBeUndefined();
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
