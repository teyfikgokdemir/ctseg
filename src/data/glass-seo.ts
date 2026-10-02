export type GlassSeoLocale = 'tr' | 'en';

export interface GlassSeoPage {
  slug: string;
  tr: {
    title: string; metaTitle: string; description: string; eyebrow: string; lead: string;
    applications: string[]; buyers: string[]; rfq: string[]; faq: [string,string][];
  };
  en: {
    title: string; metaTitle: string; description: string; eyebrow: string; lead: string;
    applications: string[]; buyers: string[]; rfq: string[]; faq: [string,string][];
  };
}

export const glassSeoPages: GlassSeoPage[] = [
  {
    slug:'float-glass',
    tr:{title:'Float Cam Tedariki ve İhracat Koordinasyonu',metaTitle:'Float Cam Tedarikçisi Türkiye | B2B İhracat ve RFQ | CTSEG',description:'Türkiye’den şeffaf, renkli ve ultra clear float cam için B2B tedarik, üretici eşleştirme, RFQ, konteyner ve ihracat koordinasyonu.',eyebrow:'Float Cam · B2B Tedarik',lead:'Şeffaf, renkli ve ultra clear float cam taleplerini kalınlık, ebat, miktar, paketleme ve teslim noktasına göre doğru tedarik kanalıyla eşleştiriyoruz.',applications:['Cam işleme ve temper tesisleri','IGU / ısıcam üretimi','Cephe ve doğrama sistemleri','Mobilya, iç mimari ve endüstriyel kullanım'],buyers:['İthalatçı ve distribütörler','Cam işleme tesisleri','Cephe ve alüminyum sistem firmaları','Proje satın alma ekipleri'],rfq:['Cam tipi ve renk','Kalınlık ve levha ebadı','Aylık/proje miktarı','Teslim ülkesi ve Incoterm'],faq:[['Float cam için minimum hangi bilgiler gerekli?','Kalınlık, levha ebadı, renk veya şeffaflık, miktar ve teslim noktası RFQ başlatmak için yeterlidir.'],['Konteyner bazlı teklif alınabilir mi?','Evet. Paketleme ve ağırlık sınırları dikkate alınarak uygun yükleme modeli değerlendirilir.']]},
    en:{title:'Float Glass Sourcing from Türkiye',metaTitle:'Float Glass Suppliers in Turkey | Export Sourcing | CTSEG',description:'B2B sourcing, supplier matching, RFQ, container planning and export coordination for clear, tinted and ultra-clear float glass from Türkiye.',eyebrow:'Float Glass · B2B Sourcing',lead:'We match clear, tinted and ultra-clear float-glass requirements with appropriate supply channels based on thickness, sheet size, quantity, packing and destination.',applications:['Glass processing and tempering plants','IGU manufacturing','Façade and fenestration systems','Furniture, interiors and industrial use'],buyers:['Importers and distributors','Glass processors','Façade and aluminium-system companies','Project procurement teams'],rfq:['Glass type and tint','Thickness and sheet size','Recurring/project quantity','Destination and Incoterm'],faq:[['What is needed to start a float-glass RFQ?','Thickness, sheet size, tint or clarity, quantity and destination are enough to begin.'],['Can you coordinate container quantities?','Yes. Packing configuration and weight limits are considered when planning the load.']]}
  },
  {
    slug:'laminated-glass',
    tr:{title:'Lamine Cam Tedariki',metaTitle:'Lamine Cam Tedarikçisi Türkiye | Proje ve B2B RFQ | CTSEG',description:'Güvenlik, akustik ve proje gereksinimleri için Türkiye’den lamine cam tedariki, üretici eşleştirme ve ihracat koordinasyonu.',eyebrow:'Lamine Cam · Güvenlik ve Proje',lead:'Lamine cam taleplerini cam kombinasyonu, ara katman, kalınlık, ölçü ve kullanım alanına göre teknik ve ticari olarak yapılandırıyoruz.',applications:['Cephe ve korkuluk sistemleri','Güvenlik camı uygulamaları','Akustik cam çözümleri','Mağaza, çatı ve proje camları'],buyers:['Cephe firmaları','Müteahhit ve proje ekipleri','Cam işleme tesisleri','İthalatçı ve distribütörler'],rfq:['Cam kombinasyonu / toplam kalınlık','Ara katman tipi ve gereksinimi','Ebat ve işleme detayları','Miktar, teslim noktası ve Incoterm'],faq:[['Lamine cam teklifinde hangi teknik bilgi kritiktir?','Katman yapısı, toplam kalınlık, ebat, kenar/işleme gereksinimi ve kullanım alanı teklif doğruluğunu belirler.'],['Proje bazlı özel ölçü çalışılabilir mi?','Uygun üretim kanalı bulunduğunda çizim ve kesim listesine göre proje talepleri koordine edilebilir.']]},
    en:{title:'Laminated Glass Sourcing from Türkiye',metaTitle:'Laminated Glass Suppliers in Turkey | Project Sourcing | CTSEG',description:'Supplier matching and export coordination for laminated safety, acoustic and project glass sourced from Türkiye.',eyebrow:'Laminated Glass · Safety & Projects',lead:'We structure laminated-glass requirements around make-up, interlayer, thickness, dimensions and end use before matching the request with suitable production capacity.',applications:['Façades and balustrades','Safety-glazing applications','Acoustic glass solutions','Retail, roof and project glazing'],buyers:['Façade contractors','General contractors and project teams','Glass processors','Importers and distributors'],rfq:['Glass make-up / total thickness','Interlayer requirement','Dimensions and processing details','Quantity, destination and Incoterm'],faq:[['What is critical in a laminated-glass RFQ?','Make-up, total thickness, dimensions, edge/processing requirements and end use drive quotation accuracy.'],['Can project-specific sizes be coordinated?','Yes, where suitable production capacity is available, drawings and cut lists can be used for project RFQs.']]}
  },
  {
    slug:'low-e-coated-glass',
    tr:{title:'Low-E ve Kaplamalı Cam Tedariki',metaTitle:'Low-E Cam Tedarikçisi Türkiye | Kaplamalı Cam B2B | CTSEG',description:'Enerji verimliliği ve cephe projeleri için Low-E ve kaplamalı cam tedariki, teknik RFQ ve ihracat koordinasyonu.',eyebrow:'Low-E & Kaplamalı Cam',lead:'Low-E ve performans kaplamalı cam taleplerinde kullanım amacı, kaplama tipi, işlenebilirlik ve proje performans hedeflerini RFQ’ya dönüştürüyoruz.',applications:['Enerji verimli pencere sistemleri','IGU / ısıcam üretimi','Ticari cephe projeleri','Konut ve otel projeleri'],buyers:['IGU üreticileri','Pencere ve doğrama üreticileri','Cephe firmaları','Proje satın alma ekipleri'],rfq:['Kaplama / performans beklentisi','Kalınlık ve ebat','Temperleme veya lamine gereksinimi','Miktar ve proje lokasyonu'],faq:[['Low-E cam seçerken yalnız U-değeri yeterli mi?','Hayır. Projeye göre güneş kontrolü, ışık geçirgenliği, kaplama yüzeyi ve işleme gereksinimleri de değerlendirilmelidir.'],['İşlenebilir Low-E cam talep edilebilir mi?','Evet. Temperleme veya farklı işleme gereksinimi RFQ aşamasında açıkça belirtilmelidir.']]},
    en:{title:'Low-E & Coated Glass Sourcing from Türkiye',metaTitle:'Low-E Glass Suppliers in Turkey | Coated Glass | CTSEG',description:'Technical RFQ, supplier matching and export coordination for Low-E and performance-coated glass from Türkiye.',eyebrow:'Low-E & Coated Glass',lead:'We translate Low-E and performance-coated glass requirements into a sourcing brief covering end use, coating type, processability and project performance targets.',applications:['Energy-efficient window systems','IGU production','Commercial façade projects','Residential and hospitality projects'],buyers:['IGU manufacturers','Window and fenestration manufacturers','Façade companies','Project procurement teams'],rfq:['Coating / performance target','Thickness and dimensions','Tempering or lamination need','Quantity and project location'],faq:[['Is U-value alone enough to specify Low-E glass?','No. Solar control, visible light transmission, coating surface and processing requirements may also be material.'],['Can temperable Low-E glass be sourced?','Yes. Heat-treatment or other processing requirements should be stated in the RFQ.']]}
  },
  {
    slug:'solar-control-glass',
    tr:{title:'Solar Control Cam Tedariki',metaTitle:'Solar Control Cam Tedarikçisi Türkiye | Cephe Camı RFQ | CTSEG',description:'Cephe, pencere ve ticari projeler için solar control cam tedariki, teknik eşleştirme, RFQ ve ihracat koordinasyonu.',eyebrow:'Solar Control · Cephe Performansı',lead:'Güneş kontrolü gereken projelerde cam yapısı, kaplama, ışık geçirgenliği, ısı kazancı ve işleme gereksinimini ticari teklif kapsamına dönüştürüyoruz.',applications:['Giydirme cepheler','Ticari binalar','Otel ve konut projeleri','Geniş açıklıklı pencere sistemleri'],buyers:['Cephe yüklenicileri','Mimar ve proje ekipleri','IGU üreticileri','İthalatçı ve distribütörler'],rfq:['Performans hedefleri','Cam yapısı ve kalınlık','Ebat / panel listesi','Teslim ve proje takvimi'],faq:[['Solar control cam ile Low-E aynı şey mi?','Ürün ve kaplama teknolojisine göre işlevler kesişebilir; ancak proje hedefi güneş ısı kazancı ve yalıtım performansını birlikte değerlendirmeyi gerektirir.'],['Proje performans değerlerine göre sourcing yapılabilir mi?','Evet. Mevcut performans hedefleri ve cam yapısı RFQ’ya çevrilerek uygun ürün grubu aranır.']]},
    en:{title:'Solar-Control Glass Sourcing from Türkiye',metaTitle:'Solar-Control Glass Suppliers in Turkey | Façade Glass | CTSEG',description:'Technical sourcing, RFQ and export coordination for solar-control glass used in façades, windows and commercial projects.',eyebrow:'Solar Control · Façade Performance',lead:'For solar-control projects, we convert glazing make-up, coating, light transmission, solar-gain and processing requirements into a commercial sourcing brief.',applications:['Curtain walls','Commercial buildings','Hotels and residential projects','Large-format window systems'],buyers:['Façade contractors','Architectural and project teams','IGU manufacturers','Importers and distributors'],rfq:['Performance targets','Glass make-up and thickness','Panel sizes / schedule','Delivery and project timeline'],faq:[['Are solar-control glass and Low-E glass the same?','Their functions can overlap depending on coating technology, but the project should consider solar heat gain and insulation targets together.'],['Can sourcing start from performance values?','Yes. Available project performance targets and glazing make-up can be converted into an RFQ.']]}
  },
  {
    slug:'mirror-decorative-glass',
    tr:{title:'Ayna ve Dekoratif Cam Tedariki',metaTitle:'Ayna ve Dekoratif Cam Tedarikçisi Türkiye | B2B | CTSEG',description:'Ayna, satina, boyalı ve dekoratif cam ürünleri için Türkiye’den B2B tedarik ve ihracat koordinasyonu.',eyebrow:'Ayna & Dekoratif Cam',lead:'Ayna, satina, boyalı ve dekoratif cam taleplerinde ürün tipi, renk, yüzey, ölçü, miktar ve ambalaj gereksinimini tedarik briefine dönüştürüyoruz.',applications:['Mobilya ve iç mimari','Banyo ve dekorasyon','Mağaza ve otel projeleri','Toptan dağıtım'],buyers:['Mobilya üreticileri','İç mimari tedarikçileri','Distribütörler','Proje satın alma ekipleri'],rfq:['Ürün ve yüzey tipi','Renk / ton','Kalınlık ve ebat','Miktar ve ambalaj'],faq:[['Dekoratif camda numune süreci önemli mi?','Evet. Renk, yüzey ve görünüm kritikse seri sipariş öncesi numune veya referans onayı faydalıdır.'],['Karışık ürün grupları için talep iletilebilir mi?','Evet. Birden fazla dekoratif cam kalemi aynı RFQ içinde ayrı spesifikasyonlarla değerlendirilebilir.']]},
    en:{title:'Mirror & Decorative Glass Sourcing from Türkiye',metaTitle:'Mirror & Decorative Glass Suppliers in Turkey | CTSEG',description:'B2B sourcing and export coordination from Türkiye for mirror, satin, lacquered and decorative glass products.',eyebrow:'Mirror & Decorative Glass',lead:'We convert mirror, satin, lacquered and decorative-glass requirements into a sourcing brief covering product type, finish, colour, size, quantity and packing.',applications:['Furniture and interiors','Bathroom and decorative use','Retail and hospitality projects','Wholesale distribution'],buyers:['Furniture manufacturers','Interior suppliers','Distributors','Project procurement teams'],rfq:['Product and surface type','Colour / shade','Thickness and size','Quantity and packing'],faq:[['Are samples important for decorative glass?','Yes. Where colour, finish and appearance are critical, sample or reference approval is useful before a production order.'],['Can mixed product groups be included in one request?','Yes. Multiple decorative-glass items can be evaluated under one RFQ with separate specifications.']]}
  },
  {
    slug:'architectural-project-glass',
    tr:{title:'Mimari ve Proje Bazlı Cam Tedariki',metaTitle:'Mimari Cam Tedariki Türkiye | Cephe ve Proje Camı | CTSEG',description:'Cephe, IGU, doğrama ve proje bazlı cam ihtiyaçları için Türkiye’den teknik sourcing, RFQ, üretici eşleştirme ve ihracat koordinasyonu.',eyebrow:'Mimari Cam · Proje Tedariki',lead:'Tek ürün aramak yerine proje şartnamesini, cam panel listesini ve teslim programını bütün olarak ele alıp uygun üretim ve ticari akışı koordine ediyoruz.',applications:['Giydirme cephe projeleri','Konut ve otel projeleri','Pencere ve doğrama sistemleri','Özel teknik ve endüstriyel projeler'],buyers:['Müteahhitler','Cephe yüklenicileri','Mimari satın alma ekipleri','Uluslararası proje tedarikçileri'],rfq:['Proje şartnamesi','Cam schedule / panel listesi','Teknik performans değerleri','Teslim fazları ve lokasyon'],faq:[['Proje camında RFQ ürün bazlı mı hazırlanmalı?','Mümkünse proje şartnamesi ve panel listesiyle hazırlanmalıdır; bu yaklaşım farklı cam tiplerinin aynı ticari çerçevede değerlendirilmesini sağlar.'],['Fazlı teslimat planlanabilir mi?','Üretim kapasitesi, paketleme ve lojistik uygun olduğunda fazlı teslimat ticari planlamaya dahil edilebilir.']]},
    en:{title:'Architectural & Project Glass Sourcing from Türkiye',metaTitle:'Architectural Glass Suppliers in Turkey | Project Glass | CTSEG',description:'Specification-led sourcing, RFQ, supplier matching and export coordination from Türkiye for façade, IGU, fenestration and project glass.',eyebrow:'Architectural Glass · Project Sourcing',lead:'Instead of treating each pane as an isolated product, we structure sourcing around the project specification, glass schedule and delivery programme.',applications:['Curtain-wall projects','Residential and hospitality projects','Window and fenestration systems','Special technical and industrial projects'],buyers:['General contractors','Façade contractors','Architectural procurement teams','International project suppliers'],rfq:['Project specification','Glass schedule / panel list','Performance values','Delivery phases and location'],faq:[['Should a project-glass RFQ be product-by-product?','Where possible, use the project specification and glass schedule so multiple glass types can be evaluated under one commercial framework.'],['Can phased deliveries be coordinated?','Where production capacity, packing and logistics allow, phased delivery can be incorporated into the commercial plan.']]}
  },
  {
    slug:'tempered-glass',
    tr:{title:'Temperli Cam Tedariki',metaTitle:'Temperli Cam Tedarikçisi Türkiye | Güvenlik Camı B2B | CTSEG',description:'Türkiye’den temperli güvenlik camı için teknik RFQ, işleme kapasitesi eşleştirme, proje ve ihracat koordinasyonu.',eyebrow:'Temperli Cam · Güvenlik',lead:'Temperli cam taleplerini kalınlık, ölçü, delik/kenar işleme, kullanım alanı ve proje standardına göre uygun işleme kapasitesiyle eşleştiriyoruz.',applications:['Cephe ve kapı sistemleri','Duş kabini ve iç mimari','Mobilya ve endüstriyel kullanım','Korkuluk ve güvenlik uygulamaları'],buyers:['Cam işleme tesisleri','Cephe firmaları','Mobilya üreticileri','Proje satın alma ekipleri'],rfq:['Kalınlık ve net ölçü','Delik / rodaj / kenar işleme','Adet veya m² miktarı','Teslim ülkesi ve proje standardı'],faq:[['Temperleme sonrası cam kesilebilir mi?','Hayır. Kesim, delik ve kenar işlemleri temperleme öncesinde tamamlanmalıdır.'],['Özel ölçü temperli cam için çizim gerekli mi?','Özellikle delik, çentik ve hassas işleme bulunan parçalarda teknik çizim teklif doğruluğunu artırır.']]},
    en:{title:'Tempered Glass Sourcing from Türkiye',metaTitle:'Tempered Glass Suppliers in Turkey | Safety Glass | CTSEG',description:'Technical RFQ, processor matching and export coordination for tempered safety glass sourced from Türkiye.',eyebrow:'Tempered Glass · Safety',lead:'We match tempered-glass requirements with suitable processing capacity based on thickness, dimensions, holes/edgework, end use and project standards.',applications:['Façades and doors','Shower and interior applications','Furniture and industrial use','Balustrades and safety glazing'],buyers:['Glass processors','Façade companies','Furniture manufacturers','Project procurement teams'],rfq:['Thickness and finished size','Holes / notches / edgework','Piece count or m² volume','Destination and project standard'],faq:[['Can tempered glass be cut after tempering?','No. Cutting, drilling and edge processing must be completed before heat treatment.'],['Are drawings needed for custom tempered glass?','They are strongly recommended where holes, notches or tight processing tolerances are involved.']]}
  },
  {
    slug:'insulated-glass-igu',
    tr:{title:'Isıcam / IGU Tedariki',metaTitle:'Isıcam ve IGU Tedarikçisi Türkiye | Double Glazing B2B | CTSEG',description:'Türkiye’den çift cam ve yalıtımlı cam ünitesi (IGU) tedariki; cam kombinasyonu, spacer, gaz, Low-E ve proje RFQ koordinasyonu.',eyebrow:'IGU · Isıcam · Yalıtımlı Cam',lead:'IGU taleplerini cam kombinasyonu, boşluk, spacer, gaz dolumu, Low-E/solar-control gereksinimi ve panel ölçülerine göre ticari RFQ’ya dönüştürüyoruz.',applications:['Pencere ve doğrama sistemleri','Cephe projeleri','Enerji verimli konutlar','Otel ve ticari yapılar'],buyers:['Pencere üreticileri','Cephe yüklenicileri','İnşaat firmaları','Uluslararası proje tedarikçileri'],rfq:['Cam kombinasyonu','Boşluk / spacer tipi','Gaz ve kaplama gereksinimi','Panel listesi ve miktar'],faq:[['IGU teklifinde yalnız toplam kalınlık yeterli mi?','Hayır. Her cam tabakası, boşluk genişliği, spacer, gaz ve kaplama yapısı ayrı tanımlanmalıdır.'],['Low-E veya solar control IGU içinde kombine edilebilir mi?','Evet. Proje hedeflerine göre kaplamalı cam IGU yapısında kullanılabilir.']]},
    en:{title:'Insulated Glass Unit (IGU) Sourcing from Türkiye',metaTitle:'IGU Suppliers in Turkey | Insulated & Double Glazing | CTSEG',description:'Sourcing and RFQ coordination for insulated glass units from Türkiye, including make-up, spacer, gas fill, Low-E and project requirements.',eyebrow:'IGU · Insulated Glass',lead:'We structure IGU requirements around glazing make-up, cavity, spacer, gas fill, Low-E/solar-control needs and panel dimensions.',applications:['Window and fenestration systems','Façade projects','Energy-efficient housing','Hotels and commercial buildings'],buyers:['Window manufacturers','Façade contractors','Construction companies','International project suppliers'],rfq:['Glass make-up','Cavity / spacer type','Gas and coating requirement','Panel schedule and quantity'],faq:[['Is total IGU thickness enough for an RFQ?','No. Each glass lite, cavity width, spacer, gas and coating should be defined separately.'],['Can Low-E or solar-control glass be integrated into an IGU?','Yes. Coated glass can be incorporated according to the project performance target.']]}
  },
  {
    slug:'low-iron-extra-clear-glass',
    tr:{title:'Extra Clear / Low-Iron Cam Tedariki',metaTitle:'Extra Clear Low-Iron Cam Tedarikçisi Türkiye | CTSEG',description:'Yüksek şeffaflık gerektiren mimari, vitrin, iç mimari ve solar uygulamalar için low-iron / extra clear cam tedariki.',eyebrow:'Low-Iron · Extra Clear',lead:'Düşük demir içerikli yüksek şeffaflık cam taleplerini kalınlık, ebat, optik beklenti, işleme ve proje kullanımına göre eşleştiriyoruz.',applications:['Vitrin ve premium iç mimari','Cephe ve korkuluk','Solar uygulamalar','Müze ve sergileme sistemleri'],buyers:['Mimarlar ve proje ekipleri','Cam işlemecileri','Cephe firmaları','Özel uygulama üreticileri'],rfq:['Kalınlık ve ebat','Optik / renk beklentisi','Temperleme veya lamine ihtiyacı','Miktar ve kullanım alanı'],faq:[['Low-iron cam ile standart float camın farkı nedir?','Düşük demir içeriği özellikle kalın camlarda daha yüksek şeffaflık ve daha düşük yeşil tonu sağlar.'],['Low-iron cam temperlenebilir veya lamine edilebilir mi?','Uygun ürün ve işleme hattı seçildiğinde bu işlemler proje kapsamında değerlendirilebilir.']]},
    en:{title:'Low-Iron / Extra-Clear Glass Sourcing from Türkiye',metaTitle:'Low-Iron Extra-Clear Glass Suppliers in Turkey | CTSEG',description:'Sourcing from Türkiye for low-iron and extra-clear glass used in architectural, retail, interior and solar applications.',eyebrow:'Low-Iron · Extra Clear',lead:'We match low-iron high-transparency glass requirements according to thickness, dimensions, optical expectations, processing and end use.',applications:['Retail and premium interiors','Façades and balustrades','Solar applications','Museums and display systems'],buyers:['Architects and project teams','Glass processors','Façade companies','Special-application manufacturers'],rfq:['Thickness and dimensions','Optical / colour expectation','Tempering or lamination need','Quantity and end use'],faq:[['How does low-iron glass differ from standard float glass?','Reduced iron content generally provides higher transparency and less green tint, especially in thicker glass.'],['Can low-iron glass be tempered or laminated?','Yes, subject to suitable product and processing capacity.']]}
  },
  {
    slug:'processed-glass-cut-to-size',
    tr:{title:'İşlenmiş ve Ölçüye Kesilmiş Cam Tedariki',metaTitle:'Ölçüye Kesilmiş İşlenmiş Cam Türkiye | B2B Tedarik | CTSEG',description:'Kesim, rodaj, delik, temperleme, lamine ve proje çizimine göre işlenmiş cam için Türkiye’den B2B tedarik ve ihracat koordinasyonu.',eyebrow:'İşlenmiş Cam · Cut-to-Size',lead:'Standart levha yerine çizim veya kesim listesine göre işlenmiş cam gereken projelerde teknik dosyayı üretime hazır RFQ formatına dönüştürüyoruz.',applications:['Mobilya ve mağaza ekipmanı','Cephe ve doğrama','Makine ve endüstriyel ekipman','Özel mimari uygulamalar'],buyers:['OEM üreticileri','Proje firmaları','Cam montaj ekipleri','İthalatçı ve distribütörler'],rfq:['CAD / teknik çizim','Kesim ölçüleri ve tolerans','Delik, çentik, kenar işlemleri','Adet, paketleme ve teslim sırası'],faq:[['Kesim listesiyle fiyat alınabilir mi?','Evet. Parça bazlı ölçü, adet ve işleme detayları net olduğunda teklif daha sağlıklı hazırlanır.'],['Paketleme proje sırasına göre yapılabilir mi?','Uygun üretim ve paketleme düzeninde kat, cephe veya montaj sırasına göre etiketleme talep edilebilir.']]},
    en:{title:'Processed & Cut-to-Size Glass Sourcing from Türkiye',metaTitle:'Processed Glass Suppliers in Turkey | Cut-to-Size | CTSEG',description:'B2B sourcing and export coordination from Türkiye for cut, edged, drilled, tempered, laminated and drawing-based processed glass.',eyebrow:'Processed Glass · Cut-to-Size',lead:'For projects requiring processed glass rather than stock sheets, we convert drawings and cut lists into production-ready RFQs.',applications:['Furniture and retail equipment','Façades and fenestration','Machinery and industrial equipment','Special architectural applications'],buyers:['OEM manufacturers','Project companies','Glass installation teams','Importers and distributors'],rfq:['CAD / technical drawing','Cut sizes and tolerances','Holes, notches and edgework','Piece count, packing and sequence'],faq:[['Can a quotation be based on a cut list?','Yes. Piece-level dimensions, quantities and processing details improve quotation accuracy.'],['Can packing follow installation sequence?','Where production and packing allow, crates can be labelled by floor, façade zone or installation sequence.']]}
  },
  {
    slug:'glass-processing-services',
    tr:{title:'Cam İşleme Hizmetleri ve Processor Eşleştirme',metaTitle:'Cam İşleme Hizmetleri Türkiye | CNC, Rodaj, Delik | CTSEG',description:'Türkiye’de CNC cam işleme, rodaj, delik, çentik, kesim, temperleme ve lamine kabiliyeti için processor araştırması, teknik RFQ ve B2B sourcing koordinasyonu.',eyebrow:'Cam İşleme · Processor Sourcing',lead:'Cam işleme taleplerini yalnız ürün adıyla değil; çizim, tolerans, kenar tipi, delik/çentik, CNC, temperleme, lamine ve paketleme gereksinimleriyle üretime hazır RFQ formatına dönüştürüyoruz.',applications:['CNC ve özel şekil kesim','Rodaj, polisaj ve kenar işleme','Delik, çentik ve özel toleranslar','Temperleme ve lamine öncesi hazırlık','Mobilya, cephe, makine ve proje camı'],buyers:['OEM ve endüstriyel üreticiler','Cephe ve iç mimari firmaları','Cam montaj ve sistem firmaları','Uluslararası proje satın alma ekipleri'],rfq:['CAD / teknik çizim','Cam tipi, kalınlık ve ebat','Kenar, delik, çentik ve CNC detayları','Tolerans ve kalite beklentisi','Adet, paketleme ve teslim sırası'],faq:[['Cam işleme için yalnız ölçü listesi yeterli mi?','Basit kesim işlerinde yeterli olabilir; ancak delik, çentik, radius, CNC veya özel tolerans varsa teknik çizim gerekir.'],['İşleme sonrası temperleme veya lamine koordine edilebilir mi?','Uygun processor kapasitesi bulunduğunda kesim ve işleme, ardından temperleme veya lamine akışı tek RFQ içinde planlanabilir.']]},
    en:{title:'Glass Processing & Processor Sourcing in Türkiye',metaTitle:'Glass Processors in Turkey | CNC, Edging & Drilling | CTSEG',description:'Processor sourcing in Türkiye for CNC glass machining, edging, drilling, notches, cutting, tempering and lamination with technical RFQ and B2B coordination.',eyebrow:'Glass Processing · Processor Sourcing',lead:'We structure processing requirements around drawings, tolerances, edge type, holes/notches, CNC, tempering, lamination and packing rather than treating processed glass as a generic product.',applications:['CNC and shaped cutting','Grinding, polishing and edge processing','Holes, notches and special tolerances','Pre-processing before tempering or lamination','Furniture, façade, machinery and project glass'],buyers:['OEM and industrial manufacturers','Façade and interior companies','Glass installers and system companies','International project procurement teams'],rfq:['CAD / technical drawing','Glass type, thickness and dimensions','Edge, hole, notch and CNC details','Tolerance and quality expectation','Piece count, packing and delivery sequence'],faq:[['Is a cut list enough for glass processing?','For simple cutting it may be, but holes, notches, radii, CNC or tight tolerances should be supported by drawings.'],['Can tempering or lamination be coordinated after machining?','Yes, where suitable processor capacity exists, cutting/machining and downstream tempering or lamination can be structured under one RFQ.']]}
  },
  {
    slug:'curved-glass',
    tr:{title:'Bombeli / Kavisli Cam Tedariki',metaTitle:'Bombeli Kavisli Cam Tedarikçisi Türkiye | Curved Glass | CTSEG',description:'Mimari, iç mimari, mobilya ve özel projeler için Türkiye’den bombeli/kavisli cam tedariki; kalıp, radius, temper/lamine ve teknik RFQ koordinasyonu.',eyebrow:'Curved Glass · Proje Camı',lead:'Bombeli cam taleplerini radius, yay yüksekliği, kalınlık, ölçü, temper/lamine ihtiyacı, kalıp gereksinimi ve adet bilgisine göre uygun işleme kapasitesiyle eşleştiriyoruz.',applications:['Cephe ve giriş sistemleri','Kavisli korkuluk ve merdivenler','İç mimari ve retail uygulamaları','Mobilya ve özel tasarım parçalar','Otel ve ticari proje camları'],buyers:['Mimar ve proje ekipleri','Cephe yüklenicileri','İç mimari üreticileri','Cam sistem ve montaj firmaları'],rfq:['Radius / geometri ve çizim','Kalınlık ve net ölçü','Temperli veya lamine yapı','Kalıp gereksinimi','Adet ve teslim programı'],faq:[['Bombeli cam teklifinde en kritik bilgi nedir?','Radius ve geometriyi gösteren teknik çizim, kalınlık, ölçü, adet ve gerekli ısıl/lamine işlemler teklif doğruluğunu belirler.'],['Kalıp maliyeti her projede olur mu?','Üretim yöntemine ve geometriye göre özel kalıp gerekebilir; bu durum RFQ aşamasında processor tarafından netleştirilir.']]},
    en:{title:'Curved / Bent Glass Sourcing from Türkiye',metaTitle:'Curved Glass Suppliers in Turkey | Bent Glass | CTSEG',description:'Sourcing from Türkiye for curved/bent glass used in architectural, interior, furniture and special projects with radius, mould, tempering/lamination and technical RFQ coordination.',eyebrow:'Curved Glass · Project Sourcing',lead:'We match curved-glass requirements with suitable processing capacity based on radius, geometry, thickness, dimensions, tempering/lamination need, mould requirement and quantity.',applications:['Façades and entrance systems','Curved balustrades and stairs','Interior and retail applications','Furniture and custom-designed parts','Hospitality and commercial projects'],buyers:['Architectural and project teams','Façade contractors','Interior manufacturers','Glass system and installation companies'],rfq:['Radius / geometry and drawing','Thickness and finished dimensions','Tempered or laminated build-up','Mould requirement','Quantity and delivery programme'],faq:[['What is critical in a curved-glass RFQ?','A drawing showing radius and geometry, plus thickness, dimensions, quantity and required heat/lamination processing, is essential.'],['Is a mould cost always required?','Not always. It depends on production method and geometry and should be confirmed by the processor during RFQ.']]}
  },
  {
    slug:'ceramic-printed-glass',
    tr:{title:'Seramik Baskılı ve Emaye Cam Tedariki',metaTitle:'Seramik Baskılı Cam Türkiye | Digital Printed Glass B2B | CTSEG',description:'Cephe, spandrel, iç mimari ve proje uygulamaları için Türkiye’den seramik dijital baskılı, emaye ve silk-screen cam tedariki ve teknik RFQ koordinasyonu.',eyebrow:'Ceramic Printed Glass · Mimari Cam',lead:'Seramik baskı ve emaye cam taleplerini desen, renk, baskı kapsamı, cam tipi, temperleme, ebat ve görsel onay süreciyle birlikte teknik RFQ’ya dönüştürüyoruz.',applications:['Cephe ve spandrel camları','İç mimari bölmeler','Retail ve marka uygulamaları','Dekoratif panel ve kapılar','Özel desenli proje camları'],buyers:['Cephe ve mimari sistem firmaları','İç mimari ve fit-out ekipleri','Mimarlar ve tasarım ofisleri','Proje satın alma ekipleri'],rfq:['Baskı dosyası / desen','RAL/Pantone veya renk referansı','Cam tipi, kalınlık ve ebat','Tam yüzey / noktasal baskı kapsamı','Temperleme ve lamine gereksinimi','Numune / mock-up beklentisi'],faq:[['Dijital seramik baskıda numune gerekli mi?','Renk, opaklık ve görsel eşleşme kritikse seri üretim öncesi numune veya mock-up onayı önerilir.'],['Baskılı cam temperlenebilir mi?','Seramik baskı süreçleri çoğunlukla ısıl işlemle ilişkilidir; seçilen sistem ve cam yapısı processor tarafından proje bazında doğrulanmalıdır.']]},
    en:{title:'Ceramic Printed Glass Sourcing from Türkiye',metaTitle:'Ceramic Printed Glass Suppliers in Turkey | CTSEG',description:'Technical sourcing from Türkiye for ceramic digital-printed, enamelled and silk-screen glass used in façades, spandrels, interiors and project applications.',eyebrow:'Ceramic Printed Glass · Architectural Glass',lead:'We structure ceramic-print and enamelled-glass requirements around artwork, colour, print coverage, glass type, tempering, dimensions and visual approval workflow.',applications:['Façade and spandrel glazing','Interior partitions','Retail and branded applications','Decorative panels and doors','Custom-pattern project glass'],buyers:['Façade and architectural system companies','Interior and fit-out teams','Architects and design offices','Project procurement teams'],rfq:['Artwork / print file','RAL/Pantone or colour reference','Glass type, thickness and dimensions','Full-surface / partial print coverage','Tempering and lamination requirement','Sample / mock-up expectation'],faq:[['Are samples needed for ceramic digital printing?','Where colour, opacity and visual matching are important, sample or mock-up approval is recommended before production.'],['Can printed glass be tempered?','Ceramic printing processes are commonly integrated with heat treatment, but the selected system and glass build-up should be confirmed project-by-project.']]}
  },
  {
    slug:'heat-strengthened-glass',
    tr:{title:'Heat-Strengthened / Yarı Temperli Cam Tedariki',metaTitle:'Heat-Strengthened Cam Türkiye | Yarı Temperli Cam B2B | CTSEG',description:'Cephe, IGU ve proje uygulamaları için Türkiye’den heat-strengthened / yarı temperli cam tedariki; teknik RFQ, processor eşleştirme ve ihracat koordinasyonu.',eyebrow:'Heat-Strengthened Glass · Proje Camı',lead:'Heat-strengthened cam taleplerini kalınlık, ebat, kullanım alanı, cam build-up, kaplama, kenar işleme ve proje standardına göre uygun ısıl işlem kapasitesiyle eşleştiriyoruz.',applications:['Cephe ve spandrel uygulamaları','IGU / yalıtımlı cam üniteleri','Lamine proje camları','Isıl gerilimin azaltılması gereken mimari uygulamalar'],buyers:['Cephe yüklenicileri','IGU üreticileri','Mimari cam işlemecileri','Proje satın alma ekipleri'],rfq:['Cam tipi ve kalınlık','Net ölçü / panel listesi','Kaplama veya lamine yapısı','Kenar / delik işleme','Proje standardı ve teslim lokasyonu'],faq:[['Heat-strengthened cam temperli camla aynı mıdır?','Hayır. Isıl işlem seviyesi ve kırılma davranışı farklıdır; ürün seçimi proje gereksinimine göre yapılmalıdır.'],['Heat-strengthened cam lamine veya IGU içinde kullanılabilir mi?','Uygun yapı ve processor kapasitesinde proje gereksinimine göre değerlendirilebilir.']]},
    en:{title:'Heat-Strengthened Glass Sourcing from Türkiye',metaTitle:'Heat-Strengthened Glass Suppliers in Turkey | CTSEG',description:'Technical sourcing, processor matching and export coordination for heat-strengthened glass from Türkiye used in façades, IGUs and project glazing.',eyebrow:'Heat-Strengthened Glass · Project Sourcing',lead:'We match heat-strengthened glass requirements with suitable heat-treatment capacity based on thickness, dimensions, end use, glass build-up, coating, edgework and project standard.',applications:['Façade and spandrel applications','IGU / insulated glass units','Laminated project glazing','Architectural applications requiring reduced thermal-stress risk'],buyers:['Façade contractors','IGU manufacturers','Architectural glass processors','Project procurement teams'],rfq:['Glass type and thickness','Finished dimensions / panel schedule','Coating or laminate build-up','Edge / hole processing','Project standard and destination'],faq:[['Is heat-strengthened glass the same as fully tempered glass?','No. The heat-treatment level and breakage behaviour differ, so selection should follow the project requirement.'],['Can heat-strengthened glass be laminated or used in an IGU?','It can be evaluated in suitable build-ups where processor capability and project requirements allow.']]}
  },
  {
    slug:'patterned-frosted-satin-glass',
    tr:{title:'Desenli, Buzlu ve Satina Cam Tedariki',metaTitle:'Desenli Buzlu Satina Cam Türkiye | B2B Tedarik | CTSEG',description:'Mahremiyet, dekorasyon ve iç mimari uygulamalar için Türkiye’den desenli, buzlu/frosted ve satina cam tedariki; numune, ebat, renk ve B2B RFQ koordinasyonu.',eyebrow:'Patterned · Frosted · Satin Glass',lead:'Desenli, buzlu ve satina cam taleplerini desen/yüzey, renk, kalınlık, ebat, temperleme ihtiyacı, numune onayı ve paketleme gereksinimine göre uygun tedarik veya işleme kanalıyla eşleştiriyoruz.',applications:['İç mekân bölmeleri ve kapılar','Banyo ve mahremiyet camları','Mobilya ve dolap kapakları','Retail ve otel iç mimarisi','Dekoratif panel ve aydınlatma uygulamaları'],buyers:['İç mimari ve fit-out firmaları','Mobilya üreticileri','Cam distribütörleri','Kapı ve bölme sistemi üreticileri','Proje satın alma ekipleri'],rfq:['Desen / yüzey referansı','Renk veya ton','Kalınlık ve levha / net ölçü','Temperleme veya işleme ihtiyacı','Miktar ve numune beklentisi'],faq:[['Patterned ve frosted glass aynı şey midir?','Hayır. Yüzey veya üretim yöntemi farklı olabilir; RFQ’da istenen desen, matlık ve görünüm referansı açıkça tanımlanmalıdır.'],['Seri sipariş öncesi numune istenebilir mi?','Renk, desen ve mahremiyet seviyesi kritikse mevcut numune veya referans onayı seri sipariş öncesi faydalıdır.']]},
    en:{title:'Patterned, Frosted & Satin Glass Sourcing from Türkiye',metaTitle:'Patterned & Frosted Glass Suppliers in Turkey | CTSEG',description:'B2B sourcing from Türkiye for patterned, frosted and satin glass used in privacy, decorative and interior applications, including sample, size, colour and export coordination.',eyebrow:'Patterned · Frosted · Satin Glass',lead:'We match patterned, frosted and satin-glass requirements with suitable supply or processing capacity based on pattern/finish, colour, thickness, dimensions, tempering need, sample approval and packing.',applications:['Interior partitions and doors','Bathroom and privacy glazing','Furniture and cabinet fronts','Retail and hospitality interiors','Decorative panels and lighting applications'],buyers:['Interior and fit-out companies','Furniture manufacturers','Glass distributors','Door and partition-system manufacturers','Project procurement teams'],rfq:['Pattern / surface reference','Colour or tint','Thickness and sheet / finished size','Tempering or processing need','Quantity and sample expectation'],faq:[['Are patterned and frosted glass the same?','No. Surface and production methods may differ, so the required pattern, opacity and appearance should be clearly referenced in the RFQ.'],['Can samples be requested before a production order?','Where colour, pattern and privacy level are critical, sample or reference approval is useful before serial production.']]}
  },
  {
    slug:'heat-soak-tested-glass',
    tr:{
      title:'Heat Soak Testli Cam Tedariki',
      metaTitle:'Heat Soak Testli Cam Türkiye | EN 14179 B2B | CTSEG',
      description:'Cephe ve kritik mimari uygulamalar için Türkiye’den heat soak testli temperli cam tedariki; EN 14179 odaklı processor araştırması, teknik RFQ ve proje koordinasyonu.',
      eyebrow:'Heat Soak Tested Glass · Façade Safety',
      lead:'Heat soak test gerektiren temperli cam taleplerini cam tipi, kalınlık, ebat, kaplama, işleme, test standardı, raporlama ve proje teslim gereksinimlerine göre uygun processor kapasitesiyle eşleştiriyoruz.',
      applications:['Yüksek katlı cephe ve curtain-wall projeleri','Spandrel ve dış cephe camları','Kritik güvenlik gereksinimli temperli cam uygulamaları','Proje şartnamesinde heat soak test istenen mimari camlar'],
      buyers:['Cephe yüklenicileri ve sistem firmaları','Mimari cam processorları','Ana yüklenici ve proje satın alma ekipleri','Façade consultant ve teknik ofisler'],
      rfq:['Cam tipi, kalınlık ve net ölçü','Kaplama / baskı / diğer işlem bilgisi','Temperleme ve heat soak test standardı','Panel listesi / glass schedule','Test raporu veya dokümantasyon beklentisi','Teslim lokasyonu ve proje fazı'],
      faq:[
        ['Heat soak test temperleme ile aynı işlem midir?','Hayır. Heat soak test, temperlenmiş camda belirli inklüzyon kaynaklı spontan kırılma riskini azaltmaya yönelik ilave bir test sürecidir; proje standardı ayrıca belirtilmelidir.'],
        ['Heat soak test için hangi standardın yazılması gerekir?','Proje ve pazar gereksinimine göre ilgili standardın RFQ’da açıkça belirtilmesi gerekir; Avrupa projelerinde EN 14179 referansı sık görülür.'],
        ['Test raporu veya izlenebilirlik istenebilir mi?','Proje şartnamesi gerektiriyorsa raporlama, panel işaretleme ve izlenebilirlik beklentisi RFQ aşamasında processor ile doğrulanmalıdır.']
      ]
    },
    en:{
      title:'Heat-Soak Tested Glass Sourcing from Türkiye',
      metaTitle:'Heat-Soak Tested Glass in Turkey | EN 14179 | CTSEG',
      description:'Technical sourcing from Türkiye for heat-soak tested tempered glass used in façades and critical architectural applications, including EN 14179-oriented processor matching and RFQ coordination.',
      eyebrow:'Heat-Soak Tested Glass · Façade Safety',
      lead:'We match heat-soak tested tempered-glass requirements with suitable processing capacity according to glass type, thickness, dimensions, coating, processing, test standard, reporting and project-delivery requirements.',
      applications:['High-rise façade and curtain-wall projects','Spandrel and exterior architectural glazing','Tempered glazing with enhanced risk-control requirements','Architectural glass specified with heat-soak testing'],
      buyers:['Façade contractors and system companies','Architectural glass processors','Main contractors and project procurement teams','Façade consultants and technical offices'],
      rfq:['Glass type, thickness and finished dimensions','Coating / print / other processing details','Tempering and heat-soak test standard','Panel list / glass schedule','Test report or traceability requirement','Destination and project phase'],
      faq:[
        ['Is heat-soak testing the same as tempering?','No. Heat-soak testing is an additional process applied to tempered glass to reduce the risk associated with certain inclusions; the project test requirement should be specified separately.'],
        ['Which standard should be referenced?','The applicable project and market standard should be stated explicitly in the RFQ; EN 14179 is commonly referenced for European project requirements.'],
        ['Can test reporting and traceability be requested?','Where required by the project, reporting, panel identification and traceability expectations should be confirmed with the processor at RFQ stage.']
      ]
    }
  },
  {
    slug:'fire-rated-glass',
    tr:{
      title:'Yangına Dayanımlı / Fire-Rated Cam Tedariki',
      metaTitle:'Yangına Dayanımlı Cam Türkiye | Fire Rated Glass B2B | CTSEG',
      description:'Türkiye’den yangına dayanımlı cam ve sertifikalı fire-rated glazing çözümleri için teknik sourcing; E/EW/EI sınıfları, test dokümanı, RFQ ve proje tedarik koordinasyonu.',
      eyebrow:'Fire-Rated Glass · Certified Project Glazing',
      lead:'Yangına dayanımlı cam taleplerini yalnız cam kalınlığına göre değil; E/EW/EI performans sınıfı, süre, test standardı, çerçeve/sistem uyumu, net ölçü ve proje dokümantasyonuna göre uygun tedarik kanalıyla eşleştiriyoruz.',
      applications:['Yangın kapıları ve kaçış koridorları','Ofis ve otel bölme sistemleri','Hastane, okul ve kamu yapıları','Atrium, iç cephe ve yangın bölümlendirme sistemleri','Proje şartnamesinde E/EW/EI sınıfı istenen glazing sistemleri'],
      buyers:['Yangın kapısı ve bölme sistemi üreticileri','Cephe ve glazing yüklenicileri','Ana yüklenici ve proje satın alma ekipleri','Mimar, danışman ve teknik ofisler','Yapı malzemesi ithalatçıları ve distribütörler'],
      rfq:['Gerekli sınıf: E / EW / EI','Gerekli dayanım süresi','Cam veya sistem ölçüleri','Çerçeve / kapı / bölme sistemi bilgisi','Uygulanacak standard ve gerekli test dokümanı','Adet, proje lokasyonu ve teslim fazı'],
      faq:[
        ['Fire-rated camda yalnız cam ürününü seçmek yeterli midir?','Her zaman değil. Yangın performansı çoğu projede cam, çerçeve, conta ve montaj detaylarıyla birlikte test edilmiş sistem kapsamında değerlendirilir.'],
        ['E, EW ve EI sınıfları aynı performansı mı ifade eder?','Hayır. Bütünlük, radyasyon ve ısı yalıtımı kriterleri farklıdır; proje şartnamesindeki sınıf ve süre aynen RFQ’ya aktarılmalıdır.'],
        ['Sertifika ve test raporları teklif öncesi doğrulanabilir mi?','Evet. Talep edilen performans sınıfı ve sistem konfigürasyonuna ait uygun dokümantasyonun mevcut olup olmadığı teklif öncesi kontrol edilmelidir.']
      ]
    },
    en:{
      title:'Fire-Rated Glass Sourcing from Türkiye',
      metaTitle:'Fire-Rated Glass Suppliers in Turkey | E, EW, EI | CTSEG',
      description:'Technical sourcing from Türkiye for fire-rated glass and certified glazing systems, structured around E/EW/EI classifications, test documentation, RFQs and project-delivery requirements.',
      eyebrow:'Fire-Rated Glass · Certified Project Glazing',
      lead:'We structure fire-rated glass requirements around the required E/EW/EI performance class, duration, test standard, frame/system compatibility, finished dimensions and project documentation rather than treating fire glass as a generic thickness-based product.',
      applications:['Fire doors and protected escape routes','Office and hospitality partition systems','Hospitals, schools and public buildings','Atriums, internal façades and fire-compartment systems','Glazing systems specified with E/EW/EI performance'],
      buyers:['Fire-door and partition-system manufacturers','Façade and glazing contractors','Main contractors and project procurement teams','Architects, consultants and technical offices','Building-product importers and distributors'],
      rfq:['Required class: E / EW / EI','Required resistance duration','Glass or system dimensions','Frame / door / partition system information','Applicable standard and required test documentation','Quantity, project location and delivery phase'],
      faq:[
        ['Is selecting only the glass product enough for fire-rated glazing?','Not always. Fire performance is often assessed for a tested system combining glass, frame, seals and installation details.'],
        ['Do E, EW and EI represent the same performance?','No. Integrity, radiation and insulation criteria differ, so the specified class and duration should be transferred accurately into the RFQ.'],
        ['Can certification and test reports be checked before quotation?','Yes. Availability and applicability of documentation for the required performance class and system configuration should be verified before commercial commitment.']
      ]
    }
  },
  {
    slug:'shower-enclosure-glass',
    tr:{
      title:'Duşakabin ve Shower Enclosure Camı Tedariki',
      metaTitle:'Duşakabin Camı Türkiye | Shower Enclosure Glass B2B | CTSEG',
      description:'Duşakabin, walk-in shower ve banyo sistemleri için Türkiye’den özel ölçü temperli cam, delik/çentik/CNC işleme ve OEM B2B tedarik koordinasyonu.',
      eyebrow:'Shower Enclosure Glass · OEM & Project Sourcing',
      lead:'Duşakabin camı taleplerini yalnız “temperli cam” olarak değil; net ölçü, kalınlık, renk/yüzey, delik ve menteşe işleme, kenar kalitesi, baskı/kaplama, seri adet ve paketleme yapısıyla üretime hazır RFQ’ya dönüştürüyoruz.',
      applications:['Frameless ve framed duşakabin sistemleri','Walk-in shower panelleri','Otel ve konut banyo projeleri','OEM duşakabin üretimi','Özel ölçü banyo camı'],
      buyers:['Duşakabin üreticileri ve markaları','Banyo sistemi distribütörleri','Otel ve konut proje ekipleri','OEM/private-label alıcıları','Cam ve aksesuar toptancıları'],
      rfq:['Net cam ölçüsü / teknik çizim','Cam kalınlığı ve renk/yüzey','Delik, çentik, menteşe ve CNC detayları','Kenar işleme ve temperleme','Baskı / kaplama / nano yüzey ihtiyacı','Model başına adet ve paketleme'],
      faq:[
        ['Duşakabin camı için yalnız en-boy ölçüsü yeterli mi?','Basit panellerde başlangıç olabilir; ancak menteşe, kulp, sabitleme ve özel geometri varsa delik/çentik konumlarını gösteren çizim gerekir.'],
        ['OEM veya private-label seri üretim yapılabilir mi?','Uygun processor ve sistem üreticisi bulunduğunda model, adet, kalite standardı, paketleme ve markalama gereksinimine göre seri RFQ yürütülebilir.'],
        ['Renkli, frosted veya baskılı duşakabin camı değerlendirilebilir mi?','Evet. Yüzey, renk, baskı ve temperleme uyumluluğu ürün bazında doğrulanmalıdır.']
      ]
    },
    en:{
      title:'Shower Enclosure Glass Sourcing from Türkiye',
      metaTitle:'Shower Enclosure Glass Suppliers in Turkey | OEM | CTSEG',
      description:'B2B sourcing from Türkiye for custom-size tempered shower-enclosure glass with holes, notches, CNC processing, decorative finishes and OEM packing coordination.',
      eyebrow:'Shower Enclosure Glass · OEM & Project Sourcing',
      lead:'We structure shower-glass requirements around finished dimensions, thickness, tint/finish, holes and hinge processing, edge quality, printing/coating, serial quantities and packing rather than treating the requirement as generic tempered glass.',
      applications:['Frameless and framed shower enclosures','Walk-in shower panels','Hotel and residential bathroom projects','OEM shower-enclosure production','Custom-size bathroom glazing'],
      buyers:['Shower-enclosure manufacturers and brands','Bathroom-system distributors','Hotel and residential project teams','OEM/private-label buyers','Glass and hardware wholesalers'],
      rfq:['Finished glass dimensions / drawing','Glass thickness and tint/finish','Hole, notch, hinge and CNC details','Edge processing and tempering','Print / coating / surface requirement','Quantity by model and packing'],
      faq:[
        ['Are width and height enough for a shower-glass quotation?','They may be enough for simple panels, but hinge, handle, fixing and custom-geometry requirements should be supported by drawings showing holes and notches.'],
        ['Can OEM or private-label serial production be sourced?','Yes. Where suitable processor and system capacity exists, RFQs can be structured around model, quantity, quality standard, packing and branding requirements.'],
        ['Can tinted, frosted or printed shower glass be evaluated?','Yes. Surface, colour, print and tempering compatibility should be confirmed by product.']
      ]
    }
  },
  {
    slug:'balustrade-railing-glass',
    tr:{
      title:'Korkuluk ve Railing Camı Tedariki',
      metaTitle:'Korkuluk Camı Türkiye | Balustrade Railing Glass B2B | CTSEG',
      description:'Balkon, merdiven, teras ve korkuluk sistemleri için Türkiye’den temperli, lamine, heat-soak testli ve özel işlenmiş railing glass tedariki.',
      eyebrow:'Balustrade & Railing Glass · Safety Glazing',
      lead:'Korkuluk camı taleplerini cam build-up, temper/heat-strengthened seçimi, lamine ara katman, heat soak test, kenar kalitesi, delik/bağlantı noktaları ve montaj sistemiyle birlikte RFQ’ya dönüştürüyoruz.',
      applications:['Balkon ve teras korkulukları','Merdiven ve galeri boşluğu korkulukları','Havuz çevresi camları','AVM ve otel railing sistemleri','Frameless ve point-fixed korkuluklar'],
      buyers:['Railing ve balustrade sistem üreticileri','Alüminyum ve paslanmaz sistem firmaları','Cephe ve glazing yüklenicileri','Proje satın alma ekipleri','Yapı ürünleri distribütörleri'],
      rfq:['Cam build-up ve kalınlık','Temperli / heat-strengthened / lamine gereksinimi','Ara katman tipi veya performans hedefi','Net ölçü, delik ve bağlantı detayları','Kenar işleme / polisaj','HST, test veya belge gereksinimi'],
      faq:[
        ['Korkuluk camı tek kat temperli olabilir mi?','Uygun yapı proje, montaj sistemi ve yerel gereksinimlere bağlıdır. Güvenlik kritik uygulamalarda lamine yapı ve kırılma sonrası davranış özellikle değerlendirilmelidir.'],
        ['Heat soak test her railing projesinde gerekli midir?','Hayır. Proje şartnamesi, cam yapısı ve risk yaklaşımına göre istenebilir; talep varsa RFQ’da açıkça belirtilmelidir.'],
        ['Delik ve kenar işleme neden önemlidir?','Point-fixed veya özel bağlantılı sistemlerde delik konumu, tolerans ve kenar kalitesi montaj uyumu ve cam performansı açısından kritiktir.']
      ]
    },
    en:{
      title:'Balustrade & Railing Glass Sourcing from Türkiye',
      metaTitle:'Balustrade Glass Suppliers in Turkey | Railing Glass | CTSEG',
      description:'B2B sourcing from Türkiye for tempered, laminated, heat-soak tested and custom-processed glass used in balconies, stairs, terraces and railing systems.',
      eyebrow:'Balustrade & Railing Glass · Safety Glazing',
      lead:'We structure railing-glass RFQs around glass build-up, tempered or heat-strengthened selection, laminate interlayer, heat-soak testing, edge quality, holes/fixings and the intended mounting system.',
      applications:['Balcony and terrace balustrades','Stair and void-edge railings','Pool-surround glazing','Mall and hospitality railing systems','Frameless and point-fixed balustrades'],
      buyers:['Railing and balustrade-system manufacturers','Aluminium and stainless-system companies','Façade and glazing contractors','Project procurement teams','Building-product distributors'],
      rfq:['Glass build-up and thickness','Tempered / heat-strengthened / laminated requirement','Interlayer type or performance target','Finished dimensions, holes and fixing details','Edge processing / polishing','HST, test or documentation requirement'],
      faq:[
        ['Can balustrade glass be a single tempered lite?','The appropriate build-up depends on the project, mounting system and local requirements. In safety-critical applications, laminated construction and post-breakage behaviour require particular attention.'],
        ['Is heat-soak testing required for every railing project?','No. It may be specified depending on the project, glass build-up and risk approach; if required it should be stated explicitly in the RFQ.'],
        ['Why do holes and edge processing matter?','For point-fixed or special mounting systems, hole position, tolerances and edge quality are critical to installation compatibility and glass performance.']
      ]
    }
  },
  {
    slug:'office-partition-interior-glass',
    tr:{
      title:'Ofis Bölme ve İç Mimari Cam Tedariki',
      metaTitle:'Ofis Bölme Camı Türkiye | Interior Partition Glass B2B | CTSEG',
      description:'Ofis, toplantı odası, retail ve iç mimari bölme sistemleri için Türkiye’den temperli, lamine, akustik, frosted ve baskılı cam tedariki.',
      eyebrow:'Interior & Partition Glass · Project Sourcing',
      lead:'İç mimari ve ofis bölme camı taleplerini güvenlik, akustik hedef, mahremiyet, kapı/sistem entegrasyonu, net ölçü, delik/kenar işleme ve görsel yüzey gereksinimleriyle birlikte yapılandırıyoruz.',
      applications:['Tek ve çift cam ofis bölmeleri','Toplantı odası ve yönetici ofisleri','Retail ve showroom bölmeleri','Otel ve ticari iç mekânlar','Cam kapı ve frameless iç sistemler'],
      buyers:['Ofis bölme sistemi üreticileri','İç mimari ve fit-out firmaları','Cam kapı/sistem üreticileri','Mobilya ve contract üreticileri','Proje satın alma ekipleri'],
      rfq:['Tek / çift cam sistem bilgisi','Temperli veya lamine yapı','Akustik veya privacy hedefi','Net ölçü / panel schedule','Delik, çentik, kapı ve fitting detayları','Frosted / baskı / renk / dekoratif yüzey'],
      faq:[
        ['Temperli mi lamine mi tercih edilmeli?','Seçim panel boyutu, darbe riski, güvenlik, akustik hedef ve sistem detayına bağlıdır; bazı projelerde farklı cam tipleri birlikte kullanılır.'],
        ['Akustik hedef RFQ’da belirtilmeli mi?','Evet. Özellikle toplantı odası ve yönetici bölmelerinde sistem performansı yalnız cam kalınlığına bağlı değildir; hedef değer ve sistem yapısı birlikte verilmelidir.'],
        ['Frosted veya baskılı privacy cam koordine edilebilir mi?','Evet. Matlık, desen, baskı alanı, renk ve numune onayı gereksinimi RFQ’da tanımlanabilir.']
      ]
    },
    en:{
      title:'Office Partition & Interior Glass Sourcing from Türkiye',
      metaTitle:'Office Partition Glass Suppliers in Turkey | CTSEG',
      description:'B2B sourcing from Türkiye for tempered, laminated, acoustic, frosted and printed glass used in offices, meeting rooms, retail and interior partition systems.',
      eyebrow:'Interior & Partition Glass · Project Sourcing',
      lead:'We structure interior and office-partition glass requirements around safety, acoustic targets, privacy, door/system integration, finished sizes, holes/edgework and visual-surface requirements.',
      applications:['Single- and double-glazed office partitions','Meeting rooms and executive offices','Retail and showroom partitions','Hospitality and commercial interiors','Glass doors and frameless interior systems'],
      buyers:['Office-partition system manufacturers','Interior and fit-out companies','Glass-door and system manufacturers','Furniture and contract manufacturers','Project procurement teams'],
      rfq:['Single / double glazing system information','Tempered or laminated build-up','Acoustic or privacy target','Finished dimensions / panel schedule','Hole, notch, door and fitting details','Frosted / print / colour / decorative finish'],
      faq:[
        ['Should partition glass be tempered or laminated?','Selection depends on panel size, impact risk, safety, acoustic target and system detail; some projects combine different glass types.'],
        ['Should an acoustic target be included in the RFQ?','Yes. Particularly for meeting and executive rooms, system performance depends on more than glass thickness, so the target and system build-up should be stated together.'],
        ['Can frosted or printed privacy glass be coordinated?','Yes. Opacity, pattern, print coverage, colour and sample-approval requirements can be defined in the RFQ.']
      ]
    }
  },
  {
    slug:'household-appliance-glass',
    tr:{
      title:'Beyaz Eşya ve Household Appliance Camı Tedariki',
      metaTitle:'Beyaz Eşya Camı Türkiye | Oven Refrigerator Glass B2B | CTSEG',
      description:'Fırın, ocak, davlumbaz, buzdolabı ve beyaz eşya uygulamaları için Türkiye’den temperli, baskılı, özel ölçü ve OEM cam parça tedariki.',
      eyebrow:'Household Appliance Glass · OEM Supply',
      lead:'Beyaz eşya camı taleplerini net parça çizimi, cam tipi, kalınlık, temperleme, seramik baskı, delik/çentik, kenar işleme, tolerans, seri adet ve OEM paketleme gereksinimleriyle üretime hazır RFQ’ya dönüştürüyoruz.',
      applications:['Fırın ve ocak camları','Davlumbaz camları','Buzdolabı raf ve kapı camları','Beyaz eşya kontrol / dekoratif panelleri','OEM cihaz cam parçaları'],
      buyers:['Beyaz eşya üreticileri','OEM/ODM cihaz üreticileri','Tier tedarikçiler','Endüstriyel parça distribütörleri','Private-label cihaz markaları'],
      rfq:['Teknik çizim / parça numarası','Cam tipi, kalınlık ve renk','Temperleme / ısıl işlem','Seramik baskı / enamel / logo alanı','Delik, çentik ve kenar işleme','Tolerans, adet, paketleme ve kalite kontrol beklentisi'],
      faq:[
        ['Beyaz eşya camı için teknik çizim gerekli mi?','Seri üretim ve montaj uyumu için parça geometrisi, delikler, toleranslar ve yüzey detaylarını gösteren teknik çizim güçlü biçimde önerilir.'],
        ['Seramik baskı veya enamel cam koordine edilebilir mi?','Uygun processor kapasitesinde renk, artwork, baskı alanı ve ısıl işlem gereksinimine göre değerlendirilebilir.'],
        ['Numune veya pilot seri yapılabilir mi?','Üretici kapasitesi ve proje modeline göre numune, ilk parça onayı veya pilot seri koşulları RFQ aşamasında değerlendirilebilir.']
      ]
    },
    en:{
      title:'Household Appliance Glass Sourcing from Türkiye',
      metaTitle:'Appliance Glass Suppliers in Turkey | OEM Parts | CTSEG',
      description:'B2B sourcing from Türkiye for tempered, printed, custom-size and OEM glass parts used in ovens, hoods, refrigerators and household appliances.',
      eyebrow:'Household Appliance Glass · OEM Supply',
      lead:'We convert appliance-glass requirements into production-ready RFQs using finished-part drawings, glass type, thickness, tempering, ceramic printing, holes/notches, edgework, tolerances, serial quantities and OEM packing requirements.',
      applications:['Oven and cooking-appliance glass','Cooker-hood glass','Refrigerator shelf and door glass','Appliance control / decorative panels','OEM appliance glass components'],
      buyers:['Household-appliance manufacturers','OEM/ODM appliance producers','Tier suppliers','Industrial component distributors','Private-label appliance brands'],
      rfq:['Technical drawing / part number','Glass type, thickness and colour','Tempering / heat treatment','Ceramic print / enamel / logo area','Hole, notch and edge processing','Tolerance, quantity, packing and quality-control expectations'],
      faq:[
        ['Is a technical drawing required for appliance glass?','For serial production and assembly compatibility, a drawing showing geometry, holes, tolerances and surface details is strongly recommended.'],
        ['Can ceramic printing or enamelled glass be coordinated?','Where suitable processor capacity exists, colour, artwork, print coverage and heat-treatment requirements can be evaluated together.'],
        ['Can samples or pilot production be requested?','Depending on supplier capability and project model, sample, first-article approval or pilot-run conditions can be evaluated at RFQ stage.']
      ]
    }
  },
  {
    slug:'furniture-retail-glass',
    tr:{
      title:'Mobilya, Retail ve OEM Cam Tedariki',
      metaTitle:'Mobilya Camı Türkiye | Furniture Retail Glass B2B | CTSEG',
      description:'Mobilya, mağaza ekipmanı ve retail uygulamaları için Türkiye’den temperli, aynalı, renkli, frosted, baskılı ve özel ölçü OEM cam tedariki.',
      eyebrow:'Furniture & Retail Glass · OEM Sourcing',
      lead:'Mobilya ve retail camı taleplerini parça listesi, ebat, cam/ayna tipi, kenar profili, delik/CNC, temperleme, dekoratif yüzey, seri adet, montaj sırası ve paketleme yapısına göre processor kapasitesiyle eşleştiriyoruz.',
      applications:['Masa ve sehpa camları','Dolap ve mobilya kapakları','Raf ve vitrin camları','Retail display ve mağaza ekipmanları','Ayna ve dekoratif mobilya parçaları','OEM flat-pack ürün camları'],
      buyers:['Mobilya üreticileri','Retail fixture üreticileri','Contract ve hospitality firmaları','OEM/private-label markaları','Mobilya aksesuarı ve cam distribütörleri'],
      rfq:['Parça listesi / teknik çizim','Cam veya ayna tipi ve renk','Kalınlık ve net ölçü','Kenar profili / bevel / polisaj','Delik, CNC, baskı veya dekoratif yüzey','Adet, setleme, etiketleme ve paketleme'],
      faq:[
        ['Mobilya camı teklifinde parça listesi yeterli mi?','Basit dikdörtgen parçalarda yeterli olabilir; özel şekil, delik, bevel, CNC veya sıkı tolerans varsa çizim gerekir.'],
        ['Cam parçaları set veya montaj sırasına göre paketlenebilir mi?','Uygun üretim ve lojistik akışında ürün kodu, set, kutu veya montaj sırasına göre etiketleme/paketleme talep edilebilir.'],
        ['Ayna ve dekoratif cam aynı RFQ içinde değerlendirilebilir mi?','Evet. Aynı ürün ailesinde farklı cam/ayna, yüzey ve işleme kalemleri parça bazında ayrılarak tek ticari RFQ’da toplanabilir.']
      ]
    },
    en:{
      title:'Furniture, Retail & OEM Glass Sourcing from Türkiye',
      metaTitle:'Furniture Glass Suppliers in Turkey | OEM & Retail | CTSEG',
      description:'B2B sourcing from Türkiye for tempered, mirrored, tinted, frosted, printed and custom-size OEM glass used in furniture, retail displays and fixtures.',
      eyebrow:'Furniture & Retail Glass · OEM Sourcing',
      lead:'We match furniture and retail-glass requirements with suitable processor capacity based on part lists, dimensions, glass/mirror type, edge profile, holes/CNC, tempering, decorative finish, serial quantities, assembly sequence and packing.',
      applications:['Tabletop and coffee-table glass','Cabinet and furniture doors','Shelf and display-case glass','Retail displays and shopfitting','Mirror and decorative furniture components','OEM flat-pack product glass'],
      buyers:['Furniture manufacturers','Retail-fixture manufacturers','Contract and hospitality companies','OEM/private-label brands','Furniture-hardware and glass distributors'],
      rfq:['Part list / technical drawing','Glass or mirror type and colour','Thickness and finished size','Edge profile / bevel / polish','Hole, CNC, print or decorative finish','Quantity, kitting, labelling and packing'],
      faq:[
        ['Is a part list enough for furniture-glass quotation?','It may be enough for simple rectangular pieces, but custom shapes, holes, bevels, CNC work or tight tolerances should be supported by drawings.'],
        ['Can glass parts be packed by kit or assembly sequence?','Where production and logistics allow, labelling and packing can be requested by product code, kit, carton or assembly sequence.'],
        ['Can mirrors and decorative glass be included in the same RFQ?','Yes. Different glass/mirror, finish and processing items can be separated by part number and consolidated into one commercial RFQ.']
      ]
    }
  }
];

export function getGlassSeoPage(slug:string){ return glassSeoPages.find((page)=>page.slug===slug); }
