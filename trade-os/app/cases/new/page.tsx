"use client";

import { FormEvent, useState } from "react";

type Plan = {
  type: string;
  rawRequest: string;
  tasks: string[];
  sourcePriority: string[];
  policy: { freeFirst: boolean; freshnessRequired: boolean; paidSourceBehavior: string };
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
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setPlan(null);
    const response = await fetch("/api/research/plan", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ type, rawRequest }),
    });
    const data = await response.json();
    setPlan(data);
    setLoading(false);
  }

  function changeType(next: string) {
    setType(next);
    const selected = types.find((item) => item.value === next);
    if (selected) setRawRequest(selected.example);
    setPlan(null);
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
            </>
          )}
        </aside>
      </section>
    </main>
  );
}
