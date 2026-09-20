import Link from "next/link";
import AppHeader from "@/components/app-header";
import { TradeForm } from "@/components/trade-form";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/current-user";

export const dynamic = "force-dynamic";
export default async function NewQuotationPage() {
  if (!(await currentUser())) return <main className="shell"><div className="error-banner">Yetkisiz.</div></main>;
  const links = await db.caseCompany.findMany({ include: { tradeCase: true, company: true }, orderBy: { tradeCase: { updatedAt: "desc" } }, take: 300 });
  return <main className="shell"><AppHeader /><section className="desk-heading"><div><div className="eyebrow">YENİ TEKLİF</div><h1>Teklif gir</h1><p>Vaka ve firma eşleştirmesini seçin.</p></div><Link href="/quotations">← Teklifler</Link></section><section className="desk-panel desk-form-panel"><TradeForm action="quotation.create" onSaved="/quotations" submit="Teklifi kaydet" fields={[{ name: "caseId", label: "Vaka", type: "select", required: true, options: [...new Map(links.map((link) => [link.caseId, { value: link.caseId, label: link.tradeCase.title }])).values()] }, { name: "companyId", label: "Firma", type: "select", required: true, options: [...new Map(links.map((link) => [link.companyId, { value: link.companyId, label: link.company.name }])).values()] }, { name: "productName", label: "Ürün", required: true }, { name: "unitPrice", label: "Birim fiyat", type: "number", required: true }, { name: "currency", label: "Para birimi", value: "USD", required: true }, { name: "unit", label: "Birim", value: "MT" }, { name: "quantity", label: "Miktar", type: "number" }, { name: "quantityUnit", label: "Miktar birimi" }, { name: "moq", label: "MOQ" }, { name: "incoterm", label: "Incoterm" }, { name: "leadTimeDays", label: "Termin (gün)", type: "number" }, { name: "paymentTerms", label: "Ödeme" }, { name: "originCountry", label: "Menşe" }, { name: "specification", label: "Spesifikasyon" }, { name: "quotationDate", label: "Teklif tarihi", type: "date" }, { name: "notes", label: "Not", type: "textarea" }]} /></section></main>;
}
