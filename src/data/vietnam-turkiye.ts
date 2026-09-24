import type { Locale } from './site';

export type VietnamTurkiyeCopy = {
  slug:string;
  eyebrow:string;
  title:string;
  description:string;
  directAnswerTitle:string;
  directAnswer:string;
  trendTitle:string;
  trendLead:string;
  productsTitle:string;
  productsLead:string;
  products:{name:string;signal:string}[];
  buyerTypesTitle:string;
  buyerTypes:string[];
  complianceTitle:string;
  complianceText:string;
  processTitle:string;
  process:string[];
  faq:{question:string;answer:string}[];
  ctaTitle:string;
  ctaText:string;
  ctaLabel:string;
};

export const vietnamTurkiyeContent: Partial<Record<Locale,VietnamTurkiyeCopy>> = {
  tr:{
    slug:'vietnamdan-turkiyeye-ithalat-ve-tedarik',
    eyebrow:'VİETNAM → TÜRKİYE TEDARİK KORİDORU',
    title:'Vietnam’dan Türkiye’ye güncel talebe göre B2B ürün tedariki',
    description:'CTSEG, Vietnam’ın son dönemde öne çıkan ihracat kategorilerini Türkiye pazarı için üretici doğrulaması, RFQ, numune, kalite belgeleri, lojistik ve ithalat uygunluğu çerçevesinde değerlendirir.',
    directAnswerTitle:'Vietnam’dan Türkiye’ye bugün hangi ürünler daha mantıklı?',
    directAnswer:'Son 30 günlük Vietnam ihracat verileri ve Türkiye’deki güncel tanıtım faaliyetleri; kahve, kaju, karabiber, tarçın, meyve-sebze ve işlenmiş tropikal ürünler, deniz ürünleri ile ahşap/mobilya tarafında güçlü ticari sinyaller veriyor. CTSEG bu ürünlerde Vietnamlı üretici ve ihracatçılardan Türkiye’deki ithalatçı, distribütör, HORECA, gıda sanayisi, perakende ve endüstriyel alıcılara uygun tedarik rotalarını RFQ bazında değerlendirebilir.',
    trendTitle:'Son dönemde öne çıkan Vietnam ihracat sinyalleri',
    trendLead:'Eylül 2026 itibarıyla Vietnam’ın toplam ihracatı güçlü büyürken tarım, gıda ve işlenmiş ürünlerde özellikle aşağıdaki gruplar öne çıkıyor. Türkiye açısından ürün seçimini yalnızca Vietnam’ın ihracat büyüklüğüne göre değil, yerel alıcı profili ve ithalat uygunluğuna göre yapıyoruz.',
    productsTitle:'Türkiye için öncelikli ürün grupları',
    productsLead:'Aşağıdaki liste son dönemdeki ihracat eğilimleri, Türkiye’deki potansiyel kullanım alanı ve tekrar sipariş olasılığı dikkate alınarak hazırlanmıştır.',
    products:[
      {name:'Robusta kahve ve yeşil kahve çekirdeği',signal:'Vietnam kahve ihracatı ilk 8 ayda yaklaşık 1,7 milyon tona ulaştı; güçlü hacim ve yıl sonuna doğru olumlu talep sinyali var.'},
      {name:'Kaju içi ve işlenmiş kaju ürünleri',signal:'Kaju, Vietnam’ın başlıca tarımsal ihracat kalemlerinden biri; Türkiye’de kuruyemiş, HORECA ve özel marka için uygun.'},
      {name:'Siyah ve beyaz karabiber',signal:'İlk 8 ayda ihracat hacmi ve değeri artmaya devam etti; siyah biber ihracatta ana ürün tipi.'},
      {name:'Cassia tarçın',signal:'Ağustos ihracatı aylık gerilese de yıllık bazda artış devam ediyor; Avrupa ve diğer Asya dışı pazarlarda talep güçleniyor.'},
      {name:'Yıldız anason ve baharat hammaddeleri',signal:'Vietnam baharat ihracatının doğal tamamlayıcısı; toptan baharat, gıda sanayisi ve HORECA için niş fırsat.'},
      {name:'Meyve-sebze ve işlenmiş tropikal meyveler',signal:'Vietnam’ın meyve-sebze ihracatı ilk 8 ayda yaklaşık 6 milyar USD’ye çıktı ve yıllık güçlü büyüme gösterdi.'},
      {name:'Kurutulmuş mango, dragon fruit ve tropikal meyve atıştırmalıkları',signal:'İşlenmiş meyve ürünleri raf ömrü ve lojistik açısından Türkiye’ye taze üründen daha uygulanabilir.'},
      {name:'Hindistan cevizi ürünleri',signal:'Kurutulmuş hindistan cevizi, süt, krema ve gıda hammaddeleri perakende ve endüstriyel kullanım için değerlendirilebilir.'},
      {name:'Pirinç, pirinç unu ve rice paper',signal:'Vietnam güçlü bir pirinç üreticisi; Asya mutfağı, HORECA ve özel perakende kanalları için ürün bazlı fırsat olabilir.'},
      {name:'Deniz ürünleri ve seçili işlenmiş su ürünleri',signal:'Vietnam’ın su ürünleri ihracatı ilk 8 ayda çift haneli büyüdü; ürün bazında sağlık ve ithalat izinleri ayrıca kontrol edilmeli.'},
      {name:'Karides ve uygun dondurulmuş deniz ürünleri',signal:'Karides üretimi ve ihracatı büyüyor; soğuk zincir ve veteriner/sağlık kontrolleri kritik.'},
      {name:'Ahşap mobilya ve mobilya komponentleri',signal:'Vietnam’ın ahşap ve ahşap ürünleri ihracatı ilk 8 ayda yaklaşık 11,7 milyar USD’ye ulaştı ve büyümeye devam etti.'},
      {name:'Bambu ve rattan ürünleri',signal:'Vietnam’ın güçlü doğal malzeme ve ev dekorasyonu üretim tabanına dayanıyor; Türkiye’de butik, HORECA ve dekorasyon kanallarına uygun.'},
      {name:'Ev dekorasyonu ve doğal malzeme ürünleri',signal:'Mobilya ve yaşam kategorisinin tamamlayıcısı; düşük adetli seçili koleksiyonlarla test edilebilir.'},
      {name:'Doğal kauçuk ve seçili kauçuk hammaddeleri',signal:'Vietnam önemli bir kauçuk üreticisi; ancak Türkiye’de ürün spesifikasyonu ve sanayi alıcısı olmadan commodity ticaretine girilmemeli.'},
      {name:'Tekstil, ayakkabı ve OEM/private label üretim',signal:'Vietnam’ın büyük ihracat altyapısı var; Türkiye için fiyat, MOQ ve teslim süresi rekabeti ayrıca hesaplanmalı.'},
      {name:'Çanta ve tekstil aksesuarları',signal:'OEM üretim kapasitesi yüksek; markalar ve distribütörler için proje bazlı değerlendirilebilir.'},
      {name:'Gıda sanayisi için baharat ve bitkisel girdiler',signal:'Karabiber, tarçın, anason ve diğer doğal ürünler tek tek değil, B2B içerik paketi olarak da sunulabilir.'},
      {name:'Kahve bazlı private label ürünleri',signal:'Yeşil çekirdek dışında kavrulmuş, öğütülmüş veya private label kahve projeleri daha yüksek katma değer sağlayabilir.'},
      {name:'Seçili Vietnam menşeli özel gıda ürünleri',signal:'Foodist Istanbul 2026’da Vietnam tarafı tarım, gıda ve içecek ürünlerini Türkiye’de aktif olarak tanıttı; yeni ürünler RFQ ve pazar testiyle seçilmeli.'}
    ],
    buyerTypesTitle:'Türkiye’de hedef alıcı profilleri',
    buyerTypes:[
      'Kuruyemiş ve baharat ithalatçıları',
      'Kahve kavurucuları ve kahve zincirleri',
      'Gıda üreticileri ve hammadde tedarikçileri',
      'HORECA distribütörleri',
      'Asya gıdaları distribütörleri',
      'Ulusal ve bölgesel perakende zincirleri',
      'Mobilya ve ev dekorasyonu ithalatçıları',
      'Özel marka / private label çalışan markalar'
    ],
    complianceTitle:'Ürün seçimi trend kadar mevzuata da bağlı',
    complianceText:'Her ürün için GTİP, menşe, gümrük vergileri, tercihli rejim olup olmadığı, gıda güvenliği, pestisit ve mikrobiyoloji limitleri, sağlık veya bitki sağlığı belgeleri, etiketleme, üretici kayıtları, test raporları ve toplam ithalat maliyeti ayrı kontrol edilir. Türkiye ile Vietnam arasında doğrudan serbest ticaret anlaşması bulunmadığından fiyat karşılaştırmasında gümrük ve navlun etkisi özellikle önemlidir.',
    processTitle:'Vietnam tedarikini nasıl değerlendiriyoruz?',
    process:[
      'Türkiye’de gerçek alıcı ve kullanım alanı belirlenir',
      'Vietnamlı üretici/ihracatçı, kapasite ve mevcut ihracat belgeleri doğrulanır',
      'Numune, spesifikasyon, kalite belgesi, MOQ ve fiyat karşılaştırılır',
      'GTİP, ithalat şartları, navlun ve toplam maliyet hesaplanır',
      'Ticari avantaj yeterliyse RFQ ve alıcı görüşmesi ilerletilir'
    ],
    faq:[
      {question:'Vietnam’dan her ürünü Türkiye’ye ithal etmek mantıklı mı?',answer:'Hayır. Vietnam’ın güçlü ihracatçı olması tek başına yeterli değildir. Türkiye’deki satış fiyatı, gümrük, navlun, ürün güvenliği, yerli veya alternatif tedarikçi fiyatı ve minimum sipariş birlikte değerlendirilmelidir.'},
      {question:'Şu anda en güçlü ilk ürünler hangileri?',answer:'Güncel ihracat sinyalleri açısından kahve, kaju, karabiber, tarçın, işlenmiş tropikal meyve, deniz ürünleri ve ahşap/mobilya öne çıkıyor. Nihai seçim gerçek Türk alıcı talebine göre yapılmalıdır.'},
      {question:'CTSEG Vietnam’da üretici bulabilir mi?',answer:'CTSEG, ürün ve teknik şartname netleştirildikten sonra uygun Vietnamlı üretici veya ihracatçı adaylarını araştırabilir, belgeleri ve ticari şartları karşılaştırabilir ve RFQ sürecini koordine edebilir.'}
    ],
    ctaTitle:'Vietnam’dan ürün tedarik talebi gönderin',
    ctaText:'Aradığınız ürünü, teknik özellikleri, miktarı, hedef fiyatı, teslim yerini ve gereken belgeleri paylaşın. CTSEG, Vietnam tedarik seçeneğinin Türkiye için ticari olarak uygulanabilir olup olmadığını değerlendirir.',
    ctaLabel:'Vietnam tedarik RFQ gönder'
  }
};
