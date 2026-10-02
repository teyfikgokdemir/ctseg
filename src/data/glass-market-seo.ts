export type GlassMarketLocale='tr'|'en';
export const glassMarketSlugs=['europe-balkans','gulf-middle-east','global-project-sourcing'] as const;
export type GlassMarketSlug=(typeof glassMarketSlugs)[number];

type MarketCopy={
  title:string; metaTitle:string; description:string; eyebrow:string; lead:string;
  buyersTitle:string; buyers:string[];
  scopeTitle:string; scope:string[];
  logisticsTitle:string; logistics:string[];
  rfqTitle:string; rfq:string[];
  faqTitle:string; faq:[string,string][];
  ctaTitle:string; ctaText:string; ctaLabel:string;
};

export const glassMarketPages:Record<GlassMarketSlug,Record<GlassMarketLocale,MarketCopy>>={
'europe-balkans':{
tr:{
title:'Avrupa ve Balkanlar için Türkiye’den Cam Tedariki',
metaTitle:'Avrupa & Balkanlar Cam Tedariki Türkiye | CTSEG',
description:'Avrupa ve Balkanlar için Türkiye’den float, temperli, lamine, Low-E, IGU ve proje camı tedariki; RFQ, üretici/işlemeci eşleştirme, paketleme ve ihracat koordinasyonu.',
eyebrow:'EUROPE & BALKANS · GLASS SOURCING FROM TÜRKİYE',
lead:'CTSEG, Avrupa ve Balkanlar’daki distribütör, cam işleyici, cephe firması, pencere üreticisi ve proje ekipleri için Türkiye’de uygun üretici, tedarikçi ve işleme kapasitesini eşleştirir.',
buyersTitle:'Kimler için uygun?',buyers:['Cam distribütörleri ve ithalatçılar','IGU ve pencere üreticileri','Cephe ve mimari sistem firmaları','Cam işleme tesisleri','Proje satın alma ekipleri','Contract ve yapı ürünleri tedarikçileri'],
scopeTitle:'Tedarik kapsamı',scope:['Float ve low-iron extra-clear cam','Temperli ve ısıl işlem görmüş cam','Lamine güvenlik camı','Low-E ve solar control kaplamalı cam','IGU / yalıtım camı üniteleri','Kesilmiş, delinmiş, kenar işlenmiş ve projeye özel cam'],
logisticsTitle:'Avrupa ve Balkanlar için ticari koordinasyon',logistics:['Karayolu, intermodal veya denizyolu seçeneğine göre sevkiyat planı','Kasa, A-frame ve proje bazlı paketleme gereksiniminin RFQ aşamasında tanımlanması','Teslim noktası, Incoterm ve boşaltma koşullarının tekliflerle birlikte karşılaştırılması','Ürün ve proje gereksinimine göre istenen belgelerin tedarikçi bazında doğrulanması'],
rfqTitle:'RFQ için gerekli bilgiler',rfq:['Cam türü ve yapı','Kalınlık, ebat veya cut list','Aylık/proje miktarı','İşleme ve performans gereksinimi','Teslim ülkesi ve şehir','Hedef Incoterm ve teslim zamanı'],
faqTitle:'Sık sorulanlar',faq:[
['Türkiye’den Avrupa’ya cam tedarikinde tek üreticiyle mi çalışılır?','Hayır. Uygun kanal ürün tipi, teknik kabiliyet, kapasite, paketleme ve teslim koşullarına göre seçilir.'],
['Balkan ülkeleri için küçük veya proje bazlı talepler değerlendirilebilir mi?','Evet. MOQ ve lojistik uygulanabilirliği üretici ve ürün bazında kontrol edilir.'],
['Fiyat karşılaştırması nasıl yapılır?','Teklifler mümkün olduğunca aynı ürün spesifikasyonu, miktar, paketleme ve Incoterm üzerinden normalize edilir.']
],
ctaTitle:'Avrupa veya Balkanlar için cam RFQ gönderin',
ctaText:'Ürün, ebat, miktar, işlem, teslim ülkesi ve hedef tarihi paylaşın. CTSEG önce teknik ve ticari uygunluğu değerlendirir.',
ctaLabel:'Cam RFQ Gönder'
},
en:{
title:'Glass Sourcing from Türkiye for Europe & the Balkans',
metaTitle:'Glass Supplier Türkiye for Europe & Balkans | CTSEG',
description:'Source float, tempered, laminated, Low-E, IGU and project glass from Türkiye for Europe and the Balkans with supplier matching, RFQ, packing and export coordination.',
eyebrow:'EUROPE & BALKANS · GLASS SOURCING FROM TÜRKİYE',
lead:'CTSEG matches distributors, glass processors, façade companies, window manufacturers and project buyers across Europe and the Balkans with suitable glass suppliers, manufacturers and processing capacity in Türkiye.',
buyersTitle:'Who this is for',buyers:['Glass importers and distributors','IGU and window manufacturers','Façade and architectural system companies','Glass processors and fabricators','Project procurement teams','Contract and construction product buyers'],
scopeTitle:'Supply scope',scope:['Float and low-iron extra-clear glass','Tempered and heat-treated glass','Laminated safety glass','Low-E and solar-control coated glass','Insulated glass units / IGU','Cut-to-size, drilled, edge-processed and project glass'],
logisticsTitle:'Commercial coordination for Europe & the Balkans',logistics:['Road, intermodal or sea-routing options depending on destination','Crate, A-frame and project-specific packing defined at RFQ stage','Delivery point, Incoterm and unloading conditions compared with the offer','Requested documentation verified supplier-by-supplier according to product and project requirements'],
rfqTitle:'What to include in the RFQ',rfq:['Glass type and build-up','Thickness, dimensions or cut list','Monthly or project quantity','Processing and performance requirements','Destination country and city','Target Incoterm and delivery timing'],
faqTitle:'Frequently asked questions',faq:[
['Do you work with only one Turkish glass manufacturer?','No. The supply route is selected according to product fit, processing capability, capacity, packing and delivery requirements.'],
['Can smaller or project-based Balkan requirements be evaluated?','Yes. MOQ and logistics feasibility are checked by product and supplier.'],
['How are quotations compared?','Where possible, quotations are normalized to the same specification, quantity, packing and Incoterm.']
],
ctaTitle:'Send a glass RFQ for Europe or the Balkans',
ctaText:'Share the product, dimensions, quantity, processing, destination and target timing. CTSEG will first assess technical and commercial feasibility.',
ctaLabel:'Send Glass RFQ'
}},
'gulf-middle-east':{
tr:{
title:'Körfez ve Orta Doğu için Türkiye’den Cam Tedariki',
metaTitle:'Körfez & Orta Doğu Cam Tedariki Türkiye | CTSEG',
description:'Körfez ve Orta Doğu projeleri için Türkiye’den mimari, cephe, temperli, lamine, Low-E, solar control ve IGU cam tedariki ve ihracat koordinasyonu.',
eyebrow:'GULF & MIDDLE EAST · PROJECT GLASS SOURCING',
lead:'CTSEG; UAE, Suudi Arabistan ve daha geniş Körfez/Orta Doğu pazarlarındaki cephe, yapı, iç mimari ve proje ekipleri için Türkiye’de teknik gereksinime uygun cam üretim ve işleme kapasitesini araştırır ve koordine eder.',
buyersTitle:'Hedef alıcı profilleri',buyers:['Cephe ve curtain wall yüklenicileri','Mimari cam ve yapı ürünleri ithalatçıları','Ana yüklenici ve proje satın alma ekipleri','İç mimari ve fit-out firmaları','Pencere, kapı ve IGU sistem firmaları','Cam distribütörleri ve işleyiciler'],
scopeTitle:'Proje odaklı cam kapsamı',scope:['Temperli güvenlik camı','Lamine ve çok katmanlı cam yapıları','Low-E ve solar control cam','IGU ve performans odaklı üniteler','Low-iron extra-clear ve dekoratif cam','CNC, delik, kenar işleme ve özel ebat üretimi'],
logisticsTitle:'Körfez projelerinde kritik koordinasyon başlıkları',logistics:['Yüksek sıcaklık ve proje koşullarına uygun ürün spesifikasyonunun üreticiye doğru aktarılması','Konteyner yükleme, kasa/A-frame ve şantiye boşaltma planının RFQ ile birlikte ele alınması','Parça numarası, cam schedule ve teslim fazlarının sipariş öncesi netleştirilmesi','Proje tarafından talep edilen test/sertifika/dokümanların teklif öncesi doğrulanması'],
rfqTitle:'Proje RFQ girdileri',rfq:['Glass schedule veya BOQ','Cam build-up ve performans hedefleri','Parça ölçüleri ve adetler','İşleme, coating ve temper/lamine gereksinimi','Proje lokasyonu ve teslim fazı','Gerekli belge/test listesi'],
faqTitle:'Sık sorulanlar',faq:[
['Körfez projeleri için sadece standart ebat cam mı tedarik edilir?','Hayır. Projeye göre cut-to-size, temperli, lamine, kaplamalı, IGU veya özel işlenmiş cam talepleri değerlendirilebilir.'],
['Proje camında teklif için glass schedule gerekli mi?','Mümkünse evet. Glass schedule veya detaylı BOQ, hatalı teklif riskini ciddi biçimde azaltır.'],
['CTSEG proje müteahhidi midir?','Hayır. CTSEG üretici/işlemeci araştırması, RFQ ve ticari tedarik koordinasyonu yapar; proje uygulama sorumluluğu ayrı değerlendirilir.']
],
ctaTitle:'Körfez veya Orta Doğu projeniz için cam RFQ gönderin',
ctaText:'Glass schedule, BOQ, teknik şartname veya parça listesini paylaşın. Uygun üretim ve işleme kapasitesi Türkiye’de araştırılsın.',
ctaLabel:'Proje RFQ Gönder'
},
en:{
title:'Glass Sourcing from Türkiye for the Gulf & Middle East',
metaTitle:'Architectural Glass Türkiye for Gulf & Middle East | CTSEG',
description:'Source architectural, façade, tempered, laminated, Low-E, solar-control and IGU glass from Türkiye for Gulf and Middle East projects with technical RFQ and export coordination.',
eyebrow:'GULF & MIDDLE EAST · PROJECT GLASS SOURCING',
lead:'CTSEG researches and coordinates suitable glass manufacturing and processing capacity in Türkiye for façade, construction, interior and project teams across the UAE, Saudi Arabia and the wider Gulf / Middle East region.',
buyersTitle:'Target buyer profiles',buyers:['Façade and curtain-wall contractors','Architectural glass and building-product importers','Main contractors and project procurement teams','Interior and fit-out companies','Window, door and IGU system companies','Glass distributors and processors'],
scopeTitle:'Project-oriented glass scope',scope:['Tempered safety glass','Laminated and multi-layer glass build-ups','Low-E and solar-control glass','IGU and performance-driven units','Low-iron extra-clear and decorative glass','CNC, holes, edge processing and custom-size production'],
logisticsTitle:'Key coordination points for Gulf projects',logistics:['Translate climatic and project-performance requirements into a production-ready RFQ','Coordinate container loading, crate/A-frame packing and site unloading assumptions','Clarify piece numbering, glass schedule and delivery phases before order confirmation','Verify requested tests, certificates and project documentation before quotation where applicable'],
rfqTitle:'Project RFQ inputs',rfq:['Glass schedule or BOQ','Glass build-up and performance targets','Piece dimensions and quantities','Processing, coating and temper/lamination requirements','Project location and delivery phases','Required test/document list'],
faqTitle:'Frequently asked questions',faq:[
['Do you source only standard-size glass for Gulf projects?','No. Cut-to-size, tempered, laminated, coated, IGU and specially processed glass can be evaluated by project.'],
['Is a glass schedule required for quotation?','Preferably yes. A glass schedule or detailed BOQ materially reduces quotation ambiguity.'],
['Is CTSEG a façade contractor?','No. CTSEG coordinates supplier/processor research, RFQ and commercial sourcing; installation and contracting responsibilities are separate.']
],
ctaTitle:'Send a glass RFQ for your Gulf or Middle East project',
ctaText:'Share the glass schedule, BOQ, technical specification or piece list. CTSEG will research suitable manufacturing and processing capacity in Türkiye.',
ctaLabel:'Send Project RFQ'
}},
'global-project-sourcing':{
tr:{
title:'Global Mimari ve Proje Camı Tedariki',
metaTitle:'Global Proje Camı Tedariki Türkiye | Architectural Glass | CTSEG',
description:'Global B2B projeler için Türkiye’den mimari, cephe, temperli, lamine, Low-E, IGU ve özel işlenmiş cam tedariki; teknik RFQ ve üretici eşleştirme.',
eyebrow:'GLOBAL PROJECT GLASS · TECHNICAL SOURCING',
lead:'CTSEG, ülke bağımsız proje taleplerinde cam spesifikasyonunu ticari RFQ’ya dönüştürür; Türkiye’de uygun üretici ve processor kapasitesini araştırır, teklif ve teslim akışını koordine eder.',
buyersTitle:'Proje tarafındaki alıcılar',buyers:['Mimarlık ve mühendislik ekipleri','Façade consultant ve sistem firmaları','Ana yükleniciler ve satın alma ekipleri','Uluslararası cam distribütörleri','Cam işleyiciler ve sistem üreticileri','Otel, retail, konut ve ticari proje ekipleri'],
scopeTitle:'Teknik tedarik kapsamı',scope:['Mimari ve cephe camı','Temperli, heat-strengthened ve lamine yapılar','Low-E, solar control ve performans kaplamaları','IGU / çift ve çoklu cam üniteleri','Low-iron, dekoratif ve iç mimari cam','Özel ebat, CNC ve proje bazlı işlenmiş cam'],
logisticsTitle:'Global proje sourcing yaklaşımı',logistics:['Şartname, BOQ ve glass schedule’ın RFQ formatına çevrilmesi','Üretici/processor kabiliyetinin ürün bazında eşleştirilmesi','Tekliflerin teknik kapsam ve ticari teslim koşullarına göre karşılaştırılması','Paketleme, sevkiyat, teslim fazı ve dokümantasyonun sipariş öncesi netleştirilmesi'],
rfqTitle:'Başlangıç için paylaşılması gerekenler',rfq:['Teknik şartname veya glass schedule','Cam tipleri, build-up ve performans değerleri','Ebat/adet veya cut list','İşleme, coating, temper/lamine gereksinimi','Teslim ülkesi, şehir ve proje fazı','Hedef teslim zamanı ve Incoterm'],
faqTitle:'Sık sorulanlar',faq:[
['CTSEG tasarım veya mühendislik onayı verir mi?','Hayır. CTSEG tedarik ve ticari koordinasyon yapar. Nihai mühendislik ve tasarım onayı ilgili proje taraflarının sorumluluğundadır.'],
['Teklifler farklı üreticilerden alınabilir mi?','Evet. Teknik gereksinime uygun birden fazla kanal varsa karşılaştırmalı RFQ yürütülebilir.'],
['Sadece büyük projeler mi değerlendiriliyor?','Hayır. Ancak ürün, miktar, işleme ve lojistik uygulanabilirliği her talepte ayrı kontrol edilir.']
],
ctaTitle:'Global proje camı RFQ’nuzu paylaşın',
ctaText:'Şartname, BOQ, glass schedule veya cut list’i gönderin. CTSEG talebi üretim ve ticari teklif formatına dönüştürsün.',
ctaLabel:'Teknik RFQ Gönder'
},
en:{
title:'Global Architectural & Project Glass Sourcing',
metaTitle:'Global Architectural Glass Sourcing from Türkiye | CTSEG',
description:'Technical sourcing of architectural, façade, tempered, laminated, Low-E, IGU and processed project glass from Türkiye for international B2B projects.',
eyebrow:'GLOBAL PROJECT GLASS · TECHNICAL SOURCING',
lead:'For international project requirements, CTSEG converts glass specifications into commercial RFQs, researches suitable manufacturing and processing capacity in Türkiye, and coordinates quotation and delivery workflows.',
buyersTitle:'Project-side buyers',buyers:['Architecture and engineering teams','Façade consultants and system companies','Main contractors and procurement teams','International glass distributors','Glass processors and system manufacturers','Hotel, retail, residential and commercial project teams'],
scopeTitle:'Technical sourcing scope',scope:['Architectural and façade glass','Tempered, heat-strengthened and laminated build-ups','Low-E, solar-control and performance coatings','IGU / double and multi-pane units','Low-iron, decorative and interior glass','Custom-size, CNC and project-processed glass'],
logisticsTitle:'Global project sourcing approach',logistics:['Convert specification, BOQ and glass schedule into a production-ready RFQ','Match manufacturer/processor capability by product requirement','Compare quotations by technical scope and commercial delivery terms','Clarify packing, shipment, delivery phases and documentation before order'],
rfqTitle:'What to share at the start',rfq:['Technical specification or glass schedule','Glass types, build-ups and performance values','Dimensions/quantities or cut list','Processing, coating and temper/lamination requirements','Destination country, city and project phase','Target delivery timing and Incoterm'],
faqTitle:'Frequently asked questions',faq:[
['Does CTSEG provide final engineering or design approval?','No. CTSEG coordinates sourcing and commercial workflows. Final engineering and design approval remains with the responsible project parties.'],
['Can quotations be requested from multiple suppliers?','Yes. Where multiple technically suitable routes exist, comparative RFQs can be coordinated.'],
['Do you only evaluate large projects?','No. Product, quantity, processing and logistics feasibility are reviewed separately for each request.']
],
ctaTitle:'Share your global project glass RFQ',
ctaText:'Send the specification, BOQ, glass schedule or cut list. CTSEG will structure it for manufacturing and commercial quotation.',
ctaLabel:'Send Technical RFQ'
}}
};
