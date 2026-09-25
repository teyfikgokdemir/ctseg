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
    eyebrow:'CTSEG · B2B Küresel Ticaret ve Stratejik Tedarik Evi',
    title:'Türkiye’den dünyaya. Dünyadan doğru üreticiye.',
    lead:'CTSEG, şirketlerin yeni pazarlara açılmasını ve doğru üretici, tedarikçi ve kurumsal alıcılarla buluşmasını; araştırma, doğrulama, RFQ ve ticari koordinasyon süreçleriyle yönetir.',
    buyerCta:'Tedarikçi arıyorum',producerCta:'Yeni pazara açılmak istiyorum',
    pathsTitle:'Ticaret iki yönde çalışır',pathsLead:'Türkiye’den globale açılmak isteyen üreticiler ile Türkiye ve bölge pazarlarında doğru kaynağa ulaşmak isteyen alıcılar için iki yönlü bir ticaret modeli kuruyoruz.',
    buyerTitle:'Stratejik tedarik',buyerText:'İhtiyacı tanımlar, üretici ve tedarikçi araştırır, doğrulama yapar, RFQ ve teklif karşılaştırmasını koordine ederiz.',
    producerTitle:'İhracat ve pazara giriş',producerText:'Ürünün ticari hazırlığını değerlendirir, hedef pazar ve uygun alıcı profillerini araştırır, ilk temas ve teklif sürecini koordine ederiz.',
    sectorsTitle:'Seçili sektörlerde doğrulanabilir tedarik',sectorsLead:'Sabit bir katalog sunmak yerine, seçili ticari kategorilerde ürün, taraf, belge ve uygulanabilirlik kriterlerini birlikte değerlendiririz.',
    sectors:[
      {title:'Gıda, pirinç, tahıl ve yağlar',text:'Gıda ürünleri, pirinç, tahıllar ve markasız bitkisel yağlar için ürün ve teklif değerlendirmesi.'},
      {title:'Kuruyemiş, hurma ve kuru meyveler',text:'Ürün sınıfı, kalite, ambalaj ve pazar uygunluğu üzerinden ticari değerlendirme.'},
      {title:'Halılar ve tekstil',text:'İran halısı, el dokuması ipek halı, kumaş ve tekstil ürünleri için uzmanlık.'},
      {title:'Ambalaj, üretim girdileri ve proje tedariki',text:'Tanımlı ambalaj, teknik girdi ve proje ihtiyaçları için araştırma ve koordinasyon.'}
    ],
    corridorsTitle:'Ticaret koridorları',corridorsLead:'Türkiye merkezli koordinasyonla Avrupa, Orta Doğu ve Asya arasında iki yönlü ticari bağlantılar.',
    corridors:['Türkiye ↔ Avrupa','Türkiye ↔ İran','Türkiye ↔ Asya','Türkiye ↔ uygun uluslararası pazarlar'],
    processTitle:'Şeffaf ve ölçülü süreç',process:['İhtiyaç tanımı','Pazar ve taraf araştırması','Doğrulama','RFQ ve teklif hazırlığı','Numune ve ticari koordinasyon','Karar ve sonraki adımlar']
  },
  en:{
    eyebrow:'CTSEG · Two-Way Global Trade & Strategic Sourcing House',
    title:'From Türkiye to the world. From the world to the right source.',
    lead:'CTSEG helps companies enter new markets and reach the right manufacturers, suppliers and institutional buyers through research, verification, RFQ management and commercial coordination.',
    buyerCta:'I need a supplier',producerCta:'I want to enter new markets',
    pathsTitle:'Trade works in both directions',pathsLead:'We support producers expanding from Türkiye into global markets and buyers seeking qualified sourcing routes into Türkiye and the surrounding region.',
    buyerTitle:'Strategic sourcing',buyerText:'We define the requirement, research and verify producers and suppliers, and coordinate RFQs and proposal comparisons.',
    producerTitle:'Export & market entry',producerText:'We assess commercial readiness, research target markets and suitable buyer profiles, and coordinate initial outreach and proposals.',
    sectorsTitle:'Verifiable sourcing across selected categories',sectorsLead:'Rather than presenting a fixed catalogue, we assess product, counterparty, documentation and feasibility across selected commercial categories.',
    sectors:[
      {title:'Food, rice, grains and oils',text:'Product and proposal assessment for foods, rice, grains and unbranded vegetable oils.'},
      {title:'Nuts, dates and dried fruits',text:'Commercial assessment through product grade, quality, packaging and market suitability.'},
      {title:'Carpets and textiles',text:'Specialist assessment for Iranian carpets, hand-knotted silk carpets, fabrics and textiles.'},
      {title:'Packaging, production inputs and project sourcing',text:'Research and coordination for defined packaging, technical input and project requirements.'}
    ],
    corridorsTitle:'Trade corridors',corridorsLead:'Two-way commercial connections linking Türkiye with Europe, the Middle East, Asia and selected international markets.',
    corridors:['Türkiye ↔ Europe','Türkiye ↔ Middle East','Türkiye ↔ Asia','Türkiye ↔ suitable international markets'],
    processTitle:'A transparent, measured process',process:['Requirement definition','Market and counterparty research','Verification','RFQ and proposal preparation','Sample and commercial coordination','Decision and next steps']
  },
  de:{
    eyebrow:'CTSEG · Globaler Handel, Nearshoring & strategische Beschaffung',title:'Von Türkiye in neue Märkte. Von internationalen Märkten zur richtigen Quelle.',lead:'CTSEG unterstützt Unternehmen beim Markteintritt sowie bei der Suche nach geeigneten Herstellern, Lieferanten und Geschäftspartnern – mit Recherche, Verifizierung, RFQ-Management und Handelskoordination.',
    buyerCta:'Ich suche einen Lieferanten',producerCta:'Ich möchte neue Märkte erschließen',pathsTitle:'Handel funktioniert in beide Richtungen',pathsLead:'Wir begleiten Hersteller aus Türkiye beim Markteintritt und Einkäufer bei der verifizierbaren Beschaffung aus Türkiye und angrenzenden Märkten.',buyerTitle:'Strategische Beschaffung',buyerText:'Wir definieren den Bedarf, recherchieren und prüfen Hersteller und Lieferanten und koordinieren RFQs sowie Angebotsvergleiche.',producerTitle:'Export & Markteintritt',producerText:'Wir bewerten die Marktreife, recherchieren Zielmärkte und Käuferprofile und koordinieren Erstkontakt und Angebot.',sectorsTitle:'Prüfbare Beschaffung in ausgewählten Kategorien',sectorsLead:'Statt eines festen Katalogs bewerten wir Produkt, Gegenpartei, Dokumentation und Umsetzbarkeit in ausgewählten Geschäftskategorien.',sectors:[{title:'Lebensmittel, Reis, Getreide und Öle',text:'Produkt- und Angebotsbewertung für Lebensmittel, Reis, Getreide und unmarkierte Pflanzenöle.'},{title:'Nüsse, Datteln und Trockenfrüchte',text:'Kaufmännische Bewertung nach Sortierung, Qualität, Verpackung und Markteignung.'},{title:'Teppiche und Textilien',text:'Fachliche Bewertung iranischer Teppiche, handgeknüpfter Seidenteppiche, Stoffe und Textilien.'},{title:'Verpackung, Produktionsmittel und Projektbeschaffung',text:'Recherche und Koordination für definierte Verpackungs-, Technik- und Projektanforderungen.'}],corridorsTitle:'Handelskorridore',corridorsLead:'Bidirektionale Handelsverbindungen zwischen Türkiye, Europa, Nahost und ausgewählten internationalen Märkten.',corridors:['Türkiye ↔ Europa','Türkiye ↔ Nahost','Türkiye ↔ Asien','Türkiye ↔ geeignete internationale Märkte'],processTitle:'Transparenter Prozess',process:['Bedarf definieren','Markt- und Partnerrecherche','Prüfung','RFQ und Angebot','Muster und Koordination','Entscheidung und nächste Schritte']
  },
  it:{
    eyebrow:'CTSEG · Commercio globale, market entry & sourcing strategico',title:'Dalla Türkiye ai mercati globali. Dai mercati globali alla fonte giusta.',lead:'CTSEG aiuta le aziende ad entrare in nuovi mercati e a trovare produttori, fornitori e buyer qualificati attraverso ricerca, verifica, gestione RFQ e coordinamento commerciale.',buyerCta:'Cerco un fornitore',producerCta:'Voglio entrare in nuovi mercati',pathsTitle:'Il commercio funziona in entrambe le direzioni',pathsLead:'Supportiamo produttori che vogliono espandersi dalla Türkiye e buyer che cercano forniture affidabili dalla Türkiye e dai mercati regionali.',buyerTitle:'Sourcing strategico',buyerText:'Definiamo il fabbisogno, ricerchiamo e verifichiamo produttori e fornitori, coordinando RFQ e confronto delle offerte.',producerTitle:'Export & market entry',producerText:'Valutiamo la preparazione commerciale, i mercati obiettivo e i buyer adatti, coordinando primo contatto e proposta.',sectorsTitle:'Sourcing verificabile in categorie selezionate',sectorsLead:'Non presentiamo un catalogo fisso: valutiamo prodotto, controparte, documentazione e fattibilità in categorie commerciali selezionate.',sectors:[{title:'Alimentari, riso, cereali e oli',text:'Valutazione di prodotti e offerte per alimentari, riso, cereali e oli vegetali senza marchio.'},{title:'Frutta a guscio, datteri e frutta essiccata',text:'Valutazione commerciale di classificazione, qualità, imballaggio e idoneità al mercato.'},{title:'Tappeti e tessili',text:'Valutazione specialistica di tappeti iraniani, tappeti in seta annodati a mano, tessuti e prodotti tessili.'},{title:'Imballaggi, input produttivi e sourcing di progetto',text:'Ricerca e coordinamento per esigenze definite di imballaggio, input tecnici e progetti.'}],corridorsTitle:'Corridoi commerciali',corridorsLead:'Connessioni commerciali bidirezionali tra Türkiye, Europa, Medio Oriente, Asia e mercati selezionati.',corridors:['Türkiye ↔ Europa','Türkiye ↔ Medio Oriente','Türkiye ↔ Asia','Türkiye ↔ mercati internazionali idonei'],processTitle:'Un processo trasparente',process:['Definizione esigenza','Ricerca mercato e controparti','Verifica','RFQ e proposta','Campione e coordinamento','Decisione e prossimi passi']
  },
  ru:{
    eyebrow:'CTSEG · Международная торговля и стратегический сорсинг',title:'Из Турции — на новые рынки. С мировых рынков — к нужному источнику.',lead:'CTSEG помогает компаниям выходить на новые рынки и находить подходящих производителей, поставщиков и покупателей через исследование, проверку, RFQ и коммерческую координацию.',buyerCta:'Найти поставщика',producerCta:'Выйти на новые рынки',pathsTitle:'Торговля работает в обоих направлениях',pathsLead:'Мы помогаем производителям из Турции выходить на зарубежные рынки, а покупателям — находить проверенные источники в Турции и регионе.',buyerTitle:'Стратегический сорсинг',buyerText:'Уточняем потребность, исследуем и проверяем производителей и поставщиков, координируем RFQ и сравнение предложений.',producerTitle:'Экспорт и выход на рынок',producerText:'Оцениваем коммерческую готовность продукта, целевые рынки и профиль покупателей, координируем первый контакт и подготовку предложения.',sectorsTitle:'Проверяемый сорсинг в выбранных категориях',sectorsLead:'Мы не предлагаем фиксированный каталог, а оцениваем продукт, контрагента, документы и реализуемость в выбранных коммерческих категориях.',sectors:[{title:'Продукты питания, рис, зерновые и масла',text:'Оценка продукции и предложений по продуктам питания, рису, зерновым и растительным маслам без заявлений о наличии.'},{title:'Орехи, финики и сухофрукты',text:'Коммерческая оценка сорта, качества, упаковки и соответствия целевому рынку.'},{title:'Ковры и текстиль',text:'Профильная оценка иранских ковров, шёлковых ковров ручной работы, тканей и текстильной продукции.'},{title:'Упаковка, производственные материалы и проектный сорсинг',text:'Исследование и координация для конкретных задач по упаковке, техническим материалам и проектным закупкам.'}],corridorsTitle:'Торговые направления',corridorsLead:'Двусторонние торговые связи между Турцией, Европой, Ближним Востоком, Азией и выбранными международными рынками.',corridors:['Турция ↔ Европа','Турция ↔ Ближний Восток','Турция ↔ Азия','Турция ↔ подходящие международные рынки'],processTitle:'Понятный и взвешенный процесс',process:['Определение задачи','Исследование рынка и контрагентов','Проверка','Подготовка RFQ и предложения','Образцы и коммерческая координация','Решение и следующие шаги']
  },
  fa:{
    eyebrow:'CTSEG · تجارت جهانی دوطرفه و تأمین استراتژیک',title:'از ترکیه به بازارهای جهانی. از بازارهای جهانی به منبع مناسب.',lead:'CTSEG به شرکت‌ها برای ورود به بازارهای جدید و دسترسی به تولیدکنندگان، تأمین‌کنندگان و خریداران سازمانی مناسب از طریق تحقیق، راستی‌آزمایی، مدیریت RFQ و هماهنگی تجاری کمک می‌کند.',buyerCta:'به دنبال تأمین‌کننده هستم',producerCta:'می‌خواهم وارد بازارهای جدید شوم',pathsTitle:'تجارت در هر دو جهت کار می‌کند',pathsLead:'از تولیدکنندگان منطقه برای ورود به بازارهای جهانی و از خریداران برای یافتن منابع مناسب در ترکیه و منطقه پشتیبانی می‌کنیم.',buyerTitle:'تأمین استراتژیک',buyerText:'نیاز را تعریف می‌کنیم، تولیدکننده و تأمین‌کننده را بررسی می‌کنیم و فرایند RFQ و مقایسه پیشنهادها را هماهنگ می‌سازیم.',producerTitle:'صادرات و ورود به بازار',producerText:'آمادگی تجاری محصول، بازارهای هدف و خریداران مناسب را ارزیابی و ارتباط اولیه و ارائه پیشنهاد را هماهنگ می‌کنیم.',sectorsTitle:'تأمین قابل‌بررسی در حوزه‌های منتخب',sectorsLead:'به‌جای ارائه فهرست ثابت، محصول، طرف تجاری، اسناد و امکان اجرا را در حوزه‌های تجاری منتخب ارزیابی می‌کنیم.',sectors:[{title:'مواد غذایی، برنج، غلات و روغن‌ها',text:'ارزیابی محصول و پیشنهاد برای مواد غذایی، برنج، غلات و روغن‌های گیاهی بدون نشان تجاری.'},{title:'خشکبار، خرما و میوه‌های خشک',text:'ارزیابی تجاری درجه‌بندی، کیفیت، بسته‌بندی و تناسب محصول با بازار.'},{title:'فرش و منسوجات',text:'بررسی تخصصی فرش ایرانی، فرش ابریشم دستباف، پارچه و محصولات نساجی.'},{title:'بسته‌بندی، نهاده‌های تولید و تأمین پروژه‌ای',text:'تحقیق و هماهنگی برای نیازهای مشخص بسته‌بندی، نهاده‌های فنی و پروژه‌ها.'}],corridorsTitle:'کریدورهای تجاری',corridorsLead:'ارتباط‌های تجاری دوطرفه میان ترکیه، اروپا، خاورمیانه، آسیا و بازارهای منتخب.',corridors:['ترکیه ↔ اروپا','ترکیه ↔ خاورمیانه','ترکیه ↔ آسیا','ترکیه ↔ بازارهای بین‌المللی مناسب'],processTitle:'فرایندی شفاف و سنجیده',process:['تعریف نیاز','بررسی بازار و طرف تجاری','راستی‌آزمایی','آماده‌سازی RFQ و پیشنهاد','نمونه و هماهنگی تجاری','تصمیم و گام‌های بعدی']
  },
  zh:{
    eyebrow:'CTSEG · 双向全球贸易与战略采购服务机构',
    title:'从土耳其走向全球。连接全球优质制造源头。',
    lead:'CTSEG 为企业进入新市场、寻找合规制造商与机构买家提供端到端支持，涵盖市场调研、工厂核验、RFQ 管理与跨境商业协调。',
    buyerCta:'我是买家，寻找核验供应商',producerCta:'我是企业，拓展海外市场',
    pathsTitle:'双向驱动的全球贸易体系',pathsLead:'一端帮助土耳其企业走向全球，一端帮助中国及全球企业进入土耳其与欧洲并连接可靠供应链。',
    buyerTitle:'战略采购',buyerText:'明确采购技术指标，实地调研并深度核验源头工厂资质，协同编制专业 RFQ 并展开总成本比价分析。',
    producerTitle:'出口与市场进入',producerText:'评估产品出海商业成熟度，精准挖掘海外目标市场与匹配买家，协调样品试测与首期商业报价。',
    sectorsTitle:'深耕特色大宗与重点工业品类',sectorsLead:'我们拒绝展示虚构库存，而是在聚焦的优势品类中，一体化评估产品指标、生产主体、法定单证与履约可行性。',
    sectors:[
      {title:'大宗特色食品、原粮与植物油',text:'针对大宗食品原料、粮食作物及中性包装植物油开展产品指标与报价全方位评估。'},
      {title:'特色坚果、鲜黑椰枣与脱水干果',text:'依据品种纯度、分级规格、包装阻隔与目标国准入进行综合商业评估。'},
      {title:'传统手工地毯、丝绸与大宗纺织品',text:'提供伊朗传统手工真丝地毯、工业面料与家纺产品的专业寻源支持。'},
      {title:'工业环保包装、生产辅料与项目物资',text:'针对特定包材结构、工业原材料及工程项目物资进行专项寻源与协调。'}
    ],
    corridorsTitle:'核心贸易走廊',corridorsLead:'以土耳其为枢纽，构建连接中国、欧洲、中东及其他国际市场的双向贸易网络。',
    corridors:['中国 ↔ 土耳其','土耳其 ↔ 欧洲','土耳其 ↔ 中东','土耳其 ↔ 全球新兴贸易市场'],
    processTitle:'严谨规范的决策流程',process:['需求梳理与指标定义','市场排查与主体尽调','资质与单证交叉核验','标准 RFQ 编制与比价','样品盲测与条款谈判','商业决策与履约协同']
  },
  vi:{
    eyebrow:'CTSEG · Thương mại toàn cầu hai chiều & Sourcing chiến lược',
    title:'Từ Thổ Nhĩ Kỳ ra thế giới. Từ thế giới đến đúng nguồn cung.',
    lead:'CTSEG hỗ trợ doanh nghiệp mở rộng sang thị trường mới và kết nối với đúng nhà sản xuất, nhà cung cấp và người mua tổ chức thông qua nghiên cứu, thẩm định, quản lý RFQ và điều phối thương mại.',
    buyerCta:'Tôi cần tìm nhà cung cấp',producerCta:'Tôi muốn mở rộng thị trường',
    pathsTitle:'Thương mại vận hành theo hai chiều',pathsLead:'Chúng tôi hỗ trợ doanh nghiệp Thổ Nhĩ Kỳ mở rộng ra quốc tế và doanh nghiệp Việt Nam kết nối với Thổ Nhĩ Kỳ, châu Âu cùng các chuỗi cung ứng phù hợp.',
    buyerTitle:'Sourcing chiến lược',buyerText:'Chúng tôi xác định yêu cầu, nghiên cứu và thẩm định nhà sản xuất/nhà cung cấp, đồng thời điều phối RFQ và so sánh báo giá.',
    producerTitle:'Xuất khẩu & thâm nhập thị trường',producerText:'Chúng tôi đánh giá sự sẵn sàng thương mại, nghiên cứu thị trường mục tiêu và hồ sơ người mua phù hợp, đồng thời điều phối tiếp cận ban đầu.',
    sectorsTitle:'Thu mua có thể xác minh qua các danh mục chọn lọc',sectorsLead:'Thay vì đưa ra một danh mục cố định, chúng tôi đánh giá sản phẩm, đối tác, tài liệu và tính khả thi trên các ngành hàng thương mại chọn lọc.',
    sectors:[
      {title:'Thực phẩm, gạo, ngũ cốc và dầu thực vật',text:'Đánh giá sản phẩm và báo giá cho thực phẩm, gạo, ngũ cốc và dầu thực vật trung tính.'},
      {title:'Hạt dinh dưỡng, chà là và trái cây khô',text:'Đánh giá thương mại qua phân hạng sản phẩm, chất lượng, bao bì và sự phù hợp thị trường.'},
      {title:'Thảm trang trí và hàng dệt may',text:'Đánh giá chuyên sâu về thảm Ba Tư, thảm lụa dệt tay, vải và sản phẩm dệt may.'},
      {title:'Bao bì, vật tư sản xuất và thu mua dự án',text:'Nghiên cứu và điều phối cho các yêu cầu bao bì, vật tư kỹ thuật và dự án cụ thể.'}
    ],
    corridorsTitle:'Các hành lang thương mại',corridorsLead:'Kết nối hai chiều giữa Việt Nam, Thổ Nhĩ Kỳ, châu Âu, Trung Đông và các thị trường quốc tế phù hợp.',
    corridors:['Việt Nam ↔ Thổ Nhĩ Kỳ','Thổ Nhĩ Kỳ ↔ Châu Âu','Thổ Nhĩ Kỳ ↔ Trung Đông','Thổ Nhĩ Kỳ ↔ Các thị trường quốc tế phù hợp'],
    processTitle:'Quy trình minh bạch và chuẩn mực',process:['Xác định yêu cầu','Nghiên cứu thị trường & đối tác','Thẩm định xác minh','Lập RFQ & báo giá','Mẫu thử & điều phối','Quyết định & các bước tiếp theo']
  }
};


/* Balkan locale rollout: ro, bg, sr */
Object.assign(tradePlatformCopy as any,{
  ro:{
    eyebrow:'CTSEG · Casă de comerț global și sourcing strategic B2B',
    title:'Din Türkiye către lume. Din lume către sursa potrivită.',
    lead:'CTSEG ajută companiile să intre pe piețe noi și să ajungă la producători, furnizori și cumpărători instituționali potriviți prin cercetare, verificare, management RFQ și coordonare comercială.',
    buyerCta:'Caut un furnizor',producerCta:'Vreau să intru pe piețe noi',
    pathsTitle:'Comerțul funcționează în ambele direcții',pathsLead:'Sprijinim producătorii care se extind din Türkiye către piețele globale și cumpărătorii care caută rute de aprovizionare verificate în Türkiye și regiune.',
    buyerTitle:'Sourcing strategic',buyerText:'Definim cerința, cercetăm și verificăm producători și furnizori și coordonăm RFQ-urile și comparația ofertelor.',
    producerTitle:'Export și intrare pe piață',producerText:'Evaluăm pregătirea comercială, cercetăm piețele țintă și profilurile de cumpărători și coordonăm primul contact și ofertele.',
    sectorsTitle:'Sourcing verificabil în categorii selectate',sectorsLead:'În locul unui catalog fix, evaluăm produsul, contrapartea, documentația și fezabilitatea comercială.',
    sectors:[
      {title:'Alimente, orez, cereale și uleiuri',text:'Evaluarea produselor și ofertelor pentru alimente, orez, cereale și uleiuri vegetale fără marcă.'},
      {title:'Nuci, curmale și fructe uscate',text:'Evaluare comercială prin clasă, calitate, ambalare și compatibilitate cu piața.'},
      {title:'Covoare și textile',text:'Evaluare specializată pentru covoare iraniene, covoare de mătase lucrate manual, țesături și textile.'},
      {title:'Ambalaje, inputuri de producție și proiecte',text:'Cercetare și coordonare pentru cerințe definite de ambalare, inputuri tehnice și proiecte.'}
    ],
    corridorsTitle:'Coridoare comerciale',corridorsLead:'Conexiuni comerciale bidirecționale între Türkiye, Europa, Orientul Mijlociu, Asia și piețe internaționale selectate.',
    corridors:['Türkiye ↔ România și Europa','Türkiye ↔ Orientul Mijlociu','Türkiye ↔ Asia','Türkiye ↔ piețe internaționale potrivite'],
    processTitle:'Proces transparent și măsurat',process:['Definirea cerinței','Cercetarea pieței și contrapărților','Verificare','RFQ și pregătirea ofertei','Mostre și coordonare comercială','Decizie și pașii următori']
  },
  bg:{
    eyebrow:'CTSEG · B2B глобална търговия и стратегическо снабдяване',
    title:'От Türkiye към света. От света към правилния източник.',
    lead:'CTSEG помага на компаниите да навлизат на нови пазари и да достигат до подходящи производители, доставчици и институционални купувачи чрез проучване, проверка, RFQ управление и търговска координация.',
    buyerCta:'Търся доставчик',producerCta:'Искам да навляза на нови пазари',
    pathsTitle:'Търговията работи в две посоки',pathsLead:'Подкрепяме производители от Türkiye при излизане на глобални пазари и купувачи, търсещи проверими маршрути за снабдяване от Türkiye и региона.',
    buyerTitle:'Стратегическо снабдяване',buyerText:'Дефинираме нуждата, проучваме и проверяваме производители и доставчици и координираме RFQ и сравнение на оферти.',
    producerTitle:'Износ и навлизане на пазара',producerText:'Оценяваме търговската готовност, проучваме целеви пазари и профили на купувачи и координираме първоначалния контакт и офертите.',
    sectorsTitle:'Проверимо снабдяване в избрани категории',sectorsLead:'Вместо фиксиран каталог оценяваме продукт, контрагент, документация и търговска приложимост.',
    sectors:[
      {title:'Храни, ориз, зърнени култури и масла',text:'Оценка на продукти и оферти за храни, ориз, зърнени култури и небрандирани растителни масла.'},
      {title:'Ядки, фурми и сушени плодове',text:'Търговска оценка по клас, качество, опаковка и пригодност за пазара.'},
      {title:'Килими и текстил',text:'Специализирана оценка за ирански килими, ръчно тъкани копринени килими, тъкани и текстил.'},
      {title:'Опаковки, производствени материали и проектно снабдяване',text:'Проучване и координация за дефинирани опаковъчни, технически и проектни нужди.'}
    ],
    corridorsTitle:'Търговски коридори',corridorsLead:'Двупосочни търговски връзки между Türkiye, България и Европа, Близкия изток, Азия и избрани международни пазари.',
    corridors:['Türkiye ↔ България и Европа','Türkiye ↔ Близък изток','Türkiye ↔ Азия','Türkiye ↔ подходящи международни пазари'],
    processTitle:'Прозрачен и контролиран процес',process:['Дефиниране на нуждата','Пазарно и контрагентско проучване','Проверка','RFQ и подготовка на оферти','Мостри и търговска координация','Решение и следващи стъпки']
  },
  sr:{
    eyebrow:'CTSEG · B2B globalna trgovina i strateški sourcing',
    title:'Iz Türkiye ka svetu. Iz sveta do pravog izvora.',
    lead:'CTSEG pomaže kompanijama da uđu na nova tržišta i dođu do odgovarajućih proizvođača, dobavljača i institucionalnih kupaca kroz istraživanje, proveru, RFQ upravljanje i komercijalnu koordinaciju.',
    buyerCta:'Tražim dobavljača',producerCta:'Želim da uđem na nova tržišta',
    pathsTitle:'Trgovina funkcioniše u oba smera',pathsLead:'Podržavamo proizvođače koji se šire iz Türkiye na globalna tržišta i kupce koji traže proverljive sourcing rute u Türkiye i regionu.',
    buyerTitle:'Strateški sourcing',buyerText:'Definišemo zahtev, istražujemo i proveravamo proizvođače i dobavljače i koordiniramo RFQ i poređenje ponuda.',
    producerTitle:'Izvoz i ulazak na tržište',producerText:'Procenjujemo komercijalnu spremnost, istražujemo ciljna tržišta i profile kupaca i koordiniramo prvi kontakt i ponude.',
    sectorsTitle:'Proverljiv sourcing u odabranim kategorijama',sectorsLead:'Umesto fiksnog kataloga procenjujemo proizvod, partnera, dokumentaciju i komercijalnu izvodljivost.',
    sectors:[
      {title:'Hrana, pirinač, žitarice i ulja',text:'Procena proizvoda i ponuda za hranu, pirinač, žitarice i nebrendirana biljna ulja.'},
      {title:'Orašasti plodovi, urme i suvo voće',text:'Komercijalna procena prema klasi, kvalitetu, pakovanju i tržišnoj podobnosti.'},
      {title:'Tepisi i tekstil',text:'Specijalistička procena iranskih tepiha, ručno tkanih svilenih tepiha, tkanina i tekstila.'},
      {title:'Ambalaža, proizvodni inputi i projektna nabavka',text:'Istraživanje i koordinacija za definisane potrebe ambalaže, tehničkih inputa i projekata.'}
    ],
    corridorsTitle:'Trgovinski koridori',corridorsLead:'Dvosmerne komercijalne veze između Türkiye, Srbije i Evrope, Bliskog istoka, Azije i odabranih međunarodnih tržišta.',
    corridors:['Türkiye ↔ Srbija i Evropa','Türkiye ↔ Bliski istok','Türkiye ↔ Azija','Türkiye ↔ odgovarajuća međunarodna tržišta'],
    processTitle:'Transparentan i kontrolisan proces',process:['Definisanje zahteva','Istraživanje tržišta i partnera','Provera','RFQ i priprema ponuda','Uzorci i komercijalna koordinacija','Odluka i sledeći koraci']
  }
});
