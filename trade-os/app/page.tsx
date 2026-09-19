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

  const [caseCount, activeCount, researchCount] = await Promise.all([
    db.tradeCase.count(),
    db.tradeCase.count({
      where: {
        status: {
          in: ["NEW", "RESEARCHING", "SHORTLISTED", "CONTACTING", "QUOTED", "NEGOTIATING"],
        },
      },
    }),
    db.researchSession.count(),
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

      <section className="dashboard-hero home-hero">
        <div className="dashboard-hero-copy">
          <div className="eyebrow">Trade Intelligence System</div>
          <h1 className="dashboard-title">Ticareti araştır.<br />Kanıtla. Harekete geç.</h1>
          <p className="lead">
            Tedarikçi, alıcı ve taşıma seçeneklerini tek taleple araştırın.
            Şirketleri kaynakları, güncelliği ve doğrulama durumuyla birlikte inceleyin.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="/cases/new">Yeni araştırma başlat</a>
            <a className="secondary-link" href="/cases">Vaka hafızasını aç</a>
          </div>
        </div>

      </section>

      <section className="module-section home-modules">
        <div className="section-heading-row">
          <div>
            <div className="eyebrow">Research Desk</div>
            <h2>Bir talep. Üç araştırma alanı.</h2>
          </div>
          <span>İhtiyacı yazın; araştırma alanı kendiliğinden belirlenir.</span>
        </div>

        <div className="modern-module-grid">
          {modules.map((item) => (
            <a className="modern-module-card" href="/cases/new" key={item.code}>
              <div className="module-card-top"><span>{item.code}</span><small>{item.kicker}</small></div>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
              <div className="module-card-cta">Araştırmaya geç <b>↗</b></div>
            </a>
          ))}
        </div>
      </section>

      <section className="metric-grid home-metrics">
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

    </main>
  );
}
