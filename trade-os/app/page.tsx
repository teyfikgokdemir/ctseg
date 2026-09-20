import Link from "next/link";
import AppHeader from "@/components/app-header";
import { db } from "@/lib/db";
import { currentUser, identityForEmail } from "@/lib/current-user";
import { dashboardWhere, loadDashboardMetrics, stageLabels } from "@/lib/trade-desk";

export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await currentUser();
  if (!user) return <main className="shell"><div className="error-banner">Yetkisiz.</div></main>;
  const where = dashboardWhere();
  const [metrics, followups, cases, quotations] = await Promise.all([
    loadDashboardMetrics(db),
    db.tradeTask.findMany({ where: where.todayTasks, include: { tradeCase: true, company: true }, orderBy: [{ dueAt: "asc" }, { priority: "desc" }], take: 8 }),
    db.tradeCase.findMany({ where: where.activeCases, include: { createdBy: { select: { name: true, email: true } }, activities: { orderBy: { createdAt: "desc" }, take: 1 } }, orderBy: { updatedAt: "desc" }, take: 8 }),
    db.quotation.findMany({ where: { deletedAt: null }, include: { company: true, tradeCase: true }, orderBy: { quotationDate: "desc" }, take: 6 }),
  ]);
  return <main className="shell shell-dashboard">
    <AppHeader />
    <section className="desk-heading"><div><div className="eyebrow">CTSEG TRADE DESK / GÜNLÜK OPERASYON</div><h1>Bugünün masası</h1><p>Açık işler, fiyat bekleyen vakalar ve sıradaki aksiyonlar.</p></div><Link className="primary-link" href="/cases/new">Yeni Talep +</Link></section>
    <section className="desk-kpis" aria-label="Operasyon göstergeleri">
      <Link href="/cases?filter=active"><span>Aktif Vakalar</span><strong>{metrics.activeCases}</strong></Link>
      <Link href="/cases?stage=RFQ_SENT"><span>Teklif Bekleyenler</span><strong>{metrics.pendingQuotations}</strong></Link>
      <Link href="/tasks?filter=today"><span>Bugün Takip</span><strong>{metrics.todayTasks}</strong></Link>
      <Link href="/tasks?filter=open"><span>Açık Görevler</span><strong>{metrics.openTasks}</strong></Link>
    </section>
    <div className="desk-columns"><section className="desk-panel"><div className="desk-panel-head"><h2>Bugün takip edilecekler</h2><Link href="/tasks">Tüm görevler ↗</Link></div>
      {followups.length ? followups.map((task) => <article className="desk-list-row" key={task.id}><div><strong>{task.title}</strong><small>{task.tradeCase?.title || "Genel görev"} · {task.company?.name || "Firma belirtilmedi"}</small></div><div className="desk-list-side"><span>{task.dueAt?.toLocaleDateString("tr-TR") || "—"}</span><small>{identityForEmail(task.assignedToEmail)?.firstName || task.assignedToEmail} · {task.priority}</small></div></article>) : <p className="desk-empty">Bugüne düşen açık görev yok.</p>}
    </section><section className="desk-panel"><div className="desk-panel-head"><h2>Hızlı işlemler</h2></div><div className="quick-actions"><Link href="/cases/new">Yeni Talep <b>↗</b></Link><Link href="/companies/new">Firma Ekle <b>↗</b></Link><Link href="/quotations/new">Teklif Gir <b>↗</b></Link><Link href="/tasks/new">Görev Oluştur <b>↗</b></Link></div></section></div>
    <section className="desk-panel"><div className="desk-panel-head"><h2>Aktif vakalar</h2><Link href="/cases">Tüm vakalar ↗</Link></div><div className="desk-table-wrap"><table className="desk-table"><thead><tr><th>Vaka</th><th>Ürün / Hedef</th><th>Miktar</th><th>Aşama</th><th>Sorumlu</th><th>Son aktivite</th><th>Sonraki aksiyon</th></tr></thead><tbody>{cases.map((item) => <tr key={item.id}><td><Link href={`/cases/${item.id}`}>{item.title}</Link></td><td>{item.productName || "—"}<small>{item.destinationCountry || item.destination || "—"}</small></td><td>{item.quantity || "—"} {item.quantityUnit || ""}</td><td><span className="stage-pill">{stageLabels[item.stage]}</span></td><td>{identityForEmail(item.ownerUserEmail || item.createdBy.email)?.firstName || item.createdBy.name}</td><td>{item.activities[0]?.createdAt.toLocaleDateString("tr-TR") || item.updatedAt.toLocaleDateString("tr-TR")}</td><td>{item.nextAction || "—"}</td></tr>)}</tbody></table></div>{!cases.length && <p className="desk-empty">Aktif vaka yok.</p>}</section>
    <section className="desk-panel"><div className="desk-panel-head"><h2>Son teklifler</h2><Link href="/quotations">Teklifleri aç ↗</Link></div><div className="desk-table-wrap"><table className="desk-table"><thead><tr><th>Firma</th><th>Ürün</th><th>Birim fiyat</th><th>Incoterm</th><th>Tarih</th><th>Vaka</th></tr></thead><tbody>{quotations.map((quote) => <tr key={quote.id}><td>{quote.company.name}</td><td>{quote.productName}</td><td>{quote.unitPrice.toString()} {quote.currency} / {quote.unit}</td><td>{quote.incoterm || "—"}</td><td>{quote.quotationDate.toLocaleDateString("tr-TR")}</td><td><Link href={`/cases/${quote.caseId}?tab=offers`}>{quote.tradeCase.title}</Link></td></tr>)}</tbody></table></div>{!quotations.length && <p className="desk-empty">Henüz teklif kaydı yok.</p>}</section>
  </main>;
}
