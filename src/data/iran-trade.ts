import type { Locale } from './site';

type IranTradeCopy = {
  slug:string;
  eyebrow:string;
  title:string;
  description:string;
  directAnswerTitle:string;
  directAnswer:string;
  inboundTitle:string;
  inboundLead:string;
  inboundItems:string[];
  outboundTitle:string;
  outboundLead:string;
  outboundItems:string[];
  complianceTitle:string;
  complianceText:string;
  processTitle:string;
  process:string[];
  faq:{question:string;answer:string}[];
  ctaTitle:string;
  ctaText:string;
  ctaLabel:string;
};

const en: IranTradeCopy = {
  slug:'iran-turkiye-europe-trade',
  eyebrow:'Türkiye ⇄ Iran Trade Corridor',
  title:'Structured sourcing between Türkiye, Iran and European markets',
  description:'CTSEG coordinates specification-led B2B sourcing for selected medical consumables, feed inputs, industrial components and compliant Iranian-origin food products. Availability, sanctions exposure, customs, licences and counterparty eligibility are verified per RFQ.',
  directAnswerTitle:'What can CTSEG source across the Türkiye–Iran corridor?',
  directAnswer:'CTSEG can coordinate sourcing assessments for selected healthcare consumables, pharmaceutical production inputs, feed ingredients, industrial maintenance items, power-continuity equipment and food-industry inputs for Iranian buyers. In the reverse direction, CTSEG can assess export-ready Iranian food and agricultural products for Türkiye and eligible European markets. Every transaction remains subject to product classification, sanctions screening, customs rules, permits, banking feasibility and destination-market compliance.',
  inboundTitle:'Selected products for sourcing into Iran',
  inboundLead:'These categories are handled on an RFQ basis. Stock, manufacturer, origin, technical specification, documentation and delivery route are confirmed before any commercial commitment.',
  inboundItems:[
    '10 ml disposable syringes',
    'IV cannulas and related infusion consumables',
    'Sterile gauze, dressings and wound-care consumables',
    'Nitrile examination gloves',
    'Latex examination gloves',
    'Glucose-monitoring consumables and eligible diagnostic supplies',
    'Pharmaceutical APIs and excipients, subject to regulatory eligibility',
    'Pharmaceutical blister foil and primary packaging materials',
    'Pharmaceutical-grade HDPE/PET bottles, caps and containers',
    'Feed-grade corn',
    'Soybean meal and protein feed inputs',
    'L-Lysine feed grade',
    'L-Threonine feed grade',
    'DL-Methionine feed grade',
    'Vitamin and mineral premixes for animal nutrition',
    'Sunflower oil and selected unbranded vegetable oils, subject to origin, specification and import eligibility',
    'Industrial MCCBs, breakers and eligible low-voltage components',
    'Online UPS systems, typically 5–20 kVA',
    'Eligible solar inverters and power-continuity components',
    'Industrial bearings, seals and mechanical seals',
    'Pumps, valves, filters, hoses and industrial fittings'
  ],
  outboundTitle:'Iranian-origin products for Türkiye and eligible European markets',
  outboundLead:'Iranian-origin products are assessed only after supplier verification and destination-market compliance review. For food products, laboratory, traceability, pesticide, microbiology and aflatoxin requirements may apply.',
  outboundItems:[
    'Premium Iranian saffron',
    'Iranian pistachios and pistachio kernels',
    'Dates, including Mazafati and other commercial varieties',
    'Zereshk / dried barberries',
    'Raisins and golden raisins',
    'Dried mulberries',
    'Pomegranate juice concentrate and selected fruit concentrates',
    'Date paste and date syrup',
    'Rose water, dried rose buds and eligible botanical ingredients',
    'Dried aromatic and culinary herbs',
    'Almonds, walnuts and selected nut products',
    'Selected dried fruits and food-industry ingredients'
  ],
  complianceTitle:'Sanctions, customs and compliance are checked before quotation',
  complianceText:'CTSEG does not treat Iran trade as automatically permitted or automatically prohibited. Product HS/GTIP classification, origin, end use, counterparty screening, sanctions exposure, customs treatment, required certificates, banking route and destination-market rules are reviewed before execution. Medical, pharmaceutical, electrical and food categories may require additional licences or conformity documentation.',
  processTitle:'How the corridor is qualified',
  process:[
    'Define product, specification, quantity, delivery point and target date',
    'Verify supplier/manufacturer, origin, capacity and available documents',
    'Screen product classification, counterparties, sanctions exposure and regulatory requirements',
    'Compare quotation, logistics, payment feasibility and landed-cost structure',
    'Proceed only after the commercial and compliance path is workable'
  ],
  faq:[
    {question:'Can CTSEG guarantee that every listed product can be shipped to Iran?',answer:'No. The list represents sourcing categories that CTSEG can assess and coordinate. Actual supply depends on stock, manufacturer approval, export controls, sanctions screening, customs requirements, payment feasibility and destination-specific rules.'},
    {question:'Can Iranian food products be sold in Türkiye or Europe?',answer:'Potentially, yes, when the product, supplier, documentation and transaction are eligible. Food imports may require laboratory testing, traceability, phytosanitary or health documentation, pesticide and aflatoxin controls and destination-specific importer compliance.'},
    {question:'Does CTSEG work with Iranian producers as well as buyers?',answer:'Yes. CTSEG can evaluate both buyer-side sourcing requests and producer-side market-entry opportunities, while keeping the commercial role, evidence and compliance requirements transparent.'}
  ],
  ctaTitle:'Submit a Türkiye–Iran trade requirement',
  ctaText:'Share the product, specification, quantity, origin preference, destination and target timing. CTSEG will first assess whether a commercially and legally workable sourcing route exists.',
  ctaLabel:'Submit commercial RFQ'
};

export const iranTradeContent: Record<Locale, IranTradeCopy> = {
  en,
  tr:{
    slug:'iran-turkiye-ticaret',
    eyebrow:'Türkiye ⇄ İran Ticaret Koridoru',
    title:'Türkiye, İran ve Avrupa arasında kontrollü B2B tedarik ve ticaret',
    description:'CTSEG; seçili medikal sarf, yem girdileri, endüstriyel bileşenler ve İran menşeli uygun gıda ürünlerinde spesifikasyon bazlı B2B tedarik koordinasyonu yürütür. Stok, yaptırım riski, gümrük, izinler ve taraf uygunluğu her RFQ için ayrıca doğrulanır.',
    directAnswerTitle:'CTSEG Türkiye–İran hattında hangi ürünleri tedarik edebilir?',
    directAnswer:'CTSEG, İranlı alıcılar için seçili sağlık sarfları, ilaç üretim girdileri, yem hammaddeleri, endüstriyel bakım ürünleri, enerji sürekliliği ekipmanları ve gıda sanayisi girdilerinde tedarik araştırması ve ticari koordinasyon yapabilir. Ters yönde ise İran menşeli gıda ve tarım ürünlerinin Türkiye ve uygun Avrupa pazarlarına satışa hazırlığını değerlendirebilir. Her işlem GTİP sınıflandırması, yaptırım taraması, gümrük mevzuatı, izinler, ödeme kanalı ve hedef pazar uygunluğuna tabidir.',
    inboundTitle:'İran pazarı için değerlendirdiğimiz tedarik kategorileri',
    inboundLead:'Aşağıdaki kalemler RFQ bazında değerlendirilir. Ticari taahhüt öncesinde stok, üretici, menşe, teknik şartname, belge seti ve teslim rotası doğrulanır.',
    inboundItems:[
      '10 ml tek kullanımlık enjektör',
      'IV kanül / branül ve ilgili infüzyon sarfları',
      'Steril gazlı bez, pansuman ve yara bakım sarfları',
      'Nitril muayene eldiveni',
      'Lateks muayene eldiveni',
      'Glukoz ölçüm sarfları ve uygun tanı sarfları',
      'Mevzuata uygunluk şartıyla farmasötik API ve yardımcı maddeler',
      'İlaç blister folyosu ve birincil ambalaj malzemeleri',
      'Farmasötik sınıf HDPE/PET şişe, kapak ve ambalaj',
      'Yemlik mısır',
      'Soya küspesi ve protein bazlı yem girdileri',
      'L-Lysine Feed Grade',
      'L-Threonine Feed Grade',
      'DL-Methionine Feed Grade',
      'Hayvan besleme için vitamin-mineral premiksleri',
      'Ayçiçek yağı ve seçili markasız bitkisel yağlar; menşe, spesifikasyon ve ithalat uygunluğu ayrıca doğrulanır',
      'Endüstriyel MCCB, devre kesici ve uygun alçak gerilim bileşenleri',
      'Online UPS sistemleri, tipik olarak 5–20 kVA',
      'Uygun solar inverter ve enerji sürekliliği bileşenleri',
      'Endüstriyel rulman, conta ve mekanik salmastra',
      'Pompa, vana, filtre, hortum ve endüstriyel bağlantı elemanları'
    ],
    outboundTitle:'İran’dan Türkiye ve uygun Avrupa pazarlarına değerlendirilebilecek ürünler',
    outboundLead:'İran menşeli ürünler, tedarikçi doğrulaması ve hedef pazar mevzuat kontrolü sonrasında değerlendirilir. Gıda ürünlerinde laboratuvar, izlenebilirlik, pestisit, mikrobiyoloji ve aflatoksin gereklilikleri gündeme gelebilir.',
    outboundItems:[
      'Premium İran safranı',
      'İran fıstığı ve fıstık içi',
      'Mazafati dahil ticari hurma çeşitleri',
      'Zereşk / kurutulmuş barberry',
      'Kuru üzüm ve altın kuru üzüm',
      'Kuru dut',
      'Nar suyu konsantresi ve seçili meyve konsantreleri',
      'Hurma ezmesi ve hurma şurubu',
      'Gül suyu, kurutulmuş gül tomurcuğu ve uygun botanik hammaddeler',
      'Kurutulmuş aromatik ve mutfak bitkileri',
      'Badem, ceviz ve seçili kuruyemiş ürünleri',
      'Seçili kuru meyveler ve gıda sanayisi hammaddeleri'
    ],
    complianceTitle:'Tekliften önce yaptırım, gümrük ve mevzuat kontrolü',
    complianceText:'CTSEG, İran ticaretini otomatik olarak serbest veya otomatik olarak yasak kabul etmez. Ürünün GTİP/HS sınıflandırması, menşei, kullanım amacı, tarafların yaptırım listesi taraması, gümrük uygulaması, gerekli sertifikalar, ödeme kanalı ve hedef ülke kuralları işlem öncesinde değerlendirilir. Medikal, farmasötik, elektrik ve gıda kategorilerinde ek izin veya uygunluk belgeleri gerekebilir.',
    processTitle:'Ticaret koridorunu nasıl doğruluyoruz?',
    process:[
      'Ürün, teknik şartname, miktar, teslim noktası ve hedef tarih netleştirilir',
      'Tedarikçi/üretici, menşe, kapasite ve mevcut belgeler doğrulanır',
      'GTİP, taraflar, yaptırım riski ve mevzuat gereklilikleri taranır',
      'Teklif, lojistik, ödeme uygulanabilirliği ve toplam maliyet karşılaştırılır',
      'Yalnızca ticari ve hukuki yol uygulanabilir olduğunda ilerlenir'
    ],
    faq:[
      {question:'Listelenen her ürünün İran’a sevkiyatını CTSEG garanti ediyor mu?',answer:'Hayır. Liste, CTSEG’in araştırıp koordine edebileceği tedarik kategorilerini gösterir. Gerçek tedarik; stok, üretici onayı, ihracat kontrolleri, yaptırım taraması, gümrük şartları, ödeme kanalı ve hedef ülke kurallarına bağlıdır.'},
      {question:'İran menşeli gıda ürünleri Türkiye veya Avrupa’ya satılabilir mi?',answer:'Ürün, tedarikçi, belge seti ve işlem uygun olduğunda mümkün olabilir. Gıda ithalatında laboratuvar analizi, izlenebilirlik, bitki sağlığı veya sağlık belgeleri, pestisit ve aflatoksin kontrolleri ile ithalatçı yükümlülükleri uygulanabilir.'},
      {question:'CTSEG hem İranlı alıcılarla hem İranlı üreticilerle çalışır mı?',answer:'Evet. CTSEG hem alıcı tarafındaki tedarik taleplerini hem de üretici tarafındaki pazara giriş fırsatlarını değerlendirebilir; ticari rol, doğrulama kriterleri ve uyum gereklilikleri açık şekilde tanımlanır.'}
    ],
    ctaTitle:'Türkiye–İran ticaret talebinizi gönderin',
    ctaText:'Ürünü, teknik özellikleri, miktarı, tercih edilen menşei, teslim ülkesini ve hedef tarihi paylaşın. CTSEG önce ticari ve hukuki açıdan uygulanabilir bir tedarik rotası olup olmadığını değerlendirir.',
    ctaLabel:'Ticari RFQ gönder'
  },
  fa:{
    slug:'تجارت-ایران-ترکیه',
    eyebrow:'کریدور تجاری ایران ⇄ ترکیه',
    title:'تأمین و تجارت B2B ساختاریافته میان ایران، ترکیه و بازارهای واجد شرایط اروپا',
    description:'CTSEG برای اقلام منتخب پزشکی مصرفی، نهاده‌های خوراک دام و طیور، قطعات صنعتی و محصولات غذایی واجد شرایط با منشأ ایران، خدمات تأمین و هماهنگی تجاری مبتنی بر مشخصات فنی ارائه می‌دهد. موجودی، ریسک تحریم، الزامات گمرکی، مجوزها و صلاحیت طرف‌های معامله برای هر RFQ به‌صورت مستقل بررسی می‌شود.',
    directAnswerTitle:'CTSEG در مسیر تجاری ایران و ترکیه چه کالاهایی را می‌تواند بررسی و تأمین کند؟',
    directAnswer:'CTSEG می‌تواند برای خریداران ایرانی، تأمین اقلام منتخب مصرفی پزشکی، مواد اولیه و ملزومات تولید دارویی، نهاده‌های خوراک دام و طیور، قطعات نگهداری صنعتی، تجهیزات تداوم برق و ورودی‌های صنایع غذایی را بررسی و هماهنگ کند. در جهت معکوس نیز امکان‌سنجی صادرات محصولات غذایی و کشاورزی ایران به ترکیه و بازارهای واجد شرایط اروپا انجام می‌شود. هر معامله منوط به طبقه‌بندی صحیح HS/GTIP، غربالگری تحریم‌ها، مقررات گمرکی، مجوزهای لازم، امکان‌پذیری مسیر پرداخت و الزامات بازار مقصد است.',
    inboundTitle:'گروه‌های منتخب قابل بررسی برای تأمین به مقصد ایران',
    inboundLead:'موارد زیر صرفاً بر مبنای RFQ بررسی می‌شوند. پیش از هر تعهد تجاری، موجودی، تولیدکننده، کشور مبدأ، مشخصات فنی، مدارک و مسیر تحویل تأیید می‌شود.',
    inboundItems:[
      'سرنگ یک‌بارمصرف ۱۰ میلی‌لیتر',
      'آنژیوکت / کانول و ملزومات مرتبط تزریق و انفوزیون',
      'گاز استریل، پانسمان و ملزومات مراقبت از زخم',
      'دستکش معاینه نیتریل',
      'دستکش معاینه لاتکس',
      'ملزومات پایش قند خون و اقلام تشخیصی واجد شرایط',
      'مواد مؤثره دارویی (API) و مواد جانبی دارویی، مشروط به احراز الزامات قانونی',
      'فویل بلیستر و مواد بسته‌بندی اولیه دارویی',
      'بطری، درپوش و ظروف HDPE/PET گرید دارویی',
      'ذرت دامی',
      'کنجاله سویا و نهاده‌های پروتئینی خوراک دام و طیور',
      'ال-لیزین گرید خوراک دام (L-Lysine Feed Grade)',
      'ال-ترئونین گرید خوراک دام (L-Threonine Feed Grade)',
      'دی‌ال-متیونین گرید خوراک دام (DL-Methionine Feed Grade)',
      'پرمیکس‌های ویتامینی و معدنی تغذیه دام و طیور',
      'روغن آفتابگردان و روغن‌های گیاهی منتخب بدون برند؛ مبدأ، مشخصات فنی و امکان واردات برای هر درخواست جداگانه بررسی می‌شود',
      'کلید اتوماتیک MCCB، بریکر و تجهیزات مجاز فشار ضعیف',
      'سیستم‌های UPS آنلاین، معمولاً در بازه ۵ تا ۲۰ kVA',
      'اینورترهای خورشیدی واجد شرایط و تجهیزات تداوم برق',
      'بلبرینگ و رولبرینگ صنعتی، آب‌بند و مکانیکال‌سیل',
      'پمپ، شیرآلات صنعتی، فیلتر، شیلنگ و اتصالات صنعتی'
    ],
    outboundTitle:'محصولات ایرانی قابل ارزیابی برای بازار ترکیه و بازارهای واجد شرایط اروپا',
    outboundLead:'محصولات با منشأ ایران تنها پس از احراز هویت و توان تأمین‌کننده و بررسی مقررات بازار مقصد ارزیابی می‌شوند. در مواد غذایی ممکن است آزمون آزمایشگاهی، رهگیری، حدود باقیمانده سموم، میکروبیولوژی و آفلاتوکسین الزامی باشد.',
    outboundItems:[
      'زعفران ممتاز ایران',
      'پسته ایران و انواع مغز پسته',
      'انواع خرما، از جمله مضافتی و ارقام تجاری دیگر',
      'زرشک خشک صادراتی',
      'کشمش و کشمش طلایی',
      'توت خشک',
      'کنسانتره آب انار و برخی کنسانتره‌های میوه',
      'خمیر خرما و شیره خرما',
      'گلاب، غنچه گل خشک و مواد اولیه گیاهی واجد شرایط',
      'گیاهان معطر و خوراکی خشک',
      'بادام، گردو و محصولات منتخب خشکبار',
      'میوه‌های خشک منتخب و مواد اولیه صنایع غذایی'
    ],
    complianceTitle:'بررسی تحریم، گمرک و انطباق پیش از ارائه پیشنهاد تجاری',
    complianceText:'CTSEG تجارت با ایران را نه به‌صورت خودکار مجاز و نه به‌صورت خودکار ممنوع تلقی می‌کند. طبقه‌بندی HS/GTIP، مبدأ کالا، مصرف نهایی، غربالگری طرف‌های معامله در برابر فهرست‌های تحریمی، رویه گمرکی، گواهی‌های لازم، امکان‌پذیری مسیر بانکی/پرداخت و مقررات کشور مقصد پیش از اجرا بررسی می‌شود. گروه‌های پزشکی، دارویی، برقی و غذایی ممکن است به مجوزها یا مدارک انطباق تکمیلی نیاز داشته باشند.',
    processTitle:'مسیر تجاری چگونه ارزیابی و تأیید می‌شود؟',
    process:[
      'کالا، مشخصات فنی، مقدار، محل تحویل و زمان هدف مشخص می‌شود',
      'تأمین‌کننده یا تولیدکننده، مبدأ، ظرفیت و مدارک موجود بررسی می‌شود',
      'طبقه‌بندی کالا، طرف‌های معامله، ریسک تحریم و الزامات قانونی غربالگری می‌شود',
      'قیمت، لجستیک، امکان پرداخت و هزینه نهایی مقایسه می‌شود',
      'تنها در صورت وجود مسیر تجاری و حقوقی قابل اجرا، معامله وارد مرحله بعد می‌شود'
    ],
    faq:[
      {question:'آیا CTSEG ارسال تمام کالاهای فهرست‌شده به ایران را تضمین می‌کند؟',answer:'خیر. این فهرست نشان‌دهنده گروه‌های کالایی است که CTSEG می‌تواند برای آن‌ها تأمین و هماهنگی را بررسی کند. تأمین واقعی به موجودی، تأیید تولیدکننده، کنترل‌های صادراتی، غربالگری تحریم، شرایط گمرکی، امکان پرداخت و مقررات مقصد بستگی دارد.'},
      {question:'آیا محصولات غذایی ایران را می‌توان به ترکیه یا اروپا صادر کرد؟',answer:'در صورت واجد شرایط بودن کالا، تأمین‌کننده، مدارک و ساختار معامله، این موضوع قابل بررسی است. واردات مواد غذایی ممکن است مستلزم آزمایش‌های آزمایشگاهی، رهگیری، گواهی‌های بهداشتی یا قرنطینه‌ای، کنترل سموم و آفلاتوکسین و رعایت الزامات واردکننده در کشور مقصد باشد.'},
      {question:'آیا CTSEG هم با خریداران ایرانی و هم با تولیدکنندگان ایرانی همکاری می‌کند؟',answer:'بله. CTSEG هم درخواست‌های تأمین از سوی خریداران و هم فرصت‌های ورود به بازار برای تولیدکنندگان را ارزیابی می‌کند و نقش تجاری، معیارهای راستی‌آزمایی و الزامات انطباق را به‌صورت شفاف مشخص می‌سازد.'}
    ],
    ctaTitle:'درخواست تجاری ایران–ترکیه خود را ارسال کنید',
    ctaText:'نام کالا، مشخصات فنی، مقدار، مبدأ ترجیحی، مقصد و زمان موردنظر را ارسال کنید. CTSEG ابتدا بررسی می‌کند که آیا مسیر تأمین از نظر تجاری، حقوقی و عملیاتی قابل اجرا هست یا خیر.',
    ctaLabel:'ارسال RFQ تجاری'
  },
  de:{...en,slug:'iran-tuerkei-handel'},
  it:{...en,slug:'commercio-iran-turchia'},
  ru:{...en,slug:'torgovlya-iran-turtsiya'},
  zh:{...en,slug:'iran-turkiye-trade'},
  vi:{...en,slug:'iran-turkiye-trade'}
};
