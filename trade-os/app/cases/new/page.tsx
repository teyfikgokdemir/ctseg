"use client";

import { FormEvent, useState } from "react";

type Mode = "SOURCING" | "BUYER_SEARCH" | "LOGISTICS";
type Parsed = { intent: string; tasks: Mode[]; normalizedProduct: string | null; grade: string | null;
  quantity: number | null; quantityUnit: string | null; recurrence: string | null;
  preferredSourcingRegion: string | null; destinations: string[]; transportModes: string[] };
type Evidence = { title: string; url: string; adapter: string; status: string; claim: string };
type Company = { key: string; name: string; country: string | null; companyType: string;
  productOrService: string | null; website: string; productPage: string | null; contactPage: string | null;
  email: string | null; phone: string | null; freshnessScore: number; verificationScore: number;
  evidenceCount: number; evidenceSources: Evidence[] };
type ResearchResult = { type: Mode; companies: Company[]; findings: { url: string }[];
  queries: { query: string }[]; diagnostics: { adapter: string; query: string; rawCount: number;
    acceptedCount: number; status: string; error?: string }[];
  review: { summary: string; followUpQueries: string[]; limitations: string[] } };
type ResponseData = { case: { id: string; reference: string }; parsed: Parsed; results: ResearchResult[] };

const modes: { value: Mode; label: string }[] = [
  { value: "SOURCING", label: "Tedarikçi" }, { value: "BUYER_SEARCH", label: "Alıcı" },
  { value: "LOGISTICS", label: "Lojistik" },
];
const label = (type: string) => modes.find((item) => item.value === type)?.label || type;

export default function NewCasePage() {
  const [rawRequest, setRawRequest] = useState("");
  const [preferredType, setPreferredType] = useState<Mode | null>(null);
  const [data, setData] = useState<ResponseData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function research(event: FormEvent) {
    event.preventDefault();
    if (!rawRequest.trim()) return;
    setLoading(true); setData(null); setError("");
    try {
      const response = await fetch("/api/research/execute", { method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ rawRequest, preferredType }) });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Araştırma başlatılamadı.");
      setData(payload);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Araştırma başlatılamadı.");
    } finally { setLoading(false); }
  }

  return <main className="shell research-shell">
    <header className="topbar">
      <a className="brand" href="/">CTSEG <span>Trade OS</span></a>
      <nav className="top-actions"><a href="/cases">Vakalar</a><span className="badge">Yeni araştırma</span></nav>
    </header>

    <section className="research-intro">
      <div className="eyebrow">Research Desk / Free First</div>
      <h1>Ne arıyorsun?</h1>
      <p className="lead">Talebi kendi sözlerinle yaz. Ürün, pazar, alıcı ve taşıma ihtiyacını sistem ayrıştırır; kaynakları kanıtlarıyla gösterir.</p>
    </section>

    <form className="research-form" onSubmit={research}>
      <div className="quick-modes" aria-label="İsteğe bağlı araştırma odağı">
        <button type="button" className={!preferredType ? "active" : ""} onClick={() => setPreferredType(null)}>Otomatik</button>
        {modes.map((mode) => <button type="button" key={mode.value}
          className={preferredType === mode.value ? "active" : ""}
          onClick={() => setPreferredType(mode.value)}>{mode.label}</button>)}
      </div>
      <label htmlFor="request-text">Talep</label>
      <textarea id="request-text" value={rawRequest} onChange={(event) => setRawRequest(event.target.value)}
        rows={7} maxLength={4000} placeholder="Ne araştırmak istediğini yaz…" />
      <div className="research-form-footer">
        <span>Eksik ayrıntılar araştırmayı durdurmaz. Firmalar yalnızca kaynaklarıyla görünür.</span>
        <button className="primary-button" disabled={loading || !rawRequest.trim()}>
          {loading ? "Araştırılıyor…" : "Araştır"}
        </button>
      </div>
    </form>

    {loading && <section className="research-progress" role="status" aria-live="polite">
      <span className="progress-pulse" />
      <div><strong>Talep çözümleniyor ve ücretsiz kaynaklar taranıyor.</strong>
        <p>Intent, sorgu planı, kaynak doğrulama ve şirket birleştirme işleniyor.</p></div>
    </section>}
    {error && <div className="error-banner" role="alert">{error}</div>}

    {data && <>
      <section className="research-summary">
        <div><div className="eyebrow">Araştırma özeti</div><h2>{data.parsed.normalizedProduct || data.parsed.tasks.map(label).join(" + ")}</h2></div>
        <div className="summary-facts">
          <span>{data.parsed.tasks.map(label).join(" + ")}</span>
          {data.parsed.preferredSourcingRegion && <span>Öncelik {data.parsed.preferredSourcingRegion}</span>}
          {data.parsed.destinations.length > 0 && <span>Hedef {data.parsed.destinations.join(", ")}</span>}
          {data.parsed.quantity !== null && <span>{data.parsed.quantity} {data.parsed.quantityUnit}{data.parsed.recurrence === "weekly" ? " / hafta" : ""}</span>}
          {data.parsed.grade && <span>{data.parsed.grade}</span>}
        </div>
        <a href={`/cases/${data.case.id}`}>Vaka {data.case.reference} ↗</a>
      </section>

      {data.results.map((result) => <section className="company-section" key={result.type}>
        <div className="company-section-head"><div><div className="eyebrow">{label(result.type)} araştırması</div>
          <h2>{result.companies.length} şirket adayı</h2></div>
          <span>{result.queries.length} sorgu · {result.findings.length} kaynak</span></div>
        <p className="review-summary">{result.review.summary}</p>
        {result.companies.length === 0 && <p className="empty-result">Kanıtlı ticari aday bulunamadı. Adapter tanısı aşağıdadır.</p>}
        <div className="company-grid">{result.companies.map((company) => <article className="company-card" key={company.key}>
          <div className="company-card-top"><div><h3>{company.name}</h3><span>{company.country || "Ülke doğrulanmadı"} · {company.companyType}</span></div>
            <strong>{company.evidenceCount} kanıt</strong></div>
          {company.productOrService && <p>{company.productOrService}</p>}
          <div className="company-links"><a href={company.website} target="_blank" rel="noreferrer">Web sitesi ↗</a>
            {company.productPage && <a href={company.productPage} target="_blank" rel="noreferrer">Doğrulanan sayfa ↗</a>}
            {company.contactPage && <a href={company.contactPage} target="_blank" rel="noreferrer">İletişim ↗</a>}</div>
          {(company.email || company.phone) && <p className="company-contact">{[company.email, company.phone].filter(Boolean).join(" · ")}</p>}
          <div className="company-scores"><span>Güncellik {company.freshnessScore}</span><span>Doğrulama {company.verificationScore}</span></div>
          <details className="evidence-list"><summary>Kaynakları göster</summary><ul>{company.evidenceSources.map((source) => <li key={source.url}>
            <a href={source.url} target="_blank" rel="noreferrer">{source.title}</a>
            <small>{source.claim} · {source.adapter}</small>
          </li>)}</ul></details>
        </article>)}</div>
        {(result.review.followUpQueries.length > 0 || result.review.limitations.length > 0) && <div className="review-notes">
          {result.review.limitations.map((item) => <p key={item}>{item}</p>)}
          {result.review.followUpQueries.length > 0 && <details><summary>İkinci tur önerileri</summary><ul>
            {result.review.followUpQueries.map((query) => <li key={query}>{query}</li>)}</ul></details>}
        </div>}
        <details className="diagnostic-panel"><summary>Arama tanısı · {result.diagnostics.length} adapter sorgusu</summary>
          <ul>{result.diagnostics.map((item, index) => <li key={`${item.adapter}-${index}`}>
            <strong>{item.adapter}</strong> · {item.status} · ham {item.rawCount} · kabul {item.acceptedCount}<br />
            <span>{item.query}</span>{item.error && <small> · {item.error}</small>}
          </li>)}</ul></details>
      </section>)}
    </>}
  </main>;
}
