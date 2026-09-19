import { getFreeSearchAdapters } from "@/lib/search";
import { scoreFreshness, scoreVerification } from "./freshness";
import { scoreRelevance } from "./relevance";
import type { PlannedQuery, ResearchFinding, ResearchRequest, ResearchRun } from "./types";

export async function searchPlannedQueries(request: ResearchRequest, subject: string, queries: PlannedQuery[]): Promise<{
  findings: ResearchFinding[];
  diagnostics: ResearchRun["diagnostics"];
}> {
  const adapters = getFreeSearchAdapters();
  if (!adapters.length) throw new Error("NO_FREE_SEARCH_BACKEND");
  const findings: ResearchFinding[] = [];
  const diagnostics: ResearchRun["diagnostics"] = [];
  const stages = request.type === "SOURCING"
    ? [queries.filter((query) => query.intent.startsWith("turkey-")),
      queries.filter((query) => !query.intent.startsWith("turkey-"))]
    : [queries];
  for (const stage of stages) {
    for (let offset = 0; offset < stage.length; offset += 3) {
      await Promise.all(stage.slice(offset, offset + 3).flatMap((planned) => adapters.map(async (adapter) => {
        try {
          const results = await adapter.search({ query: planned.query, language: planned.language });
          let acceptedCount = 0;
          for (const result of results) {
            const relevanceScore = scoreRelevance({ type: request.type, subject,
              title: result.title, snippet: result.snippet, url: result.url });
            if (relevanceScore < (request.type === "SOURCING" ? 60 : 55)) continue;
            if (request.type === "LOGISTICS" && request.sourceRegion && request.destination) {
              const text = `${result.title} ${result.snippet ?? ""} ${result.url} ${result.country ?? ""}`.toLocaleLowerCase("tr-TR");
              if (![request.sourceRegion, request.destination].some((country) =>
                text.includes(country.toLocaleLowerCase("tr-TR")))) continue;
            }
            const freshness = scoreFreshness(result);
            const verificationScore = scoreVerification(result.url);
            let domain = "unknown";
            try { domain = new URL(result.url).hostname.replace(/^www\./, "").toLowerCase(); } catch { continue; }
            const { country, ...restResult } = result;
            const mappedCountry = country ? { value: country, state: "UNVERIFIED" as const, evidence: [] } : undefined;
            findings.push({ ...restResult, country: mappedCountry, adapter: adapter.name, query: planned.query,
              language: planned.language, domain, relevanceScore,
              freshnessScore: freshness.score, verificationScore,
              totalScore: Math.round(relevanceScore * 0.6 + freshness.score * 0.15 + verificationScore * 0.25),
              historicalOnly: freshness.historicalOnly });
            acceptedCount++;
          }
          diagnostics.push({ adapter: adapter.name, query: planned.query, rawCount: results.length,
            acceptedCount, status: "success" });
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error);
          diagnostics.push({ adapter: adapter.name, query: planned.query, rawCount: 0,
            acceptedCount: 0, status: /429|rate.limit/i.test(message) ? "rate-limited" : "error", error: message });
        }
      })));
    }
  }
  return { findings, diagnostics };
}
