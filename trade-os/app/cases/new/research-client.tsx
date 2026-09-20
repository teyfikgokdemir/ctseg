"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

type Mode = "SOURCING" | "BUYER_SEARCH" | "LOGISTICS";
type Parsed = { intent: string; tasks: Mode[]; normalizedProduct: string | null; grade: string | null;
  quantity: number | null; quantityUnit: string | null; recurrence: string | null;
  preferredSourcingRegion: string | null; destinations: string[]; transportModes: string[] };
type Evidence = { type: string; url: string; extractedText?: string; timestamp: string };
type VerifiedField<T> = { value: T; state: string; evidence?: Evidence[] };
type CompanyRole = string;
type Company = { key: string; name: string; country: VerifiedField<string>; role: VerifiedField<CompanyRole>;
  productConfirmed: VerifiedField<boolean>; gradeConfirmed: VerifiedField<string>; website: string; 
  contactEmail: VerifiedField<string>; contactPhone: VerifiedField<string>; freshnessScore: number; verificationScore: number;
  evidenceSources: Evidence[]; verificationLevel: string; negativeSignals?: string[] };
type ResearchResult = { type: Mode; companies: Company[];
  review: { summary: string; limitations: string[] } };
type ResponseData = { case?: { id: string; reference: string }; parsed: Parsed; results?: ResearchResult[]; clarification?: { clarificationRequired: boolean; question: string } };

const modes: { value: Mode; label: string }[] = [
  { value: "SOURCING", label: "Tedarikçi" }, { value: "BUYER_SEARCH", label: "Alıcı" },
  { value: "LOGISTICS", label: "Lojistik" },
];
const label = (type: string) => modes.find((item) => item.value === type)?.label || type;
const verificationLabel = (level: string) => level === "ROLE_CONFIRMED" ? "Ürün ve rol doğrulandı" :
  level === "PRODUCT_CONFIRMED" ? "Ürün doğrulandı" : level === "SOURCE_FETCHED" ? "Kaynak incelendi" : "Doğrulanamadı";

export default function ResearchClient({ name, firstName }: { name: string; firstName: string }) {
  const [rawRequest, setRawRequest] = useState("");
  const [clarificationAnswer, setClarificationAnswer] = useState("");
  const [data, setData] = useState<ResponseData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function research(event: FormEvent, isClarification = false) {
    event.preventDefault();
    const finalRequest = isClarification ? rawRequest + "\n\n[CLARIFICATION]: " + clarificationAnswer : rawRequest;
    if (!finalRequest.trim()) return;
    
    if (isClarification) {
      setRawRequest(finalRequest);
      setClarificationAnswer("");
    }

    setLoading(true); setData(null); setError("");
    try {
      const response = await fetch("/api/research/execute", { method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ rawRequest: finalRequest }) });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Araştırma başlatılamadı.");
      setData(payload);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Araştırma başlatılamadı.");
    } finally { setLoading(false); }
  }

  return <>
    

    <section className="research-intro">
      <div className="eyebrow">Trade Intelligence</div>
      <h1>Ne arıyorsun?</h1>
      <p className="lead">Talebini kendi sözlerinle yaz. Kaynakları ve şirketleri kanıtlarıyla inceleyelim.</p>
    </section>

    {!data?.clarification?.clarificationRequired ? (
    <form className="research-form" onSubmit={(e) => research(e)}>
      <label htmlFor="request-text">Talep</label>
      <textarea id="request-text" value={rawRequest} onChange={(event) => setRawRequest(event.target.value)}
        rows={7} maxLength={4000} placeholder="Örn. İran için haftalık 100 MT Feed Grade L-Threonine arıyoruz. Önce Türkiye, sonra global." />
      <div className="research-form-footer">
        <span>Eksik ayrıntılar araştırmayı durdurmaz. Gerekirse size bir soru sorarız.</span>
        <button className="primary-button" disabled={loading || !rawRequest.trim()}>
          {loading ? "Araştırılıyor…" : "Araştır"}
        </button>
      </div>
    </form>
    ) : (
    <form className="research-form" onSubmit={(e) => research(e, true)}>
      <div className="error-banner">
        <div className="eyebrow">Agentic Soru (Eksik Bilgi)</div>
        <p><strong>{data.clarification.question}</strong></p>
      </div>
      <label htmlFor="clarification-text">Yanıtınız</label>
      <textarea id="clarification-text" value={clarificationAnswer} onChange={(event) => setClarificationAnswer(event.target.value)}
        rows={4} maxLength={1000} placeholder="Yanıtınızı buraya yazın..." autoFocus />
      <div className="research-form-footer">
        <button className="primary-button" disabled={loading || !clarificationAnswer.trim()}>
          {loading ? "Devam Ediliyor…" : "Yanıtla ve Devam Et"}
        </button>
      </div>
    </form>
    )}

    {loading && <section className="research-progress" role="status" aria-live="polite">
      <span className="progress-pulse" />
      <div><strong>Araştırılıyor...</strong><p>Kaynaklar ve şirketler inceleniyor.</p></div>
    </section>}
    {error && <div className="error-banner" role="alert">{error}</div>}

    {data?.results && <>
      <section className="research-summary">
        <div><div className="eyebrow">Araştırma sonucu</div><h2>{data.parsed.normalizedProduct || data.parsed.tasks.map(label).join(" + ")}</h2></div>
        <div className="summary-facts">
          <span>{data.parsed.tasks.map(label).join(" + ")}</span>
          {data.parsed.preferredSourcingRegion && <span>Öncelik {data.parsed.preferredSourcingRegion}</span>}
          {data.parsed.destinations.length > 0 && <span>Hedef {data.parsed.destinations.join(", ")}</span>}
          {data.parsed.quantity !== null && <span>{data.parsed.quantity} {data.parsed.quantityUnit}{data.parsed.recurrence === "weekly" ? " / hafta" : ""}</span>}
          {data.parsed.grade && <span>{data.parsed.grade}</span>}
        </div>
        {data.case && <Link href={"/cases/" + data.case.id}>Vaka {data.case.reference} ↗</Link>}
      </section>

      {data.results.map((result) => <section className="company-section" key={result.type}>
        <div className="company-section-head"><div><div className="eyebrow">{label(result.type)} araştırması</div>
          <h2>{result.companies.length} şirket adayı</h2></div>
          <span>{result.companies.filter((company) => company.verificationLevel === "ROLE_CONFIRMED").length} rolü ve ürünü doğrulanan</span></div>
        <p className="review-summary">{result.companies.filter((company) => company.verificationLevel === "ROLE_CONFIRMED").length} doğrulandı · {result.companies.filter((company) => company.verificationLevel === "PRODUCT_CONFIRMED" || company.verificationLevel === "SOURCE_FETCHED").length} kısmen doğrulandı · {result.companies.filter((company) => company.verificationLevel === "DISCOVERED").length} doğrulanamadı</p>
        <p className="review-summary">{result.review.summary}</p>
        {result.companies.length === 0 && <p className="empty-result">Kanıtlı ticari aday bulunamadı. Adapter tanısı aşağıdadır.</p>}
        <div className="company-grid">{result.companies.map((company) => <article className="company-card" key={company.key}>
          <div className="company-card-top"><div><h3>{company.name}</h3>
            <span>
                {company.country.state === "CONFIRMED" ? company.country.value : "Ülke doğrulanmadı"} · 
                {company.role.state === "CONFIRMED" ? company.role.value : "Rol bilinmiyor"}
            </span></div>
            <strong>{company.evidenceSources.length} kanıt</strong></div>
          <p>Ürün: {company.productConfirmed.state === "CONFIRMED" ? "Doğrulandı" : "Doğrulanamadı"} · Grade: {company.gradeConfirmed.state === "CONFIRMED" ? company.gradeConfirmed.value : "Doğrulanamadı"}</p>
          <div className="company-links"><a href={company.website} target="_blank" rel="noreferrer">Web sitesi ↗</a></div>
          {(company.contactEmail.state === "CONFIRMED" || company.contactPhone.state === "CONFIRMED") && 
             <p className="company-contact">{[company.contactEmail.value, company.contactPhone.value].filter(Boolean).join(" · ")}</p>}
          <div className="company-scores">
            <span>Güncellik {company.freshnessScore}</span>
            <span>{verificationLabel(company.verificationLevel)}</span>
          </div>
          <p className="company-missing">Eksik: {[company.country.state !== "CONFIRMED" && "ülke", company.role.state !== "CONFIRMED" && "rol", company.productConfirmed.state !== "CONFIRMED" && "ürün", company.gradeConfirmed.state !== "CONFIRMED" && "grade", company.contactEmail.state !== "CONFIRMED" && company.contactPhone.state !== "CONFIRMED" && "iletişim"].filter(Boolean).join(", ") || "Temel alanlar doğrulandı"}</p>
          {!!company.negativeSignals?.length && <p className="company-missing">Kaynak uyarısı: {company.negativeSignals.length} olumsuz veya eksik doğrulama sinyali</p>}
          <details className="evidence-list"><summary>Kaynakları göster</summary><ul>{company.evidenceSources.map((source, i) => <li key={i}>
            <a href={source.url} target="_blank" rel="noreferrer">{source.url}</a>
            <small>{source.type} Evidence</small>
          </li>)}</ul></details>
        </article>)}</div>
        {result.review.limitations.length > 0 && <div className="review-notes">
          {result.review.limitations.map((item) => <p key={item}>{item}</p>)}
        </div>}
      </section>)}
    </>}
  </>;
}
