import type { ActiveLocale } from './locales';

export type QualificationOption = { value: string; label: string };

export type ContactQualification = {
  tradeDirection: string;
  productFamily: string;
  originMarket: string;
  destinationMarket: string;
  packaging: string;
  incoterm: string;
  tradeDirections: QualificationOption[];
  productFamilies: QualificationOption[];
};

export const contactQualification: Record<ActiveLocale, ContactQualification> = {
  tr: {
    tradeDirection: 'Ticaret yönü',
    productFamily: 'Ürün grubu',
    originMarket: 'Menşe veya çıkış ülkesi',
    destinationMarket: 'Hedef ülke veya pazar',
    packaging: 'Ambalaj veya sunum biçimi',
    incoterm: 'Tercih edilen teslim şekli / Incoterm',
    tradeDirections: [
      { value: 'export_from_turkiye', label: 'Türkiye’den ihracat' },
      { value: 'import_to_turkiye', label: 'Türkiye’ye ithalat' },
      { value: 'cross_border_sourcing', label: 'Sınır ötesi tedarik' },
      { value: 'market_entry', label: 'Pazara giriş ve alıcı geliştirme' },
      { value: 'other', label: 'Diğer ticari değerlendirme' },
    ],
    productFamilies: [
      { value: 'vegetable_oils', label: 'Bitkisel yağlar ve gıda' },
      { value: 'nuts_dried_fruit', label: 'Kuruyemiş ve kuru meyve' },
      { value: 'architectural_glass', label: 'Mimari ve endüstriyel cam' },
      { value: 'biofuel_feedstock', label: 'Biyoyakıt ve enerji hammaddesi' },
      { value: 'other', label: 'Diğer ürün veya hizmet' },
    ],
  },
  en: {
    tradeDirection: 'Trade direction',
    productFamily: 'Product family',
    originMarket: 'Country of origin or dispatch',
    destinationMarket: 'Target country or market',
    packaging: 'Packaging or presentation format',
    incoterm: 'Preferred delivery basis / Incoterm',
    tradeDirections: [
      { value: 'export_from_turkiye', label: 'Exporting from Türkiye' },
      { value: 'import_to_turkiye', label: 'Importing into Türkiye' },
      { value: 'cross_border_sourcing', label: 'Cross-border sourcing' },
      { value: 'market_entry', label: 'Market entry and buyer development' },
      { value: 'other', label: 'Other commercial assessment' },
    ],
    productFamilies: [
      { value: 'vegetable_oils', label: 'Vegetable oils and food' },
      { value: 'nuts_dried_fruit', label: 'Nuts and dried fruit' },
      { value: 'architectural_glass', label: 'Architectural and industrial glass' },
      { value: 'biofuel_feedstock', label: 'Biofuel and energy feedstock' },
      { value: 'other', label: 'Other product or service' },
    ],
  },
  de: {
    tradeDirection: 'Handelsrichtung',
    productFamily: 'Produktgruppe',
    originMarket: 'Ursprungs- oder Versandland',
    destinationMarket: 'Zielmarkt oder Zielland',
    packaging: 'Verpackungs- oder Angebotsform',
    incoterm: 'Bevorzugte Lieferkondition / Incoterm',
    tradeDirections: [
      { value: 'export_from_turkiye', label: 'Export aus der Türkei' },
      { value: 'import_to_turkiye', label: 'Import in die Türkei' },
      { value: 'cross_border_sourcing', label: 'Grenzüberschreitende Beschaffung' },
      { value: 'market_entry', label: 'Markteintritt und Käuferentwicklung' },
      { value: 'other', label: 'Andere kommerzielle Bewertung' },
    ],
    productFamilies: [
      { value: 'vegetable_oils', label: 'Pflanzenöle und Lebensmittel' },
      { value: 'nuts_dried_fruit', label: 'Nüsse und Trockenfrüchte' },
      { value: 'architectural_glass', label: 'Architektur- und Industrieglas' },
      { value: 'biofuel_feedstock', label: 'Biokraftstoff und Energierohstoffe' },
      { value: 'other', label: 'Anderes Produkt oder Dienstleistung' },
    ],
  },
  it: {
    tradeDirection: 'Direzione commerciale',
    productFamily: 'Famiglia di prodotto',
    originMarket: 'Paese di origine o spedizione',
    destinationMarket: 'Paese o mercato di destinazione',
    packaging: 'Formato di imballaggio o presentazione',
    incoterm: 'Resa preferita / Incoterm',
    tradeDirections: [
      { value: 'export_from_turkiye', label: 'Esportazione dalla Turchia' },
      { value: 'import_to_turkiye', label: 'Importazione in Turchia' },
      { value: 'cross_border_sourcing', label: 'Sourcing transfrontaliero' },
      { value: 'market_entry', label: 'Ingresso nel mercato e sviluppo buyer' },
      { value: 'other', label: 'Altra valutazione commerciale' },
    ],
    productFamilies: [
      { value: 'vegetable_oils', label: 'Oli vegetali e alimentari' },
      { value: 'nuts_dried_fruit', label: 'Frutta a guscio e secca' },
      { value: 'architectural_glass', label: 'Vetro architettonico e industriale' },
      { value: 'biofuel_feedstock', label: 'Biocarburanti e materie prime energetiche' },
      { value: 'other', label: 'Altro prodotto o servizio' },
    ],
  },
  ru: {
    tradeDirection: 'Направление торговли',
    productFamily: 'Товарная группа',
    originMarket: 'Страна происхождения или отправки',
    destinationMarket: 'Целевая страна или рынок',
    packaging: 'Формат упаковки или представления',
    incoterm: 'Предпочтённое условие поставки / Incoterm',
    tradeDirections: [
      { value: 'export_from_turkiye', label: 'Экспорт из Турции' },
      { value: 'import_to_turkiye', label: 'Импорт в Турцию' },
      { value: 'cross_border_sourcing', label: 'Трансграничный сорсинг' },
      { value: 'market_entry', label: 'Выход на рынок и развитие покупателей' },
      { value: 'other', label: 'Другая коммерческая оценка' },
    ],
    productFamilies: [
      { value: 'vegetable_oils', label: 'Растительные масла и продукты питания' },
      { value: 'nuts_dried_fruit', label: 'Орехи и сухофрукты' },
      { value: 'architectural_glass', label: 'Архитектурное и промышленное стекло' },
      { value: 'biofuel_feedstock', label: 'Биотопливо и энергетическое сырьё' },
      { value: 'other', label: 'Другой товар или услуга' },
    ],
  },
  fa: {
    tradeDirection: 'جهت تجارت',
    productFamily: 'گروه محصول',
    originMarket: 'کشور مبدأ یا ارسال',
    destinationMarket: 'کشور یا بازار هدف',
    packaging: 'نوع بسته‌بندی یا ارائه',
    incoterm: 'شرط تحویل ترجیحی / Incoterm',
    tradeDirections: [
      { value: 'export_from_turkiye', label: 'صادرات از ترکیه' },
      { value: 'import_to_turkiye', label: 'واردات به ترکیه' },
      { value: 'cross_border_sourcing', label: 'تأمین فرامرزی' },
      { value: 'market_entry', label: 'ورود به بازار و توسعه خریدار' },
      { value: 'other', label: 'ارزیابی تجاری دیگر' },
    ],
    productFamilies: [
      { value: 'vegetable_oils', label: 'روغن‌های گیاهی و مواد غذایی' },
      { value: 'nuts_dried_fruit', label: 'خشکبار و میوه خشک' },
      { value: 'architectural_glass', label: 'شیشه معماری و صنعتی' },
      { value: 'biofuel_feedstock', label: 'سوخت زیستی و مواد اولیه انرژی' },
      { value: 'other', label: 'محصول یا خدمت دیگر' },
    ],
  },
  zh: {
    tradeDirection: '贸易合作流向',
    productFamily: '目标产品品类',
    originMarket: '原产地或发运国',
    destinationMarket: '目标交付国或销售市场',
    packaging: '包装形式或规格要求',
    incoterm: '首选贸易交付条款 (Incoterms)',
    tradeDirections: [
      { value: 'export_from_turkiye', label: '自土耳其出口至全球' },
      { value: 'import_to_turkiye', label: '自海外进口至土耳其' },
      { value: 'cross_border_sourcing', label: '跨国大宗战略寻源与采购' },
      { value: 'market_entry', label: '海外市场准入与买家渠道拓展' },
      { value: 'other', label: '其他专项商业评估' },
    ],
    productFamilies: [
      { value: 'vegetable_oils', label: '大宗植物油与食品原料' },
      { value: 'nuts_dried_fruit', label: '特色坚果与脱水干果' },
      { value: 'architectural_glass', label: '建筑及工业玻璃' },
      { value: 'biofuel_feedstock', label: '生物燃料与能源化工原料' },
      { value: 'other', label: '其他大宗商品或工业品' },
    ],
  },
  vi: {
    tradeDirection: 'Hướng thương mại',
    productFamily: 'Nhóm sản phẩm',
    originMarket: 'Quốc gia xuất xứ hoặc gửi hàng',
    destinationMarket: 'Quốc gia hoặc thị trường mục tiêu',
    packaging: 'Quy cách đóng gói hoặc trình bày',
    incoterm: 'Điều kiện giao hàng ưu tiên / Incoterm',
    tradeDirections: [
      { value: 'export_from_turkiye', label: 'Xuất khẩu từ Thổ Nhĩ Kỳ' },
      { value: 'import_to_turkiye', label: 'Nhập khẩu vào Thổ Nhĩ Kỳ' },
      { value: 'cross_border_sourcing', label: 'Thu mua xuyên biên giới' },
      { value: 'market_entry', label: 'Tiếp cận thị trường và phát triển người mua' },
      { value: 'other', label: 'Đánh giá thương mại khác' },
    ],
    productFamilies: [
      { value: 'vegetable_oils', label: 'Dầu thực vật và thực phẩm' },
      { value: 'nuts_dried_fruit', label: 'Hạt và trái cây khô' },
      { value: 'architectural_glass', label: 'Kính kiến trúc và công nghiệp' },
      { value: 'biofuel_feedstock', label: 'Nhiên liệu sinh học & nguyên liệu năng lượng' },
      { value: 'other', label: 'Sản phẩm hoặc dịch vụ khác' },
    ],
  },
};
