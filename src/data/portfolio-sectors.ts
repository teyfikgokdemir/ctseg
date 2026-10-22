import type { ActiveLocale } from './locales';
import { localizedPath, type Locale } from './site';
import { searchLandingPath } from './search-landings';
import { pathForSector, type TradeLocale } from './trade-sectors';
import { poultryFeedPath, type PoultryFeedLocale } from './poultry-feed';

export type PortfolioSectorId =
  | 'glass'
  | 'natural-oils'
  | 'food-agri'
  | 'nuts-dried-fruits'
  | 'animal-feed'
  | 'industrial'
  | 'packaging-inputs'
  | 'textiles';

export type PortfolioSectorCard = {
  id: PortfolioSectorId;
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  href: string;
  exploreLabel: string;
  rfqHref: string;
  rfqLabel: string;
};

export type PortfolioLocaleCopy = {
  kicker: string;
  title: string;
  lead: string;
  exploreLabel: string;
  rfqLabel: string;
  nutsSectionKicker: string;
  nutsSectionTitle: string;
  nutsSectionLead: string;
  sectors: Record<PortfolioSectorId, { title: string; description: string; alt: string }>;
};

const sectorImages: Record<PortfolioSectorId, { src: string; width: number; height: number }> = {
  glass: { src: '/images/glass/architectural-glass-facade-turkey.webp', width: 1600, height: 900 },
  'natural-oils': { src: '/images/natural-oils/natural-oils-hero.webp', width: 1280, height: 853 },
  'food-agri': { src: '/images/ctseg-vegetable-oils-food-editorial.webp', width: 1536, height: 1024 },
  'nuts-dried-fruits': { src: '/images/ctseg-mixed-nuts-premium.webp', width: 1536, height: 1024 },
  'animal-feed': { src: '/images/poultry-feed-sourcing-warehouse.png', width: 1920, height: 1080 },
  industrial: { src: '/images/ctseg-2026/industrial-products-review.webp', width: 1376, height: 768 },
  'packaging-inputs': { src: '/images/ctseg-2026/supplier-verification.webp', width: 1376, height: 768 },
  textiles: { src: '/images/ctseg-wholesale-textiles-editorial.webp', width: 1536, height: 1024 }
};

export const portfolioLocaleCopy: Record<ActiveLocale, PortfolioLocaleCopy> = {
  tr: {
    kicker: 'SEKTÖREL B2B TEDARİK PORTFÖYÜ',
    title: 'Sekiz Sektörde Stratejik B2B Tedarik',
    lead: 'CTSEG, sabit bir stok listesi yerine cam, doğal yağlar, gıda, kuruyemiş, yem, endüstriyel ekipman, ambalaj ve tekstil sektörlerinde doğrulanmış üretici araştırması, numune, belge kontrolü ve RFQ yönetimi yürütür.',
    exploreLabel: 'Kategoriyi İncele',
    rfqLabel: 'Teklif Talebi (RFQ)',
    nutsSectionKicker: 'KURUYEMİŞ, TOHUM VE KURU MEYVELER PORTFÖYÜ',
    nutsSectionTitle: 'Kuruyemiş ve Kuru Meyveler',
    nutsSectionLead: 'Antep fıstığı, hurma, kuru meyve, kuruyemiş, tohum ve safran ürünlerinde sınıf, kalibre, parti belgesi, paketleme ve MOQ bazlı B2B değerlendirme.',
    sectors: {
      glass: {
        title: 'Cam ve Yapı Malzemeleri',
        description: 'Float düz cam, temperli, lamine, Low-E kaplamalı, ısıcam (IGU) ve mimari proje camları için üretici ve işleme tesisi koordinasyonu.',
        alt: 'Ticari bina cephesi ve mimari düz cam tedarik uygulaması'
      },
      'natural-oils': {
        title: 'Doğal Yağlar ve Kozmetik Ham Maddeleri',
        description: 'Gül ve lavanta uçucu yağları, hidrosoller, sabit taşıyıcı yağlar ve bitkisel ekstraktlarda GC-MS, COA ve SDS belgeli B2B tedarik.',
        alt: 'Kozmetik ham maddeleri ve uçucu yağ kalite kontrol şişeleri'
      },
      'food-agri': {
        title: 'Gıda ve Tarımsal Ürünler',
        description: 'Endüstriyel gıda bileşenleri, tahıllar, bakliyat, bitkisel yağlar ve tarımsal hammaddelerde menşe, analiz ve parti belgesi doğrulaması.',
        alt: 'Gıda hammaddeleri ve bitkisel yağ ticari numune değerlendirmesi'
      },
      'nuts-dried-fruits': {
        title: 'Kuruyemiş, Tohum ve Kuru Meyveler',
        description: 'Antep fıstığı çeşitleri, fıstık içi, Mazafati hurması, badem, ceviz, kuru kayısı, kuru üzüm, çekirdek ve safran tedarik portföyü.',
        alt: 'Kalite ve kalibre değerlendirmesi için kuruyemiş ve kuru meyve numuneleri'
      },
      'animal-feed': {
        title: 'Hayvan Yemi ve Yem Hammaddeleri',
        description: 'Kanatlı yem programları (civciv, etlik piliç, yumurtacı, damızlık) ve yem katkı/hammadde gruplarında teknik föy ve ihracat koordinasyonu.',
        alt: 'Kanatlı yemi ve yem hammaddeleri sevkiyat ve depolama alanı'
      },
      'industrial': {
        title: 'Endüstriyel Ürünler ve Ekipmanlar',
        description: 'Endüstriyel yedek parçalar, elektrik ve güç sürekliliği ekipmanları, mekanik bileşenler ve teknik proje tedariki.',
        alt: 'Endüstriyel ürün ve teknik şartname inceleme süreci'
      },
      'packaging-inputs': {
        title: 'Ambalaj ve Üretim Girdileri',
        description: 'Gıda, kozmetik ve sanayi üretimi için cam, plastik, esnek ambalaj, etiket ve private label üretim girdileri.',
        alt: 'Ambalaj ve üretim girdileri tedarikçi doğrulama süreci'
      },
      textiles: {
        title: 'Tekstil ve Hazır Giyim',
        description: 'Ticari kumaşlar, havlu ve bornoz grupları, otel/ev tekstili ve private label hazır giyim üretiminde numune ve kapasite eşleştirmesi.',
        alt: 'Toptan tekstil, kumaş ve hazır giyim numune değerlendirmesi'
      }
    }
  },
  en: {
    kicker: 'SECTORAL B2B SUPPLY PORTFOLIO',
    title: 'Specification-led B2B sourcing and export coordination across eight core trade sectors.',
    lead: 'Rather than acting as a fixed-stock catalogue, CTSEG coordinates verified producer discovery, sampling, batch documentation review and structured RFQs across glass, natural oils, food, nuts, feed, industrial equipment, packaging and textiles.',
    exploreLabel: 'Explore Category',
    rfqLabel: 'Request Quotation (RFQ)',
    nutsSectionKicker: 'NUTS, SEEDS & DRIED FRUITS PORTFOLIO',
    nutsSectionTitle: 'Consolidated nuts, seeds, dates and dried fruit product lines.',
    nutsSectionLead: 'Specification-led B2B sourcing across pistachios, dates, dried fruits, tree nuts, seeds and saffron — evaluated by grade, caliber, batch COA, packaging and MOQ.',
    sectors: {
      glass: {
        title: 'Glass & Building Materials',
        description: 'Float glass, tempered, laminated, Low-E coated, insulated glass units (IGU) and architectural project glass sourced from verified Turkish plants.',
        alt: 'Architectural glass facade and commercial flat glass supply'
      },
      'natural-oils': {
        title: 'Natural Oils & Cosmetic Raw Materials',
        description: 'Rose and lavender essential oils, floral hydrosols, cold-pressed carrier oils and botanical extracts coordinated with GC-MS, COA and SDS documentation.',
        alt: 'Natural essential oils and cosmetic raw materials in laboratory glass bottles'
      },
      'food-agri': {
        title: 'Food & Agricultural Products',
        description: 'Bulk food ingredients, grains, pulses, unbranded vegetable oils and agricultural commodities with origin and batch-document verification.',
        alt: 'Unbranded vegetable oil and food commodity samples for commercial assessment'
      },
      'nuts-dried-fruits': {
        title: 'Nuts, Seeds & Dried Fruits',
        description: 'Consolidated B2B portfolio of pistachios, pistachio kernels, Mazafati dates, almonds, walnuts, raisins, dried apricots, seeds and saffron.',
        alt: 'Nut, seed and dried fruit samples for grade and quality verification'
      },
      'animal-feed': {
        title: 'Animal Feed & Feed Ingredients',
        description: 'Poultry feed programmes (starter, grower, layer, breeder) and feed raw materials coordinated with technical sheets, COA and export logistics.',
        alt: 'Animal feed and poultry nutrition warehouse dispatch preparation'
      },
      'industrial': {
        title: 'Industrial Products & Equipment',
        description: 'Industrial components, plant maintenance spares, electrical and power-continuity equipment, and specification-driven project procurement.',
        alt: 'Procurement specialists reviewing industrial products and technical specifications'
      },
      'packaging-inputs': {
        title: 'Packaging & Production Inputs',
        description: 'Primary and secondary packaging, bottles, jars, flexible films, labels and private-label manufacturing inputs for food, cosmetics and industry.',
        alt: 'Quality and supplier verification for packaging and production inputs'
      },
      textiles: {
        title: 'Textiles & Apparel',
        description: 'Commercial fabrics, towels, bathrobes, home and hospitality textiles, and private-label ready-to-wear apparel coordinated from sample to dispatch.',
        alt: 'Wholesale fabric, towel and textile samples on a commercial review table'
      }
    }
  },
  de: {
    kicker: 'SEKTORALES B2B-LIEFERPORTFOLIO',
    title: 'Spezifikationsbasierte B2B-Beschaffung und Exportkoordination in acht Kernsektoren.',
    lead: 'CTSEG koordiniert geprüfte Herstellerrecherche, Bemusterung, Chargendokumentation und strukturierte RFQs in den Bereichen Glas, natürliche Öle, Lebensmittel, Nüsse, Futtermittel, Industrieausrüstung, Verpackung und Textilien.',
    exploreLabel: 'Kategorie ansehen',
    rfqLabel: 'RFQ anfragen',
    nutsSectionKicker: 'NÜSSE, SAATEN & TROCKENFRÜCHTE PORTFOLIO',
    nutsSectionTitle: 'Konsolidiertes Sortiment für Nüsse, Saaten, Datteln und Trockenfrüchte.',
    nutsSectionLead: 'Kaufmännische B2B-Bewertung für Pistazien, Datteln, Trockenfrüchte, Nüsse, Saaten und Safran nach Kaliber, Spezifikation, Chargen-COA, Verpackung und MOQ.',
    sectors: {
      glass: {
        title: 'Glas & Baustoffe',
        description: 'Floatglas, ESG, VSG, Low-E-Glas, Isolierglas (IGU) und Architekturglas für Bauprojekte, Verarbeiter und Großhändler.',
        alt: 'Architekturglas-Fassade und gewerbliche Flachglasbeschaffung'
      },
      'natural-oils': {
        title: 'Natürliche Öle & Kosmetikrohstoffe',
        description: 'Rosen- und Lavendelöl, Hydrolate, kaltgepresste Trägeröle und Pflanzenextrakte mit GC-MS-, COA- und SDS-Dokumentation.',
        alt: 'Natürliche ätherische Öle und Kosmetikrohstoffe im Prüflabor'
      },
      'food-agri': {
        title: 'Lebensmittel & Agrarprodukte',
        description: 'Lebensmittelrohstoffe, Getreide, Hülsenfrüchte und Pflanzenöle mit Herkunfts-, Chargen- und Spezifikationsprüfung.',
        alt: 'Pflanzenöl- und Lebensmittelrohstoffmuster für die B2B-Bewertung'
      },
      'nuts-dried-fruits': {
        title: 'Nüsse, Saaten & Trockenfrüchte',
        description: 'Pistazien, Pistazienkerne, Mazafati-Datteln, Mandeln, Walnüsse, Rosinen, getrocknete Aprikosen, Kerne und Safran im B2B-Großhandel.',
        alt: 'Nuss- und Trockenfruchtmuster zur Qualitäts- und Sortierungsprüfung'
      },
      'animal-feed': {
        title: 'Tierfutter & Futtermittelrohstoffe',
        description: 'Geflügelfutterprogramme und Futtermittelzusätze mit technischer Spezifikation, Analysenzertifikat und Exportkoordination.',
        alt: 'Lager und Versandvorbereitung für Tierfutter und Futtermittelrohstoffe'
      },
      'industrial': {
        title: 'Industrieprodukte & Ausrüstung',
        description: 'Industriekomponenten, Ersatzteile, Elektrotechnik und spezifikationsgebundene Projektbeschaffung aus geprüften Werken.',
        alt: 'Technische Prüfung von Industrieprodukten und B2B-Spezifikationen'
      },
      'packaging-inputs': {
        title: 'Verpackung & Produktionsmittel',
        description: 'Primär- und Sekundärverpackungen, Glasflaschen, Folien, Etiketten und Private-Label-Vorprodukte für Industrie und Handel.',
        alt: 'Lieferanten- und Qualitätsprüfung für Verpackungen und Produktionsmittel'
      },
      textiles: {
        title: 'Textilien & Bekleidung',
        description: 'Stoffe, Handtücher, Bademäntel, Heim- und Hoteltextilien sowie Private-Label-Bekleidung vom Muster bis zur Logistik.',
        alt: 'Textil-, Stoff- und Handtuchmuster für den B2B-Großhandel'
      }
    }
  },
  it: {
    kicker: 'PORTAFOGLIO B2B DI FORNITURA SETTORIALE',
    title: 'Sourcing B2B su specifica e coordinamento export in otto settori industriali chiave.',
    lead: 'CTSEG coordina ricerca produttori verificati, campionatura, controllo documentale dei lotti e gestione RFQ nei settori vetro, oli naturali, alimentari, frutta secca, mangimi, impianti industriali, imballaggi e tessile.',
    exploreLabel: 'Esplora categoria',
    rfqLabel: 'Richiedi offerta (RFQ)',
    nutsSectionKicker: 'PORTAFOGLIO FRUTTA A GUSCIO, SEMI E FRUTTA ESSICCATA',
    nutsSectionTitle: 'Gamma consolidata di frutta a guscio, semi, datteri e frutta essiccata.',
    nutsSectionLead: 'Valutazione B2B su specifica per pistacchi, datteri, frutta essiccata, noci, semi e zafferano in base a calibro, grado, COA del lotto, imballaggio e MOQ.',
    sectors: {
      glass: {
        title: 'Vetro e Materiali da Costruzione',
        description: 'Vetro float, temperato, stratificato, basso emissivo (Low-E), vetrocamera (IGU) e vetro architettonico per progetti e distributori.',
        alt: 'Facciata in vetro architettonico e fornitura B2B di vetro piano'
      },
      'natural-oils': {
        title: 'Oli Naturali e Materie Prime Cosmetiche',
        description: 'Oli essenziali di rosa e lavanda, idrolati, oli vettori spremuti a freddo ed estratti botanici con documentazione GC-MS, COA e SDS.',
        alt: 'Oli essenziali naturali e materie prime cosmetiche in laboratorio'
      },
      'food-agri': {
        title: 'Prodotti Alimentari e Agricoli',
        description: 'Ingredienti alimentari sfusi, cereali, legumi e oli vegetali con verifica di origine, tracciabilità e documenti di lotto.',
        alt: 'Campioni di oli vegetali e materie prime alimentari per valutazione B2B'
      },
      'nuts-dried-fruits': {
        title: 'Frutta a Guscio, Semi e Frutta Essiccata',
        description: 'Pistacchi, granella di pistacchio, datteri Mazafati, mandorle, noci, uvetta, albicocche secche, semi e zafferano per industria e wholesale.',
        alt: 'Campioni di frutta a guscio ed essiccata per verifica di calibro e qualità'
      },
      'animal-feed': {
        title: 'Mangimi Animali e Materie Prime',
        description: 'Programmi di alimentazione avicola e materie prime per mangimi coordinati con schede tecniche, COA e logistica di esportazione.',
        alt: 'Magazzino e preparazione spedizioni per mangimi e nutrizione animale'
      },
      'industrial': {
        title: 'Prodotti e Impianti Industriali',
        description: 'Componenti industriali, ricambi tecnici, apparecchiature elettriche e approvvigionamento su commessa da produttori qualificati.',
        alt: 'Team tecnico durante la valutazione di componenti e prodotti industriali'
      },
      'packaging-inputs': {
        title: 'Imballaggi e Input Produttivi',
        description: 'Packaging primario e secondario, flaconi, film flessibili, etichette e materiali per produzioni private label.',
        alt: 'Verifica fornitori e controllo qualità per imballaggi e input produttivi'
      },
      textiles: {
        title: 'Tessile e Abbigliamento',
        description: 'Tessuti commerciali, spugne, accappatoi, tessile casa/hotel e abbigliamento private label coordinati dal campione alla consegna.',
        alt: 'Campioni di tessuti e prodotti tessili sul tavolo di valutazione commerciale'
      }
    }
  },
  fa: {
    kicker: 'پورتفولیوی تأمین بخشی B2B',
    title: 'تأمین B2B مبتنی بر مشخصات فنی و هماهنگی صادرات در هشت بخش اصلی تجاری.',
    lead: 'CTSEG در بخش‌های شیشه، روغن‌های طبیعی، مواد غذایی، خشکبار، خوراک دام و طیور، تجهیزات صنعتی، بسته‌بندی و منسوجات، اعتبارسنجی تولیدکننده، نمونه‌گیری، بررسی اسناد محموله و مدیریت RFQ را هماهنگ می‌کند.',
    exploreLabel: 'مشاهده دسته‌بندی',
    rfqLabel: 'ارسال درخواست قیمت (RFQ)',
    nutsSectionKicker: 'پورتفولیوی خشکبار، دانه‌ها و میوه‌های خشک',
    nutsSectionTitle: 'مجموعه یکپارچه خشکبار، دانه‌های روغنی، خرما و میوه‌های خشک.',
    nutsSectionLead: 'ارزیابی تجاری و تأمین B2B پسته، خرما، میوه خشک، بادام، گردو، تخمه و زعفران بر اساس سایز، گرید، گواهی آنالیز (COA)، بسته‌بندی و حداقل سفارش (MOQ).',
    sectors: {
      glass: {
        title: 'شیشه و مصالح ساختمانی',
        description: 'شیشه فلوت، سکوریت، لمینت، شیشه Low-E، دوجداره (IGU) و شیشه‌های پروژه‌ای ساختمانی برای واردکنندگان و پیمانکاران.',
        alt: 'نمای شیشه معماری و تأمین شیشه ساختمانی B2B'
      },
      'natural-oils': {
        title: 'روغن‌های طبیعی و مواد اولیه آرایشی',
        description: 'اسانس رز و اسطوخودوس، هیدروسول‌ها، روغن‌های حامل و عصاره‌های گیاهی همراه با بررسی اسناد GC-MS، COA و SDS.',
        alt: 'روغن‌های طبیعی و مواد اولیه آرایشی در ظروف آزمایشگاهی'
      },
      'food-agri': {
        title: 'مواد غذایی و محصولات کشاورزی',
        description: 'مواد اولیه صنایع غذایی، غلات، حبوبات و روغن‌های گیاهی با بررسی مبدأ، قابلیت ردیابی و اسناد بهداشتی محموله.',
        alt: 'نمونه‌های روغن گیاهی و مواد اولیه غذایی برای ارزیابی تجاری'
      },
      'nuts-dried-fruits': {
        title: 'خشکبار، دانه‌ها و میوه‌های خشک',
        description: 'انواع پسته، مغز پسته، خرمای مضافتی، بادام، گردو، کشمش، برگه زردآلو، تخمه‌ها، زرشک و زعفران برای خرید عمده.',
        alt: 'نمونه‌های خشکبار و میوه خشک برای بررسی کیفیت و درجه‌بندی'
      },
      'animal-feed': {
        title: 'خوراک دام و طیور و نهاده‌های خوراکی',
        description: 'برنامه‌های خوراک طیور و نهاده‌های تغذیه دام همراه با بررسی برگه مشخصات فنی، آنالیز محموله و هماهنگی لجستیک.',
        alt: 'انبار و آماده‌سازی ارسال خوراک طیور و نهاده‌های دامی'
      },
      'industrial': {
        title: 'محصولات و تجهیزات صنعتی',
        description: 'قطعات صنعتی، تجهیزات برق و تداوم انرژی، قطعات مکانیکی و تأمین پروژه‌ای بر اساس مشخصات فنی خریدار.',
        alt: 'بررسی فنی محصولات و تجهیزات صنعتی توسط تیم تدارکات'
      },
      'packaging-inputs': {
        title: 'بسته‌بندی و نهاده‌های تولید',
        description: 'ملزومات بسته‌بندی اولیه و ثانویه، بطری، فیلم‌های بسته‌بندی، لیبل و نهاده‌های تولید اختصاصی (Private Label).',
        alt: 'اعتبارسنجی تأمین‌کننده و کنترل کیفیت ملزومات بسته‌بندی'
      },
      textiles: {
        title: 'منسوجات و پوشاک آماده',
        description: 'پارچه‌های تجاری، حوله و تن‌پوش، منسوجات خانگی و هتلی و تولید پوشاک با برند اختصاصی از مرحله نمونه تا تحویل.',
        alt: 'نمونه‌های پارچه، حوله و منسوجات روی میز ارزیابی تجاری'
      }
    }
  },
  ru: {
    kicker: 'ОТРАСЛЕВОЙ B2B-ПОРТФЕЛЬ ПОСТАВОК',
    title: 'Спецификационный B2B-сорсинг и координация экспорта в восьми ключевых секторах.',
    lead: 'CTSEG координирует поиск и верификацию производителей, отбор образцов, проверку сертификатов партии (COA/TDS) и управление RFQ в сферах стекла, натуральных масел, агропродукции, орехов, кормов, оборудования, упаковки и текстиля.',
    exploreLabel: 'Открыть категорию',
    rfqLabel: 'Запросить расчёт (RFQ)',
    nutsSectionKicker: 'ПОРТФЕЛЬ ОРЕХОВ, СЕМЯН И СУХОФРУКТОВ',
    nutsSectionTitle: 'Единый каталог орехов, семян, фиников и сухофруктов.',
    nutsSectionLead: 'Оптовый B2B-сорсинг фисташек, фиников, сухофруктов, миндаля, грецкого ореха, семян и шафрана с проверкой калибра, сорта, документов партии, упаковки и MOQ.',
    sectors: {
      glass: {
        title: 'Стекло и строительные материалы',
        description: 'Флоат-стекло, закалённое, ламинированное, энергосберегающее Low-E стекло, стеклопакеты (IGU) и архитектурное стекло из Турции.',
        alt: 'Архитектурный стеклянный фасад и поставки листового стекла'
      },
      'natural-oils': {
        title: 'Натуральные масла и косметическое сырьё',
        description: 'Эфирные масла розы и лаванды, гидролаты, базовые масла и растительные экстракты с документацией GC-MS, COA и SDS.',
        alt: 'Натуральные эфирные масла и косметическое сырьё в лаборатории'
      },
      'food-agri': {
        title: 'Продукты питания и агропродукция',
        description: 'Пищевые ингредиенты, зерновые, бобовые и растительные масла с проверкой происхождения и сопроводительных документов партии.',
        alt: 'Образцы растительного масла и пищевого сырья для коммерческой оценки'
      },
      'nuts-dried-fruits': {
        title: 'Орехи, семена и сухофрукты',
        description: 'Фисташки и ядра фисташек, финики Мазафати, миндаль, грецкий орех, изюм, курага, тыквенные и подсолнечные семечки, шафран.',
        alt: 'Образцы орехов и сухофруктов для оценки сорта и калибра'
      },
      'animal-feed': {
        title: 'Корма для животных и кормовые компоненты',
        description: 'Кормовые программы для птицеводства и кормовые ингредиенты с проверкой технических спецификаций, COA и экспортной логистики.',
        alt: 'Складская подготовка и экспортная координация кормов для птицы'
      },
      'industrial': {
        title: 'Промышленная продукция и оборудование',
        description: 'Промышленные комплектующие, электротехническое оборудование, запчасти для предприятий и проектные закупки по ТЗ.',
        alt: 'Оценка промышленных комплектующих и технических спецификаций'
      },
      'packaging-inputs': {
        title: 'Упаковка и производственное сырьё',
        description: 'Первичная и вторичная тара, флаконы, гибкая упаковка, этикетка и комплектующие для контрактного производства (Private Label).',
        alt: 'Верификация поставщиков упаковки и производственных материалов'
      },
      textiles: {
        title: 'Текстиль и готовая одежда',
        description: 'Ткани, полотенца, халаты, домашний и гостиничный текстиль, а также производство одежды под собственной маркой (OEM/Private Label).',
        alt: 'Образцы тканей и текстильной продукции для оптовых закупок'
      }
    }
  },
  zh: {
    kicker: 'B2B 行业供应链核心矩阵',
    title: '覆盖八大核心工业与商业品类的规格导向型 B2B 寻源与出口协调。',
    lead: 'CTSEG 围绕建筑玻璃、天然精油与化妆品原料、食品农产、坚果干果、动物饲料、工业设备、包装辅料及纺织服装八大板块，提供工厂核验、样品盲测、批次单证审核与结构化 RFQ 管理。',
    exploreLabel: '查看品类详情',
    rfqLabel: '提交询价需求 (RFQ)',
    nutsSectionKicker: '坚果、籽仁与干果大宗产品组合',
    nutsSectionTitle: '坚果、籽仁、椰枣与脱水干果全系大宗名录。',
    nutsSectionLead: '针对开心果、椰枣、葡萄干、杏干、巴旦木、核桃、籽仁及藏红花提供按口径分级、批次 COA、包装形式与 MOQ 开展的 B2B 商业评估。',
    sectors: {
      glass: {
        title: '建筑玻璃与建材制品',
        description: '浮法玻璃、钢化玻璃、夹层玻璃、Low-E 镀膜玻璃、中空玻璃 (IGU) 及工程幕墙玻璃的源头工厂匹配与集装箱出口协调。',
        alt: '商业建筑幕墙与平板玻璃大宗出口供应'
      },
      'natural-oils': {
        title: '天然油脂与化妆品原料',
        description: '大马士革玫瑰精油、薰衣草精油、纯露花水、冷压植物基础油与植物提取物，配套 GC-MS、COA 与 SDS 批次技术文件。',
        alt: '化妆品级天然精油与植物提取物实验室样品'
      },
      'food-agri': {
        title: '食品与大宗农产品',
        description: '食品工业原料、谷物豆类、散装植物油及农产品大宗寻源，严格核验原产地证明、批次化验单与进口合规单证。',
        alt: '用于大宗商业评估的植物油与食品原料样品'
      },
      'nuts-dried-fruits': {
        title: '坚果、籽仁与干果系列',
        description: '统一整合阿克巴里等四大开心果品系、绿开心果仁、马扎法蒂椰枣、巴旦木、核桃、葡萄干、杏干、南瓜籽及藏红花。',
        alt: '用于等级与规格检验的精选坚果与干果样品'
      },
      'animal-feed': {
        title: '动物饲料与饲料原料',
        description: '家禽全周期复合饲料（育雏、肉鸡、蛋鸡、种鸡）及饲料添加剂原料，统筹技术指标书、COA 与跨境物流交付。',
        alt: '家禽饲料与饲料原料仓储及出口发运协调'
      },
      'industrial': {
        title: '工业产品与机械设备',
        description: '工业备品备件、低压电气与不间断电源设备、机械零部件及按技术图纸开展的工程项目采购协调。',
        alt: '采购团队核验工业零部件与技术规格书'
      },
      'packaging-inputs': {
        title: '包装材料与生产辅料',
        description: '面向食品、日化与工业制造的玻璃瓶罐、塑胶容器、复合软包装、标签及 OEM/贴牌定制生产辅料。',
        alt: '包装材料与工业辅料供应商现场质量核验'
      },
      textiles: {
        title: '纺织品与成衣制造',
        description: '商业面料、星级酒店毛巾浴袍、家纺床品及成衣 OEM/Private Label 贴牌生产，全流程协调打样、验厂与物流。',
        alt: '用于大宗采购评估的纺织面料与家纺样品'
      }
    }
  },
  vi: {
    kicker: 'DANH MỤC CUNG ỨNG B2B THEO NGÀNH HÀNG',
    title: 'Tìm nguồn cung B2B theo thông số kỹ thuật và điều phối xuất khẩu trên tám ngành hàng cốt lõi.',
    lead: 'CTSEG điều phối xác minh nhà sản xuất, duyệt mẫu, kiểm tra chứng từ lô hàng (COA/TDS) và quản lý RFQ chuyên nghiệp trong các lĩnh vực kính, tinh dầu tự nhiên, thực phẩm, hạt dinh dưỡng, thức ăn chăn nuôi, thiết bị công nghiệp, bao bì và dệt may.',
    exploreLabel: 'Xem danh mục',
    rfqLabel: 'Gửi yêu cầu báo giá (RFQ)',
    nutsSectionKicker: 'DANH MỤC HẠT DINH DƯỠNG, HẠT GIỐNG & TRÁI CÂY KHÔ',
    nutsSectionTitle: 'Nhóm sản phẩm hạt dinh dưỡng, hạt giống, chà là và trái cây sấy khô.',
    nutsSectionLead: 'Đánh giá thương mại B2B cho hạt dẻ cười, chà là, nho khô, mơ khô, hạnh nhân, óc chó, hạt bí và nhụy hoa nghệ tây theo cỡ hạt, hạng chất lượng, COA, quy cách đóng gói và MOQ.',
    sectors: {
      glass: {
        title: 'Kính & Vật liệu Xây dựng',
        description: 'Kính nổi (float glass), kính cường lực, kính dán an toàn, kính phủ Low-E, kính hộp (IGU) và kính dự án kiến trúc từ Thổ Nhĩ Kỳ.',
        alt: 'Mặt dựng kính kiến trúc và cung ứng kính phẳng B2B'
      },
      'natural-oils': {
        title: 'Tinh dầu Tự nhiên & Nguyên liệu Mỹ phẩm',
        description: 'Tinh dầu hoa hồng, tinh dầu oải hương, nước cất hydrosol, dầu nền ép lạnh và chiết xuất thực vật kèm hồ sơ GC-MS, COA và SDS.',
        alt: 'Tinh dầu tự nhiên và nguyên liệu mỹ phẩm trong phòng kiểm nghiệm'
      },
      'food-agri': {
        title: 'Thực phẩm & Nông sản',
        description: 'Nguyên liệu thực phẩm công nghiệp, ngũ cốc, dầu thực vật và nông sản với quy trình thẩm định xuất xứ và chứng từ lô hàng.',
        alt: 'Mẫu dầu thực vật và nguyên liệu thực phẩm phục vụ đánh giá thương mại'
      },
      'nuts-dried-fruits': {
        title: 'Hạt dinh dưỡng, Hạt & Trái cây khô',
        description: 'Danh mục hợp nhất gồm hạt dẻ cười, nhân hạt dẻ cười, chà là Mazafati, hạnh nhân, óc chó, nho khô, mơ khô, hạt bí, hạt hướng dương và saffron.',
        alt: 'Mẫu hạt dinh dưỡng và trái cây sấy khô phục vụ kiểm định chất lượng'
      },
      'animal-feed': {
        title: 'Thức ăn Chăn nuôi & Nguyên liệu Thức ăn',
        description: 'Chương trình thức ăn gia cầm (gà con, gà thịt, gà đẻ, gà giống) và nguyên liệu thức ăn chăn nuôi kèm bảng thông số kỹ thuật và điều phối xuất khẩu.',
        alt: 'Kho vận và chuẩn bị xuất khẩu thức ăn gia cầm B2B'
      },
      'industrial': {
        title: 'Sản phẩm & Thiết bị Công nghiệp',
        description: 'Linh kiện công nghiệp, phụ tùng bảo trì nhà máy, thiết bị điện và nguồn dự phòng, thu mua theo hồ sơ kỹ thuật dự án.',
        alt: 'Chuyên gia thu mua đánh giá thiết bị công nghiệp và thông số kỹ thuật'
      },
      'packaging-inputs': {
        title: 'Bao bì & Vật tư Sản xuất',
        description: 'Bao bì cấp 1 và cấp 2, chai lọ thủy tinh, nhựa, màng ghép, nhãn mác và vật tư sản xuất nhãn hàng riêng (Private Label).',
        alt: 'Thẩm định nhà cung cấp và chất lượng vật tư bao bì công nghiệp'
      },
      textiles: {
        title: 'Dệt may & Hàng may mặc',
        description: 'Vải thương mại, khăn tắm, áo choàng tắm, dệt may gia dụng/khách sạn và sản xuất hàng may mặc OEM/Private Label từ mẫu thử đến giao hàng.',
        alt: 'Mẫu vải dệt và sản phẩm dệt may trên bàn thẩm định thương mại'
      }
    }
  },
  uk: {
    kicker: 'ГАЛУЗЕВИЙ B2B-ПОРТФЕЛЬ ПОСТАЧАННЯ',
    title: 'Специфікаційний B2B-сорсинг і координація експорту у восьми ключових секторах.',
    lead: 'CTSEG координує перевірку виробників, узгодження зразків, аудит партійних документів (COA/TDS) та управління RFQ у сферах скла, натуральних олій, агропродукції, горіхів, кормів, промислового обладнання, пакування й текстилю.',
    exploreLabel: 'Переглянути категорію',
    rfqLabel: 'Надіслати запит (RFQ)',
    nutsSectionKicker: 'ПОРТФЕЛЬ ГОРІХІВ, НАСІННЯ ТА СУХОФРУКТІВ',
    nutsSectionTitle: 'Консолідована лінійка горіхів, насіння, фініків і сухофруктів.',
    nutsSectionLead: 'Комерційна B2B-оцінка фісташок, фініків, сухофруктів, мигдалю, волоського горіха, насіння та шафрану за калібром, сортом, сертифікатами партії, пакуванням і MOQ.',
    sectors: {
      glass: {
        title: 'Скло та будівельні матеріали',
        description: 'Флоат-скло, загартоване, ламіноване, енергоефективне Low-E скло, склопакети (IGU) та архітектурне скло для будівництва й переробників.',
        alt: 'Архітектурний скляний фасад і постачання листового скла'
      },
      'natural-oils': {
        title: 'Натуральні олії та косметична сировина',
        description: 'Ефірні олії троянди й лаванди, гідролати, базові олії холодного віджиму та рослинні екстракти з документацією GC-MS, COA і SDS.',
        alt: 'Натуральні ефірні олії та косметична сировина в лабораторії'
      },
      'food-agri': {
        title: 'Харчові та аграрні продукти',
        description: 'Харчові інгредієнти, зернові, бобові та рослинні олії з перевіркою походження, специфікацій і супровідних документів партії.',
        alt: 'Зразки рослинної олії та харчової сировини для B2B-оцінки'
      },
      'nuts-dried-fruits': {
        title: 'Горіхи, насіння та сухофрукти',
        description: 'Єдиний B2B-портфель: фісташки та ядра фісташок, фініки Мазафаті, мигдаль, волоські горіхи, родзинки, курага, насіння та шафран.',
        alt: 'Зразки горіхів і сухофруктів для перевірки сорту та якості'
      },
      'animal-feed': {
        title: 'Корми для тварин і кормова сировина',
        description: 'Програми годівлі птиці та кормові компоненти з перевіркою технічних специфікацій, сертифікатів аналізу та експортної логістики.',
        alt: 'Складська підготовка та відвантаження кормів для птиці'
      },
      'industrial': {
        title: 'Промислові товари та обладнання',
        description: 'Промислові комплектуючі, електротехнічне обладнання, запчастини для виробництв і проєктні закупівлі за технічним завданням.',
        alt: 'Фахівці із закупівель оцінюють промислове обладнання та специфікації'
      },
      'packaging-inputs': {
        title: 'Пакування та виробничі матеріали',
        description: 'Первинна й вторинна тара, скляні та пластикові флакони, гнучке пакування, етикетки й матеріали для програм Private Label.',
        alt: 'Перевірка постачальника та якості пакувальних матеріалів'
      },
      textiles: {
        title: 'Текстиль і готовий одяг',
        description: 'Комерційні тканини, рушники, халати, домашній і готельний текстиль та контрактне виробництво одягу від зразка до доставки.',
        alt: 'Зразки тканин, рушників і текстилю на столі комерційного оцінювання'
      }
    }
  },
  ro: {
    kicker: 'PORTOFOLIU SECTORIAL DE APROVIZIONARE B2B',
    title: 'Sourcing B2B bazat pe specificații și coordonare de export în opt sectoare comerciale cheie.',
    lead: 'CTSEG coordonează identificarea producătorilor verificați, mostrele, verificarea documentelor de lot (COA/TDS) și gestionarea RFQ în sectoarele sticlă, uleiuri naturale, alimente, nuci și fructe uscate, furaje, echipamente industriale, ambalaje și textile.',
    exploreLabel: 'Explorează categoria',
    rfqLabel: 'Solicită ofertă (RFQ)',
    nutsSectionKicker: 'PORTOFOLIUL DE NUCI, SEMINȚE ȘI FRUCTE USCATE',
    nutsSectionTitle: 'Gama consolidată de nuci, semințe, curmale și fructe uscate.',
    nutsSectionLead: 'Evaluare comercială B2B pentru fistic, curmale, fructe uscate, migdale, nuci, semințe și șofran în funcție de calibru, clasă, COA de lot, ambalare și MOQ.',
    sectors: {
      glass: {
        title: 'Sticlă și Materiale de Construcții',
        description: 'Sticlă float, securizată, laminată, Low-E, unități termoizolante (IGU) și sticlă arhitecturală de proiect din fabrici verificate din Türkiye.',
        alt: 'Fațadă din sticlă arhitecturală și aprovizionare B2B cu sticlă plană'
      },
      'natural-oils': {
        title: 'Uleiuri Naturale și Materii Prime Cosmetice',
        description: 'Uleiuri esențiale de trandafir și lavandă, ape florale (hidrolate), uleiuri purtătoare presate la rece și extracte botanice cu documentație GC-MS, COA și SDS.',
        alt: 'Uleiuri esențiale naturale și materii prime cosmetice în laborator'
      },
      'food-agri': {
        title: 'Produse Alimentare și Agricole',
        description: 'Ingrediente alimentare vrac, cereale, leguminoase și uleiuri vegetale cu verificarea originii, trasabilității și documentelor de lot.',
        alt: 'Mostre de ulei vegetal și ingrediente alimentare pentru evaluare comercială'
      },
      'nuts-dried-fruits': {
        title: 'Nuci, Semințe și Fructe Uscate',
        description: 'Portofoliu B2B consolidat: fistic, miez de fistic, curmale Mazafati, migdale, nuci, stafide, caise uscate, semințe și șofran.',
        alt: 'Mostre de nuci și fructe uscate pentru evaluarea calității și calibrului'
      },
      'animal-feed': {
        title: 'Furaje și Ingrediente pentru Nutriția Animalelor',
        description: 'Programe de furajare pentru păsări și materii prime furajere coordonate cu fișe tehnice, certificate de analiză și logistică de export.',
        alt: 'Depozit și pregătire de export pentru furaje și nutriție avicolă'
      },
      'industrial': {
        title: 'Produse și Echipamente Industriale',
        description: 'Componente industriale, piese de schimb, echipamente electrice și de continuitate a energiei, plus achiziții de proiect pe bază de specificații.',
        alt: 'Echipă de achiziții evaluând produse industriale și specificații tehnice'
      },
      'packaging-inputs': {
        title: 'Ambalaje și Inputuri de Producție',
        description: 'Ambalaje primare și secundare, recipiente din sticlă și plastic, filme flexibile, etichete și inputuri pentru producția private label.',
        alt: 'Verificarea calității și a furnizorilor pentru ambalaje și inputuri industriale'
      },
      textiles: {
        title: 'Textile și Îmbrăcăminte',
        description: 'Țesături comerciale, prosoape, halate, textile pentru casă și HoReCa, precum și confecții private label coordonate de la mostră la livrare.',
        alt: 'Mostre de țesături și produse textile pe masa de evaluare comercială'
      }
    }
  },
  bg: {
    kicker: 'СЕКТОРНО B2B ПОРТФОЛИО ЗА СНАБДЯВАНЕ',
    title: 'Базирано на спецификации B2B снабдяване и експортна координация в осем основни сектора.',
    lead: 'CTSEG координира проучване и проверка на производители, мостри, преглед на партидни документи (COA/TDS) и управление на RFQ в секторите стъкло, натурални масла, храни, ядки, фуражи, индустриално оборудване, опаковки и текстил.',
    exploreLabel: 'Разгледай категорията',
    rfqLabel: 'Заяви оферта (RFQ)',
    nutsSectionKicker: 'ПОРТФОЛИО ЯДКИ, СЕМЕНА И СУШЕНИ ПЛОДОВЕ',
    nutsSectionTitle: 'Консолидирана гама от ядки, семена, фурми и сушени плодове.',
    nutsSectionLead: 'Търговска B2B оценка за шамфъстък, фурми, сушени плодове, бадеми, орехи, семена и шафран по калибър, клас, партиден COA, опаковка и MOQ.',
    sectors: {
      glass: {
        title: 'Стъкло и Строителни Материали',
        description: 'Флоатно, закалено, ламинирано, нискоемисионно Low-E стъкло, стъклопакети (IGU) и архитектурно проектно стъкло от проверени заводи в Türkiye.',
        alt: 'Архитектурна стъклена фасада и B2B доставка на плоско стъкло'
      },
      'natural-oils': {
        title: 'Натурални Масла и Козметични Суровини',
        description: 'Етерични масла от роза и лавандула, хидрозоли, студено пресовани базови масла и растителни екстракти с GC-MS, COA и SDS документация.',
        alt: 'Натурални етерични масла и козметични суровини в лабораторни стъклени флакони'
      },
      'food-agri': {
        title: 'Храни и Селскостопански Продукти',
        description: 'Хранителни суровини на едро, зърнени и бобови култури и растителни масла с проверка на произхода и партидните документи.',
        alt: 'Мостри от растително масло и хранителни суровини за търговска оценка'
      },
      'nuts-dried-fruits': {
        title: 'Ядки, Семена и Сушени Плодове',
        description: 'Консолидирано B2B портфолио: шамфъстък, ядки от шамфъстък, фурми Мазафати, бадеми, орехи, стафиди, сушени кайсии, семена и шафран.',
        alt: 'Мостри от ядки и сушени плодове за оценка на качеството и класа'
      },
      'animal-feed': {
        title: 'Фуражи за Животни и Фуражни Суровини',
        description: 'Фуражни програми за птицевъдство и фуражни компоненти, координирани с технически спецификации, COA и експортна логистика.',
        alt: 'Склад и подготовка за експорт на фуражи за птици и фуражни суровини'
      },
      'industrial': {
        title: 'Индустриални Продукти и Оборудване',
        description: 'Индустриални компоненти, резервни части, електрическо оборудване и проектно снабдяване по техническа спецификация.',
        alt: 'Екип по снабдяване оценява индустриални продукти и технически спецификации'
      },
      'packaging-inputs': {
        title: 'Опаковки и Производствени Консумативи',
        description: 'Първични и вторични опаковки, стъклени и пластмасови флакони, гъвкави фолиа, етикети и материали за private label производство.',
        alt: 'Проверка на качеството и доставчиците за опаковки и производствени материали'
      },
      textiles: {
        title: 'Текстил и Готово Облекло',
        description: 'Търговски платове, кърпи, халати, домашен и хотелски текстил и private label облекло, координирани от мострата до доставката.',
        alt: 'Мостри на платове и текстилни изделия на маса за търговска оценка'
      }
    }
  },
  he: {
    kicker: 'פורטפוליו אספקה ענפי B2B',
    title: 'איתור ספקים B2B מבוסס-מפרט ותיאום יצוא בשמונה ענפי מסחר מרכזיים.',
    lead: 'במקום קטלוג מלאי קבוע, CTSEG מתאמת איתור ואימות יצרנים, דוגמאות, בדיקת מסמכי אצווה (COA/TDS) וניהול RFQ מובנה בתחומי הזכוכית, השמנים הטבעיים, המזון, הפיצוחים, המזון לבעלי חיים, הציוד התעשייתי, האריזה והטקסטיל.',
    exploreLabel: 'לצפייה בקטגוריה',
    rfqLabel: 'בקשת הצעת מחיר (RFQ)',
    nutsSectionKicker: 'פורטפוליו אגוזים, זרעים ופירות יבשים',
    nutsSectionTitle: 'קבוצת מוצרי אגוזים, זרעים, תמרים ופירות יבשים.',
    nutsSectionLead: 'הערכה מסחרית B2B לפיסטוקים, תמרים, פירות יבשים, שקדים, אגוזי מלך, זרעים וזעפרן לפי קליבר, דרגת איכות, COA, אריזה ו-MOQ.',
    sectors: {
      glass: {
        title: 'זכוכית וחומרי בנייה',
        description: 'זכוכית פלואט, מחוסמת, רבודה, זכוכית Low-E, יחידות זיגוג (IGU) וזכוכית אדריכלית לפרויקטים, מעבדים ויבואנים.',
        alt: 'חזית זכוכית אדריכלית ואספקת זכוכית שטוחה B2B'
      },
      'natural-oils': {
        title: 'שמנים טבעיים וחומרי גלם לקוסמטיקה',
        description: 'שמנים אתריים של ורד ולבנדר, הידרוסולים, שמני נשא בכבישה קרה ותמציות בוטניות בליווי מסמכי GC-MS, COA ו-SDS.',
        alt: 'שמנים אתריים טבעיים וחומרי גלם לקוסמטיקה בבקבוקי מעבדה'
      },
      'food-agri': {
        title: 'מזון ותוצרת חקלאית',
        description: 'חומרי גלם לתעשיית המזון, דגנים, קטניות ושמנים צמחיים עם אימות מקור, עקיבות ומסמכי אצווה.',
        alt: 'דוגמאות שמן צמחי וחומרי גלם למזון להערכה מסחרית'
      },
      'nuts-dried-fruits': {
        title: 'אגוזים, זרעים ופירות יבשים',
        description: 'פורטפוליו מרוכז של פיסטוקים, גרעיני פיסטוק, תמרי מזפאתי, שקדים, אגוזי מלך, צימוקים, משמש מיובש, זרעים וזעפרן.',
        alt: 'דוגמאות אגוזים ופירות יבשים לבדיקת איכות ומיון'
      },
      'animal-feed': {
        title: 'מזון לבעלי חיים ורכיבי מספוא',
        description: 'תוכניות הזנה לעופות וחומרי גלם למספוא בתיאום מפרטים טכניים, תעודות אנליזה (COA) ולוגיסטיקת יצוא.',
        alt: 'מחסן והכנת משלוחים של מזון לעופות ורכיבי מספוא'
      },
      'industrial': {
        title: 'מוצרים וציוד תעשייתי',
        description: 'רכיבים תעשייתיים, חלקי חילוף, ציוד חשמל ורציפות אנרגטית ורכש פרויקטלי לפי מפרט הנדסי.',
        alt: 'צוות רכש בוחן מוצרים תעשייתיים ומפרטים טכניים'
      },
      'packaging-inputs': {
        title: 'אריזה ותשומות ייצור',
        description: 'אריזות ראשוניות ומשניות, בקבוקים וצנצנות, יריעות גמישות, תוויות ותשומות ייצור למותג פרטי (Private Label).',
        alt: 'אימות ספקים ובקרת איכות לאריזות ותשומות ייצור'
      },
      textiles: {
        title: 'טקסטיל והלבשה',
        description: 'בדים מסחריים, מגבות, חלוקים, טקסטיל לבית ולמלונאות וייצור הלבשה במותג פרטי משלב הדוגמה ועד המשלוח.',
        alt: 'דוגמאות בדים ומוצרי טקסטיל על שולחן הערכה מסחרית'
      }
    }
  },
  ar: {
    kicker: 'محفظة التوريد القطاعي للشركات B2B',
    title: 'توريد B2B قائم على المواصفات الفنية وتنسيق التصدير عبر ثمانية قطاعات تجارية رئيسية.',
    lead: 'بدلاً من العمل كقائمة مخزون ثابتة، تنسّق CTSEG البحث عن المنتجين الموثوقين والعينات ومراجعة وثائق الدفعات (COA/TDS) وإدارة طلبات الأسعار (RFQ) في قطاعات الزجاج والزيوت الطبيعية والأغذية والمكسرات والأعلاف والمعدات الصناعية والتعبئة والمنسوجات.',
    exploreLabel: 'استكشف الفئة',
    rfqLabel: 'طلب عرض سعر (RFQ)',
    nutsSectionKicker: 'محفظة المكسرات والبذور والفواكه المجففة',
    nutsSectionTitle: 'مجموعة موحدة للمكسرات والبذور والتمور والفواكه المجففة.',
    nutsSectionLead: 'تقييم وتوريد B2B للفستق والتمور والفواكه المجففة واللوز والجوز والبذور والزعفران وفق الحجم والدرجة وشهادة التحليل COA والتعبئة والحد الأدنى للطلب MOQ.',
    sectors: {
      glass: {
        title: 'الزجاج ومواد البناء',
        description: 'الزجاج المسطح (Float) والمقسّى والرقائقي وزجاج Low-E ووحدات الزجاج العازل (IGU) وزجاج المشاريع المعمارية من مصانع موثقة في Türkiye.',
        alt: 'واجهة زجاج معماري وتوريد الزجاج المسطح للمشاريع'
      },
      'natural-oils': {
        title: 'الزيوت الطبيعية والمواد الخام التجميلية',
        description: 'الزيوت العطرية للورد واللافندر والمياه المقطرة (الهيدروسول) والزيوت الحاملة المعصورة على البارد والمستخلصات النباتية مع وثائق GC-MS وCOA وSDS.',
        alt: 'زيوت عطرية طبيعية ومواد خام تجميلية في عبوات مخبرية'
      },
      'food-agri': {
        title: 'المنتجات الغذائية والزراعية',
        description: 'مدخلات الصناعات الغذائية والحبوب والبقوليات والزيوت النباتية السائبة مع التحقق من المنشأ ووثائق الدفعة.',
        alt: 'عينات زيوت نباتية ومدخلات غذائية للتقييم التجاري'
      },
      'nuts-dried-fruits': {
        title: 'المكسرات والبذور والفواكه المجففة',
        description: 'محفظة موحدة تشمل أصناف الفستق ولب الفستق وتمور مضافتي واللوز والجوز والزبيب والمشمش المجفف والبذور والزعفران.',
        alt: 'عينات مكسرات وفواكه مجففة لتقييم الجودة والدرجة'
      },
      'animal-feed': {
        title: 'الأعلاف الحيوانية ومدخلات الأعلاف',
        description: 'برامج أعلاف الدواجن (البادئ، النامي، البياض، الأمهات) ومدخلات التغذية الحيوانية مع مراجعة المواصفات الفنية وتنسيق التصدير.',
        alt: 'مستودع وتجهيز شحنات أعلاف الدواجن ومدخلات الأعلاف'
      },
      'industrial': {
        title: 'المنتجات والمعدات الصناعية',
        description: 'المكونات الصناعية وقطع الغيار ومعدات الكهرباء واستمرارية الطاقة وتوريد المشاريع وفق المواصفات الهندسية.',
        alt: 'فريق المشتريات يراجع المنتجات الصناعية والمواصفات الفنية'
      },
      'packaging-inputs': {
        title: 'التعبئة والتغليف ومدخلات الإنتاج',
        description: 'عبوات التغليف الأولية والثانوية والقوارير الزجاجية والبلاستيكية والأغشية المرنة والملصقات ومدخلات التصنيع للعلامات الخاصة.',
        alt: 'التحقق من الموردين والجودة لمواد التعبئة ومدخلات الإنتاج'
      },
      textiles: {
        title: 'المنسوجات والملابس الجاهزة',
        description: 'الأقمشة التجارية والمناشف والأرواب ومنسوجات الضيافة والمنزل وتصنيع الملابس الجاهزة للعلامات الخاصة من العينة حتى الشحن.',
        alt: 'عينات أقمشة ومناشف ومنسوجات على طاولة التقييم التجاري'
      }
    }
  }
};

export const portfolioSectorOrder: readonly PortfolioSectorId[] = [
  'glass',
  'natural-oils',
  'food-agri',
  'nuts-dried-fruits',
  'animal-feed',
  'industrial',
  'packaging-inputs',
  'textiles'
] as const;

export function getPortfolioSectors(lang: ActiveLocale): PortfolioSectorCard[] {
  const copy = portfolioLocaleCopy[lang] || portfolioLocaleCopy.en;
  const isHe = lang === 'he';
  const locale = (isHe ? 'en' : lang) as Locale;
  const contactBase = isHe ? '/he/יצירת-קשר/' : localizedPath(locale, 'contact');
  const rfqHref = `${contactBase}?intent=buyer_request#commercial-form`;
  const productsBase = isHe ? '/he/מוצרים-מסחריים/' : localizedPath(locale, 'products');

  const resolveHref = (id: PortfolioSectorId): string => {
    switch (id) {
      case 'glass':
        return lang === 'tr' ? '/glass/' : isHe ? '/en/glass/' : `/${lang}/glass/`;
      case 'natural-oils':
        return `/${lang}/natural-oils/`;
      case 'food-agri':
        if (isHe) return '/he/insights/private-label-food-turkiye-israel/';
        if (lang === 'fa') return `${productsBase}#catalogue-nuts-dried-fruits`;
        return searchLandingPath(locale, 'food-origin-compliance') || `${productsBase}#catalogue-nuts-dried-fruits`;
      case 'nuts-dried-fruits':
        return `${productsBase}#catalogue-nuts-dried-fruits`;
      case 'animal-feed':
        if (lang === 'tr' || lang === 'en' || lang === 'ar') {
          return poultryFeedPath(lang as PoultryFeedLocale, 'turkiye-poultry-feed-sourcing');
        }
        return isHe ? '/he/שירותים/' : localizedPath(locale, 'services');
      case 'industrial':
        return isHe ? '/he/שירותים/' : localizedPath(locale, 'services');
      case 'packaging-inputs':
        if (isHe) return '/he/שירותים/';
        if (lang === 'fa') return localizedPath(locale, 'services');
        return searchLandingPath(locale, 'private-label-manufacturer') || localizedPath(locale, 'services');
      case 'textiles':
        if (isHe) return '/he/שירותים/';
        return pathForSector(lang as TradeLocale, 'wholesale-textiles');
    }
  };

  return portfolioSectorOrder.map((id) => {
    const item = copy.sectors[id];
    const img = sectorImages[id];
    return {
      id,
      title: item.title,
      description: item.description,
      image: {
        src: img.src,
        width: img.width,
        height: img.height,
        alt: item.alt
      },
      href: resolveHref(id),
      exploreLabel: copy.exploreLabel,
      rfqHref,
      rfqLabel: copy.rfqLabel
    };
  });
}
