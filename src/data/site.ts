import { guideSlugs, specialSlugs, type GuideId } from './completion';
import { activeLocales, localeByCode, siteLocales, type SiteLocale } from './locales';

export const locales = siteLocales;
export type Locale = SiteLocale;

export const localeNames: Record<Locale, string> = {
  tr: localeByCode.tr.label, en: localeByCode.en.label, de: localeByCode.de.label, it: localeByCode.it.label, fa: localeByCode.fa.label, ru: localeByCode.ru.label, zh: localeByCode.zh.label, vi: localeByCode.vi.label
};

export { activeLocales };

type Localized<T = string> = Record<Locale, T>;

export const company = {
  name: {
    tr: 'CTSEG Sanayi ve Ticaret Limited Şirketi',
    en: 'CTSEG Industry and Trade Limited Company',
    de: 'CTSEG Industrie und Handel GmbH',
    it: 'CTSEG S.r.l.',
    fa: 'CTSEG (شرکت با مسئولیت محدود صنعتی و تجاری)',
    ru: 'CTSEG Промышленно-Торговая Компания с Ограниченной Ответственностью',
    zh: 'CTSEG 工业与贸易有限公司',
    vi: 'Công ty TNHH Công nghiệp và Thương mại CTSEG'
  },
  alternateName: 'CTSEG',
  founder: 'Teyfik Gökdemir',
  foundingYear: '2022',
  streetAddress: '',
  addressLocality: 'Tuzla',
  addressRegion: 'İstanbul',
  addressCountry: 'TR',
  email: 'info@ctseg.com.tr',
  phone: '+90 545 678 26 55',
  whatsapp: '905456782655'
} as const;

export const companyCopy: Record<Locale, {
  aboutHeading: string;
  aboutBody: string;
  labels: { name: string; founder: string; founded: string; headquarters: string };
  headquarters: string;
  footerLocation: string;
}> = {
  tr: {
    aboutHeading: 'İstanbul’dan uluslararası ticarete',
    aboutBody: 'CTSEG Sanayi ve Ticaret Limited Şirketi, 2022 yılında Teyfik Gökdemir tarafından İstanbul’da kuruldu. CTSEG; stratejik tedarik, üretici ve tedarikçi doğrulaması, maliyet analizi, ticari ürün tedariği ve uluslararası ticaret süreçlerinde şirketlere destek verir.',
    labels: { name: 'Şirket adı', founder: 'Kurucu', founded: 'Kuruluş yılı', headquarters: 'Merkez' },
    headquarters: 'Tuzla, İstanbul, Türkiye',
    footerLocation: 'Tuzla, İstanbul, Türkiye'
  },
  en: {
    aboutHeading: 'From Istanbul to international trade',
    aboutBody: 'CTSEG Industry and Trade Limited Company was founded in Istanbul in 2022 by Teyfik Gökdemir. CTSEG supports companies with strategic sourcing, manufacturer and supplier verification, cost analysis, trade product sourcing and international trade processes.',
    labels: { name: 'Company name', founder: 'Founder', founded: 'Year established', headquarters: 'Headquarters' },
    headquarters: 'Tuzla, Istanbul, Türkiye',
    footerLocation: 'Tuzla, Istanbul, Türkiye'
  },
  de: {
    aboutHeading: 'Von Istanbul in den internationalen Handel',
    aboutBody: 'CTSEG Industrie und Handel GmbH wurde 2022 von Teyfik Gökdemir in Istanbul gegründet. CTSEG unterstützt Unternehmen bei strategischer Beschaffung, der Prüfung von Herstellern und Lieferanten, Kostenanalysen, der Beschaffung von Handelsprodukten und internationalen Handelsprozessen.',
    labels: { name: 'Unternehmensname', founder: 'Gründer', founded: 'Gründungsjahr', headquarters: 'Hauptsitz' },
    headquarters: 'Tuzla, Istanbul, Türkei',
    footerLocation: 'Tuzla, Istanbul, Türkei'
  },
  it: {
    aboutHeading: 'Da Istanbul al commercio internazionale',
    aboutBody: 'CTSEG S.r.l. è stata fondata a Istanbul nel 2022 da Teyfik Gökdemir. CTSEG affianca le aziende nel sourcing strategico, nella verifica di produttori e fornitori, nell’analisi dei costi, nell’approvvigionamento di prodotti commerciali e nei processi di commercio internazionale.',
    labels: { name: 'Nome dell’azienda', founder: 'Fondatore', founded: 'Anno di fondazione', headquarters: 'Sede' },
    headquarters: 'Tuzla, Istanbul, Turchia',
    footerLocation: 'Tuzla, Istanbul, Turchia'
  },
  ru: {
    aboutHeading: 'Из Стамбула — на международные рынки',
    aboutBody: 'Компания CTSEG Промышленно-Торговая Компания с Ограниченной Ответственностью основана Тейфиком Гёкдемиром в Стамбуле в 2022 году. Компания помогает с международным сорсингом, проверкой производителей и поставщиков, поиском покупателей и коммерческой координацией.',
    labels: { name: 'Компания', founder: 'Основатель', founded: 'Год основания', headquarters: 'Главный офис' },
    headquarters: 'Tuzla, Стамбул, Турция',
    footerLocation: 'Тузла, Стамбул, Турция'
  },
  fa: {
    aboutHeading: 'از استانبول به تجارت بین‌المللی',
    aboutBody: 'شرکت CTSEG (شرکت با مسئولیت محدود صنعتی و تجاری) در سال ۲۰۲۲ توسط توفیق گوکدمیر در استانبول تأسیس شد. CTSEG به شرکت‌ها در زمینه تأمین استراتژیک، اعتبارسنجی تولیدکنندگان و تأمین‌کنندگان، تحلیل هزینه، تأمین کالاهای تجاری و فرآیندهای تجارت بین‌الملل خدمات ارائه می‌دهد.',
    labels: { name: 'نام شرکت', founder: 'بنیان‌گذار', founded: 'سال تأسیس', headquarters: 'دفتر مرکزی' },
    headquarters: 'توزلا، استانبول، ترکیه',
    footerLocation: 'توزلا، استانبول، ترکیه'
  },
  zh: {
    aboutHeading: '立足伊斯坦布尔，连接全球贸易',
    aboutBody: 'CTSEG 工业与贸易有限公司由 Teyfik Gökdemir 于 2022 年在伊斯坦布尔创立。CTSEG 致力于为全球企业提供战略采购、生产商与供应商背景核验、成本优化分析、大宗特色商品供应链对接以及国际贸易商业决策支持。',
    labels: { name: '公司名称', founder: '创始人', founded: '创立年份', headquarters: '总部地址' },
    headquarters: '土耳其伊斯坦布尔图兹拉 (Tuzla, Istanbul, Türkiye)',
    footerLocation: '土耳其伊斯坦布尔图兹拉'
  },
  vi: {
    aboutHeading: 'Từ Istanbul kết nối thương mại quốc tế',
    aboutBody: 'Công ty TNHH Công nghiệp và Thương mại CTSEG được thành lập tại Istanbul vào năm 2022 bởi Teyfik Gökdemir. CTSEG hỗ trợ các doanh nghiệp trong việc thu mua chiến lược, thẩm định và xác minh nhà sản xuất/nhã cung cấp, phân tích chi phí, cung ứng sản phẩm thương mại và điều phối các quy trình thương mại quốc tế.',
    labels: { name: 'Tên công ty', founder: 'Người sáng lập', founded: 'Năm thành lập', headquarters: 'Trụ sở chính' },
    headquarters: 'Tuzla, Istanbul, Thổ Nhĩ Kỳ',
    footerLocation: 'Tuzla, Istanbul, Thổ Nhĩ Kỳ'
  }
};

export const sectionSlugs: Record<string, Localized> = {
  services: { tr: 'hizmetler', en: 'services', de: 'dienstleistungen', it: 'servizi', ru: 'uslugi', fa: 'services', zh: 'services', vi: 'services' },
  products: { tr: 'ticari-urunler', en: 'trade-products', de: 'handelsprodukte', it: 'prodotti-commerciali', ru: 'tovary', fa: 'trade-products', zh: 'trade-products', vi: 'trade-products' },
  markets: { tr: 'pazarlar', en: 'markets', de: 'maerkte', it: 'mercati', ru: 'rynki', fa: 'markets', zh: 'markets', vi: 'markets' },
  insights: { tr: 'icgoruler', en: 'insights', de: 'einblicke', it: 'approfondimenti', ru: 'materialy', fa: 'insights', zh: 'insights', vi: 'insights' },
  about: { tr: 'hakkimizda', en: 'about', de: 'ueber-uns', it: 'chi-siamo', ru: 'o-kompanii', fa: 'about', zh: 'about', vi: 'about' },
  contact: { tr: 'iletisim', en: 'contact', de: 'kontakt', it: 'contatti', ru: 'kontakty', fa: 'contact', zh: 'contact', vi: 'contact' }
};

export const ui: Record<Locale, {
  home: string; services: string; products: string; markets: string; insights: string;
  about: string; contact: string; quote: string; menu: string; close: string; medicalLabel: string;
  language: string; readMore: string; allProducts: string; allServices: string;
  origin: string; quality: string; logistics: string; applications: string;
  faq: string; related: string; updated: string; details: string;
  cookieTitle: string; cookieCopy: string; accept: string; reject: string; rights: string;
  samplePolicy: string; sampleText: string; complianceText: string; contactLead: string; emptyInsights: string;
}> = {
  tr: {
    home: 'Ana Sayfa', services: 'Hizmetler', products: 'Ticari Ürünler', markets: 'Pazarlar', insights: 'İçgörüler',
    about: 'Hakkımızda', contact: 'İletişim', quote: 'Teklif İste', menu: 'Menüyü aç', close: 'Menüyü kapat', medicalLabel: 'REFLEX Medikal',
    language: 'Dil seçimi', readMore: 'İncele', allProducts: 'Tüm ürünleri görüntüle', allServices: 'Tüm hizmetleri görüntüle',
    origin: 'Menşe şeffaflığı', quality: 'Kalite ve uyum', logistics: 'Ticari değerlendirme', applications: 'Kullanım alanları',
    faq: 'Sık sorulan sorular', related: 'İlgili çözümler', updated: 'Son güncelleme', details: 'Detaylar',
    cookieTitle: 'Çerez tercihleri', cookieCopy: 'Analitik çerezleri yalnızca izninizle kullanırız. Zorunlu çerezler her zaman aktiftir.',
    accept: 'Kabul et', reject: 'Reddet', rights: 'Tüm hakları saklıdır.',
    samplePolicy: 'Numune politikası', sampleText: 'Numuneler ücretsiz veya herkese açık değildir. Yalnızca şirket bilgisi, kullanım alanı, tahmini hacim ve teslim ülkesi doğrulanan ciddi ticari alıcılar için ön yeterlilik sonrasında değerlendirilebilir.',
    complianceText: 'Gerçek menşe, üretici ve parti belgeleri şeffaf biçimde beyan edilir. Menşe gizleme veya yanıltıcı yeniden etiketleme desteklenmez.',
    contactLead: 'Şirketinizi, ihtiyacınızı, tahmini hacmi ve teslim ülkesini paylaşın. Ekibimiz uygun ticari değerlendirme yolunu belirlesin.',
    emptyInsights: 'Bu dilde yayımlanmış içgörü bulunmamaktadır.'
  },
  en: {
    home: 'Home', services: 'Services', products: 'Trade Products', markets: 'Markets', insights: 'Insights',
    about: 'About', contact: 'Contact', quote: 'Request a Quote', menu: 'Open menu', close: 'Close menu', medicalLabel: 'REFLEX Medical',
    language: 'Language selection', readMore: 'Explore', allProducts: 'View all products', allServices: 'View all services',
    origin: 'Origin transparency', quality: 'Quality & compliance', logistics: 'Commercial assessment', applications: 'Applications',
    faq: 'Frequently asked questions', related: 'Related solutions', updated: 'Last updated', details: 'Details',
    cookieTitle: 'Cookie preferences', cookieCopy: 'We use analytics cookies only with your consent. Essential cookies are always active.',
    accept: 'Accept', reject: 'Reject', rights: 'All rights reserved.',
    samplePolicy: 'Sample policy', sampleText: 'Samples are neither free nor publicly available. They may be considered after pre-qualification only for serious commercial buyers whose company, application, indicative volume and delivery country have been verified.',
    complianceText: 'Actual origin, producer and batch documentation is declared transparently. CTSEG does not support origin concealment or deceptive relabelling.',
    contactLead: 'Share your company, requirement, indicative volume and delivery country. Our team will define the appropriate commercial assessment route.',
    emptyInsights: 'No insight has been published in this language.'
  },
  de: {
    home: 'Startseite', services: 'Dienstleistungen', products: 'Handelsprodukte', markets: 'Märkte', insights: 'Einblicke',
    about: 'Über uns', contact: 'Kontakt', quote: 'Angebot anfragen', menu: 'Menü öffnen', close: 'Menü schließen', medicalLabel: 'REFLEX Medizin',
    language: 'Sprachauswahl', readMore: 'Entdecken', allProducts: 'Alle Produkte ansehen', allServices: 'Alle Dienstleistungen ansehen',
    origin: 'Transparente Herkunft', quality: 'Qualität & Konformität', logistics: 'Kaufmännische Bewertung', applications: 'Anwendungen',
    faq: 'Häufig gestellte Fragen', related: 'Verwandte Lösungen', updated: 'Letzte Aktualisierung', details: 'Details',
    cookieTitle: 'Cookie-Einstellungen', cookieCopy: 'Analyse-Cookies verwenden wir nur mit Ihrer Einwilligung. Notwendige Cookies sind immer aktiv.',
    accept: 'Akzeptieren', reject: 'Ablehnen', rights: 'Alle Rechte vorbehalten.',
    samplePolicy: 'Musterrichtlinie', sampleText: 'Muster sind weder kostenlos noch öffentlich verfügbar. Sie können erst nach einer Vorqualifizierung für ernsthafte gewerbliche Käufer geprüft werden, deren Unternehmen, Anwendung, Richtmenge und Lieferland verifiziert wurden.',
    complianceText: 'Tatsächliche Herkunft, Hersteller- und Chargendokumente werden transparent offengelegt. CTSEG unterstützt weder Herkunftsverschleierung noch irreführende Umetikettierung.',
    contactLead: 'Teilen Sie uns Unternehmen, Bedarf, Richtmenge und Lieferland mit. Unser Team bestimmt den passenden kaufmännischen Prüfweg.',
    emptyInsights: 'In dieser Sprache wurden noch keine Einblicke veröffentlicht.'
  },
  it: {
    home: 'Home', services: 'Servizi', products: 'Prodotti commerciali', markets: 'Mercati', insights: 'Approfondimenti',
    about: 'Chi siamo', contact: 'Contatti', quote: 'Richiedi un’offerta', menu: 'Apri menu', close: 'Chiudi menu', medicalLabel: 'REFLEX Medicale',
    language: 'Selezione lingua', readMore: 'Scopri', allProducts: 'Vedi tutti i prodotti', allServices: 'Vedi tutti i servizi',
    origin: 'Trasparenza dell’origine', quality: 'Qualità e conformità', logistics: 'Valutazione commerciale', applications: 'Applicazioni',
    faq: 'Domande frequenti', related: 'Soluzioni correlate', updated: 'Ultimo aggiornamento', details: 'Dettagli',
    cookieTitle: 'Preferenze cookie', cookieCopy: 'Utilizziamo cookie analitici solo con il tuo consenso. I cookie necessari sono sempre attivi.',
    accept: 'Accetta', reject: 'Rifiuta', rights: 'Tutti i diritti riservati.',
    samplePolicy: 'Politica campioni', sampleText: 'I campioni non sono gratuiti né disponibili al pubblico. Possono essere valutati dopo la prequalifica esclusivamente per acquirenti commerciali seri, con azienda, applicazione, volume indicativo e Paese di consegna verificati.',
    complianceText: 'L’origine effettiva, il produttore e i documenti di lotto sono dichiarati con trasparenza. CTSEG non facilita occultamento dell’origine o rietichettatura ingannevole.',
    contactLead: 'Indica azienda, esigenza, volume indicativo e Paese di consegna. Il nostro team definirà il percorso di valutazione commerciale appropriato.',
    emptyInsights: 'Nessun approfondimento è stato pubblicato in questa lingua.'
  },
  ru: {
    home: 'Главная', services: 'Услуги', products: 'Товары', markets: 'Рынки', insights: 'Материалы',
    about: 'О компании', contact: 'Контакты', quote: 'Запросить коммерческое предложение', menu: 'Открыть меню', close: 'Закрыть меню', medicalLabel: 'REFLEX Медицина',
    language: 'Выбор языка', readMore: 'Подробнее', allProducts: 'Все направления', allServices: 'Все услуги',
    origin: 'Прозрачность происхождения', quality: 'Качество и стандарты', logistics: 'Коммерческая оценка', applications: 'Области применения',
    faq: 'Частые вопросы', related: 'Связанные решения', updated: 'Обновлено', details: 'Подробнее',
    cookieTitle: 'Настройки cookie', cookieCopy: 'Мы используем аналитические cookie только с вашего согласия. Обязательные cookie включены всегда.',
    accept: 'Принять все', reject: 'Отклонить', rights: 'Все права защищены.',
    samplePolicy: 'Порядок предоставления образцов', sampleText: 'Образцы не предоставляются бесплатно или в общем порядке. Запрос на образцы рассматривается только после предварительной квалификации для подтверждённых коммерческих покупателей.',
    complianceText: 'Фактическое происхождение, производитель и документы на партию декларируются прозрачно. Мы не поддерживаем сокрытие происхождения.',
    contactLead: 'Укажите компанию, задачу, ориентировочный объём и страну поставки. Мы согласуем дальнейший формат работы.',
    emptyInsights: 'Материалы на этом языке пока не опубликованы.'
  },
  fa: {
    home: 'صفحه اصلی', services: 'خدمات', products: 'محصولات تجاری', markets: 'بازارها', insights: 'تحلیل‌ها',
    about: 'درباره ما', contact: 'تماس', quote: 'درخواست پیش‌فاکتور', menu: 'باز کردن منو', close: 'بستن منو', medicalLabel: 'دستکش‌های پزشکی REFLEX',
    language: 'انتخاب زبان', readMore: 'مشاهده', allProducts: 'مشاهده همه محصولات', allServices: 'مشاهده همه خدمات',
    origin: 'شفافیت مبدأ', quality: 'کیفیت و انطباق', logistics: 'ارزیابی تجاری', applications: 'کاربردها',
    faq: 'پرسش‌های متداول', related: 'راهکارهای مرتبط', updated: 'آخرین به‌روزرسانی', details: 'جزئیات',
    cookieTitle: 'تنظیمات کوکی', cookieCopy: 'ما کوکی‌های تحلیلی را تنها با رضایت شما استفاده می‌کنیم. کوکی‌های ضروری همیشه فعال هستند.',
    accept: 'پذیرش همه', reject: 'رد کردن', rights: 'تمامی حقوق محفوظ است.',
    samplePolicy: 'سیاست ارسال نمونه', sampleText: 'نمونه‌ها رایگان یا در دسترس عموم نیستند. ارسال نمونه تنها پس از اعتبارسنجی اولیه برای خریداران تجاری معتبر و تأیید حجم تخمینی و کشور مقصد قابل بررسی است.',
    complianceText: 'مبدأ واقعی، مشخصات تولیدکننده و مدارک پارت به‌صورت شفاف اعلام می‌شوند. پنهان‌سازی مبدأ یا برچسب‌گذاری گمراه‌کننده مورد تأیید نیست.',
    contactLead: 'مشخصات شرکت، نیاز تجاری، حجم تخمینی و کشور مقصد را ارسال کنید تا تیم ما مسیر مناسب ارزیابی تجاری را مشخص کند.',
    emptyInsights: 'هنوز تحلیلی به زبان فارسی منتشر نشده است.'
  },
  zh: {
    home: '首页', services: '核心业务', products: '大宗与特色商品', markets: '贸易走廊', insights: '商业内参',
    about: '关于我们', contact: '商务对接', quote: '发起询价', menu: '打开导航', close: '关闭导航', medicalLabel: 'REFLEX 医用手套',
    language: '语言选择', readMore: '了解详情', allProducts: '查看全部产品', allServices: '查看全部业务',
    origin: '产地与溯源透明度', quality: '品质与合规标准', logistics: '商业可行性评估', applications: '应用场景',
    faq: '常见商务问答', related: '相关解决方案', updated: '最近更新', details: '详细说明',
    cookieTitle: 'Cookie 偏好设置', cookieCopy: '我们仅在征得您同意的情况下使用分析类 Cookie。基础必要 Cookie 始终保持启用。',
    accept: '全部接受', reject: '拒绝非必要', rights: '保留所有权利。',
    samplePolicy: '样品调样政策', sampleText: '样品并非免费或公开派发。仅在完成初步资质审核、确认采购企业主体、具体应用场景、预估采购量及目的地国家后，方可启动专项样品与检测流程。',
    complianceText: '实际产地、生产主体及批次检测报告均如实透明披露。CTSEG 坚决抵制任何隐瞒产地或误导性更换标签的行为。',
    contactLead: '请告知您的企业名称、具体采购或出海需求、预估批次体量及目标交付国，我们的专业团队将为您定制可落地的商业评估方案。',
    emptyInsights: '暂无该语言发布的文章。'
  },
  vi: {
    home: 'Trang chủ', services: 'Dịch vụ', products: 'Sản phẩm thương mại', markets: 'Thị trường', insights: 'Góc nhìn chuyên sâu',
    about: 'Về chúng tôi', contact: 'Liên hệ', quote: 'Yêu cầu báo giá', menu: 'Mở menu', close: 'Đóng menu', medicalLabel: 'Găng tay REFLEX',
    language: 'Chọn ngôn ngữ', readMore: 'Khám phá', allProducts: 'Xem tất cả sản phẩm', allServices: 'Xem tất cả dịch vụ',
    origin: 'Minh bạch nguồn gốc', quality: 'Chất lượng & tuân thủ', logistics: 'Đánh giá thương mại', applications: 'Ứng dụng',
    faq: 'Câu hỏi thường gặp', related: 'Giải pháp liên quan', updated: 'Cập nhật lần cuối', details: 'Chi tiết',
    cookieTitle: 'Tùy chọn Cookie', cookieCopy: 'Chúng tôi chỉ sử dụng cookie phân tích khi có sự đồng ý của bạn. Các cookie thiết yếu luôn được kích hoạt.',
    accept: 'Chấp nhận', reject: 'Từ chối', rights: 'Bảo lưu mọi quyền.',
    samplePolicy: 'Chính sách mẫu thử', sampleText: 'Mẫu thử không được cung cấp miễn phí hay đại trà. Mẫu chỉ được xem xét sau bước sơ tuyển dành cho người mua thương mại nghiêm túc, đã được xác minh thông tin doanh nghiệp, mục đích sử dụng, sản lượng dự kiến và quốc gia giao hàng.',
    complianceText: 'Nguồn gốc thực tế, nhà sản xuất và hồ sơ lô hàng được khai báo minh bạch. CTSEG không hỗ trợ việc che giấu xuất xứ hoặc dán nhãn sai lệch.',
    contactLead: 'Hãy chia sẻ thông tin doanh nghiệp, nhu cầu, sản lượng dự kiến và quốc gia giao hàng. Đội ngũ của chúng tôi sẽ xác định phương án đánh giá thương mại phù hợp.',
    emptyInsights: 'Chưa có bài viết nào bằng ngôn ngữ này.'
  }
};

export const homeCopy: Record<Locale, {
  eyebrow: string; title: string; lead: string; signal: string; live: string;
  signals: [string, string][]; trust: string[]; servicesTitle: string; servicesLead: string;
  productsTitle: string; productsLead: string; marketsTitle: string; marketsLead: string;
  processTitle: string; process: string[]; ctaTitle: string;
}> = {
  tr: {
    eyebrow: 'Stratejik tedarik · uluslararası ticaret', title: 'Karmaşık tedarik kararlarında ticari kesinlik.',
    lead: 'Üretici keşfi, doğrulama, kalite, toplam maliyet ve pazar uyumunu disiplinli bir karar sürecinde birleştiriyoruz.',
    signal: 'CTSEG Signal Room', live: 'Aktif değerlendirme', signals: [['TEDARİK', 'Üretici ve kapasite'], ['KALİTE', 'COA ve izlenebilirlik'], ['PAZAR', 'Uyum ve teslim modeli']],
    trust: ['Doğrulanmış karşı taraflar', 'Şeffaf menşe', 'B2B karar disiplini', 'Türkiye · Avrupa · Uluslararası'],
    servicesTitle: 'Bir satın alma listesinden fazlası.', servicesLead: 'İhtiyaçtan doğrulamaya, tekliften uygulamaya tüm kararı yapılandırıyoruz.',
    productsTitle: 'Doğrulanabilir bir ticari ürün portföyü.', productsLead: 'Menşe, parti, kalite parametreleri ve teslim seçenekleriyle şeffaf biçimde değerlendirilen seçilmiş gıda ürünleri.',
    marketsTitle: 'Pazarlar arasında uygulanabilir bağlantılar.', marketsLead: 'Türkiye merkezli tedarik ve ticaret koordinasyonu; Avrupa ve uluslararası pazarlara açılım.',
    processTitle: 'Dört adımda kontrollü ilerleme', process: ['İhtiyacı tanımlayın', 'Pazar ve tarafları doğrulayın', 'Toplam ticari tabloyu karşılaştırın', 'Uygulama ve performansı izleyin'],
    ctaTitle: 'Bir sonraki tedarik kararınızı kanıtlara dayandırın.'
  },
  en: {
    eyebrow: 'Strategic sourcing · international trade', title: 'Commercial certainty for complex sourcing decisions.',
    lead: 'We combine producer discovery, verification, quality, total cost and market fit in a disciplined decision process.',
    signal: 'CTSEG Signal Room', live: 'Active assessment', signals: [['SOURCING', 'Producer & capacity'], ['QUALITY', 'COA & traceability'], ['MARKET', 'Compliance & delivery model']],
    trust: ['Verified counterparties', 'Transparent origin', 'B2B decision discipline', 'Türkiye · Europe · International'],
    servicesTitle: 'More than a procurement list.', servicesLead: 'We structure the entire decision: from requirement and verification to quote and execution.',
    productsTitle: 'A verifiable trade-product portfolio.', productsLead: 'Selected food products assessed transparently for origin, batch, quality parameters and delivery options.',
    marketsTitle: 'Actionable connections across markets.', marketsLead: 'Türkiye-based sourcing and trade coordination, expanding into Europe and international markets.',
    processTitle: 'Controlled progress in four steps', process: ['Define the requirement', 'Verify market and counterparties', 'Compare the total commercial picture', 'Monitor execution and performance'],
    ctaTitle: 'Make your next sourcing decision evidence-led.'
  },
  de: {
    eyebrow: 'Strategische Beschaffung · internationaler Handel', title: 'Mehr Sicherheit bei komplexen Beschaffungs­entscheidungen.',
    lead: 'Wir verbinden Produzentensuche, Prüfung, Qualität, Gesamtkosten und Markteignung in einem strukturierten Entscheidungsprozess.',
    signal: 'CTSEG Signal Room', live: 'Aktive Bewertung', signals: [['BESCHAFFUNG', 'Produzent und Kapazität'], ['QUALITÄT', 'COA und Rückverfolgbarkeit'], ['MARKT', 'Konformität und Liefermodell']],
    trust: ['Verifizierte Geschäftspartner', 'Transparente Herkunft', 'B2B-Entscheidungsdisziplin', 'Türkiye · Europa · International'],
    servicesTitle: 'Mehr als eine Einkaufsliste.', servicesLead: 'Wir strukturieren die gesamte Entscheidung – vom Bedarf über die Prüfung bis zur Umsetzung.',
    productsTitle: 'Ein überprüfbares Handelsprodukt-Portfolio.', productsLead: 'Ausgewählte Lebensmittel mit transparenter Bewertung von Herkunft, Charge, Qualität und Lieferoptionen.',
    marketsTitle: 'Umsetzbare Verbindungen zwischen Märkten.', marketsLead: 'Beschaffungs- und Handelskoordination aus Türkiye für Europa und internationale Märkte.',
    processTitle: 'Kontrollierter Fortschritt in vier Schritten', process: ['Bedarf definieren', 'Markt und Parteien prüfen', 'Gesamtes Handelsbild vergleichen', 'Umsetzung und Leistung überwachen'],
    ctaTitle: 'Treffen Sie Ihre nächste Beschaffungsentscheidung evidenzbasiert.'
  },
  it: {
    eyebrow: 'Approvvigionamento strategico · commercio internazionale', title: 'Più sicurezza nelle decisioni di approvvigionamento.',
    lead: 'Uniamo ricerca dei produttori, verifica, qualità, costo totale e idoneità al mercato in un unico processo decisionale.',
    signal: 'CTSEG Signal Room', live: 'Valutazione attiva', signals: [['FORNITURA', 'Produttore e capacità'], ['QUALITÀ', 'COA e tracciabilità'], ['MERCATO', 'Conformità e consegna']],
    trust: ['Controparti verificate', 'Origine trasparente', 'Disciplina decisionale B2B', 'Türkiye · Europa · Internazionale'],
    servicesTitle: 'Più di un elenco acquisti.', servicesLead: 'Strutturiamo l’intera decisione: dal fabbisogno e dalla verifica all’offerta e all’esecuzione.',
    productsTitle: 'Un portafoglio commerciale verificabile.', productsLead: 'Prodotti alimentari selezionati valutati per origine, lotto, parametri qualitativi e opzioni di consegna.',
    marketsTitle: 'Connessioni operative tra mercati.', marketsLead: 'Coordinamento di sourcing e commercio dalla Türkiye verso Europa e mercati internazionali.',
    processTitle: 'Avanzamento controllato in quattro fasi', process: ['Definire il fabbisogno', 'Verificare mercato e controparti', 'Confrontare il quadro commerciale totale', 'Monitorare esecuzione e prestazioni'],
    ctaTitle: 'Rendi la prossima decisione di sourcing basata su evidenze.'
  },
  ru: {
    eyebrow: 'Международный сорсинг · коммерческая координация', title: 'Уверенные решения для международных коммерческих задач.',
    lead: 'Объединяем поиск производителей, проверку поставщиков, оценку качества и соответствия рынку в одном понятном процессе.',
    signal: 'CTSEG Signal Room', live: 'Текущая оценка', signals: [['СОРСИНГ', 'Производитель и мощности'], ['КАЧЕСТВО', 'Документы и прослеживаемость'], ['РЫНОК', 'Требования и коммерческая модель']],
    trust: ['Проверяемые контрагенты', 'Прозрачное происхождение', 'Дисциплина B2B-решений', 'Турция · Европа · Международные рынки'],
    servicesTitle: 'Больше, чем список закупок.', servicesLead: 'Структурируем решение от постановки задачи и проверки до сравнения предложений.',
    productsTitle: 'Проверяемые направления сорсинга.', productsLead: 'Оцениваем происхождение, характеристики, качество и коммерческие условия без заявлений о наличии товара.',
    marketsTitle: 'Практичные связи между рынками.', marketsLead: 'Координация из Турции для Европы, Ирана и других подходящих международных рынков.',
    processTitle: 'Контролируемый процесс в четыре шага', process: ['Определить задачу', 'Исследовать рынок и стороны', 'Сравнить коммерческие параметры', 'Согласовать следующие шаги'],
    ctaTitle: 'Обсудите с нами вашу следующую коммерческую задачу.'
  },
  fa: {
    eyebrow: 'تأمین استراتژیک · تجارت بین‌المللی', title: 'اطمینان تجاری برای تصمیم‌های پیچیده تأمین.',
    lead: 'شناسایی تولیدکننده، ارزیابی اعتبار، کیفیت، هزینه کل و انطباق با بازار را در یک فرآیند تصمیم‌گیری منسجم ترکیب می‌کنیم.',
    signal: 'اتاق سیگنال CTSEG', live: 'ارزیابی فعال', signals: [['تأمین', 'تولیدکننده و ظرفیت'], ['کیفیت', 'COA و قابلیت ردگیری'], ['بازار', 'انطباق و مدل تحویل']],
    trust: ['طرف‌های تجاری تأییدشده', 'مبدأ شفاف', 'انضباط تصمیم‌گیری B2B', 'ترکیه · بازارهای اروپا · بین‌المللی'],
    servicesTitle: 'فراتر از یک لیست خرید.', servicesLead: 'تصمیم‌گیری کامل را از نیاز و ارزیابی تا استعلام قیمت و اجرا ساختاردهی می‌کنیم.',
    productsTitle: 'سبد محصولات تجاری قابل‌بررسی.', productsLead: 'محصولات غذایی منتخب با ارزیابی شفاف مبدأ، پارت، پارامترهای کیفی و گزینه‌های تحویل.',
    marketsTitle: 'ارتباطات عملیاتی میان بازارها.', marketsLead: 'هماهنگی تأمین و تجارت مبتنی بر ترکیه، با گسترش به بازارهای اروپا و بین‌المللی.',
    processTitle: 'پیشرفت کنترل‌شده در چهار مرحله', process: ['تعریف نیاز تجاری', 'ارزیابی بازار و طرف‌ها', 'مقایسه تصویر کامل تجاری', 'پایش اجرا و عملکرد'],
    ctaTitle: 'تصمیم بعدی تأمین خود را مبتنی بر شواهد بگیرید.'
  },
  zh: {
    eyebrow: '战略采购 · 跨境贸易对接', title: '为复杂的大宗跨国采购决策建立确定性。',
    lead: '我们将生产商探寻、资质背景核验、品质标准把控、总拥有成本测算与目标市场适配整合进严谨的商业决策闭环中。',
    signal: 'CTSEG 决策评估中心', live: '实时商务评估', signals: [['供应链', '核心工厂与产能排期'], ['品质', 'COA 质检与全批次溯源'], ['市场准入', '目标国合规与交付架构']],
    trust: ['资质核验合格的交易对手', '清晰透明的真实产地', 'B2B 严谨决策机制', '土耳其 · 欧洲市场 · 全球贸易走廊'],
    servicesTitle: '远不止于一份采购清单。', servicesLead: '从需求梳理、主体核验到询价对比与履约落地，我们为您构建权责清晰、风险可控的完整采购决策链。',
    productsTitle: '真实可溯源的大宗与特色商品。', productsLead: '严选特色食品与大宗原料，在产地、批次、理化指标及物流交付方案上均经受全方位透明评估。',
    marketsTitle: '打通跨区域市场的务实商业通道。', marketsLead: '立足土耳其枢纽，辐射欧洲、中东及全球主要贸易市场的进出口供应链协同。',
    processTitle: '四步把控采购落地流程', process: ['明确规格需求', '核验市场与主体', '综合对比全成本模型', '跟踪履约与交付质量'],
    ctaTitle: '让您的下一次跨国采购与出海决策基于扎实的事实与证据。'
  },
  vi: {
    eyebrow: 'Thu mua chiến lược · Thương mại quốc tế', title: 'Sự tin cậy thương mại cho các quyết định thu mua phức tạp.',
    lead: 'Chúng tôi kết hợp tìm kiếm nhà sản xuất, thẩm định, chất lượng, tổng chi phí sở hữu (TCO) và sự phù hợp thị trường trong một quy trình quyết định kỷ luật.',
    signal: 'CTSEG Signal Room', live: 'Đánh giá tích cực', signals: [['NGUỒN CUNG', 'Nhà sản xuất & năng lực'], ['CHẤT LƯỢNG', 'COA & khả năng truy xuất'], ['THỊ TRƯỜNG', 'Tuân thủ & mô hình giao hàng']],
    trust: ['Đối tác đã xác minh', 'Nguồn gốc minh bạch', 'Kỷ luật quyết định B2B', 'Thổ Nhĩ Kỳ · Thị trường Châu Âu · Quốc tế'],
    servicesTitle: 'Hơn cả một danh sách mua hàng thông thường.', servicesLead: 'Chúng tôi cấu trúc toàn bộ quyết định, từ yêu cầu và thẩm định đến báo giá và thực thi dự án.',
    productsTitle: 'Danh mục sản phẩm thương mại có thể xác minh.', productsLead: 'Các sản phẩm thực phẩm tuyển chọn được đánh giá minh bạch về xuất xứ, lô hàng, thông số chất lượng và phương án giao hàng.',
    marketsTitle: 'Kết nối thực thi giữa các thị trường.', marketsLead: 'Điều phối thu mua và thương mại có trụ sở tại Thổ Nhĩ Kỳ, mở rộng sang Châu Âu và các thị trường quốc tế.',
    processTitle: 'Tiến độ được kiểm soát qua bốn bước', process: ['Xác định yêu cầu', 'Thẩm định thị trường & đối tác', 'So sánh toàn diện bức tranh thương mại', 'Giám sát thực thi & hiệu suất'],
    ctaTitle: 'Đưa ra quyết định thu mua tiếp theo dựa trên bằng chứng xác thực.'
  }
};

export const serviceIds = ['strategic-sourcing', 'supplier-verification', 'trade-advisory', 'tco', 'market-entry'] as const;
export const services: Record<(typeof serviceIds)[number], { slugs: Localized; names: Localized; descriptions: Localized }> = {
  'strategic-sourcing': {
    slugs: { tr:'stratejik-tedarik', en:'strategic-sourcing', de:'strategische-beschaffung', it:'approvvigionamento-strategico', ru:'strategicheskiy-sorsing', fa:'strategic-sourcing', zh:'strategic-sourcing', vi:'strategic-sourcing' },
    names: { tr:'Stratejik Tedarik', en:'Strategic Sourcing', de:'Strategische Beschaffung', it:'Approvvigionamento strategico', ru:'Стратегический сорсинг', fa:'تأمین استراتژیک', zh:'战略采购与供应链对接', vi:'Thu mua chiến lược' },
    descriptions: {
      tr:'Tedarik pazarı analizi, RFQ, doğrulama, teklif karşılaştırma ve performans planıyla sürdürülebilir kararlar.',
      en:'Sustainable decisions through supply-market analysis, RFQ, verification, bid comparison and performance planning.',
      de:'Nachhaltige Entscheidungen durch Beschaffungsmarktanalyse, RFQ, Prüfung, Angebotsvergleich und Leistungsplanung.',
      it:'Decisioni sostenibili con analisi del mercato di fornitura, RFQ, verifica, confronto offerte e piano prestazioni.',
      ru:'Устойчивые решения благодаря анализу рынка поставщиков, подготовке RFQ, верификации и мониторингу производительности.',
      fa:'تصمیم‌گیری پایدار از طریق تحلیل بازار تأمین، RFQ، اعتباربرسنجی، مقایسه پیشنهادات و برنامه‌ریزی عملکرد.',
      zh:'通过严密的目标供应市场调研、RFQ 询价设计、供应商深度核验、报价横向对比及履约管控，实现稳健长效的采购决策。',
      vi:'Đưa ra quyết định bền vững thông qua phân tích thị trường cung ứng, chuẩn bị RFQ, thẩm định, so sánh báo giá và lập kế hoạch hiệu suất.'
    }
  },
  'supplier-verification': {
    slugs: { tr:'tedarikci-bulma-ve-dogrulama', en:'supplier-sourcing-and-verification', de:'lieferantensuche-und-pruefung', it:'ricerca-e-verifica-fornitori', ru:'poisk-i-verifikatsiya-postavshchikov', fa:'supplier-sourcing-and-verification', zh:'supplier-sourcing-and-verification', vi:'supplier-sourcing-and-verification' },
    names: { tr:'Tedarikçi Bulma ve Doğrulama', en:'Supplier Sourcing & Verification', de:'Lieferantensuche & -prüfung', it:'Ricerca e verifica fornitori', ru:'Поиск и верификация поставщиков', fa:'شناسایی و اعتباربرسنجی تأمین‌کننده', zh:'供应商背景与生产能力核验', vi:'Thẩm định & xác minh nhà cung cấp' },
    descriptions: {
      tr:'Üretici keşfi, şirket, kapasite, belge, referans ve ticari şartların çapraz doğrulaması.',
      en:'Producer discovery and cross-verification of company, capacity, documents, references and commercial terms.',
      de:'Produzentensuche und Gegenprüfung von Unternehmen, Kapazität, Dokumenten, Referenzen und Konditionen.',
      it:'Ricerca produttori e verifica incrociata di azienda, capacità, documenti, referenze e condizioni commerciali.',
      ru:'Поиск производителей и перекрёстная проверка компании, мощностей, документов, рекомендаций и коммерческих условий.',
      fa:'شناسایی تولیدکننده و ارزیابی تقاطعی شرکت، ظرفیت، اسناد، سوابق و شرایط تجاری.',
      zh:'独立核验企业商业登记与实际法人主体、生产制造产能、质量认证体系、海关与银行信誉及真实履约资质。',
      vi:'Đánh giá độc lập về đăng ký doanh nghiệp, cơ sở sản xuất, năng lực, hệ thống chất lượng, tài liệu và điều khoản thương mại.'
    }
  },
  'trade-advisory': {
    slugs: { tr:'uluslararasi-ticaret-danismanligi', en:'international-trade-advisory', de:'internationale-handelsberatung', it:'consulenza-commerciale-internazionale', ru:'konsultatsii-po-mezhdunarodnoy-torgovle', fa:'international-trade-advisory', zh:'international-trade-advisory', vi:'international-trade-advisory' },
    names: { tr:'Uluslararası Ticaret Danışmanlığı', en:'International Trade Advisory', de:'Handelsberatung', it:'Consulenza commerciale internazionale', ru:'Консультации по международной торговле', fa:'مشاوره تجارت بین‌الملل', zh:'国际贸易与合规咨询', vi:'Tư vấn thương mại quốc tế' },
    descriptions: {
      tr:'Gümrük, menşe, mevzuat, Incoterms, ödeme yapıları ve sözleşme tasarımıyla sınır ötesi karar desteği.',
      en:'Cross-border decision support covering customs, origin, regulation, Incoterms, payment structures and contract design.',
      de:'Grenzüberschreitende Entscheidungsunterstützung zu Zoll, Herkunft, Regulierung, Incoterms, Zahlung und Verträgen.',
      it:'Supporto transfrontaliero su dogane, origine, normative, Incoterms, strutture di pagamento e contratti.',
      ru:'Поддержка решений для трансграничной торговли: таможня, происхождение, регуляции, Incoterms, формы оплаты и контракты.',
      fa:'پشتیبانی از تصمیم‌گیری‌های فرامرزی در زمینه گمرک، مبدأ، مقررات، Incoterms، ساختارهای پرداخت و قراردادها.',
      zh:'针对目标进出口市场的关税合规、产地证与单证要求、Incoterms 交付方式及跨境结算模式提供专业决策支持。',
      vi:'Hỗ trợ quyết định thương mại xuyên biên giới về hải quan, xuất xứ, quy định pháp lý, Incoterms, thanh toán và cấu trúc hợp đồng.'
    }
  },
  tco: {
    slugs: { tr:'toplam-maliyet-optimizasyonu', en:'cost-optimisation-tco', de:'kostenoptimierung-tco', it:'ottimizzazione-costi-tco', ru:'optimizatsiya-zatrat-tco', fa:'cost-optimisation-tco', zh:'cost-optimisation-tco', vi:'cost-optimisation-tco' },
    names: { tr:'Maliyet Optimizasyonu (TCO)', en:'Cost Optimisation (TCO)', de:'Kostenoptimierung (TCO)', it:'Ottimizzazione dei costi (TCO)', ru:'Оптимизация затрат (TCO)', fa:'بهینه‌سازی هزینه (TCO)', zh:'总拥有成本 (TCO) 分析与优化', vi:'Phân tích & tối ưu chi phí (TCO)' },
    descriptions: {
      tr:'Birim fiyatın ötesinde navlun, fire, kalite, stok, finansman ve risk unsurlarını içeren toplam maliyet analizi.',
      en:'Total-cost analysis beyond unit price, capturing freight, waste, quality, inventory, finance and risk.',
      de:'Gesamtkostenanalyse jenseits des Stückpreises unter Einbezug von Fracht, Ausschuss, Qualität, Lager, Finanzen und Risiko.',
      it:'Analisi del costo totale oltre il prezzo unitario: trasporto, scarti, qualità, scorte, finanza e rischio.',
      ru:'Анализ совокупной стоимости сверх цены за единицу: фрахт, потери, качество, запасы, финансирование и риски.',
      fa:'تحلیل هزینه کل فراتر از قیمت واحد، با در نظر گرفتن حمل، ضایعات، کیفیت، موجودی، تأمین مالی و ریسک.',
      zh:'超越单纯的单价对比，全面测算包装、国际运费、关税合规、质损风险及资金周转占用等全链路综合拥有成本。',
      vi:'Phân tích tổng chi phí vượt ra ngoài đơn giá: vận chuyển, hao hụt, chất lượng, hàng tồn kho, tài chính và rủi ro.'
    }
  },
  'market-entry': {
    slugs: { tr:'pazar-girisi', en:'market-entry', de:'markteintritt', it:'ingresso-nel-mercato', ru:'vyhod-na-rynok', fa:'market-entry', zh:'market-entry', vi:'market-entry' },
    names: { tr:'Pazara Giriş', en:'Market Entry', de:'Markteintritt', it:'Ingresso nel mercato', ru:'Выход на рынок', fa:'ورود به بازار', zh:'土耳其与海外目标市场准入', vi:'Tiếp cận thị trường' },
    descriptions: {
      tr:'Ürün uygunluğu, mevzuat analizi, ticari hazırlık ve hedef alıcı eşleştirmesiyle yeni pazar açılımları.',
      en:'New market expansion through product suitability, regulatory review, commercial readiness and target-buyer matching.',
      de:'Erschließung neuer Märkte durch Produktprüfung, regulatorische Analyse, Marktreife und gezieltes Käufer-Matching.',
      it:'Apertura di nuovi mercati con idoneità del prodotto, analisi normativa, preparazione commerciale e matching con i buyer.',
      ru:'Выход на новые рынки: соответствие продукта, регуляторный анализ, коммерческая готовность и подбор покупателей.',
      fa:'توسعه بازارهای جدید از طریق تناسب محصول، بررسی مقررات، آمادگی تجاری و تطبیق با خریداران هدف.',
      zh:'为出海企业评估目标市场准入门槛、对接合规海外买家与分销渠道，构建清晰务实的落地合作方案。',
      vi:'Mở rộng thị trường mới thông qua sự phù hợp của sản phẩm, đánh giá quy chuẩn, sự sẵn sàng thương mại và kết nối người mua mục tiêu.'
    }
  }
};

export const productIds = [
  'akbari-pistachio', 'kaleghouchi-pistachio', 'fandoghi-pistachio', 'ahmad-aghaei-pistachio',
  'green-peeled-pistachio', 'pistachio-granules', 'mazafati-dates', 'date-paste-syrup',
  'raisins', 'almonds', 'walnuts', 'dried-apricots-kernels', 'pumpkin-seeds', 'sunflower-seeds',
  'saffron', 'dried-mulberries', 'zereshk', 'mixed-nuts'
] as const;

export const productNames: Record<(typeof productIds)[number], Localized> = {
  'akbari-pistachio': { tr:'Akbari Fıstık', en:'Akbari Pistachio', de:'Akbari Pistazien', it:'Pistacchio Akbari', ru:'Фисташки Акбари', fa:'پسته اکبری', zh:'阿克巴里长粒开心果 (Akbari)', vi:'Hạt dẻ cười Akbari' },
  'kaleghouchi-pistachio': { tr:'Kalleh Ghouchi Fıstık', en:'Kalleh Ghouchi Pistachio (Jumbo)', de:'Kalleh-Ghouchi-Pistazien (Jumbo)', it:'Pistacchio Kalleh Ghouchi (Jumbo)', ru:'Фисташки Калле-Гучи (Kalleh Ghouchi)', fa:'پسته کله‌قوچی', zh:'大颗粒巨头开心果 (Kalleh Ghouchi / Jumbo)', vi:'Hạt dẻ cười Kalleh Ghouchi (Jumbo)' },
  'fandoghi-pistachio': { tr:'Fandoghi Fıstık', en:'Fandoghi Pistachio (Round)', de:'Fandoghi Pistazien (Rund)', it:'Pistacchio Fandoghi (Tondo)', ru:'Фисташки Фандоги (Круглые)', fa:'پسته فندقی', zh:'圆粒开心果 (Fandoghi / Round)', vi:'Hạt dẻ cười Fandoghi' },
  'ahmad-aghaei-pistachio': { tr:'Ahmad Aghaei Fıstık', en:'Ahmad Aghaei Pistachio', de:'Ahmad Aghaei Pistazien', it:'Pistacchio Ahmad Aghaei', ru:'Фисташки Ахмад Агаи', fa:'پسته احمد آقایی', zh:'艾哈迈德阿加伊开心果 (Ahmad Aghaei)', vi:'Hạt dẻ cười Ahmad Aghaei' },
  'green-peeled-pistachio': { tr:'Yeşil Soyulmuş İç Fıstık', en:'Green Peeled Pistachio Kernels', de:'Grüne geschälte Pistazienkerne', it:'Pistacchio verde sgusciato', ru:'Очищенные зелёные ядра фисташек', fa:'مغز پسته سبز دوپوست', zh:'天然特级双脱皮纯绿开心果仁', vi:'Nhân hạt dẻ cười xanh tách vỏ' },
  'pistachio-granules': { tr:'Kırık & Granül İç Fıstık', en:'Pistachio Kernels & Granules', de:'Pistazienbruch & Granulat', it:'Granella e pezzi di pistacchio', ru:'Крошка и гранулы фисташек', fa:'گرانول و خلال مغز پسته', zh:'食品工业用开心果碎与精细颗粒', vi:'Hạt dẻ cười mảnh & hạt nghiền' },
  'mazafati-dates': { tr:'Mazafati Hurması', en:'Mazafati Dates', de:'Mazafati Datteln', it:'Datteri Mazafati', ru:'Финики Мазафати', fa:'خرمای مضافتی', zh:'马扎法蒂优质鲜黑椰枣 (Mazafati)', vi:'Chà là Mazafati cao cấp' },
  'date-paste-syrup': { tr:'Hurma Ezmesi & Şurubu', en:'Date Paste & Syrup', de:'Dattelpaste & Dattelsirup', it:'Pasta e sciroppo di datteri', ru:'Паста и сироп из фиников', fa:'خمیر و شیره خرما', zh:'工业食品级天然纯椰枣原浆与高浓缩椰枣糖浆', vi:'Paste chà là & Siro chà là cô đặc' },
  raisins: { tr:'Kuru Üzüm', en:'Raisins', de:'Rosinen', it:'Uva passa', ru:'Изюм', fa:'کشمش', zh:'大宗高品质脱水葡萄干系列 (金色 / 绿色 / 玛拉耶尔)', vi:'Nho khô xuất khẩu cao cấp' },
  almonds: { tr:'Badem', en:'Almonds', de:'Mandeln', it:'Mandorle', ru:'Миндаль', fa:'بادام', zh:'大宗精选原颗带壳巴旦木及精选巴旦木仁', vi:'Hạnh nhân hạt & nhân hạnh nhân' },
  walnuts: { tr:'Ceviz', en:'Walnuts', de:'Walnüsse', it:'Noci', ru:'Грецкие орехи', fa:'گردو', zh:'优质带壳核桃及手工精选高等级核桃仁', vi:'Quả óc chó & nhân óc chó' },
  'dried-apricots-kernels': { tr:'Kuru Kayısı & Çekirdek', en:'Dried Apricots & Kernels', de:'Getrocknete Aprikosen & Kerne', it:'Albicocche secche e noccioli', ru:'Сушёные абрикосы и ядра', fa:'برگه زردآلو و مغز هسته', zh:'天然阳光晾晒干杏及精选甜/苦杏仁', vi:'Mơ sấy dẻo & Hạt mơ tự nhiên' },
  'pumpkin-seeds': { tr:'Kabak Çekirdeği', en:'Pumpkin Seeds', de:'Kürbiskerne', it:'Semi di zucca', ru:'Тыквенные семечки', fa:'تخمه کدو', zh:'出口级精选白皮生熟南瓜籽及光板南瓜籽仁', vi:'Hạt bí ngô xuất khẩu' },
  'sunflower-seeds': { tr:'Ayçekirdeği', en:'Sunflower Seeds', de:'Sonnenblumenkerne', it:'Semi di girasole', ru:'Семена подсолнечника', fa:'تخمه آفتابگردان', zh:'大宗精选大粒油用与食用葵花籽', vi:'Hạt hướng dương thương mại' },
  saffron: { tr:'Safran', en:'Saffron', de:'Safran', it:'Zafferano', ru:'Шафран', fa:'زعفران', zh:'顶级原产地纯天然红金藏红花 (Sargol / Super Negin)', vi:'Nhụy hoa nghệ tây Saffron cao cấp' },
  'dried-mulberries': { tr:'Kuru Dut', en:'Dried Mulberries', de:'Getrocknete Maulbeeren', it:'Gelsi essiccati', ru:'Сушёный шелковица', fa:'توت خشک', zh:'天然阳光晾晒特级无沙白桑葚干', vi:'Dâu tằm trắng sấy khô tự nhiên' },
  zereshk: { tr:'Zereşk (Karamuk)', en:'Zereshk (Dried Barberries)', de:'Zereshk (Berberitzen)', it:'Zereshk (Berberis essiccato)', ru:'Зерешк (Барбарис)', fa:'زرشک', zh:'纯天然特级无籽红刺檗果干 (Zereshk / 纯净鲜红)', vi:'Quả dâm bụt khô Zereshk' },
  'mixed-nuts': { tr:'Karışık Kuruyemiş & Özel Ürünler', en:'Mixed Nuts & Specialities', de:'Nussmischungen & Spezialitäten', it:'Frutta secca mista e specialità', ru:'Ассорти орехов и специальности', fa:'آجیل مخلوط و محصولات خاص', zh:'商业定制大宗混合坚果与高端定制包装组合', vi:'Hạt hỗn hợp cao cấp & Hạt chuyên biệt' }
};

export const productDescriptions: Record<(typeof productIds)[number], Localized> = {
  'akbari-pistachio': {
    tr:'Uzun gövdeli, kolay açılan, lüks sunum ve kuruyemiş segmenti için premium İran menşeli fıstık.',
    en:'Long-shaped, easy-opening Iranian pistachio for premium retail, gift packs and luxury hospitality.',
    de:'Langförmige, leicht öffnende iranische Pistazie für Premium-Einzelhandel und anspruchsvolle Gastronomie.',
    it:'Pistacchio iraniano a forma allungata, facile apertura, per retail premium e hotellerie.',
    ru:'Длинные легко раскрывающиеся фисташки из Ирана для премиальной розницы, подарочной упаковки и HoReCa.',
    fa:'پسته کشیده، خندان طبیعی و دست‌چین ممتاز ایران برای مصارف آجیلی لوکس و صادراتی.',
    zh:'经典长粒型伊朗原产特级开心果，自然开壳率高、颗粒饱满修长，专供高端零售礼品包装及星级酒店渠道。',
    vi:'Hạt dẻ cười Ba Tư dáng dài, vỏ nứt tự nhiên dễ bóc, dành cho bán lẻ cao cấp, quà tặng và khách sạn sang trọng.'
  },
  'kaleghouchi-pistachio': {
    tr:'İri, yuvarlak gövdeli jumbo fıstık; kuruyemiş karışımları ve premium perakende için yüksek kalibre.',
    en:'Large, rounded jumbo pistachio offering generous calibre for premium retail and snack mixes.',
    de:'Große, runde Jumbo-Pistazie mit hohem Kaliber für Nussmischungen und gehobenen Einzelhandel.',
    it:'Pistacchio jumbo rotondeggiante di grande calibro per mix snack e retail di fascia alta.',
    ru:'Крупные округлые фисташки джамбо высокого калибра для премиальных ореховых смесей и снеков.',
    fa:'پسته درشت و گرد کله‌قوچی با انس پایین و مغز سنگین، مناسب برای ترکیب‌های آجیلی پرکالیبر.',
    zh:'大颗粒圆形巨头 (Jumbo) 开心果，单果饱满厚实，是高端烘焙零食混合坚果及大宗批发市场的核心规格。',
    vi:'Hạt dẻ cười jumbo hạt lớn tròn trịa với kích cỡ vượt trội dành cho bán lẻ cao cấp và các gói hạt snack hỗn hợp.'
  },
  'fandoghi-pistachio': {
    tr:'Küçük yuvarlak yapısıyla endüstriyel gıda, çikolata, dondurma ve yüksek hacimli paketleme için dengeli seçenek.',
    en:'Round, compact pistachio ideal for industrial processing, confectionery, ice cream and high-volume packing.',
    de:'Kompakte runde Pistazie für Süßwarenindustrie, Eiscreme, Schokolade und Großvolumen-Verpackung.',
    it:'Pistacchio tondo e compatto per pasticceria industriale, cioccolato, gelateria e confezionamento ad alto volume.',
    ru:'Круглые компактные фисташки для кондитерского производства, шоколада, мороженого и фасовки больших объёмов.',
    fa:'پسته فندقی گرد و اقتصادی با انس استاندارد، ایده‌آل برای صنایع غذایی، بسته‌بندی تجاری و صادرات تناژ.',
    zh:'圆形高出仁率经济型开心果，口感浓郁、规格均一，是大宗食品工业加工、高档巧克力糖果及大批量烘焙分装的理想原料。',
    vi:'Hạt dẻ cười tròn nhỏ gọn lý tưởng cho chế biến công nghiệp bánh kẹo, kem, sô-cô-la và đóng gói khối lượng lớn.'
  },
  'ahmad-aghaei-pistachio': {
    tr:'Açık renk kabuklu, zarif uzun formu ve zengin aromasıyla özellikle Avrupa pazarında tercih edilen çeşit.',
    en:'Light-shell, elegantly elongated pistachio with rich flavour, favoured across European markets.',
    de:'Helle Schale, elegante längliche Form und feines Aroma; besonders im europäischen Markt gefragt.',
    it:'Guscio chiaro, forma allungata elegante e gusto ricco; molto apprezzato sul mercato europeo.',
    ru:'Фисташки со светлой скорлупой, удлинённой формой и выразительным вкусом, востребованные в Европе.',
    fa:'پسته احمد آقایی با پوست بسیار روشن، ظاهر کشیده خوش‌فرم و طعم عالی، بسیار محبوب در بازارهای اروپایی.',
    zh:'壳色亮白、果型优美修长、果仁风味浓醇的经典品种，在欧洲高端坚果及中东主流分销市场极具竞争力。',
    vi:'Hạt dẻ cười vỏ sáng, dáng thon dài thanh lịch với hương vị thơm ngậy, rất được ưa chuộng tại thị trường Châu Âu.'
  },
  'green-peeled-pistachio': {
    tr:'Erken hasat, yoğun yeşil renkli, kabuksuz iç fıstık; pastacılık, çikolata, dondurma ve gurme mutfaklar için en üst sınıf.',
    en:'Early-harvest, intensely green peeled kernels for high-end patisserie, gelato, chocolate and culinary arts.',
    de:'Früh geerntete, intensiv grüne geschälte Kerne für Feinbäckerei, Gelato, Schokolade und Gastronomie.',
    it:'Pistacchio pelato verde intenso da raccolta precoce per pasticceria fine, gelato, cioccolato e alta cucina.',
    ru:'Ядра раннего сбора насыщенного зелёного цвета для кондитерского искусства, джелато и шоколада высшего класса.',
    fa:'مغز پسته کال سبز دست‌چین با رنگ سبز خیره‌کننده (گرید A تا S)، ویژه صنایع شیرینی‌پزی لوکس، شکلات و ژلاتو.',
    zh:'早采特选深绿色脱皮开心果仁 (Grade S/A/B)，色泽翠绿天然、无壳无衣，专供顶级法式烘焙甜品、意式冰淇淋 (Gelato) 及奢华手工生巧制造。',
    vi:'Nhân hạt dẻ cười thu hoạch sớm màu xanh đậm tách vỏ cao cấp cho bánh ngọt đỉnh cao, kem gelato Ý và sô-cô-la thủ công.'
  },
  'pistachio-granules': {
    tr:'Farklı kalibrelerde elenmiş saf fıstık granülü ve pirinç fıstık; unlu mamuller, kaplama ve dolgular için hazır çözüm.',
    en:'Graded pure pistachio granules and slivers ready for bakery, confectionery toppings, fillings and crusts.',
    de:'Kalibrierte reine Pistaziengranulate und Stifte für Bäckerei, Überzüge, Füllungen und Riegel.',
    it:'Granella e filetti di pistacchio calibrati pronti per pasticceria, coperture, ripieni e barrette.',
    ru:'Калиброванная фисташковая крошка и дроблёные ядра для выпечки, посыпок, начинок и глазирования.',
    fa:'گرانول و خلال مغز پسته در مش‌های استاندارد و یکدست، آماده برای تزئین شیرینی، بستنی و صنایع شکلات.',
    zh:'按标准筛网精准分级的纯开心果颗粒与开心果碎，无粉尘杂质，即开即用，专为工业烘焙夹心、冰淇淋撒料及能量棒生产定制。',
    vi:'Hạt dẻ cười nghiền và hạt mảnh tinh khiết phân loại theo kích cỡ, sẵn sàng cho làm bánh, phủ bề mặt bánh kẹo và nhân kem.'
  },
  'mazafati-dates': {
    tr:'Yumuşak dokulu, parlak koyu renkli, yüksek nemli taze hurma; doğrudan tüketim ve lüks perakende için.',
    en:'Soft, dark, naturally moist fresh dates with delicate sweetness for direct retail and table service.',
    de:'Weiche, dunkle, natürlich feuchte Frischdatteln mit milder Süße für Einzelhandel und Gastronomie.',
    it:'Datteri freschi morbidi, scuri e succosi con dolcezza delicata per retail diretto e ristorazione.',
    ru:'Мягкие тёмные свежие финики с сочной мякотью и нежным вкусом для розницы и столового потребления.',
    fa:'خرمای مضافتی مرطوب، شیرین و گوشتی بم با بسته‌بندی کریستالی و کارتن مادر، مناسب توزیع و صادرات.',
    zh:'果肉细腻软糯、色泽乌黑油亮、天然高水分的传统鲜食黑椰枣，口感清甜醇和，冷链温控保鲜，专供商超零售及礼盒分装。',
    vi:'Chà là tươi Mazafati mềm mọng, màu đen óng tự nhiên với vị ngọt thanh tao, phù hợp bán lẻ trực tiếp và phục vụ bàn tiệc.'
  },
  'date-paste-syrup': {
    tr:'Katkısız hurma ezmesi ve konsantre hurma şurubu; rafine şeker ikamesi olarak fırıncılık ve barlarda endüstriyel hammadde.',
    en:'Pure additive-free date paste and concentrated syrup serving as natural sugar replacer for bakery and snack bars.',
    de:'Zusatzstofffreie Dattelpaste und konzentrierter Dattelsirup als natürlicher Zuckerersatz für Riegel und Backwaren.',
    it:'Pasta di datteri senza additivi e sciroppo concentrato come alternativa naturale allo zucchero per snack e bakery.',
    ru:'Натуральная финиковая паста и сироп без добавок как замена рафинированного сахара для батончиков и выпечки.',
    fa:'خمیر خرمای خالص همگن و شیره خرمای طبیعی غلیظ بدون افزودنی، جایگزین طبیعی شکر برای صنایع غذایی.',
    zh:'100% 纯天然无添加均质椰枣原浆与高浓度椰枣糖浆，作为精制糖与人工甜味剂的纯净天然替代源，广泛应用于健康烘焙、功能能量棒及调味品。',
    vi:'Paste chà là không phụ gia và siro chà là cô đặc đóng vai trò chất thay thế đường tự nhiên cho làm bánh và thanh năng lượng ngũ cốc.'
  },
  raisins: {
    tr:'Güneşte ve gölgede kurutulmuş Sultaniye, altın ve yeşil kuru üzüm; fırıncılık, kahvaltılık gevrek ve atıştırmalık için.',
    en:'Sun-dried and shade-dried Sultana, golden and green raisins for baking, breakfast cereals and snacking.',
    de:'Sonnen- und schattengereifte Sultana-, Gold- und Grünrosinen für Backwaren, Müsli und Snackmischungen.',
    it:'Uva sultanina, dorata e verde essiccata al sole per bakery, cereali da colazione e miscele snack.',
    ru:'Сушёный на солнце и в тени кишмиш, золотистый и зелёный изюм для выпечки, мюсли и снеков.',
    fa:'انواع کشمش سلطانی، طلایی و سبز آفتابی و سایه‌خشک بوانات و کاشمر، سورت‌شده با لیزر برای مصارف قنادی و بسته‌بندی.',
    zh:'阳光与阴干工艺精制的金提干、绿葡萄干及苏丹娜无核葡萄干，经激光与色选双重洁净去梗，适用于工业烘焙、即食麦片及休闲零食。',
    vi:'Nho khô Sultana, nho vàng và nho xanh sấy nắng tự nhiên cho ngành làm bánh, ngũ cốc ăn sáng và đồ ăn nhẹ xuất khẩu.'
  },
  almonds: {
    tr:'Kabuklu ve iç badem; çiğ, kavrulmuş, dilimlenmiş ve un formlarında endüstriyel ve perakende tedarik.',
    en:'In-shell and shelled almonds available raw, blanched, sliced, slivered or milled for food production.',
    de:'Mandeln in Schale und Kerne; roh, blanchiert, gehobelt, gestiftelt oder gemahlen für Lebensmittelhersteller.',
    it:'Mandorle in guscio e sgusciate: crude, pelate, a fette, a bastoncino o farina per l’industria alimentare.',
    ru:'Миндаль в скорлупе и ядра: сырой, бланшированный, лепестки, соломка и мука для пищевых производств.',
    fa:'بادام مامایی، سنگی و مغز بادام ایرانی در گریدهای مختلف کالیبره، سرشار از چربی طبیعی و طعم اصیل.',
    zh:'大宗原产地精选带壳巴旦木与去壳巴旦木仁，提供生仁、脱皮杏仁、杏仁薄片、杏仁丝及精细杏仁粉等多样化规格，服务食品工厂与坚果品牌。',
    vi:'Hạnh nhân nguyên vỏ và nhân hạnh nhân: dạng sống, chần vỏ, cắt lát, thái sợi hoặc bột mịn cho các nhà máy chế biến thực phẩm.'
  },
  walnuts: {
    tr:'Kabuklu ve ayıklanmış kelebek ceviz içi; açık renk, zengin yağ oranıyla fırıncılık, çikolata ve kuruyemiş sektörü için.',
    en:'In-shell and graded walnut halves/pieces with light color and high oil content for bakery, chocolate and retail.',
    de:'Walnüsse in Schale und sortierte Hälften mit heller Farbe und hohem Ölgehalt für Konditorei und Handel.',
    it:'Noci in guscio e gherigli selezionati chiari ad alto contenuto lipidico per pasticceria, cioccolato e retail.',
    ru:'Грецкие орехи в скорлупе и калиброванные светлые половинки/четвертинки для выпечки, шоколада и розницы.',
    fa:'گردوی با پوست و مغز گردوی دوپر سفید و اعلا، پرچرب و خوش‌طعم، سورت‌شده برای مصارف قنادی و آجیلی.',
    zh:'优质薄壳带壳核桃及手工分级特级浅色完整核桃二半仁 (Halves 80%+/Pieces)，果仁饱满浅白、油脂香气天然纯正，专供糕点烘焙与商超分装。',
    vi:'Quả óc chó nguyên vỏ và nhân óc chó nửa hạt phân loại màu sáng, hàm lượng dầu cao dành cho làm bánh, sô-cô-la và bán lẻ.'
  },
  'dried-apricots-kernels': {
    tr:'Malatya gün kurusu ve kükürtlü kuru kayısı ile tatlı/acı kayısı çekirdeği içi; doğrudan tüketim ve gıda sanayii için.',
    en:'Natural sun-dried and sulphured dried apricots alongside sweet and bitter apricot kernels from verified regions.',
    de:'Naturbelassene sonnengetrocknete und geschwefelte Aprikosen sowie süße und bittere Aprikosenkerne.',
    it:'Albicocche essiccate al sole naturali e trattate, insieme a noccioli di albicocca dolci e amari.',
    ru:'Натуральная курага солнечной сушки и обработанные абрикосы, а также сладкие и горькие абрикосовые косточки.',
    fa:'برگه زردآلو آفتابی طبیعی (قیسی) و گوگردی همراه با مغز هسته زردآلو شیرین و تلخ سورت‌شده.',
    zh:'土耳其马拉蒂亚原产天然无硫阳光晒干黑杏干、传统金黄杏干以及配套精选甜/苦杏仁，满足天然健康食品与工业原料需求。',
    vi:'Mơ sấy nắng tự nhiên và mơ sấy vàng truyền thống cùng nhân hạt mơ ngọt/đắng từ các vùng nguyên liệu đã xác minh.'
  },
  'pumpkin-seeds': {
    tr:'Beyaz kabuklu ve kabuksuz (yeşil) kabak çekirdeği; atıştırmalık kuruyemiş, fırıncılık ve salata harçları için.',
    en:'In-shell white and hull-less green pumpkin seeds (GWS/Shine Skin) for snacks, bakery toppings and mixes.',
    de:'Weiße Schalen-Kürbiskerne und schalenlose grüne Kerne (GWS) für Knabberartikel, Bäckerei und Salate.',
    it:'Semi di zucca con guscio bianco e decorticati verdi (GWS) per snack, panificazione e miscele insalata.',
    ru:'Тыквенные семечки в белой скорлупе и голосемянные зелёные ядра для снеков, выпечки и салатных смесей.',
    fa:'تخمه کدو گوشتی و مشهدی با پوست سفید و مغز کدو سبز پوست‌کاغذی، تمیز و سورت‌شده برای شورکاری و بسته‌بندی.',
    zh:'优质雪白大板带壳南瓜籽及无壳天然翠绿南瓜籽仁 (GWS / Shine Skin)，颗粒扁平宽大、酥脆清香，用于休闲坚果炒货、烘焙点缀及沙拉辅料。',
    vi:'Hạt bí vỏ trắng và nhân hạt bí xanh tách vỏ (GWS/Shine Skin) cho đồ ăn nhẹ, rắc bánh và hỗn hợp salad dinh dưỡng.'
  },
  'sunflower-seeds': {
    tr:'Çizgili ve siyah ayçekirdeği; yüksek kalibreli çerezlik tüketim ve kuş yemi/yağlık endüstriyel programlar için.',
    en:'Striped and black sunflower seeds graded for premium confectionery snacking and industrial seed programs.',
    de:'Gestreifte und schwarze Sonnenblumenkerne für Snackartikel und industrielle Saatgutverarbeitung.',
    it:'Semi di girasole striati e neri selezionati per snack e programmi industriali.',
    ru:'Полосатые и чёрные семена подсолнечника высокого калибра для снеков и промышленной переработки.',
    fa:'تخمه آفتابگردان دورسفید و مشکی با کالیبر درشت و طعم عالی، سورت‌شده بدون ضایعات برای آجیل و تنقلات.',
    zh:'精选高等级黑白条纹食用葵花籽与纯黑油葵籽，粒大饱满、坏籽率极低，满足品牌炒货连锁定制及大宗粮油原料供应。',
    vi:'Hạt hướng dương sọc và đen phân hạng cao cho đồ ăn nhẹ cao cấp và các chương trình nguyên liệu hạt công nghiệp.'
  },
  saffron: {
    tr:'Sargol ve Super Negin kalite saf İran safranı; yüksek krokin değeri, yoğun aroma ve ISO 3632 test raporlarıyla.',
    en:'Pure Sargol and Super Negin Iranian saffron with high crocin content, deep aroma and ISO 3632 batch testing.',
    de:'Reiner Sargol- und Super-Negin-Safran aus Iran mit hohem Crocin-Gehalt und ISO 3632 Laborprüfungen.',
    it:'Zafferano iraniano puro Sargol e Super Negin ad alto tenore di crocina e analisi certificate ISO 3632.',
    ru:'Чистый иранский шафран категорий Саргол и Супер Негин с высоким содержанием кроцина и тестами ISO 3632.',
    fa:'زعفران نگین و سوپرنگین صادراتی ایران با بالاترین قدرت رنگ‌دهی (کروسین ۲۴۰+) و عطر قوی، دارای برگه آزمایشگاه ISO 3632.',
    zh:'顶级纯天然原产地伊朗藏红花 (Super Negin / Sargol)，全红无黄根、柱头粗壮完整、天然藏红花素 (Crocin) 含量极高，附带权威实验室 ISO 3632 逐批次检测报告。',
    vi:'Nhụy hoa nghệ tây Saffron Ba Tư thuần khiết hạng Sargol và Super Negin với hàm lượng crocin cao vượt trội, hương thơm nồng nàn và chứng nhận kiểm nghiệm ISO 3632.'
  },
  'dried-mulberries': {
    tr:'Doğal güneşte kurutulmuş beyaz dut; ilave şekersiz, yüksek lifli, atıştırmalık ve çay yanı sunumlar için geleneksel ürün.',
    en:'Natural sun-dried white mulberries without added sugar; high fibre, chewy texture for snacks and tea accompaniments.',
    de:'Naturbelassene sonnengetrocknete weiße Maulbeeren ohne Zuckerzusatz; ballaststoffreich für Snacks und Müslis.',
    it:'Gelsi bianchi essiccati al sole senza zuccheri aggiunti; ricchi di fibre per snack e colazioni.',
    ru:'Натуральная сушёная белая шелковица без сахара; богата клетчаткой, для здоровых перекусов и чайных церемоний.',
    fa:'توت سفید خشک طبیعی بدون شکر افزوده، تمیز و شن‌گیری‌شده با بافت نرم و طعم شیرین طبیعی.',
    zh:'100% 纯天然阳光晾晒白桑葚干，无任何添加糖与防腐剂，颗粒干爽无沙、肉质软糯清甜，富含天然花青素与膳食纤维，适于养生花草茶及健康代餐零食。',
    vi:'Dâu tằm trắng sấy nắng tự nhiên không thêm đường; giàu chất xơ, dẻo ngọt tự nhiên cho ăn nhẹ dinh dưỡng và dùng kèm trà.'
  },
  zereshk: {
    tr:'Taze kırmızı renkli kurutulmuş zereşk (berberis); ekşi-tatlı lezzet profiliyle pirinç yemekleri, çaylar ve gurme soslar için.',
    en:'Puff-dried red barberries (Pofaki/Anari) with vibrant tart flavour for rice dishes, herbal teas and gourmet cooking.',
    de:'Kräftig rote getrocknete Berberitzen mit säuerlich-fruchtigem Aroma für Reisgerichte, Tees und Feinkost.',
    it:'Bacche di berberis essiccate rosso brillante dal gusto acidulo per risotti, infusi e gastronomia fine.',
    ru:'Ярко-красный сушёный барбарис с приятной кислинкой для плова, травяных чаёв и кулинарных соусов.',
    fa:'زرشک پفکی و اناری قائنات با رنگ قرمز یاقوتی درخشان، تازه و تمیز، ویژه صادرات و مصارف رستورانی و صنایع غذایی.',
    zh:'特级无籽红刺檗果干 (Zereshk / 纯净鲜红果干)，色泽红润如红宝石、酸甜适口，广泛用于高端中东料理点缀、特调果茶萃取及天然果酸调味品。',
    vi:'Quả dâm bụt đỏ khô Zereshk Ba Tư màu sắc rực rỡ với vị chua thanh đặc trưng dành cho ẩm thực cao cấp, trà thảo mộc và nước sốt.'
  },
  'mixed-nuts': {
    tr:'Fıstık, badem, kaju, fındık ve kuru meyvelerden oluşan özel harmanlar; marka talebine göre kalibre ve ambalaj koordinasyonu.',
    en:'Tailored mixes of pistachios, almonds, cashews, hazelnuts and dried fruits packed to buyer specifications.',
    de:'Individuelle Mischungen aus Pistazien, Mandeln, Cashews, Haselnüssen und Trockenfrüchten nach Kundenvorgabe.',
    it:'Miscele personalizzate di pistacchi, mandorle, anacardi, nocciole e frutta secca confezionate su misura.',
    ru:'Индивидуальные смеси из фисташек, миндаля, кешью, фундука и сухофруктов с фасовкой под требования заказчика.',
    fa:'ترکیبات سفارشی از انواع مغز پسته، بادام، فندق، گردو و میوه‌های خشک، با بسته‌بندی و فرمولاسیون اختصاصی.',
    zh:'根据跨国买家与品牌商需求，专业定制不同配比与颗粒梯度的开心果、巴旦木、腰果、榛子及脱水干果组合，提供真空大包装、充氮小包装及贴牌代工。',
    vi:'Hỗn hợp tùy chỉnh gồm hạt dẻ cười, hạnh nhân, hạt điều, hạt phỉ và trái cây sấy khô đóng gói theo thông số kỹ thuật thương hiệu riêng.'
  }
};

export const productMedia: Record<(typeof productIds)[number], { src:string; width:number; height:number; mediaType:'photo'|'poster'; objectPosition?:string; secondary?:string }> = {
  'akbari-pistachio': { src:'/images/ctseg-iranian-pistachios-premium.webp', width:1536, height:1024, mediaType:'poster' },
  'kaleghouchi-pistachio': { src:'/images/ctseg-iranian-pistachios-premium.webp', width:1536, height:1024, mediaType:'poster' },
  'fandoghi-pistachio': { src:'/images/ctseg-iranian-pistachios-premium.webp', width:1536, height:1024, mediaType:'poster' },
  'ahmad-aghaei-pistachio': { src:'/images/ctseg-iranian-pistachios-premium.webp', width:1536, height:1024, mediaType:'poster' },
  'green-peeled-pistachio': { src:'/images/ctseg-green-peeled-pistachio-kernels-premium.webp', width:1536, height:1024, mediaType:'poster' },
  'pistachio-granules': { src:'/images/ctseg-pistachio-kernel-crumb-premium.webp', width:1536, height:1024, mediaType:'poster' },
  'mazafati-dates': { src:'/images/ctseg-mazafati-dates-authentic-premium.webp', width:1536, height:1024, mediaType:'poster' },
  'date-paste-syrup': { src:'/images/ctseg-date-paste-premium.webp', width:1536, height:1024, mediaType:'photo', objectPosition:'center 48%', secondary:'/images/ctseg-date-syrup-premium.webp' },
  raisins: { src:'/images/ctseg-iranian-golden-raisins-premium.webp', width:1536, height:1024, mediaType:'poster' },
  almonds: { src:'/images/ctseg-iranian-almonds-premium.webp', width:1536, height:1024, mediaType:'poster' },
  walnuts: { src:'/images/ctseg-iranian-walnuts-premium.webp', width:1536, height:1024, mediaType:'photo', objectPosition:'center 52%' },
  'dried-apricots-kernels': { src:'/images/ctseg-dried-apricots-premium.webp', width:1536, height:1024, mediaType:'photo', objectPosition:'center 50%', secondary:'/images/ctseg-apricot-kernels-premium.webp' },
  'pumpkin-seeds': { src:'/images/ctseg-pumpkin-seeds-premium.webp', width:1536, height:1024, mediaType:'photo', objectPosition:'center 54%' },
  'sunflower-seeds': { src:'/images/ctseg-sunflower-seeds-premium.webp', width:1536, height:1024, mediaType:'photo', objectPosition:'center 52%' },
  saffron: { src:'/images/ctseg-persian-red-gold-saffron-premium.webp', width:1535, height:1024, mediaType:'poster' },
  'dried-mulberries': { src:'/images/ctseg-iranian-dried-mulberries-premium.webp', width:1536, height:1024, mediaType:'poster' },
  zereshk: { src:'/images/ctseg-zereshk-dried-barberries-premium.webp', width:1536, height:1024, mediaType:'poster' },
  'mixed-nuts': { src:'/images/ctseg-mixed-nuts-premium.webp', width:1536, height:1024, mediaType:'photo', objectPosition:'center 50%' }
};

const productSlugs: Record<(typeof productIds)[number], Localized> = Object.fromEntries(
  productIds.map((id) => [id, Object.fromEntries(locales.map((lang) => [lang, id]))])
) as Record<(typeof productIds)[number], Localized>;
Object.assign(productSlugs['green-peeled-pistachio'], {
  tr:'yesil-soyulmus-ic-fistik', en:'green-peeled-pistachio-kernels', de:'gruene-geschaelte-pistazienkerne', it:'pistacchio-verde-sgusciato', ru:'ochishchennye-zelenye-yadra-fistash', fa:'green-peeled-pistachio', zh:'green-peeled-pistachio', vi:'green-peeled-pistachio'
});
Object.assign(productSlugs['pistachio-granules'], {
  tr:'kirik-granul-ic-fistik', en:'pistachio-kernels-granules', de:'pistazienbruch-granulat', it:'granella-di-pistacchio', ru:'kroshka-granuly-fistash', fa:'pistachio-granules', zh:'pistachio-granules', vi:'pistachio-granules'
});
Object.assign(productSlugs['mazafati-dates'], {
  tr:'mazafati-hurmasi', en:'mazafati-dates', de:'mazafati-datteln', it:'datteri-mazafati', ru:'finiki-mazafati', fa:'mazafati-dates', zh:'mazafati-dates', vi:'mazafati-dates'
});
Object.assign(productSlugs['date-paste-syrup'], {
  tr:'hurma-ezmesi-surubu', en:'date-paste-syrup', de:'dattelpaste-sirup', it:'pasta-sciroppo-datteri', ru:'pasta-i-sirop-iz-finikov', fa:'date-paste-syrup', zh:'date-paste-syrup', vi:'date-paste-syrup'
});
Object.assign(productSlugs['dried-apricots-kernels'], {
  tr:'kuru-kayisi-kayisi-cekirdegi', en:'dried-apricots-apricot-kernels', de:'getrocknete-aprikosen-aprikosenkerne', it:'albicocche-secche-noccioli', ru:'sushenye-abrikosy-i-yadra', fa:'dried-apricots-kernels', zh:'dried-apricots-kernels', vi:'dried-apricots-kernels'
});
Object.assign(productSlugs['mixed-nuts'], {
  tr:'karisik-kuruyemis-ozel-urunler', en:'mixed-nuts-specialities', de:'nussmischungen-spezialitaeten', it:'frutta-secca-mista-specialita', ru:'assorti-orehov-i-specialnosti', fa:'mixed-nuts', zh:'mixed-nuts', vi:'mixed-nuts'
});

export const products = Object.fromEntries(productIds.map((id) => [id, {
  id, names: productNames[id], descriptions: productDescriptions[id], media: productMedia[id], slugs: productSlugs[id],
  origin: ['akbari-pistachio','kaleghouchi-pistachio','fandoghi-pistachio','ahmad-aghaei-pistachio','green-peeled-pistachio','pistachio-granules','mazafati-dates','date-paste-syrup','saffron','dried-mulberries','zereshk'].includes(id) ? 'Iran' : 'Türkiye / Iran / verified source'
}])) as Record<(typeof productIds)[number], any>;

export const editorialCopy: Record<Locale, {
  manifestoTitle:string; manifestoText:string; portfolioTitle:string; portfolioText:string;
  marketsKicker:string; productImageNote:string;
}> = {
  tr:{
    manifestoTitle:'Tedarik, tek bir ürün aramasından daha fazlasıdır.',
    manifestoText:'CTSEG; üretici keşfi, doğrulama, kalite, toplam maliyet, menşe şeffaflığı, pazar uygunluğu ve ticari uygulamayı tek bir karar disiplini içinde birleştirir.',
    portfolioTitle:'Bölgesel ürün ve tedarik evreni',
    portfolioText:'Bu seçki, CTSEG’in kuruyemiş, kuru meyve ve seçili gıda kategorilerindeki daha geniş bölgesel araştırma ve tedarik evrenini temsil eder; görseldeki her ürün aktif katalog ürünü değildir.',
    marketsKicker:'Menşe · dokümantasyon · mevzuat · teslim modeli',
    productImageNote:'Görsel, ürün kategorisini temsil eder; çeşit özellikleri teknik tanım ve parti belgeleriyle doğrulanır.'
  },
  en:{
    manifestoTitle:'Sourcing is more than a product search.',
    manifestoText:'CTSEG brings producer discovery, verification, quality, total cost, origin transparency, market fit and commercial execution into one decision discipline.',
    portfolioTitle:'A regional product and sourcing universe',
    portfolioText:'This selection represents CTSEG’s wider regional research and sourcing universe across nuts, dried fruit and selected foods; not every item pictured is an active catalogue product.',
    marketsKicker:'Origin · documentation · regulation · delivery model',
    productImageNote:'The image represents the product category; varietal characteristics are verified through specification and batch documentation.'
  },
  de:{
    manifestoTitle:'Beschaffung ist mehr als eine Produktsuche.',
    manifestoText:'CTSEG verbindet Produzentensuche, Prüfung, Qualität, Gesamtkosten, Herkunftstransparenz, Markteignung und kommerzielle Umsetzung in einer Entscheidungsdisziplin.',
    portfolioTitle:'Ein regionales Produkt- und Beschaffungsuniversum',
    portfolioText:'Diese Auswahl steht für das breitere regionale Recherche- und Beschaffungsfeld von CTSEG bei Nüssen, Trockenfrüchten und ausgewählten Lebensmitteln; nicht jedes abgebildete Produkt gehört zum aktiven Katalog.',
    marketsKicker:'Herkunft · Dokumentation · Regulierung · Liefermodell',
    productImageNote:'Das Bild repräsentiert die Produktkategorie; Sortenmerkmale werden über Spezifikation und Chargendokumente geprüft.'
  },
  it:{
    manifestoTitle:'L’approvvigionamento va oltre la ricerca di un prodotto.',
    manifestoText:'CTSEG integra ricerca dei produttori, verifica, qualità, costo totale, trasparenza dell’origine, idoneità al mercato ed esecuzione commerciale in un’unica disciplina decisionale.',
    portfolioTitle:'Un universo regionale di prodotti e sourcing',
    portfolioText:'Questa selezione rappresenta il più ampio universo regionale di ricerca e approvvigionamento CTSEG tra frutta secca, essiccata e alimenti selezionati; non tutti gli articoli raffigurati appartengono al catalogo attivo.',
    marketsKicker:'Origine · documentazione · normativa · modello di consegna',
    productImageNote:'L’immagine rappresenta la categoria; le caratteristiche varietali sono verificate tramite specifica e documenti di lotto.'
  },
  ru:{
    manifestoTitle:'Сорсинг — это больше, чем поиск товара.',
    manifestoText:'CTSEG объединяет поиск производителей, проверку, качество, прозрачность происхождения и соответствие рынку в единой системе принятия решений.',
    portfolioTitle:'Региональные направления продукции и сорсинга',
    portfolioText:'Подборка показывает более широкий круг исследований CTSEG по орехам, сухофруктам и отдельным пищевым категориям; изображения не означают наличие товара на складе.',
    marketsKicker:'Происхождение · документы · требования · коммерческая модель',
    productImageNote:'Изображение представляет категорию; характеристики проверяются по спецификации и документам на партию.'
  },
  fa:{
    manifestoTitle:'تأمین فراتر از جستجوی ساده یک کالا است.',
    manifestoText:'CTSEG شناسایی تولیدکننده، اعتباربرسنجی، کیفیت، هزینه کل، شفافیت مبدأ و اجرای تجاری را در یک انضباط تصمیم‌گیری واحد ترکیب می‌کند.',
    portfolioTitle:'سبد منطقه‌ای کالا و تأمین',
    portfolioText:'این انتخاب نشان‌دهنده حوزه‌های وسیع‌تر تحقیق و تأمین CTSEG در خشکبار، میوه‌های خشک و کالاهای اساسی است.',
    marketsKicker:'مبدأ · اسناد · قوانین · مدل تحویل',
    productImageNote:'تصویر نشان‌دهنده دسته‌بندی محصول است؛ ویژگی‌های فنی از طریق مشخصات و اسناد محموله اعتبارسنجی می‌شوند.'
  },
  zh:{
    manifestoTitle:'寻源绝非简单的产品搜索。',
    manifestoText:'CTSEG 将源头工厂发现、主体资格尽职核验、严格品质标准、总拥有成本测算、真实产地透明度、海外市场准入及商业落地执行熔铸于统一严谨的决策体系中。',
    portfolioTitle:'区域特色大宗与高阶寻源版图',
    portfolioText:'本选集展示了 CTSEG 在坚果、干果及精选高附加值大宗食品领域更广阔的区域研究与寻源版图；图示商品代表品类范畴，具体供货基于各批次技术规格与正式订单排产。',
    marketsKicker:'真实产地 · 批次单证 · 准入法规 · 交付架构',
    productImageNote:'图片仅代表所属产品品类；具体品种等级、理化指标均以双方确认的技术规格书及批次检测报告 (COA) 为准。'
  },
  vi:{
    manifestoTitle:'Thu mua vượt xa một cuộc tìm kiếm sản phẩm thông thường.',
    manifestoText:'CTSEG kết hợp tìm kiếm nhà sản xuất, thẩm định đối tác, quản lý chất lượng, tối ưu tổng chi phí, minh bạch nguồn gốc, mức độ phù hợp thị trường và thực thi thương mại vào một kỷ luật quyết định duy nhất.',
    portfolioTitle:'Không gian sản phẩm và nguồn cung khu vực',
    portfolioText:'Danh mục này đại diện cho mạng lưới nghiên cứu và thu mua khu vực rộng lớn hơn của CTSEG đối với các loại hạt, trái cây khô và thực phẩm chọn lọc; không phải mọi mặt hàng hiển thị đều là sản phẩm có sẵn trong kho.',
    marketsKicker:'Xuất xứ · Chứng từ lô hàng · Quy chuẩn thị trường · Mô hình giao hàng',
    productImageNote:'Hình ảnh đại diện cho danh mục sản phẩm; các đặc tính cụ thể của từng giống được xác thực qua thông số kỹ thuật và chứng từ lô hàng.'
  }
};

export const insightIds = ['strategic-vs-procurement','supplier-selection','supplier-risk','total-cost','rfq','supply-chain-risk','origin-compliance'] as const;
export const insights: Record<(typeof insightIds)[number], { slugs: Localized; titles: Localized; descriptions: Localized; answers: Localized }> = {
  'strategic-vs-procurement': {
    slugs:{tr:'stratejik-tedarik-ve-satin-alma-farki',en:'strategic-sourcing-vs-procurement',de:'strategische-beschaffung-vs-einkauf',it:'sourcing-strategico-vs-acquisti',ru:'strategicheskiy-sorsing-i-zakupki',fa:'strategic-sourcing-vs-procurement',zh:'strategic-sourcing-vs-procurement',vi:'strategic-sourcing-vs-procurement'},
    titles:{tr:'Stratejik tedarik ve satın alma arasındaki fark',en:'Strategic Sourcing vs Procurement: Differences, Process & Strategy',de:'Strategische Beschaffung vs. Einkauf',it:'Sourcing strategico e acquisti a confronto',ru:'Стратегический сорсинг и закупки: в чём отличие?',fa:'تفاوت تأمین استراتژیک و خرید',zh:'战略采购与事务性采购的核心区别与商业实践',vi:'Thu mua chiến lược và mua sắm thông thường: Sự khác biệt cốt lõi'},
    descriptions:{tr:'Kapsam, maliyet, risk, tedarikçi yönetimi ve karar süreci açısından stratejik tedarik ile satın alma karşılaştırması.',en:'Strategic sourcing vs procurement: a practical B2B comparison guide covering upstream sourcing strategy, downstream purchasing, the 7-step process, TCO and risk controls.',de:'Vergleich von strategischer Beschaffung und Einkauf nach Umfang, Kosten, Risiko, Lieferantenmanagement und Entscheidung.',it:'Confronto tra sourcing strategico e acquisti per ambito, costo, rischio, gestione fornitori e decisioni.',ru:'Сравнение стратегического сорсинга и закупок по объёму, стоимости, риску, работе с поставщиками и процессу принятия решений.',fa:'مقایسه تأمین استراتژیک و خرید از نظر دامنه، هزینه، ریسک، مدیریت تأمین‌کننده و فرآیند تصمیم‌گیری.',zh:'从采购范畴、总体拥有成本 (TCO)、供应链风险把控、供应商关系管理及长远决策机制等维度深度解析战略采购与事务性采购。',vi:'So sánh thu mua chiến lược và mua sắm thông thường trên các khía cạnh phạm vi, chi phí, rủi ro, quản lý nhà cung cấp và quyết định thương mại.'},
    answers:{tr:'Satın alma işlemi yürütür; stratejik tedarik ise talep, pazar, toplam maliyet, risk, müzakere ve performansı uzun vadeli bir karar sistemi içinde yönetir.',en:'Procurement executes purchasing and transactional operations. Strategic sourcing is the broader, long-term decision framework that manages category spend, supply markets, supplier qualification, total cost of ownership (TCO), risk, negotiation and performance monitoring before and after the award.',de:'Der Einkauf führt die Bestellung aus; strategische Beschaffung steuert Bedarf, Markt, Gesamtkosten, Risiko, Verhandlung und Leistung langfristig.',it:'Gli acquisti eseguono la transazione; il sourcing strategico governa fabbisogno, mercato, costo totale, rischio, negoziazione e prestazioni nel lungo periodo.',ru:'Закупки выполняют покупку; стратегический сорсинг управляет спросом, рынком, совокупной стоимостью, риском, переговорами и показателями эффективности в долгосрочной перспективе.',fa:'خرید، عملیات سفارش را اجرا می‌کند؛ تأمین استراتژیک تقاضا، بازار، هزینه کل، ریسک و عملکرد را در یک سیستم مدیریت می‌کند.',zh:'事务性采购侧重于被动执行订单下达与日常对账；而战略采购则是将市场供需趋势、总体拥有成本 (TCO)、供应链风险管理、商务谈判与履约指标作为长效决策系统进行全局统筹。',vi:'Mua sắm thông thường thực hiện việc mua hàng tức thời; thu mua chiến lược quản lý nhu cầu, thị trường, tổng chi phí, rủi ro, đàm phán và hiệu suất như một hệ thống dài hạn.'}
  },
  'supplier-selection': {
    slugs:{tr:'tedarikci-secim-kriterleri',en:'supplier-selection-criteria',de:'kriterien-lieferantenauswahl',it:'criteri-selezione-fornitori',ru:'kriterii-vybora-postavshchikov',fa:'supplier-selection-criteria',zh:'supplier-selection-criteria',vi:'supplier-selection-criteria'},
    titles:{tr:'Tedarikçi seçim kriterleri',en:'Supplier selection criteria',de:'Kriterien für die Lieferantenauswahl',it:'Criteri di selezione dei fornitori',ru:'Критерии выбора поставщиков',fa:'معیارهای انتخاب تأمین‌کننده',zh:'跨国供应链中优质供应商的综合评估与选拔标准',vi:'Tiêu chí lựa chọn nhà cung cấp quốc tế toàn diện'},
    descriptions:{tr:'Fiyatın ötesinde kalite, kapasite, termin, finansal dayanıklılık, uyum ve toplam maliyetle tedarikçi değerlendirme.',en:'Supplier evaluation beyond price: quality, capacity, lead time, financial resilience, compliance and total cost.',de:'Lieferantenbewertung jenseits des Preises: Qualität, Kapazität, Lieferzeit, Finanzkraft, Konformität und Gesamtkosten.',it:'Valutazione oltre il prezzo: qualità, capacità, tempi, solidità finanziaria, conformità e costo totale.',ru:'Оценка поставщика не только по цене: качество, мощность, сроки, финансовая устойчивость, соответствие требованиям и совокупная стоимость.',fa:'ارزیابی تأمین‌کننده فراتر از قیمت: کیفیت، ظرفیت، زمان تحویل، پایداری مالی، انطباق و هزینه کل.',zh:'超越单纯的报价对比：全面衡量生产资质、制造产能、交付周期、财务稳健性、质量合规标准及全生命周期总拥有成本 (TCO)。',vi:'Đánh giá nhà cung cấp vượt ra ngoài đơn giá: chất lượng, năng lực sản xuất, thời gian giao hàng, sức khỏe tài chính, tuân thủ và tổng chi phí.'},
    answers:{tr:'Doğru tedarikçi en düşük fiyatı veren değil; kalite, kapasite, termin, mevzuat, iletişim ve toplam maliyet ihtiyacını sürdürülebilir karşılayandır.',en:'The right supplier is not the lowest bidder, but the one that sustainably meets quality, capacity, lead-time, compliance, communication and total-cost needs.',de:'Der richtige Lieferant ist nicht der billigste, sondern erfüllt Qualität, Kapazität, Lieferzeit, Konformität, Kommunikation und Gesamtkosten nachhaltig.',it:'Il fornitore giusto non è il più economico, ma quello che soddisfa in modo sostenibile qualità, capacità, tempi, conformità, comunicazione e costo totale.',ru:'Подходящий поставщик — не самый дешёвый, а тот, кто устойчиво выполняет требования по качеству, мощности, срокам, соответствию, коммуникации и совокупной стоимости.',fa:'تأمین‌کننده مناسب ارزان‌ترین ارائه‌دهنده نیست، بلکه گزینه‌ای است که نیازهای کیفی، ظرفیت و انطباق را به صورت پایدار برآورده می‌سازد.',zh:'真正理想的供应商绝非单纯的最低报价方，而是在质量一致性、稳定产能、交付履约、目标国监管合规、高效沟通及综合成本优化方面能够持续满足商业需求的坚实伙伴。',vi:'Nhà cung cấp phù hợp không phải là bên chào giá thấp nhất, mà là đối tác đáp ứng bền vững các yêu cầu về chất lượng, công suất, tiến độ, tuân thủ pháp lý và tổng chi phí.'}
  },
  'supplier-risk': {
    slugs:{tr:'tedarikci-riskini-dogrulama',en:'verifying-supplier-risk',de:'lieferantenrisiko-pruefen',it:'verificare-rischio-fornitore',ru:'proverka-riska-postavshchika',fa:'verifying-supplier-risk',zh:'verifying-supplier-risk',vi:'verifying-supplier-risk'},
    titles:{tr:'Tedarikçi riski nasıl doğrulanır?',en:'How to verify supplier risk',de:'Wie lässt sich Lieferantenrisiko prüfen?',it:'Come verificare il rischio fornitore',ru:'Как проверить риск поставщика?',fa:'ارزیابی و اعتبارسنجی ریسک تأمین‌کننده',zh:'如何在正式下单前有效核验并规避跨国供应商风险？',vi:'Cách xác minh và phòng ngừa rủi ro nhà cung cấp quốc tế'},
    descriptions:{tr:'Şirket, kapasite, kalite ve ticari riskleri sipariş öncesinde görünür kılan doğrulama çerçevesi.',en:'A verification framework that exposes company, capacity, quality and commercial risk before ordering.',de:'Ein Prüfrahmen, der Unternehmens-, Kapazitäts-, Qualitäts- und Handelsrisiken vor der Bestellung sichtbar macht.',it:'Un quadro di verifica che rende visibili rischi aziendali, produttivi, qualitativi e commerciali prima dell’ordine.',ru:'Рамка верификации, выявляющая риски компании, мощностей, качества и коммерческие риски до размещения заказа.',fa:'چارچوب اعتبارسنجی مستقل برای ارزیابی ریسک‌های حقوقی، ظرفیت تولید، کیفیت و شرایط تجاری قبل از ثبت سفارش.',zh:'在正式支付预付款与下达采购订单 (PO) 之前，多维度揭示企业商业主体登记、产能真实性、质量认证与商业欺诈风险的实战核验框架。',vi:'Khung xác minh độc lập giúp làm rõ rủi ro pháp lý doanh nghiệp, năng lực nhà máy, chất lượng và điều khoản thương mại trước khi đặt hàng.'},
    answers:{tr:'Kayıt, sahiplik, üretim kapasitesi, kalite sistemi, referans, banka bilgisi ve sözleşme yetkisi bağımsız kaynaklarla çapraz kontrol edilmelidir.',en:'Registration, ownership, production capacity, quality systems, references, bank details and signing authority should be cross-checked through independent sources.',de:'Register, Eigentum, Produktionskapazität, Qualitätssysteme, Referenzen, Bankdaten und Zeichnungsbefugnis müssen unabhängig gegengeprüft werden.',it:'Registrazione, proprietà, capacità produttiva, sistemi qualità, referenze, coordinate bancarie e poteri di firma vanno verificati con fonti indipendenti.',ru:'Регистрационные данные, собственность, мощности, система качества, рекомендации, банковские реквизиты и полномочия на подписание должны быть сопоставлены и проверены.',fa:'اطلاعات ثبتی، مالکیت، ظرفیت تولید، سیستم‌های کیفیت، حساب‌های بانکی و اختیارات امضا باید از طریق منابع مستقل استعلام شوند.',zh:'必须通过官方权威渠道对企业商业注册登记、实际控制人信息、工厂实地生产能力、质量管理体系、历史商业信誉、海关银行信息及法定签约代表权限进行多源交叉核验。',vi:'Thông tin đăng ký kinh doanh, quyền sở hữu, năng lực sản xuất, hệ thống chứng nhận chất lượng, tài khoản ngân hàng và thẩm quyền ký kết cần được kiểm tra chéo qua các nguồn độc lập.'}
  },
  'total-cost': {
    slugs:{tr:'toplam-sahip-olma-maliyeti',en:'total-cost-of-ownership',de:'gesamtbetriebskosten-tco',it:'costo-totale-di-possesso',ru:'stoimost-polnogo-vladeniya-tco',fa:'total-cost-of-ownership',zh:'total-cost-of-ownership',vi:'total-cost-of-ownership'},
    titles:{tr:'Toplam sahip olma maliyeti neden önemlidir?',en:'Why total cost of ownership matters',de:'Warum Gesamtbetriebskosten entscheidend sind',it:'Perché conta il costo totale di possesso',ru:'Почему важна совокупная стоимость владения (TCO)?',fa:'چرا هزینه کل مالکیت (TCO) اهمیت دارد؟',zh:'为什么总体拥有成本 (TCO) 才是跨国采购的真实决策依据？',vi:'Tại sao tổng chi phí sở hữu (TCO) mang tính quyết định trong thu mua?'},
    descriptions:{tr:'Birim fiyatın ötesinde lojistik, kalite, stok, finansman ve risk maliyetlerini karşılaştırma.',en:'Comparing logistics, quality, inventory, finance and risk costs beyond unit price.',de:'Vergleich von Logistik-, Qualitäts-, Bestands-, Finanzierungs- und Risikokosten jenseits des Stückpreises.',it:'Confronto di logistica, qualità, scorte, finanza e rischio oltre il prezzo unitario.',ru:'Сравнивать логистику, качество, запасы, финансирование и риски сверх цены за единицу.',fa:'مقایسه هزینه‌های لجستیک، کیفیت، موجودی، مالی و ریسک فراتر از قیمت واحد.',zh:'深入剖析单件采购价之外的国际物流、关税杂费、批次质损、安全库存持有、资金成本及供应链中断潜在代价的全面对比方法。',vi:'So sánh toàn diện các chi phí logistics, kiểm định chất lượng, lưu kho, tài chính và rủi ro chuỗi cung ứng vượt ra ngoài đơn giá danh nghĩa.'},
    answers:{tr:'En düşük birim fiyat her zaman en iyi teklif değildir; navlun, hata, gecikme, finansman ve tedarik kesintisi gerçek kararı değiştirebilir.',en:'The lowest unit price is not always the best offer; freight, defects, delays, finance and disruption can change the decision.',de:'Der niedrigste Stückpreis ist nicht immer das beste Angebot; Fracht, Fehler, Verzögerungen, Finanzierung und Ausfälle verändern die Entscheidung.',it:'Il prezzo unitario più basso non è sempre l’offerta migliore: trasporto, difetti, ritardi, finanza e interruzioni cambiano la decisione.',ru:'Самая низкая цена за единицу не всегда означает лучшее предложение: фрахт, дефекты, задержки, финансирование и перебои могут изменить решение.',fa:'کمترین قیمت واحد همواره بهترین پیشنهاد نیست؛ هزینه‌های حمل، ضایعات، تأخیر و ریسک بر تصمیم نهایی تأثیر می‌گذارند.',zh:'最低的出厂单价极少代表最终的最优商业方案；国际海空运费波动、退货返工损耗、清关延误、资金利息占用以及断货违约风险足以彻底改变最终的真实采购盈利模型。',vi:'Đơn giá thấp nhất không phải lúc nào cũng là ưu đãi tốt nhất; cước vận chuyển, tỷ lệ lỗi, chậm trễ, chi phí vốn và gián đoạn nguồn cung có thể thay đổi toàn bộ kết quả thương mại.'}
  },
  rfq: {
    slugs:{tr:'etkili-rfq-nasil-hazirlanir',en:'how-to-write-an-effective-rfq',de:'wirksame-rfq-erstellen',it:'come-preparare-rfq-efficace',ru:'kak-sostavit-effektivnyi-rfq',fa:'how-to-write-an-effective-rfq',zh:'how-to-write-an-effective-rfq',vi:'how-to-write-an-effective-rfq'},
    titles:{tr:'Etkili RFQ nasıl hazırlanır?',en:'How to write an effective RFQ',de:'Wie erstellt man eine wirksame RFQ?',it:'Come preparare una RFQ efficace',ru:'Как составить эффективный RFQ?',fa:'چگونه یک RFQ موثر بنویسیم؟',zh:'如何撰写一份专业高效、具备可比性的国际贸易 RFQ 询价文件？',vi:'Cách lập bản yêu cầu báo giá (RFQ) chuẩn quốc tế và hiệu quả'},
    descriptions:{tr:'Karşılaştırılabilir teklifler için spesifikasyon, miktar, kalite, teslim, ödeme ve belge alanlarını doğru yapılandırma.',en:'Structuring specifications, quantity, quality, delivery, payment and documentation for comparable quotations.',de:'Spezifikation, Menge, Qualität, Lieferung, Zahlung und Dokumentation für vergleichbare Angebote strukturieren.',it:'Strutturare specifiche, quantità, qualità, consegna, pagamento e documenti per offerte comparabili.',ru:'Структурировать спецификации, количество, качество, условия доставки, оплаты и документацию для получения сопоставимых предложений.',fa:'ساختاردهی مشخصات، مقدار، کیفیت، تحویل، پرداخت و اسناد برای دریافت پیشنهادات قابل مقایسه.',zh:'系统构建涵盖技术指标、订购体量、质量认证要求、包装方案、Incoterms 交付方式、结算币种及单证清单的标准 RFQ 架构指南。',vi:'Cấu trúc rõ ràng các thông số kỹ thuật, số lượng, tiêu chuẩn chất lượng, địa điểm giao hàng, Incoterms, thanh toán và chứng từ để nhận báo giá đồng nhất.'},
    answers:{tr:'Etkili bir RFQ; teknik tanım, miktar, kalite standardı, teslim yeri, Incoterms, ödeme koşulu, termin, belge ihtiyacı ve teklif son tarihini açıkça tanımlar.',en:'An effective RFQ clearly defines specifications, quantity, quality standards, delivery point, Incoterms, payment, lead time, documents and quotation deadline.',de:'Eine wirksame RFQ definiert Spezifikation, Menge, Qualitätsstandard, Lieferort, Incoterms, Zahlung, Lieferzeit, Dokumente und Angebotsfrist.',it:'Una RFQ efficace definisce specifiche, quantità, standard qualità, luogo di consegna, Incoterms, pagamento, tempi, documenti e scadenza.',ru:'Эффективный RFQ чётко определяет спецификации, количество, стандарт качества, место доставки, Incoterms, оплату, срок, документы и крайний срок подачи предложений.',fa:'یک RFQ موثر مشخصات فنی، میزان سفارش، استاندارد کیفیت، شرایط تحویل، Incoterms و زمان استعلام را به‌طور شفاف تعریف می‌کند.',zh:'一份专业严谨的 RFQ 必须清晰限定产品技术规格、精确订购量 (MOQ)、执行标准与容差、交货口岸与 Incoterms、付款结算方式、交货排期、必备单证文件以及报价截止时间。',vi:'Một bản RFQ hiệu quả phải nêu rõ đặc tính kỹ thuật, số lượng, tiêu chuẩn chất lượng, địa điểm giao hàng, Incoterms, phương thức thanh toán, tiến độ, chứng từ và hạn nộp báo giá.'}
  },
  'supply-chain-risk': {
    slugs:{tr:'tedarik-zinciri-risk-yonetimi',en:'supply-chain-risk-management',de:'risikomanagement-lieferkette',it:'gestione-rischio-catena-fornitura',ru:'upravlenie-riskami-cepochki-postavok',fa:'supply-chain-risk-management',zh:'supply-chain-risk-management',vi:'supply-chain-risk-management'},
    titles:{tr:'Tedarik zinciri risk yönetimi',en:'Supply chain risk management',de:'Risikomanagement in der Lieferkette',it:'Gestione del rischio nella catena di fornitura',ru:'Управление рисками цепочки поставок',fa:'مدیریت ریسک زنجیره تأمین',zh:'全球供应链风险识别、量化评估与多元化韧性管理',vi:'Quản trị rủi ro chuỗi cung ứng: Nhận diện, đánh giá và ứng phó'},
    descriptions:{tr:'Tek kaynak, kalite, kapasite, lojistik, kur ve mevzuat risklerini puanlama ve azaltma rehberi.',en:'A guide to scoring and reducing single-source, quality, capacity, logistics, currency and regulatory risk.',de:'Leitfaden zur Bewertung und Reduzierung von Einzelquellen-, Qualitäts-, Kapazitäts-, Logistik-, Währungs- und Regulierungsrisiken.',it:'Guida per valutare e ridurre rischi di fonte unica, qualità, capacità, logistica, valuta e normativa.',ru:'Руководство по оценке и снижению рисков: единственный источник, качество, мощности, логистика, валютные и регуляторные риски.',fa:'راهنمای ارزیابی و کاهش ریسک‌های تک‌منبعی، کیفیت، ظرفیت، لجستیک و قوانین.',zh:'针对单一供应商依赖、质量波动、产能瓶颈、海运物流阻断、汇率异动及贸易政策合规风险的量化评分与应急预案制定指引。',vi:'Hướng dẫn chấm điểm và giảm thiểu các rủi ro về nguồn cung độc quyền, chất lượng, công suất, logistics, biến động tỷ giá và quy chuẩn thương mại.'},
    answers:{tr:'Kritik ürünler, tedarikçiler ve rotalar olasılık ve etkiye göre puanlanmalı; alternatif kaynaklar, performans göstergeleri ve yanıt planları oluşturulmalıdır.',en:'Critical products, suppliers and routes should be scored by probability and impact, with alternative sources, performance indicators and response plans.',de:'Kritische Produkte, Lieferanten und Routen sind nach Wahrscheinlichkeit und Auswirkung zu bewerten; Alternativquellen, Kennzahlen und Reaktionspläne sind festzulegen.',it:'Prodotti, fornitori e rotte critici vanno classificati per probabilità e impatto, predisponendo fonti alternative, indicatori e piani di risposta.',ru:'Критические продукты, поставщики и маршруты должны оцениваться по вероятности и влиянию; определять альтернативные источники, показатели эффективности и планы реагирования.',fa:'محصولات و مسیرهای حساس باید بر اساس احتمال و اثرگذاری رتبه‌بندی شوند و برنامه‌های جایگزین تدوین گردند.',zh:'应依据发生概率与商业冲击烈度对关键原材料、供应商梯队及跨境物流走廊进行分级矩阵评估，并预先建立多源备选渠道、动态监控指标 (KPI) 与应急响应机制。',vi:'Các sản phẩm, nhà cung cấp và tuyến vận chuyển trọng yếu cần được đánh giá theo ma trận xác suất và tác động, song song với việc xây dựng nguồn thay thế và kế hoạch ứng phó.'}
  },
  'origin-compliance': {
    slugs:{tr:'gida-tedarikinde-mense-ve-uyum',en:'origin-and-compliance-in-food-sourcing',de:'herkunft-und-konformitaet-lebensmittel',it:'origine-conformita-approvvigionamento-alimentare',ru:'proiskhozhdenie-i-sootvetstvie',fa:'origin-and-compliance-in-food-sourcing',zh:'origin-and-compliance-in-food-sourcing',vi:'origin-and-compliance-in-food-sourcing'},
    titles:{tr:'Gıda tedariğinde menşe ve uyum',en:'Origin and compliance in food sourcing',de:'Herkunft und Konformität in der Lebensmittelbeschaffung',it:'Origine e conformità nel sourcing alimentare',ru:'Происхождение и соответствие при сорсинге пищевых продуктов',fa:'مبدأ و انطباق در تأمین مواد غذایی',zh:'大宗与特色食品跨境采购中的真实产地溯源与合规监管要求',vi:'Minh bạch nguồn gốc và tuân thủ quy chuẩn trong thu mua thực phẩm'},
    descriptions:{tr:'Gerçek menşe, parti izlenebilirliği, COA, aflatoksin, pestisit ve hedef pazar uygunluğu için temel kontroller.',en:'Core controls for actual origin, batch traceability, COA, aflatoxin, pesticides and target-market compliance.',de:'Kernprüfungen für tatsächliche Herkunft, Chargenrückverfolgung, COA, Aflatoxin, Pestizide und Zielmarktkonformität.',it:'Controlli essenziali su origine effettiva, tracciabilità lotto, COA, aflatossine, pesticidi e conformità al mercato.',ru:'Основные проверки реального происхождения, прослеживаемости партий, COA, афлатоксинов, пестицидов и соответствия целевому рынку.',fa:'کنترل‌های کلیدی برای مبدأ واقعی، قابلیت ردگیری محموله، اسناد COA، آفلاتوکسین و انطباق با بازار هدف.',zh:'针对真实原产地判定、全批次流向溯源、分析检测报告 (COA)、黄曲霉毒素、农残限量标准及目标国海关与食品安全准入的严苛核查要点。',vi:'Các kiểm soát then chốt về nguồn gốc thực tế, khả năng truy xuất lô hàng, COA, chỉ tiêu aflatoxin, dư lượng thuốc bảo vệ thực vật và quy chuẩn thị trường mục tiêu.'},
    answers:{tr:'Menşe ticari evrak, üretici ve parti düzeyinde açıkça beyan edilmeli; hedef pazar limitleri sevkiyat öncesinde doğrulanmalıdır.',en:'Origin should be declared clearly at commercial-document, producer and batch level; target-market limits must be verified before shipment.',de:'Die Herkunft ist in Handelsdokumenten sowie auf Hersteller- und Chargenebene offenzulegen; Zielmarktgrenzen sind vor Versand zu prüfen.',it:'L’origine va dichiarata nei documenti commerciali e a livello di produttore e lotto; i limiti del mercato vanno verificati prima della spedizione.',ru:'Происхождение должно быть указано в коммерческих документах, на уровне производителя и партии; пределы и нормативы целевого рынка необходимо проверить до отправки.',fa:'مبدأ کالا باید در اسناد تجاری و سطح محموله شفاف اعلام شود و الزامات بازار هدف قبل از حمل اعتبارسنجی گردد.',zh:'原产地信息必须在商业发票、原产地证书、生产商信息及批次溯源码层面保持完全一致且真实透明，所有理化与卫生限量标准必须在装船发运前完成第三方权威检测。',vi:'Xuất xứ phải được khai báo minh bạch trên chứng từ thương mại, hồ sơ nhà sản xuất và cấp độ lô hàng; các chỉ tiêu an toàn phải được kiểm nghiệm đạt chuẩn trước khi giao hàng.'}
  }
};

export const legalIds = ['privacy', 'cookies', 'terms', 'data-protection'] as const;
export const legal: Record<(typeof legalIds)[number], { slugs: Localized; titles: Localized }> = {
  privacy: { slugs:{tr:'gizlilik-politikasi',en:'privacy-policy',de:'datenschutzerklaerung',it:'informativa-privacy',ru:'politika-konfidentsialnosti',fa:'privacy',zh:'privacy-policy',vi:'chinh-sach-bao-mat'}, titles:{tr:'Gizlilik Politikası',en:'Privacy Policy',de:'Datenschutzerklärung',it:'Informativa sulla privacy',ru:'Политика конфиденциальности',fa:'حریم خصوصی',zh:'隐私保护政策',vi:'Chính sách bảo mật'} },
  cookies: { slugs:{tr:'cerez-politikasi',en:'cookie-policy',de:'cookie-richtlinie',it:'politica-cookie',ru:'politika-cookie',fa:'cookies',zh:'cookie-policy',vi:'chinh-sach-cookie'}, titles:{tr:'Çerez Politikası',en:'Cookie Policy',de:'Cookie-Richtlinie',it:'Politica sui cookie',ru:'Политика в отношении cookie',fa:'سیاست کوکی',zh:'Cookie 政策说明',vi:'Chính sách Cookie'} },
  terms: { slugs:{tr:'kullanim-kosullari',en:'terms-of-use',de:'nutzungsbedingungen',it:'termini-di-utilizzo',ru:'usloviya-ispolzovaniya',fa:'terms',zh:'terms-of-use',vi:'dieu-khoan-su-dung'}, titles:{tr:'Kullanım Koşulları',en:'Terms of Use',de:'Nutzungsbedingungen',it:'Termini di utilizzo',ru:'Условия использования',fa:'شرایط استفاده',zh:'网站使用条款',vi:'Điều khoản sử dụng'} },
  'data-protection': { slugs:{tr:'kvkk-aydinlatma-metni',en:'data-protection-notice',de:'hinweise-zum-datenschutz',it:'informativa-protezione-dati',ru:'uvedomlenie-o-zashhite-dannykh',fa:'data-protection',zh:'data-protection-notice',vi:'thong-bao-bao-ve-du-lieu'}, titles:{tr:'KVKK Aydınlatma Metni',en:'Data Protection Notice',de:'Hinweise zum Datenschutz',it:'Informativa sulla protezione dei dati',ru:'Уведомление о защите данных',fa:'حفاظت از داده‌ها',zh:'个人数据保护声明 (KVKK / GDPR)',vi:'Thông báo bảo vệ dữ liệu'} }
};

export const pageCopy: Record<Locale, any> = {
  tr:{
    servicesTitle:'Tedarik kararının her aşaması için uzmanlık.', servicesLead:'Strateji, doğrulama, ticari analiz ve uygulamayı ortak bir karar disiplini içinde birleştiriyoruz.',
    productsTitle:'Ticari ürün portföyü', productsLead:'Aynı ürün kataloğu her pazarda şeffaf menşe, parti bazlı kalite ve doğrulanabilir ticari şartlarla değerlendirilir.',
    marketsTitle:'Türkiye’den Avrupa ve uluslararası pazarlara.', marketsLead:'Yerel üretim gerçekliğini hedef pazar mevzuatı, alıcı beklentisi ve uygulanabilir teslim modelleriyle eşleştiriyoruz.',
    aboutTitle:'Ticaretin belirsizliğini azaltan bağımsız karar ortağı.', aboutLead:'CTSEG, stratejik tedarik ve uluslararası ticaret projelerinde kanıt, şeffaflık ve uygulanabilirlik ilkeleriyle çalışır.',
    contactTitle:'Ticari ihtiyacınızı net bir değerlendirmeyle başlatın.', insightsTitle:'Karar vericiler için uygulanabilir içgörüler.', insightsLead:'Tedarik, toplam maliyet, menşe, kalite ve ticari risk üzerine kısa, kanıta dayalı rehberler.',
    framework:['İhtiyaç ve spesifikasyon','Taraf ve belge doğrulaması','Kalite, maliyet ve risk karşılaştırması','Şeffaf karar ve uygulama kaydı'],
    serviceFaq:['Proje nasıl başlar?','Kapsam, hedef, ürün veya hizmet, pazar ve karar takvimi kısa bir ön görüşmeyle netleştirilir.','CTSEG tedarikçi adına mı hareket eder?','CTSEG görev kapsamını ve ticari rolünü açıkça beyan eder; değerlendirme kriterlerini belgeler.'],
    productUses:['Gıda üretimi ve endüstriyel uygulamalar','Toptan dağıtım ve özel marka','HORECA ve uzman perakende'],
    productQuality:['Aflatoksin ve pestisit gereklilikleri','Nem, mikrobiyoloji ve ürün spesifikasyonu','COA, parti kodu ve izlenebilirlik','Hedef pazar mevzuatına uygunluk'],
    legalIntro:'Bu metin CTSEG web sitesinin kullanımı ve ilgili veri işleme süreçleri hakkında şeffaf bilgi sağlar.',
    legalSections:[['Kapsam ve sorumluluk','CTSEG, bu web sitesinde sunulan kurumsal ve ticari bilgilerin doğruluğunu korumaya çalışır. İletişim ve veri koruma talepleri info@ctseg.com.tr adresine iletilebilir.'],['İşlenen bilgiler ve amaç','İletişim kurduğunuzda ad, şirket, e-posta, telefon, talep ve ticari ihtiyaç bilgileri; güvenlik amacıyla sınırlı teknik günlükler işlenebilir. Bu bilgiler talebi yanıtlamak, iş ilişkisini değerlendirmek, site güvenliğini sağlamak ve hukuki yükümlülükleri yerine getirmek için kullanılır.'],['Paylaşım, saklama ve güvenlik','Bilgiler yalnızca gerekli barındırma, e-posta, teknik destek ve hukuki hizmet sağlayıcılarla veya yetkili makamlarla, uygulanabilir mevzuata uygun biçimde paylaşılır. İşleme amacı sona erdiğinde yasal saklama süreleri dikkate alınarak silinir veya anonimleştirilir.'],['Haklar ve iletişim','Erişim, düzeltme, silme, itiraz ve diğer veri koruma haklarınızı kullanmak için kimliğinizi ve talebinizi açıklayarak info@ctseg.com.tr adresine başvurabilirsiniz.']]
  },
  en:{
    servicesTitle:'Expertise for every stage of the sourcing decision.',servicesLead:'We combine strategy, verification, commercial analysis and execution within one decision discipline.',
    productsTitle:'Trade product portfolio',productsLead:'The same catalogue is assessed in every market through transparent origin, batch-level quality and verifiable commercial terms.',
    marketsTitle:'From Türkiye into Europe and international markets.',marketsLead:'We match local production realities with target-market regulation, buyer expectations and executable delivery models.',
    aboutTitle:'An independent decision partner reducing uncertainty in trade.',aboutLead:'CTSEG works through evidence, transparency and executability in strategic sourcing and international trade projects.',
    contactTitle:'Start your commercial requirement with a clear assessment.',insightsTitle:'Practical insight for decision-makers.',insightsLead:'Concise, evidence-led guidance on sourcing, total cost, origin, quality and commercial risk.',
    framework:['Requirement and specification','Counterparty and document verification','Quality, cost and risk comparison','Transparent decision and execution record'],
    serviceFaq:['How does a project start?','Scope, objective, product or service, market and decision timeline are clarified in a short qualification call.','Does CTSEG act for a supplier?','CTSEG declares its mandate and commercial role clearly and documents the assessment criteria.'],
    productUses:['Food manufacturing and industrial applications','Wholesale distribution and private label','HORECA and specialist retail'],
    productQuality:['Aflatoxin and pesticide requirements','Moisture, microbiology and product specification','COA, batch code and traceability','Target-market regulatory fit'],
    legalIntro:'This notice provides transparent information about use of the CTSEG website and related data processing.',
    legalSections:[['Scope and responsibility','CTSEG works to keep corporate and commercial information on this website accurate. Contact and data-protection requests may be sent to info@ctseg.com.tr.'],['Information and purpose','When you contact us, we may process name, company, email, phone, request and commercial-requirement information, as well as limited technical logs for security. We use this to answer requests, assess a business relationship, protect the website and meet legal obligations.'],['Sharing, retention and security','Information is shared only with necessary hosting, email, technical support and legal providers or competent authorities in accordance with applicable law. It is erased or anonymised when its purpose and applicable retention period end.'],['Rights and contact','To exercise access, correction, erasure, objection and other data-protection rights, write to info@ctseg.com.tr with sufficient identity and request details.']]
  },
  de:{
    servicesTitle:'Kompetenz für jede Phase der Beschaffungsentscheidung.',servicesLead:'Wir verbinden Strategie, Prüfung, kaufmännische Analyse und Umsetzung in einer Entscheidungsdisziplin.',
    productsTitle:'Handelsprodukt-Portfolio',productsLead:'Dasselbe Sortiment wird in jedem Markt anhand transparenter Herkunft, Chargenqualität und überprüfbarer Konditionen bewertet.',
    marketsTitle:'Von Türkiye nach Europa und in internationale Märkte.',marketsLead:'Wir verbinden lokale Produktionsrealität mit Zielmarktregeln, Käufererwartungen und umsetzbaren Liefermodellen.',
    aboutTitle:'Ein unabhängiger Entscheidungspartner, der Unsicherheit im Handel reduziert.',aboutLead:'CTSEG arbeitet bei strategischer Beschaffung und internationalem Handel nach den Prinzipien Evidenz, Transparenz und Umsetzbarkeit.',
    contactTitle:'Beginnen Sie Ihren Handelsbedarf mit einer klaren Bewertung.',insightsTitle:'Praktische Einblicke für Entscheider.',insightsLead:'Kompakte, evidenzbasierte Leitfäden zu Beschaffung, Gesamtkosten, Herkunft, Qualität und Handelsrisiko.',
    framework:['Bedarf und Spezifikation','Prüfung von Parteien und Dokumenten','Vergleich von Qualität, Kosten und Risiko','Transparenter Entscheidungs- und Umsetzungsnachweis'],
    serviceFaq:['Wie beginnt ein Projekt?','Umfang, Ziel, Produkt oder Dienstleistung, Markt und Zeitplan werden in einem kurzen Qualifikationsgespräch geklärt.','Handelt CTSEG im Namen eines Lieferanten?','CTSEG legt Mandat und kaufmännische Rolle offen und dokumentiert die Bewertungskriterien.'],
    productUses:['Lebensmittelproduktion und industrielle Anwendungen','Großhandel und Eigenmarken','HORECA und Fachhandel'],
    productQuality:['Aflatoxin- und Pestizidanforderungen','Feuchte, Mikrobiologie und Produktspezifikation','COA, Chargencode und Rückverfolgbarkeit','Konformität mit dem Zielmarkt'],
    legalIntro:'Dieser Hinweis informiert transparent über die Nutzung der CTSEG-Website und die damit verbundene Datenverarbeitung.',
    legalSections:[['Geltungsbereich und Verantwortung','CTSEG bemüht sich um korrekte Unternehmens- und Handelsinformationen. Kontakt- und Datenschutzanfragen können an info@ctseg.com.tr gesendet werden.'],['Informationen und Zweck','Bei Kontakt können Name, Unternehmen, E-Mail, Telefon, Anfrage und Handelsbedarf sowie begrenzte technische Sicherheitsprotokolle verarbeitet werden. Dies dient der Beantwortung, Geschäftsanbahnung, Sicherheit und Erfüllung gesetzlicher Pflichten.'],['Weitergabe, Aufbewahrung und Sicherheit','Daten werden nur mit notwendigen Hosting-, E-Mail-, Support- und Rechtsdienstleistern oder zuständigen Behörden nach geltendem Recht geteilt. Nach Zweckfortfall und Ablauf gesetzlicher Fristen werden sie gelöscht oder anonymisiert.'],['Rechte und Kontakt','Für Auskunft, Berichtigung, Löschung, Widerspruch und weitere Datenschutzrechte schreiben Sie mit ausreichenden Identitäts- und Anfragedaten an info@ctseg.com.tr.']]
  },
  it:{
    servicesTitle:'Competenze per ogni fase della decisione di approvvigionamento.',servicesLead:'Uniamo strategia, verifica, analisi commerciale ed esecuzione in un’unica disciplina decisionale.',
    productsTitle:'Portafoglio prodotti commerciali',productsLead:'Lo stesso catalogo è valutato in ogni mercato con origine trasparente, qualità per lotto e condizioni verificabili.',
    marketsTitle:'Dalla Türkiye verso l’Europa e i mercati internazionali.',marketsLead:'Allineiamo la realtà produttiva locale con norme del mercato, aspettative dei buyer e modelli di consegna realizzabili.',
    aboutTitle:'Un partner decisionale indipendente che riduce l’incertezza nel commercio.',aboutLead:'CTSEG opera con evidenze, trasparenza e realizzabilità nei progetti di sourcing strategico e commercio internazionale.',
    contactTitle:'Avvia la tua esigenza commerciale con una valutazione chiara.',insightsTitle:'Approfondimenti pratici per decisori.',insightsLead:'Guide concise e basate su evidenze su sourcing, costo totale, origine, qualità e rischio commerciale.',
    framework:['Fabbisogno e specifica','Verifica di controparti e documenti','Confronto di qualità, costo e rischio','Registro trasparente di decisione ed esecuzione'],
    serviceFaq:['Come inizia un progetto?','Ambito, obiettivo, prodotto o servizio, mercato e tempi decisionali vengono chiariti in un breve colloquio di qualifica.','CTSEG opera per conto di un fornitore?','CTSEG dichiara chiaramente mandato e ruolo commerciale e documenta i criteri di valutazione.'],
    productUses:['Produzione alimentare e applicazioni industriali','Distribuzione all’ingrosso e private label','HORECA e retail specializzato'],
    productQuality:['Requisiti per aflatossine e pesticidi','Umidità, microbiologia e specifica prodotto','COA, codice lotto e tracciabilità','Conformità normativa al mercato target'],
    legalIntro:'La presente informativa fornisce informazioni trasparenti sull’uso del sito CTSEG e sul relativo trattamento dei dati.',
    legalSections:[['Ambito e responsabilità','CTSEG si impegna a mantenere accurate le informazioni aziendali e commerciali. Le richieste di contatto e protezione dati possono essere inviate a info@ctseg.com.tr.'],['Informazioni e finalità','In caso di contatto possiamo trattare nome, azienda, e-mail, telefono, richiesta ed esigenza commerciale, oltre a registri tecnici limitati per la sicurezza. Servono a rispondere, valutare la relazione, proteggere il sito e adempiere obblighi legali.'],['Condivisione, conservazione e sicurezza','Le informazioni sono condivise solo con fornitori necessari di hosting, e-mail, supporto e servizi legali o autorità competenti, nel rispetto della legge. Sono cancellate o anonimizzate quando finalità e termini terminano.'],['Diritti e contatto','Per accesso, rettifica, cancellazione, opposizione e altri diritti, scrivi a info@ctseg.com.tr con dati sufficienti a identificare te e la richiesta.']]
  },
  ru:{
    servicesTitle:'Экспертная поддержка на каждом этапе процесса сорсинга.',servicesLead:'Мы объединяем стратегию, верификацию, коммерческий анализ и исполнение в единую дисциплину принятия решений.',
    productsTitle:'Портфель коммерческих продуктов',productsLead:'Тот же каталог оценивается в каждом рынке по происхождению, качеству по партиям и проверяемым коммерческим условиям.',
    marketsTitle:'Из Турции в Европу и на международные рынки.',marketsLead:'Мы сопоставляем локальные производственные реалии с регуляциями целевого рынка, ожиданиями покупателей и выполнимыми моделями доставки.',
    aboutTitle:'Независимый партнёр для принятия решений, снижающий неопределённость в торговле.',aboutLead:'CTSEG действует на основе доказательств, прозрачности и выполнимости в стратегическом сорсинге и международной торговле.',
    contactTitle:'Начните коммерческий запрос с понятной оценки.',insightsTitle:'Практические материалы для лиц, принимающих решения.',insightsLead:'Краткие руководства на основе доказательств по сорсингу, совокупной стоимости, происхождению, качеству и коммерческим рискам.',
    framework:['Потребность и спецификация','Проверка сторон и документов','Сравнение качества, стоимости и риска','Фиксация решения и исполнения'],
    serviceFaq:['Как начинается проект?','Объём, цель, продукт или услуга, рынок и график уточняются в коротком квалификационном звонке.','Действует ли CTSEG от имени поставщика?','CTSEG чётко декларирует объём мандата и свою коммерческую роль; критерии оценки документируются.'],
    productUses:['Пищевая промышленность и промышленные применения','Оптовая дистрибуция и собственные торговые марки','HORECA и специализированная розница'],
    productQuality:['Требования по афлатоксинам и пестицидам','Влажность, микробиология и спецификация','COA, код партии и прослеживаемость','Соответствие регуляциям целевого рынка'],
    legalIntro:'Настоящее уведомление содержит прозрачную информацию об использовании сайта CTSEG и связанной обработке данных.',
    legalSections:[['Область применения и ответственность','CTSEG стремится поддерживать точность корпоративной и коммерческой информации. Запросы по контактам и защите данных можно направлять на info@ctseg.com.tr.'],['Информация и цели обработки','При обращении могут обрабатываться имя, компания, e-mail, телефон, суть запроса и параметры коммерческой потребности, а также ограниченные технические журналы безопасности. Это необходимо для ответа, оценки сотрудничества, защиты сайта и исполнения закона.'],['Передача, хранение и безопасность','Данные передаются только необходимым провайдерам хостинга, почты, технической поддержки, юридическим консультантам или компетентным органам в соответствии с законом. Они удаляются или анонимизируются по достижении целей и истечении сроков хранения.'],['Права и контакты','Для реализации прав на доступ, исправление, удаление или возражение направьте запрос с подтверждением личности на info@ctseg.com.tr.']]
  },
  fa:{
    servicesTitle:'تخصص برای تمام مراحل تصمیم‌گیری تأمین.',servicesLead:'ما استراتژی، اعتبارسنجی، تحلیل تجاری و اجرا را در یک انضباط تصمیم‌گیری واحد ترکیب می‌کنیم.',
    productsTitle:'سبد محصولات تجاری',productsLead:'یک کاتالوگ در تمام بازارها بر اساس مبدأ شفاف، کیفیت پارت‌محور و شرایط تجاری قابل‌بررسی ارزیابی می‌شود.',
    marketsTitle:'از ترکیه به بازارهای اروپا و بین‌المللی.',marketsLead:'واقعیت‌های تولید محلی را با قوانین بازار هدف، انتظارات خریدار و مدل‌های تحویل قابل اجرا پیوند می‌دهیم.',
    aboutTitle:'شریک مستقل تصمیم‌گیری برای کاهش عدم قطعیت در تجارت.',aboutLead:'CTSEG در پروژه‌های تأمین استراتژیک و تجارت بین‌الملل بر پایه شواهد، شفافیت و قابلیت اجرا فعالیت می‌کند.',
    contactTitle:'نیاز تجاری خود را با یک ارزیابی شفاف آغاز کنید.',insightsTitle:'تحلیل‌های کاربردی برای تصمیم‌گیرندگان.',insightsLead:'راهنماهای مختصر و مبتنی بر شواهد در زمینه تأمین، هزینه کل، مبدأ، کیفیت و ریسک تجاری.',
    framework:['نیاز و مشخصات فنی','اعتبارسنجی طرفین و اسناد','مقایسه کیفیت، هزینه و ریسک','ثبت شفاف تصمیم و اجرا'],
    serviceFaq:['پروژه چگونه آغاز می‌شود؟','دامنه، هدف، کالا یا خدمات، بازار و زمان‌بندی تصمیم‌گیری در یک تماس ارزیابی کوتاه مشخص می‌شود.','آیا CTSEG به نمایندگی از تأمین‌کننده عمل می‌کند؟','CTSEG مأموریت و نقش تجاری خود را به‌طور شفاف اعلام کرده و معیارهای ارزیابی را مستند می‌کند.'],
    productUses:['تولید مواد غذایی و مصارف صنعتی','توزیع عمده و برند اختصاصی (Private Label)','صنایع پذیرایی و هتلداری (HORECA) و خرده‌فروشی تخصصی'],
    productQuality:['الزامات آفلاتوکسین و باقیمانده سموم','رطوبت، میکروبیولوژی و مشخصات فنی محصول','برگه آزمایشگاهی COA، کد پارت و قابلیت ردگیری','انطباق با مقررات و استانداردهای بازار مقصد'],
    legalIntro:'این بیانیه اطلاعات شفافی در مورد استفاده از وب‌سایت CTSEG و فرآیندهای مربوط به پردازش داده‌ها ارائه می‌دهد.',
    legalSections:[['دامنه و مسئولیت','CTSEG برای حفظ صحت اطلاعات سازمانی و تجاری این وب‌سایت تلاش می‌کند. درخواست‌های ارتباطی و حفاظت از داده‌ها را می‌توانید به info@ctseg.com.tr ارسال کنید.'],['اطلاعات و اهداف پردازش','هنگام تماس، نام، شرکت، ایمیل، شماره تماس و اطلاعات مربوط به نیاز تجاری به همراه لاگ‌های فنی محدود امنیتی پردازش می‌شوند. این اطلاعات جهت پاسخگویی، ارزیابی همکاری، حفظ امنیت سایت و انجام تعهدات قانونی به کار می‌روند.'],['اشتراک‌گذاری، نگهداری و امنیت','داده‌ها صرفاً با ارائه‌دهندگان خدمات میزبانی، ایمیل، پشتیبانی فنی و حقوقی لازم یا مراجع ذی‌صلاح قانونی به اشتراک گذاشته می‌شوند و پس از پایان مدت قانونی حذف یا ناشناس‌سازی می‌گردند.'],['حقوق کاربران و تماس','برای دسترسی، اصلاح، حذف یا اعتراض به پردازش داده‌ها، درخواست خود را همراه با اطلاعات هویتی کافی به info@ctseg.com.tr ارسال فرمایید.']]
  },
  zh:{
    servicesTitle:'覆盖跨国采购决策全生命周期的专业护航。',
    servicesLead:'我们将战略规划、主体核验、总拥有成本商业测算与实际落地交付深度统筹于统一的决策框架中。',
    productsTitle:'真实可核验的大宗与特色商品矩阵',
    productsLead:'同一套商品目录，在每个目标市场均基于透明产地、批次级质检报告与真实可靠的商业条款予以严格评估。',
    marketsTitle:'立足土耳其枢纽，联通欧洲与全球大宗贸易市场。',
    marketsLead:'我们将本土制造优势与目标市场的准入法规、买家采购偏好及可落地的端到端物流交付模型精准匹配。',
    aboutTitle:'消除国际贸易不确定性的独立商业决策伙伴。',
    aboutLead:'CTSEG 在战略寻源与跨境贸易协调中，始终坚守证据确凿、高度透明与务实可落地的执业准则。',
    contactTitle:'从一份清晰严谨的商业需求评估开启合作。',
    insightsTitle:'专为商业决策层打造的实战内参。',
    insightsLead:'聚焦大宗采购、总体拥有成本 (TCO)、真实原产地溯源、质量合规与供应链风险管理的精炼指南。',
    framework:['需求与技术规格书定义','交易对手与法定单证核验','品质、成本与潜在风险横向对比','透明决策档案与履约记录'],
    serviceFaq:['商业合作项目如何启动？','通过简短的业务意向沟通，快速界定合作范畴、采购目标、产品规格、目标市场及决策排期。','CTSEG 是否代表特定供应商的利益？','CTSEG 始终以独立第三方身份清晰声明自身商业角色与授权边界，并完整记录各项评估依据。'],
    productUses:['食品加工制造与工业级应用原料','大宗批发分销与品牌商自有品牌 (Private Label) 定制','餐饮酒店渠道 (HORECA) 与高端特色零售'],
    productQuality:['黄曲霉毒素、重金属及农残检测限值','水分活度、微生物指标与精密理化规格','第三方分析质检单 (COA)、批次溯源码与追溯凭证','目标进出口市场官方海关与食品卫生准入合规'],
    legalIntro:'本声明就 CTSEG 官方网站的使用条款及相关业务数据处理流程提供公开透明的说明。',
    legalSections:[['适用范围与权责说明','CTSEG 竭力确保本网站所发布企业与商业信息的准确性。相关商务咨询与数据保护请求可发送至 info@ctseg.com.tr。'],['信息收集与使用目的','当您通过本网站联系我们时，我们可能会处理您的姓名、企业名称、电子邮件、联系电话及具体商业需求，并记录必要的系统安全日志。上述信息仅用于响应业务咨询、评估商业合作、维护网络安全及履行法定合规义务。'],['数据共享、留存与安全保护','相关信息仅在必要范围内与受信任的基础设施托管商、技术支持服务商或依法行使职权的监管机构共享。在处理目的达成且法定留存期届满后，相关数据将被安全删除或匿名化处理。'],['用户权利与联系方式','如需行使数据访问、更正、删除、异议等法定数据保护权利，请将您的身份证明及具体请求发送至 info@ctseg.com.tr。']]
  },
  vi:{
    servicesTitle:'Năng lực chuyên môn cho mọi giai đoạn quyết định thu mua.',
    servicesLead:'Chúng tôi kết hợp chiến lược, thẩm định, phân tích thương mại và thực thi trong một kỷ luật quyết định thống nhất.',
    productsTitle:'Danh mục sản phẩm thương mại có thể xác minh',
    productsLead:'Cùng một danh mục sản phẩm được đánh giá tại mọi thị trường thông qua nguồn gốc minh bạch, chất lượng theo lô và điều khoản thương mại xác thực.',
    marketsTitle:'Từ Thổ Nhĩ Kỳ đến Châu Âu và thị trường quốc tế.',
    marketsLead:'Chúng tôi kết nối thực tế sản xuất tại địa phương với quy định của thị trường mục tiêu, kỳ vọng của người mua và mô hình giao hàng khả thi.',
    aboutTitle:'Đối tác quyết định độc lập giúp giảm thiểu bất định trong thương mại.',
    aboutLead:'CTSEG hoạt động dựa trên bằng chứng, tính minh bạch và khả năng thực thi trong các dự án thu mua chiến lược và thương mại quốc tế.',
    contactTitle:'Bắt đầu nhu cầu thương mại của bạn bằng một đánh giá rõ ràng.',
    insightsTitle:'Góc nhìn thực tiễn dành cho các nhà lãnh đạo và quản lý thu mua.',
    insightsLead:'Các hướng dẫn súc tích, dựa trên bằng chứng về thu mua, tổng chi phí sở hữu, nguồn gốc, chất lượng và quản trị rủi ro.',
    framework:['Xác định yêu cầu và thông số kỹ thuật','Thẩm định đối tác và chứng từ pháp lý','So sánh chất lượng, tổng chi phí và rủi ro','Hồ sơ quyết định và nhật ký thực thi minh bạch'],
    serviceFaq:['Dự án bắt đầu như thế nào?','Phạm vi, mục tiêu, sản phẩm/dịch vụ, thị trường và tiến độ quyết định được làm rõ qua một buổi trao đổi sơ tuyển ngắn gọn.','CTSEG có đại diện cho nhà cung cấp không?','CTSEG công khai rõ ràng nhiệm vụ và vai trò thương mại của mình, đồng thời văn bản hóa toàn bộ tiêu chí đánh giá độc lập.'],
    productUses:['Sản xuất thực phẩm và ứng dụng nguyên liệu công nghiệp','Phân phối bán buôn và gia công nhãn hàng riêng (Private Label)','Kênh dịch vụ ẩm thực (HORECA) và bán lẻ chuyên biệt'],
    productQuality:['Yêu cầu kiểm soát độc tố Aflatoxin và dư lượng thuốc BVTV','Độ ẩm, chỉ tiêu vi sinh và bảng thông số kỹ thuật chuẩn','Chứng chỉ phân tích (COA), mã lô hàng và khả năng truy xuất','Tuân thủ đầy đủ quy chuẩn thị trường đích'],
    legalIntro:'Thông báo này cung cấp thông tin minh bạch về việc sử dụng trang web CTSEG và quy trình xử lý dữ liệu liên quan.',
    legalSections:[['Phạm vi và trách nhiệm','CTSEG nỗ lực duy trì tính chính xác của thông tin doanh nghiệp và thương mại trên website này. Yêu cầu liên hệ và bảo vệ dữ liệu có thể gửi về info@ctseg.com.tr.'],['Thông tin xử lý và mục đích','Khi bạn liên hệ, chúng tôi có thể xử lý tên, công ty, email, số điện thoại và thông tin nhu cầu thương mại, cùng các bản ghi kỹ thuật giới hạn để bảo mật. Dữ liệu này dùng để phản hồi, đánh giá quan hệ hợp tác và tuân thủ nghĩa vụ pháp lý.'],['Chia sẻ, lưu trữ và bảo mật dữ liệu','Thông tin chỉ được chia sẻ với các nhà cung cấp dịch vụ lưu trữ, email, hỗ trợ kỹ thuật cần thiết hoặc cơ quan có thẩm quyền theo luật định. Dữ liệu sẽ được xóa hoặc ẩn danh khi hết thời hạn lưu trữ theo luật.'],['Quyền của bạn và thông tin liên hệ','Để thực hiện quyền truy cập, chỉnh sửa, xóa hoặc phản đối xử lý dữ liệu, vui lòng gửi yêu cầu kèm thông tin nhận diện tới info@ctseg.com.tr.']]
  }
};

export function localizedPath(lang: Locale | string, key: string, id?: string): string {
  const safeLang = (locales as readonly string[]).includes(lang) ? (lang as Locale) : 'en';
  const pathLang = key === 'medical' ? lang : safeLang;
  if (key === 'home') return pathLang === 'tr' ? '/' : `/${pathLang}/`;
  if (key === 'medical') return pathLang === 'tr' ? '/medical/reflex-disposable-gloves/' : `/${pathLang}/medical/reflex-disposable-gloves/`;
  if (key === 'how-we-work') return `/${pathLang}/${specialSlugs['how-we-work'][safeLang]}/`;
  if (key === 'scenarios') return `/${pathLang}/${specialSlugs.scenarios[safeLang]}/`;
  if (key === 'guides' && id) {
    if (safeLang === 'tr' || safeLang === 'en') {
      const guideSlug = guideSlugs[id as GuideId]?.[safeLang];
      if (guideSlug) return `/${safeLang}/${sectionSlugs.insights[safeLang]}/${guideSlug}/`;
    }
    return localizedPath(safeLang, 'insights');
  }
  const section = sectionSlugs[key]?.[safeLang] || sectionSlugs[key]?.en;
  if (key === 'services' && id) return `/${pathLang}/${section}/${services[id as keyof typeof services]?.slugs[safeLang] || id}/`;
  if (key === 'products' && id) return `/${pathLang}/${section}/${products[id as keyof typeof products]?.slugs[safeLang] || id}/`;
  if (key === 'insights' && id) return `/${pathLang}/${section}/${insights[id as keyof typeof insights]?.slugs[safeLang] || id}/`;
  if (key === 'legal' && id) return `/${pathLang}/${legal[id as keyof typeof legal]?.slugs[safeLang] || id}/`;
  return `/${pathLang}/${section}/`;
}

export function routeAlternates(key: string, id?: string): Record<string, string> {
  if (key === 'medical') {
    return {
      tr: 'https://ctseg.com.tr/medical/reflex-disposable-gloves/',
      en: 'https://ctseg.com.tr/en/medical/reflex-disposable-gloves/',
      de: 'https://ctseg.com.tr/de/medical/reflex-disposable-gloves/',
      it: 'https://ctseg.com.tr/it/medical/reflex-disposable-gloves/',
      ru: 'https://ctseg.com.tr/ru/medical/reflex-disposable-gloves/',
      fa: 'https://ctseg.com.tr/fa/medical/reflex-disposable-gloves/',
      zh: 'https://ctseg.com.tr/zh/medical/reflex-disposable-gloves/',
      vi: 'https://ctseg.com.tr/vi/medical/reflex-disposable-gloves/',
      sq: 'https://ctseg.com.tr/sq/medical/reflex-disposable-gloves/',
      mk: 'https://ctseg.com.tr/mk/medical/reflex-disposable-gloves/',
      sr: 'https://ctseg.com.tr/sr/medical/reflex-disposable-gloves/'
    };
  }
  return Object.fromEntries(locales.map((lang) => [lang, `https://ctseg.com.tr${localizedPath(lang, key, id)}`])) as Record<Locale, string>;
}

