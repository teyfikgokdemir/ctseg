/* eslint-disable @typescript-eslint/no-explicit-any */
import dns from "dns";
import { promisify } from "util";

const lookup = promisify(dns.lookup);

export class SourceFetcher {
  static isSafeUrl(urlStr: string): boolean {
    try {
      const parsed = new URL(urlStr);
      if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return false;
      const host = parsed.hostname;
      if (host === "localhost" || host === "127.0.0.1" || host === "::1") return false;
      if (host === "169.254.169.254") return false; // AWS metadata
      if (host.endsWith(".local")) return false;
      return true;
    } catch {
      return false;
    }
  }

  static async isSafeIP(host: string): Promise<boolean> {
    try {
      const res = await lookup(host);
      const ip = res.address;
      // Basic check for private ranges
      if (ip.startsWith("10.") || ip.startsWith("127.") || ip.startsWith("169.254.")) return false;
      if (ip.match(/^172\.(1[6-9]|2[0-9]|3[0-1])\./)) return false;
      if (ip.startsWith("192.168.")) return false;
      return true;
    } catch {
      return false;
    }
  }

  static async fetch(url: string, timeoutMs = 8000) {
    if (!this.isSafeUrl(url)) throw new Error("Unsafe URL");
    const parsed = new URL(url);
    if (!(await this.isSafeIP(parsed.hostname))) throw new Error("Unsafe IP resolved");
    
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(url, { 
        signal: controller.signal,
        headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" }
      });
      clearTimeout(id);

      if (response.status >= 400) {
        return { isLive: false, error: "Status " + response.status };
      }

      const contentType = response.headers.get("content-type") || "";
      
      if (contentType.includes("application/pdf")) {
        // PDF support stub
        return { isLive: true, title: "[PDF Document]", text: "PDF içerik okunamaz ancak link aktif.", type: "PDF", pdfLinks: [url] };
      }

      const html = await response.text();
      // Basic extraction
      const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
      const title = titleMatch ? titleMatch[1].trim() : "";
      const bodyMatch = html.match(/<body[^>]*>([\s\S]+?)<\/body>/i);
      const rawBody = bodyMatch ? bodyMatch[1] : html;
      const text = rawBody.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
                          .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
                          .replace(/<[^>]+>/g, " ")
                          .replace(/\s+/g, " ")
                          .trim();
                          
      const pdfLinks = [...html.matchAll(/href=["']([^"']+\.pdf)["']/gi)].map(m => new URL(m[1], url).href);

      return { isLive: true, title, text: text.slice(0, 5000), type: "HTML", pdfLinks };

    } catch (e: any) {
      clearTimeout(id);
      return { isLive: false, error: e.message };
    }
  }
}

