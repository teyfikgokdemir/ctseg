export type ReflexLocale = 'en' | 'tr' | 'de' | 'it' | 'ru' | 'fa' | 'sq' | 'mk' | 'sr';

export const reflexLocales: ReflexLocale[] = ['en', 'tr', 'de', 'it', 'ru', 'fa', 'sq', 'mk', 'sr'];

export const reflexLocaleNames: Record<ReflexLocale, string> = {
  en: 'English',
  tr: 'Türkçe',
  de: 'Deutsch',
  it: 'Italiano',
  ru: 'Русский',
  fa: 'فارسی',
  sq: 'Shqip',
  mk: 'Македонски',
  sr: 'Srpski'
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
    sr: 'https://ctseg.com.tr/sr/medical/reflex-disposable-gloves/'
  };
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
  
  categories: {
    id: string;
    name: string;
    subtitle: string;
    description: string;
    material: string;
    variants: string;
    packing: string;
    image: string;
    badges: string[];
  }[];

  applicationsTitle: string;
  applicationsLead: string;
  applications: {
    title: string;
    description: string;
    image: string;
  }[];

  galleryTitle: string;
  galleryLead: string;
  galleryItems: {
    title: string;
    tag: string;
    image: string;
  }[];

  downloadTitle: string;
  downloadLead: string;
  downloadButton: string;
  pdfNotice: string;

  rfqTitle: string;
  rfqLead: string;
  formLabels: {
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
  };
}

export const reflexData: Record<ReflexLocale, ReflexContent> = {
  en: {
    metaTitle: 'REFLEX Disposable Gloves B2B Sourcing | CTSEG Medical Sourcing',
    metaDescription: 'CTSEG supplies the REFLEX disposable glove portfolio (TPE, Examination, Vinyl, Copolymer) to international importers, distributors and institutional buyers across Europe, Balkans, Middle East & worldwide.',
    eyebrow: 'Featured Medical & Protection Portfolio',
    heroTitle: 'REFLEX Disposable & Medical Grade Gloves',
    heroLead: 'High-capacity TPE, Examination, Thermo Vinyl, Copolymer and Hygiene glove solutions for international importers, distributors and institutional buyers.',
    heroBadges: ['CE 2841 & ISO 9001 Certified', '100% Recyclable TPE Options', 'Food & Sanitary Contact Safe', 'Global Export Logistics'],
    ctaQuote: 'Request a Quote',
    ctaCatalog: 'Download Official Catalogue (PDF)',
    ctaProducts: 'View Product Lines',

    aboutEyebrow: 'Production Capacity & Quality Standards',
    aboutTitle: 'High-Volume Production & Standards Compliance',
    aboutText1: 'Manufactured in Istanbul, Turkey, REFLEX operates automated high-technology production lines operating 24/7. Utilizing premium raw materials and specialized TPE (Thermoplastic Elastomer) formulations, REFLEX produces medical examination gloves, hygienic gloves, and industrial barrier protection solutions.',
    aboutText2: 'The manufacturing facilities comply with accredited laboratory standards, holding CE 2841, EN ISO 374-1 Type C, EN 420+A1, EN ISO 374-5 (Virus protection), and ISO 9001 quality management certifications.',
    aboutRoleTitle: 'CTSEG Commercial & Export Services',
    aboutRoleText: 'CTSEG acts as an international trade and sourcing partner for the REFLEX product portfolio. We assist global importers, wholesale distributors, and institutional procurement departments by coordinating product specifications, export documentation, batch analysis certificates (COA), and international cargo logistics.',
    aboutMarketsTitle: 'Target International Markets',
    aboutMarketsList: ['European Union & UK', 'Balkan Nations (Albania, North Macedonia, Serbia, Bosnia)', 'Middle East & Gulf (Iran, Iraq, Syria)', 'North Africa (Egypt, Libya, Algeria)', 'Global Wholesale Importers'],

    categoriesTitle: 'REFLEX Product Portfolio',
    categoriesLead: 'Explore the complete range of REFLEX protective and examination glove categories engineered for medical, food, and industrial applications.',

    categories: [
      {
        id: 'flex-hitech',
        name: 'FLEX Hi-Tech Hybrid TPE Gloves',
        subtitle: 'Next-Generation Hybrid Technology',
        description: 'Economical alternative to latex and nitrile gloves. Features soft texture, high elasticity, and powder-free hygienic formulation.',
        material: 'TPE (Thermoplastic Elastomer)',
        variants: 'Black, Blue, White | Sizes: S, M, L, XL',
        packing: '100 pcs / box, 20 boxes / carton (70 cartons / pallet)',
        image: '/images/reflex-flex-hitech-gloves.webp',
        badges: ['Latex Free', 'Powder Free', 'Food Safe']
      },
      {
        id: 'medilex-exam',
        name: 'MEDILEX Examination Gloves (Healthy Touch)',
        subtitle: 'Medical Examination & Sanitary Touch',
        description: 'Non-sterile, ambidextrous examination gloves designed for clinical inspection, sanitary procedures, and healthcare environments.',
        material: 'Medical Grade Polymer / TPE Blend',
        variants: 'Green, Pink, Blue, Black | Sizes: S, M, L/XL',
        packing: '100 pcs / box, 20 boxes / carton',
        image: '/images/reflex-medilex-examination-gloves.webp',
        badges: ['CE 2841 Medical', 'EN ISO 374-5 Virus', 'Non-Sterile']
      },
      {
        id: 'winlyex-thermo-vinyl',
        name: 'WINLYEX Extra Thermo Vinyl Gloves',
        subtitle: 'Extra Thick & Heavy-Duty Protection',
        description: 'Extra thick thermo vinyl formulation providing robust chemical and barrier resistance with 70% reduced secondary carbon footprint.',
        material: 'Thermo Vinyl Compound',
        variants: 'Purple, Green, Transparent, Pink | Sizes: S, M, L/XL',
        packing: '100 pcs / box, 20 boxes / carton',
        image: '/images/reflex-winlyex-thermo-vinyl-gloves.webp',
        badges: ['Extra Strong', 'Carbon Savings', 'High Barrier']
      },
      {
        id: 'slimfit-copolymer',
        name: 'SLIMFIT Copolymer Sensitive Gloves',
        subtitle: 'Breathable & Sweat-Proof Technology',
        description: 'Engineered with new trend breathable technology to prevent hand perspiration while maintaining precision tactile sensitivity.',
        material: 'Powder-Free Copolymer',
        variants: 'Black, Blue, Cream | Sizes: S, M, L/XL',
        packing: '100 pcs / box, 20 boxes / carton',
        image: '/images/reflex-slimfit-copolymer-gloves.webp',
        badges: ['Breathable', 'Sweat-Proof', 'Recyclable']
      },
      {
        id: 'winlyex-powder-free',
        name: 'WINLYEX Powder-Free Gloves',
        subtitle: 'Clean & Odour-Free Hygienic Glove',
        description: 'Standard protective gloves designed to prevent hands from dirt and odours during food handling, cleaning, and light processing.',
        material: 'Powder-Free TPE / Polymer',
        variants: 'White | Sizes: S, M, L/XL',
        packing: '100 pcs / box, 20 boxes / carton',
        image: '/images/reflex-winlyex-powder-free-gloves.webp',
        badges: ['Powder Free', 'Odour Barrier', 'Multi-Purpose']
      },
      {
        id: 'florex-multipurpose',
        name: 'FLOREX Multi-Purpose Gloves',
        subtitle: 'Elastic Design & Soft Texture',
        description: 'Versatile multi-purpose gloves for domestic, retail, HORECA, and general sanitation applications.',
        material: 'Elastic Polymer Blend',
        variants: 'Transparent, Blue, Black, Cream | Sizes: S, M, L/XL',
        packing: '100 pcs / box, 20 boxes / carton',
        image: '/images/reflex-florex-multipurpose-gloves.webp',
        badges: ['Soft Texture', 'Multi-Surface', 'Economic']
      },
      {
        id: 'flex-kids',
        name: 'FLEX Kids Transparent Gloves',
        subtitle: 'Sized Specially for Children (Ages 3-9)',
        description: 'Safe, latex-free transparent gloves designed for children\'s art, food contact, hygiene, and school activities.',
        material: 'Latex-Free TPE',
        variants: 'Transparent | Standard Child Fit (Ages 3-9)',
        packing: '50 pcs / box, 40 boxes / carton',
        image: '/images/reflex-kids-disposable-gloves.webp',
        badges: ['Child Safe', 'Ages 3-9', 'Food Contact']
      }
    ],

    applicationsTitle: 'Sector Applications & Usage Fields',
    applicationsLead: 'REFLEX gloves are certified and optimized for diverse commercial, clinical, and industrial environments.',

    applications: [
      {
        title: 'Medical & Healthcare',
        description: 'Patient inspection, clinic sanitation, dental care, and laboratory diagnostics with CE 2841 and EN ISO 374-5 compliance.',
        image: '/images/reflex-app-medical-laboratory.webp'
      },
      {
        title: 'Food Processing & Catering',
        description: 'Certified for direct food contact in commercial kitchens, bakeries, confectionery plants, and meat processing facilities.',
        image: '/images/reflex-app-food-catering.webp'
      },
      {
        title: 'Beauty & Personal Care',
        description: 'Protects hands against oils, dyes, and chemicals in salons, personal care, and hygienic packaging.',
        image: '/images/reflex-app-cosmetics-hygiene.webp'
      },
      {
        title: 'Home, Gardening & Cleaning',
        description: 'Durable protection for janitorial cleaning, agriculture, gardening, and general institutional maintenance.',
        image: '/images/reflex-app-gardening-home.webp'
      }
    ],

    galleryTitle: 'Quality & Technology Showcase',
    galleryLead: 'Visual overview of REFLEX packaging, eco-friendly certifications, and technological features.',

    galleryItems: [
      {
        title: '100% Recyclable Eco-Friendly TPE',
        tag: 'Environmental',
        image: '/images/reflex-feature-eco-friendly.webp'
      },
      {
        title: 'Breathable & Sweat-Proof Technology',
        tag: 'Ergonomics',
        image: '/images/reflex-feature-breathable-technology.webp'
      },
      {
        title: 'High-Capacity Certified Turkish Production',
        tag: 'Manufacturing',
        image: '/images/reflex-feature-certified-production.webp'
      },
      {
        title: 'Production & Packaging Lines in Esenyurt',
        tag: 'Facility',
        image: '/images/reflex-manufacturing-facility.webp'
      }
    ],

    downloadTitle: 'Download Official REFLEX Product Catalogue',
    downloadLead: 'Access detailed technical specifications, barcode tables, pallet loading parameters, and certification details in the official PDF catalogue.',
    downloadButton: 'Download REFLEX Catalogue (PDF)',
    pdfNotice: 'Official PDF document · 6.8 MB · Includes full specifications and barcode directory.',

    rfqTitle: 'Request a Commercial Quotation',
    rfqLead: 'Importers, distributors, and institutional procurement teams: share your volume, target country, and product requirements to receive a formal commercial assessment.',
    formLabels: {
      name: 'Full Name / Contact Person',
      email: 'Work Email',
      phone: 'Phone / WhatsApp',
      company: 'Company Name & Importer Status',
      country: 'Destination Country',
      product: 'Selected REFLEX Product Line',
      volume: 'Estimated Quantity / Pallets',
      notes: 'Specification & Incoterm Requirements',
      submit: 'Submit Quotation Request',
      successMessage: 'Your quotation request has been recorded. Our export team will evaluate your specifications.'
    }
  },

  tr: {
    metaTitle: 'REFLEX Tek Kullanımlık Eldiven B2B Tedariği | CTSEG Medikal Tedarik',
    metaDescription: 'CTSEG, REFLEX eldiven portföyünü (TPE, Muayene, Vinil, Kopolimer) Avrupa, Balkanlar, Orta Doğu ve uluslararası pazarlardaki ithalatçılara ve kurumsal alıcılara tedarik eder.',
    eyebrow: 'Öne Çıkan Medikal ve Koruma Portföyü',
    heroTitle: 'REFLEX Tek Kullanımlık ve Muayene Eldivenleri',
    heroLead: 'Uluslararası ithalatçılar, distribütörler ve kurumsal alıcılar için yüksek kapasiteli TPE, Muayene, Termo Vinil, Kopolimer ve Hijyen eldiven çözümleri.',
    heroBadges: ['CE 2841 & ISO 9001 Sertifikalı', '%100 Geri Dönüştürülebilir TPE', 'Gıda ve Sıhhi Temasa Uygun', 'Uluslararası Lojistik Desteği'],
    ctaQuote: 'Teklif İste',
    ctaCatalog: 'Resmi Kataloğu İndir (PDF)',
    ctaProducts: 'Ürün Gruplarını İncele',

    aboutEyebrow: 'Üretim Kapasitesi ve Kalite Standartları',
    aboutTitle: 'Yüksek Üretim Kapasitesi ve Standart Uyumu',
    aboutText1: 'İstanbul Esenyurt\'taki tesislerde üretilen REFLEX eldivenleri, 7/24 esasıyla çalışan son teknoloji otomatik makine parkurunda imal edilmektedir. Kaliteli ham madde ve özel TPE (Termoplastik Elastomer) formülasyonu ile medikal muayene eldivenleri, hijyenik eldivenler ve endüstriyel koruma çözümleri sunulmaktadır.',
    aboutText2: 'Üretim tesisleri akredite laboratuvar standartlarına uygun CE 2841, EN ISO 374-1 Type C, EN 420+A1, EN ISO 374-5 (Virüs koruması) ve ISO 9001 kalite yönetim belgelerine sahiptir.',
    aboutRoleTitle: 'CTSEG Ticari ve İhracat Hizmetleri',
    aboutRoleText: 'CTSEG, REFLEX ürün portföyünün uluslararası ticaret ve tedarik süreçlerini yürütür. Avrupa, Balkanlar, İran, Irak, Suriye, Mısır ve küresel pazarlardaki alıcılara ürün spesifikasyonu, ihracat dokümantasyonu, parti analiz belgeleri (COA) ve uluslararası lojistik koordinasyonu sağlar.',
    aboutMarketsTitle: 'Hedef Uluslararası Pazarlar',
    aboutMarketsList: ['Avrupa Birliği ve İngiltere', 'Balkan Ülkeleri (Arnavutluk, Kuzey Makedonya, Sırbistan, Bosna)', 'Orta Doğu (İran, Irak, Suriye)', 'Kuzey Afrika (Mısır, Libya, Cezayir)', 'Küresel Toptan İthalatçılar'],

    categoriesTitle: 'REFLEX Ürün Portföyü',
    categoriesLead: 'Medikal, gıda ve endüstriyel kullanım için özel geliştirilmiş REFLEX eldiven kategorilerini inceleyin.',

    categories: [
      {
        id: 'flex-hitech',
        name: 'FLEX Hi-Tech Hibrit TPE Eldiven',
        subtitle: 'Yeni Nesil Hibrit Teknoloji',
        description: 'Lateks ve nitril eldivenlere ekonomik alternatif. Yumuşak doku, yüksek esneklik ve pudrasız hijyenik yapı sunar.',
        material: 'TPE (Termoplastik Elastomer)',
        variants: 'Siyah, Mavi, Beyaz | Bedenler: S, M, L, XL',
        packing: '100 adet / kutu, 20 kutu / koli (70 koli / palet)',
        image: '/images/reflex-flex-hitech-gloves.webp',
        badges: ['Lateks İçermez', 'Pudrasız', 'Gıdaya Uygun']
      },
      {
        id: 'medilex-exam',
        name: 'MEDILEX Muayene Eldiveni (Healthy Touch)',
        subtitle: 'Medikal Muayene ve Sıhhi Temas',
        description: 'Klinik muayene, sıhhi uygulamalar ve sağlık ortamları için tasarlanmış non-steril, iki ele de uyumlu muayene eldiveni.',
        material: 'Medikal Polimer / TPE Karışımı',
        variants: 'Yeşil, Pembe, Mavi, Siyah | Bedenler: S, M, L/XL',
        packing: '100 adet / kutu, 20 kutu / koli',
        image: '/images/reflex-medilex-examination-gloves.webp',
        badges: ['CE 2841 Medikal', 'EN ISO 374-5 Virüs', 'Non-Steril']
      },
      {
        id: 'winlyex-thermo-vinyl',
        name: 'WINLYEX Extra Termo Vinil Eldiven',
        subtitle: 'Ekstra Kalın ve Güçlü Koruma',
        description: '%70 ikincil karbon ayak izi tasarrufu sağlayan, kimyasal ve bariyer direnci yüksek ekstra kalın termo vinil eldiven.',
        material: 'Termo Vinil Bileşimi',
        variants: 'Mor, Yeşil, Şeffaf, Pembe | Bedenler: S, M, L/XL',
        packing: '100 adet / kutu, 20 kutu / koli',
        image: '/images/reflex-winlyex-thermo-vinyl-gloves.webp',
        badges: ['Ekstra Güçlü', 'Karbon Tasarruflu', 'Yüksek Bariyer']
      },
      {
        id: 'slimfit-copolymer',
        name: 'SLIMFIT Kopolimer Hassas Eldiven',
        subtitle: 'Nefes Alabilen ve Terletmeyen Teknoloji',
        description: 'Elin terlemesini önleyen ve yüksek hassasiyet sağlayan yeni trend nefes alabilen kopolimer teknolojisi.',
        material: 'Pudrasız Kopolimer',
        variants: 'Siyah, Mavi, Krem | Bedenler: S, M, L/XL',
        packing: '100 adet / kutu, 20 kutu / koli',
        image: '/images/reflex-slimfit-copolymer-gloves.webp',
        badges: ['Nefes Alabilir', 'Terletmez', 'Geri Dönüştürülebilir']
      },
      {
        id: 'winlyex-powder-free',
        name: 'WINLYEX Pudrasız Eldiven',
        subtitle: 'Temiz ve Kokusuz Hijyenik Eldiven',
        description: 'Gıda teması ve genel temizlik sırasında ellerin kirlenmesini ve koku sinmesini önleyen standart koruma eldiveni.',
        material: 'Pudrasız TPE / Polimer',
        variants: 'Beyaz | Bedenler: S, M, L/XL',
        packing: '100 adet / kutu, 20 kutu / koli',
        image: '/images/reflex-winlyex-powder-free-gloves.webp',
        badges: ['Pudrasız', 'Koku Önleyici', 'Çok Amaçlı']
      },
      {
        id: 'florex-multipurpose',
        name: 'FLOREX Çok Amaçlı Eldiven',
        subtitle: 'Elastik Tasarım ve Yumuşak Doku',
        description: 'Ev, perakende, HORECA ve genel hijyen uygulamaları için esnek ve pratik kullanımlı eldiven.',
        material: 'Elastik Polimer Karışımı',
        variants: 'Şeffaf, Mavi, Siyah, Krem | Bedenler: S, M, L/XL',
        packing: '100 adet / kutu, 20 kutu / koli',
        image: '/images/reflex-florex-multipurpose-gloves.webp',
        badges: ['Yumuşak Doku', 'Çok Yüzeyli', 'Ekonomik']
      },
      {
        id: 'flex-kids',
        name: 'FLEX Şeffaf Çocuk Eldiveni',
        subtitle: '3-9 Yaş Çocuklara Özel Beden',
        description: 'Çocukların resim, etkinlik, gıda teması ve okul hijyeni için özel geliştirilmiş lateks içermeyen şeffaf eldiven.',
        material: 'Lateks İçermeyen TPE',
        variants: 'Şeffaf | Standart Çocuk Bedeni (3-9 Yaş)',
        packing: '50 adet / kutu, 40 kutu / koli',
        image: '/images/reflex-kids-disposable-gloves.webp',
        badges: ['Çocuklara Özel', '3-9 Yaş', 'Gıdaya Uygun']
      }
    ],

    applicationsTitle: 'Kullanım Alanları ve Sektörler',
    applicationsLead: 'REFLEX eldivenleri medikal, gıda ve endüstriyel sektörlerin ihtiyaçlarına uygun olarak sertifikalandırılmıştır.',

    applications: [
      {
        title: 'Medikal ve Sağlık',
        description: 'CE 2841 ve EN ISO 374-5 standartlarında klinik muayene, hasta bakımı, diş hekimliği ve laboratuvar kullanımı.',
        image: '/images/reflex-app-medical-laboratory.webp'
      },
      {
        title: 'Gıda İşleme ve Restoran',
        description: 'Ticari mutfaklar, fırınlar, et işleme tesisleri ve HORECA için doğrudan gıda teması sertifikalı.',
        image: '/images/reflex-app-food-catering.webp'
      },
      {
        title: 'Kişisel Bakım ve Hijyen',
        description: 'Güzellik salonları ve hijyenik ambalajlamada boya ve kimyasallara karşı koruma.',
        image: '/images/reflex-app-cosmetics-hygiene.webp'
      },
      {
        title: 'Ev, Bahçe ve Temizlik',
        description: 'Kurumsal temizlik, tarım, bahçe bakımı ve genel tesis hijyeni için dayanıklı bariyer koruma.',
        image: '/images/reflex-app-gardening-home.webp'
      }
    ],

    galleryTitle: 'Kalite ve Teknoloji Galerisi',
    galleryLead: 'REFLEX ambalajları, geri dönüştürülebilir teknoloji ve sertifika görselleri.',

    galleryItems: [
      {
        title: '%100 Geri Dönüştürülebilir Çevre Dostu TPE',
        tag: 'Çevre',
        image: '/images/reflex-feature-eco-friendly.webp'
      },
      {
        title: 'Nefes Alabilen ve Terletmeyen Kopolimer Teknoloji',
        tag: 'Ergonomi',
        image: '/images/reflex-feature-breathable-technology.webp'
      },
      {
        title: 'Yüksek Kapasiteli Yerli Üretim Tesisi',
        tag: 'Üretim',
        image: '/images/reflex-feature-certified-production.webp'
      },
      {
        title: 'Esenyurt Üretim ve Paketleme Parkuru',
        tag: 'Tesis',
        image: '/images/reflex-manufacturing-facility.webp'
      }
    ],

    downloadTitle: 'Resmi REFLEX Ürün Kataloğunu İndirin',
    downloadLead: 'Teknik detaylar, barkod tabloları, palet yükleme ölçüleri ve kalite belgelerini içeren resmi PDF kataloğunu inceleyin.',
    downloadButton: 'REFLEX Kataloğunu İndir (PDF)',
    pdfNotice: 'Resmi PDF belgesi · 6.8 MB · Tam teknik spesifikasyon ve barkod dizini içerir.',

    rfqTitle: 'Ticari Fiyat ve Tedarik İsteği',
    rfqLead: 'İthalatçılar, distribütörler ve kurumsal satın alma ekipleri: hacim, teslim ülkesi ve ürün talebinizi paylaşarak ticari değerlendirme alın.',
    formLabels: {
      name: 'Ad Soyad / Yetkili Kişi',
      email: 'Kurumsal E-posta',
      phone: 'Telefon / WhatsApp',
      company: 'Şirket Adı ve İthalatçı Statüsü',
      country: 'Teslim Edilecek Ülke',
      product: 'Seçilen REFLEX Ürün Grubu',
      volume: 'Tahmini Miktar / Palet',
      notes: 'Spesifikasyon ve Incoterm Notları',
      submit: 'Teklif Talebini Gönder',
      successMessage: 'Teklif talebiniz kaydedilmiştir. İhracat ekibimiz spesifikasyonlarınızı değerlendirecektir.'
    }
  },

  de: {
    metaTitle: 'REFLEX Einweg- & Untersuchungshandschuhe B2B | CTSEG Medical',
    metaDescription: 'CTSEG liefert das REFLEX Handschuh-Portfolio (TPE, Untersuchung, Vinyl, Copolymer) an internationale Importeure und Händler in Europa, dem Balkan und weltweit.',
    eyebrow: 'Medizinisches & Schutz-Portfolio',
    heroTitle: 'REFLEX Einweg- & Untersuchungshandschuhe',
    heroLead: 'Hochkapazitive TPE-, Untersuchungs-, Thermovinyl-, Copolymer- und Hygiene-Handschuhlösungen für internationale Importeure und Händler.',
    heroBadges: ['Zertifiziert nach CE 2841 & ISO 9001', '100% recycelbares TPE', 'Lebensmittel- & Hygienesicher', 'Globale Exportlogistik'],
    ctaQuote: 'Angebot anfragen',
    ctaCatalog: 'Offiziellen Katalog herunterladen (PDF)',
    ctaProducts: 'Produktlinien ansehen',

    aboutEyebrow: 'Produktionskapazität & Qualitätsstandards',
    aboutTitle: 'Großserienfertigung & Normenkonformität',
    aboutText1: 'Hergestellt in Istanbul, Türkei, nutzt REFLEX automatisierte Hochtechnologie-Produktionslinien im 24/7-Betrieb. Mit hochwertigen Rohstoffen und speziellen TPE-Rezepturen fertigt REFLEX medizinische Untersuchungshandschuhe und industrielle Schutzlösungen.',
    aboutText2: 'Die Produktionsstätten entsprechen den Standards akkreditierter Laboratorien und verfügen über die Zertifizierungen CE 2841, EN ISO 374-1 Typ C, EN 420+A1, EN ISO 374-5 (Virusschutz) und ISO 9001.',
    aboutRoleTitle: 'CTSEG Handels- & Exportdienste',
    aboutRoleText: 'CTSEG agiert als internationaler Handels- und Beschaffungspartner für das REFLEX-Produktportfolio. Wir unterstützen Importeure und Händler mit Exportdokumenten, Analysenzertifikaten (COA) und Transportlogistik.',
    aboutMarketsTitle: 'Zielmärkte',
    aboutMarketsList: ['Europäische Union & UK', 'Balkanländer', 'Naher Osten', 'Nordafrika', 'Globale Großhändler'],

    categoriesTitle: 'REFLEX Produktportfolio',
    categoriesLead: 'Entdecken Sie das komplette Sortiment an medizinischen und Schutzhandschuhen von REFLEX.',

    categories: [
      {
        id: 'flex-hitech',
        name: 'FLEX Hi-Tech Hybrid-TPE-Handschuhe',
        subtitle: 'Hybrid-Technologie der nächsten Generation',
        description: 'Wirtschaftliche Alternative zu Latex und Nitril. Weiche Textur, hohe Elastizität und puderfrei.',
        material: 'TPE (Thermoplastisches Elastomer)',
        variants: 'Schwarz, Blau, Weiß | Größen: S, M, L, XL',
        packing: '100 Stk. / Box, 20 Boxen / Karton',
        image: '/images/reflex-flex-hitech-gloves.webp',
        badges: ['Latexfrei', 'Puderfrei', 'Lebensmittelecht']
      },
      {
        id: 'medilex-exam',
        name: 'MEDILEX Untersuchungshandschuhe (Healthy Touch)',
        subtitle: 'Medizinische Untersuchung & Hygiene',
        description: 'Unsterile Untersuchungshandschuhe für klinische Untersuchungen und medizinische Umgebungen.',
        material: 'Medizinische Polymer- / TPE-Mischung',
        variants: 'Grün, Rosa, Blau, Schwarz | Größen: S, M, L/XL',
        packing: '100 Stk. / Box, 20 Boxen / Karton',
        image: '/images/reflex-medilex-examination-gloves.webp',
        badges: ['Medizinisch CE 2841', 'EN ISO 374-5 Virus', 'Unsteril']
      },
      {
        id: 'winlyex-thermo-vinyl',
        name: 'WINLYEX Extra Thermovinyl-Handschuhe',
        subtitle: 'Extra dick & starker Schutz',
        description: 'Extra dicke Thermovinyl-Rezeptur mit hoher chemischer Beständigkeit und 70% reduziertem CO2-Fußabdruck.',
        material: 'Thermovinyl-Verbindung',
        variants: 'Violett, Grün, Transparent, Rosa | Größen: S, M, L/XL',
        packing: '100 Stk. / Box, 20 Boxen / Karton',
        image: '/images/reflex-winlyex-thermo-vinyl-gloves.webp',
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
        image: '/images/reflex-slimfit-copolymer-gloves.webp',
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
        image: '/images/reflex-winlyex-powder-free-gloves.webp',
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
        image: '/images/reflex-florex-multipurpose-gloves.webp',
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
        image: '/images/reflex-kids-disposable-gloves.webp',
        badges: ['Für Kinder', '3-9 Jahre', 'Lebensmittelecht']
      }
    ],

    applicationsTitle: 'Anwendungsbereiche',
    applicationsLead: 'REFLEX Handschuhe sind für medizinische, Lebensmittel- und Industrieanforderungen zertifiziert.',

    applications: [
      {
        title: 'Medizin & Gesundheit',
        description: 'Klinische Untersuchungen, Patientenpflege und Laboratorien nach CE 2841 und EN ISO 374-5.',
        image: '/images/reflex-app-medical-laboratory.webp'
      },
      {
        title: 'Lebensmittelverarbeitung & Gastronomie',
        description: 'Zertifiziert für den direkten Lebensmittelkontakt in Großküchen und Lebensmittelbetrieben.',
        image: '/images/reflex-app-food-catering.webp'
      },
      {
        title: 'Pflege & Hygiene',
        description: 'Schutz für Hände vor Farben und Chemikalien in Kosmetiksalons und Hygienebereichen.',
        image: '/images/reflex-app-cosmetics-hygiene.webp'
      },
      {
        title: 'Haushalt, Garten & Reinigung',
        description: 'Strapazierfähiger Schutz für gewerbliche Reinigung, Landwirtschaft und Wartung.',
        image: '/images/reflex-app-gardening-home.webp'
      }
    ],

    galleryTitle: 'Galerie für Qualität & Technologie',
    galleryLead: 'Übersicht über REFLEX-Verpackungen, Zertifikate und umweltfreundliche Technologien.',

    galleryItems: [
      {
        title: '100% recycelbares Umwelt-TPE',
        tag: 'Umwelt',
        image: '/images/reflex-feature-eco-friendly.webp'
      },
      {
        title: 'Atmungsaktive Copolymer-Technologie',
        tag: 'Ergonomie',
        image: '/images/reflex-feature-breathable-technology.webp'
      },
      {
        title: 'Zertifizierte türkische Produktion mit hoher Kapazität',
        tag: 'Fertigung',
        image: '/images/reflex-feature-certified-production.webp'
      },
      {
        title: 'Verpackungslinien in Esenyurt',
        tag: 'Werk',
        image: '/images/reflex-manufacturing-facility.webp'
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
    heroBadges: ['Certificato CE 2841 & ISO 9001', 'TPE 100% Riciclabile', 'Sicuro per Contatto Alimentare e Medico', 'Supporto Logistico Export'],
    ctaQuote: 'Richiedi un Preventivo',
    ctaCatalog: 'Scarica il Catalogo Ufficiale (PDF)',
    ctaProducts: 'Vedi i Prodotti',

    aboutEyebrow: 'Capacità Produttiva e Standard',
    aboutTitle: 'Produzione ad Alto Volume e Conformità',
    aboutText1: 'Prodotto a Istanbul, Turchia, REFLEX utilizza linee di produzione automatizzate ad alta tecnologia attive 24/7. Utilizzando materie prime di alta qualità e formulazioni speciali TPE, REFLEX produce guanti da esame medico e protezione industriale.',
    aboutText2: 'Gli impianti soddisfano gli standard dei laboratori accreditati con certificazioni CE 2841, EN ISO 374-1 Type C, EN 420+A1, EN ISO 374-5 (Protezione virus) e ISO 9001.',
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
        image: '/images/reflex-flex-hitech-gloves.webp',
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
        image: '/images/reflex-medilex-examination-gloves.webp',
        badges: ['Medico CE 2841', 'EN ISO 374-5 Antivirus', 'Non Sterile']
      },
      {
        id: 'winlyex-thermo-vinyl',
        name: 'Guanti Termo Vinile WINLYEX Extra',
        subtitle: 'Protezione Extra Spessa e Resistente',
        description: 'Formulazione in vinile termo extra spessa ad alta resistenza chimica e ridotto impatto di carbonio del 70%.',
        material: 'Composto Termo Vinile',
        variants: 'Viola, Verde, Trasparente, Rosa | Taglie: S, M, L/XL',
        packing: '100 pz / scatola, 20 scatole / cartone',
        image: '/images/reflex-winlyex-thermo-vinyl-gloves.webp',
        badges: ['Extra Forte', 'Risparmio Carbonio', 'Alta Barriera']
      },
      {
        id: 'slimfit-copolymer',
        name: 'Guanti Sensibili in Copolimero SLIMFIT',
        subtitle: 'Tecnologia Traspirante e Anti-Sudore',
        description: 'Progettati con tecnologia traspirante per prevenire la sudorazione delle mani mantenendo la sensibilità tattile.',
        material: 'Copolimero Senza Polvere',
        variants: 'Nero, Blu, Crema | Taglie: S, M, L/XL',
        packing: '100 pz / scatola, 20 scatole / cartone',
        image: '/images/reflex-slimfit-copolymer-gloves.webp',
        badges: ['Traspirante', 'Anti-Sudore', 'Riciclabile']
      },
      {
        id: 'winlyex-powder-free',
        name: 'Guanti Senza Polvere WINLYEX',
        subtitle: 'Guanto Igienico Senza Odori',
        description: 'Guanti protettivi standard per prevenire lo sporco sulle mani e gli odori durante la preparazione dei cibi.',
        material: 'TPE Senza Polvere',
        variants: 'Bianco | Taglie: S, M, L/XL',
        packing: '100 pz / scatola, 20 scatole / cartone',
        image: '/images/reflex-winlyex-powder-free-gloves.webp',
        badges: ['Senza Polvere', 'Barriera Odori', 'Multiuso']
      },
      {
        id: 'florex-multipurpose',
        name: 'Guanti Multiuso FLOREX',
        subtitle: 'Design Elastico e Morbida Struttura',
        description: 'Pratici guanti multiuso per uso domestico, ristorazione e igiene generale.',
        material: 'Miscela di Polimeri Elastici',
        variants: 'Trasparente, Blu, Nero, Crema | Taglie: S, M, L/XL',
        packing: '100 pz / scatola, 20 scatole / cartone',
        image: '/images/reflex-florex-multipurpose-gloves.webp',
        badges: ['Morbida Struttura', 'Multisuperficie', 'Economico']
      },
      {
        id: 'flex-kids',
        name: 'Guanti Trasparenti per Bambini FLEX',
        subtitle: 'Taglia Speciale per Bambini (3-9 Anni)',
        description: 'Guanti trasparenti senza lattice sicuri per disegno, scuola e contatto alimentare dei bambini.',
        material: 'TPE Senza Lattice',
        variants: 'Trasparente | Taglia Standard Bambino (3-9 Anni)',
        packing: '50 pz / scatola, 40 scatole / cartone',
        image: '/images/reflex-kids-disposable-gloves.webp',
        badges: ['Per Bambini', '3-9 Anni', 'Uso Alimentare']
      }
    ],

    applicationsTitle: 'Campi di Applicazione',
    applicationsLead: 'I guanti REFLEX sono certificati per i settori medico, alimentare e industriale.',

    applications: [
      {
        title: 'Medicina e Sanità',
        description: 'Esami clinici, cura dei pazienti e laboratori secondo CE 2841 e EN ISO 374-5.',
        image: '/images/reflex-app-medical-laboratory.webp'
      },
      {
        title: 'Lavorazione Alimenti e Ristorazione',
        description: 'Certificati per il contatto diretto con gli alimenti in cucine commerciali e industria alimentare.',
        image: '/images/reflex-app-food-catering.webp'
      },
      {
        title: 'Cura della Persona e Igiene',
        description: 'Protezione delle mani da tinte e sostanze chimiche nei saloni di bellezza e igiene.',
        image: '/images/reflex-app-cosmetics-hygiene.webp'
      },
      {
        title: 'Casa, Giardinaggio e Pulizia',
        description: 'Protezione resistente per pulizie professionali, agricoltura e manutenzione.',
        image: '/images/reflex-app-gardening-home.webp'
      }
    ],

    galleryTitle: 'Galleria di Qualità e Tecnologia',
    galleryLead: 'Panoramica di imballaggi, certificati e tecnologia ecologica REFLEX.',

    galleryItems: [
      {
        title: 'TPE 100% Riciclabile ed Ecologico',
        tag: 'Ambiente',
        image: '/images/reflex-feature-eco-friendly.webp'
      },
      {
        title: 'Tecnologia in Copolimero Traspirante',
        tag: 'Ergonomia',
        image: '/images/reflex-feature-breathable-technology.webp'
      },
      {
        title: 'Produzione Turca Certificata ad Alta Capacità',
        tag: 'Produzione',
        image: '/images/reflex-feature-certified-production.webp'
      },
      {
        title: 'Linee di Imballaggio a Esenyurt',
        tag: 'Stabilimento',
        image: '/images/reflex-manufacturing-facility.webp'
      }
    ],

    downloadTitle: 'Scarica il Catalogo Ufficiale REFLEX',
    downloadLead: 'Dettagli tecnici, tabelle di codici a barre e dimensioni dei pallet nel catalogo PDF.',
    downloadButton: 'Scarica il Catalogo REFLEX (PDF)',
    pdfNotice: 'Documento PDF ufficiale · 6.8 MB · Contiene specifiche complete.',

    rfqTitle: 'Richiedi un Offerta Commerciale',
    rfqLead: 'Importatori e distributori: invia quantità e paese di destinazione per una valutazione commerciale.',
    formLabels: {
      name: 'Nome Completo / Persona di Contatto',
      email: 'E-mail Aziendale',
      phone: 'Telefono / WhatsApp',
      company: 'Nome Azienda & Stato Importatore',
      country: 'Paese di Destinazione',
      product: 'Gruppo Prodotti REFLEX Selezionato',
      volume: 'Quantità Stimata / Pallet',
      notes: 'Note su Incoterms e Specifiche',
      submit: 'Invia Richiesta di Preventivo',
      successMessage: 'La tua richiesta è stata registrata. Il nostro team export valuterà le tue specifiche.'
    }
  },

  ru: {
    metaTitle: 'B2B поставка одноразовых перчаток REFLEX | CTSEG Medical Sourcing',
    metaDescription: 'CTSEG поставляет ассортимент одноразовых перчаток REFLEX (TPE, смотровые, виниловые, кополимерные) международным импортерам и дистрибьюторам.',
    eyebrow: 'Медицинский и защитный ассортимент',
    heroTitle: 'Одноразовые и смотровые перчатки REFLEX',
    heroLead: 'Высокопроизводительные решения для TPE, смотровых, термовиниловых и кополимерных перчаток для международных импортеров и дистрибьюторов.',
    heroBadges: ['Сертификация CE 2841 и ISO 9001', '100% перерабатываемый TPE', 'Безопасно для пищевых продуктов', 'Экспортная логистика'],
    ctaQuote: 'Запросить расчет',
    ctaCatalog: 'Скачать официальный каталог (PDF)',
    ctaProducts: 'Смотреть продукцию',

    aboutEyebrow: 'Производственная мощность и стандарты',
    aboutTitle: 'Крупносерийное производство и соответствие стандартам',
    aboutText1: 'Произведенные в Стамбуле (Турция) перчатки REFLEX изготавливаются на автоматизированных высокотехнологичных линиях в режиме 24/7. REFLEX производит медицинские смотровые и гигиенические перчатки.',
    aboutText2: 'Производственные мощности соответствуют стандартам аккредитованных лабораторий и имеют сертификаты CE 2841, EN ISO 374-1 Type C, EN 420+A1, EN ISO 374-5 и ISO 9001.',
    aboutRoleTitle: 'Коммерческие услуги CTSEG',
    aboutRoleText: 'CTSEG выступает в качестве международного торгового и закупочного партнера продукции REFLEX. Мы содействуем импортерам в подготовке экспортной документации, сертификатов анализа (COA) и логистическом сопровождении.',
    aboutMarketsTitle: 'Целевые рынки',
    aboutMarketsList: ['Union Européenne & UK', 'Pays des Balkans', 'Moyen-Orient', 'Afrique du Nord', 'Importateurs Globaux'],

    categoriesTitle: 'Portefeuille de Produits REFLEX',
    categoriesLead: 'Découvrez la gamme complète de gants de protection et d\'examen REFLEX.',

    categories: [
      {
        id: 'flex-hitech',
        name: 'Gants Hybrides FLEX Hi-Tech TPE',
        subtitle: 'Technologie Hybride de Nouvelle Génération',
        description: 'Alternative économique au latex et au nitrile. Texture douce, haute élasticité et sans poudre.',
        material: 'TPE (Élastomère Thermoplastique)',
        variants: 'Noir, Bleu, Blanc | Tailles: S, M, L, XL',
        packing: '100 pcs / boîte, 20 boîtes / carton',
        image: '/images/reflex-flex-hitech-gloves.webp',
        badges: ['Sans Latex', 'Sans Poudre', 'Usage Alimentaire']
      },
      {
        id: 'medilex-exam',
        name: 'Gants d\'Examen MEDILEX (Healthy Touch)',
        subtitle: 'Examen Médical et Contact Sanitaire',
        description: 'Gants d\'examen non stériles pour examens cliniques et milieux de santé.',
        material: 'Mélange Polymère Médical / TPE',
        variants: 'Vert, Rose, Bleu, Noir | Tailles: S, M, L/XL',
        packing: '100 pcs / boîte, 20 boîtes / carton',
        image: '/images/reflex-medilex-examination-gloves.webp',
        badges: ['Médical CE 2841', 'EN ISO 374-5 Antivirus', 'Non Stérile']
      },
      {
        id: 'winlyex-thermo-vinyl',
        name: 'Gants Thermo Vinyle WINLYEX Extra',
        subtitle: 'Protection Extra Épaisse et Résistante',
        description: 'Formulation vinyle thermo extra épaisse avec une haute résistance chimique et une réduction de 70% de l\'empreinte carbone.',
        material: 'Composé Thermo Vinyle',
        variants: 'Violet, Vert, Transparent, Rose | Tailles: S, M, L/XL',
        packing: '100 pcs / boîte, 20 boîtes / carton',
        image: '/images/reflex-winlyex-thermo-vinyl-gloves.webp',
        badges: ['Extra Fort', 'Économie de Carbone', 'Haute Barrière']
      },
      {
        id: 'slimfit-copolymer',
        name: 'Gants Sensibles en Copolymère SLIMFIT',
        subtitle: 'Technologie Respirante et Anti-Transpiration',
        description: 'Conçus avec une technologie respirante pour éviter la transpiration des mains tout en maintenant la sensibilité tactile.',
        material: 'Copolymère Sans Poudre',
        variants: 'Noir, Bleu, Crème | Tailles: S, M, L/XL',
        packing: '100 pcs / boîte, 20 boîtes / carton',
        image: '/images/reflex-slimfit-copolymer-gloves.webp',
        badges: ['Respirant', 'Anti-Transpiration', 'Recyclable']
      },
      {
        id: 'winlyex-powder-free',
        name: 'Gants Sans Poudre WINLYEX',
        subtitle: 'Gant Hygiénique Sans Odeur',
        description: 'Gants de protection standards pour éviter les souillures et les odeurs lors de la préparation alimentaire et du nettoyage.',
        material: 'TPE Sans Poudre',
        variants: 'Blanc | Tailles: S, M, L/XL',
        packing: '100 pcs / boîte, 20 boîtes / carton',
        image: '/images/reflex-winlyex-powder-free-gloves.webp',
        badges: ['Sans Poudre', 'Barrière Anti-Odeur', 'Multi-Usages']
      },
      {
        id: 'florex-multipurpose',
        name: 'Gants Multi-Usages FLOREX',
        subtitle: 'Design Élastique et Texture Douce',
        description: 'Gants pratiques multi-usages pour usage domestique, restauration et hygiène générale.',
        material: 'Mélange de Polymères Élastiques',
        variants: 'Transparent, Bleu, Noir, Crème | Tailles: S, M, L/XL',
        packing: '100 pcs / boîte, 20 boîtes / carton',
        image: '/images/reflex-florex-multipurpose-gloves.webp',
        badges: ['Texture Douce', 'Multi-Surfaces', 'Économique']
      },
      {
        id: 'flex-kids',
        name: 'Gants Transparents pour Enfants FLEX',
        subtitle: 'Taille Spéciale Enfants (3-9 Ans)',
        description: 'Gants transparents sans latex sûrs pour le dessin, l\'école et le contact alimentaire des enfants.',
        material: 'TPE Sans Latex',
        variants: 'Transparent | Taille Standard Enfant (3-9 Ans)',
        packing: '50 pcs / boîte, 40 boîtes / carton',
        image: '/images/reflex-kids-disposable-gloves.webp',
        badges: ['Pour Enfants', '3-9 Ans', 'Usage Alimentaire']
      }
    ],

    applicationsTitle: 'Domaines d\'Application',
    applicationsLead: 'Les gants REFLEX sont certifiés pour les exigences médicales, alimentaires et industrielles.',

    applications: [
      {
        title: 'Médecine et Santé',
        description: 'Examens cliniques, soins aux patients et laboratoires selon CE 2841 et EN ISO 374-5.',
        image: '/images/reflex-app-medical-laboratory.webp'
      },
      {
        title: 'Transformation Alimentaire et Restauration',
        description: 'Certifiés pour le contact direct avec les aliments dans les cuisines commerciales et l\'industrie alimentaire.',
        image: '/images/reflex-app-food-catering.webp'
      },
      {
        title: 'Soins Personnels et Hygiène',
        description: 'Protection des mains contre les teintures et produits chimiques dans les salons de beauté.',
        image: '/images/reflex-app-cosmetics-hygiene.webp'
      },
      {
        title: 'Maison, Jardinage et Nettoyage',
        description: 'Protection résistante pour le nettoyage professionnel, l\'agriculture et la maintenance.',
        image: '/images/reflex-app-gardening-home.webp'
      }
    ],

    galleryTitle: 'Galerie de Qualité et Technologie',
    galleryLead: 'Aperçu des emballages, certificats et de la technologie écologique REFLEX.',

    galleryItems: [
      {
        title: 'TPE 100% Recyclable et Écologique',
        tag: 'Environnement',
        image: '/images/reflex-feature-eco-friendly.webp'
      },
      {
        title: 'Technologie en Copolymère Respirante',
        tag: 'Ergonomie',
        image: '/images/reflex-feature-breathable-technology.webp'
      },
      {
        title: 'Production Turque Certifiée à Haute Capacité',
        tag: 'Fabrication',
        image: '/images/reflex-feature-certified-production.webp'
      },
      {
        title: 'Lignes d\'Emballage à Esenyurt',
        tag: 'Usine',
        image: '/images/reflex-manufacturing-facility.webp'
      }
    ],

    downloadTitle: 'Télécharger le Catalogue Officiel REFLEX',
    downloadLead: 'Détails techniques, tableaux de codes-barres et dimensions des palettes dans le catalogue PDF.',
    downloadButton: 'Télécharger le Catalogue REFLEX (PDF)',
    pdfNotice: 'Document PDF officiel · 6.8 MB · Contient les spécifications complètes.',

    rfqTitle: 'Demander un Devis Commercial',
    rfqLead: 'Importateurs et distributeurs: envoyez les quantités et le pays de destination pour une évaluation commerciale.',
    formLabels: {
      name: 'Nom Complet / Personne de Contact',
      email: 'E-mail Professionnel',
      phone: 'Téléphone / WhatsApp',
      company: 'Nom de l\'Entreprise & Statut d\'Importateur',
      country: 'Pays de Destination',
      product: 'Groupe de Produits REFLEX Sélectionné',
      volume: 'Quantité Estimée / Palettes',
      notes: 'Remarques sur Incoterms & Spécifications',
      submit: 'Envoyer la Demande de Devis',
      successMessage: 'Votre demande a été enregistrée. Notre équipe export étudiera vos spécifications.'
    }
  }
};
