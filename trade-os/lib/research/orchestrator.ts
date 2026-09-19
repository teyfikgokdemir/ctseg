import { getFreeSearchAdapters } from "@/lib/search";
import { scoreFreshness, scoreVerification } from "./freshness";
import { planResearchQueries } from "./query-planner";
import { extractSubject, isRelevantFinding } from "./relevance";
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
  const jobs = queries.flatMap((planned) =>
    adapters.map(async (adapter) => {
      const results = await adapter.search({
        query: planned.query,
        language: planned.language,
        timeRange: "year",
      });

      return results
        .filter((result) => isRelevantFinding({
          type: request.type,
          subject,
          title: result.title,
          snippet: result.snippet,
          url: result.url,
        }))
        .map<ResearchFinding>((result) => {
        const freshness = scoreFreshness(result);
        return {
          ...result,
          adapter: adapter.name,
          query: planned.query,
          language: planned.language,
          domain: domainOf(result.url),
          freshnessScore: freshness.score,
          verificationScore: scoreVerification(result.url),
          historicalOnly: freshness.historicalOnly,
        };
      });
    }),
  );

  const settled = await Promise.allSettled(jobs);
  const combined = settled
    .filter((item): item is PromiseFulfilledResult<ResearchFinding[]> => item.status === "fulfilled")
    .flatMap((item) => item.value);

  const deduped = new Map<string, ResearchFinding>();
  for (const finding of combined) {
    const key = finding.url.replace(/\/$/, "").toLowerCase();
    const current = deduped.get(key);
    if (
      !current ||
      finding.freshnessScore + finding.verificationScore >
        current.freshnessScore + current.verificationScore
    ) {
      deduped.set(key, finding);
    }
  }

  const findings = [...deduped.values()].sort((a, b) => {
    const aScore = a.freshnessScore + a.verificationScore;
    const bScore = b.freshnessScore + b.verificationScore;
    return bScore - aScore;
  });

  return {
    request,
    queries,
    findings,
    searchedAt: new Date().toISOString(),
    paidFallbackUsed: false,
  };
}
