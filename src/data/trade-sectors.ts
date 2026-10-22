import { activeLocales, type ActiveLocale } from './locales';

export const tradeLocales = activeLocales.filter((code) => code !== 'he') as ActiveLocale[];
export type TradeLocale = ActiveLocale;
export const tradeSectorIds = ['wholesale-textiles'] as const;
export type TradeSectorId = (typeof tradeSectorIds)[number];

type Copy = { slug:string; eyebrow:string; title:string; description:string; lead:string; scopeTitle:string; items:string[]; cta:string };
export const tradeUi: Record<string,{name:string;home:string;contact:string;related:string;assurance:string;process:string;checks:string[]}> = {
  tr:{name:'Türkçe',home:'CTSEG ana sayfa',contact:'Ticari talep gönder',related:'İlgili tedarik alanları',assurance:'Satın alma kararını destekleyen kontroller',process:'Kontrollü tedarik süreci',checks:['İhtiyaç, kullanım alanı ve teknik şartname','Üretici, kapasite ve referans doğrulama','Numune, malzeme, kalite ve teklif karşılaştırması','Paketleme, sigorta, lojistik ve teslim koordinasyonu']},
  en:{name:'English',home:'CTSEG home',contact:'Submit a commercial enquiry',related:'Related sourcing areas',assurance:'Controls supporting the buying decision',process:'Controlled sourcing process',checks:['Requirement, application and specification','Producer, capacity and reference verification','Sample, material, quality and quotation comparison','Packaging, insurance, logistics and delivery coordination']},
  de:{name:'Deutsch',home:'CTSEG Startseite',contact:'Handelsanfrage senden',related:'Verwandte Beschaffungsbereiche',assurance:'Kontrollen für die Einkaufsentscheidung',process:'Kontrollierter Beschaffungsprozess',checks:['Bedarf, Anwendung und Spezifikation','Hersteller-, Kapazitäts- und Referenzprüfung','Muster-, Material-, Qualitäts- und Angebotsvergleich','Verpackungs-, Versicherungs-, Logistik- und Lieferkoordination']},
  it:{name:'Italiano',home:'Home CTSEG',contact:'Invia una richiesta commerciale',related:'Aree di sourcing correlate',assurance:'Controlli a supporto dell’acquisto',process:'Processo di sourcing controllato',checks:['Fabbisogno, utilizzo e specifiche','Verifica del produttore, capacità e referenze','Confronto di campioni, materiali, qualità e offerte','Coordinamento di imballaggio, assicurazione, logistica e consegna']},
  ru:{name:'Русский',home:'Главная CTSEG',contact:'Отправить коммерческий запрос',related:'Связанные направления сорсинга',assurance:'Проверки для обоснованного решения',process:'Контролируемый процесс сорсинга',checks:['Задача, назначение и технические требования','Проверка производителя, мощности и деловой истории','Сравнение образцов, материалов, качества и предложений','Общая оценка упаковки и логистических вариантов']},
  fa:{name:'فارسی',home:'صفحه اصلی CTSEG',contact:'ارسال درخواست تجاری',related:'حوزه‌های مرتبط تأمین',assurance:'کنترل‌هایی برای یک تصمیم خرید مطمئن',process:'فرایند کنترل‌شده تأمین',checks:['تعریف نیاز، کاربرد و مشخصات فنی','اعتبارسنجی تولیدکننده، ظرفیت و سوابق','مقایسه نمونه، جنس، کیفیت و پیشنهاد قیمت','هماهنگی بسته‌بندی، بیمه، لجستیک و تحویل']},
  zh:{name:'中文',home:'CTSEG 首页',contact:'提交商务询价需求',related:'相关大宗采购品类',assurance:'支撑明智商业决策的多维核验控制',process:'全流程严谨可控的寻源与履约机制',checks:['明确采购需求、具体技术规格与应用场景','深度核验生产主体、排产产能与历史出口信誉','样品实物比对、材质化验、品质等级与综合报价横评','严控定制包装、国际货运保险与跨境物流交付协调']},
  vi:{name:'Tiếng Việt',home:'Trang chủ CTSEG',contact:'Gửi yêu cầu thương mại',related:'Lĩnh vực thu mua liên quan',assurance:'Kiểm soát hỗ trợ quyết định mua hàng',process:'Quy trình thu mua được kiểm soát',checks:['Nhu cầu, ứng dụng và thông số kỹ thuật','Xác minh nhà sản xuất, công suất và uy tín','So sánh mẫu thử, chất liệu, chất lượng và báo giá','Đóng gói, bảo hiểm, logistics và điều phối giao hàng']}
,
  uk:{name:'Українська',home:'CTSEG Головна',contact:'Надіслати запит',related:'Схожі сфери',assurance:'Гарантія якості',process:'Процес закупівлі',checks:['Крок 1','Крок 2','Крок 3','Крок 4']}
};

export const tradeCopy: Record<string,Record<TradeSectorId,Copy>> = {
 tr:{
  'wholesale-textiles':{slug:'toptan-tekstil-tedariki',eyebrow:'B2B tekstil ve private label',title:'Toptan tekstil tedarikini numuneden lojistiğe kadar koordine ediyoruz.',description:'Kumaş, havlu, bornoz, ev tekstili ve hazır giyim için private label, numune, RFQ, üretici doğrulama, kalite, paketleme ve lojistik.',lead:'Markalar, distribütörler, oteller ve proje alıcıları için ürün şartnamesini üretici kapasitesi, numune onayı, kalite kriterleri, paketleme ve teslim planıyla eşleştiriyoruz.',scopeTitle:'Toptan tekstil ürün kapsamı',items:['Kumaş ve teknik şartnameler','Havlu ve bornoz','Ev tekstili koleksiyonları','Hazır giyim üretimi','Private label ve özel paketleme','Numune ve koleksiyon geliştirme'],cta:'Tekstil RFQ talebi gönder'}},
 en:{
  'wholesale-textiles':{slug:'wholesale-textile-sourcing',eyebrow:'B2B textiles and private label',title:'Wholesale textile sourcing coordinated from sample to logistics.',description:'Fabric, towels, bathrobes, home textiles and apparel with private label, samples, RFQ, producer verification, quality, packaging and logistics.',lead:'For brands, distributors, hospitality and project buyers, we match specifications with producer capacity, sample approval, quality, packaging and delivery.',scopeTitle:'Wholesale textile scope',items:['Fabric and technical specifications','Towels and bathrobes','Home-textile collections','Ready-to-wear production','Private label and custom packaging','Sampling and collection development'],cta:'Submit a textile RFQ'}},
 de:{
  'wholesale-textiles':{slug:'textil-grosshandel-beschaffung',eyebrow:'B2B-Textilien und Private Label',title:'Textilbeschaffung im Großhandel – vom Muster bis zur Logistik.',description:'Stoffe, Handtücher, Bademäntel, Heimtextilien und Bekleidung mit Private Label, Mustern, RFQ, Herstellerprüfung, Qualität, Verpackung und Logistik.',lead:'Wir verbinden Produktspezifikation, Herstellerkapazität, Musterfreigabe, Qualitätskriterien, Verpackung und Lieferung.',scopeTitle:'Sortiment für den Textilgroßhandel',items:['Stoffe und technische Spezifikationen','Handtücher und Bademäntel','Heimtextil-Kollektionen','Konfektionsbekleidung','Private Label und Sonderverpackung','Muster- und Kollektionsentwicklung'],cta:'Textil-RFQ senden'}},
 it:{
  'wholesale-textiles':{slug:'approvvigionamento-tessile-ingrosso',eyebrow:'Tessile B2B e private label',title:'Sourcing tessile all’ingrosso coordinato dal campione alla logistica.',description:'Tessuti, asciugamani, accappatoi, tessili casa e abbigliamento con private label, campioni, RFQ, verifica, qualità, imballaggio e logistica.',lead:'Abbiniamo specifiche, capacità produttiva, campionatura, qualità, imballaggio e piano di consegna.',scopeTitle:'Gamma tessile all’ingrosso',items:['Tessuti e specifiche tecniche','Asciugamani e accappatoi','Tessili per la casa','Produzione di abbigliamento','Private label e imballaggio','Campioni e sviluppo collezione'],cta:'Invia un RFQ tessile'}},
 ru:{
  'wholesale-textiles':{slug:'textiles',eyebrow:'B2B-текстиль и private label',title:'Оптовый текстильный сорсинг — от образца до согласованного коммерческого процесса.',description:'Ткани, полотенца, халаты, домашний текстиль и одежда: private label, образцы, RFQ, проверка производителя, качество и упаковка.',lead:'Для брендов, дистрибьюторов, гостиничного сектора и проектных покупателей мы сопоставляем спецификацию с мощностями производителя, образцами, критериями качества и упаковкой.',scopeTitle:'Направления оптового текстиля',items:['Ткани и технические требования','Полотенца и халаты','Коллекции домашнего текстиля','Производство готовой одежды','Private label и индивидуальная упаковка','Образцы и разработка коллекций'],cta:'Отправить RFQ на текстиль'}},
 fa:{
  'wholesale-textiles':{slug:'تامین-عمده-منسوجات',eyebrow:'منسوجات B2B و تولید با برند شما',title:'تأمین عمده منسوجات را از نمونه‌گیری تا لجستیک هماهنگ می‌کنیم.',description:'پارچه، حوله، حوله تن‌پوش، منسوجات خانگی و پوشاک با برند اختصاصی، نمونه، RFQ، اعتبارسنجی تولیدکننده، کیفیت، بسته‌بندی و لجستیک.',lead:'برای برندها، توزیع‌کنندگان، هتل‌ها و پروژه‌ها، مشخصات محصول را با ظرفیت تولید، تأیید نمونه، کیفیت، بسته‌بندی و تحویل هماهنگ می‌کنیم.',scopeTitle:'دامنه تأمین عمده منسوجات',items:['پارچه و مشخصات فنی','حوله و حوله تن‌پوش','منسوجات خانگی','تولید پوشاک آماده','برند و بسته‌بندی اختصاصی','نمونه‌گیری و توسعه مجموعه'],cta:'ارسال RFQ منسوجات'}},
 zh:{
  'wholesale-textiles':{slug:'textiles',eyebrow:'B2B 大宗纺织与 OEM 代工定制',title:'从打样确认到跨境物流的全流程大宗纺织品供应链协调。',description:'高品质面料、酒店毛巾浴袍、高档家纺套件及成衣服装制造：支持 OEM / 贴牌定制 (Private Label)、打样确认、标准 RFQ、工厂核验、品质把控及包装物流。',lead:'面向跨国品牌商、区域分销商、星级酒店供应链及工程采购商，将技术规格书与工厂实际产能、样品签样、质量验收标准、定制包装及交付排期进行严谨匹配。',scopeTitle:'大宗纺织品核心业务覆盖范围',items:['特种面料与严苛技术规格书开发','星级酒店及高档家用毛巾与浴袍系列','高支高密家纺套件与床品集合','成衣服装批量制造与精细缝纫','OEM / 贴牌定制与出口专属包装','面料打样、色卡开发与系列产品企划'],cta:'提交大宗纺织品 RFQ 询价需求'}
 },
 vi:{
  'wholesale-textiles':{slug:'textiles',eyebrow:'Dệt may B2B và nhãn hàng riêng',title:'Thu mua dệt may bán buôn được điều phối từ mẫu thử đến logistics.',description:'Vải, khăn tắm, áo choàng tắm, dệt may gia dụng và may mặc với nhãn hàng riêng (OEM), mẫu thử, RFQ, xác minh nhà sản xuất, chất lượng và logistics.',lead:'Dành cho các thương hiệu, nhà phân phối, khách sạn và dự án, chúng tôi khớp nối thông số kỹ thuật với năng lực nhà máy, duyệt mẫu, chất lượng, bao bì và tiến độ giao hàng.',scopeTitle:'Phạm vi sản phẩm dệt may bán buôn',items:['Vải và thông số kỹ thuật dệt may','Khăn tắm và áo choàng tắm cao cấp','Bộ sưu tập dệt may gia dụng','Sản xuất hàng may mặc sẵn','Gia công OEM và đóng gói tùy chỉnh','Phát triển mẫu và bộ sưu tập mới'],cta:'Gửi yêu cầu RFQ dệt may'}
 }
,
  uk: {
      'wholesale-textiles': { slug: 'wholesale-textiles', eyebrow: 'Текстиль · оптове постачання', title: 'Оптовий текстиль: виробники, private label та RFQ', description: 'Пошук і порівняння текстильних виробників для тканин, домашнього текстилю, рушників, одягу та private-label програм.', lead: 'Ми зіставляємо технічне завдання покупця з можливостями фабрики, якістю зразків, MOQ, упаковкою, маркуванням і строками.', scopeTitle: 'Оптовий текстильний sourcing', items: ['Тканини та технічні специфікації','Рушники, халати й домашній текстиль','Готовий одяг і контрактне виробництво','Private label, OEM та пакування','Зразки, кольори й контроль якості','MOQ, виробничий графік та доставка'], cta: 'Надіслати текстильний RFQ' },
      'duzce-cam-flat-glass': { slug: 'duzce-cam-flat-glass', eyebrow: 'Архітектурне скло · Туреччина', title: 'Düzce Cam: листове скло для оптових і проєктних закупівель', description: 'Комерційна координація поставок листового скла Düzce Cam із Туреччини для дистриб’юторів, переробників скла та будівельних проєктів.', lead: 'CTSEG структурує запит за товщиною, форматом, обсягом, пакуванням і місцем доставки та координує перевірку актуальних комерційних умов.', scopeTitle: 'Параметри запиту на скло', items: ['Тип і товщина листового скла','Формат листа та допустимі параметри','Обсяг замовлення і графік поставок','Пакування та вимоги до безпечного транспортування','Документи й технічна інформація виробника','Incoterms, маршрут і місце доставки'], cta: 'Надіслати запит щодо Düzce Cam' }
    }
};

export const persianProducerCopy: Record<TradeSectorId, {
  title:string; lead:string; services:string[]; audiences:string[]; markets:string; requirements:string; role:string; priority:string; ctas:string[];
}> = {
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


/* Balkan locale rollout: ro, bg, sr */
Object.assign(tradeUi as any,{
  ro:{name:'Română',home:'Pagina principală CTSEG',contact:'Trimite o solicitare comercială',related:'Domenii conexe de aprovizionare',assurance:'Controale care susțin decizia de cumpărare',process:'Proces controlat de aprovizionare',checks:['Cerință, aplicație și specificație','Verificarea producătorului, capacității și referințelor','Comparația mostrelor, materialelor, calității și ofertelor','Coordonarea ambalării, asigurării, logisticii și livrării']},
  bg:{name:'Български',home:'Начало CTSEG',contact:'Изпрати търговска заявка',related:'Свързани области за снабдяване',assurance:'Контроли в подкрепа на решението за покупка',process:'Контролиран процес на снабдяване',checks:['Нужда, приложение и спецификация','Проверка на производител, капацитет и референции','Сравнение на мостри, материали, качество и оферти','Координация на опаковка, застраховка, логистика и доставка']},
  sr:{name:'Srpski',home:'CTSEG početna',contact:'Pošalji komercijalni upit',related:'Povezane oblasti nabavke',assurance:'Kontrole koje podržavaju odluku o kupovini',process:'Kontrolisan proces nabavke',checks:['Zahtev, primena i specifikacija','Provera proizvođača, kapaciteta i referenci','Poređenje uzoraka, materijala, kvaliteta i ponuda','Koordinacija pakovanja, osiguranja, logistike i isporuke']}
});
Object.assign(tradeCopy as any,{
  ro:{
    'wholesale-textiles':{slug:'sourcing-textile-angro',eyebrow:'Textile B2B și private label',title:'Sourcingul de textile angro, coordonat de la mostră până la logistică.',description:'Țesături, prosoape, halate, textile de casă și îmbrăcăminte cu private label, mostre, RFQ, verificarea producătorului, calitate, ambalare și logistică.',lead:'Pentru branduri, distribuitori, hoteluri și cumpărători de proiecte, corelăm specificația cu capacitatea producătorului, aprobarea mostrei, calitatea, ambalarea și livrarea.',scopeTitle:'Gamă de textile angro',items:['Țesături și specificații tehnice','Prosoape și halate','Colecții de textile pentru casă','Producție de îmbrăcăminte','Private label și ambalare personalizată','Mostre și dezvoltare de colecții'],cta:'Trimite un RFQ pentru textile'}
  },
  bg:{
    'wholesale-textiles':{slug:'sourcing-tekstili-na-edro',eyebrow:'B2B текстил и private label',title:'Снабдяване с текстил на едро – координирано от мострата до логистиката.',description:'Платове, кърпи, халати, домашен текстил и облекло с private label, мостри, RFQ, проверка на производител, качество, опаковка и логистика.',lead:'За марки, дистрибутори, хотели и проектни купувачи съчетаваме спецификацията с капацитета на производителя, одобрението на мостри, качеството, опаковката и доставката.',scopeTitle:'Обхват на текстил на едро',items:['Платове и технически спецификации','Кърпи и халати','Колекции за домашен текстил','Производство на готово облекло','Private label и персонализирана опаковка','Мостри и разработване на колекции'],cta:'Изпрати RFQ за текстил'}
  },
  sr:{
    'wholesale-textiles':{slug:'veleprodajni-sourcing-tekstila',eyebrow:'B2B tekstil i private label',title:'Veleprodajni sourcing tekstila koordinisan od uzorka do logistike.',description:'Tkanine, peškiri, bade mantili, kućni tekstil i odeća uz private label, uzorke, RFQ, proveru proizvođača, kvalitet, pakovanje i logistiku.',lead:'Za brendove, distributere, hotele i projektne kupce usklađujemo specifikaciju sa kapacitetom proizvođača, odobrenjem uzorka, kvalitetom, pakovanjem i isporukom.',scopeTitle:'Obuhvat veleprodajnog tekstila',items:['Tkanine i tehničke specifikacije','Peškiri i bade mantili','Kolekcije kućnog tekstila','Proizvodnja gotove odeće','Private label i prilagođeno pakovanje','Uzorci i razvoj kolekcije'],cta:'Pošalji RFQ za tekstil'}
  }
});


/* Arabic full-site rollout */
Object.assign(tradeUi as any,{
  ar:{
    name:'العربية',
    home:'الرئيسية · CTSEG',
    contact:'إنشاء طلب تجاري',
    related:'مجالات توريد ذات صلة',
    assurance:'ضوابط تدعم قرار الشراء',
    process:'مسار توريد منضبط',
    checks:[
      'تحديد الاحتياج والاستخدام والمواصفات الفنية',
      'التحقق من المنتج والطاقة والسجل التجاري',
      'مقارنة العينات والمواد والجودة والعروض',
      'تنسيق التعبئة والتأمين واللوجستيات والتسليم'
    ]
  }
});
Object.assign(tradeCopy as any,{
  ar:{
    'wholesale-textiles':{
      slug:'wholesale-textile-sourcing',
      eyebrow:'منسوجات B2B وعلامة خاصة',
      title:'توريد المنسوجات بالجملة من العينة حتى اللوجستيات.',
      description:'أقمشة ومناشف وأرواب ومنسوجات منزلية وملابس مع العلامة الخاصة والعينات والتحقق من المنتج والجودة والتغليف واللوجستيات.',
      lead:'للعلامات التجارية والموزعين والفنادق ومشتري المشاريع، نطابق المواصفات مع طاقة المنتج واعتماد العينة ومعايير الجودة والتغليف وخطة التسليم.',
      scopeTitle:'نطاق المنسوجات بالجملة',
      items:['أقمشة ومواصفات فنية','مناشف وأرواب','مجموعات منسوجات منزلية','إنتاج ملابس جاهزة','علامة خاصة وتغليف مخصص','عينات وتطوير مجموعات'],
      cta:'إنشاء طلب للمنسوجات'
    }
  }
});
