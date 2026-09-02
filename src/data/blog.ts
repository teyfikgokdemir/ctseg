export type BlogPost = {
  lang: 'tr' | 'en'; slug: string; title: string; description: string; date: string; updated: string; readingTime: string; answer: string;
  sections: { heading: string; body: string[] }[];
};

export const posts: BlogPost[] = [
  { lang:'tr', slug:'stratejik-tedarik-ve-satin-alma-arasindaki-fark', title:'Stratejik Tedarik ve Satın Alma Arasındaki Fark Nedir?', description:'Stratejik tedarik ile satın alma arasındaki farkları; kapsam, maliyet, risk, tedarikçi yönetimi ve karar süreçleri üzerinden açıklıyoruz.', date:'2026-07-25', updated:'2026-07-25', readingTime:'7 dk', answer:'Satın alma, ihtiyacın siparişe dönüştürülmesi ve işlemin yürütülmesidir. Stratejik tedarik ise talep analizinden pazar araştırmasına, tedarikçi seçimi, toplam maliyet, risk, müzakere ve performans yönetimine kadar daha geniş ve uzun vadeli bir karar sistemidir.', sections:[{heading:'Temel fark',body:['Satın alma operasyonel bir işlemdir; stratejik tedarik ise ticari karar altyapısıdır. Satın alma “ne zaman ve kimden alacağız?” sorusuna odaklanırken stratejik tedarik “hangi pazar, hangi tedarik modeli ve hangi toplam maliyet yapısı bizi daha güçlü kılar?” sorusunu yanıtlar.']},{heading:'Stratejik tedarik hangi adımları kapsar?',body:['İhtiyacın ve spesifikasyonun netleştirilmesi, tedarik pazarı analizi, tedarikçi keşfi ve doğrulaması, teklif karşılaştırması, toplam sahip olma maliyeti analizi, risk değerlendirmesi, müzakere ve tedarikçi performans takibi temel adımlardır.']},{heading:'Şirketler için neden önemlidir?',body:['Sadece birim fiyatı düşürmeye çalışmak çoğu zaman kalite, termin, lojistik ve operasyon maliyetlerini görünmez bırakır. Stratejik tedarik, fiyatın ötesindeki tüm ticari etkileri birlikte değerlendirir.']} ]},
  { lang:'tr', slug:'tedarikci-secim-kriterleri', title:'Tedarikçi Seçim Kriterleri: Doğru Tedarikçi Nasıl Seçilir?', description:'Fiyatın ötesinde kalite, kapasite, termin, finansal dayanıklılık, belge ve iletişim performansına göre tedarikçi seçimi.', date:'2026-07-23', updated:'2026-07-25', readingTime:'8 dk', answer:'Doğru tedarikçi; yalnızca en düşük fiyatı veren değil, kalite, kapasite, termin, finansal dayanıklılık, mevzuat uyumu, iletişim ve toplam maliyet açısından şirketin ihtiyacını sürdürülebilir biçimde karşılayandır.', sections:[{heading:'En önemli seçim kriterleri',body:['Ürün ve kalite uygunluğu, üretim kapasitesi, teslimat performansı, finansal dayanıklılık, sertifika ve mevzuat uyumu, iletişim kalitesi, referanslar ve toplam sahip olma maliyeti birlikte değerlendirilmelidir.']},{heading:'Fiyat neden tek başına yeterli değildir?',body:['Düşük teklif; kalite kaybı, gecikme, yeniden işleme, yüksek lojistik gideri veya tedarik kesintisi nedeniyle daha pahalı bir sonuca dönüşebilir. Bu nedenle karar puanlama matrisiyle verilmelidir.']},{heading:'Doğrulama nasıl yapılır?',body:['Şirket kaydı, üretim kapasitesi, sertifikalar, numune, referans görüşmeleri, fabrika veya görüntülü denetim ve ticari şartların yazılı teyidi doğrulama sürecinin parçalarıdır.']} ]},
  { lang:'tr', slug:'toplam-sahip-olma-maliyeti-tco', title:'Toplam Sahip Olma Maliyeti (TCO) Nedir?', description:'Satın alma fiyatının ötesindeki lojistik, kalite, stok, finansman, gecikme ve operasyon maliyetlerini birlikte hesaplama rehberi.', date:'2026-07-21', updated:'2026-07-25', readingTime:'6 dk', answer:'Toplam sahip olma maliyeti, bir ürün veya hizmetin yalnızca satın alma fiyatını değil; lojistik, gümrük, kalite, stok, finansman, bakım, gecikme, risk ve operasyon maliyetlerini de içeren gerçek toplam maliyetidir.', sections:[{heading:'TCO hangi kalemleri içerir?',body:['Birim fiyat, taşıma, sigorta, gümrük, vergi, stok taşıma, kalite kontrol, hata ve iade, finansman, kur riski, gecikme ve yönetim zamanı temel kalemlerdir.']},{heading:'TCO neden yanıltıcı teklifleri ortaya çıkarır?',body:['İki teklif aynı ürünü farklı fiyatlarla sunabilir; ancak daha pahalı görünen teklif daha kısa termin, düşük hata oranı ve uygun ödeme koşulları sayesinde toplamda daha ekonomik olabilir.']},{heading:'Nasıl uygulanır?',body:['Her teklif için ortak maliyet kalemleri tanımlanır, veriler aynı para birimi ve dönem üzerinden normalize edilir, risk maliyetleri eklenir ve senaryo karşılaştırması yapılır.']} ]},
  { lang:'tr', slug:'tedarikci-dogrulama-nasil-yapilir', title:'Tedarikçi Doğrulama Nasıl Yapılır?', description:'Yeni bir tedarikçinin şirket, kapasite, kalite, belge, finansal yapı ve referans açısından nasıl doğrulanacağını açıklayan kontrol listesi.', date:'2026-07-19', updated:'2026-07-25', readingTime:'9 dk', answer:'Tedarikçi doğrulama; şirket kaydı, sahiplik, üretim kapasitesi, kalite sistemi, sertifikalar, referanslar, numune, ticari şartlar ve mümkünse saha veya görüntülü denetimin birlikte kontrol edilmesidir.', sections:[{heading:'Masa başı doğrulama',body:['Ticaret sicili, vergi ve şirket bilgileri, web varlığı, adres, yönetici profilleri, ihracat geçmişi ve sertifikalar çapraz kontrol edilir.']},{heading:'Operasyonel doğrulama',body:['Üretim kapasitesi, makine parkı, kalite kontrol noktaları, minimum sipariş, termin ve yedek kapasite soruları yazılı olarak teyit edilir.']},{heading:'Ticari risk kontrolü',body:['Ödeme koşulları, banka bilgileri, sözleşme yetkisi, referans müşteriler ve sipariş öncesi numune süreci doğrulanmadan yüksek tutarlı sipariş verilmemelidir.']} ]},
  { lang:'tr', slug:'rfq-nasil-hazirlanir', title:'Etkili RFQ Nasıl Hazırlanır?', description:'Tedarikçilerden karşılaştırılabilir ve eksiksiz teklif almak için RFQ hazırlama adımları, zorunlu alanlar ve yaygın hatalar.', date:'2026-07-17', updated:'2026-07-25', readingTime:'8 dk', answer:'Etkili bir RFQ; ürün spesifikasyonu, miktar, kalite standardı, teslim yeri, Incoterms, ödeme koşulu, termin, belge ihtiyacı ve teklif son tarihini açıkça tanımlar.', sections:[{heading:'RFQ içinde ne olmalı?',body:['Teknik tanım, çizim veya numune referansı, yıllık ve sipariş bazlı miktar, ambalaj, kalite standardı, teslim noktası, Incoterms, ödeme koşulu ve geçerlilik süresi yer almalıdır.']},{heading:'Karşılaştırılabilir teklif neden önemlidir?',body:['Tedarikçiler farklı kapsamlarla teklif verdiğinde fiyat karşılaştırması yanıltıcı olur. Ortak format, eksik kalemleri ve gizli maliyetleri görünür kılar.']},{heading:'Yaygın hatalar',body:['Belirsiz spesifikasyon, teslim şeklinin yazılmaması, kalite beklentisinin açıklanmaması ve yalnızca birim fiyat istenmesi en sık görülen hatalardır.']} ]},
  { lang:'tr', slug:'tedarik-zinciri-risk-yonetimi', title:'Tedarik Zinciri Risk Yönetimi Rehberi', description:'Tedarik kesintisi, tek kaynağa bağımlılık, kur, kalite, lojistik ve mevzuat risklerini azaltmak için uygulanabilir yöntemler.', date:'2026-07-15', updated:'2026-07-25', readingTime:'9 dk', answer:'Tedarik zinciri risk yönetimi; kritik ürünleri, tedarikçileri ve rotaları önceliklendirip olasılık ve etki bazında puanlamak, alternatif kaynaklar ve aksiyon planları oluşturmaktır.', sections:[{heading:'Başlıca risk türleri',body:['Tek kaynağa bağımlılık, finansal kırılganlık, kalite sorunu, kapasite yetersizliği, uzun termin, lojistik kesinti, kur dalgalanması ve mevzuat değişikliği temel risk alanlarıdır.']},{heading:'Risk nasıl ölçülür?',body:['Her risk için olasılık, ticari etki, tespit süresi ve ikame kolaylığı puanlanır. Kritik kalemler için alternatif tedarikçi ve stok stratejisi hazırlanır.']},{heading:'Dayanıklılık nasıl kurulur?',body:['İkinci kaynak, düzenli performans takibi, sözleşmesel güvence, güvenlik stoğu ve erken uyarı göstergeleri birlikte kullanılmalıdır.']} ]},
  {
    lang: 'en',
    slug: 'strategic-sourcing-vs-procurement',
    title: 'Strategic Sourcing vs Procurement: Differences, Process & Strategy',
    description: 'Strategic sourcing vs procurement: a practical B2B comparison guide covering upstream sourcing strategy, downstream purchasing, the 7-step process, TCO and risk controls.',
    date: '2026-07-25',
    updated: '2026-09-02',
    readingTime: '12 min',
    answer: 'Procurement executes purchasing and transactional operations. Strategic sourcing is the broader, long-term decision framework that manages category spend, supply markets, supplier qualification, total cost of ownership (TCO), risk, negotiation and performance monitoring before and after the award.',
    faq: [
      {
        question: 'What is the difference between strategic sourcing and procurement?',
        answer: 'Procurement focuses on downstream transactional buying, purchase orders, invoice matching and order fulfillment. Strategic sourcing is the upstream strategy that evaluates spend categories, market intelligence, supplier qualification, total cost of ownership and commercial contracts before purchasing occurs.'
      },
      {
        question: 'Is strategic sourcing part of procurement?',
        answer: 'Strategic sourcing is an essential upstream phase of modern procurement management. While operational procurement executes individual purchases, strategic sourcing establishes the supplier relationships, commercial terms, and risk controls that govern how purchases are made.'
      },
      {
        question: 'What is the difference between strategic procurement and strategic sourcing?',
        answer: 'Strategic procurement is the overall management discipline that aligns purchasing with corporate strategy, category management and supplier performance. Strategic sourcing is the specific, structured process used within strategic procurement to evaluate markets, qualify suppliers and negotiate awards.'
      },
      {
        question: 'When should a company use strategic sourcing?',
        answer: 'Strategic sourcing is recommended when evaluating high-value spend categories, entering new overseas supply markets, managing single-source supply risks, benchmarking existing supplier pricing, or requiring formal supplier qualification.'
      },
      {
        question: 'Does strategic sourcing include logistics and delivery planning?',
        answer: 'Yes. Strategic sourcing incorporates Incoterms, freight logistics, customs duties, transport lead times, and inventory holding costs into a Total Cost of Ownership (TCO) evaluation prior to final supplier selection.'
      }
    ],
    sections: [
      {
        heading: 'Introduction: Strategic sourcing vs procurement',
        body: [
          'In international B2B commerce, supply chain and procurement managers often use the terms <strong>procurement</strong> and <strong>strategic sourcing</strong> interchangeably. However, they describe two distinct operational layers. Procurement is the transactional, downstream execution layer that handles purchase orders, invoices, delivery tracking, and day-to-day purchasing. Strategic sourcing is the proactive, upstream decision framework that analyzes category spend, conducts market research, verifies supplier credentials, evaluates total cost of ownership, and negotiates commercial contracts before any purchase order is issued.',
          'Understanding the distinction between strategic sourcing and operational procurement prevents organizations from engaging in reactive purchasing. When companies focus solely on unit price without evaluating supplier risk, lead times, or total logistics costs, they risk supply disruptions and hidden expenses. A disciplined strategic sourcing framework transforms commercial purchasing into a sustainable competitive advantage.'
        ]
      },
      {
        heading: 'Strategic sourcing vs procurement: Comparison matrix',
        body: [
          'The comparison matrix below highlights the key differences between strategic sourcing and procurement across core business parameters:',
          `<div class="guide-table-wrap">
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Strategic Sourcing (Upstream)</th>
<th>Procurement (Downstream)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Primary Focus</strong></td>
<td>Supply market analysis, supplier qualification & strategic value</td>
<td>Order placement, invoice matching & transactional fulfillment</td>
</tr>
<tr>
<td><strong>Time Horizon</strong></td>
<td>Long-term (1 to 3+ years category planning)</td>
<td>Short-term (Daily, weekly, or immediate purchase cycles)</td>
</tr>
<tr>
<td><strong>Core Objective</strong></td>
<td>Optimize total cost of ownership, mitigate supply risk & build resilience</td>
<td>Ensure timely delivery of goods, invoice accuracy & operational compliance</td>
</tr>
<tr>
<td><strong>Supplier Relationship</strong></td>
<td>Collaborative, strategic partnership & performance monitoring</td>
<td>Transactional, operational communication & contract compliance</td>
</tr>
<tr>
<td><strong>Cost Focus</strong></td>
<td>Total Cost of Ownership (TCO), Should-Cost models & value creation</td>
<td>Purchase order unit price, payment terms & budget adherence</td>
</tr>
<tr>
<td><strong>Risk Management</strong></td>
<td>Proactive risk scoring, dual sourcing & counterparty verification</td>
<td>Reactive issue resolution (delays, defective shipments, missing documents)</td>
</tr>
<tr>
<td><strong>Logistics Integration</strong></td>
<td>Incoterms selection, route evaluation & customs duty forecasting</td>
<td>Shipment tracking, receiving documentation & warehouse intake</td>
</tr>
<tr>
<td><strong>Key Metrics (KPIs)</strong></td>
<td>Category savings, supplier audit score, lead-time reduction, TCO variance</td>
<td>PO cycle time, invoice match rate, on-time in-full (OTIF) delivery</td>
</tr>
<tr>
<td><strong>Business Context</strong></td>
<td>Applied before placing high-volume or critical commercial orders</td>
<td>Applied continuously to keep operations and inventory running</td>
</tr>
</tbody>
</table>
</div>`
        ]
      },
      {
        heading: 'What is procurement? Downstream purchasing operations',
        body: [
          'Procurement represents the tactical, operational execution layer of a company\'s purchasing function. Once supply agreements and vendor terms have been established, procurement ensures that goods and services are ordered, received, inspected, and paid for according to schedule.',
          'Key activities in operational procurement include issuing purchase orders (POs) against approved requisitions, coordinating delivery dates with logistics teams, performing receiving inspections, matching invoices with receiving slips (three-way matching), and processing supplier payments. Operational procurement is vital for day-to-day business continuity, ensuring that manufacturing plants, retail channels, or service teams have the necessary inputs without inventory stockouts.',
          'However, when an organization relies entirely on transactional procurement without upstream strategic sourcing, it exposes itself to single-supplier dependency, uncompetitive pricing, unverified counterparty risks, and unmanaged total costs.'
        ]
      },
      {
        heading: 'What is strategic sourcing? Upstream commercial strategy',
        body: [
          'Strategic sourcing is a structured, evidence-led management process that continuously evaluates an organization\'s purchasing requirements against global supply market capabilities. Rather than responding reactively to immediate purchasing needs, strategic sourcing takes a holistic view of spend categories to maximize commercial value, guarantee product quality, and minimize supply chain vulnerabilities.',
          'Strategic sourcing involves deep category spend analysis, international market research, independent supplier discovery and qualification, competitive bid structuring (RFQ/RFP), commercial negotiation, and supplier risk assessment. It establishes the terms, standards, and commercial frameworks under which downstream procurement functions operate.',
          'By examining factors such as raw material cost drivers, factory capacity, geographical risks, customs duties, and transport logistics, strategic sourcing ensures that every commercial contract reflects verified facts rather than unexamined assumptions.'
        ]
      },
      {
        heading: 'The 7-step strategic sourcing methodology',
        body: [
          'A successful strategic sourcing initiative follows a disciplined 7-step methodology that aligns internal business requirements with external market capabilities:',
          '<strong>1. Requirement & Category Spend Analysis:</strong> Map historical spend, analyze volume requirements, define technical product specifications, and identify internal quality standards across business units.',
          '<strong>2. Supply Market Research & Intelligence:</strong> Analyze global supply markets, producer regions, raw material cost drivers, capacity constraints, tariffs, and regulatory trends across target sourcing countries.',
          '<strong>3. Supplier Discovery & Verification:</strong> Identify potential manufacturers, perform desk-based registration checks, verify operational capacity, audit factory certifications, and inspect sample compliance. Learn more about <a class="text-link" href="/en/services/supplier-sourcing-and-verification/">CTSEG Supplier Sourcing & Verification →</a>',
          '<strong>4. RFQ / RFP & Bid Structuring:</strong> Prepare clear, comparable Requests for Quotation (RFQ) specifying Incoterms, packaging, quality standards, document expectations, and submission deadlines. Read our guide on <a class="text-link" href="/en/insights/how-to-write-an-effective-rfq/">How to Write an Effective RFQ →</a>',
          '<strong>5. TCO & Should-Cost Evaluation:</strong> Calculate the Total Cost of Ownership by combining quoted unit prices with freight, customs duties, insurance, quality inspection, payment terms, and inventory holding costs. Explore our <a class="text-link" href="/en/insights/total-cost-of-ownership/">Total Cost of Ownership Guide →</a>',
          '<strong>6. Commercial Negotiation & Supplier Selection:</strong> Conduct structured negotiations on pricing, volume tiers, payment terms, lead times, and contractual safeguards before awarding the commercial contract. Discover <a class="text-link" href="/en/services/strategic-sourcing/">CTSEG Strategic Sourcing Services →</a>',
          '<strong>7. Contract, Logistics & Performance Monitoring:</strong> Formalize commercial contracts, establish pre-shipment inspection protocols, coordinate export logistics, and track supplier key performance indicators (KPIs). See how we work at <a class="text-link" href="/en/how-we-work/">CTSEG How We Work →</a>'
        ]
      },
      {
        heading: 'Strategic procurement: Connecting sourcing strategy to execution',
        body: [
          'Strategic procurement represents the bridge where strategic sourcing decisions meet operational procurement execution. It creates a continuous loop where market insights and supplier qualification feed directly into transactional purchasing and logistics workflows.',
          'Without strategic procurement integration, sourcing strategies remain theoretical documents that fail to influence daily buying habits. Conversely, operational purchasing without strategic oversight leads to fragmented spend, contract non-compliance, and unmanaged commercial risks.',
          'At CTSEG, our independent commercial coordination model connects international buyers with verified manufacturers across Türkiye, Europe, and international markets. We help organizations align strategic category planning with pre-shipment verification, COA documentation, Incoterms selection, and logistics coordination to ensure that commercial strategy translates into verifiable execution.'
        ]
      },
      {
        heading: 'Operational procurement vs strategic procurement vs strategic sourcing',
        body: [
          'To clarify common terminology confusion in supply chain management, the matrix below compares operational procurement, strategic procurement, and strategic sourcing:',
          `<div class="guide-table-wrap">
<table>
<thead>
<tr>
<th>Dimension</th>
<th>Operational Procurement</th>
<th>Strategic Procurement</th>
<th>Strategic Sourcing</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Core Purpose</strong></td>
<td>Execute purchase orders & manage day-to-day goods delivery</td>
<td>Align purchasing strategies with corporate objectives & category management</td>
<td>Qualify supply markets, evaluate TCO & negotiate optimal commercial contracts</td>
</tr>
<tr>
<td><strong>Time Horizon</strong></td>
<td>Tactical / Short-term (Immediate requirements)</td>
<td>Medium-to-Long term (Annual planning & policy)</td>
<td>Strategic / Long-term (Multi-year category strategy)</td>
</tr>
<tr>
<td><strong>Supplier Role</strong></td>
<td>Vendor execution against approved purchase orders</td>
<td>Supplier relationship management & category governance</td>
<td>Supplier discovery, qualification, due diligence & contract award</td>
</tr>
<tr>
<td><strong>Cost Focus</strong></td>
<td>Unit purchase price & PO budget compliance</td>
<td>Category budget optimization & total cost reduction</td>
<td>Total Cost of Ownership (TCO) & Should-Cost modeling</td>
</tr>
<tr>
<td><strong>Risk Orientation</strong></td>
<td>Managing immediate delays or shipping variances</td>
<td>Overall supply chain risk mitigation & compliance policy</td>
<td>Counterparty verification, dual sourcing & geopolitical risk scoring</td>
</tr>
<tr>
<td><strong>Typical Activities</strong></td>
<td>PO creation, goods receipt, invoice matching, payment processing</td>
<td>Category planning, policy definition, supplier KPI tracking</td>
<td>Spend analysis, market research, RFQ/RFP, contract negotiation</td>
</tr>
</tbody>
</table>
</div>`
        ]
      },
      {
        heading: 'Total Cost of Ownership (TCO) and Should-Cost modeling',
        body: [
          'A cornerstone of effective strategic sourcing is evaluating offers using Total Cost of Ownership (TCO) rather than relying solely on purchase price. A vendor offering a low unit price may appear cost-effective initially, but extended lead times, higher freight charges, import duties, poor packaging, or high defect rates can significantly increase total cost.',
          'A comprehensive TCO assessment incorporates:',
          '• <strong>Purchase Price:</strong> Quoted unit cost based on order quantity and packaging specifications.<br>• <strong>Logistics & Customs:</strong> Ocean/road freight, transit insurance, port handling fees, and destination customs duties.<br>• <strong>Quality & Defect Costs:</strong> Pre-shipment inspection fees, testing lab expenses, scrap rates, and rework costs.<br>• <strong>Inventory & Lead Time:</strong> Capital holding costs associated with long transit times and safety stock requirements.<br>• <strong>Commercial & Currency Risk:</strong> Payment terms, foreign exchange volatility, and contract enforcement exposure.',
          'It is also essential to distinguish TCO from a <strong>Should-Cost model</strong>. A Should-Cost model estimates what a product ought to cost based on raw material costs, manufacturing labor, energy, overhead, and supplier profit margins. Should-Cost modeling provides leverage during commercial negotiations, whereas TCO evaluates the full business cost of accepting a specific commercial proposal. Read our complete guide on <a class="text-link" href="/en/insights/total-cost-of-ownership/">Total Cost of Ownership in Procurement →</a>'
        ]
      },
      {
        heading: 'When should a business use strategic sourcing?',
        body: [
          'While routine, low-value operating supplies can be managed through streamlined operational purchasing, strategic sourcing is recommended under the following business conditions:',
          '• <strong>High-Volume / High-Spend Categories:</strong> Product lines that represent a significant percentage of annual procurement expenditure.<br>• <strong>International & Overseas Sourcing:</strong> Sourcing from new geographic markets (e.g., Türkiye, Eastern Europe, Asia) where counterparty verification and logistics regulation are critical.<br>• <strong>Single-Source & Supply Chain Bottlenecks:</strong> Essential components or raw materials dependent on a single supplier or vulnerable trade corridor.<br>• <strong>Uncompetitive Supplier Pricing:</strong> Categories where historical supplier pricing has not been benchmarked against market rates for over 12–24 months.<br>• <strong>Quality & Compliance Requirements:</strong> Food ingredients, medical goods, or technical industrial inputs requiring strict ISO, COA, or regulatory compliance.'
        ]
      },
      {
        heading: 'Illustrative B2B scenario: Transactional buying vs strategic sourcing',
        body: [
          '<em>Note: The following scenario is an illustrative B2B operational comparison.</em>',
          'Consider a European manufacturer requiring bulk supply of industrial components. Under a <strong>traditional transactional approach</strong>, the procurement manager searches online, receives three quotes, selects the supplier offering the lowest unit price of €10.00/unit, and issues a purchase order. However, the supplier delivers 6 weeks late, 8% of the shipment fails quality inspection, and unexpected port handling and duty fees increase the landed cost to €12.50/unit.',
          'Under a <strong>strategic sourcing approach</strong>, the company conducts supply market research across verified producers in Türkiye and Central Europe. They issue a structured RFQ specifying quality standards and Incoterms (DAP), calculate the TCO across four pre-qualified candidates, and negotiate a contract with a verified manufacturer at €10.80/unit including pre-shipment COA verification, guaranteed lead time, and favorable payment terms. The landed cost remains exactly €10.80/unit with 0% defect rate and zero delivery delays, saving the company substantial operational expense.',
          'This comparison demonstrates why structured strategic sourcing delivers commercial certainty for international procurement initiatives.'
        ]
      },
      {
        heading: 'Frequently asked questions',
        body: [
          '<details open><summary>What is the difference between strategic sourcing and procurement?</summary><p>Procurement focuses on downstream transactional buying, purchase orders, invoice matching and order fulfillment. Strategic sourcing is the upstream strategy that evaluates spend categories, market intelligence, supplier qualification, total cost of ownership and commercial contracts before purchasing occurs.</p></details>',
          '<details><summary>Is strategic sourcing part of procurement?</summary><p>Strategic sourcing is an essential upstream phase of modern procurement management. While operational procurement executes individual purchases, strategic sourcing establishes the supplier relationships, commercial terms, and risk controls that govern how purchases are made.</p></details>',
          '<details><summary>What is the difference between strategic procurement and strategic sourcing?</summary><p>Strategic procurement is the overall management discipline that aligns purchasing with corporate strategy, category management and supplier performance. Strategic sourcing is the specific, structured process used within strategic procurement to evaluate markets, qualify suppliers and negotiate awards.</p></details>',
          '<details><summary>When should a company use strategic sourcing?</summary><p>Strategic sourcing is recommended when evaluating high-value spend categories, entering new overseas supply markets, managing single-source supply risks, benchmarking existing supplier pricing, or requiring formal supplier qualification.</p></details>',
          '<details><summary>Does strategic sourcing include logistics and delivery planning?</summary><p>Yes. Strategic sourcing incorporates Incoterms, freight logistics, customs duties, transport lead times, and inventory holding costs into a Total Cost of Ownership (TCO) evaluation prior to final supplier selection.</p></details>'
        ]
      }
    ]
  },
  { lang:'en', slug:'supplier-selection-criteria', title:'Supplier Selection Criteria: How to Choose the Right Supplier', description:'A practical supplier evaluation framework covering quality, capacity, lead time, compliance, financial strength and total cost.', date:'2026-07-23', updated:'2026-07-25', readingTime:'8 min', answer:'The right supplier is not simply the lowest bidder. It is the supplier that can sustainably meet quality, capacity, lead-time, compliance, communication and total-cost requirements.', sections:[{heading:'Key criteria',body:['Evaluate quality, capacity, delivery, financial resilience, compliance, communication, references and total cost together.']},{heading:'Why price is insufficient',body:['A low price can become expensive through defects, delays, rework, logistics or supply disruption.']},{heading:'How to verify',body:['Use registration checks, certificates, samples, references, audits and written confirmation of commercial terms.']} ]},
  { lang:'en', slug:'total-cost-of-ownership-procurement', title:'Total Cost of Ownership in Procurement', description:'How to calculate the real cost of a purchase beyond unit price, including logistics, inventory, quality, finance and risk.', date:'2026-07-21', updated:'2026-07-25', readingTime:'6 min', answer:'Total cost of ownership is the complete cost of a product or service, including purchase price, logistics, customs, inventory, quality, financing, delay, risk and operational effort.', sections:[{heading:'What TCO includes',body:['Unit price, freight, insurance, customs, inventory, inspection, defects, financing, currency risk, delays and management time.']},{heading:'Why it changes decisions',body:['A higher-priced quote may be cheaper overall when it offers better lead time, quality and payment terms.']},{heading:'How to apply it',body:['Define common cost categories, normalise all offers, price risk and compare scenarios.']} ]},
  { lang:'en', slug:'how-to-verify-a-supplier', title:'How to Verify a Supplier', description:'A practical supplier due-diligence checklist covering registration, capacity, quality, certificates, references and commercial risk.', date:'2026-07-19', updated:'2026-07-25', readingTime:'9 min', answer:'Supplier verification combines company registration checks, ownership, production capacity, quality systems, certificates, references, samples, commercial terms and, where possible, a site or video audit.', sections:[{heading:'Desk-based checks',body:['Cross-check registration, address, ownership, management profiles, export activity, online presence and certificates.']},{heading:'Operational checks',body:['Confirm production capacity, machinery, quality gates, minimum orders, lead times and backup capacity in writing.']},{heading:'Commercial risk checks',body:['Verify payment terms, bank details, signing authority, references and samples before placing high-value orders.']} ]},
  { lang:'en', slug:'how-to-write-an-rfq', title:'How to Write an Effective RFQ', description:'The essential fields, structure and common mistakes when preparing a request for quotation that produces comparable supplier offers.', date:'2026-07-17', updated:'2026-07-25', readingTime:'8 min', answer:'An effective RFQ clearly defines specifications, quantities, quality standards, delivery location, Incoterms, payment terms, lead time, documentation and the quotation deadline.', sections:[{heading:'What an RFQ should include',body:['Include technical specifications, drawings or sample references, order and annual volumes, packaging, quality standards, delivery point, Incoterms, payment terms and quote validity.']},{heading:'Why comparability matters',body:['Different commercial scopes make price comparison unreliable. A common template exposes omissions and hidden costs.']},{heading:'Common mistakes',body:['Vague specifications, missing delivery terms, unclear quality expectations and asking only for unit price are frequent errors.']} ]},
  { lang:'en', slug:'supply-chain-risk-management', title:'Supply Chain Risk Management Guide', description:'How to reduce single-source, quality, capacity, logistics, currency and regulatory risks with practical sourcing controls.', date:'2026-07-15', updated:'2026-07-25', readingTime:'9 min', answer:'Supply chain risk management identifies critical products, suppliers and routes, scores probability and impact, and creates alternative sources and response plans.', sections:[{heading:'Main risk categories',body:['Single sourcing, financial weakness, quality failures, capacity constraints, long lead times, logistics disruption, currency volatility and regulatory change are core risks.']},{heading:'How to assess risk',body:['Score probability, commercial impact, detection speed and substitution difficulty. Critical items require backup suppliers and inventory plans.']},{heading:'How to build resilience',body:['Use second sources, performance monitoring, contractual safeguards, safety stock and early-warning indicators together.']} ]}
];

export const getPosts = (lang:'tr'|'en') => posts.filter(p=>p.lang===lang);
