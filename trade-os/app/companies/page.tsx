import Link from "next/link";
import AppHeader from "@/components/app-header";
import { currentUser } from "@/lib/current-user";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";
export default async function CompaniesPage() {
  if (!(await currentUser())) return <main className="shell"><div className="error-banner">Yetkisiz.</div></main>;
  const companies = await db.company.findMany({ include: { _count: { select: { cases: true, contacts: true, quotations: true } } }, orderBy: { updatedAt: "desc" }, take: 200 });
  return <main className="shell"><AppHeader /><section className="desk-heading"><div><div className="eyebrow">COMPANY CRM</div><h1>Firmalar</h1><p>Tek firma kaydı, birden çok vaka ve temas.</p></div><Link className="primary-link" href="/companies/new">Firma Ekle +</Link></section><section className="desk-panel"><div className="desk-table-wrap"><table className="desk-table"><thead><tr><th>Firma</th><th>Ülke / şehir</th><th>Roller</th><th>İletişim</th><th>Vakalar</th><th>Teklifler</th><th>Son temas</th></tr></thead><tbody>{companies.map((company) => <tr key={company.id}><td><Link href={`/companies/${company.id}`}>{company.name}</Link><small>{company.website || "Web sitesi yok"}</small></td><td>{[company.country, company.city].filter(Boolean).join(" / ") || "—"}</td><td>{company.roles.join(", ") || company.type}</td><td>{company.email || company.phone || "—"}<small>{company._count.contacts} kişi</small></td><td>{company._count.cases}</td><td>{company._count.quotations}</td><td>{company.lastContactAt?.toLocaleDateString("tr-TR") || "—"}</td></tr>)}</tbody></table></div>{!companies.length && <p className="desk-empty">Henüz firma yok.</p>}</section></main>;
}
