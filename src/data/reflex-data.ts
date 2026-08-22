export type ReflexLocale = 'en' | 'tr' | 'de' | 'it' | 'ru' | 'fa' | 'zh' | 'vi' | 'sq' | 'mk' | 'sr';

export const reflexLocales: ReflexLocale[] = ['en', 'tr', 'de', 'it', 'ru', 'fa', 'zh', 'vi', 'sq', 'mk', 'sr'];

export const reflexLocaleNames: Record<ReflexLocale, string> = {
  en: 'English',
  tr: 'Türkçe',
  de: 'Deutsch',
  it: 'Italiano',
  ru: 'Русский',
  fa: 'فارسی',
  sq: 'Shqip',
  mk: 'Македонски',
  sr: 'Srpski',
  zh: '简体中文',
  vi: 'Tiếng Việt'
};

export function reflexPath(lang: ReflexLocale): string {
  if (lang === 'tr') return '/medical/reflex-disposable-gloves/';
  return `/${lang}/medical/reflex-disposable-gloves/`;
}

export function reflexAlternates(): Record<ReflexLocale, string> {
  return {
    en: 'https://ctseg.com.tr/en/medical/reflex-disposable-gloves/',
    tr: 'https://ctseg.com.tr/medical/reflex-disposable-gloves/',
    de: 'https://ctseg.com.tr/de/medical/reflex-disposable-gloves/',
    it: 'https://ctseg.com.tr/it/medical/reflex-disposable-gloves/',
    ru: 'https://ctseg.com.tr/ru/medical/reflex-disposable-gloves/',
    fa: 'https://ctseg.com.tr/fa/medical/reflex-disposable-gloves/',
    sq: 'https://ctseg.com.tr/sq/medical/reflex-disposable-gloves/',
    mk: 'https://ctseg.com.tr/mk/medical/reflex-disposable-gloves/',
    sr: 'https://ctseg.com.tr/sr/medical/reflex-disposable-gloves/',
    zh: 'https://ctseg.com.tr/zh/medical/reflex-disposable-gloves/',
    vi: 'https://ctseg.com.tr/vi/medical/reflex-disposable-gloves/'
  };
}

export interface ReflexCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  material: string;
  variants: string;
  packing: string;
  image: string;
  badges: string[];
}

export interface ReflexApplication {
  title: string;
  description: string;
  image: string;
}

export interface ReflexGalleryItem {
  title: string;
  tag: string;
  image: string;
  imageMobile?: string;
}

export interface ReflexFormLabels {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  product: string;
  volume: string;
  notes: string;
  submit: string;
  successMessage: string;
}

export interface ReflexContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroLead: string;
  heroBadges: string[];
  ctaQuote: string;
  ctaCatalog: string;
  ctaProducts: string;

  aboutEyebrow: string;
  aboutTitle: string;
  aboutText1: string;
  aboutText2: string;
  aboutRoleTitle: string;
  aboutRoleText: string;
  aboutMarketsTitle: string;
  aboutMarketsList: string[];

  categoriesTitle: string;
  categoriesLead: string;
  categories: ReflexCategory[];

  applicationsTitle: string;
  applicationsLead: string;
  applications: ReflexApplication[];

  galleryTitle: string;
  galleryLead: string;
  galleryItems: ReflexGalleryItem[];

  downloadTitle: string;
  downloadLead: string;
  downloadButton: string;
  pdfNotice: string;

  rfqTitle: string;
  rfqLead: string;
  formLabels: ReflexFormLabels;
}

export const reflexData: Record<ReflexLocale, ReflexContent> = {
  tr: {
    metaTitle: 'B2B REFLEX Tek Kullanımlık Eldiven Tedariği | CTSEG Medikal',
    metaDescription: 'CTSEG, REFLEX tek kullanımlık eldiven portföyünü (TPE, Muayene, Vinil, Kopolimer) Avrupa, Balkanlar ve uluslararası pazarlara tedarik etmektedir.',
    eyebrow: 'Medikal ve Koruyucu Eldiven Portföyü',
    heroTitle: 'REFLEX Tek Kullanımlık ve Muayene Eldivenleri',
    heroLead: 'CTSEG; uluslararası distribütörler, sağlık kuruluşları ve kurumsal alıcılar için yüksek üretim kapasiteli nitril muayene eldivenleri, latekssiz TPE, termo vinil ve kopolimer tek kullanımlık eldiven portföyünü toplu ihracat ve kalite dokümantasyonu ile sunar.',
    heroBadges: ['Ürün bazında doğrulama', 'Parti belge incelemesi', 'B2B toplu tedarik', 'İhracat koordinasyonu'],
    ctaQuote: 'Teklif Alın',
    ctaCatalog: 'Kataloğu İndir (PDF)',
    ctaProducts: 'Ürünleri İnceleyin',

    aboutEyebrow: 'Üretim Kapasitesi ve Standartlar',
    aboutTitle: 'Yüksek Hacimli Üretim ve Standartlara Uyum',
    aboutText1: 'İstanbul tesislerinde üretilen REFLEX ürünleri, 7/24 çalışan yüksek teknolojili otomatik üretim hatlarında imal edilir. Yüksek kaliteli hammaddeler ve özel TPE formülasyonu ile medikal muayene ve endüstriyel koruma eldivenleri üretilmektedir.',
    aboutText2: 'Mevcut standart, sertifika ve laboratuvar belgeleri ticari karar öncesinde ürün, üretici, parti ve hedef pazar için incelenir.',
    aboutRoleTitle: 'CTSEG Ticari Hizmetleri',
    aboutRoleText: 'CTSEG, REFLEX ürünlerinin uluslararası pazarlara ihracatında tedarik ve ticaret ortağı olarak hareket eder. İthalatçı firmalara ihracat dokümantasyonu, analiz belgeleri (COA) ve lojistik koordinasyonu sağlar.',
    aboutMarketsTitle: 'Hedef Pazarlar',
    aboutMarketsList: ['Avrupa Birliği & İngiltere', 'Balkan Ülkeleri', 'Orta Doğu', 'Kuzey Afrika', 'Uluslararası İthalatçılar'],

    categoriesTitle: 'REFLEX Ürün Portföyü',
    categoriesLead: 'Farklı sektör ve kullanım gereksinimlerine uygun REFLEX eldiven serisini inceleyin.',

    categories: [
      {
        id: 'flex-hitech',
        name: 'FLEX Hi-Tech Hibrit TPE Eldiven',
        subtitle: 'Yeni Nesil Hibrit Teknolojisi',
        description: 'Lateks ve nitrile uygun maliyetli alternatif. Yumuşak dokulu, yüksek esneklikli ve pudrasız yapı.',
        material: 'TPE (Termoplastik Elastomer)',
        variants: 'Siyah, Mavi, Şeffaf | Bedenler: S, M, L, XL',
        packing: '100 Adet / Kutu, 20 Kutu / Koli',
        image: '/images/reflex/flex-hi-tech-main.jpg',
        badges: ['Lateks İçermez', 'Pudrasız', 'Gıdaya Uygun']
      },
      {
        id: 'medilex-exam',
        name: 'MEDILEX Muayene Eldiveni (Healthy Touch)',
        subtitle: 'Medikal Muayene ve Sağlık Teması',
        description: 'Klinik muayene ve sağlık ortamları için özel tasarlanmış non-steril muayene eldivenleri.',
        material: 'Medikal Polimer / TPE Karışımı',
        variants: 'Yeşil, Pembe, Mavi, Siyah | Bedenler: S, M, L/XL',
        packing: '100 Adet / Kutu, 20 Kutu / Koli',
        image: '/images/reflex/reflex-cat6.jpg',
        badges: ['Ürün belgeleriyle teyit', 'Hedef pazara göre incelenir', 'Steril olmayan']
      },
      {
        id: 'winlyex-thermo-vinyl',
        name: 'WINLYEX Extra Termo Vinil Eldiven',
        subtitle: 'Ekstra Kalın & Dayanıklı Koruma',
        description: 'Yüksek kimyasal direnç sunan ve karbon ayak izini %70 azaltan ekstra kalın termo vinil formül.',
        material: 'Termo Vinil Kompozit',
        variants: 'Mor, Yeşil, Şeffaf, Pembe | Bedenler: S, M, L/XL',
        packing: '100 Adet / Kutu, 20 Kutu / Koli',
        image: '/images/reflex/reflex-cat5.jpg',
        badges: ['Ekstra Dayanıklı', 'Karbon Tasarrufu', 'Yüksek Bariyer']
      },
      {
        id: 'slimfit-copolymer',
        name: 'SLIMFIT Kopolimer Hassas Eldiven',
        subtitle: 'Nefes Alabilir & Terletmeyen Teknolojisi',
        description: 'Hassas dokunma hissini korurken el terlemesini önleyen nefes alabilir teknoloji ile geliştirilmiştir.',
        material: 'Pudrasız Kopolimer',
        variants: 'Siyah, Mavi, Krem | Bedenler: S, M, L/XL',
        packing: '100 Adet / Kutu, 20 Kutu / Koli',
        image: '/images/reflex/reflex-cat8.jpg',
        badges: ['Nefes Alabilir', 'Terletmez', 'Geri Dönüştürülebilir']
      },
      {
        id: 'winlyex-powder-free',
        name: 'WINLYEX Pudrasız Eldiven',
        subtitle: 'Temiz ve Kokusuz Hijyen Eldiveni',
        description: 'Gıda hazırlama ve temizlik süreçlerinde bulaşmayı ve kokuyu önleyen standart koruyucu eldiven.',
        material: 'Pudrasız TPE',
        variants: 'Beyaz | Bedenler: S, M, L/XL',
        packing: '100 Adet / Kutu, 20 Kutu / Koli',
        image: '/images/reflex/reflex-cat4.jpg',
        badges: ['Pudrasız', 'Koku Bariyeri', 'Çok Amaçlı']
      },
      {
        id: 'florex-multipurpose',
        name: 'FLOREX Çok Amaçlı Eldiven',
        subtitle: 'Esnek Tasarım ve Yumuşak Doku',
        description: 'Ev kullanımı, ikram hizmetleri ve genel temizlik için pratik ve esnek koruyucu eldiven.',
        material: 'Esnek Polimer Karışımı',
        variants: 'Şeffaf, Mavi, Siyah, Krem | Bedenler: S, M, L/XL',
        packing: '100 Adet / Kutu, 20 Kutu / Koli',
        image: '/images/reflex/reflex-cat5.jpg',
        badges: ['Yumuşak Doku', 'Genel Kullanım', 'Ekonomik']
      },
      {
        id: 'flex-kids',
        name: 'FLEX Şeffaf Çocuk Eldiveni',
        subtitle: 'Çocuklara Özel Boyut (3-9 Yaş)',
        description: 'Çocukların boyama, okul etkinlikleri ve gıda teması için tasarlanmış lateks içermeyen güvenli eldiven.',
        material: 'Latekssiz TPE',
        variants: 'Şeffaf | Standart Çocuk Boyutu (3-9 Yaş)',
        packing: '50 Adet / Kutu, 40 Kutu / Koli',
        image: '/images/reflex/reflex-cat3.jpg',
        badges: ['Çocuklara Özel', '3-9 Yaş', 'Gıdaya Uygun']
      }
    ],

    applicationsTitle: 'Kullanım Alanları',
    applicationsLead: 'Medikal, gıda ve endüstriyel kullanım iddiaları; seçilen ürün, üretici, parti ve hedef pazar için mevcut belgeler üzerinden ayrıca doğrulanır.',

    applications: [
      {
        title: 'Medikal ve Sağlık Hizmetleri',
        description: 'Klinik muayene, hasta bakımı ve laboratuvar kullanımı için uygunluk; seçilen model ve hedef pazar belgeleri üzerinden ayrıca teyit edilir.',
        image: '/images/reflex/slider-ortax4.jpg'
      },
      {
        title: 'Gıda İşleme ve Catering',
        description: 'Gıda işleme ve catering kullanımı için gıda temas uygunluğu, seçilen ürün ve hedef pazar belgeleri üzerinden ayrıca teyit edilir.',
        image: '/images/reflex/slider-ortax1.jpg'
      },
      {
        title: 'Kişisel Bakım ve Güzellik',
        description: 'Güzellik salonları ve kuaförlerde kimyasallara ve boyalara karşı güvenli el koruması.',
        image: '/images/reflex/slider-ortax2.jpg'
      },
      {
        title: 'Ev, Bahçe ve Genel Temizlik',
        description: 'Profesyonel temizlik, tarım ve bakım işlerinde uzun ömürlü ve dayanıklı koruma.',
        image: '/images/reflex/reflex-cat4.jpg'
      }
    ],

    galleryTitle: 'Kalite ve Teknoloji Galerisi',
    galleryLead: 'REFLEX ambalaj, üretim ve mevcut kalite belgelerine ilişkin görseller; teknik kapsam seçilen ürün ve parti için ayrıca teyit edilir.',

    galleryItems: [
      {
        title: 'TPE çevresel özellikleri · belgeye göre doğrulanır',
        tag: 'Çevre',
        image: '/images/reflex/reflex-sliderx1.jpg',
        imageMobile: '/images/reflex/reflex-sliderx1-m.jpg'
      },
      {
        title: 'Nefes Alabilir Kopolimer Teknolojisi',
        tag: 'Ergonomi',
        image: '/images/reflex/reflex-slider1.jpg',
        imageMobile: '/images/reflex/reflex-slider1-m.jpg'
      },
      {
        title: 'Üretim kapasitesi · talep üzerine doğrulanır',
        tag: 'İmalat',
        image: '/images/reflex/slider-ortax1.jpg'
      },
      {
        title: 'Esenyurt Paketleme Hatları',
        tag: 'Tesis',
        image: '/images/reflex/reflex-slider2.jpg',
        imageMobile: '/images/reflex/reflex-slider2-m.jpg'
      }
    ],

    downloadTitle: 'Resmi REFLEX Ürün Kataloğunu İndirin',
    downloadLead: 'Teknik özellikler, barkod tabloları ve palet boyutları için resmi PDF kataloğumuzu inceleyin.',
    downloadButton: 'REFLEX Kataloğunu İndir (PDF)',
    pdfNotice: 'Resmi PDF Dokümanı · 6.8 MB · Tüm teknik özellikleri içerir.',

    rfqTitle: 'Ticari Teklif Talebinde Bulunun',
    rfqLead: 'İthalatçı ve distribütörler: İhtiyaç duyduğunuz adet ve teslimat ülkesini paylaşarak teklif alın.',
    formLabels: {
      name: 'Ad Soyad / Yetkili Kişi',
      email: 'Kurumsal E-Posta',
      phone: 'Telefon / WhatsApp',
      company: 'Şirket Adı & İthalatçı Statüsü',
      country: 'Hedef Teslim Ülkesi',
      product: 'Seçilen REFLEX Ürün Grubu',
      volume: 'Tahmini Miktar / Palet',
      notes: 'Incoterms ve Özel Şartlar',
      submit: 'Teklif Talebini Gönder',
      successMessage: 'Talebiniz kaydedildi. İhracat ekibimiz şartlarınızı değerlendirerek iletişime geçecektir.'
    }
  },

  en: {
    metaTitle: 'B2B REFLEX Disposable Gloves Sourcing | CTSEG Medical',
    metaDescription: 'CTSEG supplies the REFLEX disposable glove portfolio (TPE, Examination, Vinyl, Copolymer) to importers and distributors across Europe, the Balkans and global markets.',
    eyebrow: 'Medical & Protective Gloves Portfolio',
    heroTitle: 'REFLEX Disposable Gloves for Medical, Industrial and Food Applications',
    heroLead: 'CTSEG provides bulk export supply of high-capacity nitrile examination gloves, latex-free TPE, thermo vinyl, and copolymer disposable gloves backed by batch quality documentation for international distributors, healthcare institutions, and industrial procurement buyers.',
    heroBadges: ['Product-specific verification', 'Batch document review', 'Bulk B2B supply', 'Export coordination'],
    ctaQuote: 'Request a Quote',
    ctaCatalog: 'Download Official Catalogue (PDF)',
    ctaProducts: 'View Products',

    aboutEyebrow: 'Production Capacity & Standards',
    aboutTitle: 'High-Volume Manufacturing & Standards Compliance',
    aboutText1: 'Manufactured in Istanbul, Türkiye, REFLEX utilizes high-tech automated production lines operating 24/7. Using quality raw materials and special TPE formulations, REFLEX produces medical examination and industrial protection gloves.',
    aboutText2: 'Available standards, certificates and laboratory documents are reviewed against the selected product, producer, batch and destination market before any commercial decision.',
    aboutRoleTitle: 'CTSEG Commercial Services',
    aboutRoleText: 'CTSEG acts as the international trade and sourcing partner for REFLEX products. We assist importers and distributors with export documentation, certificates of analysis (COA) and transport logistics.',
    aboutMarketsTitle: 'Target Markets',
    aboutMarketsList: ['European Union & UK', 'Balkan Countries', 'Middle East', 'North Africa', 'Global Importers'],

    categoriesTitle: 'REFLEX Product Portfolio',
    categoriesLead: 'Explore the full range of REFLEX protective and examination gloves.',

    categories: [
      {
        id: 'flex-hitech',
        name: 'FLEX Hi-Tech Hybrid TPE Gloves',
        subtitle: 'Next-Generation Hybrid Technology',
        description: 'Cost-effective alternative to latex and nitrile. Soft texture, high elasticity and powder-free construction.',
        material: 'TPE (Thermoplastic Elastomer)',
        variants: 'Black, Blue, Clear | Sizes: S, M, L, XL',
        packing: '100 pcs / box, 20 boxes / carton',
        image: '/images/reflex/flex-hi-tech-main.jpg',
        badges: ['Latex Free', 'Powder Free', 'Food Safe']
      },
      {
        id: 'medilex-exam',
        name: 'MEDILEX Examination Gloves (Healthy Touch)',
        subtitle: 'Medical Examination & Healthcare Contact',
        description: 'Non-sterile examination gloves engineered for clinical examinations and healthcare environments.',
        material: 'Medical Polymer / TPE Blend',
        variants: 'Green, Pink, Blue, Black | Sizes: S, M, L/XL',
        packing: '100 pcs / box, 20 boxes / carton',
        image: '/images/reflex/reflex-cat6.jpg',
        badges: ['Product documents reviewed', 'Destination-market review', 'Non-sterile']
      },
      {
        id: 'winlyex-thermo-vinyl',
        name: 'WINLYEX Extra Thermo Vinyl Gloves',
        subtitle: 'Extra Thick & Durable Protection',
        description: 'Extra thick thermo vinyl formulation providing high chemical resistance and a 70% reduced carbon footprint.',
        material: 'Thermo Vinyl Compound',
        variants: 'Purple, Green, Clear, Pink | Sizes: S, M, L/XL',
        packing: '100 pcs / box, 20 boxes / carton',
        image: '/images/reflex/reflex-cat5.jpg',
        badges: ['Extra Strong', 'Carbon Savings', 'High Barrier']
      },
      {
        id: 'slimfit-copolymer',
        name: 'SLIMFIT Copolymer Sensitive Gloves',
        subtitle: 'Breathable & Anti-Sweat Technology',
        description: 'Engineered with breathable technology to prevent hand perspiration while maintaining tactile sensitivity.',
        material: 'Powder-Free Copolymer',
        variants: 'Black, Blue, Cream | Sizes: S, M, L/XL',
        packing: '100 pcs / box, 20 boxes / carton',
        image: '/images/reflex/reflex-cat8.jpg',
        badges: ['Breathable', 'Anti-Sweat', 'Recyclable']
      },
      {
        id: 'winlyex-powder-free',
        name: 'WINLYEX Powder-Free Gloves',
        subtitle: 'Clean & Odor-Free Hygienic Glove',
        description: 'Standard protective gloves to prevent soiling and odor transfer during food handling and cleaning.',
        material: 'Powder-Free TPE',
        variants: 'White | Sizes: S, M, L/XL',
        packing: '100 pcs / box, 20 boxes / carton',
        image: '/images/reflex/reflex-cat4.jpg',
        badges: ['Powder-Free', 'Odor Barrier', 'Multi-Purpose']
      },
      {
        id: 'florex-multipurpose',
        name: 'FLOREX Multi-Purpose Gloves',
        subtitle: 'Elastic Design & Soft Texture',
        description: 'Practical multi-purpose gloves for household use, catering and general hygiene.',
        material: 'Elastic Polymer Blend',
        variants: 'Clear, Blue, Black, Cream | Sizes: S, M, L/XL',
        packing: '100 pcs / box, 20 boxes / carton',
        image: '/images/reflex/reflex-cat5.jpg',
        badges: ['Soft Texture', 'Multi-Surface', 'Economical']
      },
      {
        id: 'flex-kids',
        name: 'FLEX Clear Kids Gloves',
        subtitle: 'Special Kids Size (Ages 3-9)',
        description: 'Safe latex-free clear gloves designed for children’s painting, school crafts and food contact.',
        material: 'Latex-Free TPE',
        variants: 'Clear | Standard Kids Size (Ages 3-9)',
        packing: '50 pcs / box, 40 boxes / carton',
        image: '/images/reflex/reflex-cat3.jpg',
        badges: ['For Children', 'Ages 3-9', 'Food Safe']
      }
    ],

    applicationsTitle: 'Application Areas',
    applicationsLead: 'Medical, food and industrial-use claims are reviewed against the available documents for the selected product, producer, batch and destination market.',

    applications: [
      {
        title: 'Medical & Healthcare Services',
        description: 'Suitability for clinical examinations, patient care and laboratories is confirmed against the selected model and destination-market documents.',
        image: '/images/reflex/slider-ortax4.jpg'
      },
      {
        title: 'Food Processing & Catering',
        description: 'Direct food-contact suitability is confirmed against the selected product and destination-market documents.',
        image: '/images/reflex/slider-ortax1.jpg'
      },
      {
        title: 'Personal Care & Beauty',
        description: 'Hand protection against dyes and chemicals in beauty salons and hygiene settings.',
        image: '/images/reflex/slider-ortax2.jpg'
      },
      {
        title: 'Home, Gardening & Cleaning',
        description: 'Durable protection for commercial cleaning, agriculture and facility maintenance.',
        image: '/images/reflex/reflex-cat4.jpg'
      }
    ],

    galleryTitle: 'Quality & Technology Gallery',
    galleryLead: 'Overview of REFLEX packaging, production and available quality documents; technical scope is confirmed for the selected product and batch.',

    galleryItems: [
      {
        title: 'TPE environmental attributes · verified by document',
        tag: 'Environment',
        image: '/images/reflex/reflex-sliderx1.jpg',
        imageMobile: '/images/reflex/reflex-sliderx1-m.jpg'
      },
      {
        title: 'Breathable Copolymer Technology',
        tag: 'Ergonomics',
        image: '/images/reflex/reflex-slider1.jpg',
        imageMobile: '/images/reflex/reflex-slider1-m.jpg'
      },
      {
        title: 'Production capacity · verified on request',
        tag: 'Manufacturing',
        image: '/images/reflex/slider-ortax1.jpg'
      },
      {
        title: 'Packaging Lines in Esenyurt Facility',
        tag: 'Plant',
        image: '/images/reflex/reflex-slider2.jpg',
        imageMobile: '/images/reflex/reflex-slider2-m.jpg'
      }
    ],

    downloadTitle: 'Download Official REFLEX Product Catalogue',
    downloadLead: 'Review technical data, barcode tables and pallet dimensions in our official PDF catalogue.',
    downloadButton: 'Download REFLEX Catalogue (PDF)',
    pdfNotice: 'Official PDF document · 6.8 MB · Contains complete specifications.',

    rfqTitle: 'Request a Commercial Offer',
    rfqLead: 'Importers and distributors: share your estimated quantities and destination country for a quote.',
    formLabels: {
      name: 'Full Name / Contact Person',
      email: 'Corporate E-Mail',
      phone: 'Phone / WhatsApp',
      company: 'Company Name & Importer Status',
      country: 'Destination Country',
      product: 'Selected REFLEX Product Group',
      volume: 'Estimated Quantity / Pallets',
      notes: 'Incoterms & Special Notes',
      submit: 'Submit Quote Request',
      successMessage: 'Your request has been registered. Our export team will evaluate your specifications.'
    }
  },

  de: {
    metaTitle: 'B2B REFLEX Einweg- & Untersuchungshandschuhe | CTSEG Medical',
    metaDescription: 'CTSEG liefert das REFLEX Handschuh-Portfolio (TPE, Untersuchung, Vinyl, Copolymer) an Importeure und Händler in Europa und weltweit.',
    eyebrow: 'Medizin- & Schutzhandschuh-Portfolio',
    heroTitle: 'REFLEX Einweg- & Untersuchungshandschuhe',
    heroLead: 'Hochleistungs-Handschuhlösungen aus TPE, Thermovinyl und Copolymer für internationale Importeure und Großabnehmer.',
    heroBadges: ['Produktspezifische Prüfung', 'Chargen-Dokumentenprüfung', 'B2B-Großmengenversorgung', 'Exportkoordination'],
    ctaQuote: 'Angebot Anfragen',
    ctaCatalog: 'Katalog Herunterladen (PDF)',
    ctaProducts: 'Produkte Ansehen',

    aboutEyebrow: 'Produktionskapazität & Standards',
    aboutTitle: 'Großserienfertigung & Normenkonformität',
    aboutText1: 'Hergestellt in Istanbul, Türkei, verwendet REFLEX hochtechnologische automatisierte Produktionslinien im 24/7-Betrieb. Aus hochwertigen Rohstoffen und TPE-Rezepturen entstehen medizinische Untersuchungs- und Schutzhandschuhe.',
    aboutText2: 'Verfügbare Normen, Zertifikate und Labordokumente werden vor einer kommerziellen Entscheidung für Produkt, Hersteller, Charge und Zielmarkt geprüft.',
    aboutRoleTitle: 'CTSEG Handelsdienstleistungen',
    aboutRoleText: 'CTSEG agiert als internationaler Handels- und Beschaffungspartner für REFLEX-Produkte. Wir unterstützen Importeure bei Exportdokumenten, Analysenzertifikaten (COA) und Transportlogistik.',
    aboutMarketsTitle: 'Zielmärkte',
    aboutMarketsList: ['Europäische Union & UK', 'Balkanstaaten', 'Naher Osten', 'Nordafrika', 'Globale Importeure'],

    categoriesTitle: 'REFLEX Produktportfolio',
    categoriesLead: 'Entdecken Sie das vollständige Sortiment an REFLEX Schutz- und Untersuchungshandschuhen.',

    categories: [
      {
        id: 'flex-hitech',
        name: 'FLEX Hi-Tech Hybrid TPE-Handschuhe',
        subtitle: 'Hybrid-Technologie der nächsten Generation',
        description: 'Kostengünstige Alternative zu Latex und Nitril. Weiche Textur, hohe Elastizität und puderfrei.',
        material: 'TPE (Thermoplastisches Elastomer)',
        variants: 'Schwarz, Blau, Transparent | Größen: S, M, L, XL',
        packing: '100 Stk. / Box, 20 Boxen / Karton',
        image: '/images/reflex/flex-hi-tech-main.jpg',
        badges: ['Latexfrei', 'Puderfrei', 'Lebensmittelecht']
      },
      {
        id: 'medilex-exam',
        name: 'MEDILEX Untersuchungshandschuhe (Healthy Touch)',
        subtitle: 'Medizinische Untersuchung & Gesundheitspflege',
        description: 'Unsterile Untersuchungshandschuhe für klinische Untersuchungen und medizinische Umgebungen.',
        material: 'Medizinische Polymer- / TPE-Mischung',
        variants: 'Grün, Rosa, Blau, Schwarz | Größen: S, M, L/XL',
        packing: '100 Stk. / Box, 20 Boxen / Karton',
        image: '/images/reflex/reflex-cat6.jpg',
        badges: ['Produktdokumente geprüft', 'Zielmarktprüfung', 'Unsteril']
      },
      {
        id: 'winlyex-thermo-vinyl',
        name: 'WINLYEX Extra Thermovinyl-Handschuhe',
        subtitle: 'Extra dick & starker Schutz',
        description: 'Extra dicke Thermovinyl-Rezeptur mit hoher chemischer Beständigkeit und 70% reduziertem CO2-Fußabdruck.',
        material: 'Thermovinyl-Verbindung',
        variants: 'Violett, Grün, Transparent, Rosa | Größen: S, M, L/XL',
        packing: '100 Stk. / Box, 20 Boxen / Karton',
        image: '/images/reflex/reflex-cat5.jpg',
        badges: ['Extra Stark', 'CO2-Ersparnis', 'Hohe Barriere']
      },
      {
        id: 'slimfit-copolymer',
        name: 'SLIMFIT Copolymer Sensitiv-Handschuhe',
        subtitle: 'Atmungsaktive & schweißhemmende Technologie',
        description: 'Entwickelt mit atmungsaktiver Technologie gegen Handperspiration bei hoher Tastempfindlichkeit.',
        material: 'Puderfreies Copolymer',
        variants: 'Schwarz, Blau, Creme | Größen: S, M, L/XL',
        packing: '100 Stk. / Box, 20 Boxen / Karton',
        image: '/images/reflex/reflex-cat8.jpg',
        badges: ['Atmungsaktiv', 'Schweißfrei', 'Recycelbar']
      },
      {
        id: 'winlyex-powder-free',
        name: 'WINLYEX Puderfreie Handschuhe',
        subtitle: 'Sauber & Geruchsfrei',
        description: 'Standard-Schutzhandschuhe zur Vermeidung von Schmutz und Gerüchen bei Lebensmittelverarbeitung und Reinigung.',
        material: 'Puderfreies TPE',
        variants: 'Weiß | Größen: S, M, L/XL',
        packing: '100 Stk. / Box, 20 Boxen / Karton',
        image: '/images/reflex/reflex-cat4.jpg',
        badges: ['Puderfrei', 'Geruchsbarriere', 'Mehrzweck']
      },
      {
        id: 'florex-multipurpose',
        name: 'FLOREX Mehrzweck-Handschuhe',
        subtitle: 'Elastisches Design & Weiche Textur',
        description: 'Vielseitige Mehrzweckhandschuhe für Haushalt, Gastronomie und allgemeine Reinigung.',
        material: 'Elastische Polymermischung',
        variants: 'Transparent, Blau, Schwarz, Creme | Größen: S, M, L/XL',
        packing: '100 Stk. / Box, 20 Boxen / Karton',
        image: '/images/reflex/reflex-cat5.jpg',
        badges: ['Weiche Textur', 'Mehrzweck', 'Wirtschaftlich']
      },
      {
        id: 'flex-kids',
        name: 'FLEX Transparente Kinderhandschuhe',
        subtitle: 'Spezielle Kindergröße (3-9 Jahre)',
        description: 'Sichere, latexfreie Kinderhandschuhe für Malen, Schule und lebensmittelechten Umgang.',
        material: 'Latexfreies TPE',
        variants: 'Transparent | Standard-Kindergröße (3-9 Jahre)',
        packing: '50 Stk. / Box, 40 Boxen / Karton',
        image: '/images/reflex/reflex-cat3.jpg',
        badges: ['Für Kinder', '3-9 Jahre', 'Lebensmittelecht']
      }
    ],

    applicationsTitle: 'Anwendungsbereiche',
    applicationsLead: 'Aussagen zur medizinischen, Lebensmittel- und industriellen Nutzung werden anhand der verfügbaren Dokumente für Produkt, Hersteller, Charge und Zielmarkt geprüft.',

    applications: [
      {
        title: 'Medizin & Gesundheit',
        description: 'Die Eignung für klinische Untersuchungen, Patientenpflege und Laboratorien wird anhand der Dokumente des gewählten Modells und Zielmarkts bestätigt.',
        image: '/images/reflex/slider-ortax4.jpg'
      },
      {
        title: 'Lebensmittelverarbeitung & Gastronomie',
        description: 'Die Eignung für direkten Lebensmittelkontakt wird anhand der Dokumente des gewählten Produkts und Zielmarkts bestätigt.',
        image: '/images/reflex/slider-ortax1.jpg'
      },
      {
        title: 'Pflege & Hygiene',
        description: 'Schutz für Hände vor Farben und Chemikalien in Kosmetiksalons und Hygienebereichen.',
        image: '/images/reflex/slider-ortax2.jpg'
      },
      {
        title: 'Haushalt, Garten & Reinigung',
        description: 'Strapazierfähiger Schutz für gewerbliche Reinigung, Landwirtschaft und Wartung.',
        image: '/images/reflex/reflex-cat4.jpg'
      }
    ],

    galleryTitle: 'Galerie für Qualität & Technologie',
    galleryLead: 'Übersicht über REFLEX-Verpackungen, Produktion und verfügbare Qualitätsdokumente; der technische Umfang wird für Produkt und Charge bestätigt.',

    galleryItems: [
      {
        title: 'Umwelteigenschaften von TPE · dokumentenbasiert geprüft',
        tag: 'Umwelt',
        image: '/images/reflex/reflex-sliderx1.jpg',
        imageMobile: '/images/reflex/reflex-sliderx1-m.jpg'
      },
      {
        title: 'Atmungsaktive Copolymer-Technologie',
        tag: 'Ergonomie',
        image: '/images/reflex/reflex-slider1.jpg',
        imageMobile: '/images/reflex/reflex-slider1-m.jpg'
      },
      {
        title: 'Produktionskapazität · auf Anfrage geprüft',
        tag: 'Fertigung',
        image: '/images/reflex/slider-ortax1.jpg'
      },
      {
        title: 'Verpackungslinien in Esenyurt',
        tag: 'Werk',
        image: '/images/reflex/reflex-slider2.jpg',
        imageMobile: '/images/reflex/reflex-slider2-m.jpg'
      }
    ],

    downloadTitle: 'Offiziellen REFLEX Produktkatalog herunterladen',
    downloadLead: 'Technische Daten, Barcode-Tabellen und Palettenmaße im offiziellen PDF-Katalog.',
    downloadButton: 'REFLEX Katalog herunterladen (PDF)',
    pdfNotice: 'Offizielles PDF-Dokument · 6.8 MB · Enthält vollständige Spezifikationen.',

    rfqTitle: 'Kommerzielles Angebot anfragen',
    rfqLead: 'Importeure und Händler: Senden Sie Mengen und Zielland für eine kaufmännische Bewertung.',
    formLabels: {
      name: 'Vollständiger Name / Ansprechpartner',
      email: 'Geschäftliche E-Mail',
      phone: 'Telefon / WhatsApp',
      company: 'Firmenname & Importeur-Status',
      country: 'Bestimmungsland',
      product: 'Gewählte REFLEX Produktgruppe',
      volume: 'Geschätzte Menge / Paletten',
      notes: 'Hinweise zu Incoterms & Spezifikationen',
      submit: 'Angebotsanfrage absenden',
      successMessage: 'Ihre Anfrage wurde registriert. Unser Exportteam prüft Ihre Angaben.'
    }
  },

  it: {
    metaTitle: 'Guanti Monouso REFLEX Sourcing B2B | CTSEG Medical',
    metaDescription: 'CTSEG fornisce il portfolio di guanti monouso REFLEX (TPE, Esame, Vinile, Copolimero) a importatori e distributori in Europa, Balcani e nel mondo.',
    eyebrow: 'Portfolio Medico e di Protezione',
    heroTitle: 'Guanti Monouso e da Esame REFLEX',
    heroLead: 'Soluzioni ad alta capacità di guanti TPE, da esame, termo vinile e copolimero per importatori e distributori internazionali.',
    heroBadges: ['Verifica specifica del prodotto', 'Revisione documenti di lotto', 'Fornitura B2B in grandi volumi', 'Coordinamento export'],
    ctaQuote: 'Richiedi un Preventivo',
    ctaCatalog: 'Scarica il Catalogo Ufficiale (PDF)',
    ctaProducts: 'Vedi i Prodotti',

    aboutEyebrow: 'Capacità Produttiva e Standard',
    aboutTitle: 'Produzione ad Alto Volume e Conformità',
    aboutText1: 'Prodotto a Istanbul, Turchia, REFLEX utilizza linee di produzione automatizzate ad alta tecnologia attive 24/7. Utilizzando materie prime di alta qualità e formulazioni speciali TPE, REFLEX produce guanti da esame medico e protezione industriale.',
    aboutText2: 'Norme, certificati e documenti di laboratorio disponibili vengono verificati per prodotto, produttore, lotto e mercato di destinazione prima di ogni decisione commerciale.',
    aboutRoleTitle: 'Servizi Commerciali CTSEG',
    aboutRoleText: 'CTSEG agisce come partner commerciale internazionale per i prodotti REFLEX. Assistiamo importatori e distributori con documenti di esportazione, certificati di analisi (COA) e logistica di trasporto.',
    aboutMarketsTitle: 'Mercati Target',
    aboutMarketsList: ['Unione Europea & UK', 'Paesi Balcanici', 'Medio Oriente', 'Nord Africa', 'Importatori Globali'],

    categoriesTitle: 'Portfolio Prodotti REFLEX',
    categoriesLead: 'Esplora la gamma completa di guanti protettivi e da esame REFLEX.',

    categories: [
      {
        id: 'flex-hitech',
        name: 'Guanti Ibridi FLEX Hi-Tech TPE',
        subtitle: 'Tecnologia Ibrida di Nuova Generazione',
        description: 'Alternativa economica a lattice e nitrile. Morbida struttura, alta elasticità e senza polvere.',
        material: 'TPE (Elastomero Termoplastico)',
        variants: 'Nero, Blu, Bianco | Taglie: S, M, L, XL',
        packing: '100 pz / scatola, 20 scatole / cartone',
        image: '/images/reflex/flex-hi-tech-main.jpg',
        badges: ['Senza Lattice', 'Senza Polvere', 'Uso Alimentare']
      },
      {
        id: 'medilex-exam',
        name: 'Guanti da Esame MEDILEX (Healthy Touch)',
        subtitle: 'Esame Medico e Contatto Sanitario',
        description: 'Guanti da esame non sterili per esami clinici e ambienti sanitari.',
        material: 'Miscela di Polimero Medico / TPE',
        variants: 'Verde, Rosa, Blu, Nero | Taglie: S, M, L/XL',
        packing: '100 pz / scatola, 20 scatole / cartone',
        image: '/images/reflex/reflex-cat6.jpg',
        badges: ['Documenti del prodotto verificati', 'Verifica del mercato', 'Non sterile']
      },
      {
        id: 'winlyex-thermo-vinyl',
        name: 'Guanti Thermo Vinile WINLYEX Extra',
        subtitle: 'Protezione Extra Spessa e Resistente',
        description: 'Formulazione vinile thermo extra spessa con elevata resistenza chimica e impronta di carbonio ridotta del 70%.',
        material: 'Composto Thermo Vinile',
        variants: 'Viola, Verde, Trasparente, Rosa | Taglie: S, M, L/XL',
        packing: '100 pz / scatola, 20 scatole / cartone',
        image: '/images/reflex/reflex-cat5.jpg',
        badges: ['Extra Forte', 'Risparmio Carbonio', 'Alta Barriera']
      },
      {
        id: 'slimfit-copolymer',
        name: 'Guanti Sensibili in Copolimero SLIMFIT',
        subtitle: 'Tecnologia Traspirante e Anti-Sudore',
        description: 'Progettati con tecnologia traspirante per evitare la sudorazione delle mani mantenendo la sensibilità tattile.',
        material: 'Copolimero Senza Polvere',
        variants: 'Nero, Blu, Crema | Taglie: S, M, L/XL',
        packing: '100 pz / scatola, 20 scatole / cartone',
        image: '/images/reflex/reflex-cat8.jpg',
        badges: ['Traspirante', 'Anti-Sudore', 'Riciclabile']
      },
      {
        id: 'winlyex-powder-free',
        name: 'Guanti Senza Polvere WINLYEX',
        subtitle: 'Guanto Igienico Senza Odore',
        description: 'Guanti protettivi standard per evitare imbrattamenti e odori durante la preparazione di cibo e la pulizia.',
        material: 'TPE Senza Polvere',
        variants: 'Bianco | Taglie: S, M, L/XL',
        packing: '100 pz / scatola, 20 scatole / cartone',
        image: '/images/reflex/reflex-cat4.jpg',
        badges: ['Senza Polvere', 'Barriera Odore', 'Multiuso']
      },
      {
        id: 'florex-multipurpose',
        name: 'Guanti Multiuso FLOREX',
        subtitle: 'Design Elastico e Texture Morbida',
        description: 'Guanti pratici multiuso per uso domestico, ristorazione e igiene generale.',
        material: 'Miscela di Polimeri Elastici',
        variants: 'Trasparente, Blu, Nero, Crema | Taglie: S, M, L/XL',
        packing: '100 pz / scatola, 20 scatole / cartone',
        image: '/images/reflex/reflex-cat5.jpg',
        badges: ['Texture Morbida', 'Multisuperficie', 'Economico']
      },
      {
        id: 'flex-kids',
        name: 'Guanti Trasparenti per Bambini FLEX',
        subtitle: 'Taglia Speciale Bambini (3-9 Anni)',
        description: 'Guanti trasparenti senza lattice sicuri per disegno, attività scolastiche e contatto alimentare dei bambini.',
        material: 'TPE Senza Lattice',
        variants: 'Trasparente | Taglia Standard Bambino (3-9 Anni)',
        packing: '50 pz / scatola, 40 scatole / cartone',
        image: '/images/reflex/reflex-cat3.jpg',
        badges: ['Per Bambini', '3-9 Anni', 'Uso Alimentare']
      }
    ],

    applicationsTitle: 'Settori di Applicazione',
    applicationsLead: 'Le indicazioni per uso medico, alimentare e industriale vengono verificate sui documenti disponibili per prodotto, produttore, lotto e mercato di destinazione.',

    applications: [
      {
        title: 'Medicina e Sanità',
        description: 'Esami clinici, cura dei pazienti e laboratori secondo CE 2841 e EN ISO 374-5.',
        image: '/images/reflex/slider-ortax4.jpg'
      },
      {
        title: 'Lavorazione Alimentare e Ristorazione',
        description: 'Certificati per il contatto diretto con gli alimenti in cucine commerciali e industrie alimentari.',
        image: '/images/reflex/slider-ortax1.jpg'
      },
      {
        title: 'Cura Personale ed Estetica',
        description: 'Protezione delle mani da tinte e prodotti chimici nei saloni di bellezza.',
        image: '/images/reflex/slider-ortax2.jpg'
      },
      {
        title: 'Casa, Giardinaggio e Pulizia',
        description: 'Protezione resistente per pulizia professionale, agricoltura e manutenzione.',
        image: '/images/reflex/reflex-cat4.jpg'
      }
    ],

    galleryTitle: 'Galleria Qualità e Tecnologia',
    galleryLead: 'Panoramica su imballaggi, produzione e documenti qualità disponibili; l’ambito tecnico viene confermato per prodotto e lotto.',

    galleryItems: [
      {
        title: 'TPE 100% Riciclabile ed Ecologico',
        tag: 'Ambiente',
        image: '/images/reflex/reflex-sliderx1.jpg',
        imageMobile: '/images/reflex/reflex-sliderx1-m.jpg'
      },
      {
        title: 'Tecnologia in Copolimero Traspirante',
        tag: 'Ergonomia',
        image: '/images/reflex/reflex-slider1.jpg',
        imageMobile: '/images/reflex/reflex-slider1-m.jpg'
      },
      {
        title: 'Produzione Turca Certificata ad Alta Capacità',
        tag: 'Fabbricazione',
        image: '/images/reflex/slider-ortax1.jpg'
      },
      {
        title: 'Linee di Imballaggio a Esenyurt',
        tag: 'Stabilimento',
        image: '/images/reflex/reflex-slider2.jpg',
        imageMobile: '/images/reflex/reflex-slider2-m.jpg'
      }
    ],

    downloadTitle: 'Scarica il Catalogo Ufficiale REFLEX',
    downloadLead: 'Consulta dettagli tecnici, tabelle codici a barre e dimensioni dei pallet nel catalogo PDF.',
    downloadButton: 'Scarica Catalogo REFLEX (PDF)',
    pdfNotice: 'Documento PDF ufficiale · 6.8 MB · Contiene specifiche complete.',

    rfqTitle: 'Richiedi un Preventivo Commerciale',
    rfqLead: 'Importatori e distributori: invia quantità e Paese di destinazione per una valutazione commerciale.',
    formLabels: {
      name: 'Nome Completo / Persona di Contatto',
      email: 'E-mail Aziendale',
      phone: 'Telefono / WhatsApp',
      company: 'Nome Azienda & Stato Importatore',
      country: 'Paese di Destinazione',
      product: 'Gruppo Prodotti REFLEX Selezionato',
      volume: 'Quantità Stimata / Pallet',
      notes: 'Note su Incoterms & Specifiche',
      submit: 'Invia Richiesta di Preventivo',
      successMessage: 'La tua richiesta è stata registrata. Il nostro team export valuterà le tue specifiche.'
    }
  },

  fa: {
    metaTitle: 'تأمین عمده دستکش‌های یک‌بارمصرف REFLEX | صادرات CTSEG Medical',
    metaDescription: 'شرکت CTSEG سبد کامل دستکش‌های یک‌بارمصرف REFLEX (TPE، معاینه، وینیل، کوپلیمر) را برای واردکنندگان و توزیع‌کنندگان بین‌المللی تأمین می‌کند.',
    eyebrow: 'سبد دستکش‌های پزشکی و حفاظتی',
    heroTitle: 'تأمین عمده دستکش‌های یک‌بارمصرف REFLEX برای کاربردهای پزشکی، صنعتی و غذایی',
    heroLead: 'CTSEG خدمات تأمین و صادرات عمده دستکش‌های معاینه نیتریل، TPE بدون لاتکس، ترمو وینیل و کدوپلیمر یک‌بارمصرف را همراه با اسناد کیفیت محموله برای توزیع‌کنندگان بین‌المللی، مراکز درمانی و خریداران شرکتی ارائه می‌دهد.',
    heroBadges: ['بررسی اختصاصی محصول', 'بررسی اسناد محموله', 'تأمین عمده B2B', 'هماهنگی صادرات'],
    ctaQuote: 'درخواست استعلام قیمت',
    ctaCatalog: 'دانلود کاتالوگ رسمی (PDF)',
    ctaProducts: 'مشاهده محصولات',

    aboutEyebrow: 'ظرفیت تولید و استانداردهای کیفی',
    aboutTitle: 'تولید با حجم بالا و انطباق کامل با استانداردها',
    aboutText1: 'محصولات REFLEX در استانبول ترکیه با خطوط اتوماتیک پیشرفته و به صورت ۲۴/۷ تولید می‌شوند. با استفاده از مواد اولیه باکیفیت و فرمولاسیون ویژه TPE، دستکش‌های معاینه پزشکی و ایمنی صنعتی به بازار عرضه می‌گردد.',
    aboutText2: 'استانداردها، گواهی‌ها و اسناد آزمایشگاهی موجود پیش از هر تصمیم تجاری برای محصول، تولیدکننده، محموله و بازار مقصد بررسی می‌شوند.',
    aboutRoleTitle: 'خدمات بازرگانی CTSEG',
    aboutRoleText: 'شرکت CTSEG به عنوان شریک تجاری و تأمین‌کننده بین‌المللی محصولات REFLEX عمل می‌کند. ما اسناد صادراتی، گواهی آنالیز (COA) و امور logistics ترابری را برای واردکنندگان هماهنگ می‌نماییم.',
    aboutMarketsTitle: 'بازارهای هدف',
    aboutMarketsList: ['اتحادیه اروپا و بریتانیا', 'کشورهای بالکان', 'خاورمیانه', 'شمال آفریقا', 'واردکنندگان بین‌المللی'],

    categoriesTitle: 'سبد محصولات REFLEX',
    categoriesLead: 'مجموعه کامل دستکش‌های ایمنی و معاینه REFLEX را بررسی فرمایید.',

    categories: [
      {
        id: 'flex-hitech',
        name: 'دستکش هیبرید TPE مدل FLEX Hi-Tech',
        subtitle: 'فناوری هیبرید نسل جدید',
        description: 'جایگزین مقرون‌به‌صرفه برای لاتکس و نیتریل. با بافت نرم، کشسانی بالا و بدون پودر.',
        material: 'TPE (الاستومر ترموپلاستیک)',
        variants: 'مشکی، آبی، شفاف | سایزها: S, M, L, XL',
        packing: '۱۰۰ عدد در جعبه، ۲۰ جعبه در کارتن',
        image: '/images/reflex/flex-hi-tech-main.jpg',
        badges: ['بدون لاتکس', 'بدون پودر', 'مناسب صنایع غذایی']
      },
      {
        id: 'medilex-exam',
        name: 'دستکش معاینه MEDILEX (Healthy Touch)',
        subtitle: 'معاینه پزشکی و تماس بهداشتی',
        description: 'دستکش معاینه غیراستریل طراحی‌شده برای معاینات بالینی و مراکز درمانی.',
        material: 'ترکیب پلیمر پزشکی / TPE',
        variants: 'سبز، صورتی، آبی، مشکی | سایزها: S, M, L/XL',
        packing: '۱۰۰ عدد در جعبه، ۲۰ جعبه در کارتن',
        image: '/images/reflex/reflex-cat6.jpg',
        badges: ['بررسی اسناد محصول', 'بررسی بازار مقصد', 'غیراستریل']
      },
      {
        id: 'winlyex-thermo-vinyl',
        name: 'دستکش ترمو وینیل WINLYEX Extra',
        subtitle: 'ضخامت ویژه و مقاومت بالا',
        description: 'فرمولاسیون ترمو وینیل ضخیم با مقاومت شیمیایی بالا و کاهش ۷۰ درصدی ردپای کربن.',
        material: 'ترکیب ترمو وینیل',
        variants: 'بنفش، سبز، شفاف، صورتی | سایزها: S, M, L/XL',
        packing: '۱۰۰ عدد در جعبه، ۲۰ جعبه در کارتن',
        image: '/images/reflex/reflex-cat5.jpg',
        badges: ['مقاومت ویژه', 'کاهش کربن', 'سد حفاظتی بالا']
      },
      {
        id: 'slimfit-copolymer',
        name: 'دستکش کوپلیمر حساس SLIMFIT',
        subtitle: 'فناوری تنفس‌پذیر و ضدتعریق',
        description: 'طراحی‌شده با فناوری تنفس‌پذیر جهت جلوگیری از تعریق دست و حفظ حس لمس دقیق.',
        material: 'کوپلیمر بدون پودر',
        variants: 'مشکی، آبی، کرم | سایزها: S, M, L/XL',
        packing: '۱۰۰ عدد در جعبه، ۲۰ جعبه در کارتن',
        image: '/images/reflex/reflex-cat8.jpg',
        badges: ['تنفس‌پذیر', 'ضدتعریق', 'قابل بازیافت']
      },
      {
        id: 'winlyex-powder-free',
        name: 'دستکش بدون پودر WINLYEX',
        subtitle: 'بهداشتی، تمیز و بدون بو',
        description: 'دستکش محافظ استاندارد جهت جلوگیری از آلودگی و انتقال بو در آماده‌سازی غذا و نظافت.',
        material: 'TPE بدون پودر',
        variants: 'سفید | سایزها: S, M, L/XL',
        packing: '۱۰۰ عدد در جعبه، ۲۰ جعبه در کارتن',
        image: '/images/reflex/reflex-cat4.jpg',
        badges: ['بدون پودر', 'سد بو', 'چندمنظوره']
      },
      {
        id: 'florex-multipurpose',
        name: 'دستکش چندمنظوره FLOREX',
        subtitle: 'طراحی کشسان و بافت نرم',
        description: 'دستکش کاربردی چندمنظوره برای مصارف خانگی، پذیرایی و نظافت عمومی.',
        material: 'ترکیب پلیمر کشسان',
        variants: 'شفاف، آبی، مشکی، کرم | سایزها: S, M, L/XL',
        packing: '۱۰۰ عدد در جعبه، ۲۰ جعبه در کارتن',
        image: '/images/reflex/reflex-cat5.jpg',
        badges: ['بافت نرم', 'چندسطحی', 'مقرون‌به‌صرفه']
      },
      {
        id: 'flex-kids',
        name: 'دستکش شفاف کودک FLEX',
        subtitle: 'سایز اختصاصی کودکان (۳ تا ۹ سال)',
        description: 'دستکش ایمن بدون لاتکس طراحی‌شده برای نقاشی، کاردستی مدرسه و تماس با خوراکی.',
        material: 'TPE بدون لاتکس',
        variants: 'شفاف | سایز استاندارد کودک (۳ تا ۹ سال)',
        packing: '۵۰ عدد در جعبه، ۴۰ جعبه در کارتن',
        image: '/images/reflex/reflex-cat3.jpg',
        badges: ['مخصوص کودکان', '۳ تا ۹ سال', 'مناسب مواد غذایی']
      }
    ],

    applicationsTitle: 'حوزه‌های کاربرد',
    applicationsLead: 'ادعاهای مربوط به کاربرد پزشکی، غذایی و صنعتی بر اساس اسناد موجود برای محصول، تولیدکننده، محموله و بازار مقصد بررسی می‌شوند.',

    applications: [
      {
        title: 'خدمات پزشکی و درمانی',
        description: 'مناسب بودن برای معاینات بالینی، مراقبت از بیمار و آزمایشگاه‌ها بر اساس اسناد مدل منتخب و بازار مقصد تأیید می‌شود.',
        image: '/images/reflex/slider-ortax4.jpg'
      },
      {
        title: 'صنایع غذایی و کترینگ',
        description: 'دارای تأییدیه تماس مستقیم با مواد غذایی در آشپزخانه‌های صنعتی و کارخانجات غذایی.',
        image: '/images/reflex/slider-ortax1.jpg'
      },
      {
        title: 'مراقبت شخصی و زیبایی',
        description: 'محافظت از دست‌ها در برابر رنگ‌ها و مواد شیمیایی در سالن‌های زیبایی و آرایشی.',
        image: '/images/reflex/slider-ortax2.jpg'
      },
      {
        title: 'نظافت خانگی و صنعتی',
        description: 'محافظت با دوام برای نظافت حرفه‌ای، امور کشاورزی و نگهداری تاسیسات.',
        image: '/images/reflex/reflex-cat4.jpg'
      }
    ],

    galleryTitle: 'گالری کیفیت و فناوری',
    galleryLead: 'مروری بر بسته‌بندی، تولید و اسناد کیفیت موجود REFLEX؛ دامنه فنی برای محصول و محموله منتخب تأیید می‌شود.',

    galleryItems: [
      {
        title: 'TPE ۱۰۰٪ قابل بازیافت و زیست‌محیطی',
        tag: 'محیط زیست',
        image: '/images/reflex/reflex-sliderx1.jpg',
        imageMobile: '/images/reflex/reflex-sliderx1-m.jpg'
      },
      {
        title: 'فناوری کوپلیمر تنفس‌پذیر',
        tag: 'ارگونومی',
        image: '/images/reflex/reflex-slider1.jpg',
        imageMobile: '/images/reflex/reflex-slider1-m.jpg'
      },
      {
        title: 'تولید دارای گواهی با ظرفیت بالا در ترکیه',
        tag: 'تولید',
        image: '/images/reflex/slider-ortax1.jpg'
      },
      {
        title: 'خطوط بسته‌بندی در کارخانه اسنیورت',
        tag: 'کارخانه',
        image: '/images/reflex/reflex-slider2.jpg',
        imageMobile: '/images/reflex/reflex-slider2-m.jpg'
      }
    ],

    downloadTitle: 'دانلود کاتالوگ رسمی محصولات REFLEX',
    downloadLead: 'مشخصات فنی، جداول بارکد و ابعاد پالت‌ها را در کاتالوگ رسمی PDF مشاهده فرمایید.',
    downloadButton: 'دانلود کاتالوگ REFLEX (PDF)',
    pdfNotice: 'فایل رسمی PDF · حجم ۶.۸ مگابایت · شامل تمامی مشخصات فنی.',

    rfqTitle: 'درخواست استعلام قیمت تجاری',
    rfqLead: 'واردکنندگان و توزیع‌کنندگان: مقدار مورد نیاز و کشور مقصد را جهت ارزیابی قیمت ارسال فرمایید.',
    formLabels: {
      name: 'نام و نام خانوادگی / مسئول ارتباط',
      email: 'ایمیل کاری / شرکتی',
      phone: 'تلفن / واتس‌اپ',
      company: 'نام شرکت و وضعیت واردات',
      country: 'کشور مقصد تحویل',
      product: 'گروه محصول انتخابی REFLEX',
      volume: 'مقدار تخمینی / تعداد پالت',
      notes: 'توضیحات Incoterms و شرایط ویژه',
      submit: 'ارسال درخواست استعلام',
      successMessage: 'درخواست شما ثبت شد. تیم صادرات CTSEG مشخصات شما را بررسی و پاسخ خواهد داد.'
    }
  },

  ru: {
    metaTitle: 'B2B поставка одноразовых перчаток REFLEX | CTSEG Medical Sourcing',
    metaDescription: 'CTSEG поставляет ассортимент одноразовых перчаток REFLEX (TPE, смотровые, виниловые, кополимерные) международным импортерам и дистрибьюторам.',
    eyebrow: 'Медицинский и защитный ассортимент',
    heroTitle: 'Одноразовые и смотровые перчатки REFLEX',
    heroLead: 'Высокопроизводительные решения для TPE, смотровых, термовиниловых и кополимерных перчаток для международных импортеров и дистрибьюторов.',
    heroBadges: ['Проверка по продукту', 'Проверка документов партии', 'Оптовые B2B-поставки', 'Экспортная координация'],
    ctaQuote: 'Запросить расчет',
    ctaCatalog: 'Скачать официальный каталог (PDF)',
    ctaProducts: 'Смотреть продукцию',

    aboutEyebrow: 'Производственная мощность и стандарты',
    aboutTitle: 'Крупносерийное производство и соответствие стандартам',
    aboutText1: 'Произведенные в Стамбуле (Турция) перчатки REFLEX изготавливаются на автоматизированных высокотехнологичных линиях в режиме 24/7. REFLEX производит медицинские смотровые и гигиенические перчатки.',
    aboutText2: 'Доступные стандарты, сертификаты и лабораторные документы проверяются для продукта, производителя, партии и рынка назначения до коммерческого решения.',
    aboutRoleTitle: 'Коммерческие услуги CTSEG',
    aboutRoleText: 'CTSEG выступает в качестве международного торгового и закупочного партнера продукции REFLEX. Мы содействуем импортерам в подготовке экспортной документации, сертификатов анализа (COA) и логистическом сопровождении.',
    aboutMarketsTitle: 'Целевые рынки',
    aboutMarketsList: ['Европейский Союз и Великобритания', 'Балканские страны', 'Ближний Восток', 'Северная Африка', 'Мировые импортеры'],

    categoriesTitle: 'Ассортимент продукции REFLEX',
    categoriesLead: 'Ознакомьтесь с полным ассортиментом защитных и смотровых перчаток REFLEX.',

    categories: [
      {
        id: 'flex-hitech',
        name: 'Перчатки FLEX Hi-Tech Hybrid TPE',
        subtitle: 'Гибридная технология нового поколения',
        description: 'Экономичная альтернатива латексу и нитрилу. Мягкая текстура, высокая эластичность, без пудры.',
        material: 'TPE (Термопластичный эластомер)',
        variants: 'Черный, Синий, Прозрачный | Размеры: S, M, L, XL',
        packing: '100 шт. / коробка, 20 коробок / упаковка',
        image: '/images/reflex/flex-hi-tech-main.jpg',
        badges: ['Без латекса', 'Без пудры', 'Пищевой стандарт']
      },
      {
        id: 'medilex-exam',
        name: 'Смотровые перчатки MEDILEX (Healthy Touch)',
        subtitle: 'Медицинский осмотр и гигиена',
        description: 'Нестерильные смотровые перчатки для клинических осмотров и медицинских учреждений.',
        material: 'Смесь медицинского полимера / TPE',
        variants: 'Зеленый, Розовый, Синий, Черный | Размеры: S, M, L/XL',
        packing: '100 шт. / коробка, 20 коробок / упаковка',
        image: '/images/reflex/reflex-cat6.jpg',
        badges: ['Проверка документов продукта', 'Проверка рынка назначения', 'Нестерильно']
      },
      {
        id: 'winlyex-thermo-vinyl',
        name: 'Перчатки WINLYEX Extra Термовинил',
        subtitle: 'Утолщенная и прочная защита',
        description: 'Утолщенная термовиниловая формула с высокой химической стойкостью и сниженным на 70% углеродным следом.',
        material: 'Термовиниловое соединение',
        variants: 'Фиолетовый, Зеленый, Прозрачный, Розовый | Размеры: S, M, L/XL',
        packing: '100 шт. / коробка, 20 коробок / упаковка',
        image: '/images/reflex/reflex-cat5.jpg',
        badges: ['Повышенная прочность', 'Экономия CO2', 'Высокий барьер']
      },
      {
        id: 'slimfit-copolymer',
        name: 'Перчатки SLIMFIT Copolymer Чувствительные',
        subtitle: 'Дышащая и анти-потовая технология',
        description: 'Разработаны с дышащей технологией для предотвращения потливости рук при сохранении чувствительности.',
        material: 'Кополимер без пудры',
        variants: 'Черный, Синий, Бежевый | Размеры: S, M, L/XL',
        packing: '100 шт. / коробка, 20 коробок / упаковка',
        image: '/images/reflex/reflex-cat8.jpg',
        badges: ['Дышащие', 'Без пота', 'Перерабатываемые']
      },
      {
        id: 'winlyex-powder-free',
        name: 'Перчатки WINLYEX Без Пудры',
        subtitle: 'Чистые гигиенические перчатки без запаха',
        description: 'Стандартные защитные перчатки для защиты рук от загрязнений и запахов при работе с пищевыми продуктами.',
        material: 'TPE без пудры',
        variants: 'Белый | Размеры: S, M, L/XL',
        packing: '100 шт. / коробка, 20 коробок / упаковка',
        image: '/images/reflex/reflex-cat4.jpg',
        badges: ['Без пудры', 'Защита от запаха', 'Универсальные']
      },
      {
        id: 'florex-multipurpose',
        name: 'Универсальные перчатки FLOREX',
        subtitle: 'Эластичный дизайн и мягкая текстура',
        description: 'Практичные универсальные перчатки для быта, общепита и общей гигиены.',
        material: 'Эластичная полимерная смесь',
        variants: 'Прозрачный, Синий, Черный, Бежевый | Размеры: S, M, L/XL',
        packing: '100 шт. / коробка, 20 коробок / упаковка',
        image: '/images/reflex/reflex-cat5.jpg',
        badges: ['Мягкая текстура', 'Универсальные', 'Экономичные']
      },
      {
        id: 'flex-kids',
        name: 'Детские прозрачные перчатки FLEX',
        subtitle: 'Специальный детский размер (3-9 лет)',
        description: 'Безопасные детские перчатки без латекса для рисования, школы и контакта с пищей.',
        material: 'TPE без латекса',
        variants: 'Прозрачный | Стандартный детский размер (3-9 лет)',
        packing: '50 шт. / коробка, 40 коробок / упаковка',
        image: '/images/reflex/reflex-cat3.jpg',
        badges: ['Для детей', '3-9 лет', 'Пищевой стандарт']
      }
    ],

    applicationsTitle: 'Области применения',
    applicationsLead: 'Заявления о медицинском, пищевом и промышленном применении проверяются по доступным документам продукта, производителя, партии и рынка назначения.',

    applications: [
      {
        title: 'Медицина и здравоохранение',
        description: 'Пригодность для клинических осмотров, ухода за пациентами и лабораторий подтверждается документами выбранной модели и рынка назначения.',
        image: '/images/reflex/slider-ortax4.jpg'
      },
      {
        title: 'Пищевая промышленность и общепит',
        description: 'Сертифицированы для прямого контакта с пищевыми продуктами на пищевых производствах.',
        image: '/images/reflex/slider-ortax1.jpg'
      },
      {
        title: 'Личная гигиена и уход',
        description: 'Защита рук от красок и химикатов в салонах красоты и сфере гигиены.',
        image: '/images/reflex/slider-ortax2.jpg'
      },
      {
        title: 'Дом, сад и уборка',
        description: 'Прочная защита для профессиональной уборки, сельского хозяйства и обслуживания.',
        image: '/images/reflex/reflex-cat4.jpg'
      }
    ],

    galleryTitle: 'Галерея качества и технологий',
    galleryLead: 'Обзор упаковки, производства и доступных документов качества REFLEX; технический охват подтверждается для продукта и партии.',

    galleryItems: [
      {
        title: 'Экологические характеристики TPE · проверяются по документам',
        tag: 'Экология',
        image: '/images/reflex/reflex-sliderx1.jpg',
        imageMobile: '/images/reflex/reflex-sliderx1-m.jpg'
      },
      {
        title: 'Дышащая кополимерная технология',
        tag: 'Эргономика',
        image: '/images/reflex/reflex-slider1.jpg',
        imageMobile: '/images/reflex/reflex-slider1-m.jpg'
      },
      {
        title: 'Сертифицированное турецкое производство',
        tag: 'Производство',
        image: '/images/reflex/slider-ortax1.jpg'
      },
      {
        title: 'Упаковочные линии в Эсеньюрте',
        tag: 'Завод',
        image: '/images/reflex/reflex-slider2.jpg',
        imageMobile: '/images/reflex/reflex-slider2-m.jpg'
      }
    ],

    downloadTitle: 'Скачать официальный каталог продукции REFLEX',
    downloadLead: 'Технические данные, таблицы штрихкодов и параметры паллет в официальном PDF-каталоге.',
    downloadButton: 'Скачать каталог REFLEX (PDF)',
    pdfNotice: 'Официальный PDF-документ · 6.8 МБ · Содержит полные спецификации.',

    rfqTitle: 'Запросить коммерческое предложение',
    rfqLead: 'Импортеры и дистрибьюторы: отправьте объем и страну назначения для получения коммерческой оценки.',
    formLabels: {
      name: 'Полное имя / Контактное лицо',
      email: 'Рабочий E-mail',
      phone: 'Телефон / WhatsApp',
      company: 'Название компании и статус импортера',
      country: 'Страна назначения',
      product: 'Выбранная группа продукции REFLEX',
      volume: 'Ориентировочный объем / паллеты',
      notes: 'Примечания по Incoterms и спецификациям',
      submit: 'Отправить запрос предложения',
      successMessage: 'Ваш запрос зарегистрирован. Наш отдел экспорта рассмотрит ваши спецификации.'
    }
  },

  sq: {
    metaTitle: 'Furnizim B2B me Doreza Njëpërdorimëshe REFLEX | CTSEG Sourcing Mjekësor',
    metaDescription: 'CTSEG furnizon portofolin e dorezave njëpërdorimëshe REFLEX (TPE, Ekzaminimi, Vinil, Kopolimer) për importuesit dhe shpërndarësit në Evropë, Ballkan dhe botë.',
    eyebrow: 'Portofoli Mjekësor dhe Mbrojtës',
    heroTitle: 'Doreza Njëpërdorimëshe dhe Ekzaminimi REFLEX',
    heroLead: 'Zgjidhje me kapacitet të lartë të dorezave TPE, ekzaminimi, termo vinil dhe kopolimer për importuesit dhe distributerët ndërkombëtarë.',
    heroBadges: ['Certifikuar CE 2841 & ISO 9001', 'TPE 100% i Reciklueshëm', 'I Sigurt për Ushqim dhe Mjekësi', 'Mbështetje Logjistike Eksporti'],
    ctaQuote: 'Kërkoni Oferta',
    ctaCatalog: 'Shkarkoni Katalogun Zyrtar (PDF)',
    ctaProducts: 'Shikoni Produktet',

    aboutEyebrow: 'Kapaciteti i Prodhimit & Standardet',
    aboutTitle: 'Prodhim në Vëllim të Madh dhe Pajtueshmëri me Standardet',
    aboutText1: 'E prodhuar në Stamboll, Turqi, REFLEX përdor linja prodhimi të automatizuara të teknologjisë së lartë që punojnë 24/7. Duke përdorur lëndë të parë cilësore dhe formulime speciale TPE, REFLEX prodhon doreza mjekësore dhe mbrojtëse industriale.',
    aboutText2: 'Standardet, certifikatat dhe dokumentet laboratorike të disponueshme kontrollohen për produktin, prodhuesin, lotin dhe tregun e synuar para vendimit tregtar.',
    aboutRoleTitle: 'Shërbimet Komerciale CTSEG',
    aboutRoleText: 'CTSEG vepron si partner tregtar dhe furnizues ndërkombëtar për produktet REFLEX. Ne ndihmojmë importuesit me dokumentacionin e eksportit, certifikatat e analizës (COA) dhe logjistikën e transportit.',
    aboutMarketsTitle: 'Tregjet Synuar',
    aboutMarketsList: ['Bashkimi Evropian & Mbretëria e Bashkuar', 'Vendet e Ballkanit', 'Lindja e Mesme', 'Afrika e Veriut', 'Importuesit Globalë'],

    categoriesTitle: 'Portofoli i Produkteve REFLEX',
    categoriesLead: 'Eksploroni gamën e plotë të dorezave mbrojtëse dhe ekzaminuese REFLEX.',

    categories: [
      {
        id: 'flex-hitech',
        name: 'Doreza Hibride FLEX Hi-Tech TPE',
        subtitle: 'Teknologji Hibride e Gjeneratës së Re',
        description: 'Alternativë ekonomike ndaj lateksit dhe nitrilit. Strukturë e butë, fleksibilitet i lartë dhe pa pluhur.',
        material: 'TPE (Elastomer Termoplastik)',
        variants: 'E Zezë, E Kaltër, Transparente | Madhësitë: S, M, L, XL',
        packing: '100 copë / kuti, 20 kuti / karton',
        image: '/images/reflex/flex-hi-tech-main.jpg',
        badges: ['Pa Lateks', 'Pa Pluhur', 'Për Ushqim']
      },
      {
        id: 'medilex-exam',
        name: 'Doreza Ekzaminimi MEDILEX (Healthy Touch)',
        subtitle: 'Ekzaminim Mjekësor dhe Kujdes Shëndetësor',
        description: 'Doreza ekzaminimi jo-sterile të projektuara për kontrolle klinike dhe mjedise shëndetësore.',
        material: 'Përzierje Polimer Mjekësor / TPE',
        variants: 'E Gjelbër, Rozë, E Kaltër, E Zezë | Madhësitë: S, M, L/XL',
        packing: '100 copë / kuti, 20 kuti / karton',
        image: '/images/reflex/reflex-cat6.jpg',
        badges: ['Verifikim sipas produktit', 'Kontroll i tregut të synuar', 'Jo sterile']
      },
      {
        id: 'winlyex-thermo-vinyl',
        name: 'Doreza Termo Vinil WINLYEX Extra',
        subtitle: 'Mbrojtje Extra e Trashë dhe e Qëndrueshme',
        description: 'Formulim termo vinil extra i trashë me rezistencë të lartë kimike dhe 70% më pak gjurmë karboni.',
        material: 'Përbërje Termo Vinil',
        variants: 'Vjollcë, E Gjelbër, Transparente, Rozë | Madhësitë: S, M, L/XL',
        packing: '100 copë / kuti, 20 kuti / karton',
        image: '/images/reflex/reflex-cat5.jpg',
        badges: ['Extra e Fortë', 'Kursim Karboni', 'Barierë e Lartë']
      },
      {
        id: 'slimfit-copolymer',
        name: 'Doreza Sensible Kopolimer SLIMFIT',
        subtitle: 'Teknologji që Merr Frymë dhe Kundër Djerrosjes',
        description: 'Zhvilluar me teknologji që merr frymë për të parandaluar djerrosjen e duarve duke ruajtur ndjeshmërinë me prekje.',
        material: 'Kopolimer Pa Pluhur',
        variants: 'E Zezë, E Kaltër, Krem | Madhësitë: S, M, L/XL',
        packing: '100 copë / kuti, 20 kuti / karton',
        image: '/images/reflex/reflex-cat8.jpg',
        badges: ['Merr Frymë', 'Pa Djerrosje', 'E Reciklueshme']
      },
      {
        id: 'winlyex-powder-free',
        name: 'Doreza Pa Pluhur WINLYEX',
        subtitle: 'Dorezë Higjienike e Pastër dhe Pa Era',
        description: 'Doreza mbrojtëse standarde për të parandaluar ndotjen dhe aromat gjatë përgatitjes së ushqimit dhe pastrimit.',
        material: 'TPE Pa Pluhur',
        variants: 'E Bardhë | Madhësitë: S, M, L/XL',
        packing: '100 copë / kuti, 20 kuti / karton',
        image: '/images/reflex/reflex-cat4.jpg',
        badges: ['Pa Pluhur', 'Barierë Arome', 'Shumëpërdorimëshe']
      },
      {
        id: 'florex-multipurpose',
        name: 'Doreza Shumëpërdorimëshe FLOREX',
        subtitle: 'Dizajn Elastik dhe Strukturë e Butë',
        description: 'Doreza praktike shumëpërdorimëshe për përdorim shtëpiak, shërbime ushqimore dhe higjienë të përgjithshme.',
        material: 'Përzierje Polimeri Elastik',
        variants: 'Transparente, E Kaltër, E Zezë, Krem | Madhësitë: S, M, L/XL',
        packing: '100 copë / kuti, 20 kuti / karton',
        image: '/images/reflex/reflex-cat5.jpg',
        badges: ['Strukturë e Butë', 'Shumë sipërfaqe', 'Ekonomike']
      },
      {
        id: 'flex-kids',
        name: 'Doreza Transparente për Fëmijë FLEX',
        subtitle: 'Madhësi Speciale për Fëmijë (3-9 Vjeç)',
        description: 'Doreza transparente pa lateks të sigurta për vizatim, aktivitete shkollore dhe kontakt me ushqimin.',
        material: 'TPE Pa Lateks',
        variants: 'Transparente | Madhësi Standarde Fëmijësh (3-9 Vjeç)',
        packing: '50 copë / kuti, 40 kuti / karton',
        image: '/images/reflex/reflex-cat3.jpg',
        badges: ['Për Fëmijë', '3-9 Vjeç', 'Për Ushqim']
      }
    ],

    applicationsTitle: 'Fusha të Përdorimit',
    applicationsLead: 'Dorezat REFLEX janë të certifikuara për kërkesa mjekësore, ushqimore dhe industriale.',

    applications: [
      {
        title: 'Mjekësi dhe Kujdes Shëndetësor',
        description: 'Përshtatshmëria për kontrolle klinike, kujdes pacientësh dhe laboratorë konfirmohet sipas dokumenteve të modelit dhe tregut të synuar.',
        image: '/images/reflex/slider-ortax4.jpg'
      },
      {
        title: 'Përpunim Ushqimi dhe Gastronomi',
        description: 'Certifikuar për kontakt të drejtpërdrejtë me ushqimin në kuzhinat industriale dhe fabrikë ushqimi.',
        image: '/images/reflex/slider-ortax1.jpg'
      },
      {
        title: 'Kujdes Personal dhe Bukuri',
        description: 'Mbrojtje e duarve kundër bojërave dhe kimikateve në parukeri dhe sallone bukurie.',
        image: '/images/reflex/slider-ortax2.jpg'
      },
      {
        title: 'Shtëpi, Kopshtari dhe Pastrim',
        description: 'Mbrojtje e qëndrueshme për pastrim profesional, bujqësi dhe mirëmbajtje.',
        image: '/images/reflex/reflex-cat4.jpg'
      }
    ],

    galleryTitle: 'Galeria e Cilësisë dhe Teknologjisë',
    galleryLead: 'Pamje nga paketimi, certifikatat dhe teknologjitë ekologjike REFLEX.',

    galleryItems: [
      {
        title: 'TPE 100% i Reciklueshëm Ekologjik',
        tag: 'Mjedisi',
        image: '/images/reflex/reflex-sliderx1.jpg',
        imageMobile: '/images/reflex/reflex-sliderx1-m.jpg'
      },
      {
        title: 'Teknologji Kopolimer që Merr Frymë',
        tag: 'Ergonomia',
        image: '/images/reflex/reflex-slider1.jpg',
        imageMobile: '/images/reflex/reflex-slider1-m.jpg'
      },
      {
        title: 'Prodhim Turk i Certifikuar me Kapacitet të Lartë',
        tag: 'Prodhimi',
        image: '/images/reflex/slider-ortax1.jpg'
      },
      {
        title: 'Linjat e Paketimit në Esenyurt',
        tag: 'Fabrika',
        image: '/images/reflex/reflex-slider2.jpg',
        imageMobile: '/images/reflex/reflex-slider2-m.jpg'
      }
    ],

    downloadTitle: 'Shkarkoni Katalogun Zyrtar REFLEX',
    downloadLead: 'Detaje teknike, tabela me barkod dhe përmasat e paletave në katalogun zyrtar PDF.',
    downloadButton: 'Shkarkoni Katalogun REFLEX (PDF)',
    pdfNotice: 'Dokument zyrtar PDF · 6.8 MB · Përmban specifikimet e plota.',

    rfqTitle: 'Kërkoni Oferta Komerciale',
    rfqLead: 'Importues dhe shpërndarës: dërgoni sasitë e parashikuara dhe shtetin e destinacionit për vlerësim.',
    formLabels: {
      name: 'Emri i Plotë / Personi i Kontaktit',
      email: 'E-mail Zyrtar',
      phone: 'Telefon / WhatsApp',
      company: 'Emri i Kompanisë & Statusi i Importuesit',
      country: 'Shteti i Destinacionit',
      product: 'Grupi i Zgjedhur i Produkteve REFLEX',
      volume: 'Sasia e Parashikuar / Paleta',
      notes: 'Shënime mbi Incoterms & Specifikimet',
      submit: 'Dërgoni Kërkesën për Oferta',
      successMessage: 'Kërkesa juaj u regjistrua. Ekipi ynë i eksportit do të vlerësojë specifikimet tuaja.'
    }
  },

  mk: {
    metaTitle: 'B2B Набавка на Еднократни Ракавици REFLEX | CTSEG Медицински Сорсинг',
    metaDescription: 'CTSEG го испорачува портфолиото на еднократни ракавици REFLEX (TPE, медицински за преглед, винил, кополимер) до меѓународни увозници и дистрибутери.',
    eyebrow: 'Медицинско и Заштитно Портфолио',
    heroTitle: 'REFLEX Еднократни и Ракавици за Преглед',
    heroLead: 'Решенија со висок капацитет за TPE, медицински, термо-винил и кополимерни ракавици за меѓународни увозници и дистрибутери.',
    heroBadges: ['Сертифицирано CE 2841 & ISO 9001', '100% Рециклирачки TPE', 'Безбедно за Храна и Медицина', 'Поддршка за Извозна Логистика'],
    ctaQuote: 'Побарајте Понуда',
    ctaCatalog: 'Преземете го Официјалниот Каталог (PDF)',
    ctaProducts: 'Видете ги Производите',

    aboutEyebrow: 'Производен Капацитет и Стандарди',
    aboutTitle: 'Производство во Голем Обем и Усогласеност со Стандардите',
    aboutText1: 'Произведени во Истанбул, Турција, REFLEX користи високотехнолошки автоматизирани производни линии кои работат 24/7. Користејќи квалитетни суровини и специјални TPE формулации, REFLEX произведува медицински и индустриски заштитни ракавици.',
    aboutText2: 'Производствените капацитети ги исполнуваат стандардите на акредитирани лаборатории со сертификати CE 2841, EN ISO 374-1 Type C, EN 420+A1, EN ISO 374-5 (Заштита од вируси) и ISO 9001.',
    aboutRoleTitle: 'Трговски Услуги на CTSEG',
    aboutRoleText: 'CTSEG делува како меѓународен трговски и набавен партнер за производите на REFLEX. Им помагаме на увозниците со извозна документација, сертификати за анализа (COA) и транспортна логистика.',
    aboutMarketsTitle: 'Целни Пазари',
    aboutMarketsList: ['Европска Унија & Обединето Кралство', 'Балкански Земји', 'Блиски Исток', 'Северна Африка', 'Глобални Увозници'],

    categoriesTitle: 'Портфолио на Производи REFLEX',
    categoriesLead: 'Истражете го целосниот асортиман на заштитни и медицински ракавици REFLEX.',

    categories: [
      {
        id: 'flex-hitech',
        name: 'FLEX Hi-Tech Хибридни TPE Ракавици',
        subtitle: 'Хибридна Технологија од Нова Генерација',
        description: 'Економична алтернатива за латекс и нитрил. Мека текстура, висока еластичност и без пудра.',
        material: 'TPE (Термопластичен Еластомер)',
        variants: 'Црна, Сина, Проѕирна | Големини: S, M, L, XL',
        packing: '100 парчиња / кутија, 20 кутии / картон',
        image: '/images/reflex/flex-hi-tech-main.jpg',
        badges: ['Без Латекс', 'Без Пудра', 'За Храна']
      },
      {
        id: 'medilex-exam',
        name: 'MEDILEX Ракавици за Преглед (Healthy Touch)',
        subtitle: 'Медицински Преглед и Здравствена Заштита',
        description: 'Нестерилни ракавици за преглед дизајнирани за клинички прегледи и медицински установи.',
        material: 'Медицинска Полимер / TPE Мешавина',
        variants: 'Зелена, Розова, Сина, Црна | Големини: S, M, L/XL',
        packing: '100 парчиња / кутија, 20 кутии / картон',
        image: '/images/reflex/reflex-cat6.jpg',
        badges: ['Проверка по продукту', 'Проверка рынка назначения', 'Нестерильно']
      },
      {
        id: 'winlyex-thermo-vinyl',
        name: 'WINLYEX Extra Термо Винил Ракавици',
        subtitle: 'Екстра Дебела & Издржлива Заштита',
        description: 'Екстра дебела формулација од термо винил со висока хемиска отпорност и 70% намален јаглероден отпечаток.',
        material: 'Термо Винил Соединение',
        variants: 'Виолетова, Зелена, Проѕирна, Розова | Големини: S, M, L/XL',
        packing: '100 парчиња / кутија, 20 кутии / картон',
        image: '/images/reflex/reflex-cat5.jpg',
        badges: ['Екстра Силни', 'Заштеда на Јаглерод', 'Висока Бариера']
      },
      {
        id: 'slimfit-copolymer',
        name: 'SLIMFIT Кополимер Сензитивни Ракавици',
        subtitle: 'Технологија што Дише и Против Потење',
        description: 'Развиени со технологија што дише за спречување на потењето на рацете при зачувување на чувствителноста.',
        material: 'Кополимер Без Пудра',
        variants: 'Црна, Сина, Крем | Големини: S, M, L/XL',
        packing: '100 парчиња / кутија, 20 кутии / картон',
        image: '/images/reflex/reflex-cat8.jpg',
        badges: ['Дишат', 'Без Потење', 'Се Рециклираат']
      },
      {
        id: 'winlyex-powder-free',
        name: 'WINLYEX Ракавици Без Пудра',
        subtitle: 'Чиста и Хигиенска Ракавица Без Мирис',
        description: 'Стандардни заштитни ракавици за спречување контаминација и мириси при подготовка на храна и чистење.',
        material: 'TPE Без Пудра',
        variants: 'Бела | Големини: S, M, L/XL',
        packing: '100 парчиња / кутија, 20 кутии / картон',
        image: '/images/reflex/reflex-cat4.jpg',
        badges: ['Без Пудра', 'Бариера за Мирис', 'Повеќенаменски']
      },
      {
        id: 'florex-multipurpose',
        name: 'FLOREX Повеќенаменски Ракавици',
        subtitle: 'Еластичен Дизајн и Мека Текстура',
        description: 'Практични повеќенаменски ракавици за домаќинство, угостителство и општа хигиена.',
        material: 'Еластична Полимерна Мешавина',
        variants: 'Проѕирна, Сина, Црна, Крем | Големини: S, M, L/XL',
        packing: '100 парчиња / кутија, 20 кутии / картон',
        image: '/images/reflex/reflex-cat5.jpg',
        badges: ['Мека Текстура', 'За Повеќе Површини', 'Економични']
      },
      {
        id: 'flex-kids',
        name: 'FLEX Проѕирни Детски Ракавици',
        subtitle: 'Специјална Големина за Деца (3-9 Години)',
        description: 'Безбедни ракавици без латекс дизајнирани за детско цртање, училишни активности и контакт со храна.',
        material: 'TPE Без Латекс',
        variants: 'Проѕирна | Стандардна Детска Големина (3-9 Години)',
        packing: '50 парчиња / кутија, 40 кутии / картон',
        image: '/images/reflex/reflex-cat3.jpg',
        badges: ['За Деца', '3-9 Години', 'За Храна']
      }
    ],

    applicationsTitle: 'Области на Примена',
    applicationsLead: 'Ракавиците REFLEX се сертифицирани за медицински, прехранбени и индустриски барања.',

    applications: [
      {
        title: 'Медицина и Здравство',
        description: 'Соодветноста за клинички прегледи, грижа за пациенти и лаборатории се потврдува според документите за избраниот модел и целниот пазар.',
        image: '/images/reflex/slider-ortax4.jpg'
      },
      {
        title: 'Преработка на Храна и Угостителство',
        description: 'Сертифицирани за директен контакт со храна во комерцијални кујни и прехранбени погони.',
        image: '/images/reflex/slider-ortax1.jpg'
      },
      {
        title: 'Лична Нега и Убавина',
        description: 'Заштита на рацете од бои и хемикалии во козметички и фризерски салони.',
        image: '/images/reflex/slider-ortax2.jpg'
      },
      {
        title: 'Дом, Градинарство и Чистење',
        description: 'Издржлива заштита за професионално чистење, земјоделство и одржување.',
        image: '/images/reflex/reflex-cat4.jpg'
      }
    ],

    galleryTitle: 'Галерија на Квалитет и Технологија',
    galleryLead: 'Преглед на пакувања, сертификати и еколошки технологии REFLEX.',

    galleryItems: [
      {
        title: '100% Рециклирачки Еколошки TPE',
        tag: 'Животна Средина',
        image: '/images/reflex/reflex-sliderx1.jpg',
        imageMobile: '/images/reflex/reflex-sliderx1-m.jpg'
      },
      {
        title: 'Кополимерна Технологија што Дише',
        tag: 'Ергономија',
        image: '/images/reflex/reflex-slider1.jpg',
        imageMobile: '/images/reflex/reflex-slider1-m.jpg'
      },
      {
        title: 'Сертифицирано Турско Производство со Висок Капацитет',
        tag: 'Производство',
        image: '/images/reflex/slider-ortax1.jpg'
      },
      {
        title: 'Линии за Пакување во Есењурт',
        tag: 'Фабрика',
        image: '/images/reflex/reflex-slider2.jpg',
        imageMobile: '/images/reflex/reflex-slider2-m.jpg'
      }
    ],

    downloadTitle: 'Преземете го Официјалниот Каталог на REFLEX',
    downloadLead: 'Технички детали, табели со баркодови и димензии на палети во официјалниот PDF каталог.',
    downloadButton: 'Преземете го REFLEX Каталогот (PDF)',
    pdfNotice: 'Официјален PDF документ · 6.8 MB · Ги содржи сите спецификации.',

    rfqTitle: 'Побарајте Трговска Понуда',
    rfqLead: 'Увозници и дистрибутери: испратете ги проценетите количини и дестинацијата за понуда.',
    formLabels: {
      name: 'Целосно Име / Лице за Контакт',
      email: 'Службен Е-пошта',
      phone: 'Телефон / WhatsApp',
      company: 'Име на Компанијата & Статус на Увозник',
      country: 'Земја на Дестинација',
      product: 'Избрана Група Производи REFLEX',
      volume: 'Проценета Количина / Палети',
      notes: 'Забелешки за Incoterms & Спецификации',
      submit: 'Испратете Барање за Понуда',
      successMessage: 'Вашето барање е регистрирано. Нашиот извозен тим ќе ги разгледа вашите спецификации.'
    }
  },

  sr: {
    metaTitle: 'B2B Nabavka Jednokratnih Rukavica REFLEX | CTSEG Medicinski Sourcing',
    metaDescription: 'CTSEG isporučuje portfolio jednokratnih rukavica REFLEX (TPE, pregledne, vinil, kopolimer) uvoznicima i distributerima širom Evrope, Balkana i sveta.',
    eyebrow: 'Medicinski i Zaštitni Portfolio',
    heroTitle: 'REFLEX Jednokratne i Pregledne Rukavice',
    heroLead: 'Rešenja visokog kapaciteta za TPE, pregledne, termo-vinil i kopolimer rukavice za međunarodne uvoznike i distributere.',
    heroBadges: ['Sertifikovano CE 2841 & ISO 9001', '100% Reciklirajući TPE', 'Bezbedno za Hranu i Medicinu', 'Podrška za Izvoznu Logistiku'],
    ctaQuote: 'Zatražite Ponudu',
    ctaCatalog: 'Preuzmite Zvanični Katalog (PDF)',
    ctaProducts: 'Pogledajte Proizvode',

    aboutEyebrow: 'Proizvodni Kapacitet i Standardi',
    aboutTitle: 'Proizvodnja u Velikom Obimu i Usaglašenost sa Standardima',
    aboutText1: 'Proizvedene u Istanbulu, Turska, REFLEX koristi visokotehnološke automatizovane proizvodne linije koje rade 24/7. Koristeći kvalitetne sirovine i specijalne TPE formulacije, REFLEX proizvodi medicinske pregledne i industrijske zaštitne rukavice.',
    aboutText2: 'Dostupni standardi, sertifikati i laboratorijska dokumentacija proveravaju se za proizvod, proizvođača, partiju i ciljano tržište pre komercijalne odluke.',
    aboutRoleTitle: 'Komercijalne Usluge CTSEG-a',
    aboutRoleText: 'CTSEG deluje kao međunarodni trgovinski i nabavni partner za proizvode REFLEX. Pomažemo uvoznicima sa izvoznom dokumentacijom, sertifikatima analize (COA) i transportnom logistikom.',
    aboutMarketsTitle: 'Ciljna Tržišta',
    aboutMarketsList: ['Evropska Unija & Velika Britanija', 'Balkanske Zemlje', 'Bliski Istok', 'Severna Afrika', 'Globalni Uvoznici'],

    categoriesTitle: 'Portfolio Proizvoda REFLEX',
    categoriesLead: 'Istražite kompletan asortiman zaštitnih i preglednih rukavica REFLEX.',

    categories: [
      {
        id: 'flex-hitech',
        name: 'FLEX Hi-Tech Hibridne TPE Rukavice',
        subtitle: 'Hibridna Tehnologija Nove Generacije',
        description: 'Ekonomična alternativa za lateks i nitril. Meka tekstura, visoka elastičnost i bez pudera.',
        material: 'TPE (Termoplastični Elastomer)',
        variants: 'Crna, Plava, Providna | Veličine: S, M, L, XL',
        packing: '100 kom. / kutija, 20 kutija / karton',
        image: '/images/reflex/flex-hi-tech-main.jpg',
        badges: ['Bez Lateksa', 'Bez Pudera', 'Za Hranu']
      },
      {
        id: 'medilex-exam',
        name: 'MEDILEX Pregledne Rukavice (Healthy Touch)',
        subtitle: 'Medicinski Pregled i Zdravstvena Zaštita',
        description: 'Nesterilne pregledne rukavice dizajnirane za kliničke preglede i medicinske ustanove.',
        material: 'Medicinska Polimer / TPE Mešavina',
        variants: 'Zelena, Roze, Plava, Crna | Veličine: S, M, L/XL',
        packing: '100 kom. / kutija, 20 kutija / karton',
        image: '/images/reflex/reflex-cat6.jpg',
        badges: ['Provjera dokumentacije proizvoda', 'Provjera ciljnog tržišta', 'Nesterilno']
      },
      {
        id: 'winlyex-thermo-vinyl',
        name: 'WINLYEX Extra Termo Vinil Rukavice',
        subtitle: 'Ekstra Debela & Izdržljiva Zaštita',
        description: 'Ekstra debela formulacija od termo vinila sa visokom hemijskom otpornošću i 70% smanjenim ugljeničnim otiskom.',
        material: 'Termo Vinil Sastav',
        variants: 'Ljubičasta, Zelena, Providna, Roze | Veličine: S, M, L/XL',
        packing: '100 kom. / kutija, 20 kutija / karton',
        image: '/images/reflex/reflex-cat5.jpg',
        badges: ['Ekstra Jake', 'Ušteda Ugljenika', 'Visoka Barijera']
      },
      {
        id: 'slimfit-copolymer',
        name: 'SLIMFIT Kopolimer Senzitivne Rukavice',
        subtitle: 'Tehnologija koja Diše i Protiiv Znojenja',
        description: 'Razvijene sa tehnologijom koja diše ради sprečavanja znojenja ruku uz očuvanje osetljivosti na dodir.',
        material: 'Kopolimer Bez Pudera',
        variants: 'Crna, Plava, Krem | Veličine: S, M, L/XL',
        packing: '100 kom. / kutija, 20 kutija / karton',
        image: '/images/reflex/reflex-cat8.jpg',
        badges: ['Dišu', 'Bez Znojenja', 'Recikliraju se']
      },
      {
        id: 'winlyex-powder-free',
        name: 'WINLYEX Rukavice Bez Pudera',
        subtitle: 'Čista i Higijenska Rukavica Bez Mirisa',
        description: 'Standardne zaštitne rukavice za sprečavanje kontaminacije i mirisa tokom pripreme hrane i čišćenja.',
        material: 'TPE Bez Pudera',
        variants: 'Bela | Veličine: S, M, L/XL',
        packing: '100 kom. / kutija, 20 kutija / karton',
        image: '/images/reflex/reflex-cat4.jpg',
        badges: ['Bez Pudera', 'Barijera za Miris', 'Višenamenske']
      },
      {
        id: 'florex-multipurpose',
        name: 'FLOREX Višenamenske Rukavice',
        subtitle: 'Elastičan Dizajn i Meka Tekstura',
        description: 'Praktične višenamenske rukavice za domaćinstvo, ugostiteljstvo i opštu higijenu.',
        material: 'Elastična Polimerna Mešavina',
        variants: 'Providna, Plava, Crna, Krem | Veličine: S, M, L/XL',
        packing: '100 kom. / kutija, 20 kutija / karton',
        image: '/images/reflex/reflex-cat5.jpg',
        badges: ['Meka Tekstura', 'Više Površina', 'Ekonomične']
      },
      {
        id: 'flex-kids',
        name: 'FLEX Providne Dečije Rukavice',
        subtitle: 'Specijalna Veličina za Decu (3-9 Godina)',
        description: 'Bezbedne rukavice bez lateksa dizajnirane za dečije crtanje, školske aktivnosti i kontakt sa hranom.',
        material: 'TPE Bez Lateksa',
        variants: 'Providna | Standardna Dečija Veličina (3-9 Godina)',
        packing: '50 kom. / kutija, 40 kutija / karton',
        image: '/images/reflex/reflex-cat3.jpg',
        badges: ['Za Decu', '3-9 Godina', 'Za Hranu']
      }
    ],

    applicationsTitle: 'Oblasti Primene',
    applicationsLead: 'Tvrdnje o medicinskoj, prehrambenoj i industrijskoj upotrebi proveravaju se prema dostupnoj dokumentaciji proizvoda, proizvođača, partije i ciljanog tržišta.',

    applications: [
      {
        title: 'Medicina i Zdravstvo',
        description: 'Pogodnost za kliničke preglede, negu pacijenata i laboratorije potvrđuje se prema dokumentaciji izabranog modela i ciljanog tržišta.',
        image: '/images/reflex/slider-ortax4.jpg'
      },
      {
        title: 'Prerada Hrane i Ugostiteljstvo',
        description: 'Sertifikovane za direktan kontakt sa hranom u komercijalnim kuhinjama i prehrambenim pogonima.',
        image: '/images/reflex/slider-ortax1.jpg'
      },
      {
        title: 'Lična Nega i Lepota',
        description: 'Zaštita ruku od boja i hemikalija u kozmetičkim i frizerskim salonima.',
        image: '/images/reflex/slider-ortax2.jpg'
      },
      {
        title: 'Dom, Baštovanstvo i Čišćenje',
        description: 'Izdržljiva zaštita za profesionalno čišćenje, poljoprivredu i održavanje.',
        image: '/images/reflex/reflex-cat4.jpg'
      }
    ],

    galleryTitle: 'Galerija Kvaliteta i Tehnologije',
    galleryLead: 'Pregled pakovanja, sertifikata i ekoloških tehnologija REFLEX.',

    galleryItems: [
      {
        title: '100% Reciklirajući Ekološki TPE',
        tag: 'Životna Sredina',
        image: '/images/reflex/reflex-sliderx1.jpg',
        imageMobile: '/images/reflex/reflex-sliderx1-m.jpg'
      },
      {
        title: 'Kopolimerna Tehnologija koja Diše',
        tag: 'Ergonomija',
        image: '/images/reflex/reflex-slider1.jpg',
        imageMobile: '/images/reflex/reflex-slider1-m.jpg'
      },
      {
        title: 'Sertifikovana Turska Proizvodnja Visokog Kapaciteta',
        tag: 'Proizvodnja',
        image: '/images/reflex/slider-ortax1.jpg'
      },
      {
        title: 'Linije za Pakovanje u Esenjurtu',
        tag: 'Fabrika',
        image: '/images/reflex/reflex-slider2.jpg',
        imageMobile: '/images/reflex/reflex-slider2-m.jpg'
      }
    ],

    downloadTitle: 'Preuzmite Zvanični Katalog REFLEX',
    downloadLead: 'Tehnički detalji, tabele sa barkodovima i dimenzije paleta u zvaničnom PDF katalogu.',
    downloadButton: 'Preuzmite REFLEX Katalog (PDF)',
    pdfNotice: 'Zvanični PDF dokument · 6.8 MB · Sadrži kompletne specifikacije.',

    rfqTitle: 'Zatražite Komercijalnu Ponudu',
    rfqLead: 'Uvoznici i distributeri: pošaljite procenjene količine i zemlju destinacije za ponudu.',
    formLabels: {
      name: 'Puno Ime / Osoba za Kontakt',
      email: 'Službeni E-mail',
      phone: 'Telefon / WhatsApp',
      company: 'Naziv Kompanije & Status Uvoznika',
      country: 'Zemlja Destinacije',
      product: 'Izabrana Grupa Proizvoda REFLEX',
      volume: 'Procenjena Količina / Palete',
      notes: 'Napomene o Incoterms & Specifikacijama',
      submit: 'Pošaljite Zahtev za Ponudu',
      successMessage: 'Vaš zahtev je zabeležen. Naš izvozni tim će razmotriti vaše specifikacije.'
    }
  },
  zh: {
    metaTitle: 'B2B REFLEX 医用与工业级一次性防护手套大宗采购供应 | CTSEG 医疗防护',
    metaDescription: 'CTSEG 为全球买家、分销商与医疗机构提供土耳其 REFLEX 一次性防护手套大宗直供（包括混合 TPE、医用检查、热塑性乙烯基与共聚物手套），附带完整批次质检单证与出口协调。',
    eyebrow: '医用检查与工业级一次性防护手套矩阵',
    heroTitle: 'REFLEX 医用检查与一次性防护手套大宗直供',
    heroLead: 'CTSEG 为全球分销商、医疗机构与工业企业提供高产能丁腈检查手套、无乳胶 TPE、热塑性乙烯基（Thermo Vinyl）及共聚物一次性手套大宗出口直供与逐批次合规质检单证支持。',
    heroBadges: ['单证逐批核验', '批次报告核查', 'B2B 大宗集采', '国际出口物流协调'],
    ctaQuote: '索取正式报价',
    ctaCatalog: '下载产品手册 (PDF)',
    ctaProducts: '查阅完整产品系列',

    aboutEyebrow: '现代化生产产能与国际标准',
    aboutTitle: '自动化规模化生产与严苛合规标准',
    aboutText1: 'REFLEX 系列产品在伊斯坦布尔现代化生产基地制造，配备 24/7 全天候运转的高精度自动化流水线。采用高纯度原材料与专利级 TPE 配方，生产符合医用检查与工业级防护标准的专业手套。',
    aboutText2: '在做出商业决策前，我们将根据指定产品、生产工厂、具体批次与目标市场准入要求，全面核对现行有效认证、检测报告与实验室检验单证。',
    aboutRoleTitle: 'CTSEG 商业协同定位',
    aboutRoleText: 'CTSEG 作为 REFLEX 手套面向国际市场的专业战略采购与贸易协调伙伴，为海外进口商提供出口单证整理、出厂检验分析报告 (COA) 审核与全流程物流协同支持。',
    aboutMarketsTitle: '重点交付市场',
    aboutMarketsList: ['欧盟与英国', '巴尔干地区', '中东与海湾地区', '北非与地中海沿岸', '全球大宗进口商'],

    categoriesTitle: 'REFLEX 医用与防护手套产品矩阵',
    categoriesLead: '查阅针对不同行业应用场景、卫生级别与防护强度定制的 REFLEX 手套全系产品。',

    categories: [
      {
        id: 'flex-hitech',
        name: 'FLEX Hi-Tech 混合 TPE 防护手套',
        subtitle: '新一代高弹性混合工艺',
        description: '乳胶与丁腈的高性价比替代方案。触感柔软、高延展性、无粉配方。',
        material: 'TPE（热塑性弹性体）',
        variants: '黑色、蓝色、透明 | 尺码：S, M, L, XL',
        packing: '100 只/盒，20 盒/箱 (70 箱/托盘)',
        image: '/images/reflex/flex-hi-tech-main.jpg',
        badges: ['无乳胶', '无粉配方', '食品接触级']
      },
      {
        id: 'medilex-exam',
        name: 'MEDILEX 医用检查手套 (Healthy Touch)',
        subtitle: '临床检查与医疗健康防护',
        description: '专为临床检查及医疗卫生环境研发的非灭菌检查手套。',
        material: '医用级聚合物 / TPE 复合配方',
        variants: '绿色、粉色、蓝色、黑色 | 尺码：S, M, L/XL',
        packing: '100 只/盒，20 盒/箱 (70 箱/托盘)',
        image: '/images/reflex/reflex-cat6.jpg',
        badges: ['单证逐项核验', '按目标市场合规评估', '非无菌级']
      },
      {
        id: 'winlyex-thermo-vinyl',
        name: 'WINLYEX Extra 加厚热塑性乙烯基手套',
        subtitle: '加厚耐用型与化学防护',
        description: '具备出色的耐化学飞溅性能，全生命周期碳足迹降低 70% 的加厚乙烯基复合配方。',
        material: '热塑性乙烯基复合材料 (Thermo Vinyl)',
        variants: '紫色、绿色、透明、粉色 | 尺码：S, M, L/XL',
        packing: '100 只/盒，20 盒/箱 (70 箱/托盘)',
        image: '/images/reflex/reflex-cat5.jpg',
        badges: ['加厚抗撕裂', '低碳环保', '高阻隔防护']
      },
      {
        id: 'slimfit-copolymer',
        name: 'SLIMFIT 共聚物高灵敏度防护手套',
        subtitle: '透气防汗与高触觉灵敏度',
        description: '兼顾精细触感与防手汗透气结构，适用于精密装配与精细操作。',
        material: '无粉共聚物树脂 (Copolymer)',
        variants: '黑色、蓝色、米白 | 尺码：S, M, L/XL',
        packing: '100 只/盒，20 盒/箱 (70 箱/托盘)',
        image: '/images/reflex/reflex-cat8.jpg',
        badges: ['透气防汗', '高灵敏触觉', '超薄贴合']
      },
      {
        id: 'winlyex-powder-free',
        name: 'WINLYEX 无粉医用检查级手套',
        subtitle: '医用与高洁净度无粉标准',
        description: '表面微麻处理，提供优异湿滑抓握力与可靠的生物及液体阻隔屏障。',
        material: '医用级无粉复合配方',
        variants: '蓝色、白色、薄荷绿 | 尺码：S, M, L, XL',
        packing: '100 只/盒，20 盒/箱 (70 箱/托盘)',
        image: '/images/reflex/reflex-cat4.jpg',
        badges: ['无粉处理', '防滑微麻面', '医用检查级']
      },
      {
        id: 'florex-multipurpose',
        name: 'FLOREX 多用途大宗商业手套',
        subtitle: '多领域通用经济型解决方案',
        description: '适用于食品加工、餐饮服务、轻工业保洁及大宗商业流通的高性价比防护手套。',
        material: '高性价比多用途聚合物',
        variants: '透明、蓝色、黄色 | 尺码：通用均码 / S, M, L',
        packing: '100 只/盒，20 盒/箱 (70 箱/托盘)',
        image: '/images/reflex/reflex-cat5.jpg',
        badges: ['经济耐用', '食品接触级', '多领域通用']
      },
      {
        id: 'reflex-vinyl',
        name: 'REFLEX 经典乙烯基防护手套',
        subtitle: '高韧性经典合成防护',
        description: '标准工业与日常卫生防护手套，具备出色的抗拉伸韧性与舒适穿戴体验。',
        material: '优质合成乙烯基 (PVC)',
        variants: '透明、蓝色 | 尺码：S, M, L, XL',
        packing: '100 只/盒，20 盒/箱 (70 箱/托盘)',
        image: '/images/reflex/reflex-cat3.jpg',
        badges: ['无乳胶致敏', '高抗拉伸', '防静电']
      }
    ],

    applicationsTitle: '广泛覆盖各大核心工业与卫生领域',
    applicationsLead: '从高卫生标准的医疗临床到大通量食品加工与工业洁净防护。',
    applications: [
      {
        title: '医疗卫生与临床护理',
        description: '适用于医院门诊、诊所常规检查、护理及实验室样本处理，提供可靠的卫生屏障。',
        image: '/images/reflex/slider-ortax4.jpg'
      },
      {
        title: '食品加工与餐饮连锁',
        description: '完全符合食品接触安全规范，保障大宗食品分切、包装与中央厨房卫生安全。',
        image: '/images/reflex/slider-ortax1.jpg'
      },
      {
        title: '工业制造与精密组装',
        description: '耐油污飞溅、防静电与优异的抓握力，适用于汽车零部件装配、电子与通用制造。',
        image: '/images/reflex/slider-ortax2.jpg'
      },
      {
        title: '商业保洁与专业清洁',
        description: '针对清洁洗涤剂与日常污渍提供坚韧防护，耐磨损且穿脱便捷。',
        image: '/images/reflex/reflex-cat4.jpg'
      }
    ],

    galleryTitle: '产品实物与包装视觉呈现',
    galleryLead: '查阅 REFLEX 产品的精细做工、外包装箱规与托盘标准堆叠实景。',
    galleryItems: [
      {
        title: '标准彩盒与外箱包装规范',
        tag: '外箱与彩盒',
        image: '/images/reflex/reflex-sliderx1.jpg'
      },
      {
        title: '高密度自动化车间生产实景',
        tag: '工厂车间',
        image: '/images/reflex/reflex-slider1.jpg'
      },
      {
        title: '集装箱与托盘出口装运实景',
        tag: '物流装载',
        image: '/images/reflex/slider-ortax1.jpg'
      },
      {
        title: '出厂质量抽检与拉伸性能测试',
        tag: '质量控制',
        image: '/images/reflex/reflex-slider2.jpg'
      }
    ],

    downloadTitle: '下载 REFLEX 官方产品技术手册',
    downloadLead: '获取完整的技术参数表、装箱量、材质说明与国际合规认证总览。',
    downloadButton: '下载完整产品目录 (PDF)',
    pdfNotice: 'PDF 包含全系产品规格、单箱尺寸、装柜量与检测标准。',

    rfqTitle: '提交大宗采购询价需求 (RFQ)',
    rfqLead: '请填写您的采购规格、目标采购量与期望交货条款，我们将在 24 小时内完成评估并提供商务答复。',
    formLabels: {
      name: '姓名 / 职务',
      email: '企业业务邮箱',
      phone: '联系电话 / 微信 / WhatsApp',
      company: '采购企业名称',
      country: '目的国 / 港口',
      product: '意向手套品类',
      volume: '预计采购量 (箱 / 托盘 / 集装箱)',
      notes: '具体规格要求、OEM 定制需求或交期期望',
      submit: '提交正式询价',
      successMessage: '感谢您的询价！CTSEG 国际贸易团队将在 24 小时内与您联系。'
    }
  },
  vi: {
    metaTitle: 'Cung Ứng Găng Tay Dùng Một Lần REFLEX B2B | CTSEG Medical',
    metaDescription: 'CTSEG cung cấp danh mục găng tay dùng một lần REFLEX xuất khẩu số lượng lớn (TPE, Găng khám bệnh, Vinyl, Copolymer) cho thị trường châu Âu, Balkan và quốc tế.',
    eyebrow: 'Danh mục găng tay y tế & bảo hộ chuyên dụng',
    heroTitle: 'Găng Tay Dùng Một Lần & Găng Tay Khám REFLEX',
    heroLead: 'CTSEG cung cấp nguồn hàng xuất khẩu số lượng lớn cho găng tay khám nitrile, TPE không chứa latex, thermo vinyl và copolymer dùng một lần kèm hồ sơ chứng từ chất lượng kiểm định theo lô dành cho các nhà phân phối quốc tế, cơ sở y tế và doanh nghiệp thu mua công nghiệp.',
    heroBadges: ['Xác minh theo sản phẩm', 'Rà soát chứng từ lô hàng', 'Cung ứng B2B số lượng lớn', 'Điều phối xuất khẩu'],
    ctaQuote: 'Nhận báo giá',
    ctaCatalog: 'Tải Catalogue (PDF)',
    ctaProducts: 'Xem sản phẩm',

    aboutEyebrow: 'Năng lực sản xuất và tiêu chuẩn quốc tế',
    aboutTitle: 'Sản xuất công suất cao và tuân thủ tiêu chuẩn',
    aboutText1: 'Được sản xuất tại các nhà máy hiện đại ở Istanbul, các sản phẩm REFLEX được chế tạo trên dây chuyền tự động hóa công nghệ cao hoạt động 24/7. Sử dụng nguyên liệu chất lượng cao và công thức TPE chuyên dụng để sản xuất găng tay khám y tế và bảo hộ công nghiệp.',
    aboutText2: 'Các tiêu chuẩn, chứng chỉ và tài liệu thử nghiệm hiện có được xem xét kỹ lưỡng theo sản phẩm, nhà sản xuất, lô hàng và thị trường mục tiêu trước khi ra quyết định thương mại.',
    aboutRoleTitle: 'Dịch vụ thương mại CTSEG',
    aboutRoleText: 'CTSEG đóng vai trò là đối tác thương mại và cung ứng trong việc xuất khẩu các sản phẩm REFLEX ra thị trường quốc tế. Cung cấp hồ sơ xuất khẩu, giấy chứng nhận phân tích (COA) và điều phối logistics cho các nhà nhập khẩu.',
    aboutMarketsTitle: 'Thị trường mục tiêu',
    aboutMarketsList: ['Liên minh châu Âu & Vương quốc Anh', 'Các nước Balkan', 'Trung Đông', 'Bắc Phi', 'Các nhà nhập khẩu quốc tế'],

    categoriesTitle: 'Danh mục sản phẩm REFLEX',
    categoriesLead: 'Khám phá dòng găng tay REFLEX phù hợp với nhiều ngành nghề và yêu cầu sử dụng khác nhau.',

    categories: [
      {
        id: 'flex-hitech',
        name: 'Găng tay Hybrid TPE FLEX Hi-Tech',
        subtitle: 'Công nghệ Hybrid thế hệ mới',
        description: 'Giải pháp thay thế kinh tế cho latex và nitrile. Kết cấu mềm mại, độ co giãn cao và không chứa bột.',
        material: 'TPE (Thermoplastic Elastomer)',
        variants: 'Đen, Xanh dương, Trong suốt | Kích cỡ: S, M, L, XL',
        packing: '100 cái/hộp, 20 hộp/thùng (70 thùng/pallet)',
        image: '/images/reflex/flex-hi-tech-main.jpg',
        badges: ['Không chứa Latex', 'Không bột', 'Phù hợp thực phẩm']
      },
      {
        id: 'medilex-exam',
        name: 'Găng tay khám bệnh MEDILEX (Healthy Touch)',
        subtitle: 'Khám lâm sàng và chăm sóc sức khỏe',
        description: 'Găng tay khám không tiệt trùng được thiết kế chuyên biệt cho môi trường thăm khám lâm sàng và y tế.',
        material: 'Hỗn hợp Polymer y tế / TPE',
        variants: 'Xanh lá, Hồng, Xanh dương, Đen | Kích cỡ: S, M, L/XL',
        packing: '100 cái/hộp, 20 hộp/thùng (70 thùng/pallet)',
        image: '/images/reflex/reflex-cat6.jpg',
        badges: ['Kiểm tra theo chứng từ', 'Thẩm định theo thị trường', 'Không tiệt trùng']
      },
      {
        id: 'winlyex-thermo-vinyl',
        name: 'Găng tay Thermo Vinyl Siêu Dày WINLYEX Extra',
        subtitle: 'Độ dày vượt trội & Bảo vệ hóa chất',
        description: 'Công thức thermo vinyl tăng cường độ dày mang lại khả năng kháng hóa chất cao và giảm 70% lượng khí thải carbon.',
        material: 'Hợp chất Thermo Vinyl Composite',
        variants: 'Tím, Xanh lá, Trong suốt, Hồng | Kích cỡ: S, M, L/XL',
        packing: '100 cái/hộp, 20 hộp/thùng (70 thùng/pallet)',
        image: '/images/reflex/reflex-cat5.jpg',
        badges: ['Siêu bền dai', 'Giảm phát thải Carbon', 'Rào cản bảo vệ cao']
      },
      {
        id: 'slimfit-copolymer',
        name: 'Găng tay nhạy cảm Copolymer SLIMFIT',
        subtitle: 'Thoáng khí & Chống mồ hôi tay',
        description: 'Phát triển với công nghệ thoáng khí giúp chống bí mồ hôi tay trong khi vẫn duy trì cảm giác cầm nắm xúc giác chính xác.',
        material: 'Copolymer không bột',
        variants: 'Đen, Xanh dương, Kem | Kích cỡ: S, M, L/XL',
        packing: '100 cái/hộp, 20 hộp/thùng (70 thùng/pallet)',
        image: '/images/reflex/reflex-cat8.jpg',
        badges: ['Thoáng khí', 'Độ nhạy xúc giác cao', 'Ôm sát vừa vặn']
      },
      {
        id: 'winlyex-powder-free',
        name: 'Găng tay không bột chuẩn y tế WINLYEX',
        subtitle: 'Chuẩn mực không bột y tế & phòng sạch',
        description: 'Bề mặt xử lý nhám nhẹ giúp tăng độ bám khi thao tác ướt và tạo rào cản ngăn ngừa chất lỏng sinh học tin cậy.',
        material: 'Hợp chất y tế không bột cao cấp',
        variants: 'Xanh dương, Trắng, Xanh bạc hà | Kích cỡ: S, M, L, XL',
        packing: '100 cái/hộp, 20 hộp/thùng (70 thùng/pallet)',
        image: '/images/reflex/reflex-cat4.jpg',
        badges: ['Không bột', 'Chống trơn trượt', 'Chuẩn khám bệnh']
      },
      {
        id: 'florex-multipurpose',
        name: 'Găng tay đa năng FLOREX',
        subtitle: 'Giải pháp kinh tế đa ngành',
        description: 'Thích hợp cho chế biến thực phẩm, dịch vụ ăn uống, vệ sinh công nghiệp nhẹ và thương mại tổng hợp.',
        material: 'Polymer đa dụng kinh tế',
        variants: 'Trong suốt, Xanh dương, Vàng | Kích cỡ: Freesize / S, M, L',
        packing: '100 cái/hộp, 20 hộp/thùng (70 thùng/pallet)',
        image: '/images/reflex/reflex-cat5.jpg',
        badges: ['Bền bỉ kinh tế', 'An toàn thực phẩm', 'Đa năng tiện dụng']
      },
      {
        id: 'reflex-vinyl',
        name: 'Găng tay Vinyl Cổ Điển REFLEX',
        subtitle: 'Bảo vệ tổng hợp dẻo dai',
        description: 'Găng tay vệ sinh và công nghiệp tiêu chuẩn với độ bền kéo tốt và trải nghiệm đeo thoải mái.',
        material: 'Vinyl tổng hợp cao cấp (PVC)',
        variants: 'Trong suốt, Xanh dương | Kích cỡ: S, M, L, XL',
        packing: '100 cái/hộp, 20 hộp/thùng (70 thùng/pallet)',
        image: '/images/reflex/reflex-cat3.jpg',
        badges: ['Không gây dị ứng latex', 'Độ bền kéo cao', 'Chống tĩnh điện']
      }
    ],

    applicationsTitle: 'Ứng dụng trong các lĩnh vực trọng yếu',
    applicationsLead: 'Từ môi trường y tế đòi hỏi sự chuẩn xác đến các nhà máy thực phẩm và công nghiệp.',
    applications: [
      {
        title: 'Y tế & Chăm sóc sức khỏe',
        description: 'Thích hợp cho khám bệnh ngoại trú, phòng khám, điều dưỡng và xét nghiệm.',
        image: '/images/reflex/slider-ortax4.jpg'
      },
      {
        title: 'Chế biến thực phẩm & Nhà hàng',
        description: 'Đảm bảo vệ sinh an toàn thực phẩm trong sơ chế, đóng gói và bếp công nghiệp.',
        image: '/images/reflex/slider-ortax1.jpg'
      },
      {
        title: 'Sản xuất công nghiệp & Lắp ráp',
        description: 'Chống dầu mỡ nhẹ, chống tĩnh điện và tăng cường độ bám khi thao tác.',
        image: '/images/reflex/slider-ortax2.jpg'
      },
      {
        title: 'Vệ sinh thương mại & Tẩy rửa',
        description: 'Bảo vệ đôi tay trước các chất tẩy rửa thông thường và bụi bẩn công nghiệp.',
        image: '/images/reflex/reflex-cat4.jpg'
      }
    ],

    galleryTitle: 'Hình ảnh thực tế & Đóng gói sản phẩm',
    galleryLead: 'Xem quy cách đóng hộp, đóng thùng carton và xếp pallet xuất khẩu thực tế.',
    galleryItems: [
      {
        title: 'Quy cách đóng gói hộp và thùng carton',
        tag: 'Bao bì & Thùng carton',
        image: '/images/reflex/reflex-sliderx1.jpg'
      },
      {
        title: 'Dây chuyền sản xuất tự động hóa cao',
        tag: 'Quy trình sản xuất',
        image: '/images/reflex/reflex-slider1.jpg'
      },
      {
        title: 'Xếp dỡ và đóng container xuất khẩu',
        tag: 'Logistics xuất khẩu',
        image: '/images/reflex/slider-ortax1.jpg'
      },
      {
        title: 'Kiểm tra chất lượng và độ bền kéo',
        tag: 'Kiểm soát chất lượng',
        image: '/images/reflex/reflex-slider2.jpg'
      }
    ],

    downloadTitle: 'Tải tài liệu giới thiệu sản phẩm REFLEX',
    downloadLead: 'Xem thông số kỹ thuật chi tiết, quy cách đóng gói và tiêu chuẩn sản phẩm.',
    downloadButton: 'Tải Catalogue đầy đủ (PDF)',
    pdfNotice: 'Tài liệu PDF bao gồm bảng thông số, quy cách đóng gói và kích thước thùng.',

    rfqTitle: 'Yêu cầu báo giá đơn hàng lớn (RFQ)',
    rfqLead: 'Vui lòng cung cấp quy cách sản phẩm, số lượng dự kiến và điều kiện giao hàng để nhận báo giá thương mại.',
    formLabels: {
      name: 'Họ và tên',
      email: 'Email doanh nghiệp',
      phone: 'Số điện thoại / Zalo / WhatsApp',
      company: 'Tên công ty',
      country: 'Quốc gia / Cảng đích',
      product: 'Sản phẩm quan tâm',
      volume: 'Số lượng dự kiến (Thùng / Pallet / Container)',
      notes: 'Yêu cầu cụ thể hoặc ghi chú thêm',
      submit: 'Gửi yêu cầu báo giá',
      successMessage: 'Cảm ơn quý khách! Đội ngũ thương mại CTSEG sẽ liên hệ trong vòng 24 giờ.'
    }
  }
};
