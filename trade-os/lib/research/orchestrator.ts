import { planResearchQueries } from "./query-planner";
import { extractSubject } from "./relevance";
import { searchPlannedQueries } from "./search-router";
import type { ResearchFinding, ResearchRequest, ResearchRun } from "./types";

export async function runResearch(request: ResearchRequest): Promise<ResearchRun> {
  const queries = planResearchQueries(request);
  const subject = request.product || extractSubject(request);
  const searched = await searchPlannedQueries(request, subject, queries);
  const deduped = new Map<string, ResearchFinding>();
  for (const finding of searched.findings) {
    const key = finding.url.replace(/\/$/, "").toLowerCase();
    const current = deduped.get(key);
    if (!current || finding.totalScore > current.totalScore) deduped.set(key, finding);
  }
  const findings = [...deduped.values()].sort((a, b) => b.totalScore - a.totalScore);
  return { request, queries, findings, diagnostics: searched.diagnostics,
    searchedAt: new Date().toISOString(), paidFallbackUsed: false };
}
