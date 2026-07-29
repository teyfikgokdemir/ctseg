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

export const serviceDetails:Record<'tr'|'en',Record<CoreServiceId,ServiceDetail>> = {
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
  }
};
