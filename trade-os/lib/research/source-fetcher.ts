import dns from "dns";
import { promisify } from "util";
import * as cheerio from "cheerio";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const pdfParse = require("pdf-parse");

const lookup = promisify(dns.lookup);

export class SourceFetcher {
  static isSafeUrl(urlStr: string): boolean {
    try {
      const parsed = new URL(urlStr);
      if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return false;
      const host = parsed.hostname;
      if (host === "localhost") return false;
      if (host.endsWith(".local")) return false;
      return true;
    } catch {
      return false;
    }
  }

  static async isSafeIP(host: string): Promise<boolean> {
    try {
      const res = await lookup(host, { all: true });
      for (const record of res) {
        const ip = record.address;
        const family = record.family;
        if (family === 4) {
          const parts = ip.split(".").map(Number);
          if (parts[0] === 0) return false;
          if (parts[0] === 10) return false;
          if (parts[0] === 127) return false;
          if (parts[0] === 169 && parts[1] === 254) return false;
          if (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) return false;
          if (parts[0] === 192 && parts[1] === 168) return false;
          if (parts[0] === 100 && parts[1] >= 64 && parts[1] <= 127) return false;
          if (parts[0] >= 224 && parts[0] <= 239) return false;
          if (parts[0] >= 240) return false;
        } else if (family === 6) {
          const ipv6 = ip.toLowerCase();
          if (ipv6 === "::1") return false;
          if (ipv6.startsWith("fc") || ipv6.startsWith("fd")) return false;
          if (ipv6.startsWith("fe8") || ipv6.startsWith("fe9") || ipv6.startsWith("fea") || ipv6.startsWith("feb")) return false;
          if (ipv6.startsWith("::fffe:")) {
            const ipv4 = ipv6.substring(7);
            const parts = ipv4.split(".").map(Number);
            if (parts[0] === 10 || parts[0] === 127 || (parts[0] === 192 && parts[1] === 168) || (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31)) return false;
          }
        }
      }
      return true;
    } catch {
      return false;
    }
  }

  static async fetch(initialUrl: string, maxRedirects = 5, timeoutMs = 8000) {
    let url = initialUrl;
    let redirects = 0;

    while (redirects <= maxRedirects) {
      if (!this.isSafeUrl(url)) throw new Error("Unsafe URL protocol or hostname: " + url);
      const parsed = new URL(url);
      if (!(await this.isSafeIP(parsed.hostname))) throw new Error("Unsafe IP resolved for: " + parsed.hostname);

      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeoutMs);

      try {
        const response = await fetch(url, {
          signal: controller.signal,
          redirect: "manual",
          headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" }
        });
        clearTimeout(id);

        if (response.status >= 300 && response.status < 400) {
          const location = response.headers.get("location");
          if (!location) throw new Error("Redirect without location header");
          url = new URL(location, url).href;
          redirects++;
          continue;
        }

        if (response.status >= 400) {
          return { isLive: false, error: "Status " + response.status, type: "UNKNOWN" };
        }

        const contentType = response.headers.get("content-type") || "";
        
        if (contentType.includes("application/pdf") || url.toLowerCase().endsWith(".pdf")) {
          const arrayBuffer = await response.arrayBuffer();
          if (arrayBuffer.byteLength > 15 * 1024 * 1024) throw new Error("PDF too large");
          try {
            const pdfData = await pdfParse(Buffer.from(arrayBuffer));
            const text = pdfData.text.trim();
            if (!text || text.length < 20) {
              return { isLive: true, title: "[Scanned PDF]", text: "UNREADABLE / NO_TEXT", type: "PDF", pdfLinks: [] };
            }
            return { isLive: true, title: "[PDF Document]", text: text.slice(0, 10000), type: "PDF", pdfLinks: [] };
          } catch {
            return { isLive: true, title: "[Broken PDF]", text: "UNREADABLE / NO_TEXT", type: "PDF", pdfLinks: [] };
          }
        }

        const html = await response.text();
        const $ = cheerio.load(html);
        
        $("script, style, nav, footer, header, aside, iframe, noscript, svg").remove();
        
        const title = $("title").text().trim() || "";
        const headings: string[] = [];
        $("h1, h2, h3").each((_, el) => {
          const hText = $(el).text().trim();
          if (hText) headings.push(hText);
        });

        const text = $("body").text().replace(/\\s+/g, " ").trim();
        const pdfLinks: string[] = [];
        $("a[href]").each((_, el) => {
          const href = $(el).attr("href");
          if (href && href.toLowerCase().endsWith(".pdf")) {
            try { pdfLinks.push(new URL(href, url).href); } catch {}
          }
        });

        return { isLive: true, title, text: text.slice(0, 15000), type: "HTML", pdfLinks, headings };

      } catch (e: unknown) {
        clearTimeout(id);
        return { isLive: false, error: e instanceof Error ? e.message : String(e), type: "UNKNOWN" };
      }
    }
    
    return { isLive: false, error: "Too many redirects", type: "UNKNOWN" };
  }
}
