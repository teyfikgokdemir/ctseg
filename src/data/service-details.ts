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

type CoreServiceId = 'strategic-sourcing' | 'supplier-verification' | 'trade-advisory' | 'tco';

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
        {question:'Hukuki veya gümrük müşavirliği hizmeti mi?',answer:'CTSEG ticari karar ve operasyon yapısını kurar. Hukuki, mali veya gümrük müşavirliği gereken konularda yetkili uzmanlarla çalışma önerilir.'},
        {question:'İthalat ve ihracat projeleri birlikte ele alınabilir mi?',answer:'Evet. Çalışma kapsamı ihtiyaca göre kaynak ülke seçimi, ithalat, ihracat, partner doğrulama veya yeni pazara giriş üzerine kurulabilir.'}
      ]
    },
    'tco': {
      scopeTitle:'Hizmetin kapsamı',
      scope:'Satın alma maliyeti ve toplam sahip olma maliyeti analizi; birim fiyatı, ürünün satın alınması, taşınması, teslim alınması, stoklanması ve yönetilmesi için gereken toplam maliyetten ayırır. İnceleme navlun, gümrük varsayımları, fire, kalite, stok, finansman, ödeme şartları, gecikme ve operasyon yükünü kapsayabilir.',
      problemTitle:'Hangi sorunu çözer?',
      problem:'En düşük birim fiyat her zaman en düşük ticari maliyet değildir. Teslim şekli, minimum sipariş miktarı, hata oranı, termin, stok ihtiyacı veya ödeme koşulları hesaba katıldığında tedarik kararı değişebilir.',
      audienceTitle:'Kimler için uygundur?',
      audience:'Tedarikçi tekliflerini karşılaştıran, maliyet yapısını inceleyen, Türkiye tedarik rotasını değerlendiren veya lojistik, kalite, stok ve risk dahil edildiğinde düşük teklifin hâlâ avantajlı olup olmadığını görmek isteyen satın alma ve ticari ekipler için uygundur.',
      outcomesTitle:'Beklenen çıktılar',
      outcomes:['Ortak maliyet kalemleri ve belgelenmiş varsayımlar','Normalize edilmiş teklif ve teslim maliyeti karşılaştırması','Kalite, stok, finansman ve gecikme riski değerlendirmesi','Kanıtları varsayımlardan ayıran senaryo karşılaştırması','Karar kaydı ve önerilen sonraki kontroller'],
      processTitle:'Çalışma süreci',
      process:['Kararı, rotayı, şartları ve karşılaştırma temelini tanımlama','Birim fiyatı navlun, vergi, kalite, stok ve finansman kalemlerinden ayırma','Teklifleri normalize etme ve eksik veya karşılaştırılamaz kapsamı belirleme','Senaryoları karşılaştırma ve risk varsayımlarını açıkça yazma','Kararı ve hâlâ gerekli kanıtları belgeleme'],
      faq:[
        {question:'TCO ile teslim maliyeti aynı şey midir?',answer:'Hayır. Teslim maliyeti genellikle ürünü belirli bir noktaya ulaştırma maliyetidir. TCO, karara uygun olarak kalite, stok, finansman, gecikme, operasyon yükü ve diğer maliyetleri de içerebilir.'},
        {question:'CTSEG tasarruf garantisi verir mi?',answer:'Hayır. CTSEG maliyet karşılaştırmasını yapılandırabilir ve maliyet sürücülerini görünür kılabilir; tasarruf veya ticari sonuç gerçek baz değer ve gerçekleşen şartlarla ölçülmelidir.'}
      ]
    }
  },
  en: {
    'strategic-sourcing': {
      scopeTitle:'Scope of the service',
      scope:'Strategic sourcing and procurement support covers the full decision path: clarifying requirements and specifications, analysing supply markets in Türkiye and internationally, preparing an RFQ, qualifying suppliers, comparing bids by total cost and risk, and documenting the award decision. CTSEG can also support negotiation records and a supplier performance plan after selection.',
      problemTitle:'The problem it solves',
      problem:'Unit-price-led offers, unverified suppliers and single-source dependency make purchasing decisions fragile. This service places commercial and operational criteria in one evaluation framework so decision-makers can see why an option is preferred and which risks remain.',
      audienceTitle:'Who it is for',
      audience:'It is designed for B2B companies entering a new supply market, reviewing cost structures, creating alternatives for critical categories or standardising international procurement decisions.',
      outcomesTitle:'Expected deliverables',
      outcomes:['Agreed buyer requirement and supplier evaluation criteria','Qualified and verified supplier shortlist','Comparable RFQ responses and bid comparison','Total-cost-of-ownership and commercial-risk view','Documented negotiation, award and supplier performance plan'],
      processTitle:'How the engagement works',
      process:['Define the buyer requirement, specification, volume and delivery conditions','Research Türkiye and international supply markets and suitable candidates','Qualify and verify suppliers, run the RFQ and normalise bids','Compare price, quality, lead time, logistics, risk and total cost','Document negotiation, selection and performance controls'],
      faq:[
        {question:'How is strategic sourcing different from procurement?',answer:'Procurement executes the purchase. Strategic sourcing structures market, supplier, total-cost, risk and performance decisions before and after an order.'},
        {question:'What records are delivered?',answer:'Depending on scope, deliverables can include a research summary, candidate and short lists, verification records, offer comparison, risk notes and recommended next steps.'}
      ]
    },
    'supplier-verification': {
      scopeTitle:'Scope of the service',
      scope:'Supplier sourcing and verification in Türkiye and international markets covers legal entity and registry checks, manufacturer-versus-trader assessment, capacity, certificates and their scope, references, payment identity, commercial terms and communication consistency. The review can combine desk-based evidence with samples, video review or an on-site check where the project requires it.',
      problemTitle:'The problem it solves',
      problem:'A company’s online presence does not prove production capability or reliable order fulfilment. Verification exposes mismatched documents, intermediaries presented as manufacturers, unclear capacity and commercial risks that should be addressed before payment or commitment.',
      audienceTitle:'Who it is for',
      audience:'It is for B2B buyers seeking new manufacturers in Türkiye or international markets, independently checking existing candidates, or reducing counterparty risk before a material order.',
      outcomesTitle:'Expected deliverables',
      outcomes:['Requirement-matched manufacturer and supplier candidates','Legal-entity, registry, capacity and certificate-scope records','Manufacturer-versus-trader and payment-identity findings','Desk and, where required, field-verification notes','Open risks, outstanding checks and evidence gaps','Shortlist, findings report and recommended next steps'],
      processTitle:'How the engagement works',
      process:['Define product, volume, quality, documentation and delivery criteria','Research and screen candidates across multiple independent sources','Check legal identity, registry, manufacturer status, capacity and certificate scope','Cross-check references, payment identity, commercial terms and communication consistency','Separate desk evidence from samples, video or field checks where applicable','Report findings, evidence gaps, risks and the recommended shortlist'],
      faq:[
        {question:'What does a supplier verification report contain?',answer:'Depending on scope, it can separate legal-entity and registry findings, manufacturer-versus-trader assessment, capacity and certificate-scope checks, references, payment identity, commercial terms, evidence gaps and recommended next checks.'},
        {question:'Does supplier verification provide a guarantee?',answer:'No. Verification reduces decision risk and records available evidence; it cannot provide an unconditional guarantee of future quality, delivery or commercial performance.'},
        {question:'Do you recommend the lowest-priced candidate?',answer:'Price is evaluated with quality, capacity, lead time, logistics, payment terms, compliance and total risk.'}
      ]
    },
    'trade-advisory': {
      scopeTitle:'Scope of the service',
      scope:'International trade advisory supports import/export decision-making through target-market and counterparty research, Turkey market entry assessment, commercial-model design, clarification of customs, origin, Incoterms and delivery responsibilities, review of payment structures, contracts, cost and document flows, and coordination of practical execution steps.',
      problemTitle:'The problem it solves',
      problem:'A market opportunity is not yet an executable transaction. Incorrect delivery terms, missing documents, an unverified counterparty, hidden logistics costs or unclear ownership can delay the operation. CTSEG turns these dependencies into one commercial plan before commitment.',
      audienceTitle:'Who it is for',
      audience:'It is intended for B2B companies preparing to import or export, assessing a new source country or sales market, verifying an international partner, or bringing greater control to an existing trade operation.',
      outcomesTitle:'Expected deliverables',
      outcomes:['Decision framework for market entry Turkey, target markets and counterparties','Customs, origin, Incoterms, payment and contract decision points','Summary of cost, logistics and document responsibilities','Counterparty and execution risks with defined controls','Executable import/export roadmap showing owners and next steps'],
      processTitle:'How the engagement works',
      process:['Assess the objective, product, target market and current operating structure','Research and verify market conditions and potential counterparties','Review customs, origin, Incoterms, payment, contract and document requirements','Compare cost, delivery, logistics and execution-risk scenarios','Define the import/export execution plan, responsibilities and control points'],
      faq:[
        {question:'Is this a substitute for legal or customs advice?',answer:'No. CTSEG structures the commercial decision and operating model; legal, tax or customs matters should be handled by authorised specialists where required.'},
        {question:'Can the scope cover both import and export projects?',answer:'Yes. The engagement can focus on source-country selection, importing, exporting, partner verification or entry into a new market.'}
      ]
    },
    'tco': {
      scopeTitle:'Scope of the service',
      scope:'Procurement cost optimisation and total cost of ownership analysis separates quoted unit price from the full cost of buying, moving, receiving, holding and managing an option. The review can include freight, customs assumptions, waste, quality work, inventory, financing, payment terms, delay exposure and operational effort.',
      problemTitle:'The problem it solves',
      problem:'The lowest unit price is not always the lowest commercial cost. Different delivery terms, minimum order quantities, defect rates, lead times, inventory requirements or payment conditions can change the decision once landed and operational costs are considered.',
      audienceTitle:'Who it is for',
      audience:'It is designed for procurement and commercial teams comparing supplier offers, reviewing a cost structure, evaluating a Turkey sourcing route or deciding whether a lower quote remains attractive after logistics, quality, inventory and risk are included.',
      outcomesTitle:'Expected deliverables',
      outcomes:['Common cost categories and documented assumptions','Normalised quotation and landed-cost comparison','Quality, inventory, finance and delay-risk considerations','Scenario comparison that separates evidence from estimates','Decision record and recommended next checks'],
      processTitle:'How the engagement works',
      process:['Define the purchase decision, route, terms and comparison baseline','Separate unit price from freight, duties, quality, inventory and finance inputs','Normalise supplier offers and identify missing or incomparable scope','Compare scenarios and make risk assumptions explicit','Document the decision and the evidence still required'],
      faq:[
        {question:'Is TCO the same as landed cost?',answer:'No. Landed cost generally covers the cost of getting an item to a defined destination. TCO can also include quality, inventory, financing, delay, operational effort and other costs relevant to the decision.'},
        {question:'Does CTSEG claim a guaranteed saving?',answer:'No. CTSEG can structure a comparison and identify cost drivers, but any saving or commercial outcome must be measured against the buyer’s actual baseline and executed terms.'}
      ]
    }
  }
};
