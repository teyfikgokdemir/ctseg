export type RegionalIntentHome = {
  eyebrow:string;
  title:string;
  description:string;
  directAnswerTitle:string;
  directAnswer:string;
  sectorsTitle:string;
  sectorsLead:string;
  sectors:string[];
  supportTitle:string;
  support:string[];
  complianceTitle:string;
  complianceText:string;
  processTitle:string;
  process:string[];
  faq:{question:string;answer:string}[];
  ctaTitle:string;
  ctaText:string;
  ctaLabel:string;
  sellerTitle?:string;
  sellerText?:string;
  sellerLabel?:string;
};

export const regionalIntentHomes: Record<'de'|'it'|'ru',RegionalIntentHome> = {
  de:{
    eyebrow:'DACH ⇄ TÜRKIYE · SOURCING, NEARSHORING & MARKTZUGANG',
    title:'B2B-Sourcing und Marktzugang zwischen DACH und Türkiye',
    description:'CTSEG unterstützt Unternehmen aus Deutschland, Österreich und der Schweiz sowohl bei der Suche und Prüfung geeigneter Hersteller in Türkiye als auch beim Marktzugang für DACH-Produkte in Türkiye und ausgewählten internationalen Märkten.',
    directAnswerTitle:'Wie unterstützt CTSEG DACH-Unternehmen in beide Richtungen?',
    directAnswer:'Für Einkaufs- und Nearshoring-Anfragen recherchiert und prüft CTSEG passende Hersteller in Türkiye und koordiniert RFQs, Muster, Dokumente und Angebotsvergleiche. Für Hersteller, Marken und Exporteure aus dem DACH-Raum bewertet CTSEG die Marktfähigkeit, Zielkäufer, Import- und Vertriebskanäle in Türkiye und koordiniert qualifizierte B2B-Ansprachen. Beide Richtungen werden projektbezogen und ohne pauschale Erfolgsversprechen bearbeitet.',
    sectorsTitle:'Geeignete Beschaffungs- und Marktzugangsbereiche',
    sectorsLead:'Die Auswahl richtet sich nach technischer Eignung, Produktionsfähigkeit, Nachfrage, Dokumentation, Lieferzeit und kommerzieller Umsetzbarkeit.',
    sectors:[
      'Maschinenbau- und Metallkomponenten',
      'CNC-, Blech-, Guss- und Schweißfertigung',
      'Kunststoff- und Spritzgussteile',
      'Verpackungen und industrielle Verpackungslösungen',
      'Textilien, technische Textilien und konfektionierte Produkte',
      'Möbel, Objektmöbel und projektbezogene Fertigung',
      'Bau- und Ausbauprodukte',
      'Automotive- und industrielle Zulieferteile',
      'Elektrische und elektromechanische Komponenten',
      'Private Label und OEM-Fertigung',
      'Projektbezogene Sonderanfertigungen'
    ],
    supportTitle:'Was vor einer Lieferanten- oder Käuferansprache geprüft wird',
    support:[
      'Unternehmensidentität und reale Produktionsfähigkeit',
      'Technische Spezifikation, Material und Qualitätsanforderungen',
      'MOQ, Kapazität, Lieferzeit und Incoterms',
      'Verfügbare Zertifikate, Prüfberichte und Referenzdokumente',
      'Musterfähigkeit und kommerzielle Angebotsstruktur',
      'Logistik und relevante Gesamtkosten',
      'Bei DACH-Produkten: Zielkäufer, Vertriebskanäle und Markteintrittsanforderungen in Türkiye'
    ],
    complianceTitle:'Nearshoring bedeutet nicht automatisch Eignung',
    complianceText:'Für jede Anfrage werden Produktklassifizierung, technische Anforderungen, Zertifikate, Ursprungs- und Importvorgaben sowie die tatsächliche Lieferfähigkeit separat bewertet. CTSEG stellt keine pauschale Verfügbarkeit oder Kosteneinsparung in Aussicht.',
    processTitle:'B2B-Prozess in beide Richtungen',
    process:['Ziel definieren: Beschaffung in Türkiye oder Marktzugang für ein DACH-Produkt','Produkt, Spezifikation, Menge und Dokumentation strukturieren','Geeignete Hersteller oder Zielkäufer recherchieren und vorqualifizieren','RFQ, Muster, Angebots- oder Erstkontaktprozesse koordinieren','Nur wirtschaftlich und regulatorisch tragfähige Optionen weiterverfolgen'],
    faq:[
      {question:'Arbeitet CTSEG nur mit Einkäufern aus Deutschland?',answer:'Nein. Die deutschsprachige Seite richtet sich an Unternehmen aus Deutschland, Österreich und der Schweiz, die entweder in Türkiye beschaffen oder ihre Produkte in Türkiye und geeigneten internationalen Märkten entwickeln möchten.'},
      {question:'Kann CTSEG einen Hersteller in Türkiye verifizieren?',answer:'Ja. Umfang und Tiefe der Prüfung richten sich nach Produkt, Projekt und verfügbarer Dokumentation. Unternehmensdaten, Produktionsfähigkeit, Zertifikate und kommerzielle Angaben werden je Anfrage bewertet.'},
      {question:'Garantiert CTSEG niedrigere Kosten durch Nearshoring?',answer:'Nein. Gesamtwirtschaftlichkeit hängt von Produkt, Volumen, Qualität, Werkzeugkosten, Logistik, Zoll und Lieferbedingungen ab und wird je Projekt separat bewertet.'}
    ],
    ctaTitle:'Ich suche einen Lieferanten in Türkiye',
    ctaText:'Senden Sie Produkt, Zeichnung oder Spezifikation, Menge, Zieltermin, benötigte Zertifikate und Lieferort. CTSEG bewertet zunächst die technische und kommerzielle Machbarkeit.',
    ctaLabel:'Sourcing-RFQ senden',
    sellerTitle:'Ich möchte mein Produkt in Türkiye verkaufen',
    sellerText:'Senden Sie Unternehmensprofil, Produktdaten, Exportmärkte, Zertifikate, Preisstruktur und gewünschte Zielkunden. CTSEG bewertet Marktfähigkeit, Käuferprofile und mögliche Vertriebskanäle.',
    sellerLabel:'Markteintritt anfragen'
  },
  it:{
    eyebrow:'ITALIA ⇄ TÜRKİYE · SOURCING, PRODUZIONE & MARKET ENTRY',
    title:'Sourcing e sviluppo commerciale tra Italia e Türkiye',
    description:'CTSEG supporta aziende italiane sia nella ricerca e verifica di produttori in Türkiye sia nello sviluppo di buyer, importatori, distributori e opportunità B2B per prodotti italiani in Türkiye e mercati selezionati.',
    directAnswerTitle:'Come può CTSEG supportare un’azienda italiana in entrambe le direzioni?',
    directAnswer:'Per aziende che vogliono acquistare o produrre in Türkiye, CTSEG ricerca e qualifica produttori, coordina RFQ, campioni, documenti e confronto delle offerte. Per produttori, brand ed esportatori italiani, CTSEG valuta il posizionamento commerciale, individua profili di buyer, importatori e distributori e coordina il primo contatto B2B nei mercati compatibili. Ogni progetto viene valutato in base a prodotto, prezzo, documenti, capacità e domanda reale.',
    sectorsTitle:'Aree di sourcing e sviluppo commerciale',
    sectorsLead:'La selezione dipende da capacità produttiva, qualità, documentazione, domanda, MOQ, tempi e fattibilità commerciale.',
    sectors:[
      'Tessile, abbigliamento e private label',
      'Pelletteria, borse e accessori',
      'Mobili e produzione contract',
      'Pietra naturale e prodotti per interni',
      'Lavorazioni metalliche e componenti meccanici',
      'Imballaggi e packaging personalizzato',
      'Macchinari e componenti per produzione alimentare',
      'Plastica, stampaggio e componenti tecnici',
      'Componentistica industriale e automotive',
      'OEM/ODM per marchi e distributori',
      'Produzioni speciali su progetto'
    ],
    supportTitle:'Cosa verifichiamo prima di proporre un produttore o avviare contatti con buyer',
    support:[
      'Identità aziendale e capacità produttiva effettiva',
      'Specifiche, materiali e standard qualitativi',
      'MOQ, capacità mensile, tempi e Incoterms',
      'Certificazioni e documenti disponibili',
      'Campioni, prototipi e capacità di personalizzazione',
      'Condizioni commerciali e logistiche',
      'Per i prodotti italiani: profilo dei buyer, canali distributivi e requisiti di accesso al mercato turco'
    ],
    complianceTitle:'La compatibilità viene verificata prodotto per prodotto',
    complianceText:'Classificazione doganale, origine, requisiti tecnici, marcatura, certificazioni e regole di importazione dipendono dal prodotto e dal mercato di destinazione. CTSEG non presenta automaticamente un produttore come idoneo prima della verifica commerciale e documentale.',
    processTitle:'Processo B2B in entrambe le direzioni',
    process:['Definizione dell’obiettivo: sourcing in Türkiye oppure sviluppo commerciale di un prodotto italiano','Strutturazione di prodotto, specifiche, quantità, prezzo e documentazione','Ricerca e prequalifica di produttori oppure buyer/importatori target','Coordinamento di RFQ, campioni, offerte o primo contatto commerciale','Proseguimento solo quando esiste una base commerciale e regolatoria concreta'],
    faq:[
      {question:'CTSEG può cercare produttori in Türkiye e anche buyer per prodotti italiani?',answer:'Sì. I due percorsi vengono gestiti separatamente: sourcing e produzione in Türkiye da un lato, market entry e buyer development per prodotti italiani dall’altro.'},
      {question:'È possibile richiedere campioni prima dell’ordine?',answer:'Quando il produttore li rende disponibili, CTSEG può coordinare campioni o prototipi e le relative condizioni commerciali.'},
      {question:'CTSEG garantisce il produttore o il prezzo finale?',answer:'No. La valutazione riduce l’incertezza, ma prezzo, capacità, qualità e condizioni finali devono essere confermati sul progetto specifico.'}
    ],
    ctaTitle:'Cerco un produttore o fornitore in Türkiye',
    ctaText:'Condividi prodotto, specifiche, quantità, target, certificazioni richieste e luogo di consegna. CTSEG valuterà le opzioni produttive compatibili.',
    ctaLabel:'Invia RFQ',
    sellerTitle:'Voglio vendere il mio prodotto in Türkiye',
    sellerText:'Condividi profilo aziendale, catalogo, certificazioni, mercati export, prezzi indicativi e tipo di buyer desiderato. CTSEG valuterà domanda, canali e profili di importatori o distributori compatibili.',
    sellerLabel:'Richiedi market entry'
  },
  ru:{
    eyebrow:'РУССКОЯЗЫЧНЫЙ B2B → ТУРЦИЯ · КОМПЛАЕНС-СОРСИНГ',
    title:'Проверяемый B2B-сорсинг и поиск производителей в Турции',
    description:'CTSEG помогает русскоязычным компаниям находить и проверять производителей и поставщиков в Турции, координировать RFQ, образцы, документы, логистику и коммерческие условия с обязательной проверкой применимых ограничений.',
    directAnswerTitle:'Как CTSEG работает с русскоязычными компаниями?',
    directAnswer:'CTSEG работает только с конкретными B2B-запросами и прозрачной коммерческой структурой. Мы уточняем продукт, технические параметры, объем, конечное использование и маршрут поставки, затем исследуем производителей в Турции, проверяем доступные документы и координируем RFQ. Любая сделка рассматривается отдельно с учетом товара, сторон, конечного использования, платежного маршрута и применимых экспортных, санкционных и таможенных требований.',
    sectorsTitle:'Категории для запросов на поставку из Турции',
    sectorsLead:'Категории рассматриваются только по конкретной спецификации и после проверки возможности законной поставки.',
    sectors:[
      'Промышленное оборудование и запасные части',
      'Насосы, клапаны, фильтры и техническая арматура',
      'Электротехнические и механические компоненты',
      'Упаковка и производственные материалы',
      'Текстиль и контрактное производство',
      'Мебель и проектные изделия',
      'Пищевое и упаковочное оборудование',
      'Строительные и отделочные материалы',
      'OEM и private-label производство',
      'Другие неограниченные B2B-товары по спецификации'
    ],
    supportTitle:'Что проверяется до коммерческого предложения',
    support:[
      'Юридическое лицо и производственные возможности поставщика',
      'Техническая спецификация и конечное использование товара',
      'Доступные сертификаты, документы и происхождение',
      'MOQ, сроки, Incoterms и маршрут поставки',
      'Контрагенты и применимые ограничения',
      'Коммерческая и логистическая реализуемость'
    ],
    complianceTitle:'Комплаенс — часть процесса, а не формальность',
    complianceText:'CTSEG не помогает обходить санкции, экспортный контроль, банковские ограничения, правила происхождения или таможенные требования. Запрос может быть продолжен только тогда, когда товар, стороны, конечное использование, документы, платеж и маршрут поставки образуют законный и коммерчески реализуемый процесс.',
    processTitle:'Процесс',
    process:['Определение товара, спецификации, количества и конечного использования','Исследование и первичная проверка производителей в Турции','Проверка документов и применимых ограничений','RFQ, образцы и коммерческое сравнение','Продолжение только при приемлемой коммерческой и комплаенс-модели'],
    faq:[
      {question:'Работает ли CTSEG только с компаниями из России?',answer:'Нет. Русскоязычная страница предназначена для B2B-компаний, которым удобнее вести коммуникацию на русском языке. Страна, товар и стороны сделки всегда рассматриваются отдельно.'},
      {question:'Может ли CTSEG помочь обойти санкционные или банковские ограничения?',answer:'Нет. CTSEG работает только в рамках применимого законодательства, экспортного контроля, санкционных требований и прозрачной документации.'},
      {question:'Можно ли запросить поставщика в Турции без точной спецификации?',answer:'Для начальной оценки можно описать потребность, но для качественного RFQ нужны технические параметры, количество, место поставки и конечное использование.'}
    ],
    ctaTitle:'Отправьте запрос на поставку из Турции',
    ctaText:'Укажите товар, характеристики, количество, конечное использование, место доставки и необходимые документы. CTSEG сначала оценит коммерческую и комплаенс-реализуемость.',
    ctaLabel:'Отправить RFQ'
  }
};
