import type { Locale } from './site';

export type PlatformLocale = Locale | 'fa';

type PlatformCopy = {
  eyebrow:string; title:string; lead:string;
  buyerCta:string; producerCta:string;
  pathsTitle:string; pathsLead:string;
  buyerTitle:string; buyerText:string; producerTitle:string; producerText:string;
  sectorsTitle:string; sectorsLead:string;
  sectors:Array<{title:string; text:string}>;
  corridorsTitle:string; corridorsLead:string; corridors:string[];
  processTitle:string; process:string[];
};

export const tradePlatformCopy:Record<PlatformLocale,PlatformCopy> = {
  tr:{
    eyebrow:'Uluslararası ticaret eşleştirme ve ticari koordinasyon',
    title:'Alıcıları doğru üretici ve tedarikçilerle buluşturuyoruz.',
    lead:'Ürün araştırması, tedarikçi değerlendirmesi, alıcı bulma ve ticari koordinasyon süreçlerini uluslararası pazarlarda yönetiyoruz.',
    buyerCta:'Tedarikçi arıyorum',producerCta:'Alıcı ve pazar arıyorum',
    pathsTitle:'İki yönde çalışan ticari eşleştirme',pathsLead:'Her çalışma, tarafların gerçek ihtiyacı ve uygulanabilir ticari veriler üzerinden yapılandırılır.',
    buyerTitle:'Alıcılar için',buyerText:'İhtiyacı tanımlar, üretici ve tedarikçi araştırır, doğrulama yapar, RFQ ve teklif karşılaştırmasını koordine ederiz.',
    producerTitle:'Üreticiler için',producerText:'Ürünün ticari hazırlığını değerlendirir, hedef pazar ve uygun alıcı profillerini araştırır, ilk temas ve teklif sürecini koordine ederiz.',
    sectorsTitle:'Seçili sektörlerde doğrulanabilir tedarik',sectorsLead:'Sabit bir katalog sunmak yerine, seçili ticari kategorilerde ürün, taraf, belge ve uygulanabilirlik kriterlerini birlikte değerlendiririz.',
    sectors:[
      {title:'Gıda, pirinç, tahıl ve yağlar',text:'Gıda ürünleri, pirinç, tahıllar ve markasız bitkisel yağlar için ürün ve teklif değerlendirmesi.'},
      {title:'Kuruyemiş, hurma ve kuru meyveler',text:'Ürün sınıfı, kalite, ambalaj ve pazar uygunluğu üzerinden ticari değerlendirme.'},
      {title:'Halılar ve tekstil',text:'İran halısı, el dokuması ipek halı, kumaş ve tekstil ürünleri için uzmanlık.'},
      {title:'Ambalaj, üretim girdileri ve proje tedariki',text:'Tanımlı ambalaj, teknik girdi ve proje ihtiyaçları için araştırma ve koordinasyon.'}
    ],
    corridorsTitle:'Ticaret koridorları',corridorsLead:'Türkiye merkezli koordinasyonla seçili uluslararası pazarlarda iki yönlü ticari bağlantılar.',
    corridors:['Türkiye ↔ Avrupa','Türkiye ↔ İran','İran ↔ Avrupa ve ABD','Türkiye ↔ uygun uluslararası pazarlar'],
    processTitle:'Şeffaf ve ölçülü süreç',process:['İhtiyaç tanımı','Pazar ve taraf araştırması','Doğrulama','RFQ ve teklif hazırlığı','Numune ve ticari koordinasyon','Karar ve sonraki adımlar']
  },
  en:{
    eyebrow:'International trade matching and commercial coordination',
    title:'We connect buyers with the right producers and suppliers.',
    lead:'We manage product research, supplier assessment, buyer discovery and commercial coordination across international markets.',
    buyerCta:'I need a supplier',producerCta:'I need buyers',
    pathsTitle:'Trade matching that works in both directions',pathsLead:'Every engagement is structured around a real requirement and commercially actionable information.',
    buyerTitle:'For buyers',buyerText:'We define the requirement, research and verify producers and suppliers, and coordinate RFQs and proposal comparisons.',
    producerTitle:'For producers',producerText:'We assess commercial readiness, research target markets and suitable buyer profiles, and coordinate initial outreach and proposals.',
    sectorsTitle:'Verifiable sourcing across selected categories',sectorsLead:'Rather than presenting a fixed catalogue, we assess product, counterparty, documentation and feasibility across selected commercial categories.',
    sectors:[
      {title:'Food, rice, grains and oils',text:'Product and proposal assessment for foods, rice, grains and unbranded vegetable oils.'},
      {title:'Nuts, dates and dried fruits',text:'Commercial assessment through product grade, quality, packaging and market suitability.'},
      {title:'Carpets and textiles',text:'Specialist assessment for Iranian carpets, hand-knotted silk carpets, fabrics and textiles.'},
      {title:'Packaging, production inputs and project sourcing',text:'Research and coordination for defined packaging, technical input and project requirements.'}
    ],
    corridorsTitle:'Trade corridors',corridorsLead:'Two-way commercial connections across selected international markets, coordinated from Türkiye.',
    corridors:['Türkiye ↔ Europe','Türkiye ↔ Iran','Iran ↔ Europe and the United States','Türkiye ↔ suitable international markets'],
    processTitle:'A transparent, measured process',process:['Requirement definition','Market and counterparty research','Verification','RFQ and proposal preparation','Sample and commercial coordination','Decision and next steps']
  },
  de:{
    eyebrow:'Internationale Geschäftsanbahnung und Handelskoordination',title:'Wir bringen Einkäufer mit passenden Herstellern und Lieferanten zusammen.',lead:'Wir koordinieren Produktrecherche, Lieferantenprüfung, Käufersuche und Handelsprozesse auf internationalen Märkten.',
    buyerCta:'Ich suche einen Lieferanten',producerCta:'Ich suche Käufer und Märkte',pathsTitle:'Geschäftsanbahnung in beide Richtungen',pathsLead:'Jedes Projekt basiert auf einem realen Bedarf und belastbaren kaufmännischen Angaben.',buyerTitle:'Für Einkäufer',buyerText:'Wir definieren den Bedarf, recherchieren und prüfen Hersteller und Lieferanten und koordinieren RFQs sowie Angebotsvergleiche.',producerTitle:'Für Hersteller',producerText:'Wir bewerten die Marktreife, recherchieren Zielmärkte und Käuferprofile und koordinieren Erstkontakt und Angebot.',sectorsTitle:'Prüfbare Beschaffung in ausgewählten Kategorien',sectorsLead:'Statt eines festen Katalogs bewerten wir Produkt, Gegenpartei, Dokumentation und Umsetzbarkeit in ausgewählten Geschäftskategorien.',sectors:[{title:'Lebensmittel, Reis, Getreide und Öle',text:'Produkt- und Angebotsbewertung für Lebensmittel, Reis, Getreide und unmarkierte Pflanzenöle.'},{title:'Nüsse, Datteln und Trockenfrüchte',text:'Kaufmännische Bewertung nach Sortierung, Qualität, Verpackung und Markteignung.'},{title:'Teppiche und Textilien',text:'Fachliche Bewertung iranischer Teppiche, handgeknüpfter Seidenteppiche, Stoffe und Textilien.'},{title:'Verpackung, Produktionsmittel und Projektbeschaffung',text:'Recherche und Koordination für definierte Verpackungs-, Technik- und Projektanforderungen.'}],corridorsTitle:'Handelskorridore',corridorsLead:'Bidirektionale Verbindungen in ausgewählten Märkten, koordiniert aus Türkiye.',corridors:['Türkiye ↔ Europa','Türkiye ↔ Iran','Iran ↔ Europa und USA','Türkiye ↔ geeignete internationale Märkte'],processTitle:'Transparenter Prozess',process:['Bedarf definieren','Markt- und Partnerrecherche','Prüfung','RFQ und Angebot','Muster und Koordination','Entscheidung und nächste Schritte']
  },
  it:{
    eyebrow:'Matching commerciale internazionale e coordinamento',title:'Mettiamo in contatto gli acquirenti con produttori e fornitori adatti.',lead:'Gestiamo ricerca di prodotti, valutazione dei fornitori, ricerca di buyer e coordinamento commerciale sui mercati internazionali.',buyerCta:'Cerco un fornitore',producerCta:'Cerco buyer e mercati',pathsTitle:'Matching commerciale in entrambe le direzioni',pathsLead:'Ogni incarico parte da un bisogno reale e da informazioni commerciali attuabili.',buyerTitle:'Per gli acquirenti',buyerText:'Definiamo il fabbisogno, ricerchiamo e verifichiamo produttori e fornitori, coordinando RFQ e confronto delle offerte.',producerTitle:'Per i produttori',producerText:'Valutiamo la preparazione commerciale, i mercati obiettivo e i buyer adatti, coordinando primo contatto e proposta.',sectorsTitle:'Sourcing verificabile in categorie selezionate',sectorsLead:'Non presentiamo un catalogo fisso: valutiamo prodotto, controparte, documentazione e fattibilità in categorie commerciali selezionate.',sectors:[{title:'Alimentari, riso, cereali e oli',text:'Valutazione di prodotti e offerte per alimentari, riso, cereali e oli vegetali senza marchio.'},{title:'Frutta a guscio, datteri e frutta essiccata',text:'Valutazione commerciale di classificazione, qualità, imballaggio e idoneità al mercato.'},{title:'Tappeti e tessili',text:'Valutazione specialistica di tappeti iraniani, tappeti in seta annodati a mano, tessuti e prodotti tessili.'},{title:'Imballaggi, input produttivi e sourcing di progetto',text:'Ricerca e coordinamento per esigenze definite di imballaggio, input tecnici e progetti.'}],corridorsTitle:'Corridoi commerciali',corridorsLead:'Connessioni bidirezionali in mercati selezionati, coordinate dalla Türkiye.',corridors:['Türkiye ↔ Europa','Türkiye ↔ Iran','Iran ↔ Europa e Stati Uniti','Türkiye ↔ mercati internazionali idonei'],processTitle:'Un processo trasparente',process:['Definizione esigenza','Ricerca mercato e controparti','Verifica','RFQ e proposta','Campione e coordinamento','Decisione e prossimi passi']
  },
  ru:{
    eyebrow:'Международный сорсинг и коммерческая координация',title:'Мы связываем покупателей с подходящими производителями и поставщиками.',lead:'Мы помогаем исследовать продукцию, оценивать поставщиков, находить покупателей и координировать международные коммерческие процессы.',buyerCta:'Найти поставщика',producerCta:'Найти покупателей и рынки',pathsTitle:'Коммерческий поиск для обеих сторон рынка',pathsLead:'Каждый проект строится вокруг реальной задачи и проверяемых коммерческих данных.',buyerTitle:'Для покупателей',buyerText:'Уточняем потребность, исследуем и проверяем производителей и поставщиков, координируем RFQ и сравнение предложений.',producerTitle:'Для производителей',producerText:'Оцениваем коммерческую готовность продукта, целевые рынки и профиль покупателей, координируем первый контакт и подготовку предложения.',sectorsTitle:'Проверяемый сорсинг в выбранных категориях',sectorsLead:'Мы не предлагаем фиксированный каталог, а оцениваем продукт, контрагента, документы и реализуемость в выбранных коммерческих категориях.',sectors:[{title:'Продукты питания, рис, зерновые и масла',text:'Оценка продукции и предложений по продуктам питания, рису, зерновым и растительным маслам без заявлений о наличии.'},{title:'Орехи, финики и сухофрукты',text:'Коммерческая оценка сорта, качества, упаковки и соответствия целевому рынку.'},{title:'Ковры и текстиль',text:'Профильная оценка иранских ковров, шёлковых ковров ручной работы, тканей и текстильной продукции.'},{title:'Упаковка, производственные материалы и проектный сорсинг',text:'Исследование и координация для конкретных задач по упаковке, техническим материалам и проектным закупкам.'}],corridorsTitle:'Торговые направления',corridorsLead:'Двусторонние коммерческие связи на выбранных международных рынках с координацией из Турции.',corridors:['Турция ↔ Европа','Турция ↔ Иран','Иран ↔ Европа и США','Турция ↔ подходящие международные рынки'],processTitle:'Понятный и взвешенный процесс',process:['Определение задачи','Исследование рынка и контрагентов','Проверка','Подготовка RFQ и предложения','Образцы и коммерческая координация','Решение и следующие шаги']
  },
  fa:{
    eyebrow:'تطبیق تجاری بین‌المللی و هماهنگی بازرگانی',title:'خریداران را به تولیدکنندگان و تأمین‌کنندگان مناسب متصل می‌کنیم.',lead:'پژوهش محصول، ارزیابی تأمین‌کننده، یافتن خریدار و هماهنگی تجاری را در بازارهای بین‌المللی مدیریت می‌کنیم.',buyerCta:'به دنبال تأمین‌کننده هستم',producerCta:'به دنبال خریدار و بازار هستم',pathsTitle:'تطبیق تجاری در هر دو سوی بازار',pathsLead:'هر همکاری بر پایه نیاز واقعی و اطلاعات تجاری قابل‌بررسی شکل می‌گیرد.',buyerTitle:'برای خریداران',buyerText:'نیاز را تعریف می‌کنیم، تولیدکننده و تأمین‌کننده را بررسی می‌کنیم و فرایند RFQ و مقایسه پیشنهادها را هماهنگ می‌سازیم.',producerTitle:'برای تولیدکنندگان',producerText:'آمادگی تجاری محصول، بازارهای هدف و خریداران مناسب را ارزیابی و ارتباط اولیه و ارائه پیشنهاد را هماهنگ می‌کنیم.',sectorsTitle:'تأمین قابل‌بررسی در حوزه‌های منتخب',sectorsLead:'به‌جای ارائه فهرست ثابت، محصول، طرف تجاری، اسناد و امکان اجرا را در حوزه‌های تجاری منتخب ارزیابی می‌کنیم.',sectors:[{title:'مواد غذایی، برنج، غلات و روغن‌ها',text:'ارزیابی محصول و پیشنهاد برای مواد غذایی، برنج، غلات و روغن‌های گیاهی بدون نشان تجاری.'},{title:'خشکبار، خرما و میوه‌های خشک',text:'ارزیابی تجاری درجه‌بندی، کیفیت، بسته‌بندی و تناسب محصول با بازار.'},{title:'فرش و منسوجات',text:'بررسی تخصصی فرش ایرانی، فرش ابریشم دستباف، پارچه و محصولات نساجی.'},{title:'بسته‌بندی، نهاده‌های تولید و تأمین پروژه‌ای',text:'تحقیق و هماهنگی برای نیازهای مشخص بسته‌بندی، نهاده‌های فنی و پروژه‌ها.'}],corridorsTitle:'کریدورهای تجاری',corridorsLead:'ارتباط‌های دوسویه در بازارهای منتخب با هماهنگی از ترکیه.',corridors:['ترکیه ↔ اروپا','ترکیه ↔ ایران','ایران ↔ اروپا و آمریکا','ترکیه ↔ بازارهای بین‌المللی مناسب'],processTitle:'فرایندی شفاف و سنجیده',process:['تعریف نیاز','بررسی بازار و طرف تجاری','راستی‌آزمایی','آماده‌سازی RFQ و پیشنهاد','نمونه و هماهنگی تجاری','تصمیم و گام‌های بعدی']
  },
  zh:{
    eyebrow:'国际贸易精准匹配与大宗商业协调',
    title:'为全球买家精准对接源头制造企业与合规供应商。',
    lead:'我们在跨国采购全流程中，统筹目标产品调研、工厂资质实测、海外买家发现与端到端商业协调。',
    buyerCta:'我是买家，寻找核验供应商',producerCta:'我是工厂，拓展海外市场',
    pathsTitle:'双向驱动的国际商业匹配体系',pathsLead:'每一项商务委托均立足于真实的采购需求与切实可行的商业交付数据。',
    buyerTitle:'面向全球采购商 (Buyers)',buyerText:'明确采购技术指标，实地调研并深度核验源头工厂资质，协同编制专业 RFQ 并展开总成本比价分析。',
    producerTitle:'面向源头制造企业 (Producers)',producerText:'评估产品出海商业成熟度，精准挖掘海外目标市场与匹配买家，协调样品试测与首期商业报价。',
    sectorsTitle:'深耕特色大宗与重点工业品类',sectorsLead:'我们拒绝展示虚构库存，而是在聚焦的优势品类中，一体化评估产品指标、生产主体、法定单证与履约可行性。',
    sectors:[
      {title:'大宗特色食品、原粮与植物油',text:'针对大宗食品原料、粮食作物及中性包装植物油开展产品指标与报价全方位评估。'},
      {title:'特色坚果、鲜黑椰枣与脱水干果',text:'依据品种纯度、分级规格、包装阻隔与目标国准入进行综合商业评估。'},
      {title:'传统手工地毯、丝绸与大宗纺织品',text:'提供伊朗传统手工真丝地毯、工业面料与家纺产品的专业寻源支持。'},
      {title:'工业环保包装、生产辅料与项目物资',text:'针对特定包材结构、工业原材料及工程项目物资进行专项寻源与协调。'}
    ],
    corridorsTitle:'核心贸易走廊',corridorsLead:'立足土耳其地理枢纽，构建辐射欧洲、中东及全球主要大宗贸易市场的双向连接。',
    corridors:['土耳其 ↔ 欧洲主要市场','土耳其 ↔ 中东及伊朗','伊朗 ↔ 欧洲及美洲市场','土耳其 ↔ 全球新兴贸易市场'],
    processTitle:'严谨规范的决策流程',process:['需求梳理与指标定义','市场排查与主体尽调','资质与单证交叉核验','标准 RFQ 编制与比价','样品盲测与条款谈判','商业决策与履约协同']
  },
  vi:{
    eyebrow:'Kết nối thương mại quốc tế & Điều phối thương mại',
    title:'Chúng tôi kết nối người mua với đúng nhà sản xuất và nhà cung cấp.',
    lead:'Chúng tôi quản lý nghiên cứu sản phẩm, thẩm định nhà cung cấp, tìm kiếm người mua và điều phối thương mại trên các thị trường quốc tế.',
    buyerCta:'Tôi cần tìm nhà cung cấp',producerCta:'Tôi cần tìm người mua',
    pathsTitle:'Kết nối thương mại hai chiều hiệu quả',pathsLead:'Mỗi dự án hợp tác được xây dựng dựa trên nhu cầu thực tế và thông tin thương mại có thể thực thi.',
    buyerTitle:'Dành cho người mua',buyerText:'Chúng tôi xác định yêu cầu, nghiên cứu và thẩm định nhà sản xuất/nhà cung cấp, đồng thời điều phối RFQ và so sánh báo giá.',
    producerTitle:'Dành cho nhà sản xuất',producerText:'Chúng tôi đánh giá sự sẵn sàng thương mại, nghiên cứu thị trường mục tiêu và hồ sơ người mua phù hợp, đồng thời điều phối tiếp cận ban đầu.',
    sectorsTitle:'Thu mua có thể xác minh qua các danh mục chọn lọc',sectorsLead:'Thay vì đưa ra một danh mục cố định, chúng tôi đánh giá sản phẩm, đối tác, tài liệu và tính khả thi trên các ngành hàng thương mại chọn lọc.',
    sectors:[
      {title:'Thực phẩm, gạo, ngũ cốc và dầu thực vật',text:'Đánh giá sản phẩm và báo giá cho thực phẩm, gạo, ngũ cốc và dầu thực vật trung tính.'},
      {title:'Hạt dinh dưỡng, chà là và trái cây khô',text:'Đánh giá thương mại qua phân hạng sản phẩm, chất lượng, bao bì và sự phù hợp thị trường.'},
      {title:'Thảm trang trí và hàng dệt may',text:'Đánh giá chuyên sâu về thảm Ba Tư, thảm lụa dệt tay, vải và sản phẩm dệt may.'},
      {title:'Bao bì, vật tư sản xuất và thu mua dự án',text:'Nghiên cứu và điều phối cho các yêu cầu bao bì, vật tư kỹ thuật và dự án cụ thể.'}
    ],
    corridorsTitle:'Các hành lang thương mại',corridorsLead:'Kết nối thương mại hai chiều trên các thị trường quốc tế chọn lọc, điều phối từ Thổ Nhĩ Kỳ.',
    corridors:['Thổ Nhĩ Kỳ ↔ Châu Âu','Thổ Nhĩ Kỳ ↔ Iran','Iran ↔ Châu Âu và Hoa Kỳ','Thổ Nhĩ Kỳ ↔ Các thị trường quốc tế phù hợp'],
    processTitle:'Quy trình minh bạch và chuẩn mực',process:['Xác định yêu cầu','Nghiên cứu thị trường & đối tác','Thẩm định xác minh','Lập RFQ & báo giá','Mẫu thử & điều phối','Quyết định & các bước tiếp theo']
  }
};

