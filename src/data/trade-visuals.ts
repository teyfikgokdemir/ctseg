import type { ActiveLocale } from './locales';

export type TradeVisualLocale = ActiveLocale;
export type TradeVisualKey =
  | 'global-trade-hero'
  | 'food-oils'
  | 'nuts-dates'
  | 'carpets-textiles'
  | 'textiles-inputs';

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
    source:'/images/ctseg-2026/export-warehouse-operations.webp',
    sector:'global trade coordination',
    intendedUsage:['homepage hero'],
    aspectRatio:'16 / 9',focalPosition:'center 50%',width:1376,height:768,priority:'hero',
    reusePolicy:'single-home-hero',
    alt:{
      tr:'Uluslararası tedarik ve ihracat koordinasyonunu temsil eden modern endüstriyel depo operasyonu',
      en:'Modern industrial warehouse operation representing international sourcing and export coordination',
      de:'Moderner Industriebetrieb als Darstellung internationaler Beschaffungs- und Exportkoordination',
      it:'Operazioni di magazzino industriale che rappresentano sourcing internazionale e coordinamento export',
      ru:'Современный промышленный склад как образ международного сорсинга и экспортной координации',
      fa:'عملیات مدرن انبار صنعتی به‌عنوان نمادی از تأمین بین‌المللی و هماهنگی صادرات',
      zh:'体现国际采购与出口协调能力的现代工业仓储运营场景',
      vi:'Hoạt động kho công nghiệp hiện đại đại diện cho thu mua quốc tế và điều phối xuất khẩu'
    }
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
      fa:'نمونه‌های بدون نشان تجاری از روغن گیاهی و مواد اولیه غذایی برای ارزیابی تجاری',
      zh:'用于商业决策评估的中性植物油及精选大宗食品原料样品',
      vi:'Mẫu dầu thực vật không thương hiệu và nguyên liệu thực phẩm phục vụ đánh giá thương mại'
    }
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
      fa:'نمونه‌های خشکبار و میوه خشک برای بررسی کیفیت و درجه‌بندی محصول',
      zh:'用于品质检验、等级评估与规格核验的特色坚果及干果样品',
      vi:'Mẫu hạt dinh dưỡng và trái cây sấy khô phục vụ đánh giá chất lượng và phân hạng'
    }
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
      fa:'فرش‌های دستباف به‌عنوان تصویری از بررسی مواد و کیفیت بافت',
      zh:'波斯传统手工地毯纹样细节与精细打结工艺鉴别',
      vi:'Chi tiết kết cấu hoa văn và tay nghề dệt thảm thủ công truyền thống'
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
      fa:'نمونه‌های پارچه، حوله و منسوجات روی میز ارزیابی تجاری',
      zh:'用于大宗采购评估的高品质纺织面料与工业包材样品',
      vi:'Mẫu vải dệt chất lượng cao và vật tư bao bì phục vụ đánh giá thu mua'
    }
  }
};

export const homeTradeVisualKeys = ['food-oils','nuts-dates','carpets-textiles','textiles-inputs'] as const;

export const sourcingTradeVisualKeys = {
  'iranian-carpets':'carpets-textiles',
  'silk-carpets':'carpets-textiles',
  'wholesale-textiles':'textiles-inputs'
} as const;

export const localizedTradeVisual = (key:TradeVisualKey, locale:TradeVisualLocale) => {
  const visual=tradeVisuals[key];
  return {...visual,altText:visual.alt[locale]};
};
