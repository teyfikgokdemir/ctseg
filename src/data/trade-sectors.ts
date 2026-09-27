import { activeLocales, type ActiveLocale } from './locales';

export const tradeLocales = activeLocales;
export type TradeLocale = ActiveLocale;
export const tradeSectorIds = ['duzce-cam-flat-glass', 'iranian-carpets', 'silk-carpets', 'wholesale-textiles'] as const;
export type TradeSectorId = (typeof tradeSectorIds)[number];

type Copy = { slug:string; eyebrow:string; title:string; description:string; lead:string; scopeTitle:string; items:string[]; cta:string };
export const tradeUi: Record<TradeLocale,{name:string;home:string;contact:string;related:string;assurance:string;process:string;checks:string[]}> = {
  tr:{name:'Türkçe',home:'CTSEG ana sayfa',contact:'Ticari talep gönder',related:'İlgili tedarik alanları',assurance:'Satın alma kararını destekleyen kontroller',process:'Kontrollü tedarik süreci',checks:['İhtiyaç, kullanım alanı ve teknik şartname','Üretici, kapasite ve referans doğrulama','Numune, malzeme, kalite ve teklif karşılaştırması','Paketleme, sigorta, lojistik ve teslim koordinasyonu']},
  en:{name:'English',home:'CTSEG home',contact:'Submit a commercial enquiry',related:'Related sourcing areas',assurance:'Controls supporting the buying decision',process:'Controlled sourcing process',checks:['Requirement, application and specification','Producer, capacity and reference verification','Sample, material, quality and quotation comparison','Packaging, insurance, logistics and delivery coordination']},
  de:{name:'Deutsch',home:'CTSEG Startseite',contact:'Handelsanfrage senden',related:'Verwandte Beschaffungsbereiche',assurance:'Kontrollen für die Einkaufsentscheidung',process:'Kontrollierter Beschaffungsprozess',checks:['Bedarf, Anwendung und Spezifikation','Hersteller-, Kapazitäts- und Referenzprüfung','Muster-, Material-, Qualitäts- und Angebotsvergleich','Verpackungs-, Versicherungs-, Logistik- und Lieferkoordination']},
  it:{name:'Italiano',home:'Home CTSEG',contact:'Invia una richiesta commerciale',related:'Aree di sourcing correlate',assurance:'Controlli a supporto dell’acquisto',process:'Processo di sourcing controllato',checks:['Fabbisogno, utilizzo e specifiche','Verifica del produttore, capacità e referenze','Confronto di campioni, materiali, qualità e offerte','Coordinamento di imballaggio, assicurazione, logistica e consegna']},
  ru:{name:'Русский',home:'Главная CTSEG',contact:'Отправить коммерческий запрос',related:'Связанные направления сорсинга',assurance:'Проверки для обоснованного решения',process:'Контролируемый процесс сорсинга',checks:['Задача, назначение и технические требования','Проверка производителя, мощности и деловой истории','Сравнение образцов, материалов, качества и предложений','Общая оценка упаковки и логистических вариантов']},
  fa:{name:'فارسی',home:'صفحه اصلی CTSEG',contact:'ارسال درخواست تجاری',related:'حوزه‌های مرتبط تأمین',assurance:'کنترل‌هایی برای یک تصمیم خرید مطمئن',process:'فرایند کنترل‌شده تأمین',checks:['تعریف نیاز، کاربرد و مشخصات فنی','اعتبارسنجی تولیدکننده، ظرفیت و سوابق','مقایسه نمونه، جنس، کیفیت و پیشنهاد قیمت','هماهنگی بسته‌بندی، بیمه، لجستیک و تحویل']},
  zh:{name:'中文',home:'CTSEG 首页',contact:'提交商务询价需求',related:'相关大宗采购品类',assurance:'支撑明智商业决策的多维核验控制',process:'全流程严谨可控的寻源与履约机制',checks:['明确采购需求、具体技术规格与应用场景','深度核验生产主体、排产产能与历史出口信誉','样品实物比对、材质化验、品质等级与综合报价横评','严控定制包装、国际货运保险与跨境物流交付协调']},
  vi:{name:'Tiếng Việt',home:'Trang chủ CTSEG',contact:'Gửi yêu cầu thương mại',related:'Lĩnh vực thu mua liên quan',assurance:'Kiểm soát hỗ trợ quyết định mua hàng',process:'Quy trình thu mua được kiểm soát',checks:['Nhu cầu, ứng dụng và thông số kỹ thuật','Xác minh nhà sản xuất, công suất và uy tín','So sánh mẫu thử, chất liệu, chất lượng và báo giá','Đóng gói, bảo hiểm, logistics và điều phối giao hàng']},
  uk:{name:'Українська',home:'CTSEG Головна',contact:'Надіслати запит',related:'Схожі сфери',assurance:'Гарантія якості',process:'Процес закупівлі',checks:['Крок 1','Крок 2','Крок 3','Крок 4']}
};

export const tradeCopy: Record<TradeLocale,Record<TradeSectorId,Copy>> = {
 tr:{
    'duzce-cam-flat-glass': {
      slug: 'duzce-cam-duz-cam-ve-ayna',
      eyebrow: 'Düzce Cam · B2B İhracat',
      title: 'Düzce Cam: Float Cam, Lamine ve Ayna İhracat Koordinasyonu.',
      description: 'Düzce Cam\'ın günlük 1500 ton kapasiteli düz cam, lamine cam ve ayna üretiminin uluslararası pazarlara güvenli ve yapılandırılmış ihracatı.',
      lead: 'Avrupa ve bölgesel pazarlar için, Düzce Cam\'ın yüksek teknolojili float hatlarında üretilen düz, renkli, lamine cam ve aynalarını; özel lojistik filosu güvencesiyle stratejik alıcılara ulaştırıyoruz.',
      scopeTitle: 'Genişletilmiş Cam Portföyü',
      items: ['3mm - 12mm Float Düz Cam', 'Akustik ve Güvenlikli Lamine Cam', 'Dekoratif ve Mimari Ayna', 'Renkli ve Kaplamalı Solar Cam', 'Özel Tır Filosu ile Lojistik', 'Uluslararası Proje Koordinasyonu'],
      cta: 'Düzce Cam İhracat Teklifi Al'
    },
  'iranian-carpets':{slug:'iran-halisi',eyebrow:'İran menşeli B2B halı tedariki',title:'İran halısı tedarikini ürün bilgisinden teslimata kadar yapılandırıyoruz.',description:'El dokuması, ipek, yün, yün-ipek ve makine İran halıları; yolluk, küçük halı, özel ölçü ve proje tedariki.',lead:'Koleksiyon, proje veya toptan alım için menşe, malzeme, ölçü, kalite, adet, termin ve teslim modelini tek ticari değerlendirmede birleştiriyoruz.',scopeTitle:'Geniş ve doğrulanabilir halı kapsamı',items:['El dokuması İran halıları','Saf ipek halılar','Yün ve yün-ipek halılar','Makine halıları','Yolluklar ve küçük halılar','Özel ölçü ve proje bazlı tedarik'],cta:'İran halısı için RFQ oluştur'},
  'silk-carpets':{slug:'el-dokumasi-ipek-hali',eyebrow:'Bağımsız uzmanlık alanı',title:'El dokuması ipek halılarda ayrıntı, menşe ve işçilik görünür olmalı.',description:'El dokuması saf ipek ve ipek karışımlı İran halılarında menşe, işçilik, ölçü, kalite, paketleme ve proje tedariki.',lead:'İpek halıyı genel portföyde kaybolan bir seçenek değil; lif yapısı, düğüm inceliği, parlaklık, desen, işçilik ve taşıması ayrı doğrulanan premium bir kategori olarak yönetiyoruz.',scopeTitle:'İpek halıya özel değerlendirme',items:['Saf ipek el dokuması halılar','İpek çözgü ve ipek hav yapıları','Yün-ipek premium karışımlar','Küçük ölçü ve koleksiyonluk parçalar','Özel desen, renk ve ölçü','Proje bazlı üretim koordinasyonu'],cta:'İpek halı talebini paylaş'},
  'wholesale-textiles':{slug:'toptan-tekstil-tedariki',eyebrow:'B2B tekstil ve private label',title:'Toptan tekstil tedarikini numuneden lojistiğe kadar koordine ediyoruz.',description:'Kumaş, havlu, bornoz, ev tekstili ve hazır giyim için private label, numune, RFQ, üretici doğrulama, kalite, paketleme ve lojistik.',lead:'Markalar, distribütörler, oteller ve proje alıcıları için ürün şartnamesini üretici kapasitesi, numune onayı, kalite kriterleri, paketleme ve teslim planıyla eşleştiriyoruz.',scopeTitle:'Toptan tekstil ürün kapsamı',items:['Kumaş ve teknik şartnameler','Havlu ve bornoz','Ev tekstili koleksiyonları','Hazır giyim üretimi','Private label ve özel paketleme','Numune ve koleksiyon geliştirme'],cta:'Tekstil RFQ talebi gönder'}},
 en:{
    'duzce-cam-flat-glass': {
      slug: 'duzce-cam-flat-glass-and-mirror',
      eyebrow: 'Düzce Cam · B2B Sourcing',
      title: 'Düzce Cam: Sourcing Float Glass, Laminated Glass and Mirrors.',
      description: 'Reliable sourcing and export coordination for Düzce Cam\'s flat glass, laminated glass, and mirrors with a 1500-ton daily capacity.',
      lead: 'We connect international buyers with Düzce Cam\'s high-tech float glass production. From acoustic laminated glass to architectural mirrors, we ensure secure logistics and structured procurement.',
      scopeTitle: 'Architectural Glass Portfolio',
      items: ['3mm - 12mm Float Glass', 'Acoustic & Safety Laminated Glass', 'Architectural & Decorative Mirrors', 'Tinted and Solar Coated Glass', 'Dedicated Logistics & Transport', 'International Project Supply'],
      cta: 'Request a Düzce Cam Quote'
    },
  'iranian-carpets':{slug:'iranian-carpets',eyebrow:'B2B sourcing from Iran',title:'Iranian carpet sourcing structured from product evidence to delivery.',description:'Hand-knotted, silk, wool, wool-silk and machine-made Iranian carpets, runners, small rugs, custom sizes and project sourcing.',lead:'For collections, projects and wholesale programmes, we align origin, materials, dimensions, quality, quantity, lead time and delivery in one commercial assessment.',scopeTitle:'A broad, verifiable carpet scope',items:['Hand-knotted Iranian carpets','Pure silk carpets','Wool and wool-silk carpets','Machine-made carpets','Runners and small rugs','Custom sizes and project sourcing'],cta:'Create an Iranian carpet RFQ'},
  'silk-carpets':{slug:'hand-knotted-silk-carpets',eyebrow:'A distinct specialist category',title:'Hand-knotted silk carpets require visible evidence of origin and workmanship.',description:'Origin, workmanship, dimensions, quality, packaging and project sourcing for hand-knotted pure-silk and silk-blend Iranian carpets.',lead:'We treat silk carpets as a premium category in their own right, with fibre structure, knot fineness, lustre, pattern, workmanship and transport assessed separately.',scopeTitle:'Silk-specific assessment',items:['Pure-silk hand-knotted carpets','Silk warp and silk pile','Premium wool-silk blends','Small and collectible pieces','Custom pattern, colour and dimensions','Project production coordination'],cta:'Discuss a silk carpet requirement'},
  'wholesale-textiles':{slug:'wholesale-textile-sourcing',eyebrow:'B2B textiles and private label',title:'Wholesale textile sourcing coordinated from sample to logistics.',description:'Fabric, towels, bathrobes, home textiles and apparel with private label, samples, RFQ, producer verification, quality, packaging and logistics.',lead:'For brands, distributors, hospitality and project buyers, we match specifications with producer capacity, sample approval, quality, packaging and delivery.',scopeTitle:'Wholesale textile scope',items:['Fabric and technical specifications','Towels and bathrobes','Home-textile collections','Ready-to-wear production','Private label and custom packaging','Sampling and collection development'],cta:'Submit a textile RFQ'}},
 de:{
    'duzce-cam-flat-glass': {
      slug: 'duzce-cam-flachglas-und-spiegel',
      eyebrow: 'Düzce Cam · B2B-Beschaffung',
      title: 'Düzce Cam: Beschaffung von Flachglas, Verbundglas und Spiegeln.',
      description: 'Zuverlässige Beschaffung und Exportkoordination für Flachglas und Spiegel von Düzce Cam (1500 Tonnen Tageskapazität).',
      lead: 'Wir verbinden internationale Käufer mit der Hightech-Floatglasproduktion von Düzce Cam. Von Akustik-Verbundglas bis hin zu Architekturspiegeln.',
      scopeTitle: 'Architekturglas-Portfolio',
      items: ['3mm - 12mm Floatglas', 'Akustik- und Sicherheits-Verbundglas', 'Architektur- und Dekorspiegel', 'Getöntes und solarbeschichtetes Glas', 'Eigene Logistik & Transport', 'Internationale Projektbelieferung'],
      cta: 'Düzce Cam Angebot anfordern'
    },
  'iranian-carpets':{slug:'persische-teppiche',eyebrow:'B2B-Beschaffung aus Iran',title:'Beschaffung persischer Teppiche – von Produktnachweisen bis zur Lieferung.',description:'Handgeknüpfte, seidene, wollene, Woll-Seiden- und maschinell gefertigte Teppiche, Läufer, Kleinformate, Sondermaße und Projekte.',lead:'Für Kollektionen, Projekte und Großhandel verbinden wir Herkunft, Material, Maße, Qualität, Menge, Lieferzeit und Logistik.',scopeTitle:'Breites, überprüfbares Sortiment',items:['Handgeknüpfte persische Teppiche','Reine Seidenteppiche','Woll- und Woll-Seiden-Teppiche','Maschinell gefertigte Teppiche','Läufer und Kleinformate','Sondermaße und Projektbeschaffung'],cta:'Teppich-RFQ erstellen'},
  'silk-carpets':{slug:'handgeknuepfte-seidenteppiche',eyebrow:'Eigenständige Spezialkategorie',title:'Bei handgeknüpften Seidenteppichen müssen Herkunft und Handwerk nachvollziehbar sein.',description:'Herkunft, Verarbeitung, Maße, Qualität, Verpackung und Projektbeschaffung für reine Seiden- und Seidenmischteppiche.',lead:'Faseraufbau, Knotendichte, Glanz, Muster, Verarbeitung und Transport werden als eigene Premiumkategorie separat geprüft.',scopeTitle:'Spezifische Prüfung für Seidenteppiche',items:['Reine Seide, handgeknüpft','Seidenkette und Seidenflor','Premium-Woll-Seiden-Mischungen','Kleinformate und Sammlerstücke','Individuelle Muster, Farben und Maße','Projektbezogene Produktion'],cta:'Seidenteppich-Anfrage besprechen'},
  'wholesale-textiles':{slug:'textil-grosshandel-beschaffung',eyebrow:'B2B-Textilien und Private Label',title:'Textilbeschaffung im Großhandel – vom Muster bis zur Logistik.',description:'Stoffe, Handtücher, Bademäntel, Heimtextilien und Bekleidung mit Private Label, Mustern, RFQ, Herstellerprüfung, Qualität, Verpackung und Logistik.',lead:'Wir verbinden Produktspezifikation, Herstellerkapazität, Musterfreigabe, Qualitätskriterien, Verpackung und Lieferung.',scopeTitle:'Sortiment für den Textilgroßhandel',items:['Stoffe und technische Spezifikationen','Handtücher und Bademäntel','Heimtextil-Kollektionen','Konfektionsbekleidung','Private Label und Sonderverpackung','Muster- und Kollektionsentwicklung'],cta:'Textil-RFQ senden'}},
 it:{
    'duzce-cam-flat-glass': {
      slug: 'duzce-cam-vetro-piano-e-specchi',
      eyebrow: 'Düzce Cam · Sourcing B2B',
      title: 'Düzce Cam: Sourcing di vetro piano, vetro stratificato e specchi.',
      description: 'Sourcing e coordinamento per il vetro piano e gli specchi di Düzce Cam con capacità di 1500 tonnellate al giorno.',
      lead: 'Mettiamo in contatto acquirenti internazionali con la produzione di vetro float di Düzce Cam per progetti architettonici.',
      scopeTitle: 'Portafoglio Vetro Architettonico',
      items: ['Vetro Float 3mm - 12mm', 'Vetro Stratificato Acustico e di Sicurezza', 'Specchi Architettonici', 'Vetro Colorato e a Controllo Solare', 'Logistica e Trasporti Dedicati', 'Fornitura per Progetti Internazionali'],
      cta: 'Richiedi un preventivo Düzce Cam'
    },
  'iranian-carpets':{slug:'tappeti-persiani',eyebrow:'Sourcing B2B dall’Iran',title:'Sourcing di tappeti persiani, dalla verifica del prodotto alla consegna.',description:'Tappeti annodati a mano, in seta, lana, lana-seta o a macchina, passatoie, piccoli formati, misure speciali e progetti.',lead:'Per collezioni, progetti e wholesale coordiniamo origine, materiali, misure, qualità, quantità, tempi e consegna.',scopeTitle:'Una gamma ampia e verificabile',items:['Tappeti persiani annodati a mano','Tappeti in pura seta','Tappeti in lana e lana-seta','Tappeti prodotti a macchina','Passatoie e piccoli tappeti','Misure speciali e progetti'],cta:'Crea un RFQ tappeti'},
  'silk-carpets':{slug:'tappeti-in-seta-annodati-a-mano',eyebrow:'Categoria specialistica distinta',title:'Nei tappeti in seta annodati a mano, origine e lavorazione devono essere verificabili.',description:'Origine, lavorazione, misure, qualità, imballaggio e sourcing per tappeti iraniani in pura seta e misto seta.',lead:'Fibra, finezza del nodo, lucentezza, disegno, lavorazione e trasporto sono verificati come categoria premium autonoma.',scopeTitle:'Valutazione specifica per la seta',items:['Pura seta annodata a mano','Ordito e vello in seta','Miscele premium lana-seta','Piccoli formati da collezione','Disegni, colori e misure su misura','Produzione per progetto'],cta:'Parla del tuo progetto in seta'},
  'wholesale-textiles':{slug:'approvvigionamento-tessile-ingrosso',eyebrow:'Tessile B2B e private label',title:'Sourcing tessile all’ingrosso coordinato dal campione alla logistica.',description:'Tessuti, asciugamani, accappatoi, tessili casa e abbigliamento con private label, campioni, RFQ, verifica, qualità, imballaggio e logistica.',lead:'Abbiniamo specifiche, capacità produttiva, campionatura, qualità, imballaggio e piano di consegna.',scopeTitle:'Gamma tessile all’ingrosso',items:['Tessuti e specifiche tecniche','Asciugamani e accappatoi','Tessili per la casa','Produzione di abbigliamento','Private label e imballaggio','Campioni e sviluppo collezione'],cta:'Invia un RFQ tessile'}},
 ru:{
    'duzce-cam-flat-glass': {
      slug: 'duzce-cam-listovoye-steklo-i-zerkala',
      eyebrow: 'Düzce Cam · B2B-Поставки',
      title: 'Düzce Cam: Поставки листового стекла, триплекса и зеркал.',
      description: 'Надежные поставки и экспортная координация листового стекла Düzce Cam.',
      lead: 'Мы связываем международных покупателей с высокотехнологичным производством флоат-стекла Düzce Cam. От акустического триплекса до архитектурных зеркал.',
      scopeTitle: 'Портфолио архитектурного стекла',
      items: ['Флоат-стекло 3мм - 12мм', 'Акустический и безопасный триплекс', 'Архитектурные и декоративные зеркала', 'Тонированное и солнцезащитное стекло', 'Специализированная логистика', 'Международные проектные поставки'],
      cta: 'Запросить расчет Düzce Cam'
    },
  'iranian-carpets':{slug:'carpets',eyebrow:'B2B-сорсинг из Ирана',title:'Сорсинг иранских ковров — от проверки характеристик до коммерческого предложения.',description:'Ковры ручной работы, шёлковые, шерстяные, шерстяно-шёлковые и машинные ковры, дорожки, малые форматы, нестандартные размеры и проектные заказы.',lead:'Для коллекций, проектов и оптовых программ мы сопоставляем происхождение, материалы, размеры, качество, объём и сроки в рамках единой коммерческой оценки.',scopeTitle:'Широкий и проверяемый выбор ковров',items:['Иранские ковры ручной работы','Ковры из чистого шёлка','Шерстяные и шерстяно-шёлковые ковры','Ковры машинного производства','Дорожки и малые ковры','Нестандартные размеры и проектный сорсинг'],cta:'Подготовить RFQ на иранские ковры'},
  'silk-carpets':{slug:'hand-knotted-silk-carpets',eyebrow:'Самостоятельная экспертная категория',title:'Для шёлковых ковров ручной работы важны подтверждённые происхождение и качество исполнения.',description:'Оценка происхождения, работы, размеров, качества, упаковки и проектного сорсинга иранских ковров из чистого шёлка и шёлковых смесей.',lead:'Мы рассматриваем шёлковые ковры как отдельную премиальную категорию и проверяем структуру волокна, плотность узлов, блеск, рисунок и качество работы.',scopeTitle:'Оценка с учётом особенностей шёлка',items:['Ковры ручной работы из чистого шёлка','Шёлковая основа и шёлковый ворс','Премиальные смеси шерсти и шёлка','Малые и коллекционные изделия','Индивидуальные рисунки, цвета и размеры','Координация проектного производства'],cta:'Обсудить запрос на шёлковый ковёр'},
  'wholesale-textiles':{slug:'textiles',eyebrow:'B2B-текстиль и private label',title:'Оптовый текстильный сорсинг — от образца до согласованного коммерческого процесса.',description:'Ткани, полотенца, халаты, домашний текстиль и одежда: private label, образцы, RFQ, проверка производителя, качество и упаковка.',lead:'Для брендов, дистрибьюторов, гостиничного сектора и проектных покупателей мы сопоставляем спецификацию с мощностями производителя, образцами, критериями качества и упаковкой.',scopeTitle:'Направления оптового текстиля',items:['Ткани и технические требования','Полотенца и халаты','Коллекции домашнего текстиля','Производство готовой одежды','Private label и индивидуальная упаковка','Образцы и разработка коллекций'],cta:'Отправить RFQ на текстиль'}},
 fa:{
    'duzce-cam-flat-glass': {
      slug: 'duzce-cam-shishe-takht-va-ayeneh',
      eyebrow: 'شیشه دوزجه (Düzce Cam) · تأمین B2B',
      title: 'دوزجه جام: تأمین شیشه فلوت، شیشه لمینت و آینه.',
      description: 'تأمین و هماهنگی صادرات شیشه فلوت و آینه شرکت دوزجه جام با ظرفیت روزانه ۱۵۰۰ تن.',
      lead: 'ما خریداران بین‌المللی را به تولیدات پیشرفته شیشه فلوت دوزجه جام متصل می‌کنیم.',
      scopeTitle: 'سبد محصولات شیشه معماری',
      items: ['شیشه فلوت ۳ تا ۱۲ میلی‌متر', 'شیشه لمینت ایمنی و آکوستیک', 'آینه‌های معماری و دکوراتیو', 'شیشه‌های رنگی و کنترل خورشیدی', 'لجستیک و حمل و نقل اختصاصی', 'تأمین پروژه‌های بین‌المللی'],
      cta: 'درخواست قیمت شیشه دوزجه'
    },
  'iranian-carpets':{slug:'فرش-ایرانی',eyebrow:'تأمین B2B فرش از ایران',title:'تأمین فرش ایرانی را از شناخت محصول تا تحویل، شفاف و قابل پیگیری می‌کنیم.',description:'تأمین فرش دستباف، ابریشم، پشم، پشم‌وابریشم و ماشینی، کناره، قالیچه، ابعاد سفارشی و سفارش‌های پروژه‌ای.',lead:'برای مجموعه‌ها، پروژه‌های معماری و خرید عمده، اصالت و مبدأ، نوع الیاف، ابعاد، کیفیت، تیراژ، زمان تولید و روش تحویل را یکجا بررسی می‌کنیم.',scopeTitle:'دامنه کامل و قابل راستی‌آزمایی فرش',items:['فرش دستباف ایرانی','فرش تمام‌ابریشم','فرش پشمی و پشم‌وابریشم','فرش ماشینی','کناره و قالیچه','ابعاد سفارشی و تأمین پروژه‌ای'],cta:'درخواست قیمت فرش ایرانی'},
  'silk-carpets':{slug:'فرش-ابریشم-دستباف',eyebrow:'یک حوزه تخصصی مستقل',title:'در فرش ابریشم دستباف، اصالت و ظرافت بافت باید قابل بررسی باشد.',description:'بررسی مبدأ، بافت، ابعاد، کیفیت، بسته‌بندی و تأمین پروژه‌ای فرش تمام‌ابریشم و فرش‌های ترکیبی ابریشم ایران.',lead:'فرش ابریشم یک گزینه فرعی نیست؛ نوع الیاف، ظرافت گره، درخشندگی، نقشه، کیفیت بافت و شرایط حمل آن جداگانه بررسی می‌شود.',scopeTitle:'ارزیابی ویژه فرش ابریشم',items:['فرش دستباف تمام‌ابریشم','چله و پرز ابریشم','ترکیب ممتاز پشم‌وابریشم','قالیچه و قطعات کلکسیونی','نقشه، رنگ و ابعاد سفارشی','هماهنگی تولید پروژه‌ای'],cta:'درخواست فرش ابریشم'},
  'wholesale-textiles':{slug:'تامین-عمده-منسوجات',eyebrow:'منسوجات B2B و تولید با برند شما',title:'تأمین عمده منسوجات را از نمونه‌گیری تا لجستیک هماهنگ می‌کنیم.',description:'پارچه، حوله، حوله تن‌پوش، منسوجات خانگی و پوشاک با برند اختصاصی، نمونه، RFQ، اعتبارسنجی تولیدکننده، کیفیت، بسته‌بندی و لجستیک.',lead:'برای برندها، توزیع‌کنندگان، هتل‌ها و پروژه‌ها، مشخصات محصول را با ظرفیت تولید، تأیید نمونه، کیفیت، بسته‌بندی و تحویل هماهنگ می‌کنیم.',scopeTitle:'دامنه تأمین عمده منسوجات',items:['پارچه و مشخصات فنی','حوله و حوله تن‌پوش','منسوجات خانگی','تولید پوشاک آماده','برند و بسته‌بندی اختصاصی','نمونه‌گیری و توسعه مجموعه'],cta:'ارسال RFQ منسوجات'}},
 zh:{
    'duzce-cam-flat-glass': {
      slug: 'duzce-cam-pingban-boli',
      eyebrow: 'Düzce Cam · B2B 采购',
      title: 'Düzce Cam: 浮法玻璃、夹层玻璃和镜子采购。',
      description: '为Düzce Cam的平板玻璃和镜子提供可靠的采购和出口协调。',
      lead: '我们将国际买家与Düzce Cam的高科技浮法玻璃生产联系起来。',
      scopeTitle: '建筑玻璃产品组合',
      items: ['3mm - 12mm 浮法玻璃', '隔音和安全夹层玻璃', '建筑和装饰镜子', '着色和太阳能镀膜玻璃', '专用物流和运输', '国际项目供应'],
      cta: '索取 Düzce Cam 报价'
    },
  'iranian-carpets':{slug:'carpets',eyebrow:'B2B 波斯地毯大宗寻源与定制',title:'从产品工艺鉴别到交付落地的波斯地毯专业采购方案。',description:'纯手工打结地毯、真丝地毯、羊毛地毯、毛丝混纺及高精密机织地毯、长条走廊毯、小方毯、非标定制尺寸及工程项目集采。',lead:'面向品牌收藏、高端酒店工程及大宗批发项目，将真实产地、材质构成、规格尺寸、品质等级、起订体量、生产周期与交付模式统筹于同一商业决策评估中。',scopeTitle:'品类完备且真实可查的地毯覆盖范畴',items:['波斯纯手工打结地毯','顶级纯真丝手工地毯','经典羊毛及羊毛真丝混纺地毯','高密度精密机织商业地毯','走廊长条毯与收藏级小方毯','非标尺寸定制与酒店工程项目集采'],cta:'发起波斯地毯大宗 RFQ 询价'},
  'silk-carpets':{slug:'hand-knotted-silk-carpets',eyebrow:'高阶特色垂直专精领域',title:'纯手工真丝地毯：材质细节、真实产地与大师级工艺必须清晰可鉴。',description:'纯手工纯天然真丝及真丝混纺地毯的产地溯源、手工打结工艺、规格尺寸、品质等级、防潮包装及工程定制寻源。',lead:'真丝地毯并非普通通用大宗商品；我们将其作为独立的高阶特色品类进行严格管理，针对蚕丝纤维结构、道数打结精度 (KPS)、光泽度、传统经典纹样、手工工艺及长途恒温防潮运输进行独立专项核验。',scopeTitle:'真丝地毯专项评估与核验维度',items:['100% 纯天然真丝纯手工打结地毯','真丝经纱与真丝绒头高密结构','奢华羊毛真丝高比例混纺地毯','小尺寸精品与名家收藏级珍品','专属花案、色彩搭配与非标尺寸定制','大型豪华工程项目定制生产协调'],cta:'咨询纯手工真丝地毯定制需求'},
  'wholesale-textiles':{slug:'textiles',eyebrow:'B2B 大宗纺织与 OEM 代工定制',title:'从打样确认到跨境物流的全流程大宗纺织品供应链协调。',description:'高品质面料、酒店毛巾浴袍、高档家纺套件及成衣服装制造：支持 OEM / 贴牌定制 (Private Label)、打样确认、标准 RFQ、工厂核验、品质把控及包装物流。',lead:'面向跨国品牌商、区域分销商、星级酒店供应链及工程采购商，将技术规格书与工厂实际产能、样品签样、质量验收标准、定制包装及交付排期进行严谨匹配。',scopeTitle:'大宗纺织品核心业务覆盖范围',items:['特种面料与严苛技术规格书开发','星级酒店及高档家用毛巾与浴袍系列','高支高密家纺套件与床品集合','成衣服装批量制造与精细缝纫','OEM / 贴牌定制与出口专属包装','面料打样、色卡开发与系列产品企划'],cta:'提交大宗纺织品 RFQ 询价需求'}
 },
 vi:{
    'duzce-cam-flat-glass': {
      slug: 'duzce-cam-kinh-phang-va-guong',
      eyebrow: 'Düzce Cam · Nguồn cung B2B',
      title: 'Düzce Cam: Tìm nguồn cung Kính nổi, Kính dán và Gương.',
      description: 'Tìm nguồn cung đáng tin cậy và điều phối xuất khẩu cho kính nổi và gương của Düzce Cam.',
      lead: 'Chúng tôi kết nối người mua quốc tế với dây chuyền sản xuất kính nổi công nghệ cao của Düzce Cam.',
      scopeTitle: 'Danh mục Kính Kiến trúc',
      items: ['Kính nổi 3mm - 12mm', 'Kính dán An toàn & Cách âm', 'Gương Kiến trúc & Trang trí', 'Kính màu và Kính cản nhiệt', 'Logistics & Vận tải chuyên dụng', 'Cung cấp cho Dự án Quốc tế'],
      cta: 'Yêu cầu Báo giá Düzce Cam'
    },
  'iranian-carpets':{slug:'carpets',eyebrow:'Thu mua thảm B2B',title:'Thu mua thảm Ba Tư được cấu trúc từ bằng chứng sản phẩm đến giao hàng.',description:'Thảm thủ công, lụa, len, len-lụa và dệt máy Ba Tư; thảm hành lang, thảm nhỏ, kích thước tùy chỉnh và thu mua theo dự án.',lead:'Đối với các bộ sưu tập, dự án và bán buôn, chúng tôi kết nối xuất xứ, vật liệu, kích thước, chất lượng, số lượng, tiến độ và giao hàng trong một đánh giá thương mại duy nhất.',scopeTitle:'Danh mục thảm đa dạng và có thể xác minh',items:['Thảm Ba Tư dệt thủ công','Thảm lụa nguyên chất','Thảm len và len-lụa','Thảm dệt máy cao cấp','Thảm hành lang và thảm nhỏ','Kích thước tùy chỉnh và thu mua dự án'],cta:'Lập RFQ thu mua thảm'},
  'silk-carpets':{slug:'hand-knotted-silk-carpets',eyebrow:'Danh mục chuyên biệt cao cấp',title:'Thảm lụa dệt thủ công đòi hỏi bằng chứng rõ ràng về xuất xứ và tay nghề.',description:'Xuất xứ, tay nghề thủ công, kích thước, chất lượng, đóng gói và thu mua dự án cho thảm lụa nguyên chất và lụa pha Ba Tư.',lead:'Chúng tôi xử lý thảm lụa như một danh mục cao cấp độc lập, nơi cấu trúc sợi, độ mịn nút thắt, độ bóng, hoa văn, tay nghề và vận chuyển được thẩm định riêng biệt.',scopeTitle:'Đánh giá chuyên sâu cho thảm lụa',items:['Thảm lụa dệt thủ công 100%','Cấu trúc sợi dọc và sợi tuyết lụa','Hỗn hợp cao cấp len-lụa','Các tác phẩm nhỏ và sưu tầm','Hoa văn, màu sắc và kích thước tùy chỉnh','Điều phối sản xuất cho dự án lớn'],cta:'Trao đổi về yêu cầu thảm lụa'},
  'wholesale-textiles':{slug:'textiles',eyebrow:'Dệt may B2B và nhãn hàng riêng',title:'Thu mua dệt may bán buôn được điều phối từ mẫu thử đến logistics.',description:'Vải, khăn tắm, áo choàng tắm, dệt may gia dụng và may mặc với nhãn hàng riêng (OEM), mẫu thử, RFQ, xác minh nhà sản xuất, chất lượng và logistics.',lead:'Dành cho các thương hiệu, nhà phân phối, khách sạn và dự án, chúng tôi khớp nối thông số kỹ thuật với năng lực nhà máy, duyệt mẫu, chất lượng, bao bì và tiến độ giao hàng.',scopeTitle:'Phạm vi sản phẩm dệt may bán buôn',items:['Vải và thông số kỹ thuật dệt may','Khăn tắm và áo choàng tắm cao cấp','Bộ sưu tập dệt may gia dụng','Sản xuất hàng may mặc sẵn','Gia công OEM và đóng gói tùy chỉnh','Phát triển mẫu và bộ sưu tập mới'],cta:'Gửi yêu cầu RFQ dệt may'}
 },
  uk: {
    'iranian-carpets': { slug: 'iranian-carpets', eyebrow: 'Килими', title: 'Іранські килими', description: 'Опис', lead: 'Лід', scopeTitle: 'Сфера', items: [], cta: 'Запит' },
    'silk-carpets': { slug: 'silk-carpets', eyebrow: 'Килими', title: 'Шовкові килими', description: 'Опис', lead: 'Лід', scopeTitle: 'Сфера', items: [], cta: 'Запит' },
    'wholesale-textiles': { slug: 'wholesale-textiles', eyebrow: 'Текстиль', title: 'Оптовий текстиль', description: 'Опис', lead: 'Лід', scopeTitle: 'Сфера', items: [], cta: 'Запит' },
    'duzce-cam-flat-glass': { slug: 'duzce-cam-flat-glass', eyebrow: 'Скло', title: 'Düzce Cam', description: 'Опис', lead: 'Лід', scopeTitle: 'Сфера', items: [], cta: 'Запит' }
  }
};
export const persianProducerCopy: Record<TradeSectorId, {
  title:string; lead:string; services:string[]; audiences:string[]; markets:string; requirements:string; role:string; priority:string; ctas:string[];
}> = {
  'iranian-carpets': {
    title:'برای تولیدکنندگان و صادرکنندگان ایرانی',
    lead:'CTSEG می‌تواند به تولیدکنندگان و کارگاه‌های ایرانی کمک کند تا محصولات خود را به‌صورت حرفه‌ای به خریداران بین‌المللی معرفی کنند و مسیر ورود به بازارهای هدف را واقع‌بینانه بسنجند.',
    services:['معرفی محصول به بازارهای بین‌المللی','ارزیابی آمادگی صادرات','آماده‌سازی کاتالوگ و مشخصات تجاری','مدیریت استعلام قیمت و RFQ','هماهنگی نمونه','بررسی بسته‌بندی و برچسب‌گذاری','هماهنگی اسناد و لجستیک','ارتباط با واردکنندگان، عمده‌فروشان، توزیع‌کنندگان و خرده‌فروشان'],
    audiences:['کارگاه‌های فرش دستباف','تولیدکنندگان فرش ابریشم','تولیدکنندگان فرش ماشینی','صادرکنندگان فرش'],
    markets:'محصولات مناسب می‌توانند برای بازار ترکیه، اروپا، آمریکا و سایر بازارهای هدف ارزیابی شوند.',
    requirements:'تولیدکننده باید اطلاعات واقعی و قابل بررسی درباره ظرفیت، مواد اولیه، مشخصات فنی، قیمت، حداقل سفارش، زمان تولید، بسته‌بندی و اسناد ارائه دهد.',
    role:'CTSEG کارخانه یا خریدار تضمینی نیست؛ نقش آن ایجاد ارتباط تجاری، بررسی آمادگی صادرات و هماهنگی فرایند فروش بین‌المللی است.',
    priority:'درخواست‌های جدی، شفاف و قابل اجرا در اولویت بررسی قرار می‌گیرند.',
    ctas:['معرفی محصول خود','درخواست بررسی بازار','ارسال مشخصات تولید','آغاز همکاری صادراتی','دریافت ارزیابی تجاری']
  },
  'silk-carpets': {
    title:'برای تولیدکنندگان و صادرکنندگان ایرانی',
    lead:'CTSEG می‌تواند به کارگاه‌ها و تولیدکنندگان فرش ابریشم کمک کند تا اصالت، کیفیت بافت و ارزش تجاری محصول خود را برای خریداران حرفه‌ای در بازارهای بین‌المللی روشن و مستند ارائه دهند.',
    services:['معرفی محصول به بازارهای بین‌المللی','ارزیابی آمادگی صادرات','آماده‌سازی کاتالوگ و مشخصات تجاری','مدیریت استعلام قیمت و RFQ','هماهنگی نمونه','بررسی بسته‌بندی و برچسب‌گذاری','هماهنگی اسناد و لجستیک','ارتباط با واردکنندگان، عمده‌فروشان، توزیع‌کنندگان و خرده‌فروشان'],
    audiences:['کارگاه‌های فرش دستباف','تولیدکنندگان فرش ابریشم','تولیدکنندگان فرش ماشینی','صادرکنندگان فرش'],
    markets:'فرش‌های واجد شرایط می‌توانند برای بازار ترکیه، اروپا، آمریکا و سایر بازارهای هدف ارزیابی شوند.',
    requirements:'کارگاه یا تولیدکننده باید اطلاعات واقعی درباره نوع ابریشم و مواد اولیه، رج‌شمار و مشخصات بافت، ابعاد، ظرفیت، قیمت، حداقل سفارش، زمان تولید، بسته‌بندی و اسناد ارائه دهد.',
    role:'CTSEG کارخانه یا خریدار تضمینی نیست؛ نقش آن ایجاد ارتباط تجاری، بررسی آمادگی صادرات و هماهنگی فرایند فروش بین‌المللی است.',
    priority:'درخواست‌های جدی، مستند و قابل اجرا در اولویت بررسی قرار می‌گیرند.',
    ctas:['معرفی محصول خود','درخواست بررسی بازار','ارسال مشخصات تولید','آغاز همکاری صادراتی','دریافت ارزیابی تجاری']
  },
  'wholesale-textiles': {
    title:'برای تولیدکنندگان و صادرکنندگان ایرانی',
    lead:'CTSEG می‌تواند به تولیدکنندگان ایرانی منسوجات و پوشاک کمک کند تا محصولات، توان تولید و شرایط همکاری خود را برای خریداران بین‌المللی به‌شکل منظم و قابل مقایسه ارائه دهند.',
    services:['معرفی محصول به بازارهای بین‌المللی','ارزیابی آمادگی صادرات','آماده‌سازی کاتالوگ و مشخصات تجاری','مدیریت استعلام قیمت و RFQ','هماهنگی نمونه','بررسی بسته‌بندی و برچسب‌گذاری','هماهنگی اسناد و لجستیک','ارتباط با واردکنندگان، عمده‌فروشان، توزیع‌کنندگان و خرده‌فروشان'],
    audiences:['تولیدکنندگان پارچه','تولیدکنندگان حوله و حوله تن‌پوش','تولیدکنندگان منسوجات خانگی','تولیدکنندگان پوشاک','برندهای private label'],
    markets:'محصولات مناسب می‌توانند برای بازار ترکیه، اروپا، آمریکا و سایر بازارهای هدف ارزیابی شوند.',
    requirements:'تولیدکننده باید اطلاعات واقعی و قابل بررسی درباره ظرفیت، مواد اولیه، مشخصات فنی، قیمت، حداقل سفارش، زمان تولید، بسته‌بندی، برچسب‌گذاری و اسناد ارائه دهد.',
    role:'CTSEG کارخانه یا خریدار تضمینی نیست؛ نقش آن ایجاد ارتباط تجاری، بررسی آمادگی صادرات و هماهنگی فرایند فروش بین‌المللی است.',
    priority:'درخواست‌های جدی، شفاف و قابل اجرا در اولویت بررسی قرار می‌گیرند.',
    ctas:['معرفی محصول خود','درخواست بررسی بازار','ارسال مشخصات تولید','آغاز همکاری صادراتی','دریافت ارزیابی تجاری']
  }
};
export const pathForSector = (lang:TradeLocale,id:TradeSectorId) => encodeURI(`/${lang}/sourcing/${tradeCopy[lang][id].slug}/`);


tradeUi.ro={name:'Română',home:'CTSEG acasă',contact:'Trimite solicitare comercială',related:'Domenii conexe de sourcing',assurance:'Controale pentru decizia de cumpărare',process:'Proces de sourcing controlat',checks:['Cerință, utilizare și specificație','Verificarea producătorului, capacității și referințelor','Compararea mostrelor, calității și ofertelor','Ambalare, asigurare, logistică și livrare']};
tradeUi.bg={name:'Български',home:'Начало CTSEG',contact:'Изпрати търговско запитване',related:'Свързани области за снабдяване',assurance:'Контроли за решението за покупка',process:'Контролиран процес на снабдяване',checks:['Изискване, приложение и спецификация','Проверка на производител, капацитет и референции','Сравнение на мостри, качество и оферти','Опаковка, застраховка, логистика и доставка']};
tradeUi.sr={name:'Srpski',home:'CTSEG početna',contact:'Pošalji komercijalni upit',related:'Povezane oblasti sourcinga',assurance:'Kontrole za odluku o kupovini',process:'Kontrolisan proces sourcinga',checks:['Zahtev, primena i specifikacija','Provera proizvođača, kapaciteta i referenci','Poređenje uzoraka, kvaliteta i ponuda','Pakovanje, osiguranje, logistika i isporuka']};

tradeCopy.ro={
 'duzce-cam-flat-glass':{...tradeCopy.en['duzce-cam-flat-glass'],title:'Düzce Cam: sticlă float, sticlă laminată și oglinzi pentru proiecte B2B.',description:'Coordonare de sourcing și export pentru portofoliul Düzce Cam.',lead:'Conectăm cumpărătorii internaționali cu producția Düzce Cam și coordonăm verificarea specificațiilor, oferta și logistica.',scopeTitle:'Portofoliu de sticlă arhitecturală',items:['Sticlă float 3–12 mm','Sticlă laminată acustică și de siguranță','Oglinzi arhitecturale și decorative','Sticlă colorată și cu control solar','Logistică dedicată','Coordonare pentru proiecte internaționale'],cta:'Solicită ofertă Düzce Cam'},
 'iranian-carpets':{...tradeCopy.en['iranian-carpets'],title:'Sourcing de covoare iraniene, de la verificarea produsului la livrare.',description:'Covoare iraniene înnodate manual, din mătase, lână și combinații premium.',lead:'Evaluăm originea, materialul, dimensiunile, calitatea, cantitatea și modelul de livrare într-un singur proces comercial.',scopeTitle:'Gamă verificabilă de covoare',items:['Covoare iraniene înnodate manual','Covoare din mătase pură','Covoare din lână și lână-mătase','Covoare produse mecanic','Traverse și dimensiuni mici','Dimensiuni speciale și proiecte'],cta:'Creează un RFQ pentru covoare'},
 'silk-carpets':{...tradeCopy.en['silk-carpets'],title:'Covoarele din mătase înnodate manual necesită dovezi clare privind originea și execuția.',description:'Verificarea originii, execuției, dimensiunilor, calității și ambalării pentru covoare premium din mătase.',lead:'Tratăm mătasea ca o categorie premium distinctă, cu verificare separată a fibrei, densității nodurilor și execuției.',scopeTitle:'Evaluare dedicată covoarelor din mătase',items:['Mătase pură înnodată manual','Urzeală și fir din mătase','Amestecuri premium lână-mătase','Piese mici de colecție','Modele și dimensiuni personalizate','Coordonare de proiect'],cta:'Trimite cerința pentru covoare din mătase'},
 'wholesale-textiles':{...tradeCopy.en['wholesale-textiles'],title:'Sourcing en-gros de textile, coordonat de la mostră la logistică.',description:'Țesături, prosoape, halate, textile pentru casă și îmbrăcăminte cu private label și verificarea producătorilor.',lead:'Corelăm specificația produsului cu capacitatea producătorului, aprobarea mostrei, calitatea, ambalarea și planul de livrare.',scopeTitle:'Domeniu textile en-gros',items:['Țesături și specificații tehnice','Prosoape și halate','Colecții home textile','Producție de îmbrăcăminte','Private label și ambalare','Mostre și dezvoltare de colecții'],cta:'Trimite un RFQ pentru textile'}
};
tradeCopy.bg={
 'duzce-cam-flat-glass':{...tradeCopy.en['duzce-cam-flat-glass'],title:'Düzce Cam: флоатно, ламинирано стъкло и огледала за B2B проекти.',description:'Снабдяване и експортна координация за продуктовото портфолио на Düzce Cam.',lead:'Свързваме международни купувачи с производството на Düzce Cam и координираме спецификации, оферта и логистика.',scopeTitle:'Портфолио архитектурно стъкло',items:['Флоатно стъкло 3–12 mm','Акустично и защитно ламинирано стъкло','Архитектурни и декоративни огледала','Оцветено и слънцезащитно стъкло','Специализирана логистика','Международни проекти'],cta:'Поискай оферта за Düzce Cam'},
 'iranian-carpets':{...tradeCopy.en['iranian-carpets'],title:'Снабдяване с ирански килими – от проверката на продукта до доставката.',description:'Ръчно тъкани, копринени, вълнени и премиум ирански килими.',lead:'Оценяваме произход, материал, размери, качество, количество и доставка в един търговски процес.',scopeTitle:'Проверим обхват от килими',items:['Ръчно тъкани ирански килими','Килими от чиста коприна','Вълнени и вълнено-копринени килими','Машинно произведени килими','Пътеки и малки размери','Специални размери и проекти'],cta:'Създай RFQ за килими'},
 'silk-carpets':{...tradeCopy.en['silk-carpets'],title:'Ръчно тъканите копринени килими изискват ясни доказателства за произход и изработка.',description:'Проверка на произход, изработка, размери, качество и опаковка за премиум копринени килими.',lead:'Третираме коприната като отделна премиум категория с проверка на влакното, гъстотата на възлите и изработката.',scopeTitle:'Специализирана оценка за коприна',items:['Чиста коприна, ръчно тъкана','Копринена основа и власинки','Премиум смеси вълна-коприна','Колекционерски размери','Персонализирани модели и размери','Проектна координация'],cta:'Изпрати запитване за копринени килими'},
 'wholesale-textiles':{...tradeCopy.en['wholesale-textiles'],title:'Текстил на едро – координация от мострата до логистиката.',description:'Платове, кърпи, халати, домашен текстил и облекло с private label и проверка на производители.',lead:'Свързваме спецификацията с капацитета, мострите, качеството, опаковката и доставката.',scopeTitle:'Обхват на текстил на едро',items:['Платове и технически спецификации','Кърпи и халати','Колекции домашен текстил','Производство на облекло','Private label и опаковка','Мостри и разработка'],cta:'Изпрати RFQ за текстил'}
};
tradeCopy.sr={
 'duzce-cam-flat-glass':{...tradeCopy.en['duzce-cam-flat-glass'],title:'Düzce Cam: float, laminirano staklo i ogledala za B2B projekte.',description:'Sourcing i izvozna koordinacija za Düzce Cam portfolio.',lead:'Povezujemo međunarodne kupce sa proizvodnjom Düzce Cam i koordiniramo specifikacije, ponudu i logistiku.',scopeTitle:'Portfolio arhitektonskog stakla',items:['Float staklo 3–12 mm','Akustično i sigurnosno laminirano staklo','Arhitektonska i dekorativna ogledala','Tonirano i solarno staklo','Namenska logistika','Međunarodni projekti'],cta:'Zatraži Düzce Cam ponudu'},
 'iranian-carpets':{...tradeCopy.en['iranian-carpets'],title:'Sourcing iranskih tepiha od provere proizvoda do isporuke.',description:'Ručno čvorovani, svileni, vuneni i premium iranski tepisi.',lead:'Poreklo, materijal, dimenzije, kvalitet, količinu i isporuku procenjujemo u jednom komercijalnom procesu.',scopeTitle:'Proverljiv asortiman tepiha',items:['Ručno čvorovani iranski tepisi','Tepisi od čiste svile','Vuneni i vuneno-svileni tepisi','Mašinski tepisi','Staze i manji formati','Posebne dimenzije i projekti'],cta:'Kreiraj RFQ za tepihe'},
 'silk-carpets':{...tradeCopy.en['silk-carpets'],title:'Ručno čvorovani svileni tepisi zahtevaju jasne dokaze o poreklu i izradi.',description:'Provera porekla, izrade, dimenzija, kvaliteta i pakovanja premium svilenih tepiha.',lead:'Svilu tretiramo kao posebnu premium kategoriju sa odvojenom proverom vlakna, gustine čvorova i izrade.',scopeTitle:'Posebna procena svilenih tepiha',items:['Čista svila, ručno čvorovana','Svilena osnova i flora','Premium mešavine vune i svile','Manji kolekcionarski komadi','Prilagođeni uzorci i dimenzije','Projektna koordinacija'],cta:'Pošalji zahtev za svilene tepihe'},
 'wholesale-textiles':{...tradeCopy.en['wholesale-textiles'],title:'Veleprodajni sourcing tekstila od uzorka do logistike.',description:'Tkanine, peškiri, bade-mantili, kućni tekstil i odeća uz private label i proveru proizvođača.',lead:'Specifikaciju povezujemo sa kapacitetom proizvođača, odobrenjem uzorka, kvalitetom, pakovanjem i isporukom.',scopeTitle:'Veleprodajni tekstilni asortiman',items:['Tkanine i tehničke specifikacije','Peškiri i bade-mantili','Kućni tekstil','Proizvodnja odeće','Private label i pakovanje','Uzorci i razvoj kolekcije'],cta:'Pošalji RFQ za tekstil'}
};
