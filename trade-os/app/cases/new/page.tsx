import Link from "next/link";
import AppHeader from "@/components/app-header";
import { TradeForm } from "@/components/trade-form";
import { currentUser } from "@/lib/current-user";

export const dynamic = "force-dynamic";
export default async function NewCasePage() {
  const user = await currentUser();
  if (!user) return <main className="shell"><div className="error-banner">Yetkisiz.</div></main>;
  return <main className="shell"><AppHeader /><section className="desk-heading"><div><div className="eyebrow">YENİ TALEP</div><h1>Yeni ticari vaka</h1><p>İşi kaydedin, sorumlusunu ve sıradaki aksiyonu belirleyin.</p></div><Link href="/research/new">Araştırma başlat ↗</Link></section>
    <div className="desk-panel desk-form-panel"><TradeForm action="case.create" submit="Vakayı oluştur" fields={[
      { name: "title", label: "Vaka başlığı", required: true }, { name: "productName", label: "Ürün" },
      { name: "productSpecification", label: "Ürün spesifikasyonu", type: "textarea" },
      { name: "quantity", label: "Miktar" }, { name: "quantityUnit", label: "Miktar birimi" }, { name: "frequency", label: "Sıklık" },
      { name: "sourceCountry", label: "Kaynak ülke" }, { name: "destinationCountry", label: "Hedef ülke" },
      { name: "targetPrice", label: "Hedef fiyat", type: "number" }, { name: "targetCurrency", label: "Hedef para birimi" },
      { name: "incoterm", label: "Incoterm" }, { name: "paymentPreference", label: "Ödeme tercihi" },
      { name: "priority", label: "Öncelik", type: "select", options: [{ value: "LOW", label: "Düşük" }, { value: "NORMAL", label: "Normal" }, { value: "HIGH", label: "Yüksek" }] },
      { name: "nextAction", label: "Sonraki aksiyon" }, { name: "nextActionAt", label: "Aksiyon tarihi", type: "datetime-local" },
      { name: "notes", label: "Notlar", type: "textarea" },
    ]} /></div>
  </main>;
}
