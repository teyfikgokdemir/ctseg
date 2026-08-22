import type { Locale } from './site';

type Localized<T> = Record<Locale, T>;

export const specialSlugs: Record<'how-we-work'|'scenarios', Record<Locale,string>> = {
  'how-we-work': {
    tr:'nasil-calisiyoruz', en:'how-we-work', de:'arbeitsweise', it:'come-lavoriamo',
    ru:'kak-my-rabotaem', fa:'ravesh-kar', zh:'how-we-work', vi:'quy-trinh-lam-viec'
  },
  scenarios: {
    tr:'temsili-calisma-senaryolari', en:'representative-work-scenarios', de:'repraesentative-arbeitsszenarien',
    it:'scenari-di-lavoro-rappresentativi', ru:'primery-kommercheskih-scenariev', fa:'senaryo-haye-nemune',
    zh:'representative-scenarios', vi:'kich-ban-thuong-mai-dai-dien'
  }
};

export const guideIds = ['vegetable-oil-rfq','nuts-quality-documents','packaging-moq-tco'] as const;
export type GuideId = (typeof guideIds)[number];

export const guideSlugs: Record<GuideId, Record<Locale,string>> = {
  'vegetable-oil-rfq': {
    tr:'bitkisel-yag-tedarikinde-rfq-kontrol-listesi',
    en:'vegetable-oil-sourcing-rfq-checklist',
    de:'pflanzenoel-beschaffung-rfq-checkliste',
    it:'approvvigionamento-olio-vegetale-rfq-checklist',
    ru:'podgotovka-rfq-na-rastitelnoe-maslo',
    fa:'vegetable-oil-sourcing-rfq-checklist',
    zh:'vegetable-oil-sourcing-rfq-checklist',
    vi:'danh-muc-kiem-tra-rfq-dau-thuc-vat'
  },
  'nuts-quality-documents': {
    tr:'kuruyemis-kuru-meyve-kalite-belge-kontrolu',
    en:'nuts-dried-fruit-quality-document-check',
    de:'qualitaets-und-dokumentenkontrolle-nuesse-trockenfruechte',
    it:'controllo-qualita-documentale-frutta-secca',
    ru:'proverka-kachestva-i-dokumentov-orehi-i-suhofrukty',
    fa:'nuts-dried-fruit-quality-document-check',
    zh:'nuts-dried-fruit-quality-document-check',
    vi:'kiem-soat-chat-luong-chung-tu-hat-va-trai-cay-kho'
  },
  'packaging-moq-tco': {
    tr:'ambalaj-moq-toplam-maliyet-karsilastirmasi',
    en:'packaging-moq-total-cost-comparison',
    de:'verpackung-moq-gesamtkosten-tco-vergleich',
    it:'confronto-imballaggio-moq-costo-totale-tco',
    ru:'sravnenie-upakovki-moq-i-stoimosti-tco',
    fa:'packaging-moq-total-cost-comparison',
    zh:'packaging-moq-total-cost-comparison',
    vi:'so-sanh-bao-bi-moq-va-tong-chi-phi-tco'
  }
};

export const homeEnhancement: Localized<{
  trustTitle:string; established:string; founder:string; headquarters:string;
  tradeTitle:string; tradeLead:string; outbound:string; inbound:string;
  scenarioTitle:string; scenarioLead:string; scenarioCta:string; commercialCta:string;
}> = {
  tr:{
    trustTitle:'Kurumsal kimlik',established:'2022 yılında kuruldu',founder:'Kurucu: Teyfik Gökdemir',
    headquarters:'Merkez: Tuzla, İstanbul, Türkiye',
    tradeTitle:'İki yönlü ticari koordinasyon',tradeLead:'CTSEG, doğrulanabilir menşe ve uygulanabilir ticari koşullar temelinde alıcılar ile tedarik pazarları arasında çalışır.',
    outbound:'Doğrulanmış İran menşeli ticari ürünlerin uluslararası alıcılar için değerlendirilmesi.',
    inbound:'İranlı işletmelerin Türkiye ve uygun uluslararası pazarlardan ürün, hammadde, ambalaj ve üretim girdisi tedarik etmesine destek.',
    scenarioTitle:'Karar sürecini somutlaştıran senaryolar',scenarioLead:'Üç temsili çalışma senaryosu, CTSEG yaklaşımının hangi kriterleri ve ticari çıktıları yapılandırdığını açıklar.',
    scenarioCta:'Temsili senaryoları inceleyin',commercialCta:'Ticari Talep Gönder'
  },
  en:{
    trustTitle:'Corporate identity',established:'Established in 2022',founder:'Founder: Teyfik Gökdemir',
    headquarters:'Headquarters: Tuzla, Istanbul, Türkiye',
    tradeTitle:'Two-way commercial coordination',tradeLead:'CTSEG works between buyers and supply markets through verifiable origin, defined requirements and executable commercial terms.',
    outbound:'Assessment of verified Iranian-origin trade products for international buyers.',
    inbound:'Support for Iranian businesses sourcing products, raw materials, packaging and production inputs from Türkiye and suitable international markets.',
    scenarioTitle:'Representative decision scenarios',scenarioLead:'Three clearly labelled scenarios show the criteria, work stages and commercial outputs CTSEG can structure.',
    scenarioCta:'Review representative scenarios',commercialCta:'Request a Commercial Assessment'
  },
  de:{
    trustTitle:'Unternehmensidentität',established:'Gegründet 2022',founder:'Gründer: Teyfik Gökdemir',
    headquarters:'Hauptsitz: Tuzla, Istanbul, Türkei',
    tradeTitle:'Handelskoordination in beide Richtungen',tradeLead:'CTSEG verbindet Käufer und Beschaffungsmärkte auf Grundlage prüfbarer Herkunft und umsetzbarer Konditionen.',
    outbound:'Bewertung verifizierter Handelsprodukte iranischen Ursprungs für internationale Käufer.',
    inbound:'Unterstützung iranischer Unternehmen bei der Beschaffung von Produkten, Rohstoffen, Verpackungen und Produktionsmitteln aus der Türkei und geeigneten internationalen Märkten.',
    scenarioTitle:'Repräsentative Entscheidungsszenarien',scenarioLead:'Drei klar gekennzeichnete Szenarien erläutern Kriterien, Arbeitsschritte und mögliche kaufmännische Ergebnisse.',
    scenarioCta:'Szenarien ansehen',commercialCta:'Kommerzielle Bewertung anfragen'
  },
  it:{
    trustTitle:'Identità aziendale',established:'Fondata nel 2022',founder:'Fondatore: Teyfik Gökdemir',
    headquarters:'Sede: Tuzla, Istanbul, Turchia',
    tradeTitle:'Coordinamento commerciale bidirezionale',tradeLead:'CTSEG collega acquirenti e mercati di approvvigionamento sulla base di origine verificabile e condizioni commerciali realizzabili.',
    outbound:'Valutazione di prodotti commerciali verificati di origine iraniana per acquirenti internazionali.',
    inbound:'Supporto alle imprese iraniane nell’approvvigionamento di prodotti, materie prime, imballaggi e input produttivi dalla Turchia e da mercati internazionali idonei.',
    scenarioTitle:'Scenari decisionali rappresentativi',scenarioLead:'Tre scenari chiaramente identificati illustrano criteri, fasi di lavoro e output commerciali.',
    scenarioCta:'Esamina gli scenari',commercialCta:'Richiedi una valutazione commerciale'
  },
  ru:{
    trustTitle:'О компании',established:'Основана в 2022 году',founder:'Основатель: Teyfik Gökdemir',
    headquarters:'Главный офис: Тузла, Стамбул, Турция',
    tradeTitle:'Двусторонняя коммерческая координация',tradeLead:'CTSEG связывает покупателей и рынки поставок на основе проверяемого происхождения и реалистичных коммерческих условий.',
    outbound:'Оценка продукции иранского происхождения для международных покупателей.',
    inbound:'Поддержка иранских компаний при поиске продукции, сырья, упаковки и производственных материалов в Турции и на подходящих международных рынках.',
    scenarioTitle:'Примеры коммерческих решений',scenarioLead:'Сценарии показывают критерии, этапы работы и возможные коммерческие результаты без обещаний гарантированного исхода.',
    scenarioCta:'Посмотреть примеры',commercialCta:'Запросить коммерческую оценку'
  },
  fa:{
    trustTitle:'هویت شرکتی',established:'تأسیس شده در سال ۲۰۲۲',founder:'بنیان‌گذار: توفیق گوکدمیر',
    headquarters:'دفتر مرکزی: توزلا، استانبول، ترکیه',
    tradeTitle:'هماهنگی تجاری دوطرفه',tradeLead:'CTSEG میان خریداران و بازارهای تأمین بر اساس مبدأ قابل‌بررسی و شرایط تجاری قابل‌اجرا فعالیت می‌کند.',
    outbound:'ارزیابی کالاهای تجاری معتبر ایرانی برای خریداران بین‌المللی.',
    inbound:'پشتیبانی از کسب‌وکارهای ایرانی برای تأمین کالا، مواد اولیه، بسته‌بندی و نهاده‌های تولید از ترکیه و بازارهای بین‌المللی مناسب.',
    scenarioTitle:'سناریوهای نمونه برای تصمیم‌گیری',scenarioLead:'سه سناریوی مشخص معیارهای کاری و خروجی‌های تجاری قابل ساختاردهی توسط CTSEG را نشان می‌دهند.',
    scenarioCta:'بررسی سناریوهای نمونه',commercialCta:'درخواست ارزیابی تجاری'
  },
  zh:{
    trustTitle:'企业实体与资质',established:'创立于 2022 年',founder:'创始人：Teyfik Gökdemir',
    headquarters:'总部：土耳其伊斯坦布尔图兹拉 (Tuzla, Istanbul, Türkiye)',
    tradeTitle:'双向国际商业协调与寻源对接',tradeLead:'CTSEG 依托真实可溯的原产地凭证、明确的采购技术规格与切实可行的商业交付条款，为全球买家与源头供应商搭建桥梁。',
    outbound:'针对国际买家，严选并核验高品质特色大宗商品与原料供应链。',
    inbound:'协助海外及区域制造企业从土耳其及全球合规成熟市场采购优质大宗原料、环保包装与工业装备辅料。',
    scenarioTitle:'采购决策实战落地典型场景',scenarioLead:'三个典型商业场景清晰拆解 CTSEG 在采购全流程中所遵循的评估维度、工作阶段与实际交付成果。',
    scenarioCta:'查看实战决策场景',commercialCta:'提交商务评估需求'
  },
  vi:{
    trustTitle:'Thông tin doanh nghiệp',established:'Thành lập năm 2022',founder:'Người sáng lập: Teyfik Gökdemir',
    headquarters:'Trụ sở: Tuzla, Istanbul, Thổ Nhĩ Kỳ',
    tradeTitle:'Điều phối thương mại hai chiều',tradeLead:'CTSEG kết nối người mua và các thị trường cung ứng dựa trên nguồn gốc có thể xác minh, yêu cầu rõ ràng và các điều khoản thương mại khả thi.',
    outbound:'Đánh giá các sản phẩm thương mại có xuất xứ được xác minh phục vụ người mua quốc tế.',
    inbound:'Hỗ trợ các doanh nghiệp tìm kiếm nguồn sản phẩm, nguyên liệu thô, bao bì và vật tư sản xuất từ Thổ Nhĩ Kỳ và các thị trường quốc tế phù hợp.',
    scenarioTitle:'Các kịch bản quyết định đại diện',scenarioLead:'Ba kịch bản được gắn nhãn rõ ràng giải thích tiêu chí, các giai đoạn công việc và kết quả thương mại do CTSEG cấu trúc.',
    scenarioCta:'Xem các kịch bản đại diện',commercialCta:'Yêu cầu đánh giá thương mại'
  }
};

export const aboutEnhancement: Localized<{
  whoTitle:string; who:string; workTitle:string; work:string[]; methodTitle:string; method:string;
  ethicsTitle:string; ethics:string[]; founderTitle:string; founder:string;
}> = {
  tr:{
    whoTitle:'CTSEG kimdir?',who:'CTSEG, İstanbul merkezli bir stratejik tedarik ve uluslararası ticari koordinasyon şirketidir. Şirketler için pazar, karşı taraf, ürün, maliyet ve uygulama koşullarını tek bir karar çerçevesinde değerlendirir.',
    workTitle:'Ne yapıyoruz?',work:['Üretici ve tedarikçi araştırması','Tedarikçi ve karşı taraf doğrulaması','RFQ hazırlığı ve teklif karşılaştırması','Maliyet ve toplam sahip olma maliyeti değerlendirmesi','Numune ve kalite belgesi koordinasyonu','Uluslararası ticari karar desteği','Pazar girişi ön değerlendirmesi','Ticari ürün tedariği koordinasyonu'],
    methodTitle:'Nasıl çalışıyoruz?',method:'İhtiyacı tanımlar, pazarı araştırır, taraf ve belgeleri doğrular, teklifleri ortak kriterlerle karşılaştırır, müzakere girdilerini hazırlar ve uygulanabilir sipariş ile belge akışını koordine ederiz.',
    ethicsTitle:'Bağımsızlık ve etik sınırlar',ethics:['Menşe gizleme veya yanıltıcı yeniden etiketleme yapılmaz.','Yanıltıcı belgeye aracılık edilmez.','Doğrulanmamış ticari garanti sunulmaz.','Taraf, ürün ve işlem uygunluğu proje bazında değerlendirilir.'],
    founderTitle:'Kurucu',founder:'Teyfik Gökdemir, CTSEG’i 2022 yılında İstanbul’da kurdu. Bu alanda yalnızca doğrulanmış şirket bilgileri paylaşılır; uydurma özgeçmiş, başarı veya müşteri rakamı kullanılmaz.'
  },
  en:{
    whoTitle:'Who is CTSEG?',who:'CTSEG is an Istanbul-based strategic sourcing and international commercial coordination company. It assesses markets, counterparties, products, cost and execution conditions within one decision framework.',
    workTitle:'What we do',work:['Manufacturer and supplier research','Supplier and counterparty verification','RFQ preparation and bid comparison','Cost and total cost of ownership assessment','Sample and quality-document coordination','International commercial decision support','Market-entry pre-assessment','Trade-product sourcing coordination'],
    methodTitle:'How we work',method:'We define the requirement, research the market, verify counterparties and documents, compare quotations on common criteria, prepare negotiation inputs and coordinate an executable order and document flow.',
    ethicsTitle:'Independence and ethical boundaries',ethics:['Origin is not concealed or misleadingly relabelled.','CTSEG does not facilitate deceptive documentation.','Unverified commercial guarantees are not offered.','Counterparty, product and transaction suitability is assessed case by case.'],
    founderTitle:'Founder',founder:'Teyfik Gökdemir founded CTSEG in Istanbul in 2022. Only verified company facts are presented here; no invented biography, performance claim or customer figure is used.'
  },
  de:{
    whoTitle:'Wer ist CTSEG?',who:'CTSEG ist ein in Istanbul ansässiges Unternehmen für strategische Beschaffung und internationale Handelskoordination. Markt, Gegenpartei, Produkt, Kosten und Umsetzung werden in einem Entscheidungsrahmen bewertet.',
    workTitle:'Was wir tun',work:['Hersteller- und Lieferantenrecherche','Prüfung von Lieferanten und Gegenparteien','RFQ-Vorbereitung und Angebotsvergleich','Kosten- und TCO-Bewertung','Koordination von Mustern und Qualitätsdokumenten','Internationale kaufmännische Entscheidungsunterstützung','Vorprüfung des Markteintritts','Koordination der Handelsproduktbeschaffung'],
    methodTitle:'Wie wir arbeiten',method:'Wir definieren den Bedarf, recherchieren den Markt, prüfen Parteien und Dokumente, vergleichen Angebote nach einheitlichen Kriterien und koordinieren einen umsetzbaren Bestell- und Dokumentenablauf.',
    ethicsTitle:'Unabhängigkeit und ethische Grenzen',ethics:['Herkunft wird nicht verschleiert oder irreführend neu gekennzeichnet.','Keine Vermittlung irreführender Dokumente.','Keine Dienstleistungen zur Umgehung von Sanktionen.','Keine ungeprüften kommerziellen Garantien.','Eignung von Partei, Produkt und Geschäft wird fallbezogen bewertet.'],
    founderTitle:'Gründer',founder:'Teyfik Gökdemir gründete CTSEG 2022 in Istanbul. Veröffentlicht werden ausschließlich bestätigte Unternehmensangaben, keine erfundene Biografie oder Erfolgskennzahlen.'
  },
  it:{
    whoTitle:'Chi è CTSEG?',who:'CTSEG è una società con sede a Istanbul specializzata in sourcing strategico e coordinamento commerciale internazionale. Valuta mercato, controparti, prodotto, costi ed esecuzione in un unico quadro decisionale.',
    workTitle:'Cosa facciamo',work:['Ricerca di produttori e fornitori','Verifica di fornitori e controparti','Preparazione RFQ e confronto offerte','Valutazione costi e TCO','Coordinamento campioni e documenti qualità','Supporto alle decisioni commerciali internazionali','Pre-valutazione dell’ingresso nel mercato','Coordinamento del sourcing di prodotti commerciali'],
    methodTitle:'Come lavoriamo',method:'Definiamo il fabbisogno, analizziamo il mercato, verifichiamo parti e documenti, confrontiamo le offerte con criteri comuni e coordiniamo un flusso d’ordine e documentale realizzabile.',
    ethicsTitle:'Indipendenza e limiti etici',ethics:['Nessun occultamento dell’origine o rietichettatura ingannevole.','Nessuna intermediazione di documenti fuorvianti.','Nessun servizio di elusione delle sanzioni.','Nessuna garanzia commerciale non verificata.','Idoneità di parti, prodotto e operazione valutata caso per caso.'],
    founderTitle:'Fondatore',founder:'Teyfik Gökdemir ha fondato CTSEG a Istanbul nel 2022. Sono riportati solo dati aziendali verificati, senza biografie o risultati inventati.'
  },
  ru:{
    whoTitle:'Кто такой CTSEG?',who:'CTSEG — компания, базирующаяся в Стамбуле, специализирующаяся на стратегическом сорсинге и международной коммерческой координации. Рынок, контрагент, продукт, стоимость и исполнение оцениваются в едином рамочном подходе.',
    workTitle:'Наши услуги',work:['Поиск производителей и поставщиков','Проверка поставщиков и контрагентов','Подготовка RFQ и сравнение предложений','Оценка затрат и TCO','Координация образцов и качественной документации','Поддержка коммерческих решений в международной торговле','Предварительная оценка выхода на рынок','Координация сорсинга коммерческих продуктов'],
    methodTitle:'Наш метод',method:'Мы определяем потребность, изучаем рынок, проверяем стороны и документы, сравниваем предложения по единым критериям и координируем реализуемый поток заказа и документов.',
    ethicsTitle:'Независимость и этические ограничения',ethics:['Нельзя скрывать происхождение или вводить в заблуждение перенаклейкой.','Не содействуем в предоставлении ложных документов.','Не предоставляем непроверенные коммерческие гарантии.','Соответствие контрагента, продукта и операции оценивается в каждом случае отдельно.'],
    founderTitle:'Основатель',founder:'Тейфик Гёкдемир основал CTSEG в Стамбуле в 2022 году. Представляются только проверенные корпоративные данные, без вымышленных биографий или результатов.'
  },
  fa:{
    whoTitle:'CTSEG چیست؟',who:'CTSEG یک شرکت تأمین استراتژیک و هماهنگی تجاری بین‌المللی مستقر در استانبول است. بازار، طرف‌های تجاری، کالا، هزینه و شرایط اجرا را در یک چارچوب تصمیم‌گیری منسجم ارزیابی می‌کند.',
    workTitle:'فعالیت‌های ما',work:['شناسایی تولیدکننده و تأمین‌کننده','اعتباربرسنجی تأمین‌کنندگان و طرف‌ها','آماده‌سازی RFQ و مقایسه پیشنهادات','ارزیابی هزینه و هزینه کل مالکیت (TCO)','هماهنگی نمونه‌ها و اسناد کیفی','پشتیبانی از تصمیمات تجاری بین‌المللی','پیش‌ارزیابی ورود به بازار','هماهنگی تأمین کالاهای تجاری'],
    methodTitle:'روش کار ما',method:'ما نیاز را تعریف می‌کنیم، بازار را بررسی می‌کنیم، اسناد و طرف‌ها را اعتبارسنجی می‌کنیم، پیشنهادات را مقایسه می‌کنیم و جریان سفارش و اسناد قابل‌اجرا را هماهنگ می‌سازیم.',
    ethicsTitle:'استقلال و مرزهای اخلاقی',ethics:['مبدأ پنهان نمی‌شود و برچسب‌گذاری گمراه‌کننده صورت نمی‌گیرد.','هیچ اسناد گمراه‌کننده‌ای واسطه‌گری نمی‌شود.','ضمانت‌های تجاری تأییدنشده ارائه نمی‌شود.','تناسب طرف، کالا و معامله به‌صورت موردی ارزیابی می‌شود.'],
    founderTitle:'بنیان‌گذار',founder:'توفیق گوکدمیر CTSEG را در سال ۲۰۲۲ در استانبول تأسیس کرد. در اینجا تنها اطلاعات شرکتی تأییدشده ارائه می‌شود.'
  },
  zh:{
    whoTitle:'关于 CTSEG',who:'CTSEG 是一家立足土耳其伊斯坦布尔的国际战略采购与跨境商业协调专业机构。我们致力于将目标市场调研、生产主体核验、产品品质把控、全周期总成本 (TCO) 及落地执行综合统筹于严密的商业决策框架中。',
    workTitle:'我们的核心业务',work:['源头工厂与供应商精准发现','供应商主体资格与产能实地核验','专业 RFQ 询价编制与报价横向对比','采购成本与总体拥有成本 (TCO) 深度测算','样品调样与权威第三方质检凭证对接','国际贸易与跨境投资决策顾问','海外及土耳其本地市场准入前置评估','大宗特色商品供应链协调与履约跟踪'],
    methodTitle:'我们的工作方法',method:'我们清晰界定技术需求，深入调研供应市场，交叉核验企业资质与单证，基于统一权重矩阵对比报价，输出谈判依据，并全程协调合规订单流与单证流。',
    ethicsTitle:'独立性与商业道德准则',ethics:['坚决不隐瞒真实原产地，拒绝任何误导性更换标签行为。','坚决不协助出具或流转虚假、不合规单证。','坚决不提供未经严密核验的商业承诺与夸大担保。','对交易对手、产品质量与业务合规性实施逐案严格独立评估。'],
    founderTitle:'创始人',founder:'Teyfik Gökdemir 于 2022 年在伊斯坦布尔创立 CTSEG。本平台仅发布经核实的企业信息与客观事实，绝不采用任何虚构履历或不实数据。'
  },
  vi:{
    whoTitle:'CTSEG là ai?',who:'CTSEG là công ty điều phối thương mại quốc tế và thu mua chiến lược có trụ sở tại Istanbul. Chúng tôi đánh giá thị trường, đối tác, sản phẩm, chi phí và các điều kiện thực thi trong một khung quyết định thống nhất.',
    workTitle:'Chúng tôi làm gì',work:['Nghiên cứu nhà sản xuất và nhà cung cấp','Thẩm định nhà cung cấp và đối tác thương mại','Lập hồ sơ RFQ và so sánh báo giá','Đánh giá chi phí và tổng chi phí sở hữu (TCO)','Điều phối mẫu thử và chứng từ chất lượng','Hỗ trợ quyết định thương mại quốc tế','Tiền đánh giá thâm nhập thị trường','Điều phối nguồn cung sản phẩm thương mại'],
    methodTitle:'Phương pháp làm việc của chúng tôi',method:'Chúng tôi xác định yêu cầu, nghiên cứu thị trường, xác minh đối tác và chứng từ, so sánh báo giá theo tiêu chí thống nhất, chuẩn bị dữ liệu đàm phán và điều phối luồng đơn hàng cùng chứng từ khả thi.',
    ethicsTitle:'Tính độc lập và chuẩn mực đạo đức',ethics:['Không che giấu xuất xứ hoặc dán nhãn sai lệch gây hiểu lầm.','Không tiếp tay cho các chứng từ không trung thực.','Không đưa ra những cam kết thương mại chưa được kiểm chứng.','Đánh giá sự phù hợp của đối tác, sản phẩm và giao dịch theo từng trường hợp cụ thể.'],
    founderTitle:'Người sáng lập',founder:'Teyfik Gökdemir thành lập CTSEG tại Istanbul vào năm 2022. Chỉ những thông tin doanh nghiệp đã được xác thực mới được trình bày tại đây, không sử dụng dữ liệu phóng đại.'
  }
};

const marketData = (
  turkeyTitle:string,turkey:string[],europeTitle:string,europe:string[],internationalTitle:string,international:string[]
) => [
  {title:turkeyTitle,items:turkey},{title:europeTitle,items:europe},{title:internationalTitle,items:international}
];

export const marketsDetail: Localized<{title:string;items:string[]}[]> = {
  tr:marketData('Türkiye',['Üretici keşfi','İhracata hazır tedarikçi araştırması','Kapasite ve fiyat karşılaştırması','Numune ve belge koordinasyonu','Ambalaj ve private label seçenekleri','Üretim ve tedarik ağı erişimi'],'Avrupa',['İthalatçı beklentilerinin tanımlanması','Ürün ve belge şeffaflığı','İzlenebilirlik','Ambalaj ve etiketleme gereklilikleri','Kalite ve uygunluk kontrolleri','Kurumsal alıcı çalışma modeli'],'Uluslararası',['Ülke bazlı tedarik araştırması','Karşı taraf doğrulaması','Menşe ve son kullanım değerlendirmesi','Lojistik seçeneklerinin karşılaştırılması','Ödeme ve ticari uygulanabilirlik ön değerlendirmesi','Uygun üçüncü ülke kaynakları']),
  en:marketData('Türkiye',['Manufacturer discovery','Export-ready supplier research','Capacity and price comparison','Sample and document coordination','Packaging and private-label options','Access to production and supply networks'],'Europe',['Importer expectations','Product and document transparency','Traceability','Packaging and labelling requirements','Quality and conformity controls','Institutional-buyer coordination'],'International',['Country-specific sourcing research','Counterparty verification','Origin and end-use assessment','Logistics option comparison','Payment and commercial feasibility pre-assessment','Suitable third-country sources']),
  de:marketData('Türkei',['Herstellersuche','Recherche exportfähiger Lieferanten','Kapazitäts- und Preisvergleich','Muster- und Dokumentenkoordination','Verpackungs- und Eigenmarkenoptionen','Zugang zu Produktionsnetzwerken'],'Europa',['Erwartungen der Importeure','Produkt- und Dokumententransparenz','Rückverfolgbarkeit','Verpackungs- und Kennzeichnungsvorgaben','Qualitäts- und Konformitätskontrollen','Koordination institutioneller Käufer'],'International',['Länderspezifische Beschaffungsrecherche','Prüfung der Gegenpartei','Herkunfts- und Endverwendungsprüfung','Vergleich logistischer Optionen','Vorprüfung von Zahlung und Machbarkeit','Geeignete Drittlandquellen']),
  it:marketData('Turchia',['Ricerca produttori','Ricerca di fornitori pronti all’export','Confronto capacità e prezzi','Coordinamento campioni e documenti','Opzioni packaging e private label','Accesso a reti produttive'],'Europa',['Aspettative degli importatori','Trasparenza di prodotto e documenti','Tracciabilità','Requisiti di imballaggio ed etichettatura','Controlli qualità e conformità','Coordinamento con buyer istituzionali'],'Internazionale',['Ricerca per paese','Verifica della controparte','Valutazione origine e uso finale','Confronto opzioni logistiche','Pre-valutazione pagamenti e fattibilità','Fonti idonee in paesi terzi']),
  ru:marketData('Турция',['Поиск производителей','Поиск поставщиков, готовых к экспорту','Сравнение мощности и цены','Координация образцов и документов','Варианты упаковки и собственные торговые марки','Доступ к производственным и снабженческим сетям'],'Европа',['Ожидания импортёров','Прозрачность продукта и документации','Прослеживаемость','Требования к упаковке и маркировке','Контроль качества и соответствия','Координация с институциональными покупателями'],'Международные рынки',['Исследование по странам','Проверка контрагентов','Оценка происхождения и конечного использования','Сравнение логистических вариантов','Предварительная оценка платежей и коммерческой осуществимости','Подходящие источники в третьих странах']),
  fa:marketData('ترکیه',['شناسایی تولیدکننده','تحقیق درباره تأمین‌کنندگان آماده صادرات','مقایسه ظرفیت و قیمت','هماهنگی نمونه و اسناد','گزینه‌های بسته‌بندی و برند اختصاصی','دسترسی به شبکه‌های تولید و تأمین'],'اروپا',['تعریف انتظارات واردکنندگان','شفافیت کالا و اسناد','قابلیت ردگیری','الزامات بسته‌بندی و برچسب‌گذاری','کنترل‌های کیفیت و انطباق','مدل همکاری با خریداران شرکتی'],'بین‌المللی',['تحقیق تأمین بر اساس کشور','اعتباربرسنجی طرف‌های تجاری','ارزیابی مبدأ و مصرف نهایی','مقایسه گزینه‌های لجستیک','پیش‌ارزیابی پرداخت و امکان‌پذیری تجاری','منابع مناسب در کشور ثالث']),
  zh:marketData('土耳其',['优质源头工厂与制造产能发现','具备出口成熟度的高资质供应商调研','实际产能规模与阶梯报价横向对比','全套样品调样与法定检测单证协调','环保包装与自有品牌 (Private Label) 定制方案','直通土耳其制造及供应链集群网络'],'欧洲市场',['清晰界定欧洲进口商采购准入与预期','产品合规、技术指标与单证全透明','批次溯源体系与供应链责任追溯','严苛的包装材质、标识及语言法规要求','全流程质量稳定性与卫生标准严格复核','对接跨国大型机构买家的成熟协作模式'],'全球大宗贸易走廊',['按国别进行针对性深度寻源调研','交易对手工商登记与商业信誉尽调','原产地真实性与最终流向合规评估','海陆空多式联运物流方案横向优选','跨境结算模式与商业落地可行性评估','严选合规第三国优质原料与替代源']),
  vi:marketData('Thổ Nhĩ Kỳ',['Tìm kiếm nhà sản xuất uy tín','Nghiên cứu nhà cung cấp sẵn sàng xuất khẩu','So sánh công suất thực tế và biểu giá','Điều phối mẫu thử và chứng từ kỹ thuật','Tùy chọn bao bì và gia công thương hiệu riêng','Tiếp cận mạng lưới sản xuất và cung ứng địa phương'],'Châu Âu',['Xác định kỳ vọng của các nhà nhập khẩu','Minh bạch thông tin sản phẩm và chứng từ','Khả năng truy xuất nguồn gốc từng lô hàng','Yêu cầu quy chuẩn về bao bì và ghi nhãn','Kiểm soát chất lượng và tiêu chuẩn an toàn','Mô hình làm việc chuẩn hóa cho người mua doanh nghiệp'],'Thị trường quốc tế',['Nghiên cứu nguồn cung theo từng quốc gia','Xác minh pháp lý và năng lực đối tác','Đánh giá nguồn gốc và mục đích sử dụng cuối','So sánh các phương án logistics tối ưu','Đánh giá khả thi về thanh toán và thương mại','Khai thác các nguồn cung ứng nước thứ ba phù hợp'])
};

export const processPages: Record<Locale, {
  title:string; description:string; role:string; steps:string[]; faq:[string,string][];
}> = {
  tr:{
    title:'Nasıl çalışıyoruz?',description:'Bir ticari ihtiyacın tanımından teslim sonrası değerlendirmeye uzanan dokuz kontrollü adım.',
    role:'CTSEG ticari araştırma, doğrulama, karşılaştırma ve koordinasyon sağlar; ürün satıcısı veya garanti veren kurum değildir.',
    steps:['İhtiyacın tanımlanması','Ticari uygulanabilirlik ön değerlendirmesi','Pazar ve tedarikçi araştırması','Tedarikçi doğrulaması','RFQ ve teklif karşılaştırması','Numune ve kalite değerlendirmesi','Ticari müzakere','Sipariş ve belge koordinasyonu','Teslim sonrası değerlendirme'],
    faq:[
      ['CTSEG nedir?','CTSEG, İstanbul merkezli stratejik tedarik ve uluslararası ticari koordinasyon şirketidir. Şirketlerin ihtiyaçlarını tanımlamasına, uygun pazar ve tedarikçileri araştırmasına, tarafları doğrulamasına, teklifleri karşılaştırmasına ve uygulanabilir ticari karar kayıtları oluşturmasına destek verir. CTSEG her işlemde rolünü ve değerlendirme sınırlarını açık biçimde tanımlar.'],
      ['CTSEG nasıl çalışır?','Çalışma, ihtiyacın ve karar kriterlerinin netleştirilmesiyle başlar. Ardından pazar araştırması, tedarikçi doğrulaması, RFQ, teklif ve toplam maliyet karşılaştırması yürütülür. Gerekli olduğunda numune, kalite belgesi ve müzakere girdileri koordine edilir. Sipariş ve teslimat sorumlulukları ilgili ticari taraflarda kalır.'],
      ['Tedarikçi doğrulaması nedir?','Tedarikçi doğrulaması; şirket kaydı, adres, yetkili taraf, üretim veya tedarik kapasitesi, kalite yaklaşımı, belgeler, referanslar ve ticari koşulların tutarlı biçimde kontrol edilmesidir. Kontrol kapsamı ürün, ülke, işlem değeri ve risk düzeyine göre belirlenir; doğrulanamayan bilgi açıkça işaretlenir.'],
      ['Teklif almak için hangi bilgiler gerekir?','Karşılaştırılabilir teklif için ürün veya hizmet tanımı, teknik spesifikasyon, tahmini miktar, ambalaj beklentisi, teslim ülkesi ve şehri, hedef tarih, belge ihtiyacı ve tercih edilen ticari koşullar gerekir. Eksik bilgiler tekliflerin farklı kapsamlar içermesine ve maliyet karşılaştırmasının yanıltıcı olmasına yol açabilir.'],
      ['MOQ’yu kim belirler?','Minimum sipariş miktarını CTSEG belirlemez. MOQ; üretici, ürün, üretim hattı, ambalaj biçimi, private label gereksinimi ve sevkiyat modeline göre tedarikçi tarafından belirlenir. CTSEG, teklif aşamasında MOQ’nun dayanağını ve alternatif sipariş yapılarını karşılaştırmaya yardımcı olur.']
    ]
  },
  en:{
    title:'How we work',description:'Nine controlled stages from defining a commercial requirement to post-delivery review.',
    role:'CTSEG provides commercial research, verification, comparison and coordination; it is not a product seller or guaranteeing institution.',
    steps:['Define the requirement','Commercial feasibility pre-assessment','Market and supplier research','Supplier verification','RFQ and quotation comparison','Sample and quality assessment','Commercial negotiation','Order and document coordination','Post-delivery review'],
    faq:[
      ['What is CTSEG?','CTSEG is an Istanbul-based strategic sourcing and international commercial coordination company. It helps businesses define requirements, research suitable markets and suppliers, verify counterparties, compare offers and create traceable commercial decision records. CTSEG states its role, evidence and assessment limits clearly for each engagement.'],
      ['How does CTSEG work?','An engagement begins by defining the requirement and decision criteria. CTSEG then conducts market research, supplier verification, RFQ preparation and quotation comparison. Samples, quality documents and negotiation inputs may be coordinated where required.'],
      ['What is supplier verification?','Supplier verification is a structured check of company registration, address, authorised parties, production or supply capability, quality approach, documents, references and commercial terms. The depth of review depends on the product, country, transaction value and risk profile. Information that cannot be substantiated is identified rather than presented as confirmed.'],
      ['What information is needed for a quotation?','Comparable quotations require a product or service definition, technical specification, estimated quantity, packaging expectation, delivery country and city, target date, documentation needs and preferred commercial terms. Missing inputs often lead suppliers to quote different scopes, making unit-price and total landed cost comparisons unreliable.'],
      ['Who determines the MOQ?','CTSEG does not set the minimum order quantity. MOQ is determined by the supplier according to the product, production line, packaging format, private-label work and shipment model. During quotation assessment, CTSEG can compare the commercial basis of the MOQ and identify feasible alternative order structures.']
    ]
  },
  de:{
    title:'Wie wir arbeiten',description:'Neun kontrollierte Schritte von der Definition des Beschaffungsbedarfs bis zur Bewertung nach der Lieferung.',
    role:'CTSEG übernimmt Recherche, Prüfung, Vergleich und kommerzielle Koordination; CTSEG ist weder Produktverkäufer noch Garantiegeber.',
    steps:['Bedarf definieren','Kommerzielle Machbarkeit vorprüfen','Markt- und Lieferantenrecherche','Lieferantenprüfung','RFQ und Angebotsvergleich','Muster- und Qualitätsbewertung','Kommerzielle Verhandlung','Bestell- und Dokumentenkoordination','Bewertung nach der Lieferung'],
    faq:[
      ['Was ist CTSEG?','CTSEG ist ein in Istanbul ansässiges Unternehmen für strategische Beschaffung und internationale Handelskoordination. Es unterstützt Unternehmen dabei, Anforderungen zu definieren, geeignete Märkte und Lieferanten zu recherchieren, Gegenparteien zu prüfen und Angebote nachvollziehbar zu vergleichen.'],
      ['Wie arbeitet CTSEG?','Ein Projekt beginnt mit der Definition von Bedarf und Entscheidungskriterien. Danach folgen Marktrecherche, Lieferantenprüfung, RFQ-Vorbereitung und Angebotsvergleich. Muster, Qualitätsdokumente und Verhandlungsgrundlagen können bei Bedarf koordiniert werden.'],
      ['Was bedeutet Lieferantenprüfung?','Geprüft werden unter anderem Unternehmensregistrierung, Anschrift, bevollmächtigte Personen, Produktions- oder Lieferfähigkeit, Qualitätsansatz, Dokumente, Referenzen und kommerzielle Bedingungen. Nicht belegbare Angaben werden ausdrücklich als offen gekennzeichnet.'],
      ['Welche Angaben werden für ein Angebot benötigt?','Erforderlich sind Produkt- oder Leistungsbeschreibung, technische Spezifikation, Menge, Verpackung, Lieferort, Zieltermin, Dokumentenanforderungen und bevorzugte Handelsbedingungen.'],
      ['Wer bestimmt die Mindestbestellmenge?','Die MOQ wird vom Lieferanten anhand von Produkt, Produktionslinie, Verpackung, Private Label und Versandmodell festgelegt. CTSEG vergleicht die kommerzielle Grundlage und mögliche Alternativen.']
    ]
  },
  it:{
    title:'Come lavoriamo',description:'Nove fasi controllate dalla definizione dell’esigenza commerciale alla valutazione post-consegna.',
    role:'CTSEG svolge ricerca, verifica, confronto e coordinamento commerciale; non è il venditore del prodotto né un soggetto garante.',
    steps:['Definizione dell’esigenza','Pre-valutazione della fattibilità','Ricerca di mercato e fornitori','Verifica del fornitore','RFQ e confronto offerte','Valutazione campioni e qualità','Negoziazione commerciale','Coordinamento ordine e documenti','Valutazione post-consegna'],
    faq:[
      ['Che cos’è CTSEG?','CTSEG è una società con sede a Istanbul che opera nel sourcing strategico e nel coordinamento commerciale internazionale, aiutando le imprese a definire requisiti, verificare controparti e confrontare offerte.'],
      ['Come lavora CTSEG?','L’incarico inizia con requisiti e criteri decisionali chiari; seguono ricerca, verifica, RFQ e confronto economico. Quando necessario vengono coordinati campioni, documenti qualità e dati per la negoziazione.'],
      ['Che cos’è la verifica del fornitore?','È un controllo strutturato di registrazione societaria, sede, soggetti autorizzati, capacità, qualità, documenti, referenze e condizioni commerciali. Le informazioni non dimostrabili restano esplicitamente aperte.'],
      ['Quali informazioni servono per un’offerta?','Descrizione, specifiche tecniche, quantità, imballaggio, destinazione, data obiettivo, documenti richiesti e condizioni commerciali preferite.'],
      ['Chi determina il MOQ?','Il MOQ è definito dal fornitore in base a prodotto, linea, imballaggio, private label e spedizione; CTSEG ne confronta le basi e le alternative praticabili.']
    ]
  },
  ru:{
    title:'Как мы работаем',description:'Девять контролируемых этапов — от определения коммерческой потребности до оценки после поставки.',
    role:'CTSEG выполняет исследование, проверку, сравнение и коммерческую координацию; компания не является продавцом товара или гарантирующей организацией.',
    steps:['Определение потребности','Предварительная оценка реализуемости','Исследование рынка и поставщиков','Проверка поставщика','RFQ и сравнение предложений','Оценка образцов и качества','Коммерческие переговоры','Координация заказа и документов','Оценка после поставки'],
    faq:[
      ['Что такое CTSEG?','CTSEG — стамбульская компания по стратегическому сорсингу и международной коммерческой координации. Она помогает формулировать требования, исследовать рынки, проверять контрагентов и сравнивать предложения.'],
      ['Как работает CTSEG?','Работа начинается с определения требований и критериев решения. Затем проводятся исследование рынка, проверка поставщиков, подготовка RFQ и сравнение предложений; при необходимости координируются образцы и документы качества.'],
      ['Что такое проверка поставщика?','Это структурированная проверка регистрации, адреса, уполномоченных лиц, производственных возможностей, подхода к качеству, документов, рекомендаций и коммерческих условий. Неподтверждённые сведения отмечаются как открытые.'],
      ['Какие данные нужны для предложения?','Нужны описание и спецификация, объём, упаковка, место поставки, целевая дата, требования к документам и предпочтительные коммерческие условия.'],
      ['Кто определяет MOQ?','Минимальный объём определяет поставщик с учётом товара, линии, упаковки, private label и модели отгрузки. CTSEG помогает сравнить основания и альтернативы.']
    ]
  },
  fa:{
    title:'چگونه کار می‌کنیم؟',description:'نه مرحله کنترل‌شده از تعریف نیاز تجاری تا ارزیابی پس از تحویل.',
    role:'CTSEG خدمات تحقیق، اعتباربرسنجی، مقایسه و هماهنگی تجاری ارائه می‌دهد؛ فروشنده مستقیم یا ضامن اجرایی نیست.',
    steps:['تعریف نیاز تجاری','پیش‌ارزیابی امکان‌پذیری تجاری','تحقیق بازار و تأمین‌کنندگان','اعتباربرسنجی تأمین‌کنندگان','RFQ و مقایسه پیشنهادات','ارزیابی نمونه و کیفیت','مذاکره تجاری','هماهنگی سفارش و اسناد','ارزیابی پس از تحویل'],
    faq:[
      ['CTSEG چیست؟','CTSEG یک شرکت تأمین استراتژیک و هماهنگی تجاری بین‌المللی مستقر در استانبول است.'],
      ['CTSEG چگونه کار می‌کند؟','کار با شفاف‌سازی نیاز و معیارهای تصمیم‌گیری آغاز می‌شود.'],
      ['اعتباربرسنجی تأمین‌کننده چیست؟','بررسی ساختاریافته ثبت شرکت، آدرس، ظرفیت تولید و اسناد.'],
      ['چه اطلاعاتی برای استعلام قیمت لازم است؟','مشخصات فنی، مقدار تخمینی، بسته‌بندی، کشور مقصد و شرایط تحویل.'],
      ['چه کسی MOQ را تعیین می‌کند؟','حداقل سفارش توسط تولیدکننده تعیین می‌شود، نه CTSEG.']
    ]
  },
  zh:{
    title:'业务运作与决策流程',description:'从商业需求梳理到交付后复盘的九大严谨可控实施步骤。',
    role:'CTSEG 提供独立的供应链调研、主体核验、横向比价及商业协调支持；我们是专业商业顾问，并非商品直接买卖方或无条件履约担保人。',
    steps:['采购需求与技术指标梳理','商业与技术可行性前置评估','目标供应市场与工厂纵深调研','供应商主体与产能实地核验','标准 RFQ 编制与多方报价对比','调样质检与第三方实验室化验','商务谈判与交易结构优化','正式订单下达与单证全流程协同','到货验收与供应链履约复盘'],
    faq:[
      ['CTSEG 的机构定位是什么？','CTSEG 是一家总部位于土耳其伊斯坦布尔的国际战略采购与大宗商贸协调机构。我们协助跨国企业梳理采购需求、调研合规供应市场、核验源头生产商资质、横向深度对比商务报价，并建立全程可追溯的商业决策档案。在每一项委托中，CTSEG 均明确限定自身职责与评估边界。'],
      ['CTSEG 的具体协作模式是怎样的？','合作始终从明确具体采购需求与决策权重指标开启。随后展开供应市场调研、生产企业主体核验、编制标准化 RFQ 并开展总成本模型比对。在必要时协助调样化验、审核批次检测报告并提供谈判支持。核心买卖法律合同与实际货权交割仍由买卖双方直接签署执行。'],
      ['什么是供应商深度核验？','供应商核验是一套系统化的尽职审查程序，涵盖企业工商注册登记、实际经营场所与厂房、法定代表人、实测产能规模、质量管理体系、官方认证证书、历史商业信用记录及银行结算账户真实性。对于无法提供充分事实支撑的信息，均在评估报告中予以明确标注。'],
      ['发起正式询价需要提供哪些核心信息？','一份具备可比性的专业询价需要提供：明确的产品技术规格书、预估订购体量 (MOQ/PO)、包装形式与材质要求、目标交付国与目的港口、期望交货排期、必备单证清单以及首选贸易结算条款。缺少关键参数将导致不同工厂基于不同理解报价，造成比价失真。'],
      ['最低起订量 (MOQ) 由谁决定？','CTSEG 本身不设定最低起订量。MOQ 由源头制造企业依据产品特性、生产线排产负荷、包材起印量、贴牌定制 (Private Label) 深度及集装箱运输装载率自主决定。CTSEG 在比价阶段协助买家厘清 MOQ 背后的成本构成，并探寻可行的替代订货方案。']
    ]
  },
  vi:{
    title:'Quy trình làm việc',description:'Chín giai đoạn được kiểm soát từ việc xác định yêu cầu thương mại đến đánh giá sau giao hàng.',
    role:'CTSEG cung cấp dịch vụ nghiên cứu, thẩm định, so sánh và điều phối thương mại; CTSEG không phải là bên bán hàng trực tiếp hay tổ chức bảo lãnh.',
    steps:['Xác định yêu cầu','Tiền đánh giá tính khả thi thương mại','Nghiên cứu thị trường & nhà cung cấp','Thẩm định nhà cung cấp','Chuẩn bị RFQ & so sánh báo giá','Đánh giá mẫu thử & chất lượng','Đàm phán thương mại','Điều phối đơn hàng & chứng từ','Đánh giá sau giao hàng'],
    faq:[
      ['CTSEG là gì?','CTSEG là công ty điều phối thương mại quốc tế và thu mua chiến lược có trụ sở tại Istanbul. Chúng tôi giúp doanh nghiệp xác định yêu cầu, nghiên cứu nhà cung cấp phù hợp, thẩm định đối tác, so sánh báo giá và thiết lập hồ sơ quyết định có thể truy xuất. CTSEG công khai rõ ràng vai trò và giới hạn đánh giá trong từng dự án.'],
      ['CTSEG làm việc như thế nào?','Dự án bắt đầu bằng việc làm rõ yêu cầu và tiêu chí quyết định. Tiếp đó là nghiên cứu thị trường, thẩm định nhà cung cấp, lập hồ sơ RFQ và so sánh tổng chi phí. Mẫu thử, chứng từ chất lượng và dữ liệu đàm phán sẽ được điều phối khi cần thiết. Trách nhiệm đặt hàng và giao dịch thực tế thuộc về các bên mua bán trực tiếp.'],
      ['Thẩm định nhà cung cấp là gì?','Thẩm định nhà cung cấp là quy trình kiểm tra có cấu trúc về đăng ký kinh doanh, địa chỉ thực tế, người đại diện theo pháp luật, năng lực sản xuất, hệ thống quản lý chất lượng, chứng chỉ, tham chiếu đối tác và điều khoản thương mại. Các thông tin không đủ bằng chứng xác thực sẽ được ghi chú rõ ràng.'],
      ['Cần thông tin gì để nhận báo giá chuẩn xác?','Để có báo giá có thể so sánh, cần cung cấp: mô tả sản phẩm/dịch vụ, thông số kỹ thuật, số lượng ước tính, quy cách đóng gói, quốc gia/thành phố giao hàng, tiến độ kỳ vọng, yêu cầu chứng từ và điều kiện thương mại mong muốn.'],
      ['Ai quyết định số lượng đặt hàng tối thiểu (MOQ)?','CTSEG không quyết định MOQ. MOQ do nhà sản xuất quy định dựa trên đặc tính sản phẩm, dây chuyền sản xuất, quy cách bao bì, yêu cầu nhãn hàng riêng và mô hình vận chuyển. CTSEG hỗ trợ so sánh cơ sở thương mại của MOQ và đề xuất các giải pháp đặt hàng thay thế khả thi.']
    ]
  }
};

export const scenarioPages: Record<Locale, {
  title:string; description:string; disclaimer:string; labels:string[]; items:string[][];
}> = {
  tr:{
    title:'Temsili çalışma senaryoları',description:'CTSEG’in karar yaklaşımını açıklayan, gerçek müşteri referansı olmayan üç ticari senaryo.',
    disclaimer:'Bu çalışmalar, CTSEG’in yaklaşımını açıklayan temsili senaryolardır; açıklanan şirketler ve ticari çıktılar gerçek müşteri referansı veya gerçekleşmiş sonuç değildir.',
    labels:['İhtiyaç','Değerlendirilen kriterler','CTSEG yaklaşımı','Üretilecek ticari çıktı','Karar aşaması'],
    items:[
      ['Avrupa’daki gıda ithalatçısı için İran menşeli fıstık','Uygun çeşit ve tedarikçi kısa listesi','Ürün çeşidi, kalibre, menşe, parti belgeleri, kalite parametreleri, ambalaj, termin ve toplam teslim maliyeti','Üretici ve belgelerin masa başı doğrulaması; ortak RFQ ile tekliflerin normalizasyonu','Karşılaştırma matrisi, açık bilgi listesi ve numune değerlendirme planı','Alıcının numune ve ticari müzakereye geçecek tarafları seçmesi'],
      ['İranlı kurumsal alıcı için 5 litrelik ayçiçek yağı','PET veya teneke ambalajlı ürün için uygun kaynak araştırması','Yağ spesifikasyonu, ambalaj, etiketleme, MOQ, ödeme, teslim modeli ve üretici kapasitesi','Türkiye ve uygun pazarlarda kaynak taraması; gereksinim ve ticari koşulların karşılaştırılması','Doğrulanabilir tedarikçi kısa listesi, RFQ tablosu ve açık riskler','Alıcının uygulanabilir ambalaj ve teklif yapısını belirlemesi'],
      ['Üretici için ambalaj tedarikçisi karşılaştırması','Uygun ambalaj formatı ve tedarik modelinin seçilmesi','Malzeme, baskı, kalıp, MOQ, birim fiyat, fire, termin, navlun ve stok etkisi','Teknik ihtiyacı ortak formata dönüştürme ve toplam maliyet senaryoları hazırlama','Teklif karşılaştırması, TCO görünümü ve doğrulama soruları','Üreticinin numune, deneme üretimi veya müzakere adımına karar vermesi']
    ]
  },
  en:{
    title:'Representative work scenarios',description:'Three commercial scenarios explaining CTSEG’s decision approach without presenting invented client references.',
    disclaimer:'These are representative scenarios explaining the CTSEG approach. The companies and commercial outputs described are not real client references or completed results.',
    labels:['Requirement','Criteria assessed','CTSEG approach','Commercial output','Decision stage'],
    items:[
      ['Iranian-origin pistachio comparison for a European food importer','Create a qualified variety and supplier shortlist','Variety, size, origin, batch documents, quality parameters, packaging, lead time and total landed cost','Desk-based producer and document verification; quotation normalisation through a common RFQ','Comparison matrix, open-information register and sample-assessment plan','Buyer selects parties for sampling and commercial negotiation'],
      ['5-litre sunflower oil research for an Iranian institutional buyer','Research feasible PET or tin-packed supply','Oil specification, packaging, labelling, MOQ, payment, delivery model and producer capability','Source screening in Türkiye and suitable markets; comparison of requirements and commercial terms','Verifiable shortlist, RFQ table and explicit risk register','Buyer selects a feasible packaging and quotation structure'],
      ['Packaging supplier comparison for a manufacturer','Select a suitable packaging format and supply model','Material, print, tooling, MOQ, unit cost, waste, lead time, freight and inventory impact','Convert the technical requirement into a common format and model total-cost scenarios','Bid comparison, TCO view and supplier-verification questions','Manufacturer decides whether to progress to sample, production trial or negotiation']
    ]
  },
  de:{
    title:'Repräsentative Arbeitsszenarien',description:'Drei kommerzielle Szenarien erläutern den Entscheidungsansatz von CTSEG, ohne erfundene Kundenreferenzen darzustellen.',
    disclaimer:'Diese Szenarien dienen ausschließlich der Erläuterung der CTSEG-Methode. Die beschriebenen Unternehmen und Ergebnisse sind keine realen Kundenreferenzen oder abgeschlossenen Projekte.',
    labels:['Bedarf','Bewertete Kriterien','CTSEG-Ansatz','Kommerzielles Ergebnis','Entscheidungsstufe'],
    items:[
      ['Iranische Pistazien für einen europäischen Lebensmittelimporteur','Qualifizierte Sorten- und Lieferantenauswahl','Sorte, Größe, Herkunft, Chargendokumente, Qualität, Verpackung, Lieferzeit und Gesamtkosten','Desktop-Prüfung von Produzent und Dokumenten; Angebotsnormalisierung über eine gemeinsame RFQ','Vergleichsmatrix, offene Informationspunkte und Musterbewertungsplan','Auswahl der Parteien für Muster und Verhandlung'],
      ['5-Liter-Sonnenblumenöl für einen institutionellen Käufer','Recherche geeigneter PET- oder Blechgebinde','Spezifikation, Verpackung, Kennzeichnung, MOQ, Zahlung, Lieferung und Kapazität','Quellenprüfung in Türkiye und geeigneten Märkten; Vergleich der Konditionen','Prüfbare Shortlist, RFQ-Tabelle und offenes Risikoregister','Auswahl einer umsetzbaren Verpackungs- und Angebotsstruktur'],
      ['Verpackungslieferanten für einen Hersteller','Auswahl von Format und Liefermodell','Material, Druck, Werkzeug, MOQ, Stückpreis, Ausschuss, Lieferzeit, Fracht und Lagerwirkung','Technische Anforderungen vereinheitlichen und Gesamtkostenszenarien modellieren','Angebotsvergleich, TCO-Sicht und Prüffragen','Entscheidung über Muster, Testproduktion oder Verhandlung']
    ]
  },
  it:{
    title:'Scenari di lavoro rappresentativi',description:'Tre scenari commerciali spiegano il metodo decisionale CTSEG senza presentare referenze clienti inventate.',
    disclaimer:'Gli scenari illustrano il metodo CTSEG. Aziende e risultati descritti non sono referenze reali né risultati già conseguiti.',
    labels:['Esigenza','Criteri valutati','Approccio CTSEG','Output commerciale','Fase decisionale'],
    items:[
      ['Pistacchi iraniani per un importatore alimentare europeo','Creare una rosa qualificata di varietà e fornitori','Varietà, calibro, origine, documenti di lotto, qualità, packaging, tempi e costo consegnato','Verifica documentale di produttore e documenti; normalizzazione con RFQ comune','Matrice di confronto, registro informazioni aperte e piano campioni','Il buyer seleziona le controparti per campioni e negoziazione'],
      ['Olio di girasole da 5 litri per un buyer istituzionale','Ricerca di fornitura in PET o latta','Specifica, packaging, etichetta, MOQ, pagamento, consegna e capacità','Screening in Türkiye e mercati idonei; confronto di requisiti e condizioni','Shortlist verificabile, tabella RFQ e rischi espliciti','Scelta della struttura di packaging e offerta sostenibile'],
      ['Confronto fornitori di imballaggio','Selezionare formato e modello di fornitura','Materiale, stampa, attrezzaggio, MOQ, prezzo, scarti, tempi, trasporto e stock','Uniformare il fabbisogno e modellare scenari di costo totale','Confronto offerte, vista TCO e domande di verifica','Decisione su campione, prova produttiva o negoziazione']
    ]
  },
  ru:{
    title:'Примеры коммерческих сценариев',description:'Три сценария показывают подход CTSEG к принятию решений без вымышленных клиентских рекомендаций.',
    disclaimer:'Сценарии приведены только для объяснения метода CTSEG. Указанные компании и результаты не являются реальными клиентскими кейсами.',
    labels:['Потребность','Критерии оценки','Подход CTSEG','Коммерческий результат','Этап решения'],
    items:[
      ['Иранские фисташки для европейского импортёра','Сформировать квалифицированный список сортов и поставщиков','Сорт, размер, происхождение, документы партии, качество, упаковка, срок и полная стоимость','Кабинетная проверка производителя и документов; единый RFQ','Матрица сравнения, список открытых данных и план образцов','Покупатель выбирает стороны для образцов и переговоров'],
      ['Подсолнечное масло 5 л для корпоративного покупателя','Исследовать поставки в PET или жестяной таре','Спецификация, упаковка, этикетка, MOQ, оплата, доставка и мощность','Поиск в Türkiye и подходящих рынках; сравнение требований и условий','Проверяемый список, таблица RFQ и явные риски','Выбор реализуемой структуры упаковки и предложения'],
      ['Сравнение поставщиков упаковки','Выбрать формат и модель поставки','Материал, печать, оснастка, MOQ, цена, отходы, срок, перевозка и запас','Привести требования к единому формату и смоделировать совокупную стоимость','Сравнение предложений, TCO и вопросы проверки','Решение об образце, пробной партии или переговорах']
    ]
  },
  fa:{
    title:'سناریوهای نمونه برای تصمیم‌گیری',description:'سه سناریوی تجاری برای توضیح روش تصمیم‌گیری CTSEG بدون ارائه مشتریان ساختگی.',
    disclaimer:'این سناریوها جنبه توضیحی دارند و شرکت‌های ذکرشده ارجاع مستقیم مشتریان واقعی نیستند.',
    labels:['نیاز','معیارهای ارزیابی‌شده','رویکرد CTSEG','خروجی تجاری ساختاریافته','مرحله تصمیم‌گیری'],
    items:[
      ['مقایسه پسته ایرانی برای واردکننده مواد غذایی در اروپا','ایجاد فهرست کوتاه از واریته و تأمین‌کننده مناسب','واریته، سایز، مبدأ، اسناد محموله، پارامترهای کیفی و هزینه کل تحویل','اعتباربرسنجی تولیدکننده و اسناد؛ نرمال‌سازی پیشنهادات از طریق RFQ مشترک','ماتریس مقایسه و طرح ارزیابی نمونه','خریدار طرف‌های تجاری را برای نمونه‌گیری و مذاکره انتخاب می‌کند'],
      ['تحقیق روغن آفتابگردان ۵ لیتری برای خریدار شرکتی','تحقیق منابع مناسب در بسته‌بندی PET یا teneke','مشخصات روغن، بسته‌بندی، برچسب‌گذاری، MOQ، ödeme و مدل تحویل','غربالگری منابع در ترکیه و بازارهای مناسب; مقایسه الزامات','فهرست کوتاه قابل‌بررسی، جدول RFQ و ریسک‌های مشخص','خریدار ساختار بسته‌بندی و پیشنهاد قابل‌اجرا را انتخاب می‌کند'],
      ['مقایسه تأمین‌کننده بسته‌بندی برای تولیدکننده','انتخاب فرمت بسته‌بندی و مدل تأمین مناسب','مواد، چاپ، قالب، MOQ، قیمت واحد، ضایعات و navlun','تبدیل نیاز فنی به فرمت مشترک و مدل‌سازی سناریوهای هزینه کل','مقایسه پیشنهادات، نمای TCO و سوالات اعتباربرسنجی','تولیدکننده درباره نمونه، تولید آزمایشی یا مذاکره تصمیم می‌گیرد']
    ]
  },
  zh:{
    title:'采购决策实战落地典型场景',description:'三个具体商业实战案例，深入阐述 CTSEG 的商业决策方法论，杜绝任何虚构客户案例。',
    disclaimer:'本部分内容为阐释 CTSEG 决策与评估方法的典型场景示例；文中所涉公司及商业输出不构成特定真实客户背书或已完成的特定历史记录。',
    labels:['采购需求背景','核心评估维度与标准','CTSEG 落地实施路径','标准化商业交付成果','最终商业决策节点'],
    items:[
      ['欧洲食品进口商大宗采购优质伊朗开心果选型与寻源','精准锁定契合目标市场的开心果品种与合规供应商短名单','品种规格 (Akbari/Kaleghouchi/Fandoghi)、果仁大小、真实产地、批次化验单、黄曲霉毒素限量、包装方案、交货期及到岸总成本 (TCO)','生产商工商与资质桌面尽职调查；通过标准化统一 RFQ 消除报价差异，开展横向价格与条款归一化比对','全维度供应商对比矩阵、待核验风险清单以及标准化样品检测与抽验方案','买方自主选定进入样品盲测与最终商业合同谈判的候选工厂名单'],
      ['大型机构买家大宗采购 5 升规格小包装精炼葵花籽油','在土耳其及成熟供应地筛选具备大宗稳定供货能力的包装食用油油厂','油脂理化指标（酸价、过氧化值）、PET/铁桶包装抗压强度、标签合规语言、起订量 (MOQ)、付款结算方式及工厂实测产能','在土耳其本土及周边优势产区开展拉网式产能排查；横向对比技术指标契合度与离岸/到岸价格条款','可核验供应商短名单、标准化 RFQ 对比表以及进出口合规风险备忘录','买方据此确定最具商业可行性与包装强度的供货方案与采购合同条款'],
      ['食品制造企业甄选工业包装与复合材料供应商','评选最优包材物理结构、模具投入分摊与供应链持续补货模型','材质阻隔性能、印刷套色精度、模具/版费分摊与归属、阶梯 MOQ、单件成本、生产废品率、交期、物流容积率及安全库存占用','将生产技术参数转化为通用标准化询价规范，并基于不同采购周期建立总拥有成本 (TCO) 敏感性预测模型','包材报价横向对比表、TCO 全周期成本透视图以及供应商资质核验提问清单','制造企业管理层决策是否进入打样试机、小批量试产或长单框架协议签署']
    ]
  },
  vi:{
    title:'Các kịch bản làm việc đại diện',description:'Ba kịch bản thương mại giải thích phương pháp tiếp cận quyết định của CTSEG mà không sử dụng các tham chiếu khách hàng hư cấu.',
    disclaimer:'Các nghiên cứu này là các kịch bản đại diện giải thích phương pháp của CTSEG; các doanh nghiệp và kết quả được mô tả không phải là tham chiếu khách hàng thực tế hoặc kết quả đã hoàn tất.',
    labels:['Yêu cầu','Tiêu chí đánh giá','Phương pháp CTSEG','Kết quả thương mại','Giai đoạn quyết định'],
    items:[
      ['So sánh hạt dẻ cười Ba Tư cho nhà nhập khẩu thực phẩm Châu Âu','Tạo danh sách rút gọn về giống hạt và nhà cung cấp đủ điều kiện','Giống hạt, kích cỡ, nguồn gốc, chứng từ lô hàng, tiêu chuẩn chất lượng, bao bì, thời gian giao hàng và tổng chi phí cập cảng','Thẩm định nhà sản xuất và tài liệu tại văn phòng; chuẩn hóa báo giá thông qua RFQ chung','Ma trận so sánh, danh mục thông tin mở và kế hoạch đánh giá mẫu thử','Người mua lựa chọn các bên để nhận mẫu và đàm phán thương mại'],
      ['Nghiên cứu dầu hướng dương 5L cho người mua tổ chức','Nghiên cứu nguồn cung cấp trong chai PET hoặc thùng thiếc khả thi','Chỉ tiêu kỹ thuật dầu, bao bì, ghi nhãn, MOQ, thanh toán, mô hình giao hàng và năng lực nhà máy','Sàng lọc nguồn cung tại Thổ Nhĩ Kỳ và các thị trường phù hợp; so sánh yêu cầu và điều kiện thương mại','Danh sách rút gọn có thể xác minh, bảng RFQ và danh mục rủi ro rõ ràng','Người mua lựa chọn cấu trúc bao bì và báo giá khả thi'],
      ['So sánh nhà cung cấp bao bì cho nhà sản xuất','Lựa chọn định dạng bao bì và mô hình cung ứng phù hợp','Vật liệu, in ấn, khuôn mẫu, MOQ, đơn giá, hao hụt, tiến độ, cước vận chuyển và tồn kho','Chuyển đổi yêu cầu kỹ thuật sang định dạng chung và lập mô hình kịch bản tổng chi phí (TCO)','So sánh báo giá, góc nhìn TCO và các câu hỏi thẩm định nhà cung cấp','Nhà sản xuất quyết định tiến hành thử mẫu, sản xuất thử nghiệm hoặc đàm phán']
    ]
  }
};

export const guides = {
  'vegetable-oil-rfq':{
    tr:{title:'Bitkisel yağ tedarikinde RFQ kontrol listesi',description:'Karşılaştırılabilir bitkisel yağ teklifleri için ürün, ambalaj, miktar, belge, teslim ve maliyet kontrolü.',intro:'Bitkisel yağ RFQ’su yalnızca ürün adı ve birim fiyat istememelidir. Yağ türü, teknik özellik, ambalaj, miktar, teslim yeri ve belge beklentisi aynı formatta tanımlandığında teklifler karşılaştırılabilir hale gelir.',checklist:['Yağ türü, rafinasyon ve hedef kullanım','Varsa teknik limitler ve hedef pazar','PET, teneke, flexitank veya dökme ambalaj','Net hacim, koli düzeni ve palet beklentisi','Sipariş ve tahmini dönemsel miktar','Teslim ülkesi, şehir ve tercih edilen Incoterm','Etiket dili ve private label gereksinimi','COA, menşe ve parti belgesi beklentisi','Hedef tarih ve teklif geçerlilik süresi'],table:[['Karşılaştırma alanı','Neden gerekli?'],['Ürün spesifikasyonu','Farklı kalite ve rafinasyon seviyelerini ayırır.'],['Ambalaj yapısı','Dolum, malzeme ve navlun maliyetini görünür kılar.'],['Teslim kapsamı','Birim fiyat ile toplam teslim maliyetini ayırır.']],cta:'Bitkisel yağ talebinizi paylaşın'},
    en:{title:'Vegetable oil sourcing RFQ checklist',description:'A practical checklist for comparable vegetable-oil quotations covering product, packaging, quantity, documents, delivery and cost.',intro:'A vegetable-oil RFQ should request more than a product name and unit price. Quotations become comparable when oil type, technical parameters, packaging, quantities, delivery point and documentation expectations use one common format.',checklist:['Oil type, refining status and intended use','Technical limits and target market where applicable','PET, tin, flexitank or bulk packaging','Net volume, case configuration and pallet expectation','Order quantity and indicative periodic demand','Delivery country, city and preferred Incoterm','Label language and private-label requirements','COA, origin and batch-document expectations','Target date and quotation validity'],table:[['Comparison field','Why it matters'],['Product specification','Separates different quality and refining levels.'],['Packaging structure','Makes filling, material and freight costs visible.'],['Delivery scope','Separates unit price from total landed cost.']],cta:'Share your vegetable-oil requirement'},
    de:{title:'RFQ-Checkliste für die Beschaffung von Pflanzenöl',description:'Praktische Checkliste für vergleichbare Pflanzenöl-Angebote: Spezifikation, Gebinde, Mengen, Dokumente, Lieferung und Gesamtkosten.',intro:'Eine RFQ für Pflanzenöl sollte weit mehr als Produktname und Stückpreis abfragen. Angebote werden erst vergleichbar, wenn Ölsorte, Veredelung, Gebinde, Losgrößen, Lieferort und Dokumentenanforderungen vereinheitlicht sind.',checklist:['Ölsorte, Raffinationsgrad und Verwendungszweck','Spezifische Grenzwerte und Zielmarktstandards','PET, Weißblechkanister, Flexitank oder Tankwagen','Nettovolumen, Kartonschema und Palettierung','Bestellmenge und geschätzter Jahresbedarf','Lieferland, Zielhafen/Stadt und gewünschter Incoterm','Etikettensprache und Eigenmarkenanforderungen','COA, Ursprungszeugnis und Chargennachweise','Zieltermin und Bindefrist des Angebots'],table:[['Prüffeld','Kommerzielle Relevanz'],['Produktspezifikation','Trennt Qualitäts- und Veredelungsstufen sauber.'],['Gebindestruktur','Macht Abfüll-, Material- und Transportkosten transparent.'],['Lieferkonditionen','Trennt Ab-Werk-Preis von tatsächlichen Gesamtanlandekosten.']],cta:'Pflanzenöl-Bedarf anfragen'},
    it:{title:'Checklist RFQ per l’approvvigionamento di oli vegetali',description:'Guida pratica per offerte confrontabili su oli vegetali: parametri tecnici, packaging, volumi, certificati e costi di consegna.',intro:'Una RFQ per oli vegetali non deve limitarsi a prodotto e prezzo unitario. I preventivi diventano comparabili quando tipologia, raffinazione, imballaggio, quantità, resa e documenti seguono un formato standard.',checklist:['Tipologia di olio, grado di raffinazione e uso finale','Limiti analitici e requisiti normativi del mercato target','Imballaggio: PET, latta, flexitank o rinfusa','Volume netto, configurazione collo e pallettizzazione','Quantitativo d’ordine e fabbisogno stimato periodico','Paese di consegna, porto/città e Incoterm desiderato','Lingua dell’etichetta ed eventuale private label','COA, certificato d’origine e documenti di lotto','Data di consegna target e validità dell’offerta'],table:[['Ambito di confronto','Motivazione'],['Specifica tecnica','Distingue i livelli qualitativi e di raffinazione.'],['Struttura del packaging','Evidenzia costi di riempimento, materiale e resa di carico.'],['Resa di consegna','Distingue il prezzo franco fabbrica dal costo totale sbarcato.']],cta:'Richiedi quotazione oli vegetali'},
    ru:{title:'Чек-лист составления RFQ на поставку растительных масел',description:'Практическое руководство для получения сопоставимых коммерческих предложений: спецификация, фасовка, логистика, документы и совокупные затраты.',intro:'Запрос предложений (RFQ) на растительное масло должен содержать значительно больше параметров, чем наименование и базовая цена. Предложения становятся сопоставимыми, когда тип масла, очистка, упаковка, объём и базис поставки стандартизированы.',checklist:['Тип масла, степень рафинации и назначение','Физико-химические показатели и стандарты целевого рынка','Упаковка: ПЭТ, жестяная тара, флекситанк или налив','Объём фасовки, кратность коробок и схема паллетирования','Объём разовой партии и плановая периодичность поставок','Страна, пункт назначения и предпочтительный Incoterms','Язык маркировки и требования к СТМ (Private Label)','Сертификаты качества (COA), происхождение и документы партии','Срок поставки и период действия коммерческого предложения'],table:[['Параметр сравнения','Значение для оценки'],['Спецификация продукта','Разделяет категории качества и глубину переработки.'],['Формат упаковки','Показывает затраты на розлив, тару и коэффициент загрузки.'],['Базис поставки','Отделяет цену завода от полной стоимости доставки на склад.']],cta:'Отправить запрос на растительное масло'},
    fa:{title:'چک‌لیست تدوین RFQ برای تأمین روغن‌های گیاهی',description:'راهنمای کاربردی برای دریافت پیش‌فاکتورهای قابل مقایسه در تأمین روغن: مشخصات، بسته‌بندی، مقادیر، اسناد و هزینه تمام‌شده.',intro:'یک استعلام قیمت (RFQ) حرفه‌ای برای روغن‌های گیاهی نباید صرفاً نام کالا و قیمت واحد را درخواست کند. پیشنهادات تنها زمانی قابل مقایسه خواهند بود که نوع روغن، درجه تصفیه، نوع بسته‌بندی، حجم سفارش، محل تحویل و اسناد در یک ساختار واحد استاندارد تعریف شوند.',checklist:['نوع روغن، وضعیت تصفیه و کاربرد نهایی','محدودیت‌های فنی و استانداردهای بازار مقصد','بسته‌بندی: پت (PET)، حلب، فلکسی‌تانک یا فله','حجم خالص، آرایش کارتن و نحوه چیدمان روی پالت','میزان سفارش در هر پارت و برآورد تقاضای دوره‌ای','کشور، شهر مقصد و ترم تحویل (Incoterms) مورد نظر','زبان برچسب و الزامات تولید تحت برند اختصاصی (Private Label)','برگه آنالیز (COA)، گواهی مبدأ و اسناد بازرسی محموله','تاریخ هدف برای تحویل و مهلت اعتبار پیشنهاد قیمت'],table:[['محور مقایسه','علت ضرورت'],['مشخصات فنی محصول','تمایز دقیق بین سطوح مختلف کیفی و درجات تصفیه.'],['ساختار بسته‌بندی','شفاف‌سازی هزینه‌های پرکنی، متریال و ظرفیت بارگیری کانتینر.'],['شرایط تحویل','تفکیک قیمت درب کارخانه از بهای تمام‌شده نهایی در مقصد.']],cta:'ارسال درخواست استعلام روغن گیاهی'},
    zh:{"title":"大宗植物油跨境采购 RFQ 询价必备核对清单","description":"针对油品指标、包装形式、订购体量、单证资质、交付条款与综合成本的专业植物油 RFQ 架构指南。","intro":"一份专业严谨的大宗植物油 RFQ 绝不能仅仅索要油品名称与出厂单价。只有将油脂品类、精炼等级、包装形态、起订体量、交付口岸及必备单证置于统一标准化格式下，各方报价才具备真实的商业可比性。","checklist":["油脂种类、精炼工艺状态与最终工业/食用用途","特定理化指标限值（如酸价、过氧化值）及目标国准入标准","包装形态要求：小包装 (PET/听装)、集装箱液袋 (Flexitank) 或散装船运","净重规格、外箱装箱率及标准托盘打托排布要求","单次采购订单体量 (PO) 及年度/季度周期性采购需求预估","交付国家、目的港口及首选 Incoterms 交付贸易术语","外包装标签语言要求与 OEM / 贴牌定制 (Private Label) 规格","质检证书 (COA)、原产地证书及批次出厂单证清单要求","目标交付时间节点与本次报价书面有效期限"],"table":[["比价核心维度","重要性与必要性说明"],["产品技术规格与理化指标","严格区分不同加工深度、精炼级别与品质档次。"],["包装形态与材质结构","真实反映灌装工时、包材损耗及海运集装箱装载容积率成本。"],["交付范围与 Incoterms","清晰界定离岸单价与最终到岸综合总成本 (Landed Cost) 的界限。"]],"cta":"提交您的大宗植物油采购与询价需求"},
    vi:{"title":"Danh mục kiểm tra RFQ thu mua dầu thực vật","description":"Bản kiểm tra thực tế cho các báo giá dầu thực vật bao gồm sản phẩm, bao bì, số lượng, chứng từ, giao hàng và chi phí.","intro":"Một bản RFQ dầu thực vật cần yêu cầu nhiều hơn tên sản phẩm và đơn giá đơn thuần. Báo giá chỉ có thể so sánh khi loại dầu, thông số kỹ thuật, bao bì, số lượng, điểm giao hàng và chứng từ được chuẩn hóa trong cùng một định dạng.","checklist":["Loại dầu, cấp độ tinh luyện và mục đích sử dụng","Các chỉ tiêu kỹ thuật và tiêu chuẩn thị trường mục tiêu","Quy cách bao bì: chai PET, hộp thiếc, túi flexitank hoặc bồn rời","Thể tích tịnh, quy cách thùng và tiêu chuẩn đóng pallet","Số lượng đặt hàng và nhu cầu định kỳ dự kiến","Quốc gia, thành phố giao hàng và điều kiện Incoterms ưu tiên","Ngôn ngữ nhãn mác và yêu cầu thương hiệu riêng (Private Label)","Hồ sơ COA, chứng nhận xuất xứ và chứng từ lô hàng","Thời hạn giao hàng và hiệu lực của báo giá"],"table":[["Hạng mục so sánh","Tầm quan trọng"],["Thông số kỹ thuật sản phẩm","Phân định rõ ràng các cấp chất lượng và tinh luyện."],["Cấu trúc bao bì","Làm rõ chi phí chiết rót, vật liệu và vận chuyển."],["Phạm vi giao hàng","Tách biệt đơn giá xuất xưởng và tổng chi phí cập cảng."]],"cta":"Gửi yêu cầu thu mua dầu thực vật của bạn"}
  },
  'nuts-quality-documents':{
    tr:{title:'Kuruyemiş ve kuru meyvede kalite ve belge kontrolü',description:'Parti bazlı kalite, menşe, analiz, numune ve izlenebilirlik kontrollerini yapılandıran kısa satın alma rehberi.',intro:'Kuruyemiş ve kuru meyvede kalite yalnızca ürün fotoğrafı veya genel sertifika listesiyle doğrulanamaz. Çeşit, kalibre, nem, kusur, analiz, ambalaj ve parti belgeleri birlikte değerlendirilmelidir.',checklist:['Ürün çeşidi, menşe ve hasat dönemi','Kalibre, renk, bütünlük ve kusur tanımı','Nem ve hedef kullanıma uygunluk','Aflatoksin, pestisit ve mikrobiyoloji beklentisi','Parti bazlı COA ve izlenebilirlik','Numune ile sevk partisinin eşleştirilmesi','Ambalaj bariyeri ve depolama koşulları','Etiket, lot kodu ve raf ömrü bilgisi','Hedef pazar ve alıcıya özgü belge listesi'],table:[['Kontrol','Doğrulama yöntemi'],['Fiziksel kalite','Onaylı numune ve yazılı spesifikasyon'],['Analiz','Parti bazlı laboratuvar sonucu veya COA'],['İzlenebilirlik','Lot kodu, üretici ve menşe kaydı']],cta:'Numune ve belge talebi gönderin'},
    en:{title:'Nuts and dried fruit quality and document control',description:'A concise sourcing guide for batch-level quality, origin, analysis, sampling and traceability checks.',intro:'Quality in nuts and dried fruit cannot be established through product photography or a generic certificate list alone. Variety, size, moisture, defects, analysis, packaging and batch documentation must be assessed together.',checklist:['Variety, origin and crop period','Size, colour, integrity and defect definition','Moisture and suitability for intended use','Aflatoxin, pesticide and microbiology requirements','Batch-level COA and traceability','Matching the approved sample to the shipment lot','Packaging barrier and storage conditions','Label, lot code and shelf-life information','Target-market and buyer-specific document list'],table:[['Control','Verification method'],['Physical quality','Approved sample and written specification'],['Analysis','Batch-level laboratory result or COA'],['Traceability','Lot code, producer and origin record']],cta:'Request sample and document details'},
    de:{title:'Qualitäts- und Dokumentenkontrolle bei Nüssen und Trockenfrüchten',description:'Kompakter Leitfaden für Chargenqualität, Herkunft, Laboranalysen, Probenzug und Rückverfolgbarkeit.',intro:'Qualität bei Nüssen und Trockenfrüchten lässt sich nicht allein durch Produktfotos oder allgemeine Zertifikate belegen. Sorte, Kaliber, Feuchte, Mängelquoten, Analytik, Barriereverpackung und Chargendokumente müssen ganzheitlich geprüft werden.',checklist:['Sortenreinheit, Ursprung und Erntejahr','Kaliber, Farbausprägung, Ganzfruchtanteil und Toleranzen','Restfeuchte und Eignung für den Einsatzzweck','Aflatoxine, Pestizidrückstände und Mikrobiologie','Chargenbezogene Analysenzertifikate (COA)','Abgleich von Freigabemuster und Auslieferungscharge','Verpackungsbarriere und Vorgaben für temperaturgeführte Lagerung','Etikettierung, Lot-Nummern und Mindesthaltbarkeit','Zoll- und marktspezifische Konformitätsnachweise'],table:[['Kontrollpunkt','Verifikationsmethode'],['Physikalische Qualität','Freigegebenes Muster und verbindliche Spezifikation'],['Laboranalytik','Akkreditierte Laborbefunde je Charge (COA)'],['Rückverfolgbarkeit','Lot-Code, Primärerzeuger und Herkunftsnachweis']],cta:'Muster- und Dokumentenprüfung anfordern'},
    it:{title:'Controllo qualità e documentale per frutta secca ed essiccata',description:'Guida operativa per verifiche su qualità di lotto, origine, analisi di laboratorio, campionamento e tracciabilità.',intro:'La qualità di frutta secca ed essiccata non si valuta con una foto o un certificato generico. Varietà, calibro, umidità, difetti visivi, analisi chimiche, imballaggio e fascicolo di lotto vanno esaminati congiuntamente.',checklist:['Varietà botanica, origine e anno di raccolta','Calibro, colore, integrità e percentuale tollerata di difetti','Umidità relativa e destinazione d’uso industriale o retail','Aflatossine, residui di fitofarmaci e profilo microbiologico','Certificato di analisi (COA) per singolo lotto','Corrispondenza tra campione approvato e lotto spedito','Barriera dell’imballaggio e condizioni di stoccaggio idonee','Etichettatura, codice lotto e durabilità del prodotto','Documentazione obbligatoria per il mercato di destino'],table:[['Controllo','Metodo di verifica'],['Qualità fisica','Campione di riferimento e specifica tecnica concordata'],['Analisi di laboratorio','Rapporto di prova accreditato per lotto (COA)'],['Tracciabilità','Codice lotto, anagrafica produttore e certificato d’origine']],cta:'Richiedi verifica campioni e documenti'},
    ru:{title:'Контроль качества и документации: орехи и сухофрукты',description:'Практическое руководство по попартийной проверке качества, происхождения, лабораторных анализов, отбору проб и прослеживаемости.',intro:'Качество орехов и сухофруктов невозможно подтвердить только фотографиями или общими сертификатами соответствия. Сорт, калибр, влажность, дефекты, лабораторные протоколы, барьерная упаковка и партионные документы оцениваются в комплексе.',checklist:['Сортовая принадлежность, происхождение и год урожая','Калибр, цвет, целостность и процент дефектных плодов','Показатели влажности и соответствие назначению','Афлатоксины, пестициды и микробиологические нормы','Попартийный протокол испытаний (COA) и прослеживаемость','Сверка утверждённого образца с отгружаемой партией','Барьерные свойства упаковки и условия хранения','Маркировка, номер партии (Lot) и срок годности','Пакет разрешительных документов для целевого рынка'],table:[['Объект проверки','Метод верификации'],['Физические параметры','Утверждённый эталонный образец и спецификация'],['Лабораторный анализ','Аккредитованный протокол испытаний партии (COA)'],['Прослеживаемость','Номер лота, производитель и сертификат происхождения']],cta:'Запросить проверку образцов и документов'},
    fa:{title:'کنترل کیفیت و اسناد پارت در تأمین خشکبار و میوه خشک',description:'راهنمای اجرایی برای ارزیابی کیفیت مبتنی بر پارت، مبدأ واقعی، آنالیز آزمایشگاهی، تطبیق نمونه و قابلیت ردگیری.',intro:'کیفیت در خشکبار و میوه خشک صرفاً با عکس محصول یا یک گواهی عمومی اثبات نمی‌شود. واریته، کالیبر، درصد رطوبت، ضایعات مجاز، آزمون‌های آزمایشگاهی، ویژگی‌های نفوذناپذیری بسته‌بندی و مدارک رسمی هر پارت باید هم‌زمان بررسی شوند.',checklist:['نوع واریته، مبدأ واقعی و فصل برداشت','کالیبر، یکدستی رنگ، درصد خندانی/سالم بودن و آستانه عیوب','میزان رطوبت و تناسب با نوع مصرف صنعتی یا آجیلی','الزامات مربوط به آفلاتوکسین، باقیمانده سموم و بار میکروبی','برگه آنالیز آزمایشگاهی (COA) معتبر برای همان پارت','تطبیق فیزیکی و آزمایشگاهی نمونه تأییدشده با محموله ارسالی','کیفیت لفاف بسته‌بندی و شرایط استاندارد نگهداری در انبار','اطلاعات برچسب، شماره لات (Lot Number) و تاریخ انقضا','فهرست اسناد و الزامات اختصاصی گمرک و بازار هدف'],table:[['محور کنترل','روش اعتبارسنجی'],['کیفیت فیزیکی و ظاهری','نمونه شاهد تأییدشده و مشخصات فنی مکتوب'],['آنالیز شیمیایی و بهداشتی','نتیجه آزمایشگاه مرجع یا COA پارت مربوطه'],['قابلیت ردگیری زنجیره تأمین','کد پارت، پرونده تولیدکننده و گواهی مبدأ']],cta:'درخواست ارزیابی نمونه و اسناد'},
    zh:{"title":"坚果与脱水干果大宗采购品质把控与批次单证审核指南","description":"系统梳理批次级品质判定、真实原产地溯源、权威理化化验、样品留样比对及全程追溯机制的实战采购手册。","intro":"在大宗坚果与干果国际贸易中，产品品质绝不能仅凭一张静态外观照片或一份宽泛的通用企业证书予以判定。必须将品种纯度、颗粒等级规格、水分活度、缺陷容差、第三方实验室指标、包装隔氧防潮性能以及出厂批次单证进行一体化严格评估。","checklist":["植物学品种纯度、真实产地溯源及确切采收年份/季节","颗粒规格分级 (Calibre)、色泽一致性、果型完整度及瑕疵容差","水分活度 (Water Activity) 与实际工业加工/零售分装适配度","黄曲霉毒素 (Aflatoxins)、农药残留限量及微生物卫生达标要求","基于具体出厂批次的第三方分析检测报告 (COA) 与溯源凭证","将前期书面确认的封存标准样品与实际装船发运批次进行逐项比对","外包装阻隔材料等级、真空/充氮保鲜工艺及温控仓储标准","外箱标签内容、批次追踪码 (Lot Code) 及保质期喷码","目标进出口国海关与食品检验检疫部门必备的法定单证清单"],"table":[["核查核心环节","权威验证方式与落地手段"],["物理外观与感官品质","封存确认的标准对照样品及双方法定签字技术规格书。"],["实验室理化与卫生检测","具备 CNAS/ILAC 国际互认资质的第三方独立检测报告 (COA)。"],["供应链可追溯性机制","全链路出厂批号 (Lot No.)、生产主体编码及官方原产地证书。"]],"cta":"发起坚果干果样品调样与单证核验"},
    vi:{"title":"Kiểm soát chất lượng và chứng từ trong thu mua hạt & trái cây khô","description":"Hướng dẫn thu mua thực tế về chất lượng theo lô, xuất xứ, phân tích phòng thí nghiệm, mẫu thử và truy xuất nguồn gốc.","intro":"Chất lượng trong ngành hạt và trái cây khô không thể chỉ xác định qua hình ảnh sản phẩm hay danh mục chứng chỉ chung. Chủng loại, kích cỡ, độ ẩm, tỷ lệ lỗi, phân tích phòng thí nghiệm, bao bì và chứng từ lô hàng phải được đánh giá đồng bộ.","checklist":["Chủng loại, nguồn gốc và vụ mùa thu hoạch","Kích cỡ, màu sắc, độ nguyên vẹn và định nghĩa tỷ lệ lỗi","Độ ẩm và tính phù hợp với mục đích sử dụng","Yêu cầu về aflatoxin, dư lượng thuốc BVTV và vi sinh","COA theo từng lô hàng và khả năng truy xuất","Đối chiếu mẫu đã duyệt với lô hàng xuất xưởng thực tế","Khả năng rào cản của bao bì và điều kiện bảo quản","Nhãn mác, mã lô (Lot code) và thông tin hạn sử dụng","Danh mục chứng từ theo yêu cầu thị trường mục tiêu"],"table":[["Hạng mục kiểm soát","Phương pháp xác minh"],["Chất lượng vật lý","Mẫu đối chứng đã duyệt và bảng thông số kỹ thuật"],["Phân tích chỉ tiêu","Kết quả xét nghiệm phòng thí nghiệm hoặc COA theo lô"],["Khả năng truy xuất","Mã lô hàng, hồ sơ nhà sản xuất và chứng nhận xuất xứ"]],"cta":"Yêu cầu kiểm tra mẫu và chứng từ"}
  },
  'packaging-moq-tco':{
    tr:{title:'Ambalaj, MOQ ve toplam maliyet karşılaştırması',description:'Ambalaj tekliflerinde kalıp, baskı, MOQ, fire, navlun ve stok etkisini birlikte değerlendirme rehberi.',intro:'Ambalaj tekliflerinde düşük birim fiyat, yüksek MOQ veya kalıp yatırımı nedeniyle en uygun seçenek olmayabilir. Karar; malzeme, baskı, üretim kaybı, navlun ve stok etkisini içeren toplam maliyet üzerinden verilmelidir.',checklist:['Ambalaj malzemesi ve teknik ölçü','Baskı yöntemi, renk ve yüzey işlemi','Kalıp veya klişe maliyeti ve mülkiyeti','Standart ve özel üretim MOQ’su','Numune ve deneme üretimi koşulları','Üretim firesi ve toleranslar','Koli, palet ve taşıma hacmi','Termin ve yeniden sipariş süresi','Stok taşıma ve tasarım değişikliği riski'],table:[['Teklif unsuru','TCO etkisi'],['MOQ','Stok, finansman ve eskime riskini değiştirir.'],['Kalıp/baskı hazırlığı','İlk sipariş ile tekrar sipariş maliyetini ayırır.'],['Navlun hacmi','Birim başına teslim maliyetini etkiler.']],cta:'Ambalaj ihtiyacınızı değerlendirin'},
    en:{title:'Packaging, MOQ and total cost comparison',description:'How to assess tooling, print, MOQ, waste, freight and inventory effects across packaging quotations.',intro:'The lowest packaging unit price may not be the best option when it requires a high MOQ or significant tooling. The decision should compare material, print, production loss, freight and inventory effects through a total-cost view.',checklist:['Packaging material and technical dimensions','Print method, colours and surface treatment','Tooling or plate cost and ownership','Standard and custom-production MOQ','Sample and production-trial terms','Production waste and tolerances','Case, pallet and transport volume','Lead time and reorder cycle','Inventory and artwork-change risk'],table:[['Quotation element','TCO effect'],['MOQ','Changes inventory, finance and obsolescence risk.'],['Tooling and print setup','Separates first-order and repeat-order cost.'],['Freight volume','Changes delivered cost per unit.']],cta:'Assess your packaging requirement'},
    de:{title:'Verpackungsbeschaffung, MOQ und Total Cost of Ownership (TCO)',description:'Ganzheitlicher Leitfaden zur Bewertung von Werkzeugkosten, Druckvorstufe, Losgrößen, Ausschuss, Frachtraum und Lagerbindung.',intro:'Der niedrigste Stückpreis bei Verpackungen ist trügerisch, wenn er an hohe Mindestbestellmengen (MOQ) oder erhebliche Werkzeuginvestitionen gebunden ist. Die Entscheidung erfordert eine Gesamtkostenbetrachtung über den gesamten Lebenszyklus.',checklist:['Materialbeschaffenheit, Barrierewerte und technische Maße','Druckverfahren, Farbanzahl und Veredelungsstufen','Druckplatten-/Werkzeugkosten und deren Eigentumsrechte','MOQ für Standard- vs. kundenindividuelle Sonderfertigung','Bedingungen für Andruckmuster und Probeläufe','Produktionsausschuss und zulässige Mengentoleranzen','Kartonmaße, Palettierungsschema und Frachtraumausnutzung','Lieferzeit für Erstauftrag und Wiederbeschaffungszyklus','Kapitalbindung im Lager und Risiko veralteter Druckbilder'],table:[['Angebotselement','Auswirkung auf die Gesamtkosten (TCO)'],['Mindestbestellmenge (MOQ)','Beeinflusst Liquidität, Lagerkosten und Verderb-/Abschreibungsrisiko.'],['Werkzeug-/Klischeekosten','Trennt die Kosten der Erstfertigung von Folgebestellungen.'],['Logistikvolumen','Bestimmt die realen Fracht- und Handlingskosten je Stück.']],cta:'Verpackungsbedarf analysieren'},
    it:{title:'Packaging, MOQ e confronto del costo totale (TCO)',description:'Come valutare impianti stampa, minimi d’ordine, sfrido, logistica e costi di stoccaggio nelle offerte di imballaggio.',intro:'Il prezzo unitario più basso per il packaging spesso non coincide con l’opzione migliore se vincolato a MOQ elevate o a costosi impianti stampa. La decisione finale deve basarsi sul Total Cost of Ownership.',checklist:['Struttura del materiale, spessore e dimensioni tecniche','Tecnologia di stampa, numero colori e nobilitazioni','Costo e proprietà di cliché, fustelle e cilindri di stampa','MOQ per formati standard e produzioni personalizzate','Condizioni per campionatura, prove pilota e collaudo','Tolleranze di produzione e percentuale di scarto','Dimensioni dei cartoni, resa su pallet e volumetria di trasporto','Tempi di consegna della prima fornitura e cicli di riordino','Oneri finanziari di giacenza e rischio di obsolescenza grafica'],table:[['Elemento di offerta','Impatto sul TCO'],['Minimo d’ordine (MOQ)','Condiziona capitale circolante, costi di magazzino e obsolescenza.'],['Impianti e avviamento stampa','Differenzia il costo del primo ordine dai lotti successivi.'],['Volumetria logistica','Incide direttamente sul costo effettivo di trasporto per unità.']],cta:'Valuta il fabbisogno di packaging'},
    ru:{title:'Упаковка, минимальный заказ (MOQ) и совокупная стоимость (TCO)',description:'Методика оценки затрат на клише, оснастку, минимальные партии, технологический брак, логистику и заморозку оборотного капитала.',intro:'Минимальная цена за единицу упаковки не всегда выгодна, если требует завышенного MOQ или значительных затрат на оснастку. Решение о выборе поставщика упаковки должно приниматься на основе расчёта полной стоимости владения (TCO).',checklist:['Материал, барьерные свойства и технические размеры','Технология печати, красочность и финишная отделка','Стоимость клише/форм и право собственности на оснастку','MOQ для стандартной номенклатуры и индивидуального заказа','Условия предоставления сигнальных образцов и пробного тиража','Технологический отход и допустимые отклонения по тиражу','Параметры коробов, паллетизация и объёмная загрузка транспорта','Сроки изготовления первого заказа и цикл повторных поставок','Затраты на хранение запасов и риск морального устаревания дизайна'],table:[['Элемент коммерческого предложения','Влияние на совокупную стоимость (TCO)'],['Минимальный объём заказа (MOQ)','Влияет на оборотные средства, расходы на склад и риски списания.'],['Оснастка и допечатная подготовка','Разделяет себестоимость первого тиража и повторных партий.'],['Логистический объём тары','Определяет фактические расходы на доставку единицы продукции.']],cta:'Оценить потребность в упаковке'},
    fa:{title:'تأمین بسته‌بندی، حداقل سفارش (MOQ) و بهینه‌سازی هزینه کل (TCO)',description:'راهنمای ارزیابی هزینه قالب، چاپ، حداقل سفارش، ضایعات تولید، حجم حمل و خواب سرمایه در استعلام‌های بسته‌بندی.',intro:'پایین‌ترین قیمت واحد در پیشنهادهای بسته‌بندی لزوماً بهترین انتخاب نیست، به‌ویژه زمانی که مستلزم MOQ سنگین یا هزینه گزاف ساخت قالب و کلیشه باشد. تصمیم‌گیری هوشمندانه مستلزم محاسبه دقیق هزینه کل مالکیت (TCO) است.',checklist:['جنس متریال، ضخامت و ابعاد دقیق مهندسی بسته‌بندی','روش چاپ، تعداد رنگ و خدمات تکمیلی روی سطوح','هزینه ساخت کلیشه/قالب و تعیین مالکیت حقوقی آن','حداقل سفارش برای محصولات استاندارد و تولید اختصاصی','شرایط ساخت نمونه اولیه و تست خط تولید آزمایشی','درصد ضایعات مجاز در خط بسته‌بندی و تلورانس‌های تیراژ','ابعاد کارتن مادر، چیدمان پالت و ضریب اشغال فضای حمل','زمان تحویل سفارش اول و دوره زمانی سفارش‌گذاری مجدد','ریسک خواب سرمایه در انبار و خطر تغییر الزامات گرافیکی'],table:[['عنصر ساختار قیمت','اثرگذاری بر هزینه کل (TCO)'],['حداقل تیراژ سفارش (MOQ)','تغییر در نقدینگی در گردش، هزینه انبارداری و ریسک ابطال طرح.'],['هزینه آماده‌سازی قالب و کلیشه','تفکیک سرمایه‌گذاری اولیه از بهای تمام‌شده در پارت‌های بعدی.'],['ضریب اشغال فضای بارگیری','تأثیر مستقیم بر هزینه حمل و ترخیص به ازای هر واحد کالا.']],cta:'بررسی و بهینه‌سازی تأمین بسته‌بندی'},
    zh:{"title":"工业包材采购、最低起订量 (MOQ) 与总拥有成本 (TCO) 决策模型","description":"全面量化模具版费分摊、阶梯起订量、上机质损、海运容积率及库存资金占用的专业包材采购决策指南。","intro":"在包装材料与容器采购中，最低的出厂单件报价往往暗藏高额隐性成本——过高的最低起订量 (MOQ) 或巨额模具投入可能大幅拉高综合单价。唯有从原材料物理阻隔性能、印刷制版、良品率、集装箱装载容积率及仓储周转全生命周期测算总拥有成本 (TCO)，方能做出最优商业决策。","checklist":["包材物理基材成分、阻隔阻湿指标及精密工程尺寸","印刷工艺标准（凹印/柔印/胶印）、色序数量及表面特殊处理","印刷版费/注塑模具开发成本构成及其法律资产归属权","标准现货规格与定制化生产 (Custom-made) 阶梯 MOQ 界定","打样确认、试机打样 (Trial run) 费用分摊与周期条款","工业生产良品率基准、上机损耗率与交货正负公差","外箱装箱量、标准托盘排布高度及集装箱海运容积装载率","首期生产交期与后续常规补货周期 (Reorder Lead Time)","安全库存资金利息占用、仓储仓租与包装改版报废风险"],table:[["报价构成核心要素","对总拥有成本 (TCO) 的实质性影响"],["最低起订量 (MOQ)","直接左右企业营运资金流动性、安全库存周转及包装报废风险。"],["模具开发与制版调试成本","明确区分首期初始固定投入与后续规模化复购摊薄成本的真实边界。"],["外箱与托盘物流装载容积率","直接决定单件包装在海陆空运输途中的实际到岸分摊运费。"]],"cta":"发起包材采购与 TCO 综合测算"},
    vi:{"title":"So sánh bao bì, MOQ và tổng chi phí sở hữu (TCO)","description":"Cách đánh giá chi phí khuôn mẫu, in ấn, MOQ, hao hụt, vận chuyển và tác động tồn kho trong các báo giá bao bì.","intro":"Đơn giá bao bì thấp nhất có thể không phải là lựa chọn tốt nhất nếu đòi hỏi MOQ quá cao hoặc chi phí khuôn mẫu lớn. Quyết định cần so sánh toàn diện vật liệu, in ấn, hao hụt sản xuất, vận chuyển và tồn kho qua góc nhìn tổng chi phí (TCO).","checklist":["Vật liệu bao bì và kích thước kỹ thuật","Phương pháp in ấn, màu sắc và xử lý bề mặt","Chi phí khuôn/bản in và quyền sở hữu","MOQ cho quy cách chuẩn và sản xuất tùy chỉnh","Điều kiện thử mẫu và chạy thử nghiệm sản xuất","Tỷ lệ hao hụt sản xuất và dung sai cho phép","Quy cách thùng, pallet và thể tích vận chuyển","Thời gian giao hàng ban đầu và chu kỳ tái đặt hàng","Rủi ro chi phí tồn kho và thay đổi thiết kế bao bì"],table:[["Hạng mục báo giá","Tác động đến TCO"],["Số lượng đặt hàng tối thiểu (MOQ)","Thay đổi chi phí lưu kho, tài chính và rủi ro tồn kho lỗi thời."],["Chi phí khuôn và bản in","Phân tách chi phí đơn hàng đầu tiên và các đơn hàng lặp lại."],["Thể tích vận chuyển","Thay đổi chi phí vận chuyển thực tế trên mỗi đơn vị sản phẩm."]],"cta":"Đánh giá nhu cầu bao bì của bạn"}
  }
} as const;

export const formCopy: Localized<{
  title:string;intro:string;labels:string[];requestOptions:string[];submit:string;privacy:string;
  success:string;error:string;fallback:string;download:string;
}> = {
  tr:{title:'Ticari değerlendirme talebi',intro:'İhtiyacı karşılaştırılabilir ve doğrulanabilir bir çalışma kapsamına dönüştürmek için temel bilgileri paylaşın.',labels:['Ad soyad','Şirket','Kurumsal e-posta','Telefon / WhatsApp','Ülke','Talep türü','Ürün veya hizmet','Tahmini miktar','Teslim ülkesi / şehri','Hedef tarih','Ek açıklama'],requestOptions:['Tedarik araştırması','Tedarikçi doğrulaması','Teklif ve maliyet karşılaştırması','Numune ve belge koordinasyonu','Pazar girişi','Diğer'],submit:'Ticari Değerlendirme Talebi Gönder',privacy:'Gizlilik bildirimini okudum ve talebimin yanıtlanması için bu bilgilerin işlenmesini kabul ediyorum.',success:'Talebiniz güvenli biçimde iletildi. CTSEG kapsamı değerlendirecektir.',error:'Gönderim tamamlanamadı. Bilgileriniz kaydedilmedi.',fallback:'Özet dosyasını indirip kurumsal e-postanızdan info@ctseg.com.tr adresine ek olarak gönderebilirsiniz.',download:'Talep özetini indir'},
  en:{title:'Commercial assessment request',intro:'Share the core facts needed to turn your requirement into a comparable and verifiable work scope.',labels:['Full name','Company','Business email','Phone / WhatsApp','Country','Request type','Product or service','Estimated quantity','Delivery country / city','Target date','Additional details'],requestOptions:['Supplier sourcing','Supplier verification','Quotation and cost comparison','Sample and document coordination','Market entry','Other'],submit:'Request a Commercial Assessment',privacy:'I have read the privacy notice and consent to this information being processed to respond to my request.',success:'Your request was transmitted securely. CTSEG will assess the scope.',error:'Submission could not be completed. Your information was not stored.',fallback:'Download the summary and attach it to an email from your business account to info@ctseg.com.tr.',download:'Download request summary'},
  de:{title:'Anfrage zur kommerziellen Bewertung',intro:'Teilen Sie die Kerndaten mit, damit Ihr Bedarf in einen vergleichbaren und prüfbaren Arbeitsumfang überführt werden kann.',labels:['Vor- und Nachname','Unternehmen','Geschäftliche E-Mail','Telefon / WhatsApp','Land','Anfrageart','Produkt oder Dienstleistung','Geschätzte Menge','Lieferland / Stadt','Zieldatum','Zusätzliche Angaben'],requestOptions:['Lieferantenrecherche','Lieferantenprüfung','Angebots- und Kostenvergleich','Muster- und Dokumentenkoordination','Markteintritt','Sonstiges'],submit:'Kommerzielle Bewertung anfragen',privacy:'Ich habe den Datenschutzhinweis gelesen und stimme der Verarbeitung zur Beantwortung meiner Anfrage zu.',success:'Ihre Anfrage wurde sicher übermittelt. CTSEG prüft den Umfang.',error:'Die Übermittlung konnte nicht abgeschlossen werden. Ihre Angaben wurden nicht gespeichert.',fallback:'Laden Sie die Zusammenfassung herunter und senden Sie sie als Anlage von Ihrer geschäftlichen E-Mail an info@ctseg.com.tr.',download:'Anfragezusammenfassung herunterladen'},
  it:{title:'Richiesta di valutazione commerciale',intro:'Condividi i dati essenziali per trasformare l’esigenza in un ambito di lavoro confrontabile e verificabile.',labels:['Nome e cognome','Azienda','E-mail aziendale','Telefono / WhatsApp','Paese','Tipo di richiesta','Prodotto o servizio','Quantità stimata','Paese / città di consegna','Data obiettivo','Dettagli aggiuntivi'],requestOptions:['Ricerca fornitori','Verifica fornitori','Confronto offerte e costi','Coordinamento campioni e documenti','Ingresso nel mercato','Altro'],submit:'Richiedi una valutazione commerciale',privacy:'Ho letto l’informativa privacy e acconsento al trattamento per ricevere risposta alla richiesta.',success:'La richiesta è stata trasmessa in modo sicuro. CTSEG valuterà l’ambito.',error:'Invio non completato. Le informazioni non sono state salvate.',fallback:'Scarica il riepilogo e allegalo a un’e-mail aziendale indirizzata a info@ctseg.com.tr.',download:'Scarica il riepilogo'},
  ru:{title:'Запрос коммерческой оценки',intro:'Поделитесь основными данными, необходимыми для превращения вашей потребности в сравнимый и проверяемый объём работ.',labels:['ФИО','Компания','Корпоративный e-mail','Телефон / WhatsApp','Страна','Тип запроса','Товар или услуга','Оценочный объём','Страна / город доставки','Целевая дата','Дополнительная информация'],requestOptions:['Поиск поставщиков','Проверка поставщика','Сравнение предложений и стоимости','Координация образцов и документов','Выход на рынок','Другое'],submit:'Запросить коммерческую оценку',privacy:'Я ознакомлен(а) с уведомлением о конфиденциальности и даю согласие на обработку этих данных для ответа на мой запрос.',success:'Ваш запрос был отправлен безопасно. CTSEG оценит объём работ.',error:'Отправка не удалась. Ваши данные не сохранены.',fallback:'Скачайте сводку и прикрепите её к письму с вашей корпоративной почты на адрес info@ctseg.com.tr.',download:'Скачать сводку'},
  fa:{title:'درخواست ارزیابی تجاری',intro:'اطلاعات اصلی مورد نیاز برای تبدیل نیاز تجاری خود به یک برنامه کاری مشخص و قابل‌بررسی را به اشتراک بگذارید.',labels:['نام و نام خانوادگی','نام شرکت','ایمیل سازمانی','شماره تلفن / واتس‌اپ','کشور','نوع درخواست','کالا یا خدمات','حجم تخمینی','کشور / شهر مقصد','تاریخ هدف','توضیحات تکمیلی'],requestOptions:['شناسایی تأمین‌کننده','اعتباربرسنجی تأمین‌کننده','مقایسه قیمت و هزینه تمام‌شده','هماهنگی نمونه و اسناد','ورود به بازار','سایر موارد'],submit:'ارسال درخواست ارزیابی تجاری',privacy:'بیانیه حفظ حریم خصوصی را مطالعه کرده‌ام و با پردازش این اطلاعات جهت پاسخگویی موافقم.',success:'درخواست شما با موفقیت ارسال شد. CTSEG به زودی آن را ارزیابی خواهد کرد.',error:'ارسال درخواست با خطا مواجه شد. اطلاعات شما ذخیره نگردید.',fallback:'می‌توانید خلاصه درخواست را دانلود کرده و از طریق ایمیل رسمی خود به info@ctseg.com.tr ارسال نمایید.',download:'دانلود خلاصه درخواست'},
  zh:{title:'商业采购与供应链评估申请',intro:'请填写关键业务信息，以便我们将您的需求转化为权责明确、可横向比价且可落地执行的专项评估方案。',labels:['联系人姓名','企业全称','企业官方邮箱','联系电话 / 微信 / WhatsApp','所在国家 / 地区','业务咨询类型','目标产品或服务名称','预估采购订购量','目标交付国家 / 目的港口','期望交付时间节点','补充说明与特殊要求'],requestOptions:['源头生产商精准发现','供应商主体与产能核验','多方报价与总成本 (TCO) 比对','样品调样与化验单证协同','土耳其及目标市场准入','其他专项委托'],submit:'提交商业评估申请',privacy:'我已阅读并知悉《隐私保护政策》，同意为响应此业务咨询处理上述企业信息。',success:'您的需求已安全提交，CTSEG 专业团队将尽快开展初步商业可行性评估。',error:'提交未能完成，系统未保留您的信息，请检查网络后重试。',fallback:'您亦可下载需求提要文档，并通过您的企业工作邮箱直接发送至 info@ctseg.com.tr。',download:'下载需求提要'},
  vi:{title:'Yêu cầu đánh giá thương mại',intro:'Chia sẻ các thông tin cốt lõi để chuyển đổi nhu cầu của bạn thành một phạm vi công việc có thể so sánh và xác minh.',labels:['Họ và tên','Tên doanh nghiệp','Email công việc','Điện thoại / Zalo / WhatsApp','Quốc gia','Loại yêu cầu','Sản phẩm hoặc dịch vụ','Số lượng ước tính','Quốc gia / thành phố nhận hàng','Thời hạn kỳ vọng','Chi tiết bổ sung'],requestOptions:['Tìm kiếm nhà cung cấp','Thẩm định nhà cung cấp','So sánh báo giá và chi phí','Điều phối mẫu và chứng từ','Tiếp cận thị trường','Khác'],submit:'Gửi yêu cầu đánh giá thương mại',privacy:'Tôi đã đọc chính sách bảo mật và đồng ý để thông tin này được xử lý nhằm phản hồi yêu cầu.',success:'Yêu cầu của bạn đã được chuyển an toàn. CTSEG sẽ đánh giá phạm vi công việc.',error:'Gửi yêu cầu không thành công. Thông tin của bạn chưa được lưu.',fallback:'Tải xuống bản tóm tắt và đính kèm vào email từ tài khoản doanh nghiệp gửi tới info@ctseg.com.tr.',download:'Tải tóm tắt yêu cầu'}
};
