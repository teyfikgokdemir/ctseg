const modules = [
  {
    code: "01",
    title: "Tedarikçi Bul",
    text: "Üretici, distribütör, bayi, trader ve stokçuları çok kaynaklı araştır; güncellik ve kanıt ile doğrula.",
  },
  {
    code: "02",
    title: "Alıcı Bul",
    text: "Bir ürünü kimlerin alabileceğini ülke, sektör ve satın alma profiline göre araştır ve potansiyel alıcıları sınıflandır.",
  },
  {
    code: "03",
    title: "Lojistik Bul",
    text: "Kara, deniz, hava, demiryolu ve multimodal alternatifleri karşılaştır; uygun forwarder ve taşıyıcıları araştır.",
  },
];

export default function Home() {
  return (
    <main className="shell">
      <header className="topbar">
        <div className="brand">CTSEG <span>Trade OS</span></div>
        <div className="badge">Private Workspace</div>
      </header>

      <section className="hero">
        <div className="eyebrow">Trade Intelligence System</div>
        <h1>Al. Sat. Taşı. Doğrula.</h1>
        <p className="lead">
          CTSEG’in tedarik, alıcı keşfi ve lojistik araştırmalarını tek vaka altında yöneten,
          ücretsiz kaynakları önceleyen ve her sonucu güncellik + kanıt ile doğrulayan operasyon sistemi.
        </p>
        <div className="policy">
          <span>Free-first</span>
          <span>Evidence-first</span>
          <span>Freshness-required</span>
          <span>Paid sources: suggest-only</span>
        </div>
      </section>

      <section className="grid">
        {modules.map((item) => (
          <a className="card" href="/cases/new" key={item.code}>
            <div>
              <small>{item.code}</small>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
            <div className="cta">Yeni vaka oluştur →</div>
          </a>
        ))}
      </section>
    </main>
  );
}
