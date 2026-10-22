import { activeLocaleRegistry, type ActiveLocale } from './locales';
import { localizedPath, type Locale } from './site';
import {
  naturalOilSlugs,
  type NaturalOilSlug,
  type NaturalOilProductDetail,
  naturalOilProducts,
  relatedNaturalOilsMap,
  naturalOilVisualMap
} from './natural-oils-products';

export {
  naturalOilSlugs,
  type NaturalOilSlug,
  type NaturalOilProductDetail,
  naturalOilProducts,
  relatedNaturalOilsMap,
  naturalOilVisualMap
};

export const oilLanguages = activeLocaleRegistry.map((x) => x.code);
export type OilLanguage = ActiveLocale;

export const oilPath = (lang: string) => `/${lang}/natural-oils/`;
export const naturalOilProductPath = (lang: string, slug: NaturalOilSlug) => `/${lang}/natural-oils/${slug}/`;
export const naturalOilImageSrcset = (baseWebpPath: string) => {
  const stem = baseWebpPath.replace(/\.webp$/i, '');
  return `${stem}-640.webp 640w, ${stem}-960.webp 960w, ${baseWebpPath} 1200w`;
};

export const oilContact = (lang: string) =>
  lang === 'he' ? '/he/יצירת-קשר/' : localizedPath((lang as Locale) || 'en', 'contact');

export type Content = {
  title: string;
  description: string;
  eyebrow: string;
  lead: string;
  scope: string;
  process: string;
  proof: string;
  note: string;
  cta: string;
  categories: [string, string, string, string, string, string];
  steps: [string, string, string, string];
};

export const oilCopy: Record<OilLanguage, Content> = {
  tr: {
    title: 'Doğal Yağlar, Uçucu Yağlar ve Kozmetik Ham Maddeleri B2B Tedariki',
    description: 'Türkiye çıkışlı B2B gül yağı, lavanta yağı, gül ve lavanta hidrosolleri, bitkisel sabit yağlar ve kozmetik özler için şartname, numune ve uluslararası RFQ koordinasyonu.',
    eyebrow: 'CTSEG · DOĞAL YAĞLAR & KOZMETİK HAM MADDELERİ',
    lead: 'Kozmetik üreticileri, parfümeri evleri, dermokozmetik markaları ve hammadde distribütörleri için Türkiye çıkışlı uçucu yağlar, hidrosoller, soğuk sıkım sabit yağlar ve bitkisel ekstraktlarda teknik şartnameye dayalı B2B tedarik ve RFQ sürecini koordine ediyoruz.',
    scope: 'Ürün ve B2B tedarik grupları',
    process: 'Ticari talebi ve numune sürecini nasıl değerlendiriyoruz?',
    proof: 'Teknik belgeler, kalite kontrol ve mevzuat uyumu',
    note: 'Analiz ve uygunluk belgeleri ürün ve hedef pazara göre incelenir. Stok, sertifika ve fiyat bilgileri teklif aşamasında teyit edilir.',
    cta: 'B2B teklif talebi oluştur',
    categories: [
      'Gül uçucu yağı (Rosa damascena) ve gül türevleri',
      'Lavanta uçucu yağı (Angustifolia & Lavandin)',
      'Gül suyu ve doğal gül hidrosolü',
      'Lavanta suyu ve bitkisel hidrosoller',
      'Soğuk sıkım ve rafine bitkisel sabit yağlar',
      'Bitkisel özler (ekstraktlar) ve Anadolu uçucu yağları'
    ],
    steps: [
      'Botanik tür, INCI, kullanım alanı ve hedef kaliteyi tanımlama',
      'Talep hacmi, endüstriyel ambalaj tipi ve teslim ülkesini belirleme',
      'Referans numune, GC-MS/COA analizleri ve mevzuat dosyalarını inceleme',
      'Doğrulanmış tedarik kanallarıyla fiyat, MOQ ve teslim koşullarını karşılaştırma'
    ]
  },
  en: {
    title: 'Natural Oils, Essential Oils & Cosmetic Raw Materials B2B Sourcing',
    description: 'B2B sourcing from Türkiye for rose essential oil, lavender oil, floral hydrosols, botanical carrier oils and cosmetic extracts. GC-MS verification, samples and international RFQ coordination.',
    eyebrow: 'CTSEG · NATURAL OILS & COSMETIC RAW MATERIALS',
    lead: 'We coordinate specification-led B2B sourcing of essential oils, steam-distilled hydrosols, cold-pressed carrier oils and botanical extracts for cosmetic manufacturers, perfumery houses, personal care brands and ingredient distributors.',
    scope: 'Product groups and B2B sourcing architecture',
    process: 'How we evaluate your RFQ and sampling brief',
    proof: 'Technical documentation, analytical QC and regulatory compliance',
    note: 'Batch COA, SDS/MSDS, GC-MS profiles, IFRA certificates, allergen declarations and export documents are reviewed per product and destination market; inventory, origin, certification and pricing are never guaranteed in advance.',
    cta: 'Submit a B2B wholesale enquiry',
    categories: [
      'Rose essential oil (Rosa damascena) and derivatives',
      'Lavender essential oil (Angustifolia & Lavandin)',
      'Steam-distilled rose water and hydrosol',
      'Lavender floral water and botanical hydrosols',
      'Cold-pressed and refined botanical carrier oils',
      'Botanical extracts and Anatolian essential oils'
    ],
    steps: [
      'Define botanical species, INCI, target application and analytical grade',
      'Specify order volume, industrial packaging format and destination market',
      'Review reference batch samples, GC-MS/COA data and regulatory dossiers',
      'Compare verified supply routes, MOQ tiers, quotations and delivery terms'
    ]
  },
  de: {
    title: 'Natürliche Öle, Ätherische Öle & Kosmetikrohstoffe B2B-Sourcing',
    description: 'B2B-Beschaffung aus Türkiye für Rosenöl, Lavendelöl, Hydrolate, pflanzliche Basisöle und Pflanzenextrakte mit GC-MS-Prüfung, Mustern und RFQ-Koordination.',
    eyebrow: 'CTSEG · NATÜRLICHE ÖLE & KOSMETIKROHSTOFFE',
    lead: 'Wir koordinieren die spezifikationsbasierte B2B-Beschaffung von ätherischen Ölen, dampfdestillierten Hydrolaten, kaltgepressten Trägerölen und Pflanzenextrakten für Kosmetikhersteller, Parfümhäuser, Marken und Rohstoffhändler.',
    scope: 'Produktgruppen und B2B-Beschaffungsbereiche',
    process: 'So prüfen wir Ihre Anfrage und Musteranforderung',
    proof: 'Technische Unterlagen, Analytik und regulatorische Konformität',
    note: 'Chargen-COA, SDS/MSDS, GC-MS-Profile, IFRA-Zertifikate, Allergenerklärungen und Exportdokumente werden je nach Produkt und Zielmarkt geprüft; Bestände, Zertifizierungen und Preise werden nicht vorab zugesichert.',
    cta: 'B2B-Großhandelsanfrage senden',
    categories: [
      'Ätherisches Rosenöl (Rosa damascena) und Derivate',
      'Ätherisches Lavendelöl (Angustifolia & Lavandin)',
      'Dampfdestilliertes Rosenwasser und Hydrolat',
      'Lavendelblütenwasser und Pflanzenhydrolate',
      'Kaltgepresste und raffinierte pflanzliche Basisöle',
      'Pflanzenextrakte und anatolische ätherische Öle'
    ],
    steps: [
      'Pflanzenart, INCI, Anwendungszweck und Qualitätsstufe definieren',
      'Bedarfsmenge, Industriegebinde und Bestimmungsland angeben',
      'Referenzmuster, GC-MS-/COA-Daten und regulatorische Dossiers prüfen',
      'Geprüfte Lieferwege, Mindestmengen (MOQ) und Lieferbedingungen vergleichen'
    ]
  },
  it: {
    title: 'Oli Naturali, Oli Essenziali e Materie Prime Cosmetiche B2B',
    description: 'Sourcing B2B dalla Türkiye di olio essenziale di rosa, lavanda, idrolati, oli vegetali vettori ed estratti botanici con verifica GC-MS, campioni e gestione RFQ.',
    eyebrow: 'CTSEG · OLI NATURALI & MATERIE PRIME COSMETICHE',
    lead: 'Coordiniamo la fornitura B2B su specifica di oli essenziali, idrolati distillati a vapore, oli vettori spremuti a freddo ed estratti botanici per aziende cosmetiche, case essenziere, terzisti e distributori di materie prime.',
    scope: 'Categorie di prodotto e architettura di fornitura B2B',
    process: 'Come valutiamo la richiesta d’offerta e i campioni',
    proof: 'Documentazione tecnica, controllo analitico e conformità normativa',
    note: 'COA di lotto, SDS/MSDS, profili GC-MS, certificati IFRA, dichiarazioni allergeni e documenti export sono valutati per prodotto e mercato; disponibilità, certificazioni e prezzi non sono garantiti in anticipo.',
    cta: 'Invia una richiesta B2B all’ingrosso',
    categories: [
      'Olio essenziale di rosa (Rosa damascena) e derivati',
      'Olio essenziale di lavanda (Angustifolia & Lavandino)',
      'Acqua di rose e idrolato distillato a vapore',
      'Acqua floreale di lavanda e idrolati botanici',
      'Oli vegetali vettori spremuti a freddo e raffinati',
      'Estratti botanici e oli essenziali anatolici'
    ],
    steps: [
      'Definire specie botanica, INCI, impiego formulativo e grado analitico',
      'Indicare quantità, confezionamento industriale e paese di destinazione',
      'Esaminare campioni di riferimento, analisi GC-MS/COA e dossier normativi',
      'Confrontare canali di fornitura qualificati, MOQ, quotazioni e resa Incoterms'
    ]
  },
  fa: {
    title: 'تأمین عمده روغن‌های طبیعی، اسانس‌ها و مواد اولیه آرایشی B2B',
    description: 'تأمین B2B اسانس گل محمدی، اسانس اسطوخودوس، هیدرولات‌ها، روغن‌های پایه گیاهی و عصاره‌های آرایشی از ترکیه با بررسی GC-MS، نمونه و هماهنگی استعلام قیمت.',
    eyebrow: 'CTSEG · روغن‌های طبیعی و مواد اولیه آرایشی',
    lead: 'ما تأمین مبتنی بر مشخصات فنی (B2B) انواع اسانس‌های طبیعی، هیدرولات‌های تقطیری، روغن‌های حامل پرس سرد و عصاره‌های گیاهی را برای کارخانه‌های آرایشی و بهداشتی، خانه‌های عطر، تولیدکنندگان قراردادی و توزیع‌کنندگان مواد اولیه هماهنگ می‌کنیم.',
    scope: 'گروه‌های محصول و ساختار تأمین B2B',
    process: 'فرآیند ارزیابی درخواست خرید (RFQ) و نمونه‌گیری',
    proof: 'اسناد فنی، کنترل کیفیت آزمایشگاهی و انطباق رگولاتوری',
    note: 'برگه آنالیز COA، برگه ایمنی SDS/MSDS، کروماتوگرافی GC-MS، گواهی IFRA، لیست آلرژن‌ها و اسناد صادراتی متناسب با محصول و بازار مقصد بررسی می‌شوند؛ موجودی، گواهی یا قیمت از پیش بدون استعلام تضمین نمی‌گردد.',
    cta: 'ارسال درخواست خرید عمده (RFQ)',
    categories: [
      'اسانس گل محمدی (Rosa damascena) و مشتقات رز',
      'اسانس اسطوخودوس (Angustifolia و Lavandin)',
      'گلاب و هیدرولات تقطیری گل رز',
      'هیدرولات اسطوخودوس و عرقیات گیاهی آرایشی',
      'روغن‌های پایه و حامل گیاهی پرس سرد و تصفیه‌شده',
      'عصاره‌های گیاهی و سایر اسانس‌های فلور آناتولی'
    ],
    steps: [
      'تعیین گونه گیاهی، نام INCI، کاربرد در فرمولاسیون و گرید آنالیز',
      'مشخص کردن حجم سفارش، نوع بسته‌بندی صنعتی و کشور مقصد',
      'بررسی نمونه مرجع بچ، گزارش‌های GC-MS/COA و پرونده‌های رگولاتوری',
      'مقایسه مسیرهای تأمین تأییدشده، حداقل سفارش (MOQ) و شرایط تحویل'
    ]
  },
  ru: {
    title: 'Натуральные и эфирные масла, косметическое сырье — B2B поставки',
    description: 'B2B-сорсинг из Турции: розовое и лавандовое эфирные масла, гидролаты, базовые масла и растительные экстракты с проверкой GC-MS, образцами и сопровождением RFQ.',
    eyebrow: 'CTSEG · НАТУРАЛЬНЫЕ МАСЛА И КОСМЕТИЧЕСКОЕ СЫРЬЕ',
    lead: 'Мы координируем B2B-поставки эфирных масел, паровых гидролатов, базовых растительных масел холодного отжима и ботанических экстрактов по техническим спецификациям производителей косметики, парфюмерных домов и дистрибьюторов сырья.',
    scope: 'Товарные категории и архитектура B2B-поставок',
    process: 'Как мы прорабатываем ваш запрос RFQ и образцы',
    proof: 'Техническая документация, аналитический контроль и соответствие нормам',
    note: 'Партионные сертификаты COA, паспорта SDS/MSDS, хроматограммы GC-MS, сертификаты IFRA, декларации аллергенов и экспортные документы проверяются под конкретный продукт и рынок; наличие и цены заранее не гарантируются.',
    cta: 'Отправить оптовый B2B-запрос',
    categories: [
      'Эфирное масло розы (Rosa damascena) и производные',
      'Эфирное масло лаванды (Angustifolia и лавандин)',
      'Розовая вода и паровой гидролат розы',
      'Лавандовая вода и растительные гидролаты',
      'Базовые растительные масла холодного отжима и рафинированные',
      'Растительные экстракты и эфирные масла Анатолии'
    ],
    steps: [
      'Определение ботанического вида, INCI, области применения и аналитического сорта',
      'Уточнение объема партии, типа промышленной тары и страны назначения',
      'Проверка эталонных образцов партии, данных GC-MS/COA и нормативных досье',
      'Сравнение проверенных каналов поставок, условий MOQ и базисов доставки'
    ]
  },
  zh: {
    title: '天然油脂、单方精油与化妆品植物原料 B2B 批量采购',
    description: '面向国际企业的土耳其大马士革玫瑰精油、薰衣草精油、纯露、冷压植物基础油与植物提取物 B2B 采购，支持 GC-MS 检测、寄样与询盘协调。',
    eyebrow: 'CTSEG · 天然油脂与化妆品原料采购',
    lead: '我们为化妆品生产商、香精香料公司、功效护肤品牌及原料经销商协调基于技术规格的天然精油、水蒸气蒸馏纯露、冷压基础油与植物提取物 B2B 采购流程。',
    scope: '核心产品矩阵与 B2B 采购范围',
    process: '我们如何评估您的采购询盘与打样需求',
    proof: '技术文件、色谱质控与国际法规合规',
    note: '批次 COA、SDS/MSDS、GC-MS 气相色谱图、IFRA 证书、过敏原声明及出口单证均根据具体产品与目标市场核查；不预先对库存、产地、认证或价格作静态承诺。',
    cta: '提交大宗采购询盘 (RFQ)',
    categories: [
      '大马士革玫瑰精油 (Rosa damascena) 及衍生品',
      '薰衣草精油 (真正薰衣草与醒目薰衣草)',
      '水蒸气蒸馏玫瑰纯露与花水',
      '薰衣草纯露与天然植物花水',
      '冷压初榨与化妆品级精炼植物基础油',
      '化妆品植物提取物与安纳托利亚单方精油'
    ],
    steps: [
      '明确植物品种、INCI 名称、配方用途与分析指标等级',
      '确认采购数量、工业包装规格（铝桶/铁桶/IBC）与目的国',
      '核查产前参考批样、GC-MS/COA 检测数据及法规备案文件',
      '比选合规供应渠道、阶梯起订量 (MOQ)、报价与交货条款'
    ]
  },
  vi: {
    title: 'Tìm nguồn cung Tinh dầu Tự nhiên & Nguyên liệu Mỹ phẩm B2B',
    description: 'Tìm nguồn hàng B2B từ Türkiye cho tinh dầu hoa hồng, tinh dầu oải hương, hydrosol, dầu nền ép lạnh và chiết xuất thực vật kèm kiểm định GC-MS, mẫu thử và RFQ.',
    eyebrow: 'CTSEG · TINH DẦU TỰ NHIÊN & NGUỒN HÀNG MỸ PHẨM',
    lead: 'Chúng tôi điều phối nguồn cung B2B theo tiêu chuẩn kỹ thuật đối với tinh dầu nguyên chất, hydrosol chưng cất hơi nước, dầu nền thực vật ép lạnh và chiết xuất thảo mộc cho các nhà máy mỹ phẩm, công ty hương liệu và nhà phân phối nguyên liệu.',
    scope: 'Danh mục sản phẩm và cấu trúc cung ứng B2B',
    process: 'Quy trình đánh giá yêu cầu báo giá (RFQ) và mẫu thử',
    proof: 'Hồ sơ kỹ thuật, kiểm soát chất lượng phân tích và tuân thủ pháp lý',
    note: 'COA theo lô, SDS/MSDS, sắc ký đồ GC-MS, chứng nhận IFRA, công bố chất gây dị ứng và chứng từ xuất khẩu được rà soát theo từng sản phẩm và thị trường đích; không cam kết sẵn về tồn kho, chứng nhận hay giá cố định.',
    cta: 'Gửi yêu cầu báo giá mua sỉ (RFQ)',
    categories: [
      'Tinh dầu hoa hồng (Rosa damascena) và dẫn xuất',
      'Tinh dầu oải hương (Angustifolia & Lavandin)',
      'Nước hoa hồng và hydrosol chưng cất hơi nước',
      'Nước hoa oải hương và hydrosol thực vật',
      'Dầu nền thực vật ép lạnh và tinh luyện cấp mỹ phẩm',
      'Chiết xuất thực vật và các loại tinh dầu Anatolia'
    ],
    steps: [
      'Xác định loài thực vật, tên INCI, ứng dụng công thức và cấp độ phân tích',
      'Nêu rõ khối lượng đặt hàng, quy cách bao bì công nghiệp và quốc gia đích',
      'Kiểm tra mẫu lô tham chiếu, dữ liệu GC-MS/COA và bộ hồ sơ pháp lý',
      'So sánh kênh cung ứng đạt chuẩn, mức MOQ, báo giá và điều kiện giao hàng'
    ]
  },
  uk: {
    title: 'Натуральні та ефірні олії, косметична сировина — B2B постачання',
    description: 'B2B-сорсинг із Туреччини: трояндова й лавандова ефірні олії, гідролати, базові рослинні олії та рослинні екстракти з перевіркою GC-MS, зразками та супроводом RFQ.',
    eyebrow: 'CTSEG · НАТУРАЛЬНІ ОЛІЇ ТА КОСМЕТИЧНА СИРОВИНА',
    lead: 'Ми координуємо B2B-постачання ефірних олій, парових гідролатів, базових рослинних олій холодного віджиму та ботанічних екстрактів за технічними специфікаціями виробників косметики, парфумерних домів і дистриб’юторів сировини.',
    scope: 'Товарні категорії та архітектура B2B-постачання',
    process: 'Як ми опрацьовуємо ваш запит RFQ та зразки',
    proof: 'Технічна документація, аналітичний контроль і відповідність нормам',
    note: 'Партійні сертифікати COA, паспорти SDS/MSDS, хроматограми GC-MS, сертифікати IFRA, декларації алергенів та експортні документи перевіряються під конкретний продукт і ринок; наявність і ціни заздалегідь не гарантуються.',
    cta: 'Надіслати оптовий B2B-запит',
    categories: [
      'Ефірна олія троянди (Rosa damascena) та похідні',
      'Ефірна олія лаванди (Angustifolia та лавандин)',
      'Трояндова вода та паровий гідролат троянди',
      'Лавандова вода та рослинні гідролати',
      'Базові рослинні олії холодного віджиму та рафіновані',
      'Рослинні екстракти та ефірні олії Анатолії'
    ],
    steps: [
      'Визначення ботанічного виду, INCI, сфери застосування та аналітичного ґатунку',
      'Уточнення обсягу партії, типу промислової тари та країни призначення',
      'Перевірка еталонних зразків партії, даних GC-MS/COA та нормативних досьє',
      'Порівняння перевірених каналів постачання, умов MOQ та базисів доставки'
    ]
  },
  ro: {
    title: 'Uleiuri Naturale, Uleiuri Esențiale și Materii Prime Cosmetice B2B',
    description: 'Sourcing B2B din Türkiye pentru ulei esențial de trandafir, lavandă, hidrolați florali, uleiuri vegetale purtătoare și extracte botanice, cu verificare GC-MS și mostre.',
    eyebrow: 'CTSEG · ULEIURI NATURALE & MATERII PRIME COSMETICE',
    lead: 'Coordonăm aprovizionarea B2B pe bază de specificații pentru uleiuri esențiale, hidrolați distilați cu abur, uleiuri purtătoare presate la rece și extracte botanice destinate producătorilor de cosmetice, caselor de parfumerie și distribuitorilor.',
    scope: 'Grupuri de produse și arhitectură de sourcing B2B',
    process: 'Cum evaluăm cererea dvs. RFQ și mostrele',
    proof: 'Documentație tehnică, control analitic și conformitate de reglementare',
    note: 'COA pe lot, SDS/MSDS, profilurile GC-MS, certificatele IFRA, declarațiile de alergeni și documentele de export sunt verificate în funcție de produs și piața de destinație; stocul și prețurile nu sunt garantate anticipat.',
    cta: 'Trimite o cerere B2B en-gros',
    categories: [
      'Ulei esențial de trandafir (Rosa damascena) și derivate',
      'Ulei esențial de lavandă (Angustifolia & Lavandin)',
      'Apă de trandafiri și hidrolat distilat cu abur',
      'Apă florală de lavandă și hidrolați botanici',
      'Uleiuri vegetale purtătoare presate la rece și rafinate',
      'Extracte botanice și uleiuri esențiale anatoliene'
    ],
    steps: [
      'Definirea speciei botanice, INCI, aplicației vizate și gradului analitic',
      'Specificarea volumului comenzii, ambalajului industrial și țării de destinație',
      'Verificarea mostrelor de lot, datelor GC-MS/COA și dosarelor de reglementare',
      'Compararea rutelor de aprovizionare verificate, pragurilor MOQ și condițiilor de livrare'
    ]
  },
  bg: {
    title: 'Натурални масла, етерични масла и козметични суровини — B2B снабдяване',
    description: 'B2B снабдяване от Türkiye с розово и лавандулово етерично масло, хидролати, базови растителни масла и растителни екстракти с GC-MS анализ, мостри и оферти.',
    eyebrow: 'CTSEG · НАТУРАЛНИ МАСЛА И КОЗМЕТИЧНИ СУРОВИНИ',
    lead: 'Координираме B2B доставки по спецификация на етерични масла, парно дестилирани хидролати, студено пресовани базови масла и ботанически екстракти за козметични производители, парфюмерийни компании и дистрибутори на суровини.',
    scope: 'Продуктови групи и B2B сорсинг архитектура',
    process: 'Как разглеждаме вашето запитване (RFQ) и мостри',
    proof: 'Техническа документация, аналитичен контрол и регулаторно съответствие',
    note: 'Партидни COA, SDS/MSDS, GC-MS профили, IFRA сертификати, декларации за алергени и експортни документи се проверяват според продукта и пазара; наличности, сертификати и цени не се гарантират предварително.',
    cta: 'Изпратете B2B запитване на едро',
    categories: [
      'Етерично розово масло (Rosa damascena) и деривати',
      'Етерично лавандулово масло (Angustifolia & Лавандин)',
      'Парно дестилирана розова вода и хидролат',
      'Лавандулова флорална вода и растителни хидролати',
      'Студено пресовани и рафинирани базови растителни масла',
      'Растителни екстракти и анадолски етерични масла'
    ],
    steps: [
      'Определяне на ботанически вид, INCI, приложение и аналитичен клас',
      'Посочване на количество, индустриална опаковка и държава на доставка',
      'Преглед на референтни мостри, GC-MS/COA данни и регулаторни досиета',
      'Сравняване на проверени доставни канали, MOQ нива, оферти и условия на доставка'
    ]
  },
  he: {
    title: 'שמנים טבעיים, שמנים אתריים וחומרי גלם לקוסמטיקה — רכש B2B',
    description: 'איתור ואספקה עסקית (B2B) מטורקיה לשמן ורדים, שמן לבנדר, הידרוסולים, שמני בסיס צמחיים ותמציות בוטניות לקוסמטיקה, בליווי GC-MS, דוגמאות ותיאום RFQ.',
    eyebrow: 'CTSEG · שמנים טבעיים וחומרי גלם לקוסמטיקה',
    lead: 'אנו מתאמים רכש B2B מבוסס-מפרט של שמנים אתריים, הידרוסולים מזוקקים בקיטור, שמני בסיס בכבישה קרה ותמציות צמחים עבור יצרני קוסמטיקה, בתי בישום, מותגי טיפוח ומפיצי חומרי גלם.',
    scope: 'קבוצות מוצרים וארכיטקטורת רכש B2B',
    process: 'כיצד אנו בוחנים בקשת הצעת מחיר (RFQ) ודוגמאות',
    proof: 'תיעוד טכני, בקרת איכות אנליטית ועמידה בדרישות רגולציה',
    note: 'תעודות COA לאצווה, SDS/MSDS, פרופילי GC-MS, אישורי IFRA, הצהרות אלרגנים ומסמכי יצוא נבדקים בהתאם למוצר ולשוק היעד; אין התחייבות מראש למלאי, להסמכות או למחיר קבוע.',
    cta: 'שליחת בקשת רכש סיטונאית (RFQ)',
    categories: [
      'שמן אתרי ורדים (Rosa damascena) ונגזרותיו',
      'שמן אתרי לבנדר (Angustifolia ולבנדין)',
      'מי ורדים והידרוסול ורדים בזיקוק קיטור',
      'מי פרחי לבנדר והידרוסולים בוטניים',
      'שמני בסיס צמחיים בכבישה קרה ומזוקקים',
      'תמציות צמחים ושמנים אתריים מצמחיית אנטוליה'
    ],
    steps: [
      'הגדרת המין הבוטני, שם INCI, יישום הפורמולה והדרגה האנליטית',
      'ציון נפח ההזמנה, פורמט האריזה התעשייתית ומדינת היעד',
      'בחינת דוגמאות אצווה, נתוני GC-MS/COA ותיקי מסמכים רגולטוריים',
      'השוואת ערוצי אספקה מאומתים, מדרגות MOQ, הצעות מחיר ותנאי משלוח'
    ]
  },
  ar: {
    title: 'توريد الزيوت الطبيعية والزيوت العطرية ومواد التجميل الخام بالجملة B2B',
    description: 'خدمات توريد B2B من تركيا لزيت الورد العطري، زيت الخزامى، الهيدروسولات والمياه الزهرية، الزيوت النباتية الناقلة والمستخلصات التجميلية مع فحص GC-MS وتنسيق العينات.',
    eyebrow: 'CTSEG · الزيوت الطبيعية ومواد التجميل الخام',
    lead: 'ننسّق عمليات التوريد B2B القائمة على المواصفات الفنية للزيوت العطرية، الهيدروسولات المقطرة بالبخار، الزيوت الناقلة المعصورة على البارد والمستخلصات النباتية لصالح مصنّعي مستحضرات التجميل، دور العطور، علامات العناية الشخصية وموزعي المواد الخام.',
    scope: 'مجموعات المنتجات وهيكلة التوريد B2B',
    process: 'كيف نقيّم طلبات الشراء (RFQ) ومتطلبات العينات',
    proof: 'الوثائق الفنية، الرقابة التحليلية والامتثال التنظيمي',
    note: 'تُراجع شهادات التحليل COA، صحائف SDS/MSDS، مخططات GC-MS، شهادات IFRA، إقرارات مسببات الحساسية ووثائق التصدير حسب المنتج وسوق الوجهة؛ ولا يتم ضمان المخزون أو الشهادات أو الأسعار مسبقاً دون استعلام.',
    cta: 'إرسال طلب شراء بالجملة (RFQ)',
    categories: [
      'زيت الورد العطري (Rosa damascena) ومشتقاته',
      'زيت الخزامى العطري (Angustifolia واللافندين)',
      'ماء الورد وهيدروسول الورد المقطر بالبخار',
      'ماء زهور الخزامى والهيدروسولات النباتية',
      'الزيوت النباتية الناقلة المعصورة على البارد والمكررة',
      'المستخلصات النباتية والزيوت العطرية الأناضولية'
    ],
    steps: [
      'تحديد النوع النباتي، اسم INCI، مجال الاستخدام والدرجة التحليلية',
      'تحديد الكمية المطلوبة، شكل التعبئة الصناعية وبلد الوجهة',
      'مراجعة عينات الدفعة المرجعية، بيانات GC-MS/COA والملفات التنظيمية',
      'مقارنة قنوات التوريد الموثوقة، مستويات الحد الأدنى (MOQ)، الأسعار وشروط التسليم'
    ]
  }
};

export interface NaturalOilLocaleUi {
  hubBreadcrumb: string;
  partnerBannerKicker: string;
  partnerBannerTitle: string;
  partnerBannerText: string;
  trustBadges: [string, string, string, string];
  featureStrip: [string, string, string, string, string];
  productsHeading: string;
  productsSubheading: string;
  exploreProduct: string;
  specsHeading: string;
  applicationsHeading: string;
  documentationHeading: string;
  documentationList: [string, string][];
  buyersHeading: string;
  buyersList: [string, string, string, string, string, string];
  rfqBriefHeading: string;
  relatedHeading: string;
  allOilsCta: string;
  rfqCta: string;
  contactCta: string;
  faqHeading: string;
  hubFaqs: [string, string][];
}

export const naturalOilUi: Record<OilLanguage, NaturalOilLocaleUi> = {
  tr: {
    hubBreadcrumb: 'Doğal Yağlar & Kozmetik Ham Maddeleri',
    partnerBannerKicker: 'CTSEG · BAĞIMSIZ B2B TEDARİK KOORDİNASYONU',
    partnerBannerTitle: 'Doğal yağlarda teknik güven, doğru tedarik.',
    partnerBannerText: 'Gül ve lavanta yağlarından bitkisel ekstraktlara kadar üretici araştırmasını teknik şartnameyle buluşturuyor; numune, kalite belgeleri, teklif ve teslim koşullarını hedef pazara göre değerlendiriyoruz.',
    trustBadges: ['Bağımsız Tedarikçi Doğrulama', 'Lot Bazlı GC-MS & COA Kontrolü', 'Numune & Formülasyon Uyumu', 'Uluslararası İhracat & Lojistik'],
    featureStrip: ['Botanik & INCI Eşleştirme', 'GC-MS / Fizikokimyasal Analiz', 'Endüstriyel Dökme Ambalaj', 'IFRA / SDS / Alerjen Dosyası', 'EXW / FOB / CIF / DAP Teslim'],
    productsHeading: 'Doğal Yağlar ve Kozmetik Ham Maddeleri',
    productsSubheading: 'Kozmetik ve parfümeri üretimi için yedi uzmanlık alanında B2B tedarik araştırması.',
    exploreProduct: 'Teknik kapsamı incele',
    specsHeading: 'Teknik Şartname ve Tedarik Parametreleri',
    applicationsHeading: 'Endüstriyel ve Kozmetik Kullanım Alanları',
    documentationHeading: 'İhracat ve Kalite Kontrol Dokümantasyonu',
    documentationList: [
      ['COA (Analiz Sertifikası)', 'Lot bazlı fizikokimyasal parametreler, yoğunluk, kırılma indisi, asit/peroksit değeri veya pH/mikrobiyoloji verileri.'],
      ['GC-MS Kromatografisi', 'Uçucu yağlarda kemotip ve ana bileşen yüzdelerini (citronellol, linalool, carvacrol, 1,8-cineole vb.) doğrulayan gaz kromatografisi profili.'],
      ['SDS / MSDS (Güvenlik Bilgi Formu)', 'GHS/CLP standartlarına ve uluslararası hava/deniz/kara taşımacılığına (Bölüm 14 UN sınıflandırması) uygun güvenlik formu.'],
      ['IFRA & Alerjen Beyanları', 'Parfümeri ve kozmetik bitmiş ürün hesaplamaları için güncel IFRA uygunluk belgesi ve kozmetik alerjen kırılımı.'],
      ['TDS & INCI Kompozisyonu', 'CosIng / uluslararası kayıt süreçleri için botanik kaynak, CAS/EINECS numaraları, üretim yöntemi ve çözücü/koruyucu oranları.'],
      ['Menşe & Sevkiyat Belgeleri', 'Hedef ülke gümrük mevzuatına göre Menşe Şahadetnamesi, ATR/EUR.1 ve gerekiyorsa Fitosaniter / Sağlık sertifikası koordinasyonu.']
    ],
    buyersHeading: 'Hangi B2B Alıcılarla Çalışıyoruz?',
    buyersList: [
      'Kozmetik, cilt bakımı ve kişisel bakım üreticileri',
      'Parfümeri evleri ve esans/koku kompozisyonu üreticileri',
      'Fason kozmetik (OEM / ODM / Private Label) üretim tesisleri',
      'Uluslararası kozmetik ve kimyevi hammadde distribütörleri',
      'Dermokozmetik, spa ve profesyonel aromaterapi markaları',
      'Doğal ev bakım, sabun ve hijyen ürünleri imalatçıları'
    ],
    rfqBriefHeading: 'RFQ ve Numune Talebi İçin Gerekli Bilgiler',
    relatedHeading: 'İlgili Doğal Yağ ve Hammadde Grupları',
    allOilsCta: 'Tüm Doğal Yağlar & Ham Maddeler',
    rfqCta: 'Bu ürün için RFQ gönder',
    contactCta: 'Ticari İletişim Sayfası',
    faqHeading: 'Sık Sorulan Sorular',
    hubFaqs: [
      ['CTSEG doğal yağların doğrudan üreticisi midir?', 'Hayır. CTSEG, Türkiye merkezli bağımsız bir B2B dış ticaret ve tedarik koordinasyon evidir. Alıcının aradığı kalite, analiz profili ve hacme göre uygun distilasyon tesislerini ve ekstrakt üreticilerini araştırır, doğrular ve süreci yönetir.'],
      ['Fiyat listesi veya hazır stok kataloğu paylaşıyor musunuz?', 'Doğal uçucu yağlar ve bitkisel ham maddeler hasat dönemine, kemotipe, ambalaj tipine ve sipariş hacmine göre fiyatlandırılır. Bu nedenle önceden sabit stok veya fiyat vaadi verilmez; her talep güncel RFQ üzerinden değerlendirilir.'],
      ['Sipariş öncesinde laboratuvar numunesi talep edebilir miyiz?', 'Evet. Ticari kapsamı ve hedef hacmi netleşmiş B2B taleplerde, alıcının AR-GE ve kalite kontrol onayına sunulmak üzere lot numunesi ve COA/GC-MS ön incelemesi koordine edilir.'],
      ['Farklı yağ ve hidrosol gruplarını tek sevkiyatta birleştirebilir miyiz?', 'Evet. Gül yağı, lavanta yağı, hidrosoller, sabit baz yağlar ve bitkisel ekstraktlar tek bir konsolide ihracat sevkiyatında birleştirilebilir.']
    ]
  },
  en: {
    hubBreadcrumb: 'Natural Oils & Cosmetic Raw Materials',
    partnerBannerKicker: 'CTSEG · INDEPENDENT B2B SOURCING COORDINATION',
    partnerBannerTitle: 'Specification-driven B2B sourcing built on GC-MS verification and batch sample approval',
    partnerBannerText: 'CTSEG is not an unverified producer or speculative stockist. Operating as an independent B2B trade house in Türkiye, we qualify distillation facilities and botanical extractors against your analytical brief, managing reference samples, regulatory documentation and export logistics in one structured workflow.',
    trustBadges: ['Independent Supplier Verification', 'Batch GC-MS & COA Review', 'R&D Sample Coordination', 'Compliant Export Logistics'],
    featureStrip: ['Botanical & INCI Matching', 'GC-MS / Physicochemical QC', 'Industrial Bulk Packaging', 'IFRA / SDS / Allergen Dossiers', 'EXW / FOB / CIF / DAP Delivery'],
    productsHeading: 'Natural Oils & Cosmetic Raw Material Categories',
    productsSubheading: 'Seven dedicated B2B sourcing verticals structured for international cosmetic manufacturers, fragrance houses and ingredient distributors.',
    exploreProduct: 'Explore technical scope',
    specsHeading: 'Technical Specifications & Sourcing Parameters',
    applicationsHeading: 'Industrial & Cosmetic B2B Applications',
    documentationHeading: 'Export & Quality Control Documentation Scope',
    documentationList: [
      ['Certificate of Analysis (COA)', 'Batch-specific physicochemical data including relative density, refractive index, optical rotation, acid/peroxide value or microbiological limits.'],
      ['GC-MS Chromatogram', 'Gas chromatography–mass spectrometry profile confirming chemotype and key marker percentages (citronellol, linalool, carvacrol, 1,8-cineole).'],
      ['Safety Data Sheet (SDS / MSDS)', 'GHS/CLP-compliant safety documentation including Section 14 UN transport classification for air, sea and road freight.'],
      ['IFRA & Allergen Declarations', 'Current IFRA conformity certificates and quantitative fragrance allergen breakdowns for cosmetic safety calculations.'],
      ['TDS & INCI Composition', 'Technical data sheets detailing botanical binomial, CAS/EINECS numbers, extraction method, carrier ratios and preservation status.'],
      ['Origin & Export Certificates', 'Coordination of Certificate of Origin, EUR.1/ATR movement certificates and phytosanitary documentation as required by destination customs.']
    ],
    buyersHeading: 'Who We Work With',
    buyersList: [
      'Cosmetic, skincare and personal care manufacturers',
      'Fine fragrance houses and industrial aroma compounders',
      'Contract manufacturers (OEM / ODM / Private Label)',
      'International cosmetic ingredient and chemical distributors',
      'Dermocosmetic, spa and clinical aromatherapy brands',
      'Natural soap, oral care and household care formulators'
    ],
    rfqBriefHeading: 'Information Required for B2B RFQ & Sampling',
    relatedHeading: 'Related Natural Oils & Cosmetic Ingredients',
    allOilsCta: 'All Natural Oils & Raw Materials',
    rfqCta: 'Request B2B Quotation (RFQ)',
    contactCta: 'Direct Commercial Contact',
    faqHeading: 'Frequently Asked Questions',
    hubFaqs: [
      ['Is CTSEG a manufacturer or inventory holder of essential oils?', 'No. CTSEG operates as an independent Türkiye-based B2B trade and sourcing coordination house. We match buyer specifications with vetted distillation and extraction partners and manage sampling, documentation and export delivery.'],
      ['Do you publish fixed price lists or guaranteed stock catalogs?', 'No. Natural essential oils, hydrosols and botanical raw materials fluctuate with seasonal harvest yields, chemotype specifications and packaging formats. Availability and pricing are confirmed per live B2B RFQ.'],
      ['Can we evaluate batch samples and GC-MS reports before ordering bulk?', 'Yes. For qualified B2B enquiries, we coordinate preliminary COA/GC-MS review followed by reference batch samples for your R&D and quality assurance sign-off.'],
      ['Can we consolidate essential oils, hydrosols and carrier oils in one shipment?', 'Yes. CTSEG coordinates multi-product procurement so buyers can combine essential oils, floral waters, carrier oils and extracts under a single export shipment.']
    ]
  },
  de: {
    hubBreadcrumb: 'Natürliche Öle & Kosmetikrohstoffe',
    partnerBannerKicker: 'CTSEG · UNABHÄNGIGE B2B-SOURCING-KOORDINATION',
    partnerBannerTitle: 'Spezifikationsorientierte B2B-Beschaffung auf Basis von GC-MS-Prüfung und Musterfreigabe',
    partnerBannerText: 'CTSEG ist kein Eigenproduzent oder spekulativer Lagerhalter. Als unabhängiges B2B-Handelshaus in Türkiye prüfen wir geeignete Destillations- und Extraktionsbetriebe anhand Ihrer Analysedaten und koordinieren Muster, Dokumente und Exportlogistik.',
    trustBadges: ['Unabhängige Lieferantenprüfung', 'Chargen-GC-MS & COA-Check', 'F&E-Musterkoordination', 'Konforme Exportlogistik'],
    featureStrip: ['Botanik- & INCI-Abgleich', 'GC-MS / Physikalisch-chemische QC', 'Industrielle Großgebinde', 'IFRA / SDS / Allergendossiers', 'EXW / FOB / CIF / DAP Lieferung'],
    productsHeading: 'Produktgruppen: Natürliche Öle & Kosmetikrohstoffe',
    productsSubheading: 'Sieben spezialisierte B2B-Beschaffungsbereiche für internationale Kosmetikhersteller, Parfümhäuser und Rohstoffdistributeure.',
    exploreProduct: 'Technischen Umfang ansehen',
    specsHeading: 'Technische Spezifikationen & Beschaffungsparameter',
    applicationsHeading: 'Industrielle & Kosmetische Anwendungsbereiche',
    documentationHeading: 'Export- & Qualitätskontrolldokumentation',
    documentationList: [
      ['Analysenzertifikat (COA)', 'Chargenbezogene Kennzahlen wie Dichte, Brechungsindex, optische Drehung, Säure-/Peroxidzahl oder Mikrobiologie.'],
      ['GC-MS-Chromatogramm', 'Gaschromatographisches Profil zur Bestätigung von Chemotyp und Leitsubstanzen (Citronellol, Linalool, Carvacrol, 1,8-Cineol).'],
      ['Sicherheitsdatenblatt (SDS / MSDS)', 'GHS/CLP-konformes Datenblatt inkl. Abschnitt 14 Gefahrgutklassifizierung (UN-Nummer) für Luft-, See- und Straßentransport.'],
      ['IFRA- & Allergenerklärungen', 'Aktuelle IFRA-Zertifikate und Deklaration deklarationspflichtiger Duftstoffallergene.'],
      ['TDS & INCI-Zusammensetzung', 'Technische Datenblätter mit botanischem Namen, CAS/EINECS-Nummern, Herstellungsverfahren und Trägersystem.'],
      ['Ursprungs- & Exportdokumente', 'Koordination von Ursprungszeugnis, ATR/EUR.1 sowie pflanzengesundheitlichen Dokumenten je nach Zielland.']
    ],
    buyersHeading: 'Mit welchen B2B-Käufern wir arbeiten',
    buyersList: [
      'Kosmetik-, Hautpflege- und Körperpflegehersteller',
      'Parfümhäuser und Duftstoffkompositeure',
      'Lohnhersteller (OEM / ODM / Private Label)',
      'Internationale Kosmetikrohstoff- und Chemiedistributeure',
      'Dermokosmetik-, Spa- und Aromatherapie-Marken',
      'Hersteller von Naturseifen, Mundpflege und Home-Care-Produkten'
    ],
    rfqBriefHeading: 'Erforderliche Angaben für B2B-RFQ & Muster',
    relatedHeading: 'Verwandte Natürliche Öle & Rohstoffgruppen',
    allOilsCta: 'Alle Natürlichen Öle & Rohstoffe',
    rfqCta: 'B2B-Angebot anfordern (RFQ)',
    contactCta: 'Direkter Geschäftskontakt',
    faqHeading: 'Häufig gestellte Fragen (FAQ)',
    hubFaqs: [
      ['Ist CTSEG selbst Hersteller von ätherischen Ölen?', 'Nein. CTSEG agiert als unabhängiges B2B-Handels- und Sourcing-Haus in Türkiye. Wir gleichen Ihre Spezifikation mit verifizierten Destillerien und Extraktproduzenten ab und koordinieren den gesamten Anfrage- und Lieferprozess.'],
      ['Gibt es feste Preislisten oder Vorab-Lagerzusagen?', 'Nein. Da Naturrohstoffe saisonalen Ernteschwankungen unterliegen, werden Verfügbarkeit, Chargenwerte und Preise individuell pro RFQ geprüft.'],
      ['Können wir vorab Labormuster und GC-MS-Berichte prüfen?', 'Ja, bei qualifizierten B2B-Anfragen koordinieren wir die Vorabprüfung von COA/GC-MS-Daten sowie Referenzmuster für Ihr Labor.'],
      ['Können verschiedene Öle und Hydrolate in einer Lieferung gebündelt werden?', 'Ja, ätherische Öle, Hydrolate, Trägeröle und Extrakte können in einer konsolidierten Exportlieferung zusammengefasst werden.']
    ]
  },
  it: {
    hubBreadcrumb: 'Oli Naturali & Materie Prime Cosmetiche',
    partnerBannerKicker: 'CTSEG · COORDINAMENTO SOURCING B2B INDIPENDENTE',
    partnerBannerTitle: 'Sourcing B2B guidato da specifiche tecniche, verifica GC-MS e approvazione campioni',
    partnerBannerText: 'CTSEG non è un produttore né un detentore speculativo di stock. Come trade house B2B indipendente in Türkiye, qualifichiamo distillerie e produttori di estratti in base al vostro capitolato analitico, gestendo campioni, dossier regolatori e logistica export.',
    trustBadges: ['Verifica Indipendente Fornitori', 'Controllo GC-MS & COA di Lotto', 'Coordinamento Campioni R&D', 'Logistica Export Conforme'],
    featureStrip: ['Matching Botanico & INCI', 'QC GC-MS / Chimico-Fisico', 'Imballaggi Industriali Bulk', 'Dossier IFRA / SDS / Allergeni', 'Resa EXW / FOB / CIF / DAP'],
    productsHeading: 'Categorie di Oli Naturali e Materie Prime Cosmetiche',
    productsSubheading: 'Sette linee verticali di approvvigionamento B2B per produttori cosmetici, case essenziere, terzisti e distributori internazionali.',
    exploreProduct: 'Esplora scheda tecnica',
    specsHeading: 'Specifiche Tecniche e Parametri di Fornitura',
    applicationsHeading: 'Applicazioni Industriali e Cosmetiche B2B',
    documentationHeading: 'Documentazione di Qualità ed Esportazione',
    documentationList: [
      ['Certificato di Analisi (COA)', 'Dati chimico-fisici specifici del lotto: densità, indice di rifrazione, potere rotatorio, numero di perossidi/acidità o microbiologia.'],
      ['Cromatogramma GC-MS', 'Profilo gascromatografico che attesta il chemiotipo e le percentuali dei marker principali (citronellolo, linalolo, carvacrolo, 1,8-cineolo).'],
      ['Scheda di Sicurezza (SDS / MSDS)', 'Documentazione conforme GHS/CLP inclusa la Sezione 14 per la classificazione del trasporto ADR/IMDG/IATA.'],
      ['Dichiarazioni IFRA & Allergeni', 'Certificati di conformità IFRA aggiornati e dettaglio degli allergeni per la valutazione della sicurezza cosmetica.'],
      ['TDS & Composizione INCI', 'Schede tecniche con nome botanico, numeri CAS/EINECS, metodo di estrazione, solventi vettori e conservanti.'],
      ['Certificati di Origine & Export', 'Coordinamento di Certificato di Origine, ATR/EUR.1 e certificazione fitosanitaria secondo i requisiti doganali del paese di arrivo.']
    ],
    buyersHeading: 'Con quali acquirenti B2B collaboriamo',
    buyersList: [
      'Aziende produttrici di cosmetici, skincare e personal care',
      'Case essenziere e formulatori di fragranze industriali',
      'Terzisti cosmetici (OEM / ODM / Private Label)',
      'Distributori internazionali di materie prime cosmetiche e chimiche',
      'Brand di dermocosmesi, spa e aromaterapia professionale',
      'Produttori di saponi naturali, oral care e detergenza casa'
    ],
    rfqBriefHeading: 'Informazioni Richieste per RFQ B2B e Campionatura',
    relatedHeading: 'Altri Oli Naturali e Materie Prime Correlate',
    allOilsCta: 'Tutti gli Oli Naturali & Materie Prime',
    rfqCta: 'Richiedi Quotazione B2B (RFQ)',
    contactCta: 'Contatto Commerciale Diretto',
    faqHeading: 'Domande Frequenti (FAQ)',
    hubFaqs: [
      ['CTSEG è un produttore diretto di oli essenziali?', 'No. CTSEG opera come trade house B2B indipendente con sede in Türkiye: selezioniamo distillerie ed estrattori qualificati in base alle specifiche del compratore e coordiniamo campionatura, documenti e consegna.'],
      ['Fornite listini prezzi fissi o garanzie preventive di stock?', 'No. Gli oli essenziali e le materie prime botaniche dipendono dai raccolti stagionali e dalle specifiche richieste; disponibilità e quotazioni sono confermate su ogni singola RFQ.'],
      ['È possibile ricevere campioni e analisi GC-MS prima dell’ordine?', 'Sì, per le richieste B2B qualificate coordiniamo l’invio della documentazione COA/GC-MS preliminare e dei campioni di lotto per i test del vostro laboratorio.'],
      ['Possiamo raggruppare diversi oli e idrolati in un’unica spedizione?', 'Certamente. Coordiniamo forniture multi-prodotto consolidando oli essenziali, idrolati, oli vettori ed estratti in un’unica spedizione export.']
    ]
  },
  fa: {
    hubBreadcrumb: 'روغن‌های طبیعی و مواد اولیه آرایشی',
    partnerBannerKicker: 'CTSEG · هماهنگی مستقل تأمین B2B',
    partnerBannerTitle: 'تأمین تخصصی B2B بر پایه مشخصات فنی، آنالیز GC-MS و تأیید نمونه آزمایشگاهی',
    partnerBannerText: 'CTSEG تولیدکننده یا نگهدارنده انبار به صورت ادعایی نیست. ما به عنوان یک خانه تجارت مستقل B2B در ترکیه، واحدهای تقطیر و عصاره‌گیری معتبر را بر اساس مشخصات آنالیز درخواستی شما ارزیابی کرده و فرآیند نمونه، مستندات فنی و لجستیک صادراتی را در یک جریان یکپارچه مدیریت می‌کنیم.',
    trustBadges: ['اعتبارسنجی مستقل تأمین‌کننده', 'بررسی GC-MS و COA هر بچ', 'هماهنگی نمونه تحقیق و توسعه', 'لجستیک صادراتی استاندارد'],
    featureStrip: ['تطبیق گونه گیاهی و INCI', 'کنترل کیفیت GC-MS و شیمیایی', 'بسته‌بندی صنعتی عمده', 'مستندات IFRA / SDS / آلرژن', 'تحویل EXW / FOB / CIF / DAP'],
    productsHeading: 'گروه‌های تخصصی روغن‌های طبیعی و مواد اولیه آرایشی',
    productsSubheading: 'هفت زیرمجموعه تخصصی تأمین B2B برای کارخانه‌های آرایشی، خانه‌های عطر، تولیدکنندگان قراردادی و توزیع‌کنندگان مواد اولیه.',
    exploreProduct: 'مشاهده مشخصات و دامنه تأمین',
    specsHeading: 'مشخصات فنی و پارامترهای تأمین',
    applicationsHeading: 'کاربردهای صنعتی و فرمولاسیون آرایشی',
    documentationHeading: 'مستندات کنترل کیفیت و صادرات',
    documentationList: [
      ['گواهی آنالیز (COA)', 'اطلاعات فیزیکی-شیمیایی اختصاصی هر بچ شامل چگالی، ضریب شکست، چرخش نوری، عدد اسیدی/پراکسید یا حدود میکروبی.'],
      ['کروماتوگرام GC-MS', 'پروفایل کروماتوگرافی گازی-طیف‌سنجی جرمی جهت تأیید کموتایپ و درصد ترکیبات شاخص (سیترونلول، لینالول، کارواکرول، ۱،۸-سینئول).'],
      ['برگه اطلاعات ایمنی (SDS / MSDS)', 'مستندات ایمنی منطبق با GHS/CLP شامل بخش ۱۴ طبقه‌بندی حمل‌ونقل (کد UN) برای حمل هوایی، دریایی و زمینی.'],
      ['گواهی IFRA و بیانیه آلرژن‌ها', 'گواهی انطباق IFRA و جدول تفکیک آلرژن‌های عطری جهت محاسبات ایمنی محصول نهایی آرایشی.'],
      ['برگه فنی TDS و ترکیب INCI', 'مشخصات فنی شامل نام علمی گیاه، شماره CAS/EINECS، روش استخراج، حلال حامل و وضعیت نگهدارنده.'],
      ['گواهی مبدأ و اسناد صادراتی', 'هماهنگی گواهی مبدأ، اسناد حمل بین‌المللی و گواهی بهداشت گیاهی (فیتوسنیتری) بر اساس الزامات گمرک مقصد.']
    ],
    buyersHeading: 'با چه خریداران B2B همکاری می‌کنیم؟',
    buyersList: [
      'کارخانه‌های تولیدکننده لوازم آرایشی، مراقبت از پوست و مو',
      'خانه‌های عطر و واحدهای ترکیب اسانس‌های صنعتی',
      'تولیدکنندگان قراردادی و پرایوت لیبل (OEM / ODM)',
      'توزیع‌کنندگان و واردکنندگان مواد اولیه آرایشی و شیمیایی',
      'برندهای درموکازمتیک، اسپا و آروماتراپی تخصصی',
      'تولیدکنندگان صابون‌های طبیعی، محصولات دهان و دندان و شوینده‌ها'
    ],
    rfqBriefHeading: 'اطلاعات موردنیاز جهت ثبت استعلام (RFQ) و درخواست نمونه',
    relatedHeading: 'سایر روغن‌های طبیعی و مواد اولیه مرتبط',
    allOilsCta: 'همه روغن‌های طبیعی و مواد اولیه',
    rfqCta: 'ثبت درخواست خرید (RFQ)',
    contactCta: 'تماس مستقیم تجاری',
    faqHeading: 'پرسش‌های متداول',
    hubFaqs: [
      ['آیا CTSEG تولیدکننده مستقیم اسانس‌ها و روغن‌های گیاهی است؟', 'خیر. CTSEG یک خانه تجارت و تأمین مستقل B2B مستقر در ترکیه است که مشخصات فنی خریدار را با واحدهای تقطیر و تولیدکنندگان واجد شرایط تطبیق داده و فرآیند نمونه، اسناد و تحویل را مدیریت می‌کند.'],
      ['آیا لیست قیمت ثابت یا تضمین موجودی از پیش ارائه می‌دهید؟', 'خیر. به دلیل وابستگی روغن‌های طبیعی به فصل برداشت، کموتایپ و نوع بسته‌بندی، قیمت و موجودی صرفاً بر اساس بررسی استعلام (RFQ) روز اعلام می‌شود.'],
      ['آیا امکان دریافت نمونه و برگه GC-MS پیش از سفارش عمده وجود دارد؟', 'بله، برای درخواست‌های تجاری مشخص، ابتدا برگه‌های COA/GC-MS بررسی شده و نمونه مرجع بچ جهت تأیید آزمایشگاه خریدار ارسال می‌گردد.'],
      ['آیا می‌توان چند نوع اسانس، هیدرولات و روغن پایه را در یک محموله تجمیع کرد؟', 'بله، CTSEG امکان تجمیع چندین قلم از گروه‌های مختلف را در یک پارت صادراتی واحد فراهم می‌سازد.']
    ]
  },
  ru: {
    hubBreadcrumb: 'Натуральные масла и косметическое сырье',
    partnerBannerKicker: 'CTSEG · НЕЗАВИСИМАЯ КООРДИНАЦИЯ B2B-ПОСТАВОК',
    partnerBannerTitle: 'B2B-сорсинг по спецификации на основе хроматографии GC-MS и утверждения образцов',
    partnerBannerText: 'CTSEG не выступает непроверенным производителем или держателем складских стоков. Как независимый торговый дом в Турции, мы квалифицируем дистилляционные и экстракционные предприятия под ваше аналитическое ТЗ и координируем образцы, документацию и экспорт.',
    trustBadges: ['Независимая проверка поставщиков', 'Контроль GC-MS и COA партии', 'Согласование R&D образцов', 'Экспортная и DG логистика'],
    featureStrip: ['Подбор ботаники и INCI', 'GC-MS / Физико-химический контроль', 'Промышленная оптовая тара', 'Досье IFRA / SDS / Аллергены', 'Поставка EXW / FOB / CIF / DAP'],
    productsHeading: 'Категории натуральных масел и косметического сырья',
    productsSubheading: 'Семь специализированных направлений B2B-поставок для производителей косметики, парфюмерных компаний и дистрибьюторов ингредиентов.',
    exploreProduct: 'Подробнее о продукте',
    specsHeading: 'Технические характеристики и параметры поставок',
    applicationsHeading: 'Промышленное и косметическое применение',
    documentationHeading: 'Пакет экспортной и аналитической документации',
    documentationList: [
      ['Сертификат анализа (COA)', 'Партионные физико-химические показатели: плотность, показатель преломления, оптическое вращение, кислотное/перекисное число или микробиология.'],
      ['Хроматограмма GC-MS', 'Профиль газовой хроматографии-масс-спектрометрии, подтверждающий хемотип и долю маркерных веществ (цитронеллол, линалоол, карвакрол, 1,8-цинеол).'],
      ['Паспорт безопасности (SDS / MSDS)', 'Документация по стандарту GHS/CLP, включая Раздел 14 с транспортной классификацией UN для авиа-, морской и автоперевозки.'],
      ['Сертификаты IFRA и аллергены', 'Актуальные сертификаты соответствия IFRA и количественная расшифровка парфюмерных аллергенов.'],
      ['TDS и состав INCI', 'Технические спецификации с указанием ботанического вида, номеров CAS/EINECS, метода получения, растворителей и консервантов.'],
      ['Сертификаты происхождения и экспорта', 'Оформление сертификата происхождения, ATR/EUR.1 и фитосанитарных документов в соответствии с требованиями таможни страны назначения.']
    ],
    buyersHeading: 'С какими B2B-заказчиками мы работаем',
    buyersList: [
      'Производители косметики, средств ухода за кожей и личной гигиены',
      'Парфюмерные дома и разработчики отдушек',
      'Контрактные производства косметики (OEM / ODM / Private Label)',
      'Международные дистрибьюторы косметического и химического сырья',
      'Бренды дермокосметики, спа и профессиональной ароматерапии',
      'Производители натурального мыла, средств для полости рта и бытовой химии'
    ],
    rfqBriefHeading: 'Данные для расчета заявки RFQ и заказа образцов',
    relatedHeading: 'Связанные категории масел и сырья',
    allOilsCta: 'Все натуральные масла и сырье',
    rfqCta: 'Запросить коммерческое предложение (RFQ)',
    contactCta: 'Прямой коммерческий контакт',
    faqHeading: 'Часто задаваемые вопросы (FAQ)',
    hubFaqs: [
      ['Является ли CTSEG непосредственным производителем эфирных масел?', 'Нет. CTSEG работает как независимый B2B торговый и сорсинговый дом в Турции. Мы подбираем проверенные дистилляционные заводы и производителей экстрактов под вашу спецификацию и ведем сделку от образца до отгрузки.'],
      ['Предоставляете ли вы фиксированные прайс-листы или гарантию стока заранее?', 'Нет. Натуральные эфирные масла и растительное сырье зависят от сезонного урожая, хемотипа и объема фасовки, поэтому наличие и цены подтверждаются по каждому конкретному RFQ.'],
      ['Можно ли получить образцы и GC-MS до размещения основного заказа?', 'Да, для квалифицированных B2B-запросов мы организуем предварительную проверку COA/GC-MS и отправку эталонных образцов партии в вашу лабораторию.'],
      ['Можно ли консолидировать разные масла и гидролаты в одну поставку?', 'Да, мы объединяем эфирные масла, гидролаты, базовые масла и растительные экстракты в единую сборную экспортную отгрузку.']
    ]
  },
  zh: {
    hubBreadcrumb: '天然油脂与化妆品原料',
    partnerBannerKicker: 'CTSEG · 独立 B2B 采购与贸易协调',
    partnerBannerTitle: '以技术规格为导向、基于 GC-MS 色谱核验与产前样确认的 B2B 采购体系',
    partnerBannerText: 'CTSEG 并非未经核实的生产商或投机性现货商。作为立足土耳其的独立 B2B 贸易机构，我们依据买方的分析指标严格筛选蒸馏工厂与植物提取物制造商，统筹样品评估、法规文件与国际出口物流。',
    trustBadges: ['独立供应商核验', '批次 GC-MS 与 COA 审核', '研发打样协调', '合规危化/普货出口物流'],
    featureStrip: ['植物学名与 INCI 匹配', 'GC-MS / 理化指标质控', '工业级大宗桶装', 'IFRA / SDS / 过敏原文件', 'EXW / FOB / CIF / DAP 交付'],
    productsHeading: '天然油脂与化妆品植物原料核心品类',
    productsSubheading: '面向国际化妆品工厂、香精香料企业、OEM/ODM 代工及原料分销商的 7 大 B2B 专业采购板块。',
    exploreProduct: '查看技术规格与采购范围',
    specsHeading: '技术规格与采购评估参数',
    applicationsHeading: '化妆品与工业 B2B 应用领域',
    documentationHeading: '出口单证与质量控制文件体系',
    documentationList: [
      ['分析检测报告 (COA)', '批次专属理化数据，涵盖相对密度、折光率、旋光度、酸价/过氧化值或微生物限值。'],
      ['GC-MS 气相色谱质谱图', '确认精油化学型及标志性活性成分占比（香茅醇、芳樟醇、香芹酚、1,8-桉叶素等）的色谱报告。'],
      ['化学品安全技术说明书 (SDS / MSDS)', '符合 GHS/CLP 标准的 SDS 文件，包含第 14 节空运、海运及陆运 UN 危险品运输分类信息。'],
      ['IFRA 证书与过敏原声明', '最新 IFRA 合规证书及定量香精过敏原拆分表，支持终端化妆品安全评估计算。'],
      ['技术数据表 (TDS) 与 INCI 构成', '列明植物拉丁学名、CAS/EINECS 号、提取工艺、溶剂载体比例及防腐体系说明。'],
      ['原产地证与出口清关单证', '根据目的国海关要求协调原产地证（CO）、ATR/EUR.1 优惠原产地证及植物检疫证书。']
    ],
    buyersHeading: '我们服务的 B2B 采购客户类型',
    buyersList: [
      '护肤品、彩妆及个人洗护用品生产企业',
      '日化香精公司、调香实验室与香水品牌',
      '化妆品 OEM / ODM / OBM 代工制造工厂',
      '国际化妆品原料及精细化工进出口分销商',
      '功效护肤（Dermocosmetics）、高端 SPA 与专业芳疗品牌',
      '天然手工皂、口腔护理及家居清洁产品制造商'
    ],
    rfqBriefHeading: '提交 B2B 询盘 (RFQ) 与申请样品所需信息',
    relatedHeading: '相关天然油脂与植物原料品类',
    allOilsCta: '全部天然油脂与化妆品原料',
    rfqCta: '提交该品类批量询盘 (RFQ)',
    contactCta: '直接联系商务团队',
    faqHeading: '常见问题解答 (FAQ)',
    hubFaqs: [
      ['CTSEG 是精油或植物原料的直接生产工厂吗？', '不是。CTSEG 是位于土耳其的独立 B2B 贸易与采购协调机构。我们根据买方的技术规格匹配经过核验的蒸馏厂与提取物工厂，并全程管理寄样、单证审核与出口交付。'],
      ['你们是否提供固定报价单或现货库存承诺？', '不提供。天然精油、纯露及植物油脂受当季花材采收率、化学型要求及包装规格影响较大，具体库存配额与价格均通过实时 B2B 询盘（RFQ）核实确认。'],
      ['在大货下单前能否先评估批次样品与 GC-MS 报告？', '可以。针对需求明确的 B2B 询盘，我们会先协调批次 COA/GC-MS 资料预审，随后寄送对应批次样品供贵司研发与品控实验室测试确认。'],
      ['能否将多种精油、纯露与基础油拼箱合并出货？', '可以。CTSEG 支持多品类集中采购，可将不同单方精油、花水纯露、基础油和植物提取物整合在同一票出口货运中。']
    ]
  },
  vi: {
    hubBreadcrumb: 'Tinh dầu Tự nhiên & Nguyên liệu Mỹ phẩm',
    partnerBannerKicker: 'CTSEG · ĐIỀU PHỐI NGUỒN CUNG B2B ĐỘC LẬP',
    partnerBannerTitle: 'Tìm nguồn hàng B2B dựa trên thông số kỹ thuật, kiểm định GC-MS và duyệt mẫu theo lô',
    partnerBannerText: 'CTSEG không phải là nhà sản xuất tự phong hay đơn vị đầu cơ tồn kho. Với vai trò là nhà thương mại B2B độc lập tại Türkiye, chúng tôi thẩm định các nhà máy chưng cất và chiết xuất theo đúng tiêu chuẩn phân tích của người mua, quản lý mẫu thử, hồ sơ pháp lý và vận tải xuất khẩu.',
    trustBadges: ['Thẩm định Nhà cung cấp Độc lập', 'Kiểm tra GC-MS & COA theo Lô', 'Điều phối Mẫu thử R&D', 'Logistics Xuất khẩu Tuân thủ'],
    featureStrip: ['Khớp Chủng loại & INCI', 'QC GC-MS / Lý-Hóa', 'Bao bì Công nghiệp Số lượng lớn', 'Hồ sơ IFRA / SDS / Dị ứng', 'Giao hàng EXW / FOB / CIF / DAP'],
    productsHeading: 'Danh mục Tinh dầu Tự nhiên & Nguyên liệu Mỹ phẩm',
    productsSubheading: '7 nhóm sản phẩm cung ứng B2B chuyên biệt dành cho nhà sản xuất mỹ phẩm, công ty hương liệu, nhà máy OEM/ODM và nhà phân phối quốc tế.',
    exploreProduct: 'Xem chi tiết kỹ thuật',
    specsHeading: 'Thông số Kỹ thuật & Tiêu chí Cung ứng',
    applicationsHeading: 'Ứng dụng Công nghiệp & Mỹ phẩm B2B',
    documentationHeading: 'Bộ Hồ sơ Chất lượng & Chứng từ Xuất khẩu',
    documentationList: [
      ['Phiếu Kết quả Phân tích (COA)', 'Dữ liệu lý-hóa theo từng lô gồm tỷ trọng, chiết suất, góc quay cực, chỉ số axit/peroxide hoặc giới hạn vi sinh.'],
      ['Sắc ký đồ GC-MS', 'Hồ sơ sắc ký khí khối phổ xác nhận chemotype và tỷ lệ hoạt chất chính (citronellol, linalool, carvacrol, 1,8-cineole).'],
      ['Bảng Dữ liệu An toàn (SDS / MSDS)', 'Tài liệu an toàn chuẩn GHS/CLP bao gồm Mục 14 phân loại vận chuyển UN cho đường hàng không, đường biển và đường bộ.'],
      ['Chứng nhận IFRA & Công bố Dị ứng', 'Chứng nhận IFRA hiện hành và bảng phân tách chất gây dị ứng phục vụ tính toán an toàn công thức mỹ phẩm.'],
      ['TDS & Thành phần INCI', 'Thông số kỹ thuật nêu rõ tên khoa học thực vật, mã CAS/EINECS, phương pháp chiết xuất, tỷ lệ dung môi và chất bảo quản.'],
      ['Chứng nhận Xuất xứ & Xuất khẩu', 'Điều phối Giấy chứng nhận xuất xứ (C/O), EUR.1/ATR và chứng nhận kiểm dịch thực vật theo yêu cầu hải quan nước nhập khẩu.']
    ],
    buyersHeading: 'Khách hàng B2B Chúng tôi Phục vụ',
    buyersList: [
      'Nhà sản xuất mỹ phẩm, chăm sóc da và chăm sóc cá nhân',
      'Công ty hương liệu, nhà điều hương và thương hiệu nước hoa',
      'Nhà máy gia công mỹ phẩm (OEM / ODM / Private Label)',
      'Nhà phân phối nguyên liệu mỹ phẩm và hóa chất quốc tế',
      'Thương hiệu dược mỹ phẩm, spa và trị liệu hương thơm (aromatherapy)',
      'Nhà sản xuất xà phòng thiên nhiên, chăm sóc răng miệng và chăm sóc nhà cửa'
    ],
    rfqBriefHeading: 'Thông tin Cần thiết khi Gửi RFQ & Yêu cầu Mẫu thử',
    relatedHeading: 'Các Nhóm Tinh dầu & Nguyên liệu Liên quan',
    allOilsCta: 'Tất cả Tinh dầu & Nguyên liệu Mỹ phẩm',
    rfqCta: 'Gửi Yêu cầu Báo giá B2B (RFQ)',
    contactCta: 'Liên hệ Thương mại Trực tiếp',
    faqHeading: 'Câu hỏi Thường gặp (FAQ)',
    hubFaqs: [
      ['CTSEG có phải là nhà sản xuất trực tiếp các loại tinh dầu không?', 'Không. CTSEG hoạt động như một nhà thương mại và điều phối nguồn cung B2B độc lập tại Türkiye. Chúng tôi kết nối yêu cầu kỹ thuật của người mua với các cơ sở chưng cất và chiết xuất đã được thẩm định, đồng thời quản lý mẫu thử, chứng từ và giao hàng.'],
      ['CTSEG có công bố bảng giá cố định hay cam kết sẵn tồn kho không?', 'Không. Tinh dầu tự nhiên, hydrosol và nguyên liệu thực vật biến động theo mùa vụ thu hoạch, chemotype và quy cách đóng gói. Tồn kho và giá cả được xác nhận trực tiếp theo từng yêu cầu RFQ.'],
      ['Chúng tôi có thể kiểm tra mẫu lô hàng và báo cáo GC-MS trước khi đặt mua sỉ không?', 'Có. Đối với các yêu cầu B2B rõ ràng, chúng tôi điều phối bước duyệt trước hồ sơ COA/GC-MS và gửi mẫu lô tham chiếu để phòng R&D của bạn đánh giá.'],
      ['Có thể gộp nhiều loại tinh dầu, hydrosol và dầu nền trong một chuyến hàng không?', 'Có. CTSEG điều phối gom đơn hàng đa sản phẩm để người mua nhận tinh dầu, nước hoa chưng cất, dầu nền và chiết xuất trong cùng một lô xuất khẩu.']
    ]
  },
  uk: {
    hubBreadcrumb: 'Натуральні олії та косметична сировина',
    partnerBannerKicker: 'CTSEG · НЕЗАЛЕЖНА КООРДИНАЦІЯ B2B-ПОСТАЧАННЯ',
    partnerBannerTitle: 'B2B-сорсинг за специфікацією на основі хроматографії GC-MS та затвердження зразків',
    partnerBannerText: 'CTSEG не виступає неперевіреним виробником або утримувачем складських стоків. Як незалежний торговий дім у Туреччині, ми кваліфікуємо дистиляційні та екстракційні підприємства під ваше аналітичне ТЗ і координуємо зразки, документацію та експорт.',
    trustBadges: ['Незалежна перевірка постачальників', 'Контроль GC-MS та COA партії', 'Погодження R&D зразків', 'Експортна та DG логістика'],
    featureStrip: ['Підбір ботаніки та INCI', 'GC-MS / Фізико-хімічний контроль', 'Промислова оптова тара', 'Досьє IFRA / SDS / Алергени', 'Поставка EXW / FOB / CIF / DAP'],
    productsHeading: 'Категорії натуральних олій та косметичної сировини',
    productsSubheading: 'Сім спеціалізованих напрямів B2B-постачання для виробників косметики, парфумерних компаній та дистриб’юторів інгредієнтів.',
    exploreProduct: 'Докладніше про продукт',
    specsHeading: 'Технічні характеристики та параметри постачання',
    applicationsHeading: 'Промислове та косметичне застосування',
    documentationHeading: 'Пакет експортної та аналітичної документації',
    documentationList: [
      ['Сертифікат аналізу (COA)', 'Партійні фізико-хімічні показники: густина, показник заломлення, оптичне обертання, кислотне/пероксидне число або мікробіологія.'],
      ['Хроматограма GC-MS', 'Профіль газової хроматографії-мас-спектрометрії, що підтверджує хемотип і частку маркерних речовин (цитронелол, ліналоол, карвакрол, 1,8-цинеол).'],
      ['Паспорт безпеки (SDS / MSDS)', 'Документація за стандартом GHS/CLP, включно з Розділом 14 із транспортною класифікацією UN для авіа-, морського та автоперевезення.'],
      ['Сертифікати IFRA та алергени', 'Актуальні сертифікати відповідності IFRA та кількісна розшифровка парфумерних алергенів.'],
      ['TDS та склад INCI', 'Технічні специфікації із зазначенням ботанічного виду, номерів CAS/EINECS, методу отримання, розчинників і консервантів.'],
      ['Сертифікати походження та експорту', 'Оформлення сертифіката походження, ATR/EUR.1 та фітосанітарних документів відповідно до вимог митниці країни призначення.']
    ],
    buyersHeading: 'З якими B2B-замовниками ми працюємо',
    buyersList: [
      'Виробники косметики, засобів догляду за шкірою та особистої гігієни',
      'Парфумерні доми та розробники ароматичних композицій',
      'Контрактні виробництва косметики (OEM / ODM / Private Label)',
      'Міжнародні дистриб’ютори косметичної та хімічної сировини',
      'Бренди дермокосметики, спа та професійної ароматерапії',
      'Виробники натурального мила, засобів для ротової порожнини та побутової хімії'
    ],
    rfqBriefHeading: 'Дані для розрахунку заявки RFQ та замовлення зразків',
    relatedHeading: 'Пов’язані категорії олій та сировини',
    allOilsCta: 'Усі натуральні олії та сировина',
    rfqCta: 'Запитати комерційну пропозицію (RFQ)',
    contactCta: 'Прямий комерційний контакт',
    faqHeading: 'Часті запитання (FAQ)',
    hubFaqs: [
      ['Чи є CTSEG безпосереднім виробником ефірних олій?', 'Ні. CTSEG працює як незалежний B2B торговий і сорсинговий дім у Туреччині. Ми підбираємо перевірені дистиляційні заводи та виробників екстрактів під вашу специфікацію і ведемо угоду від зразка до відвантаження.'],
      ['Чи надаєте ви фіксовані прайс-листи або гарантію стоку заздалегідь?', 'Ні. Натуральні ефірні олії та рослинна сировина залежать від сезонного врожаю, хемотипу й обсягу фасування, тому наявність і ціни підтверджуються за кожним конкретним RFQ.'],
      ['Чи можна отримати зразки та GC-MS до розміщення основного замовлення?', 'Так, для кваліфікованих B2B-запитів ми організовуємо попередню перевірку COA/GC-MS і відправку еталонних зразків партії до вашої лабораторії.'],
      ['Чи можна консолідувати різні олії та гідролати в одну поставку?', 'Так, ми об’єднуємо ефірні олії, гідролати, базові олії та рослинні екстракти в єдине збірне експортне відвантаження.']
    ]
  },
  ro: {
    hubBreadcrumb: 'Uleiuri Naturale & Materii Prime Cosmetice',
    partnerBannerKicker: 'CTSEG · COORDONARE INDEPENDENTĂ SOURCING B2B',
    partnerBannerTitle: 'Sourcing B2B bazat pe specificații tehnice, verificare GC-MS și aprobarea mostrelor de lot',
    partnerBannerText: 'CTSEG nu este un producător neverificat sau un deținător speculativ de stocuri. Operând ca o casă de comerț B2B independentă în Türkiye, calificăm distilerii și producători de extracte conform specificațiilor dvs. analitice, gestionând mostrele, documentația de reglementare și logistica de export.',
    trustBadges: ['Verificare Independentă Furnizori', 'Control GC-MS & COA pe Lot', 'Coordonare Mostre R&D', 'Logistică Export Conformă'],
    featureStrip: ['Aliniere Botanică & INCI', 'QC GC-MS / Fizico-Chimic', 'Ambalare Industrială Vrac', 'Dosare IFRA / SDS / Alergeni', 'Livrare EXW / FOB / CIF / DAP'],
    productsHeading: 'Categorii de Uleiuri Naturale și Materii Prime Cosmetice',
    productsSubheading: 'Șapte verticale dedicate de aprovizionare B2B structurate pentru producători cosmetici, case de parfumerie și distribuitori internaționali.',
    exploreProduct: 'Vezi specificațiile tehnice',
    specsHeading: 'Specificații Tehnice și Parametri de Aprovizionare',
    applicationsHeading: 'Aplicații Industriale și Cosmetice B2B',
    documentationHeading: 'Documentație de Export și Control al Calității',
    documentationList: [
      ['Certificat de Analiză (COA)', 'Date fizico-chimice specifice lotului: densitate relativă, indice de refracție, rotație optică, indice de aciditate/peroxid sau limite microbiologice.'],
      ['Cromatogramă GC-MS', 'Profil de gaz-cromatografie care confirmă chemotipul și procentele markerilor principali (citronelol, linalool, carvacrol, 1,8-cineol).'],
      ['Fișă cu Date de Securitate (SDS / MSDS)', 'Documentație conformă GHS/CLP, inclusiv Secțiunea 14 privind clasificarea UN pentru transport aerian, maritim și rutier.'],
      ['Declarații IFRA & Alergeni', 'Certificate actuale de conformitate IFRA și defalcarea cantitativă a alergenilor pentru evaluarea siguranței cosmetice.'],
      ['TDS & Compoziție INCI', 'Fișe tehnice care detaliază denumirea botanică, numerele CAS/EINECS, metoda de extracție, solvenții purtători și statutul conservanților.'],
      ['Certificate de Origine & Export', 'Coordonarea Certificatului de Origine, EUR.1/ATR și a documentației fitosanitare conform cerințelor vamale de destinație.']
    ],
    buyersHeading: 'Cu ce Cumpărători B2B Lucrăm',
    buyersList: [
      'Producători de cosmetice, îngrijirea pielii și îngrijire personală',
      'Case de parfumerie fină și compozitori de arome industriale',
      'Producători pe contract (OEM / ODM / Private Label)',
      'Distribuitori internaționali de ingrediente cosmetice și produse chimice',
      'Branduri de dermatocosmetice, spa și aromaterapie clinică',
      'Formulatori de săpunuri naturale, îngrijire orală și produse pentru casă'
    ],
    rfqBriefHeading: 'Informații Necesare pentru RFQ B2B și Mostre',
    relatedHeading: 'Uleiuri Naturale și Ingrediente Cosmetice Conexe',
    allOilsCta: 'Toate Uleiurile Naturale & Materiile Prime',
    rfqCta: 'Solicită Ofertă B2B (RFQ)',
    contactCta: 'Contact Comercial Direct',
    faqHeading: 'Întrebări Frecvente (FAQ)',
    hubFaqs: [
      ['Este CTSEG producător sau deținător de stocuri de uleiuri esențiale?', 'Nu. CTSEG operează ca o casă independentă de comerț și sourcing B2B în Türkiye. Corelăm specificațiile cumpărătorului cu distilerii și parteneri de extracție verificați și gestionăm mostrele, documentele și livrarea la export.'],
      ['Publicați liste de prețuri fixe sau cataloage de stoc garantat?', 'Nu. Uleiurile esențiale naturale, hidrolații și materiile prime botanice variază în funcție de recoltele sezoniere, chemotip și ambalaj. Disponibilitatea și prețurile sunt confirmate pentru fiecare RFQ B2B activ.'],
      ['Putem evalua mostre de lot și rapoarte GC-MS înainte de comanda vrac?', 'Da. Pentru cererile B2B calificate, coordonăm revizuirea preliminară COA/GC-MS urmată de mostre de referință pentru aprobarea laboratorului dvs. R&D.'],
      ['Putem consolida uleiuri esențiale, hidrolați și uleiuri purtătoare într-un singur transport?', 'Da. CTSEG coordonează achiziții multi-produs, astfel încât cumpărătorii să poată combina uleiuri esențiale, ape florale, uleiuri purtătoare și extracte într-o singură expediție de export.']
    ]
  },
  bg: {
    hubBreadcrumb: 'Натурални масла и козметични суровини',
    partnerBannerKicker: 'CTSEG · НЕЗАВИСИМА B2B СОРСИНГ КООРДИНАЦИЯ',
    partnerBannerTitle: 'B2B снабдяване по спецификация на база GC-MS верификация и одобрение на партидни мостри',
    partnerBannerText: 'CTSEG не е непроверен производител или спекулативен склаподържател. Като независима B2B търговска къща в Türkiye, ние квалифицираме дестилерии и производители на екстракти спрямо вашето аналитично задание, управлявайки мострите, регулаторните документи и износа.',
    trustBadges: ['Независима проверка на доставчици', 'Партиден GC-MS & COA преглед', 'R&D координация на мостри', 'Съответстваща експортна логистика'],
    featureStrip: ['Ботаническо & INCI съпоставяне', 'GC-MS / Физико-химичен контрол', 'Индустриални опаковки на едро', 'IFRA / SDS / Алергенни досиета', 'EXW / FOB / CIF / DAP доставка'],
    productsHeading: 'Категории натурални масла и козметични суровини',
    productsSubheading: 'Седем специализирани B2B направления за козметични производители, парфюмерийни компании и дистрибутори на суровини.',
    exploreProduct: 'Разгледайте техническия обхват',
    specsHeading: 'Технически спецификации и параметри на доставка',
    applicationsHeading: 'Индустриални и козметични B2B приложения',
    documentationHeading: 'Документация за износ и контрол на качеството',
    documentationList: [
      ['Сертификат за анализ (COA)', 'Партидни физико-химични данни: относителна плътност, индекс на пречупване, оптично въртене, киселинно/пероксидно число или микробиологични лимити.'],
      ['GC-MS хроматограма', 'Газ-хроматографски профил, потвърждаващ хемотипа и процентите на ключовите маркери (цитронелол, линалоол, карвакрол, 1,8-цинеол).'],
      ['Информационен лист за безопасност (SDS / MSDS)', 'GHS/CLP съответстваща документация, включително Раздел 14 с UN класификация за въздушен, морски и сухопътен транспорт.'],
      ['IFRA и декларации за алергени', 'Актуални IFRA сертификати и количествена разбивка на алергените за оценка на козметичната безопасност.'],
      ['TDS и INCI състав', 'Технически листове с ботаническо име, CAS/EINECS номера, метод на екстракция, съотношение на носителите и консерванти.'],
      ['Сертификати за произход и износ', 'Координация на Сертификат за произход, EUR.1/ATR и фитосанитарни документи според изискванията на митницата по местоназначение.']
    ],
    buyersHeading: 'С какви B2B купувачи работим',
    buyersList: [
      'Производители на козметика, грижа за кожата и лична хигиена',
      'Парфюмерийни къщи и производители на ароматни композиции',
      'Контрактни производители (OEM / ODM / Private Label)',
      'Международни дистрибутори на козметични суровини и химикали',
      'Марки за дермокозметика, спа и клинична ароматерапия',
      'Производители на натурални сапуни, орална грижа и продукти за дома'
    ],
    rfqBriefHeading: 'Необходима информация за B2B RFQ и мостри',
    relatedHeading: 'Свързани натурални масла и козметични съставки',
    allOilsCta: 'Всички натурални масла и суровини',
    rfqCta: 'Заявете B2B оферта (RFQ)',
    contactCta: 'Директен търговски контакт',
    faqHeading: 'Често задавани въпроси (FAQ)',
    hubFaqs: [
      ['CTSEG производител или склаподържател на етерични масла ли е?', 'Не. CTSEG оперира като независима B2B търговска и сорсинг къща в Türkiye. Съпоставяме спецификациите на купувача с проверени дестилерии и екстракционни партньори и управляваме мострите, документите и износа.'],
      ['Публикувате ли фиксирани ценови листи или гарантирани каталози със сток?', 'Не. Натуралните етерични масла, хидролати и растителни суровини зависят от сезонната реколта, хемотипа и опаковката. Наличността и цените се потвърждават за всяко конкретно RFQ.'],
      ['Можем ли да оценим партидни мостри и GC-MS доклади преди поръчка на едро?', 'Да. За квалифицирани B2B запитвания координираме предварителен преглед на COA/GC-MS, последван от референтни мостри за вашата R&D лаборатория.'],
      ['Можем ли да обединим етерични масла, хидролати и базови масла в една пратка?', 'Да. CTSEG координира многопродуктови доставки, така че купувачите да могат да комбинират етерични масла, флорални води, базови масла и екстракти в една експортна пратка.']
    ]
  },
  he: {
    hubBreadcrumb: 'שמנים טבעיים וחומרי גלם לקוסמטיקה',
    partnerBannerKicker: 'CTSEG · תיאום רכש B2B עצמאי',
    partnerBannerTitle: 'רכש B2B מבוסס-מפרט הנשען על אימות GC-MS ואישור דוגמאות אצווה',
    partnerBannerText: 'CTSEG אינה יצרנית לא מאומתת או מחזיקת מלאי ספקולטיבית. כבית סחר B2B עצמאי בטורקיה, אנו מסמיכים מתקני זיקוק ומיצוי צמחים מול המפרט האנליטי שלכם, ומנהלים דוגמאות ייחוס, תיעוד רגולטורי ולוגיסטיקת יצוא בתהליך מובנה אחד.',
    trustBadges: ['אימות ספקים עצמאי', 'בקרת GC-MS ו-COA לאצווה', 'תיאום דוגמאות מו"פ (R&D)', 'לוגיסטיקת יצוא תואמת תקן'],
    featureStrip: ['התאמת בוטניקה ו-INCI', 'בקרת איכות GC-MS / פיזיקו-כימית', 'אריזות צובר תעשייתיות', 'תיקי IFRA / SDS / אלרגנים', 'אספקת EXW / FOB / CIF / DAP'],
    productsHeading: 'קטגוריות שמנים טבעיים וחומרי גלם לקוסמטיקה',
    productsSubheading: 'שבעה תחומי רכש B2B ייעודיים הבנויים עבור יצרני קוסמטיקה, בתי בישום, מפעלי Private Label ומפיצי חומרי גלם בינלאומיים.',
    exploreProduct: 'למפרט הטכני המלא',
    specsHeading: 'מפרטים טכניים ופרמטרים לאספקה',
    applicationsHeading: 'יישומים תעשייתיים וקוסמטיים (B2B)',
    documentationHeading: 'תיעוד בקרת איכות ומסמכי יצוא',
    documentationList: [
      ['תעודת אנליזה (COA)', 'נתונים פיזיקו-כימיים ספציפיים לאצווה כולל צפיפות יחסית, מקדם שבירה, סיבוב אופטי, ערך חומצה/פראוקסיד או גבולות מיקרוביאליים.'],
      ['כרומטוגרמת GC-MS', 'פרופיל כרומטוגרפיית גז המאמת את הכימוטיפ ואחוזי הסמנים המרכזיים (ציטרונלול, לינאלול, קרווקרול, 1,8-צינאול).'],
      ['גיליון בטיחות חומרים (SDS / MSDS)', 'תיעוד בטיחות תואם GHS/CLP כולל סעיף 14 לסיווג הובלת UN באוויר, בים וביבשה.'],
      ['תעודות IFRA והצהרות אלרגנים', 'תעודות התאמה עדכניות של IFRA ופירוט כמותי של אלרגנים לחישובי בטיחות בתמרוקים.'],
      ['TDS והרכב INCI', 'גיליונות נתונים טכניים המפרטים שם בוטני לטיני, מספרי CAS/EINECS, שיטת הפקה, יחסי ממסים ומצב שימור.'],
      ['תעודות מקור ויצוא', 'תיאום תעודת מקור, תעודות תנועה EUR.1/ATR ותיעוד פיטוסניטרי בהתאם לדרישות המכס במדינת היעד.']
    ],
    buyersHeading: 'עם אילו קונים עסקיים (B2B) אנו עובדים',
    buyersList: [
      'יצרני קוסמטיקה, טיפוח עור ומוצרי טיפוח אישי',
      'בתי בישום ומפתחי תרכובות ריח תעשייתיות',
      'מפעלי ייצור קבלני (OEM / ODM / Private Label)',
      'מפיצים ויבואנים של חומרי גלם לקוסמטיקה וכימיקלים',
      'מותגי דרמו-קוסמטיקה, ספא וארומתרפיה קלינית',
      'יצרני סבונים טבעיים, מוצרי היגיינת הפה וטיפוח הבית'
    ],
    rfqBriefHeading: 'מידע נדרש להגשת בקשת הצעת מחיר (RFQ) ודוגמאות',
    relatedHeading: 'שמנים טבעיים ורכיבים קוסמטיים קשורים',
    allOilsCta: 'כל השמנים הטבעיים וחומרי הגלם',
    rfqCta: 'בקשת הצעת מחיר עסקית (RFQ)',
    contactCta: 'יצירת קשר מסחרי ישיר',
    faqHeading: 'שאלות נפוצות (FAQ)',
    hubFaqs: [
      ['האם CTSEG היא יצרנית או מחזיקת מלאי של שמנים אתריים?', 'לא. CTSEG פועלת כבית סחר ותיאום רכש B2B עצמאי המבוסס בטורקיה. אנו מתאימים את מפרט הקונה לשותפי זיקוק ומיצוי מאומתים ומנהלים את הדוגמאות, התיעוד והיצוא.'],
      ['האם אתם מפרסמים מחירונים קבועים או קטלוגים עם הבטחת מלאי מראש?', 'לא. שמנים אתריים טבעיים, הידרוסולים וחומרי גלם בוטניים משתנים בהתאם ליבול העונתי, לכימוטיפ ולאריזה. זמינות ומחירים מאושרים עבור כל בקשת RFQ פעילה.'],
      ['האם ניתן לבחון דוגמאות אצווה ודוחות GC-MS לפני הזמנה מסחרית?', 'כן. עבור פניות B2B מוגדרות אנו מתאמים בדיקה מוקדמת של COA/GC-MS ולאחריה משלוח דוגמאות אצווה לאישור מעבדת המו"פ שלכם.'],
      ['האם ניתן לאחד שמנים אתריים, הידרוסולים ושמני בסיס במשלוח אחד?', 'כן. CTSEG מתאמת רכש מרובה-מוצרים כך שקונים יכולים לשלב שמנים אתריים, מי פרחים, שמני בסיס ותמציות במשלוח יצוא מרוכז אחד.']
    ]
  },
  ar: {
    hubBreadcrumb: 'الزيوت الطبيعية ومواد التجميل الخام',
    partnerBannerKicker: 'CTSEG · تنسيق مستقل للتوريد التجاري B2B',
    partnerBannerTitle: 'توريد B2B قائم على المواصفات الفنية والتحقق عبر GC-MS واعتماد عينات الدفعات',
    partnerBannerText: 'لا تقدم CTSEG نفسها كمصنّع غير موثق أو مالك مخزون افتراضي. بصفتنا بيت تجارة وتوريد B2B مستقلاً في تركيا، نقوم بتأهيل معامل التقطير والاستخلاص النباتي وفق ملفكم التحليلي، مع إدارة العينات المرجعية والوثائق التنظيمية ولوجستيات التصدير في مسار تجاري واحد.',
    trustBadges: ['تحقق مستقل من الموردين', 'مراجعة GC-MS وCOA للدفعة', 'تنسيق عينات البحث والتطوير', 'لوجستيات تصدير متوافقة'],
    featureStrip: ['مطابقة النوع النباتي وINCI', 'رقابة GC-MS والخصائص الفيزيائية', 'تعبئة صناعية بالجملة', 'ملفات IFRA / SDS / الحساسية', 'تسليم EXW / FOB / CIF / DAP'],
    productsHeading: 'فئات الزيوت الطبيعية والمواد الخام لمستحضرات التجميل',
    productsSubheading: 'سبعة مسارات توريد B2B متخصصة مصممة لمصنّعي مستحضرات التجميل، دور العطور، مصانع العلامات الخاصة وموزعي المواد الخام الدوليين.',
    exploreProduct: 'استكشاف النطاق الفني',
    specsHeading: 'المواصفات الفنية ومعايير التوريد',
    applicationsHeading: 'التطبيقات الصناعية والتجميلية B2B',
    documentationHeading: 'نطاق وثائق التصدير وضبط الجودة',
    documentationList: [
      ['شهادة التحليل (COA)', 'بيانات فيزيائية وكيميائية خاصة بكل دفعة تشمل الكثافة النسبية، معامل الانكسار، الدوران الضوئي، رقم الحموضة/البيروكسيد أو الحدود الميكروبيولوجية.'],
      ['مخطط كروماتوغرافيا GC-MS', 'تحليل كروماتوغرافيا الغاز ومطياف الكتلة لتأكيد النمط الكيميائي ونسب المركبات المرجعية (السيترونيلول، اللينالول، الكارفاكرول، 1,8-سينيول).'],
      ['صحيفة بيانات السلامة (SDS / MSDS)', 'وثائق سلامة متوافقة مع GHS/CLP تشمل القسم 14 لتصنيف النقل الدولي UN للشحن الجوي والبحري والبري.'],
      ['شهادات IFRA وإقرارات الحساسية', 'شهادات المطابقة الحديثة من IFRA والتفصيل الكمي لمسببات الحساسية العطرية لحسابات سلامة المنتج التجميلي.'],
      ['النشرة الفنية TDS وتركيب INCI', 'نشرات فنية توضح الاسم العلمي اللاتيني، أرقام CAS/EINECS، طريقة الاستخلاص، نسب الحامل وحالة الحفظ.'],
      ['شهادات المنشأ والتصدير', 'تنسيق شهادة المنشأ، شهادات الحركة EUR.1/ATR والوثائق الصحية النباتية حسب متطلبات جمارك بلد الوجهة.']
    ],
    buyersHeading: 'مع من نعمل من المشترين التجاريين B2B؟',
    buyersList: [
      'مصانع مستحضرات التجميل والعناية بالبشرة والعناية الشخصية',
      'دور العطور الفاخرة ومصنّعو المركبات العطرية الصناعية',
      'مصانع التصنيع التعاقدي والعلامات الخاصة (OEM / ODM / Private Label)',
      'الموزعون والمستوردون الدوليون لمواد التجميل الخام والكيماويات',
      'علامات الدرموكوزمتيك والسبا والعلاج العطري الاحترافي',
      'مصنّعو الصابون الطبيعي، منتجات العناية بالفم والمنظفات المنزلية'
    ],
    rfqBriefHeading: 'المعلومات المطلوبة لتقديم طلب عرض سعر (RFQ) وطلب العينات',
    relatedHeading: 'الزيوت الطبيعية والمكونات التجميلية ذات الصلة',
    allOilsCta: 'جميع الزيوت الطبيعية والمواد الخام',
    rfqCta: 'طلب عرض سعر تجاري (RFQ)',
    contactCta: 'التواصل التجاري المباشر',
    faqHeading: 'الأسئلة الشائعة',
    hubFaqs: [
      ['هل شركة CTSEG مصنّع مباشر أو مالك مخزون للزيوت العطرية؟', 'لا. تعمل CTSEG كبيت تجارة وتوريد B2B مستقل مقره تركيا؛ حيث نطابق مواصفات المشتري مع معامل تقطير واستخلاص معتمدة وندير العينات والوثائق والتصدير.'],
      ['هل تنشرون قوائم أسعار ثابتة أو كتالوجات مخزون مضمون مسبقاً؟', 'لا. تتأثر الزيوت العطرية الطبيعية والهيدروسولات والمواد النباتية الخام بمواسم الحصاد والنمط الكيميائي ونوع التعبئة؛ لذا يتم تأكيد التوافر والأسعار لكل طلب شراء (RFQ) فعلي.'],
      ['هل يمكننا تقييم عينات الدفعة وتقارير GC-MS قبل الطلب بالجملة؟', 'نعم، لطلبات B2B المؤهلة نقوم بتنسيق المراجعة الأولية لملفات COA/GC-MS متبوعة بإرسال عينات مرجعية من الدفعة لاعتماد مختبر البحث والتطوير لديكم.'],
      ['هل يمكننا تجميع الزيوت العطرية والهيدروسولات والزيوت الناقلة في شحنة واحدة؟', 'نعم، تنسّق CTSEG عمليات التوريد متعددة الأصناف بحيث يمكن للمشتري دمج الزيوت العطرية والمياه الزهرية والزيوت الناقلة والمستخلصات في شحنة تصدير واحدة.']
    ]
  }
};
