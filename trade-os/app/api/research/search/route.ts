import { NextRequest, NextResponse } from "next/server";
import { getFreeSearchAdapters } from "@/lib/search";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const query = String(body.query || "").trim();
  const language = body.language ? String(body.language) : undefined;
  const timeRange = body.timeRange ? String(body.timeRange) as "day" | "week" | "month" | "year" : undefined;

  if (!query) {
    return NextResponse.json({ error: "Arama sorgusu gerekli." }, { status: 400 });
  }

  const adapters = getFreeSearchAdapters();

  if (!adapters.length) {
    return NextResponse.json({
      error: "Ücretsiz arama backend'i henüz yapılandırılmadı.",
      required: "SEARXNG_URL",
      paidFallbackUsed: false,
    }, { status: 503 });
  }

  const settled = await Promise.allSettled(
    adapters.map(async (adapter) => ({
      adapter: adapter.name,
      results: await adapter.search({ query, language, timeRange }),
    })),
  );

  const sources = settled
    .filter((item): item is PromiseFulfilledResult<{ adapter: string; results: Awaited<ReturnType<(typeof adapters)[number]["search"]>> }> => item.status === "fulfilled")
    .map((item) => item.value);

  const errors = settled
    .map((item, index) => item.status === "rejected" ? { adapter: adapters[index].name, error: String(item.reason) } : null)
    .filter(Boolean);

  const seen = new Set<string>();
  const results = sources
    .flatMap((source) => source.results.map((result) => ({ ...result, adapter: source.adapter })))
    .filter((result) => {
      const key = result.url.replace(/\/$/, "").toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

  return NextResponse.json({
    query,
    results,
    errors,
    paidFallbackUsed: false,
    searchedAt: new Date().toISOString(),
  });
}
