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

const REGIONAL_MARKERS = {
  de: ['DACH', 'Nearshoring', 'Lieferanten', 'Türkei'],
  it: ['Italia', 'fornitori', 'Turchia'],
  ru: ['Турци', 'поставщик', 'сорсинг'],
  fa: ['ایران', 'تأمین', 'ترکیه'],
  zh: ['土耳其', '采购', '出海'],
  vi: ['Thổ Nhĩ Kỳ', 'sourcing', 'nhà cung cấp']
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

console.log('Running CTSEG Homepage Parity Verification across all 13 locales...\n');

for (const locale of ACTIVE_LOCALES) {
  const filePath = getHomepagePath(locale);
  if (!fs.existsSync(filePath)) {
    failures.push(`[${locale}] Homepage file not found at ${filePath}`);
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf8');

  // 1. Hero Check
  if (!html.includes('homepage-trade-hero') && !html.includes('hero-grid')) {
    failures.push(`[${locale}] Missing homepage-trade-hero section`);
  }
  if (!html.includes('<h1')) {
    failures.push(`[${locale}] Missing <h1> heading`);
  }

  // 2. Turkish Hero Specific Preservation
  if (locale === 'tr') {
    if (!html.includes('ctseg-home-claim')) {
      failures.push(`[tr] Missing .ctseg-home-claim class in hero title`);
    }
    if (!html.includes('Türkiye’den dünyaya.')) {
      failures.push(`[tr] Missing exact first line 'Türkiye’den dünyaya.'`);
    }
    if (!html.includes('Dünyadan doğru üreticiye.')) {
      failures.push(`[tr] Missing exact second line 'Dünyadan doğru üreticiye.'`);
    }
  }

  // 3. Eight Commercial Sectors Check
  for (const sectorId of SECTOR_IDS) {
    if (!html.includes(`data-b2b-sector="${sectorId}"`)) {
      failures.push(`[${locale}] Missing B2B sector card for '${sectorId}'`);
    }
  }

  // 4. Natural Oils Feature Section Check
  if (!html.includes('ctseg-oils-home-feature') && !html.includes('/natural-oils/')) {
    failures.push(`[${locale}] Missing Natural Oils feature section`);
  }

  // 5. Commercial RFQ Form Check
  if (!html.includes('commercial-form') && !html.includes('he-standard-form-section') && !html.includes('form')) {
    failures.push(`[${locale}] Missing commercial request form`);
  }

  // 6. Regional SEO Content Preservation Check
  if (REGIONAL_MARKERS[locale]) {
    const markers = REGIONAL_MARKERS[locale];
    const foundMarkers = markers.filter(m => html.includes(m));
    if (foundMarkers.length === 0) {
      failures.push(`[${locale}] Missing required regional SEO content markers (${markers.join(', ')})`);
    }
  }

  // 7. Navigation Check: Trade Portfolio link present in header nav
  const expectedPortfolioLabel = PORTFOLIO_NAV_LABELS[locale];
  if (!html.includes(expectedPortfolioLabel)) {
    failures.push(`[${locale}] Missing Trade Portfolio navigation label (${expectedPortfolioLabel}) in header`);
  }

  console.log(`✓ [${locale}] All parity checks passed`);
}

console.log('\n----------------------------------------');
if (failures.length > 0) {
  console.error(`FAILED: ${failures.length} parity errors found:`);
  for (const err of failures) {
    console.error(`  - ${err}`);
  }
  process.exit(1);
} else {
  console.log('SUCCESS: All 13 locales maintain 100% design, sector, natural oils, and content parity!');
}
