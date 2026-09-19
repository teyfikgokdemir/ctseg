import type { SearchAdapter, SearchRequest, SearchResult } from "./types";

const entityMap: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
};

function decodeXml(value: string): string {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (_, name) => entityMap[name] ?? `&${name};`)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tag(xml: string, name: string): string | null {
  const match = xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)<\\/${name}>`, "i"));
  return match ? decodeXml(match[1]) : null;
}

export class BingRssAdapter implements SearchAdapter {
  name = "bing-rss";

  async search(input: SearchRequest): Promise<SearchResult[]> {
    const url = new URL("https://www.bing.com/search");
    url.searchParams.set("q", input.query);
    url.searchParams.set("format", "rss");
    url.searchParams.set("count", "20");

    if (input.language) {
      url.searchParams.set("setlang", input.language);
    }

    const response = await fetch(url, {
      headers: {
        accept: "application/rss+xml, application/xml;q=0.9, text/xml;q=0.8",
        "user-agent": "Mozilla/5.0 (compatible; CTSEG-Trade-OS/1.0)",
      },
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });

    if (!response.ok) {
      throw new Error(`Bing RSS request failed: ${response.status}`);
    }

    const xml = await response.text();
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)];

    return items
      .map((match) => {
        const item = match[1];
        const title = tag(item, "title");
        const link = tag(item, "link");
        const description = tag(item, "description");
        const pubDate = tag(item, "pubDate");

        if (!title || !link) return null;

        return {
          title,
          url: link,
          snippet: description ?? undefined,
          engine: "bing-rss",
          publishedAt: pubDate ?? null,
        } satisfies SearchResult;
      })
      .filter((item): item is SearchResult => Boolean(item));
  }
}
