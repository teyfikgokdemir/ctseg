import { getFreeSearchAdapters } from "@/lib/search";
import { scoreFreshness, scoreVerification } from "./freshness";
import { planResearchQueries } from "./query-planner";
import { extractSubject, scoreRelevance } from "./relevance";
import type { ResearchFinding, ResearchRequest, ResearchRun } from "./types";

function domainOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return "unknown";
  }
}

export async function runResearch(request: ResearchRequest): Promise<ResearchRun> {
  const adapters = getFreeSearchAdapters();
  if (!adapters.length) {
    throw new Error("NO_FREE_SEARCH_BACKEND");
  }

  const queries = planResearchQueries(request);
  const subject = extractSubject(request);
  const combined: ResearchFinding[] = [];
  const diagnostics: ResearchRun["diagnostics"] = [];
  // Finish Turkey queries before starting global discovery. Limit concurrency to avoid
  // flooding free public search pages and triggering their rate limits.
  for (const stage of [queries.filter((q) => q.intent.startsWith("turkey-")),
    queries.filter((q) => !q.intent.startsWith("turkey-"))]) {
    for (let offset = 0; offset < stage.length; offset += 3) {
      await Promise.all(stage.slice(offset, offset + 3).flatMap((planned) =>
        adapters.map(async (adapter) => {
          try {
            const results = await adapter.search({ query: planned.query, language: planned.language });
            let acceptedCount = 0;
            for (const result of results) {
              const relevanceScore = scoreRelevance({ type: request.type, subject,
                title: result.title, snippet: result.snippet, url: result.url });
              if (relevanceScore < (request.type === "SOURCING" ? 60 : 55)) continue;
              const freshness = scoreFreshness(result);
              const verificationScore = scoreVerification(result.url);
              combined.push({ ...result, adapter: adapter.name, query: planned.query,
                language: planned.language, domain: domainOf(result.url),
                relevanceScore, freshnessScore: freshness.score, verificationScore,
                totalScore: Math.round(relevanceScore * 0.6 + freshness.score * 0.15 + verificationScore * 0.25),
                historicalOnly: freshness.historicalOnly });
              acceptedCount++;
            }
            diagnostics.push({ adapter: adapter.name, query: planned.query,
              rawCount: results.length, acceptedCount });
          } catch (error) {
            diagnostics.push({ adapter: adapter.name, query: planned.query, rawCount: 0,
              acceptedCount: 0, error: error instanceof Error ? error.message : String(error) });
          }
        })));
    }
  }

  const deduped = new Map<string, ResearchFinding>();
  for (const finding of combined) {
    const key = finding.url.replace(/\/$/, "").toLowerCase();
    const current = deduped.get(key);
    if (
      !current ||
      finding.totalScore > current.totalScore
    ) {
      deduped.set(key, finding);
    }
  }

  const findings = [...deduped.values()].sort((a, b) => {
    return b.totalScore - a.totalScore;
  });

  return {
    request,
    queries,
    findings,
    diagnostics,
    searchedAt: new Date().toISOString(),
    paidFallbackUsed: false,
  };
}
