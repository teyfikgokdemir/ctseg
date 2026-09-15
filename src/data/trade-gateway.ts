import type { Locale } from './site';

type Direction = { kicker:string; title:string; description:string };
export const tradeGateway:Record<Locale,{ outbound:Direction; inbound:Direction }> = {
  tr:{
    outbound:{kicker:'TÜRKİYE → GLOBAL PAZARLAR',title:'Türk üretimi için uluslararası pazar erişimi',description:'Hedef pazar ve alıcı ihtiyacını netleştirir; ürün uygunluğu, teklif, belge ve ticari koordinasyon adımlarını birlikte değerlendiririz.'},
    inbound:{kicker:'GLOBAL → TÜRKİYE',title:'Türkiye pazarı için stratejik tedarik ve giriş',description:'Üretici ve tedarikçi seçeneklerini ticari gereksinime göre araştırır; ürün, menşe, belge ve RFQ kapsamını karşılaştırılabilir hale getiririz.'}
  },
  en:{
    outbound:{kicker:'TÜRKIYE → GLOBAL MARKETS',title:'International market access for Turkish production',description:'We clarify the target market and buyer requirement, then assess product fit, quotations, documentation and commercial coordination.'},
    inbound:{kicker:'GLOBAL → TÜRKIYE',title:'Strategic sourcing and market entry in Türkiye',description:'We research manufacturer and supplier options against the commercial requirement and structure product, origin, documentation and RFQ inputs for comparison.'}
  },
  de:{
    outbound:{kicker:'TÜRKEI → INTERNATIONALE MÄRKTE',title:'Internationaler Marktzugang für türkische Hersteller',description:'Wir klären Zielmarkt und Käuferbedarf und bewerten Produkteignung, Angebote, Unterlagen und kaufmännische Abstimmung.'},
    inbound:{kicker:'WELTWEIT → TÜRKEI',title:'Strategische Beschaffung und Markteintritt in der Türkei',description:'Wir recherchieren Hersteller und Lieferanten anhand des Bedarfs und strukturieren Produkt-, Herkunfts-, Dokumentations- und RFQ-Angaben für den Vergleich.'}
  },
  it:{
    outbound:{kicker:'TURCHIA → MERCATI GLOBALI',title:'Accesso ai mercati internazionali per la produzione turca',description:'Definiamo mercato di destinazione e requisiti dell’acquirente, quindi valutiamo idoneità del prodotto, offerte, documenti e coordinamento commerciale.'},
    inbound:{kicker:'MONDO → TURCHIA',title:'Sourcing strategico e ingresso nel mercato turco',description:'Ricerchiamo produttori e fornitori in base alle esigenze commerciali e organizziamo dati su prodotto, origine, documenti e RFQ per il confronto.'}
  },
  ru:{
    outbound:{kicker:'ТУРЦИЯ → МИРОВЫЕ РЫНКИ',title:'Выход турецких производителей на международные рынки',description:'Уточняем целевой рынок и требования покупателя, затем оцениваем соответствие продукции, предложения, документы и коммерческую координацию.'},
    inbound:{kicker:'МИР → ТУРЦИЯ',title:'Стратегический сорсинг и выход на рынок Турции',description:'Изучаем производителей и поставщиков с учётом коммерческого запроса и структурируем сведения о продукте, происхождении, документах и RFQ для сравнения.'}
  },
  fa:{
    outbound:{kicker:'ترکیه ← بازارهای جهانی',title:'دسترسی تولیدکنندگان ترکیه به بازارهای بین‌المللی',description:'بازار هدف و نیاز خریدار را روشن می‌کنیم و سپس تناسب محصول، پیشنهادها، مدارک و هماهنگی تجاری را بررسی می‌کنیم.'},
    inbound:{kicker:'جهان ← ترکیه',title:'تأمین راهبردی و ورود به بازار ترکیه',description:'گزینه‌های تولیدکننده و تأمین‌کننده را براساس نیاز تجاری بررسی می‌کنیم و اطلاعات محصول، مبدأ، مدارک و درخواست قیمت را برای مقایسه سامان می‌دهیم.'}
  },
  zh:{
    outbound:{kicker:'土耳其 → 全球市场',title:'助力土耳其制造企业进入国际市场',description:'明确目标市场与买方需求，评估产品适配、报价、文件资料及商务协调范围。'},
    inbound:{kicker:'全球 → 土耳其',title:'面向土耳其市场的战略采购与市场进入',description:'依据商务需求研究制造商与供应商，并整理产品、原产地、文件和询价信息，以便比较。'}
  },
  vi:{
    outbound:{kicker:'THỔ NHĨ KỲ → THỊ TRƯỜNG TOÀN CẦU',title:'Tiếp cận thị trường quốc tế cho nhà sản xuất Thổ Nhĩ Kỳ',description:'Làm rõ thị trường mục tiêu và yêu cầu của người mua, sau đó đánh giá sản phẩm, báo giá, hồ sơ và phạm vi điều phối thương mại.'},
    inbound:{kicker:'TOÀN CẦU → THỔ NHĨ KỲ',title:'Tìm nguồn cung chiến lược và gia nhập thị trường Thổ Nhĩ Kỳ',description:'Nghiên cứu nhà sản xuất và nhà cung cấp theo yêu cầu thương mại; sắp xếp dữ liệu sản phẩm, xuất xứ, hồ sơ và RFQ để so sánh.'}
  }
};
