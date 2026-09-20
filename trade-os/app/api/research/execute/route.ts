import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/current-user";
import { getResearchAIProvider } from "@/lib/research/local-ai-provider";
import { runResearch } from "@/lib/research/orchestrator";
import { resolveCompanies } from "@/lib/research/company-resolver";
import type { CompanyCandidate } from "@/lib/research/types";
import type { ResearchReview } from "@/lib/research/research-review";
import type { ResearchCaseType, ResearchFinding, ResearchRun, ResearchMode } from "@/lib/research/types";

const allowedTypes = new Set<ResearchCaseType>(["SOURCING", "BUYER_SEARCH", "LOGISTICS", ]);
const allowedModes = new Set<ResearchMode>(["QUICK", "DEEP"]);

function reference() {
  return "CTSEG-" + new Date().getUTCFullYear() + "-" + Date.now().toString(36).slice(-6).toUpperCase();
}

export async function POST(request: NextRequest) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  const body = await request.json();
  const rawRequest = String(body.rawRequest || "").trim();
  const preferred = allowedTypes.has(body.preferredType) ? body.preferredType as ResearchCaseType : undefined;
  const mode = allowedModes.has(body.mode) ? body.mode as ResearchMode : "QUICK";
  
  if (!rawRequest || rawRequest.length > 4000) {
    return NextResponse.json({ error: "Talep metni 1-4000 karakter olmalı." }, { status: 400 });
  }

  const aiProvider = getResearchAIProvider();
  const parsed = await aiProvider.parse(rawRequest, preferred);
  
  try {
    const results: Array<{ type: ResearchCaseType; companies: CompanyCandidate[]; review: ResearchReview } & ResearchRun> = [];
    
    // Check clarification immediately on first task
    const budgetTracker = { fetchesUsed: 0 };
    const testRun = await runResearch({ budgetTracker,
      type: parsed.tasks[0], mode, rawRequest,
      product: parsed.tasks[0] === "LOGISTICS" ? undefined : parsed.normalizedProduct || undefined,
      aliases: parsed.aliases, grade: parsed.grade || undefined,
      sourceRegion: parsed.tasks[0] === "SOURCING" ? parsed.preferredSourcingRegion || undefined : parsed.sourceCountry || undefined,
      destination: parsed.destinations[0], destinations: parsed.tasks[0] === "BUYER_SEARCH" ? parsed.destinations : undefined,
      excludedCountries: parsed.excludedCountries, transportModes: parsed.transportModes,
      maxQueries: 12
    });
    
    if (testRun.clarification?.clarificationRequired) {
      return NextResponse.json({ parsed, clarification: testRun.clarification });
    }

    // Passed clarification, create DB case
    const created = await db.tradeCase.create({ data: {
      reference: reference(), type: parsed.tasks[0], title: (parsed.normalizedProduct || rawRequest).slice(0, 100),
      rawRequest, productName: parsed.normalizedProduct, grade: parsed.grade,
      quantity: parsed.quantity === null ? null : parsed.quantity + " " + (parsed.quantityUnit || "").trim(),
      sourceRegion: parsed.preferredSourcingRegion, destination: parsed.destinations.join(", ") || null,
      transportModes: parsed.transportModes, createdById: user.id,
    } });
    const session = await db.researchSession.create({ data: { caseId: created.id } });
    await db.tradeCase.update({ where: { id: created.id }, data: { status: "RESEARCHING" } });

    // Actually run for all tasks (testRun was valid)
    for (const type of parsed.tasks) {
      const destination = parsed.destinations[0];
      const run = type === parsed.tasks[0] ? testRun : await runResearch({ budgetTracker, type, mode, rawRequest,
        product: type === "LOGISTICS" ? undefined : parsed.normalizedProduct || undefined,
        aliases: parsed.aliases, grade: parsed.grade || undefined,
        sourceRegion: type === "SOURCING" ? parsed.preferredSourcingRegion || undefined : parsed.sourceCountry || undefined,
        destination, destinations: type === "BUYER_SEARCH" ? parsed.destinations : undefined,
        excludedCountries: parsed.excludedCountries, transportModes: parsed.transportModes,
        maxQueries: 12 });
        
      const companies = resolveCompanies(run.findings);
      
      const limitedCompanies = companies.slice(0, 20); // pass fewer to AI to prevent context length errors
      const review = await aiProvider.review(parsed, type, limitedCompanies); // cast for now
      results.push({ type, ...run, companies, review });
    }
    
    const allFindings = new Map<string, ResearchFinding>();
    for (const result of results) for (const finding of result.findings) allFindings.set(finding.url, finding);
    
    await db.$transaction(async (tx) => {
      if (allFindings.size) await tx.researchFinding.createMany({ data: [...allFindings.values()].map((finding) => ({
        sessionId: session.id, title: finding.title.slice(0, 500), url: finding.url,
        snippet: finding.snippet?.slice(0, 4000) ?? null, domain: finding.domain,
        adapter: finding.adapter, query: finding.query.slice(0, 1000), language: finding.language,
        freshnessScore: finding.freshnessScore, verificationScore: finding.verificationScore,
        historicalOnly: finding.historicalOnly,
      })) });
      for (const result of results) for (const candidate of result.companies) {
        const existing = await tx.company.findFirst({ where: { website: candidate.website }, select: { id: true } });
        const company = existing || await tx.company.create({ data: {
          name: candidate.name, website: candidate.website, country: candidate.country.value || "UNKNOWN",
          type: "OTHER", freshnessScore: candidate.freshnessScore,
          verificationScore: candidate.verificationScore,
        }, select: { id: true } });
        await tx.caseCompany.upsert({ where: { caseId_companyId: { caseId: created.id, companyId: company.id } },
          update: { relevanceScore: candidate.relevanceScore },
          create: { caseId: created.id, companyId: company.id, relevanceScore: candidate.relevanceScore,
            matchReason: "Found for " + result.type + "; see evidence" } });
        await tx.evidence.createMany({ data: candidate.evidenceSources.map((source) => ({
          companyId: company.id, claim: source.claimType, sourceUrl: source.url, sourceType: source.type || "HTML", status: source.status === "CONFIRMED" ? "VERIFIED" : source.status as import("@prisma/client").EvidenceStatus,
        })) });
      }
      await tx.researchSession.update({ where: { id: session.id }, data: {
        queryCount: results.reduce((sum, result) => sum + result.queries.length, 0),
        resultCount: allFindings.size, completedAt: new Date(), paidFallbackUsed: false,
      } });
    }, { timeout: 20000 });
    return NextResponse.json({ case: { id: created.id, reference: created.reference },
      parsed, results, paidFallbackUsed: false });
  } catch (error) {
    return NextResponse.json({ error: "Araştırma tamamlanamadı.", detail: error instanceof Error ? error.message : "unknown",
      paidFallbackUsed: false }, { status: 500 });
  }
}



