import dns from "node:dns/promises";
import net from "node:net";
import { Agent } from "undici";
import * as cheerio from "cheerio";
import { PDFParse } from "pdf-parse";

const HTML_LIMIT = 2 * 1024 * 1024;
const PDF_LIMIT = 15 * 1024 * 1024;

export async function extractPdfText(data: Buffer, timeoutMs = 5000): Promise<string> {
  const parser = new PDFParse({ data });
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    const result = await Promise.race([
      parser.getText({ first: 10 }),
      new Promise<never>((_, reject) => { timer = setTimeout(() => reject(new Error("PDF_TIMEOUT")), timeoutMs); }),
    ]);
    return result.text.trim();
  } finally {
    if (timer) clearTimeout(timer);
    await parser.destroy();
  }
}

function publicAddress(address: string): boolean {
  const ip = address.split("%")[0].toLowerCase();
  if (net.isIP(ip) === 4) {
    const [a, b, c] = ip.split(".").map(Number);
    return !(a === 0 || a === 10 || a === 127 || a === 169 && b === 254 ||
      a === 172 && b >= 16 && b <= 31 || a === 192 && b === 168 ||
      a === 100 && b >= 64 && b <= 127 || a === 192 && b === 0 && c === 0 ||
      a === 192 && b === 0 && c === 2 || a === 198 && b >= 18 && b <= 19 ||
      a === 198 && b === 51 && c === 100 || a === 203 && b === 0 && c === 113 || a >= 224);
  }
  if (net.isIP(ip) !== 6) return false;
  if (ip === "::" || ip === "::1" || ip.startsWith("fc") || ip.startsWith("fd") ||
    /^fe[89ab]/.test(ip) || ip.startsWith("2001:db8:")) return false;
  const mapped = ip.match(/^::ffff:(.+)$/);
  if (mapped) {
    if (net.isIP(mapped[1]) === 4) return publicAddress(mapped[1]);
    const hex = mapped[1].split(":");
    if (hex.length === 2 && hex.every((part) => /^[0-9a-f]{1,4}$/.test(part))) {
      const first = parseInt(hex[0], 16), second = parseInt(hex[1], 16);
      return publicAddress(`${first >> 8}.${first & 255}.${second >> 8}.${second & 255}`);
    }
    return false;
  }
  return true;
}

// Undici invokes this lookup for the socket it actually opens. A prior DNS
// check alone cannot protect against a hostname changing between lookups.
export const safeConnectionLookup: net.LookupFunction = (hostname, _options, callback) => {
  dns.lookup(hostname, { all: true }).then((addresses) => {
    if (!addresses.length || addresses.some(({ address }) => !publicAddress(address))) {
      callback(new Error("UNSAFE_ADDRESS"), "");
      return;
    }
    callback(null, addresses[0].address, addresses[0].family);
  }).catch(() => callback(new Error("DNS_LOOKUP_FAILED"), ""));
};

const safeDispatcher = new Agent({ connect: { lookup: safeConnectionLookup } });

async function limitedBody(response: Response, limit: number): Promise<Buffer> {
  const declared = Number(response.headers.get("content-length"));
  if (Number.isFinite(declared) && declared > limit) {
    await discardResponse(response);
    throw new Error("SOURCE_TOO_LARGE");
  }
  if (!response.body) return Buffer.alloc(0);
  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > limit) throw new Error("SOURCE_TOO_LARGE");
      chunks.push(value);
    }
  } finally { await reader.cancel().catch(() => undefined); }
  return Buffer.concat(chunks, size);
}

async function discardResponse(response: Response): Promise<void> {
  await response.body?.cancel().catch(() => undefined);
}

export class SourceFetcher {
  static isSafeUrl(value: string): boolean {
    try {
      const url = new URL(value);
      const host = url.hostname.replace(/^\[|\]$/g, "").toLowerCase();
      return (url.protocol === "http:" || url.protocol === "https:") &&
        !url.username && !url.password && host !== "localhost" && !host.endsWith(".local") &&
        !host.endsWith(".localhost") && (net.isIP(host) === 0 || publicAddress(host));
    } catch { return false; }
  }

  static async isSafeIP(host: string): Promise<boolean> {
    try {
      const normalized = host.replace(/^\[|\]$/g, "");
      const addresses = net.isIP(normalized) ? [{ address: normalized }] : await dns.lookup(normalized, { all: true });
      return addresses.length > 0 && addresses.every((record) => publicAddress(record.address));
    } catch { return false; }
  }

  static async fetch(initialUrl: string, maxRedirects = 5, timeoutMs = 8000) {
    let url = initialUrl;
    for (let redirects = 0; redirects <= maxRedirects; redirects++) {
      if (!this.isSafeUrl(url) || !(await this.isSafeIP(new URL(url).hostname))) {
        return { isLive: false, error: "UNSAFE_URL", type: "UNKNOWN" as const, status: null, finalUrl: url, contentType: null, fetchedAt: new Date().toISOString() };
      }
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      try {
        const response = await fetch(url, { signal: controller.signal, redirect: "manual", dispatcher: safeDispatcher,
          headers: { "User-Agent": "CTSEG-Trade-Research/1.0" } } as RequestInit & { dispatcher: Agent });
        if (response.status >= 300 && response.status < 400) {
          const location = response.headers.get("location");
          await discardResponse(response);
          if (!location) throw new Error("INVALID_REDIRECT");
          url = new URL(location, url).href;
          continue;
        }
        const contentType = response.headers.get("content-type") || "";
        const fetchedAt = new Date().toISOString();
        if (!response.ok) {
          await discardResponse(response);
          return { isLive: false, error: `HTTP_${response.status}`, type: "UNKNOWN" as const,
            status: response.status, finalUrl: url, contentType, fetchedAt };
        }
        const pdf = /application\/pdf/i.test(contentType) || (!contentType && /\.pdf(?:$|\?)/i.test(url));
        const html = /text\/html|application\/xhtml\+xml/i.test(contentType);
        if (!pdf && !html) {
          await discardResponse(response);
          return { isLive: false, error: "UNSUPPORTED_CONTENT_TYPE", type: "UNKNOWN" as const,
            status: response.status, finalUrl: url, contentType, fetchedAt };
        }
        if (pdf) {
          const data = await limitedBody(response, PDF_LIMIT);
          try {
            const text = await extractPdfText(data);
            return { isLive: true, title: text.length >= 20 ? "[PDF Document]" : "[Scanned PDF]",
              text: text.length >= 20 ? text.slice(0, 10000) : "", type: "PDF" as const, pdfLinks: [],
              status: response.status, finalUrl: url, contentType, fetchedAt };
          } catch { return { isLive: false, error: "UNREADABLE_PDF", type: "PDF" as const,
            status: response.status, finalUrl: url, contentType, fetchedAt }; }
        }
        const data = await limitedBody(response, HTML_LIMIT);
        const charset = /charset=([^;\s]+)/i.exec(contentType)?.[1]?.replace(/["']/g, "") || "utf-8";
        let text: string;
        try { text = new TextDecoder(charset, { fatal: false }).decode(data); }
        catch { text = new TextDecoder("utf-8").decode(data); }
        const $ = cheerio.load(text);
        $("script, style, nav, footer, header, aside, iframe, noscript, svg").remove();
        const title = $("title").text().trim();
        const headings = $("h1, h2, h3").map((_, el) => $(el).text().trim()).get().filter(Boolean);
        const pdfLinks: string[] = [];
        $("a[href]").each((_, el) => { const href = $(el).attr("href");
          if (href && /\.pdf(?:$|\?)/i.test(href)) { try { pdfLinks.push(new URL(href, url).href); } catch {} }
        });
        return { isLive: true, title, text: $("body").text().replace(/\s+/g, " ").trim().slice(0, 15000),
          type: "HTML" as const, pdfLinks, headings, status: response.status, finalUrl: url, contentType, fetchedAt };
      } catch (error) {
        return { isLive: false, error: error instanceof Error && error.message === "SOURCE_TOO_LARGE" ? "SOURCE_TOO_LARGE" :
          controller.signal.aborted ? "SOURCE_TIMEOUT" : "SOURCE_FETCH_FAILED", type: "UNKNOWN" as const,
          status: null, finalUrl: url, contentType: null, fetchedAt: new Date().toISOString() };
      } finally { clearTimeout(timer); }
    }
    return { isLive: false, error: "TOO_MANY_REDIRECTS", type: "UNKNOWN" as const,
      status: null, finalUrl: url, contentType: null, fetchedAt: new Date().toISOString() };
  }
}
