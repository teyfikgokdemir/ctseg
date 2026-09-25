import { guideSlugs, specialSlugs, type GuideId } from './completion';
import { activeLocales, localeByCode, siteLocales, type SiteLocale } from './locales';
import { syriaMarketContent } from './syria-market';

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
    aboutHeading: 'Türkiye’nin Küresel Ticaret ve Tedarik Köprüsü',
    aboutBody: 'CTSEG Sanayi ve Ticaret Limited Şirketi, 2022 yılında İstanbul’da kuruldu. CTSEG; Türk sanayici ve üreticilerinin Avrupa, Körfez ve Asya pazarlarına ihracat açılımını yönetirken, uluslararası alıcılara Türkiye ve bölgesel ticaret koridorlarında bağımsız tedarikçi doğrulaması, stratejik hammadde tedariği, RFQ yönetimi ve ticari koordinasyon sunar.',
    labels: { name: 'Şirket adı', founder: 'Kurucu', founded: 'Kuruluş yılı', headquarters: 'Merkez' },
    headquarters: 'Tuzla, İstanbul, Türkiye',
    footerLocation: 'Tuzla, İstanbul, Türkiye'
  },
  en: {
    aboutHeading: 'Two-Way Global Trade & Strategic Sourcing Gateway',
    aboutBody: 'CTSEG Industry and Trade Limited Company was founded in Istanbul in 2022. Operating as an independent B2B commercial gateway, CTSEG facilitates export market entry for Turkish manufacturers while delivering factory verification, strategic raw material sourcing, and end-to-end contract coordination for international buyers across Europe, Asia, and the Middle East.',
    labels: { name: 'Company name', founder: 'Founder', founded: 'Year established', headquarters: 'Headquarters' },
    headquarters: 'Tuzla, Istanbul, Türkiye',
    footerLocation: 'Tuzla, Istanbul, Türkiye'
  },
  de: {
    aboutHeading: 'Zwei-Wege-Handelsbrücke & Strategisches Sourcing',
    aboutBody: 'CTSEG Industrie und Handel GmbH verbindet als unabhängige Handels- und Sourcing-Plattform türkische Hersteller mit europäischen Märkten und unterstützt Unternehmen aus der DACH-Region bei Nearshoring, Werksprüfungen, Rohstoffbeschaffung und verlässlicher Lieferkettenkoordination.',
    labels: { name: 'Unternehmensname', founder: 'Gründer', founded: 'Gründungsjahr', headquarters: 'Hauptsitz' },
    headquarters: 'Tuzla, Istanbul, Türkei',
    footerLocation: 'Tuzla, Istanbul, Türkei'
  },
  it: {
    aboutHeading: 'Ponte Commerciale Bilaterale e Sourcing Strategico',
    aboutBody: 'CTSEG affianca le aziende nell’espansione export e nel nearshoring strategico tra Turchia, Europa e mercati internazionali, fornendo audit di fabbrica indipendenti, fornitura di materie prime industriali e coordinamento contrattuale B2B.',
    labels: { name: 'Nome dell’azienda', founder: 'Fondatore', founded: 'Anno di fondazione', headquarters: 'Sede' },
    headquarters: 'Tuzla, Istanbul, Turchia',
    footerLocation: 'Tuzla, Istanbul, Turchia'
  },
  ru: {
    aboutHeading: 'Двусторонний торговый мост и стратегический сорсинг',
    aboutBody: 'Компания CTSEG выступает независимым торгово-сорсинговым шлюзом между Турцией, Европой и Евразией, организуя как экспорт турецких производителей на внешние рынки, так и аудит производств, сорсинг сырья и контрактное сопровождение для международных импортеров.',
    labels: { name: 'Компания', founder: 'Основатель', founded: 'Год основания', headquarters: 'Главный офис' },
    headquarters: 'Tuzla, Стамбул, Турция',
    footerLocation: 'Тузла, Стамбул, Турция'
  },
  fa: {
    aboutHeading: 'گذرگاه تجاری دوسویه و تأمین استراتژیک بین‌المللی',
    aboutBody: 'شرکت CTSEG به عنوان یک پلتفرم مستقل تجاری، تسهیل‌کننده صادرات و واردات بین بازارهای منطقه‌ای، ترکیه و اروپا است و خدمات اعتبارسنجی کارخانجات، تطبیق تجاری B2B، تأمین مواد اولیه استراتژیک و مدیریت اسناد محموله را ارائه می‌دهد.',
    labels: { name: 'نام شرکت', founder: 'بنیان‌گذار', founded: 'سال تأسیس', headquarters: 'دفتر مرکزی' },
    headquarters: 'توزلا، استانبول، ترکیه',
    footerLocation: 'توزلا، استانبول، ترکیه'
  },
  zh: {
    aboutHeading: '立足伊斯坦布尔，构筑中土与泛欧双向商贸枢纽',
    aboutBody: 'CTSEG 工业与贸易有限公司立足伊斯坦布尔核心物流走廊。一方面协助中国出海企业与大宗贸易商以土耳其为支点开拓欧洲及中东市场并开展属地化供应链核验，另一方面为跨国买家提供土耳其优质工业制造、特色农产品原产地直采与端到端贸易协同。',
    labels: { name: '公司名称', founder: '创始人', founded: '创立年份', headquarters: '总部地址' },
    headquarters: '土耳其伊斯坦布尔图兹拉 (Tuzla, Istanbul, Türkiye)',
    footerLocation: '土耳其伊斯坦布尔图兹拉'
  },
  vi: {
    aboutHeading: 'Cầu Nối Thương Mại Hai Chiều & Thu Mua Chiến Lược Toàn Cầu',
    aboutBody: 'Công ty TNHH Công nghiệp và Thương mại CTSEG đóng vai trò là hành lang thương mại chiến lược hai chiều giữa Việt Nam, Thổ Nhĩ Kỳ và Châu Âu. Chúng tôi hỗ trợ các doanh nghiệp Đông Nam Á mở rộng xuất khẩu sang Thổ Nhĩ Kỳ và thị trường EU, đồng thời cung cấp giải pháp thẩm định nhà xưởng, thu mua nguyên liệu công nghiệp và điều phối thương mại B2B an toàn.',
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
  about: string; contact: string; quote: string; menu: string; close: string;
  language: string; readMore: string; allProducts: string; allServices: string;
  origin: string; quality: string; logistics: string; applications: string;
  faq: string; related: string; updated: string; details: string;
  cookieTitle: string; cookieCopy: string; accept: string; reject: string; rights: string;
  samplePolicy: string; sampleText: string; complianceText: string; contactLead: string; emptyInsights: string;
}> = {
  tr: {
    home: 'Ana Sayfa', services: 'Hizmetler', products: 'Ticari Ürünler', markets: 'Pazarlar', insights: 'İçgörüler',
    about: 'Hakkımızda', contact: 'İletişim', quote: 'Teklif İste', menu: 'Menüyü aç', close: 'Menüyü kapat',
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
    about: 'About', contact: 'Contact', quote: 'Request a Quote', menu: 'Open menu', close: 'Close menu',
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
    about: 'Über uns', contact: 'Kontakt', quote: 'Angebot anfragen', menu: 'Menü öffnen', close: 'Menü schließen',
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
    about: 'Chi siamo', contact: 'Contatti', quote: 'Richiedi un’offerta', menu: 'Apri menu', close: 'Chiudi menu',
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
    about: 'О компании', contact: 'Контакты', quote: 'Запросить коммерческое предложение', menu: 'Открыть меню', close: 'Закрыть меню',
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
    about: 'درباره ما', contact: 'تماس', quote: 'درخواست پیش‌فاکتور', menu: 'باز کردن منو', close: 'بستن منو',
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
    about: '关于我们', contact: '商务对接', quote: '发起询价', menu: '打开导航', close: '关闭导航',
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
    about: 'Về chúng tôi', contact: 'Liên hệ', quote: 'Yêu cầu báo giá', menu: 'Mở menu', close: 'Đóng menu',
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
    manifestoTitle:'Uluslararası ticaret, sıradan bir aracı listesinden fazlasıdır.',
    manifestoText:'CTSEG; ihracatta küresel pazar eşleştirmesi, ithalatta ise üretici keşfi, fabrika doğrulaması, TCO maliyet optimizasyonu ve sözleşme güvencesini tek bir ticari disiplinde birleştirir.',
    portfolioTitle:'Stratejik Ticaret ve Tedarik Koridorları',
    portfolioText:'Bu seçki, CTSEG’in Türk sanayisi, gıda hammaddeleri ve medikal/endüstriyel sarf kategorilerindeki çift yönlü bölgesel ticaret evrenini temsil eder; çeşitler parti spesifikasyonları ve resmi akreditasyonlarla doğrulanır.',
    marketsKicker:'İhracat açılımı · Menşe doğrulaması · TCO analizi · Teslim güvencesi',
    productImageNote:'Görsel, ürün kategorisini temsil eder; çeşit özellikleri teknik veri föyü (TDS) ve parti belgeleriyle doğrulanır.'
  },
  en:{
    manifestoTitle:'Global trade is more than a broker contact list.',
    manifestoText:'CTSEG unifies outbound export expansion, factory verification, strategic raw material sourcing, and total cost of ownership (TCO) discipline into a single cross-border operating architecture.',
    portfolioTitle:'Strategic Trade & Sourcing Corridors',
    portfolioText:'This portfolio represents CTSEG’s two-way regional trade network spanning industrial goods, agricultural raw materials, and certified PPE supplies across Eurasia and international markets.',
    marketsKicker:'Export expansion · Origin verification · TCO analysis · Contract delivery',
    productImageNote:'The image represents the product category; technical specifications and batch parameters are verified via formal TDS documentation.'
  },
  de:{
    manifestoTitle:'Globaler Handel ist mehr als ein Zwischenhändler-Kontakt.',
    manifestoText:'CTSEG vereint Nearshoring-Exportförderung, Werksaudits vor Ort, strategische Rohstoffbeschaffung und verlässliche TCO-Kostenkontrolle in einer unabhängigen Handelsdisziplin.',
    portfolioTitle:'Strategische Handels- & Sourcing-Korridore',
    portfolioText:'Diese Auswahl steht für das bilaterale Handels- und Sourcing-Netzwerk von CTSEG für Industrieerzeugnisse, Agrarrohstoffe und medizinisches Verbrauchsmaterial.',
    marketsKicker:'Exportförderung · Herkunftsprüfung · TCO-Kostenanalyse · Vertragssicherheit',
    productImageNote:'Das Bild repräsentiert die Produktkategorie; Sortenmerkmale werden über technische Datenblätter (TDS) und Chargendokumente geprüft.'
  },
  it:{
    manifestoTitle:'Il commercio globale va oltre un elenco di intermediari.',
    manifestoText:'CTSEG integra espansione export, audit dei produttori, approvvigionamento di materie prime e controllo dei costi TCO in un’unica architettura commerciale indipendente.',
    portfolioTitle:'Corridoi Commerciali e di Sourcing Strategico',
    portfolioText:'Questa selezione rappresenta la rete di commercio e approvvigionamento bilaterale di CTSEG per forniture industriali, materie prime agricole e dispositivi certificati.',
    marketsKicker:'Sviluppo export · Verifica origine · Analisi TCO · Consegna contrattuale',
    productImageNote:'L’immagine rappresenta la categoria; le caratteristiche tecniche sono verificate tramite scheda tecnica (TDS) e documenti di lotto.'
  },
  ru:{
    manifestoTitle:'Международная торговля — больше, чем список посредников.',
    manifestoText:'CTSEG объединяет экспортный выход на внешние рынки, проверку фабрик, сорсинг сырья и оптимизацию совокупной стоимости владения (TCO) в единую систему торговых решений.',
    portfolioTitle:'Стратегические торговые и сорсинговые коридоры',
    portfolioText:'Подборка отражает двустороннюю сеть CTSEG по поставкам промышленной продукции, аграрного сырья и сертифицированных расходных материалов в Евразийском регионе.',
    marketsKicker:'Развитие экспорта · Верификация происхождения · Анализ TCO · Надежность контрактов',
    productImageNote:'Изображение представляет категорию; характеристики проверяются по техническим паспортам (TDS) и документам на партию.'
  },
  fa:{
    manifestoTitle:'تجارت بین‌الملل فراتر از یک لیست واسطه ساده است.',
    manifestoText:'CTSEG توسعه صادرات، اعتبارسنجی مستقل کارخانجات، تأمین استراتژیک مواد اولیه و بهینه‌سازی هزینه کل مالکیت (TCO) را در یک ساختار تجاری یکپارچه پیوند می‌دهد.',
    portfolioTitle:'راهگذرهای تجاری و تأمین استراتژیک',
    portfolioText:'این سبد نشان‌دهنده شبکه تجارت دوسویه CTSEG در حوزه کالاهای صنعتی، مواد اولیه کشاورزی و اقلام مصرفی استاندارد در سطح بین‌المللی است.',
    marketsKicker:'توسعه صادرات · اعتبارسنجی مبدأ · تحلیل TCO · تضمین قرارداد',
    productImageNote:'تصویر نشان‌دهنده دسته‌بندی است؛ ویژگی‌های فنی از طریق شناسنامه فنی (TDS) و اسناد محموله تأیید می‌شوند.'
  },
  zh:{
    manifestoTitle:'全球商贸绝非简单的中间商名录撮合。',
    manifestoText:'CTSEG 将中国企业出海泛欧枢纽搭建、土耳其本地工厂深度验厂、工业制造与特色农产品源头集采以及全生命周期 TCO 成本控制熔铸为一体化跨国商贸执行体系。',
    portfolioTitle:'欧亚战略商贸与大宗寻源走廊',
    portfolioText:'展示了 CTSEG 跨越工业制成品、精选农副大宗原料及合规防护耗材的双向区域商贸版图；技术指标均以正式技术规格书 (TDS) 与出厂化验单为准。',
    marketsKicker:'出海落地 · 真实原产地核验 · TCO全成本优化 · 履约协同',
    productImageNote:'图示代表所属产品品类；具体规格容差均以双语技术规格书 (TDS) 与检测报告 (COA) 为准。'
  },
  vi:{
    manifestoTitle:'Thương mại quốc tế vượt xa một danh bạ môi giới thông thường.',
    manifestoText:'CTSEG kết hợp mở rộng xuất khẩu hai chiều, thẩm định nhà xưởng độc lập, thu mua nguyên liệu chiến lược và tối ưu tổng chi phí sở hữu (TCO) vào một hệ thống vận hành thương mại chuẩn mực.',
    portfolioTitle:'Hành Lang Thương Mại & Thu Mua Chiến Lược',
    portfolioText:'Danh mục này đại diện cho mạng lưới thương mại hai chiều của CTSEG đối với hàng công nghiệp, nông sản nguyên liệu và vật tư tiêu hao đạt chuẩn quốc tế.',
    marketsKicker:'Mở rộng xuất khẩu · Xác minh xuất xứ · Phân tích TCO · Đảm bảo hợp đồng',
    productImageNote:'Hình ảnh đại diện cho danh mục; thông số kỹ thuật được xác thực bằng phiếu thông số kỹ thuật (TDS) và chứng từ lô hàng.'
  }
};

export const insightIds = [
  'strategic-vs-procurement',
  'supplier-selection',
  'supplier-risk',
  'total-cost',
  'rfq',
  'supply-chain-risk',
  'origin-compliance',
  'nearshoring-europe-turkey',
  'turkey-manufacturer-sourcing',
  'china-vs-turkey-sourcing',
  'vietnam-turkey-trade-routes',
  'iran-turkey-commodity-corridors',
  'private-label-contract-manufacturing',
  'supplier-due-diligence',
  'turkey-export-market-entry',
  'landed-cost-moq-optimization',
  'trade-house-vs-broker'
] as const;
export const insights: Record<(typeof insightIds)[number], { slugs: Localized; titles: Localized; descriptions: Localized; answers: Localized }> = {
  'strategic-vs-procurement': {
    slugs:{tr:'stratejik-tedarik-ve-satin-alma-farki',en:'strategic-sourcing-vs-procurement',de:'strategische-beschaffung-vs-einkauf',it:'sourcing-strategico-vs-acquisti',ru:'strategicheskiy-sorsing-i-zakupki',fa:'strategic-sourcing-vs-procurement',zh:'strategic-sourcing-vs-procurement',vi:'strategic-sourcing-vs-procurement'},
    titles:{
      tr:'Stratejik Tedarik ve Satın Alma Arasındaki Fark: 7 Adım & TCO',
      en:'Strategic Sourcing vs Procurement: Differences, Process & Strategy',
      de:'Strategische Beschaffung vs. Einkauf: Unterschiede, 7-Schritte & TCO',
      it:'Sourcing Strategico vs Acquisti: Differenze, Processo in 7 Passi e TCO',
      ru:'Стратегический сорсинг и закупки: отличия, 7 этапов и TCO',
      fa:'تفاوت تأمین استراتژیک و خرید (Procurement): فرآیند ۷ مرحله‌ای و TCO',
      zh:'战略采购 vs 事务性采购：核心区别、7步法寻源流程与TCO总拥有成本',
      vi:'Thu Mua Chiến Lược vs Mua Sắm Thông Thường: Khác Biệt, Quy Trình 7 Bước & TCO'
    },
    descriptions:{
      tr:'Stratejik tedarik ve satın alma arasındaki farklar; operasyonel satın alma, stratejik sourcing 7 adım süreci, TCO toplam maliyet ve risk yönetimi rehberi.',
      en:'Strategic sourcing vs procurement: a practical B2B comparison guide covering upstream sourcing strategy, downstream purchasing, the 7-step process, TCO and risk controls.',
      de:'Strategische Beschaffung vs. operativer Einkauf: B2B-Leitfaden zu TCO-Gesamtkosten, Lieferantenprüfung, 7-Schritte-Sourcing-Prozess und Risikomanagement.',
      it:'Confronto tra sourcing strategico e acquisti operativi: guida B2B su costo totale di possesso (TCO), verifica fornitori e gestione del rischio.',
      ru:'Сравнение стратегического сорсинга и операционных закупок: B2B-руководство по совокупной стоимости владения (TCO), проверке контрагентов и рискам.',
      fa:'راهنمای جامع B2B برای تفاوت تأمین استراتژیک و خرید عملیاتی، فرآیند ۷ مرحله‌ای sourcing، تحلیل هزینه کل مالکیت (TCO) و اعتبارسنجی تأمین‌کننده.',
      zh:'深度对比战略采购 (Strategic Sourcing) 与事务性采购 (Procurement)：涵盖7步寻源流程、供应商尽职调查、TCO总拥有成本模型与供应链风险防范。',
      vi:'Hướng dẫn so sánh thu mua chiến lược (Strategic Sourcing) và mua sắm thông thường (Procurement): mô hình TCO, quy trình 7 bước và thẩm định nhà cung cấp.'
    },
    answers:{
      tr:'Satın alma sipariş ve işlem yürütür; stratejik tedarik ise talep, pazar araştırması, tedarikçi doğrulaması, TCO toplam maliyet, risk ve performansı uzun vadeli bir karar sisteminde yönetir.',
      en:'Procurement executes purchasing and transactional operations. Strategic sourcing is the broader, long-term decision framework that manages category spend, supply markets, supplier qualification, total cost of ownership (TCO), risk, negotiation and performance monitoring before and after the award.',
      de:'Der operative Einkauf führt Bestellungen aus; die strategische Beschaffung steuert Bedarfe, Beschaffungsmärkte, Lieferantenprüfung, TCO-Gesamtkosten und Risiken langfristig.',
      it:'Gli acquisti operativi eseguono le transazioni; il sourcing strategico governa fabbisogni, mercati, qualifica fornitori, costo totale di possesso (TCO) e rischi nel lungo periodo.',
      ru:'Закупки выполняют операционные заказы; стратегический сорсинг управляет категорией, рынком, проверкой контрагентов, TCO и рисками в долгосрочной перспективе.',
      fa:'خرید عملیاتی، سفارشات و پرداخت‌ها را اجرا می‌کند؛ تأمین استراتژیک تقاضا، بازار، اعتبارسنجی تأمین‌کننده، هزینه کل مالکیت (TCO) و ریسک را در یک سیستم مدیریت می‌نماید.',
      zh:'事务性采购侧重于被动执行订单下达与日常对账；而战略采购则是将市场供需趋势、供应商资质核验、总体拥有成本 (TCO)、商务谈判与履约指标作为长效决策系统进行全局统筹。',
      vi:'Mua sắm thông thường thực hiện đơn hàng tức thời; thu mua chiến lược quản lý nhu cầu, thị trường, thẩm định nhà cung cấp, tổng chi phí sở hữu (TCO) và rủi ro như một hệ thống dài hạn.'
    }
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
  },
  'nearshoring-europe-turkey': {
    slugs:{tr:'avrupa-turkiye-nearshoring-tedarik-koridoru',en:'europe-turkey-nearshoring-supply-corridor',de:'nearshoring-europa-tuerkei-lieferkette',it:'nearshoring-europa-turchia-catena-fornitura',ru:'nearshoring-evropa-turtsiya-cepochka-postavok',fa:'nearshoring-europe-turkey-supply-corridor',zh:'nearshoring-europe-turkey-supply-corridor',vi:'nearshoring-europe-turkey-supply-corridor'},
    titles:{
      tr:'Avrupa-Türkiye Nearshoring Koridoru: Tedarik Zincirini Yakınlaştırma Rehberi',
      en:'Europe-Turkey Nearshoring Corridor: Strategic Supply Chain Realignment',
      de:'Nearshoring-Korridor Europa–Türkei: Strategische Neuausrichtung der Lieferkette',
      it:'Corridoio Nearshoring Europa-Turchia: Riorganizzazione Strategica della Filiera',
      ru:'Коридор ниршоринга Европа–Турция: стратегическая реорганизация поставок',
      fa:'گذرگاه نیرشورینگ اروپا–ترکیه: بازآرایی استراتژیک زنجیره تأمین',
      zh:'欧洲-土耳其近岸外包贸易走廊：跨国供应链近地化重构与风险对冲策略',
      vi:'Hành lang Nearshoring Châu Âu–Thổ Nhĩ Kỳ: Tái cấu trúc chuỗi cung ứng chiến lược'
    },
    descriptions:{
      tr:'Avrupa sanayisi için Türkiye nearshoring avantajları; 3-5 günlük karayolu teslimatı, Gümrük Birliği ve karbon ayak izi optimizasyonu.',
      en:'Nearshoring from Turkey to Europe: 3-5 day transit times, EU Customs Union benefits, CBAM carbon compliance and dual-sourcing resilience.',
      de:'Nearshoring aus der Türkei nach Europa: 3–5 Tage Lkw-Laufzeit, Zollunion, CBAM-Klimavorgaben und Resilienz durch Dual-Sourcing.',
      it:'Nearshoring dalla Turchia all’Europa: tempi di transito di 3-5 giorni, Unione Doganale, conformità CBAM e resilienza dual-sourcing.',
      ru:'Преимущества ниршоринга из Турции в Европу: автодоставка за 3–5 дней, Таможенный союз ЕС, нормы CBAM и устойчивость поставок.',
      fa:'مزایای نیرشورینگ از ترکیه به اروپا: حمل جاده‌ای ۳ تا ۵ روزه، اتحادیه گمرکی، استانداردهای کربن CBAM و پایداری تأمین چندگانه.',
      zh:'深度解析欧洲制造业向土耳其近岸转移的核心动因：3至5天公路速达、欧盟关税同盟零关税待遇、CBAM碳关税应对及双供应链冗余避险机制。',
      vi:'Lợi ích nearshoring từ Thổ Nhĩ Kỳ sang Châu Âu: thời gian vận tải bộ 3-5 ngày, Hiệp định Hải quan, tuân thủ CBAM và khả năng phục hồi nguồn cung.'
    },
    answers:{
      tr:'Türkiye, Avrupa sanayisine 3-5 günlük karayolu terminleri, AB Gümrük Birliği muafiyeti ve düşük karbonlu lojistikle Asya bağımlılığını azaltan stratejik bir nearshoring üssü sunar.',
      en:'Turkey offers European buyers a decisive nearshoring hedge with 3-5 day overland road freight, duty-free EU Customs Union integration, and significantly lower Scope 3 transport emissions compared to East Asian maritime routes.',
      de:'Die Türkei bietet europäischen Einkäufern eine strategische Nearshoring-Alternative mit 3–5 Tagen Lkw-Transit, Zollunionsvorteilen und reduzierten Transportemissionen gegenüber asiatischen Seefrachtrouten.',
      it:'La Turchia offre agli acquirenti europei un solido presidio di nearshoring con transito su gomma in 3-5 giorni, esenzione daziaria dell’Unione Doganale ed emissioni Scope 3 inferiori rispetto alle rotte marittime asiatiche.',
      ru:'Турция выступает ключевым узлом ниршоринга для европейских компаний благодаря доставке автотранспортом за 3–5 дней, преференциям Таможенного союза и снижению углеродного следа по сравнению с морскими маршрутами из Азии.',
      fa:'ترکیه با ارائه ترانزیت جاده‌ای ۳ تا ۵ روزه، معافیت‌های اتحادیه گمرکی اروپا و کاهش انتشارات کربنی نسبت به مسیرهای دریایی آسیا، پایگاه راهبردی نیرشورینگ برای خریداران اروپایی است.',
      zh:'土耳其凭借泛欧3至5天卡车点对点直达时效、欧盟关税同盟项下工业品免税准入以及显著低于东亚海运的碳足迹，成为欧洲跨国企业化解供应链阻断风险的核心近岸基地。',
      vi:'Thổ Nhĩ Kỳ mang lại giải pháp nearshoring tối ưu cho người mua Châu Âu với 3-5 ngày vận chuyển đường bộ, miễn thuế theo Hiệp định Hải quan và giảm thiểu phát thải Scope 3 so với đường biển Châu Á.'
    }
  },
  'turkey-manufacturer-sourcing': {
    slugs:{tr:'turkiyeden-uretici-tedarigi-fabrika-secimi',en:'sourcing-from-turkish-manufacturers-factory-audits',de:'beschaffung-tuerkische-hersteller-werkspruefung',it:'sourcing-produttori-turchi-audit-fabbrica',ru:'sorsing-turetskie-proizvoditeli-audit-fabrik',fa:'sourcing-from-turkish-manufacturers-factory-audits',zh:'sourcing-from-turkish-manufacturers-factory-audits',vi:'sourcing-from-turkish-manufacturers-factory-audits'},
    titles:{
      tr:'Türkiye’den Üretici Tedariği: Doğrudan Fabrika Seçimi ve Saha Denetimi',
      en:'Sourcing from Turkish Manufacturers: Factory Selection & On-Site Audits',
      de:'Sourcing bei türkischen Herstellern: Fabrikauswahl & Vor-Ort-Audits',
      it:'Sourcing da Produttori Turchi: Selezione delle Fabbriche e Audit sul Posto',
      ru:'Сорсинг у турецких производителей: выбор фабрик и выездной аудит',
      fa:'تأمین از تولیدکنندگان ترکیه: شناسایی کارخانه‌ها و ممیزی میدانی',
      zh:'土耳其源头工厂直采与验厂实务：生产基地筛选、设备核验与现场尽调',
      vi:'Thu mua trực tiếp từ nhà sản xuất Thổ Nhĩ Kỳ: Tuyển chọn nhà máy và thẩm định thực địa'
    },
    descriptions:{
      tr:'Türkiye’deki sanayi havzalarında doğrudan üretici bulma; aracıları eleme, makine kapasitesi doğrulama ve teknik fabrika denetimi.',
      en:'Identifying genuine manufacturers across Turkey’s industrial hubs; eliminating broker layers, verifying machinery capacity and on-site audit protocol.',
      de:'Herstellersourcing in türkischen Industriezentren: Zwischenhändler filtern, Maschinenkapazitäten prüfen und Vor-Ort-Audits strukturieren.',
      it:'Identificare produttori autentici nei poli industriali turchi; eliminare intermediari opachi, verificare impianti e protocolli di audit.',
      ru:'Поиск прямых производителей в промышленных кластерах Турции; отсечение посредников, аудит мощностей станков и протоколы проверки.',
      fa:'شناسایی تولیدکنندگان دست‌اول در قطب‌های صنعتی ترکیه؛ حذف واسطه‌ها، راستی‌آزمایی ظرفیت ماشین‌آلات و پروتکل ممیزی کارخانه.',
      zh:'系统梳理伊斯坦布尔、布尔萨、伊兹密尔等土耳其制造业集群：剔除皮包中间商、核实设备实际产出工时与权威实地验厂全流程指南。',
      vi:'Tìm kiếm nhà sản xuất thực tế tại các cụm công nghiệp Thổ Nhĩ Kỳ; loại bỏ trung gian thương mại, xác minh công suất máy móc và quy trình kiểm toán nhà xưởng.'
    },
    answers:{
      tr:'Türkiye’den tedarikte başarı, aracı tüccarlar ile gerçek imalatçıları ticari sicil, enerji tüketimi ve makine parkuru düzeyinde sahada doğrulamaktan geçer.',
      en:'Direct manufacturing sourcing in Turkey succeeds when buyers bypass broker markups by auditing physical facilities, machine registries, electricity load capacity, and workforce scale before contractual commitments.',
      de:'Erfolgreiches Herstellersourcing in der Türkei erfordert die unabhängige Überprüfung von Gewerberegistern, Maschinenparks und realen Fertigungskapazitäten vor Ort, um Intransparenz auszuschließen.',
      it:'Il sourcing diretto in Turchia ha successo verificando sul campo registri industriali, impianti produttivi, consumi energetici e manodopera reale prima di emettere acconti contrattuali.',
      ru:'Эффективный сорсинг на турецких фабриках строится на выездном аудите оборудования, подтверждении энергопотребления и юридической чистоты для исключения посреднических наценок.',
      fa:'موفقیت در تأمین مستقیم از ترکیه در گرو ممیزی میدانی خطوط تولید، راستی‌آزمایی قبوض مصرف صنعتی و بررسی سوابق رسمی شرکت پیش از واریز پیش‌پرداخت است.',
      zh:'在土耳其开展源头直采的关键在于穿透贸易中介表象，通过调取工商能耗底册、实地盘点数控机床与产能工时，在支付预付款前完成现场技术核验。',
      vi:'Thu mua thành công tại Thổ Nhĩ Kỳ đòi hỏi người mua phải kiểm tra thực địa dây chuyền thiết bị, phụ tải điện công nghiệp và hồ sơ lao động để loại bỏ các tầng trung gian.'
    }
  },
  'china-vs-turkey-sourcing': {
    slugs:{tr:'cin-turkiye-tedarik-karsilastirmasi-tco-analizi',en:'china-vs-turkey-sourcing-total-cost-analysis',de:'china-vs-tuerkei-sourcing-tco-analyse',it:'cina-vs-turchia-sourcing-analisi-tco',ru:'sravnenie-sorsinga-kitay-turtsiya-analiz-tco',fa:'china-vs-turkey-sourcing-total-cost-analysis',zh:'china-vs-turkey-sourcing-total-cost-analysis',vi:'china-vs-turkey-sourcing-total-cost-analysis'},
    titles:{
      tr:'Çin ve Türkiye Tedarik Karşılaştırması: TCO, Termin ve Esneklik Analizi',
      en:'China vs Turkey Sourcing: Landed Cost, Lead Time & Operational Agility',
      de:'Sourcing in China vs. Türkei: Gesamtanlandekosten, Lieferzeit & Flexibilität',
      it:'Sourcing in Cina vs Turchia: Costo Sbarcato, Tempi di Consegna e Flessibilità',
      ru:'Сорсинг в Китае и Турции: совокупная себестоимость, сроки и гибкость',
      fa:'مقایسه تأمین از چین و ترکیه: بهای تمام‌شده، زمان تحویل و چابکی عملیاتی',
      zh:'中国与土耳其采购深度对标：离岸价陷阱、到岸总成本 (TCO) 与交期弹性量化',
      vi:'So sánh nguồn cung Trung Quốc và Thổ Nhĩ Kỳ: Chi phí cập cảng, thời gian giao hàng và độ linh hoạt'
    },
    descriptions:{
      tr:'Çin FOB birim fiyat illüzyonuna karşı Türkiye toplam sahip olma maliyeti (TCO); navlun dalgalanmaları, MOQ ve stok finansmanı kıyaslaması.',
      en:'Comparing China FOB illusion against Turkey landed cost: freight volatility, container MOQs, inventory holding costs and cash-to-cash cycles.',
      de:'FOB-Preisillusion in China versus TCO in der Türkei: Frachtvolatilität, Container-MOQs, Kapitalbindung und Liquiditätszyklen im Vergleich.',
      it:'Confronto tra illusione FOB cinese e costo sbarcato in Turchia: volatilità noli, minimi d’ordine container, capitale circolante e scorte.',
      ru:'Иллюзия цены FOB в Китае против совокупных затрат в Турции: волатильность фрахта, контейнерный MOQ и заморозка оборотного капитала.',
      fa:'مقایسه قیمت ارزان FOB چین با بهای تمام‌شده ترکیه: نوسان کرایه حمل دریایی، حداقل سفارش‌های سنگین و هزینه خواب سرمایه.',
      zh:'全景量化中国与土耳其采购模型：剖析超低出厂单价背后的高额集装箱海运附加费、高阶梯 MOQ、库存资金沉淀与现金周转周期差异。',
      vi:'Phân tích ảo tưởng giá FOB Trung Quốc so với chi phí cập cảng Thổ Nhĩ Kỳ: biến động cước biển, MOQ container lớn và chi phí lưu kho vốn lưu động.'
    },
    answers:{
      tr:'Çin\'in düşük birim fiyat avantajı; yüksek deniz navlunu, 40-50 günlük seyrüsefer, konteyner bazlı yüksek MOQ ve stok finansmanı hesaba katıldığında Türkiye lehine dengelenir.',
      en:'While China frequently offers lower nominal unit prices, Turkey delivers superior landed cost and cash-cycle efficiency when ocean freight volatility, 45-day transit risk, large container MOQs, and inventory holding costs are modeled.',
      de:'Trotz geringerer nominaler Stückpreise in Asien erzielt die Türkei oft die wirtschaftlichere Gesamtlösung, sobald Frachtvolatilität, 45 Tage Seeweg und hohe Mindestbestellmengen einberechnet werden.',
      it:'Sebbene la Cina mostri spesso prezzi unitari inferiori, la Turchia garantisce un costo sbarcato e un’efficienza del circolante superiori considerando noli marittimi, 45 giorni di transito e scorte vincolate.',
      ru:'Хотя Китай часто предлагает более низкие номинальные цены, Турция обеспечивает меньшую совокупную себестоимость с учётом волатильности фрахта, 45 дней пути и заморозки оборотного капитала.',
      fa:'اگرچه چین قیمت‌های اولیه پایین‌تری ارائه می‌دهد، اما با محاسبه نوسانات شدید کرایه دریایی، ۴۵ روز ترانزیت و خواب سنگین سرمایه در انبار، تأمین از ترکیه توجیه اقتصادی بالاتری دارد.',
      zh:'尽管中国在基础工业品上具备单件报价优势，但综合计入红海与苏伊士运费波动、45天海上风浪延误、整柜起订量占压及资金利息后，土耳其在全周期综合总成本与敏捷补货上更具竞争力。',
      vi:'Dù Trung Quốc thường có đơn giá danh nghĩa thấp hơn, Thổ Nhĩ Kỳ lại mang đến tổng chi phí cập cảng và hiệu quả dòng tiền vượt trội khi tính đến biến động cước biển, thời gian vận chuyển 45 ngày và tồn kho lớn.'
    }
  },
  'vietnam-turkey-trade-routes': {
    slugs:{tr:'vietnam-turkiye-kuresel-tedarik-rotalari',en:'vietnam-turkey-global-supply-routes',de:'vietnam-tuerkei-globale-beschaffungsrouten',it:'vietnam-turchia-rotte-globali-approvvigionamento',ru:'marshruty-postavok-vietnam-turtsiya',fa:'vietnam-turkey-global-supply-routes',zh:'vietnam-turkey-global-supply-routes',vi:'tuyen-thuong-mai-toan-cau-viet-nam-tho-nhi-ky'},
    titles:{
      tr:'Vietnam ve Türkiye Ticaret Dinamikleri: Küresel Tedarik Rotası Karşılaştırması',
      en:'Vietnam & Turkey Trade Corridors: Comparative Supply Chain Strategies',
      de:'Handelskorridore Vietnam & Türkei: Vergleichende Lieferkettenstrategien',
      it:'Corridoi Commerciali Vietnam e Turchia: Strategie di Filiera a Confronto',
      ru:'Торговые коридоры Вьетнам–Турция: сравнительный анализ цепочек поставок',
      fa:'راهگذرهای تجاری ویتنام و ترکیه: تحلیل تطبیقی راهبردهای زنجیره تأمین',
      zh:'越南与土耳其跨境商贸走廊对标：东南亚与泛欧亚供应链多元化布局策略',
      vi:'Hành lang thương mại Việt Nam – Thổ Nhĩ Kỳ: Chiến lược so sánh chuỗi cung ứng'
    },
    descriptions:{
      tr:'Güneydoğu Asya ve Akdeniz tedarik eksenlerinin karşılaştırması; transit süreleri, tarife rejimleri ve tedarik zinciri çeşitlendirme modelleri.',
      en:'Benchmarking Southeast Asia and Mediterranean sourcing hubs; transit duration, preferential tariffs, and geographic risk mitigation.',
      de:'Vergleich von Beschaffungszentren in Südostasien und im Mittelmeerraum: Transitzeiten, Zollregime und geopolitische Risikodiversifizierung.',
      it:'Confronto tra hub di sourcing del Sud-est asiatico e del Mediterraneo: tempi di transito, regimi tariffari e diversificazione del rischio.',
      ru:'Сравнение сорсинговых хабов Юго-Восточной Азии и Средиземноморья: транзитные сроки, тарифы и географическая диверсификация рисков.',
      fa:'مقایسه قطب‌های تأمین جنوب شرق آسیا و مدیترانه: مدت زمان ترانزیت، تعرفه‌ها و مدیریت ریسک‌های ژئوپلیتیک زنجیره تأمین.',
      zh:'深度比较东南亚制造极（越南）与地中海枢纽（土耳其）：海空联运通道、原产地规则、双边自贸协定与跨国企业“中国+1”多元化寻源模型。',
      vi:'So sánh trung tâm thu mua Đông Nam Á và Địa Trung Hải: thời gian vận chuyển, biểu thuế ưu đãi và chiến lược đa dạng hóa rủi ro địa lý.'
    },
    answers:{
      tr:'Vietnam yüksek hacimli tüketici elektroniği ve tekstilde Güneydoğu Asya avantajı sunarken, Türkiye Avrupa ve Ortadoğu ekseninde hızlı termin ve gümrük birliği avantajıyla tamamlayıcı bir tedarik mimarisi oluşturur.',
      en:'Vietnam provides scale advantages in consumer electronics and volume apparel, while Turkey acts as the optimal agile counterweight for rapid European fulfillment, specialized engineering, and customized industrial procurement.',
      de:'Vietnam bietet Größenvorteile bei Großserien in Elektronik und Bekleidung, während die Türkei als agiles Gegengewicht für schnelle europäische Nachlieferungen und Spezialanfertigungen dient.',
      it:'Il Vietnam offre vantaggi di scala per elettronica di consumo e abbigliamento, mentre la Turchia si conferma l’indispensabile contrappeso agile per consegne rapide sul mercato europeo e produzioni specializzate.',
      ru:'Вьетнам обеспечивает масштаб в электронике и лёгкой промышленности, а Турция служит оперативным противовесом для быстрой логистики в Европу и гибких заказов.',
      fa:'ویتنام در تولید انبوه پوشاک و الکترونیک مصرفی دارای مزیت مقیاس است، در حالی که ترکیه به‌عنوان موازنه‌کننده چابک برای تأمین سریع بازارهای اروپا و خاورمیانه عمل می‌کند.',
      zh:'越南在大批量消费电子与基础纺织品领域具备亚太规模集聚优势；而土耳其则在面向泛欧高阶工业定制、严苛交期履约与多品种小批量混流生产中构成关键的互补支撑。',
      vi:'Việt Nam có lợi thế quy mô về điện tử tiêu dùng và may mặc công nghiệp, trong khi Thổ Nhĩ Kỳ đóng vai trò đối trọng linh hoạt cho các đơn hàng tốc độ cao phục vụ thị trường Châu Âu.'
    }
  },
  'iran-turkey-commodity-corridors': {
    slugs:{tr:'iran-turkiye-tarimsal-emtia-ve-hammadde-koridoru',en:'iran-turkey-commodity-corridors-batch-verification',de:'iran-tuerkei-agrarrohstoffe-chargenpruefung',it:'iran-turchia-materie-prime-verifica-lotti',ru:'koridor-iran-turtsiya-sorsing-syrya',fa:'iran-turkey-commodity-corridors-batch-verification',zh:'iran-turkey-commodity-corridors-batch-verification',vi:'iran-turkey-commodity-corridors-batch-verification'},
    titles:{
      tr:'İran-Türkiye Ticaret Koridoru: Tarımsal Emtia ve Hammadde Tedariği',
      en:'Iran-Turkey Commodity Corridors: Agricultural Sourcing & Batch Verification',
      de:'Handelskorridor Iran–Türkei: Agrarrohstoffe & Chargenanalytik',
      it:'Corridoio Commerciale Iran-Turchia: Materie Prime Agricole e Verifica dei Lotti',
      ru:'Торговый коридор Иран–Турция: аграрное сырьё и попартийный контроль',
      fa:'راهگذار تجاری ایران و ترکیه: تأمین مواد اولیه و اعتبارسنجی پارت‌های کالایی',
      zh:'伊朗-土耳其跨境大宗商贸走廊：特色农产寻源、入境转口与批次化验核验',
      vi:'Hành lang hàng hóa Iran – Thổ Nhĩ Kỳ: Thu mua nông sản và kiểm định theo lô'
    },
    descriptions:{
      tr:'Antep fıstığı, hurma, safran ve petrokimya türevlerinde sınır lojistiği, parti laboratuvar analizleri (aflatoksin, saflık) ve uyum rehberi.',
      en:'Speciality sourcing in pistachios, dates, saffron and raw materials: border logistics, accredited lab testing, aflatoxin limits and regulatory compliance.',
      de:'Spezialitätenbeschaffung bei Pistazien, Datteln, Safran und Rohstoffen: Grenzlogistik, akkreditierte Laboranalysen, Aflatoxingrenzen und Compliance.',
      it:'Sourcing di pistacchi, datteri, zafferano e materie prime: logistica di frontiera, test accreditati di laboratorio, limiti di aflatossine e conformità.',
      ru:'Сорсинг фисташек, фиников, шафрана и сырья: приграничная логистика, лабораторные тесты, нормы афлатоксинов и юридическая чистота.',
      fa:'تأمین تخصصی پسته، خرما، زعفران و مواد اولیه: لجستیک مرزی، آزمون‌های آزمایشگاهی آفلاتوکسین و تطبیق کامل با استانداردهای گمرکی.',
      zh:'针对中东特色开心果、椰枣、藏红花及工业基础原材料：解析陆路口岸转运、第三方 CNAS/ILAC 实验室黄曲霉毒素检测及全链路贸易合规。',
      vi:'Thu mua chuyên biệt hạt dẻ cười, chà là, nhụy hoa nghệ tây và nguyên liệu thô: logistics biên giới, kiểm nghiệm aflatoxin và tuân thủ pháp lý.'
    },
    answers:{
      tr:'İran-Türkiye hattında emtia tedariği, sınırda parti bazlı akredite laboratuvar testleri ve uluslararası mevzuata tam uyumlu şeffaf evrak yapısıyla yönetilmelidir.',
      en:'Commodity sourcing along the Iran-Turkey corridor requires rigorous batch-level accredited testing (for aflatoxins, moisture, and grading) and transparent legal documentation before cross-border transit.',
      de:'Rohstofftransaktionen über den Korridor Iran–Türkei verlangen lückenlose Chargenanalysen in akkreditierten Laboren und strikte Dokumentenkonformität an der Grenze.',
      it:'Il sourcing di materie prime nel corridoio Iran-Turchia richiede rigorose analisi di lotto accreditate (aflatossine, umidità) e documentazione doganale conforme prima del transito transfrontaliero.',
      ru:'Закупки сырья по коридору Иран–Турция требуют обязательного попартийного лабораторного контроля (афлатоксины, влажность) и полной прозрачности товаросопроводительных документов.',
      fa:'تأمین کالا در راهگذار تجاری ایران و ترکیه مستلزم انجام آزمایش‌های دقیق پارت‌محور در آزمایشگاه‌های معتبر و تنظیم اسناد شفاف و منطبق با قوانین بین‌المللی است.',
      zh:'依托土耳其区域中枢开展农产与大宗原料贸易，必须在入境口岸执行严格的逐批次抽样化验（黄曲霉毒素、微生物及水分），并出具全程可追溯的法定清关单证。',
      vi:'Thu mua hàng hóa qua hành lang Iran - Thổ Nhĩ Kỳ đòi hỏi kiểm nghiệm phòng thí nghiệm độc lập cho từng lô hàng và hồ sơ chứng từ minh bạch trước khi qua biên giới.'
    }
  },
  'private-label-contract-manufacturing': {
    slugs:{tr:'turkiyede-private-label-ve-fason-uretim-rehberi',en:'private-label-contract-manufacturing-turkey',de:'private-label-auftragsfertigung-tuerkei',it:'private-label-produzione-conto-terzi-turchia',ru:'kontraktnoe-proizvodstvo-chastnaya-marka-turtsiya',fa:'private-label-contract-manufacturing-turkey',zh:'private-label-contract-manufacturing-turkey',vi:'gia-cong-oem-nhan-hang-rieng-tho-nhi-ky'},
    titles:{
      tr:'Türkiye’de Fason Üretim ve Private Label: Sözleşme ve Kalite Yönetimi',
      en:'Private Label & Contract Manufacturing in Turkey: Governance & IP Protection',
      de:'Private Label & Lohnfertigung in der Türkei: Verträge, Qualität & IP-Schutz',
      it:'Private Label e Produzione Conto Terzi in Turchia: Governance e Tutela IP',
      ru:'Контрактное производство и СТМ в Турции: контроль качества и защита IP',
      fa:'تولید قراردادی و برند اختصاصی در ترکیه: مدیریت قرارداد، کیفیت و مالکیت فکری',
      zh:'土耳其 OEM / 贴牌定制与合同代工实战：配方知识产权保护、模具归属与质量验收',
      vi:'Sản xuất gia công và thương hiệu riêng tại Thổ Nhĩ Kỳ: Quản trị hợp đồng và bảo hộ IP'
    },
    descriptions:{
      tr:'Türk üreticilerle private label fason üretim süreçleri; teknik şartname hazırlığı, fikri mülkiyet koruması, kalıp mülkiyeti ve parti denetimleri.',
      en:'Structuring contract manufacturing in Turkey: technical specifications, IP safeguarding, packaging tooling ownership, and pre-shipment inspections.',
      de:'Auftragsfertigung in der Türkei: Erstellung technischer Leistungsbeschreibungen, Schutz geistigen Eigentums, Werkzeugrechte und Vorabnahme.',
      it:'Strutturare la produzione conto terzi in Turchia: specifiche tecniche, tutela della proprietà intellettuale, proprietà degli stampi e controlli pre-imbarco.',
      ru:'Организация контрактного производства в Турции: техзадания, защита интеллектуальной собственности, владение оснасткой и инспекция отгрузок.',
      fa:'ساختاردهی تولید قراردادی در ترکیه: تدوین مشخصات فنی، حفاظت از فرمولاسیون و مالکیت فکری، مالکیت قالب‌ها و بازرسی قبل از حمل.',
      zh:'指导跨国品牌在土耳其落地代工项目：从工程技术规格书编制、配方保密条款、印刷模具资产归属界定到出厂前 AQL 抽样质检全流程。',
      vi:'Thiết lập quan hệ đối tác gia công tại Thổ Nhĩ Kỳ: lập hồ sơ kỹ thuật, bảo vệ sở hữu trí tuệ, quyền sở hữu khuôn mẫu và kiểm định chất lượng trước xuất xưởng.'
    },
    answers:{
      tr:'Türkiye\'de başarılı private label üretimi; net teknik spesifikasyonlar, kalıp mülkiyetinin alıcıda kalması ve parti bazlı bağımsız kalite denetimleriyle garanti altına alınır.',
      en:'Successful private-label outsourcing in Turkey hinges on precise technical dossiers, explicit tooling asset ownership, robust non-disclosure agreements, and independent pre-shipment batch audits.',
      de:'Erfolgreiche Eigenmarkenprojekte in der Türkei basieren auf präzisen Pflichtenheften, klaren Eigentumsrechten an Werkzeugen und unabhängigen Chargenprüfungen vor Auslieferung.',
      it:'Il successo delle produzioni private label in Turchia dipende da capitolati tecnici rigorosi, proprietà formale degli stampi in capo al committente e audit indipendenti sui lotti prima della spedizione.',
      ru:'Успех проектов СТМ в Турции определяется детальными техзаданиями, юридическим закреплением прав на пресс-формы за заказчиком и попартийным контролем до отгрузки.',
      fa:'موفقیت در تولید تحت برند اختصاصی در ترکیه مستلزم تدوین دقیق مشخصات فنی، تثبیت مالکیت خریدار بر قالب‌ها و بازرسی مستقل هر پارت پیش از بارگیری است.',
      zh:'在土耳其顺利推进贴牌代工的关键，在于将工艺标准固化为法律级技术附件、确保定制模具资产权属明晰归买方所有，并常态化实施出厂前第三方独立验货。',
      vi:'Thành công trong sản xuất gia công tại Thổ Nhĩ Kỳ dựa trên hồ sơ kỹ thuật chuẩn xác, quyền sở hữu pháp lý đối với khuôn mẫu và kiểm định độc lập từng lô hàng.'
    }
  },
  'supplier-due-diligence': {
    slugs:{tr:'tedarikci-istihbarati-ve-dolandiricilik-onleme',en:'supplier-due-diligence-anti-fraud-verification',de:'lieferanten-due-diligence-betrugspraevention',it:'due-diligence-fornitori-prevenzione-frodi',ru:'proverka-postavshchikov-i-zaschita-ot-moshennichestva',fa:'supplier-due-diligence-anti-fraud-verification',zh:'supplier-due-diligence-anti-fraud-verification',vi:'tham-dinh-nha-cung-cap-phong-ngua-gian-lan'},
    titles:{
      tr:'Tedarikçi İstihbaratı ve Dolandırıcılık Önleme: B2B Doğrulama Rehberi',
      en:'Supplier Due Diligence & Anti-Fraud: B2B Counterparty Verification Guide',
      de:'Lieferanten-Due-Diligence & Betrugsprävention: B2B-Verifikationsleitfaden',
      it:'Due Diligence dei Fornitori e Prevenzione Frodi: Guida alla Verifica B2B',
      ru:'Проверка контрагентов и защита от мошенничества: B2B-руководство',
      fa:'استعلام جامع تأمین‌کننده و پیشگیری از کلاهبرداری در تجارت B2B',
      zh:'跨国供应商深度商业尽职调查与反欺诈防范指南：空壳公司与虚假单证识别',
      vi:'Thẩm định chuyên sâu nhà cung cấp và phòng ngừa gian lận thương mại B2B'
    },
    descriptions:{
      tr:'Uluslararası ticarette sahte fabrika, paravan şirket ve yanıltıcı evrak risklerini eleyen çok katmanlı kurumsal doğrulama protokolü.',
      en:'Multi-layered counterparty verification to eliminate ghost factories, shell companies, payment diversion fraud, and forged certifications in global trade.',
      de:'Mehrstufige B2B-Prüfung zum Ausschluss von Scheinfirmen, Zahlungsmanipulationen und gefälschten Qualitätszertifikaten im internationalen Handel.',
      it:'Verifica controparti multilivello per eliminare fabbriche fantasma, società di comodo, frodi sui pagamenti e certificati contraffatti nel commercio globale.',
      ru:'Многоуровневая проверка контрагентов: выявление фирм-однодневок, предотвращение мошенничества с реквизитами и поддельных сертификатов.',
      fa:'اعتبارسنجی چندلایه طرف‌های تجاری جهت حذف کارخانه‌های صوری، شرکت‌های کاغذی، تغییر فریبکارانه حساب بانکی و مدارک جعلی در تجارت فرامرزی.',
      zh:'系统揭示跨境贸易中的空壳幽灵工厂、付款截流钓鱼欺诈及伪造检测证书套路：涵盖商业登记穿透、银行账户一致性审查与现场突击核验。',
      vi:'Quy trình xác minh đối tác đa tầng giúp nhận diện nhà máy ảo, công ty bình phong, gian lận tài khoản thanh toán và chứng chỉ giả mạo trong thương mại quốc tế.'
    },
    answers:{
      tr:'B2B ticari dolandırıcılıklardan korunmanın tek yolu, şirket sicilini, vergi kaydını, banka hesap sahibini ve üretim tesisini birbirinden bağımsız resmi kanallarla doğrulamaktır.',
      en:'Protecting commercial capital against international fraud requires three independent checks: government corporate registry validation, bank beneficiary verification, and unannounced physical factory confirmation.',
      de:'Der Schutz von Geschäftskapital vor B2B-Betrug erfordert drei unabhängige Säulen: Handelsregisterabgleich, Verifikation des Bankkontoinhabers und physische Betriebsbesichtigung.',
      it:'Proteggere il capitale aziendale dalle frodi B2B richiede tre verifiche indipendenti: visura camerale governativa, conferma bancaria del beneficiario e ispezione fisica non annunciata dell’impianto.',
      ru:'Защита коммерческих средств от мошенничества требует трёх независимых шагов: проверки в госреестрах, верификации банковского бенефициара и выездной проверки объекта.',
      fa:'حفاظت از سرمایه در معاملات بین‌المللی نیازمند سه اقدام مستقل است: استعلام ثبتی و مالیاتی از مراجع دولتی، تطبیق مالک حساب بانکی و بازدید فیزیکی از خط تولید کارخانه.',
      zh:'防范跨境商业欺诈必须筑牢三道独立防线：穿透核查官方工商税务底册、要求银行开具受益人资信证明、以及由独立专业机构执行不预先通知的现场突击验厂。',
      vi:'Bảo vệ nguồn vốn doanh nghiệp trước gian lận thương mại đòi hỏi ba bước kiểm tra độc lập: đối chiếu hồ sơ đăng ký chính thức, xác thực tài khoản ngân hàng thụ hưởng và khảo sát thực địa nhà máy.'
    }
  },
  'turkey-export-market-entry': {
    slugs:{tr:'turk-ureticileri-icin-kuresel-pazara-giris-stratejisi',en:'global-market-entry-for-turkish-producers',de:'globaler-markteintritt-fuer-tuerkische-hersteller',it:'market-entry-globale-produttori-turchi',ru:'vyhod-na-mezhdunarodnye-rynki-turetskih-proizvoditeley',fa:'global-market-entry-for-turkish-producers',zh:'global-market-entry-for-turkish-producers',vi:'chien-luoc-xuat-khau-toan-cau-nha-san-xuat-tho-nhi-ky'},
    titles:{
      tr:'Türk Üreticileri İçin Küresel Pazara Giriş: İhracat Stratejisi ve Doğrulama',
      en:'Global Market Entry for Turkish Producers: Export Sourcing & Channel Architecture',
      de:'Globaler Markteintritt für türkische Hersteller: Exportstrategie & Vertriebskanäle',
      it:'Ingresso nei Mercati Globali per Produttori Turchi: Strategia Export e Canali',
      ru:'Выход турецких производителей на мировые рынки: экспортная стратегия и каналы',
      fa:'ورود تولیدکنندگان ترکیه به بازارهای جهانی: استراتژی صادرات و معماری کانال‌های توزیع',
      zh:'土耳其优质制造企业全球化出海指南：欧美与海湾市场准入、标准合规与直采渠道搭建',
      vi:'Thâm nhập thị trường toàn cầu cho nhà sản xuất Thổ Nhĩ Kỳ: Chiến lược xuất khẩu và xây dựng kênh phân phối'
    },
    descriptions:{
      tr:'Türk sanayicilerinin Avrupa, Körfez ve Asya pazarlarına açılımı; teknik mevzuat uyumu (CE, REACH, FDA), kurumsal RFQ yanıtı ve alıcı güveni inşası.',
      en:'Strategic export expansion for Turkish manufacturers into Europe, the Gulf and Asia; compliance frameworks (CE, REACH, FDA), RFQ readiness, and buyer trust.',
      de:'Strategische Exportexpansion türkischer Industrieunternehmen nach Europa, den Golf und Asien: Zertifizierungen (CE, REACH), RFQ-Kompetenz und Vertrauensaufbau.',
      it:'Espansione commerciale estera dei produttori turchi verso Europa, Golfo e Asia: conformità tecnica (CE, REACH, FDA), gestione RFQ e affidabilità B2B.',
      ru:'Стратегический экспорт турецких заводов в Европу, страны Залива и Азию: стандарты (CE, REACH, FDA), подготовка к RFQ и доверие покупателей.',
      fa:'توسعه استراتژیک صادرات تولیدکنندگان ترکیه به اروپا، خلیج فارس و آسیا: انطباق با مقررات فنی (CE, REACH, FDA)، آمادگی برای RFQ و جلب اعتماد خریداران.',
      zh:'指导土耳其先进制造企业布局泛欧、中东海湾及北美高端市场：剖析国际工业标准认证（CE、REACH、FDA）、专业化 RFQ 报价应答机制及与跨国买家建立长效信任。',
      vi:'Mở rộng xuất khẩu chiến lược cho các nhà sản xuất Thổ Nhĩ Kỳ sang Châu Âu, vùng Vịnh và Châu Á: tuân thủ tiêu chuẩn kỹ thuật, năng lực phản hồi RFQ và xây dựng niềm tin đối tác.'
    },
    answers:{
      tr:'Türk üreticilerinin küresel pazarlarda kalıcı olması, yalnızca fiyat rekabetine değil; hedef pazar sertifikasyonlarına tam uyum ve kurumsal RFQ yanıt disiplinine bağlıdır.',
      en:'Turkish manufacturers achieve sustainable export growth not through ad-hoc price cutting, but by establishing verifiable regulatory compliance, professional multilingual RFQ responses, and transparent quality data.',
      de:'Türkische Hersteller sichern sich langfristigen Exporterfolg nicht über Preiskämpfe, sondern durch zertifizierte regulatorische Konformität, professionelle RFQ-Reaktionen und verlässliche Qualität.',
      it:'I produttori turchi ottengono una crescita sostenibile all’estero non con ribassi improvvisati, ma garantendo conformità certificata, risposte RFQ professionali e standard qualitativi dimostrabili.',
      ru:'Устойчивый успех турецких предприятий на внешних рынках строится не на ценовом демпинге, а на подтверждённом соответствии международным нормам и прозрачной работе с RFQ.',
      fa:'توسعه پایدار صادرات تولیدکنندگان ترکیه نه از طریق تخفیف‌های بی‌رویه، بلکه با انطباق کامل با استانداردهای بین‌المللی، پاسخ‌دهی حرفه‌ای به RFQ و شفافیت در کیفیت محقق می‌شود.',
      zh:'土耳其制造企业拓展全球蓝海的立足之本，绝非单一的价格恶性内卷，而是在于建立严谨的国际资质认证体系、规范的多语种 RFQ 报价交互规范以及透明可视的产品批次质保数据。',
      vi:'Các nhà sản xuất Thổ Nhĩ Kỳ đạt được tăng trưởng xuất khẩu bền vững không phải qua việc cắt giảm giá đơn thuần, mà nhờ vào sự tuân thủ quy chuẩn quốc tế và phản hồi RFQ chuyên nghiệp.'
    }
  },
  'landed-cost-moq-optimization': {
    slugs:{tr:'landed-cost-modellemesi-ve-moq-optimizasyonu',en:'landed-cost-modeling-moq-optimization',de:'landed-cost-modellierung-moq-optimierung',it:'modellazione-landed-cost-ottimizzazione-moq',ru:'raschet-landed-cost-i-optimizatsiya-moq',fa:'landed-cost-modeling-moq-optimization',zh:'landed-cost-modeling-moq-optimization',vi:'mo-hinh-hoa-chi-phi-cap-cang-va-toi-uu-moq'},
    titles:{
      tr:'Landed Cost Modellemesi ve Minimum Sipariş Miktarı (MOQ) Optimizasyonu',
      en:'Landed Cost Modeling & MOQ Optimization: Balancing Working Capital and Scale',
      de:'Landed-Cost-Modellierung & MOQ-Optimierung: Liquidität vs. Skaleneffekte',
      it:'Modellazione del Landed Cost e Ottimizzazione MOQ: Capitale Circolante e Scala',
      ru:'Моделирование Landed Cost и оптимизация MOQ: баланс оборотного капитала и объёма',
      fa:'مدل‌سازی بهای تمام‌شده نهایی (Landed Cost) و بهینه‌سازی حداقل سفارش (MOQ)',
      zh:'到岸总成本 (Landed Cost) 精算与最低起订量 (MOQ) 动态平衡优化模型',
      vi:'Mô hình hóa chi phí cập cảng (Landed Cost) và tối ưu hóa số lượng đặt hàng tối thiểu (MOQ)'
    },
    descriptions:{
      tr:'Fabrika çıkış fiyatından (EXW/FOB) gümrük teslimine (DDP) toplam maliyet hesabı; navlun, vergi, depolama ve finansman maliyetlerinin analizi.',
      en:'Calculating full landed cost from EXW/FOB to final delivery: tariffs, terminal handling, freight volatility, and working capital carrying cost.',
      de:'Berechnung der tatsächlichen Gesamtanlandekosten von EXW/FOB bis DDP: Zölle, Hafengebühren, Frachtschwankungen und Lagerzinsen im Fokus.',
      it:'Calcolo del costo sbarcato completo da EXW/FOB alla consegna finale: dazi doganali, spese di terminal, noli e oneri finanziari di magazzino.',
      ru:'Расчёт полной себестоимости с доставкой от EXW/FOB до склада покупателя: пошлины, терминальные сборы, фрахт и затраты на хранение.',
      fa:'محاسبه دقیق بهای تمام‌شده کالا از درب کارخانه (EXW/FOB) تا تحویل نهایی (DDP): تعرفه‌ها، هزینه‌های بندری، نوسانات حمل و بهره خواب سرمایه.',
      zh:'从离岸出厂价 (EXW/FOB) 穿透测算至完税后到门价 (DDP) 的专业数理模型：深入拆解关税梯度、码头杂费 (THC)、集装箱运费浮动及库存持有财务成本。',
      vi:'Tính toán toàn diện chi phí cập cảng từ giá xuất xưởng đến kho nhận hàng: thuế quan, phí cảng, biến động cước và chi phí vốn lưu kho.'
    },
    answers:{
      tr:'Landed Cost analizi, tedarik kararında yalnızca birim fiyatı değil; gümrük, navlun, sigorta, finansman ve MOQ kaynaklı stok taşıma maliyetlerini tek bir denklemde birleştirir.',
      en:'True Landed Cost modeling prevents working capital traps by evaluating freight tariffs, port demurrage, financing rates, and inventory obsolescence alongside supplier unit volume discounts.',
      de:'Eine präzise Landed-Cost-Rechnung schützt vor Liquiditätsengpässen, indem sie Zölle, Hafengebühren, Finanzierungskosten und Lagerbindung mit Mengenrabatten gegenrechnet.',
      it:'La modellazione del Landed Cost protegge il capitale circolante valutando dazi, oneri portuali, tassi di interesse e obsolescenza delle scorte insieme agli sconti quantità del fornitore.',
      ru:'Моделирование Landed Cost защищает оборотный капитал, оценивая пошлины, терминальные сборы, ставки финансирования и риски неликвида наряду с оптовыми скидками поставщика.',
      fa:'مدل‌سازی بهای تمام‌شده نهایی از تله‌های نقدینگی جلوگیری می‌کند؛ زیرا تعرفه‌ها، دموراژ بندری، نرخ بهره و ریسک انبارداری را در کنار تخفیفات حجمی تأمین‌کننده ارزیابی می‌نماید.',
      zh:'严谨的到岸总成本 (Landed Cost) 测算模型能够有效避免企业陷入营运资金陷阱——将目的港清关税费、码头滞箱费、资金占用利率及折损报废风险与上游阶梯起订量折扣进行综合对冲量化。',
      vi:'Mô hình hóa chi phí cập cảng thực tế giúp doanh nghiệp tránh bẫy vốn lưu động bằng cách đánh giá đồng thời thuế quan, phí lưu bãi, lãi suất tài trợ và khấu hao tồn kho cùng các chiết khấu số lượng.'
    }
  },
  'trade-house-vs-broker': {
    slugs:{tr:'stratejik-ticaret-evi-ile-komisyoncu-arasindaki-fark',en:'strategic-trade-house-vs-commission-broker',de:'strategisches-handelshaus-vs-provisionsmakler',it:'trade-house-strategica-vs-broker-a-commissione',ru:'torgovyi-dom-ili-posrednik-komissioner',fa:'strategic-trade-house-vs-commission-broker',zh:'strategic-trade-house-vs-commission-broker',vi:'nha-thuong-mai-chien-luoc-vs-moi-gioi-hoa-hong'},
    titles:{
      tr:'Stratejik Ticaret Evi ile Komisyoncu Arasındaki Fark: Şeffaf Yönetim Modeli',
      en:'Strategic Trade House vs Commission Broker: Governance & Alignment in Global Trade',
      de:'Strategisches Handelshaus vs. Provisionsmakler: Transparenz & Governance im Welthandel',
      it:'Trade House Strategica vs Broker a Commissione: Governance e Trasparenza nel B2B',
      ru:'Стратегический торговый дом или брокер-комиссионер: прозрачная модель управления',
      fa:'تفاوت خانه تجارت استراتژیک با واسطه کمیسیونی: مدل حاکمیت شفاف در تجارت بین‌الملل',
      zh:'国际战略综合商社与传统居间中介的核心区别：透明商业契约、履约治理与零隐性加价',
      vi:'Nhà thương mại chiến lược so với môi giới hoa hồng: Mô hình quản trị và tính minh bạch'
    },
    descriptions:{
      tr:'Uluslararası B2B ticarette bağımsız ticaret evi ile geleneksel komisyoncuların karşılaştırması; şeffaf hizmet ücreti, menşe netliği ve sözleşme güvencesi.',
      en:'Comparing institutional trade houses with transactional brokers: fee transparency, verifiable origin, contractual governance, and conflict-of-interest mitigation.',
      de:'Institutionelle Handelshäuser versus Provisionsmakler: Transparente Honorare, klare Herkunftsnachweise, Vertrags-Governance und Interessenskonflikte im Fokus.',
      it:'Confronto tra trade house istituzionali e broker tradizionali: onorari trasparenti, origine verificabile, governance contrattuale e assenza di conflitti d’interesse.',
      ru:'Сравнение институционального торгового дома и разовых брокеров: прозрачные тарифы, прямое происхождение, контрактная ответственность и защита интересов.',
      fa:'مقایسه ساختاری شرکت‌های معتبر بازرگانی با واسطه‌های سنتی: دستمزد شفاف، اصالت مبدأ، تعهد قراردادی و جلوگیری از تعارض منافع.',
      zh:'系统剖析专业国际贸易综合协调机构与传统居间掮客的本质区别：深度解析透明服务费率机制、法定真实原产地溯源、合同法律履约保障与利益冲突防范。',
      vi:'So sánh nhà thương mại chuyên nghiệp với các bên môi giới giao dịch: phí dịch vụ minh bạch, xuất xứ xác thực, quản trị hợp đồng và triệt tiêu xung đột lợi ích.'
    },
    answers:{
      tr:'Stratejik bir ticaret evi gizli fiyat farkı koymaz; şeffaf bir hizmet yapısıyla alıcı ve üreticiyi aynı sözleşme masasında buluşturarak kalite, teslimat ve risk sorumluluğunu üstlenir.',
      en:'A strategic trade house operates on defined, transparent terms—connecting buyer and producer directly under clear contracts, eliminating hidden broker margins, and actively governing quality and compliance.',
      de:'Ein strategisches Handelshaus vermeidet versteckte Margen, schafft direkte Transparenz zwischen Einkäufer und Hersteller und übernimmt Verantwortung für Qualität, Dokumente und Vertragserfüllung.',
      it:'Una trade house strategica non applica ricarichi occulti; opera su base trasparente mettendo in relazione acquirente e produttore con contratti chiari e governando qualità e conformità.',
      ru:'Стратегический торговый дом исключает скрытые наценки, организует прямой контракт между покупателем и производителем и обеспечивает контроль качества и юридическую чистоту.',
      fa:'یک خانه تجارت استراتژیک از اضافه کردن حاشیه سود پنهان خودداری کرده و با ساختار شفاف، خریدار و تولیدکننده را تحت قراردادی روشن متصل نموده و مسئولیت کیفیت و انطباق را به عهده می‌گیرد.',
      zh:'现代战略贸易机构坚决摒弃传统倒手掮客的隐蔽高额加价模式；立足于经书面约定的透明服务费体系，协同买卖双方在法定契约下直接签署交易，并全程统筹质量检验、单证流转与违约风控。',
      vi:'Một nhà thương mại chiến lược hoạt động dựa trên các điều khoản dịch vụ minh bạch, kết nối người mua và nhà sản xuất trực tiếp qua hợp đồng chuẩn, loại bỏ biên lợi nhuận ẩn và kiểm soát chất lượng.'
    }
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
  const pathLang = safeLang;
  if (key === 'home') return pathLang === 'tr' ? '/' : `/${pathLang}/`;
  if (key === 'how-we-work') return `/${pathLang}/${specialSlugs['how-we-work'][safeLang]}/`;
  if (key === 'scenarios') return `/${pathLang}/${specialSlugs.scenarios[safeLang]}/`;
  if (key === 'syria-market' && (safeLang === 'tr' || safeLang === 'en')) return `/${safeLang}/${syriaMarketContent[safeLang].slug}/`;
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
  if (key === 'syria-market') {
    return {
      tr: `https://ctseg.com.tr/tr/${syriaMarketContent.tr.slug}/`,
      en: `https://ctseg.com.tr/en/${syriaMarketContent.en.slug}/`
    };
  }
  return Object.fromEntries(locales.map((lang) => [lang, `https://ctseg.com.tr${localizedPath(lang, key, id)}`])) as Record<Locale, string>;
}



/* Balkan locale rollout: ro, bg, sr */
Object.assign(localeNames as any, { ro:'Română', bg:'Български', sr:'Srpski' });
Object.assign(company.name as any, {
  ro:'CTSEG Companie de Industrie și Comerț',
  bg:'CTSEG Индустрия и Търговия',
  sr:'CTSEG Industrija i Trgovina'
});
Object.assign(companyCopy as any, {
  ro:{
    aboutHeading:'Punte comercială bidirecțională și sourcing strategic',
    aboutBody:'CTSEG este o casă de comerț B2B independentă, cu sediul în Istanbul, care sprijină producătorii din Türkiye să intre pe piețele europene și internaționale și ajută cumpărătorii din România să identifice, verifice și compare producători și furnizori din Türkiye și din coridoarele regionale.',
    labels:{name:'Denumirea companiei',founder:'Fondator',founded:'Anul înființării',headquarters:'Sediu'},
    headquarters:'Tuzla, Istanbul, Türkiye',footerLocation:'Tuzla, Istanbul, Türkiye'
  },
  bg:{
    aboutHeading:'Двупосочен търговски мост и стратегическо снабдяване',
    aboutBody:'CTSEG е независима B2B търговска къща със седалище в Истанбул. Подпомагаме турски производители при излаз на европейски и международни пазари и съдействаме на български купувачи при откриване, проверка и сравнение на производители и доставчици от Türkiye и регионалните търговски коридори.',
    labels:{name:'Име на дружеството',founder:'Основател',founded:'Година на основаване',headquarters:'Централа'},
    headquarters:'Тузла, Истанбул, Türkiye',footerLocation:'Тузла, Истанбул, Türkiye'
  },
  sr:{
    aboutHeading:'Dvosmerni trgovinski most i strateški sourcing',
    aboutBody:'CTSEG je nezavisna B2B trgovinska kuća sa sedištem u Istanbulu. Pomažemo proizvođačima iz Türkiye da uđu na evropska i međunarodna tržišta, a kupcima iz Srbije da pronađu, provere i uporede proizvođače i dobavljače iz Türkiye i regionalnih trgovinskih koridora.',
    labels:{name:'Naziv kompanije',founder:'Osnivač',founded:'Godina osnivanja',headquarters:'Sedište'},
    headquarters:'Tuzla, Istanbul, Türkiye',footerLocation:'Tuzla, Istanbul, Türkiye'
  }
});
Object.assign(sectionSlugs.services as any,{ro:'servicii',bg:'uslugi',sr:'usluge'});
Object.assign(sectionSlugs.products as any,{ro:'produse-comerciale',bg:'targovski-produkti',sr:'trgovinski-proizvodi'});
Object.assign(sectionSlugs.markets as any,{ro:'piete',bg:'pazari',sr:'trzista'});
Object.assign(sectionSlugs.insights as any,{ro:'analize',bg:'analizi',sr:'uvidi'});
Object.assign(sectionSlugs.about as any,{ro:'despre-noi',bg:'za-nas',sr:'o-nama'});
Object.assign(sectionSlugs.contact as any,{ro:'contact',bg:'kontakt',sr:'kontakt'});

Object.assign(ui as any,{
  ro:{
    home:'Acasă',services:'Servicii',products:'Produse comerciale',markets:'Piețe',insights:'Analize',
    about:'Despre noi',contact:'Contact',quote:'Solicită ofertă',menu:'Deschide meniul',close:'Închide meniul',
    language:'Selectarea limbii',readMore:'Vezi detalii',allProducts:'Vezi toate produsele',allServices:'Vezi toate serviciile',
    origin:'Transparența originii',quality:'Calitate și conformitate',logistics:'Evaluare comercială',applications:'Aplicații',
    faq:'Întrebări frecvente',related:'Soluții conexe',updated:'Ultima actualizare',details:'Detalii',
    cookieTitle:'Preferințe cookie',cookieCopy:'Folosim cookie-uri analitice numai cu acordul dvs. Cookie-urile esențiale sunt întotdeauna active.',
    accept:'Accept',reject:'Respinge',rights:'Toate drepturile rezervate.',
    samplePolicy:'Politica de mostre',sampleText:'Mostrele nu sunt gratuite și nici disponibile public. Pot fi analizate după precalificare pentru cumpărători comerciali serioși, după verificarea companiei, utilizării, volumului estimativ și țării de livrare.',
    complianceText:'Originea reală, producătorul și documentele de lot sunt declarate transparent. CTSEG nu susține ascunderea originii sau reetichetarea înșelătoare.',
    contactLead:'Trimiteți compania, cerința, volumul estimativ și țara de livrare. Echipa noastră va stabili traseul comercial potrivit.',
    emptyInsights:'Nu există încă analize publicate în limba română.'
  },
  bg:{
    home:'Начало',services:'Услуги',products:'Търговски продукти',markets:'Пазари',insights:'Анализи',
    about:'За нас',contact:'Контакт',quote:'Поискай оферта',menu:'Отвори менюто',close:'Затвори менюто',
    language:'Избор на език',readMore:'Виж повече',allProducts:'Всички продукти',allServices:'Всички услуги',
    origin:'Прозрачен произход',quality:'Качество и съответствие',logistics:'Търговска оценка',applications:'Приложения',
    faq:'Често задавани въпроси',related:'Свързани решения',updated:'Последна актуализация',details:'Детайли',
    cookieTitle:'Настройки за бисквитки',cookieCopy:'Използваме аналитични бисквитки само с ваше съгласие. Необходимите бисквитки са винаги активни.',
    accept:'Приемам',reject:'Отказвам',rights:'Всички права запазени.',
    samplePolicy:'Политика за мостри',sampleText:'Мострите не са безплатни и не са публично достъпни. Те се разглеждат след предварителна квалификация на сериозни B2B купувачи и проверка на фирма, приложение, ориентировъчен обем и държава на доставка.',
    complianceText:'Реалният произход, производителят и документите за партидата се декларират прозрачно. CTSEG не подкрепя прикриване на произход или подвеждащо преетикетиране.',
    contactLead:'Споделете фирмата, нуждата, ориентировъчния обем и държавата за доставка. Екипът ни ще определи подходящия търговски процес.',
    emptyInsights:'Все още няма публикувани анализи на български.'
  },
  sr:{
    home:'Početna',services:'Usluge',products:'Trgovinski proizvodi',markets:'Tržišta',insights:'Uvidi',
    about:'O nama',contact:'Kontakt',quote:'Zatraži ponudu',menu:'Otvori meni',close:'Zatvori meni',
    language:'Izbor jezika',readMore:'Saznaj više',allProducts:'Pogledaj sve proizvode',allServices:'Pogledaj sve usluge',
    origin:'Transparentnost porekla',quality:'Kvalitet i usklađenost',logistics:'Komercijalna procena',applications:'Primene',
    faq:'Česta pitanja',related:'Povezana rešenja',updated:'Poslednje ažuriranje',details:'Detalji',
    cookieTitle:'Podešavanja kolačića',cookieCopy:'Analitičke kolačiće koristimo samo uz vašu saglasnost. Neophodni kolačići su uvek aktivni.',
    accept:'Prihvati',reject:'Odbij',rights:'Sva prava zadržana.',
    samplePolicy:'Politika uzoraka',sampleText:'Uzorci nisu besplatni niti javno dostupni. Razmatraju se nakon pretkvalifikacije ozbiljnih B2B kupaca i provere kompanije, namene, okvirnog obima i zemlje isporuke.',
    complianceText:'Stvarno poreklo, proizvođač i dokumentacija serije navode se transparentno. CTSEG ne podržava prikrivanje porekla niti obmanjujuće prepakivanje ili preoznačavanje.',
    contactLead:'Pošaljite podatke o kompaniji, potrebi, okvirnom obimu i zemlji isporuke. Naš tim će odrediti odgovarajući komercijalni postupak.',
    emptyInsights:'Još nema objavljenih uvida na srpskom jeziku.'
  }
});

Object.assign(homeCopy as any,{
  ro:{
    eyebrow:'Sourcing strategic · comerț internațional',title:'Claritate comercială pentru decizii complexe de aprovizionare.',
    lead:'Combinăm identificarea producătorilor, verificarea, calitatea, costul total și compatibilitatea cu piața într-un proces disciplinat de decizie.',
    signal:'CTSEG Signal Room',live:'Evaluare activă',signals:[['SOURCING','Producător și capacitate'],['CALITATE','COA și trasabilitate'],['PIAȚĂ','Conformitate și model de livrare']],
    trust:['Contrapărți verificate','Origine transparentă','Disciplină B2B în decizie','Türkiye · Europa · Internațional'],
    servicesTitle:'Mai mult decât o listă de furnizori.',servicesLead:'Structurăm întregul proces, de la cerință și verificare până la ofertă și execuție.',
    productsTitle:'Portofoliu comercial verificabil.',productsLead:'Produse selectate evaluate transparent prin origine, lot, parametri de calitate și opțiuni de livrare.',
    marketsTitle:'Conexiuni comerciale aplicabile între piețe.',marketsLead:'Sourcing și coordonare comercială din Türkiye către România, Europa și piețe internaționale.',
    processTitle:'Progres controlat în patru pași',process:['Definirea cerinței','Verificarea pieței și contrapărților','Compararea imaginii comerciale totale','Monitorizarea execuției și performanței'],
    ctaTitle:'Transformați următoarea decizie de sourcing într-una bazată pe dovezi.'
  },
  bg:{
    eyebrow:'Стратегическо снабдяване · международна търговия',title:'Търговска яснота при сложни решения за снабдяване.',
    lead:'Обединяваме търсене на производители, проверка, качество, обща цена и пазарна приложимост в дисциплиниран процес за вземане на решения.',
    signal:'CTSEG Signal Room',live:'Активна оценка',signals:[['СНАБДЯВАНЕ','Производител и капацитет'],['КАЧЕСТВО','COA и проследимост'],['ПАЗАР','Съответствие и модел на доставка']],
    trust:['Проверени контрагенти','Прозрачен произход','B2B дисциплина при решенията','Türkiye · Европа · Международно'],
    servicesTitle:'Повече от списък с доставчици.',servicesLead:'Структурираме целия процес – от изискването и проверката до офертата и изпълнението.',
    productsTitle:'Проверим търговски продуктов портфейл.',productsLead:'Подбрани продукти, оценявани прозрачно по произход, партида, качество и варианти за доставка.',
    marketsTitle:'Практични връзки между пазари.',marketsLead:'Снабдяване и търговска координация от Türkiye към България, Европа и международни пазари.',
    processTitle:'Контролиран процес в четири стъпки',process:['Дефиниране на нуждата','Проверка на пазара и контрагентите','Сравнение на общата търговска картина','Проследяване на изпълнението и резултатите'],
    ctaTitle:'Вземете следващото решение за снабдяване на база проверими данни.'
  },
  sr:{
    eyebrow:'Strateški sourcing · međunarodna trgovina',title:'Komercijalna jasnoća za složene odluke o nabavci.',
    lead:'Objedinjujemo pronalaženje proizvođača, proveru, kvalitet, ukupan trošak i tržišnu usklađenost u disciplinovan proces odlučivanja.',
    signal:'CTSEG Signal Room',live:'Aktivna procena',signals:[['SOURCING','Proizvođač i kapacitet'],['KVALITET','COA i sledljivost'],['TRŽIŠTE','Usklađenost i model isporuke']],
    trust:['Provereni poslovni partneri','Transparentno poreklo','B2B disciplina odlučivanja','Türkiye · Evropa · Međunarodno'],
    servicesTitle:'Više od liste dobavljača.',servicesLead:'Strukturišemo ceo proces – od zahteva i provere do ponude i realizacije.',
    productsTitle:'Proverljiv trgovinski portfolio proizvoda.',productsLead:'Odabrani proizvodi procenjeni kroz transparentno poreklo, seriju, parametre kvaliteta i opcije isporuke.',
    marketsTitle:'Primenljive veze između tržišta.',marketsLead:'Sourcing i trgovinska koordinacija iz Türkiye prema Srbiji, Evropi i međunarodnim tržištima.',
    processTitle:'Kontrolisan napredak u četiri koraka',process:['Definisanje zahteva','Provera tržišta i partnera','Poređenje ukupne komercijalne slike','Praćenje realizacije i učinka'],
    ctaTitle:'Neka sledeća sourcing odluka bude zasnovana na dokazima.'
  }
});

const balkanServices:any = {
  ro:{
    'strategic-sourcing':['sourcing-strategic','Sourcing strategic','Analiză de piață, RFQ, verificare și compararea ofertelor pentru decizii B2B de aprovizionare din Türkiye și piețe regionale.'],
    'supplier-verification':['verificare-furnizori','Verificarea furnizorilor','Verificarea identității companiei, capacității, documentelor, referințelor și condițiilor comerciale înaintea unei decizii de achiziție.'],
    'trade-advisory':['consultanta-comerciala','Consultanță comercială','Structurarea rutelor comerciale, documentelor, riscurilor și pașilor de implementare pentru tranzacții internaționale B2B.'],
    'tco':['analiza-costului-total','Analiza costului total (TCO)','Compararea prețului, transportului, taxelor, asigurării, stocului și riscului printr-un model de cost total.'],
    'market-entry':['intrare-pe-piata','Export și intrare pe piață','Evaluarea pregătirii comerciale, cercetarea pieței, identificarea cumpărătorilor și coordonarea primelor contacte.']
  },
  bg:{
    'strategic-sourcing':['strategichesko-snabdyavane','Стратегическо снабдяване','Пазарен анализ, RFQ, проверка и сравнение на оферти за B2B снабдяване от Türkiye и регионални пазари.'],
    'supplier-verification':['proverka-na-dostavchitsi','Проверка на доставчици','Проверка на фирмена идентичност, капацитет, документи, референции и търговски условия преди решение за покупка.'],
    'trade-advisory':['targovski-konsultatsii','Търговски консултации','Структуриране на търговски маршрути, документи, рискове и стъпки за изпълнение при международни B2B сделки.'],
    'tco':['analiz-na-obshta-tsena','Анализ на общата цена (TCO)','Сравнение на цена, транспорт, мита, застраховка, складови разходи и риск чрез модел на обща стойност.'],
    'market-entry':['navlizane-na-pazara','Износ и навлизане на пазара','Оценка на търговската готовност, пазарно проучване, идентифициране на купувачи и координация на първоначалния контакт.']
  },
  sr:{
    'strategic-sourcing':['strateski-sourcing','Strateški sourcing','Analiza tržišta, RFQ, provera i poređenje ponuda za B2B nabavku iz Türkiye i regionalnih tržišta.'],
    'supplier-verification':['provera-dobavljaca','Provera dobavljača','Provera identiteta kompanije, kapaciteta, dokumentacije, referenci i komercijalnih uslova pre odluke o kupovini.'],
    'trade-advisory':['trgovinsko-savetovanje','Trgovinsko savetovanje','Strukturisanje trgovinskih ruta, dokumentacije, rizika i koraka realizacije za međunarodne B2B transakcije.'],
    'tco':['analiza-ukupnog-troska','Analiza ukupnog troška (TCO)','Poređenje cene, transporta, carina, osiguranja, skladištenja i rizika kroz model ukupnog troška.'],
    'market-entry':['ulazak-na-trziste','Izvoz i ulazak na tržište','Procena komercijalne spremnosti, istraživanje tržišta, identifikacija kupaca i koordinacija prvog kontakta.']
  }
};
for(const lang of ['ro','bg','sr']){
  for(const id of serviceIds){
    const [slug,name,description]=balkanServices[lang][id];
    Object.assign(services[id].slugs as any,{[lang]:slug});
    Object.assign(services[id].names as any,{[lang]:name});
    Object.assign(services[id].descriptions as any,{[lang]:description});
  }
}

const balkanProductNames:any = {
  ro:['Fistic Akbari','Fistic Kalleh Ghouchi (Jumbo)','Fistic Fandoghi (Rotund)','Fistic Ahmad Aghaei','Miez de fistic verde decojit','Miez și granule de fistic','Curmale Mazafati','Pastă și sirop de curmale','Stafide','Migdale','Nuci','Caise uscate și sâmburi','Semințe de dovleac','Semințe de floarea-soarelui','Șofran','Dude uscate','Zereshk (drăcile uscate)','Mix de nuci și specialități'],
  bg:['Фъстък Акбари','Фъстък Kalleh Ghouchi (Jumbo)','Фъстък Fandoghi (кръгъл)','Фъстък Ahmad Aghaei','Зелени белени ядки от шамфъстък','Ядки и гранули от шамфъстък','Фурми Mazafati','Паста и сироп от фурми','Стафиди','Бадеми','Орехи','Сушени кайсии и ядки','Тиквени семки','Слънчогледови семки','Шафран','Сушени черници','Зерешк (сушен берберис)','Микс ядки и специалитети'],
  sr:['Akbari pistaći','Kalleh Ghouchi pistaći (Jumbo)','Fandoghi pistaći (okrugli)','Ahmad Aghaei pistaći','Zeleni oljušteni pistaći','Jezgra i granule pistaća','Mazafati urme','Pasta i sirup od urmi','Suvo grožđe','Badem','Orah','Suve kajsije i koštice','Seme bundeve','Suncokretovo seme','Šafran','Sušeni dud','Zereshk (sušeni žutika plod)','Mešani orašasti plodovi i specijaliteti']
};
const balkanProductDescriptions:any = {
  ro:[
    'Fistic iranian alungit, cu deschidere naturală, pentru retail premium, cadouri și HoReCa.',
    'Fistic jumbo mare și rotund, potrivit pentru retail premium și mixuri de snackuri.',
    'Fistic compact și rotund pentru procesare industrială, cofetărie, înghețată și ambalare de volum.',
    'Fistic cu coajă deschisă, formă elegant alungită și aromă bogată, apreciat pe piețele europene.',
    'Miez verde intens, recoltat timpuriu, pentru patiserie premium, gelato și ciocolaterie.',
    'Granule și fâșii de fistic calibrate pentru patiserie, toppinguri, umpluturi și producție industrială.',
    'Curmale moi, închise la culoare și natural umede pentru retail și consum direct.',
    'Pastă de curmale fără aditivi și sirop concentrat ca alternativă naturală la zahăr.',
    'Stafide pentru distribuție angro, procesare alimentară și ambalare privată.',
    'Migdale pentru comerț angro, procesare, cofetărie și retail specializat.',
    'Nuci în coajă și miez de nucă pentru distribuție B2B și industria alimentară.',
    'Caise uscate și sâmburi pentru retail, ingrediente și procesare alimentară.',
    'Semințe de dovleac pentru snackuri, brutării și distribuție angro.',
    'Semințe de floarea-soarelui pentru consum, procesare și distribuție de volum.',
    'Șofran premium pentru gastronomie, retail specializat și ingrediente cu valoare ridicată.',
    'Dude albe uscate natural pentru retail sănătos, mixuri și ingrediente.',
    'Zereshk roșu uscat pentru gastronomie persană, retail și distribuție specializată.',
    'Mixuri comerciale de nuci și produse speciale configurate pentru canal, ambalaj și piață.'
  ],
  bg:[
    'Удължен ирански шамфъстък с естествено отворена черупка за премиум търговия, подаръчни опаковки и HoReCa.',
    'Едър кръгъл jumbo шамфъстък за премиум търговия и ядкови миксове.',
    'Компактен кръгъл шамфъстък за индустриална преработка, сладкарство, сладолед и висок обем.',
    'Светла черупка, издължена форма и богат вкус, предпочитан на европейските пазари.',
    'Интензивно зелени белени ядки от ранна реколта за премиум сладкарство, джелато и шоколад.',
    'Калибрирани гранули и резени шамфъстък за печива, топинги, пълнежи и индустриални приложения.',
    'Меки, тъмни и естествено сочни фурми за директна консумация и търговия на дребно.',
    'Чиста паста и концентриран сироп от фурми като естествен заместител на захарта.',
    'Стафиди за едро, хранителна преработка и private label опаковане.',
    'Бадеми за търговия на едро, преработка, сладкарство и специализиран retail.',
    'Орехи с черупка и ядки за B2B дистрибуция и хранителната индустрия.',
    'Сушени кайсии и ядки за retail, съставки и хранителна преработка.',
    'Тиквени семки за снакс, пекарни и търговия на едро.',
    'Слънчогледови семки за директна консумация, преработка и обемна дистрибуция.',
    'Премиум шафран за гастрономия, специализиран retail и високостойностни съставки.',
    'Естествено сушени бели черници за здравословен retail, миксове и съставки.',
    'Сушен червен zereshk за персийска кухня, специализиран retail и дистрибуция.',
    'Търговски миксове от ядки и специални продукти според канал, опаковка и целеви пазар.'
  ],
  sr:[
    'Izduženi iranski pistaći sa prirodno otvorenom ljuskom za premium maloprodaju, poklon-pakovanja i HoReCa kanal.',
    'Krupni, zaobljeni jumbo pistaći za premium prodaju i snack mešavine.',
    'Kompaktni okrugli pistaći za industrijsku preradu, poslastičarstvo, sladoled i velike serije pakovanja.',
    'Svetla ljuska, elegantno izdužen oblik i bogata aroma, cenjeni na evropskim tržištima.',
    'Intenzivno zelena oljuštena jezgra rane berbe za vrhunsko poslastičarstvo, gelato i čokoladu.',
    'Kalibrisane granule i listići pistaća za pekarstvo, prelive, punjenja i industrijsku proizvodnju.',
    'Meke, tamne i prirodno sočne urme za direktnu potrošnju i maloprodaju.',
    'Čista pasta i koncentrisani sirup od urmi kao prirodna alternativa rafinisanom šećeru.',
    'Suvo grožđe za veleprodaju, prehrambenu preradu i private-label pakovanje.',
    'Badem za veleprodaju, preradu, poslastičarstvo i specijalizovanu maloprodaju.',
    'Orah u ljusci i jezgra za B2B distribuciju i prehrambenu industriju.',
    'Suve kajsije i jezgra koštice za retail, sastojke i prehrambenu preradu.',
    'Seme bundeve za grickalice, pekarstvo i veleprodajnu distribuciju.',
    'Suncokretovo seme za direktnu potrošnju, preradu i velike distributivne količine.',
    'Premium šafran za gastronomiju, specijalizovanu maloprodaju i sastojke visoke vrednosti.',
    'Prirodno sušeni beli dud za zdravu hranu, mešavine i sastojke.',
    'Sušeni crveni zereshk za persijsku gastronomiju, specijalizovani retail i distribuciju.',
    'Komercijalne mešavine orašastih plodova i specijaliteta prilagođene kanalu, pakovanju i tržištu.'
  ]
};
for(const lang of ['ro','bg','sr']){
  productIds.forEach((id,index)=>{
    Object.assign(productNames[id] as any,{[lang]:balkanProductNames[lang][index]});
    Object.assign(productDescriptions[id] as any,{[lang]:balkanProductDescriptions[lang][index]});
    Object.assign(productSlugs[id] as any,{[lang]:id});
  });
}

Object.assign(editorialCopy as any,{
  ro:{manifestoTitle:'Comerțul internațional înseamnă mai mult decât o listă de intermediari.',manifestoText:'CTSEG combină dezvoltarea exportului, verificarea fabricilor, sourcingul strategic și disciplina costului total într-un singur sistem comercial transfrontalier.',portfolioTitle:'Coridoare strategice de comerț și sourcing',portfolioText:'Portofoliul reflectă rețeaua comercială bidirecțională CTSEG pentru produse industriale, materii prime agricole și categorii B2B selectate.',marketsKicker:'Dezvoltare export · verificarea originii · analiză TCO · coordonarea livrării',productImageNote:'Imaginea reprezintă categoria; specificațiile tehnice și parametrii lotului se verifică prin documentație TDS și de lot.'},
  bg:{manifestoTitle:'Международната търговия е повече от списък с посредници.',manifestoText:'CTSEG обединява развитие на износа, проверка на фабрики, стратегическо снабдяване и контрол на общите разходи в единна трансгранична търговска система.',portfolioTitle:'Стратегически търговски и снабдителни коридори',portfolioText:'Портфолиото представя двупосочната мрежа на CTSEG за индустриални продукти, аграрни суровини и избрани B2B категории.',marketsKicker:'Развитие на износа · проверка на произхода · TCO анализ · координация на доставката',productImageNote:'Изображението представя продуктовата категория; техническите характеристики и параметрите на партидата се проверяват чрез TDS и партидни документи.'},
  sr:{manifestoTitle:'Međunarodna trgovina je više od liste posrednika.',manifestoText:'CTSEG objedinjuje razvoj izvoza, proveru fabrika, strateški sourcing i disciplinu ukupnih troškova u jedinstven prekogranični trgovinski sistem.',portfolioTitle:'Strateški trgovinski i sourcing koridori',portfolioText:'Portfolio predstavlja dvosmernu CTSEG mrežu za industrijske proizvode, poljoprivredne sirovine i odabrane B2B kategorije.',marketsKicker:'Razvoj izvoza · provera porekla · TCO analiza · koordinacija isporuke',productImageNote:'Slika predstavlja kategoriju proizvoda; tehničke specifikacije i parametri serije proveravaju se kroz TDS i prateću dokumentaciju.'}
});

for(const id of legalIds){
  const local:any = {
    privacy:{ro:['politica-de-confidentialitate','Politica de confidențialitate'],bg:['politika-za-poveritelnost','Политика за поверителност'],sr:['politika-privatnosti','Politika privatnosti']},
    cookies:{ro:['politica-cookie','Politica cookie'],bg:['politika-za-biskvitki','Политика за бисквитки'],sr:['politika-kolacica','Politika kolačića']},
    terms:{ro:['termeni-de-utilizare','Termeni de utilizare'],bg:['usloviya-za-polzvane','Условия за ползване'],sr:['uslovi-koriscenja','Uslovi korišćenja']},
    'data-protection':{ro:['informare-protectia-datelor','Informare privind protecția datelor'],bg:['uvedomlenie-za-zashtita-na-dannite','Уведомление за защита на данните'],sr:['obavestenje-o-zastiti-podataka','Obaveštenje o zaštiti podataka']}
  }[id];
  for(const lang of ['ro','bg','sr']){
    Object.assign(legal[id].slugs as any,{[lang]:local[lang][0]});
    Object.assign(legal[id].titles as any,{[lang]:local[lang][1]});
  }
}

Object.assign(pageCopy as any,{
  ro:{
    servicesTitle:'Competență pentru fiecare etapă a deciziei de sourcing.',servicesLead:'Combinăm strategie, verificare, analiză comercială și execuție într-o singură disciplină de decizie.',
    productsTitle:'Portofoliu de produse comerciale',productsLead:'Catalogul este evaluat prin origine transparentă, calitate la nivel de lot și condiții comerciale verificabile.',
    marketsTitle:'Din Türkiye către România, Europa și piețe internaționale.',marketsLead:'Corelăm realitatea producției cu reglementările pieței țintă, cerințele cumpărătorilor și modele de livrare aplicabile.',
    aboutTitle:'Partener independent pentru reducerea incertitudinii în comerț.',aboutLead:'CTSEG lucrează pe bază de dovezi, transparență și aplicabilitate în proiecte de sourcing strategic și comerț internațional.',
    contactTitle:'Porniți cerința comercială printr-o evaluare clară.',insightsTitle:'Analize practice pentru decidenți.',insightsLead:'Ghiduri concise, bazate pe dovezi, despre sourcing, cost total, origine, calitate și risc comercial.',
    framework:['Cerință și specificație','Verificarea contrapărții și documentelor','Comparație calitate, cost și risc','Decizie transparentă și evidență de execuție'],
    serviceFaq:['Cum începe un proiect?','Domeniul, obiectivul, produsul sau serviciul, piața și calendarul sunt clarificate într-o scurtă etapă de calificare.','CTSEG acționează în numele furnizorului?','CTSEG declară clar mandatul și rolul comercial și documentează criteriile de evaluare.'],
    productUses:['Producție alimentară și aplicații industriale','Distribuție angro și private label','HoReCa și retail specializat'],
    productQuality:['Cerințe privind aflatoxinele și pesticidele','Umiditate, microbiologie și specificație','COA, cod de lot și trasabilitate','Conformitate cu piața țintă'],
    legalIntro:'Această informare explică transparent utilizarea site-ului CTSEG și prelucrarea datelor asociată.',
    legalSections:[['Domeniu și responsabilitate','CTSEG urmărește menținerea corectitudinii informațiilor corporative și comerciale. Solicitările pot fi trimise la info@ctseg.com.tr.'],['Informații și scop','La contact putem prelucra numele, compania, e-mailul, telefonul și detaliile cerinței comerciale, precum și jurnale tehnice limitate pentru securitate.'],['Partajare, păstrare și securitate','Datele sunt partajate numai cu furnizori necesari și autorități competente, conform legii aplicabile, și sunt șterse sau anonimizate după expirarea scopului și perioadelor legale.'],['Drepturi și contact','Pentru acces, rectificare, ștergere, opoziție și alte drepturi privind datele, scrieți la info@ctseg.com.tr.']]
  },
  bg:{
    servicesTitle:'Експертиза за всеки етап от решението за снабдяване.',servicesLead:'Обединяваме стратегия, проверка, търговски анализ и изпълнение в единна дисциплина за вземане на решения.',
    productsTitle:'Търговски продуктов портфейл',productsLead:'Каталогът се оценява чрез прозрачен произход, качество по партиди и проверими търговски условия.',
    marketsTitle:'От Türkiye към България, Европа и международните пазари.',marketsLead:'Съчетаваме реалните производствени възможности с регулациите на целевия пазар, изискванията на купувачите и приложими модели за доставка.',
    aboutTitle:'Независим партньор за намаляване на несигурността в търговията.',aboutLead:'CTSEG работи с доказателства, прозрачност и практическа приложимост при стратегическо снабдяване и международна търговия.',
    contactTitle:'Започнете търговската си заявка с ясна оценка.',insightsTitle:'Практични анализи за вземащите решения.',insightsLead:'Кратки, основани на данни материали за снабдяване, общи разходи, произход, качество и търговски риск.',
    framework:['Нужда и спецификация','Проверка на контрагенти и документи','Сравнение на качество, разходи и риск','Прозрачно решение и запис на изпълнението'],
    serviceFaq:['Как започва проектът?','Обхватът, целта, продуктът или услугата, пазарът и срокът за решение се уточняват в кратка квалификационна среща.','CTSEG работи ли от името на доставчик?','CTSEG ясно декларира мандата и търговската си роля и документира критериите за оценка.'],
    productUses:['Хранително производство и индустриални приложения','Дистрибуция на едро и private label','HoReCa и специализиран retail'],
    productQuality:['Изисквания за афлатоксини и пестициди','Влага, микробиология и продуктова спецификация','COA, партиден код и проследимост','Съответствие с целевия пазар'],
    legalIntro:'Това уведомление предоставя прозрачна информация за използването на сайта CTSEG и свързаната обработка на данни.',
    legalSections:[['Обхват и отговорност','CTSEG се стреми да поддържа точна корпоративна и търговска информация. Запитвания могат да се изпращат на info@ctseg.com.tr.'],['Информация и цел','При контакт можем да обработваме име, фирма, имейл, телефон и данни за търговската заявка, както и ограничени технически записи за сигурност.'],['Споделяне, съхранение и сигурност','Данните се споделят само с необходимите доставчици и компетентни органи съгласно приложимото право и се изтриват или анонимизират след отпадане на целта и законовите срокове.'],['Права и контакт','За достъп, корекция, изтриване, възражение и други права за защита на данните пишете на info@ctseg.com.tr.']]
  },
  sr:{
    servicesTitle:'Stručnost za svaku fazu sourcing odluke.',servicesLead:'Povezujemo strategiju, proveru, komercijalnu analizu i realizaciju u jedinstvenu disciplinu odlučivanja.',
    productsTitle:'Portfolio trgovinskih proizvoda',productsLead:'Katalog se procenjuje kroz transparentno poreklo, kvalitet po seriji i proverljive komercijalne uslove.',
    marketsTitle:'Iz Türkiye ka Srbiji, Evropi i međunarodnim tržištima.',marketsLead:'Povezujemo realne proizvodne mogućnosti sa pravilima ciljnog tržišta, očekivanjima kupaca i primenljivim modelima isporuke.',
    aboutTitle:'Nezavisni partner za smanjenje neizvesnosti u trgovini.',aboutLead:'CTSEG radi na osnovu dokaza, transparentnosti i primenljivosti u strateškom sourcingu i međunarodnoj trgovini.',
    contactTitle:'Pokrenite komercijalni zahtev jasnom procenom.',insightsTitle:'Praktični uvidi za donosioce odluka.',insightsLead:'Sažeti vodiči zasnovani na dokazima o sourcingu, ukupnom trošku, poreklu, kvalitetu i komercijalnom riziku.',
    framework:['Zahtev i specifikacija','Provera partnera i dokumentacije','Poređenje kvaliteta, troška i rizika','Transparentna odluka i evidencija realizacije'],
    serviceFaq:['Kako počinje projekat?','Obim, cilj, proizvod ili usluga, tržište i rok odluke razjašnjavaju se u kratkom kvalifikacionom razgovoru.','Da li CTSEG radi u ime dobavljača?','CTSEG jasno navodi mandat i komercijalnu ulogu i dokumentuje kriterijume procene.'],
    productUses:['Prehrambena proizvodnja i industrijske primene','Veleprodaja i private label','HoReCa i specijalizovana maloprodaja'],
    productQuality:['Zahtevi za aflatoksine i pesticide','Vlaga, mikrobiologija i specifikacija proizvoda','COA, kod serije i sledljivost','Usklađenost sa ciljnim tržištem'],
    legalIntro:'Ovo obaveštenje transparentno opisuje korišćenje CTSEG sajta i povezanu obradu podataka.',
    legalSections:[['Obim i odgovornost','CTSEG nastoji da korporativne i komercijalne informacije budu tačne. Zahtevi se mogu poslati na info@ctseg.com.tr.'],['Podaci i svrha','Kada nas kontaktirate možemo obrađivati ime, kompaniju, e-mail, telefon i detalje komercijalnog zahteva, kao i ograničene tehničke zapise radi bezbednosti.'],['Deljenje, čuvanje i bezbednost','Podaci se dele samo sa neophodnim pružaocima usluga i nadležnim organima u skladu sa primenljivim pravom i brišu se ili anonimizuju po isteku svrhe i zakonskih rokova.'],['Prava i kontakt','Za pristup, ispravku, brisanje, prigovor i druga prava u vezi sa podacima pišite na info@ctseg.com.tr.']]
  }
});
