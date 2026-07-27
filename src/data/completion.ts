import type { Locale } from './site';

type Localized<T> = Record<Locale, T>;

export const specialSlugs = {
  'how-we-work': { tr:'nasil-calisiyoruz', en:'how-we-work' },
  scenarios: { tr:'temsili-calisma-senaryolari', en:'representative-work-scenarios' }
} as const;

export const guideIds = ['vegetable-oil-rfq','nuts-quality-documents','packaging-moq-tco'] as const;
export type GuideId = (typeof guideIds)[number];

export const guideSlugs: Record<GuideId, Record<'tr'|'en',string>> = {
  'vegetable-oil-rfq': {
    tr:'bitkisel-yag-tedarikinde-rfq-kontrol-listesi',
    en:'vegetable-oil-sourcing-rfq-checklist'
  },
  'nuts-quality-documents': {
    tr:'kuruyemis-kuru-meyve-kalite-belge-kontrolu',
    en:'nuts-dried-fruit-quality-document-check'
  },
  'packaging-moq-tco': {
    tr:'ambalaj-moq-toplam-maliyet-karsilastirmasi',
    en:'packaging-moq-total-cost-comparison'
  }
};

export const homeEnhancement: Localized<{
  trustTitle:string; established:string; founder:string; headquarters:string;
  tradeTitle:string; tradeLead:string; outbound:string; inbound:string;
  scenarioTitle:string; scenarioLead:string; scenarioCta:string; commercialCta:string;
}> = {
  tr:{
    trustTitle:'Şirket bilgileri',established:'2022 yılında kuruldu',founder:'Kurucu: Teyfik Gökdemir',
    headquarters:'Merkez: Fevzipaşa Caddesi, Fatih, İstanbul, Türkiye',
    tradeTitle:'İki yönlü ticari koordinasyon',tradeLead:'CTSEG, doğrulanabilir menşe ve uygulanabilir ticari koşullar temelinde alıcılar ile tedarik pazarları arasında çalışır.',
    outbound:'Doğrulanmış İran menşeli ticari ürünlerin uluslararası alıcılar için değerlendirilmesi.',
    inbound:'İranlı işletmelerin Türkiye ve uygun uluslararası pazarlardan ürün, hammadde, ambalaj ve üretim girdisi tedarik etmesine destek.',
    scenarioTitle:'Karar sürecini somutlaştıran senaryolar',scenarioLead:'Üç temsili çalışma senaryosu, CTSEG yaklaşımının hangi kriterleri ve ticari çıktıları yapılandırdığını açıklar.',
    scenarioCta:'Temsili senaryoları inceleyin',commercialCta:'Ticari Talep Gönder'
  },
  en:{
    trustTitle:'Company information',established:'Established in 2022',founder:'Founder: Teyfik Gökdemir',
    headquarters:'Headquarters: Fevzipaşa Caddesi, Fatih, Istanbul, Türkiye',
    tradeTitle:'Two-way commercial coordination',tradeLead:'CTSEG works between buyers and supply markets through verifiable origin, defined requirements and executable commercial terms.',
    outbound:'Assessment of verified Iranian-origin trade products for international buyers.',
    inbound:'Support for Iranian businesses sourcing products, raw materials, packaging and production inputs from Türkiye and suitable international markets.',
    scenarioTitle:'Representative decision scenarios',scenarioLead:'Three clearly labelled scenarios show the criteria, work stages and commercial outputs CTSEG can structure.',
    scenarioCta:'Review representative scenarios',commercialCta:'Request a Commercial Assessment'
  },
  de:{
    trustTitle:'Unternehmensangaben',established:'Gegründet 2022',founder:'Gründer: Teyfik Gökdemir',
    headquarters:'Hauptsitz: Fevzipaşa Caddesi, Fatih, Istanbul, Türkei',
    tradeTitle:'Handelskoordination in beide Richtungen',tradeLead:'CTSEG verbindet Käufer und Beschaffungsmärkte auf Grundlage prüfbarer Herkunft und umsetzbarer Konditionen.',
    outbound:'Bewertung verifizierter Handelsprodukte iranischen Ursprungs für internationale Käufer.',
    inbound:'Unterstützung iranischer Unternehmen bei der Beschaffung von Produkten, Rohstoffen, Verpackungen und Produktionsmitteln aus der Türkei und geeigneten internationalen Märkten.',
    scenarioTitle:'Repräsentative Entscheidungsszenarien',scenarioLead:'Drei klar gekennzeichnete Szenarien erläutern Kriterien, Arbeitsschritte und mögliche kaufmännische Ergebnisse.',
    scenarioCta:'Szenarien ansehen',commercialCta:'Kommerzielle Bewertung anfragen'
  },
  it:{
    trustTitle:'Informazioni aziendali',established:'Fondata nel 2022',founder:'Fondatore: Teyfik Gökdemir',
    headquarters:'Sede: Fevzipaşa Caddesi, Fatih, Istanbul, Turchia',
    tradeTitle:'Coordinamento commerciale bidirezionale',tradeLead:'CTSEG collega acquirenti e mercati di approvvigionamento sulla base di origine verificabile e condizioni commerciali realizzabili.',
    outbound:'Valutazione di prodotti commerciali verificati di origine iraniana per acquirenti internazionali.',
    inbound:'Supporto alle imprese iraniane nell’approvvigionamento di prodotti, materie prime, imballaggi e input produttivi dalla Turchia e da mercati internazionali idonei.',
    scenarioTitle:'Scenari decisionali rappresentativi',scenarioLead:'Tre scenari chiaramente identificati illustrano criteri, fasi di lavoro e output commerciali.',
    scenarioCta:'Esamina gli scenari',commercialCta:'Richiedi una valutazione commerciale'
  },
  fr:{
    trustTitle:'Informations sur l’entreprise',established:'Fondée en 2022',founder:'Fondateur : Teyfik Gökdemir',
    headquarters:'Siège : Fevzipaşa Caddesi, Fatih, Istanbul, Turquie',
    tradeTitle:'Coordination commerciale à double sens',tradeLead:'CTSEG relie acheteurs et marchés d’approvisionnement sur la base d’une origine vérifiable et de conditions réalisables.',
    outbound:'Évaluation de produits commerciaux vérifiés d’origine iranienne pour les acheteurs internationaux.',
    inbound:'Accompagnement des entreprises iraniennes pour leurs achats de produits, matières premières, emballages et intrants de production en Turquie et sur des marchés internationaux adaptés.',
    scenarioTitle:'Scénarios de décision représentatifs',scenarioLead:'Trois scénarios clairement signalés expliquent les critères, étapes et livrables commerciaux possibles.',
    scenarioCta:'Voir les scénarios',commercialCta:'Demander une évaluation commerciale'
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
    ethicsTitle:'Bağımsızlık ve etik sınırlar',ethics:['Menşe gizleme veya yanıltıcı yeniden etiketleme yapılmaz.','Yanıltıcı belgeye aracılık edilmez.','Yaptırım aşma hizmeti verilmez.','Doğrulanmamış ticari garanti sunulmaz.','Taraf, ürün ve işlem uygunluğu proje bazında değerlendirilir.'],
    founderTitle:'Kurucu',founder:'Teyfik Gökdemir, CTSEG’i 2022 yılında İstanbul’da kurdu. Bu alanda yalnızca doğrulanmış şirket bilgileri paylaşılır; uydurma özgeçmiş, başarı veya müşteri rakamı kullanılmaz.'
  },
  en:{
    whoTitle:'Who is CTSEG?',who:'CTSEG is an Istanbul-based strategic sourcing and international commercial coordination company. It assesses markets, counterparties, products, cost and execution conditions within one decision framework.',
    workTitle:'What we do',work:['Manufacturer and supplier research','Supplier and counterparty verification','RFQ preparation and bid comparison','Cost and total cost of ownership assessment','Sample and quality-document coordination','International commercial decision support','Market-entry pre-assessment','Trade-product sourcing coordination'],
    methodTitle:'How we work',method:'We define the requirement, research the market, verify counterparties and documents, compare quotations on common criteria, prepare negotiation inputs and coordinate an executable order and document flow.',
    ethicsTitle:'Independence and ethical boundaries',ethics:['Origin is not concealed or misleadingly relabelled.','CTSEG does not facilitate deceptive documentation.','CTSEG does not provide sanctions-evasion services.','Unverified commercial guarantees are not offered.','Counterparty, product and transaction suitability is assessed case by case.'],
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
  fr:{
    whoTitle:'Qui est CTSEG ?',who:'CTSEG est une société basée à Istanbul, spécialisée dans le sourcing stratégique et la coordination commerciale internationale. Marché, contrepartie, produit, coût et exécution sont évalués dans un même cadre de décision.',
    workTitle:'Nos activités',work:['Recherche de fabricants et fournisseurs','Vérification des fournisseurs et contreparties','Préparation des RFQ et comparaison des offres','Évaluation des coûts et du TCO','Coordination des échantillons et documents qualité','Aide à la décision commerciale internationale','Pré-évaluation de l’entrée sur un marché','Coordination du sourcing de produits commerciaux'],
    methodTitle:'Notre méthode',method:'Nous définissons le besoin, étudions le marché, vérifions les parties et documents, comparons les offres sur des critères communs et coordonnons un flux de commande et de documents réalisable.',
    ethicsTitle:'Indépendance et limites éthiques',ethics:['Aucune dissimulation d’origine ni réétiquetage trompeur.','Aucune facilitation de documents mensongers.','Aucun service de contournement des sanctions.','Aucune garantie commerciale non vérifiée.','L’adéquation de la partie, du produit et de l’opération est évaluée au cas par cas.'],
    founderTitle:'Fondateur',founder:'Teyfik Gökdemir a fondé CTSEG à Istanbul en 2022. Seules des informations vérifiées sont présentées, sans biographie ni résultat inventé.'
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
  fr:marketData('Turquie',['Recherche de fabricants','Recherche de fournisseurs prêts à exporter','Comparaison capacité-prix','Coordination des échantillons et documents','Options emballage et marque propre','Accès aux réseaux de production'],'Europe',['Attentes des importateurs','Transparence produit-document','Traçabilité','Exigences d’emballage et d’étiquetage','Contrôles qualité et conformité','Coordination avec les acheteurs institutionnels'],'International',['Recherche par pays','Vérification des contreparties','Évaluation origine et usage final','Comparaison des options logistiques','Pré-évaluation paiement et faisabilité','Sources adaptées dans des pays tiers'])
};

export const processPages = {
  tr:{
    title:'Nasıl çalışıyoruz?',description:'Bir ticari ihtiyacın tanımından teslim sonrası değerlendirmeye uzanan dokuz kontrollü adım.',
    role:'CTSEG ticari araştırma, doğrulama, karşılaştırma ve koordinasyon sağlar. Satıcı, banka, hukuk bürosu, gümrük müşaviri, taşıyıcı veya garanti veren kurum rolünü üstlenmez.',
    steps:['İhtiyacın tanımlanması','Ticari uygulanabilirlik ön değerlendirmesi','Pazar ve tedarikçi araştırması','Tedarikçi doğrulaması','RFQ ve teklif karşılaştırması','Numune ve kalite değerlendirmesi','Ticari müzakere','Sipariş ve belge koordinasyonu','Teslim sonrası değerlendirme'],
    faq:[
      ['CTSEG nedir?','CTSEG, İstanbul merkezli stratejik tedarik ve uluslararası ticari koordinasyon şirketidir. Şirketlerin ihtiyaçlarını tanımlamasına, uygun pazar ve tedarikçileri araştırmasına, tarafları doğrulamasına, teklifleri karşılaştırmasına ve uygulanabilir ticari karar kayıtları oluşturmasına destek verir. CTSEG her işlemde rolünü ve değerlendirme sınırlarını açık biçimde tanımlar.'],
      ['CTSEG nasıl çalışır?','Çalışma, ihtiyacın ve karar kriterlerinin netleştirilmesiyle başlar. Ardından pazar araştırması, tedarikçi doğrulaması, RFQ, teklif ve toplam maliyet karşılaştırması yürütülür. Gerekli olduğunda numune, kalite belgesi ve müzakere girdileri koordine edilir. Sipariş ve teslimat sorumlulukları ilgili ticari taraflarda kalır.'],
      ['Tedarikçi doğrulaması nedir?','Tedarikçi doğrulaması; şirket kaydı, adres, yetkili taraf, üretim veya tedarik kapasitesi, kalite yaklaşımı, belgeler, referanslar ve ticari koşulların tutarlı biçimde kontrol edilmesidir. Kontrol kapsamı ürün, ülke, işlem değeri ve risk düzeyine göre belirlenir; doğrulanamayan bilgi açıkça işaretlenir.'],
      ['Teklif almak için hangi bilgiler gerekir?','Karşılaştırılabilir teklif için ürün veya hizmet tanımı, teknik spesifikasyon, tahmini miktar, ambalaj beklentisi, teslim ülkesi ve şehri, hedef tarih, belge ihtiyacı ve tercih edilen ticari koşullar gerekir. Eksik bilgiler tekliflerin farklı kapsamlar içermesine ve maliyet karşılaştırmasının yanıltıcı olmasına yol açabilir.'],
      ['MOQ’yu kim belirler?','Minimum sipariş miktarını CTSEG belirlemez. MOQ; üretici, ürün, üretim hattı, ambalaj biçimi, private label gereksinimi ve sevkiyat modeline göre tedarikçi tarafından belirlenir. CTSEG, teklif aşamasında MOQ’nun dayanağını ve alternatif sipariş yapılarını karşılaştırmaya yardımcı olur.'],
      ['CTSEG ödeme işlemini yürütür mü?','CTSEG banka veya ödeme kuruluşu değildir ve müşteri fonlarını tutmaz. Ödeme koşulları, banka bilgileri ve tarafların yetkileri ticari değerlendirme içinde kontrol edilebilir; ancak ödeme doğrudan sözleşmenin tarafları ve yetkili finans kuruluşları arasında, uygulanabilir mevzuata uygun biçimde yürütülür.'],
      ['CTSEG taşıma veya gümrük işlemini yapar mı?','CTSEG taşıyıcı veya gümrük müşaviri değildir. Uygun lojistik seçeneklerinin, Incoterms yapısının, belge gereksinimlerinin ve teslim planının karşılaştırılmasını koordine edebilir. Fiilî taşıma, sigorta ve gümrük işlemleri ilgili lisanslı hizmet sağlayıcılar ve işlem tarafları tarafından yürütülür.']
    ]
  },
  en:{
    title:'How we work',description:'Nine controlled stages from defining a commercial requirement to post-delivery review.',
    role:'CTSEG provides commercial research, verification, comparison and coordination. It does not act as the seller, bank, law firm, customs broker, carrier or guaranteeing institution.',
    steps:['Define the requirement','Commercial feasibility pre-assessment','Market and supplier research','Supplier verification','RFQ and quotation comparison','Sample and quality assessment','Commercial negotiation','Order and document coordination','Post-delivery review'],
    faq:[
      ['What is CTSEG?','CTSEG is an Istanbul-based strategic sourcing and international commercial coordination company. It helps businesses define requirements, research suitable markets and suppliers, verify counterparties, compare offers and create traceable commercial decision records. CTSEG states its role, evidence and assessment limits clearly for each engagement.'],
      ['How does CTSEG work?','An engagement begins by defining the requirement and decision criteria. CTSEG then conducts market research, supplier verification, RFQ preparation, quotation comparison and total landed cost assessment. Samples, quality documents and negotiation inputs may be coordinated where required. Contracting, payment, shipment and import responsibilities remain with the relevant commercial parties.'],
      ['What is supplier verification?','Supplier verification is a structured check of company registration, address, authorised parties, production or supply capability, quality approach, documents, references and commercial terms. The depth of review depends on the product, country, transaction value and risk profile. Information that cannot be substantiated is identified rather than presented as confirmed.'],
      ['What information is needed for a quotation?','Comparable quotations require a product or service definition, technical specification, estimated quantity, packaging expectation, delivery country and city, target date, documentation needs and preferred commercial terms. Missing inputs often lead suppliers to quote different scopes, making unit-price and total landed cost comparisons unreliable.'],
      ['Who determines the MOQ?','CTSEG does not set the minimum order quantity. MOQ is determined by the supplier according to the product, production line, packaging format, private-label work and shipment model. During quotation assessment, CTSEG can compare the commercial basis of the MOQ and identify feasible alternative order structures.'],
      ['Does CTSEG handle payment?','CTSEG is not a bank or payment institution and does not hold client funds. Payment terms, bank details and signing authority can form part of commercial verification, but payment is made directly between the contracting parties and authorised financial institutions in accordance with applicable rules.'],
      ['Does CTSEG provide transport or customs clearance?','CTSEG is not a carrier or customs broker. It can coordinate the comparison of logistics options, Incoterms, document requirements and delivery plans. Physical transport, insurance and customs procedures are performed by the relevant licensed providers and transaction parties.']
    ]
  }
};

export const scenarioPages = {
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
  }
};

export const guides = {
  'vegetable-oil-rfq':{
    tr:{title:'Bitkisel yağ tedarikinde RFQ kontrol listesi',description:'Karşılaştırılabilir bitkisel yağ teklifleri için ürün, ambalaj, miktar, belge, teslim ve maliyet kontrolü.',intro:'Bitkisel yağ RFQ’su yalnızca ürün adı ve birim fiyat istememelidir. Yağ türü, teknik özellik, ambalaj, miktar, teslim yeri ve belge beklentisi aynı formatta tanımlandığında teklifler karşılaştırılabilir hale gelir.',checklist:['Yağ türü, rafinasyon ve hedef kullanım','Varsa teknik limitler ve hedef pazar','PET, teneke, flexitank veya dökme ambalaj','Net hacim, koli düzeni ve palet beklentisi','Sipariş ve tahmini dönemsel miktar','Teslim ülkesi, şehir ve tercih edilen Incoterm','Etiket dili ve private label gereksinimi','COA, menşe ve parti belgesi beklentisi','Hedef tarih ve teklif geçerlilik süresi'],table:[['Karşılaştırma alanı','Neden gerekli?'],['Ürün spesifikasyonu','Farklı kalite ve rafinasyon seviyelerini ayırır.'],['Ambalaj yapısı','Dolum, malzeme ve navlun maliyetini görünür kılar.'],['Teslim kapsamı','Birim fiyat ile toplam teslim maliyetini ayırır.']],cta:'Bitkisel yağ talebinizi paylaşın'},
    en:{title:'Vegetable oil sourcing RFQ checklist',description:'A practical checklist for comparable vegetable-oil quotations covering product, packaging, quantity, documents, delivery and cost.',intro:'A vegetable-oil RFQ should request more than a product name and unit price. Quotations become comparable when oil type, technical parameters, packaging, quantities, delivery point and documentation expectations use one common format.',checklist:['Oil type, refining status and intended use','Technical limits and target market where applicable','PET, tin, flexitank or bulk packaging','Net volume, case configuration and pallet expectation','Order quantity and indicative periodic demand','Delivery country, city and preferred Incoterm','Label language and private-label requirements','COA, origin and batch-document expectations','Target date and quotation validity'],table:[['Comparison field','Why it matters'],['Product specification','Separates different quality and refining levels.'],['Packaging structure','Makes filling, material and freight costs visible.'],['Delivery scope','Separates unit price from total landed cost.']],cta:'Share your vegetable-oil requirement'}
  },
  'nuts-quality-documents':{
    tr:{title:'Kuruyemiş ve kuru meyvede kalite ve belge kontrolü',description:'Parti bazlı kalite, menşe, analiz, numune ve izlenebilirlik kontrollerini yapılandıran kısa satın alma rehberi.',intro:'Kuruyemiş ve kuru meyvede kalite yalnızca ürün fotoğrafı veya genel sertifika listesiyle doğrulanamaz. Çeşit, kalibre, nem, kusur, analiz, ambalaj ve parti belgeleri birlikte değerlendirilmelidir.',checklist:['Ürün çeşidi, menşe ve hasat dönemi','Kalibre, renk, bütünlük ve kusur tanımı','Nem ve hedef kullanıma uygunluk','Aflatoksin, pestisit ve mikrobiyoloji beklentisi','Parti bazlı COA ve izlenebilirlik','Numune ile sevk partisinin eşleştirilmesi','Ambalaj bariyeri ve depolama koşulları','Etiket, lot kodu ve raf ömrü bilgisi','Hedef pazar ve alıcıya özgü belge listesi'],table:[['Kontrol','Doğrulama yöntemi'],['Fiziksel kalite','Onaylı numune ve yazılı spesifikasyon'],['Analiz','Parti bazlı laboratuvar sonucu veya COA'],['İzlenebilirlik','Lot kodu, üretici ve menşe kaydı']],cta:'Numune ve belge talebi gönderin'},
    en:{title:'Nuts and dried fruit quality and document control',description:'A concise sourcing guide for batch-level quality, origin, analysis, sampling and traceability checks.',intro:'Quality in nuts and dried fruit cannot be established through product photography or a generic certificate list alone. Variety, size, moisture, defects, analysis, packaging and batch documentation must be assessed together.',checklist:['Variety, origin and crop period','Size, colour, integrity and defect definition','Moisture and suitability for intended use','Aflatoxin, pesticide and microbiology requirements','Batch-level COA and traceability','Matching the approved sample to the shipment lot','Packaging barrier and storage conditions','Label, lot code and shelf-life information','Target-market and buyer-specific document list'],table:[['Control','Verification method'],['Physical quality','Approved sample and written specification'],['Analysis','Batch-level laboratory result or COA'],['Traceability','Lot code, producer and origin record']],cta:'Request sample and document details'}
  },
  'packaging-moq-tco':{
    tr:{title:'Ambalaj, MOQ ve toplam maliyet karşılaştırması',description:'Ambalaj tekliflerinde kalıp, baskı, MOQ, fire, navlun ve stok etkisini birlikte değerlendirme rehberi.',intro:'Ambalaj tekliflerinde düşük birim fiyat, yüksek MOQ veya kalıp yatırımı nedeniyle en uygun seçenek olmayabilir. Karar; malzeme, baskı, üretim kaybı, navlun ve stok etkisini içeren toplam maliyet üzerinden verilmelidir.',checklist:['Ambalaj malzemesi ve teknik ölçü','Baskı yöntemi, renk ve yüzey işlemi','Kalıp veya klişe maliyeti ve mülkiyeti','Standart ve özel üretim MOQ’su','Numune ve deneme üretimi koşulları','Üretim firesi ve toleranslar','Koli, palet ve taşıma hacmi','Termin ve yeniden sipariş süresi','Stok taşıma ve tasarım değişikliği riski'],table:[['Teklif unsuru','TCO etkisi'],['MOQ','Stok, finansman ve eskime riskini değiştirir.'],['Kalıp/baskı hazırlığı','İlk sipariş ile tekrar sipariş maliyetini ayırır.'],['Navlun hacmi','Birim başına teslim maliyetini etkiler.']],cta:'Ambalaj ihtiyacınızı değerlendirin'},
    en:{title:'Packaging, MOQ and total cost comparison',description:'How to assess tooling, print, MOQ, waste, freight and inventory effects across packaging quotations.',intro:'The lowest packaging unit price may not be the best option when it requires a high MOQ or significant tooling. The decision should compare material, print, production loss, freight and inventory effects through a total-cost view.',checklist:['Packaging material and technical dimensions','Print method, colours and surface treatment','Tooling or plate cost and ownership','Standard and custom-production MOQ','Sample and production-trial terms','Production waste and tolerances','Case, pallet and transport volume','Lead time and reorder cycle','Inventory and artwork-change risk'],table:[['Quotation element','TCO effect'],['MOQ','Changes inventory, finance and obsolescence risk.'],['Tooling and print setup','Separates first-order and repeat-order cost.'],['Freight volume','Changes delivered cost per unit.']],cta:'Assess your packaging requirement'}
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
  fr:{title:'Demande d’évaluation commerciale',intro:'Partagez les informations essentielles pour transformer votre besoin en périmètre comparable et vérifiable.',labels:['Nom complet','Entreprise','E-mail professionnel','Téléphone / WhatsApp','Pays','Type de demande','Produit ou service','Quantité estimée','Pays / ville de livraison','Date cible','Informations complémentaires'],requestOptions:['Recherche de fournisseurs','Vérification fournisseur','Comparaison offres et coûts','Coordination échantillons et documents','Entrée sur un marché','Autre'],submit:'Demander une évaluation commerciale',privacy:'J’ai lu la notice de confidentialité et j’accepte le traitement de ces informations pour répondre à ma demande.',success:'Votre demande a été transmise de manière sécurisée. CTSEG en évaluera le périmètre.',error:'L’envoi n’a pas pu être effectué. Vos informations n’ont pas été enregistrées.',fallback:'Téléchargez le récapitulatif et joignez-le à un e-mail professionnel envoyé à info@ctseg.com.tr.',download:'Télécharger le récapitulatif'}
};
