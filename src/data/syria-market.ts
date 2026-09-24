export type SyriaMarketLocale = 'tr' | 'en';

export type SyriaMarketPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  directAnswerTitle: string;
  directAnswer: string;
  buyerTitle: string;
  buyerText: string;
  buyerCta: string;
  sellerTitle: string;
  sellerText: string;
  sellerCta: string;
  sectorsTitle: string;
  sectorsLead: string;
  sectors: string[];
  processTitle: string;
  process: string[];
  complianceTitle: string;
  complianceText: string;
  boundariesTitle: string;
  boundaries: string[];
  faq: { question: string; answer: string }[];
};

export const syriaMarketContent: Record<SyriaMarketLocale, SyriaMarketPage> = {
  tr: {
    slug: 'suriye-pazarina-ihracat-ve-tedarik',
    eyebrow: 'TÜRKİYE ⇄ SURİYE · B2B TEDARİK VE PAZARA GİRİŞ',
    title: 'Suriye pazarı için Türkiye’den tedarik ve B2B ticaret koordinasyonu',
    description: 'CTSEG, Suriyeli kurumsal alıcıların Türkiye’de üretici ve tedarikçi araştırmasına; Türk üreticilerin ise Suriye’de alıcı, ithalatçı ve distribütör geliştirmesine yönelik B2B sourcing, RFQ ve ticari doğrulama süreçlerini koordine eder.',
    directAnswerTitle: 'CTSEG Türkiye–Suriye ticaretinde nasıl çalışır?',
    directAnswer: 'Suriyeli alıcının ürün, spesifikasyon, miktar, hedef teslim noktası ve belge ihtiyacı netleştirilir; Türkiye’de uygun üretici veya tedarikçiler araştırılır, ticari koşullar aynı RFQ yapısında karşılaştırılır ve karşı taraf bilgileri proje kapsamına göre doğrulanır. Türk üreticiler için ise ürünün Suriye pazarına ticari uygunluğu değerlendirilir; hedef alıcı, ithalatçı veya distribütör profilleri araştırılır ve ilk B2B temas süreci koordine edilir.',
    buyerTitle: 'Suriye’den Türkiye’de ürün veya üretici arıyorsanız',
    buyerText: 'Ürün adı, teknik şartname, yaklaşık miktar veya satın alma sıklığı, teslim şehri, tercih edilen Incoterm ve gerekli kalite belgelerini paylaşın. CTSEG önce talebin ticari ve operasyonel uygulanabilirliğini değerlendirir; uygun olduğunda Türkiye’de kaynak araştırması ve RFQ sürecini başlatır.',
    buyerCta: 'Türkiye’den tedarik talebi gönder',
    sellerTitle: 'Türkiye’den Suriye pazarına açılmak istiyorsanız',
    sellerText: 'Şirket profilinizi, ürün grubunuzu, kapasitenizi, mevcut sertifikalarınızı, hedef müşteri tipinizi ve ticari beklentinizi paylaşın. CTSEG pazar uygunluğu, potansiyel alıcı/distribütör profilleri ve uygulanabilir ilk temas yolunu değerlendirir.',
    sellerCta: 'Suriye pazar giriş değerlendirmesi talep et',
    sectorsTitle: 'Öncelikli B2B talep alanları',
    sectorsLead: 'Her kategori ürün bazında değerlendirilir; kapasite, mevzuat, ödeme, lojistik ve karşı taraf doğrulaması ayrı ele alınır.',
    sectors: [
      'Yapı ve altyapı malzemeleri',
      'Elektrik, enerji ve elektromekanik ekipmanlar',
      'Gıda, değirmencilik ürünleri ve temel hammaddeler',
      'Ambalaj, dolum ve üretim ekipmanları',
      'Endüstriyel makine ve yedek parçalar',
      'Tarım, sulama ve yem / gıda üretim girdileri',
      'Medikal sarf ve sağlık ekipmanları',
      'Tekstil, private label ve proje bazlı üretim'
    ],
    processTitle: 'Türkiye–Suriye ticari değerlendirme akışı',
    process: [
      'Talep, teknik spesifikasyon, miktar ve teslim noktası netleştirilir',
      'Ürün ve taraflar için uygulanabilir ticaret, ödeme ve belge gereklilikleri kontrol edilir',
      'Uygun üretici, tedarikçi, alıcı veya distribütör adayları araştırılır',
      'RFQ, teklif, numune ve ticari şartlar ortak formatta karşılaştırılır',
      'Yalnızca doğrulanabilir ve uygulanabilir seçenekler bir sonraki aşamaya taşınır'
    ],
    complianceTitle: 'Karşı taraf ve işlem doğrulaması zorunlu bir adımdır',
    complianceText: 'Suriye bağlantılı her ticari işlem ürün, taraflar, nihai kullanım, ödeme yöntemi, banka kanalı, sevkiyat rotası, gümrük ve yürürlükteki yaptırım / ihracat kontrolü kuralları bakımından ayrı değerlendirilir. CTSEG yaptırım, menşe, gümrük veya ödeme kısıtlarının aşılmasına yönelik yapı kurmaz; taraf ve işlem uygunluğu doğrulanmadan kesin tedarik veya ödeme garantisi vermez.',
    boundariesTitle: 'CTSEG’in garanti etmediği hususlar',
    boundaries: [
      'Belirli bir tedarikçinin veya alıcının mutlaka işlem yapacağını garanti etmez',
      'Web sitesindeki genel bilgi veya örnekleri bağlayıcı fiyat teklifi olarak sunmaz',
      'Ürün, banka, ödeme veya gümrük uygunluğunu doğrulama yapılmadan kesin kabul etmez',
      'Gerçekleşmemiş müşteri sonucu, satış hacmi veya başarı oranı iddiası kullanmaz'
    ],
    faq: [
      { question: 'Suriyeli bir firma Türkiye’den ürün arıyorsa CTSEG yardımcı olabilir mi?', answer: 'Evet. Ürün, spesifikasyon, miktar, teslim noktası ve belge ihtiyacı netleştirildikten sonra Türkiye’de üretici / tedarikçi araştırması, RFQ ve ticari karşılaştırma yapılabilir.' },
      { question: 'Türk üretici için Suriye’de alıcı veya distribütör araştırılabilir mi?', answer: 'Evet. Ürün, kapasite, fiyat yapısı, belgeler ve hedef müşteri tipi değerlendirildikten sonra uygun alıcı, ithalatçı veya distribütör profilleri araştırılabilir. Sonuç veya satış garantisi verilmez.' },
      { question: 'Suriye’ye her ürün gönderilebilir mi?', answer: 'Hayır. Ürün, taraflar, nihai kullanım, gümrük sınıflandırması, ödeme kanalı, ihracat kontrolü ve yürürlükteki kısıtlamalar işlem bazında kontrol edilmelidir.' },
      { question: 'CTSEG ödeme veya lojistiği garanti eder mi?', answer: 'Hayır. CTSEG uygulanabilir ödeme ve lojistik seçeneklerini değerlendirebilir ve koordinasyonu destekleyebilir; banka, taşıyıcı, gümrük veya üçüncü taraf performansını garanti etmez.' }
    ]
  },
  en: {
    slug: 'markets/syria',
    eyebrow: 'TÜRKIYE ⇄ SYRIA · B2B SOURCING & MARKET ENTRY',
    title: 'Türkiye–Syria B2B sourcing, supplier verification and market-entry coordination',
    description: 'CTSEG supports Syrian business buyers sourcing from Türkiye and Turkish manufacturers seeking buyers, importers or distributors in Syria through structured RFQs, supplier research, commercial comparison and counterparty qualification.',
    directAnswerTitle: 'How does CTSEG support Türkiye–Syria trade?',
    directAnswer: 'For Syrian buyers, CTSEG structures the product requirement, specification, volume, delivery point and documentation needs, researches suitable manufacturers or suppliers in Türkiye, normalises quotations through a common RFQ and qualifies counterparties according to the project scope. For Turkish manufacturers, CTSEG assesses commercial readiness for Syria, researches relevant buyer, importer and distributor profiles and coordinates qualified first-contact activity.',
    buyerTitle: 'If you are a Syrian buyer sourcing from Türkiye',
    buyerText: 'Share the product, technical specification, indicative volume or purchase frequency, delivery city, preferred Incoterm and required quality documents. CTSEG first assesses commercial and operational feasibility before starting supplier research and RFQ coordination.',
    buyerCta: 'Submit a Türkiye sourcing request',
    sellerTitle: 'If you are a Turkish manufacturer entering Syria',
    sellerText: 'Share your company profile, product range, capacity, available certifications, target customer profile and commercial expectations. CTSEG assesses market fit, relevant buyer/distributor profiles and a feasible first-contact route.',
    sellerCta: 'Request a Syria market-entry assessment',
    sectorsTitle: 'Priority B2B demand areas',
    sectorsLead: 'Each category is assessed product by product. Capacity, regulation, payment route, logistics and counterparty qualification are reviewed separately.',
    sectors: [
      'Construction and infrastructure materials',
      'Electrical, energy and electromechanical equipment',
      'Food, milling products and essential raw materials',
      'Packaging, filling and production equipment',
      'Industrial machinery and spare parts',
      'Agriculture, irrigation and feed / food-production inputs',
      'Medical consumables and healthcare equipment',
      'Textiles, private label and project-based manufacturing'
    ],
    processTitle: 'Türkiye–Syria commercial assessment workflow',
    process: [
      'Clarify product, specification, volume and delivery point',
      'Review applicable trade, payment, documentation and compliance requirements',
      'Research suitable manufacturers, suppliers, buyers or distributors',
      'Normalise RFQs, quotations, samples and commercial terms',
      'Progress only options that remain verifiable and commercially feasible'
    ],
    complianceTitle: 'Counterparty and transaction screening is part of the process',
    complianceText: 'Each Syria-related transaction must be assessed separately for product, counterparties, end use, payment method, banking route, shipment route, customs and applicable sanctions or export-control requirements. CTSEG does not structure transactions to circumvent sanctions, origin rules, customs requirements or payment restrictions and does not guarantee supply or payment before the transaction has been qualified.',
    boundariesTitle: 'What CTSEG does not guarantee',
    boundaries: [
      'A specific supplier or buyer will proceed with a transaction',
      'General website information or examples are binding quotations',
      'Product, banking, payment or customs eligibility before verification',
      'Invented client results, sales volumes or success-rate claims'
    ],
    faq: [
      { question: 'Can CTSEG help a Syrian company source products from Türkiye?', answer: 'Yes. Once the product, specification, volume, delivery point and documentation needs are clear, CTSEG can research manufacturers or suppliers in Türkiye and coordinate an RFQ and commercial comparison.' },
      { question: 'Can CTSEG research Syrian buyers or distributors for a Turkish manufacturer?', answer: 'Yes. After assessing product, capacity, pricing structure, documentation and target customer type, CTSEG can research relevant buyer, importer or distributor profiles. No sales outcome is guaranteed.' },
      { question: 'Can every product be supplied to Syria?', answer: 'No. Product classification, counterparties, end use, customs requirements, payment channel, export controls and current restrictions must be reviewed for the specific transaction.' },
      { question: 'Does CTSEG guarantee payment or logistics?', answer: 'No. CTSEG can assess feasible payment and logistics options and support coordination, but cannot guarantee the performance of banks, carriers, customs authorities or other third parties.' }
    ]
  }
};
