import { db } from "@/lib/db";
import { currentUser } from "@/lib/current-user";

const modules = [
  {
    code: "01",
    title: "Tedarikçi Bul",
    kicker: "SOURCE",
    text: "Üretici, distribütör, bayi, trader ve stokçuları çok kaynaklı araştır; güncellik ve kanıt ile doğrula.",
  },
  {
    code: "02",
    title: "Alıcı Bul",
    kicker: "SELL",
    text: "Ürünü kimlerin alabileceğini ülke, sektör ve satın alma profiline göre araştır; potansiyel alıcıları sınıflandır.",
  },
  {
    code: "03",
    title: "Lojistik Bul",
    kicker: "MOVE",
    text: "Kara, deniz, hava, demiryolu ve multimodal alternatifleri karşılaştır; uygun forwarder ve taşıyıcıları araştır.",
  },
];

export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await currentUser();

  const [caseCount, activeCount, researchCount, recentCases] = await Promise.all([
    db.tradeCase.count(),
    db.tradeCase.count({
      where: {
        status: {
          in: ["NEW", "RESEARCHING", "SHORTLISTED", "CONTACTING", "QUOTED", "NEGOTIATING"],
        },
      },
    }),
    db.researchSession.count(),
    db.tradeCase.findMany({
      orderBy: { updatedAt: "desc" },
      take: 3,
      select: {
        id: true,
        title: true,
        reference: true,
        type: true,
        status: true,
        updatedAt: true,
      },
    }),
  ]);

  return (
    <main className="shell shell-dashboard">
      <header className="topbar topbar-dashboard">
        <div>
          <div className="brand">CTSEG <span>Trade OS</span></div>
          <div className="workspace-caption">Private trade intelligence workspace</div>
        </div>
        <nav className="top-actions">
          <a href="/cases">Vakalar</a>
          <a className="top-new-case" href="/cases/new">Yeni vaka +</a>
          <div className="badge">{user?.name ?? "Private Workspace"}</div>
        </nav>
      </header>

      <section className="dashboard-hero">
        <div className="dashboard-hero-copy">
          <div className="eyebrow">Trade Intelligence System</div>
          <h1 className="dashboard-title">Ticareti araştır.<br />Kanıtla. Harekete geç.</h1>
          <p className="lead">
            Tedarik, alıcı keşfi ve lojistik araştırmalarını tek operasyon hafızasında yönetin.
            Ücretsiz kaynakları önceleyin, güncelliği kontrol edin, sonucu kanıtla birlikte saklayın.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="/cases/new">Yeni araştırma başlat</a>
            <a className="secondary-link" href="/cases">Vaka hafızasını aç</a>
          </div>
        </div>

        <aside className="dashboard-hero-panel">
          <div className="hero-panel-head">
            <span>OPERATIONS</span>
            <strong>Live</strong>
          </div>
          <div className="hero-panel-stat">
            <strong>{activeCount}</strong>
            <span>aktif vaka</span>
          </div>
          <div className="hero-panel-lines">
            <span><i />Free-first research</span>
            <span><i />Evidence required</span>
            <span><i />Paid source auto-use: off</span>
          </div>
        </aside>
      </section>

      <section className="metric-grid">
        <article className="metric-card">
          <span>Toplam vaka</span>
          <strong>{caseCount}</strong>
          <small>Kalıcı operasyon hafızası</small>
        </article>
        <article className="metric-card">
          <span>Aktif operasyon</span>
          <strong>{activeCount}</strong>
          <small>Araştırma ve takip sürecinde</small>
        </article>
        <article className="metric-card">
          <span>Araştırma koşusu</span>
          <strong>{researchCount}</strong>
          <small>Kaydedilmiş araştırma geçmişi</small>
        </article>
      </section>

      <section className="module-section">
        <div className="section-heading-row">
          <div>
            <div className="eyebrow">Research Desk</div>
            <h2>Ne yapmak istiyorsun?</h2>
          </div>
          <span>Talebi sen yazarsın. Sistem hazır metin dayatmaz.</span>
        </div>

        <div className="modern-module-grid">
          {modules.map((item) => (
            <a className="modern-module-card" href="/cases/new" key={item.code}>
              <div className="module-card-top">
                <span>{item.code}</span>
                <small>{item.kicker}</small>
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <div className="module-card-cta">Araştırmayı başlat <b>↗</b></div>
            </a>
          ))}
        </div>
      </section>

      <section className="recent-section">
        <div className="section-heading-row">
          <div>
            <div className="eyebrow">Recent Memory</div>
            <h2>Son vakalar</h2>
          </div>
          <a href="/cases">Tümünü gör →</a>
        </div>

        <div className="recent-case-grid">
          {recentCases.length === 0 ? (
            <div className="empty-list">Henüz vaka oluşturulmadı.</div>
          ) : recentCases.map((item) => (
            <a className="recent-case-card" href={`/cases/${item.id}`} key={item.id}>
              <div className="result-meta">
                <span>{item.type.replace("_", " ")}</span>
                <span>{item.status}</span>
              </div>
              <h3>{item.title}</h3>
              <div className="recent-case-footer">
                <span>{item.reference}</span>
                <span>
                  {new Intl.DateTimeFormat("tr-TR", {
                    dateStyle: "medium",
                  }).format(item.updatedAt)}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
