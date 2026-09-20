import AppHeader from "@/components/app-header";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/current-user";
import Link from "next/link";

const modules = [
  {
    code: "01",
    title: "TedarikÃ§i Bul",
    kicker: "SOURCE",
    text: "Ãœretici, distribÃ¼tÃ¶r, bayi, trader ve stokÃ§ularÄ± Ã§ok kaynaklÄ± araÅŸtÄ±r; gÃ¼ncellik ve kanÄ±t ile doÄŸrula.",
  },
  {
    code: "02",
    title: "AlÄ±cÄ± Bul",
    kicker: "SELL",
    text: "ÃœrÃ¼nÃ¼ kimlerin alabileceÄŸini Ã¼lke, sektÃ¶r ve satÄ±n alma profiline gÃ¶re araÅŸtÄ±r; potansiyel alÄ±cÄ±larÄ± sÄ±nÄ±flandÄ±r.",
  },
  {
    code: "03",
    title: "Lojistik Bul",
    kicker: "MOVE",
    text: "Kara, deniz, hava, demiryolu ve multimodal alternatifleri karÅŸÄ±laÅŸtÄ±r; uygun forwarder ve taÅŸÄ±yÄ±cÄ±larÄ± araÅŸtÄ±r.",
  },
];

export const dynamic = "force-dynamic";

export default async function Home() {
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
      <AppHeader />

      <section className="dashboard-hero home-hero">
        <div className="dashboard-hero-copy">
          <div className="eyebrow">Trade Intelligence System</div>
          <h1 className="dashboard-title">Ticareti araÅŸtÄ±r.<br />KanÄ±tla. Harekete geÃ§.</h1>
          <p className="lead">
            TedarikÃ§i, alÄ±cÄ± ve taÅŸÄ±ma seÃ§eneklerini tek taleple araÅŸtÄ±rÄ±n.
            Åirketleri kaynaklarÄ±, gÃ¼ncelliÄŸi ve doÄŸrulama durumuyla birlikte inceleyin.
          </p>
          <div className="hero-actions">
            <Link className="primary-link" href="/cases/new">Yeni araÅŸtÄ±rma baÅŸlat</Link>
            <Link className="secondary-link" href="/cases">Vaka hafÄ±zasÄ±nÄ± aÃ§</Link>
          </div>
        </div>

      </section>

      <section className="module-section home-modules">
        <div className="section-heading-row">
          <div>
            <div className="eyebrow">Research Desk</div>
            <h2>Bir talep. ÃœÃ§ araÅŸtÄ±rma alanÄ±.</h2>
          </div>
          <span>Ä°htiyacÄ± yazÄ±n; araÅŸtÄ±rma alanÄ± kendiliÄŸinden belirlenir.</span>
        </div>

        <div className="modern-module-grid">
          {modules.map((item) => (
            <Link className="modern-module-card" href="/cases/new" key={item.code}>
              <div className="module-card-top"><span>{item.code}</span><small>{item.kicker}</small></div>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
              <div className="module-card-cta">AraÅŸtÄ±rmaya geÃ§ <b>â†—</b></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="metric-grid home-metrics">
        <article className="metric-card">
          <span>Toplam vaka</span>
          <strong>{caseCount}</strong>
          <small>KalÄ±cÄ± operasyon hafÄ±zasÄ±</small>
        </article>
        <article className="metric-card">
          <span>Aktif operasyon</span>
          <strong>{activeCount}</strong>
          <small>AraÅŸtÄ±rma ve takip sÃ¼recinde</small>
        </article>
        <article className="metric-card">
          <span>AraÅŸtÄ±rma koÅŸusu</span>
          <strong>{researchCount}</strong>
          <small>KaydedilmiÅŸ araÅŸtÄ±rma geÃ§miÅŸi</small>
        </article>
      </section>

    </main>
  );
}
