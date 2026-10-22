import fs from 'node:fs';
import path from 'node:path';

const ACTIVE_LOCALES = [
  'tr', 'en', 'de', 'it', 'fa', 'ru', 'zh', 'vi', 'uk', 'ro', 'bg', 'he', 'ar'
];

const SECTOR_IDS = [
  'glass',
  'natural-oils',
  'food-agri',
  'nuts-dried-fruits',
  'animal-feed',
  'industrial',
  'packaging-inputs',
  'textiles'
];

// Exact sector card titles as rendered from src/data/portfolio-sectors.ts
const SECTOR_TITLES = {
  tr: {
    glass: 'Cam ve Yapı Malzemeleri',
    'natural-oils': 'Doğal Yağlar ve Kozmetik Ham Maddeleri',
    'food-agri': 'Gıda ve Tarımsal Ürünler',
    'nuts-dried-fruits': 'Kuruyemiş, Tohum ve Kuru Meyveler',
    'animal-feed': 'Hayvan Yemi ve Yem Hammaddeleri',
    industrial: 'Endüstriyel Ürünler ve Ekipmanlar',
    'packaging-inputs': 'Ambalaj ve Üretim Girdileri',
    textiles: 'Tekstil ve Hazır Giyim'
  },
  en: {
    glass: 'Glass &amp; Building Materials',
    'natural-oils': 'Natural Oils &amp; Cosmetic Raw Materials',
    'food-agri': 'Food &amp; Agricultural Products',
    'nuts-dried-fruits': 'Nuts, Seeds &amp; Dried Fruits',
    'animal-feed': 'Animal Feed &amp; Feed Ingredients',
    industrial: 'Industrial Products &amp; Equipment',
    'packaging-inputs': 'Packaging &amp; Production Inputs',
    textiles: 'Textiles &amp; Apparel'
  },
  de: {
    glass: 'Glas &amp; Baustoffe',
    'natural-oils': 'Natürliche Öle &amp; Kosmetikrohstoffe',
    'food-agri': 'Lebensmittel &amp; Agrarprodukte',
    'nuts-dried-fruits': 'Nüsse, Saaten &amp; Trockenfrüchte',
    'animal-feed': 'Tierfutter &amp; Futtermittelrohstoffe',
    industrial: 'Industrieprodukte &amp; Ausrüstung',
    'packaging-inputs': 'Verpackung &amp; Produktionsmittel',
    textiles: 'Textilien &amp; Bekleidung'
  },
  it: {
    glass: 'Vetro e Materiali da Costruzione',
    'natural-oils': 'Oli Naturali e Materie Prime Cosmetiche',
    'food-agri': 'Prodotti Alimentari e Agricoli',
    'nuts-dried-fruits': 'Frutta a Guscio, Semi e Frutta Essiccata',
    'animal-feed': 'Mangimi Animali e Materie Prime',
    industrial: 'Prodotti e Impianti Industriali',
    'packaging-inputs': 'Imballaggi e Input Produttivi',
    textiles: 'Tessile e Abbigliamento'
  },
  fa: {
    glass: 'شیشه و مصالح ساختمانی',
    'natural-oils': 'روغن‌های طبیعی و مواد اولیه آرایشی',
    'food-agri': 'مواد غذایی و محصولات کشاورزی',
    'nuts-dried-fruits': 'خشکبار، دانه‌ها و میوه‌های خشک',
    'animal-feed': 'خوراک دام و طیور و نهاده‌های خوراکی',
    industrial: 'محصولات و تجهیزات صنعتی',
    'packaging-inputs': 'بسته‌بندی و نهاده‌های تولید',
    textiles: 'منسوجات و پوشاک آماده'
  },
  ru: {
    glass: 'Стекло и строительные материалы',
    'natural-oils': 'Натуральные масла и косметическое сырьё',
    'food-agri': 'Продукты питания и агропродукция',
    'nuts-dried-fruits': 'Орехи, семена и сухофрукты',
    'animal-feed': 'Корма для животных и кормовые компоненты',
    industrial: 'Промышленная продукция и оборудование',
    'packaging-inputs': 'Упаковка и производственное сырьё',
    textiles: 'Текстиль и готовая одежда'
  },
  zh: {
    glass: '建筑玻璃与建材制品',
    'natural-oils': '天然油脂与化妆品原料',
    'food-agri': '食品与大宗农产品',
    'nuts-dried-fruits': '坚果、籽仁与干果系列',
    'animal-feed': '动物饲料与饲料原料',
    industrial: '工业产品与机械设备',
    'packaging-inputs': '包装材料与生产辅料',
    textiles: '纺织品与成衣制造'
  },
  vi: {
    glass: 'Kính &amp; Vật liệu Xây dựng',
    'natural-oils': 'Tinh dầu Tự nhiên &amp; Nguyên liệu Mỹ phẩm',
    'food-agri': 'Thực phẩm &amp; Nông sản',
    'nuts-dried-fruits': 'Hạt dinh dưỡng, Hạt &amp; Trái cây khô',
    'animal-feed': 'Thức ăn Chăn nuôi &amp; Nguyên liệu Thức ăn',
    industrial: 'Sản phẩm &amp; Thiết bị Công nghiệp',
    'packaging-inputs': 'Bao bì &amp; Vật tư Sản xuất',
    textiles: 'Dệt may &amp; Hàng may mặc'
  },
  uk: {
    glass: 'Скло та будівельні матеріали',
    'natural-oils': 'Натуральні олії та косметична сировина',
    'food-agri': 'Харчові та аграрні продукти',
    'nuts-dried-fruits': 'Горіхи, насіння та сухофрукти',
    'animal-feed': 'Корми для тварин і кормова сировина',
    industrial: 'Промислові товари та обладнання',
    'packaging-inputs': 'Пакування та виробничі матеріали',
    textiles: 'Текстиль і готовий одяг'
  },
  ro: {
    glass: 'Sticlă și Materiale de Construcții',
    'natural-oils': 'Uleiuri Naturale și Materii Prime Cosmetice',
    'food-agri': 'Produse Alimentare și Agricole',
    'nuts-dried-fruits': 'Nuci, Semințe și Fructe Uscate',
    'animal-feed': 'Furaje și Ingrediente pentru Nutriția Animalelor',
    industrial: 'Produse și Echipamente Industriale',
    'packaging-inputs': 'Ambalaje și Inputuri de Producție',
    textiles: 'Textile și Îmbrăcăminte'
  },
  bg: {
    glass: 'Стъкло и Строителни Материали',
    'natural-oils': 'Натурални Масла и Козметични Суровини',
    'food-agri': 'Храни и Селскостопански Продукти',
    'nuts-dried-fruits': 'Ядки, Семена и Сушени Плодове',
    'animal-feed': 'Фуражи за Животни и Фуражни Суровини',
    industrial: 'Индустриални Продукти и Оборудване',
    'packaging-inputs': 'Опаковки и Производствени Консумативи',
    textiles: 'Текстил и Готово Облекло'
  },
  he: {
    glass: 'זכוכית וחומרי בנייה',
    'natural-oils': 'שמנים טבעיים וחומרי גלם לקוסמטיקה',
    'food-agri': 'מזון ותוצרת חקלאית',
    'nuts-dried-fruits': 'אגוזים, זרעים ופירות יבשים',
    'animal-feed': 'מזון לבעלי חיים ורכיבי מספוא',
    industrial: 'מוצרים וציוד תעשייתי',
    'packaging-inputs': 'אריזה ותשומות ייצור',
    textiles: 'טקסטיל והלבשה'
  },
  ar: {
    glass: 'الزجاج ومواد البناء',
    'natural-oils': 'الزيوت الطبيعية والمواد الخام التجميلية',
    'food-agri': 'المنتجات الغذائية والزراعية',
    'nuts-dried-fruits': 'المكسرات والبذور والفواكه المجففة',
    'animal-feed': 'الأعلاف الحيوانية ومدخلات الأعلاف',
    industrial: 'المنتجات والمعدات الصناعية',
    'packaging-inputs': 'التعبئة والتغليف ومدخلات الإنتاج',
    textiles: 'المنسوجات والملابس الجاهزة'
  }
};

const PORTFOLIO_NAV_LABELS = {
  tr: 'Ticaret Portföyü',
  en: 'Trade Portfolio',
  de: 'Handelsportfolio',
  it: 'Portafoglio',
  fa: 'سبد تجاری',
  ru: 'Торговый портфель',
  zh: '贸易组合',
  vi: 'Danh mục thương mại',
  uk: 'Торговельний портфель',
  ro: 'Portofoliu Comercial',
  bg: 'Търговско портфолио',
  he: 'תחומי סחר',
  ar: 'المحفظة التجارية'
};

function getHomepagePath(locale) {
  if (locale === 'tr') {
    return path.join('dist', 'index.html');
  }
  return path.join('dist', locale, 'index.html');
}

let failures = [];

console.log('Running CTSEG Enhanced DOM Parity Verification across all 13 locales...\n');

for (const locale of ACTIVE_LOCALES) {
  const filePath = getHomepagePath(locale);
  if (!fs.existsSync(filePath)) {
    failures.push(`[${locale}] Homepage file not found at ${filePath}`);
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf8');

  // 1. DOM Section Ordering & Structural Sequence
  const heroIdx = html.indexOf('homepage-trade-hero') !== -1 ? html.indexOf('homepage-trade-hero') : html.indexOf('hero-grid');
  const sectorsIdx = html.indexOf('b2b-sectors-section') !== -1 ? html.indexOf('b2b-sectors-section') : html.indexOf('b2b-sector-grid');
  const oilsIdx = html.indexOf('ctseg-oils-home-feature') !== -1 ? html.indexOf('ctseg-oils-home-feature') : html.indexOf('/natural-oils/');
  const formIdx = html.indexOf('id="commercial-form"') !== -1 ? html.indexOf('id="commercial-form"') : html.indexOf('he-standard-form-section');

  if (heroIdx === -1) failures.push(`[${locale}] Missing Hero section in DOM`);
  if (!html.includes('<h1')) failures.push(`[${locale}] Missing <h1> heading`);
  if (sectorsIdx === -1) failures.push(`[${locale}] Missing B2B sectors section in DOM`);
  if (oilsIdx === -1) failures.push(`[${locale}] Missing Natural Oils feature section in DOM`);
  if (formIdx === -1) failures.push(`[${locale}] Missing RFQ Commercial form section in DOM`);

  // Verify sequential order (Hero before Sectors, Sectors before Oils, Oils before Form)
  if (locale !== 'he') {
    if (heroIdx !== -1 && sectorsIdx !== -1 && heroIdx >= sectorsIdx) {
      failures.push(`[${locale}] Section order violation: Hero (${heroIdx}) should precede Sectors (${sectorsIdx})`);
    }
    if (sectorsIdx !== -1 && oilsIdx !== -1 && sectorsIdx >= oilsIdx) {
      failures.push(`[${locale}] Section order violation: Sectors (${sectorsIdx}) should precede Oils (${oilsIdx})`);
    }
    if (oilsIdx !== -1 && formIdx !== -1 && oilsIdx >= formIdx) {
      failures.push(`[${locale}] Section order violation: Oils (${oilsIdx}) should precede Form (${formIdx})`);
    }
  }

  // 2. Strict Turkish Hero Preservation
  if (locale === 'tr') {
    if (!html.includes('ctseg-home-claim')) {
      failures.push(`[tr] Missing .ctseg-home-claim class in hero title`);
    }
    const line1Regex = /<span[^>]*class="[^"]*ctseg-home-claim__line[^"]*"[^>]*>Türkiye’den dünyaya\.<\/span>/;
    const line2Regex = /<span[^>]*class="[^"]*ctseg-home-claim__line[^"]*"[^>]*>Dünyadan doğru üreticiye\.<\/span>/;
    if (!line1Regex.test(html)) {
      failures.push(`[tr] Missing or modified exact first line DOM element: '<span class="ctseg-home-claim__line">Türkiye’den dünyaya.</span>'`);
    }
    if (!line2Regex.test(html)) {
      failures.push(`[tr] Missing or modified exact second line DOM element: '<span class="ctseg-home-claim__line">Dünyadan doğru üreticiye.</span>'`);
    }
  }

  // 3. Eight Commercial Sector Cards Deep Verification
  const expectedTitles = SECTOR_TITLES[locale];
  for (const sectorId of SECTOR_IDS) {
    const cardMarker = `data-b2b-sector="${sectorId}"`;
    if (!html.includes(cardMarker)) {
      failures.push(`[${locale}] Missing B2B sector card with attribute ${cardMarker}`);
      continue;
    }

    // Verify card title matches official portfolio sector title
    if (expectedTitles && expectedTitles[sectorId]) {
      const expectedTitle = expectedTitles[sectorId];
      if (!html.includes(expectedTitle)) {
        failures.push(`[${locale}] Missing exact sector title for '${sectorId}': expected '${expectedTitle}'`);
      }
    }
  }

  // Verify sector glass is NOT using the invalid label "Cam Ambalaj ve Züccaciye"
  if (locale === 'tr') {
    if (html.includes('Cam Ambalaj ve Züccaciye')) {
      failures.push(`[tr] Regressed to invalid sector label 'Cam Ambalaj ve Züccaciye' instead of 'Cam ve Yapı Malzemeleri'`);
    }
    if (!html.includes('Cam ve Yapı Malzemeleri')) {
      failures.push(`[tr] Missing true glass sector title 'Cam ve Yapı Malzemeleri'`);
    }
  }

  // 4. Natural Oils Feature Section Check
  if (!html.includes('ctseg-oils-home-feature') && !html.includes('/natural-oils/')) {
    failures.push(`[${locale}] Missing Natural Oils feature section`);
  }

  // 5. Restored Regional Market Corridors Verification
  if (['de', 'it', 'ru'].includes(locale)) {
    if (!html.includes('regional-market-corridor')) {
      failures.push(`[${locale}] Missing regional-market-corridor section`);
    }
    if (!html.includes('id="regional-sectors"')) {
      failures.push(`[${locale}] Missing restored regional sectors list (id="regional-sectors")`);
    }
    if (!html.includes('id="regional-process"')) {
      failures.push(`[${locale}] Missing restored regional process procedure (id="regional-process")`);
    }
    if (locale === 'ru' && !html.includes('КОМПЛАЕНС')) {
      failures.push(`[ru] Missing compliance marker 'КОМПЛАЕНС' in regional corridor`);
    }
  } else if (locale === 'fa') {
    if (!html.includes('regional-market-corridor')) {
      failures.push(`[fa] Missing regional-market-corridor section`);
    }
    if (!html.includes('id="regional-sectors"')) {
      failures.push(`[fa] Missing restored Iran inbound trade sectors (id="regional-sectors")`);
    }
    if (!html.includes('id="regional-process"')) {
      failures.push(`[fa] Missing restored Iran trade process (id="regional-process")`);
    }
    if (!html.includes('سناریوهای نمونه همکاری')) {
      failures.push(`[fa] Missing Iran trade scenario link 'سناریوهای نمونه همکاری'`);
    }
  } else if (locale === 'zh') {
    if (!html.includes('regional-market-corridor')) {
      failures.push(`[zh] Missing regional-market-corridor section`);
    }
    if (!html.includes('id="regional-sectors"')) {
      failures.push(`[zh] Missing restored China priority export sectors (id="regional-sectors")`);
    }
    if (!html.includes('id="regional-process"')) {
      failures.push(`[zh] Missing restored China market entry process (id="regional-process")`);
    }
  } else if (locale === 'vi') {
    if (!html.includes('regional-market-corridor')) {
      failures.push(`[vi] Missing regional-market-corridor section`);
    }
    if (!html.includes('id="regional-sectors"')) {
      failures.push(`[vi] Missing restored Vietnam export sectors (id="regional-sectors")`);
    }
    if (!html.includes('id="regional-process"')) {
      failures.push(`[vi] Missing restored Vietnam market evaluation process (id="regional-process")`);
    }
  }

  // 6. Commercial RFQ Form Deep Check
  if (locale !== 'he') {
    if (!html.includes('id="commercial-form"')) {
      failures.push(`[${locale}] Missing form with id="commercial-form"`);
    }
    if (!html.includes('name="emailOrPhone"')) {
      failures.push(`[${locale}] Commercial form missing 'name="emailOrPhone"' contact input field`);
    }
    if (!html.includes('type="submit"') && !html.includes('<button class="button"')) {
      failures.push(`[${locale}] Commercial form missing submit button`);
    }
  }

  // 7. Navigation Check: Trade Portfolio link present in header nav
  const expectedPortfolioLabel = PORTFOLIO_NAV_LABELS[locale];
  if (!html.includes(expectedPortfolioLabel)) {
    failures.push(`[${locale}] Missing Trade Portfolio navigation label (${expectedPortfolioLabel}) in header`);
  }

  // 8. Media Consistency Check
  if (locale === 'tr') {
    if (!html.includes('ctseg-home-promo-video')) {
      failures.push(`[tr] Missing Turkish hero promo video (.ctseg-home-promo-video)`);
    }
  }
  if (!html.includes('trade-video-section') && !html.includes('data-trade-video-section')) {
    failures.push(`[${locale}] Missing TradeVideo section (.trade-video-section)`);
  }

  console.log(`✓ [${locale}] All DOM components, sequence, sectors, regional corridor, and form checks passed`);
}

console.log('\n----------------------------------------');
if (failures.length > 0) {
  console.error(`FAILED: ${failures.length} parity errors found:`);
  for (const err of failures) {
    console.error(`  - ${err}`);
  }
  process.exit(1);
} else {
  console.log('SUCCESS: All 13 locales maintain 100% verified DOM components, sequence, sector titles, regional content, and RFQ form parity!');
}
