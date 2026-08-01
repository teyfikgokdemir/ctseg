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
    title:'Doğru ticari ihtiyeti doğru üretici, tedarikçi ve pazarla buluşturuyoruz.',
    lead:'CTSEG, alıcıların doğrulanabilir tedarik seçeneklerine ulaşmasına ve üreticilerin uygun uluslararası alıcılarla pazar fırsatlarını değerlendirmesine yardımcı olan bağımsız bir ticari koordinasyon yapısıdır.',
    buyerCta:'Tedarikçi arıyorum',producerCta:'Alıcı ve pazar arıyorum',
    pathsTitle:'İki yönde çalışan ticari eşleştirme',pathsLead:'Her çalışma, tarafların gerçek ihtiyacı ve uygulanabilir ticari veriler üzerinden yapılandırılır.',
    buyerTitle:'Alıcılar için',buyerText:'İhtiyacı tanımlar, üretici ve tedarikçi araştırır, doğrulama yapar, RFQ ve teklif karşılaştırmasını koordine ederiz.',
    producerTitle:'Üreticiler için',producerText:'Ürünün ticari hazırlığını değerlendirir, hedef pazar ve uygun alıcı profillerini araştırır, ilk temas ve teklif sürecini koordine ederiz.',
    sectorsTitle:'Çok sektörlü ticaret odağı',sectorsLead:'Belirli bir ürün kataloğuna bağlı kalmadan, doğrulanabilir ve uygulanabilir ticari ihtiyaçlara odaklanırız.',
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
    title:'We connect the right commercial need with the right producer, supplier and market.',
    lead:'CTSEG is an independent commercial coordination platform helping buyers reach verifiable supply options and producers assess suitable international buyers and market opportunities.',
    buyerCta:'I need a supplier',producerCta:'I need buyers',
    pathsTitle:'Trade matching that works in both directions',pathsLead:'Every engagement is structured around a real requirement and commercially actionable information.',
    buyerTitle:'For buyers',buyerText:'We define the requirement, research and verify producers and suppliers, and coordinate RFQs and proposal comparisons.',
    producerTitle:'For producers',producerText:'We assess commercial readiness, research target markets and suitable buyer profiles, and coordinate initial outreach and proposals.',
    sectorsTitle:'A multi-sector trade focus',sectorsLead:'We focus on verifiable, actionable commercial needs rather than a fixed product catalogue.',
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
    eyebrow:'Internationale Geschäftsanbahnung und Handelskoordination',title:'Wir verbinden Bedarf mit passenden Herstellern, Lieferanten und Märkten.',lead:'CTSEG ist eine unabhängige Koordinationsplattform, die Einkäufer zu prüfbaren Bezugsquellen und Hersteller zu geeigneten internationalen Abnehmern und Marktchancen führt.',
    buyerCta:'Ich suche einen Lieferanten',producerCta:'Ich suche Käufer und Märkte',pathsTitle:'Geschäftsanbahnung in beide Richtungen',pathsLead:'Jedes Projekt basiert auf einem realen Bedarf und belastbaren kaufmännischen Angaben.',buyerTitle:'Für Einkäufer',buyerText:'Wir definieren den Bedarf, recherchieren und prüfen Hersteller und Lieferanten und koordinieren RFQs sowie Angebotsvergleiche.',producerTitle:'Für Hersteller',producerText:'Wir bewerten die Marktreife, recherchieren Zielmärkte und Käuferprofile und koordinieren Erstkontakt und Angebot.',sectorsTitle:'Branchenübergreifender Handelsfokus',sectorsLead:'Im Mittelpunkt stehen prüfbare Geschäftschancen, nicht ein festes Produktsortiment.',sectors:[{title:'Lebensmittel, Reis, Getreide und Öle',text:'Produkt- und Angebotsbewertung für Lebensmittel, Reis, Getreide und unmarkierte Pflanzenöle.'},{title:'Nüsse, Datteln und Trockenfrüchte',text:'Kaufmännische Bewertung nach Sortierung, Qualität, Verpackung und Markteignung.'},{title:'Teppiche und Textilien',text:'Fachliche Bewertung iranischer Teppiche, handgeknüpfter Seidenteppiche, Stoffe und Textilien.'},{title:'Verpackung, Produktionsmittel und Projektbeschaffung',text:'Recherche und Koordination für definierte Verpackungs-, Technik- und Projektanforderungen.'}],corridorsTitle:'Handelskorridore',corridorsLead:'Bidirektionale Verbindungen in ausgewählten Märkten, koordiniert aus Türkiye.',corridors:['Türkiye ↔ Europa','Türkiye ↔ Iran','Iran ↔ Europa und USA','Türkiye ↔ geeignete internationale Märkte'],processTitle:'Transparenter Prozess',process:['Bedarf definieren','Markt- und Partnerrecherche','Prüfung','RFQ und Angebot','Muster und Koordination','Entscheidung und nächste Schritte']
  },
  it:{
    eyebrow:'Matching commerciale internazionale e coordinamento',title:'Colleghiamo ogni esigenza a produttori, fornitori e mercati adatti.',lead:'CTSEG è una struttura indipendente di coordinamento che aiuta gli acquirenti a trovare opzioni verificabili e i produttori a valutare buyer e opportunità internazionali.',buyerCta:'Cerco un fornitore',producerCta:'Cerco buyer e mercati',pathsTitle:'Matching commerciale in entrambe le direzioni',pathsLead:'Ogni incarico parte da un bisogno reale e da informazioni commerciali attuabili.',buyerTitle:'Per gli acquirenti',buyerText:'Definiamo il fabbisogno, ricerchiamo e verifichiamo produttori e fornitori, coordinando RFQ e confronto delle offerte.',producerTitle:'Per i produttori',producerText:'Valutiamo la preparazione commerciale, i mercati obiettivo e i buyer adatti, coordinando primo contatto e proposta.',sectorsTitle:'Un focus commerciale multisettoriale',sectorsLead:'Lavoriamo su esigenze verificabili, non su un catalogo fisso.',sectors:[{title:'Alimentari, riso, cereali e oli',text:'Valutazione di prodotti e offerte per alimentari, riso, cereali e oli vegetali senza marchio.'},{title:'Frutta a guscio, datteri e frutta essiccata',text:'Valutazione commerciale di classificazione, qualità, imballaggio e idoneità al mercato.'},{title:'Tappeti e tessili',text:'Valutazione specialistica di tappeti iraniani, tappeti in seta annodati a mano, tessuti e prodotti tessili.'},{title:'Imballaggi, input produttivi e sourcing di progetto',text:'Ricerca e coordinamento per esigenze definite di imballaggio, input tecnici e progetti.'}],corridorsTitle:'Corridoi commerciali',corridorsLead:'Connessioni bidirezionali in mercati selezionati, coordinate dalla Türkiye.',corridors:['Türkiye ↔ Europa','Türkiye ↔ Iran','Iran ↔ Europa e Stati Uniti','Türkiye ↔ mercati internazionali idonei'],processTitle:'Un processo trasparente',process:['Definizione esigenza','Ricerca mercato e controparti','Verifica','RFQ e proposta','Campione e coordinamento','Decisione e prossimi passi']
  },
  fr:{
    eyebrow:'Mise en relation commerciale internationale et coordination',title:'Nous relions le bon besoin commercial au producteur, au fournisseur et au marché adaptés.',lead:'CTSEG est une structure indépendante qui aide les acheteurs à identifier des sources vérifiables et les producteurs à évaluer des acheteurs et débouchés internationaux pertinents.',buyerCta:'Je cherche un fournisseur',producerCta:'Je cherche des acheteurs',pathsTitle:'Une mise en relation dans les deux sens',pathsLead:'Chaque mission repose sur un besoin réel et des informations commercialement exploitables.',buyerTitle:'Pour les acheteurs',buyerText:'Nous définissons le besoin, recherchons et vérifions producteurs et fournisseurs, puis coordonnons RFQ et comparaison des offres.',producerTitle:'Pour les producteurs',producerText:'Nous évaluons la préparation commerciale, recherchons marchés cibles et profils d’acheteurs, puis coordonnons le premier contact et l’offre.',sectorsTitle:'Une approche commerciale multisectorielle',sectorsLead:'Nous privilégions les besoins vérifiables et réalisables, sans catalogue figé.',sectors:[{title:'Alimentation, riz, céréales et huiles',text:'Évaluation de produits et d’offres pour aliments, riz, céréales et huiles végétales sans marque.'},{title:'Fruits à coque, dattes et fruits séchés',text:'Évaluation commerciale du classement, de la qualité, de l’emballage et de l’adéquation au marché.'},{title:'Tapis et textiles',text:'Évaluation spécialisée des tapis iraniens, tapis de soie noués main, tissus et textiles.'},{title:'Emballage, intrants de production et sourcing projet',text:'Recherche et coordination pour des besoins définis en emballage, intrants techniques et projets.'}],corridorsTitle:'Corridors commerciaux',corridorsLead:'Des connexions bilatérales sur des marchés sélectionnés, coordonnées depuis la Türkiye.',corridors:['Türkiye ↔ Europe','Türkiye ↔ Iran','Iran ↔ Europe et États-Unis','Türkiye ↔ marchés internationaux adaptés'],processTitle:'Un processus transparent',process:['Définition du besoin','Recherche marché et parties','Vérification','RFQ et offre','Échantillon et coordination','Décision et suites']
  },
  fa:{
    eyebrow:'تطبیق تجاری بین‌المللی و هماهنگی بازرگانی',title:'نیازهای تجاری را به تأمین‌کنندگان، تولیدکنندگان و فرصت‌های مناسب بازارهای بین‌المللی متصل می‌کنیم.',lead:'CTSEG یک ساختار مستقل هماهنگی تجاری است که به خریداران برای یافتن گزینه‌های قابل‌بررسی و به تولیدکنندگان برای ارزیابی خریداران و بازارهای مناسب کمک می‌کند.',buyerCta:'به دنبال تأمین‌کننده هستم',producerCta:'به دنبال خریدار و بازار هستم',pathsTitle:'تطبیق تجاری در هر دو سوی بازار',pathsLead:'هر همکاری بر پایه نیاز واقعی و اطلاعات تجاری قابل‌بررسی شکل می‌گیرد.',buyerTitle:'برای خریداران',buyerText:'نیاز را تعریف می‌کنیم، تولیدکننده و تأمین‌کننده را بررسی می‌کنیم و فرایند RFQ و مقایسه پیشنهادها را هماهنگ می‌سازیم.',producerTitle:'برای تولیدکنندگان',producerText:'آمادگی تجاری محصول، بازارهای هدف و خریداران مناسب را ارزیابی و ارتباط اولیه و ارائه پیشنهاد را هماهنگ می‌کنیم.',sectorsTitle:'تمرکز تجاری چندبخشی',sectorsLead:'تمرکز بر نیازهای واقعی و قابل‌اجراست، نه فروش یک فهرست ثابت از کالاها.',sectors:[{title:'مواد غذایی، برنج، غلات و روغن‌ها',text:'ارزیابی محصول و پیشنهاد برای مواد غذایی، برنج، غلات و روغن‌های گیاهی بدون نشان تجاری.'},{title:'خشکبار، خرما و میوه‌های خشک',text:'ارزیابی تجاری درجه‌بندی، کیفیت، بسته‌بندی و تناسب محصول با بازار.'},{title:'فرش و منسوجات',text:'بررسی تخصصی فرش ایرانی، فرش ابریشم دستباف، پارچه و محصولات نساجی.'},{title:'بسته‌بندی، نهاده‌های تولید و تأمین پروژه‌ای',text:'تحقیق و هماهنگی برای نیازهای مشخص بسته‌بندی، نهاده‌های فنی و پروژه‌ها.'}],corridorsTitle:'کریدورهای تجاری',corridorsLead:'ارتباط‌های دوسویه در بازارهای منتخب با هماهنگی از ترکیه.',corridors:['ترکیه ↔ اروپا','ترکیه ↔ ایران','ایران ↔ اروپا و آمریکا','ترکیه ↔ بازارهای بین‌المللی مناسب'],processTitle:'فرایندی شفاف و سنجیده',process:['تعریف نیاز','بررسی بازار و طرف تجاری','راستی‌آزمایی','آماده‌سازی RFQ و پیشنهاد','نمونه و هماهنگی تجاری','تصمیم و گام‌های بعدی']
  }
};
