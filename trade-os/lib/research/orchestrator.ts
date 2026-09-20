import { parseIntent } from "./intent-parser";
import { planResearchQueries, generateFollowUpQueries } from "./query-planner";
import { searchPlannedQueries } from "./search-router";
import { extractEvidence } from "./evidence-extractor";
import { FetchScheduler } from "./fetch-scheduler";
import { domainKey, entityKey } from "./company-resolver";
import type { ResearchFinding, ResearchRequest, ResearchRun, PlannedQuery, StopReason, CompanyCandidate } from "./types";
import type { AdapterDiagnostic } from "./types";
import { getResearchAIProvider } from "./local-ai-provider";

export async function runResearch(request: ResearchRequest): Promise<ResearchRun> {
  const parsedIntent = await parseIntent(request.rawRequest, request.type);
  
  if (parsedIntent.clarificationRequired && parsedIntent.clarificationQuestion) {
    return {
      request, queries: [], findings: [], diagnostics: [], searchedAt: new Date().toISOString(), paidFallbackUsed: false, round: 0,
      clarification: {
        confidence: parsedIntent.confidence, missingCriticalFields: parsedIntent.missingCriticalFields, missingUsefulFields: parsedIntent.missingUsefulFields,
        assumptions: parsedIntent.assumptions, clarificationRequired: parsedIntent.clarificationRequired, question: parsedIntent.clarificationQuestion
      }
    };
  }

  // Safety caps
  const startTime = Date.now();
  const TIME_BUDGET_MS = 60000; 
  const MAX_QUERIES = 20;
  const MAX_FETCHES = 30;
  const MAX_CANDIDATES = 60;
  
  const allFindings = new Map<string, ResearchFinding>();
  const allQueries: PlannedQuery[] = [];
  const allDiagnostics: AdapterDiagnostic[] = [];
  
  const fetchedUrls = new Set<string>();
  const candidateKeys = new Set<string>();
  const executedQueryStrings = new Set<string>();
  
  const queriesToRun = planResearchQueries(request);
  let totalFetches = request.budgetTracker?.fetchesUsed || 0;
  let totalQueries = 0;
  let stopReason: StopReason | undefined = undefined;
  
  const scheduler = new FetchScheduler(4, 1, 3, async (finding, content) => {
    finding.fetchedContent = content;
    if (content.isLive && "text" in content && typeof content.text === "string") {
      try {
        extractEvidence(finding, parsedIntent);
      } catch (e) {
        console.error("Evidence extraction failed", e);
      }
    }
  });

  let round = 1;

  while (!stopReason) {
    const timeElapsed = Date.now() - startTime;
    if (timeElapsed > TIME_BUDGET_MS) { stopReason = "TIME_BUDGET"; break; }
    
    // Pick queries to run this iteration
    const currentQueries = queriesToRun.filter(q => !executedQueryStrings.has(q.query)).slice(0, 5); // take up to 5 at a time
    if (currentQueries.length === 0 && !scheduler.hasPending()) { stopReason = "SATURATED"; break; } // no more work
    
    if (currentQueries.length > 0) {
      if (totalQueries + currentQueries.length > MAX_QUERIES) { stopReason = "HARD_CAP"; break; }
      const searchRes = await searchPlannedQueries(request, request.product || "Product", currentQueries);
      totalQueries += currentQueries.length;
      
      currentQueries.forEach(q => executedQueryStrings.add(q.query));
      allQueries.push(...currentQueries);
      allDiagnostics.push(...searchRes.diagnostics);
      
      let newFindingsCount = 0;
      for (const f of searchRes.findings) {
        if (!allFindings.has(f.url)) {
          allFindings.set(f.url, f);
          newFindingsCount++;
          const eKey = entityKey(domainKey(f.domain), f.normalizedCompanyName || f.companyName);
          candidateKeys.add(eKey);
          if (candidateKeys.size > MAX_CANDIDATES) { stopReason = "HARD_CAP"; break; }
          // Schedule fetch
          let priority = f.relevanceScore || 50;
          if (f.domain.includes(request.product?.toLowerCase() || "")) priority += 20; // boost product in domain
          if (f.url.endsWith(".pdf")) priority += 30; // boost PDF
          scheduler.add(f, priority);
        }
      }
      if (stopReason) break;
      if (newFindingsCount === 0 && !scheduler.hasPending()) { stopReason = "NO_NEW_CANDIDATES"; break; }
    }

    // Process fetches
    let didFetch = false;
    while (scheduler.canScheduleNext() && totalFetches < MAX_FETCHES && (Date.now() - startTime) < TIME_BUDGET_MS) {
      const processed = await scheduler.processNextBatch();
      if (processed.attempted > 0) {
        totalFetches += processed.attempted;
        didFetch = true;
      } else {
        break;
      }
    }

    if (totalFetches >= MAX_FETCHES) { stopReason = "HARD_CAP"; break; }

    // Gap Critic: Generate follow-up queries if we have gaps and budget
    if (didFetch && allQueries.length < MAX_QUERIES) {
      // Group findings by domain to find candidates with missing info
      const domainMap = new Map<string, ResearchFinding[]>();
      for (const f of allFindings.values()) {
        const d = domainKey(f.domain);
        if (!domainMap.has(d)) domainMap.set(d, []);
        domainMap.get(d)!.push(f);
      }
      
      // Simple gap critic logic
      for (const [domain, findings] of domainMap.entries()) {
        let hasProduct = false;
        let hasRole = false;
        const name = domain;
        for (const f of findings) {
          if (f.productConfirmed?.state === "CONFIRMED") hasProduct = true;
          if (f.role?.state === "CONFIRMED") hasRole = true;
          if (f.negativeSignals?.includes("WRONG_PRODUCT") || f.negativeSignals?.includes("ROLE_NOT_PROVEN")) {
            // Priority lowered, skip generating followups unless strictly needed
          }
        }
        
        const missing: string[] = [];
        let hasGrade = false;
        let hasCountry = false;
        let hasContact = false;
        for (const f of findings) {
          if (f.gradeConfirmed?.state === "CONFIRMED") hasGrade = true;
          if (f.country?.state === "CONFIRMED") hasCountry = true;
          if (f.contactEmail?.state === "CONFIRMED" || f.contactPhone?.state === "CONFIRMED") hasContact = true;
        }

        if (!hasProduct) missing.push("PRODUCT");
        if (!hasRole && request.type !== "LOGISTICS") missing.push("ROLE");
        if (!hasGrade && request.grade) missing.push("GRADE");
        if (!hasCountry && request.sourceRegion) missing.push("COUNTRY");
        if (!hasContact) missing.push("CONTACT");
        
        if (missing.length > 0 && missing.length < 3) {
          const followups = generateFollowUpQueries(name, domain, missing);
          queriesToRun.push(...followups);
        }
      }
    }
    
    round++;
  }

  if (request.budgetTracker) request.budgetTracker.fetchesUsed = totalFetches;

  return {
    request,
    queries: allQueries,
    findings: Array.from(allFindings.values()),
    diagnostics: allDiagnostics,
    searchedAt: new Date().toISOString(),
    paidFallbackUsed: false,
    round,
    stopReason: stopReason || "SATURATED"
  };
}