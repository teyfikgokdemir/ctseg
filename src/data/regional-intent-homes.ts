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
};

export const regionalIntentHomes: Record<'de'|'it'|'ru',RegionalIntentHome> = {
  de:{
    eyebrow:'DACH → TÜRKIYE · SOURCING & NEARSHORING',
    title:'Lieferanten, Hersteller und Nearshoring-Partner in Türkiye für DACH-Unternehmen',
    description:'CTSEG unterstützt Unternehmen aus Deutschland, Österreich und der Schweiz bei der Suche, Prüfung und kommerziellen Qualifizierung geeigneter Hersteller in Türkiye – von der technischen Spezifikation über RFQ und Muster bis zur Angebots- und Lieferkoordination.',
    directAnswerTitle:'Wie unterstützt CTSEG DACH-Unternehmen beim Sourcing in Türkiye?',
    directAnswer:'CTSEG arbeitet an konkreten Beschaffungsanforderungen. Wir strukturieren Spezifikation, Zielmenge und Qualitätsanforderungen, recherchieren passende Hersteller in Türkiye, prüfen Unternehmens- und Produktionsinformationen, koordinieren RFQs, Muster und Dokumente und vergleichen die kommerziell relevanten Bedingungen. Der Fokus liegt auf belastbaren B2B-Beschaffungswegen statt auf allgemeinen Lieferantenlisten.',
    sectorsTitle:'Geeignete Beschaffungsfelder in Türkiye',
    sectorsLead:'Die Auswahl richtet sich nach technischer Eignung, Produktionsfähigkeit, Dokumentation, Lieferzeit und Gesamtkosten.',
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
    supportTitle:'Was vor einer Lieferantenempfehlung geprüft wird',
    support:[
      'Unternehmensidentität und reale Produktionsfähigkeit',
      'Technische Spezifikation, Material und Qualitätsanforderungen',
      'MOQ, Kapazität, Lieferzeit und Incoterms',
      'Verfügbare Zertifikate, Prüfberichte und Referenzdokumente',
      'Musterfähigkeit und kommerzielle Angebotsstruktur',
      'Logistik und relevante Gesamtkosten'
    ],
    complianceTitle:'Nearshoring bedeutet nicht automatisch Eignung',
    complianceText:'Für jede Anfrage werden Produktklassifizierung, technische Anforderungen, Zertifikate, Ursprungs- und Importvorgaben sowie die tatsächliche Lieferfähigkeit separat bewertet. CTSEG stellt keine pauschale Verfügbarkeit oder Kosteneinsparung in Aussicht.',
    processTitle:'Beschaffungsprozess',
    process:['Anforderung und technische Spezifikation definieren','Hersteller in Türkiye recherchieren und vorqualifizieren','RFQ, Dokumente und Muster koordinieren','Angebote, Lieferzeiten und kommerzielle Bedingungen vergleichen','Geeignete Optionen für die Einkaufsentscheidung aufbereiten'],
    faq:[
      {question:'Arbeitet CTSEG nur mit deutschen Unternehmen?',answer:'Nein. Die deutschsprachige Seite richtet sich an B2B-Einkäufer aus Deutschland, Österreich, der Schweiz und weiteren deutschsprachigen Organisationen, die in Türkiye beschaffen möchten.'},
      {question:'Kann CTSEG einen Hersteller in Türkiye verifizieren?',answer:'Ja. Umfang und Tiefe der Prüfung richten sich nach Produkt, Projekt und verfügbarer Dokumentation. Unternehmensdaten, Produktionsfähigkeit, Zertifikate und kommerzielle Angaben werden je Anfrage bewertet.'},
      {question:'Garantiert CTSEG niedrigere Kosten durch Nearshoring?',answer:'Nein. Gesamtwirtschaftlichkeit hängt von Produkt, Volumen, Qualität, Werkzeugkosten, Logistik, Zoll und Lieferbedingungen ab und wird je Projekt separat bewertet.'}
    ],
    ctaTitle:'Beschaffungsanfrage für Türkiye senden',
    ctaText:'Senden Sie Produkt, Zeichnung oder Spezifikation, Menge, Zieltermin, benötigte Zertifikate und Lieferort. CTSEG bewertet zunächst die technische und kommerzielle Machbarkeit.',
    ctaLabel:'Sourcing-RFQ senden'
  },
  it:{
    eyebrow:'ITALIA → TÜRKİYE · PRODUZIONE & SOURCING',
    title:'Produzione, OEM e sourcing in Türkiye per aziende italiane',
    description:'CTSEG supporta aziende, brand e importatori italiani nella ricerca e verifica di produttori in Türkiye, coordinando specifiche, RFQ, campioni, documentazione, capacità produttiva e condizioni commerciali.',
    directAnswerTitle:'Come può CTSEG supportare un’azienda italiana che vuole produrre o acquistare in Türkiye?',
    directAnswer:'CTSEG parte da un’esigenza concreta di prodotto o produzione. Definiamo specifiche, quantità, standard qualitativi e obiettivi commerciali, individuiamo produttori compatibili in Türkiye, verifichiamo le informazioni disponibili e coordiniamo RFQ, campioni, documenti e confronto delle offerte. L’obiettivo è costruire un percorso di approvvigionamento verificabile, non fornire semplici elenchi di fabbriche.',
    sectorsTitle:'Aree di produzione e sourcing da valutare in Türkiye',
    sectorsLead:'La selezione dipende da capacità produttiva, qualità, documentazione, MOQ, tempi e costo totale.',
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
    supportTitle:'Cosa verifichiamo prima di proporre un produttore',
    support:[
      'Identità aziendale e capacità produttiva effettiva',
      'Specifiche, materiali e standard qualitativi',
      'MOQ, capacità mensile, tempi e Incoterms',
      'Certificazioni e documenti disponibili',
      'Campioni, prototipi e capacità di personalizzazione',
      'Condizioni commerciali e logistiche'
    ],
    complianceTitle:'La compatibilità viene verificata prodotto per prodotto',
    complianceText:'Classificazione doganale, origine, requisiti tecnici, marcatura, certificazioni e regole di importazione dipendono dal prodotto e dal mercato di destinazione. CTSEG non presenta automaticamente un produttore come idoneo prima della verifica commerciale e documentale.',
    processTitle:'Processo',
    process:['Definizione di prodotto, specifica, quantità e obiettivo','Ricerca e prequalifica di produttori in Türkiye','Coordinamento di RFQ, documenti e campioni','Confronto di offerte, MOQ, tempi e condizioni','Presentazione delle opzioni compatibili per la decisione del buyer'],
    faq:[
      {question:'CTSEG può cercare produttori per private label?',answer:'Sì. La ricerca può includere capacità OEM/private label, MOQ, personalizzazione, packaging e documentazione richiesta dal mercato di destinazione.'},
      {question:'È possibile richiedere campioni prima dell’ordine?',answer:'Quando il produttore li rende disponibili, CTSEG può coordinare campioni o prototipi e le relative condizioni commerciali.'},
      {question:'CTSEG garantisce il produttore o il prezzo finale?',answer:'No. La valutazione riduce l’incertezza, ma prezzo, capacità, qualità e condizioni finali devono essere confermati sul progetto specifico.'}
    ],
    ctaTitle:'Invia una richiesta di produzione o sourcing in Türkiye',
    ctaText:'Condividi prodotto, specifiche, quantità, target, certificazioni richieste e luogo di consegna. CTSEG valuterà le opzioni produttive compatibili.',
    ctaLabel:'Invia RFQ'
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
