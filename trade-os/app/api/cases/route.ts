import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/current-user";

const allowedTypes = new Set(["SOURCING", "BUYER_SEARCH", "LOGISTICS"] as const);

function reference() {
  const year = new Date().getUTCFullYear();
  const suffix = Date.now().toString(36).slice(-6).toUpperCase();
  return `CTSEG-${year}-${suffix}`;
}

export async function GET() {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });

  const cases = await db.tradeCase.findMany({
    orderBy: { updatedAt: "desc" },
    take: 100,
    include: {
      _count: { select: { companies: true } },
    },
  });

  return NextResponse.json({ cases });
}

export async function POST(request: NextRequest) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });

  const body = await request.json();
  const type = String(body.type || "");
  const rawRequest = String(body.rawRequest || "").trim();

  if (!allowedTypes.has(type as "SOURCING" | "BUYER_SEARCH" | "LOGISTICS") || !rawRequest) {
    return NextResponse.json({ error: "Geçerli vaka tipi ve talep gerekli." }, { status: 400 });
  }

  const created = await db.tradeCase.create({
    data: {
      reference: reference(),
      type: type as "SOURCING" | "BUYER_SEARCH" | "LOGISTICS",
      title: String(body.title || rawRequest.slice(0, 100)).trim(),
      rawRequest,
      productName: body.productName ? String(body.productName).trim() : null,
      grade: body.grade ? String(body.grade).trim() : null,
      quantity: body.quantity ? String(body.quantity).trim() : null,
      sourceRegion: body.sourceRegion ? String(body.sourceRegion).trim() : null,
      destination: body.destination ? String(body.destination).trim() : null,
      transportModes: Array.isArray(body.transportModes)
        ? body.transportModes.map(String).filter(Boolean)
        : [],
      createdById: user.id,
    },
  });

  return NextResponse.json({ case: created }, { status: 201 });
}
