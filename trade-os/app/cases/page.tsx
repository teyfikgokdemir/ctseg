import Link from "next/link";
import { DealStage, type Prisma } from "@prisma/client";
import AppHeader from "@/components/app-header";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/current-user";
import { activeStages, stageLabels } from "@/lib/trade-desk";
import { DeleteCaseButton } from "./delete-case-button";

export const dynamic = "force-dynamic";
export default async function CasesPage({ searchParams }: { searchParams: Promise<{ filter?: string; stage?: string; owner?: string }> }) {
  const user = await currentUser();
  if (!user) return <main className="shell"><div className="error-banner">Yetkisiz.</div></main>;
  const params = await searchParams;
  const where: Prisma.TradeCaseWhereInput = {};
  if (params.stage && Object.values(DealStage).includes(params.stage as DealStage)) where.stage = params.stage as DealStage;
  else if (params.filter === "hold") where.stage = DealStage.ON_HOLD;
  else if (params.filter === "completed") where.stage = DealStage.COMPLETED;
  else if (params.filter === "lost") where.stage = DealStage.LOST;
  else where.stage = { in: activeStages };
  if (params.owner) where.ownerUserEmail = params.owner;
  const [cases, owners] = await Promise.all([
    db.tradeCase.findMany({ where, include: { createdBy: { select: { name: true, email: true } }, activities: { orderBy: { createdAt: "desc" }, take: 1 } }, orderBy: { updatedAt: "desc" }, take: 100 }),
    db.user.findMany({ where: { active: true }, select: { email: true, name: true }, orderBy: { name: "asc" } }),
  ]);
  return <main className="shell"><AppHeader /><section className="desk-heading"><div><div className="eyebrow">DEAL PIPELINE</div><h1>Vakalar</h1><p>İşin aşaması, sahibi ve sıradaki adımı tek görünümde.</p></div><Link className="primary-link" href="/cases/new">Yeni Talep +</Link></section>
    <nav className="desk-filter" aria-label="Vaka filtreleri">{[["active", "Aktif"], ["hold", "Beklemede"], ["completed", "Tamamlanan"], ["lost", "Kaybedilen"]].map(([key, label]) => <Link className={(params.filter || "active") === key && !params.stage ? "selected" : ""} href={`/cases?filter=${key}`} key={key}>{label}</Link>)}<form><select name="stage" defaultValue={params.stage || ""} aria-label="Aşama"><option value="">Tüm aşamalar</option>{Object.values(DealStage).map((stage) => <option value={stage} key={stage}>{stageLabels[stage]}</option>)}</select><select name="owner" defaultValue={params.owner || ""} aria-label="Sorumlu"><option value="">Tüm sorumlular</option>{owners.map((owner) => <option value={owner.email} key={owner.email}>{owner.name}</option>)}</select><button type="submit">Filtrele</button></form></nav>
    <section className="desk-panel"><div className="desk-table-wrap"><table className="desk-table"><thead><tr><th>Vaka</th><th>Ürün</th><th>Hedef ülke</th><th>Miktar</th><th>Aşama</th><th>Sorumlu</th><th>Son aktivite</th><th>Sonraki aksiyon</th><th></th></tr></thead><tbody>{cases.map((item) => <tr key={item.id}><td><Link href={`/cases/${item.id}`}>{item.title}</Link><small>{item.reference}</small></td><td>{item.productName || "—"}</td><td>{item.destinationCountry || item.destination || "—"}</td><td>{item.quantity || "—"} {item.quantityUnit || ""}</td><td><span className="stage-pill">{stageLabels[item.stage]}</span></td><td>{item.ownerUserEmail || item.createdBy.name}</td><td>{item.activities[0]?.createdAt.toLocaleDateString("tr-TR") || item.updatedAt.toLocaleDateString("tr-TR")}</td><td>{item.nextAction || "—"}</td><td>{user.role === "ADMIN" && <DeleteCaseButton id={item.id} title={item.title} />}</td></tr>)}</tbody></table></div>{!cases.length && <p className="desk-empty">Bu filtrede vaka yok.</p>}</section>
  </main>;
}
