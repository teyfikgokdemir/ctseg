export type ServiceDetail = {
  scopeTitle:string;
  scope:string;
  problemTitle:string;
  problem:string;
  audienceTitle:string;
  audience:string;
  outcomesTitle:string;
  outcomes:string[];
  processTitle:string;
  process:string[];
  faq:{ question:string; answer:string }[];
};

type CoreServiceId = 'strategic-sourcing' | 'supplier-verification' | 'trade-advisory';

export const serviceDetails:Record<'tr'|'en'|'ro'|'bg'|'sr',Record<CoreServiceId,ServiceDetail>> = {
  tr: {
    'strategic-sourcing': {
      scopeTitle:'Hizmetin kapsamı',
      scope:'Stratejik tedarik çalışması; ihtiyacın ve teknik şartların netleştirilmesinden tedarik pazarı araştırmasına, RFQ hazırlığından tekliflerin toplam maliyet ve risk açısından karşılaştırılmasına kadar kararın bütününü kapsar. CTSEG, seçim sonrasında müzakere kayıtları ile tedarikçi performans planının kurulmasına da destek verir.',
      problemTitle:'Hangi sorunu çözer?',
      problem:'Birim fiyata dayalı, karşılaştırılması zor teklifler; doğrulanmamış tedarikçiler ve tek kaynağa bağımlılık satın alma kararını kırılganlaştırır. Bu hizmet, ticari ve operasyonel ölçütleri ortak bir değerlendirme çerçevesine getirerek kararın gerekçesini görünür kılar.',
      audienceTitle:'Kimler için uygundur?',
      audience:'Yeni bir tedarik pazarına girecek, maliyet yapısını yeniden değerlendirecek, kritik kalemlerde alternatif kaynak oluşturacak veya uluslararası satın alma sürecini standartlaştıracak B2B şirketler için uygundur.',
      outcomesTitle:'Beklenen çıktılar',
      outcomes:['Onaylanmış ihtiyaç ve tedarikçi değerlendirme ölçütleri','Doğrulanmış tedarikçi kısa listesi ve karşılaştırılabilir teklifler','Toplam sahip olma maliyeti ile risk karşılaştırması','Müzakere, seçim ve tedarikçi performansı için kayıtlı karar planı'],
      processTitle:'Çalışma süreci',
      process:['İhtiyaç, spesifikasyon, hacim ve teslim koşullarını tanımlama','Tedarik pazarını ve uygun üretici veya tedarikçileri araştırma','Adayları doğrulama, RFQ yürütme ve teklifleri normalize etme','Müzakere, seçim ve performans takip planını belgeleme'],
      faq:[
        {question:'Stratejik tedarik ile satın alma arasındaki fark nedir?',answer:'Satın alma işlemi siparişin yürütülmesine odaklanır. Stratejik tedarik ise pazar, tedarikçi, toplam maliyet, risk ve performans kararlarını sipariş öncesinden itibaren yapılandırır.'},
        {question:'Çalışmanın sonunda hangi belgeler oluşur?',answer:'Kapsama göre araştırma özeti, aday ve kısa liste, doğrulama kayıtları, teklif karşılaştırması, risk notları ve önerilen sonraki adımlar teslim edilir.'}
      ]
    },
    'supplier-verification': {
      scopeTitle:'Hizmetin kapsamı',
      scope:'CTSEG, tanımlanan ürün ve ticari ölçütlere göre üretici ve tedarikçi adaylarını araştırır; şirket kaydı, faaliyet alanı, kapasite, kalite belgeleri, referanslar ve ticari koşullar arasında çapraz kontrol yapar. Gerektiğinde numune, görüntülü görüşme veya saha doğrulaması için uygulanabilir bir plan oluşturur.',
      problemTitle:'Hangi sorunu çözer?',
      problem:'Bir şirketin çevrim içi görünürlüğü, gerçek üretim kabiliyetini veya siparişi güvenilir biçimde karşılayacağını kanıtlamaz. Doğrulama süreci, sahte veya uyumsuz belgeler, aracıların üretici gibi sunulması, kapasite belirsizliği ve ödeme öncesi ticari riskleri görünür hale getirir.',
      audienceTitle:'Kimler için uygundur?',
      audience:'Türkiye’de veya uluslararası pazarlarda yeni üretici arayan; mevcut adaylarını bağımsız ölçütlerle kontrol etmek isteyen ya da yüksek değerli sipariş öncesinde karşı taraf riskini azaltması gereken B2B alıcılar için uygundur.',
      outcomesTitle:'Beklenen çıktılar',
      outcomes:['İhtiyaca göre filtrelenmiş üretici ve tedarikçi adayları','Şirket, belge, kapasite ve referans doğrulama kayıtları','Açık riskler ve tamamlanması gereken kontroller','Kısa liste, karşılaştırma özeti ve önerilen sonraki adımlar'],
      processTitle:'Çalışma süreci',
      process:['Ürün, hacim, kalite, belge ve teslim ölçütlerini tanımlama','Birden fazla kaynaktan aday araştırması ve ön eleme','Kayıt, belge, kapasite, referans ve iletişim tutarlılığını doğrulama','Bulguları, riskleri ve kısa liste önerisini raporlama'],
      faq:[
        {question:'Tedarikçi doğrulaması kesin garanti sağlar mı?',answer:'Hayır. Doğrulama karar riskini azaltır ve mevcut kanıtları kayıt altına alır; gelecekteki kalite, teslimat veya ticari performans için koşulsuz garanti oluşturmaz.'},
        {question:'En düşük fiyatlı aday mı önerilir?',answer:'Fiyat; kalite, kapasite, termin, lojistik, ödeme koşulları, mevzuat uyumu ve toplam risk ile birlikte değerlendirilir.'}
      ]
    },
    'trade-advisory': {
      scopeTitle:'Hizmetin kapsamı',
      scope:'Uluslararası ticaret danışmanlığı; hedef pazar ve tarafların araştırılması, ticari modelin kurulması, Incoterms ve teslim sorumluluklarının netleştirilmesi, maliyet ve belge akışının değerlendirilmesi ile uygulama adımlarının koordinasyonunu kapsar.',
      problemTitle:'Hangi sorunu çözer?',
      problem:'Pazar fırsatı tek başına uygulanabilir bir işlem yaratmaz. Yanlış teslim şekli, eksik belge, doğrulanmamış karşı taraf, görünmeyen lojistik maliyeti veya görev dağılımındaki boşluklar işlemi geciktirebilir. CTSEG bu bağımlılıkları karar öncesinde ortak bir ticari plana dönüştürür.',
      audienceTitle:'Kimler için uygundur?',
      audience:'İthalat veya ihracata başlayacak, yeni bir kaynak ülke ya da satış pazarı değerlendirecek, uluslararası partner seçimini doğrulayacak veya mevcut ticaret operasyonunu daha kontrollü hale getirecek B2B şirketler için uygundur.',
      outcomesTitle:'Beklenen çıktılar',
      outcomes:['Hedef pazar, taraflar ve ticari model için karar çerçevesi','Maliyet, Incoterms, lojistik ve belge sorumluluklarının özeti','Karşı taraf ve uygulama riskleri ile kontrol noktaları','Sorumluları ve sonraki adımları gösteren uygulanabilir yol haritası'],
      processTitle:'Çalışma süreci',
      process:['Amaç, ürün, pazar ve mevcut operasyon yapısını değerlendirme','Pazar koşulları ile muhtemel tarafları araştırma ve doğrulama','Maliyet, teslim, belge ve risk senaryolarını karşılaştırma','Uygulama planını, sorumluları ve kontrol noktalarını belirleme'],
      faq:[
        {question:'Bu hizmet gümrük veya hukuk müşavirliği yerine geçer mi?',answer:'Hayır. CTSEG ticari karar ve operasyon çerçevesini kurar; hukuki, mali veya gümrük müşavirliği gereken konular yetkili uzmanlarla yürütülmelidir.'},
        {question:'İthalat ve ihracat projeleri birlikte ele alınabilir mi?',answer:'Evet. Kapsam, şirketin ihtiyacına göre kaynak ülke seçimi, ithalat, ihracat, partner doğrulama veya yeni pazar girişine odaklanabilir.'}
      ]
    }
  },
  en: {
    'strategic-sourcing': {
      scopeTitle:'Scope of the service',
      scope:'Strategic sourcing covers the full decision path: clarifying requirements and specifications, analysing supply markets, preparing an RFQ, and comparing offers by total cost and risk. CTSEG can also support documented negotiation, award rationale and the supplier performance plan after selection.',
      problemTitle:'The problem it solves',
      problem:'Unit-price-led offers, unverified suppliers and single-source dependency make purchasing decisions fragile. This service places commercial and operational criteria in one evaluation framework so decision-makers can see why an option is preferred and which risks remain.',
      audienceTitle:'Who it is for',
      audience:'It is designed for B2B companies entering a new supply market, reviewing cost structures, creating alternatives for critical categories or standardising international procurement decisions.',
      outcomesTitle:'Expected deliverables',
      outcomes:['Agreed requirement and supplier evaluation criteria','Verified supplier shortlist and comparable offers','Total-cost and commercial-risk comparison','Documented negotiation, award and supplier performance plan'],
      processTitle:'How the engagement works',
      process:['Define the requirement, specification, volume and delivery conditions','Research the supply market and suitable manufacturers or suppliers','Verify candidates, run the RFQ and normalise offers','Document negotiation, selection and performance controls'],
      faq:[
        {question:'How is strategic sourcing different from procurement?',answer:'Procurement executes the purchase. Strategic sourcing structures market, supplier, total-cost, risk and performance decisions before and after an order.'},
        {question:'What records are delivered?',answer:'Depending on scope, deliverables can include a research summary, candidate and short lists, verification records, offer comparison, risk notes and recommended next steps.'}
      ]
    },
    'supplier-verification': {
      scopeTitle:'Scope of the service',
      scope:'CTSEG researches manufacturers and suppliers against agreed product and commercial criteria, then cross-checks company registration, business activity, capacity, quality documents, references and commercial terms. Where appropriate, we define a practical plan for samples, video review or an on-site verification.',
      problemTitle:'The problem it solves',
      problem:'A company’s online presence does not prove production capability or reliable order fulfilment. Verification exposes mismatched documents, intermediaries presented as manufacturers, unclear capacity and commercial risks that should be addressed before payment or commitment.',
      audienceTitle:'Who it is for',
      audience:'It is for B2B buyers seeking new manufacturers in Türkiye or international markets, independently checking existing candidates, or reducing counterparty risk before a material order.',
      outcomesTitle:'Expected deliverables',
      outcomes:['Requirement-matched manufacturer and supplier candidates','Company, document, capacity and reference verification records','Open risks and outstanding checks made explicit','Shortlist, comparison summary and recommended next steps'],
      processTitle:'How the engagement works',
      process:['Define product, volume, quality, documentation and delivery criteria','Research and screen candidates across multiple sources','Verify registration, documents, capacity, references and communication consistency','Report findings, risks and the recommended shortlist'],
      faq:[
        {question:'Does supplier verification provide a guarantee?',answer:'No. Verification reduces decision risk and records available evidence; it cannot provide an unconditional guarantee of future quality, delivery or commercial performance.'},
        {question:'Do you recommend the lowest-priced candidate?',answer:'Price is evaluated with quality, capacity, lead time, logistics, payment terms, compliance and total risk.'}
      ]
    },
    'trade-advisory': {
      scopeTitle:'Scope of the service',
      scope:'International trade advisory covers target-market and counterparty research, commercial-model design, clarification of Incoterms and delivery responsibilities, review of cost and document flows, and coordination of practical execution steps.',
      problemTitle:'The problem it solves',
      problem:'A market opportunity is not yet an executable transaction. Incorrect delivery terms, missing documents, an unverified counterparty, hidden logistics costs or unclear ownership can delay the operation. CTSEG turns these dependencies into one commercial plan before commitment.',
      audienceTitle:'Who it is for',
      audience:'It is intended for B2B companies preparing to import or export, assessing a new source country or sales market, verifying an international partner, or bringing greater control to an existing trade operation.',
      outcomesTitle:'Expected deliverables',
      outcomes:['Decision framework for the target market, counterparties and commercial model','Summary of cost, Incoterms, logistics and document responsibilities','Counterparty and execution risks with defined controls','Executable roadmap showing owners and next steps'],
      processTitle:'How the engagement works',
      process:['Assess the objective, product, market and current operating structure','Research and verify market conditions and potential counterparties','Compare cost, delivery, documentation and risk scenarios','Define the execution plan, responsibilities and control points'],
      faq:[
        {question:'Is this a substitute for legal or customs advice?',answer:'No. CTSEG structures the commercial decision and operating model; legal, tax or customs matters should be handled by authorised specialists where required.'},
        {question:'Can the scope cover both import and export projects?',answer:'Yes. The engagement can focus on source-country selection, importing, exporting, partner verification or entry into a new market.'}
      ]
    }
  },
  ro: {
    'strategic-sourcing': {
      scopeTitle:'Domeniul serviciului',
      scope:'Sourcingul strategic acoperă întregul traseu decizional: clarificarea cerinței și specificației, analiza pieței de furnizare, pregătirea RFQ-ului și compararea ofertelor prin cost total și risc. CTSEG poate sprijini și negocierea documentată, justificarea selecției și planul de performanță al furnizorului.',
      problemTitle:'Ce problemă rezolvă?',
      problem:'Ofertele bazate doar pe prețul unitar, furnizorii neverificați și dependența de o singură sursă fac decizia de achiziție vulnerabilă. Serviciul aduce criteriile comerciale și operaționale într-un singur cadru comparabil.',
      audienceTitle:'Pentru cine este potrivit?',
      audience:'Pentru companii B2B care intră pe o piață nouă de aprovizionare, revizuiesc structura costurilor, construiesc surse alternative pentru categorii critice sau standardizează achizițiile internaționale.',
      outcomesTitle:'Livrabile așteptate',
      outcomes:['Cerință și criterii de evaluare agreate','Listă scurtă de furnizori verificați și oferte comparabile','Comparație de cost total și risc comercial','Plan documentat pentru negociere, selecție și monitorizarea performanței'],
      processTitle:'Cum decurge colaborarea',
      process:['Definirea cerinței, specificației, volumului și condițiilor de livrare','Cercetarea pieței și a producătorilor sau furnizorilor potriviți','Verificarea candidaților, rularea RFQ-ului și normalizarea ofertelor','Documentarea negocierii, selecției și controalelor de performanță'],
      faq:[{question:'Care este diferența dintre sourcing strategic și procurement?',answer:'Procurement-ul execută achiziția. Sourcingul strategic structurează deciziile privind piața, furnizorul, costul total, riscul și performanța înainte și după comandă.'},{question:'Ce documente sunt livrate?',answer:'În funcție de proiect, livrabilele pot include rezumatul cercetării, lista de candidați, verificări, comparația ofertelor, note de risc și pașii următori recomandați.'}]
    },
    'supplier-verification': {
      scopeTitle:'Domeniul serviciului',
      scope:'CTSEG cercetează producători și furnizori pe baza criteriilor de produs și comerciale agreate, apoi verifică încrucișat înregistrarea companiei, activitatea, capacitatea, documentele de calitate, referințele și condițiile comerciale. La nevoie, structurăm și un plan pentru mostre, verificare video sau verificare la fața locului.',
      problemTitle:'Ce problemă rezolvă?',
      problem:'Prezența online a unei companii nu dovedește capacitatea reală de producție sau executarea fiabilă a unei comenzi. Verificarea scoate la iveală documente neconforme, intermediari prezentați drept producători, capacitate neclară și riscuri comerciale înainte de plată.',
      audienceTitle:'Pentru cine este potrivit?',
      audience:'Pentru cumpărători B2B care caută producători noi în Türkiye sau pe alte piețe, vor să verifice independent candidați existenți sau să reducă riscul de contraparte înaintea unei comenzi importante.',
      outcomesTitle:'Livrabile așteptate',
      outcomes:['Candidați potriviți cerinței','Înregistrări privind compania, documentele, capacitatea și referințele','Riscuri deschise și verificări rămase','Listă scurtă, comparație și pași următori recomandați'],
      processTitle:'Cum decurge colaborarea',
      process:['Definirea criteriilor de produs, volum, calitate, documentație și livrare','Cercetarea și preselecția candidaților din mai multe surse','Verificarea înregistrării, documentelor, capacității, referințelor și coerenței comunicării','Raportarea constatărilor, riscurilor și listei recomandate'],
      faq:[{question:'Verificarea furnizorului oferă o garanție?',answer:'Nu. Verificarea reduce riscul deciziei și documentează dovezile disponibile, dar nu poate garanta necondiționat performanța viitoare.'},{question:'Recomandați candidatul cu cel mai mic preț?',answer:'Prețul este analizat împreună cu calitatea, capacitatea, termenul, logistica, plata, conformitatea și riscul total.'}]
    },
    'trade-advisory': {
      scopeTitle:'Domeniul serviciului',
      scope:'Consultanța comercială internațională acoperă cercetarea pieței țintă și a contrapărților, structurarea modelului comercial, clarificarea Incoterms și a responsabilităților de livrare, evaluarea costurilor și documentelor și coordonarea pașilor practici de execuție.',
      problemTitle:'Ce problemă rezolvă?',
      problem:'O oportunitate de piață nu este încă o tranzacție executabilă. Condiții de livrare greșite, documente lipsă, contrapărți neverificate, costuri logistice ascunse sau responsabilități neclare pot întârzia operațiunea.',
      audienceTitle:'Pentru cine este potrivit?',
      audience:'Pentru companii B2B care pregătesc importuri sau exporturi, evaluează o nouă țară sursă sau piață de vânzare, verifică un partener internațional sau vor mai mult control asupra operațiunilor comerciale existente.',
      outcomesTitle:'Livrabile așteptate',
      outcomes:['Cadru de decizie pentru piață, contrapărți și model comercial','Rezumat al costurilor, Incoterms, logisticii și responsabilităților documentare','Riscuri de contraparte și execuție cu puncte de control','Foaie de parcurs aplicabilă cu responsabili și pași următori'],
      processTitle:'Cum decurge colaborarea',
      process:['Evaluarea obiectivului, produsului, pieței și structurii existente','Cercetarea și verificarea condițiilor de piață și a contrapărților','Compararea scenariilor de cost, livrare, documentație și risc','Definirea planului de execuție, responsabilităților și controalelor'],
      faq:[{question:'Înlocuiește acest serviciu consultanța juridică sau vamală?',answer:'Nu. CTSEG structurează decizia comercială și modelul operațional; aspectele juridice, fiscale sau vamale trebuie tratate de specialiști autorizați când este necesar.'},{question:'Poate acoperi atât importul, cât și exportul?',answer:'Da. Domeniul poate viza alegerea țării sursă, importul, exportul, verificarea partenerului sau intrarea pe o piață nouă.'}]
    }
  },
  bg: {
    'strategic-sourcing': {
      scopeTitle:'Обхват на услугата',scope:'Стратегическото снабдяване обхваща целия процес на решение: изясняване на изискването и спецификацията, анализ на пазара, подготовка на RFQ и сравнение на офертите по общ разход и риск. CTSEG може да подпомогне и документирани преговори, обосновка на избора и план за проследяване на доставчика.',
      problemTitle:'Какъв проблем решава?',problem:'Оферти, водени само от единична цена, непроверени доставчици и зависимост от един източник правят покупката уязвима. Услугата поставя търговските и оперативните критерии в обща рамка за сравнение.',
      audienceTitle:'За кого е подходяща?',audience:'За B2B компании, които навлизат на нов пазар за снабдяване, преглеждат структурата на разходите, изграждат алтернативни източници за критични категории или стандартизират международните покупки.',
      outcomesTitle:'Очаквани резултати',outcomes:['Съгласувано изискване и критерии за оценка','Проверен кратък списък и сравними оферти','Сравнение на общ разход и търговски риск','Документиран план за преговори, избор и контрол на представянето'],
      processTitle:'Работен процес',process:['Дефиниране на нужда, спецификация, обем и условия за доставка','Проучване на пазара и подходящи производители или доставчици','Проверка на кандидатите, RFQ и нормализиране на офертите','Документиране на преговорите, избора и контрола на представянето'],
      faq:[{question:'Каква е разликата между стратегическо снабдяване и procurement?',answer:'Procurement изпълнява покупката. Стратегическото снабдяване структурира решенията за пазар, доставчик, общ разход, риск и представяне преди и след поръчката.'},{question:'Какви документи се предоставят?',answer:'Според обхвата могат да се предоставят проучване, списък с кандидати, проверки, сравнение на оферти, рискови бележки и препоръчани следващи стъпки.'}]
    },
    'supplier-verification': {
      scopeTitle:'Обхват на услугата',scope:'CTSEG проучва производители и доставчици спрямо договорени продуктови и търговски критерии и проверява фирмена регистрация, дейност, капацитет, документи за качество, референции и търговски условия. При нужда структурираме план за мостри, видео проверка или посещение на място.',
      problemTitle:'Какъв проблем решава?',problem:'Онлайн присъствието не доказва реален производствен капацитет или надеждно изпълнение. Проверката открива несъответстващи документи, посредници представени като производители, неясен капацитет и рискове преди плащане.',
      audienceTitle:'За кого е подходяща?',audience:'За B2B купувачи, които търсят нови производители в Türkiye или други пазари, искат независима проверка на кандидати или намаляване на риска преди значителна поръчка.',
      outcomesTitle:'Очаквани резултати',outcomes:['Кандидати, съответстващи на изискването','Проверки на фирма, документи, капацитет и референции','Ясно обозначени рискове и оставащи проверки','Кратък списък, сравнение и препоръчани следващи стъпки'],
      processTitle:'Работен процес',process:['Дефиниране на продукт, обем, качество, документи и доставка','Проучване и предварителен подбор от няколко източника','Проверка на регистрация, документи, капацитет, референции и комуникация','Докладване на констатации, рискове и препоръчан списък'],
      faq:[{question:'Проверката на доставчика гарантира ли резултат?',answer:'Не. Тя намалява риска и документира наличните доказателства, но не може безусловно да гарантира бъдещо качество, доставка или търговско поведение.'},{question:'Препоръчва ли се най-ниската цена?',answer:'Цената се оценява заедно с качество, капацитет, срок, логистика, плащане, съответствие и общ риск.'}]
    },
    'trade-advisory': {
      scopeTitle:'Обхват на услугата',scope:'Международното търговско консултиране включва проучване на целеви пазари и контрагенти, структуриране на търговски модел, изясняване на Incoterms и отговорности, оценка на разходи и документи и координация на практическото изпълнение.',
      problemTitle:'Какъв проблем решава?',problem:'Пазарната възможност сама по себе си не е изпълнима сделка. Неподходящи условия за доставка, липсващи документи, непроверен контрагент, скрити логистични разходи или неясни отговорности могат да забавят операцията.',
      audienceTitle:'За кого е подходяща?',audience:'За B2B компании, които подготвят внос или износ, оценяват нова държава източник или пазар за продажби, проверяват международен партньор или искат повече контрол върху настоящите операции.',
      outcomesTitle:'Очаквани резултати',outcomes:['Рамка за решение относно пазар, контрагенти и търговски модел','Обобщение на разходи, Incoterms, логистика и документални отговорности','Рискове на контрагента и изпълнението с контролни точки','Приложима пътна карта с отговорници и следващи стъпки'],
      processTitle:'Работен процес',process:['Оценка на целта, продукта, пазара и текущата структура','Проучване и проверка на пазарни условия и контрагенти','Сравнение на сценарии за разход, доставка, документи и риск','Определяне на план за изпълнение, отговорности и контролни точки'],
      faq:[{question:'Замества ли услугата правен или митнически съвет?',answer:'Не. CTSEG структурира търговското решение и операционния модел; правни, данъчни и митнически въпроси трябва да се водят от оторизирани специалисти.'},{question:'Може ли да обхваща и внос, и износ?',answer:'Да. Обхватът може да включва избор на държава източник, внос, износ, проверка на партньори или навлизане на нов пазар.'}]
    }
  },
  sr: {
    'strategic-sourcing': {
      scopeTitle:'Obim usluge',scope:'Strateški sourcing obuhvata ceo put odlučivanja: razjašnjenje zahteva i specifikacije, analizu tržišta nabavke, pripremu RFQ-a i poređenje ponuda prema ukupnom trošku i riziku. CTSEG može da podrži i dokumentovane pregovore, obrazloženje izbora i plan praćenja dobavljača.',
      problemTitle:'Koji problem rešava?',problem:'Ponude zasnovane samo na jediničnoj ceni, neprovereni dobavljači i zavisnost od jednog izvora čine odluku o nabavci ranjivom. Usluga objedinjuje komercijalne i operativne kriterijume u jedan okvir za poređenje.',
      audienceTitle:'Kome je namenjeno?',audience:'B2B kompanijama koje ulaze na novo tržište nabavke, preispituju strukturu troškova, grade alternativne izvore za kritične kategorije ili standardizuju međunarodnu nabavku.',
      outcomesTitle:'Očekivani rezultati',outcomes:['Usaglašen zahtev i kriterijumi procene','Proverena uža lista i uporedive ponude','Poređenje ukupnog troška i komercijalnog rizika','Dokumentovan plan pregovora, izbora i praćenja učinka'],
      processTitle:'Tok angažmana',process:['Definisanje zahteva, specifikacije, obima i uslova isporuke','Istraživanje tržišta i odgovarajućih proizvođača ili dobavljača','Provera kandidata, RFQ i normalizacija ponuda','Dokumentovanje pregovora, izbora i kontrole učinka'],
      faq:[{question:'Koja je razlika između strateškog sourcinga i procurement-a?',answer:'Procurement izvršava kupovinu. Strateški sourcing strukturira odluke o tržištu, dobavljaču, ukupnom trošku, riziku i učinku pre i posle porudžbine.'},{question:'Koja dokumentacija se isporučuje?',answer:'U zavisnosti od obima mogu se isporučiti sažetak istraživanja, lista kandidata, evidencija provere, poređenje ponuda, napomene o riziku i preporučeni naredni koraci.'}]
    },
    'supplier-verification': {
      scopeTitle:'Obim usluge',scope:'CTSEG istražuje proizvođače i dobavljače prema dogovorenim proizvodnim i komercijalnim kriterijumima, zatim unakrsno proverava registraciju kompanije, delatnost, kapacitet, dokumentaciju kvaliteta, reference i komercijalne uslove. Po potrebi strukturiramo plan za uzorke, video proveru ili proveru na lokaciji.',
      problemTitle:'Koji problem rešava?',problem:'Prisustvo kompanije na internetu ne dokazuje stvarni proizvodni kapacitet niti pouzdano izvršenje porudžbine. Provera otkriva neusaglašenu dokumentaciju, posrednike predstavljene kao proizvođače, nejasan kapacitet i komercijalne rizike pre plaćanja.',
      audienceTitle:'Kome je namenjeno?',audience:'B2B kupcima koji traže nove proizvođače u Türkiye ili drugim tržištima, žele nezavisnu proveru postojećih kandidata ili smanjenje rizika partnera pre značajne porudžbine.',
      outcomesTitle:'Očekivani rezultati',outcomes:['Kandidati usklađeni sa zahtevom','Evidencija provere kompanije, dokumentacije, kapaciteta i referenci','Jasno označeni rizici i preostale provere','Uža lista, poređenje i preporučeni naredni koraci'],
      processTitle:'Tok angažmana',process:['Definisanje proizvoda, obima, kvaliteta, dokumentacije i isporuke','Istraživanje i predselekcija kandidata iz više izvora','Provera registracije, dokumentacije, kapaciteta, referenci i komunikacije','Izveštaj o nalazima, rizicima i preporučenoj užoj listi'],
      faq:[{question:'Da li provera dobavljača daje garanciju?',answer:'Ne. Provera smanjuje rizik odluke i beleži dostupne dokaze, ali ne može bezuslovno garantovati budući kvalitet, isporuku ili komercijalni učinak.'},{question:'Da li preporučujete najnižu cenu?',answer:'Cena se ocenjuje zajedno sa kvalitetom, kapacitetom, rokom, logistikom, plaćanjem, usklađenošću i ukupnim rizikom.'}]
    },
    'trade-advisory': {
      scopeTitle:'Obim usluge',scope:'Savetovanje u međunarodnoj trgovini obuhvata istraživanje ciljnog tržišta i partnera, strukturisanje komercijalnog modela, razjašnjenje Incoterms-a i odgovornosti za isporuku, procenu troškova i dokumentacije i koordinaciju praktičnih koraka realizacije.',
      problemTitle:'Koji problem rešava?',problem:'Tržišna prilika sama po sebi nije izvršiva transakcija. Pogrešni uslovi isporuke, nedostajuća dokumentacija, neproveren partner, skriveni logistički troškovi ili nejasne odgovornosti mogu odložiti posao.',
      audienceTitle:'Kome je namenjeno?',audience:'B2B kompanijama koje pripremaju uvoz ili izvoz, ocenjuju novu zemlju izvora ili prodajno tržište, proveravaju međunarodnog partnera ili žele veću kontrolu nad postojećom trgovinskom operacijom.',
      outcomesTitle:'Očekivani rezultati',outcomes:['Okvir odluke za tržište, partnere i komercijalni model','Sažetak troškova, Incoterms-a, logistike i dokumentacionih odgovornosti','Rizici partnera i realizacije sa kontrolnim tačkama','Izvršiva mapa puta sa odgovornim stranama i narednim koracima'],
      processTitle:'Tok angažmana',process:['Procena cilja, proizvoda, tržišta i postojeće strukture','Istraživanje i provera tržišnih uslova i potencijalnih partnera','Poređenje scenarija troška, isporuke, dokumentacije i rizika','Definisanje plana realizacije, odgovornosti i kontrolnih tačaka'],
      faq:[{question:'Da li ovo zamenjuje pravno ili carinsko savetovanje?',answer:'Ne. CTSEG strukturira komercijalnu odluku i operativni model; pravna, poreska i carinska pitanja treba da vode ovlašćeni stručnjaci kada je potrebno.'},{question:'Može li obim da obuhvati i uvoz i izvoz?',answer:'Da. Angažman može biti fokusiran na izbor zemlje izvora, uvoz, izvoz, proveru partnera ili ulazak na novo tržište.'}]
    }
  }
};
