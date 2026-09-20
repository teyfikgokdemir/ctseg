import { parseIntent } from "./intent-parser";
import { planResearchQueries } from "./query-planner";
import { searchPlannedQueries } from "./search-router";
import { SourceFetcher } from "./source-fetcher";
import { extractEvidence } from "./evidence-extractor";
import type { ResearchFinding, ResearchRequest, ResearchRun, PlannedQuery } from "./types";
import type { AdapterDiagnostic } from "./types";

export async function runResearch(request: ResearchRequest): Promise<ResearchRun> {
  const parsedIntent = await parseIntent(request.rawRequest, request.type);
  
  if (parsedIntent.clarificationRequired && parsedIntent.clarificationQuestion) {
    return {
      request,
      queries: [],
      findings: [],
      diagnostics: [],
      searchedAt: new Date().toISOString(),
      paidFallbackUsed: false,
      clarification: {
        confidence: parsedIntent.confidence,
        missingCriticalFields: parsedIntent.missingCriticalFields,
        missingUsefulFields: parsedIntent.missingUsefulFields,
        assumptions: parsedIntent.assumptions,
        clarificationRequired: parsedIntent.clarificationRequired,
        question: parsedIntent.clarificationQuestion
      },
      round: 0
    };
  }

  const isDeep = request.mode === "DEEP";
  const maxRounds = isDeep ? 3 : 1;
  const maxFetchTotal = isDeep ? 15 : 5;
  const maxQueriesTotal = isDeep ? 12 : 5;
  
  const allFindings: ResearchFinding[] = [];
  const allQueries: PlannedQuery[] = [];
  const allDiagnostics: AdapterDiagnostic[] = [];
  
  let currentRound = 1;
  let currentQueries = planResearchQueries(request);
  let totalFetchedCount = request.budgetTracker?.fetchesUsed || 0;
  
  const fetchedUrls = new Set<string>();
  const executedQueryStrings = new Set<string>();
  
  while (currentRound <= maxRounds) {
    // Deduplicate and limit queries
    const newQueries = currentQueries.filter(q => !executedQueryStrings.has(q.query));
    if (newQueries.length === 0) break;
    
    // Enforce budget limits on queries
    const allowedNewQueries = newQueries.slice(0, Math.max(0, maxQueriesTotal - allQueries.length));
    if (allowedNewQueries.length === 0) break;

    allowedNewQueries.forEach(q => executedQueryStrings.add(q.query));
    allQueries.push(...allowedNewQueries);

    const searched = await searchPlannedQueries(request, parsedIntent.product || parsedIntent.intent, allowedNewQueries);
    allDiagnostics.push(...searched.diagnostics);
    
    for (const finding of searched.findings) {
      if (totalFetchedCount >= maxFetchTotal) break;
      
      if (!fetchedUrls.has(finding.url) && SourceFetcher.isSafeUrl(finding.url)) {
         fetchedUrls.add(finding.url);
         try {
           const content = await SourceFetcher.fetch(finding.url, 5, 5000);
           finding.fetchedContent = content as ResearchFinding["fetchedContent"];
           totalFetchedCount++;
           if (request.budgetTracker) request.budgetTracker.fetchesUsed = totalFetchedCount;
           
         } catch {
           finding.fetchedContent = { isLive: false, error: "SOURCE_FETCH_FAILED" } as ResearchFinding["fetchedContent"];
         }
         extractEvidence(finding, parsedIntent);
      } else if (!SourceFetcher.isSafeUrl(finding.url)) {
        finding.negativeSignals = ["INACCESSIBLE_SOURCE"];
      }
      allFindings.push(finding);
    }
    
    if (currentRound < maxRounds && totalFetchedCount < maxFetchTotal) {
      // Intent-specific Gap Analysis
      const confirmedFindings = allFindings.filter(f => f.role?.state === "CONFIRMED" || f.productConfirmed?.state === "CONFIRMED");
      const productName = parsedIntent.product || "product";
      
      if (request.type === "SOURCING") {
        const foundRoles = allFindings.filter(f => f.role?.state === "CONFIRMED" && f.role.value === "MANUFACTURER").length;
        if (foundRoles < 2) {
          currentQueries = [{
            query: "" + productName + " official manufacturer",
            language: "en",
            intent: "Sourcing Manufacturer gap analysis",
            priority: 1
          }];
        } else break;
      } else if (request.type === "BUYER_SEARCH") {
        if (confirmedFindings.length < 2) {
           currentQueries = [{
             query: "" + productName + " importer buyer purchasing",
             language: "en",
             intent: "Buyer Search gap analysis",
             priority: 1
           }];
        } else break;
      } else if (request.type === "LOGISTICS") {
        if (confirmedFindings.length < 2) {
           currentQueries = [{
             query: "international logistics forwarder shipping " + ((parsedIntent.preferredSourcingRegion || parsedIntent.sourceCountry) || "") + " to " + (parsedIntent.destinations?.[0] || ""),
             language: "en",
             intent: "Logistics route gap analysis",
             priority: 1
           }];
        } else break;
      } else {
        break; // Stop if type is unknown or mixed inside round logic
      }
    } else {
      break;
    }
    currentRound++;
  }

  // Final Deduplication
  const deduped = new Map<string, ResearchFinding>();
  for (const finding of allFindings) {
    if (!deduped.has(finding.url) || finding.fetchedContent?.isLive) {
      finding.verificationScore = 0; // Fix TS issue
      deduped.set(finding.url, finding);
    }
  }

  return {
    request,
    queries: allQueries,
    findings: Array.from(deduped.values()),
    diagnostics: allDiagnostics,
    searchedAt: new Date().toISOString(),
    paidFallbackUsed: false,
    round: currentRound
  };
}


