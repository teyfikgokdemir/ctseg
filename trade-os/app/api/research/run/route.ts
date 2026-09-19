import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/current-user";
import { runResearch } from "@/lib/research/orchestrator";
import type { ResearchCaseType } from "@/lib/research/types";

const allowedTypes = new Set<ResearchCaseType>(["SOURCING", "BUYER_SEARCH", "LOGISTICS"]);

export async function POST(request: NextRequest) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });

  const body = await request.json();
  const type = String(body.type || "") as ResearchCaseType;
  const rawRequest = String(body.rawRequest || "").trim();
  const caseId = body.caseId ? String(body.caseId) : null;

  if (!allowedTypes.has(type) || !rawRequest || !caseId) {
    return NextResponse.json({ error: "Geçerli vaka, vaka tipi ve talep metni gerekli." }, { status: 400 });
  }

  const tradeCase = await db.tradeCase.findUnique({ where: { id: caseId } });
  if (!tradeCase) return NextResponse.json({ error: "Vaka bulunamadı." }, { status: 404 });

  const session = await db.researchSession.create({
    data: { caseId },
  });

  await db.tradeCase.update({
    where: { id: caseId },
    data: { status: "RESEARCHING" },
  });

  try {
    const result = await runResearch({
      type,
      rawRequest,
      product: body.product ? String(body.product) : undefined,
      sourceRegion: body.sourceRegion ? String(body.sourceRegion) : undefined,
      destination: body.destination ? String(body.destination) : undefined,
      languages: Array.isArray(body.languages) ? body.languages.map(String) : undefined,
      maxQueries: body.maxQueries ? Number(body.maxQueries) : undefined,
    });

    if (result.findings.length) {
      await db.researchFinding.createMany({
        data: result.findings.map((finding) => ({
          sessionId: session.id,
          title: finding.title.slice(0, 500),
          url: finding.url,
          snippet: finding.snippet?.slice(0, 4000) ?? null,
          domain: finding.domain,
          adapter: finding.adapter,
          query: finding.query.slice(0, 1000),
          language: finding.language,
          freshnessScore: finding.freshnessScore,
          verificationScore: finding.verificationScore,
          historicalOnly: finding.historicalOnly,
        })),
      });
    }

    await db.researchSession.update({
      where: { id: session.id },
      data: {
        queryCount: result.queries.length,
        resultCount: result.findings.length,
        paidFallbackUsed: result.paidFallbackUsed,
        completedAt: new Date(),
      },
    });

    return NextResponse.json({ ...result, sessionId: session.id });
  } catch (error) {
    await db.researchSession.update({
      where: { id: session.id },
      data: { completedAt: new Date() },
    });

    if (error instanceof Error && error.message === "NO_FREE_SEARCH_BACKEND") {
      return NextResponse.json({
        error: "Ücretsiz arama backend'i yapılandırılmadı.",
        required: "SEARXNG_URL",
        paidFallbackUsed: false,
      }, { status: 503 });
    }

    return NextResponse.json({
      error: "Araştırma çalıştırılamadı.",
      paidFallbackUsed: false,
    }, { status: 500 });
  }
}
