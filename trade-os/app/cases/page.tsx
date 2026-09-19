import { db } from "@/lib/db";
import { currentUser } from "@/lib/current-user";

const labels = {
  SOURCING: "Tedarik",
  BUYER_SEARCH: "Alıcı",
  LOGISTICS: "Lojistik",
} as const;

export const dynamic = "force-dynamic";

export default async function CasesPage() {
  const user = await currentUser();

  if (!user) {
    return (
      <main className="shell">
        <div className="error-banner">Bu alan yalnızca yetkili CTSEG kullanıcılarına açıktır.</div>
      </main>
    );
  }

  const cases = await db.tradeCase.findMany({
    orderBy: { updatedAt: "desc" },
    include: { _count: { select: { companies: true } } },
    take: 100,
  });

  return (
    <main className="shell">
      <header className="topbar">
        <a className="brand" href="/">CTSEG <span>Trade OS</span></a>
        <div className="badge">{user.name}</div>
      </header>

      <section className="list-head">
        <div>
          <div className="eyebrow">Case Memory</div>
          <h1 className="case-title">Vakalar</h1>
          <p className="lead">Tedarik, alıcı araştırması ve lojistik operasyonlarının kalıcı CTSEG hafızası.</p>
        </div>
        <a className="primary-link" href="/cases/new">Yeni vaka +</a>
      </section>

      <section className="case-list">
        {cases.length === 0 ? (
          <div className="empty-list">Henüz kayıtlı vaka yok.</div>
        ) : cases.map((item) => (
          <a className="case-row" href={`/cases/${item.id}`} key={item.id}>
            <div>
              <div className="result-meta">
                <span>{labels[item.type]}</span>
                <span>{item.reference}</span>
                <span>{item.status}</span>
              </div>
              <h2>{item.title}</h2>
              <p>{item.rawRequest}</p>
            </div>
            <div className="case-stat">
              <strong>{item._count.companies}</strong>
              <span>firma</span>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}
