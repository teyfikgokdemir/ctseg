const fs = require('fs');
let t = fs.readFileSync('src/components/PageContent.astro', 'utf8');

const tLocalesCodeOld = `const corridorLocales: Record<string, any> = {`;
const tLocalesCodeNew = `const corridorLocales: Record<string, any> = {
  en: {
    sourcing: "Sourcing from Turkey to {country}",
    sourcingLead: "Turkey offers unparalleled manufacturing quality and strategic logistics to {country}. We bridge the gap by providing direct access to verified manufacturers, reducing supply chain risks, and ensuring full compliance.",
    industries: "Key Export Industries",
    logistics: "Logistics & Transit",
    transitTime: "Average Transit Time",
    compliance: "Trade Compliance",
    ready: "Ready to source for {country}?",
    cta: "Connect with verified Turkish suppliers for the {country} market",
    complianceDesc: "Fully transparent and compliant sourcing. Direct manufacturer coordination for safe, reliable, and legal B2B procurement.",
    logisticsDesc: "Reliable multi-modal transit routes ensuring steady flow of goods, bypassing restricted zones with optimized lead times.",
    ind: {}
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
    complianceDesc: "Полностью прозрачные поставки с соблюдением всех санкционных ограничений. Прямая координация с производителями для безопасных B2B закупок.",
    logisticsDesc: "Надежные мультимодальные маршруты, гарантирующие бесперебойные поставки товаров с оптимизированными сроками.",
    ind: {
      'Apparel & Textiles': 'Одежда и текстиль',
      'Industrial Machinery': 'Промышленное оборудование',
      'FMCG': 'Товары повседневного спроса',
      'Construction Materials': 'Строительные материалы',
      'Automotive Parts': 'Автомобильные запчасти',
      'Consumer Electronics': 'Электроника',
      'Furniture': 'Мебель',
      'Pharmaceuticals': 'Фармацевтика'
    }
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
    complianceDesc: "Tamamen şeffaf ve uluslararası ticaret kurallarına uygun tedarik. Güvenli B2B alımları için üreticilerle doğrudan koordinasyon.",
    logisticsDesc: "Gecikmeleri önleyen, optimize edilmiş transit süreleriyle kesintisiz mal akışı sağlayan güvenilir çoklu taşımacılık (multi-modal) rotaları.",
    ind: {
      'Apparel & Textiles': 'Tekstil ve Hazır Giyim',
      'Industrial Machinery': 'Endüstriyel Makine',
      'FMCG': 'Hızlı Tüketim Malları',
      'Construction Materials': 'İnşaat Malzemeleri',
      'Automotive Parts': 'Otomotiv Yedek Parçaları',
      'Consumer Electronics': 'Tüketici Elektroniği',
      'Furniture': 'Mobilya',
      'Pharmaceuticals': 'İlaç ve Eczacılık'
    }
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
    complianceDesc: "Vollständig transparente und konforme Beschaffung. Direkte Herstellerkoordination für sicheren, zuverlässigen B2B-Einkauf.",
    logisticsDesc: "Zuverlässige multimodale Transitrouten für einen stetigen Warenfluss mit optimierten Lieferzeiten.",
    ind: {
      'Apparel & Textiles': 'Bekleidung & Textilien',
      'Industrial Machinery': 'Industriemaschinen',
      'FMCG': 'Konsumgüter (FMCG)',
      'Construction Materials': 'Baumaterialien',
      'Automotive Parts': 'Autoteile'
    }
  },
  it: {
    sourcing: "Sourcing dalla Turchia verso {country}",
    sourcingLead: "La Turchia offre qualità manifatturiera e logistica strategica verso {country}. Forniamo accesso diretto a produttori verificati.",
    industries: "Settori chiave",
    logistics: "Logistica e transito",
    transitTime: "Tempo medio di transito",
    compliance: "Conformità commerciale",
    ready: "Pronto per il sourcing verso {country}?",
    cta: "Connettiti con fornitori turchi verificati",
    complianceDesc: "Sourcing completamente trasparente e conforme. Coordinamento diretto con i produttori per acquisti B2B sicuri.",
    logisticsDesc: "Affidabili rotte di transito multimodali che garantiscono un flusso costante di merci con tempi di consegna ottimizzati.",
    ind: { 'Apparel & Textiles': 'Abbigliamento e tessuti', 'Industrial Machinery': 'Macchinari industriali', 'FMCG': 'Beni di largo consumo', 'Construction Materials': 'Materiali da costruzione', 'Automotive Parts': 'Ricambi auto' }
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
    complianceDesc: "تامین کاملاً شفاف و مطابق با قوانین تجاری. هماهنگی مستقیم با تولیدکننده برای خریدهای امن B2B.",
    logisticsDesc: "مسیرهای ترانزیت چندوجهی و مطمئن که جریان پایدار کالاها را با زمان‌های تحویل بهینه تضمین می‌کنند.",
    ind: { 'Apparel & Textiles': 'پوشاک و منسوجات', 'Industrial Machinery': 'ماشین‌آلات صنعتی', 'FMCG': 'کالاهای تندمصرف', 'Construction Materials': 'مصالح ساختمانی', 'Automotive Parts': 'قطعات خودرو' }
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
    complianceDesc: "完全透明且合规的采购。直接与制造商协调，确保安全可靠的B2B采购。",
    logisticsDesc: "可靠的多式联运路线，确保货物稳定流通，并优化交货时间。",
    ind: { 'Apparel & Textiles': '服装与纺织品', 'Industrial Machinery': '工业机械', 'FMCG': '快速消费品', 'Construction Materials': '建筑材料', 'Automotive Parts': '汽车零部件' }
  },
  vi: {
    sourcing: "Tìm nguồn cung ứng từ Thổ Nhĩ Kỳ đến {country}",
    sourcingLead: "Thổ Nhĩ Kỳ cung cấp chất lượng sản xuất và hậu cần chiến lược đến {country}. Chúng tôi cung cấp quyền truy cập trực tiếp vào các nhà sản xuất.",
    industries: "Các ngành xuất khẩu chính",
    logistics: "Hậu cần & Vận chuyển",
    transitTime: "Thời gian vận chuyển",
    compliance: "Tuân thủ thương mại",
    ready: "Sẵn sàng tìm nguồn cung ứng cho {country}?",
    cta: "Kết nối với các nhà cung cấp Thổ Nhĩ Kỳ",
    complianceDesc: "Tìm nguồn cung ứng hoàn toàn minh bạch và tuân thủ. Phối hợp trực tiếp với nhà sản xuất để mua sắm B2B an toàn.",
    logisticsDesc: "Các tuyến vận chuyển đa phương thức đáng tin cậy đảm bảo luồng hàng hóa ổn định với thời gian giao hàng tối ưu.",
    ind: { 'Apparel & Textiles': 'May mặc & Dệt may', 'Industrial Machinery': 'Máy móc công nghiệp', 'FMCG': 'Hàng tiêu dùng nhanh', 'Construction Materials': 'Vật liệu xây dựng', 'Automotive Parts': 'Phụ tùng ô tô' }
  }
};

const getCountryName`;

t = t.replace(t.substring(t.indexOf('const corridorLocales'), t.indexOf('const getCountryName')), tLocalesCodeNew);

const renderOld = `{corridor.keyIndustries.map(ind => <li>{ind}</li>)}
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
                <p style="font-size: 0.9rem; line-height: 1.5; margin: 10px 0 0;">{corridor.compliance}</p>
              </div>`;
              
const renderNew = `{corridor.keyIndustries.map(ind => <li>{dict.ind?.[ind] || ind}</li>)}
                </ul>
              </div>
            </div>
            
            <aside class="side-panel">
              <div class="company-card" style="margin-bottom: 20px;">
                <span class="company-badge">{dict.logistics}</span>
                <div class="company-card-header">
                  <h3 style="color:#fff!important;">{corridor.logistics.mode}</h3>
                </div>
                <p style="font-size: 0.9rem; margin-top: 10px; color:#d9d9d3!important;">{dict.logisticsDesc}</p>
                <dl class="company-meta-dl" style="margin-top: 14px;">
                  <div><dt style="color:#d9d9d3!important;">{dict.transitTime}</dt><dd><strong style="color:#fff!important;">{corridor.logistics.transitTime}</strong></dd></div>
                </dl>
              </div>
              
              <div class="company-card">
                <span class="company-badge">{dict.compliance}</span>
                <p style="font-size: 0.9rem; line-height: 1.5; margin: 10px 0 0; color:#d9d9d3!important;">{dict.complianceDesc}</p>
              </div>`;

t = t.replace(renderOld, renderNew);

fs.writeFileSync('src/components/PageContent.astro', t);
console.log('Fixed PageContent data translation and contrast overrides');
