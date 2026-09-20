import Link from "next/link";
import AppHeader from "@/components/app-header";
import { TradeForm } from "@/components/trade-form";
import { currentUser } from "@/lib/current-user";

export const dynamic = "force-dynamic";
export default async function NewCompanyPage() {
  if (!(await currentUser())) return <main className="shell"><div className="error-banner">Yetkisiz.</div></main>;
  return <main className="shell"><AppHeader /><section className="desk-heading"><div><div className="eyebrow">COMPANY CRM</div><h1>Firma ekle</h1></div><Link href="/companies">← Firmalar</Link></section><section className="desk-panel desk-form-panel"><TradeForm action="company.create" onSaved="/companies" submit="Firmayı kaydet" fields={[{ name: "name", label: "Firma adı", required: true }, { name: "website", label: "Website", type: "url" }, { name: "country", label: "Ülke" }, { name: "city", label: "Şehir" }, { name: "role", label: "Rol", type: "select", options: ["SUPPLIER", "MANUFACTURER", "DISTRIBUTOR", "BUYER", "IMPORTER", "LOGISTICS", "AGENT", "OTHER"].map((value) => ({ value, label: value })) }, { name: "email", label: "E-posta", type: "email" }, { name: "phone", label: "Telefon" }, { name: "whatsapp", label: "WhatsApp" }, { name: "address", label: "Adres" }, { name: "notes", label: "Notlar", type: "textarea" }]} /></section></main>;
}
