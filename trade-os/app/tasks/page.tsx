import Link from "next/link";
import AppHeader from "@/components/app-header";
import { TradeForm } from "@/components/trade-form";
import { currentUser } from "@/lib/current-user";
import { db } from "@/lib/db";
import { todayBounds } from "@/lib/trade-desk";

export const dynamic = "force-dynamic";
export default async function TasksPage({ searchParams }: { searchParams: Promise<{ filter?: string }> }) {
  if (!(await currentUser())) return <main className="shell"><div className="error-banner">Yetkisiz.</div></main>;
  const { filter } = await searchParams;
  const { start, end } = todayBounds();
  const tasks = await db.tradeTask.findMany({ include: { tradeCase: true, company: true }, orderBy: [{ dueAt: "asc" }, { createdAt: "desc" }], take: 300 });
  const groups = [
    { key: "today", title: "Bugün", items: tasks.filter((task) => task.status === "OPEN" && task.dueAt && task.dueAt >= start && task.dueAt < end) },
    { key: "overdue", title: "Geciken", items: tasks.filter((task) => task.status === "OPEN" && task.dueAt && task.dueAt < start) },
    { key: "upcoming", title: "Yaklaşan", items: tasks.filter((task) => task.status === "OPEN" && (!task.dueAt || task.dueAt >= end)) },
    { key: "completed", title: "Tamamlanan", items: tasks.filter((task) => task.status === "DONE") },
  ].filter((group) => !filter || (filter === "open" && group.key !== "completed") || filter === group.key);
  return <main className="shell"><AppHeader /><section className="desk-heading"><div><div className="eyebrow">FOLLOW-UP</div><h1>Görevler</h1><p>Teyfik ve Mina için açık aksiyonlar.</p></div><Link className="primary-link" href="/tasks/new">Görev Oluştur +</Link></section><nav className="desk-filter"><Link href="/tasks">Tümü</Link><Link href="/tasks?filter=today">Bugün</Link><Link href="/tasks?filter=overdue">Geciken</Link><Link href="/tasks?filter=upcoming">Yaklaşan</Link><Link href="/tasks?filter=completed">Tamamlanan</Link></nav>{groups.map((group) => <section className="desk-panel" key={group.key}><div className="desk-panel-head"><h2>{group.title}</h2><span>{group.items.length}</span></div>{group.items.map((task) => <article className="desk-list-row" key={task.id}><div><strong>{task.title}</strong><small>{task.tradeCase ? <Link href={`/cases/${task.caseId}`}>{task.tradeCase.title}</Link> : "Genel"} · {task.company?.name || "Firma yok"}</small><small>{task.assignedToEmail} · {task.priority}</small></div><div className="desk-list-side"><span>{task.dueAt?.toLocaleString("tr-TR") || "Tarih yok"}</span>{task.status === "OPEN" && <TradeForm action="task.complete" hidden={{ taskId: task.id }} fields={[]} submit="Tamamla" />}</div></article>)}{!group.items.length && <p className="desk-empty">Bu grupta görev yok.</p>}</section>)}</main>;
}
