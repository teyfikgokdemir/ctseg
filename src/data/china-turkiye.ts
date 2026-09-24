import type { Locale } from './site';

export type ChinaTurkiyeCopy = {
  slug:string;
  eyebrow:string;
  title:string;
  description:string;
  directAnswerTitle:string;
  directAnswer:string;
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

export const chinaTurkiyeContent: Partial<Record<Locale,ChinaTurkiyeCopy>> = {
  tr:{
    slug:'cinden-turkiyeye-ithalat-ve-tedarik',
    eyebrow:'ÇİN → TÜRKİYE TEDARİK KORİDORU',
    title:'Çin’den Türkiye’ye seçili B2B ürün ve üretici tedariki',
    description:'CTSEG, Çin’deki üretici ve ihracatçı seçeneklerini Türkiye’deki gerçek alıcı ihtiyacına göre teknik şartname, üretici doğrulaması, RFQ, numune, belge, navlun, gümrük ve ticaret politikası riskiyle birlikte değerlendirir.',
    directAnswerTitle:'Çin’den Türkiye’ye bugün hangi ürünlerde tedarik daha mantıklı?',
    directAnswer:'Çin, Türkiye için çok geniş bir tedarik pazarı olduğu için doğru yaklaşım genel ürün aramak değil; teknik avantaj, üretim ölçeği, özel üretim veya maliyet avantajı sağlayan kategorilere odaklanmaktır. Endüstriyel makine, paketleme ve gıda işleme ekipmanı, otomasyon çevre ekipmanları, pompa-vana, güç aktarım parçaları, elektrik bileşenleri, HVAC, ticari aydınlatma, elektronik komponentler, OEM/ODM üretim ve seçili proje ürünleri öncelikli değerlendirme alanlarıdır.',
    productsTitle:'Türkiye için öncelikli Çin tedarik kategorileri',
    productsLead:'Aşağıdaki ürünler üretim kabiliyeti, ürün çeşitliliği ve Türkiye’de B2B kullanım potansiyeli açısından öne çıkar. Her kalem için anti-damping, gözetim, ilave gümrük vergisi veya teknik mevzuat riski ayrıca kontrol edilir.',
    products:[
      {name:'Endüstriyel makine ve üretim hattı ekipmanları',signal:'Özel konfigürasyon, yüksek üretim ölçeği ve geniş üretici havuzu nedeniyle proje bazlı tedarikte güçlü.'},
      {name:'Paketleme, dolum ve etiketleme makineleri',signal:'Gıda, kozmetik, kimya ve perakende üreticileri için geniş ürün ve otomasyon seçeneği sunar.'},
      {name:'Gıda işleme makineleri',signal:'Kesme, kurutma, kavurma, karıştırma, paketleme ve hat entegrasyonu gibi alt kategorilerde güçlü üretici ekosistemi bulunur.'},
      {name:'Endüstriyel otomasyon çevre ekipmanları',signal:'Sensör, sürücü, pano çevresi, konveyör ve üretim hattı tamamlayıcılarında fiyat ve çeşit avantajı olabilir.'},
      {name:'Pompa, vana ve akış kontrol ekipmanları',signal:'Sanayi, su, gıda ve proses uygulamalarında teknik şartname bazlı alternatif üretici bulunabilir.'},
      {name:'Rulman, redüktör, kaplin ve mekanik güç aktarım parçaları',signal:'Bakım ve OEM kullanımında tekrarlı sipariş potansiyeli yüksek; kalite sınıfı net tanımlanmalı.'},
      {name:'Endüstriyel filtre ve filtrasyon bileşenleri',signal:'Üretim, su, HVAC ve proses uygulamalarında ürün çeşitliliği yüksektir.'},
      {name:'Alçak gerilim elektrik ekipmanları',signal:'MCCB, kontaktör, röle, pano bileşenleri ve dağıtım ekipmanlarında çok geniş üretici tabanı vardır.'},
      {name:'Endüstriyel kablo, konnektör ve kablo grupları',signal:'Standart ve özel üretimde ölçek avantajı vardır; sertifika ve teknik uyum kritik.'},
      {name:'HVAC ve ticari iklimlendirme ekipmanları',signal:'Fan, hava işleme, kontrol ve ticari sistem bileşenlerinde proje bazlı fırsatlar bulunabilir.'},
      {name:'Ticari ve proje tipi aydınlatma ürünleri',signal:'Mimari, endüstriyel ve mağaza projelerinde özel üretim ve yüksek çeşit avantajı vardır.'},
      {name:'Elektronik komponent ve OEM alt bileşenler',signal:'Ürün doğrulaması, orijinallik ve kalite kontrolü yapılmadan spot ticaret yerine spesifikasyon bazlı alım tercih edilmeli.'},
      {name:'Ambalaj sanayisi için ekipman ve bileşenler',signal:'Makine, kalıp, yardımcı ekipman ve sarf tarafında entegre tedarik yapılabilir.'},
      {name:'Mobilya ve proje tipi ev/otel ürünleri',signal:'Özel ölçü, OEM ve toplu proje üretiminde maliyet avantajı oluşabilir.'},
      {name:'Yapı donanımı ve seçili teknik malzemeler',signal:'Standart dışı veya proje bazlı ürünlerde üretim esnekliği avantaj sağlayabilir.'},
      {name:'OEM/ODM private label tüketici ürünleri',signal:'Türkiye’de marka sahibi şirketler için kalıp, ambalaj ve ürün kişiselleştirmesiyle ölçeklenebilir.'},
      {name:'Solar, batarya ve enerji ekipmanları',signal:'Ticari fırsat yüksek olsa da Türkiye ve Avrupa’da ticaret önlemleri, standartlar ve ürün bazlı ek kontroller nedeniyle yalnızca uygunluk incelemesi sonrası değerlendirilmelidir.'},
      {name:'Otomotiv ve mobilite komponentleri',signal:'Geniş üretim kapasitesi vardır; kalite sistemi, homologasyon, menşe ve ticaret önlemleri ürün bazında incelenmelidir.'},
      {name:'Seçili endüstriyel kimyasal ve hammadde ürünleri',signal:'Ürüne göre regülasyon, REACH/KKDİK, ithalat izni ve ticaret politikası tedbirleri kritik olabilir.'},
      {name:'Özel teknik şartnameli proje ürünleri',signal:'Türkiye’de yeterli üretici bulunmayan veya maliyet dezavantajı olan ürünler için Çin geniş bir üretici havuzu sağlar.'}
    ],
    buyerTypesTitle:'Türkiye’de hedef alıcı profilleri',
    buyerTypes:[
      'Sanayi üreticileri ve fabrikalar',
      'Makine üreticileri ve sistem entegratörleri',
      'Elektrik ve otomasyon firmaları',
      'Gıda ve ambalaj üreticileri',
      'HVAC ve proje şirketleri',
      'Distribütör ve toptancılar',
      'Private label çalışan markalar',
      'Otel, perakende ve proje satın alma şirketleri'
    ],
    complianceTitle:'Çin tedarikinde fiyat kadar ticaret politikası kontrolü de önemli',
    complianceText:'Her ürün için GTİP, menşe, gümrük vergileri, ilave gümrük vergileri, gözetim uygulamaları, anti-damping veya korunma önlemleri, TAREKS veya teknik mevzuat, ürün güvenliği, sertifikalar, test raporları, etiketleme ve toplam ithalat maliyeti ayrı değerlendirilir. Özellikle elektrik-elektronik, otomotiv, batarya, solar, kimya, tekstil, çelik ve bazı sanayi ürünlerinde ek tedbirler bulunabilir.',
    processTitle:'Çin tedarikini nasıl değerlendiriyoruz?',
    process:[
      'Ürün ve teknik şartname Türkiye’deki gerçek kullanım ihtiyacına göre netleştirilir',
      'Çinli üretici, fabrika kapasitesi, ihracat geçmişi ve mevcut belgeler doğrulanır',
      'Numune, teknik veri, MOQ, fiyat ve kalite şartları karşılaştırılır',
      'GTİP, ticaret politikası önlemleri, navlun ve toplam maliyet kontrol edilir',
      'Ticari avantaj ve mevzuat uygunluğu birlikte yeterliyse RFQ ilerletilir'
    ],
    faq:[
      {question:'Çin’den en ucuz ürünü bulmak doğru yaklaşım mı?',answer:'Hayır. En düşük fabrika fiyatı; kalite, fire, garanti, sertifika, navlun, vergi, gözetim veya anti-damping etkileri nedeniyle en düşük toplam maliyet anlamına gelmeyebilir.'},
      {question:'Çin’den her ürün Türkiye’ye getirilebilir mi?',answer:'Hayır. Ürün bazında teknik mevzuat, ithalat izinleri, gözetim, anti-damping, korunma önlemleri ve ürün güvenliği kuralları değişebilir.'},
      {question:'CTSEG Çin’de üretici araştırabilir mi?',answer:'Evet. Teknik şartname ve ticari hedef net olduğunda üretici adayları, belgeler, kapasite, fiyat, MOQ ve numune şartları karşılaştırılabilir.'}
    ],
    ctaTitle:'Çin’den ürün tedarik talebi gönderin',
    ctaText:'Ürün adı, teknik şartname, miktar, hedef fiyat, teslim yeri ve gerekli sertifikaları paylaşın. CTSEG üretici seçeneklerini ve toplam ithalat uygulanabilirliğini birlikte değerlendirir.',
    ctaLabel:'Çin tedarik RFQ gönder'
  }
};
