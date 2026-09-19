"use client";

import { FormEvent, useState } from "react";

type Plan = {
  type: string;
  rawRequest: string;
  tasks: string[];
  sourcePriority: string[];
  policy: { freeFirst: boolean; freshnessRequired: boolean; paidSourceBehavior: string };
};

type Finding = {
  title: string;
  url: string;
  snippet?: string;
  domain: string;
  adapter: string;
  language: string;
  freshnessScore: number;
  verificationScore: number;
  historicalOnly: boolean;
};

type ResearchRun = {
  findings: Finding[];
  queries: { query: string; language: string; intent: string }[];
  searchedAt: string;
  paidFallbackUsed: false;
};

const types = [
  { value: "SOURCING", label: "Tedarikçi Bul", example: "İran için haftalık 100 MT Feed Grade L-Threonine arıyoruz. Önce Türkiye, sonra global." },
  { value: "BUYER_SEARCH", label: "Alıcı Bul", example: "İran safranını Almanya ve Fransa'da alabilecek güncel ithalatçı ve distribütörleri bul." },
  { value: "LOGISTICS", label: "Lojistik Bul", example: "Bulgaristan'dan İran'a 24 ton yük için kara, deniz ve alternatif taşıma çözümleri bul." },
];

export default function NewCasePage() {
  const [type, setType] = useState("SOURCING");
  const [rawRequest, setRawRequest] = useState(types[0].example);
  const [plan, setPlan] = useState<Plan | null>(null);
  const [run, setRun] = useState<ResearchRun | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [researching, setResearching] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setPlan(null);
    setRun(null);
    setError("");

    const response = await fetch("/api/research/plan", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ type, rawRequest }),
    });

    const data = await response.json();
    if (!response.ok) setError(data.error || "Araştırma planı oluşturulamadı.");
    else setPlan(data);
    setLoading(false);
  }

  async function runResearch() {
    setResearching(true);
    setRun(null);
    setError("");

    const response = await fetch("/api/research/run", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ type, rawRequest, maxQueries: 18 }),
    });

    const data = await response.json();
    if (!response.ok) setError(data.error || "Araştırma çalıştırılamadı.");
    else setRun(data);
    setResearching(false);
  }

  function changeType(next: string) {
    setType(next);
    const selected = types.find((item) => item.value === next);
    if (selected) setRawRequest(selected.example);
    setPlan(null);
    setRun(null);
    setError("");
  }

  return (
    <main className="shell">
      <header className="topbar">
        <a className="brand" href="/">CTSEG <span>Trade OS</span></a>
        <div className="badge">Yeni Vaka</div>
      </header>

      <section className="case-layout">
        <div className="case-form-wrap">
          <div className="eyebrow">Research Orchestrator</div>
          <h1 className="case-title">Ne yapmak istiyorsun?</h1>
          <p className="lead">Talebi doğal dille yaz. Sistem araştırmayı kaynak, güncellik ve doğrulama görevlerine ayırsın.</p>

          <form className="case-form" onSubmit={submit}>
            <div className="type-switch">
              {types.map((item) => (
                <button
                  type="button"
                  className={type === item.value ? "type-button active" : "type-button"}
                  key={item.value}
                  onClick={() => changeType(item.value)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <label>
              Talep
              <textarea value={rawRequest} onChange={(e) => setRawRequest(e.target.value)} rows={8} />
            </label>
            <button className="primary-button" disabled={loading || !rawRequest.trim()}>
              {loading ? "Plan hazırlanıyor…" : "Araştırma planını oluştur"}
            </button>
          </form>
        </div>

        <aside className="plan-panel">
          {!plan ? (
            <div className="empty-plan">
              <span>FREE-FIRST</span>
              <h2>Araştırma henüz başlamadı.</h2>
              <p>Ücretli veri kaynakları otomatik kullanılmaz. Bulunursa yalnızca alternatif olarak raporlanır.</p>
            </div>
          ) : (
            <>
              <div className="eyebrow">Araştırma Planı</div>
              <h2>{types.find((item) => item.value === plan.type)?.label}</h2>
              <ol className="task-list">
                {plan.tasks.map((task) => <li key={task}>{task}</li>)}
              </ol>
              <div className="source-block">
                <strong>Kaynak önceliği</strong>
                <div className="source-list">{plan.sourcePriority.map((source) => <span key={source}>{source}</span>)}</div>
              </div>
              <button className="primary-button research-button" onClick={runResearch} disabled={researching}>
                {researching ? "Ücretsiz kaynaklar taranıyor…" : "Araştırmayı başlat"}
              </button>
            </>
          )}
        </aside>
      </section>

      {error && <div className="error-banner">{error}</div>}

      {run && (
        <section className="results-section">
          <div className="results-head">
            <div>
              <div className="eyebrow">Live Research</div>
              <h2>{run.findings.length} benzersiz sonuç</h2>
            </div>
            <div className="badge">{run.queries.length} sorgu · Paid fallback: hayır</div>
          </div>

          <div className="results-grid">
            {run.findings.slice(0, 40).map((finding) => (
              <article className="result-card" key={finding.url}>
                <div className="result-meta">
                  <span>{finding.domain}</span>
                  <span>{finding.language.toUpperCase()}</span>
                  {finding.historicalOnly && <span className="warning">Eski veri</span>}
                </div>
                <h3>{finding.title}</h3>
                {finding.snippet && <p>{finding.snippet}</p>}
                <div className="score-row">
                  <span>Güncellik <strong>{finding.freshnessScore}</strong></span>
                  <span>Doğrulama <strong>{finding.verificationScore}</strong></span>
                </div>
                <a href={finding.url} target="_blank" rel="noreferrer">Kaynağı aç ↗</a>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
