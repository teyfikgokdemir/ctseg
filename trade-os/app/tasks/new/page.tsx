import Link from "next/link";
import AppHeader from "@/components/app-header";
import { TradeForm } from "@/components/trade-form";
import { currentUser } from "@/lib/current-user";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";
export default async function NewTaskPage() {
  const user = await currentUser();
  if (!user) return <main className="shell"><div className="error-banner">Yetkisiz.</div></main>;
  const [cases, companies, users] = await Promise.all([db.tradeCase.findMany({ select: { id: true, title: true }, orderBy: { updatedAt: "desc" }, take: 200 }), db.company.findMany({ select: { id: true, name: true }, orderBy: { name: "asc" }, take: 300 }), db.user.findMany({ where: { active: true }, select: { email: true, name: true } })]);
  return <main className="shell"><AppHeader /><section className="desk-heading"><div><div className="eyebrow">FOLLOW-UP</div><h1>Görev oluştur</h1></div><Link href="/tasks">← Görevler</Link></section><section className="desk-panel desk-form-panel"><TradeForm action="task.create" onSaved="/tasks" submit="Görevi kaydet" fields={[{ name: "title", label: "Görev", required: true }, { name: "caseId", label: "Vaka", type: "select", options: cases.map((item) => ({ value: item.id, label: item.title })) }, { name: "companyId", label: "Firma", type: "select", options: companies.map((item) => ({ value: item.id, label: item.name })) }, { name: "dueAt", label: "Son tarih", type: "datetime-local" }, { name: "priority", label: "Öncelik", type: "select", options: ["LOW", "NORMAL", "HIGH"].map((value) => ({ value, label: value })) }, { name: "assignedToEmail", label: "Sorumlu", type: "select", value: user.email, options: users.map((item) => ({ value: item.email, label: item.name })) }, { name: "description", label: "Açıklama", type: "textarea" }]} /></section></main>;
}
