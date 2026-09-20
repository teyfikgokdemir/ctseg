import Link from "next/link";
import AppHeader from "@/components/app-header";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/current-user";

export const dynamic = "force-dynamic";
export default async function QuotationsPage() {
  if (!(await currentUser())) return <main className="shell"><div className="error-banner">Yetkisiz.</div></main>;
  const quotations = await db.quotation.findMany({ where: { deletedAt: null }, include: { company: true, tradeCase: true }, orderBy: { quotationDate: "desc" }, take: 200 });
  return <main className="shell"><AppHeader /><section className="desk-heading"><div><div className="eyebrow">OFFERS / KARŞILAŞTIRMA</div><h1>Teklifler</h1><p>Fiyat, koşul ve termin kayıtları. Karşılaştırma her vakanın içinde yapılır.</p></div><Link className="primary-link" href="/quotations/new">Teklif Gir +</Link></section><section className="desk-panel"><div className="desk-table-wrap"><table className="desk-table"><thead><tr><th>Firma</th><th>Ürün</th><th>Birim fiyat</th><th>MOQ</th><th>Incoterm</th><th>Termin</th><th>Durum</th><th>Vaka</th></tr></thead><tbody>{quotations.map((quote) => <tr key={quote.id}><td>{quote.company.name}</td><td>{quote.productName}</td><td>{quote.unitPrice.toString()} {quote.currency} / {quote.unit}</td><td>{quote.moq || "—"}</td><td>{quote.incoterm || "—"}</td><td>{quote.leadTimeDays ?? "—"}</td><td>{quote.status}</td><td><Link href={`/cases/${quote.caseId}?tab=offers`}>{quote.tradeCase.title}</Link></td></tr>)}</tbody></table></div>{!quotations.length && <p className="desk-empty">Teklif yok.</p>}</section></main>;
}
