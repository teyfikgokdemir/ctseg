import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@/lib/current-user";
import { db } from "@/lib/db";

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  if (user.role !== "ADMIN") return NextResponse.json({ error: "Firma silme yetkisi yalnızca yöneticiye aittir." }, { status: 403 });
  const { id } = await params;
  const company = await db.company.findUnique({ where: { id }, include: { _count: { select: { cases: true, buyerCases: true, quotations: true, tasks: true, activities: true, documents: true, rfqDrafts: true } } } });
  if (!company) return NextResponse.json({ error: "Firma bulunamadı." }, { status: 404 });
  if (Object.values(company._count).some((count) => count > 0)) return NextResponse.json({ error: "Firma operasyon kayıtlarına bağlı; silinemez." }, { status: 409 });
  await db.company.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
