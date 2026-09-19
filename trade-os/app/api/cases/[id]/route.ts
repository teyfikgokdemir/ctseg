import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/current-user";

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  }

  if (user.role !== "ADMIN") {
    return NextResponse.json(
      { error: "Vaka silme yetkisi yalnızca yöneticiye aittir." },
      { status: 403 },
    );
  }

  const { id } = await params;
  const existing = await db.tradeCase.findUnique({
    where: { id },
    select: { id: true },
  });

  if (!existing) {
    return NextResponse.json({ error: "Vaka bulunamadı." }, { status: 404 });
  }

  await db.tradeCase.delete({ where: { id } });

  return NextResponse.json({ ok: true });
}
