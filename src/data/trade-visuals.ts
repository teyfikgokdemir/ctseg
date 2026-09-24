import type { ActiveLocale } from './locales';

export type TradeVisualLocale = ActiveLocale;
export type TradeVisualKey =
  | 'global-trade-hero'
  | 'food-oils'
  | 'nuts-dates'
  | 'carpets-textiles'
  | 'textiles-inputs'
  | 'strategic-sourcing'
  | 'supplier-verification'
  | 'trade-advisory'
  | 'tco-analysis'
  | 'market-entry';

export type TradeVisual = {
  key:TradeVisualKey;
  source:string;
  sector:string;
  intendedUsage:readonly string[];
  aspectRatio:'3 / 2'|'16 / 9';
  focalPosition:string;
  alt:Record<TradeVisualLocale,string>;
  width:number;
  height:number;
  priority:'hero'|'support';
  reusePolicy:'single-home-hero'|'single-sector-card-or-specialist-hero';
};

export const tradeVisuals:Record<TradeVisualKey,TradeVisual> = {
  'global-trade-hero':{
    key:'global-trade-hero',
    source:'/images/ctseg-global-trade-hero-premium.webp',
    sector:'global trade coordination',
    intendedUsage:['homepage hero'],
    aspectRatio:'3 / 2',focalPosition:'center 48%',width:1536,height:1024,priority:'hero',
    reusePolicy:'single-home-hero',
    alt:{
      tr:'Uluslararası ticaret akışını temsil eden liman ve ürün numuneleri',
      en:'Port and product samples representing international trade flows',
      de:'Hafen und Produktmuster als Darstellung internationaler Handelsströme',
      it:'Porto e campioni di prodotto che rappresentano i flussi commerciali internazionali',
      ru:'Порт и образцы продукции как образ международной торговли',
      fa:'نمای بندر و نمونه‌های محصول به‌عنوان تصویری از جریان تجارت بین‌المللی'
    ,
      zh:'代表全球大宗贸易与跨境物流的现代化港口与产品样品',
      vi:'Cảng biển và mẫu sản phẩm đại diện cho dòng chảy thương mại quốc tế'}
  },
  'food-oils':{
    key:'food-oils',source:'/images/ctseg-vegetable-oils-food-editorial.webp',sector:'food, grains and vegetable oils',
    intendedUsage:['homepage sector card'],aspectRatio:'3 / 2',focalPosition:'center 52%',width:1536,height:1024,priority:'support',
    reusePolicy:'single-sector-card-or-specialist-hero',
    alt:{
      tr:'Ticari değerlendirme için markasız bitkisel yağ ve gıda hammaddesi numuneleri',
      en:'Unbranded vegetable oil and food ingredient samples for commercial assessment',
      de:'Unmarkierte Pflanzenöl- und Lebensmittelrohstoffmuster für die kaufmännische Bewertung',
      it:'Campioni non marchiati di olio vegetale e ingredienti alimentari per la valutazione commerciale',
      ru:'Немаркированные образцы растительного масла и пищевых ингредиентов для оценки',
      fa:'نمونه‌های بدون نشان تجاری از روغن گیاهی و مواد اولیه غذایی برای ارزیابی تجاری'
    ,
      zh:'用于商业决策评估的中性植物油及精选大宗食品原料样品',
      vi:'Mẫu dầu thực vật không thương hiệu và nguyên liệu thực phẩm phục vụ đánh giá thương mại'}
  },
  'nuts-dates':{
    key:'nuts-dates',source:'/images/ctseg-mixed-nuts-premium.webp',sector:'nuts, dates and dried fruits',
    intendedUsage:['homepage sector card'],aspectRatio:'3 / 2',focalPosition:'center 50%',width:1536,height:1024,priority:'support',
    reusePolicy:'single-sector-card-or-specialist-hero',
    alt:{
      tr:'Kalite ve ürün sınıfı değerlendirmesi için kuruyemiş ve kuru meyve numuneleri',
      en:'Nut and dried fruit samples for quality and product-grade assessment',
      de:'Nuss- und Trockenfruchtmuster zur Bewertung von Qualität und Sortierung',
      it:'Campioni di frutta a guscio ed essiccata per valutare qualità e classificazione',
      ru:'Образцы орехов и сухофруктов для оценки качества и сорта',
      fa:'نمونه‌های خشکبار و میوه خشک برای بررسی کیفیت و درجه‌بندی محصول'
    ,
      zh:'用于品质检验、等级评估与规格核验的特色坚果及干果样品',
      vi:'Mẫu hạt dinh dưỡng và trái cây sấy khô phục vụ đánh giá chất lượng và phân hạng'}
  },
  'carpets-textiles':{
    key:'carpets-textiles',source:'/images/ctseg-iranian-carpets-editorial.webp',sector:'carpets and textiles',
    intendedUsage:['homepage sector card','Iranian carpet specialist hero','silk carpet specialist hero'],aspectRatio:'3 / 2',focalPosition:'center 54%',width:1536,height:1024,priority:'support',
    reusePolicy:'single-sector-card-or-specialist-hero',
    alt:{
      tr:'Malzeme ve dokuma değerlendirmesini temsil eden el dokuması halılar',
      en:'Hand-knotted carpets representing material and weave assessment',
      de:'Handgeknüpfte Teppiche als Darstellung der Material- und Webartprüfung',
      it:'Tappeti annodati a mano per rappresentare la valutazione di materiali e tessitura',
      ru:'Ковры ручной работы для оценки материалов и качества плетения',
      fa:'فرش‌های دستباف به‌عنوان تصویری از بررسی مواد و کیفیت بافت'
    ,
      zh:'波斯传统手工地毯纹样细节与精细打结工艺鉴别',
      vi:'Chi tiết kết cấu hoa văn và tay nghề dệt thảm thủ công truyền thống'}
  },
  'strategic-sourcing':{
    key:'strategic-sourcing',source:'/images/ctseg-2026/supplier-rfq-comparison.webp',sector:'strategic sourcing and RFQ comparison',
    intendedUsage:['strategic sourcing service detail'],aspectRatio:'16 / 9',focalPosition:'center 48%',width:1376,height:768,priority:'support',
    reusePolicy:'single-sector-card-or-specialist-hero',
    alt:{
      tr:'Endüstriyel tedarik seçeneklerini ve RFQ tekliflerini karşılaştıran satın alma uzmanı',
      en:'Procurement specialist comparing industrial sourcing options and RFQ quotations',
      de:'Beschaffungsspezialist beim Vergleich industrieller Lieferoptionen und RFQ-Angebote',
      it:'Specialista acquisti che confronta opzioni di sourcing industriale e offerte RFQ',
      ru:'Специалист по закупкам сравнивает промышленные варианты поставок и предложения RFQ',
      fa:'کارشناس تدارکات در حال مقایسه گزینه‌های تأمین صنعتی و پیشنهادهای RFQ',
      zh:'采购专员对工业供应方案与RFQ报价进行结构化比较',
      vi:'Chuyên gia thu mua so sánh phương án cung ứng công nghiệp và báo giá RFQ'
    }
  },
  'supplier-verification':{
    key:'supplier-verification',source:'/images/ctseg-2026/supplier-verification.webp',sector:'supplier verification',
    intendedUsage:['supplier verification service detail'],aspectRatio:'16 / 9',focalPosition:'center 50%',width:1376,height:768,priority:'support',
    reusePolicy:'single-sector-card-or-specialist-hero',
    alt:{
      tr:'Endüstriyel ürün ve üretici doğrulama sürecini yürüten kalite ve tedarik uzmanı',
      en:'Quality and sourcing specialist conducting industrial product and supplier verification',
      de:'Qualitäts- und Beschaffungsspezialist bei der Prüfung von Industrieprodukt und Lieferant',
      it:'Specialista qualità e sourcing durante la verifica di prodotto industriale e fornitore',
      ru:'Специалист по качеству и сорсингу проводит проверку промышленного продукта и поставщика',
      fa:'کارشناس کیفیت و تأمین در حال ارزیابی محصول صنعتی و اعتبارسنجی تأمین‌کننده',
      zh:'质量与采购专员开展工业产品和供应商核验',
      vi:'Chuyên gia chất lượng và thu mua thực hiện xác minh sản phẩm công nghiệp và nhà cung cấp'
    }
  },
  'trade-advisory':{
    key:'trade-advisory',source:'/images/ctseg-2026/external-trade-desk.webp',sector:'international trade coordination',
    intendedUsage:['trade advisory service detail'],aspectRatio:'16 / 9',focalPosition:'center 50%',width:1376,height:768,priority:'support',
    reusePolicy:'single-sector-card-or-specialist-hero',
    alt:{
      tr:'Uluslararası ticaret operasyonu ve sevkiyat koordinasyonunu yöneten dış ticaret uzmanı',
      en:'International trade specialist coordinating commercial operations and shipment planning',
      de:'Außenhandelsspezialist koordiniert Handelsabläufe und Versandplanung',
      it:'Specialista di commercio internazionale coordina operazioni commerciali e pianificazione delle spedizioni',
      ru:'Специалист по внешней торговле координирует коммерческие операции и планирование отгрузок',
      fa:'کارشناس تجارت بین‌الملل در حال هماهنگی عملیات تجاری و برنامه‌ریزی حمل',
      zh:'国际贸易专员协调商业运营与跨境发运计划',
      vi:'Chuyên gia thương mại quốc tế điều phối vận hành thương mại và kế hoạch vận chuyển'
    }
  },
  'tco-analysis':{
    key:'tco-analysis',source:'/images/ctseg-2026/industrial-products-review.webp',sector:'total cost and commercial evaluation',
    intendedUsage:['TCO service detail'],aspectRatio:'16 / 9',focalPosition:'center 50%',width:1376,height:768,priority:'support',
    reusePolicy:'single-sector-card-or-specialist-hero',
    alt:{
      tr:'Endüstriyel ürünleri toplam maliyet ve ticari kriterlerle değerlendiren satın alma ekibi',
      en:'Procurement team reviewing industrial products against total-cost and commercial criteria',
      de:'Einkaufsteam bewertet Industrieprodukte nach Gesamtkosten und kaufmännischen Kriterien',
      it:'Team acquisti valuta prodotti industriali secondo costo totale e criteri commerciali',
      ru:'Команда закупок оценивает промышленную продукцию по совокупной стоимости и коммерческим критериям',
      fa:'تیم تدارکات در حال ارزیابی محصولات صنعتی بر اساس هزینه کل و معیارهای تجاری',
      zh:'采购团队依据总成本与商业条件评估工业产品',
      vi:'Đội ngũ thu mua đánh giá sản phẩm công nghiệp theo tổng chi phí và tiêu chí thương mại'
    }
  },
  'market-entry':{
    key:'market-entry',source:'/images/ctseg-2026/manufacturer-buyer-meeting.webp',sector:'market entry and buyer development',
    intendedUsage:['market entry service detail'],aspectRatio:'16 / 9',focalPosition:'center 48%',width:1376,height:768,priority:'support',
    reusePolicy:'single-sector-card-or-specialist-hero',
    alt:{
      tr:'Üretici ile uluslararası alıcı arasında pazara giriş görüşmesi',
      en:'Market-entry meeting between a manufacturer and international buyer',
      de:'Markteintrittsgespräch zwischen Hersteller und internationalem Einkäufer',
      it:'Incontro di ingresso sul mercato tra produttore e acquirente internazionale',
      ru:'Встреча производителя с международным покупателем по выходу на рынок',
      fa:'جلسه ورود به بازار میان تولیدکننده و خریدار بین‌المللی',
      zh:'制造商与国际买家开展市场进入商务会谈',
      vi:'Cuộc họp thâm nhập thị trường giữa nhà sản xuất và người mua quốc tế'
    }
  },
  'textiles-inputs':{
    key:'textiles-inputs',source:'/images/ctseg-wholesale-textiles-editorial.webp',sector:'textiles and production inputs',
    intendedUsage:['homepage sector card','wholesale textile specialist hero'],aspectRatio:'3 / 2',focalPosition:'center 46%',width:1536,height:1024,priority:'support',
    reusePolicy:'single-sector-card-or-specialist-hero',
    alt:{
      tr:'Ticari değerlendirme masasındaki kumaş, havlu ve tekstil numuneleri',
      en:'Fabric, towel and textile samples on a commercial assessment table',
      de:'Stoff-, Handtuch- und Textilmuster auf einem Tisch zur kaufmännischen Bewertung',
      it:'Campioni di tessuto, asciugamani e prodotti tessili su un tavolo di valutazione commerciale',
      ru:'Образцы тканей, полотенец и текстиля на столе для коммерческой оценки',
      fa:'نمونه‌های پارچه، حوله و منسوجات روی میز ارزیابی تجاری'
    ,
      zh:'用于大宗采购评估的高品质纺织面料与工业包材样品',
      vi:'Mẫu vải dệt chất lượng cao và vật tư bao bì phục vụ đánh giá thu mua'}
  }
};

export const homeTradeVisualKeys = ['food-oils','nuts-dates','carpets-textiles','textiles-inputs'] as const;

export const serviceTradeVisualKeys = {
  'strategic-sourcing':'strategic-sourcing',
  'supplier-verification':'supplier-verification',
  'trade-advisory':'trade-advisory',
  'tco':'tco-analysis',
  'market-entry':'market-entry'
} as const;

export const sourcingTradeVisualKeys = {
  'iranian-carpets':'carpets-textiles',
  'silk-carpets':'carpets-textiles',
  'wholesale-textiles':'textiles-inputs'
} as const;

export const localizedTradeVisual = (key:TradeVisualKey, locale:TradeVisualLocale) => {
  const visual=tradeVisuals[key];
  return {...visual,altText:visual.alt[locale]};
};
