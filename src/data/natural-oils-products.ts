import type { OilLanguage } from './natural-oils';

export const naturalOilSlugs = [
  'rose-essential-oil',
  'lavender-essential-oil',
  'rose-water-hydrosol',
  'lavender-water-hydrosol',
  'botanical-carrier-oils',
  'botanical-extracts',
  'other-essential-oils'
] as const;

export type NaturalOilSlug = (typeof naturalOilSlugs)[number];

export interface NaturalOilProductDetail {
  name: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  botanicalName: string;
  lead: string;
  cardSummary: string;
  specs: [string, string][];
  applications: [string, string, string, string];
  rfqChecklist: [string, string, string, string];
  faq: [string, string][];
}

export const relatedNaturalOilsMap: Record<NaturalOilSlug, NaturalOilSlug[]> = {
  'rose-essential-oil': ['rose-water-hydrosol', 'lavender-essential-oil', 'botanical-carrier-oils', 'botanical-extracts'],
  'lavender-essential-oil': ['lavender-water-hydrosol', 'rose-essential-oil', 'other-essential-oils', 'botanical-carrier-oils'],
  'rose-water-hydrosol': ['rose-essential-oil', 'lavender-water-hydrosol', 'botanical-extracts', 'botanical-carrier-oils'],
  'lavender-water-hydrosol': ['lavender-essential-oil', 'rose-water-hydrosol', 'other-essential-oils', 'botanical-extracts'],
  'botanical-carrier-oils': ['rose-essential-oil', 'botanical-extracts', 'lavender-essential-oil', 'other-essential-oils'],
  'botanical-extracts': ['botanical-carrier-oils', 'rose-water-hydrosol', 'lavender-water-hydrosol', 'other-essential-oils'],
  'other-essential-oils': ['lavender-essential-oil', 'rose-essential-oil', 'botanical-carrier-oils', 'botanical-extracts']
};

export const naturalOilVisualMap: Record<NaturalOilSlug | 'hero', string> = {
  hero: '/images/natural-oils/natural-oils-hero.webp',
  'rose-essential-oil': '/images/natural-oils/rose-essential-oil.webp',
  'lavender-essential-oil': '/images/natural-oils/lavender-essential-oil.webp',
  'rose-water-hydrosol': '/images/natural-oils/rose-water-hydrosol.webp',
  'lavender-water-hydrosol': '/images/natural-oils/lavender-water-hydrosol.webp',
  'botanical-carrier-oils': '/images/natural-oils/botanical-carrier-oils.webp',
  'botanical-extracts': '/images/natural-oils/botanical-extracts.webp',
  'other-essential-oils': '/images/natural-oils/other-essential-oils.webp'
};

export const naturalOilProducts: Record<OilLanguage, Record<NaturalOilSlug, NaturalOilProductDetail>> = {
  tr: {
    'rose-essential-oil': {
      name: 'Gül Uçucu Yağı (Rose Essential Oil) Tedariği',
      metaTitle: 'Toptan Gül Yağı (Rosa damascena) B2B Tedariği | CTSEG',
      description: 'Türkiye çıkışlı Rosa damascena gül uçucu yağı için B2B tedarik, GC-MS analizi, numune doğrulama ve uluslararası RFQ koordinasyonu.',
      eyebrow: 'CTSEG · UÇUCU YAĞ TEDARİĞİ',
      botanicalName: 'INCI: Rosa Damascena Flower Oil · Buhar Distilasyonu',
      lead: 'CTSEG; parfümeri evleri, dermokozmetik üreticileri ve uluslararası hammadde distribütörleri için Türkiye’deki gül işleme sezonuna ve alıcı şartnamesine uygun Rosa damascena uçucu yağı tedarik seçeneklerini araştırır, numune ve teknik belge akışını koordine eder.',
      cardSummary: 'Parfümeri ve üst segment cilt bakımı formülasyonları için buhar distilasyonu Rosa damascena uçucu yağı ve gül türevleri B2B tedariği.',
      specs: [
        ['Üretim Yöntemi & Kalite', 'Geleneksel veya endüstriyel su/buhar distilasyonu (Otto of Rose) ve talep bazlı gül absolütü seçenekleri'],
        ['Analitik Doğrulama', 'Lot bazlı GC-MS kromatografi profili (citronellol, geraniol, nerol, stearopten oranları), COA ve SDS'],
        ['Endüstriyel Ambalaj', 'B2B alıma uygun mühürlü alüminyum flask, florinli kaplar veya özel koruyucu iç ambalaj'],
        ['Numune & MOQ Yaklaşımı', 'Formülasyon onayı için referans lot numunesi ve hedef hacme göre kademeli MOQ değerlendirmesi']
      ],
      applications: [
        'Fine fragrance ve niş parfümeri kompozisyonları',
        'Anti-aging ve bariyer destekleyici prestij cilt bakım serileri',
        'Aromaterapi ve profesyonel spa formülasyonları',
        'Fason kozmetik (contract manufacturing) aktif koku bileşenleri'
      ],
      rfqChecklist: [
        'Hedeflenen kalite tipi (buhar distilasyonu gül yağı veya absolüt)',
        'Talep edilen miktar (gram/kilogram) ve yıllık alım projeksiyonu',
        'Gerekli düzenleyici dosyalar (IFRA, Alerjen Beyanı, GC-MS, REACH durumu)',
        'Teslimat ülkesi, hava/kara lojistik tercihi ve Incoterm'
      ],
      faq: [
        ['CTSEG gül yağı üreticisi veya stok sahibi midir?', 'Hayır. CTSEG bağımsız bir B2B tedarik ve ticari koordinasyon evidir; alıcının GC-MS ve şartname beklentilerine uygun üretici/işleyici kanallarını doğrular ve teklif sürecini yönetir.'],
        ['Gül yağı alımlarında numune ve GC-MS uyumu nasıl yürütülür?', 'Talep edilen spesifikasyona göre ön analiz belgeleri (COA ve GC-MS) incelenir, alıcının laboratuvar testi için referans numune gönderimi koordine edilir.'],
        ['Fiyat ve stok garantisi önceden veriliyor mu?', 'Gül yağı hasat dönemine ve döviz/hammadde koşullarına duyarlı bir üründür; stok, lot uyumu ve fiyatlandırma yalnızca güncel RFQ değerlendirmesiyle teyit edilir.']
      ]
    },
    'lavender-essential-oil': {
      name: 'Lavanta Uçucu Yağı (Lavender Essential Oil) Tedariği',
      metaTitle: 'Toptan Lavanta Uçucu Yağı B2B Tedariği | CTSEG',
      description: 'Kozmetik, kişisel bakım ve aromaterapi üreticileri için Türkiye çıkışlı Lavandula angustifolia ve Lavandula intermedia uçucu yağı B2B tedariği.',
      eyebrow: 'CTSEG · UÇUCU YAĞ TEDARİĞİ',
      botanicalName: 'INCI: Lavandula Angustifolia Oil / Lavandula Hybrida Oil',
      lead: 'Cilt bakımı, kişisel bakım, ev kokulandırma ve aromaterapi üreticileri için linalool ve linalyl acetate profili tanımlı lavanta uçucu yağı alternatiflerini değerlendiriyor; numune, analiz ve ihracat sevkiyatını tek akışta koordine ediyoruz.',
      cardSummary: 'Kozmetik, kişisel bakım ve teknik koku uygulamaları için Lavandula angustifolia ve lavandin uçucu yağı B2B tedarik koordinasyonu.',
      specs: [
        ['Botanik Varyete', 'Lavandula angustifolia (tıbbi/ince lavanta) ve Lavandula intermedia / hybrida (lavandin) seçenekleri'],
        ['Kalite & Analiz', 'Linalool, linalyl acetate ve kafur (camphor) oranlarını gösteren lot bazlı GC-MS ve COA'],
        ['B2B Ambalaj Seçenekleri', '1 kg – 25 kg alüminyum bidonlar, 180 kg epoksi kaplı variller veya müşteri şartnamesine uygun kaplar'],
        ['Ticari Koordinasyon', 'Hasat lotu eşleştirme, numune doğrulama ve EXW / FOB / CIF / DAP teslimat planlaması']
      ],
      applications: [
        'Yatıştırıcı yüz ve vücut bakım kremleri, serumlar ve losyonlar',
        'Şampuan, duş jeli, sıvı sabun ve kişisel hijyen ürünleri',
        'Aromaterapi difüzör karışımları ve profesyonel masaj yağları',
        'Doğal ev bakım, deterjan ve ortam kokulandırma ürünleri'
      ],
      rfqChecklist: [
        'Tercih edilen tür (Lavandula angustifolia veya Lavandin)',
        'Hedef linalool / linalyl acetate aralığı veya farmakope/ISO referansı',
        'Sipariş hacmi, ambalaj tipi ve numune gereksinimi',
        'Hedef pazar mevzuat belgeleri (SDS, IFRA, Alerjen listesi)'
      ],
      faq: [
        ['Angustifolia ve Lavandin arasındaki fark RFQ sürecinde nasıl yönetilir?', 'Parfümeri ve hassas cilt bakımında genellikle düşük kafurlu Lavandula angustifolia, sabun ve ev bakımında ise yüksek verimli Lavandin tercih edilir; RFQ aşamasında kullanım alanınıza göre doğru varyete eşleştirilir.'],
        ['Büyük hacimli varil bazlı alımlar mümkün mü?', 'Evet, alıcının talep ettiği hacme göre 5 kg, 25 kg veya varil bazlı B2B ambalaj seçenekleri uygun tedarik kanallarıyla değerlendirilir.'],
        ['Numune ile sevkiyat lotu aynı profilde mi sunulur?', 'Tedarik koordinasyonunda onaylanan referans numunenin ait olduğu parti veya eşdeğer GC-MS tolerans aralığı baz alınır.']
      ]
    },
    'rose-water-hydrosol': {
      name: 'Gül Suyu ve Gül Hidrosolü (Rose Hydrosol) Tedariği',
      metaTitle: 'Toptan Gül Suyu ve Gül Hidrosolü B2B Tedariği | CTSEG',
      description: 'Kozmetik formülasyonlar ve private label üretim için buhar distilasyonu Rosa damascena gül suyu ve hidrosolü uluslararası B2B tedariği.',
      eyebrow: 'CTSEG · HİDROSOL & ÇİÇEK SULARI',
      botanicalName: 'INCI: Rosa Damascena Flower Water · Buhar Distilasyonu Hidrosolü',
      lead: 'Tonik, mist, misel su, emülsiyon ve nemlendirici kozmetik formülasyonlarında su fazı bileşeni olarak kullanılan doğal gül hidrosolü için koruyuculu/koruyucusuz B2B tedarik seçeneklerini, mikrobiyolojik analizleri ve dökme ambalaj lojistiğini koordine ediyoruz.',
      cardSummary: 'Tonik, yüz spreyi ve emülsiyon bazları için buhar distilasyonundan elde edilen doğal Rosa damascena çiçek suyu ve hidrosol tedariği.',
      specs: [
        ['Ürün Tipi', '%100 buhar distilasyonu birinci/ikinci distilat gül hidrosolü (sentetik esans katkısız seçenekler)'],
        ['Kalite Parametreleri', 'pH aralığı, uçucu yağ oranı, mikrobiyolojik yük (TAMC/TYMC) ve koruyucu sistemi seçenekleri'],
        ['Dökme Ambalaj', '20 L – 30 L HDPE bidon, 200 L gıda/kozmetik uyumlu varil veya 1.000 L IBC tank'],
        ['Belge Kapsamı', 'COA, Mikrobiyolojik Analiz Raporu, SDS, INCI dağılımı ve menşe belgeleri']
      ],
      applications: [
        'Yüz tonikleri, nemlendirici spreyler (face mist) ve misel sular',
        'Krem, losyon ve serum emülsiyonlarında botanik su fazı ikamesi',
        'Islak mendil, kağıt maske (sheet mask) ve temizleme solüsyonları',
        'Saç derisi yatıştırıcı tonikler ve vücut bakım spreyleri'
      ],
      rfqChecklist: [
        'Koruyucu durumu (koruyucusuz saf hidrosol veya kozmetik koruyucu sistemli)',
        'Hedef uçucu yağ kalıntı oranı ve organoleptik profil beklentisi',
        'Sipariş miktarı (bidon, varil veya IBC tank) ve sevkiyat sıklığı',
        'Hedef ülke gümrük ve kozmetik bildirim gereklilikleri'
      ],
      faq: [
        ['Gül hidrosolü ile esanslı gül suyu arasındaki fark nedir?', 'Gerçek gül hidrosolü, Rosa damascena yapraklarının buhar distilasyonu sırasında elde edilen aromatik distilattır; deiyonize suya sentetik esans karıştırılarak yapılan ürünlerden farklıdır. RFQ sürecinde alıcının talep ettiği distilat kalitesi açıkça tanımlanır.'],
        ['IBC tank veya varil bazında ihracat sevkiyatı yapılabiliyor mu?', 'Evet, endüstriyel kozmetik üreticileri için 200 L varil ve 1.000 L IBC tank bazında kara ve deniz yolu lojistiği değerlendirilir.'],
        ['Koruyucusuz gül suyu tedarik edilebilir mi?', 'Alıcının formülasyon ve depolama şartlarına göre mikrofiltrasyonlu koruyucusuz veya hedef pazar mevzuatına uygun koruyuculu seçenekler incelenir.']
      ]
    },
    'lavender-water-hydrosol': {
      name: 'Lavanta Suyu ve Hidrosolü (Lavender Hydrosol) Tedariği',
      metaTitle: 'Toptan Lavanta Suyu ve Hidrosolü B2B Tedariği | CTSEG',
      description: 'Cilt bakımı, bebek bakımı ve kozmetik üretimi için doğal buhar distilasyonu lavanta suyu (Lavandula hidrosolü) B2B tedarik koordinasyonu.',
      eyebrow: 'CTSEG · HİDROSOL & ÇİÇEK SULARI',
      botanicalName: 'INCI: Lavandula Angustifolia Flower Water / Lavandula Hybrida Flower Water',
      lead: 'Yağlı/karma cilt tonikleri, güneş sonrası bakım ürünleri, saç bakım losyonları ve doğal kozmetik serileri için lavanta uçucu yağı distilasyonundan elde edilen bitkisel lavanta hidrosolü tedariğini teknik şartname ve numune onayıyla yönetiyoruz.',
      cardSummary: 'Arındırıcı cilt bakımı, saç tonikleri ve doğal kozmetik üretimi için buhar distilasyonu lavanta çiçek suyu (hidrosol) B2B tedariği.',
      specs: [
        ['Üretim Kaynağı', 'Lavanta çiçeklerinin buhar distilasyonundan elde edilen saf bitkisel distilat (hidrosol)'],
        ['Analitik Kontrol', 'pH, berraklık, çözünmüş uçucu bileşen profili ve mikrobiyolojik uygunluk (COA)'],
        ['Endüstriyel Ambalaj', '20 L / 25 L HDPE bidon, 200 L varil ve 1.000 L IBC konteyner seçenekleri'],
        ['Mevzuat & İhracat', 'SDS/MSDS, teknik spesifikasyon föyü (TDS), alerjen beyanı ve ihracat dolaşım belgeleri']
      ],
      applications: [
        'Gözenek sıkılaştırıcı ve sebum dengeleyici yüz tonikleri',
        'Güneş sonrası (after-sun) ferahlatıcı spreyler ve jeller',
        'Hassas cilt ve bebek bakım formülasyonlarında bitkisel su fazı',
        'Saç derisi bakım losyonları, şampuan bazları ve tekstil/oda spreyleri'
      ],
      rfqChecklist: [
        'Botanik kaynak tercihi (Angustifolia veya Lavandin hidrosolü)',
        'Koruyucu sistemi tercihi ve mikrobiyolojik limitler',
        'Talep edilen ambalaj tipi (HDPE bidon, varil, IBC) ve toplam litre/kg',
        'Numune değerlendirme adresi ve hedef teslimat koşulları'
      ],
      faq: [
        ['Lavanta hidrosolü hangi kozmetik ürünlerde su yerine kullanılır?', 'Toniklerde, yüz spreylerinde, jel ve emülsiyon bazlarında deiyonize suyun tamamı veya bir kısmı yerine doğal aktif su fazı olarak kullanılır.'],
        ['Partiler arası koku ve pH standardizasyonu nasıl sağlanır?', 'Her üretim lotu için COA ve pH/organoleptik değerler incelenir; alıcıya sevkiyat öncesi lot numunesi veya analiz raporu sunulur.'],
        ['Minimum sipariş miktarı (MOQ) nedir?', 'MOQ; ambalaj tipine (bidon, varil veya IBC) ve koruyucu/filtrasyon gereksinimine göre RFQ aşamasında netleştirilir.']
      ]
    },
    'botanical-carrier-oils': {
      name: 'Bitkisel Sabit Yağlar (Botanical Carrier Oils) Tedariği',
      metaTitle: 'Toptan Bitkisel Sabit Yağlar ve Baz Yağlar B2B Tedariği | CTSEG',
      description: 'Kozmetik ve kişisel bakım üreticileri için soğuk sıkım ve rafine bitkisel sabit yağlar (tatlı badem, jojoba, kuşburnu, üzüm çekirdeği, kayısı çekirdeği) B2B tedariği.',
      eyebrow: 'CTSEG · SABİT & TAŞIYICI YAĞLAR',
      botanicalName: 'Soğuk Sıkım (Cold-Pressed) & Rafine Kozmetik Baz Yağlar',
      lead: 'Cilt serumları, saç bakım yağları, masaj ürünleri ve emülsiyon formülasyonları için yağ asidi profili (FAME), peroksit değeri ve asitlik kriterleri doğrulanmış bitkisel sabit ve taşıyıcı yağların B2B tedariğini koordine ediyoruz.',
      cardSummary: 'Tatlı badem, kayısı çekirdeği, üzüm çekirdeği, kuşburnu, nar çekirdeği ve jojoba gibi soğuk sıkım ve rafine kozmetik baz yağların B2B tedariği.',
      specs: [
        ['Başlıca Ürün Grupları', 'Tatlı badem, kayısı çekirdeği, üzüm çekirdeği, kuşburnu, nar çekirdeği, jojoba, argan, çörek otu ve susam yağları'],
        ['İşleme & Kalite', 'Soğuk sıkım (cold-pressed / virgin) veya kozmetik sınıfı rafine/deodorize seçenekler'],
        ['Analitik Parametreler', 'Yağ asidi kompozisyonu (GC), serbest yağ asitliği, peroksit değeri, iyot değeri ve kırılma indisi (COA)'],
        ['Ambalaj & Lojistik', '20 kg – 25 kg HDPE/metal bidon, 190 kg varil veya IBC seçenekleri; azot üst boşluklu koruma opsiyonu']
      ],
      applications: [
        'Yüz bakım serumları, kuru yağ karışımları ve bariyer onarıcı kremler',
        'Saç bakım yağları, maskeler ve saç derisi besleyici kompleksler',
        'Uçucu yağ seyreltme bazları ve profesyonel aromaterapi masaj yağları',
        'Güneş bakım ürünleri, dudak balsamları ve doğal sabun/temizleyiciler'
      ],
      rfqChecklist: [
        'Talep edilen sabit yağ(lar) ve INCI / CAS numarası',
        'İşleme tercihi (soğuk sıkım virgin veya rafine/deodorize)',
        'Maksimum peroksit / asitlik değeri ve spesifik yağ asidi profili',
        'Sipariş hacmi, ambalaj tercihi ve hedef ülke teslimat şekli'
      ],
      faq: [
        ['Soğuk sıkım mı yoksa rafine sabit yağ mı tercih edilmeli?', 'Aktif serumlarda ve doğal iddialı ürünlerde vitamin/fitosterol içeriği korunmuş soğuk sıkım yağlar; renk ve koku nötrlüğü ile uzun raf ömrü aranan emülsiyonlarda ise rafine kozmetik yağlar tercih edilir. İhtiyacınıza göre her iki grup da değerlendirilir.'],
        ['Birden fazla sabit yağ tek bir sevkiyatta konsolide edilebilir mi?', 'Evet, CTSEG farklı bitkisel baz yağları ve uçucu yağları alıcının sipariş listesine göre tek bir ihracat operasyonunda birleştirebilir.'],
        ['Oksidasyon ve raf ömrü kontrolü nasıl yapılır?', 'RFQ ve sevkiyat öncesinde lotun üretim tarihi, peroksit değeri ve asitlik analizleri (COA) kontrol edilerek uygun ambalajda sevk edilmesi koordine edilir.']
      ]
    },
    'botanical-extracts': {
      name: 'Bitkisel Özler ve Kozmetik Aktif Ham Maddeleri',
      metaTitle: 'Toptan Bitkisel Özler (Botanical Extracts) B2B Tedariği | CTSEG',
      description: 'Kozmetik üreticileri ve formülatörler için suda veya yağda çözünen bitkisel ekstraktlar, gliseritler ve bitkisel aktif ham maddeleri B2B tedariği.',
      eyebrow: 'CTSEG · BİTKİSEL ÖZLER & AKTİFLER',
      botanicalName: 'Gliserinli, Propilen/Butilen Glikollü, Yağ Bazlı (Maserat) & Toz Ekstraktlar',
      lead: 'Dermokozmetik, cilt bakımı ve saç bakımı formülasyonlarında fonksiyonel etkinlik sağlayan sıvı ve toz bitkisel özlerin (botanical extracts), taşıyıcı çözücü sistemine ve teknik spesifikasyona uygun B2B tedariğini yönetiyoruz.',
      cardSummary: 'Cilt ve saç bakımı formülasyonları için gliseritler, yağ bazlı maseratlar, glikolik ekstraktlar ve standardize bitkisel özlerin B2B tedariği.',
      specs: [
        ['Çözücü & Form Seçenekleri', 'Su/gliserin (hydroglyceric), propanediol, yağda çözünen (liposoluble maserat) ve kuru/toz ekstraktlar'],
        ['Botanik Çeşitlilik', 'Centella, papatya, aynısefa (calendula), yeşil çay, meyan kökü, gül, lavanta, biberiye, sarmaşık ve Anadolu florası özleri'],
        ['Teknik Dokümantasyon', 'TDS, COA, SDS, INCI bileşen yüzdeleri, koruyucu bilgisi ve kullanım oranı tavsiyeleri'],
        ['B2B Ambalaj', '1 kg, 5 kg, 10 kg ve 25 kg kozmetik sınıfı sızdırmaz ambalajlar']
      ],
      applications: [
        'Aydınlatıcı, yatıştırıcı ve antioksidan yüz serumları ile ampuller',
        'Saç dökülmesi karşıtı tonikler ve bitkisel şampuan formülasyonları',
        'Göz çevresi kremleri, maskeler ve dermokozmetik losyonlar',
        'Vücut sıkılaştırıcı jeller ve hassas cilt temizleme ürünleri'
      ],
      rfqChecklist: [
        'Hedef bitkisel kaynak (Latince adı) ve istenen ekstrakt formu (sıvı/toz)',
        'Tercih edilen taşıyıcı sistem (gliserin, propanediol, sabit yağ vb.) ve koruyucu kısıtları',
        'Varsa aranan aktif madde / ekstrakt oranı (DER) ve pH/renk kriteri',
        'Numune talebi, sipariş miktarı ve hedef ülke mevzuat gerekliliği'
      ],
      faq: [
        ['Kozmetik formülasyona göre çözücü sistemi seçilebilir mi?', 'Evet. Doğal/COSMOS uyumlu formüller için gliserin-su veya propanediol bazlı ekstraktlar, susuz (anhydrous) ürünler için ise yağda çözünen ekstraktlar RFQ kapsamında değerlendirilir.'],
        ['Ekstraktların INCI dağılımı ve koruyucu içeriği paylaşılıyor mu?', 'Evet, kozmetik ürün güvenlik değerlendirmesi (CPSR) ve etiketleme için tam INCI kırılımı, CAS/EINECS numaraları ve koruyucu oranları teknik dosyada (TDS/COA) sunulur.'],
        ['Özel bitkisel karışım (blend) talepleri değerlendiriliyor mu?', 'Yeterli B2B hacmi olan projelerde birden fazla bitkisel özün tek bir kompleks halinde tedariği uygun üretici kanallarıyla görüşülebilir.']
      ]
    },
    'other-essential-oils': {
      name: 'Diğer Uçucu Yağlar (Anadolu & Akdeniz Florası) Tedariği',
      metaTitle: 'Toptan Kekik, Biberiye, Defne ve Uçucu Yağlar B2B Tedariği | CTSEG',
      description: 'Türkiye çıkışlı kekik (oregano/thyme), defne yaprağı, biberiye, adaçayı, nane, okaliptüs ve narenciye uçucu yağları için B2B tedarik ve RFQ koordinasyonu.',
      eyebrow: 'CTSEG · AROMATİK & UÇUCU YAĞLAR',
      botanicalName: 'Origanum, Thymus, Laurus nobilis, Rosmarinus, Salvia, Mentha, Citrus Oils',
      lead: 'Türkiye’nin zengin endemik ve kültür florasından elde edilen kekik (carvacrol/thymol), defne yaprağı (1,8-cineole), biberiye, adaçayı, sedir ve narenciye uçucu yağlarını kozmetik, kişisel bakım, aromaterapi ve endüstriyel alıcılar için tedarik ediyoruz.',
      cardSummary: 'Kekik, defne yaprağı, biberiye, adaçayı, nane ve narenciye uçucu yağlarında GC-MS doğrulamalı uluslararası B2B tedarik koordinasyonu.',
      specs: [
        ['Başlıca Ürünler', 'Kekik yağı (Origanum / Thymus), defne yaprağı yağı, biberiye, adaçayı, nane, okaliptüs, ardıç, günlük (sığla) ve narenciye yağları'],
        ['Biyoaktif Marker Analizi', 'Carvacrol, thymol, 1,8-cineole, camphor, menthol ve limonene oranlarını doğrulayan GC-MS ve COA'],
        ['Endüstriyel Ambalaj', '1 kg – 25 kg alüminyum/HDPE kaplar ve 180 kg varil bazlı ihracat ambalajları'],
        ['İhracat & Mevzuat', 'SDS/MSDS (GHS/CLP uyumlu), IFRA sertifikası, Alerjen tablosu, Menşe ve Fitosaniter koordinasyonu']
      ],
      applications: [
        'Saç derisi bakımı, kepek karşıtı şampuanlar ve bitkisel sabunlar',
        'Ağız ve diş sağlığı ürünleri (kekik, nane, adaçayı, okaliptüs bileşenleri)',
        'Masaj jelleri, sporcu kremleri ve aromaterapi inhalasyon karışımları',
        'Doğal kozmetik koruyucu destek sistemleri ve endüstriyel koku bileşenleri'
      ],
      rfqChecklist: [
        'Talep edilen uçucu yağın botanik adı (Latince tür ve kemotip)',
        'Minimum aktif bileşen oranı (örn. %70+ carvacrol veya 1,8-cineole seviyesi)',
        'Sipariş miktarı, ambalaj tercihi ve numune onay süreci',
        'Teslimat ülkesi ve tehlikeli madde (DG / UN) taşıma gereksinimleri'
      ],
      faq: [
        ['Kekik ve defne yağında kemotip ve aktif madde oranı doğrulanıyor mu?', 'Evet. Özellikle Origanum (carvacrol ağırlıklı) ve Thymus (thymol ağırlıklı) türlerinde veya defne yaprağı yağında (1,8-cineole) GC-MS analizi ile kemotip uyumu RFQ aşamasında kontrol edilir.'],
        ['Uçucu yağların uluslararası nakliyesinde DG (tehlikeli madde) süreci nasıl yürütülür?', 'Bazı uçucu yağlar parlama noktası ve çevresel sınıflandırma nedeniyle UN numarası altında taşınır; SDS Bölüm 14 verilerine göre uygun hava, deniz veya kara lojistiği planlanır.'],
        ['Birden fazla uçucu yağ için toplu RFQ verilebilir mi?', 'Evet, alıcılar farklı uçucu yağları, hidrosolleri ve sabit yağları tek bir B2B talep listesinde iletebilir.']
      ]
    }
  },
  en: {
    'rose-essential-oil': {
      name: 'Rose Essential Oil (Rosa damascena) B2B Sourcing',
      metaTitle: 'Bulk Rose Essential Oil (Rosa damascena) B2B Sourcing | CTSEG',
      description: 'International B2B sourcing from Türkiye for steam-distilled Rosa damascena rose essential oil, GC-MS verification, sampling and wholesale RFQ coordination.',
      eyebrow: 'CTSEG · ESSENTIAL OIL SOURCING',
      botanicalName: 'INCI: Rosa Damascena Flower Oil · Steam-Distilled Otto of Rose',
      lead: 'CTSEG coordinates B2B sourcing of Anatolian Rosa damascena essential oil and rose derivatives for fine fragrance houses, skincare manufacturers and ingredient distributors—aligning harvest lots, GC-MS analytical profiles, reference samples and export delivery.',
      cardSummary: 'Steam-distilled Rosa damascena essential oil and rose derivatives sourced for fine perfumery, prestige skincare and B2B ingredient distributors.',
      specs: [
        ['Extraction & Grade', 'Water/steam-distilled Rosa damascena flower oil (Otto of Rose) and specification-matched rose absolute options'],
        ['Analytical Verification', 'Batch-specific GC-MS chromatogram (citronellol, geraniol, nerol, hydrocarbon/stearoptene profile), COA & SDS'],
        ['Industrial Packaging', 'Tamper-evident fluorinated bottles, lacquered aluminium flasks (0.5 kg – 5 kg+) and export-safe outer crating'],
        ['Sampling & MOQ Basis', 'Reference batch evaluation samples prior to bulk commitment; tiered MOQ assessed per harvest lot']
      ],
      applications: [
        'Fine fragrance, luxury perfumery and natural olfactive accords',
        'Prestige anti-aging facial oils, creams and barrier-repair serums',
        'Clinical aromatherapy and high-end spa treatment formulations',
        'Contract manufacturing and private-label active botanical lines'
      ],
      rfqChecklist: [
        'Required grade (steam-distilled rose otto vs. solvent-extracted rose absolute)',
        'Target volume (grams or kilograms) and annual procurement schedule',
        'Regulatory dossier needs (IFRA certificate, EU/UK allergen breakdown, GC-MS, REACH)',
        'Destination airport/port, preferred Incoterm and temperature/security handling'
      ],
      faq: [
        ['Is CTSEG a rose oil distiller or inventory holder?', 'No. CTSEG operates as an independent B2B trade and sourcing coordination house in Türkiye. We evaluate qualified distillation partners against your analytical specification and coordinate sampling, documentation and export execution.'],
        ['How do you verify the authenticity of Rosa damascena oil?', 'Every quotation and sample evaluation is backed by batch-specific GC-MS analysis, physical-chemical COA parameters (optical rotation, refractive index, freezing point) and pre-shipment sample approval.'],
        ['Are prices and stock guaranteed in advance?', 'Because Rosa damascena oil depends on seasonal petal harvest yields and batch availability, pricing and volume allocation are confirmed per live RFQ rather than static price lists.']
      ]
    },
    'lavender-essential-oil': {
      name: 'Lavender Essential Oil B2B Sourcing',
      metaTitle: 'Wholesale Lavender Essential Oil B2B Sourcing from Türkiye | CTSEG',
      description: 'B2B sourcing of Lavandula angustifolia and Lavandula intermedia essential oils from Türkiye with GC-MS profiles, samples and bulk export coordination.',
      eyebrow: 'CTSEG · ESSENTIAL OIL SOURCING',
      botanicalName: 'INCI: Lavandula Angustifolia Oil / Lavandula Hybrida Oil',
      lead: 'We support cosmetic manufacturers, personal care brands, aromatherapy blenders and fragrance houses with specification-led sourcing of Lavandula angustifolia and lavandin essential oils—matching linalool/linalyl acetate profiles, drum packaging and export documentation.',
      cardSummary: 'Lavandula angustifolia and lavandin essential oils sourced in bulk for skincare, personal care, aromatherapy and technical fragrance formulations.',
      specs: [
        ['Botanical Varieties', 'Lavandula angustifolia (fine lavender) and Lavandula intermedia / hybrida (lavandin) grades'],
        ['Quality & Chromatography', 'Batch GC-MS profile verifying linalool, linalyl acetate and camphor thresholds alongside COA'],
        ['Bulk Packaging Options', '1 kg – 25 kg aluminium flasks/jerrycans and 180 kg epoxy-lined steel drums'],
        ['Commercial Coordination', 'Batch matching, laboratory evaluation samples and EXW / FOB / CIF / DAP export logistics']
      ],
      applications: [
        'Calming facial serums, emulsions, body lotions and dermal care',
        'Shampoos, bath gels, liquid soaps and botanical personal care',
        'Aromatherapy diffuser blends, sleep mists and massage formulations',
        'Natural household care, fabric care and ambient scenting products'
      ],
      rfqChecklist: [
        'Botanical species required (Lavandula angustifolia or Lavandin)',
        'Target ester/linalool/camphor tolerances or ISO/Pharmacopoeia standard',
        'Order quantity, preferred container size and sample evaluation requirement',
        'Destination country and required compliance documents (SDS, IFRA, Allergens)'
      ],
      faq: [
        ['How do you help buyers choose between Lavandula angustifolia and Lavandin?', 'Lavandula angustifolia offers a sweeter, low-camphor profile preferred in leave-on skincare and fine aromatherapy, whereas Lavandin provides higher camphoraceous lift and cost efficiency for soaps and home care. We match the exact grade to your formulation brief.'],
        ['Can we source drum quantities for industrial production?', 'Yes. Depending on seasonal batch availability and buyer specifications, we coordinate both mid-scale aluminium containers and full drum shipments.'],
        ['Do bulk shipments match the approved evaluation sample?', 'Yes. Pre-shipment samples represent the nominated production lot or agreed GC-MS specification window prior to dispatch.']
      ]
    },
    'rose-water-hydrosol': {
      name: 'Rose Water & Hydrosol B2B Sourcing',
      metaTitle: 'Bulk Rose Water & Rosa Damascena Hydrosol B2B Sourcing | CTSEG',
      description: 'Wholesale B2B sourcing of steam-distilled Rosa damascena floral water and cosmetic rose hydrosol in drums and IBC totes from Türkiye.',
      eyebrow: 'CTSEG · HYDROSOLS & FLORAL WATERS',
      botanicalName: 'INCI: Rosa Damascena Flower Water · Steam Distillate',
      lead: 'CTSEG coordinates bulk supply of genuine steam-distilled Rosa damascena hydrosol for skincare manufacturers and contract formulators—evaluating residual essential oil content, microbiological specifications, preservation systems and IBC/drum export logistics.',
      cardSummary: 'Authentic steam-distilled Rosa damascena floral water supplied in bulk drums and IBC totes for toners, mists and cosmetic emulsions.',
      specs: [
        ['Distillate Grade', '100% steam-distilled Rosa damascena floral water (first or cohobation distillate, free from synthetic fragrance reconstruction)'],
        ['Technical Parameters', 'Controlled pH range, dissolved rose oil fraction, microbiological COA (TAMC/TYMC) and preservative-free or preserved options'],
        ['Industrial Packaging', '20 L – 30 L HDPE jerrycans, 200 L cosmetic-grade drums and 1,000 L IBC totes'],
        ['Compliance Dossier', 'Batch COA, Microbiological Test Report, SDS, INCI breakdown and export certificates']
      ],
      applications: [
        'Facial toners, hydrating mists, micellar waters and essence lotions',
        'Botanical aqueous phase replacement in creams, serums and emulsions',
        'Sheet mask serums, wet wipes and gentle eye/facial cleansers',
        'Soothing scalp tonics, hair mists and body care formulations'
      ],
      rfqChecklist: [
        'Preservation status (preservative-free sterile-filtered vs. cosmos/cosmetic preserved)',
        'Target residual essential oil percentage and olfactory intensity',
        'Volume per shipment, packaging format (jerrycan, drum or IBC) and frequency',
        'Destination port/warehouse and import documentation requirements'
      ],
      faq: [
        ['What is the difference between true rose hydrosol and reconstructed rose water?', 'True rose hydrosol is the aqueous distillate collected directly from steam distillation of fresh Rosa damascena petals, containing naturally dissolved aromatic components. Reconstructed waters mix deionized water with solubilized fragrance. We specify genuine distillation hydrosols according to your technical brief.'],
        ['Can rose hydrosol be shipped internationally in 200 L drums or 1,000 L IBC totes?', 'Yes. For contract manufacturers and skincare brands, we coordinate palletized HDPE drums and IBC totes via road or sea freight.'],
        ['How is microbiological stability managed during bulk transport?', 'Buyers can specify either micro-filtered preservative-free lots in sealed containers or cosmetic-approved preservation systems suited to their regulatory market.']
      ]
    },
    'lavender-water-hydrosol': {
      name: 'Lavender Water & Hydrosol B2B Sourcing',
      metaTitle: 'Wholesale Lavender Hydrosol & Floral Water B2B Sourcing | CTSEG',
      description: 'B2B sourcing of steam-distilled lavender floral water (Lavandula hydrosol) from Türkiye for skincare, haircare and natural cosmetic manufacturing.',
      eyebrow: 'CTSEG · HYDROSOLS & FLORAL WATERS',
      botanicalName: 'INCI: Lavandula Angustifolia Flower Water / Lavandula Hybrida Flower Water',
      lead: 'We coordinate bulk sourcing of steam-distilled lavender floral water for cosmetic formulators and personal care producers—reviewing botanical origin, microbiological purity, pH stability and bulk packaging options from jerrycans to IBC containers.',
      cardSummary: 'Steam-distilled lavender hydrosol for clarifying toners, soothing skincare, baby care and botanical aqueous cosmetic formulations.',
      specs: [
        ['Production Method', 'Pure aqueous floral distillate captured during steam distillation of flowering lavender tops'],
        ['Quality Controls', 'Batch pH verification, clarity, natural volatile profile and microbiological COA'],
        ['Bulk Packaging', '20 L / 25 L HDPE jerrycans, 200 L drums and 1,000 L IBC containers'],
        ['Documentation Scope', 'COA, TDS, SDS/MSDS, allergen declaration and export customs documentation']
      ],
      applications: [
        'Pore-refining and sebum-balancing facial toners and astringent mists',
        'After-sun cooling sprays, soothing gels and post-procedure skincare',
        'Gentle aqueous phase for baby care and sensitive skin emulsions',
        'Clarifying scalp lotions, botanical shampoos and linen/pillow mists'
      ],
      rfqChecklist: [
        'Botanical source preference (Lavandula angustifolia vs. Lavandin distillate)',
        'Preservative specification and microbiological limit requirements',
        'Packaging format (HDPE jerrycan, drum or IBC) and total liter/kg volume',
        'Sample delivery details and preferred Incoterm'
      ],
      faq: [
        ['How is lavender hydrosol used in industrial cosmetic manufacturing?', 'Formulators use lavender hydrosol at 10% to 100% of the water phase in toners, gels, lotions and cleansers to provide natural aromatic character and soothing skin-conditioning benefits.'],
        ['How do you ensure batch-to-batch consistency in floral waters?', 'Each enquiry is matched with distillation lots that carry documented pH, organoleptic and microbiological COA metrics, with pre-shipment sampling available for lab sign-off.'],
        ['What is the minimum order quantity for lavender hydrosol?', 'MOQ depends on the selected packaging format (jerrycans, 200 L drums or 1,000 L IBCs) and preservation system, and is confirmed during RFQ review.']
      ]
    },
    'botanical-carrier-oils': {
      name: 'Botanical Carrier Oils (Fixed Oils) B2B Sourcing',
      metaTitle: 'Bulk Botanical Carrier Oils & Cosmetic Base Oils Sourcing | CTSEG',
      description: 'B2B sourcing of cold-pressed and refined botanical carrier oils (sweet almond, rosehip, jojoba, grape seed, apricot kernel, pomegranate seed) for cosmetics.',
      eyebrow: 'CTSEG · FIXED & CARRIER OILS',
      botanicalName: 'Cold-Pressed Virgin & Refined Cosmetic Fixed Oils',
      lead: 'CTSEG coordinates B2B procurement of cold-pressed and refined botanical carrier oils for cosmetic laboratories, skincare brands and raw material distributors—verifying fatty acid profiles (FAME), peroxide values, acid values and bulk export packaging.',
      cardSummary: 'Cold-pressed and refined fixed oils—including sweet almond, apricot kernel, grape seed, rosehip, pomegranate seed and jojoba—for B2B formulation.',
      specs: [
        ['Core Oil Portfolio', 'Sweet almond, apricot kernel, grape seed, rosehip, pomegranate seed, jojoba, argan, black seed (Nigella sativa), sesame and hazelnut oils'],
        ['Processing Grades', 'Cold-pressed unrefined (virgin) grades and cosmetic-grade refined/winterized/deodorized options'],
        ['Analytical Testing', 'Fatty acid composition by GC (FAME), free fatty acids (acid value), peroxide value, iodine value, saponification & refractive index'],
        ['Bulk Packaging', '20 kg – 25 kg HDPE/metal pails, 190 kg steel/HDPE drums and IBC totes with optional nitrogen blanketing']
      ],
      applications: [
        'Facial oil serums, lipid-replenishing creams and waterless balms',
        'Nourishing hair oils, split-end treatments and scalp conditioning blends',
        'Carrier bases for essential oil dilutions and professional massage oils',
        'Sun care formulations, lip care, cleansing oils and artisanal soap bases'
      ],
      rfqChecklist: [
        'Required botanical oil(s), INCI name and CAS number',
        'Processing grade (cold-pressed virgin vs. refined/deodorized)',
        'Maximum peroxide/acid value limits and target fatty acid profile',
        'Order volume, container size and destination delivery terms'
      ],
      faq: [
        ['Should we specify cold-pressed or refined carrier oils for our formulation?', 'Cold-pressed virgin oils retain natural tocopherols, phytosterols and characteristic color/aroma for hero active claims, while refined grades offer neutral color/odor and extended oxidative stability for large-scale emulsions. We source both according to your R&D brief.'],
        ['Can multiple carrier oils and essential oils be consolidated into one shipment?', 'Yes. CTSEG coordinates multi-item B2B procurement so buyers can consolidate carrier oils, essential oils and hydrosols under a single export shipment.'],
        ['How is oxidative stability protected before and during shipment?', 'We verify recent production dates, peroxide values and acid values on the batch COA, and coordinate appropriate opaque, food/cosmetic-grade containers.']
      ]
    },
    'botanical-extracts': {
      name: 'Botanical Extracts & Cosmetic Raw Materials Sourcing',
      metaTitle: 'Bulk Botanical Extracts & Active Cosmetic Ingredients B2B | CTSEG',
      description: 'B2B sourcing of hydroglyceric, glycolic, oil-soluble and powdered botanical extracts for skincare, haircare and dermocosmetic manufacturing.',
      eyebrow: 'CTSEG · BOTANICAL EXTRACTS & ACTIVES',
      botanicalName: 'Hydroglyceric, Propanediol, Oil-Soluble Macerates & Standardized Dry Extracts',
      lead: 'We help dermocosmetic brands, contract manufacturers and formulation labs source liquid and powdered botanical extracts—matching solvent carriers, drug-to-extract ratios (DER), preservative compliance and technical dossiers for international markets.',
      cardSummary: 'Water-soluble glycerites, propanediol extracts, oil macerates and standardized dry botanical extracts for skincare and haircare manufacturing.',
      specs: [
        ['Carrier & Format Options', 'Water/glycerin (hydroglyceric), 1,3-propanediol, propylene/butylene glycol, oil-soluble macerates and spray-dried powders'],
        ['Botanical Range', 'Centella, chamomile, calendula, green tea, licorice root, rose, lavender, rosemary, ivy, horse chestnut, St. John’s wort & Anatolian herbs'],
        ['Technical Dossier', 'TDS, batch COA, SDS, full INCI composition breakdown, preservative system disclosure and recommended dosage'],
        ['Industrial Packaging', '1 kg, 5 kg, 10 kg and 25 kg cosmetic-grade fluorinated/HDPE containers or foil-lined drums for powders']
      ],
      applications: [
        'Brightening, calming and antioxidant facial serums and ampoules',
        'Anti-hair-loss scalp tonics, botanical shampoos and conditioners',
        'Eye contour gels, sheet mask essences and dermocosmetic emulsions',
        'Body care lotions, soothing after-shave and gentle cleansing systems'
      ],
      rfqChecklist: [
        'Botanical species (Latin binomial) and physical form (liquid or dry extract)',
        'Preferred solvent carrier (glycerin, propanediol, carrier oil, water) and preservative constraints',
        'Target Drug-to-Extract Ratio (DER) or active marker specification',
        'Sample quantity, bulk order volume and destination regulatory framework'
      ],
      faq: [
        ['Can we request specific solvent carriers such as propanediol or palm-free glycerin?', 'Yes. During RFQ review, we align the extract carrier system and preservation profile with your formulation requirements (such as natural/clean-beauty or anhydrous systems).'],
        ['Do you provide full INCI breakdowns for EU/international cosmetic safety assessments (CPSR)?', 'Yes. Qualified batches are supported by TDS, COA, SDS and percentage INCI breakdowns required by regulatory and safety assessors.'],
        ['Can custom multi-botanical complexes be sourced?', 'For commercial B2B volumes, multi-herb extract blends tailored to specific haircare or skincare claims can be evaluated with partner extraction facilities.']
      ]
    },
    'other-essential-oils': {
      name: 'Other Essential Oils (Anatolian & Mediterranean Flora)',
      metaTitle: 'Wholesale Oregano, Laurel, Rosemary & Essential Oils B2B | CTSEG',
      description: 'B2B sourcing from Türkiye for oregano, thyme, laurel leaf, rosemary, sage, peppermint, eucalyptus and citrus essential oils with GC-MS verification.',
      eyebrow: 'CTSEG · AROMATIC & ESSENTIAL OILS',
      botanicalName: 'Origanum, Thymus, Laurus nobilis, Rosmarinus, Salvia, Mentha & Citrus Oils',
      lead: 'Beyond rose and lavender, Türkiye is a primary origin for aromatic Mediterranean and Anatolian plants. CTSEG coordinates B2B sourcing of oregano, thyme, laurel leaf, rosemary, sage, mint, juniper, liquidambar and citrus essential oils with verified chemotypes.',
      cardSummary: 'Chemotype-verified oregano, thyme, laurel leaf, rosemary, sage, mint and citrus essential oils sourced in bulk for B2B applications.',
      specs: [
        ['Key Essential Oils', 'Oregano (Origanum vulgare/onites), thyme, laurel leaf (Laurus nobilis), rosemary, clary/Dalmatian sage, peppermint, eucalyptus, cedarwood & citrus oils'],
        ['Chemotype & Marker QC', 'Batch GC-MS confirming key markers such as carvacrol, thymol, 1,8-cineole (eucalyptol), menthol, camphor and d-limonene'],
        ['Bulk Packaging', '1 kg – 25 kg aluminium flasks/UN-approved jerrycans and 180 kg steel drums'],
        ['Export & Regulatory', 'GHS/CLP SDS (including Section 14 transport classification), IFRA 51st Amendment certificate, Allergen declaration & Origin docs']
      ],
      applications: [
        'Scalp-purifying shampoos, herbal soaps and botanical personal care',
        'Oral care formulations (mouthwashes, toothpastes using mint, sage, thyme)',
        'Sports recovery rubs, massage balms and aromatherapy inhalation blends',
        'Natural fragrance compounding, functional cosmetics and technical B2B applications'
      ],
      rfqChecklist: [
        'Exact Latin botanical name, plant part distilled and required chemotype',
        'Minimum active marker threshold (e.g., 70%+ carvacrol in oregano oil or 1,8-cineole in laurel oil)',
        'Target volume, UN-approved packaging preference and sample evaluation needs',
        'Destination port/airport and hazardous/non-hazardous freight coordination'
      ],
      faq: [
        ['How do you verify active marker content like carvacrol in oregano oil or 1,8-cineole in laurel oil?', 'Each offered lot is evaluated via GC-MS chromatography so buyers can verify exact marker percentages before approving pre-shipment samples.'],
        ['How are Dangerous Goods (DG) shipping rules handled for essential oils?', 'Many essential oils are classified under UN 1169 / UN 3082 depending on flash point and aquatic classification. We review SDS Section 14 early in the RFQ to arrange compliant air, road or sea freight.'],
        ['Can we combine multiple Anatolian essential oils in one RFQ?', 'Yes. Buyers frequently submit consolidated RFQs covering rose, lavender, oregano, laurel, rosemary and carrier oils for unified procurement.']
      ]
    }
  },
  de: {
    'rose-essential-oil': {
      name: 'Ätherisches Rosenöl (Rosa damascena) B2B-Beschaffung',
      metaTitle: 'Ätherisches Rosenöl (Rosa damascena) Großhandel & B2B-Sourcing | CTSEG',
      description: 'Internationale B2B-Beschaffung aus Türkiye für dampfdestilliertes Rosa-damascena-Rosenöl mit GC-MS-Prüfung, Mustern und RFQ-Koordination.',
      eyebrow: 'CTSEG · ÄTHERISCHE ÖLE B2B',
      botanicalName: 'INCI: Rosa Damascena Flower Oil · Wasserdampfdestillation',
      lead: 'CTSEG koordiniert die B2B-Beschaffung von anatolischem Rosa-damascena-Rosenöl und Rosenderivaten für Parfümhäuser, Kosmetikhersteller und Rohstoffhändler – inklusive Abgleich von Erntechargen, GC-MS-Profilen, Referenzmustern und Exportlogistik.',
      cardSummary: 'Wasserdampfdestilliertes Rosa-damascena-Öl und Rosenderivate für Feinparfümerie, Wirkstoffkosmetik und den internationalen Rohstoffgroßhandel.',
      specs: [
        ['Gewinnung & Qualität', 'Wasserdampfdestilliertes Rosenöl (Otto of Rose) sowie spezifikationsbasierte Rosen-Absolue-Optionen'],
        ['Analytische Prüfung', 'Chargenbezogenes GC-MS-Chromatogramm (Citronellol, Geraniol, Nerol, Stearopten-Anteil), COA und SDS'],
        ['Industrieverpackung', 'Versiegelte Aluminiumflaschen (0,5 kg – 5 kg+) und geschützte Exportgebinde'],
        ['Muster & MOQ', 'Referenzmuster zur Laborfreigabe vor Großbestellung; gestaffelte Mindestmengen je nach Erntecharge']
      ],
      applications: [
        'Feinparfümerie, Nischendüfte und natürliche Duftkompositionen',
        'Hochwertige Anti-Aging-Gesichtsöle, Cremes und Pflegeseren',
        'Professionelle Aromatherapie und Spa-Formulierungen',
        'Lohnherstellung (Private Label) und zertifizierbare Naturkosmetiklinien'
      ],
      rfqChecklist: [
        'Gewünschte Qualität (dampfdestilliertes Rosenöl oder Rosen-Absolue)',
        'Zielmenge (Gramm oder Kilogramm) und geplanter Jahresbedarf',
        'Regulatorische Unterlagen (IFRA-Zertifikat, EU-Allergenliste, GC-MS, REACH)',
        'Zielflughafen/-ort, gewünschtes Incoterm und Versandart'
      ],
      faq: [
        ['Ist CTSEG ein Rosenöl-Hersteller oder Lagerhalter?', 'Nein. CTSEG agiert als unabhängiges B2B-Handels- und Sourcing-Haus in Türkiye, prüft geeignete Destillationsbetriebe anhand Ihrer Spezifikation und koordiniert Muster, Dokumente und Lieferung.'],
        ['Wie wird die Echtheit von Rosa-damascena-Öl sichergestellt?', 'Jedes Angebot stützt sich auf chargenspezifische GC-MS-Daten, physikalisch-chemische COA-Kennzahlen (Gefrierpunkt, Brechungsindex) und die Freigabe eines Vorabmusters.'],
        ['Werden Preise und Bestände vorab garantiert?', 'Da Rosenöl stark von der saisonalen Blütenausbeute abhängt, werden Verfügbarkeit, Chargenreservierung und Preise individuell pro RFQ bestätigt.']
      ]
    },
    'lavender-essential-oil': {
      name: 'Ätherisches Lavendelöl B2B-Beschaffung',
      metaTitle: 'Ätherisches Lavendelöl im Großhandel aus Türkiye | CTSEG',
      description: 'B2B-Sourcing von Lavandula angustifolia und Lavandinöl aus Türkiye mit GC-MS-Analysen, Musterkoordination und Großhandelsgebinden.',
      eyebrow: 'CTSEG · ÄTHERISCHE ÖLE B2B',
      botanicalName: 'INCI: Lavandula Angustifolia Oil / Lavandula Hybrida Oil',
      lead: 'Wir unterstützen Kosmetikproduzenten, Körperpflegemarken und Duftstoffmischer bei der spezifikationsgerechten Beschaffung von Lavandula-angustifolia- und Lavandinöl – abgestimmt auf Linalool-/Linalylacetat-Profile, Gebindegrößen und Exportdokumente.',
      cardSummary: 'Lavandula angustifolia und Lavandinöl in Großgebinden für Hautpflege, Körperpflege, Aromatherapie und technische Duftformulierungen.',
      specs: [
        ['Botanische Varianten', 'Lavandula angustifolia (Echter Lavendel) sowie Lavandula intermedia / hybrida (Lavandin)'],
        ['Qualität & Chromatographie', 'Chargen-GC-MS zur Bestätigung der Linalool-, Linalylacetat- und Kampferwerte inklusive COA'],
        ['Großgebinde', '1 kg – 25 kg Aluminiumkanister sowie 180 kg innenbeschichtete Stahlfässer'],
        ['Handelskoordination', 'Chargenabgleich, Labormuster und EXW / FOB / CIF / DAP Exportabwicklung']
      ],
      applications: [
        'Beruhigende Gesichtspflege, Emulsionen, Körperlotionen und Hautpflege',
        'Shampoos, Duschgele, Flüssigseifen und pflanzliche Körperpflege',
        'Aromatherapie-Mischungen, Kissensprays und Massageöle',
        'Natürliche Haushalts-, Wasch- und Raumbeduftungsprodukte'
      ],
      rfqChecklist: [
        'Gewünschte Pflanzenart (Lavandula angustifolia oder Lavandin)',
        'Zielwerte für Ester/Linalool/Kampfer oder ISO-/Arzneibuch-Standard',
        'Bestellvolumen, Gebindegröße und Musteranforderung',
        'Bestimmungsland und benötigte Konformitätsdokumente (SDS, IFRA, Allergene)'
      ],
      faq: [
        ['Wie unterstützen Sie bei der Wahl zwischen Lavandula angustifolia und Lavandin?', 'Lavandula angustifolia bietet ein mildes, kampferarmes Profil für Leave-on-Kosmetik, während Lavandin eine höhere Duftintensität und Wirtschaftlichkeit für Seifen und Home-Care bietet. Wir prüfen die passende Sorte gemäß Ihrer Rezeptur.'],
        ['Können Fassmengen für die industrielle Produktion bezogen werden?', 'Ja, je nach Saisoncharge und Spezifikation koordinieren wir sowohl Aluminiumgebinde als auch 180-kg-Fässer.'],
        ['Entspricht die Hauptlieferung dem freigegebenen Muster?', 'Ja, Vorabmuster stammen aus der angebotenen Produktionscharge bzw. dem vereinbarten GC-MS-Toleranzbereich.']
      ]
    },
    'rose-water-hydrosol': {
      name: 'Rosenwasser & Rosenhydrolat B2B-Beschaffung',
      metaTitle: 'Rosenwasser & Rosa-Damascena-Hydrolat im Großhandel | CTSEG',
      description: 'B2B-Großhandelsbeschaffung von dampfdestilliertem Rosa-damascena-Blütenwasser und Kosmetik-Rosenhydrolat in Kanistern, Fässern und IBC-Containern.',
      eyebrow: 'CTSEG · HYDROLATE & BLÜTENWASSER',
      botanicalName: 'INCI: Rosa Damascena Flower Water · Wasserdampfdestillat',
      lead: 'CTSEG koordiniert die Großhandelsversorgung mit echtem dampfdestilliertem Rosa-damascena-Hydrolat für Kosmetikhersteller und Lohnabfüller – inklusive Prüfung von Restölgehalt, Mikrobiologie, Konservierungssystem und Fass-/IBC-Logistik.',
      cardSummary: 'Echtes dampfdestilliertes Rosa-damascena-Blütenwasser in Fässern und IBC-Containern für Gesichtswasser, Sprays und Kosmetikemulsionen.',
      specs: [
        ['Destillatqualität', '100 % wasserdampfdestilliertes Rosa-damascena-Hydrolat ohne synthetische Parfümrekonstruktion'],
        ['Technische Parameter', 'Definierter pH-Bereich, gelöster Rosenölanteil, mikrobiologisches COA (TAMC/TYMC) und konserviert/unkonserviert'],
        ['Industriegebinde', '20 L – 30 L HDPE-Kanister, 200 L Kosmetikfässer und 1.000 L IBC-Container'],
        ['Dokumentation', 'Chargen-COA, mikrobiologischer Prüfbericht, SDS, INCI-Aufschlüsselung und Exportpapiere']
      ],
      applications: [
        'Gesichtstonics, feuchtigkeitsspendende Face Mists und Mizellenwasser',
        'Botanischer Wasserphasenersatz in Cremes, Seren und Lotionen',
        'Tuchmasken-Lösungen, Feuchttücher und milde Reinigungsformeln',
        'Kopfhauttonika, Haarsprays und erfrischende Körpersprays'
      ],
      rfqChecklist: [
        'Konservierungsstatus (sterilfiltriert unkonserviert oder kosmetisch konserviert)',
        'Gewünschter Restgehalt an ätherischem Öl und Geruchsprofil',
        'Abnahmemenge pro Lieferung, Gebindeart (Kanister, Fass, IBC) und Rhythmus',
        'Lieferort sowie Import- und Registrierungsanforderungen'
      ],
      faq: [
        ['Worin unterscheidet sich echtes Rosenhydrolat von aromatisiertem Rosenwasser?', 'Echtes Rosenhydrolat entsteht direkt bei der Wasserdampfdestillation frischer Rosa-damascena-Blütenblätter. Wir spezifizieren im RFQ-Prozess authentische Destillate statt mit Duftstoffen versetztem Wasser.'],
        ['Ist der Versand in 200-L-Fässern oder 1.000-L-IBC-Containern möglich?', 'Ja, für industrielle Kosmetikhersteller koordinieren wir palettierte Fässer und IBC-Container per LKW- oder Seefracht.'],
        ['Wie wird die mikrobiologische Stabilität beim Transport gesichert?', 'Je nach Kundenanforderung werden mikrofiltrierte Chargen in versiegelten Gebinden oder EU-/marktkompatible Konservierungssysteme eingesetzt.']
      ]
    },
    'lavender-water-hydrosol': {
      name: 'Lavendelwasser & Lavendelhydrolat B2B-Beschaffung',
      metaTitle: 'Lavendelhydrolat & Lavendelblütenwasser Großhandel B2B | CTSEG',
      description: 'B2B-Beschaffung von dampfdestilliertem Lavendelblütenwasser (Lavandula-Hydrolat) aus Türkiye für Hautpflege, Haarpflege und Naturkosmetik.',
      eyebrow: 'CTSEG · HYDROLATE & BLÜTENWASSER',
      botanicalName: 'INCI: Lavandula Angustifolia Flower Water / Lavandula Hybrida Flower Water',
      lead: 'Wir koordinieren den Großhandelsbezug von dampfdestilliertem Lavendelhydrolat für Kosmetiklabore und Pflegehersteller – mit Fokus auf botanische Herkunft, mikrobiologische Reinheit, pH-Stabilität und Großgebinde bis 1.000 L IBC.',
      cardSummary: 'Wasserdampfdestilliertes Lavendelhydrolat für klärende Gesichtswasser, beruhigende Pflege, Babykosmetik und pflanzliche Wasserphasen.',
      specs: [
        ['Herstellungsart', 'Reines Pflanzenhydrolat aus der Wasserdampfdestillation blühender Lavendelrispen'],
        ['Qualitätskontrolle', 'Chargenprüfung von pH-Wert, Klarheit, flüchtigen Aromakomponenten und Mikrobiologie (COA)'],
        ['Großgebinde', '20 L / 25 L HDPE-Kanister, 200 L Fässer und 1.000 L IBC-Container'],
        ['Dokumentenpaket', 'COA, TDS, SDS/MSDS, Allergenerklärung und Ausfuhrdokumente']
      ],
      applications: [
        'Klärende und talgregulierende Gesichtswasser und Sprays',
        'After-Sun-Sprays, kühlende Gele und beruhigende Hautpflege',
        'Milde wässrige Phase für Babypflege und empfindliche Haut',
        'Kopfhautlotionen, Kräutershampoos und Textil-/Kissensprays'
      ],
      rfqChecklist: [
        'Botanische Quelle (Lavandula angustifolia oder Lavandin-Destillat)',
        'Konservierungswunsch und mikrobiologische Grenzwerte',
        'Gebindeformat (HDPE-Kanister, Fass oder IBC) und Gesamtmenge',
        'Empfängeradresse für Muster und gewünschtes Incoterm'
      ],
      faq: [
        ['Wie wird Lavendelhydrolat in der Kosmetikproduktion eingesetzt?', 'Es ersetzt 10 % bis 100 % der demineralisierten Wasserphase in Tonern, Gelen und Emulsionen und verleiht ein natürliches Wirk- und Duftprofil.'],
        ['Wie wird die Chargenkonsistenz sichergestellt?', 'Jede Anfrage wird mit dokumentierten Destillationschargen (pH, Sensorik, Mikrobiologie-COA) abgeglichen; Vorabmuster stehen zur Laborprüfung bereit.'],
        ['Wie hoch ist die Mindestbestellmenge (MOQ)?', 'Die MOQ richtet sich nach Gebindetyp (Kanister, Fass oder IBC) und Konservierungssystem und wird im Rahmen der Anfrage geklärt.']
      ]
    },
    'botanical-carrier-oils': {
      name: 'Pflanzliche Basisöle & Trägeröle (Carrier Oils) B2B',
      metaTitle: 'Pflanzliche Basisöle & Kosmetische Trägeröle im Großhandel | CTSEG',
      description: 'B2B-Beschaffung kaltgepresster und raffinierter pflanzlicher Trägeröle (Mandel, Jojoba, Hagebutte, Traubenkern, Aprikosenkern, Granatapfelkern).',
      eyebrow: 'CTSEG · BASIS- & TRÄGERÖLE',
      botanicalName: 'Kaltgepresste (Virgin) & Raffinierte Kosmetische Basisöle',
      lead: 'CTSEG koordiniert die B2B-Beschaffung kaltgepresster und raffinierter pflanzlicher Basisöle für Kosmetikhersteller und Rohstoffhändler – inklusive Überprüfung von Fettsäurespektrum (FAME), Peroxidzahl, Säurezahl und Industrieverpackung.',
      cardSummary: 'Kaltgepresste und raffinierte Basisöle wie Süßmandel-, Aprikosenkern-, Traubenkern-, Hagebutten-, Granatapfelkern- und Jojobaöl für B2B-Rezepturen.',
      specs: [
        ['Kernsortiment', 'Süßmandel-, Aprikosenkern-, Traubenkern-, Hagebuttenkern-, Granatapfelkern-, Jojoba-, Argan-, Schwarzkümmel-, Sesam- und Haselnussöl'],
        ['Verarbeitungsstufen', 'Kaltgepresst nativ (virgin) sowie kosmetisch raffinierte, winterisierte und desodorierte Qualitäten'],
        ['Analytische Parameter', 'Fettsäurezusammensetzung (GC), freie Fettsäuren (Säurezahl), Peroxidzahl, Jodzahl und Brechungsindex (COA)'],
        ['Industriegebinde', '20 kg – 25 kg Kanister, 190 kg Stahl-/HDPE-Fässer und IBC-Container']
      ],
      applications: [
        'Gesichtsöl-Seren, rückfettende Pflegecremes und wasserfreie Balsame',
        'Haaröle, Spitzenfluids und nährende Kopfhautkomplexe',
        'Trägeröle für ätherische Ölmischungen und professionelle Massageöle',
        'Sonnenpflege, Lippenpflege, Reinigungsöle und Naturseifenbasen'
      ],
      rfqChecklist: [
        'Benötigte Pflanzenöle inkl. INCI-Bezeichnung und CAS-Nummer',
        'Verarbeitungsgrad (kaltgepresst nativ oder raffiniert/desodoriert)',
        'Grenzwerte für Peroxid-/Säurezahl und gewünschtes Fettsäureprofil',
        'Bestellmenge, Gebindegröße und Lieferbedingungen'
      ],
      faq: [
        ['Wann sind kaltgepresste und wann raffinierte Trägeröle sinnvoll?', 'Kaltgepresste Öle bewahren natürliche Tocopherole und Phytosterole für Wirkstoff-Seren; raffinierte Öle bieten Farb-/Geruchsneutralität und hohe Oxidationsstabilität für Emulsionen. Wir prüfen beide Optionen nach Ihrem Bedarf.'],
        ['Können mehrere Basisöle und ätherische Öle in einer Lieferung gebündelt werden?', 'Ja, CTSEG kann verschiedene Trägeröle, Hydrolate und ätherische Öle in einer konsolidierten Exportlieferung zusammenfassen.'],
        ['Wie wird die Frische und Oxidationsstabilität geprüft?', 'Vor dem Versand werden Produktionsdatum, Peroxidzahl und Säurezahl anhand des Chargen-COA überprüft.']
      ]
    },
    'botanical-extracts': {
      name: 'Pflanzenextrakte & Kosmetische Wirkstoffe B2B',
      metaTitle: 'Pflanzenextrakte & Botanische Kosmetikrohstoffe Großhandel | CTSEG',
      description: 'B2B-Beschaffung von hydroglycerischen, glykolischen, öllöslichen und pulverförmigen Pflanzenextrakten für Hautpflege-, Haarpflege- und Dermokosmetik-Hersteller.',
      eyebrow: 'CTSEG · PFLANZENEXTRAKTE & WIRKSTOFFE',
      botanicalName: 'Hydroglycerische, Propandiol-, Ölmazerat- & Trockenextrakte',
      lead: 'Wir unterstützen Dermokosmetik-Marken, Lohnhersteller und Formulierungslabore bei der Beschaffung flüssiger und pulverförmiger Pflanzenextrakte – abgestimmt auf Lösungsmittelsystem, Droge-Extrakt-Verhältnis (DEV), Konservierung und technische Dokumentation.',
      cardSummary: 'Wasserlösliche Glycerite, Propandiolextrakte, Ölmazerate und standardisierte Trockenextrakte für die Kosmetik- und Körperpflegeindustrie.',
      specs: [
        ['Trägersysteme & Formen', 'Wasser/Glycerin, 1,3-Propandiol, Propylen-/Butylenglykol, öllösliche Mazerate und sprühgetrocknete Pulverextrakte'],
        ['Pflanzenspektrum', 'Centella, Kamille, Calendula, Grüntee, Süßholz, Rose, Lavendel, Rosmarin, Efeu, Rosskastanie, Johanniskraut & anatolische Kräuter'],
        ['Technisches Dossier', 'TDS, Chargen-COA, SDS, vollständige INCI-Prozentangaben, Konservierungsangaben und Einsatzempfehlungen'],
        ['B2B-Gebinde', '1 kg, 5 kg, 10 kg und 25 kg Kosmetikkanister bzw. folienausgekleidete Gebinde für Pulver']
      ],
      applications: [
        'Beruhigende, aufhellende und antioxidative Gesichtsseren und Ampullen',
        'Kopfhauttonika gegen Haarausfall und pflanzliche Shampoos',
        'Augenkonturpflege, Tuchmasken-Essenzen und dermokosmetische Lotionen',
        'Körperpflegegele, After-Shave-Balsame und milde Reinigungsprodukte'
      ],
      rfqChecklist: [
        'Pflanzenart (lateinischer Name) und Extraktform (flüssig oder Pulver)',
        'Gewünschtes Trägersystem (Glycerin, Propandiol, Basisöl) und Konservierungsvorgaben',
        'Ziel-DEV (Droge-Extrakt-Verhältnis) oder Wirkstoffmarker',
        'Mustermenge, Produktionsvolumen und regulatorische Anforderungen'
      ],
      faq: [
        ['Können Extrakte auf Basis von Propandiol oder palmfreiem Glycerin angefragt werden?', 'Ja, im Rahmen der RFQ-Prüfung stimmen wir das Lösungsmittel- und Konservierungssystem gezielt auf Ihre Naturkosmetik- oder Clean-Beauty-Vorgaben ab.'],
        ['Werden vollständige INCI-Aufschlüsselungen für Sicherheitsbewertungen (CPSR) bereitgestellt?', 'Ja, qualifizierte Chargen enthalten TDS, COA, SDS und die exakte INCI-Zusammensetzung für die regulatorische Prüfung.'],
        ['Sind auch kombinierte Kräuterkomplexe möglich?', 'Bei entsprechenden B2B-Abnahmemengen können aufeinander abgestimmte Mehrpflanzen-Extrakte für Haar- oder Hautpflegekonzepte geprüft werden.']
      ]
    },
    'other-essential-oils': {
      name: 'Weitere Ätherische Öle (Anatolische & Mediterrane Flora)',
      metaTitle: 'Oregano-, Lorbeer-, Rosmarin- & Ätherische Öle Großhandel | CTSEG',
      description: 'B2B-Sourcing aus Türkiye für Oregano-, Thymian-, Lorbeerblatt-, Rosmarin-, Salbei-, Pfefferminz-, Eukalyptus- und Zitrusöle mit GC-MS-Prüfung.',
      eyebrow: 'CTSEG · AROMATISCHE & ÄTHERISCHE ÖLE',
      botanicalName: 'Origanum, Thymus, Laurus nobilis, Rosmarinus, Salvia, Mentha & Citrus Oils',
      lead: 'Neben Rose und Lavendel ist Türkiye ein wichtiges Ursprungsland für mediterrane und anatolische Aromapflanzen. CTSEG koordiniert die B2B-Beschaffung von Oregano-, Thymian-, Lorbeerblatt-, Rosmarin-, Salbei-, Minz-, Wacholder- und Zitrusölen mit geprüftem Chemotyp.',
      cardSummary: 'Chemotyp-geprüfte ätherische Öle wie Oregano, Thymian, Lorbeerblatt, Rosmarin, Salbei, Minze und Zitrus im B2B-Großhandel.',
      specs: [
        ['Wichtige Ätherische Öle', 'Oreganoöl (Origanum), Thymian, Lorbeerblatt (Laurus nobilis), Rosmarin, Salbei, Pfefferminze, Eukalyptus, Zedernholz und Zitrusöle'],
        ['Chemotyp & Marker-Analyse', 'Chargen-GC-MS zur Bestätigung von Leitsubstanzen wie Carvacrol, Thymol, 1,8-Cineol, Menthol, Kampfer und Limonen'],
        ['Großgebinde', '1 kg – 25 kg Aluminium-/UN-Kanister und 180 kg Stahlfässer'],
        ['Export & Regulatorik', 'GHS/CLP-konformes SDS (inkl. Abschnitt 14 Gefahrgut), IFRA-Zertifikat, Allergendatenblatt & Ursprungsdokumente']
      ],
      applications: [
        'Kopfhaut- und Anti-Schuppen-Shampoos, Kräuterseifen und Körperpflege',
        'Mund- und Zahnpflegeformulierungen (Minze, Salbei, Thymian, Eukalyptus)',
        'Sport- und Massagebalsame sowie Aromatherapie-Inhalationsmischungen',
        'Natürliche Duftkompositionen, funktionelle Kosmetik und technische Anwendungen'
      ],
      rfqChecklist: [
        'Exakter botanischer Name (Latein), Pflanzenteil und gewünschter Chemotyp',
        'Mindestgehalt der Leitsubstanz (z. B. >70 % Carvacrol oder definierter 1,8-Cineol-Wert)',
        'Bedarfsmenge, UN-geprüfte Verpackung und Musteranforderung',
        'Zielhafen/-flughafen und Gefahrgut-Logistikanforderungen'
      ],
      faq: [
        ['Wird der Gehalt an Carvacrol im Oreganoöl bzw. 1,8-Cineol im Lorbeeröl per GC-MS belegt?', 'Ja, jede angebotene Partie wird anhand eines GC-MS-Chromatogramms geprüft, damit Käufer die exakten Markerwerte vor Musterfreigabe einsehen können.'],
        ['Wie wird der Gefahrgutversand (DG) bei ätherischen Ölen abgewickelt?', 'Abhängig von Flammpunkt und Umweltklassifizierung (Abschnitt 14 SDS) koordinieren wir die passende UN-Verpackung und den Luft-, See- oder Straßentransport.'],
        ['Können mehrere ätherische Öle in einer Sammelanfrage kombiniert werden?', 'Ja, industrielle Einkäufer bündeln häufig verschiedene ätherische Öle, Hydrolate und Trägeröle in einer einzigen B2B-Anfrage.']
      ]
    }
  },
  it: {
    'rose-essential-oil': {
      name: 'Olio Essenziale di Rosa (Rosa damascena) Sourcing B2B',
      metaTitle: 'Olio Essenziale di Rosa (Rosa damascena) Ingrosso B2B | CTSEG',
      description: 'Sourcing B2B internazionale dalla Türkiye per olio essenziale di Rosa damascena distillato a vapore, con analisi GC-MS, campioni e gestione RFQ.',
      eyebrow: 'CTSEG · SOURCING OLI ESSENZIALI',
      botanicalName: 'INCI: Rosa Damascena Flower Oil · Distillazione in corrente di vapore',
      lead: 'CTSEG coordina l’approvvigionamento B2B di olio essenziale di Rosa damascena anatolica e derivati della rosa per case essenziere, produttori cosmetici e distributori di materie prime, allineando lotti di raccolto, profili GC-MS, campionature ed export.',
      cardSummary: 'Olio essenziale di Rosa damascena distillato a vapore e derivati per alta profumeria, skincare di prestigio e distributori B2B.',
      specs: [
        ['Estrazione & Grado', 'Olio essenziale di Rosa damascena distillato a vapore (Otto of Rose) e opzioni di assoluta di rosa su specifica'],
        ['Verifica Analitica', 'Cromatogramma GC-MS specifico per lotto (citronellolo, geraniolo, nerolo, stearopteni), COA e SDS'],
        ['Confezionamento B2B', 'Flaconi sigillati in alluminio o fluorurati (0,5 kg – 5 kg+) con imballo protettivo da esportazione'],
        ['Campioni & MOQ', 'Campioni del lotto di riferimento per approvazione di laboratorio; MOQ valutato in base al raccolto']
      ],
      applications: [
        'Alta profumeria, fragranze di nicchia e accordi olfattivi naturali',
        'Oli viso anti-age, creme di prestigio e sieri ristrutturanti',
        'Aromaterapia professionale e formulazioni spa di fascia alta',
        'Produzione cosmetica conto terzi (contract manufacturing) e linee botaniche'
      ],
      rfqChecklist: [
        'Grado richiesto (olio di rosa distillato a vapore o assoluta di rosa)',
        'Quantità target (grammi o chilogrammi) e programmazione annuale',
        'Documentazione regolatoria (certificato IFRA, allergeni UE, GC-MS, REACH)',
        'Aeroporto/porto di destinazione, Incoterm preferito e modalità di spedizione'
      ],
      faq: [
        ['CTSEG è un produttore o detentore di stock di olio di rosa?', 'No. CTSEG opera come trade house B2B indipendente in Türkiye: seleziona e verifica distillerie qualificate in base alle specifiche analitiche del cliente e coordina campioni, documenti e spedizione.'],
        ['Come viene verificata la purezza dell’olio di Rosa damascena?', 'Ogni offerta è accompagnata da analisi GC-MS del lotto, parametri chimico-fisici sul COA (punto di congelamento, indice di rifrazione) e approvazione del campione pre-spedizione.'],
        ['Prezzi e disponibilità sono garantiti in anticipo?', 'Poiché l’olio di rosa dipende dalla resa stagionale dei petali, disponibilità, allocazione dei lotti e quotazioni vengono confermate su ciascuna RFQ attiva.']
      ]
    },
    'lavender-essential-oil': {
      name: 'Olio Essenziale di Lavanda Sourcing B2B',
      metaTitle: 'Olio Essenziale di Lavanda all’Ingrosso dalla Türkiye | CTSEG',
      description: 'Approvvigionamento B2B di olio essenziale di Lavandula angustifolia e lavandino dalla Türkiye con profilo GC-MS, campioni e fusti industriali.',
      eyebrow: 'CTSEG · SOURCING OLI ESSENZIALI',
      botanicalName: 'INCI: Lavandula Angustifolia Oil / Lavandula Hybrida Oil',
      lead: 'Supportiamo aziende cosmetiche, marchi di personal care e formulatori di fragranze nella fornitura B2B di olio essenziale di Lavandula angustifolia e lavandino, verificando tenore di linalolo/acetato di linalile, imballaggi industriali e documenti export.',
      cardSummary: 'Oli essenziali di Lavandula angustifolia e lavandino in lotti industriali per skincare, igiene personale, aromaterapia e profumeria tecnica.',
      specs: [
        ['Varietà Botaniche', 'Lavandula angustifolia (lavanda fine) e Lavandula intermedia / hybrida (lavandino)'],
        ['Qualità & Cromatografia', 'Profilo GC-MS di lotto per linalolo, acetato di linalile e canfora corredato da COA'],
        ['Imballaggi Industriali', 'Taniche in alluminio da 1 kg – 25 kg e fusti in acciaio rivestito da 180 kg'],
        ['Coordinamento Commerciale', 'Selezione lotto, campioni per test formulativi e logistica EXW / FOB / CIF / DAP']
      ],
      applications: [
        'Sieri viso lenitivi, emulsioni, creme corpo e trattamenti dermo-calmanti',
        'Shampoo, bagnodoccia, saponi liquidi e detergenza botanica',
        'Miscele per diffusori, spray rilassanti e oli da massaggio',
        'Prodotti naturali per la cura della casa, bucato e profumazione d’ambiente'
      ],
      rfqChecklist: [
        'Specie botanica richiesta (Lavandula angustifolia o Lavandino)',
        'Parametri target di esteri/linalolo/canfora o riferimento ISO/Farmacopea',
        'Volume d’ordine, formato contenitore e richiesta campioni',
        'Paese di destinazione e dossier normativo (SDS, IFRA, lista allergeni)'
      ],
      faq: [
        ['Come aiutate a scegliere tra Lavandula angustifolia e Lavandino?', 'La Lavandula angustifolia presenta una nota più dolce e basso contenuto di canfora per cosmetici leave-on, mentre il Lavandino offre maggiore resa olfattiva per saponi e home care. Abbiniamo la qualità corretta al vostro brief.'],
        ['È possibile ordinare quantitativi in fusti per uso industriale?', 'Sì, in base alla disponibilità stagionale coordiniamo sia contenitori in alluminio sia fusti da 180 kg.'],
        ['Il lotto spedito corrisponde al campione approvato?', 'Sì, i campioni pre-spedizione sono rappresentativi del lotto opzionato o della finestra di specifica GC-MS concordata.']
      ]
    },
    'rose-water-hydrosol': {
      name: 'Acqua di Rose & Idrolato di Rosa Sourcing B2B',
      metaTitle: 'Acqua di Rose & Idrolato di Rosa Damascena Ingrosso B2B | CTSEG',
      description: 'Fornitura B2B all’ingrosso di idrolato di Rosa damascena distillato a vapore in taniche, fusti da 200 L e cisterne IBC da 1.000 L dalla Türkiye.',
      eyebrow: 'CTSEG · IDROLATI & ACQUE FLOREALI',
      botanicalName: 'INCI: Rosa Damascena Flower Water · Idrolato da distillazione a vapore',
      lead: 'CTSEG coordina la fornitura in bulk di autentico idrolato di Rosa damascena distillato a vapore per laboratori cosmetici e terzisti, valutando frazione aromatica residua, purezza microbiologica, sistema conservante e spedizione in fusti o IBC.',
      cardSummary: 'Acqua floreale di Rosa damascena distillata a vapore in fusti e cisterne IBC per tonici, face mist ed emulsioni cosmetiche.',
      specs: [
        ['Grado del Distillato', 'Idrolato 100% da distillazione a vapore di petali di Rosa damascena (senza profumi sintetici aggiunti)'],
        ['Parametri Tecnici', 'Range di pH controllato, frazione di olio essenziale disciolto, COA microbiologico (TAMC/TYMC), con o senza conservanti'],
        ['Confezionamento Bulk', 'Taniche HDPE da 20 L – 30 L, fusti cosmetici da 200 L e cisterne IBC da 1.000 L'],
        ['Dossier Documentale', 'COA di lotto, rapporto microbiologico, SDS, composizione INCI e certificati di esportazione']
      ],
      applications: [
        'Tonici viso, spray idratanti (face mist), acque micellari e lozioni',
        'Fase acquosa botanica in creme, sieri ed emulsioni cosmetiche',
        'Liquidi imbibenti per maschere in tessuto (sheet mask) e salviette',
        'Lozioni lenitive per il cuoio capelluto e spray corpo rinfrescanti'
      ],
      rfqChecklist: [
        'Stato di conservazione (senza conservanti microfiltrato o con sistema conservante cosmetico)',
        'Contenuto residuo di olio essenziale e intensità olfattiva richiesta',
        'Volume per spedizione, imballaggio (tanica, fusto o IBC) e frequenza',
        'Destinazione di consegna e requisiti doganali/regolatori'
      ],
      faq: [
        ['Qual è la differenza tra vero idrolato di rosa e acqua aromatizzata?', 'L’idrolato autentico deriva direttamente dalla distillazione in corrente di vapore dei petali di Rosa damascena, mentre le acque ricostituite miscelano acqua demineralizzata e fragranze solubilizzate. Coordiniamo esclusivamente idrolati conformi alla specifica tecnica richiesta.'],
        ['Potete spedire in fusti da 200 L o IBC da 1.000 L?', 'Sì, per i produttori cosmetici organizziamo spedizioni pallettizzate in fusti HDPE e cisterne IBC via camion o nave.'],
        ['Come viene gestita la stabilità microbiologica nel trasporto bulk?', 'In base alle esigenze del formulatore valutiamo lotti microfiltrati in contenitori sigillati oppure preservati con sistemi ammessi dal regolamento cosmetico del mercato target.']
      ]
    },
    'lavender-water-hydrosol': {
      name: 'Acqua di Lavanda & Idrolato di Lavanda Sourcing B2B',
      metaTitle: 'Idrolato di Lavanda & Acqua Floreale all’Ingrosso B2B | CTSEG',
      description: 'Sourcing B2B dalla Türkiye di acqua floreale di lavanda (idrolato distillato a vapore) per skincare, haircare e produzione cosmetica naturale.',
      eyebrow: 'CTSEG · IDROLATI & ACQUE FLOREALI',
      botanicalName: 'INCI: Lavandula Angustifolia Flower Water / Lavandula Hybrida Flower Water',
      lead: 'Coordiniamo l’approvvigionamento B2B di idrolato di lavanda distillato a vapore per aziende cosmetiche e produttori conto terzi, verificando origine botanica, parametri microbiologici, stabilità del pH e imballaggi industriali fino a IBC da 1.000 L.',
      cardSummary: 'Idrolato di lavanda distillato a vapore per tonici purificanti, cosmetica lenitiva, linee baby e fasi acquose vegetali.',
      specs: [
        ['Metodo Produttivo', 'Puro distillato acquoso ottenuto dalla distillazione a vapore delle sommità fiorite di lavanda'],
        ['Controlli Qualità', 'Verifica di pH, limpidezza, profilo aromatico naturale e COA microbiologico per lotto'],
        ['Imballaggi Bulk', 'Taniche HDPE da 20 L / 25 L, fusti da 200 L e contenitori IBC da 1.000 L'],
        ['Documentazione', 'COA, TDS, SDS/MSDS, dichiarazione allergeni e documenti doganali di esportazione']
      ],
      applications: [
        'Tonici viso purificanti e riequilibranti per pelli miste o impure',
        'Spray doposole rinfrescanti, gel lenitivi e cosmetici post-trattamento',
        'Fase acquosa delicata per prodotti baby care e pelli sensibili',
        'Lozioni per il cuoio capelluto, shampoo botanici e spray per tessuti'
      ],
      rfqChecklist: [
        'Origine botanica preferita (idrolato di Lavandula angustifolia o Lavandino)',
        'Sistema conservante richiesto e limiti microbiologici',
        'Formato di imballaggio (tanica HDPE, fusto o IBC) e volume totale',
        'Indirizzo per invio campioni e Incoterm richiesto'
      ],
      faq: [
        ['Come si impiega l’idrolato di lavanda nelle formulazioni cosmetiche?', 'Viene utilizzato dal 10% al 100% della fase acquosa in tonici, gel, emulsioni e detergenti per apportare nota aromatica naturale e proprietà lenitive.'],
        ['Come garantite la costanza qualitativa tra i diversi lotti?', 'Ogni richiesta viene associata a lotti di distillazione con COA completo (pH, caratteri organolettici e microbiologia) e campioni pre-spedizione.'],
        ['Qual è il quantitativo minimo d’ordine (MOQ)?', 'Il MOQ dipende dal formato di confezionamento scelto (taniche, fusti da 200 L o IBC da 1.000 L) e viene confermato in fase di offerta.']
      ]
    },
    'botanical-carrier-oils': {
      name: 'Oli Vegetali Vettori (Carrier Oils) Sourcing B2B',
      metaTitle: 'Oli Vegetali Vettori e Oli Base Cosmetici all’Ingrosso | CTSEG',
      description: 'Fornitura B2B di oli vegetali vettori spremuti a freddo e raffinati (mandorle dolci, jojoba, rosa mosqueta, vinaccioli, nocciolo di albicocca, melograno).',
      eyebrow: 'CTSEG · OLI FISSI & VETTORI',
      botanicalName: 'Oli Vegetali Cosmetici Spremuti a Freddo (Virgin) & Raffinati',
      lead: 'CTSEG coordina il sourcing B2B di oli vegetali fissi e vettori per laboratori cosmetici, brand skincare e distributori di materie prime, controllando profilo degli acidi grassi (FAME), numero di perossidi, acidità e confezionamento industriale.',
      cardSummary: 'Oli base spremuti a freddo e raffinati—mandorle dolci, albicocca, vinaccioli, rosa canina, melograno e jojoba—per formulazioni B2B.',
      specs: [
        ['Portafoglio Oli', 'Olio di mandorle dolci, nocciolo di albicocca, vinaccioli, rosa canina, semi di melograno, jojoba, argan, cumino nero, sesamo e nocciola'],
        ['Gradi di Lavorazione', 'Spremuti a freddo non raffinati (virgin) e gradi cosmetici raffinati/winterizzati/deodorizzati'],
        ['Analisi Chimico-Fisiche', 'Composizione acidica in GC (FAME), acidità libera, numero di perossidi, numero di iodio e indice di rifrazione (COA)'],
        ['Confezionamento Bulk', 'Taniche da 20 kg – 25 kg, fusti da 190 kg e cisterne IBC']
      ],
      applications: [
        'Sieri viso oleosi, creme nutrienti e balsami anidri riparatori',
        'Oli per capelli, trattamenti ristrutturanti e complessi per la cute',
        'Basi vettore per diluizione di oli essenziali e oli da massaggio professionale',
        'Prodotti solari, balsami labbra, oli detergenti e saponi naturali'
      ],
      rfqChecklist: [
        'Olio/i vegetale/i richiesto/i con nome INCI e numero CAS',
        'Grado di lavorazione (spremuto a freddo virgin o raffinato/deodorizzato)',
        'Limiti massimi di perossidi/acidità e profilo di acidi grassi richiesto',
        'Volume d’ordine, tipologia di fusto/tanica e condizioni di resa'
      ],
      faq: [
        ['È preferibile scegliere oli spremuti a freddo o raffinati?', 'Gli oli spremuti a freddo conservano tocoferoli e fitosteroli ideali per sieri attivi; i gradi raffinati offrono colore/odore neutri e maggiore stabilità ossidativa per le emulsioni. Valutiamo entrambe le opzioni in base al vostro progetto.'],
        ['Possiamo consolidare più oli vettori e oli essenziali in un’unica spedizione?', 'Sì, CTSEG gestisce forniture multi-referenza permettendo di raggruppare oli vettori, oli essenziali e idrolati in un solo lotto di esportazione.'],
        ['Come viene monitorata la stabilità all’ossidazione?', 'Prima della spedizione verifichiamo data di spremitura/lavorazione, numero di perossidi e acidità sul COA di lotto.']
      ]
    },
    'botanical-extracts': {
      name: 'Estratti Botanici & Materie Prime Cosmetiche Attive B2B',
      metaTitle: 'Estratti Botanici & Ingredienti Cosmetici all’Ingrosso B2B | CTSEG',
      description: 'Sourcing B2B di estratti botanici idroglicerici, glicolici, liposolubili e secchi per produttori di skincare, haircare e dermocosmesi.',
      eyebrow: 'CTSEG · ESTRATTI BOTANICI & ATTIVI',
      botanicalName: 'Estratti Idroglicerici, in Propandiolo, Macerati Oleosi & Estratti Secchi',
      lead: 'Affianchiamo brand dermocosmetici, terzisti e laboratori R&D nella fornitura di estratti vegetali liquidi e in polvere, selezionando solvente vettore, rapporto droga/estratto (DER), sistema conservante e documentazione tecnica per l’export.',
      cardSummary: 'Gliceriti idrosolubili, estratti in propandiolo, oleoliti e estratti secchi titolati/standardizzati per l’industria cosmetica.',
      specs: [
        ['Solventi & Formati', 'Acqua/glicerina (idroglicerici), 1,3-propandiolo, glicole propilenico/butilenico, macerati liposolubili ed estratti secchi in polvere'],
        ['Varietà Botaniche', 'Centella, camomilla, calendula, tè verde, liquirizia, rosa, lavanda, rosmarino, edera, ippocastano, iperico e flora anatolica'],
        ['Fascicolo Tecnico', 'TDS, COA di lotto, SDS, ripartizione percentuale INCI, sistema conservante e dosaggi consigliati'],
        ['Imballaggi B2B', 'Contenitori cosmetici da 1 kg, 5 kg, 10 kg e 25 kg o fusti con sacco barriera per le polveri']
      ],
      applications: [
        'Sieri viso illuminanti, lenitivi, antiossidanti e fiale intensive',
        'Lozioni anticaduta per il cuoio capelluto e shampoo fito-cosmetici',
        'Gel contorno occhi, essenze per maschere e lozioni dermocosmetiche',
        'Creme corpo rassodanti, emulsioni dopobarba e detergenti delicati'
      ],
      rfqChecklist: [
        'Specie botanica (nome scientifico) e forma fisica (liquido o polvere)',
        'Solvente vettore preferito (glicerina, propandiolo, olio vegetale) e vincoli sui conservanti',
        'Rapporto D/E (DER) o titolazione in principio attivo richiesta',
        'Quantità campione, volume d’ordine e requisiti normativi del mercato di destinazione'
      ],
      faq: [
        ['È possibile richiedere estratti in propandiolo o glicerina palm-free?', 'Sì, in fase di valutazione RFQ allineiamo il sistema solvente e il conservante ai requisiti clean-beauty o naturali della vostra formula.'],
        ['Fornite la ripartizione INCI completa per la valutazione della sicurezza cosmetica (CPSR)?', 'Sì, ogni fornitura qualificata è corredata da TDS, COA, SDS e breakdown INCI percentuale necessario per il dossier regolatorio.'],
        ['Valutate anche complessi botanici multi-pianta?', 'Per volumi B2B adeguati è possibile valutare miscele sinergiche di estratti vegetali sviluppate per specifiche applicazioni viso, corpo o capelli.']
      ]
    },
    'other-essential-oils': {
      name: 'Altri Oli Essenziali (Flora Anatolica e Mediterranea)',
      metaTitle: 'Oli Essenziali di Origano, Alloro, Rosmarino all’Ingrosso B2B | CTSEG',
      description: 'Sourcing B2B dalla Türkiye di oli essenziali di origano, timo, alloro, rosmarino, salvia, menta, eucalipto e agrumi con verifica GC-MS.',
      eyebrow: 'CTSEG · OLI AROMATICI & ESSENZIALI',
      botanicalName: 'Origanum, Thymus, Laurus nobilis, Rosmarinus, Salvia, Mentha & Citrus Oils',
      lead: 'Oltre a rosa e lavanda, la Türkiye è un’origine primaria per le piante officinali mediterranee e anatoliche. CTSEG coordina la fornitura B2B di oli essenziali di origano, timo, alloro, rosmarino, salvia, menta, ginepro, storace e agrumi con chemiotipo verificato.',
      cardSummary: 'Oli essenziali di origano, timo, foglie di alloro, rosmarino, salvia, menta e agrumi verificati via GC-MS per forniture B2B.',
      specs: [
        ['Principali Oli Essenziali', 'Origano (Origanum), timo, alloro (Laurus nobilis), rosmarino, salvia, menta piperita, eucalipto, legno di cedro e oli agrumari'],
        ['Controllo Chemiotipo', 'Analisi GC-MS di lotto per confermare marker attivi quali carvacrolo, timolo, 1,8-cineolo, mentolo, canfora e limonene'],
        ['Imballaggi Bulk', 'Flaconi/taniche in alluminio o HDPE omologati UN da 1 kg – 25 kg e fusti da 180 kg'],
        ['Export & Normativa', 'SDS conforme GHS/CLP (inclusa Sezione 14 trasporto ADR/IMDG/IATA), certificato IFRA, allergeni e certificato d’origine']
      ],
      applications: [
        'Shampoo purificanti, saponi vegetali e detergenti dermo-igienizzanti',
        'Formulazioni per l’igiene orale (collutori e dentifrici con menta, salvia, timo)',
        'Balsami defaticanti sportivi, oli da massaggio e miscele balsamiche',
        'Profumeria funzionale, cosmesi naturale e impieghi tecnici B2B'
      ],
      rfqChecklist: [
        'Nome botanico latino esatto, parte della pianta distillata e chemiotipo',
        'Percentuale minima del marker attivo (es. >70% carvacrolo nell’olio di origano o 1,8-cineolo nell’alloro)',
        'Volume richiesto, imballo omologato UN e necessità di campionatura',
        'Porto/aeroporto di arrivo e gestione logistica ADR / merci pericolose (DG)'
      ],
      faq: [
        ['Il titolo di carvacrolo nell’olio di origano o di 1,8-cineolo nell’alloro viene certificato?', 'Sì, ogni lotto proposto viene verificato tramite cromatografia GC-MS per confermare le percentuali dei composti caratteristici prima dell’approvazione del campione.'],
        ['Come gestite il trasporto internazionale di oli essenziali classificati come merce pericolosa (DG)?', 'Verifichiamo fin dall’inizio la Sezione 14 della SDS (codici UN e punto di infiammabilità) per organizzare imballaggi omologati e spedizione aerea, marittima o stradale conforme.'],
        ['Possiamo inserire diversi oli essenziali in un’unica richiesta di quotazione?', 'Certamente. Gli acquirenti B2B inviano frequentemente liste multi-prodotto che includono oli essenziali, idrolati e oli vettori.']
      ]
    }
  },
  fa: {
    'rose-essential-oil': {
      name: 'تأمین عمده اسانس گل محمدی (Rose Essential Oil) B2B',
      metaTitle: 'تأمین عمده اسانس گل رز (Rosa damascena) و روغن گل محمدی | CTSEG',
      description: 'تأمین بین‌المللی B2B اسانس گل محمدی (Rosa damascena) از ترکیه همراه با آنالیز GC-MS، هماهنگی نمونه و مدیریت استعلام قیمت (RFQ).',
      eyebrow: 'CTSEG · تأمین اسانس‌های طبیعی',
      botanicalName: 'INCI: Rosa Damascena Flower Oil · تقطیر با بخار آب',
      lead: 'CTSEG تأمین B2B اسانس گل محمدی (Rosa damascena) و مشتقات رز را برای خانه‌های عطر، تولیدکنندگان محصولات مراقبت از پوست و توزیع‌کنندگان مواد اولیه آرایشی هماهنگ می‌کند و تطابق پروفایل GC-MS، نمونه‌گیری مرجع و لجستیک صادراتی را مدیریت می‌نماید.',
      cardSummary: 'تأمین B2B اسانس گل محمدی تقطیرشده با بخار آب و مشتقات رز برای عطرسازی فاخر و فرمولاسیون‌های پیشرفته مراقبت از پوست.',
      specs: [
        ['روش تولید و گرید', 'اسانس گل محمدی حاصل از تقطیر با آب/بخار (Otto of Rose) و گزینه‌های ابسولوت رز بر اساس مشخصات درخواستی'],
        ['تأیید آزمایشگاهی', 'کروماتوگرام GC-MS اختصاصی هر بچ (نسبت سیترونلول، ژرانیول، نرول و استئاروپتن)، برگه آنالیز COA و SDS'],
        ['بسته‌بندی صنعتی', 'ظروف آلومینیومی پلمپ‌شده و بطری‌های فلوئوردار تخصصی (۰.۵ تا ۵ کیلوگرم به بالا) مناسب حمل بین‌المللی'],
        ['نمونه و حداقل سفارش (MOQ)', 'ارائه نمونه مرجع پیش از خرید عمده؛ بررسی پلکانی MOQ متناسب با بچ برداشت']
      ],
      applications: [
        'عطرسازی فاخر (Fine Fragrance) و ترکیبات بویایی طبیعی',
        'سرم‌ها، کرم‌های ضدپیری و محصولات لوکس بازسازی‌کننده پوست',
        'آروماتراپی تخصصی و محصولات اسپا',
        'تولید قراردادی (Private Label) و خطوط تخصصی درموکازمتیک'
      ],
      rfqChecklist: [
        'نوع گرید موردنیاز (اسانس تقطیری گل رز یا ابسولوت رز)',
        'حجم درخواستی (گرم یا کیلوگرم) و برنامه خرید سالانه',
        'مدارک رگولاتوری موردنیاز (گواهی IFRA، لیست آلرژن‌ها، GC-MS و REACH)',
        'کشور و مرز/فرودگاه مقصد، اینکوترمز ترجیحی و شرایط حمل'
      ],
      faq: [
        ['آیا CTSEG تولیدکننده یا نگهدارنده موجودی اسانس گل رز است؟', 'خیر. CTSEG یک خانه تجارت و تأمین مستقل B2B در ترکیه است که بر اساس مشخصات فنی و آنالیز درخواستی خریدار، مسیر تأمین مناسب را ارزیابی و فرآیند نمونه، اسناد و تحویل را هماهنگ می‌کند.'],
        ['اصالت و خلوص اسانس Rosa damascena چگونه بررسی می‌شود؟', 'هر پیشنهاد همراه با آنالیز GC-MS همان بچ، پارامترهای فیزیکی-شیمیایی COA (نقطه انجماد، ضریب شکست) و تأیید نمونه پیش از حمل ارائه می‌گردد.'],
        ['آیا قیمت و موجودی از پیش تضمین می‌شود؟', 'به دلیل وابستگی اسانس گل محمدی به فصل برداشت و شرایط بازار، قیمت و تخصیص موجودی صرفاً پس از بررسی استعلام (RFQ) روز اعلام می‌شود.']
      ]
    },
    'lavender-essential-oil': {
      name: 'تأمین عمده اسانس اسطوخودوس (Lavender Essential Oil) B2B',
      metaTitle: 'تأمین عمده اسانس اسطوخودوس (Lavandula) از ترکیه | CTSEG',
      description: 'تأمین B2B اسانس اسطوخودوس (Lavandula angustifolia و Lavandin) از ترکیه با برگه آنالیز GC-MS، نمونه و بسته‌بندی صنعتی.',
      eyebrow: 'CTSEG · تأمین اسانس‌های طبیعی',
      botanicalName: 'INCI: Lavandula Angustifolia Oil / Lavandula Hybrida Oil',
      lead: 'ما تولیدکنندگان لوازم آرایشی و بهداشتی، برندهای مراقبت شخصی و واحدهای فرمولاسیون اسانس را در تأمین B2B اسانس اسطوخودوس (Angustifolia و Lavandin) با پروفایل مشخص لینالول و لینالیل استات همراهی می‌کنیم.',
      cardSummary: 'تأمین عمده اسانس Lavandula angustifolia و لاواندین برای محصولات پوست، مو، شوینده‌های گیاهی و آروماتراپی.',
      specs: [
        ['گونه‌های گیاهی', 'Lavandula angustifolia (اسطوخودوس ظریف/طبی) و Lavandula intermedia / hybrida (لاواندین)'],
        ['کیفیت و کروماتوگرافی', 'گزارش GC-MS و COA هر بچ جهت کنترل درصد لینالول، لینالیل استات و کافور'],
        ['بسته‌بندی عمده', 'ظروف آلومینیومی ۱ تا ۲۵ کیلوگرمی و بشکه‌های ۱۸۰ کیلوگرمی با پوشش داخلی اپوکسی'],
        ['هماهنگی تجاری', 'تطبیق بچ تولیدی، ارسال نمونه آزمایشگاهی و هماهنگی تحویل EXW / FOB / CIF / DAP']
      ],
      applications: [
        'کرم‌ها، لوسیون‌ها و سرم‌های آرام‌بخش پوست صورت و بدن',
        'شامپو، ژل شستشو، صابون مایع و محصولات بهداشت فردی',
        'ترکیبات آروماتراپی، اسپری‌های آرامش‌بخش و روغن‌های ماساژ',
        'محصولات مراقبت از منزل، شوینده‌ها و خوشبوکننده‌های محیطی'
      ],
      rfqChecklist: [
        'گونه گیاهی موردنظر (Lavandula angustifolia یا Lavandin)',
        'محدوده هدف استر/لینالول/کافور یا استاندارد ایزو/فارماکوپه',
        'حجم سفارش، نوع بسته‌بندی و نیاز به نمونه آزمایشگاهی',
        'کشور مقصد و مدارک انطباق موردنیاز (SDS، IFRA، آلرژن‌ها)'
      ],
      faq: [
        ['تفاوت کاربردی بین Angustifolia و Lavandin در فرآیند خرید چیست؟', 'گونه Lavandula angustifolia دارای رایحه ملایم‌تر و کافور پایین‌تر برای محصولات مراقبت از پوست است، در حالی که Lavandin بازده بویایی و صرفه اقتصادی بالاتری برای صابون و شوینده‌ها دارد. ما گزینه دقیق را با فرمولاسیون شما تطبیق می‌دهیم.'],
        ['آیا امکان خرید در مقیاس بشکه وجود دارد؟', 'بله، بسته به حجم درخواستی خریدار، بسته‌بندی‌های ۵ تا ۲۵ کیلوگرمی و بشکه‌های ۱۸۰ کیلوگرمی هماهنگ می‌شود.'],
        ['آیا بار ارسالی با نمونه تأییدشده مطابقت دارد؟', 'بله، نمونه پیش از حمل از همان بچ پیشنهادی یا بازه مشخصات GC-MS توافق‌شده تهیه می‌گردد.']
      ]
    },
    'rose-water-hydrosol': {
      name: 'تأمین عمده گلاب و هیدرولات گل رز (Rose Hydrosol) B2B',
      metaTitle: 'تأمین عمده هیدرولات گل رز و گلاب آرایشی B2B | CTSEG',
      description: 'تأمین عمده B2B هیدرولات طبیعی Rosa damascena حاصل از تقطیر بخار در گالن، بشکه ۲۰۰ لیتری و مخازن IBC هزار لیتری برای صنعت آرایشی.',
      eyebrow: 'CTSEG · هیدرولات و عرقیات گیاهی آرایشی',
      botanicalName: 'INCI: Rosa Damascena Flower Water · هیدرولات تقطیر با بخار',
      lead: 'CTSEG تأمین عمده هیدرولات طبیعی گل محمدی (Rosa damascena) را برای کارخانه‌های آرایشی و تولیدکنندگان قراردادی هماهنگ می‌کند؛ شامل بررسی درصد اسانس محلول، کنترل میکروبی، سیستم نگهدارنده و حمل در بشکه یا مخازن IBC.',
      cardSummary: 'تأمین عمده هیدرولات طبیعی گل رز (Rosa damascena) در بشکه و مخازن IBC برای تونر، میست صورت و امولسیون‌های آرایشی.',
      specs: [
        ['گرید تقطیر', 'هیدرولات ۱۰۰٪ طبیعی حاصل از تقطیر با بخار گلبرگ‌های Rosa damascena (بدون اسانس‌های سنتتیک بازسازی‌شده)'],
        ['پارامترهای فنی', 'محدوده pH کنترل‌شده، درصد اسانس محلول، آنالیز میکروبی (TAMC/TYMC) و گزینه‌های بدون نگهدارنده یا دارای نگهدارنده'],
        ['بسته‌بندی صنعتی', 'گالن‌های ۲۰ تا ۳۰ لیتری HDPE، بشکه‌های ۲۰۰ لیتری و مخازن ۱۰۰۰ لیتری IBC'],
        ['پرونده مستندات', 'گواهی آنالیز COA، گزارش آزمون میکروبی، SDS، تفکیک INCI و اسناد صادراتی']
      ],
      applications: [
        'تونرهای صورت، اسپری‌های آبرسان (Face Mist) و میسلار واترها',
        'جایگزین فاز آبی در کرم‌ها، لوسیون‌ها و سرم‌های آرایشی',
        'محلول ماسک‌های ورقه‌ای (Sheet Mask)، دستمال مرطوب و پاک‌کننده‌های ملایم',
        'تونیک‌های تقویت پوست سر و اسپری‌های طراوت‌بخش بدن'
      ],
      rfqChecklist: [
        'وضعیت نگهدارنده (بدون نگهدارنده میکروفیلترشده یا دارای نگهدارنده مجاز آرایشی)',
        'نسبت اسانس باقی‌مانده و پروفایل بویایی موردانتظار',
        'حجم هر پارت حمل، نوع بسته‌بندی (گالن، بشکه یا IBC) و دوره سفارش',
        'مقصد تحویل و الزامات گمرکی/بهداشتی کشور واردکننده'
      ],
      faq: [
        ['تفاوت هیدرولات طبیعی گل رز با آب‌های معطر بازسازی‌شده چیست؟', 'هیدرولات واقعی مستقیماً از تقطیر با بخار گلبرگ‌های تازه Rosa damascena به دست می‌آید و حاوی ترکیبات معطر طبیعی محلول در آب است، نه ترکیب آب دیونیزه با اسانس مصنوعی. در فرآیند RFQ گرید تقطیری دقیق مشخص می‌شود.'],
        ['آیا امکان ارسال صادراتی در بشکه‌های ۲۰۰ لیتری یا مخازن IBC وجود دارد؟', 'بله، برای تولیدکنندگان صنعتی امکان ارسال پالت‌شده در بشکه‌های HDPE و مخازن ۱۰۰۰ لیتری IBC از طریق حمل زمینی یا دریایی فراهم است.'],
        ['پایداری میکروبی در حمل عمده چگونه مدیریت می‌شود؟', 'بسته به نیاز فرمولاسیون خریدار، گزینه‌های میکروفیلترشده در ظروف پلمپ یا دارای سیستم نگهدارنده منطبق با مقررات بازار مقصد بررسی می‌گردد.']
      ]
    },
    'lavender-water-hydrosol': {
      name: 'تأمین عمده هیدرولات و آب اسطوخودوس (Lavender Hydrosol) B2B',
      metaTitle: 'تأمین عمده هیدرولات اسطوخودوس برای صنعت آرایشی B2B | CTSEG',
      description: 'تأمین B2B هیدرولات تقطیری اسطوخودوس از ترکیه برای تولید محصولات مراقبت از پوست، مو، کودک و کازمتیک طبیعی.',
      eyebrow: 'CTSEG · هیدرولات و عرقیات گیاهی آرایشی',
      botanicalName: 'INCI: Lavandula Angustifolia Flower Water / Lavandula Hybrida Flower Water',
      lead: 'ما تأمین عمده هیدرولات اسطوخودوس حاصل از تقطیر بخار را برای لابراتوارهای فرمولاسیون و کارخانه‌های آرایشی هماهنگ می‌کنیم؛ با کنترل منشأ گیاهی، خلوص میکروبی، پایداری pH و بسته‌بندی‌های ۲۰ لیتری تا ۱۰۰۰ لیتری IBC.',
      cardSummary: 'هیدرولات طبیعی اسطوخودوس برای تونرهای متعادل‌کننده چربی پوست، محصولات التیام‌بخش، مراقبت کودک و فاز آبی فرمولاسیون‌های گیاهی.',
      specs: [
        ['روش تولید', 'عصاره آبی خالص حاصل از تقطیر با بخار سرشاخه‌های گلدار اسطوخودوس'],
        ['کنترل کیفیت', 'بررسی pH، شفافیت، پروفایل ترکیبات فرار طبیعی و COA میکروبی برای هر بچ'],
        ['بسته‌بندی عمده', 'گالن‌های ۲۰ و ۲۵ لیتری HDPE، بشکه‌های ۲۰۰ لیتری و مخازن ۱۰۰۰ لیتری IBC'],
        ['مستندات فنی', 'COA، TDS، برگه ایمنی SDS/MSDS، گواهی آلرژن و اسناد گمرکی صادرات']
      ],
      applications: [
        'تونرهای قابض منافذ و متعادل‌کننده سبوم برای پوست‌های چرب و مختلط',
        'اسپری‌ها و ژل‌های خنک‌کننده پس از آفتاب (After-sun)',
        'فاز آبی ملایم برای محصولات مراقبت از پوست حساس و کودک',
        'لوسیون‌های پوست سر، شامپوهای گیاهی و اسپری‌های خوشبوکننده پارچه'
      ],
      rfqChecklist: [
        'منشأ گیاهی موردنظر (هیدرولات Angustifolia یا Lavandin)',
        'نوع سیستم نگهدارنده و حدود مجاز میکروبی',
        'نوع بسته‌بندی (گالن، بشکه یا IBC) و متراژ/وزن کل سفارش',
        'آدرس دریافت نمونه و اینکوترمز درخواستی'
      ],
      faq: [
        ['هیدرولات اسطوخودوس چگونه در تولید صنعتی آرایشی استفاده می‌شود؟', 'فرمولاتورها از ۱۰ تا ۱۰۰ درصد فاز آبی تونرها، ژل‌ها و امولسیون‌ها را با هیدرولات اسطوخودوس جایگزین می‌کنند تا خواص آرام‌بخش و رایحه طبیعی گیاهی ایجاد شود.'],
        ['یکنواختی کیفیت بین بچ‌های مختلف چگونه کنترل می‌شود؟', 'هر درخواست با بچ‌های تقطیر دارای گواهی آنالیز کامل (pH، ویژگی‌های ارگانولپتیک و میکروبی) تطبیق داده شده و نمونه پیش از حمل ارائه می‌شود.'],
        ['حداقل مقدار سفارش (MOQ) چقدر است؟', 'حداقل سفارش بسته به نوع بسته‌بندی (گالن، بشکه ۲۰۰ لیتری یا IBC) و سیستم نگهدارنده در مرحله بررسی RFQ مشخص می‌گردد.']
      ]
    },
    'botanical-carrier-oils': {
      name: 'تأمین عمده روغن‌های پایه و حامل گیاهی (Carrier Oils) B2B',
      metaTitle: 'تأمین عمده روغن‌های پایه آرایشی و روغن‌های پرس سرد B2B | CTSEG',
      description: 'تأمین B2B روغن‌های حامل گیاهی پرس سرد و تصفیه‌شده (بادام شیرین، جوجوبا، رزهیپ، هسته انگور، هسته زردآلو، دانه انار) برای صنعت آرایشی.',
      eyebrow: 'CTSEG · روغن‌های ثابت و حامل گیاهی',
      botanicalName: 'روغن‌های گیاهی پرس سرد (Cold-Pressed Virgin) و تصفیه‌شده آرایشی',
      lead: 'CTSEG تأمین عمده روغن‌های گیاهی ثابت و حامل را برای لابراتوارهای آرایشی، برندهای مراقبت از پوست و توزیع‌کنندگان مواد اولیه هماهنگ می‌کند و پروفایل اسیدهای چرب (FAME)، عدد پراکسید، اسیدیته و بسته‌بندی صادراتی را مورد بررسی قرار می‌دهد.',
      cardSummary: 'تأمین B2B روغن‌های پایه پرس سرد و تصفیه‌شده شامل بادام شیرین، هسته زردآلو، هسته انگور، رزهیپ، دانه انار و جوجوبا.',
      specs: [
        ['سبد محصولات اصلی', 'روغن بادام شیرین، هسته زردآلو، هسته انگور، رزهیپ (نسترن وحشی)، دانه انار، جوجوبا، آرگان، سیاه‌دانه، کنجد و فندق'],
        ['گریدهای فرآوری', 'روغن‌های بکر پرس سرد (Cold-Pressed Virgin) و گریدهای آرایشی تصفیه‌شده و بی‌بو (Refined/Deodorized)'],
        ['پارامترهای آزمایشگاهی', 'ترکیب اسیدهای چرب با GC، اسیدیته آزاد، عدد پراکسید، عدد یدی و ضریب شکست (COA)'],
        ['بسته‌بندی صنعتی', 'گالن‌های ۲۰ تا ۲۵ کیلوگرمی، بشکه‌های ۱۹۰ کیلوگرمی و مخازن IBC']
      ],
      applications: [
        'سرم‌های روغنی صورت، کرم‌های بازسازی‌کننده سد دفاعی پوست و بالم‌های بدون آب',
        'روغن‌های تقویت مو، سرم‌های موخوره و کمپلکس‌های تغذیه پوست سر',
        'روغن‌های پایه جهت رقیق‌سازی اسانس‌ها و روغن‌های تخصصی ماساژ',
        'محصولات ضدآفتاب، بالم لب، روغن‌های پاک‌کننده آرایش و صابون‌های طبیعی'
      ],
      rfqChecklist: [
        'نام روغن‌های درخواستی به همراه نام INCI و شماره CAS',
        'نوع فرآوری (پرس سرد بکر یا تصفیه‌شده/بی‌بو)',
        'حداکثر مجاز عدد پراکسید/اسیدیته و پروفایل اسید چرب مدنظر',
        'حجم سفارش، نوع ظرف و شرایط تحویل در مقصد'
      ],
      faq: [
        ['برای فرمولاسیون آرایشی روغن پرس سرد مناسب‌تر است یا تصفیه‌شده؟', 'روغن‌های پرس سرد به دلیل حفظ توکوفرول‌ها و فیتواسترول‌ها برای سرم‌های فعال ایده‌آل هستند؛ در حالی که روغن‌های تصفیه‌شده به دلیل رنگ و بوی خنثی و پایداری اکسیداتیو بالا در امولسیون‌های انبوه کاربرد دارند. هر دو گرید قابل ارزیابی است.'],
        ['آیا امکان تجمیع چند نوع روغن حامل و اسانس در یک محموله وجود دارد؟', 'بله، CTSEG امکان تجمیع چندین قلم روغن پایه، اسانس و هیدرولات را در یک پارت صادراتی واحد فراهم می‌کند.'],
        ['پایداری در برابر اکسیداسیون و تازگی بار چگونه بررسی می‌شود؟', 'پیش از حمل، تاریخ تولید، عدد پراکسید و اسیدیته در برگه آنالیز (COA) بچ بررسی و بسته‌بندی استاندارد هماهنگ می‌شود.']
      ]
    },
    'botanical-extracts': {
      name: 'تأمین عمده عصاره‌های گیاهی و مواد فعال آرایشی B2B',
      metaTitle: 'تأمین عمده عصاره‌های گیاهی (Botanical Extracts) آرایشی | CTSEG',
      description: 'تأمین B2B عصاره‌های گیاهی هیدروگلیسیرینه، گلیکولی، محلول در روغن و پودری برای تولیدکنندگان محصولات مراقبت از پوست، مو و درموکازمتیک.',
      eyebrow: 'CTSEG · عصاره‌های گیاهی و اکتیوها',
      botanicalName: 'عصاره‌های هیدروگلیسیرینه، پروپان‌دیول، ماسرات‌های روغنی و عصاره‌های خشک',
      lead: 'ما به برندهای درموکازمتیک، کارخانه‌های تولید قراردادی و لابراتوارهای تحقیق و توسعه کمک می‌کنیم تا عصاره‌های گیاهی مایع و پودری را متناسب با حلال حامل، نسبت گیاه به عصاره (DER)، سیستم نگهدارنده و مستندات فنی تهیه کنند.',
      cardSummary: 'تأمین B2B عصاره‌های گلیسیرینه، پروپان‌دیول، عصاره‌های روغنی و پودری استانداردشده برای فرمولاسیون‌های پوست و مو.',
      specs: [
        ['حلال‌ها و فرم‌های عرضه', 'آب/گلیسیرین (Hydroglyceric)، ۱،۳-پروپان‌دیول، پروپیلن/بوتیلن گلیکول، عصاره‌های روغنی و پودرهای خشک'],
        ['تنوع گیاهی', 'سنتلا، بابونه، کالندولا (همیشه‌بهار)، چای سبز، شیرین‌بیان، گل رز، اسطوخودوس، رزماری، عشقه، شاه‌بلوط هندی و گیاهان بومی آناتولی'],
        ['مستندات فنی', 'برگه مشخصات فنی TDS، آنالیز COA، برگه ایمنی SDS، درصد دقیق اجزای INCI و دوز مصرف پیشنهادی'],
        ['بسته‌بندی B2B', 'ظروف آرایشی ۱، ۵، ۱۰ و ۲۵ کیلوگرمی برای مایعات و ظروف ضدمرطوبت برای پودرها']
      ],
      applications: [
        'سرم‌ها و آمپول‌های روشن‌کننده، التیام‌بخش و آنتی‌اکسیدان صورت',
        'تونیک‌های ضدریزش مو و شامپوهای تخصصی گیاهی',
        'ژل‌های دور چشم، اسانس ماسک‌های صورت و لوسیون‌های درموکازمتیک',
        'ژل‌های مراقبت بدن، محصولات افترشیو و شوینده‌های ملایم پوست حساس'
      ],
      rfqChecklist: [
        'نام علمی گیاه و فرم فیزیکی موردنیاز (مایع یا پودر خشک)',
        'سیستم حلال ترجیحی (گلیسیرین، پروپان‌دیول، روغن پایه) و محدودیت‌های نگهدارنده',
        'نسبت استخراج (DER) یا ماده مؤثره هدف',
        'مقدار نمونه، حجم سفارش عمده و الزامات رگولاتوری بازار مقصد'
      ],
      faq: [
        ['آیا امکان سفارش عصاره بر پایه پروپان‌دیول یا گلیسیرین بدون پالم وجود دارد؟', 'بله، در مرحله بررسی RFQ سیستم حامل و نوع نگهدارنده دقیقاً با الزامات فرمولاسیون طبیعی یا بدون آب شما هماهنگ می‌شود.'],
        ['آیا تفکیک کامل INCI برای پرونده ایمنی محصول آرایشی ارائه می‌شود؟', 'بله، برای تمامی بچ‌های تأییدشده فایل‌های TDS، COA، SDS و جدول درصد اجزای INCI جهت ثبت و ارزیابی ایمنی ارائه می‌گردد.'],
        ['آیا امکان تأمین کمپلکس‌های ترکیبی از چند گیاه وجود دارد؟', 'در سفارش‌های با حجم تجاری مناسب، تأمین ترکیبات چندگیاهی هدفمند برای مراقبت از مو یا پوست از طریق تولیدکنندگان همکار قابل بررسی است.']
      ]
    },
    'other-essential-oils': {
      name: 'سایر اسانس‌های طبیعی (فلور آناتولی و مدیترانه) B2B',
      metaTitle: 'تأمین عمده اسانس آویشن، مرزنجوش، برگ بو، رزماری و مرکبات | CTSEG',
      description: 'تأمین B2B اسانس‌های آویشن، پونه کوهی (ارگانو)، برگ بو، رزماری، مریم‌گلی، نعناع فلفلی، اکالیپتوس و مرکبات از ترکیه با آنالیز GC-MS.',
      eyebrow: 'CTSEG · اسانس‌های معطر و دارویی-آرایشی',
      botanicalName: 'Origanum, Thymus, Laurus nobilis, Rosmarinus, Salvia, Mentha & Citrus Oils',
      lead: 'فراتر از گل رز و اسطوخودوس، ترکیه یکی از خاستگاه‌های اصلی گیاهان معطر مدیترانه‌ای و آناتولی است. CTSEG تأمین عمده اسانس‌های پونه کوهی/آویشن (کارواکرول/تیمول)، برگ بو، رزماری، مریم‌گلی، نعناع و مرکبات را با کموتایپ تأییدشده هماهنگ می‌کند.',
      cardSummary: 'تأمین عمده اسانس‌های آویشن، برگ بو، رزماری، مریم‌گلی، نعناع و مرکبات با تأییدیه کروماتوگرافی GC-MS.',
      specs: [
        ['اسانس‌های شاخص', 'پونه کوهی/آویشن (Origanum / Thymus)، برگ بو (Laurus nobilis)، رزماری، مریم‌گلی، نعناع فلفلی، اکالیپتوس، سرو و مرکبات'],
        ['آنالیز کموتایپ و مارکرها', 'بررسی GC-MS هر بچ جهت تأیید درصد کارواکرول، تیمول، ۱،۸-سینئول، منتول، کافور و لیمونن'],
        ['بسته‌بندی صنعتی', 'ظروف آلومینیومی و گالن‌های استاندارد UN از ۱ تا ۲۵ کیلوگرم و بشکه‌های ۱۸۰ کیلوگرمی'],
        ['صادرات و مقررات', 'برگه ایمنی SDS منطبق با GHS/CLP (شامل بخش ۱۴ حمل‌ونقل)، گواهی IFRA، لیست آلرژن‌ها و گواهی مبدأ']
      ],
      applications: [
        'شامپوهای پاک‌سازی پوست سر، صابون‌های گیاهی و محصولات بهداشت فردی',
        'فرمولاسیون‌های دهان و دندان (دهانشویه و خمیردندان حاوی نعناع، مریم‌گلی و آویشن)',
        'ژل‌ها و کرم‌های ماساژ ورزشی و ترکیبات تنفسی آروماتراپی',
        'ترکیبات عطری طبیعی، کازمتیک عملکردی و کاربردهای صنعتی B2B'
      ],
      rfqChecklist: [
        'نام علمی دقیق گیاه، بخش تقطیرشده و کموتایپ موردنیاز',
        'حداقل درصد ماده شاخص (مانند کارواکرول بالای ۷۰٪ یا ۱،۸-سینئول مشخص)',
        'حجم سفارش، نوع بسته‌بندی استاندارد UN و نیاز به نمونه',
        'گمرک/فرودگاه مقصد و شرایط حمل کالای خطرناک (DG) در صورت شمول'
      ],
      faq: [
        ['آیا درصد کارواکرول در اسانس آویشن/ارگانو یا سینئول در برگ بو با GC-MS تأیید می‌شود؟', 'بله، پیش از تأیید نمونه، برگه کروماتوگرافی GC-MS بچ پیشنهادی جهت بررسی دقیق درصد ترکیبات شاخص در اختیار خریدار قرار می‌گیرد.'],
        ['فرآیند حمل بین‌المللی اسانس‌های مشمول قوانین کالای خطرناک (DG) چگونه انجام می‌شود؟', 'بر اساس نقطه اشتعال و طبقه‌بندی بخش ۱۴ برگه SDS، بسته‌بندی دارای کد UN و شیوه مناسب حمل هوایی، دریایی یا زمینی هماهنگ می‌گردد.'],
        ['آیا می‌توان چندین اسانس مختلف را در یک درخواست (RFQ) ثبت کرد؟', 'بله، خریداران می‌توانند لیست تجمیعی شامل انواع اسانس‌ها، هیدرولات‌ها و روغن‌های حامل را در یک استعلام واحد ارسال نمایند.']
      ]
    }
  },
  ru: {
    'rose-essential-oil': {
      name: 'Эфирное масло розы (Rosa damascena) — B2B поставки',
      metaTitle: 'Оптовые поставки эфирного масла дамасской розы B2B | CTSEG',
      description: 'Международные B2B-поставки пародистилляционного эфирного масла Rosa damascena из Турции с проверкой GC-MS, образцами и сопровождением RFQ.',
      eyebrow: 'CTSEG · ЭФИРНЫЕ МАСЛА ОПТОМ',
      botanicalName: 'INCI: Rosa Damascena Flower Oil · Паровая дистилляция',
      lead: 'CTSEG координирует B2B-закупки анатолийского эфирного масла дамасской розы и розовых дериватов для парфюмерных домов, производителей косметики и дистрибьюторов сырья — согласуя партии урожая, профили GC-MS, контрольные образцы и экспортную логистику.',
      cardSummary: 'Пародистилляционное эфирное масло Rosa damascena и производные розы для высокой парфюмерии, премиального ухода за кожей и B2B-дистрибьюторов.',
      specs: [
        ['Метод и сорт', 'Эфирное масло Rosa damascena водно-паровой дистилляции (Otto of Rose) и абсолют розы по спецификации'],
        ['Аналитический контроль', 'Партионная хроматограмма GC-MS (цитронеллол, гераниол, нерол, стеароптены), COA и SDS'],
        ['Промышленная тара', 'Пломбируемые алюминиевые фляги и фторированные емкости (0,5 кг – 5 кг+) в защитной экспортной упаковке'],
        ['Образцы и MOQ', 'Эталонные образцы партии для лабораторного тестирования до основного заказа; гибкая оценка MOQ']
      ],
      applications: [
        'Высокая и нишевая парфюмерия, натуральные парфюмерные аккорды',
        'Премиальные антивозрастные масла, кремы и сыворотки для лица',
        'Профессиональная ароматерапия и спа-косметика',
        'Контрактное производство (Private Label) и активные ботанические линии'
      ],
      rfqChecklist: [
        'Требуемый тип продукта (дистилляционное розовое масло или абсолют розы)',
        'Целевой объем (граммы или килограммы) и годовой график закупок',
        'Пакет нормативной документации (сертификат IFRA, аллергены, GC-MS, REACH)',
        'Аэропорт/пункт назначения, предпочтительный базис Incoterms и условия доставки'
      ],
      faq: [
        ['Является ли CTSEG производителем или держателем склада розового масла?', 'Нет. CTSEG — независимый B2B торговый и сорсинговый дом в Турции. Мы подбираем проверенные дистилляционные предприятия под вашу аналитическую спецификацию и координируем образцы, документацию и отгрузку.'],
        ['Как подтверждается подлинность масла Rosa damascena?', 'Каждое коммерческое предложение сопровождается партионным анализом GC-MS, физико-химическими показателями COA (точка застывания, показатель преломления) и согласованием пред-отгрузочного образца.'],
        ['Гарантируются ли цены и наличие заранее?', 'Поскольку выход розового масла зависит от сезонного сбора лепестков, актуальная цена и резервирование объема подтверждаются по конкретному запросу (RFQ).']
      ]
    },
    'lavender-essential-oil': {
      name: 'Эфирное масло лаванды — B2B поставки',
      metaTitle: 'Эфирное масло лаванды оптом из Турции | CTSEG',
      description: 'B2B-поставки эфирного масла Lavandula angustifolia и лавандина из Турции с хроматограммами GC-MS, образцами и промышленной фасовкой.',
      eyebrow: 'CTSEG · ЭФИРНЫЕ МАСЛА ОПТОМ',
      botanicalName: 'INCI: Lavandula Angustifolia Oil / Lavandula Hybrida Oil',
      lead: 'Мы помогаем производителям косметики, средствам личной гигиены и парфюмерным лабораториям закупать эфирное масло лаванды (Lavandula angustifolia и лавандин) с заданным профилем линалоола и линалилацетата, организуя образцы, фасовку в бочки и экспорт.',
      cardSummary: 'Эфирные масла Lavandula angustifolia и лавандина оптом для ухода за кожей, личной гигиены, ароматерапии и отдушек.',
      specs: [
        ['Ботанические виды', 'Lavandula angustifolia (узколистная лаванда) и Lavandula intermedia / hybrida (лавандин)'],
        ['Качество и хроматография', 'Партионный профиль GC-MS с подтверждением уровня линалоола, линалилацетата и камфоры + COA'],
        ['Оптовая фасовка', 'Алюминиевые канистры 1 кг – 25 кг и стальные бочки с эпоксидным покрытием по 180 кг'],
        ['Коммерческая координация', 'Подбор партии, лабораторные образцы и экспортная логистика EXW / FOB / CIF / DAP']
      ],
      applications: [
        'Успокаивающие сыворотки, эмульсии, лосьоны для тела и дермокосметика',
        'Шампуни, гели для душа, жидкое мыло и средства гигиены',
        'Ароматерапевтические смеси, спреи для сна и массажные масла',
        'Натуральная бытовая химия, средства для стирки и ароматизации помещений'
      ],
      rfqChecklist: [
        'Ботанический вид (Lavandula angustifolia или лавандин)',
        'Целевой диапазон эфиров/линалоола/камфоры или стандарт ISO/Фармакопеи',
        'Объем партии, тип тары и необходимость тестирования образца',
        'Страна назначения и требуемые сертификаты (SDS, IFRA, перечень аллергенов)'
      ],
      faq: [
        ['Как выбрать между Lavandula angustifolia и лавандином при закупке?', 'Lavandula angustifolia обладает мягким профилем с низким содержанием камфоры для несмываемой косметики, тогда как лавандин дает более яркую камфорную ноту и экономическую эффективность для мыла и бытовой химии. Мы подбираем сорт под вашу рецептуру.'],
        ['Возможна ли поставка в бочках для крупного производства?', 'Да, в зависимости от сезонного наличия и спецификации мы координируем как канистры по 5–25 кг, так и бочки по 180 кг.'],
        ['Соответствует ли промышленная партия утвержденному образцу?', 'Да, контрольные образцы отбираются из предлагаемой партии или согласованного диапазона спецификации GC-MS.']
      ]
    },
    'rose-water-hydrosol': {
      name: 'Розовая вода и гидролат розы — B2B поставки',
      metaTitle: 'Розовая вода и гидролат Rosa damascena оптом B2B | CTSEG',
      description: 'Оптовые B2B-поставки пародистилляционного гидролата дамасской розы в канистрах, бочках 200 л и IBC-кубах 1000 л из Турции.',
      eyebrow: 'CTSEG · ГИДРОЛАТЫ И ЦВЕТОЧНЫЕ ВОДЫ',
      botanicalName: 'INCI: Rosa Damascena Flower Water · Паровой дистиллят',
      lead: 'CTSEG координирует оптовые поставки натурального парового гидролата Rosa damascena для косметических фабрик и контрактных производств — проверяя остаточное содержание эфирного масла, микробиологию, систему консервации и логистику в бочках или IBC.',
      cardSummary: 'Натуральная цветочная вода Rosa damascena паровой дистилляции в бочках и IBC-контейнерах для тоников, мистов и эмульсий.',
      specs: [
        ['Качество дистиллята', '100% паровой дистиллят лепестков Rosa damascena (без добавления синтетических отдушек)'],
        ['Технические параметры', 'Контролируемый pH, массовая доля растворенного эфирного масла, микробиологический COA (TAMC/TYMC), с консервантом или без'],
        ['Промышленная тара', 'HDPE-канистры 20–30 л, косметические бочки 200 л и кубовые емкости IBC 1000 л'],
        ['Пакет документов', 'Партионный COA, протокол микробиологии, SDS, состав INCI и экспортные сертификаты']
      ],
      applications: [
        'Тоники для лица, увлажняющие спреи (face mist) и мицеллярная вода',
        'Замена водной фазы в кремах, сыворотках и косметических эмульсиях',
        'Пропитки для тканевых масок (sheet masks), влажных салфеток и лосьонов',
        'Успокаивающие тоники для кожи головы и спреи для тела'
      ],
      rfqChecklist: [
        'Статус консервации (стерильно фильтрованный без консервантов или с разрешенным консервантом)',
        'Требуемое остаточное содержание эфирного масла и органолептический профиль',
        'Объем отгрузки, формат тары (канистра, бочка или IBC) и регулярность поставок',
        'Пункт доставки и таможенно-регуляторные требования страны импорта'
      ],
      faq: [
        ['Чем натуральный гидролат розы отличается от ароматизированной розовой воды?', 'Натуральный гидролат — это водный дистиллят, получаемый непосредственно при паровой перегонке свежих лепестков Rosa damascena, а не деионизированная вода с растворенной отдушкой. Мы специфицируем подлинный гидролат под ваш технический запрос.'],
        ['Возможна ли отгрузка в бочках по 200 л или IBC-кубах по 1000 л?', 'Да, для промышленных производителей мы организуем паллетированные поставки в бочках и IBC-контейнерах авто- или морским транспортом.'],
        ['Как обеспечивается микробиологическая стабильность при транспортировке?', 'По запросу технологов поставляются партии, прошедшие микрофильтрацию в герметичной таре, либо стабилизированные косметическими консервантами, разрешенными на целевом рынке.']
      ]
    },
    'lavender-water-hydrosol': {
      name: 'Лавандовая вода и гидролат лаванды — B2B поставки',
      metaTitle: 'Гидролат лаванды и лавандовая вода оптом B2B | CTSEG',
      description: 'B2B-поставки пародистилляционной лавандовой воды (гидролата лаванды) из Турции для производства средств ухода за кожей, волосами и натуральной косметики.',
      eyebrow: 'CTSEG · ГИДРОЛАТЫ И ЦВЕТОЧНЫЕ ВОДЫ',
      botanicalName: 'INCI: Lavandula Angustifolia Flower Water / Lavandula Hybrida Flower Water',
      lead: 'Мы координируем оптовые поставки парового гидролата лаванды для косметических лабораторий и заводов — проверяя ботаническое происхождение, микробиологическую чистоту, стабильность pH и промышленную фасовку от канистр до IBC-контейнеров.',
      cardSummary: 'Паровой гидролат лаванды для очищающих тоников, успокаивающей косметики, детских линий и растительных водных фаз.',
      specs: [
        ['Способ получения', 'Чистый водный дистиллят паровой перегонки цветущих соцветий лаванды'],
        ['Контроль качества', 'Проверка pH, прозрачности, профиля летучих компонентов и микробиологический COA партии'],
        ['Оптовая фасовка', 'HDPE-канистры 20 / 25 л, бочки 200 л и контейнеры IBC 1000 л'],
        ['Документация', 'COA, TDS, паспорт безопасности SDS/MSDS, декларация аллергенов и экспортные документы']
      ],
      applications: [
        'Очищающие и себорегулирующие тоники и спреи для лица',
        'Охлаждающие спреи и гели после загара (after-sun)',
        'Мягкая водная основа для детской косметики и чувствительной кожи',
        'Лосьоны для кожи головы, травяные шампуни и спреи для текстиля'
      ],
      rfqChecklist: [
        'Предпочтительный ботанический вид (гидролат Lavandula angustifolia или лавандина)',
        'Требования к системе консервации и микробиологическим лимитам',
        'Формат тары (канистра HDPE, бочка или IBC) и общий объем заказа',
        'Адрес для отправки образцов и базис поставки Incoterms'
      ],
      faq: [
        ['Как гидролат лаванды применяется в промышленном производстве косметики?', 'Технологи используют гидролат лаванды в концентрации от 10% до 100% водной фазы в тониках, гелях и эмульсиях для придания натурального аромата и успокаивающих свойств.'],
        ['Как контролируется стабильность характеристик от партии к партии?', 'Каждый запрос сопоставляется с партиями дистилляции, имеющими полный COA (pH, органолептика, микробиология), с предоставлением пред-отгрузочных образцов.'],
        ['Каков минимальный объем заказа (MOQ)?', 'MOQ зависит от выбранного типа тары (канистры, бочки 200 л или IBC 1000 л) и уточняется при расчете RFQ.']
      ]
    },
    'botanical-carrier-oils': {
      name: 'Базовые растительные масла (Carrier Oils) — B2B поставки',
      metaTitle: 'Базовые растительные и косметические масла оптом B2B | CTSEG',
      description: 'Оптовые B2B-поставки базовых масел холодного отжима и рафинированных (сладкий миндаль, жожоба, шиповник, виноградная и абрикосовая косточка, гранат).',
      eyebrow: 'CTSEG · БАЗОВЫЕ И ТРАНСПОРТНЫЕ МАСЛА',
      botanicalName: 'Нерафинированные масла холодного отжима (Virgin) и рафинированные косметические масла',
      lead: 'CTSEG координирует B2B-закупки базовых растительных масел холодного отжима и рафинированных сортов для косметических производств и дистрибьюторов сырья — проверяя жирнокислотный профиль (FAME), перекисное и кислотное числа и экспортную фасовку.',
      cardSummary: 'Масла холодного отжима и рафинированные базовые масла — миндальное, абрикосовое, виноградной косточки, шиповника, граната и жожоба.',
      specs: [
        ['Основной ассортимент', 'Масла сладкого миндаля, абрикосовой косточки, виноградной косточки, шиповника, гранатовой косточки, жожоба, арганы, черного тмина, кунжута и фундука'],
        ['Степень очистки', 'Нерафинированные масла первого холодного отжима (virgin) и рафинированные/дезодорированные косметические сорта'],
        ['Лабораторные показатели', 'Жирнокислотный состав по ГХ (FAME), кислотное число, перекисное число, йодное число и показатель преломления (COA)'],
        ['Оптовая тара', 'Канистры 20–25 кг, бочки 190 кг и IBC-контейнеры']
      ],
      applications: [
        'Масляные сыворотки для лица, питательные кремы и безводные бальзамы',
        'Масла для ухода за волосами, средства для кончиков и кожи головы',
        'Транспортные базы для разведения эфирных масел и массажные смеси',
        'Солнцезащитная косметика, бальзамы для губ, гидрофильные масла и мыловарение'
      ],
      rfqChecklist: [
        'Требуемые растительные масла с указанием INCI и номера CAS',
        'Тип обработки (холодный отжим virgin или рафинированное/дезодорированное)',
        'Предельные значения перекисного/кислотного числа и целевой жирнокислотный состав',
        'Объем закупки, размер тары и условия доставки'
      ],
      faq: [
        ['Что выбрать для рецептуры: масла холодного отжима или рафинированные?', 'Масла холодного отжима сохраняют природные токоферолы и фитостеролы для активных сывороток, а рафинированные масла обеспечивают нейтральный цвет/запах и высокую стабильность к окислению в эмульсиях. Мы поставляем оба варианта по вашему ТЗ.'],
        ['Можно ли объединить несколько базовых и эфирных масел в одну отгрузку?', 'Да, CTSEG консолидирует различные базовые масла, эфирные масла и гидролаты в единую экспортную поставку.'],
        ['Как контролируется свежесть и окислительная стабильность?', 'Перед отгрузкой мы проверяем дату выработки, перекисное и кислотное числа по сертификату анализа (COA) конкретной партии.']
      ]
    },
    'botanical-extracts': {
      name: 'Растительные экстракты и активное косметическое сырье B2B',
      metaTitle: 'Растительные экстракты и косметические активы оптом B2B | CTSEG',
      description: 'B2B-поставки водно-глицериновых, пропандиоловых, жирорастворимых и сухих растительных экстрактов для производителей косметики и дермокосметики.',
      eyebrow: 'CTSEG · РАСТИТЕЛЬНЫЕ ЭКСТРАКТЫ И АКТИВЫ',
      botanicalName: 'Водно-глицериновые, пропандиоловые, масляные мацераты и сухие экстракты',
      lead: 'Мы помогаем брендам дермокосметики, контрактным производствам и R&D-лабораториям закупать жидкие и сухие растительные экстракты — подбирая растворитель-носитель, соотношение сырье/экстракт (DER), систему консервации и техническое досье.',
      cardSummary: 'Водорастворимые глицериты, экстракты в пропандиоле, масляные мацераты и стандартизированные сухие экстракты для косметической промышленности.',
      specs: [
        ['Носители и формы', 'Вода/глицерин, 1,3-пропандиол, пропилен-/бутиленгликоль, масляные мацераты и сухие порошковые экстракты'],
        ['Ботанический спектр', 'Центелла, ромашка, календула, зеленый чай, солодка, роза, лаванда, розмарин, плющ, конский каштан, зверобой и флора Анатолии'],
        ['Техническое досье', 'TDS, партионный COA, SDS, полная процентная расшифровка INCI, данные о консервантах и рекомендуемый процент ввода'],
        ['Фасовка B2B', 'Косметические канистры по 1 кг, 5 кг, 10 кг и 25 кг или герметичные барабаны для сухих экстрактов']
      ],
      applications: [
        'Осветляющие, успокаивающие и антиоксидантные сыворотки и ампулы для лица',
        'Тоники против выпадения волос и фито-шампуни',
        'Гели для контура глаз, эссенции для масок и дермокосметические лосьоны',
        'Укрепляющие средства для тела, бальзамы после бритья и мягкие гели для умывания'
      ],
      rfqChecklist: [
        'Вид растения (латинское название) и физическая форма (жидкость или порошок)',
        'Предпочтительный растворитель (глицерин, пропандиол, базовое масло) и требования к консервантам',
        'Целевое соотношение DER или стандартизация по активному веществу',
        'Объем образца, размер промышленной партии и регуляторные требования рынка'
      ],
      faq: [
        ['Можно ли заказать экстракты на основе пропандиола или глицерина без пальмового сырья?', 'Да, при проработке RFQ мы подбираем систему растворителя и консервации под ваши стандарты натуральной косметики или безводных рецептур.'],
        ['Предоставляется ли полная расшифровка INCI для оценки безопасности косметики?', 'Да, каждая партия сопровождается TDS, COA, SDS и процентным составом INCI для регуляторного досье.'],
        ['Возможна ли поставка комплексных купажей из нескольких экстрактов?', 'При коммерческих B2B-объемах возможно согласование многокомпонентных фитокомплексов для ухода за волосами или кожей.']
      ]
    },
    'other-essential-oils': {
      name: 'Другие эфирные масла (флора Анатолии и Средиземноморья)',
      metaTitle: 'Эфирные масла орегано, лавра, розмарина и цитрусовых оптом | CTSEG',
      description: 'B2B-поставки эфирных масел орегано (душицы), чабреца, благородного лавра, розмарина, шалфея, мяты, эвкалипта и цитрусовых из Турции с анализом GC-MS.',
      eyebrow: 'CTSEG · АРОМАТИЧЕСКИЕ И ЭФИРНЫЕ МАСЛА',
      botanicalName: 'Origanum, Thymus, Laurus nobilis, Rosmarinus, Salvia, Mentha & Citrus Oils',
      lead: 'Помимо розы и лаванды, Турция является ключевым регионом происхождения средиземноморских и анатолийских эфиромасличных культур. CTSEG координирует оптовые поставки масел орегано, тимьяна, лаврового листа, розмарина, шалфея, мяты и цитрусовых с подтвержденным хемотипом.',
      cardSummary: 'Проверенные по GC-MS эфирные масла орегано, чабреца, лавра, розмарина, шалфея, мяты и цитрусовых для B2B-заказчиков.',
      specs: [
        ['Основные позиции', 'Масло орегано (Origanum), тимьяна, лаврового листа (Laurus nobilis), розмарина, шалфея, перечной мяты, эвкалипта, кедра и цитрусовых'],
        ['Контроль хемотипа', 'Партионный анализ GC-MS для подтверждения доли карвакрола, тимола, 1,8-цинеола, ментола, камфоры и лимонена'],
        ['Оптовая тара', 'Алюминиевые фляги и сертифицированные UN-канистры 1–25 кг, стальные бочки 180 кг'],
        ['Экспорт и документы', 'SDS по стандарту GHS/CLP (включая раздел 14 по транспортировке), сертификат IFRA, декларация аллергенов и сертификат происхождения']
      ],
      applications: [
        'Очищающие шампуни для кожи головы, натуральное мыло и средства гигиены',
        'Средства для полости рта (ополаскиватели и пасты с мятой, шалфеем, тимьяном)',
        'Спортивные разогревающие гели, массажные бальзамы и ингаляционные смеси',
        'Натуральные парфюмерные композиции, функциональная косметика и технические B2B-задачи'
      ],
      rfqChecklist: [
        'Точное латинское название растения, дистиллируемая часть и требуемый хемотип',
        'Минимальное содержание маркерного компонента (например, карвакрол >70% или уровень 1,8-цинеола)',
        'Объем заказа, требования к UN-упаковке и необходимость образца',
        'Пункт назначения и условия перевозки опасных/неопасных грузов (DG)'
      ],
      faq: [
        ['Подтверждается ли содержание карвакрола в масле орегано или 1,8-цинеола в масле лавра по GC-MS?', 'Да, по каждой предлагаемой партии предоставляется хроматограмма GC-MS, чтобы покупатель мог проверить процентное содержание активных маркеров до утверждения образца.'],
        ['Как организуется международная доставка эфирных масел, относящихся к опасным грузам (DG)?', 'На этапе RFQ мы проверяем раздел 14 паспорта безопасности SDS (UN-номер и температуру вспышки) и подбираем сертифицированную тару для авиа-, морской или автоперевозки.'],
        ['Можно ли включить несколько эфирных масел в одну заявку RFQ?', 'Да, закупщики регулярно отправляют сборные спецификации, объединяющие несколько видов эфирных масел, гидролатов и базовых масел.']
      ]
    }
  },
  zh: {
    'rose-essential-oil': {
      name: '大马士革玫瑰精油 (Rose Essential Oil) B2B 采购',
      metaTitle: '土耳其大马士革玫瑰精油 (Rosa damascena) 批量 B2B 采购 | CTSEG',
      description: '面向国际客户的土耳其水蒸气蒸馏大马士革玫瑰精油 B2B 采购服务，支持 GC-MS 色谱核验、样品寄送与批量询盘协调。',
      eyebrow: 'CTSEG · 精油大宗采购',
      botanicalName: 'INCI: Rosa Damascena Flower Oil · 水蒸气蒸馏奥图玫瑰油',
      lead: 'CTSEG 为香精香料企业、高端护肤品制造商及化妆品原料经销商协调土耳其安纳托利亚大马士革玫瑰精油（Otto of Rose）及玫瑰衍生品的 B2B 采购，统筹产季批次匹配、GC-MS 谱图审核、实验室留样与出口物流。',
      cardSummary: '水蒸气蒸馏大马士革玫瑰精油与玫瑰净油，服务于高级香水、功效型护肤配方与国际原料分销商。',
      specs: [
        ['提取工艺与等级', '水/水蒸气蒸馏大马士革玫瑰花油（Otto of Rose）及按客户规格匹配的玫瑰净油（Absolute）'],
        ['分析检测核验', '批次专属 GC-MS 气相色谱质谱报告（香茅醇、牻牛儿醇、橙花醇及玫瑰蜡比例）、COA 与 SDS'],
        ['工业级包装', '防拆封氟化瓶、内涂铝瓶（0.5 kg – 5 kg+）及符合国际空运/海运标准的加固外箱'],
        ['样品与起订量 (MOQ)', '支持大货采购前的参考批次样品实验室评估；根据产季批次核定阶梯起订量']
      ],
      applications: [
        '高级香水（Fine Fragrance）、沙龙香氛与天然调香基底',
        '高端抗衰精华油、修护面霜与高价值面部护理配方',
        '专业芳香疗法与高端 SPA 护理产品',
        '化妆品 OEM/ODM 代工及主打天然植物成分的品牌线'
      ],
      rfqChecklist: [
        '所需产品等级（水蒸气蒸馏奥图玫瑰油或溶剂提取玫瑰净油）',
        '目标采购数量（克或千克）及年度采购计划',
        '法规文件要求（IFRA 证书、过敏原清单、GC-MS、REACH 状态等）',
        '目的港/机场、首选国际贸易术语（Incoterm）及运输要求'
      ],
      faq: [
        ['CTSEG 是玫瑰精油生产厂或现货贸易商吗？', '不是。CTSEG 是立足土耳其的独立 B2B 贸易与采购协调机构，我们根据买方的分析指标筛选合规蒸馏工厂，并统筹样品测试、技术文件与出口交付。'],
        ['如何核验大马士革玫瑰精油的纯度与真实性？', '每次报价与寄样均附带对应批次的 GC-MS 谱图及理化 COA（凝固点、折光率、旋光度），并在出货前确认大货批样。'],
        ['价格与库存是否预先固定承诺？', '由于大马士革玫瑰精油受当季花瓣采收率影响较大，库存配额与价格均以实时询盘（RFQ）核查结果为准。']
      ]
    },
    'lavender-essential-oil': {
      name: '薰衣草精油 (Lavender Essential Oil) B2B 采购',
      metaTitle: '土耳其薰衣草精油批发与 B2B 批量采购 | CTSEG',
      description: '从土耳其采购真正薰衣草（Lavandula angustifolia）与醒目薰衣草精油，提供批次 GC-MS、样品核验与桶装出口协调。',
      eyebrow: 'CTSEG · 精油大宗采购',
      botanicalName: 'INCI: Lavandula Angustifolia Oil / Lavandula Hybrida Oil',
      lead: '我们协助化妆品生产商、个护品牌与香精公司按技术规格采购真正薰衣草（Lavandula angustifolia）及醒目薰衣草（Lavandin）精油，精准匹配芳樟醇与乙酸芳樟酯指标、铝桶/铁桶包装及出口单证。',
      cardSummary: '面向护肤、洗护、芳香疗法及日化调香的大宗真正薰衣草与醒目薰衣草精油 B2B 采购。',
      specs: [
        ['植物品种选择', '真正薰衣草（Lavandula angustifolia）与醒目薰衣草（Lavandula intermedia / hybrida）'],
        ['品质与色谱检测', '提供批次 GC-MS 与 COA，明确芳樟醇、乙酸芳樟酯及樟脑（Camphor）含量范围'],
        ['大宗包装规格', '1 kg – 25 kg 铝桶及 180 kg 内涂环氧树脂钢桶'],
        ['贸易与物流协调', '产季批次筛选、研发打样寄送及 EXW / FOB / CIF / DAP 国际物流安排']
      ],
      applications: [
        '舒缓修护面部精华、乳液、身体乳及敏感肌护理配方',
        '洗发水、沐浴露、液体皂及植物系个人洗护产品',
        '扩香复配精油、助眠喷雾与专业按摩油',
        '天然家居清洁、织物护理及空间香氛产品'
      ],
      rfqChecklist: [
        '所需植物品种（Lavandula angustifolia 或醒目薰衣草 Lavandin）',
        '目标酯类/芳樟醇/樟脑指标范围或 ISO/药典参考标准',
        '订单数量、包装容器规格及样品评估需求',
        '目的国及所需合规文件（SDS、IFRA 证书、过敏原声明）'
      ],
      faq: [
        ['在采购时如何选择真正薰衣草与醒目薰衣草？', '真正薰衣草（Angustifolia）樟脑含量低、香气柔和甜美，适合驻留型护肤与芳疗；醒目薰衣草（Lavandin）留香强、性价比高，广泛用于皂基、洗护与家清产品。我们根据您的配方用途匹配对应品种。'],
        ['是否支持工业级 180 kg 整桶采购？', '可以。根据当季批次产量与买方规格，我们可协调 5–25 kg 铝瓶及 180 kg 标准大桶出货。'],
        ['大货批次是否与确认样品一致？', '是的，产前确认样均来自所锁定的生产批次或双方约定的 GC-MS 规格窗口。']
      ]
    },
    'rose-water-hydrosol': {
      name: '玫瑰纯露与玫瑰花水 (Rose Hydrosol) B2B 采购',
      metaTitle: '大马士革玫瑰纯露与化妆品级玫瑰花水批量采购 | CTSEG',
      description: '从土耳其批量采购水蒸气蒸馏大马士革玫瑰纯露（20L 桶、200L 大桶及 1000L IBC 吨桶），用于化妆水、喷雾与护肤乳液生产。',
      eyebrow: 'CTSEG · 植物纯露与花水',
      botanicalName: 'INCI: Rosa Damascena Flower Water · 水蒸气蒸馏纯露',
      lead: 'CTSEG 为护肤品工厂与 OEM 代工企业协调正宗水蒸气蒸馏大马士革玫瑰纯露的大宗供应，全面评估溶解精油残留度、微生物指标、防腐体系及 200L 大桶/1000L IBC 吨桶国际物流。',
      cardSummary: '水蒸气蒸馏大马士革玫瑰纯露，提供大桶与 IBC 吨桶包装，适用于爽肤水、保湿喷雾及乳液水相基质。',
      specs: [
        ['纯露等级', '100% 大马士革玫瑰花瓣水蒸气蒸馏馏出液（非香精勾兑复配花水）'],
        ['关键技术指标', '受控 pH 范围、水溶精油组分含量、微生物检测 COA（菌落总数/霉菌酵母菌）及无防腐/含防腐选项'],
        ['工业大宗包装', '20 L – 30 L HDPE 塑胶桶、200 L 化妆品级大桶及 1,000 L IBC 集装桶'],
        ['合规文件包', '批次 COA、微生物检测报告、SDS、INCI 组分拆分表及原产地/出口单证']
      ],
      applications: [
        '爽肤水、保湿喷雾（Face Mist）、卸妆洁肤水与精华水',
        '面霜、乳液与精华液中的天然植物水相替代基底',
        '贴片面膜精华液、湿巾溶液及温和眼唇清洁产品',
        '头皮舒缓营养水、护发喷雾与身体香氛喷雾'
      ],
      rfqChecklist: [
        '防腐体系要求（微孔过滤无添加防腐剂，或添加合规化妆品防腐体系）',
        '目标水溶精油残留比例及香气浓度要求',
        '单次采购体积、包装形式（塑桶、200L 桶或 IBC 吨桶）及采购频次',
        '目的港/交货地点及进口报关与化妆品备案文件要求'
      ],
      faq: [
        ['天然蒸馏玫瑰纯露与调配玫瑰水有何区别？', '真正的玫瑰纯露是新鲜大马士革玫瑰花瓣在水蒸气蒸馏过程中直接收集的芳香水相馏出液；而调配水则是去离子水加增溶剂与香精。我们在 RFQ 中严格按照买方技术标准对接真实蒸馏纯露。'],
        ['能否以 200L 桶或 1000L IBC 吨桶进行国际海运/陆运？', '可以。针对工业级化妆品生产商，我们常年协调打托盘的 200L 桶及 1000L IBC 吨桶整柜或拼箱出口。'],
        ['大宗运输过程中的微生物稳定性如何保障？', '买方可根据配方工艺选择无菌微滤密封批次，或选择符合目标市场法规的化妆品防腐体系批次。']
      ]
    },
    'lavender-water-hydrosol': {
      name: '薰衣草纯露与花水 (Lavender Hydrosol) B2B 采购',
      metaTitle: '土耳其薰衣草纯露与植物花水批发 B2B 采购 | CTSEG',
      description: '从土耳其采购水蒸气蒸馏薰衣草纯露（Lavandula hydrosol），服务于护肤、洗护、婴童护理与天然化妆品加工厂。',
      eyebrow: 'CTSEG · 植物纯露与花水',
      botanicalName: 'INCI: Lavandula Angustifolia Flower Water / Lavandula Hybrida Flower Water',
      lead: '我们为化妆品研发实验室及加工厂协调水蒸气蒸馏薰衣草纯露的批量采购，严格核查植物来源、微生物纯度、pH 稳定性及从 20L 桶到 1000L IBC 吨桶的工业包装方案。',
      cardSummary: '水蒸气蒸馏薰衣草纯露，适用于控油爽肤水、舒缓修护护肤品、婴童洗护及植物水相配方。',
      specs: [
        ['生产工艺', '薰衣草花穗水蒸气蒸馏过程中同步收集的纯正植物芳香水馏出液'],
        ['质量控制参数', '批次 pH 值测定、澄清度、天然挥发性芳香组分及微生物 COA 检测'],
        ['大宗包装', '20 L / 25 L HDPE 桶、200 L 大桶及 1,000 L IBC 吨桶'],
        ['技术与出口文件', 'COA、TDS、SDS/MSDS、过敏原声明及出口清关单证']
      ],
      applications: [
        '收敛毛孔、平衡油脂的面部爽肤水与控油喷雾',
        '晒后修护降温喷雾、舒缓芦荟/草本凝胶',
        '婴童温和洗护与敏感肌护肤品中的植物水相基底',
        '头皮净化护理液、植物洗发水及睡眠枕头/织物喷雾'
      ],
      rfqChecklist: [
        '植物品种倾向（真正薰衣草 Angustifolia 纯露或醒目薰衣草纯露）',
        '防腐体系规范及微生物限值要求',
        '包装容器规格（HDPE 桶、200L 桶或 IBC）及总采购量',
        '样品寄送地址及贸易术语（Incoterm）要求'
      ],
      faq: [
        ['薰衣草纯露在化妆品工业配方中如何使用？', '配方师通常用薰衣草纯露替代爽肤水、凝胶、乳液和洁面产品中 10% 至 100% 的去离子水，以赋予产品天然草本香气和舒缓调理功效。'],
        ['如何保证不同批次间的气味与 pH 稳定性？', '每笔询盘均匹配具备完整 COA（pH、感官指标、微生物）的蒸馏批次，并提供出货前批次留样核验。'],
        ['薰衣草纯露的最小起订量 (MOQ) 是多少？', 'MOQ 取决于所选包装形式（25L 桶、200L 桶或 1000L IBC）及防腐要求，将在 RFQ 评估阶段确认。']
      ]
    },
    'botanical-carrier-oils': {
      name: '植物基础油与载体油 (Botanical Carrier Oils) B2B 采购',
      metaTitle: '冷压与精炼植物基础油化妆品原料批量采购 | CTSEG',
      description: 'B2B 批量采购冷压与精炼化妆品基础油（甜杏仁油、荷荷巴油、玫瑰果油、葡萄籽油、杏核油、石榴籽油等）。',
      eyebrow: 'CTSEG · 植物基础油与载体油',
      botanicalName: '冷压初榨 (Cold-Pressed Virgin) 与化妆品级精炼植物油',
      lead: 'CTSEG 为化妆品工厂、护肤品牌及油脂原料商协调冷压初榨及精炼植物基础油的 B2B 采购，核查脂肪酸组成谱图（FAME）、过氧化值、酸价及工业级出口包装。',
      cardSummary: '冷压与精炼植物基础油——涵盖甜杏仁油、杏核油、葡萄籽油、玫瑰果油、石榴籽油与荷荷巴油等 B2B 原料。',
      specs: [
        ['核心油脂品类', '甜杏仁油、杏核油、葡萄籽油、玫瑰果油、石榴籽油、荷荷巴油、摩洛哥坚果油、黑种草籽油、芝麻油及榛子油'],
        ['加工工艺等级', '冷压未精炼初榨级（Virgin）与化妆品级精炼/脱蜡/脱臭级（Refined/Deodorized）'],
        ['分析检测指标', '气相色谱脂肪酸组成（FAME）、游离脂肪酸（酸价）、过氧化值、碘值、皂化值与折光率（COA）'],
        ['大宗包装', '20 kg – 25 kg HDPE/金属桶、190 kg 钢桶/塑桶及 IBC 吨桶（可选充氮保护）']
      ],
      applications: [
        '面部精华油（以油养肤）、屏障修护面霜与无水膏霜',
        '护发精油、发梢修护液及头皮滋养复配油',
        '单方精油稀释基底油与专业芳疗按摩油',
        '防晒护理、润唇膏、卸妆油及手工皂/天然洁面基底'
      ],
      rfqChecklist: [
        '所需植物油名称、INCI 名称及 CAS 号',
        '工艺等级要求（冷压初榨级或精炼脱臭级）',
        '过氧化值/酸价上限要求及目标脂肪酸比例',
        '采购数量、包装桶规格及目的港交货条件'
      ],
      faq: [
        ['配方研发应选择冷压初榨油还是精炼基础油？', '冷压初榨油保留了天然生育酚、植物甾醇及特征色泽，适合主打活性油脂的精华油；精炼油色泽浅、气味中性且氧化稳定性更高，适合大批量乳液与膏霜。我们可根据您的研发需求提供对应等级。'],
        ['能否将多种基础油与精油拼箱合并出货？', '可以。CTSEG 支持多品类拼单采购，可将不同基础油、精油与纯露整合在同一票出口货运中。'],
        ['如何把控油脂的新鲜度与抗氧化稳定性？', '出货前我们会核查批次 COA 上的生产日期、过氧化值与酸价，并协调遮光密封容器包装。']
      ]
    },
    'botanical-extracts': {
      name: '植物提取物与化妆品活性原料 B2B 采购',
      metaTitle: '化妆品植物提取物与草本活性原料批量采购 | CTSEG',
      description: '面向护肤、洗护与功效型化妆品生产商的B2B植物提取物采购（水溶甘油提取物、丙二醇提取物、油溶浸膏及标准干粉）。',
      eyebrow: 'CTSEG · 植物提取物与活性物',
      botanicalName: '水/甘油提取液、1,3-丙二醇提取液、油溶浸提物与标准化植物干粉',
      lead: '我们协助功效护肤品牌、OEM 代工厂及配方实验室采购液体与粉末状植物提取物，匹配溶剂载体体系、提取比例（DER）、防腐合规要求及国际法规技术文件。',
      cardSummary: '水溶甘油提取液、丙二醇提取液、油溶植物浸膏及标准化干粉提取物，服务于护肤与洗护制造。',
      specs: [
        ['载体与形态选项', '水/甘油（Hydroglyceric）、1,3-丙二醇、丙二醇/丁二醇、油溶浸提物（Macerates）及喷雾干燥粉末'],
        ['植物品种范围', '积雪草、洋甘菊、金盏花、绿茶、光果甘草、玫瑰、薰衣草、迷迭香、常春藤、七叶树、贯叶连翘及安纳托利亚特色植物'],
        ['技术文件体系', 'TDS、批次 COA、SDS、完整 INCI 百分比构成表、防腐体系说明及建议添加量'],
        ['工业包装规格', '1 kg、5 kg、10 kg 及 25 kg 化妆品级氟化桶/HDPE 桶，粉末采用铝箔内袋密封桶']
      ],
      applications: [
        '提亮、舒缓修护与抗氧化面部精华液及安瓶',
        '防脱固发头皮精华液、草本洗发水与护发素',
        '眼部护理凝胶、面膜精华液与功效型护肤乳液',
        '身体紧致护理、须后舒缓乳及温和洁面产品'
      ],
      rfqChecklist: [
        '目标植物品种（拉丁学名）及物理形态（液体提取液或干粉）',
        '首选溶剂载体（甘油、1,3-丙二醇、基础油等）及防腐剂限制要求',
        '目标提取比例（DER）或标志性活性成分含量指标',
        '测试样品量、批量采购规模及目标市场法规要求'
      ],
      faq: [
        ['能否定制以 1,3-丙二醇或无棕榈甘油为载体的植物提取物？', '可以。在 RFQ 评估阶段，我们会根据您的纯净美妆（Clean Beauty）或无水配方要求匹配相应的溶剂与防腐体系。'],
        ['是否提供完整的 INCI 组分百分比用于化妆品安全评估与备案？', '是的，合规批次均提供包含各组分 INCI 占比、CAS 号及防腐说明的 TDS、COA 与 SDS 文件。'],
        ['是否支持复合植物提取物（Multi-botanical blend）采购？', '针对达到商业起订量的 B2B 项目，可与合作提取工厂评估针对控油、舒缓或防脱功效的复合植物提取液。']
      ]
    },
    'other-essential-oils': {
      name: '其他天然精油（安纳托利亚与地中海植物群）',
      metaTitle: '牛至油、月桂叶油、迷迭香与地中海精油批量采购 | CTSEG',
      description: '从土耳其 B2B 采购牛至油、百里香油、月桂叶油、迷迭香油、鼠尾草油、薄荷油、桉树油及柑橘类精油，提供 GC-MS 验证。',
      eyebrow: 'CTSEG · 芳香植物与单方精油',
      botanicalName: 'Origanum, Thymus, Laurus nobilis, Rosmarinus, Salvia, Mentha & Citrus Oils',
      lead: '除玫瑰与薰衣草外，土耳其还是地中海及安纳托利亚芳香植物的重要原产地。CTSEG 协调牛至（香芹酚/百里香酚）、月桂叶（1,8-桉叶素）、迷迭香、鼠尾草、薄荷、杜松、苏合香及柑橘精油的 B2B 采购与化学型核验。',
      cardSummary: '经 GC-MS 确认化学型的牛至、百里香、月桂叶、迷迭香、鼠尾草、薄荷及柑橘类精油 B2B 大宗供应。',
      specs: [
        ['核心精油品类', '牛至油（Origanum）、百里香油、月桂叶油（Laurus nobilis）、迷迭香、鼠尾草、椒样薄荷、蓝桉、雪松及柑橘类精油'],
        ['化学型与标志物检测', '批次 GC-MS 检测确认香芹酚（Carvacrol）、百里香酚（Thymol）、1,8-桉叶素、薄荷醇、樟脑及柠檬烯比例'],
        ['大宗包装', '1 kg – 25 kg 铝瓶/UN 认证桶及 180 kg 钢桶'],
        ['出口与法规单证', '符合 GHS/CLP 的 SDS（含第 14 节危化品运输分类）、IFRA 证书、过敏原表及原产地证']
      ],
      applications: [
        '头皮净澈去屑洗发水、草本手工皂及个人洗护用品',
        '口腔护理配方（含薄荷、鼠尾草、百里香成分的漱口水与牙膏）',
        '运动舒缓按摩膏、芳疗扩香及呼吸舒缓复配油',
        '天然日化调香、功能性护肤及工业 B2B 用途'
      ],
      rfqChecklist: [
        '准确的植物拉丁学名、蒸馏部位及所需化学型（Chemotype）',
        '关键活性标志物最低含量（如牛至油香芹酚 >70% 或月桂油 1,8-桉叶素指标）',
        '采购数量、UN 认证包装要求及寄样确认流程',
        '目的港/机场及危险品（DG / UN）或普货运输要求'
      ],
      faq: [
        ['牛至油中的香芹酚或月桂叶油中的 1,8-桉叶素含量是否提供 GC-MS 证明？', '是的，每个报价批次均附带 GC-MS 气相色谱报告，买方可在确认产前样前核实标志物百分比。'],
        ['精油跨国运输中的危险品（DG）物流如何处理？', '部分精油因闪点或环境分类属于 UN 1169 / UN 3082。我们在 RFQ 初期即核查 SDS 第 14 节数据，安排合规的 UN 包装与空运、海运或陆运方案。'],
        ['能否在同一份询盘中组合采购多种安纳托利亚精油？', '可以，买方通常将玫瑰、薰衣草、牛至、月桂叶、迷迭香及基础油列入同一份 B2B 采购清单统一询价。']
      ]
    }
  },
  vi: {
    'rose-essential-oil': {
      name: 'Tìm nguồn cung Tinh dầu Hoa hồng (Rosa damascena) B2B',
      metaTitle: 'Cung ứng Tinh dầu Hoa hồng (Rosa damascena) Số lượng lớn B2B | CTSEG',
      description: 'Tìm nguồn hàng B2B quốc tế từ Türkiye cho tinh dầu hoa hồng Rosa damascena chưng cất hơi nước, kiểm định GC-MS, gửi mẫu và điều phối RFQ.',
      eyebrow: 'CTSEG · NGUỒN CUNG TINH DẦU B2B',
      botanicalName: 'INCI: Rosa Damascena Flower Oil · Chưng cất hơi nước (Otto of Rose)',
      lead: 'CTSEG điều phối nguồn cung B2B tinh dầu hoa hồng Rosa damascena Anatolia và các dẫn xuất hoa hồng cho các nhà điều hương, nhà sản xuất mỹ phẩm và nhà phân phối nguyên liệu — đối chiếu lô thu hoạch, hồ sơ sắc ký GC-MS, mẫu đối chứng và vận chuyển xuất khẩu.',
      cardSummary: 'Tinh dầu Rosa damascena chưng cất hơi nước và dẫn xuất hoa hồng cho nước hoa cao cấp, mỹ phẩm dưỡng da và nhà phân phối B2B.',
      specs: [
        ['Phương pháp & Cấp độ', 'Tinh dầu hoa hồng Rosa damascena chưng cất hơi nước (Otto of Rose) và tinh dầu tuyệt đối (Rose Absolute) theo yêu cầu'],
        ['Kiểm định Phân tích', 'Sắc ký đồ GC-MS theo từng lô (tỷ lệ citronellol, geraniol, nerol, stearoptene), COA và SDS'],
        ['Đóng gói Công nghiệp', 'Bình nhôm niêm phong và chai fluor hóa chuyên dụng (0,5 kg – 5 kg+) kèm thùng bảo vệ xuất khẩu'],
        ['Mẫu thử & MOQ', 'Cung cấp mẫu lô tham chiếu để phòng lab đánh giá trước khi đặt hàng sỉ; MOQ linh hoạt theo lô vụ mùa']
      ],
      applications: [
        'Nước hoa cao cấp (Fine Fragrance), nước hoa niche và hợp hương tự nhiên',
        'Dầu dưỡng da mặt chống lão hóa, kem dưỡng và serum phục hồi cao cấp',
        'Trị liệu hương thơm (Aromatherapy) chuyên nghiệp và sản phẩm spa',
        'Gia công mỹ phẩm (OEM/ODM) và các dòng mỹ phẩm thiên nhiên'
      ],
      rfqChecklist: [
        'Loại sản phẩm yêu cầu (tinh dầu hoa hồng chưng cất hơi nước hay rose absolute)',
        'Sản lượng mục tiêu (gam hoặc kilôgam) và kế hoạch mua hàng năm',
        'Hồ sơ pháp lý cần thiết (chứng nhận IFRA, bảng chất gây dị ứng, GC-MS, REACH)',
        'Sân bay/cảng đích, điều kiện Incoterm ưu tiên và phương thức vận chuyển'
      ],
      faq: [
        ['CTSEG có phải là nhà chưng cất hay đơn vị trữ hàng tinh dầu hoa hồng không?', 'Không. CTSEG hoạt động với tư cách là nhà thương mại và điều phối nguồn cung B2B độc lập tại Türkiye. Chúng tôi đánh giá các cơ sở chưng cất đủ năng lực theo tiêu chuẩn phân tích của người mua và điều phối mẫu, chứng từ cùng giao hàng xuất khẩu.'],
        ['Làm thế nào để xác minh độ tinh khiết của tinh dầu Rosa damascena?', 'Mỗi báo giá và mẫu thử đều đi kèm phân tích GC-MS của lô hàng, chỉ số lý-hóa trên COA (điểm đông đặc, chỉ số khúc xạ) và quy trình duyệt mẫu trước khi giao.'],
        ['Giá cả và tồn kho có được cam kết cố định trước không?', 'Do tinh dầu hoa hồng phụ thuộc vào sản lượng cánh hoa theo mùa vụ, mức giá và phân bổ sản lượng sẽ được xác nhận trực tiếp theo từng yêu cầu báo giá (RFQ).']
      ]
    },
    'lavender-essential-oil': {
      name: 'Tìm nguồn cung Tinh dầu Oải hương (Lavender Oil) B2B',
      metaTitle: 'Tinh dầu Oải hương Bán sỉ & Nguồn hàng B2B từ Türkiye | CTSEG',
      description: 'Tìm nguồn cung B2B tinh dầu Lavandula angustifolia và Lavandin từ Türkiye kèm phân tích GC-MS, mẫu thử và đóng gói phuy công nghiệp.',
      eyebrow: 'CTSEG · NGUỒN CUNG TINH DẦU B2B',
      botanicalName: 'INCI: Lavandula Angustifolia Oil / Lavandula Hybrida Oil',
      lead: 'Chúng tôi hỗ trợ các nhà sản xuất mỹ phẩm, thương hiệu chăm sóc cá nhân và đơn vị pha chế hương liệu tìm nguồn cung tinh dầu oải hương (Lavandula angustifolia và Lavandin) theo đúng thông số linalool/linalyl acetate, quy cách đóng thùng và chứng từ xuất khẩu.',
      cardSummary: 'Tinh dầu Lavandula angustifolia và lavandin số lượng lớn cho chăm sóc da, chăm sóc cá nhân, aromatherapy và hương liệu kỹ thuật.',
      specs: [
        ['Chủng loại Thực vật', 'Lavandula angustifolia (oải hương mịn) và Lavandula intermedia / hybrida (lavandin)'],
        ['Chất lượng & Sắc ký', 'Hồ sơ GC-MS theo lô xác nhận hàm lượng linalool, linalyl acetate và long não (camphor) cùng COA'],
        ['Quy cách Đóng gói Sỉ', 'Bình nhôm 1 kg – 25 kg và phuy thép tráng epoxy 180 kg'],
        ['Điều phối Thương mại', 'Đối chiếu lô sản xuất, gửi mẫu phòng lab và logistics xuất khẩu EXW / FOB / CIF / DAP']
      ],
      applications: [
        'Serum làm dịu da, nhũ tương, sữa dưỡng thể và mỹ phẩm chăm sóc da',
        'Dầu gội, sữa tắm, xà phòng lỏng và sản phẩm vệ sinh cá nhân thảo mộc',
        'Hỗn hợp tinh dầu khuếch tán, xịt thơm phòng/gối ngủ và dầu massage',
        'Sản phẩm chăm sóc nhà cửa tự nhiên, nước giặt và tạo hương không gian'
      ],
      rfqChecklist: [
        'Loài thực vật yêu cầu (Lavandula angustifolia hay Lavandin)',
        'Ngưỡng ester/linalool/camphor mục tiêu hoặc tiêu chuẩn ISO/Dược điển',
        'Khối lượng đặt hàng, kích cỡ bao bì và yêu cầu đánh giá mẫu',
        'Quốc gia đích và bộ chứng từ tuân thủ (SDS, IFRA, danh mục dị ứng)'
      ],
      faq: [
        ['CTSEG hỗ trợ chọn giữa Lavandula angustifolia và Lavandin như thế nào?', 'Lavandula angustifolia có hương dịu ngọt, hàm lượng camphor thấp phù hợp cho mỹ phẩm lưu trên da (leave-on), trong khi Lavandin có độ tỏa hương mạnh và tối ưu chi phí cho xà phòng và chăm sóc nhà cửa. Chúng tôi khớp đúng loại theo công thức của bạn.'],
        ['Có thể đặt mua số lượng theo phuy cho sản xuất công nghiệp không?', 'Có. Tùy theo sản lượng mùa vụ và yêu cầu kỹ thuật, chúng tôi điều phối cả bình nhôm 5–25 kg lẫn phuy 180 kg.'],
        ['Lô hàng giao sỉ có khớp với mẫu đã duyệt không?', 'Có, mẫu trước khi giao đại diện cho đúng lô sản xuất được chỉ định hoặc khung thông số GC-MS đã thỏa thuận.']
      ]
    },
    'rose-water-hydrosol': {
      name: 'Nước Hoa hồng & Hydrosol Hoa hồng B2B',
      metaTitle: 'Nước Hoa hồng & Hydrosol Rosa Damascena Bán sỉ B2B | CTSEG',
      description: 'Cung ứng B2B số lượng lớn nước cất hoa hồng Rosa damascena (hydrosol chưng cất hơi nước) đóng can, phuy 200L và bồn IBC 1.000L từ Türkiye.',
      eyebrow: 'CTSEG · HYDROSOL & NƯỚC HOA TỰ NHIÊN',
      botanicalName: 'INCI: Rosa Damascena Flower Water · Dịch chưng cất hơi nước',
      lead: 'CTSEG điều phối nguồn cung sỉ hydrosol hoa hồng Rosa damascena chưng cất hơi nước nguyên chất cho các nhà máy mỹ phẩm và đơn vị gia công — kiểm tra hàm lượng tinh dầu hòa tan, chỉ tiêu vi sinh, hệ chất bảo quản và vận chuyển bằng phuy hoặc bồn IBC.',
      cardSummary: 'Nước hoa hồng Rosa damascena chưng cất hơi nước tự nhiên đóng phuy và bồn IBC cho toner, xịt khoáng và nhũ tương mỹ phẩm.',
      specs: [
        ['Cấp độ Dịch chưng cất', '100% nước cất hoa hồng Rosa damascena từ chưng cất hơi nước (không phải nước pha hương liệu tổng hợp)'],
        ['Thông số Kỹ thuật', 'Độ pH kiểm soát, tỷ lệ tinh dầu hòa tan tự nhiên, COA vi sinh (TAMC/TYMC) và tùy chọn có/không chất bảo quản'],
        ['Đóng gói Công nghiệp', 'Can HDPE 20 L – 30 L, phuy tiêu chuẩn mỹ phẩm 200 L và bồn IBC 1.000 L'],
        ['Hồ sơ Chứng từ', 'COA theo lô, phiếu kiểm nghiệm vi sinh, SDS, bảng thành phần INCI và chứng từ xuất khẩu']
      ],
      applications: [
        'Nước cân bằng da (toner), xịt khoáng cấp ẩm (face mist) và nước tẩy trang micellar',
        'Pha nước thực vật thay thế nước khử khoáng trong kem dưỡng, serum và lotion',
        'Dung dịch mặt nạ giấy (sheet mask), khăn ướt và dung dịch làm sạch dịu nhẹ',
        'Tonic làm dịu da đầu, xịt dưỡng tóc và xịt thơm toàn thân'
      ],
      rfqChecklist: [
        'Yêu cầu bảo quản (không chất bảo quản lọc vi sinh hoặc có hệ bảo quản mỹ phẩm)',
        'Hàm lượng tinh dầu còn lại mục tiêu và cường độ hương thơm',
        'Sản lượng mỗi chuyến, quy cách bao bì (can, phuy 200L hay bồn IBC) và tần suất',
        'Cảng/kho nhận hàng và yêu cầu hồ sơ nhập khẩu/công bố mỹ phẩm'
      ],
      faq: [
        ['Sự khác biệt giữa hydrosol hoa hồng thật và nước hoa hồng tái tạo là gì?', 'Hydrosol hoa hồng thật là dịch nước thơm thu trực tiếp từ quá trình chưng cất hơi nước cánh hoa Rosa damascena tươi. Chúng tôi định rõ tiêu chuẩn dịch chưng cất tự nhiên theo yêu cầu kỹ thuật của người mua.'],
        ['Có thể vận chuyển quốc tế bằng phuy 200 L hoặc bồn IBC 1.000 L không?', 'Có. Đối với các nhà máy sản xuất mỹ phẩm, chúng tôi điều phối hàng đóng pallet phuy HDPE và bồn IBC qua đường bộ hoặc đường biển.'],
        ['Độ ổn định vi sinh trong vận chuyển số lượng lớn được quản lý ra sao?', 'Người mua có thể yêu cầu lô hàng lọc vi sinh đóng kín không chất bảo quản hoặc sử dụng hệ chất bảo quản phù hợp quy định thị trường đích.']
      ]
    },
    'lavender-water-hydrosol': {
      name: 'Nước Oải hương & Hydrosol Oải hương B2B',
      metaTitle: 'Hydrosol Oải hương & Nước Hoa Oải hương Bán sỉ B2B | CTSEG',
      description: 'Tìm nguồn cung B2B nước cất hoa oải hương (Lavandula hydrosol) chưng cất hơi nước từ Türkiye cho sản xuất mỹ phẩm chăm sóc da và tóc.',
      eyebrow: 'CTSEG · HYDROSOL & NƯỚC HOA TỰ NHIÊN',
      botanicalName: 'INCI: Lavandula Angustifolia Flower Water / Lavandula Hybrida Flower Water',
      lead: 'Chúng tôi điều phối cung ứng số lượng lớn nước hoa oải hương chưng cất hơi nước cho các phòng lab và nhà máy mỹ phẩm — rà soát nguồn gốc thực vật, độ tinh khiết vi sinh, độ ổn định pH và bao bì công nghiệp từ can 20L đến bồn IBC 1.000L.',
      cardSummary: 'Hydrosol oải hương chưng cất hơi nước cho toner kiềm dầu, mỹ phẩm làm dịu da, chăm sóc em bé và pha nước thảo mộc.',
      specs: [
        ['Phương pháp Sản xuất', 'Dịch cất thực vật nguyên chất thu được khi chưng cất hơi nước ngọn hoa oải hương'],
        ['Kiểm soát Chất lượng', 'Kiểm tra độ pH, độ trong, cấu trúc hương tự nhiên và COA vi sinh theo lô'],
        ['Bao bì Số lượng lớn', 'Can HDPE 20 L / 25 L, phuy 200 L và bồn IBC 1.000 L'],
        ['Tài liệu Kỹ thuật', 'COA, TDS, SDS/MSDS, công bố chất gây dị ứng và chứng từ hải quan xuất khẩu']
      ],
      applications: [
        'Toner thu nhỏ lỗ chân lông và cân bằng bã nhờn cho da dầu/hỗn hợp',
        'Xịt làm mát sau nắng (after-sun), gel làm dịu và chăm sóc da nhạy cảm',
        'Pha nước dịu nhẹ cho dòng sản phẩm chăm sóc em bé (baby care)',
        'Lotion dưỡng da đầu, dầu gội thảo dược và xịt thơm vải/gối'
      ],
      rfqChecklist: [
        'Nguồn thực vật ưu tiên (hydrosol Lavandula angustifolia hay Lavandin)',
        'Quy chuẩn chất bảo quản và giới hạn vi sinh yêu cầu',
        'Quy cách đóng gói (can HDPE, phuy hay IBC) và tổng sản lượng',
        'Địa chỉ nhận mẫu thử và điều kiện giao hàng Incoterm'
      ],
      faq: [
        ['Hydrosol oải hương được ứng dụng như thế nào trong sản xuất mỹ phẩm?', 'Các nhà bào chế thường dùng hydrosol oải hương thay thế từ 10% đến 100% pha nước trong toner, gel, nhũ tương và sữa rửa mặt để tạo hương thảo mộc tự nhiên và làm dịu da.'],
        ['Làm sao đảm bảo tính đồng nhất giữa các lô hàng?', 'Mỗi yêu cầu được ghép với các lô chưng cất có đầy đủ chỉ số COA (pH, cảm quan, vi sinh) cùng mẫu duyệt trước khi xuất hàng.'],
        ['Số lượng đặt hàng tối thiểu (MOQ) là bao nhiêu?', 'MOQ phụ thuộc vào loại bao bì (can, phuy 200L hoặc IBC 1.000L) và hệ bảo quản, sẽ được xác nhận khi đánh giá RFQ.']
      ]
    },
    'botanical-carrier-oils': {
      name: 'Dầu Nền Thực vật (Botanical Carrier Oils) B2B',
      metaTitle: 'Dầu Nền Thực vật Ép lạnh & Tinh luyện Bán sỉ B2B | CTSEG',
      description: 'Cung ứng B2B các loại dầu nền thực vật ép lạnh và tinh luyện (hạnh nhân ngọt, jojoba, tầm xuân, hạt nho, hạt mơ, hạt lựu) cho sản xuất mỹ phẩm.',
      eyebrow: 'CTSEG · DẦU NỀN & DẦU DẪN THỰC VẬT',
      botanicalName: 'Dầu Thực vật Ép lạnh (Cold-Pressed Virgin) & Tinh luyện Cấp Mỹ phẩm',
      lead: 'CTSEG điều phối mua sắm B2B các loại dầu nền thực vật ép lạnh và tinh luyện cho phòng thí nghiệm mỹ phẩm, thương hiệu dưỡng da và nhà phân phối nguyên liệu — kiểm tra cấu trúc axit béo (FAME), chỉ số peroxide, chỉ số axit và bao bì xuất khẩu.',
      cardSummary: 'Dầu nền ép lạnh và tinh luyện — hạnh nhân ngọt, hạt mơ, hạt nho, tầm xuân (rosehip), hạt lựu và jojoba — cho công thức B2B.',
      specs: [
        ['Danh mục Dầu Chủ lực', 'Dầu hạnh nhân ngọt, hạt mơ, hạt nho, nụ tầm xuân, hạt lựu, jojoba, argan, hạt thìa là đen, mè và hạt phỉ'],
        ['Cấp độ Chế biến', 'Ép lạnh nguyên chất (virgin) và tinh luyện/khử mùi cấp mỹ phẩm (refined/deodorized)'],
        ['Chỉ tiêu Phân tích', 'Thành phần axit béo qua GC (FAME), axit béo tự do, chỉ số peroxide, chỉ số iốt và chiết suất (COA)'],
        ['Đóng gói Bán sỉ', 'Can/thùng 20 kg – 25 kg, phuy 190 kg và bồn IBC']
      ],
      applications: [
        'Serum dầu dưỡng da mặt, kem phục hồi hàng rào lipid và sáp dưỡng không chứa nước',
        'Dầu dưỡng tóc, huyết thanh phục hồi ngọn tóc và dưỡng da đầu',
        'Dầu dẫn pha loãng tinh dầu nguyên chất và dầu massage trị liệu chuyên nghiệp',
        'Sản phẩm chống nắng, son dưỡng môi, dầu tẩy trang và xà phòng thiên nhiên'
      ],
      rfqChecklist: [
        'Loại dầu thực vật yêu cầu kèm tên INCI và mã CAS',
        'Cấp độ chế biến (ép lạnh virgin hay tinh luyện/khử mùi)',
        'Giới hạn tối đa của chỉ số peroxide/axit và cấu trúc axit béo mục tiêu',
        'Sản lượng đặt hàng, quy cách thùng chứa và điều kiện giao hàng'
      ],
      faq: [
        ['Nên chọn dầu nền ép lạnh hay tinh luyện cho công thức mỹ phẩm?', 'Dầu ép lạnh giữ nguyên tocopherol và phytosterol tự nhiên cho các dòng serum hoạt tính, trong khi dầu tinh luyện có màu/mùi trung tính và độ bền oxy hóa cao cho nhũ tương sản xuất lớn. Chúng tôi đáp ứng cả hai tùy theo yêu cầu R&D của bạn.'],
        ['Có thể ghép nhiều loại dầu nền và tinh dầu trong cùng một lô hàng không?', 'Có. CTSEG hỗ trợ gom đơn hàng B2B đa danh mục gồm dầu nền, tinh dầu và hydrosol trong một chuyến xuất khẩu.'],
        ['Độ ổn định oxy hóa được kiểm soát như thế nào?', 'Trước khi giao hàng, chúng tôi kiểm tra ngày sản xuất, chỉ số peroxide và chỉ số axit trên COA của từng lô.']
      ]
    },
    'botanical-extracts': {
      name: 'Chiết xuất Thực vật & Nguyên liệu Hoạt chất Mỹ phẩm B2B',
      metaTitle: 'Chiết xuất Thực vật (Botanical Extracts) Bán sỉ B2B | CTSEG',
      description: 'Tìm nguồn cung B2B chiết xuất thực vật hệ nước/glycerin, propanediol, tan trong dầu và dạng bột cho sản xuất chăm sóc da, tóc và dược mỹ phẩm.',
      eyebrow: 'CTSEG · CHIẾT XUẤT THỰC VẬT & HOẠT CHẤT',
      botanicalName: 'Chiết xuất Hydroglyceric, Propanediol, Ngâm dầu (Macerate) & Chiết xuất Khô',
      lead: 'Chúng tôi hỗ trợ các thương hiệu dược mỹ phẩm, nhà máy OEM/ODM và phòng lab R&D tìm nguồn cung chiết xuất thực vật dạng lỏng và bột — khớp hệ dung môi dẫn, tỷ lệ chiết (DER), hệ chất bảo quản và hồ sơ kỹ thuật quốc tế.',
      cardSummary: 'Chiết xuất glycerin tan trong nước, chiết xuất propanediol, dầu ngâm thảo mộc và bột chiết xuất chuẩn hóa cho ngành mỹ phẩm.',
      specs: [
        ['Dung môi & Dạng thức', 'Nước/glycerin (hydroglyceric), 1,3-propanediol, propylene/butylene glycol, chiết xuất tan trong dầu và bột sấy phun'],
        ['Danh mục Thực vật', 'Rau má (Centella), cúc La Mã, cúc xu xi (calendula), trà xanh, cam thảo, hoa hồng, oải hương, hương thảo, thường xuân, dẻ ngựa & thảo mộc Anatolia'],
        ['Hồ sơ Kỹ thuật', 'TDS, COA theo lô, SDS, bảng phân tách phần trăm INCI, thông tin chất bảo quản và tỷ lệ sử dụng khuyến nghị'],
        ['Đóng gói B2B', 'Can mỹ phẩm 1 kg, 5 kg, 10 kg, 25 kg hoặc thùng lót túi nhôm cho chiết xuất dạng bột']
      ],
      applications: [
        'Serum và ống tinh chất (ampoule) làm sáng, làm dịu và chống oxy hóa da mặt',
        'Tonic ngăn ngừa rụng tóc, dầu gội và dầu xả thảo dược',
        'Gel dưỡng vùng mắt, tinh chất mặt nạ giấy và lotion dược mỹ phẩm',
        'Kem dưỡng săn chắc cơ thể, dưỡng sau cạo râu và sữa rửa mặt dịu nhẹ'
      ],
      rfqChecklist: [
        'Loài thực vật (tên khoa học Latinh) và trạng thái vật lý (lỏng hoặc bột khô)',
        'Hệ dung môi ưu tiên (glycerin, propanediol, dầu nền) và yêu cầu hạn chế chất bảo quản',
        'Tỷ lệ chiết (DER) hoặc chỉ tiêu hoạt chất mục tiêu',
        'Lượng mẫu thử, quy mô đơn hàng sỉ và quy định pháp lý tại thị trường đích'
      ],
      faq: [
        ['Có thể yêu cầu chiết xuất dùng dung môi propanediol hoặc glycerin không nguồn gốc dầu cọ không?', 'Có. Trong quá trình đánh giá RFQ, chúng tôi điều chỉnh hệ dung môi và chất bảo quản phù hợp với tiêu chuẩn mỹ phẩm sạch (clean beauty) hoặc công thức không chứa nước của bạn.'],
        ['CTSEG có cung cấp bảng phân tách phần trăm INCI để làm hồ sơ công bố mỹ phẩm không?', 'Có, mọi lô hàng đủ tiêu chuẩn đều đi kèm TDS, COA, SDS và chi tiết tỷ lệ INCI phục vụ đánh giá an toàn (CPSR) và đăng ký lưu hành.'],
        ['Có thể đặt hàng phức hợp chiết xuất đa thảo mộc không?', 'Với sản lượng thương mại B2B phù hợp, các tổ hợp chiết xuất đa thực vật chuyên biệt cho da hoặc tóc có thể được đánh giá cùng nhà máy chiết xuất đối tác.']
      ]
    },
    'other-essential-oils': {
      name: 'Các loại Tinh dầu Khác (Hệ thực vật Anatolia & Địa Trung Hải)',
      metaTitle: 'Tinh dầu Kinh giới cay (Oregano), Nguyệt quế, Hương thảo B2B | CTSEG',
      description: 'Cung ứng B2B từ Türkiye các loại tinh dầu oregano, cỏ xạ hương (thyme), lá nguyệt quế, hương thảo, xô thơm, bạc hà, khuynh diệp và cam chanh kèm GC-MS.',
      eyebrow: 'CTSEG · TINH DẦU THƠM & THẢO DƯỢC',
      botanicalName: 'Origanum, Thymus, Laurus nobilis, Rosmarinus, Salvia, Mentha & Citrus Oils',
      lead: 'Bên cạnh hoa hồng và oải hương, Türkiye là vùng nguyên liệu trọng điểm của các loài thực vật thơm Địa Trung Hải và Anatolia. CTSEG điều phối nguồn cung B2B tinh dầu kinh giới cay (oregano), xạ hương (thyme), lá nguyệt quế, hương thảo, xô thơm, bạc hà và cam chanh với chemotype được xác minh.',
      cardSummary: 'Tinh dầu oregano, cỏ xạ hương, lá nguyệt quế, hương thảo, xô thơm, bạc hà và cam chanh kiểm định GC-MS cho khách hàng B2B.',
      specs: [
        ['Danh mục Tinh dầu Chính', 'Tinh dầu kinh giới cay (Origanum), cỏ xạ hương (Thymus), lá nguyệt quế (Laurus nobilis), hương thảo, xô thơm, bạc hà, khuynh diệp, tuyết tùng & cam chanh'],
        ['Kiểm định Chemotype', 'Phân tích GC-MS từng lô xác nhận các hoạt chất chỉ điểm như carvacrol, thymol, 1,8-cineole, menthol, camphor và limonene'],
        ['Đóng gói Bán sỉ', 'Bình nhôm và can đạt chuẩn UN 1 kg – 25 kg cùng phuy thép 180 kg'],
        ['Chứng từ Xuất khẩu', 'SDS chuẩn GHS/CLP (gồm Mục 14 phân loại vận chuyển), chứng nhận IFRA, bảng chất gây dị ứng & chứng nhận xuất xứ']
      ],
      applications: [
        'Dầu gội làm sạch da đầu, xà phòng thảo dược và chăm sóc cá nhân',
        'Sản phẩm chăm sóc răng miệng (nước súc miệng, kem đánh răng chứa bạc hà, xô thơm, xạ hương)',
        'Gel massage thể thao, dầu xoa bóp và hỗn hợp tinh dầu xông mũi họng',
        'Pha chế hương liệu tự nhiên, mỹ phẩm chức năng và ứng dụng B2B kỹ thuật'
      ],
      rfqChecklist: [
        'Tên khoa học Latinh chính xác, bộ phận chưng cất và chemotype yêu cầu',
        'Hàm lượng hoạt chất tối thiểu (ví dụ: carvacrol >70% trong dầu oregano hoặc 1,8-cineole trong dầu nguyệt quế)',
        'Khối lượng đặt hàng, bao bì chuẩn UN và nhu cầu duyệt mẫu',
        'Cảng/sân bay đích và yêu cầu vận chuyển hàng nguy hiểm (DG) nếu áp dụng'
      ],
      faq: [
        ['Hàm lượng carvacrol trong dầu oregano hay 1,8-cineole trong dầu nguyệt quế có được xác nhận bằng GC-MS không?', 'Có, mỗi lô chào bán đều được kiểm tra qua sắc ký GC-MS để người mua xác minh tỷ lệ hoạt chất chính xác trước khi duyệt mẫu.'],
        ['Quy định vận chuyển Hàng Nguy hiểm (DG) đối với tinh dầu được xử lý thế nào?', 'Chúng tôi rà soát Mục 14 trên SDS (mã UN và điểm chớp cháy) ngay từ bước RFQ để bố trí bao bì chuẩn UN và phương thức vận tải hàng không, đường biển hoặc đường bộ phù hợp.'],
        ['Chúng tôi có thể gộp nhiều loại tinh dầu trong một yêu cầu báo giá (RFQ) không?', 'Có, người mua thường gửi danh mục tổng hợp gồm nhiều loại tinh dầu, hydrosol và dầu nền để thu mua tập trung.']
      ]
    }
  },
  uk: {
    'rose-essential-oil': {
      name: 'Ефірна олія троянди (Rosa damascena) — B2B постачання',
      metaTitle: 'Оптові поставки ефірної олії дамаської троянди B2B | CTSEG',
      description: 'Міжнародне B2B-постачання пародистиляційної ефірної олії Rosa damascena з Туреччини з перевіркою GC-MS, зразками та супроводом RFQ.',
      eyebrow: 'CTSEG · ЕФІРНІ ОЛІЇ ОПТОМ',
      botanicalName: 'INCI: Rosa Damascena Flower Oil · Парова дистиляція',
      lead: 'CTSEG координує B2B-закупівлі анатолійської ефірної олії дамаської троянди та трояндових похідних для парфумерних домів, виробників косметики й дистриб’юторів сировини — узгоджуючи партії врожаю, профілі GC-MS, контрольні зразки та експортну логістику.',
      cardSummary: 'Пародистиляційна ефірна олія Rosa damascena та похідні троянди для високої парфумерії, преміального догляду за шкірою та B2B-дистриб’юторів.',
      specs: [
        ['Метод та ґатунок', 'Ефірна олія Rosa damascena водно-парової дистиляції (Otto of Rose) та абсолют троянди за специфікацією'],
        ['Аналітичний контроль', 'Партійна хроматограма GC-MS (цитронелол, гераніол, нерол, стеароптени), COA та SDS'],
        ['Промислова тара', 'Опломбовані алюмінієві фляги та фторовані ємності (0,5 кг – 5 кг+) у захисному експортному пакуванні'],
        ['Зразки та MOQ', 'Еталонні зразки партії для лабораторного тестування до основного замовлення; гнучка оцінка MOQ']
      ],
      applications: [
        'Висока та нішева парфумерія, натуральні парфумерні акорди',
        'Преміальні антивікові олії, креми та сироватки для обличчя',
        'Професійна ароматерапія та спа-косметика',
        'Контрактне виробництво (Private Label) та активні ботанічні лінії'
      ],
      rfqChecklist: [
        'Потрібний тип продукту (дистиляційна трояндова олія або абсолют троянди)',
        'Цільовий обсяг (грами або кілограми) та річний графік закупівель',
        'Пакет нормативної документації (сертифікат IFRA, алергени ЄС, GC-MS, REACH)',
        'Аеропорт/пункт призначення, бажаний базис Incoterms та умови доставки'
      ],
      faq: [
        ['Чи є CTSEG виробником або утримувачем складу трояндової олії?', 'Ні. CTSEG працює як незалежний B2B торговий і сорсинговий дім у Туреччині. Ми підбираємо перевірені дистиляційні підприємства під вашу аналітичну специфікацію та координуємо зразки, документацію й відвантаження.'],
        ['Як підтверджується автентичність олії Rosa damascena?', 'Кожна комерційна пропозиція супроводжується партійним аналізом GC-MS, фізико-хімічними показниками COA (точка замерзання, показник заломлення) та погодженням передвідвантажувального зразка.'],
        ['Чи гарантуються ціни та наявність заздалегідь?', 'Оскільки вихід трояндової олії залежить від сезонного збору пелюсток, актуальна ціна та резервування обсягу підтверджуються за конкретним запитом (RFQ).']
      ]
    },
    'lavender-essential-oil': {
      name: 'Ефірна олія лаванди — B2B постачання',
      metaTitle: 'Ефірна олія лаванди оптом з Туреччини | CTSEG',
      description: 'B2B-постачання ефірної олії Lavandula angustifolia та лавандину з Туреччини з хроматограмами GC-MS, зразками та промисловою фасовкою.',
      eyebrow: 'CTSEG · ЕФІРНІ ОЛІЇ ОПТОМ',
      botanicalName: 'INCI: Lavandula Angustifolia Oil / Lavandula Hybrida Oil',
      lead: 'Ми допомагаємо виробникам косметики, засобів особистої гігієни та парфумерним лабораторіям закуповувати ефірну олію лаванди (Lavandula angustifolia та лавандин) із заданим профілем ліналоолу й ліналілацетату, організовуючи зразки, фасування в бочки та експорт.',
      cardSummary: 'Ефірні олії Lavandula angustifolia та лавандину оптом для догляду за шкірою, особистої гігієни, ароматерапії та парфумерних композицій.',
      specs: [
        ['Ботанічні види', 'Lavandula angustifolia (вузьколиста лаванда) та Lavandula intermedia / hybrida (лавандин)'],
        ['Якість та хроматографія', 'Партійний профіль GC-MS із підтвердженням рівня ліналоолу, ліналілацетату й камфори + COA'],
        ['Оптова фасовка', 'Алюмінієві каністри 1 кг – 25 кг та сталеві бочки з епоксидним покриттям по 180 кг'],
        ['Комерційна координація', 'Підбір партії, лабораторні зразки та експортна логістика EXW / FOB / CIF / DAP']
      ],
      applications: [
        'Заспокійливі сироватки, емульсії, лосьйони для тіла та дермокосметика',
        'Шампуні, гелі для душу, рідке мило та засоби гігієни',
        'Ароматерапевтичні суміші, спреї для сну та масажні олії',
        'Натуральна побутова хімія, засоби для прання та ароматизації приміщень'
      ],
      rfqChecklist: [
        'Ботанічний вид (Lavandula angustifolia або лавандин)',
        'Цільовий діапазон ефірів/ліналоолу/камфори або стандарт ISO/Фармакопеї',
        'Обсяг партії, тип тари та потреба в тестуванні зразка',
        'Країна призначення та необхідні сертифікати (SDS, IFRA, перелік алергенів)'
      ],
      faq: [
        ['Як обрати між Lavandula angustifolia та лавандином під час закупівлі?', 'Lavandula angustifolia має м’який профіль із низьким вмістом камфори для незмивної косметики, тоді як лавандин дає яскравішу камфорну ноту й економічну ефективність для мила та побутових засобів. Ми підбираємо ґатунок під вашу рецептуру.'],
        ['Чи можливе постачання в бочках для великого виробництва?', 'Так, залежно від сезонної наявності та специфікації ми координуємо як каністри по 5–25 кг, так і бочки по 180 кг.'],
        ['Чи відповідає промислова партія затвердженому зразку?', 'Так, контрольні зразки відбираються з пропонованої партії або погодженого діапазону специфікації GC-MS.']
      ]
    },
    'rose-water-hydrosol': {
      name: 'Трояндова вода та гідролат троянди — B2B постачання',
      metaTitle: 'Трояндова вода та гідролат Rosa damascena оптом B2B | CTSEG',
      description: 'Оптові B2B-поставки пародистиляційного гідролату дамаської троянди в каністрах, бочках 200 л та IBC-кубах 1000 л з Туреччини.',
      eyebrow: 'CTSEG · ГІДРОЛАТИ ТА КВІТКОВІ ВОДИ',
      botanicalName: 'INCI: Rosa Damascena Flower Water · Паровий дистилят',
      lead: 'CTSEG координує оптові поставки натурального парового гідролату Rosa damascena для косметичних фабрик і контрактних виробництв — перевіряючи залишковий вміст ефірної олії, мікробіологію, систему консервації та логістику в бочках або IBC.',
      cardSummary: 'Натуральна квіткова вода Rosa damascena парової дистиляції в бочках та IBC-контейнерах для тоніків, містів і емульсій.',
      specs: [
        ['Якість дистиляту', '100% паровий дистилят пелюсток Rosa damascena (без додавання синтетичних ароматизаторів)'],
        ['Технічні параметри', 'Контрольований pH, масова частка розчиненої ефірної олії, мікробіологічний COA (TAMC/TYMC), з консервантом або без'],
        ['Промислова тара', 'HDPE-каністри 20–30 л, косметичні бочки 200 л та кубові ємності IBC 1000 л'],
        ['Пакет документів', 'Партійний COA, протокол мікробіології, SDS, склад INCI та експортні сертифікати']
      ],
      applications: [
        'Тоніки для обличчя, зволожувальні спреї (face mist) та міцелярна вода',
        'Заміна водної фази в кремах, сироватках і косметичних емульсіях',
        'Просочення для тканинних масок (sheet masks), вологих серветок і лосьйонів',
        'Заспокійливі тоніки для шкіри голови та спреї для тіла'
      ],
      rfqChecklist: [
        'Статус консервації (стерильно фільтрований без консервантів або з дозволеним консервантом)',
        'Бажаний залишковий вміст ефірної олії та органолептичний профіль',
        'Обсяг відвантаження, формат тари (каністра, бочка або IBC) та регулярність поставок',
        'Пункт доставки та митно-регуляторні вимоги країни імпорту'
      ],
      faq: [
        ['Чим натуральний гідролат троянди відрізняється від ароматизованої трояндової води?', 'Натуральний гідролат — це водний дистилят, отриманий безпосередньо під час парової перегонки свіжих пелюсток Rosa damascena, а не деіонізована вода з розчиненим ароматизатором. Ми специфікуємо справжній гідролат під ваш технічний запит.'],
        ['Чи можливе відвантаження в бочках по 200 л або IBC-кубах по 1000 л?', 'Так, для промислових виробників ми організовуємо палетовані поставки в бочках та IBC-контейнерах авто- або морським транспортом.'],
        ['Як забезпечується мікробіологічна стабільність під час транспортування?', 'За запитом технологів постачаються партії, що пройшли мікрофільтрацію в герметичній тарі, або стабілізовані косметичними консервантами, дозволеними на цільовому ринку.']
      ]
    },
    'lavender-water-hydrosol': {
      name: 'Лавандова вода та гідролат лаванди — B2B постачання',
      metaTitle: 'Гідролат лаванди та лавандова вода оптом B2B | CTSEG',
      description: 'B2B-постачання пародистиляційної лавандової води (гідролату лаванди) з Туреччини для виробництва засобів догляду за шкірою, волоссям і натуральної косметики.',
      eyebrow: 'CTSEG · ГІДРОЛАТИ ТА КВІТКОВІ ВОДИ',
      botanicalName: 'INCI: Lavandula Angustifolia Flower Water / Lavandula Hybrida Flower Water',
      lead: 'Ми координуємо оптові поставки парового гідролату лаванди для косметичних лабораторій та заводів — перевіряючи ботанічне походження, мікробіологічну чистоту, стабільність pH і промислову фасовку від каністр до IBC-контейнерів.',
      cardSummary: 'Паровий гідролат лаванди для очищувальних тоніків, заспокійливої косметики, дитячих ліній та рослинних водних фаз.',
      specs: [
        ['Спосіб отримання', 'Чистий водний дистилят парової перегонки квітучих суцвіть лаванди'],
        ['Контроль якості', 'Перевірка pH, прозорості, профілю летких компонентів та мікробіологічний COA партії'],
        ['Оптова фасовка', 'HDPE-каністри 20 / 25 л, бочки 200 л та контейнери IBC 1000 л'],
        ['Документація', 'COA, TDS, паспорт безпеки SDS/MSDS, декларація алергенів та експортні документи']
      ],
      applications: [
        'Очищувальні та себорегулювальні тоніки й спреї для обличчя',
        'Охолоджувальні спреї та гелі після засмаги (after-sun)',
        'М’яка водна основа для дитячої косметики та чутливої шкіри',
        'Лосьйони для шкіри голови, трав’яні шампуні та спреї для текстилю'
      ],
      rfqChecklist: [
        'Бажаний ботанічний вид (гідролат Lavandula angustifolia або лавандину)',
        'Вимоги до системи консервації та мікробіологічних лімітів',
        'Формат тари (каністра HDPE, бочка або IBC) та загальний обсяг замовлення',
        'Адреса для відправки зразків та базис поставки Incoterms'
      ],
      faq: [
        ['Як гідролат лаванди застосовується у промисловому виробництві косметики?', 'Технологи використовують гідролат лаванди в концентрації від 10% до 100% водної фази в тоніках, гелях та емульсіях для надання натурального аромату й заспокійливих властивостей.'],
        ['Як контролюється стабільність характеристик від партії до партії?', 'Кожен запит зіставляється з партіями дистиляції, що мають повний COA (pH, органолептика, мікробіологія), із наданням передвідвантажувальних зразків.'],
        ['Який мінімальний обсяг замовлення (MOQ)?', 'MOQ залежить від обраного типу тари (каністри, бочки 200 л або IBC 1000 л) та уточнюється під час розрахунку RFQ.']
      ]
    },
    'botanical-carrier-oils': {
      name: 'Базові рослинні олії (Carrier Oils) — B2B постачання',
      metaTitle: 'Базові рослинні та косметичні олії оптом B2B | CTSEG',
      description: 'Оптові B2B-поставки базових олій холодного віджиму та рафінованих (солодкий мигдаль, жожоба, шипшина, виноградна й абрикосова кісточка, гранат).',
      eyebrow: 'CTSEG · БАЗОВІ ТА ТРАНСПОРТНІ ОЛІЇ',
      botanicalName: 'Нерафіновані олії холодного віджиму (Virgin) та рафіновані косметичні олії',
      lead: 'CTSEG координує B2B-закупівлі базових рослинних олій холодного віджиму та рафінованих ґатунків для косметичних виробництв і дистриб’юторів сировини — перевіряючи жирнокислотний профіль (FAME), пероксидне й кислотне числа та експортну фасовку.',
      cardSummary: 'Олії холодного віджиму та рафіновані базові олії — мигдальна, абрикосова, виноградної кісточки, шипшини, граната й жожоба.',
      specs: [
        ['Основний асортимент', 'Олії солодкого мигдалю, абрикосової кісточки, виноградної кісточки, шипшини, гранатової кісточки, жожоба, аргани, чорного кмину, кунжуту та фундука'],
        ['Ступінь очищення', 'Нерафіновані олії першого холодного віджиму (virgin) та рафіновані/дезодоровані косметичні ґатунки'],
        ['Лабораторні показники', 'Жирнокислотний склад за ГХ (FAME), кислотне число, пероксидне число, йодне число та показник заломлення (COA)'],
        ['Оптова тара', 'Каністри 20–25 кг, бочки 190 кг та IBC-контейнери']
      ],
      applications: [
        'Олійні сироватки для обличчя, живильні креми та безводні бальзами',
        'Олії для догляду за волоссям, засоби для кінчиків і шкіри голови',
        'Транспортні бази для розведення ефірних олій та масажні суміші',
        'Сонцезахисна косметика, бальзами для губ, гідрофільні олії та миловаріння'
      ],
      rfqChecklist: [
        'Потрібні рослинні олії із зазначенням INCI та номера CAS',
        'Тип обробки (холодний віджим virgin або рафінована/дезодорована)',
        'Граничні значення пероксидного/кислотного числа та цільовий жирнокислотний склад',
        'Обсяг закупівлі, розмір тари та умови доставки'
      ],
      faq: [
        ['Що обрати для рецептури: олії холодного віджиму чи рафіновані?', 'Олії холодного віджиму зберігають природні токофероли та фітостероли для активних сироваток, а рафіновані олії забезпечують нейтральний колір/запах і високу стабільність до окислення в емульсіях. Ми постачаємо обидва варіанти за вашим ТЗ.'],
        ['Чи можна об’єднати кілька базових та ефірних олій в одне відвантаження?', 'Так, CTSEG консолідує різні базові олії, ефірні олії та гідролати в єдину експортну поставку.'],
        ['Як контролюється свіжість та окислювальна стабільність?', 'Перед відвантаженням ми перевіряємо дату вироблення, пероксидне та кислотне числа за сертифікатом аналізу (COA) конкретної партії.']
      ]
    },
    'botanical-extracts': {
      name: 'Рослинні екстракти та активна косметична сировина B2B',
      metaTitle: 'Рослинні екстракти та косметичні активи оптом B2B | CTSEG',
      description: 'B2B-постачання водно-гліцеринових, пропандіолових, жиророзчинних та сухих рослинних екстрактів для виробників косметики й дермокосметики.',
      eyebrow: 'CTSEG · РОСЛИННІ ЕКСТРАКТИ ТА АКТИВИ',
      botanicalName: 'Водно-гліцеринові, пропандіолові, олійні мацерати та сухі екстракти',
      lead: 'Ми допомагаємо брендам дермокосметики, контрактним виробництвам і R&D-лабораторіям закуповувати рідкі та сухі рослинні екстракти — підбираючи розчинник-носій, співвідношення сировина/екстракт (DER), систему консервації та технічне досьє.',
      cardSummary: 'Водорозчинні гліцерити, екстракти в пропандіолі, олійні мацерати та стандартизовані сухі екстракти для косметичної промисловості.',
      specs: [
        ['Носії та форми', 'Вода/гліцерин, 1,3-пропандіол, пропілен-/бутиленгліколь, олійні мацерати та сухі порошкові екстракти'],
        ['Ботанічний спектр', 'Центелла, ромашка, календула, зелений чай, солодка, троянда, лаванда, розмарин, плющ, кінський каштан, звіробій та флора Анатолії'],
        ['Технічне досьє', 'TDS, партійний COA, SDS, повна відсоткова розшифровка INCI, дані про консерванти та рекомендований відсоток вводу'],
        ['Фасовка B2B', 'Косметичні каністри по 1 кг, 5 кг, 10 кг і 25 кг або герметичні барабани для сухих екстрактів']
      ],
      applications: [
        'Освітлювальні, заспокійливі та антиоксидантні сироватки й ампули для обличчя',
        'Тоніки проти випадіння волосся та фіто-шампуні',
        'Гелі для контуру очей, есенції для масок та дермокосметичні лосьйони',
        'Зміцнювальні засоби для тіла, бальзами після гоління та м’які гелі для вмивання'
      ],
      rfqChecklist: [
        'Вид рослини (латинська назва) та фізична форма (рідина або порошок)',
        'Бажаний розчинник (гліцерин, пропандіол, базова олія) та вимоги до консервантів',
        'Цільове співвідношення DER або стандартизація за активною речовиною',
        'Обсяг зразка, розмір промислової партії та регуляторні вимоги ринку'
      ],
      faq: [
        ['Чи можна замовити екстракти на основі пропандіолу або гліцерину без пальмової сировини?', 'Так, під час опрацювання RFQ ми підбираємо систему розчинника й консервації під ваші стандарти натуральної косметики або безводних рецептур.'],
        ['Чи надається повна розшифровка INCI для оцінки безпеки косметики?', 'Так, кожна партія супроводжується TDS, COA, SDS та відсотковим складом INCI для регуляторного досьє.'],
        ['Чи можливе постачання комплексних купажів із кількох екстрактів?', 'За комерційних B2B-обсягів можливе узгодження багатокомпонентних фітокомплексів для догляду за волоссям або шкірою.']
      ]
    },
    'other-essential-oils': {
      name: 'Інші ефірні олії (флора Анатолії та Середземномор’я)',
      metaTitle: 'Ефірні олії орегано, лавра, розмарину та цитрусових оптом | CTSEG',
      description: 'B2B-постачання ефірних олій орегано (материнки), чебрецю, благородного лавра, розмарину, шавлії, м’яти, евкаліпта та цитрусових з Туреччини з аналізом GC-MS.',
      eyebrow: 'CTSEG · АРОМАТИЧНІ ТА ЕФІРНІ ОЛІЇ',
      botanicalName: 'Origanum, Thymus, Laurus nobilis, Rosmarinus, Salvia, Mentha & Citrus Oils',
      lead: 'Крім троянди та лаванди, Туреччина є ключовим регіоном походження середземноморських та анатолійських ефіроолійних культур. CTSEG координує оптові поставки олій орегано, чебрецю, лаврового листа, розмарину, шавлії, м’яти та цитрусових із підтвердженим хемотипом.',
      cardSummary: 'Перевірені за GC-MS ефірні олії орегано, чебрецю, лавра, розмарину, шавлії, м’яти та цитрусових для B2B-замовників.',
      specs: [
        ['Основні позиції', 'Олія орегано (Origanum), чебрецю, лаврового листа (Laurus nobilis), розмарину, шавлії, перцевої м’яти, евкаліпта, кедра та цитрусових'],
        ['Контроль хемотипу', 'Партійний аналіз GC-MS для підтвердження частки карвакролу, тимолу, 1,8-цинеолу, ментолу, камфори та лімонену'],
        ['Оптова тара', 'Алюмінієві фляги та сертифіковані UN-каністри 1–25 кг, сталеві бочки 180 кг'],
        ['Експорт і документи', 'SDS за стандартом GHS/CLP (включно з розділом 14 щодо транспортування), сертифікат IFRA, декларація алергенів і сертифікат походження']
      ],
      applications: [
        'Очищувальні шампуні для шкіри голови, натуральне мило та засоби гігієни',
        'Засоби для ротової порожнини (ополіскувачі та пасти з м’ятою, шавлією, чебрецем)',
        'Спортивні розігрівальні гелі, масажні бальзами та інгаляційні суміші',
        'Натуральні парфумерні композиції, функціональна косметика та технічні B2B-завдання'
      ],
      rfqChecklist: [
        'Точна латинська назва рослини, дистильована частина та потрібний хемотип',
        'Мінімальний вміст маркерного компонента (наприклад, карвакрол >70% або рівень 1,8-цинеолу)',
        'Обсяг замовлення, вимоги до UN-пакування та необхідність зразка',
        'Пункт призначення та умови перевезення небезпечних/ненебезпечних вантажів (DG)'
      ],
      faq: [
        ['Чи підтверджується вміст карвакролу в олії орегано або 1,8-цинеолу в олії лавра за допомогою GC-MS?', 'Так, щодо кожної пропонованої партії надається хроматограма GC-MS, щоб покупець міг перевірити відсотковий вміст активних маркерів до затвердження зразка.'],
        ['Як організовується міжнародна доставка ефірних олій, що належать до небезпечних вантажів (DG)?', 'На етапі RFQ ми перевіряємо розділ 14 паспорта безпеки SDS (UN-номер і температуру спалаху) та підбираємо сертифіковану тару для авіа-, морського або автоперевезення.'],
        ['Чи можна включити кілька ефірних олій в одну заявку RFQ?', 'Так, закупівельники регулярно надсилають збірні специфікації, що об’єднують кілька видів ефірних олій, гідролатів і базових олій.']
      ]
    }
  },
  ro: {
    'rose-essential-oil': {
      name: 'Ulei Esențial de Trandafir (Rosa damascena) Sourcing B2B',
      metaTitle: 'Ulei Esențial de Trandafir (Rosa damascena) En-Gros B2B | CTSEG',
      description: 'Sourcing B2B internațional din Türkiye pentru ulei esențial de Rosa damascena distilat cu abur, verificare GC-MS, mostre și coordonare RFQ.',
      eyebrow: 'CTSEG · SOURCING ULEIURI ESENȚIALE',
      botanicalName: 'INCI: Rosa Damascena Flower Oil · Distilare cu abur (Otto of Rose)',
      lead: 'CTSEG coordonează aprovizionarea B2B cu ulei esențial de Rosa damascena din Anatolia și derivate din trandafir pentru case de parfumerie, producători cosmetici și distribuitori de materii prime — aliniind loturile de recoltă, profilurile GC-MS, mostrele de referință și logistica de export.',
      cardSummary: 'Ulei esențial de Rosa damascena distilat cu abur și derivate din trandafir pentru parfumerie fină, îngrijirea pielii și distribuitori B2B.',
      specs: [
        ['Extracție & Grad', 'Ulei esențial de Rosa damascena distilat cu apă/abur (Otto of Rose) și opțiuni de absolut de trandafir pe bază de specificație'],
        ['Verificare Analitică', 'Cromatogramă GC-MS specifică lotului (citronelol, geraniol, nerol, stearoptene), COA și SDS'],
        ['Ambalare Industrială', 'Flacoane sigilate din aluminiu sau fluorurate (0,5 kg – 5 kg+) cu ambalaj protector pentru export'],
        ['Mostre & MOQ', 'Mostre din lotul de referință pentru aprobare în laborator; MOQ evaluat în funcție de lotul de recoltă']
      ],
      applications: [
        'Parfumerie fină, parfumuri de nișă și acorduri olfactive naturale',
        'Uleiuri faciale anti-aging, creme de prestigiu și seruri reparatorii',
        'Aromaterapie profesională și formulări spa de lux',
        'Producție cosmeticăซ contract (Private Label) și linii botanice active'
      ],
      rfqChecklist: [
        'Gradul solicitat (ulei de trandafir distilat cu abur sau absolut de trandafir)',
        'Volumul țintă (grame sau kilograme) și calendarul anual de achiziții',
        'Documentația de reglementare necesară (certificat IFRA, alergeni UE, GC-MS, REACH)',
        'Aeroportul/portul de destinație, Incoterm preferat și regimul de transport'
      ],
      faq: [
        ['Este CTSEG producător sau deținător de stoc pentru uleiul de trandafir?', 'Nu. CTSEG operează ca o casă independentă de comerț și sourcing B2B în Türkiye. Evaluăm distilerii calificate conform specificației dvs. analitice și coordonăm mostrele, documentele și livrarea la export.'],
        ['Cum se verifică autenticitatea uleiului de Rosa damascena?', 'Fiecare ofertă este susținută de analiza GC-MS a lotului, parametrii fizico-chimici din COA (punct de îngheț, indice de refracție) și aprobarea mostrei înainte de expediere.'],
        ['Sunt prețurile și stocurile garantate în avans?', 'Deoarece uleiul de trandafir depinde de randamentul sezonier al petalelor, disponibilitatea și prețurile sunt confirmate individual pentru fiecare cerere RFQ activă.']
      ]
    },
    'lavender-essential-oil': {
      name: 'Ulei Esențial de Lavandă Sourcing B2B',
      metaTitle: 'Ulei Esențial de Lavandă En-Gros din Türkiye | CTSEG',
      description: 'Aprovizionare B2B cu ulei esențial de Lavandula angustifolia și lavandin din Türkiye, cu analiză GC-MS, mostre și ambalare în butoaie.',
      eyebrow: 'CTSEG · SOURCING ULEIURI ESENȚIALE',
      botanicalName: 'INCI: Lavandula Angustifolia Oil / Lavandula Hybrida Oil',
      lead: 'Sprijinim producătorii de cosmetice, mărcile de îngrijire personală și formulatorii de parfumuri în achiziția B2B de ulei esențial de Lavandula angustifolia și lavandin — corelând profilul de linalool/acetat de linalil, ambalarea industrială și documentele de export.',
      cardSummary: 'Uleiuri esențiale de Lavandula angustifolia și lavandin în volum en-gros pentru skincare, îngrijire personală, aromaterapie și parfumerie tehnică.',
      specs: [
        ['Varietăți Botanice', 'Lavandula angustifolia (lavandă fină) și Lavandula intermedia / hybrida (lavandin)'],
        ['Calitate & Cromatografie', 'Profil GC-MS pe lot pentru verificarea nivelului de linalool, acetat de linalil și camfor + COA'],
        ['Ambalaje En-Gros', 'Bidoane din aluminiu de 1 kg – 25 kg și butoaie din oțel căptușite cu epoxi de 180 kg'],
        ['Coordonare Comercială', 'Selectarea lotului, mostre de laborator și logistică de export EXW / FOB / CIF / DAP']
      ],
      applications: [
        'Seruri faciale calmante, emulsii, loțiuni de corp și produse dermato-cosmetice',
        'Șampoane, geluri de duș, săpunuri lichide și igienă personală botanică',
        'Amestecuri pentru difuzoare, spray-uri de relaxare și uleiuri de masaj',
        'Produse naturale pentru îngrijirea locuinței, detergenți și parfumare ambientală'
      ],
      rfqChecklist: [
        'Specia botanică solicitată (Lavandula angustifolia sau Lavandin)',
        'Toleranțele țintă pentru esteri/linalool/camfor sau standardul ISO/Farmacopee',
        'Cantitatea comenzii, dimensiunea ambalajului și cerința de eșantionare',
        'Țara de destinație și documentele de conformitate (SDS, IFRA, lista de alergeni)'
      ],
      faq: [
        ['Cum ajutați cumpărătorii să aleagă între Lavandula angustifolia și Lavandin?', 'Lavandula angustifolia oferă un profil mai dulce, cu conținut redus de camfor pentru cosmetice leave-on, în timp ce Lavandinul oferă o putere olfactivă ridicată și eficiență a costurilor pentru săpunuri și home care. Potrivim calitatea exactă cu formula dvs.'],
        ['Putem comanda cantități la butoi pentru producția industrială?', 'Da, în funcție de disponibilitatea sezonieră coordonăm atât recipiente din aluminiu de 5–25 kg, cât și butoaie de 180 kg.'],
        ['Lotul livrat corespunde mostrei aprobate?', 'Da, mostrele pre-expediere reprezintă lotul de producție nominalizat sau fereastra de specificație GC-MS agreată.']
      ]
    },
    'rose-water-hydrosol': {
      name: 'Apă de Trandafiri & Hidrolat de Trandafir Sourcing B2B',
      metaTitle: 'Apă de Trandafiri & Hidrolat Rosa Damascena En-Gros B2B | CTSEG',
      description: 'Aprovizionare B2B en-gros cu hidrolat de Rosa damascena distilat cu abur în canistre, butoaie de 200 L și containere IBC de 1.000 L din Türkiye.',
      eyebrow: 'CTSEG · HIDROLAȚI & APE FLORALE',
      botanicalName: 'INCI: Rosa Damascena Flower Water · Distilat cu abur',
      lead: 'CTSEG coordonează furnizarea en-gros de hidrolat autentic de Rosa damascena distilat cu abur pentru fabrici de cosmetice și producători private label — evaluând conținutul rezidual de ulei esențial, puritatea microbiologică, sistemul de conservare și logistica în butoaie sau IBC.',
      cardSummary: 'Apă florală autentică de Rosa damascena distilată cu abur, livrată în butoaie și containere IBC pentru tonere, spray-uri faciale și emulsii.',
      specs: [
        ['Gradul Distilatului', '100% apă florală de Rosa damascena distilată cu abur (fără parfumuri sintetice reconstituite)'],
        ['Parametri Tehnici', 'Interval pH controlat, fracție de ulei de trandafir dizolvat, COA microbiologic (TAMC/TYMC) și opțiuni cu/fără conservanți'],
        ['Ambalare Industrială', 'Canistre HDPE de 20 L – 30 L, butoaie cosmetice de 200 L și containere IBC de 1.000 L'],
        ['Dosar de Conformitate', 'COA pe lot, raport de testare microbiologică, SDS, defalcare INCI și certificate de export']
      ],
      applications: [
        'Loțiuni tonice faciale, spray-uri hidratante (face mist) și ape micelare',
        'Înlocuitor botanic pentru faza apoasă în creme, seruri și emulsii',
        'Soluții pentru măști șervețel (sheet masks), șervețele umede și demachiante blânde',
        'Tonice calmante pentru scalp, spray-uri pentru păr și îngrijire corporală'
      ],
      rfqChecklist: [
        'Statutul conservării (fără conservanți, filtrat steril vs. conservat cosmetic)',
        'Procentul țintă de ulei esențial rezidual și intensitatea olfactivă',
        'Volumul pe livrare, formatul ambalajului (canistră, butoi sau IBC) și frecvența',
        'Portul/depozitul de destinație și cerințele vamale/de reglementare'
      ],
      faq: [
        ['Care este diferența dintre hidrolatul autentic de trandafir și apa de trandafiri reconstituită?', 'Hidrolatul autentic este distilatul apos colectat direct în timpul distilării cu abur a petalelor proaspete de Rosa damascena, nu apă deionizată amestecată cu parfum solubilizat. Specificăm hidrolați autentici conform cerințelor dvs. tehnice.'],
        ['Se poate expedia internațional în butoaie de 200 L sau containere IBC de 1.000 L?', 'Da. Pentru producătorii industriali coordonăm butoaie HDPE paletizate și containere IBC prin transport rutier sau maritim.'],
        ['Cum este gestionată stabilitatea microbiologică în timpul transportului vrac?', 'Cumpărătorii pot solicita fie loturi microfiltrate fără conservanți în recipiente sigilate, fie sisteme de conservare aprobate pentru piața lor țintă.']
      ]
    },
    'lavender-water-hydrosol': {
      name: 'Apă de Lavandă & Hidrolat de Lavandă Sourcing B2B',
      metaTitle: 'Hidrolat de Lavandă & Apă Florală En-Gros B2B | CTSEG',
      description: 'Sourcing B2B din Türkiye pentru apă florală de lavandă distilată cu abur (hidrolat de Lavandula) destinată producției de skincare și cosmetice naturale.',
      eyebrow: 'CTSEG · HIDROLAȚI & APE FLORALE',
      botanicalName: 'INCI: Lavandula Angustifolia Flower Water / Lavandula Hybrida Flower Water',
      lead: 'Coordonăm aprovizionarea en-gros cu apă florală de lavandă distilată cu abur pentru laboratoare cosmetice și producători de îngrijire personală — verificând originea botanică, puritatea microbiologică, stabilitatea pH-ului și ambalajele vrac de la canistre la IBC de 1.000 L.',
      cardSummary: 'Hidrolat de lavandă distilat cu abur pentru tonere purificatoare, îngrijire calmantă a pielii, produse baby care și faze apoase botanice.',
      specs: [
        ['Metoda de Producție', 'Distilat floral apos pur captat în timpul distilării cu abur a inflorescențelor de lavandă'],
        ['Controlul Calității', 'Verificare pH pe lot, claritate, profil volatil natural și COA microbiologic'],
        ['Ambalare Vrac', 'Canistre HDPE de 20 L / 25 L, butoaie de 200 L și containere IBC de 1.000 L'],
        ['Documentație', 'COA, TDS, SDS/MSDS, declarație de alergeni și documente vamale de export']
      ],
      applications: [
        'Tonere faciale pentru minimizarea porilor și echilibrarea sebumului',
        'Spray-uri răcoritoare după plajă (after-sun) și geluri calmante',
        'Fază apoasă delicată pentru produse de îngrijire a bebelușilor și piele sensibilă',
        'Loțiuni purificatoare pentru scalp, șampoane botanice și spray-uri pentru lenjerie'
      ],
      rfqChecklist: [
        'Preferința privind sursa botanică (distilat de Lavandula angustifolia vs. Lavandin)',
        'Specificația conservantului și limitele microbiologice solicitate',
        'Formatul de ambalare (canistră HDPE, butoi sau IBC) și volumul total',
        'Detaliile pentru livrarea mostrelor și Incoterm-ul preferat'
      ],
      faq: [
        ['Cum se utilizează hidrolatul de lavandă în producția industrială de cosmetice?', 'Formulatorii utilizează hidrolatul de lavandă în proporție de 10% până la 100% din faza apoasă în tonere, geluri, loțiuni și produse de curățare pentru aromă naturală și efect calmant.'],
        ['Cum asigurați consistența de la un lot la altul?', 'Fiecare cerere este corelată cu loturi de distilare ce dețin COA complet (pH, parametri organoleptici și microbiologici), cu eșantionare înainte de livrare.'],
        ['Care este cantitatea minimă de comandă (MOQ)?', 'MOQ depinde de formatul de ambalare selectat (canistre, butoaie de 200 L sau IBC de 1.000 L) și este confirmat în timpul evaluării RFQ.']
      ]
    },
    'botanical-carrier-oils': {
      name: 'Uleiuri Vegetale Purtătoare (Carrier Oils) Sourcing B2B',
      metaTitle: 'Uleiuri Vegetale Purtătoare și Uleiuri Bază Cosmetice En-Gros | CTSEG',
      description: 'Aprovizionare B2B cu uleiuri vegetale purtătoare presate la rece și rafinate (migdale dulci, jojoba, măceșe, sâmburi de struguri, caise, rodie).',
      eyebrow: 'CTSEG · ULEIURI FIXE & PURTĂTOARE',
      botanicalName: 'Uleiuri Cosmetice Fixe Presate la Rece (Virgin) & Rafinate',
      lead: 'CTSEG coordonează achiziția B2B de uleiuri vegetale purtătoare presate la rece și rafinate pentru laboratoare cosmetice, branduri de skincare și distribuitori de materii prime — verificând profilul acizilor grași (FAME), indicele de peroxid, aciditatea și ambalarea de export.',
      cardSummary: 'Uleiuri fixe presate la rece și rafinate — migdale dulci, sâmburi de caise, sâmburi de struguri, măceșe, rodie și jojoba — pentru formulări B2B.',
      specs: [
        ['Portofoliu Principal', 'Ulei de migdale dulci, sâmburi de caise, sâmburi de struguri, măceșe (rosehip), semințe de rodie, jojoba, argan, chimen negru, susan și alune'],
        ['Grade de Procesare', 'Presate la rece nerafinate (virgin) și grade cosmetice rafinate/winterizate/dezodorizate'],
        ['Teste Analitice', 'Compoziția acizilor grași prin GC (FAME), acizi grași liberi, indice de peroxid, indice de iod și indice de refracție (COA)'],
        ['Ambalare Vrac', 'Bidoane HDPE/metal de 20 kg – 25 kg, butoaie de 190 kg și containere IBC']
      ],
      applications: [
        'Seruri faciale uleioase, creme reparatorii de barieră lipidică și balsamuri anhidre',
        'Uleiuri hrănitoare pentru păr, tratamente pentru vârfuri și scalp',
        'Baze purtătoare pentru diluarea uleiurilor esențiale și uleiuri de masaj profesional',
        'Formulări de protecție solară, balsamuri de buze, uleiuri demachiante și baze de săpun'
      ],
      rfqChecklist: [
        'Uleiul/uleiurile botanice solicitate, denumirea INCI și numărul CAS',
        'Gradul de procesare (presat la rece virgin vs. rafinat/dezodorizat)',
        'Limitele maxime pentru indicele de peroxid/aciditate și profilul acizilor grași',
        'Volumul comenzii, dimensiunea recipientului și condițiile de livrare'
      ],
      faq: [
        ['Ar trebui să specificăm uleiuri presate la rece sau rafinate pentru formula noastră?', 'Uleiurile presate la rece păstrează tocoferolii și fitosterolii naturali pentru seruri active, în timp ce gradele rafinate oferă culoare/miros neutru și stabilitate oxidativă extinsă pentru emulsii. Furnizăm ambele opțiuni conform cerințelor dvs. R&D.'],
        ['Pot fi consolidate mai multe uleiuri purtătoare și uleiuri esențiale într-un singur transport?', 'Da. CTSEG coordonează achiziții B2B multi-produs, permițând gruparea uleiurilor purtătoare, uleiurilor esențiale și hidrolaților într-o singură expediție de export.'],
        ['Cum este protejată stabilitatea oxidativă înainte de livrare?', 'Verificăm datele recente de producție, indicele de peroxid și aciditatea pe COA-ul lotului și coordonăm ambalarea în recipiente opace adecvate.']
      ]
    },
    'botanical-extracts': {
      name: 'Extracte Botanice & Materii Prime Cosmetice Active B2B',
      metaTitle: 'Extracte Botanice & Ingrediente Cosmetice Active En-Gros B2B | CTSEG',
      description: 'Sourcing B2B de extracte botanice hidroglicerice, glicolice, liposolubile și pudră pentru producătorii de skincare, haircare și dermatocosmetice.',
      eyebrow: 'CTSEG · EXTRACTE BOTANICE & ACTIVI',
      botanicalName: 'Extracte Hidroglicerice, în Propandiol, Macerate Uleioase & Extracte Uscate',
      lead: 'Ajutăm mărcile dermatocosmetice, producătorii pe contract și laboratoarele de formulare să se aprovizioneze cu extracte botanice lichide și sub formă de pulbere — aliniind solvenții purtători, raportul plantă/extract (DER), conservanții și dosarele tehnice.',
      cardSummary: 'Glicerite hidrosolubile, extracte în propandiol, macerate uleioase și extracte botanice uscate standardizate pentru industria cosmetică.',
      specs: [
        ['Opțiuni Purtător & Format', 'Apă/glicerină (hidrogliceric), 1,3-propandiol, propilen/butilen glicol, macerate liposolubile și pulberi uscate prin pulverizare'],
        ['Gama Botanică', 'Centella, mușețel, gălbenele (calendula), ceai verde, lemn-dulce, trandafir, lavandă, rozmarin, iederă, castan sălbatic, sunătoare & plante anatoliene'],
        ['Dosar Tehnic', 'TDS, COA pe lot, SDS, defalcare completă în procente INCI, sistemul de conservare și dozajul recomandat'],
        ['Ambalare Industrială', 'Recipiente cosmetice de 1 kg, 5 kg, 10 kg și 25 kg sau butoaie cu sac barieră pentru pulberi']
      ],
      applications: [
        'Seruri faciale și fiole iluminatoare, calmante și antioxidante',
        'Tonice de scalp împotriva căderii părului, șampoane și balsamuri botanice',
        'Geluri contur ochi, esențe pentru măști șervețel și emulsii dermatocosmetice',
        'Loțiuni de corp, balsamuri after-shave calmante și produse de curățare blânde'
      ],
      rfqChecklist: [
        'Specia botanică (denumirea științifică Latină) și forma fizică (lichid sau extract uscat)',
        'Solventul purtător preferat (glicerină, propandiol, ulei vegetal) și restricțiile privind conservanții',
        'Raportul plantă-extract (DER) țintă sau specificația markerului activ',
        'Cantitatea de mostră, volumul comenzii vrac și cadrul de reglementare al pieței țintă'
      ],
      faq: [
        ['Putem solicita solvenți purtători specifici, cum ar fi propandiolul sau glicerina fără ulei de palmier?', 'Da. În timpul evaluării RFQ, aliniem sistemul purtător și profilul de conservare cu cerințele formulei dvs. (cum ar fi clean-beauty sau sisteme anhidre).'],
        ['Furnizați defalcări complete INCI pentru evaluările de siguranță cosmetică (CPSR)?', 'Da. Loturile calificate sunt însoțite de TDS, COA, SDS și defalcări procentuale INCI necesare evaluatorilor de siguranță.'],
        ['Pot fi furnizate complexe personalizate din mai multe plante?', 'Pentru volume comerciale B2B, amestecurile de extracte multi-botanice adaptate pentru îngrijirea părului sau a pielii pot fi evaluate împreună cu fabricile partenere.']
      ]
    },
    'other-essential-oils': {
      name: 'Alte Uleiuri Esențiale (Flora Anatoliană & Mediteraneană)',
      metaTitle: 'Uleiuri Esențiale de Oregano, Dafin, Rozmarin En-Gros B2B | CTSEG',
      description: 'Sourcing B2B din Türkiye pentru uleiuri esențiale de oregano, cimbru, foi de dafin, rozmarin, salvie, mentă, eucalipt și citrice cu verificare GC-MS.',
      eyebrow: 'CTSEG · ULEIURI AROMATICE & ESENȚIALE',
      botanicalName: 'Origanum, Thymus, Laurus nobilis, Rosmarinus, Salvia, Mentha & Citrus Oils',
      lead: 'Dincolo de trandafir și lavandă, Türkiye este o origine primară pentru plantele aromatice mediteraneene și anatoliene. CTSEG coordonează aprovizionarea B2B cu uleiuri esențiale de oregano, cimbru, dafin, rozmarin, salvie, mentă, ienupăr, liquidambar și citrice cu chemotip verificat.',
      cardSummary: 'Uleiuri esențiale de oregano, cimbru, foi de dafin, rozmarin, salvie, mentă și citrice verificate GC-MS pentru aplicații B2B.',
      specs: [
        ['Uleiuri Esențiale Cheie', 'Oregano (Origanum vulgare/onites), cimbru, foi de dafin (Laurus nobilis), rozmarin, salvie, mentă, eucalipt, lemn de cedru & uleiuri de citrice'],
        ['Control Chemotip & Markeri', 'GC-MS pe lot care confirmă markeri cheie precum carvacrol, timol, 1,8-cineol (eucaliptol), mentol, camfor și d-limonen'],
        ['Ambalare Vrac', 'Flacoane din aluminiu/bidoane omologate UN de 1 kg – 25 kg și butoaie din oțel de 180 kg'],
        ['Export & Reglementare', 'SDS conform GHS/CLP (inclusiv Secțiunea 14 clasificarea transportului), certificat IFRA, declarație alergeni & documente de origine']
      ],
      applications: [
        'Șampoane purificatoare pentru scalp, săpunuri din plante și îngrijire personală',
        'Formulări pentru îngrijirea orală (ape de gură, paste de dinți cu mentă, salvie, cimbru)',
        'Geluri de recuperare sportivă, balsamuri de masaj și amestecuri pentru inhalații',
        'Compuși de parfumare naturală, cosmetice funcționale și aplicații tehnice B2B'
      ],
      rfqChecklist: [
        'Denumirea botanică Latină exactă, partea plantei distilată și chemotipul solicitat',
        'Pragul minim al markerului activ (de ex., 70%+ carvacrol în uleiul de oregano sau 1,8-cineol în uleiul de dafin)',
        'Volumul țintă, preferința pentru ambalaj omologat UN și cerințele de eșantionare',
        'Portul/aeroportul de destinație și coordonarea transportului ADR/mărfuri periculoase (DG)'
      ],
      faq: [
        ['Cum verificați conținutul de markeri activi precum carvacrolul în uleiul de oregano sau 1,8-cineolul în uleiul de dafin?', 'Fiecare lot ofertat este evaluat prin cromatografie GC-MS, astfel încât cumpărătorii să poată verifica procentele exacte înainte de a aproba mostrele pre-expediere.'],
        ['Cum sunt gestionate regulile de transport pentru Mărfuri Periculoase (DG) la uleiurile esențiale?', 'Verificăm Secțiunea 14 din SDS încă din faza de RFQ pentru a organiza ambalaje omologate UN și transport aerian, rutier sau maritim conform.'],
        ['Putem combina mai multe uleiuri esențiale anatoliene într-un singur RFQ?', 'Da. Cumpărătorii trimit frecvent cereri RFQ consolidate care acoperă uleiuri de trandafir, lavandă, oregano, dafin, rozmarin și uleiuri purtătoare.']
      ]
    }
  },
  bg: {
    'rose-essential-oil': {
      name: 'Етерично розово масло (Rosa damascena) — B2B снабдяване',
      metaTitle: 'Розово масло (Rosa damascena) на едро и B2B доставки | CTSEG',
      description: 'Международно B2B снабдяване от Türkiye за парно дестилирано етерично масло от Rosa damascena с GC-MS анализ, мостри и RFQ координация.',
      eyebrow: 'CTSEG · ЕТЕРИЧНИ МАСЛА B2B',
      botanicalName: 'INCI: Rosa Damascena Flower Oil · Парна дестилация',
      lead: 'CTSEG координира B2B доставките на етерично масло от Rosa damascena и розови деривати за парфюмерийни къщи, козметични производители и дистрибутори на суровини — съгласувайки партиди от реколтата, GC-MS профили, референтни мостри и експортна логистика.',
      cardSummary: 'Парно дестилирано етерично масло от Rosa damascena и розови продукти за висша парфюмерия, премиум грижа за кожата и B2B дистрибутори.',
      specs: [
        ['Метод и клас', 'Водно-парно дестилирано розово масло (Otto of Rose) и розов абсолют по спецификация на купувача'],
        ['Аналитична проверка', 'Партидна GC-MS хроматограма (цитронелол, гераниол, нерол, стеароптени), COA и SDS'],
        ['Индустриална опаковка', 'Запечатани алуминиеви кумкуми и флуорирани съдове (0,5 кг – 5 кг+) със защитна експортна опаковка'],
        ['Мостри и MOQ', 'Референтни мостри от партидата за лабораторно одобрение преди основна поръчка; гъвкава оценка на MOQ']
      ],
      applications: [
        'Фина и нишова парфюмерия, натурални парфюмерийни композиции',
        'Анти-ейдж масла за лице, кремове и възстановяващи серуми от висок клас',
        'Професионална ароматерапия и спа формулации',
        'Контрактно производство (Private Label) и активни ботанически серии'
      ],
      rfqChecklist: [
        'Изискван клас (парно дестилирано розово масло или розов абсолют)',
        'Целево количество (грамове или килограми) и годишен план за доставки',
        'Регулаторни документи (IFRA сертификат, алергени за ЕС, GC-MS, REACH)',
        'Летище/пристанище на местоназначение, предпочитан Incoterm и транспорт'
      ],
      faq: [
        ['CTSEG производител или държател на склад за розово масло ли е?', 'Не. CTSEG работи като независима B2B търговска и сорсинг къща в Türkiye. Ние проучваме квалифицирани дестилерии спрямо вашата аналитична спецификация и координираме мострите, документите и износа.'],
        ['Как се потвърждава автентичността на маслото от Rosa damascena?', 'Всяка оферта се подкрепя от партиден GC-MS анализ, физико-химични параметри в COA (точка на замръзване, индекс на пречупване) и одобрение на мостра преди експедиция.'],
        ['Гарантират ли се цени и наличности предварително?', 'Тъй като добивът на розово масло зависи от сезонната реколта, наличностите и цените се потвърждават по конкретно активно запитване (RFQ).']
      ]
    },
    'lavender-essential-oil': {
      name: 'Етерично лавандулово масло — B2B снабдяване',
      metaTitle: 'Етерично лавандулово масло на едро от Türkiye | CTSEG',
      description: 'B2B доставки на етерично масло от Lavandula angustifolia и лавандин от Türkiye с GC-MS профили, мостри и индустриални разфасовки.',
      eyebrow: 'CTSEG · ЕТЕРИЧНИ МАСЛА B2B',
      botanicalName: 'INCI: Lavandula Angustifolia Oil / Lavandula Hybrida Oil',
      lead: 'Подкрепяме козметични производители, марки за лична грижа и парфюмерийни лаборатории при B2B снабдяването с масло от Lavandula angustifolia и лавандин — съобразявайки профила на линалоол/линалилацетат, опаковките във варели и износа.',
      cardSummary: 'Етерични масла от Lavandula angustifolia и лавандин на едро за грижа за кожата, лична хигиена, ароматерапия и технически аромати.',
      specs: [
        ['Ботанически видове', 'Lavandula angustifolia (фина лавандула) и Lavandula intermedia / hybrida (лавандин)'],
        ['Качество и хроматография', 'Партиден GC-MS профил за линалоол, линалилацетат и камфор + COA'],
        ['Опаковки на едро', 'Алуминиеви бидони 1 кг – 25 кг и стоманени варели с епоксидно покритие 180 кг'],
        ['Търговска координация', 'Избор на партида, лабораторни мостри и експортна логистика EXW / FOB / CIF / DAP']
      ],
      applications: [
        'Успокояващи серуми за лице, емулсии, лосиони за тяло и дермокозметика',
        'Шампоани, душ гелове, течни сапуни и ботаническа лична хигиена',
        'Ароматерапевтични блендове, спрейове за сън и масажни масла',
        'Натурални продукти за дома, перилни препарати и ароматизиране на помещения'
      ],
      rfqChecklist: [
        'Ботанически вид (Lavandula angustifolia или лавандин)',
        'Целеви граници за естери/линалоол/камфор или ISO/Фармакопеен стандарт',
        'Количество на поръчката, размер на опаковката и нужда от мостра',
        'Държава на доставка и необходими сертификати (SDS, IFRA, списък с алергени)'
      ],
      faq: [
        ['Как помагате при избора между Lavandula angustifolia и лавандин?', 'Lavandula angustifolia предлага по-мек профил с нисък камфор за козметика без отмиване, докато лавандинът дава силен аромат и рентабилност за сапуни и битова химия. Съпоставяме точния клас с вашата формула.'],
        ['Може ли да се поръчат количества във варели за индустриално производство?', 'Да, според сезонната наличност координираме както алуминиеви съдове от 5–25 кг, така и варели от 180 кг.'],
        ['Отговаря ли доставената партида на одобрената мостра?', 'Да, предварителните мостри представляват номинираната производствена партида или договорения GC-MS диапазон.']
      ]
    },
    'rose-water-hydrosol': {
      name: 'Розова вода и розов хидролат — B2B снабдяване',
      metaTitle: 'Розова вода и хидролат от Rosa Damascena на едро B2B | CTSEG',
      description: 'B2B доставки на едро на парно дестилирана флорална вода от Rosa damascena в туби, 200 L варели и 1000 L IBC контейнери от Türkiye.',
      eyebrow: 'CTSEG · ХИДРОЛАТИ И ФЛОРАЛНИ ВОДИ',
      botanicalName: 'INCI: Rosa Damascena Flower Water · Парен дестилат',
      lead: 'CTSEG координира доставките на едро на автентичен парно дестилиран хидролат от Rosa damascena за козметични фабрики и контрактни производители — оценявайки остатъчното съдържание на етерично масло, микробиологията, консервирането и транспорта във варели или IBC.',
      cardSummary: 'Автентична флорална вода от Rosa damascena от парна дестилация във варели и IBC контейнери за тоници, спрейове и емулсии.',
      specs: [
        ['Клас на дестилата', '100% парно дестилирана флорална вода от Rosa damascena (без синтетични парфюмни композиции)'],
        ['Технически параметри', 'Контролирано pH, разтворена фракция розово масло, микробиологичен COA (TAMC/TYMC) и опции със/без консервант'],
        ['Индустриални опаковки', 'HDPE туби 20 L – 30 L, козметични варели 200 L и IBC контейнери 1000 L'],
        ['Документално досие', 'Партиден COA, микробиологичен протокол, SDS, INCI разбивка и експортни сертификати']
      ],
      applications: [
        'Тоници за лице, хидратиращи спрейове (face mist) и мицеларни води',
        'Ботанически заместител на водната фаза в кремове, серуми и лосиони',
        'Разтвори за лист-маски (sheet masks), мокри кърпички и нежни почистващи продукти',
        'Успокояващи тоници за скалп, спрейове за коса и грижа за тялото'
      ],
      rfqChecklist: [
        'Статус на консервиране (стерилно филтриран без консерванти или с козметичен консервант)',
        'Целеви процент остатъчно етерично масло и ароматен профил',
        'Обем на доставка, вид опаковка (туба, варел или IBC) и честота на поръчките',
        'Пристанище/склад на доставка и митнически/регулаторни изисквания'
      ],
      faq: [
        ['Каква е разликата между истински розов хидролат и ароматизирана розова вода?', 'Истинският хидролат е водният дестилат, събран директно при парната дестилация на свежи венчелистчета от Rosa damascena, а не дейонизирана вода с разтворен аромат. Ние специфицираме автентични дестилати според вашето задание.'],
        ['Възможна ли е международна доставка в 200 L варели или 1000 L IBC контейнери?', 'Да. За индустриални производители координираме палетизирани HDPE варели и IBC контейнери със сухопътен или морски транспорт.'],
        ['Как се управлява микробиологичната стабилност при транспорт на едро?', 'Купувачите могат да изберат микрофилтрирани партиди в запечатани съдове или консервирани системи, одобрени за техния целеви пазар.']
      ]
    },
    'lavender-water-hydrosol': {
      name: 'Лавандулова вода и хидролат — B2B снабдяване',
      metaTitle: 'Лавандулов хидролат и флорална вода на едро B2B | CTSEG',
      description: 'B2B снабдяване от Türkiye с парно дестилирана лавандулова флорална вода (хидролат) за производство на продукти за кожа, коса и натурална козметика.',
      eyebrow: 'CTSEG · ХИДРОЛАТИ И ФЛОРАЛНИ ВОДИ',
      botanicalName: 'INCI: Lavandula Angustifolia Flower Water / Lavandula Hybrida Flower Water',
      lead: 'Координираме доставки на едро на парно дестилирана лавандулова вода за козметични лаборатории и производители — проверявайки ботаническия произход, микробиологичната чистота, стабилността на pH и опаковките от туби до 1000 L IBC.',
      cardSummary: 'Парно дестилиран лавандулов хидролат за почистващи тоници, успокояваща грижа за кожата, бебешка козметика и ботанически водни фази.',
      specs: [
        ['Метод на производство', 'Чист воден флорален дестилат, уловен при парна дестилация на цъфтящи лавандулови съцветия'],
        ['Контрол на качеството', 'Партидна проверка на pH, бистрота, естествен летлив профил и микробиологичен COA'],
        ['Опаковки на едро', 'HDPE туби 20 L / 25 L, варели 200 L и IBC контейнери 1000 L'],
        ['Документация', 'COA, TDS, SDS/MSDS, декларация за алергени и митнически експортни документи']
      ],
      applications: [
        'Почистващи и балансиращи себума тоници и спрейове за лице',
        'Охлаждащи спрейове за след слънце (after-sun) и успокояващи гелове',
        'Нежна водна фаза за бебешка козметика и чувствителна кожа',
        'Лосиони за скалп, билкови шампоани и спрейове за текстил/възглавници'
      ],
      rfqChecklist: [
        'Предпочитан ботанически източник (дестилат от Lavandula angustifolia или лавандин)',
        'Изисквания за консервираща система и микробиологични лимити',
        'Формат на опаковката (HDPE туба, варел или IBC) и общ обем',
        'Адрес за доставка на мостри и предпочитан Incoterm'
      ],
      faq: [
        ['Как се използва лавандуловият хидролат в козметичното производство?', 'Формулаторите влагат лавандулов хидролат от 10% до 100% от водната фаза в тоници, гелове, лосиони и измивни продукти за естествен аромат и успокояващ ефект.'],
        ['Как гарантирате постоянство между отделните партиди?', 'Всяко запитване се съпоставя с дестилационни партиди с документиран COA (pH, органолептика и микробиология) и предварителни мостри.'],
        ['Какво е минималното количество за поръчка (MOQ)?', 'MOQ зависи от избраната опаковка (туби, 200 L варели или 1000 L IBC) и се потвърждава при прегледа на RFQ.']
      ]
    },
    'botanical-carrier-oils': {
      name: 'Базови растителни масла (Carrier Oils) — B2B снабдяване',
      metaTitle: 'Базови растителни и козметични масла на едро B2B | CTSEG',
      description: 'B2B доставки на студено пресовани и рафинирани базови растителни масла (сладък бадем, жожоба, шипка, гроздови семки, кайсиеви ядки, нар).',
      eyebrow: 'CTSEG · БАЗОВИ И НОСЕЩИ МАСЛА',
      botanicalName: 'Студено пресовани (Virgin) и рафинирани козметични базови масла',
      lead: 'CTSEG координира B2B снабдяването със студено пресовани и рафинирани базови растителни масла за козметични лаборатории, марки за кожа и дистрибутори на суровини — проверявайки мастнокиселинния профил (FAME), пероксидното число, киселинността и експортните опаковки.',
      cardSummary: 'Студено пресовани и рафинирани базови масла — сладък бадем, кайсиеви ядки, гроздови семки, шипка, нар и жожоба — за B2B формули.',
      specs: [
        ['Основно портфолио', 'Масла от сладък бадем, кайсиеви ядки, гроздови семки, шипка, семки от нар, жожоба, арган, черен кимион, сусам и лешник'],
        ['Класове на обработка', 'Студено пресовани нерафинирани (virgin) и козметичен клас рафинирани/дезодорирани масла'],
        ['Аналитични тестове', 'Мастнокиселинен състав чрез GC (FAME), свободни мастни киселини, пероксидно число, йодно число и индекс на пречупване (COA)'],
        ['Опаковки на едро', 'HDPE/метални бидони 20 кг – 25 кг, варели 190 кг и IBC контейнери']
      ],
      applications: [
        'Маслени серуми за лице, липидно-възстановяващи кремове и безводни балсами',
        'Подхранващи масла за коса, терапии за краища и скалп',
        'Носещи бази за разреждане на етерични масла и професионални масажни масла',
        'Слънцезащитни формули, балсами за устни, почистващи масла и сапунени бази'
      ],
      rfqChecklist: [
        'Изисквано растително масло(а), INCI наименование и CAS номер',
        'Клас на обработка (студено пресовано virgin срещу рафинирано/дезодорирано)',
        'Максимални граници за пероксидно/киселинно число и мастнокиселинен профил',
        'Обем на поръчката, размер на опаковката и условия на доставка'
      ],
      faq: [
        ['Студено пресовани или рафинирани базови масла да изберем за нашата формула?', 'Студено пресованите масла запазват естествените токофероли и фитостероли за активни серуми, докато рафинираните предлагат неутрален цвят/мирис и дълъг срок на годност за емулсии. Доставяме и двата вида според вашето задание.'],
        ['Могат ли няколко базови и етерични масла да се консолидират в една пратка?', 'Да. CTSEG координира многопродуктови B2B поръчки, обединявайки базови масла, етерични масла и хидролати в единна експортна пратка.'],
        ['Как се гарантира оксидативната стабилност преди доставка?', 'Проверяваме датата на производство, пероксидното и киселинното число в партидния COA и координираме подходяща непрозрачна опаковка.']
      ]
    },
    'botanical-extracts': {
      name: 'Растителни екстракти и активни козметични суровини B2B',
      metaTitle: 'Растителни екстракти и козметични активи на едро B2B | CTSEG',
      description: 'B2B снабдяване с хидроглицеринови, гликолови, мастноразтворими и прахообразни растителни екстракти за производство на козметика и дермокозметика.',
      eyebrow: 'CTSEG · РАСТИТЕЛНИ ЕКСТРАКТИ И АКТИВИ',
      botanicalName: 'Хидроглицеринови, пропандиолови, маслени мацерати и сухи екстракти',
      lead: 'Помагаме на дермокозметични марки, контрактни производители и R&D лаборатории да се снабдяват с течни и прахообразни растителни екстракти — съгласувайки разтворителя носител, съотношението билка/екстракт (DER), консервантите и техническите досиета.',
      cardSummary: 'Водоразтворими глицерити, екстракти в пропандиол, маслени мацерати и стандартизирани сухи екстракти за козметичната индустрия.',
      specs: [
        ['Носители и форми', 'Вода/глицерин (хидроглицеринови), 1,3-пропандиол, пропилен/бутилен гликол, мастноразтворими мацерати и сухи прахове'],
        ['Ботанически обхват', 'Центела, лайка, невен (календула), зелен чай, женско биле, роза, лавандула, розмарин, бръшлян, див кестен, жълт кантарион и анадолски билки'],
        ['Техническо досие', 'TDS, партиден COA, SDS, пълна процентна INCI разбивка, консервираща система и препоръчителна дозировка'],
        ['Индустриални опаковки', 'Козметични туби от 1 кг, 5 кг, 10 кг и 25 кг или барабани с фолио за прахове']
      ],
      applications: [
        'Озаряващи, успокояващи и антиоксидантни серуми и ампули за лице',
        'Тоници против косопад, билкови шампоани и балсами',
        'Гелове за околоочен контур, есенции за лист-маски и дермокозметични емулсии',
        'Лосиони за тяло, успокояващи продукти за след бръснене и нежни измивни гелове'
      ],
      rfqChecklist: [
        'Ботанически вид (латинско наименование) и физична форма (течен или сух екстракт)',
        'Предпочитан разтворител (глицерин, пропандиол, базово масло) и ограничения за консерванти',
        'Целево съотношение DER или спецификация за активен маркер',
        'Количество мостра, обем на поръчката и регулаторна рамка на целевия пазар'
      ],
      faq: [
        ['Можем ли да заявим специфични разтворители като пропандиол или глицерин без палмово масло?', 'Да. По време на прегледа на RFQ съобразяваме системата носител и консервирането с изискванията на вашата clean-beauty или безводна формула.'],
        ['Предоставяте ли пълна INCI разбивка за оценка на безопасността на козметиката (CPSR)?', 'Да. Квалифицираните партиди са придружени от TDS, COA, SDS и процентна INCI разбивка, необходима на оценителите по безопасност.'],
        ['Могат ли да се доставят комбинирани билкови комплекси?', 'За търговски B2B обеми могат да бъдат оценени многокомпонентни растителни блендове за специфични приложения за коса или кожа.']
      ]
    },
    'other-essential-oils': {
      name: 'Други етерични масла (Анадолска и Средиземноморска флора)',
      metaTitle: 'Етерични масла от риган, дафинов лист, розмарин на едро B2B | CTSEG',
      description: 'B2B снабдяване от Türkiye за етерични масла от риган, мащерка, дафинов лист, розмарин, салвия, мента, евкалипт и цитруси с GC-MS верификация.',
      eyebrow: 'CTSEG · АРОМАТНИ И ЕТЕРИЧНИ МАСЛА',
      botanicalName: 'Origanum, Thymus, Laurus nobilis, Rosmarinus, Salvia, Mentha & Citrus Oils',
      lead: 'Отвъд розата и лавандулата, Türkiye е водещ произход за ароматни средиземноморски и анадолски растения. CTSEG координира B2B снабдяването с етерични масла от риган, мащерка, дафинов лист, розмарин, салвия, мента, хвойна, ликвидамбър и цитруси с проверен хемотип.',
      cardSummary: 'Проверени с GC-MS етерични масла от риган, мащерка, дафинов лист, розмарин, салвия, мента и цитруси на едро за B2B приложения.',
      specs: [
        ['Основни масла', 'Риган (Origanum vulgare/onites), мащерка, дафинов лист (Laurus nobilis), розмарин, салвия, лютива мента, евкалипт, кедър и цитрусови масла'],
        ['Хемотип и маркери', 'Партиден GC-MS анализ, потвърждаващ карвакрол, тимол, 1,8-цинеол (евкалиптол), ментол, камфор и d-лимонен'],
        ['Опаковки на едро', 'Алуминиеви съдове/UN-одобрени туби 1 кг – 25 кг и стоманени варели 180 кг'],
        ['Експорт и регулации', 'GHS/CLP SDS (вкл. Раздел 14 транспортна класификация), IFRA сертификат, декларация за алергени и произход']
      ],
      applications: [
        'Почистващи скалпа шампоани, билкови сапуни и продукти за лична грижа',
        'Формули за орална хигиена (води за уста и пасти за зъби с мента, салвия, мащерка)',
        'Спортни гелове за възстановяване, масажни балсами и инхалационни смеси',
        'Натурални ароматни композиции, функционална козметика и технически B2B приложения'
      ],
      rfqChecklist: [
        'Точно латинско ботаническо име, дестилирана растителна част и хемотип',
        'Минимален праг на активния маркер (напр. 70%+ карвакрол в масло от риган или 1,8-цинеол в дафиново масло)',
        'Целеви обем, UN-одобрена опаковка и изисквания за мостри',
        'Пристанище/летище на доставка и координация на опасни товари (DG/ADR)'
      ],
      faq: [
        ['Как проверявате съдържанието на карвакрол в маслото от риган или 1,8-цинеол в дафиновото масло?', 'Всяка предлагана партида се оценява чрез GC-MS хроматография, за да могат купувачите да проверят точните проценти преди одобряване на мострата.'],
        ['Как се управляват правилата за превоз на опасни товари (DG) при етеричните масла?', 'Проверяваме Раздел 14 от SDS още в етапа на RFQ, за да организираме UN-сертифицирани опаковки и съответстващ въздушен, сухопътен или морски транспорт.'],
        ['Можем ли да комбинираме няколко етерични масла в едно запитване (RFQ)?', 'Да. Купувачите често подават консолидирани запитвания, обхващащи масла от роза, лавандула, риган, дафинов лист, розмарин и базови масла.']
      ]
    }
  },
  he: {
    'rose-essential-oil': {
      name: 'שמן אתרי ורדים (Rosa damascena) — רכש ואספקה B2B',
      metaTitle: 'שמן אתרי ורדים (Rosa damascena) בסיטונאות ורכש B2B | CTSEG',
      description: 'רכש B2B בינלאומי מטורקיה של שמן אתרי ורדים (Rosa damascena) בזיקוק קיטור, כולל בדיקת GC-MS, דוגמאות ותיאום RFQ.',
      eyebrow: 'CTSEG · רכש שמנים אתריים B2B',
      botanicalName: 'INCI: Rosa Damascena Flower Oil · זיקוק בקיטור (Otto of Rose)',
      lead: 'CTSEG מתאמת רכש B2B של שמן אתרי ורדים אנטולי (Rosa damascena) ונגזרות ורדים עבור בתי בישום, יצרני קוסמטיקה ומפיצי חומרי גלם — תוך התאמת אצוות קציר, פרופילי GC-MS, דוגמאות מעבדה ולוגיסטיקת יצוא.',
      cardSummary: 'שמן אתרי Rosa damascena מזוקק בקיטור ונגזרות ורדים לבישום יוקרתי, טיפוח עור מתקדם ומפיצי B2B.',
      specs: [
        ['שיטת הפקה ודרגה', 'שמן פרחי Rosa damascena מזוקק במים/קיטור (Otto of Rose) ואפשרויות אבסולוט ורדים לפי מפרט'],
        ['אימות אנליטי', 'כרומטוגרמת GC-MS ספציפית לאצווה (ציטרונלול, גרניאול, נרול, סטארופטנים), COA ו-SDS'],
        ['אריזה תעשייתית', 'בקבוקי אלומיניום אטומים או מופלרים (0.5 ק"ג – 5 ק"ג+) באריזת מגן ליצוא'],
        ['דוגמאות ו-MOQ', 'דוגמאות אצווה לאישור מעבדה לפני הזמנה מסחרית; הערכת MOQ מדורגת לפי אצוות הקציר']
      ],
      applications: [
        'בישום עילי (Fine Fragrance), בשמי נישה ואקורדים ארומטיים טבעיים',
        'שמני פנים אנטי-אייג׳ינג, קרמים יוקרתיים וסרומים לשיקום מחסום העור',
        'ארומתרפיה מקצועית ופורמולציות ספא מתקדמות',
        'ייצור קבלני (Private Label) וקווי קוסמטיקה בוטניים פעילים'
      ],
      rfqChecklist: [
        'הדרגה הנדרשת (שמן ורדים מזוקק בקיטור או אבסולוט ורדים)',
        'כמות יעד (גרמים או קילוגרמים) ותוכנית רכש שנתית',
        'תיעוד רגולטורי נדרש (תעודת IFRA, פירוט אלרגנים, GC-MS, REACH)',
        'נמל/שדה תעופה יעד, תנאי Incoterm מועדפים ודרישות שילוח'
      ],
      faq: [
        ['האם CTSEG היא יצרנית או מחזיקת מלאי של שמן ורדים?', 'לא. CTSEG פועלת כבית סחר ורכש B2B עצמאי בטורקיה. אנו בוחנים מזקקות מוסמכות מול המפרט האנליטי שלכם ומתאמים דוגמאות, מסמכים וביצוע יצוא.'],
        ['כיצד מאומתת המקוריות של שמן Rosa damascena?', 'כל הצעת מחיר ודוגמה מגובות בניתוח GC-MS של האצווה, מדדים פיזיקו-כימיים ב-COA (נקודת קיפאון, מקדם שבירה) ואישור דוגמת טרום-משלוח.'],
        ['האם מחירים ומלאי מובטחים מראש?', 'מכיוון ששמן ורדים תלוי ביבול העונתי של עלי הכותרת, זמינות האצוות והתמחור מאושרים פרטנית עבור כל בקשת RFQ פעילה.']
      ]
    },
    'lavender-essential-oil': {
      name: 'שמן אתרי לבנדר — רכש ואספקה B2B',
      metaTitle: 'שמן אתרי לבנדר בסיטונאות מטורקיה | CTSEG',
      description: 'רכש B2B של שמן אתרי Lavandula angustifolia ולבנדין מטורקיה עם פרופילי GC-MS, דוגמאות ואריזות חבית תעשייתיות.',
      eyebrow: 'CTSEG · רכש שמנים אתריים B2B',
      botanicalName: 'INCI: Lavandula Angustifolia Oil / Lavandula Hybrida Oil',
      lead: 'אנו מסייעים ליצרני קוסמטיקה, מותגי טיפוח אישי ומפתחי ניחוחות ברכש מבוסס-מפרט של שמן אתרי Lavandula angustifolia ולבנדין — תוך התאמת פרופיל לינאלול/לינאליל אצטט, אריזות חבית ומסמכי יצוא.',
      cardSummary: 'שמנים אתריים של Lavandula angustifolia ולבנדין בכמויות מסחריות לטיפוח עור, היגיינה אישית, ארומתרפיה ובישום טכני.',
      specs: [
        ['זנים בוטניים', 'Lavandula angustifolia (לבנדר עדין) ו-Lavandula intermedia / hybrida (לבנדין)'],
        ['איכות וכרומטוגרפיה', 'פרופיל GC-MS לאצווה המאמת ערכי לינאלול, לינאליל אצטט וקמפור לצד COA'],
        ['אריזות סיטונאיות', 'מכלי אלומיניום 1 ק"ג – 25 ק"ג וחביות פלדה מצופות אפוקסי 180 ק"ג'],
        ['תיאום מסחרי', 'התאמת אצוות, דוגמאות מעבדה ולוגיסטיקת יצוא EXW / FOB / CIF / DAP']
      ],
      applications: [
        'סרומים מרגיעים לפנים, תחליבים, קרמי גוף ודרמו-קוסמטיקה',
        'שמפו, ג׳ל רחצה, סבון נוזלי ומוצרי טיפוח אישי בוטניים',
        'תערובות ארומתרפיה, תרסיסי הרגעה ושמני עיסוי',
        'מוצרי טיפוח לבית, חומרי ניקוי טבעיים ובישום חללים'
      ],
      rfqChecklist: [
        'המין הבוטני הנדרש (Lavandula angustifolia או לבנדין)',
        'טווחי יעד לאסטרים/לינאלול/קמפור או תקן ISO/פרמקופיאה',
        'נפח הזמנה, גודל מכל ודרישה לבדיקת דוגמה',
        'מדינת יעד ומסמכי תקינה נדרשים (SDS, IFRA, רשימת אלרגנים)'
      ],
      faq: [
        ['כיצד אתם מסייעים בבחירה בין Lavandula angustifolia ללבנדין?', 'Lavandula angustifolia מציע פרופיל עדין ודל-קמפור המתאים לקוסמטיקה ללא שטיפה, בעוד שלבנדין מעניק עוצמת ניחוח גבוהה ויעילות עלות לסבונים ומוצרי בית. אנו מתאימים את הדרגה המדויקת לפורמולה שלכם.'],
        ['האם ניתן להזמין כמויות בחביות לייצור תעשייתי?', 'כן, בהתאם לזמינות העונתית אנו מתאמים הן מכלי אלומיניום של 5–25 ק"ג והן חביות של 180 ק"ג.'],
        ['האם המשלוח המסחרי תואם לדוגמה שאושרה?', 'כן, דוגמאות טרום-משלוח מייצגות את אצוות הייצור המוצעת או את חלון המפרט של ה-GC-MS שסוכם.']
      ]
    },
    'rose-water-hydrosol': {
      name: 'מי ורדים והידרוסול ורדים — רכש B2B',
      metaTitle: 'מי ורדים והידרוסול Rosa Damascena בסיטונאות B2B | CTSEG',
      description: 'אספקת B2B בסיטונאות של הידרוסול Rosa damascena מזוקק בקיטור בג׳ריקנים, חביות 200 ליטר ומכלי IBC של 1,000 ליטר מטורקיה.',
      eyebrow: 'CTSEG · הידרוסולים ומי פרחים',
      botanicalName: 'INCI: Rosa Damascena Flower Water · תזקיק קיטור',
      lead: 'CTSEG מתאמת אספקה סיטונאית של הידרוסול Rosa damascena מקורי מזוקק בקיטור עבור מפעלי קוסמטיקה ויצרני Private Label — תוך בחינת שארית שמן אתרי מומס, ניקיון מיקרוביאלי, מערכת שימור ושילוח בחביות או מכלי IBC.',
      cardSummary: 'מי פרחי Rosa damascena מקוריים מזיקוק קיטור בחביות ומכלי IBC לטונרים, תרסיסי פנים ותחליבים קוסמטיים.',
      specs: [
        ['דרגת התזקיק', '100% מי פרחי Rosa damascena מזיקוק קיטור (ללא שחזור בישום סינתטי)'],
        ['פרמטרים טכניים', 'טווח pH מבוקר, מקטע שמן ורדים מומס, COA מיקרוביאלי (TAMC/TYMC) ואפשרויות עם/ללא משמר'],
        ['אריזה תעשייתית', 'ג׳ריקנים HDPE של 20–30 ליטר, חביות קוסמטיות 200 ליטר ומכלי IBC של 1,000 ליטר'],
        ['תיק מסמכים', 'COA לאצווה, דוח בדיקה מיקרוביאלית, SDS, פירוט INCI ותעודות יצוא']
      ],
      applications: [
        'טונרים לפנים, תרסיסי לחות (Face Mist) ומים מיסלריים',
        'תחליף פאזה מימית בוטנית בקרמים, סרומים ותחליבים',
        'תמיסות למסכות בד (Sheet Masks), מגבונים לחים ותכשירי ניקוי עדינים',
        'טוניקים להרגעת הקרקפת, תרסיסי שיער ומוצרי טיפוח לגוף'
      ],
      rfqChecklist: [
        'סטטוס שימור (ללא משמרים בסינון סטרילי או עם מערכת שימור קוסמטית)',
        'אחוז יעד של שמן אתרי שיורי ועוצמת ניחוח נדרשת',
        'נפח למשלוח, פורמט אריזה (ג׳ריקן, חבית או IBC) ותדירות אספקה',
        'נמל/מחסן יעד ודרישות יבוא ורישום תמרוקים'
      ],
      faq: [
        ['מה ההבדל בין הידרוסול ורדים אמיתי למי ורדים משוחזרים?', 'הידרוסול ורדים אמיתי הוא התזקיק המימי שנאסף ישירות במהלך זיקוק בקיטור של עלי כותרת טריים של Rosa damascena, ולא מים מופחתים המעורבבים עם תמצית ריח. אנו מאפיינים הידרוסולים אמיתיים בהתאם לדרישה הטכנית שלכם.'],
        ['האם ניתן לשלוח בינלאומית בחביות 200 ליטר או מכלי IBC של 1,000 ליטר?', 'כן. עבור יצרני קוסמטיקה אנו מתאמים משטחי חביות HDPE ומכלי IBC בהובלה יבשתית או ימית.'],
        ['כיצד נשמרת היציבות המיקרוביאלית בהובלה בצובר?', 'קונים יכולים להגדיר אצוות מסוננות במיקרו-פילטרציה במכלים אטומים או מערכות שימור קוסמטיות המאושרות בשוק היעד.']
      ]
    },
    'lavender-water-hydrosol': {
      name: 'מי לבנדר והידרוסול לבנדר — רכש B2B',
      metaTitle: 'הידרוסול לבנדר ומי פרחים בסיטונאות B2B | CTSEG',
      description: 'רכש B2B מטורקיה של מי פרחי לבנדר מזוקקים בקיטור (הידרוסול Lavandula) לייצור מוצרי טיפוח עור, שיער וקוסמטיקה טבעית.',
      eyebrow: 'CTSEG · הידרוסולים ומי פרחים',
      botanicalName: 'INCI: Lavandula Angustifolia Flower Water / Lavandula Hybrida Flower Water',
      lead: 'אנו מתאמים אספקה סיטונאית של מי פרחי לבנדר מזוקקים בקיטור עבור מעבדות פורמולציה ויצרני קוסמטיקה — תוך בקרת מקור בוטני, ניקיון מיקרוביאלי, יציבות pH ואריזות מג׳ריקנים ועד מכלי IBC של 1,000 ליטר.',
      cardSummary: 'הידרוסול לבנדר מזוקק בקיטור לטונרים מטהרים, קוסמטיקה מרגיעה, מוצרי תינוקות ופאזות מימיות בוטניות.',
      specs: [
        ['שיטת ייצור', 'תזקיק פרחים מימי טהור המופק בזיקוק קיטור של תפרחות לבנדר'],
        ['בקרת איכות', 'אימות pH לאצווה, צלילות, פרופיל נדיפים טבעי ו-COA מיקרוביאלי'],
        ['אריזות צובר', 'ג׳ריקנים HDPE של 20 / 25 ליטר, חביות 200 ליטר ומכלי IBC של 1,000 ליטר'],
        ['תיעוד טכני', 'COA, TDS, SDS/MSDS, הצהרת אלרגנים ומסמכי מכס ליצוא']
      ],
      applications: [
        'טונרים לכיווץ נקבוביות ואיזון סבום לעור שמן/מעורב',
        'תרסיסי קירור לאחר חשיפה לשמש (After-Sun) וג׳לים מרגיעים',
        'פאזה מימית עדינה למוצרי טיפוח לתינוקות ועור רגיש',
        'תחליבי קרקפת, שמפו צמחי ותרסיסי בישום למצעים וטקסטיל'
      ],
      rfqChecklist: [
        'העדפת מקור בוטני (תזקיק Lavandula angustifolia לעומת לבנדין)',
        'מפרט שימור וגבולות מיקרוביאליים נדרשים',
        'פורמט אריזה (ג׳ריקן HDPE, חבית או IBC) ונפח כולל',
        'פרטי משלוח לדוגמאות ו-Incoterm מועדף'
      ],
      faq: [
        ['כיצד משתמשים בהידרוסול לבנדר בייצור קוסמטי תעשייתי?', 'מפתחי פורמולות משלבים הידרוסול לבנדר בשיעור של 10% עד 100% מהפאזה המימית בטונרים, ג׳לים, תחליבים וסבונים להענקת ארומה טבעית ואפקט מרגיע.'],
        ['כיצד מבטיחים עקביות בין אצוות שונות?', 'כל פנייה מותאמת לאצוות זיקוק בעלות מדדי COA מתועדים (pH, תכונות אורגנולפטיות ומיקרוביולוגיה) עם אפשרות לדוגמת טרום-משלוח.'],
        ['מהי כמות ההזמנה המינימלית (MOQ)?', 'ה-MOQ תלוי בפורמט האריזה הנבחר (ג׳ריקנים, חביות 200 ליטר או IBC של 1,000 ליטר) ומאושר בשלב בחינת ה-RFQ.']
      ]
    },
    'botanical-carrier-oils': {
      name: 'שמני בסיס צמחיים (Botanical Carrier Oils) — רכש B2B',
      metaTitle: 'שמני בסיס צמחיים ושמנים קוסמטיים בסיטונאות B2B | CTSEG',
      description: 'אספקת B2B של שמני בסיס צמחיים בכבישה קרה ומזוקקים (שקדים מתוקים, חוחובה, רוזהיפ, זרעי ענבים, גלעיני משמש, זרעי רימון) לתעשיית הקוסמטיקה.',
      eyebrow: 'CTSEG · שמני בסיס ושמנים נשאים',
      botanicalName: 'שמנים צמחיים קוסמטיים בכבישה קרה (Virgin) ומזוקקים',
      lead: 'CTSEG מתאמת רכש B2B של שמני בסיס צמחיים בכבישה קרה ומזוקקים עבור מעבדות קוסמטיקה, מותגי טיפוח ומפיצי חומרי גלם — תוך בדיקת פרופיל חומצות שומן (FAME), ערך פראוקסיד, חומציות ואריזות יצוא.',
      cardSummary: 'שמני בסיס בכבישה קרה ומזוקקים — שקדים מתוקים, משמש, זרעי ענבים, רוזהיפ, רימון וחוחובה — לפורמולציות B2B.',
      specs: [
        ['סל שמנים מרכזי', 'שמן שקדים מתוקים, גלעיני משמש, זרעי ענבים, רוזהיפ (פקעות ורדים), זרעי רימון, חוחובה, ארגן, קצח, שומשום ואגוזי לוז'],
        ['דרגות עיבוד', 'כבישה קרה לא מזוקקים (Virgin) ודרגות קוסמטיות מזוקקות/נטולות ריח (Refined/Deodorized)'],
        ['בדיקות אנליטיות', 'הרכב חומצות שומן ב-GC (FAME), חומצות שומן חופשיות, ערך פראוקסיד, ערך יוד ומקדם שבירה (COA)'],
        ['אריזות סיטונאיות', 'מכלים של 20–25 ק"ג, חביות 190 ק"ג ומכלי IBC']
      ],
      applications: [
        'סרומים שומניים לפנים, קרמים משקמי מחסום עור ובאלמים ללא מים',
        'שמני הזנה לשיער, טיפולי קצוות וקומפלקסים לקרקפת',
        'שמנים נשאים לדילול שמנים אתריים ושמני עיסוי מקצועיים',
        'מוצרי הגנה מהשמש, שפתונים, שמני ניקוי ובסיסי סבון טבעיים'
      ],
      rfqChecklist: [
        'השמן/שמנים הצמחיים הנדרשים, שם INCI ומספר CAS',
        'דרגת עיבוד (כבישה קרה Virgin לעומת מזוקק/נטול ריח)',
        'גבולות מקסימום לערך פראוקסיד/חומציות ופרופיל חומצות שומן נדרש',
        'נפח הזמנה, גודל אריזה ותנאי אספקה ליעד'
      ],
      faq: [
        ['האם כדאי לבחור שמנים בכבישה קרה או שמנים מזוקקים לפורמולה?', 'שמנים בכבישה קרה שומרים על טוקופרולים ופיטוסטרולים טבעיים לסרומים פעילים, בעוד שדרגות מזוקקות מציעות צבע/ריח ניטרליים ויציבות חמצונית ארוכה לתחליבים. אנו מספקים את שתי האפשרויות לפי מפרט הפיתוח שלכם.'],
        ['האם ניתן לאחד מספר שמני בסיס ושמנים אתריים במשלוח אחד?', 'כן. CTSEG מתאמת רכש B2B מרובה-פריטים המאפשר לאחד שמני בסיס, שמנים אתריים והידרוסולים במשלוח יצוא אחד.'],
        ['כיצד נשמרת היציבות החמצונית לפני המשלוח?', 'אנו מוודאים תאריכי ייצור עדכניים, ערך פראוקסיד וחומציות ב-COA של האצווה ומתאמים אריזה אטומה מתאימה.']
      ]
    },
    'botanical-extracts': {
      name: 'תמציות צמחים וחומרי גלם פעילים לקוסמטיקה B2B',
      metaTitle: 'תמציות בוטניות ורכיבים פעילים לקוסמטיקה בסיטונאות | CTSEG',
      description: 'רכש B2B של תמציות צמחים הידרו-גליצריניות, גליקוליות, מסיסות בשמן ואבקתיות עבור יצרני טיפוח עור, שיער ודרמו-קוסמטיקה.',
      eyebrow: 'CTSEG · תמציות צמחים ורכיבים פעילים',
      botanicalName: 'תמציות הידרו-גליצריניות, פרופנדיול, תשרית שמן ותמציות יבשות מכוילות',
      lead: 'אנו מסייעים למותגי דרמו-קוסמטיקה, מפעלי ייצור קבלני ומעבדות פיתוח באיתור תמציות צמחים נוזליות ואבקתיות — תוך התאמת ממס נשא, יחס צמח-תמצית (DER), מערכת שימור ותיקי מסמכים טכניים.',
      cardSummary: 'גליצריטים מסיסים במים, תמציות פרופנדיול, תשריות שמן ותמציות צמחים יבשות עבור תעשיית הקוסמטיקה.',
      specs: [
        ['נשאים ופורמטים', 'מים/גליצרין (Hydroglyceric), 1,3-פרופנדיול, פרופילן/בוטילן גליקול, תשריות מסיסות בשמן ואבקות בייבוש בהתזה'],
        ['מגוון בוטני', 'סנטלה, קמומיל, קלנדולה, תה ירוק, שוש קירח (ליקוריץ), ורד, לבנדר, רוזמרין, קיסוס, ערמונית הסוסים וצמחי מרפא אנטוליים'],
        ['תיק טכני', 'TDS, COA לאצווה, SDS, פירוט אחוזי INCI מלא, מערכת שימור ומינון מומלץ'],
        ['אריזה תעשייתית', 'מכלים קוסמטיים של 1 ק"ג, 5 ק"ג, 10 ק"ג ו-25 ק"ג או תופים אטומים לאבקות']
      ],
      applications: [
        'סרומים ואמפולות להבהרה, הרגעה ונוגדי חמצון לפנים',
        'טוניקים לקרקפת נגד נשירת שיער, שמפו ומרככים בוטניים',
        'ג׳לים לאזור העיניים, תמציות למסכות בד ותחליבים דרמו-קוסמטיים',
        'תחליבי גוף, תכשירים מרגיעים לאחר גילוח ומוצרי ניקוי עדינים'
      ],
      rfqChecklist: [
        'המין הבוטני (שם לטיני מדעי) והצורה הפיזית (נוזל או אבקה יבשה)',
        'ממס נשא מועדף (גליצרין, פרופנדיול, שמן בסיס) ומגבלות משמרים',
        'יחס מיצוי (DER) או מפרט סמן פעיל נדרש',
        'כמות דוגמה, נפח הזמנה מסחרי ודרישות רגולציה בשוק היעד'
      ],
      faq: [
        ['האם ניתן להזמין תמציות על בסיס פרופנדיול או גליצרין ללא שמן דקלים?', 'כן. במהלך בחינת ה-RFQ אנו מתאימים את מערכת הממס והשימור לדרישות הפורמולה הטבעית או נטולת המים שלכם.'],
        ['האם אתם מספקים פירוט INCI מלא להערכת בטיחות קוסמטית (CPSR)?', 'כן. אצוות מאושרות מלוות ב-TDS, COA, SDS ופירוט אחוזי INCI הנדרש לתיק הבטיחות והרישום.'],
        ['האם ניתן להזמין קומפלקסים משולבים ממספר צמחים?', 'עבור נפחים מסחריים של B2B ניתן לבחון תערובות תמציות מרובות-צמחים המותאמות ליישומי שיער או עור ספציפיים.']
      ]
    },
    'other-essential-oils': {
      name: 'שמנים אתריים נוספים (צמחיית אנטוליה והים התיכון)',
      metaTitle: 'שמנים אתריים של אורגנו, עלי דפנה, רוזמרין והדרים B2B | CTSEG',
      description: 'רכש B2B מטורקיה של שמנים אתריים מאורגנו, קורנית (תימין), עלי דפנה, רוזמרין, מרווה, מנטה, אקליפטוס והדרים עם אימות GC-MS.',
      eyebrow: 'CTSEG · שמנים ארומטיים ואתריים',
      botanicalName: 'Origanum, Thymus, Laurus nobilis, Rosmarinus, Salvia, Mentha & Citrus Oils',
      lead: 'מעבר לוורדים ולבנדר, טורקיה היא מקור מרכזי לצמחים ארומטיים ים-תיכוניים ואנטוליים. CTSEG מתאמת רכש B2B של שמני אורגנו, קורנית, עלי דפנה, רוזמרין, מרווה, מנטה, ערער והדרים עם כימוטיפ מאומת.',
      cardSummary: 'שמנים אתריים מאומתי GC-MS של אורגנו, קורנית, עלי דפנה, רוזמרין, מרווה, מנטה והדרים באספקה סיטונאית ללקוחות B2B.',
      specs: [
        ['שמנים אתריים מרכזיים', 'אורגנו (Origanum), קורנית (Thymus), עלי דפנה (Laurus nobilis), רוזמרין, מרווה, מנטה חריפה, אקליפטוס, ארז ושמני הדרים'],
        ['בקרת כימוטיפ וסמנים', 'בדיקת GC-MS לאצווה המאמתת סמנים פעילים כגון קרווקרול, תימול, 1,8-צינאול, מנתול, קמפור ולימונן'],
        ['אריזות סיטונאיות', 'מכלי אלומיניום/ג׳ריקנים מאושרי UN של 1–25 ק"ג וחביות פלדה 180 ק"ג'],
        ['יצוא ורגולציה', 'SDS תואם GHS/CLP (כולל סעיף 14 לסיווג הובלה), תעודת IFRA, הצהרת אלרגנים ותעודות מקור']
      ],
      applications: [
        'שמפו לטיהור הקרקפת, סבונים צמחיים ומוצרי טיפוח אישי',
        'פורמולציות להיגיינת הפה (שטיפות פה ומשחות שיניים עם מנטה, מרווה, קורנית)',
        'ג׳לים לשחרור שרירים, משחות עיסוי ותערובות ארומתרפיה לנשימה',
        'תרכובות ריח טבעיות, קוסמטיקה פונקציונלית ויישומי B2B טכניים'
      ],
      rfqChecklist: [
        'שם בוטני לטיני מדויק, חלק הצמח המזוקק והכימוטיפ הנדרש',
        'סף מינימום לסמן פעיל (למשל 70%+ קרווקרול בשמן אורגנו או 1,8-צינאול בשמן דפנה)',
        'נפח יעד, העדפת אריזה מאושרת UN וצורך בבדיקת דוגמה',
        'נמל/שדה תעופה יעד ותיאום הובלת חומרים מסוכנים (DG) במידת הצורך'
      ],
      faq: [
        ['כיצד מאומת אחוז הקרווקרול בשמן אורגנו או ה-1,8-צינאול בשמן עלי דפנה?', 'כל אצווה מוצעת נבדקת באמצעות כרומטוגרפיית GC-MS כך שהקונה יכול לאמת את אחוזי הסמנים המדויקים לפני אישור דוגמת המשלוח.'],
        ['כיצד מטופלים כללי שילוח חומרים מסוכנים (DG) עבור שמנים אתריים?', 'אנו בוחנים את סעיף 14 ב-SDS כבר בשלב ה-RFQ כדי לתאם אריזות UN תקניות והובלה אווירית, ימית או יבשתית מתאימה.'],
        ['האם ניתן לשלב מספר שמנים אתריים בבקשת הצעת מחיר (RFQ) אחת?', 'כן. קונים עסקיים מגישים לעיתים קרובות בקשות RFQ מרוכזות הכוללות שמני ורדים, לבנדר, אורגנו, דפנה, רוזמרין ושמני בסיס.']
      ]
    }
  },
  ar: {
    'rose-essential-oil': {
      name: 'توريد زيت الورد العطري (Rosa damascena) بالجملة B2B',
      metaTitle: 'توريد زيت الورد الدمشقي (Rosa damascena) بالجملة B2B | CTSEG',
      description: 'توريد دولي B2B من تركيا لزيت الورد العطري (Rosa damascena) المقطر بالبخار مع فحص GC-MS، تنسيق العينات وإدارة طلبات عروض الأسعار (RFQ).',
      eyebrow: 'CTSEG · توريد الزيوت العطرية B2B',
      botanicalName: 'INCI: Rosa Damascena Flower Oil · تقطير بالبخار (Otto of Rose)',
      lead: 'تنسّق CTSEG عمليات التوريد B2B لزيت الورد الأناضولي (Rosa damascena) ومشتقات الورد لصالح دور العطور، مصنّعي مستحضرات العناية بالبشرة وموزعي المواد الخام — مع مطابقة دفعات الحصاد، ملفات تحليل GC-MS، العينات المرجعية وشحنات التصدير.',
      cardSummary: 'زيت الورد (Rosa damascena) المقطر بالبخار ومشتقاته للعطور الفاخرة، مستحضرات العناية بالبشرة المتقدمة وموزعي المواد الخام B2B.',
      specs: [
        ['طريقة الاستخلاص والدرجة', 'زيت زهور Rosa damascena المقطر بالماء/البخار (Otto of Rose) وخيارات خلاصة الورد (Absolute) حسب المواصفات'],
        ['التحقق التحليلي', 'مخطط كروماتوغرافيا GC-MS خاص بكل دفعة (نسب السيترونيلول، الجيرانيول، النيرول والستياروبتين)، شهادة COA وصحيفة SDS'],
        ['التعبئة الصناعية', 'عبوات ألومنيوم محكمة الإغلاق أو عبوات مفلورة (0.5 كغ – 5 كغ+) ضمن صناديق حماية مخصصة للتصدير'],
        ['العينات والحد الأدنى للطلب', 'توفير عينات مرجعية من الدفعة لاعتماد المختبر قبل الطلب التجاري؛ تقييم مرن للحد الأدنى (MOQ) حسب موسم الحصاد']
      ],
      applications: [
        'العطور الفاخرة (Fine Fragrance) والعطور المتخصصة والتركيبات العطرية الطبيعية',
        'زيوت الوجه المقاومة لعلامات التقدم في السن، الكريمات الفاخرة وسيرومات إصلاح حاجز البشرة',
        'العلاج العطري الاحترافي (Aromatherapy) ومستحضرات السبا الراقية',
        'التصنيع التعاقدي (Private Label) وخطوط التجميل النباتية الفعالة'
      ],
      rfqChecklist: [
        'الدرجة المطلوبة (زيت الورد المقطر بالبخار أو أبسولوت الورد)',
        'الكمية المستهدفة (بالغرام أو الكيلوغرام) وخطة التوريد السنوية',
        'الملف التنظيمي المطلوب (شهادة IFRA، بيان مسببات الحساسية، GC-MS، REACH)',
        'المطار/الميناء المقصود، شرط التسليم Incoterm المفضل وطريقة الشحن'
      ],
      faq: [
        ['هل شركة CTSEG مصنّع أو مالك مخزون لزيت الورد؟', 'لا. تعمل CTSEG كبيت تجارة وتوريد B2B مستقل في تركيا؛ حيث نقوم بتقييم معامل التقطير المؤهلة وفق المواصفات التحليلية للمشتري وتنسيق العينات والوثائق والتصدير.'],
        ['كيف يتم التحقق من نقاء وأصالة زيت Rosa damascena؟', 'يُرفق كل عرض سعر وعينة بتحليل GC-MS للدفعة، والمؤشرات الفيزيائية والكيميائية في شهادة COA (درجة التجمد، معامل الانكسار) واعتماد عينة ما قبل الشحن.'],
        ['هل الأسعار والمخزون مضمونة مسبقاً؟', 'نظراً لارتباط إنتاج زيت الورد بموسم قطف البتلات السنوي، يتم تأكيد التوافر وتخصيص الدفعات والأسعار بناءً على كل طلب شراء (RFQ) فعلي.']
      ]
    },
    'lavender-essential-oil': {
      name: 'توريد زيت الخزامى العطري (Lavender Essential Oil) B2B',
      metaTitle: 'زيت الخزامى (اللافندر) العطري بالجملة من تركيا B2B | CTSEG',
      description: 'توريد B2B لزيت الخزامى (Lavandula angustifolia واللافندين) من تركيا مع تحاليل GC-MS، العينات والتعبئة الصناعية في براميل.',
      eyebrow: 'CTSEG · توريد الزيوت العطرية B2B',
      botanicalName: 'INCI: Lavandula Angustifolia Oil / Lavandula Hybrida Oil',
      lead: 'ندعم مصنّعي مستحضرات التجميل، علامات العناية الشخصية ومختبرات العطور في التوريد القائم على المواصفات لزيت الخزامى (Lavandula angustifolia واللافندين) — مع مطابقة نسب اللينالول وأسيتات الليناليل، خيارات التعبئة ووثائق التصدير.',
      cardSummary: 'زيوت Lavandula angustifolia واللافندين العطرية بكميات تجارية للعناية بالبشرة، العناية الشخصية، العلاج العطري والعطور التقنية.',
      specs: [
        ['الأصناف النباتية', 'Lavandula angustifolia (الخزامى الناعمة/الطبية) وLavandula intermedia / hybrida (اللافندين)'],
        ['الجودة والكروماتوغرافيا', 'تحليل GC-MS لكل دفعة للتحقق من مستويات اللينالول، أسيتات الليناليل والكافور مع شهادة COA'],
        ['خيارات التعبئة بالجملة', 'عبوات ألومنيوم من 1 كغ إلى 25 كغ وبراميل فولاذية مطلية بالإيبوكسي سعة 180 كغ'],
        ['التنسيق التجاري', 'مطابقة الدفعات، عينات التقييم المخبري واللوجستيات التصديرية EXW / FOB / CIF / DAP']
      ],
      applications: [
        'سيرومات الوجه المهدئة، المستحلبات، لوشن الجسم والعناية الجلدية',
        'الشامبو، جل الاستحمام، الصابون السائل ومنتجات النظافة الشخصية النباتية',
        'تركيبات الفواحات العطرية، بخاخات الاسترخاء وزيوت التدليك',
        'منتجات العناية المنزلية الطبيعية، المنظفات وتعطير الأجواء'
      ],
      rfqChecklist: [
        'النوع النباتي المطلوب (Lavandula angustifolia أو اللافندين)',
        'النسب المستهدفة للإسترات/اللينالول/الكافور أو مرجع ISO/دستور الأدوية',
        'حجم الطلب، سعة العبوة والحاجة إلى تقييم عينة',
        'بلد الوجهة ووثائق الامتثال المطلوبة (SDS، IFRA، قائمة مسببات الحساسية)'
      ],
      faq: [
        ['كيف تساعدون المشترين في الاختيار بين Lavandula angustifolia واللافندين؟', 'يتميز صنف Lavandula angustifolia برائحة ناعمة ونسبة كافور منخفضة تناسب مستحضرات البشرة التي لا تُشطف، بينما يوفر اللافندين فوحاناً قوياً وجدوى اقتصادية للصابون والعناية المنزلية. نطابق الصنف الأنسب مع تركيبتكم.'],
        ['هل يمكن توفير كميات بالبراميل للإنتاج الصناعي؟', 'نعم، حسب توافر الدفعات الموسمية ننسّق كلاً من عبوات الألومنيوم (5–25 كغ) والبراميل القياسية (180 كغ).'],
        ['هل تطابق الشحنة التجارية العينة المعتمدة؟', 'نعم، تمثل عينات ما قبل الشحن دفعة الإنتاج المرشحة أو نطاق مواصفات GC-MS المتفق عليه.']
      ]
    },
    'rose-water-hydrosol': {
      name: 'توريد ماء الورد وهيدروسول الورد (Rose Hydrosol) B2B',
      metaTitle: 'توريد ماء الورد وهيدروسول Rosa Damascena بالجملة B2B | CTSEG',
      description: 'توريد B2B بالجملة لماء زهور Rosa damascena المقطر بالبخار (هيدروسول الورد التجميلي) في جراكن، براميل 200 لتر وخزانات IBC سعة 1000 لتر من تركيا.',
      eyebrow: 'CTSEG · الهيدروسولات والمياه الزهرية',
      botanicalName: 'INCI: Rosa Damascena Flower Water · مقطر مائي بالبخار',
      lead: 'تنسّق CTSEG إمدادات الجملة من هيدروسول الورد الدمشقي (Rosa damascena) الأصلي المقطر بالبخار لمصانع التجميل ومصنّعي العلامات الخاصة — مع تقييم نسبة الزيت العطري المذاب، الفحوصات الميكروبيولوجية، نظام الحفظ وشحن البراميل أو خزانات IBC.',
      cardSummary: 'ماء زهور Rosa damascena أصلي مقطر بالبخار في براميل وخزانات IBC للتونر، بخاخات الوجه والمستحلبات التجميلية.',
      specs: [
        ['درجة المقطر الزهري', 'ماء زهور Rosa damascena مقطر بالبخار بنسبة 100% (خالٍ من العطور الاصطناعية المعاد تركيبها)'],
        ['المعايير الفنية', 'نطاق pH مضبوط، نسبة زيت الورد المذاب طبيعياً، شهادة COA ميكروبيولوجية (TAMC/TYMC) وخيارات خالية من المواد الحافظة أو محفوظة'],
        ['التعبئة الصناعية', 'جراكن HDPE سعة 20–30 لتر، براميل تجميلية سعة 200 لتر وخزانات IBC سعة 1000 لتر'],
        ['ملف الامتثال', 'شهادة COA للدفعة، تقرير الفحص الميكروبيولوجي، SDS، تفصيل مكونات INCI وشهادات التصدير']
      ],
      applications: [
        'تونر الوجه، بخاخات الترطيب (Face Mist) ومياه الميسيلار',
        'بديل نباتي للطور المائي في الكريمات، السيرومات والمستحلبات',
        'سوائل الأقنعة الورقية (Sheet Masks)، المناديل المبللة والمنظفات اللطيفة',
        'تونيك تهدئة فروة الرأس، بخاخات الشعر ومنتجات العناية بالجسم'
      ],
      rfqChecklist: [
        'حالة الحفظ (مفلتر معقم بدون مواد حافظة أو مزود بنظام حفظ تجميلي معتمد)',
        'النسبة المستهدفة للزيت العطري المتبقي وشدة الرائحة المطلوبة',
        'الكمية لكل شحنة، نوع العبوة (جركن، برميل 200 لتر أو خزان IBC) ودورية التوريد',
        'ميناء/مستودع الوصول ومتطلبات الاستيراد والتسجيل التجميلي'
      ],
      faq: [
        ['ما الفرق بين هيدروسول الورد الحقيقي وماء الورد المعاد تركيبه؟', 'هيدروسول الورد الحقيقي هو المقطر المائي الناتج مباشرة عن التقطير بالبخار لبتلات Rosa damascena الطازجة، وليس ماءً منزوع الأيونات مضافاً إليه عطر مذاب. نحدد في طلبات RFQ الهيدروسول التقطيري الأصلي وفق مواصفاتكم.'],
        ['هل يمكن الشحن دولياً في براميل 200 لتر أو خزانات IBC سعة 1000 لتر؟', 'نعم، لمصانع مستحضرات التجميل ننسّق شحن البراميل وخزانات IBC المحملة على طبليات عبر النقل البري أو البحري.'],
        ['كيف تتم إدارة الثبات الميكروبيولوجي أثناء الشحن بالجملة؟', 'يمكن للمشتري طلب دفعات خاضعة للترشيح الدقيق في عبوات محكمة الإغلاق أو اختيار أنظمة حفظ تجميلية متوافقة مع لوائح سوق الوجهة.']
      ]
    },
    'lavender-water-hydrosol': {
      name: 'توريد ماء الخزامى وهيدروسول اللافندر B2B',
      metaTitle: 'توريد هيدروسول الخزامى والمياه الزهرية بالجملة B2B | CTSEG',
      description: 'توريد B2B من تركيا لماء زهور الخزامى المقطر بالبخار (هيدروسول اللافندر) لتصنيع منتجات العناية بالبشرة والشعر ومستحضرات التجميل الطبيعية.',
      eyebrow: 'CTSEG · الهيدروسولات والمياه الزهرية',
      botanicalName: 'INCI: Lavandula Angustifolia Flower Water / Lavandula Hybrida Flower Water',
      lead: 'ننسّق التوريد بالجملة لماء زهور الخزامى المقطر بالبخار لمختبرات التركيب ومصانع العناية الشخصية — مع مراجعة المصدر النباتي، النقاء الميكروبيولوجي، ثبات الرقم الهيدروجيني (pH) وخيارات التعبئة من الجراكن إلى خزانات IBC سعة 1000 لتر.',
      cardSummary: 'هيدروسول الخزامى المقطر بالبخار للتونر المنقّي، مستحضرات التهدئة، منتجات العناية بالطفل والطور المائي النباتي.',
      specs: [
        ['طريقة الإنتاج', 'مقطر زهري مائي نقي يتم جمعه أثناء التقطير بالبخار لقمم زهور الخزامى'],
        ['ضبط الجودة', 'التحقق من درجة pH لكل دفعة، الصفاء، المركبات العطرية الطبيعية وشهادة COA الميكروبيولوجية'],
        ['التعبئة بالجملة', 'جراكن HDPE سعة 20 / 25 لتر، براميل 200 لتر وخزانات IBC سعة 1000 لتر'],
        ['الوثائق الفنية', 'COA، TDS، صحيفة بيانات السلامة SDS/MSDS، إقرار مسببات الحساسية ووثائق التصدير الجمركية']
      ],
      applications: [
        'تونر الوجه القابض للمسام والموازن للإفرازات الدهنية',
        'بخاخات التبريد بعد التعرض للشمس (After-Sun) والجل المهدئ',
        'طور مائي لطيف لمستحضرات العناية بالأطفال والبشرة الحساسة',
        'لوشن فروة الرأس، الشامبو العشبي وبخاخات تعطير المفارش والأقمشة'
      ],
      rfqChecklist: [
        'تفضيل المصدر النباتي (مقطر Lavandula angustifolia أو اللافندين)',
        'مواصفات المادة الحافظة والحدود الميكروبيولوجية المطلوبة',
        'شكل التعبئة (جركن HDPE، برميل أو خزان IBC) وإجمالي الكمية باللتر/كغ',
        'عنوان استلام العينات وشرط التسليم Incoterm المفضل'
      ],
      faq: [
        ['كيف يُستخدم هيدروسول الخزامى في تصنيع مستحضرات التجميل؟', 'يستخدم خبراء التركيب هيدروسول الخزامى بنسبة 10% إلى 100% من الطور المائي في التونر، الجل، المستحلبات والغسول لمنح رائحة عشبية طبيعية وخصائص مهدئة للبشرة.'],
        ['كيف تضمنون ثبات الجودة بين الدفعات المختلفة؟', 'يتم ربط كل طلب بدفعات تقطير موثقة بشهادة COA شاملة (pH، الخصائص الحسية والميكروبيولوجية) مع توفير عينات ما قبل الشحن للاعتماد المخبري.'],
        ['ما هو الحد الأدنى لكمية الطلب (MOQ)؟', 'يعتمد الحد الأدنى للطلب على نوع التعبئة المختار (جراكن، براميل 200 لتر أو خزانات IBC سعة 1000 لتر) ويتم تأكيده أثناء دراسة طلب عرض السعر (RFQ).']
      ]
    },
    'botanical-carrier-oils': {
      name: 'توريد الزيوت النباتية الناقلة والأساسية (Carrier Oils) B2B',
      metaTitle: 'توريد الزيوت النباتية الناقلة وزيوت الأساس التجميلية بالجملة | CTSEG',
      description: 'توريد B2B للزيوت النباتية الناقلة المعصورة على البارد والمكررة (اللوز الحلو، الجوجوبا، ثمر الورد، بذور العنب، نوى المشمش، بذور الرمان) لمصانع التجميل.',
      eyebrow: 'CTSEG · الزيوت الثابتة والناقلة',
      botanicalName: 'زيوت نباتية تجميلية معصورة على البارد (Virgin) ومكررة',
      lead: 'تنسّق CTSEG المشتريات B2B للزيوت النباتية الثابتة والناقلة المعصورة على البارد والمكررة لمختبرات التجميل، علامات العناية بالبشرة وموزعي المواد الخام — مع التحقق من تركيب الأحماض الدهنية (FAME)، رقم البيروكسيد، الحموضة وتعبئة التصدير.',
      cardSummary: 'زيوت نباتية معصورة على البارد ومكررة — اللوز الحلو، نوى المشمش، بذور العنب، ثمر الورد، الرمان والجوجوبا — لتركيبات B2B.',
      specs: [
        ['محفظة الزيوت الرئيسية', 'زيت اللوز الحلو، نوى المشمش، بذور العنب، ثمر الورد (Rosehip)، بذور الرمان، الجوجوبا، الأرغان، الحبة السوداء، السمسم والبندق'],
        ['درجات المعالجة', 'معصور على البارد غير مكرر (Virgin) ودرجات تجميلية مكررة/مزالة الرائحة (Refined/Deodorized)'],
        ['الفحوصات التحليلية', 'تركيب الأحماض الدهنية بواسطة GC (FAME)، الأحماض الدهنية الحرة، رقم البيروكسيد، الرقم اليودي ومعامل الانكسار (COA)'],
        ['التعبئة بالجملة', 'عبوات HDPE/معدنية 20–25 كغ، براميل 190 كغ وخزانات IBC']
      ],
      applications: [
        'سيرومات الوجه الزيتية، كريمات ترميم الحاجز الدهني والبلسم الخالي من الماء',
        'زيوت تغذية الشعر، علاجات تقصف الأطراف وتركيبات العناية بفروة الرأس',
        'قواعد ناقلة لتخفيف الزيوت العطرية وزيوت التدليك الاحترافية',
        'مستحضرات الوقاية من الشمس، مرطبات الشفاه، زيوت التنظيف وقواعد الصابون الطبيعي'
      ],
      rfqChecklist: [
        'الزيت أو الزيوت النباتية المطلوبة مع اسم INCI ورقم CAS',
        'درجة المعالجة (معصور على البارد Virgin مقابل مكرر/مزال الرائحة)',
        'الحدود القصوى لرقم البيروكسيد/الحموضة وملف الأحماض الدهنية المطلوب',
        'حجم الطلب، سعة العبوة وشروط التسليم للوجهة'
      ],
      faq: [
        ['هل نختار الزيوت المعصورة على البارد أم المكررة لتركيباتنا؟', 'تحتفظ الزيوت المعصورة على البارد بالتوكوفيرول والفيتوستيرول الطبيعي للسيرومات الفعالة، بينما توفر الدرجات المكررة لوناً ورائحة محايدة وثباتاً تأكسدياً عالياً للمستحلبات. نوفر الخيارين حسب متطلبات البحث والتطوير لديكم.'],
        ['هل يمكن تجميع عدة زيوت ناقلة وزيوت عطرية في شحنة واحدة؟', 'نعم، تنسّق CTSEG طلبات التوريد متعددة الأصناف بحيث يمكن دمج الزيوت الناقلة والزيوت العطرية والهيدروسولات في شحنة تصدير موحدة.'],
        ['كيف تتم حماية الثبات التأكسدي قبل الشحن؟', 'نتحقق من حداثة تاريخ الإنتاج ورقم البيروكسيد والحموضة في شهادة COA للدفعة، مع تنسيق التعبئة في عبوات معتمة محكمة الإغلاق.']
      ]
    },
    'botanical-extracts': {
      name: 'توريد المستخلصات النباتية والمواد الخام الفعالة للتجميل B2B',
      metaTitle: 'المستخلصات النباتية والمكونات الفعالة لمستحضرات التجميل بالجملة | CTSEG',
      description: 'توريد B2B للمستخلصات النباتية الهيدروغليسيرينية، الغليكولية، الذائبة في الزيت والمساحيق الجافة لمصنّعي العناية بالبشرة والشعر والدرموكوزمتيك.',
      eyebrow: 'CTSEG · المستخلصات النباتية والمواد الفعالة',
      botanicalName: 'مستخلصات هيدروغليسيرينية، بروبانديول، منقوعات زيتية ومستخلصات جافة معايرة',
      lead: 'نساعد علامات الدرموكوزمتيك، مصانع التصنيع التعاقدي ومختبرات التطوير في تأمين المستخلصات النباتية السائلة والمساحيق — مع مطابقة المذيب الحامل، نسبة النبات إلى المستخلص (DER)، نظام الحفظ والملفات الفنية الدولية.',
      cardSummary: 'مستخلصات غليسيرين ذائبة في الماء، مستخلصات بروبانديول، منقوعات زيتية ومستخلصات جافة معايرة لصناعة مستحضرات التجميل.',
      specs: [
        ['خيارات الحامل والشكل', 'ماء/غليسيرين (Hydroglyceric)، 1،3-بروبانديول، بروبيلين/بوتيلين غليكول، مستخلصات زيتية ومساحيق مجففة بالرش'],
        ['النطاق النباتي', 'السنتيلا، البابونج، الكاليندولا (الأذريون)، الشاي الأخضر، عرق السوس، الورد، الخزامى، إكليل الجبل، اللبلاب، كستناء الحصان ونباتات الأناضول'],
        ['الملف الفني', 'TDS، شهادة COA للدفعة، SDS، تفصيل نسب مكونات INCI الكامل، نظام الحفظ ونسب الاستخدام الموصى بها'],
        ['التعبئة الصناعية', 'عبوات تجميلية سعة 1 كغ، 5 كغ، 10 كغ و25 كغ أو براميل مبطنة برقائق الألومنيوم للمساحيق']
      ],
      applications: [
        'سيرومات وأمبولات الوجه للتفتيح والتهدئة ومقاومة الأكسدة',
        'تونيك فروة الرأس لمكافحة تساقط الشعر والشامبو والبلسم العشبي',
        'جل محيط العين، خلاصات الأقنعة الورقية ومستحلبات الدرموكوزمتيك',
        'لوشن العناية بالجسم، مستحضرات ما بعد الحلاقة المهدئة والمنظفات اللطيفة'
      ],
      rfqChecklist: [
        'النوع النباتي (الاسم العلمي اللاتيني) والشكل الفيزيائي (سائل أو مسحوق جاف)',
        'المذيب الحامل المفضل (غليسيرين، بروبانديول، زيت ناقل) وقيود المواد الحافظة',
        'نسبة الاستخلاص المستهدفة (DER) أو مواصفة المركب الفعال',
        'كمية العينة، حجم الطلب التجاري والمتطلبات التنظيمية لسوق الوجهة'
      ],
      faq: [
        ['هل يمكن طلب مستخلصات محمولة على بروبانديول أو غليسيرين خالٍ من زيت النخيل؟', 'نعم، خلال مراجعة طلب RFQ نقوم بمواءمة نظام المذيب الحامل والحفظ مع متطلبات تركيبتكم الطبيعية أو الخالية من الماء.'],
        ['هل تقدمون تفصيلاً كاملاً لنسب INCI لتقييمات سلامة مستحضرات التجميل (CPSR)؟', 'نعم، تُدعم الدفعات المؤهلة بملفات TDS وCOA وSDS وتفصيل نسب INCI المطلوب لملفات السلامة والتسجيل.'],
        ['هل يمكن توفير مركبات نباتية مدمجة من عدة أعشاب؟', 'بالنسبة للأحجام التجارية B2B، يمكن تقييم خلطات مستخلصات متعددة النباتات مخصصة لتطبيقات الشعر أو البشرة بالتعاون مع معامل الاستخلاص الشريكة.']
      ]
    },
    'other-essential-oils': {
      name: 'زيوت عطرية أخرى (نباتات الأناضول والبحر الأبيض المتوسط)',
      metaTitle: 'توريد زيوت الأوريغانو، ورق الغار، إكليل الجبل والحمضيات B2B | CTSEG',
      description: 'توريد B2B من تركيا للزيوت العطرية من الأوريغانو، الزعتر، ورق الغار، إكليل الجبل، الميرمية، النعناع، الأوكالبتوس والحمضيات مع تحقق GC-MS.',
      eyebrow: 'CTSEG · الزيوت العطرية والنباتات الطبية',
      botanicalName: 'Origanum, Thymus, Laurus nobilis, Rosmarinus, Salvia, Mentha & Citrus Oils',
      lead: 'إلى جانب الورد والخزامى، تُعد تركيا مصدراً رئيسياً للنباتات العطرية المتوسطية والأناضولية. تنسّق CTSEG التوريد B2B لزيوت الأوريغانو (الكارفاكرول)، الزعتر، ورق الغار، إكليل الجبل، الميرمية، النعناع، العرعر والحمضيات مع التحقق من النمط الكيميائي (Chemotype).',
      cardSummary: 'زيوت عطرية مفحوصة بـ GC-MS من الأوريغانو، الزعتر، ورق الغار، إكليل الجبل، الميرمية، النعناع والحمضيات لتطبيقات B2B.',
      specs: [
        ['الزيوت العطرية الرئيسية', 'زيت الأوريغانو (Origanum)، الزعتر (Thymus)، ورق الغار (Laurus nobilis)، إكليل الجبل، الميرمية، النعناع الفلفلي، الأوكالبتوس، خشب الأرز وزيوت الحمضيات'],
        ['فحص النمط الكيميائي', 'تحليل GC-MS للدفعة يؤكد نسب المركبات المرجعية مثل الكارفاكرول، الثيمول، 1,8-سينيول، المنثول، الكافور والليمونين'],
        ['التعبئة بالجملة', 'عبوات ألومنيوم وجراكن معتمدة من UN سعة 1–25 كغ وبراميل فولاذية سعة 180 كغ'],
        ['التصدير واللوائح', 'صحيفة SDS متوافقة مع GHS/CLP (شاملة القسم 14 لتصنيف النقل)، شهادة IFRA، بيان مسببات الحساسية وشهادات المنشأ']
      ],
      applications: [
        'شامبو تنقية فروة الرأس، الصابون العشبي ومنتجات العناية الشخصية',
        'تركيبات العناية بالفم والأسنان (غسول الفم ومعاجين الأسنان بالنعناع والميرمية والزعتر)',
        'جل التدليك الرياضي، مراهم الاسترخاء وخلطات الاستنشاق العطرية',
        'تركيبات العطور الطبيعية، مستحضرات التجميل الوظيفية والتطبيقات الصناعية B2B'
      ],
      rfqChecklist: [
        'الاسم العلمي اللاتيني الدقيق للنبات، الجزء المقطر والنمط الكيميائي المطلوب',
        'الحد الأدنى لنسبة المركب الفعال (مثل كارفاكرول +70% في زيت الأوريغانو أو 1,8-سينيول في زيت الغار)',
        'الكمية المستهدفة، تفضيل التعبئة المعتمدة من UN والحاجة إلى تقييم عينة',
        'ميناء/مطار الوصول وتنسيق شحن البضائع الخطرة (DG) عند الاقتضاء'
      ],
      faq: [
        ['كيف يتم التحقق من نسبة الكارفاكرول في زيت الأوريغانو أو 1,8-سينيول في زيت ورق الغار؟', 'يتم فحص كل دفعة معروضة عبر تحليل كروماتوغرافيا GC-MS ليتمكن المشتري من مراجعة النسب الدقيقة قبل اعتماد عينة ما قبل الشحن.'],
        ['كيف يتم التعامل مع قواعد شحن البضائع الخطرة (DG) للزيوت العطرية؟', 'نراجع القسم 14 من صحيفة SDS منذ بداية طلب عرض السعر (RFQ) لترتيب عبوات معتمدة بأرقام UN وشحن جوي أو بحري أو بري متوافق.'],
        ['هل يمكن دمج عدة زيوت عطرية أناضولية في طلب عرض سعر (RFQ) واحد؟', 'نعم، يرسل المشترون غالباً طلبات RFQ مجمّعة تشمل زيوت الورد، الخزامى، الأوريغانو، الغار، إكليل الجبل والزيوت الناقلة في عملية توريد موحدة.']
      ]
    }
  }
};
