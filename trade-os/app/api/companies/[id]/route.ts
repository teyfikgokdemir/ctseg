import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { currentUser } from "@/lib/current-user";
import { db } from "@/lib/db";

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  if (user.role !== "ADMIN") return NextResponse.json({ error: "Firma silme yetkisi yalnızca yöneticiye aittir." }, { status: 403 });
  const { id } = await params;
  try {
    const result = await db.$transaction(async (tx) => {
      // The row lock serializes this check with inserts referencing the company.
      const locked = await tx.$queryRaw<Array<{ id: string }>>`SELECT "id" FROM "Company" WHERE "id" = ${id} FOR UPDATE`;
      if (!locked.length) return "missing";
      const company = await tx.company.findUnique({ where: { id }, include: { _count: { select: {
        cases: true, buyerCases: true, quotations: true, tasks: true, activities: true,
        documents: true, rfqDrafts: true, contacts: true, evidence: true,
      } } } });
      if (!company || Object.values(company._count).some((count) => count > 0)) return "linked";
      await tx.company.delete({ where: { id } });
      return "deleted";
    });
    if (result === "missing") return NextResponse.json({ error: "Firma bulunamadı." }, { status: 404 });
    if (result === "linked") return NextResponse.json({ error: "Firma bağlı kişi, kanıt veya operasyon kayıtları nedeniyle silinemez." }, { status: 409 });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && ["P2003", "P2034"].includes(error.code)) {
      return NextResponse.json({ error: "Firma ilişkileri değişti; silme işlemi tamamlanamadı." }, { status: 409 });
    }
    throw error;
  }
  return NextResponse.json({ ok: true });
}
