import type { SearchAdapter, SearchRequest, SearchResult } from "./types";

type SearxResult = {
  title?: string;
  url?: string;
  content?: string;
  engine?: string;
  publishedDate?: string | null;
};

export class SearxngAdapter implements SearchAdapter {
  name = "searxng";

  constructor(private readonly baseUrl: string) {}

  async search(input: SearchRequest): Promise<SearchResult[]> {
    const url = new URL("/search", this.baseUrl);
    url.searchParams.set("q", input.query);
    url.searchParams.set("format", "json");
    url.searchParams.set("pageno", String(input.page ?? 1));

    if (input.language) url.searchParams.set("language", input.language);
    if (input.timeRange) url.searchParams.set("time_range", input.timeRange);

    const response = await fetch(url, {
      headers: { accept: "application/json" },
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });

    if (!response.ok) {
      throw new Error(`SearXNG request failed: ${response.status}`);
    }

    const payload = (await response.json()) as { results?: SearxResult[] };

    return (payload.results ?? [])
      .filter((item): item is SearxResult & { title: string; url: string } => Boolean(item.title && item.url))
      .map((item) => ({
        title: item.title,
        url: item.url,
        snippet: item.content,
        engine: item.engine,
        publishedAt: item.publishedDate ?? null,
      }));
  }
}
