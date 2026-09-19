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

            <div className="results-grid">
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
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
