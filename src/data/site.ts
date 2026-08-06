import { guideSlugs, specialSlugs, type GuideId } from './completion';
import { activeLocales, localeByCode, siteLocales, type SiteLocale } from './locales';

export const locales = siteLocales;
export type Locale = SiteLocale;

export const localeNames: Record<Locale, string> = {
  tr: localeByCode.tr.label, en: localeByCode.en.label, de: localeByCode.de.label, it: localeByCode.it.label, ru: localeByCode.ru.label
};

export { activeLocales };

type Localized<T = string> = Record<Locale, T>;

export const company = {
  name: 'CTSEG Sanayi ve Ticaret Limited Şirketi',
  alternateName: 'CTSEG',
  founder: 'Teyfik Gökdemir',
  foundingYear: '2022',
  streetAddress: 'Fevzipaşa Caddesi',
  addressLocality: 'Fatih',
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
    headquarters: 'Fevzipaşa Caddesi, Fatih, İstanbul, Türkiye',
    footerLocation: 'Fatih, İstanbul, Türkiye'
  },
  en: {
    aboutHeading: 'From Istanbul to international trade',
    aboutBody: 'CTSEG Sanayi ve Ticaret Limited Şirketi was founded in Istanbul in 2022 by Teyfik Gökdemir. CTSEG supports companies with strategic sourcing, manufacturer and supplier verification, cost analysis, trade product sourcing and international trade processes.',
    labels: { name: 'Company name', founder: 'Founder', founded: 'Year established', headquarters: 'Headquarters' },
    headquarters: 'Fevzipaşa Caddesi, Fatih, Istanbul, Türkiye',
    footerLocation: 'Fatih, Istanbul, Türkiye'
  },
  de: {
    aboutHeading: 'Von Istanbul in den internationalen Handel',
    aboutBody: 'CTSEG Sanayi ve Ticaret Limited Şirketi wurde 2022 von Teyfik Gökdemir in Istanbul gegründet. CTSEG unterstützt Unternehmen bei strategischer Beschaffung, der Prüfung von Herstellern und Lieferanten, Kostenanalysen, der Beschaffung von Handelsprodukten und internationalen Handelsprozessen.',
    labels: { name: 'Unternehmensname', founder: 'Gründer', founded: 'Gründungsjahr', headquarters: 'Hauptsitz' },
    headquarters: 'Fevzipaşa Caddesi, Fatih, Istanbul, Türkei',
    footerLocation: 'Fatih, Istanbul, Türkei'
  },
  it: {
    aboutHeading: 'Da Istanbul al commercio internazionale',
    aboutBody: 'CTSEG Sanayi ve Ticaret Limited Şirketi è stata fondata a Istanbul nel 2022 da Teyfik Gökdemir. CTSEG affianca le aziende nel sourcing strategico, nella verifica di produttori e fornitori, nell’analisi dei costi, nell’approvvigionamento di prodotti commerciali e nei processi di commercio internazionale.',
    labels: { name: 'Nome dell’azienda', founder: 'Fondatore', founded: 'Anno di fondazione', headquarters: 'Sede' },
    headquarters: 'Fevzipaşa Caddesi, Fatih, Istanbul, Turchia',
    footerLocation: 'Fatih, Istanbul, Turchia'
  },
  ru: {
    aboutHeading: 'Из Стамбула — на международные рынки',
    aboutBody: 'CTSEG Sanayi ve Ticaret Limited Şirketi основана Тейфиком Гёкдемиром в Стамбуле в 2022 году. Компания помогает с международным сорсингом, проверкой производителей и поставщиков, поиском покупателей и коммерческой координацией.',
    labels: { name: 'Компания', founder: 'Основатель', founded: 'Год основания', headquarters: 'Главный офис' },
    headquarters: 'Fevzipaşa Caddesi, Fatih, Стамбул, Турция',
    footerLocation: 'Фатих, Стамбул, Турция'
  }
};

export const sectionSlugs: Record<string, Localized> = {
  services: { tr: 'hizmetler', en: 'services', de: 'dienstleistungen', it: 'servizi', ru: 'services' },
  products: { tr: 'ticari-urunler', en: 'trade-products', de: 'handelsprodukte', it: 'prodotti-commerciali', ru: 'products' },
  markets: { tr: 'pazarlar', en: 'markets', de: 'maerkte', it: 'mercati', ru: 'markets' },
  insights: { tr: 'icgoruler', en: 'insights', de: 'einblicke', it: 'approfondimenti', ru: 'insights' },
  about: { tr: 'hakkimizda', en: 'about', de: 'ueber-uns', it: 'chi-siamo', ru: 'about' },
  contact: { tr: 'iletisim', en: 'contact', de: 'kontakt', it: 'contatti', ru: 'contact' }
};

export const ui: Record<Locale, any> = {
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
    home: 'Главная', services: 'Услуги', products: 'Направления', markets: 'Рынки', insights: 'Материалы',
    about: 'О компании', contact: 'Контакты', quote: 'Отправить запрос', menu: 'Открыть меню', close: 'Закрыть меню', medicalLabel: 'REFLEX Медицина',
    language: 'Выбор языка', readMore: 'Подробнее', allProducts: 'Все направления', allServices: 'Все услуги',
    origin: 'Прозрачность происхождения', quality: 'Качество и соответствие', logistics: 'Коммерческая оценка', applications: 'Применение',
    faq: 'Частые вопросы', related: 'Связанные решения', updated: 'Обновлено', details: 'Подробнее',
    cookieTitle: 'Настройки cookie', cookieCopy: 'Аналитические cookie используются только с вашего согласия. Необходимые cookie всегда активны.',
    accept: 'Принять', reject: 'Отклонить', rights: 'Все права защищены.',
    samplePolicy: 'Работа с образцами', sampleText: 'Образцы рассматриваются после предварительной оценки коммерческого запроса и данных о компании, назначении, объёме и стране поставки.',
    complianceText: 'Фактическое происхождение, производитель и документы на партию указываются прозрачно. CTSEG не поддерживает сокрытие происхождения или вводящую в заблуждение маркировку.',
    contactLead: 'Расскажите о компании, задаче, ориентировочном объёме и целевом рынке. Мы предложим подходящий формат коммерческой оценки.',
    emptyInsights: 'На русском языке материалов пока нет.'
  }
};

export const homeCopy: Record<Locale, any> = {
  tr: {
    eyebrow: 'Stratejik tedarik · uluslararası ticaret', title: 'Karmaşık tedarik kararlarını ticari güvene dönüştürüyoruz.',
    lead: 'Üretici keşfi, doğrulama, kalite, toplam maliyet ve pazar uygunluğunu tek bir karar sürecinde birleştiriyoruz.',
    signal: 'CTSEG Signal Room', live: 'Aktif değerlendirme', signals: [['TEDARİK', 'Üretici ve kapasite'], ['KALİTE', 'COA ve izlenebilirlik'], ['PAZAR', 'Mevzuat ve teslim modeli']],
    trust: ['Doğrulanmış karşı taraflar', 'Şeffaf menşe', 'B2B karar disiplini', 'Türkiye · Avrupa · Uluslararası'],
    servicesTitle: 'Bir satın alma listesinden daha fazlası.', servicesLead: 'İhtiyaçtan doğrulamaya, tekliften uygulamaya kadar kararın tamamını yapılandırıyoruz.',
    productsTitle: 'Doğrulanabilir ticari ürün portföyü.', productsLead: 'Menşe, parti, kalite parametreleri ve teslim seçenekleri açıkça değerlendirilen seçili gıda ürünleri.',
    marketsTitle: 'Pazarlar arasında uygulanabilir bağlantılar.', marketsLead: 'Türkiye merkezli, Avrupa ve uluslararası pazarlara uzanan tedarik ve ticaret koordinasyonu.',
    processTitle: 'Dört adımda kontrollü ilerleme', process: ['İhtiyacı tanımla', 'Pazarı ve tarafları doğrula', 'Toplam ticari resmi karşılaştır', 'Uygulamayı ve performansı izle'],
    ctaTitle: 'Bir sonraki tedarik kararınızı kanıta dayalı hale getirin.'
  },
  en: {
    eyebrow: 'Strategic sourcing · international trade', title: 'Commercial confidence for complex sourcing decisions.',
    lead: 'We combine producer discovery, verification, quality, total cost and market fit in one disciplined decision process.',
    signal: 'CTSEG Signal Room', live: 'Active assessment', signals: [['SUPPLY', 'Producer and capacity'], ['QUALITY', 'COA and traceability'], ['MARKET', 'Compliance and delivery model']],
    trust: ['Verified counterparties', 'Transparent origin', 'B2B decision discipline', 'Türkiye · European markets · International markets'],
    servicesTitle: 'More than a purchasing list.', servicesLead: 'We structure the complete decision, from requirement and verification to quotation and implementation.',
    productsTitle: 'A verifiable trade product portfolio.', productsLead: 'Selected food products assessed transparently for origin, batch, quality parameters and delivery options.',
    marketsTitle: 'Executable connections across markets.', marketsLead: 'Türkiye-based sourcing and trade coordination extending into Europe and international markets.',
    processTitle: 'Controlled progress in four steps', process: ['Define the requirement', 'Verify market and counterparties', 'Compare the total commercial picture', 'Monitor execution and performance'],
    ctaTitle: 'Make your next sourcing decision evidence-led.'
  },
  de: {
    eyebrow: 'Strategische Beschaffung · internationaler Handel', title: 'Mehr Sicherheit bei komplexen Beschaffungs\u00ADentscheidungen.',
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
  }
};

export const serviceIds = ['strategic-sourcing', 'supplier-verification', 'trade-advisory', 'tco', 'market-entry'] as const;
export const services: Record<(typeof serviceIds)[number], { slugs: Localized; names: Localized; descriptions: Localized }> = {
  'strategic-sourcing': {
    slugs: { tr:'stratejik-tedarik', en:'strategic-sourcing', de:'strategische-beschaffung', it:'approvvigionamento-strategico', ru:'sourcing-strategique' },
    names: { tr:'Stratejik Tedarik', en:'Strategic Sourcing', de:'Strategische Beschaffung', it:'Approvvigionamento strategico', ru:'Sourcing stratégique' },
    descriptions: {
      tr:'Tedarik pazarı analizi, RFQ, doğrulama, teklif karşılaştırma ve performans planıyla sürdürülebilir kararlar.',
      en:'Sustainable decisions through supply-market analysis, RFQ, verification, bid comparison and performance planning.',
      de:'Nachhaltige Entscheidungen durch Beschaffungsmarktanalyse, RFQ, Prüfung, Angebotsvergleich und Leistungsplanung.',
      it:'Decisioni sostenibili con analisi del mercato di fornitura, RFQ, verifica, confronto offerte e piano prestazioni.',
      ru:'Des décisions durables grâce à l’analyse du marché fournisseurs, au RFQ, à la vérification et au suivi de performance.'
    }
  },
  'supplier-verification': {
    slugs: { tr:'tedarikci-bulma-ve-dogrulama', en:'supplier-sourcing-and-verification', de:'lieferantensuche-und-pruefung', it:'ricerca-e-verifica-fornitori', ru:'recherche-et-verification-fournisseurs' },
    names: { tr:'Tedarikçi Bulma ve Doğrulama', en:'Supplier Sourcing & Verification', de:'Lieferantensuche & -prüfung', it:'Ricerca e verifica fornitori', ru:'Recherche et vérification fournisseurs' },
    descriptions: {
      tr:'Üretici keşfi, şirket, kapasite, belge, referans ve ticari şartların çapraz doğrulaması.',
      en:'Producer discovery and cross-verification of company, capacity, documents, references and commercial terms.',
      de:'Produzentensuche und Gegenprüfung von Unternehmen, Kapazität, Dokumenten, Referenzen und Konditionen.',
      it:'Ricerca produttori e verifica incrociata di azienda, capacità, documenti, referenze e condizioni commerciali.',
      ru:'Recherche de producteurs et vérification croisée de l’entreprise, des capacités, documents, références et conditions.'
    }
  },
  'trade-advisory': {
    slugs: { tr:'uluslararasi-ticaret-danismanligi', en:'international-trade-advisory', de:'internationale-handelsberatung', it:'consulenza-commercio-internazionale', ru:'conseil-commerce-international' },
    names: { tr:'Uluslararası Ticaret Danışmanlığı', en:'International Trade Advisory', de:'Internationale Handelsberatung', it:'Consulenza commercio internazionale', ru:'Conseil en commerce international' },
    descriptions: {
      tr:'Ticari model, Incoterms, belge, lojistik, karşı taraf ve uygulama risklerini birlikte yapılandırma.',
      en:'Structuring commercial model, Incoterms, documentation, logistics, counterparty and execution risk together.',
      de:'Gemeinsame Strukturierung von Handelsmodell, Incoterms, Dokumentation, Logistik und Ausführungsrisiken.',
      it:'Strutturazione integrata di modello commerciale, Incoterms, documenti, logistica e rischi di esecuzione.',
      ru:'Structuration conjointe du modèle commercial, des Incoterms, documents, flux logistiques et risques d’exécution.'
    }
  },
  tco: {
    slugs: { tr:'maliyet-optimizasyonu-tco', en:'cost-optimisation-tco', de:'kostenoptimierung-tco', it:'ottimizzazione-costi-tco', ru:'optimisation-couts-tco' },
    names: { tr:'Maliyet Optimizasyonu ve TCO', en:'Cost Optimisation & TCO', de:'Kostenoptimierung & TCO', it:'Ottimizzazione costi e TCO', ru:'Optimisation des coûts et TCO' },
    descriptions: {
      tr:'Birim fiyatın ötesinde lojistik, kalite, stok, finansman, gecikme ve risk maliyetlerini görünür kılma.',
      en:'Making logistics, quality, inventory, finance, delay and risk costs visible beyond unit price.',
      de:'Transparenz über Logistik-, Qualitäts-, Bestands-, Finanzierungs-, Verzögerungs- und Risikokosten.',
      it:'Visibilità su logistica, qualità, scorte, finanza, ritardi e rischio oltre il prezzo unitario.',
      ru:'Visibilité sur la logistique, la qualité, les stocks, le financement, les délais et les risques au-delà du prix unitaire.'
    }
  },
  'market-entry': {
    slugs: { tr:'pazar-girisi', en:'market-entry', de:'markteintritt', it:'ingresso-nel-mercato', ru:'entree-sur-le-marche' },
    names: { tr:'Pazar Girişi', en:'Market Entry', de:'Markteintritt', it:'Ingresso nel mercato', ru:'Entrée sur le marché' },
    descriptions: {
      tr:'Hedef pazar, kanal, partner, uygunluk ve ilk ticari uygulama için kanıta dayalı yol haritası.',
      en:'An evidence-led roadmap for target market, channel, partner, compliance and first commercial execution.',
      de:'Evidenzbasierter Fahrplan für Zielmarkt, Kanal, Partner, Konformität und erste Umsetzung.',
      it:'Roadmap basata su evidenze per mercato, canale, partner, conformità e prima esecuzione commerciale.',
      ru:'Feuille de route fondée sur des preuves pour le marché, le canal, le partenaire, la conformité et la première exécution.'
    }
  }
};

export const productIds = [
  'akbari-pistachio','kaleghouchi-pistachio','fandoghi-pistachio','ahmad-aghaei-pistachio',
  'green-peeled-pistachio','pistachio-granules','mazafati-dates','date-paste-syrup','raisins','almonds',
  'walnuts','dried-apricots-kernels','pumpkin-seeds','sunflower-seeds','saffron','dried-mulberries','zereshk','mixed-nuts'
] as const;

export const homeProductIds = [
  'akbari-pistachio','mazafati-dates','almonds','walnuts','saffron','zereshk'
] as const;

export type ProductMediaType = 'poster' | 'photo';
type ProductMedia = {
  src:string;
  width:number;
  height:number;
  mediaType:ProductMediaType;
  objectPosition?:string;
  secondary?:string;
};

const productNames: Record<(typeof productIds)[number], Localized> = {
  'akbari-pistachio': { tr:'Akbari Antep Fıstığı', en:'Akbari Pistachios', de:'Akbari-Pistazien', it:'Pistacchi Akbari', ru:'Pistaches Akbari' },
  'kaleghouchi-pistachio': { tr:'Kalleh Ghouchi Antep Fıstığı', en:'Kalleh Ghouchi Pistachios', de:'Kalleh-Ghouchi-Pistazien', it:'Pistacchi Kalleh Ghouchi', ru:'Pistaches Kalleh Ghouchi' },
  'fandoghi-pistachio': { tr:'Fandoghi Antep Fıstığı', en:'Fandoghi Pistachios', de:'Fandoghi-Pistazien', it:'Pistacchi Fandoghi', ru:'Pistaches Fandoghi' },
  'ahmad-aghaei-pistachio': { tr:'Ahmad Aghaei Antep Fıstığı', en:'Ahmad Aghaei Pistachios', de:'Ahmad-Aghaei-Pistazien', it:'Pistacchi Ahmad Aghaei', ru:'Pistaches Ahmad Aghaei' },
  'green-peeled-pistachio': { tr:'Yeşil Soyulmuş İç Fıstık', en:'Green Peeled Pistachio Kernels', de:'Grüne geschälte Pistazienkerne', it:'Pistacchio verde sgusciato', ru:'Pistaches vertes mondées' },
  'pistachio-granules': { tr:'Kırık ve Granül İç Fıstık', en:'Broken & Granulated Pistachio Kernels', de:'Pistazienbruch und -granulat', it:'Granella e pistacchio spezzato', ru:'Éclats et granulés de pistache' },
  'mazafati-dates': { tr:'Mazafati Hurması', en:'Mazafati Dates', de:'Mazafati-Datteln', it:'Datteri Mazafati', ru:'Dattes Mazafati' },
  'date-paste-syrup': { tr:'Hurma Ezmesi ve Şurubu', en:'Date Paste & Syrup', de:'Dattelpaste und -sirup', it:'Pasta e sciroppo di datteri', ru:'Pâte et sirop de dattes' },
  raisins: { tr:'Kuru Üzüm', en:'Raisins', de:'Rosinen', it:'Uva passa', ru:'Raisins secs' },
  almonds: { tr:'Badem', en:'Almonds', de:'Mandeln', it:'Mandorle', ru:'Amandes' },
  walnuts: { tr:'Ceviz', en:'Walnuts', de:'Walnüsse', it:'Noci', ru:'Noix' },
  'dried-apricots-kernels': { tr:'Kuru Kayısı ve Kayısı Çekirdeği', en:'Dried Apricots & Apricot Kernels', de:'Getrocknete Aprikosen und Aprikosenkerne', it:'Albicocche secche e noccioli', ru:'Abricots secs et amandons' },
  'pumpkin-seeds': { tr:'Kabak Çekirdeği', en:'Pumpkin Seeds', de:'Kürbiskerne', it:'Semi di zucca', ru:'Graines de courge' },
  'sunflower-seeds': { tr:'Ay Çekirdeği', en:'Sunflower Seeds', de:'Sonnenblumenkerne', it:'Semi di girasole', ru:'Graines de tournesol' },
  saffron: { tr:'Safran', en:'Saffron', de:'Safran', it:'Zafferano', ru:'Safran' },
  'dried-mulberries': { tr:'Kurutulmuş Dut', en:'Dried Mulberries', de:'Getrocknete Maulbeeren', it:'Gelsi essiccati', ru:'Mûres blanches séchées' },
  zereshk: { tr:'Zereshk', en:'Zereshk Barberries', de:'Zereshk-Berberitzen', it:'Crespino Zereshk', ru:'Épine-vinette Zereshk' },
  'mixed-nuts': { tr:'Karışık Kuruyemiş ve Özel Ürünler', en:'Mixed Nuts & Specialities', de:'Nussmischungen und Spezialitäten', it:'Frutta secca mista e specialità', ru:'Mélanges de fruits à coque et spécialités' }
};

const productDescriptions: Record<(typeof productIds)[number], Localized> = {
  'akbari-pistachio': {
    tr:'Uzun ve iri taneli Akbari, seçkin görünümü ve dolgun yapısıyla premium perakende, ikram ve hediye segmentlerine yöneliktir.',
    en:'Long, large Akbari kernels offer a distinguished appearance and full bite for premium retail, hospitality and gifting programmes.',
    de:'Lange, große Akbari-Kerne bieten eine markante Optik und einen vollen Biss für Premiumhandel, Gastronomie und Geschenkprogramme.',
    it:'I pistacchi Akbari, lunghi e di grande calibro, offrono un aspetto elegante e una consistenza piena per retail premium, horeca e confezioni regalo.',
    ru:'Les pistaches Akbari, longues et de gros calibre, offrent une présentation raffinée et une texture généreuse pour le retail premium, l’hôtellerie et les coffrets.'
  },
  'kaleghouchi-pistachio': {
    tr:'İri ve yuvarlak yapısıyla jumbo sınıfında konumlanan Kalleh Ghouchi, güçlü raf görünümü aranan kabuklu ürün programlarına uygundur.',
    en:'Large and round Kalleh Ghouchi pistachios sit in the jumbo class, suited to in-shell programmes where shelf impact is a priority.',
    de:'Große, runde Kalleh-Ghouchi-Pistazien gehören zur Jumbo-Klasse und eignen sich für Schalenware mit besonders starker Regalwirkung.',
    it:'Grandi e rotondi, i Kalleh Ghouchi appartengono alla classe jumbo e sono adatti ai programmi in guscio che richiedono forte impatto a scaffale.',
    ru:'Grosses et rondes, les Kalleh Ghouchi relèvent de la classe jumbo et conviennent aux programmes en coque recherchant un fort impact en rayon.'
  },
  'fandoghi-pistachio': {
    tr:'Küçük ve yuvarlak Fandoghi, dengeli tane yapısı ve verimli paketleme avantajıyla yüksek hacimli ticari programlarda tercih edilir.',
    en:'Small, round Fandoghi pistachios combine consistent sizing with efficient packing, making them a practical choice for high-volume trade.',
    de:'Kleine, runde Fandoghi-Pistazien verbinden gleichmäßige Sortierung mit effizienter Verpackung und sind damit für großvolumigen Handel geeignet.',
    it:'Piccoli e rotondi, i Fandoghi uniscono calibro uniforme ed efficienza di confezionamento, risultando adatti al commercio ad alto volume.',
    ru:'Petites et rondes, les Fandoghi associent calibrage régulier et conditionnement efficace, un choix adapté aux échanges à fort volume.'
  },
  'ahmad-aghaei-pistachio': {
    tr:'Uzun taneli ve açık kabuklu Ahmad Aghaei, tanınabilir görünümü, farklı kalibre seçenekleri ve ihracatta yaygın kullanımıyla öne çıkar.',
    en:'Long Ahmad Aghaei pistachios are recognised for their light shells, export-ready presentation and broad availability across commercial grades.',
    de:'Längliche Ahmad-Aghaei-Pistazien zeichnen sich durch helle Schalen, exportgerechte Präsentation und breite Verfügbarkeit in Handelskalibern aus.',
    it:'I pistacchi Ahmad Aghaei si distinguono per forma allungata, guscio chiaro e ampia diffusione nei calibri destinati all’esportazione.',
    ru:'Les Ahmad Aghaei se distinguent par leur forme allongée, leur coque claire et leur large diffusion dans les calibres destinés à l’export.'
  },
  'green-peeled-pistachio': {
    tr:'Canlı yeşil rengi ve yoğun fıstık karakteriyle yeşil soyulmuş iç, pastacılık, dondurma, çikolata ve premium gıda üretimine yönelik bir hammaddedir.',
    en:'With vivid green colour and concentrated pistachio character, peeled kernels are intended for pastry, gelato, chocolate and premium food production.',
    de:'Mit leuchtend grüner Farbe und konzentriertem Pistazienprofil sind geschälte Kerne für Konditorei, Speiseeis, Schokolade und hochwertige Lebensmittel bestimmt.',
    it:'Dal verde intenso e dal gusto concentrato, il pistacchio pelato è destinato a pasticceria, gelato, cioccolato e produzioni alimentari premium.',
    ru:'D’un vert intense et au caractère aromatique concentré, les pistaches mondées sont destinées à la pâtisserie, aux glaces, au chocolat et aux fabrications premium.'
  },
  'pistachio-granules': {
    tr:'Endüstriyel reçetelere yönelik kırık ve granül iç fıstık; 2–4 mm, 4–6 mm ve 6–8 mm kalibrasyonlarla kaplama, dolgu ve dekor uygulamalarına uyarlanır.',
    en:'Pistachio crumb and granules support industrial coating, filling and decoration applications, with 2–4 mm, 4–6 mm and 6–8 mm calibrations.',
    de:'Pistazienbruch und -granulat für industrielle Überzüge, Füllungen und Dekore ist in Kalibrierungen von 2–4 mm, 4–6 mm und 6–8 mm verfügbar.',
    it:'Granella e pistacchio spezzato per coperture, farciture e decorazioni industriali sono disponibili nelle calibrature 2–4 mm, 4–6 mm e 6–8 mm.',
    ru:'Éclats et granulés pour enrobages, fourrages et décors industriels sont proposés en calibrages 2–4 mm, 4–6 mm et 6–8 mm.'
  },
  'mazafati-dates': {
    tr:'Yumuşak dokulu, koyu renkli ve doğal karamelsi karaktere sahip Mazafati hurması, soğuk zincir planlamalı perakende ve horeca programlarına uygundur.',
    en:'Soft, dark Mazafati dates with a naturally caramel-like profile are suited to chilled retail and foodservice programmes with controlled handling.',
    de:'Weiche, dunkle Mazafati-Datteln mit natürlicher Karamellnote eignen sich für gekühlte Handels- und Gastronomieprogramme mit kontrollierter Handhabung.',
    it:'I datteri Mazafati, morbidi, scuri e naturalmente caramellati, sono indicati per programmi retail e horeca refrigerati con gestione controllata.',
    ru:'Les dattes Mazafati, tendres, foncées et naturellement caramélisées, conviennent aux programmes retail et restauration sous chaîne du froid maîtrisée.'
  },
  'date-paste-syrup': {
    tr:'Hurma ezmesi ve şurubu; fırıncılık, bar, sos ve dolgu reçetelerinde doğal tatlılık, bağlayıcılık ve renk sağlamak üzere spesifikasyona göre tedarik edilir.',
    en:'Date paste and syrup are specified for natural sweetness, binding and colour in bakery, bar, sauce and filling formulations.',
    de:'Dattelpaste und -sirup werden für natürliche Süße, Bindung und Farbe in Backwaren, Riegeln, Saucen und Füllungen spezifiziert.',
    it:'Pasta e sciroppo di datteri apportano dolcezza naturale, legatura e colore a prodotti da forno, barrette, salse e farciture.',
    ru:'La pâte et le sirop de dattes apportent douceur naturelle, liaison et couleur aux recettes de boulangerie, barres, sauces et fourrages.'
  },
  raisins: {
    tr:'Kuru üzümler renk, tane boyu, nem ve kullanım amacına göre seçilerek fırıncılık, atıştırmalık ve endüstriyel karışım hatlarına hazırlanır.',
    en:'Raisins are selected by colour, berry size, moisture and end use for bakery, snacking and industrial blending lines.',
    de:'Rosinen werden nach Farbe, Beerengröße, Feuchte und Verwendungszweck für Backwaren, Snacks und industrielle Mischungen ausgewählt.',
    it:'L’uva passa viene selezionata per colore, calibro, umidità e destinazione d’uso in panificazione, snack e miscele industriali.',
    ru:'Les raisins secs sont sélectionnés selon la couleur, le calibre, l’humidité et l’usage pour la boulangerie, le snacking et les mélanges industriels.'
  },
  almonds: {
    tr:'Bademler çeşit, kalibre, kabuk durumu ve işleme ihtiyacına göre perakende paketleme, draje, un ve bileşen üretimi için eşleştirilir.',
    en:'Almonds are matched by variety, size, skin condition and processing requirement for retail packs, coating, milling and ingredient production.',
    de:'Mandeln werden nach Sorte, Kaliber, Hautzustand und Verarbeitung für Handelspackungen, Dragierung, Vermahlung und Zutatenproduktion ausgewählt.',
    it:'Le mandorle sono abbinate per varietà, calibro, presenza della pellicina e lavorazione a confezioni retail, ricoperture, farine e ingredienti.',
    ru:'Les amandes sont définies par variété, calibre, état de la peau et transformation pour le conditionnement, l’enrobage, la mouture et les ingrédients.'
  },
  walnuts: {
    tr:'Ceviz içi; renk sınıfı, yarım-parça oranı ve oksidasyon kontrolü temelinde unlu mamul, atıştırmalık ve premium karışım ihtiyaçlarına göre seçilir.',
    en:'Walnut kernels are selected by colour grade, half-to-piece ratio and oxidation control for bakery, snacking and premium mix requirements.',
    de:'Walnusskerne werden nach Farbklasse, Anteil ganzer Hälften und Oxidationskontrolle für Backwaren, Snacks und Premium-Mischungen ausgewählt.',
    it:'I gherigli di noce sono selezionati per classe di colore, rapporto mezzi-pezzi e controllo dell’ossidazione per bakery, snack e mix premium.',
    ru:'Les cerneaux sont sélectionnés selon la classe de couleur, le ratio moitiés-morceaux et la maîtrise de l’oxydation pour la pâtisserie, le snacking et les mélanges premium.'
  },
  'dried-apricots-kernels': {
    tr:'Kuru kayısı ve kayısı çekirdeği, ürün tipi, renk, boy ve işleme niteliği ayrıştırılarak atıştırmalık ile gıda bileşeni projeleri için değerlendirilir.',
    en:'Dried apricots and apricot kernels are assessed separately by type, colour, size and processing status for snack and food-ingredient projects.',
    de:'Getrocknete Aprikosen und Aprikosenkerne werden getrennt nach Typ, Farbe, Größe und Verarbeitung für Snack- und Zutatenprojekte bewertet.',
    it:'Albicocche secche e noccioli sono valutati separatamente per tipologia, colore, calibro e lavorazione in progetti snack e ingredienti.',
    ru:'Abricots secs et amandons sont évalués séparément selon le type, la couleur, le calibre et la transformation pour les projets de snacking et d’ingrédients.'
  },
  'pumpkin-seeds': {
    tr:'Kabak çekirdeği; kabuklu veya iç formu, kalibre, kavurma davranışı ve mikrobiyolojik gereksinime göre atıştırmalık ve bileşen hatlarına hazırlanır.',
    en:'Pumpkin seeds are specified by in-shell or kernel format, size, roasting behaviour and microbiological requirement for snack and ingredient lines.',
    de:'Kürbiskerne werden nach Schalen- oder Kernform, Kaliber, Röstverhalten und mikrobiologischen Anforderungen für Snack- und Zutatenlinien definiert.',
    it:'I semi di zucca sono specificati per formato con o senza guscio, calibro, resa in tostatura e requisiti microbiologici per snack e ingredienti.',
    ru:'Les graines de courge sont définies par format avec ou sans coque, calibre, comportement à la torréfaction et exigences microbiologiques pour snacks et ingrédients.'
  },
  'sunflower-seeds': {
    tr:'Ay çekirdeği, iri atıştırmalık sınıfları ile iç ürün seçeneklerinde tane bütünlüğü, yabancı madde ve kavurma performansına göre sınıflandırılır.',
    en:'Sunflower seeds are graded across large snack types and kernel options for seed integrity, foreign matter and roasting performance.',
    de:'Sonnenblumenkerne werden als große Snackware oder geschälte Kerne nach Kornintegrität, Fremdbesatz und Röstleistung klassifiziert.',
    it:'I semi di girasole, nei grandi calibri da snack o sgusciati, sono classificati per integrità, corpi estranei e resa in tostatura.',
    ru:'Les graines de tournesol, en gros calibres de snacking ou décortiquées, sont classées selon l’intégrité, les corps étrangers et la tenue à la torréfaction.'
  },
  saffron: {
    tr:'Safran; iplik bütünlüğü, renk gücü, aroma profili ve saflık analizleriyle premium gıda, horeca ve kontrollü paketleme projeleri için doğrulanır.',
    en:'Saffron is verified for filament integrity, colouring strength, aroma profile and purity for premium food, hospitality and controlled packing projects.',
    de:'Safran wird anhand von Fadenintegrität, Farbstärke, Aromaprofil und Reinheit für Premiumlebensmittel, Gastronomie und kontrollierte Abfüllung geprüft.',
    it:'Lo zafferano è verificato per integrità degli stimmi, potere colorante, profilo aromatico e purezza per alimenti premium, horeca e confezionamento controllato.',
    ru:'Le safran est contrôlé pour l’intégrité des filaments, le pouvoir colorant, le profil aromatique et la pureté pour l’alimentaire premium, l’hôtellerie et le conditionnement.'
  },
  'dried-mulberries': {
    tr:'Kurutulmuş dut; doğal tatlılığı, açık rengi, tane bütünlüğü ve düşük yabancı madde hedefiyle sağlıklı atıştırmalık ve müsli uygulamalarına seçilir.',
    en:'Dried mulberries are chosen for natural sweetness, light colour, fruit integrity and low foreign matter in healthy snacks and muesli applications.',
    de:'Getrocknete Maulbeeren werden wegen natürlicher Süße, heller Farbe, Fruchtintegrität und geringem Fremdbesatz für Snacks und Müsli ausgewählt.',
    it:'I gelsi essiccati sono scelti per dolcezza naturale, colore chiaro, integrità e basso contenuto di corpi estranei in snack salutistici e muesli.',
    ru:'Les mûres blanches séchées sont choisies pour leur douceur naturelle, leur couleur claire, leur intégrité et leur faible teneur en corps étrangers dans les snacks et müeslis.'
  },
  zereshk: {
    tr:'Zereshk, canlı kırmızı rengi ve belirgin ekşi profiliyle pilav, sos, garnitür ve özel gıda reçetelerinde kullanılan kurutulmuş bir berberis meyvesidir.',
    en:'Zereshk is a dried barberry with vivid red colour and pronounced tartness for rice dishes, sauces, garnishes and speciality formulations.',
    de:'Zereshk ist eine getrocknete Berberitze mit kräftig roter Farbe und markanter Säure für Reisgerichte, Saucen, Garnituren und Spezialrezepturen.',
    it:'Lo Zereshk è un crespino essiccato dal rosso vivo e dall’acidità marcata, usato in riso, salse, guarnizioni e ricette speciali.',
    ru:'Le Zereshk est une épine-vinette séchée, rouge vif et nettement acidulée, destinée aux riz, sauces, garnitures et recettes de spécialité.'
  },
  'mixed-nuts': {
    tr:'Karışık kuruyemiş ve özel ürün reçeteleri; hedef tüketici, bileşen oranı, alerjen yönetimi, kavurma ve ambalaj formatına göre proje bazında geliştirilir.',
    en:'Mixed-nut and speciality recipes are developed by project around target consumer, ingredient ratio, allergen control, roasting and pack format.',
    de:'Nussmischungen und Spezialrezepturen werden projektspezifisch nach Zielgruppe, Zutatenanteil, Allergenmanagement, Röstung und Packungsformat entwickelt.',
    it:'Mix di frutta secca e ricette speciali sono sviluppati su progetto in base a consumatore, proporzioni, gestione allergeni, tostatura e formato.',
    ru:'Les mélanges de fruits à coque et recettes spéciales sont développés par projet selon la cible, les proportions, la gestion des allergènes, la torréfaction et le format.'
  }
};

const productMedia: Record<(typeof productIds)[number], ProductMedia> = {
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
  tr:'yesil-soyulmus-ic-fistik', en:'green-peeled-pistachio-kernels', de:'gruene-geschaelte-pistazienkerne', it:'pistacchio-verde-sgusciato', ru:'pistaches-vertes-mondees'
});
Object.assign(productSlugs['pistachio-granules'], {
  tr:'kirik-granul-ic-fistik', en:'pistachio-kernels-granules', de:'pistazienbruch-granulat', it:'granella-di-pistacchio', ru:'eclats-granules-pistache'
});
Object.assign(productSlugs['mazafati-dates'], {
  tr:'mazafati-hurmasi', en:'mazafati-dates', de:'mazafati-datteln', it:'datteri-mazafati', ru:'dattes-mazafati'
});
Object.assign(productSlugs['date-paste-syrup'], {
  tr:'hurma-ezmesi-surubu', en:'date-paste-syrup', de:'dattelpaste-sirup', it:'pasta-sciroppo-datteri', ru:'pate-sirop-dattes'
});
Object.assign(productSlugs['dried-apricots-kernels'], {
  tr:'kuru-kayisi-kayisi-cekirdegi', en:'dried-apricots-apricot-kernels', de:'getrocknete-aprikosen-aprikosenkerne', it:'albicocche-secche-noccioli', ru:'abricots-secs-amandons'
});
Object.assign(productSlugs['mixed-nuts'], {
  tr:'karisik-kuruyemis-ozel-urunler', en:'mixed-nuts-specialities', de:'nussmischungen-spezialitaeten', it:'frutta-secca-mista-specialita', ru:'melanges-fruits-a-coque-specialites'
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
  }
};

export const insightIds = ['strategic-vs-procurement','supplier-selection','supplier-risk','total-cost','rfq','supply-chain-risk','origin-compliance'] as const;
export const insights: Record<(typeof insightIds)[number], { slugs: Localized; titles: Localized; descriptions: Localized; answers: Localized }> = {
  'strategic-vs-procurement': {
    slugs:{tr:'stratejik-tedarik-ve-satin-alma-farki',en:'strategic-sourcing-vs-procurement',de:'strategische-beschaffung-vs-einkauf',it:'sourcing-strategico-vs-acquisti',ru:'sourcing-strategique-vs-achats'},
    titles:{tr:'Stratejik tedarik ve satın alma arasındaki fark',en:'Strategic sourcing vs procurement',de:'Strategische Beschaffung vs. Einkauf',it:'Sourcing strategico e acquisti a confronto',ru:'Sourcing stratégique et achats : quelle différence ?'},
    descriptions:{tr:'Kapsam, maliyet, risk, tedarikçi yönetimi ve karar süreci açısından stratejik tedarik ile satın alma karşılaştırması.',en:'A comparison of strategic sourcing and procurement across scope, cost, risk, supplier management and decisions.',de:'Vergleich von strategischer Beschaffung und Einkauf nach Umfang, Kosten, Risiko, Lieferantenmanagement und Entscheidung.',it:'Confronto tra sourcing strategico e acquisti per ambito, costo, rischio, gestione fornitori e decisioni.',ru:'Comparaison du sourcing stratégique et des achats selon le périmètre, le coût, le risque, les fournisseurs et la décision.'},
    answers:{tr:'Satın alma işlemi yürütür; stratejik tedarik ise talep, pazar, toplam maliyet, risk, müzakere ve performansı uzun vadeli bir karar sistemi içinde yönetir.',en:'Procurement executes the purchase; strategic sourcing manages demand, markets, total cost, risk, negotiation and performance as a long-term decision system.',de:'Der Einkauf führt die Bestellung aus; strategische Beschaffung steuert Bedarf, Markt, Gesamtkosten, Risiko, Verhandlung und Leistung langfristig.',it:'Gli acquisti eseguono la transazione; il sourcing strategico governa fabbisogno, mercato, costo totale, rischio, negoziazione e prestazioni nel lungo periodo.',ru:'Les achats exécutent la transaction ; le sourcing stratégique pilote besoin, marché, coût total, risque, négociation et performance sur le long terme.'}
  },
  'supplier-selection': {
    slugs:{tr:'tedarikci-secim-kriterleri',en:'supplier-selection-criteria',de:'kriterien-lieferantenauswahl',it:'criteri-selezione-fornitori',ru:'criteres-selection-fournisseurs'},
    titles:{tr:'Tedarikçi seçim kriterleri',en:'Supplier selection criteria',de:'Kriterien für die Lieferantenauswahl',it:'Criteri di selezione dei fornitori',ru:'Critères de sélection des fournisseurs'},
    descriptions:{tr:'Fiyatın ötesinde kalite, kapasite, termin, finansal dayanıklılık, uyum ve toplam maliyetle tedarikçi değerlendirme.',en:'Supplier evaluation beyond price: quality, capacity, lead time, financial resilience, compliance and total cost.',de:'Lieferantenbewertung jenseits des Preises: Qualität, Kapazität, Lieferzeit, Finanzkraft, Konformität und Gesamtkosten.',it:'Valutazione oltre il prezzo: qualità, capacità, tempi, solidità finanziaria, conformità e costo totale.',ru:'Évaluer au-delà du prix : qualité, capacité, délais, solidité financière, conformité et coût total.'},
    answers:{tr:'Doğru tedarikçi en düşük fiyatı veren değil; kalite, kapasite, termin, mevzuat, iletişim ve toplam maliyet ihtiyacını sürdürülebilir karşılayandır.',en:'The right supplier is not the lowest bidder, but the one that sustainably meets quality, capacity, lead-time, compliance, communication and total-cost needs.',de:'Der richtige Lieferant ist nicht der billigste, sondern erfüllt Qualität, Kapazität, Lieferzeit, Konformität, Kommunikation und Gesamtkosten nachhaltig.',it:'Il fornitore giusto non è il più economico, ma quello che soddisfa in modo sostenibile qualità, capacità, tempi, conformità, comunicazione e costo totale.',ru:'Le bon fournisseur n’est pas le moins cher, mais celui qui répond durablement aux exigences de qualité, capacité, délais, conformité, communication et coût total.'}
  },
  'supplier-risk': {
    slugs:{tr:'tedarikci-riskini-dogrulama',en:'verifying-supplier-risk',de:'lieferantenrisiko-pruefen',it:'verificare-rischio-fornitore',ru:'verifier-risque-fournisseur'},
    titles:{tr:'Tedarikçi riski nasıl doğrulanır?',en:'How to verify supplier risk',de:'Wie lässt sich Lieferantenrisiko prüfen?',it:'Come verificare il rischio fornitore',ru:'Comment vérifier le risque fournisseur ?'},
    descriptions:{tr:'Şirket, kapasite, kalite ve ticari riskleri sipariş öncesinde görünür kılan doğrulama çerçevesi.',en:'A verification framework that exposes company, capacity, quality and commercial risk before ordering.',de:'Ein Prüfrahmen, der Unternehmens-, Kapazitäts-, Qualitäts- und Handelsrisiken vor der Bestellung sichtbar macht.',it:'Un quadro di verifica che rende visibili rischi aziendali, produttivi, qualitativi e commerciali prima dell’ordine.',ru:'Un cadre de vérification qui rend visibles les risques liés à l’entreprise, aux capacités, à la qualité et au commerce avant commande.'},
    answers:{tr:'Kayıt, sahiplik, üretim kapasitesi, kalite sistemi, referans, banka bilgisi ve sözleşme yetkisi bağımsız kaynaklarla çapraz kontrol edilmelidir.',en:'Registration, ownership, production capacity, quality systems, references, bank details and signing authority should be cross-checked through independent sources.',de:'Register, Eigentum, Produktionskapazität, Qualitätssysteme, Referenzen, Bankdaten und Zeichnungsbefugnis müssen unabhängig gegengeprüft werden.',it:'Registrazione, proprietà, capacità produttiva, sistemi qualità, referenze, coordinate bancarie e poteri di firma vanno verificati con fonti indipendenti.',ru:'Immatriculation, propriété, capacité, système qualité, références, coordonnées bancaires et pouvoir de signature doivent être recoupés.'}
  },
  'total-cost': {
    slugs:{tr:'toplam-sahip-olma-maliyeti',en:'total-cost-of-ownership',de:'gesamtbetriebskosten-tco',it:'costo-totale-di-possesso',ru:'cout-total-de-possession'},
    titles:{tr:'Toplam sahip olma maliyeti neden önemlidir?',en:'Why total cost of ownership matters',de:'Warum Gesamtbetriebskosten entscheidend sind',it:'Perché conta il costo totale di possesso',ru:'Pourquoi le coût total de possession compte'},
    descriptions:{tr:'Birim fiyatın ötesinde lojistik, kalite, stok, finansman ve risk maliyetlerini karşılaştırma.',en:'Comparing logistics, quality, inventory, finance and risk costs beyond unit price.',de:'Vergleich von Logistik-, Qualitäts-, Bestands-, Finanzierungs- und Risikokosten jenseits des Stückpreises.',it:'Confronto di logistica, qualità, scorte, finanza e rischio oltre il prezzo unitario.',ru:'Comparer logistique, qualité, stocks, financement et risques au-delà du prix unitaire.'},
    answers:{tr:'En düşük birim fiyat her zaman en iyi teklif değildir; navlun, hata, gecikme, finansman ve tedarik kesintisi gerçek kararı değiştirebilir.',en:'The lowest unit price is not always the best offer; freight, defects, delays, finance and disruption can change the decision.',de:'Der niedrigste Stückpreis ist nicht immer das beste Angebot; Fracht, Fehler, Verzögerungen, Finanzierung und Ausfälle verändern die Entscheidung.',it:'Il prezzo unitario più basso non è sempre l’offerta migliore: trasporto, difetti, ritardi, finanza e interruzioni cambiano la decisione.',ru:'Le prix unitaire le plus bas n’est pas toujours la meilleure offre : transport, défauts, délais, financement et ruptures changent la décision.'}
  },
  rfq: {
    slugs:{tr:'etkili-rfq-nasil-hazirlanir',en:'how-to-write-an-effective-rfq',de:'wirksame-rfq-erstellen',it:'come-preparare-rfq-efficace',ru:'comment-rediger-rfq-efficace'},
    titles:{tr:'Etkili RFQ nasıl hazırlanır?',en:'How to write an effective RFQ',de:'Wie erstellt man eine wirksame RFQ?',it:'Come preparare una RFQ efficace',ru:'Comment rédiger une RFQ efficace ?'},
    descriptions:{tr:'Karşılaştırılabilir teklifler için spesifikasyon, miktar, kalite, teslim, ödeme ve belge alanlarını doğru yapılandırma.',en:'Structuring specifications, quantity, quality, delivery, payment and documentation for comparable quotations.',de:'Spezifikation, Menge, Qualität, Lieferung, Zahlung und Dokumentation für vergleichbare Angebote strukturieren.',it:'Strutturare specifiche, quantità, qualità, consegna, pagamento e documenti per offerte comparabili.',ru:'Structurer spécifications, quantité, qualité, livraison, paiement et documents pour obtenir des offres comparables.'},
    answers:{tr:'Etkili bir RFQ; teknik tanım, miktar, kalite standardı, teslim yeri, Incoterms, ödeme koşulu, termin, belge ihtiyacı ve teklif son tarihini açıkça tanımlar.',en:'An effective RFQ clearly defines specifications, quantity, quality standards, delivery point, Incoterms, payment, lead time, documents and quotation deadline.',de:'Eine wirksame RFQ definiert Spezifikation, Menge, Qualitätsstandard, Lieferort, Incoterms, Zahlung, Lieferzeit, Dokumente und Angebotsfrist.',it:'Una RFQ efficace definisce specifiche, quantità, standard qualità, luogo di consegna, Incoterms, pagamento, tempi, documenti e scadenza.',ru:'Une RFQ efficace précise spécifications, quantité, norme qualité, lieu de livraison, Incoterms, paiement, délai, documents et date limite.'}
  },
  'supply-chain-risk': {
    slugs:{tr:'tedarik-zinciri-risk-yonetimi',en:'supply-chain-risk-management',de:'risikomanagement-lieferkette',it:'gestione-rischio-catena-fornitura',ru:'gestion-risque-chaine-approvisionnement'},
    titles:{tr:'Tedarik zinciri risk yönetimi',en:'Supply chain risk management',de:'Risikomanagement in der Lieferkette',it:'Gestione del rischio nella catena di fornitura',ru:'Gestion des risques de la chaîne d’approvisionnement'},
    descriptions:{tr:'Tek kaynak, kalite, kapasite, lojistik, kur ve mevzuat risklerini puanlama ve azaltma rehberi.',en:'A guide to scoring and reducing single-source, quality, capacity, logistics, currency and regulatory risk.',de:'Leitfaden zur Bewertung und Reduzierung von Einzelquellen-, Qualitäts-, Kapazitäts-, Logistik-, Währungs- und Regulierungsrisiken.',it:'Guida per valutare e ridurre rischi di fonte unica, qualità, capacità, logistica, valuta e normativa.',ru:'Guide pour évaluer et réduire les risques de source unique, qualité, capacité, logistique, change et réglementation.'},
    answers:{tr:'Kritik ürünler, tedarikçiler ve rotalar olasılık ve etkiye göre puanlanmalı; alternatif kaynaklar, performans göstergeleri ve yanıt planları oluşturulmalıdır.',en:'Critical products, suppliers and routes should be scored by probability and impact, with alternative sources, performance indicators and response plans.',de:'Kritische Produkte, Lieferanten und Routen sind nach Wahrscheinlichkeit und Auswirkung zu bewerten; Alternativquellen, Kennzahlen und Reaktionspläne sind festzulegen.',it:'Prodotti, fornitori e rotte critici vanno classificati per probabilità e impatto, predisponendo fonti alternative, indicatori e piani di risposta.',ru:'Produits, fournisseurs et itinéraires critiques doivent être notés selon probabilité et impact, avec sources alternatives, indicateurs et plans de réponse.'}
  },
  'origin-compliance': {
    slugs:{tr:'gida-tedarikinde-mense-ve-uyum',en:'origin-and-compliance-in-food-sourcing',de:'herkunft-und-konformitaet-lebensmittel',it:'origine-conformita-approvvigionamento-alimentare',ru:'origine-conformite-sourcing-alimentaire'},
    titles:{tr:'Gıda tedariğinde menşe ve uyum',en:'Origin and compliance in food sourcing',de:'Herkunft und Konformität in der Lebensmittelbeschaffung',it:'Origine e conformità nel sourcing alimentare',ru:'Origine et conformité dans le sourcing alimentaire'},
    descriptions:{tr:'Gerçek menşe, parti izlenebilirliği, COA, aflatoksin, pestisit ve hedef pazar uygunluğu için temel kontroller.',en:'Core controls for actual origin, batch traceability, COA, aflatoxin, pesticides and target-market compliance.',de:'Kernprüfungen für tatsächliche Herkunft, Chargenrückverfolgung, COA, Aflatoxin, Pestizide und Zielmarktkonformität.',it:'Controlli essenziali su origine effettiva, tracciabilità lotto, COA, aflatossine, pesticidi e conformità al mercato.',ru:'Contrôles essentiels de l’origine réelle, traçabilité des lots, COA, aflatoxines, pesticides et conformité au marché.'},
    answers:{tr:'Menşe ticari evrak, üretici ve parti düzeyinde açıkça beyan edilmeli; hedef pazar limitleri sevkiyat öncesinde doğrulanmalıdır.',en:'Origin should be declared clearly at commercial-document, producer and batch level; target-market limits must be verified before shipment.',de:'Die Herkunft ist in Handelsdokumenten sowie auf Hersteller- und Chargenebene offenzulegen; Zielmarktgrenzen sind vor Versand zu prüfen.',it:'L’origine va dichiarata nei documenti commerciali e a livello di produttore e lotto; i limiti del mercato vanno verificati prima della spedizione.',ru:'L’origine doit être déclarée dans les documents commerciaux, au niveau du producteur et du lot ; les seuils du marché cible doivent être vérifiés avant expédition.'}
  }
};

export const legalIds = ['privacy', 'cookies', 'terms', 'data-protection'] as const;
export const legal: Record<(typeof legalIds)[number], { slugs: Localized; titles: Localized }> = {
  privacy: { slugs:{tr:'gizlilik-politikasi',en:'privacy-policy',de:'datenschutzerklaerung',it:'informativa-privacy',ru:'politique-de-confidentialite'}, titles:{tr:'Gizlilik Politikası',en:'Privacy Policy',de:'Datenschutzerklärung',it:'Informativa sulla privacy',ru:'Politique de confidentialité'} },
  cookies: { slugs:{tr:'cerez-politikasi',en:'cookie-policy',de:'cookie-richtlinie',it:'politica-cookie',ru:'politique-cookies'}, titles:{tr:'Çerez Politikası',en:'Cookie Policy',de:'Cookie-Richtlinie',it:'Politica sui cookie',ru:'Politique relative aux cookies'} },
  terms: { slugs:{tr:'kullanim-kosullari',en:'terms-of-use',de:'nutzungsbedingungen',it:'termini-di-utilizzo',ru:'conditions-utilisation'}, titles:{tr:'Kullanım Koşulları',en:'Terms of Use',de:'Nutzungsbedingungen',it:'Termini di utilizzo',ru:'Conditions d’utilisation'} },
  'data-protection': { slugs:{tr:'kvkk-aydinlatma-metni',en:'data-protection-notice',de:'hinweise-zum-datenschutz',it:'informativa-protezione-dati',ru:'notice-protection-donnees'}, titles:{tr:'KVKK Aydınlatma Metni',en:'Data Protection Notice',de:'Hinweise zum Datenschutz',it:'Informativa sulla protezione dei dati',ru:'Notice sur la protection des données'} }
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
    servicesTitle:'Une expertise pour chaque étape de la décision d’approvisionnement.',servicesLead:'Nous réunissons stratégie, vérification, analyse commerciale et exécution dans une discipline de décision unique.',
    productsTitle:'Portefeuille de produits commerciaux',productsLead:'Le même catalogue est évalué sur chaque marché selon l’origine, la qualité par lot et des conditions commerciales vérifiables.',
    marketsTitle:'De la Türkiye vers l’Europe et les marchés internationaux.',marketsLead:'Nous alignons la réalité productive locale avec la réglementation, les attentes des acheteurs et des modèles de livraison réalisables.',
    aboutTitle:'Un partenaire de décision indépendant qui réduit l’incertitude commerciale.',aboutLead:'CTSEG agit selon les principes de preuve, transparence et faisabilité dans le sourcing stratégique et le commerce international.',
    contactTitle:'Démarrez votre besoin commercial par une évaluation claire.',insightsTitle:'Des analyses pratiques pour les décideurs.',insightsLead:'Des guides concis et fondés sur des preuves sur le sourcing, le coût total, l’origine, la qualité et le risque commercial.',
    framework:['Besoin et spécification','Vérification des parties et documents','Comparaison qualité, coût et risque','Traçabilité de la décision et de l’exécution'],
    serviceFaq:['Comment démarre un projet ?','Le périmètre, l’objectif, le produit ou service, le marché et le calendrier sont précisés lors d’un bref échange de qualification.','CTSEG agit-il pour un fournisseur ?','CTSEG déclare clairement son mandat et son rôle commercial, puis documente les critères d’évaluation.'],
    productUses:['Fabrication alimentaire et applications industrielles','Distribution de gros et marque de distributeur','HORECA et commerce spécialisé'],
    productQuality:['Exigences aflatoxines et pesticides','Humidité, microbiologie et spécification produit','COA, code de lot et traçabilité','Conformité réglementaire au marché cible'],
    legalIntro:'Cette notice fournit une information transparente sur l’utilisation du site CTSEG et les traitements de données associés.',
    legalSections:[['Périmètre et responsabilité','CTSEG veille à l’exactitude des informations institutionnelles et commerciales. Les demandes de contact et de protection des données peuvent être envoyées à info@ctseg.com.tr.'],['Informations et finalités','Lors d’un contact, nous pouvons traiter nom, entreprise, e-mail, téléphone, demande et besoin commercial, ainsi que des journaux techniques limités pour la sécurité. Ces données servent à répondre, évaluer une relation, protéger le site et respecter la loi.'],['Partage, conservation et sécurité','Les informations ne sont partagées qu’avec les prestataires nécessaires d’hébergement, e-mail, support et conseil juridique ou les autorités compétentes, conformément au droit applicable. Elles sont supprimées ou anonymisées après leur finalité et les délais légaux.'],['Droits et contact','Pour exercer vos droits d’accès, rectification, effacement, opposition et autres droits, écrivez à info@ctseg.com.tr en précisant suffisamment votre identité et votre demande.']]
  }
};

export function localizedPath(lang: Locale | string, key: string, id?: string): string {
  const safeLang = (locales as readonly string[]).includes(lang) ? (lang as Locale) : 'en';
  const pathLang = key === 'medical' ? lang : safeLang;
  if (key === 'home') return pathLang === 'tr' ? '/' : `/${pathLang}/`;
  if (key === 'medical') return pathLang === 'tr' ? '/medical/reflex-disposable-gloves/' : `/${pathLang}/medical/reflex-disposable-gloves/`;
  if (lang === 'ru') {
    const homeAnchors: Record<string,string> = {
      services:'trade-paths', products:'sectors', markets:'markets', insights:'trade-paths',
      about:'company', contact:'contact', 'how-we-work':'trade-paths', scenarios:'company', guides:'trade-paths'
    };
    if (key === 'legal' && id) return localizedPath('en','legal',id);
    return `/ru/#${homeAnchors[key] ?? 'contact'}`;
  }
  if (key === 'how-we-work') {
    if (pathLang === 'tr' || pathLang === 'en') return `/${pathLang}/${specialSlugs['how-we-work'][pathLang]}/`;
    return localizedPath(safeLang,'services');
  }
  if (key === 'scenarios') {
    if (pathLang === 'tr' || pathLang === 'en') return `/${pathLang}/${specialSlugs.scenarios[pathLang]}/`;
    return localizedPath(safeLang,'about');
  }
  if (key === 'guides' && id) {
    if (pathLang === 'tr' || pathLang === 'en') return `/${pathLang}/${sectionSlugs.insights[pathLang]}/${guideSlugs[id as GuideId][pathLang]}/`;
    return localizedPath(safeLang,'insights');
  }
  const section = sectionSlugs[key]?.[pathLang as Locale] || sectionSlugs[key]?.en;
  if (key === 'services' && id) return `/${pathLang}/${section}/${services[id as keyof typeof services]?.slugs[safeLang] || id}/`;
  if (key === 'products' && id) return `/${pathLang}/${section}/${products[id as keyof typeof products]?.slugs[safeLang] || id}/`;
  if (key === 'insights' && id) return `/${pathLang}/${section}/${insights[id as keyof typeof insights]?.slugs[safeLang] || id}/`;
  if (key === 'legal' && id) return `/${pathLang}/${legal[id as keyof typeof legal]?.slugs[safeLang] || id}/`;
  return `/${pathLang}/${section}/`;
}

export function routeAlternates(key: string, id?: string) {
  if (key === 'medical') {
    return {
      tr: 'https://ctseg.com.tr/medical/reflex-disposable-gloves/',
      en: 'https://ctseg.com.tr/en/medical/reflex-disposable-gloves/',
      de: 'https://ctseg.com.tr/de/medical/reflex-disposable-gloves/',
      it: 'https://ctseg.com.tr/it/medical/reflex-disposable-gloves/',
      ru: 'https://ctseg.com.tr/ru/medical/reflex-disposable-gloves/',
      fa: 'https://ctseg.com.tr/fa/medical/reflex-disposable-gloves/',
      sq: 'https://ctseg.com.tr/sq/medical/reflex-disposable-gloves/',
      mk: 'https://ctseg.com.tr/mk/medical/reflex-disposable-gloves/',
      sr: 'https://ctseg.com.tr/sr/medical/reflex-disposable-gloves/'
    } as Record<string, string>;
  }
  return Object.fromEntries(locales.map((lang) => [lang, `https://ctseg.com.tr${localizedPath(lang, key, id)}`])) as Localized;
}
