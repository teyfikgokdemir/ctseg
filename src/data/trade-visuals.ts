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
  aspectRatio:'3 / 2';
  focalPosition:string;
  alt:Record<TradeVisualLocale,string>;
  width:1536;
  height:1024;
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
      fa:'نمونه‌های بدون نشان تجاری از روغن گیاهی و مواد اولیه غذایی برای ارزیابی تجاری'
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
      fa:'نمونه‌های خشکبار و میوه خشک برای بررسی کیفیت و درجه‌بندی محصول'
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
      fa:'فرش‌های دستباف به‌عنوان تصویری از بررسی مواد و کیفیت بافت'
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
