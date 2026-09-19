import { NextRequest, NextResponse } from "next/server";
import { runResearch } from "@/lib/research/orchestrator";
import type { ResearchCaseType } from "@/lib/research/types";

const allowedTypes = new Set<ResearchCaseType>(["SOURCING", "BUYER_SEARCH", "LOGISTICS"]);

export async function POST(request: NextRequest) {
  const body = await request.json();
  const type = String(body.type || "") as ResearchCaseType;
  const rawRequest = String(body.rawRequest || "").trim();

  if (!allowedTypes.has(type) || !rawRequest) {
    return NextResponse.json({ error: "Geçerli vaka tipi ve talep metni gerekli." }, { status: 400 });
  }

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

    return NextResponse.json(result);
  } catch (error) {
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
