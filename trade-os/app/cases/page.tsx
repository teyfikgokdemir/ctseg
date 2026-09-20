import AppHeader from "@/components/app-header";
import { DeleteCaseButton } from "./delete-case-button";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/current-user";
import Link from "next/link";

const labels = {
  SOURCING: "Tedarik",
  BUYER_SEARCH: "AlÄ±cÄ±",
  LOGISTICS: "Lojistik",
} as const;

export const dynamic = "force-dynamic";

export default async function CasesPage() {
  const user = await currentUser();

  if (!user) {
    return (
      <main className="shell">
        <div className="error-banner">Bu alan yalnÄ±zca yetkili CTSEG kullanÄ±cÄ±larÄ±na aÃ§Ä±ktÄ±r.</div>
      </main>
    );
  }

  const cases = await db.tradeCase.findMany({
    orderBy: { updatedAt: "desc" },
    include: {
      _count: {
        select: {
          companies: true,
          researchRuns: true,
        },
      },
    },
    take: 100,
  });

  const activeCount = cases.filter((item) =>
    ["NEW", "RESEARCHING", "SHORTLISTED", "CONTACTING", "QUOTED", "NEGOTIATING"].includes(item.status),
  ).length;

  return (
    <main className="shell shell-dashboard">
      <AppHeader />

      <section className="dashboard-hero compact">
        <div>
          <div className="eyebrow">Case Memory</div>
          <h1 className="dashboard-title">Vakalar</h1>
          <p className="lead">Tedarik, alÄ±cÄ± araÅŸtÄ±rmasÄ± ve lojistik operasyonlarÄ±nÄ±n kalÄ±cÄ± CTSEG hafÄ±zasÄ±.</p>
        </div>
        <Link className="primary-link" href="/cases/new">Yeni vaka +</Link>
      </section>

      <section className="metric-grid metric-grid-cases">
        <article className="metric-card">
          <span>Toplam vaka</span>
          <strong>{cases.length}</strong>
        </article>
        <article className="metric-card">
          <span>Aktif operasyon</span>
          <strong>{activeCount}</strong>
        </article>
        <article className="metric-card">
          <span>AraÅŸtÄ±rma koÅŸusu</span>
          <strong>{cases.reduce((sum, item) => sum + item._count.researchRuns, 0)}</strong>
        </article>
      </section>

      <section className="case-list modern-case-list">
        {cases.length === 0 ? (
          <div className="empty-list">HenÃ¼z kayÄ±tlÄ± vaka yok.</div>
        ) : cases.map((item) => (
          <article className="case-row modern-case-row" key={item.id}>
            <Link className="case-row-main" href={`/cases/${item.id}`}>
              <div>
                <div className="result-meta">
                  <span>{labels[item.type]}</span>
                  <span>{item.reference}</span>
                  <span>{item.status}</span>
                </div>
                <h2>{item.title}</h2>
                <p>{item.rawRequest}</p>
              </div>

              <div className="case-insights">
                <div>
                  <strong>{item._count.researchRuns}</strong>
                  <span>araÅŸtÄ±rma</span>
                </div>
                <div>
                  <strong>{item._count.companies}</strong>
                  <span>firma</span>
                </div>
              </div>
            </Link>

            {user.role === "ADMIN" && (
              <DeleteCaseButton id={item.id} title={item.title} />
            )}
          </article>
        ))}
      </section>
    </main>
  );
}
