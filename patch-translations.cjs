const fs = require('fs');
let content = fs.readFileSync('src/components/PageContent.astro', 'utf8');

const dictCode = `
const corridorLocales: Record<string, any> = {
  en: {
    sourcing: "Sourcing from Turkey to {country}",
    sourcingLead: "Turkey offers unparalleled manufacturing quality and strategic logistics to {country}. We bridge the gap by providing direct access to verified manufacturers, reducing supply chain risks, and ensuring full compliance.",
    industries: "Key Export Industries",
    logistics: "Logistics & Transit",
    transitTime: "Average Transit Time",
    compliance: "Trade Compliance",
    ready: "Ready to source for {country}?",
    cta: "Connect with verified Turkish suppliers for the {country} market",
  },
  ru: {
    sourcing: "Прямые поставки из Турции в {country}",
    sourcingLead: "Турция предлагает высочайшее качество производства и надежную логистику для направления {country}. Мы обеспечиваем прямой доступ к проверенным заводам, снижая риски и гарантируя полное соответствие нормам.",
    industries: "Ключевые отрасли экспорта",
    logistics: "Логистика и транзит",
    transitTime: "Среднее время в пути",
    compliance: "Торговое соответствие",
    ready: "Готовы начать поставки в {country}?",
    cta: "Свяжитесь с проверенными турецкими заводами для рынка {country}",
  },
  tr: {
    sourcing: "Türkiye'den {country} Pazarına Tedarik",
    sourcingLead: "Türkiye, {country} pazarı için yüksek üretim kalitesi ve lojistik avantajlar sunar. Doğrulanmış üreticilere aracısız erişim sağlayarak tedarik zinciri risklerinizi sıfırlıyoruz.",
    industries: "Öne Çıkan Sektörler",
    logistics: "Lojistik ve Taşıma",
    transitTime: "Ortalama Transit Süresi",
    compliance: "Ticaret Uyumluluğu",
    ready: "{country} için tedariğe başlamaya hazır mısınız?",
    cta: "{country} pazarı için doğrulanmış Türk üreticilerle hemen bağlantı kurun",
  },
  de: {
    sourcing: "Beschaffung aus der Türkei nach {country}",
    sourcingLead: "Die Türkei bietet erstklassige Fertigungsqualität und strategische Logistik nach {country}. Wir bieten direkten Zugang zu geprüften Herstellern.",
    industries: "Wichtigste Exportbranchen",
    logistics: "Logistik & Transit",
    transitTime: "Durchschnittliche Transitzeit",
    compliance: "Handelskonformität",
    ready: "Bereit für die Beschaffung nach {country}?",
    cta: "Vernetzen Sie sich mit geprüften türkischen Lieferanten",
  },
  it: {
    sourcing: "Sourcing dalla Turchia verso {country}",
    sourcingLead: "La Turchia offre qualità manifatturiera e logistica strategica verso {country}. Forniamo accesso diretto a produttori verificati.",
    industries: "Settori chiave di esportazione",
    logistics: "Logistica e transito",
    transitTime: "Tempo medio di transito",
    compliance: "Conformità commerciale",
    ready: "Pronto per il sourcing verso {country}?",
    cta: "Connettiti con fornitori turchi verificati",
  },
  fa: {
    sourcing: "تامین کالا از ترکیه به {country}",
    sourcingLead: "ترکیه کیفیت تولید بی‌نظیر و لجستیک استراتژیک را برای {country} ارائه می‌دهد. ما دسترسی مستقیم به تولیدکنندگان معتبر را فراهم می‌کنیم.",
    industries: "صنایع کلیدی صادرات",
    logistics: "لجستیک و حمل و نقل",
    transitTime: "میانگین زمان ترانزیت",
    compliance: "انطباق تجاری",
    ready: "آماده تامین کالا برای {country} هستید؟",
    cta: "با تامین‌کنندگان معتبر ترک ارتباط برقرار کنید",
  },
  zh: {
    sourcing: "从土耳其采购至 {country}",
    sourcingLead: "土耳其为 {country} 提供无与伦比的制造质量和战略物流。我们提供与经过验证的制造商的直接联系。",
    industries: "主要出口行业",
    logistics: "物流与运输",
    transitTime: "平均运输时间",
    compliance: "贸易合规",
    ready: "准备好为 {country} 采购了吗？",
    cta: "联系经过验证的土耳其供应商",
  },
  vi: {
    sourcing: "Tìm nguồn cung ứng từ Thổ Nhĩ Kỳ đến {country}",
    sourcingLead: "Thổ Nhĩ Kỳ cung cấp chất lượng sản xuất và hậu cần chiến lược đến {country}. Chúng tôi cung cấp quyền truy cập trực tiếp vào các nhà sản xuất đã được xác minh.",
    industries: "Các ngành xuất khẩu chính",
    logistics: "Hậu cần & Vận chuyển",
    transitTime: "Thời gian vận chuyển trung bình",
    compliance: "Tuân thủ thương mại",
    ready: "Sẵn sàng tìm nguồn cung ứng cho {country}?",
    cta: "Kết nối với các nhà cung cấp Thổ Nhĩ Kỳ đã được xác minh",
  }
};

const getCountryName = (countryId: string, locale: string) => {
  const map: Record<string, string> = {
    romania: 'RO', bulgaria: 'BG', serbia: 'RS', germany: 'DE',
    italy: 'IT', russia: 'RU', iran: 'IR', syria: 'SY', 'united-kingdom': 'GB'
  };
  const code = map[countryId] || 'TR';
  try {
    return new Intl.DisplayNames([locale], { type: 'region' }).of(code) || countryId;
  } catch(e) {
    return countryId;
  }
};
`;

const replaceBlockOld = `
        <PageHero lang={lang} eyebrow={\`Global Trade \${lang.toUpperCase()}\`} title={corridor.seoMeta.title} lead={corridor.seoMeta.description} />
        <section class="section">
          <div class="container content-grid">
            <div class="prose">
              <div class="content-block">
                <h2>Sourcing from Turkey to {corridor.targetCountry}</h2>
                <p>Turkey offers unparalleled manufacturing quality and strategic logistics to {corridor.targetCountry}. We bridge the gap by providing direct access to verified manufacturers, reducing supply chain risks, and ensuring full compliance.</p>
              </div>
              
              <div class="content-block">
                <h2>Key Export Industries</h2>
                <ul class="check-list">
                  {corridor.keyIndustries.map(ind => <li>{ind}</li>)}
                </ul>
              </div>
            </div>
            
            <aside class="side-panel">
              <div class="company-card" style="margin-bottom: 20px;">
                <span class="company-badge">Logistics & Transit</span>
                <div class="company-card-header">
                  <h3>{corridor.logistics.mode}</h3>
                </div>
                <p style="font-size: 0.9rem; margin-top: 10px;">{corridor.logistics.description}</p>
                <dl class="company-meta-dl" style="margin-top: 14px;">
                  <div><dt>Average Transit Time</dt><dd><strong>{corridor.logistics.transitTime}</strong></dd></div>
                </dl>
              </div>
              
              <div class="company-card">
                <span class="company-badge">Trade Compliance</span>
                <p style="font-size: 0.9rem; margin-top: 10px; margin-bottom: 0;">{corridor.compliance}</p>
              </div>
            </aside>
          </div>
        </section>
        
        <section class="section answer-section">
          <div class="container">
            <div class="section-head">
              <h2>Ready to source for {corridor.targetCountry}?</h2>
              <p>{corridor.customCta}</p>
            </div>
            <div class="actions">
              <a class="button" href={sectionHref('contact')}>Contact our Trade Desk</a>
            </div>
          </div>
        </section>
`;

const replaceBlockNew = `
        {(() => {
          const dict = corridorLocales[lang] || corridorLocales.en;
          const countryName = getCountryName(corridor.id, lang);
          const tHead = dict.sourcing.replace('{country}', countryName);
          const tLead = dict.sourcingLead.replace('{country}', countryName);
          const tReady = dict.ready.replace('{country}', countryName);
          const tCta = dict.cta.replace('{country}', countryName);
          
          return (
          <>
            <PageHero lang={lang} eyebrow={\`Global Trade \${lang.toUpperCase()}\`} title={tHead} lead={tLead} />
            <section class="section">
              <div class="container content-grid">
                <div class="prose">
                  <div class="content-block">
                    <h2>{tHead}</h2>
                    <p>{tLead}</p>
                  </div>
                  
                  <div class="content-block">
                    <h2>{dict.industries}</h2>
                    <ul class="check-list">
                      {corridor.keyIndustries.map(ind => <li>{ind}</li>)}
                    </ul>
                  </div>
                </div>
                
                <aside class="side-panel">
                  <div class="company-card" style="margin-bottom: 20px;">
                    <span class="company-badge">{dict.logistics}</span>
                    <div class="company-card-header">
                      <h3>{corridor.logistics.mode}</h3>
                    </div>
                    <p style="font-size: 0.9rem; margin-top: 10px;">{corridor.logistics.description}</p>
                    <dl class="company-meta-dl" style="margin-top: 14px;">
                      <div><dt>{dict.transitTime}</dt><dd><strong>{corridor.logistics.transitTime}</strong></dd></div>
                    </dl>
                  </div>
                  
                  <div class="company-card">
                    <span class="company-badge">{dict.compliance}</span>
                    <p style="font-size: 0.9rem; margin-top: 10px; margin-bottom: 0;">{corridor.compliance}</p>
                  </div>
                </aside>
              </div>
            </section>
            
            <section class="section answer-section">
              <div class="container">
                <div class="section-head">
                  <h2>{tReady}</h2>
                  <p>{tCta}</p>
                </div>
                <div class="actions">
                  <a class="button" href={sectionHref('contact')}>{contactCopy[lang as Locale]?.contactDesk || 'Contact our Trade Desk'}</a>
                </div>
              </div>
            </section>
          </>);
        })()}
`;

// Insert dict code before the first functional component logic
content = content.replace("const { record } = Astro.props as { record: RouteRecord };", dictCode + "\nconst { record } = Astro.props as { record: RouteRecord };");
content = content.replace(replaceBlockOld, replaceBlockNew);

fs.writeFileSync('src/components/PageContent.astro', content);
console.log('Successfully patched PageContent with translations');
