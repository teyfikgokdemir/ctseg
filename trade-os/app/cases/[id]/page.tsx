import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/current-user";

export const dynamic = "force-dynamic";

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const user = await currentUser();
  if (!user) {
    return (
      <main className="shell">
        <div className="error-banner">Bu alan yalnızca yetkili CTSEG kullanıcılarına açıktır.</div>
      </main>
    );
  }

  const { id } = await params;
  const tradeCase = await db.tradeCase.findUnique({
    where: { id },
    include: {
      companies: { include: { company: { include: { evidence: { orderBy: { fetchedAt: "desc" }, take: 30 } } } } },
      researchRuns: {
        orderBy: { startedAt: "desc" },
        include: {
          findings: {
            orderBy: [
              { freshnessScore: "desc" },
              { verificationScore: "desc" },
            ],
            take: 100,
          },
        },
      },
    },
  });

  if (!tradeCase) notFound();
  const caseUrls = new Set(tradeCase.researchRuns.flatMap((run) => run.findings.map((finding) => finding.url)));

  return (
    <main className="shell">
      <header className="topbar">
        <a className="brand" href="/">CTSEG <span>Trade OS</span></a>
        <nav className="top-actions">
          <a href="/cases">Vakalar</a>
          <div className="badge">{tradeCase.reference}</div>
        </nav>
      </header>

      <section className="case-detail-head">
        <div className="eyebrow">{tradeCase.type.replace("_", " ")}</div>
        <h1 className="case-title">{tradeCase.title}</h1>
        <p className="lead">{tradeCase.rawRequest}</p>
        <div className="policy">
          <span>{tradeCase.status}</span>
          <span>{tradeCase.researchRuns.length} araştırma</span>
          <span>Paid sources: kapalı</span>
        </div>
      </section>

      {tradeCase.companies.length > 0 && <section className="company-section">
        <div className="company-section-head"><div><div className="eyebrow">Company Memory</div>
          <h2>{tradeCase.companies.length} şirket adayı</h2></div></div>
        <div className="company-grid">{tradeCase.companies.map(({ company }) => {
          const evidence = company.evidence.filter((item) => caseUrls.has(item.sourceUrl));
          return <article className="company-card" key={company.id}>
            <div className="company-card-top"><div><h3>{company.name}</h3>
              <span>{company.country || "Ülke doğrulanmadı"} · Ticari aday</span></div>
              <strong>{evidence.length} kanıt</strong></div>
            {tradeCase.productName && <p>{tradeCase.productName}</p>}
            <div className="company-links">{company.website && <a href={company.website} target="_blank" rel="noreferrer">Web sitesi ↗</a>}</div>
            <div className="company-scores"><span>Güncellik {company.freshnessScore ?? "—"}</span>
              <span>Doğrulama {company.verificationScore ?? "—"}</span></div>
            <details className="evidence-list"><summary>Kaynakları göster</summary><ul>
              {evidence.map((source) => <li key={source.id}><a href={source.sourceUrl} target="_blank" rel="noreferrer">{source.sourceUrl}</a>
                <small>{source.claim} · {source.status}</small></li>)}
            </ul></details>
          </article>;
        })}</div>
      </section>}

      <section className="research-history">
        {tradeCase.researchRuns.length === 0 ? (
          <div className="empty-list">Bu vaka için henüz araştırma çalıştırılmadı.</div>
        ) : tradeCase.researchRuns.map((run) => (
          <article className="history-run" key={run.id}>
            <div className="history-run-head">
              <div>
                <div className="eyebrow">Research Run</div>
                <h2>{run.resultCount} sonuç · {run.queryCount} sorgu</h2>
              </div>
              <span>{new Intl.DateTimeFormat("tr-TR", { dateStyle: "medium", timeStyle: "short" }).format(run.startedAt)}</span>
            </div>

            <details className="diagnostic-panel"><summary>Ham kaynakları göster · {run.findings.length}</summary><div className="results-grid">
              {run.findings.map((finding) => (
                <article className="result-card" key={finding.id}>
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
            </div></details>
          </article>
        ))}
      </section>
    </main>
  );
}
