/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

type Mode = "SOURCING" | "BUYER_SEARCH" | "LOGISTICS";
type ResearchMode = "QUICK" | "DEEP";
type Parsed = { intent: string; tasks: Mode[]; normalizedProduct: string | null; grade: string | null;
  quantity: number | null; quantityUnit: string | null; recurrence: string | null;
  preferredSourcingRegion: string | null; destinations: string[]; transportModes: string[] };
type Evidence = { type: string; url: string; extractedText?: string; timestamp: string };
type VerifiedField<T> = { value: T; state: string; evidence?: Evidence[] };
type CompanyRole = string;
type Company = { key: string; name: string; country: VerifiedField<string>; role: VerifiedField<CompanyRole>;
  productConfirmed: VerifiedField<boolean>; gradeConfirmed: VerifiedField<string>; website: string; 
  contactEmail: VerifiedField<string>; contactPhone: VerifiedField<string>; freshnessScore: number; verificationScore: number;
  evidenceSources: Evidence[]; verificationLevel: string };
type ResearchResult = { type: Mode; companies: Company[]; findings: { url: string }[];
  queries: { query: string }[]; diagnostics: { adapter: string; query: string; rawCount: number;
    acceptedCount: number; status: string; error?: string }[];
  review: { summary: string; followUpQueries: string[]; limitations: string[] }; round: number };
type ResponseData = { case?: { id: string; reference: string }; parsed: Parsed; results?: ResearchResult[]; clarification?: any };

const modes: { value: Mode; label: string }[] = [
  { value: "SOURCING", label: "Tedarikçi" }, { value: "BUYER_SEARCH", label: "Alıcı" },
  { value: "LOGISTICS", label: "Lojistik" },
];
const label = (type: string) => modes.find((item) => item.value === type)?.label || type;

export default function NewCasePage() {
  const [rawRequest, setRawRequest] = useState("");
  const [preferredType, setPreferredType] = useState<Mode | null>(null);
  const [researchMode, setResearchMode] = useState<ResearchMode>("QUICK");
  const [data, setData] = useState<ResponseData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function research(event: FormEvent, bypassClarification = false) {
    event.preventDefault();
    if (!rawRequest.trim()) return;
    setLoading(true); setData(null); setError("");
    try {
      const response = await fetch("/api/research/execute", { method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ rawRequest, preferredType, mode: researchMode }) });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Araştırma başlatılamadı.");
      setData(payload);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Araştırma başlatılamadı.");
    } finally { setLoading(false); }
  }

  return <main className="shell research-shell">
    <header className="topbar">
      <Link className="brand" href="/">CTSEG <span>Trade OS</span></Link>
      <nav className="top-actions"><Link href="/cases">Vakalar</Link><span className="badge">Yeni araştırma</span></nav>
    </header>

    <section className="research-intro">
      <div className="eyebrow">Agentic Research Engine</div>
      <h1>Ne arıyorsun?</h1>
      <p className="lead">Talebi kendi sözlerinle yaz. Agentic Engine talebi anlar, kaynakları okur ve kanıtlarıyla doğrular.</p>
    </section>

    <form className="research-form" onSubmit={(e) => research(e)}>
      <div className="quick-modes" aria-label="İsteğe bağlı araştırma odağı">
        <button type="button" className={!preferredType ? "active" : ""} onClick={() => setPreferredType(null)}>Otomatik</button>
        {modes.map((mode) => <button type="button" key={mode.value}
          className={preferredType === mode.value ? "active" : ""}
          onClick={() => setPreferredType(mode.value)}>{mode.label}</button>)}
      </div>
      
      <div className="quick-modes" aria-label="Araştırma Derinliği">
        <button type="button" className={researchMode === "QUICK" ? "active" : ""} onClick={() => setResearchMode("QUICK")}>Hızlı Araştırma</button>
        <button type="button" className={researchMode === "DEEP" ? "active" : ""} onClick={() => setResearchMode("DEEP")}>Derin Araştırma</button>
      </div>

      <label htmlFor="request-text">Talep</label>
      <textarea id="request-text" value={rawRequest} onChange={(event) => setRawRequest(event.target.value)}
        rows={7} maxLength={4000} placeholder="Ne araştırmak istediğini yaz…" />
      <div className="research-form-footer">
        <span>Eksik ayrıntılar araştırmayı durdurmaz. Gerekirse size bir soru sorarız.</span>
        <button className="primary-button" disabled={loading || !rawRequest.trim()}>
          {loading ? "Araştırılıyor…" : "Araştır"}
        </button>
      </div>
    </form>

    {loading && <section className="research-progress" role="status" aria-live="polite">
      <span className="progress-pulse" />
      <div><strong>Talep çözümleniyor ve Agentic Search çalışıyor.</strong>
        <p>Intent ayrıştırılıyor, sayfalar okunuyor ve çapraz doğrulama yapılıyor.</p></div>
    </section>}
    {error && <div className="error-banner" role="alert">{error}</div>}

    {data?.clarification?.clarificationRequired && <section className="research-summary error-banner">
        <div className="eyebrow">Soru: {data.clarification.question}</div>
        <p>Lütfen talebinize ekleyin ve tekrar araştırın.</p>
    </section>}

    {data?.results && <>
      <section className="research-summary">
        <div><div className="eyebrow">Araştırma özeti (Round {data.results[0].round})</div><h2>{data.parsed.normalizedProduct || data.parsed.tasks.map(label).join(" + ")}</h2></div>
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
          <span>{result.queries.length} sorgu · {result.findings.length} kaynak</span></div>
        <p className="review-summary">{result.review.summary}</p>
        {result.companies.length === 0 && <p className="empty-result">Kanıtlı ticari aday bulunamadı. Adapter tanısı aşağıdadır.</p>}
        <div className="company-grid">{result.companies.map((company) => <article className="company-card" key={company.key}>
          <div className="company-card-top"><div><h3>{company.name}</h3>
            <span>
                {company.country.state === "CONFIRMED" ? company.country.value : "Ülke doğrulanmadı"} · 
                {company.role.state === "CONFIRMED" ? company.role.value : "Rol bilinmiyor"}
            </span></div>
            <strong>{company.evidenceSources.length} kanıt</strong></div>
          <p>Ürün Doğrulaması: {company.productConfirmed.state === "CONFIRMED" ? "Evet" : "Doğrulanamadı"}</p>
          <div className="company-links"><a href={company.website} target="_blank" rel="noreferrer">Web sitesi ↗</a></div>
          {(company.contactEmail.state === "CONFIRMED" || company.contactPhone.state === "CONFIRMED") && 
             <p className="company-contact">{[company.contactEmail.value, company.contactPhone.value].filter(Boolean).join(" · ")}</p>}
          <div className="company-scores">
             <span>Güncellik {company.freshnessScore}</span>
             <span>Doğrulama: {company.verificationLevel}</span>
          </div>
          <details className="evidence-list"><summary>Kaynakları göster</summary><ul>{company.evidenceSources.map((source, i) => <li key={i}>
            <a href={source.url} target="_blank" rel="noreferrer">{source.url}</a>
            <small>{source.type} Evidence</small>
          </li>)}</ul></details>
        </article>)}</div>
        {(result.review.followUpQueries.length > 0 || result.review.limitations.length > 0) && <div className="review-notes">
          {result.review.limitations.map((item) => <p key={item}>{item}</p>)}
          {result.review.followUpQueries.length > 0 && <details><summary>İkinci tur önerileri</summary><ul>
            {result.review.followUpQueries.map((query) => <li key={query}>{query}</li>)}</ul></details>}
        </div>}
      </section>)}
    </>}
  </main>;
}

