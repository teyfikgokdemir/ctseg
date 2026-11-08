import fs from 'node:fs';

const specializations = [
  // TEXTILES
  {
    id: 'vietnam-textiles',
    industryId: 'textiles',
    image: { src: '/images/global-sourcing/textiles-1280.webp', width: 1280, height: 800 },
    tr: {
      title: 'Vietnam Tekstil ve Kumaş Tedariki',
      meta: 'Vietnam hazır giyim, sentetik ve pamuklu kumaş, örme ve dokuma üretim tesislerinden doğrudan B2B tedarik koordinasyonu ve fabrika denetimi.',
      eyebrow: 'TEKSTİL VE HAZIR GİYİM · VİETNAM',
      h1: 'Vietnam Tekstil ve Kumaş Tedariki',
      lead: 'Güneydoğu Asya’nın lider tekstil üretim üssü Vietnam’dan kumaş, iplik ve konfeksiyon alımlarında doğrulanmış fabrika ağı, teknik şartname kontrolü ve ticari koordinasyon.',
      overview: 'Vietnam, gelişmiş tedarik zinciri altyapısı, serbest ticaret anlaşmaları (EVFTA, CPTPP) ve modern dokuma-örme tesisleriyle küresel markaların öncelikli tedarik merkezidir. CTSEG, doğrudan üretici eşleştirmesi ve yerinde kalite kontrol koordinasyonu ile tedarik risklerini minimize eder.',
      categories: ['Örme ve Dokuma Kumaşlar (Polyester, Pamuk, Viskon)', 'Teknik ve Spor Giyim Kumaşları', 'Hazır Konfeksiyon ve Dış Giyim', 'Endüstriyel İplik ve Elyaf Çeşitleri'],
      specs: ['İplik numarası, büküm ve kompozisyon oranları', 'Gramaj (GSM) ve en tolerans sınırları', 'Yıkama, sürtünme ve ışık haslığı değerleri (ISO / AATCC)', 'Boya partisi (Lab dip) onay süreçleri ve renk tutarlılığı'],
      eval: ['Tesis makine parkuru ve aylık fiili kapasite denetimi', 'Sosyal uygunluk ve çevre sertifikaları (WRAP, BSCI, OEKO-TEX)', 'Hammadde izlenebilirliği ve menşe şahadetnamesi (Form EUR.1 / Form B)', 'İhracat tecrübesi ve daha önceki uluslararası referanslar'],
      prod: ['Kumaş bazında asgari sipariş miktarı (MOQ) genellikle 1.000 - 3.000 metre arasındadır.', 'Ön üretim numunesi (PPS) ve laboratuvar test onay süreleri 10-15 iş günüdür.', 'Nem alıcı koruyucu ambalaj ve deniz aşırı taşımaya uygun rulo paketleme zorunludur.'],
      logistics: ['FOB Hai Phong veya Ho Chi Minh Limanı teslim seçenekleri.', 'Avrupa ve Akdeniz limanlarına ortalama 25-32 gün transit süre.', 'EVFTA ve tercihli menşe belgeleri ile gümrük vergisi optimizasyonu.'],
      process: ['Teknik Şartname ve Numune Analizi', 'Üretici Ön Seçimi ve Kapasite Doğrulaması', 'Fiyat ve Teslim Şartları Karşılaştırması', 'Sözleşme, Üretim Takibi ve Yükleme Denetimi'],
      faqs: [
        { q: 'Vietnam’dan kumaş tedarikinde gümrük avantajı var mıdır?', a: 'Evet, AB ülkeleri ile Vietnam arasındaki EVFTA anlaşması ve Türkiye ile ikili ticaret düzenlemeleri kapsamında belirli ürün gruplarında gümrük vergisi muafiyeti veya indirimli tarife uygulanmaktadır.' },
        { q: 'Üretim öncesi laboratuvar testi nasıl yürütülür?', a: 'Belirlenen şartnameye uygun olarak üretici tarafından hazırlanan laboratuvar numuneleri (lab dip) bağımsız test kuruluşları veya alıcı onayı ile doğrulanır.' },
        { q: 'CTSEG stok tutuyor mu?', a: 'Hayır. CTSEG bağımsız bir dış ticaret ve tedarik evidir; stok tutmaz, doğrudan doğrulanmış üreticiler ile kurumsal alıcılar arasında teknik ve ticari süreçleri yönetir.' }
      ]
    },
    en: {
      title: 'Vietnam Textile and Fabric Sourcing',
      meta: 'B2B sourcing coordination and mill audits for apparel, synthetic and cotton fabrics, knitwear, and woven goods directly from Vietnam.',
      eyebrow: 'TEXTILES & APPAREL · VIETNAM',
      h1: 'Vietnam Textile and Fabric Sourcing',
      lead: 'Connecting international buyers with verified Vietnamese textile mills, knitting factories, and garment producers with technical specification oversight and commercial execution.',
      overview: 'Vietnam is a premier global manufacturing hub benefiting from competitive supply chains, modern production machinery, and free trade agreements including EVFTA and CPTPP. CTSEG coordinates direct mill partnerships, factory verification, and rigorous quality inspection protocols.',
      categories: ['Knitted and Woven Fabrics (Cotton, Poly, Viscose blends)', 'Performance and Activewear Textiles', 'Finished Garments and Outerwear', 'Spun Yarns and Industrial Fibers'],
      specs: ['Yarn count, twist, and raw material composition', 'Fabric weight (GSM) and usable width tolerances', 'Colorfastness to washing, light, and crocking (ISO / AATCC)', 'Lab dip approval workflows and delta-E shade consistency'],
      eval: ['Machinery profile and verified monthly production throughput', 'Social compliance and eco-certifications (WRAP, BSCI, OEKO-TEX Standard 100)', 'Supply chain traceability and Certificate of Origin (Form EUR.1 / Form B)', 'Historical export compliance to European and North American markets'],
      prod: ['Fabric MOQs typically range from 1,000 to 3,000 meters per colorway depending on construction.', 'Pre-production sample (PPS) and lab dip approval cycle takes 10–15 business days.', 'Export-grade poly-wrapped roll packaging with moisture barrier desiccants is standard.'],
      logistics: ['FOB Hai Phong Port or Ho Chi Minh City Port shipping terms.', 'Average ocean freight transit time to Mediterranean and European ports is 25–32 days.', 'Origin documentation verification to ensure eligibility for preferential tariff treatment.'],
      process: ['Specification and Technical Pack Review', 'Mill Pre-Qualification and Capacity Audit', 'RFQ Normalization and Price Benchmarking', 'Sampling, Production Milestones, and Final Pre-Shipment Inspection'],
      faqs: [
        { q: 'Does Vietnam offer tariff advantages for European buyers?', a: 'Yes. Under the EU-Vietnam Free Trade Agreement (EVFTA), qualified textile products meeting rules of origin benefit from zero or reduced customs tariffs.' },
        { q: 'How are quality standards enforced during production?', a: 'We mandate inline and pre-shipment inspections following AQL 2.5/4.0 standards, reviewing tensile strength, dimensional stability, and color accuracy.' },
        { q: 'Does CTSEG hold inventory?', a: 'No. CTSEG operates strictly as an independent trade and sourcing house. We do not hold inventory, ensuring neutral, client-first supplier matching and verification.' }
      ]
    }
  },
  {
    id: 'oem-garments',
    industryId: 'textiles',
    image: { src: '/images/ctseg-wholesale-textiles-editorial.webp', width: 1536, height: 1024 },
    tr: {
      title: 'OEM Hazır Giyim ve Konfeksiyon Üretimi',
      meta: 'Özel etiketli hazır giyim, örme ve dokuma konfeksiyon üreticileri için teknik dosya (tech-pack) bazlı fason üretim ve B2B tedarik yönetimi.',
      eyebrow: 'TEKSTİL VE HAZIR GİYİM · OEM ÜRETİM',
      h1: 'OEM Hazır Giyim ve Konfeksiyon Üretimi',
      lead: 'Moda markaları, kurumsal giyim ve perakende zincirleri için onaylı konfeksiyon üreticileriyle teknik kalıp, kumaş tedariki ve seri üretim eşleştirmesi.',
      overview: 'OEM hazır giyim üretimi; doğru kalıp, zamanında kumaş temini, dikiş kalitesi ve hassas ölçü toleransları gerektirir. Türkiye ve Asya üretim koridorlarında doğrulanmış atölye ve entegre tesislerle çalışarak markanızın spesifikasyonlarına tam uyum sağlıyoruz.',
      categories: ['T-shirt, Polo ve Sweatshirt Grupları', 'Denim ve Dokuma Pantolon Üretimi', 'Resmi ve Kurumsal İş Kıyafetleri', 'Çocuk ve Bebek Giyim Koleksiyonları'],
      specs: ['Teknik ölçü tablosu (Tech pack) ve tolerans değerleri (±0.5 - 1.0 cm)', 'Kumaş gramajı, elyaf karışımı ve çekmezlik payları', 'Dikiş sıklığı (SPI - Stitches Per Inch) ve iplik mukavemeti', 'Aksesuar kalitesi (YKK/onaylı fermuar, düğme, nakış ve baskı detayları)'],
      eval: ['Kesim, dikim, ütü-paket hatlarının verimliliği ve kapasitesi', 'Sedex (SMETA) ve BSCI sosyal denetim raporları', 'Kalıp çıkarma ve numune dikim hızı', 'Kumaş ve aksesuar stoklama koşulları'],
      prod: ['Model başına asgari üretim miktarı (MOQ) kumaşa bağlı olarak 300 - 1.000 adettir.', 'Prototip ve beden seti (Size set) onay süreleri 7-12 iş günüdür.', 'Özel barkod, etiketleme ve askılı/kolili sevkiyat hazırlığı.'],
      logistics: ['FOB, EXW veya DDP teslim modelleri ile esnek ticaret.', 'Avrupa’ya karayolu ile 4-7 gün, deniz aşırı ülkelere konteyner sevkiyatı.', 'İhracat evrakları, çeki listesi ve ATR / EUR.1 dolaşım belgeleri.'],
      process: ['Tech Pack İncelemesi ve Hammadde Eşleştirmesi', 'Örnek Numune ve Beden Seti Üretimi', 'Kritik Yol (Critical Path) Planlaması ve Üretim', 'AQL Standartlarında Final Kalite Kontrol ve Yükleme'],
      faqs: [
        { q: 'Küçük adetli deneme siparişleri verilebilir mi?', a: 'Üreticinin hazır kumaş stok durumuna göre belirli modellerde 300-500 adetlik pilot üretimler koordine edilebilmektedir.' },
        { q: 'Kendi kumaş ve aksesuarlarımızı gönderebilir miyiz?', a: 'Evet. CMT (Cut-Make-Trim) çalışma modeliyle alıcının temin ettiği malzemelerin fason işçilik koordinasyonu yürütülebilir.' },
        { q: 'Kalite kontrol nasıl belgelenir?', a: 'Üretim bitiminde bağımsız veya yetkili müfettişler tarafından hazırlanan detaylı AQL 2.5 görsel ve ölçü kontrol raporu sunulur.' }
      ]
    },
    en: {
      title: 'OEM Garment and Apparel Manufacturing',
      meta: 'Contract garment manufacturing, private label apparel production, and cut-make-trim (CMT) coordination from audited garment factories.',
      eyebrow: 'TEXTILES & APPAREL · OEM APPAREL',
      h1: 'OEM Garment and Apparel Manufacturing',
      lead: 'Connecting fashion labels, retailers, and corporate uniform buyers with verified garment manufacturers operating to precise tech packs and strict delivery schedules.',
      overview: 'Contract garment manufacturing requires meticulous tech-pack execution, reliable fabric sourcing, consistent seam construction, and tight sizing tolerances. We match buyers with audited apparel plants across Türkiye, Vietnam, and regional manufacturing hubs.',
      categories: ['Jersey Wear (T-shirts, Polos, Hoodies, Sweatshirts)', 'Denim and Casual Woven Trousers', 'Workwear and Technical Corporate Uniforms', 'Infant and Childrenswear Collections'],
      specs: ['Complete technical pack with measurement grading chart (±0.5 to 1.0 cm tolerance)', 'Fabric weight (GSM), shrinkage limits, and torque specifications', 'Stitches Per Inch (SPI) and seam strength ratings', 'Trim specifications (zipper tensile ratings, OEKO-TEX certified buttons, print durability)'],
      eval: ['Sewing floor configuration, automated cutting machinery, and daily output', 'Social compliance audits (BSCI, SMETA / Sedex, WRAP)', 'In-house pattern grading and sample room responsiveness', 'Fabric inspection systems (4-point system) prior to cutting'],
      prod: ['Standard production MOQ is 300 to 1,000 units per style depending on fabric availability.', 'Proto sample and size set approval cycle takes 7–14 days.', 'Custom branding: woven main labels, care labels, hangtags, polybags, and barcode cartons.'],
      logistics: ['FOB, FCA, or DDP delivery terms according to buyer supply chain setup.', 'Short transit options: 4–7 days overland from Türkiye to Europe; sea freight for high-volume orders.', 'Export customs documentation, packing lists, and preferential origin certificates.'],
      process: ['Tech Pack Audit and Cost Engineering', 'Prototype and Counter-Sample Approval', 'Material Procurement and Production Milestone Scheduling', 'Final Random Inspection (AQL 2.5) and Container Dispatch'],
      faqs: [
        { q: 'Can you accommodate low-volume initial trial orders?', a: 'Depending on whether stock fabrics or custom-dyed yarns are used, trial runs starting at 300–500 units per color can be arranged.' },
        { q: 'What is the standard production lead time?', a: 'Standard production typically takes 4–6 weeks following pre-production sample (PPS) and lab dip sign-off.' },
        { q: 'How are size and fit tolerances verified?', a: 'Garments are inspected on standard fit forms and measured against grading sheets under AQL 2.5 inspection guidelines.' }
      ]
    }
  },
  {
    id: 'technical-fabrics',
    industryId: 'textiles',
    image: { src: '/images/ctseg-2026/textile-fabric-inspection.webp', width: 1376, height: 768 },
    tr: {
      title: 'Teknik ve Fonksiyonel Kumaşlar',
      meta: 'Alev geciktirici, su geçirmez, yırtılmaz (ripstop) ve yüksek mukavemetli endüstriyel ve koruyucu teknik kumaş tedariki.',
      eyebrow: 'TEKSTİL VE HAZIR GİYİM · TEKNİK TEKSTİL',
      h1: 'Teknik ve Fonksiyonel Kumaşlar',
      lead: 'Askeri, medikal, otomotiv ve endüstriyel koruyucu giyim sektörleri için uluslararası EN ve ISO sertifikalı teknik kumaş tedarik çözümleri.',
      overview: 'Teknik tekstiller; mekanik dayanım, kimyasal direnç, alev geciktiricilik ve nefes alabilirlik gibi katı standartlara tabidir. CTSEG, akredite laboratuvar test raporlarına (COA) sahip üreticileri alıcıların spesifikasyonlarıyla buluşturur.',
      categories: ['Alev Geciktirici Kumaşlar (FR Cotton, Modakrilik, Aramid)', 'Su ve Rüzgar Geçirmez Membranlı Kumaşlar (TPU/PTFE Lamine)', 'Yüksek Mukavemetli Ripstop ve Cordura Tipi Kumaşlar', 'Anti-statik ve Medikal Antibakteriyel Kumaşlar'],
      specs: ['EN ISO 11612, EN ISO 14116 veya NFPA 2112 alev yayılma direnci', 'Su sütunu basıncı (Hydrostatic head > 10.000 mm) ve nefes alabilirlik (RET)', 'Yırtılma ve kopma mukavemeti (ISO 13934 / 13937)', 'Yıkama sonrası boyutsal stabilite ve elektrostatik boşalma (EN 1149)'],
      eval: ['Akredite laboratuvar test raporlarının güncelliği ve parti izlenebilirliği', 'Kaplama ve laminasyon hatlarının teknik yeterliliği', 'Kimyasal girdi güvenliği (OEKO-TEX ECO PASSPORT / REACH)', 'Savunma ve endüstriyel sanayi referansları'],
      prod: ['Özel kaplamalı kumaşlarda asgari sipariş miktarı 1.500 - 3.000 metredir.', 'Teknik numune testleri ve sertifikasyon doğrulaması 2-3 hafta sürer.', 'UV dayanımlı, su geçirmez rulo ambalaj ve parti takip etiketleri.'],
      logistics: ['FOB, CIF veya CFR teslim seçenekleri.', 'Konteyner ve parsiyel yükleme planlaması.', 'Tehlikesiz kimyasal içerik beyanı ve teknik ürün güvenlik bilgi formu (MSDS/SDS).'],
      process: ['Teknik İhtiyaç ve Standart Belirleme (EN / ISO / ASTM)', 'Üretici Laboratuvar ve Test Raporu Teyidi', 'Pilot Numune Üretimi ve Akredite Test Doğrulaması', 'Parti Bazlı Kalite Kontrol ve Sevkiyat'],
      faqs: [
        { q: 'Kumaşların alev geciktiricilik özelliği kaç yıkamaya kadar geçerlidir?', a: 'Kalıcı alev almaz (Inherent FR) kumaşlar ürün ömrü boyunca koruma sağlarken, apreli kumaşlarda üretici standardına göre 50 ila 100 yıkama garantisi verilir.' },
        { q: 'Akredite test raporu temin ediliyor mu?', a: 'Evet. Her üretim partisinden alınan numuneler için uluslararası geçerliliğe sahip test raporları üretici tarafından teslim edilir.' },
        { q: 'Askeri standartlara uygun kamuflaj baskı yapılabilir mi?', a: 'Evet, NIR (Near Infrared) yansıtma değerlerine uygun askeri kamuflaj ve yüksek görünürlüklü (EN ISO 20471) kumaş üretimi koordine edilmektedir.' }
      ]
    },
    en: {
      title: 'Technical and Functional Fabric Sourcing',
      meta: 'Flame-retardant, waterproof, ripstop, and high-tenacity industrial fabrics engineered to EN, ISO, and NFPA safety standards.',
      eyebrow: 'TEXTILES & APPAREL · TECHNICAL TEXTILES',
      h1: 'Technical and Functional Fabric Sourcing',
      lead: 'Connecting defense, medical, automotive, and industrial protective workwear buyers with certified mills producing performance textiles.',
      overview: 'Technical textiles demand rigorous mechanical, thermal, and barrier compliance. CTSEG structures B2B sourcing across mills with verifiable test data, strict lot traceability, and independent laboratory certifications.',
      categories: ['Flame-Retardant Fabrics (Inherent Aramid, Modacrylic, Treated Cotton)', 'Waterproof Breathable Laminated Fabrics (PTFE/TPU Membranes)', 'High-Tenacity Ballistic and Ripstop Nylon/Polyester', 'Antistatic (EN 1149) and Medical Antimicrobial Textiles'],
      specs: ['Thermal performance to EN ISO 11612, EN ISO 14116, or NFPA 2112', 'Hydrostatic head pressure (>10,000 mm H2O) and breathability (RET / MVTR)', 'Tensile and tear strength parameters (ISO 13934 / ISO 13937)', 'Electrostatic decay and arc flash rating (ATPV / EBT)'],
      eval: ['Accredited laboratory testing capabilities (SGS, Intertek, Hohenstein)', 'Lamination and coating uniformity controls', 'Chemical safety compliance with EU REACH and OEKO-TEX Standard 100', 'Lot-by-lot batch consistency and raw yarn origin certification'],
      prod: ['Standard custom production MOQ ranges between 1,500 and 3,000 linear meters.', 'Testing and counter-sample verification requires 14–21 days.', 'Heavy-duty poly-wrapped rolls with UV inhibitors and core plug reinforcement.'],
      logistics: ['FOB, CIF, or FCA terms with clear documentation packages.', 'Consolidated full container load (FCL) or less-than-container (LCL) freight.', 'Complete safety data sheets (SDS) and technical data sheets (TDS) with each batch.'],
      process: ['Safety Standard Definition (EN / ISO / ASTM / NFPA)', 'Mill Screening and Certified Test Audit', 'Pilot Yardage Production and Independent Lab Validation', 'Commercial Production Run and Inspection Clearance'],
      faqs: [
        { q: 'What is the difference between treated and inherent flame-retardant fabrics?', a: 'Treated fabrics receive a chemical finish that withstands 50–100 industrial washes, whereas inherent FR fibers (like Aramids) possess molecular fire resistance that never washes out.' },
        { q: 'Are test certificates lot-specific?', a: 'Yes. For safety-critical textiles, batch test certificates detailing physical and protective ratings are required for each production lot.' },
        { q: 'Can you provide fabrics with Near-Infrared (NIR) camouflage properties?', a: 'Yes. We work with specialized technical mills capable of meeting strict military NIR reflectance curves.' }
      ]
    }
  },
  {
    id: 'home-hotel-textiles',
    industryId: 'textiles',
    image: { src: '/images/global-sourcing/textiles-1280.webp', width: 1280, height: 800 },
    tr: {
      title: 'Ev ve Otel Tekstili Tedariki',
      meta: 'Otel çarşafları, havlu ve bornoz setleri, nevresim takımları ve döşemelik kumaşlarda yüksek adetli B2B toptan tedarik.',
      eyebrow: 'TEKSTİL VE HAZIR GİYİM · EV VE OTEL TEKSTİLİ',
      h1: 'Ev ve Otel Tekstili Tedariki',
      lead: 'Konaklama sektörü ve ev tekstili zincirleri için pamuklu havlu, lüks nevresim takımları ve dayanıklı otel tekstilinde doğrulanmış üretici ağı.',
      overview: 'Otel ve konaklama tekstilleri; endüstriyel yıkamaya dayanıklılık, yüksek iplik sıklığı (TC - Thread Count) ve çekmezlik gerektirir. Türkiye’nin Denizli ve Bursa üretim merkezleri başta olmak üzere global üreticilerle toptan tedarik yönetimi sunuyoruz.',
      categories: ['Otel Tipi Ring Havlu ve Bornoz Setleri', 'Saten ve Ranforce Nevresim Takımları (200-400 TC)', 'Yorgan, Yastık ve Sıvı Geçirmez Yatak Koruyucu Alezler', 'Restoran ve Ziyafet Masa Örtüsü / Peçeteler'],
      specs: ['İplik cinsi: %100 Penye veya Karde Pamuk (20/2, 16/1)', 'Gramaj: Havlularda 450 - 650 g/m², nevresimlerde 120 - 160 g/m²', 'Endüstriyel klor ve yıkama dayanımı (90°C yıkama testi)', 'Çift dikiş kenar takviyesi ve optik beyazlık derecesi (Berger değeri)'],
      eval: ['Dokuma ve iplik boyama tesislerinin entegrasyon seviyesi', 'OEKO-TEX Standard 100 ve GOTS organik sertifikasyonu', 'Aylık havlu ve nevresim üretim metrajı', 'Büyük otel zincirleri ve uluslararası toptancılar için geçmiş ihracat referansları'],
      prod: ['Özel jakar logolu havlularda asgari sipariş miktarı 500 kg / 1.000 adettir.', 'Nevresim gruplarında desen veya renk başına MOQ 1.000 metredir.', 'Sıkıştırılmış balyalı veya koruyucu kolili toptan ihracat ambalajı.'],
      logistics: ['FOB, CIF veya karayolu CMR taşımacılığı ile esnek teslimat.', 'Avrupa’ya 3-6 gün kapıdan kapıya karayolu erişimi.', 'Menşe şahadetnamesi ve ihracat dolaşım belgeleri (ATR / EUR.1).'],
      process: ['Koleksiyon ve Kalite Belirleme (İplik, Gramaj, Ebat)', 'Numune ve Yıkama Dayanım Testi', 'Toplu İmalat ve Hat Sonu Kontrolü', 'Paletleme, İhracat Gümrüğü ve Sevkiyat'],
      faqs: [
        { q: 'Otel tekstillerinde endüstriyel yıkama garantisi nedir?', a: 'Ürünler otel çamaşırhanelerindeki 90°C sıcak yıkama, tamburlu kurutma ve klorlu ağartmaya karşı minimum çekme ve yıpranma toleransıyla üretilir.' },
        { q: 'Özel logo dokuma veya nakış yapılabilir mi?', a: 'Evet. Havlularda kabartma jakar dokuma veya yüksek çözünürlüklü nakış uygulamaları doğrudan fabrika tezgahında uygulanır.' },
        { q: 'Türkiye’den Avrupa’ya teslimat süresi nedir?', a: 'Üretim tamamlandıktan sonra karayolu tır sevkiyatıyla Almanya, Fransa veya İtalya’ya transit süre 4-6 gündür.' }
      ]
    },
    en: {
      title: 'Home and Hotel Textile Sourcing',
      meta: 'B2B volume sourcing for institutional hospitality bedding, luxury combed cotton towels, and contract home textiles from certified mills.',
      eyebrow: 'TEXTILES & APPAREL · HOSPITALITY & HOME',
      h1: 'Home and Hotel Textile Sourcing',
      lead: 'Supplying hotel chains, commercial laundries, and retail home brands with high-durability terry towels, percale linens, and hospitality textiles.',
      overview: 'Institutional hospitality textiles demand commercial wash resilience, precise thread count (TC) specifications, optical brightness, and low shrinkage. We structure bulk sourcing programs through world-renowned production clusters in Denizli, Bursa, and global textile hubs.',
      categories: ['Commercial Terry Towels and Bathrobes (Ring-Spun Cotton)', 'Percale and Satin Bed Linen Sets (200–400 TC)', 'Flame-Retardant Pillows, Duvets, and Waterproof Mattress Protectors', 'Banquet Tablecloths and Commercial Napkins'],
      specs: ['Yarn construction: 100% Combed or Carded Cotton (20/2, 16/1 ring spun)', 'Weight: Towels 450–650 GSM; sheeting 125–160 GSM', 'Industrial wash stability tested up to 90°C with chlorine resistance', 'Double-stitched reinforced hems and optical white Berger scale ratings'],
      eval: ['Vertical integration across spinning, weaving, and finishing', 'Environmental and health certifications (OEKO-TEX Standard 100, GOTS)', 'Daily capacity for dyeing and continuous finishing lines', 'Institutional references with global hotel chains and hospitality procurement groups'],
      prod: ['Jacquard woven logo towels require an MOQ of approximately 1,000 units per size.', 'Bed linen MOQ starts at 500 sets per colorway or 1,500 meters of continuous fabric.', 'Bale-compressed or palletized moisture-sealed export packaging.'],
      logistics: ['FOB, CIF, or road freight options depending on destination.', 'Overland transit from Türkiye to Western Europe takes 4–6 days.', 'Complete export declarations, EUR.1 / ATR certificates, and packing manifests.'],
      process: ['Specification and Fabric Grade Finalization', 'Counter-Sample Creation and Commercial Wash Testing', 'Bulk Manufacturing and In-Line Quality Surveillance', 'Export Packing, Loading Inspection, and Logistics Coordination'],
      faqs: [
        { q: 'How do you ensure hospitality linens withstand commercial laundry cycles?', a: 'Mills utilize double-twisted ring yarns and vat-dyeing / peroxide-bleaching processes formulated specifically for high-temperature commercial laundries.' },
        { q: 'Can customized woven borders or Jacquard logos be added?', a: 'Yes. Custom Jacquard weaves, dobby borders, and embroidered crests can be incorporated during fabric weaving.' },
        { q: 'What certifications accompany the shipments?', a: 'Standard documentation includes OEKO-TEX Standard 100 Class 1 or 2, Certificate of Origin, and mill test reports.' }
      ]
    }
  }
];

// Write file
const filePath = 'src/data/industry-specializations.ts';
const fileContent = `// Auto-generated industry specializations data
import { activeLocales } from './locales';

export interface SpecializationContent {
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  overview: string;
  categories: string[];
  specs: string[];
  eval: string[];
  prod: string[];
  logistics: string[];
  process: string[];
  faqs: Array<{ q: string; a: string }>;
}

export interface SpecializationRecord {
  id: string;
  industryId: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  content: Record<string, SpecializationContent>;
}

export const industrySpecializations: SpecializationRecord[] = ${JSON.stringify(specializations, null, 2)};
`;

fs.writeFileSync(filePath, fileContent, 'utf8');
console.log('Specializations seed file generated, length:', fileContent.length);
