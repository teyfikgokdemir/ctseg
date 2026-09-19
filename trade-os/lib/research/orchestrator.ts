/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { parseIntent } from "./intent-parser";
import { planResearchQueries } from "./query-planner";
import { searchPlannedQueries } from "./search-router";
import { SourceFetcher } from "./source-fetcher";
import type { ResearchFinding, ResearchRequest, ResearchRun, PlannedQuery, VerificationState, Evidence, CompanyRole, VerifiedField } from "./types";

function extractEvidence(finding: ResearchFinding, intent: any) {
  if (!finding.fetchedContent || !finding.fetchedContent.isLive || !finding.fetchedContent.text) return;
  
  const text = finding.fetchedContent.text.toLowerCase();
  const baseEvidence: Evidence = { url: finding.url, timestamp: new Date().toISOString(), type: "HTML", extractedText: text.substring(0, 300) };
  
  const confirm = <T>(value: T): VerifiedField<T> => ({ value, state: "CONFIRMED" as VerificationState, evidence: [baseEvidence] });

  // Product check
  const product = intent.product?.toLowerCase() || "threonine";
  if (text.includes(product)) {
    finding.productConfirmed = confirm(true);
  }

  // Grade check
  if (text.includes("feed grade") || text.includes("yem kalite")) {
    finding.gradeConfirmed = confirm("Feed Grade");
  }

  // Role check
  if (text.includes("manufacturer") || text.includes("üretici")) {
    finding.role = confirm("MANUFACTURER");
  } else if (text.includes("distributor") || text.includes("distribütör")) {
    finding.role = confirm("DISTRIBUTOR");
  }

  // Contact
  const emailMatch = text.match(/[\w.+-]+@[\w.-]+\.[a-z]{2,}/i);
  if (emailMatch) {
    finding.contactEmail = confirm(emailMatch[0]);
  }
}


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
  const maxFetch = isDeep ? 15 : 5;
  
  let allFindings: ResearchFinding[] = [];
  let allQueries: PlannedQuery[] = [];
  let allDiagnostics: any[] = [];
  
  let currentRound = 1;
  let currentQueries = planResearchQueries(request);
  
  while (currentRound <= maxRounds) {
    allQueries.push(...currentQueries);
    const searched = await searchPlannedQueries(request, parsedIntent.product || parsedIntent.intent, currentQueries);
    allDiagnostics.push(...searched.diagnostics);
    
    let fetchedCount = 0;
    for (const finding of searched.findings) {
      if (fetchedCount < maxFetch && SourceFetcher.isSafeUrl(finding.url)) {
         try {
           const content = await SourceFetcher.fetch(finding.url, 5000);
           finding.fetchedContent = content as any;
           fetchedCount++;
           
           // Verify evidence
           extractEvidence(finding, parsedIntent);
         } catch (e: any) {
           finding.fetchedContent = { isLive: false, error: e.message } as any;
         }
      }
      allFindings.push(finding);
    }
    
    if (currentRound < maxRounds) {
      // Gap analysis for missing roles or products
      let foundRoles = allFindings.filter(f => f.role?.state === "CONFIRMED").length;
      if (foundRoles < 2) {
         currentQueries = [{
           query: (parsedIntent.product || parsedIntent.intent) + " official manufacturer distributor",
           language: "en",
           intent: "Deep dive sourcing gap analysis",
           priority: 1
         }];
      } else {
         break;
      }
    }
    currentRound++;
  }

  const deduped = new Map<string, ResearchFinding>();
  for (const finding of allFindings) {
    const key = finding.url.replace(/\/$/, "").toLowerCase();
    const current = deduped.get(key);
    if (!current || finding.totalScore > current.totalScore) deduped.set(key, finding);
  }

  return { 
    request, 
    queries: allQueries, 
    findings: [...deduped.values()].sort((a, b) => b.totalScore - a.totalScore), 
    diagnostics: allDiagnostics,
    searchedAt: new Date().toISOString(), 
    paidFallbackUsed: false,
    clarification: {
       confidence: parsedIntent.confidence,
       missingCriticalFields: parsedIntent.missingCriticalFields,
       missingUsefulFields: parsedIntent.missingUsefulFields,
       assumptions: parsedIntent.assumptions,
       clarificationRequired: false
    },
    round: currentRound > maxRounds ? maxRounds : currentRound
  };
}



