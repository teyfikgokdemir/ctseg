import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, relative, resolve } from 'node:path';

const root = resolve('dist');
if (!existsSync(root)) {
  console.error('dist/ not found. Run npm run build first.');
  process.exit(1);
}

const walk = (dir) => readdirSync(dir, { withFileTypes:true }).flatMap((entry) =>
  entry.isDirectory() ? walk(join(dir, entry.name)) : [join(dir, entry.name)]
);
const files = walk(root);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const errors = [];
const textExtensions = new Set(['.astro','.css','.html','.js','.json','.md','.mjs','.svg','.ts','.txt','.xml','.yaml','.yml']);
const mojibakeFragments = [
  'T\u00C3',
  '\u00C4\u0178',
  '\u00C4\u00B1',
  '\u00C3\u00BC',
  '\u00C3\u00B6',
  '\u00C3\u00A7',
  '\u00C5\u0178',
  '\u00C2\u00A9',
  '\uFFFD'
];
const utf8Decoder = new TextDecoder('utf-8', { fatal:true });
const isTextFile = (file) => textExtensions.has(file.slice(file.lastIndexOf('.'))) || file.endsWith('_headers');
const scanUtf8AndMojibake = (file, label) => {
  let text;
  try {
    text = utf8Decoder.decode(readFileSync(file));
  } catch {
    errors.push(`${label}: file is not valid UTF-8`);
    return;
  }
  for (const fragment of mojibakeFragments) {
    if (text.includes(fragment)) errors.push(`${label}: forbidden mojibake sequence remains`);
  }
};
const trackedFiles = execFileSync('git', ['ls-files'], { encoding:'utf8' }).trim().split(/\r?\n/).filter(Boolean);
for (const file of trackedFiles.filter(isTextFile)) scanUtf8AndMojibake(resolve(file), `source ${file}`);
for (const file of files.filter(isTextFile)) scanUtf8AndMojibake(file, `build ${relative(root, file).replaceAll('\\','/')}`);
let checkedLinks = 0;
const pageRecords = [];
let productSchemaPages = 0;
let contactEmailPanels = 0;
const companyName = 'CTSEG Sanayi ve Ticaret Limited Şirketi';
const aboutPages = new Set([
  'tr/hakkimizda/index.html',
  'en/about/index.html',
  'de/ueber-uns/index.html',
  'it/chi-siamo/index.html',
  'fr/a-propos/index.html'
]);
const contactPages = new Set([
  'tr/iletisim/index.html',
  'en/contact/index.html',
  'de/kontakt/index.html',
  'it/contatti/index.html',
  'fr/contact/index.html'
]);
const productCatalogs = new Set([
  'tr/ticari-urunler/index.html',
  'en/trade-products/index.html',
  'de/handelsprodukte/index.html',
  'it/prodotti-commerciali/index.html',
  'fr/produits-commerciaux/index.html'
]);
const persianLandingLabel = 'fa/tamin-beynolmelali-iran/index.html';
const persianLandingCanonical = 'https://ctseg.com.tr/fa/tamin-beynolmelali-iran/';
const tradeLocaleCodes = ['tr','en','de','it','fr','fa'];
const tradeRouteFamilies = {
  carpets:{tr:'/tr/sourcing/iran-halisi/',en:'/en/sourcing/iranian-carpets/',de:'/de/sourcing/persische-teppiche/',it:'/it/sourcing/tappeti-persiani/',fr:'/fr/sourcing/tapis-persans/',fa:'/fa/sourcing/فرش-ایرانی/'},
  silk:{tr:'/tr/sourcing/el-dokumasi-ipek-hali/',en:'/en/sourcing/hand-knotted-silk-carpets/',de:'/de/sourcing/handgeknuepfte-seidenteppiche/',it:'/it/sourcing/tappeti-in-seta-annodati-a-mano/',fr:'/fr/sourcing/tapis-en-soie-noues-main/',fa:'/fa/sourcing/فرش-ابریشم-دستباف/'},
  textiles:{tr:'/tr/sourcing/toptan-tekstil-tedariki/',en:'/en/sourcing/wholesale-textile-sourcing/',de:'/de/sourcing/textil-grosshandel-beschaffung/',it:'/it/sourcing/approvvigionamento-tessile-ingrosso/',fr:'/fr/sourcing/sourcing-textile-en-gros/',fa:'/fa/sourcing/تامین-عمده-منسوجات/'}
};
const tradeRecordsByLabel = new Map(Object.entries(tradeRouteFamilies).flatMap(([family,routes]) =>
  Object.entries(routes).map(([lang,pathname]) => [decodeURI(pathname).replace(/^\//,'') + 'index.html',{family,lang,pathname,routes}])
));

const targetExists = (pathname) => {
  const clean = decodeURI(pathname).replace(/^\/+/, '').replace(/\/+$/, '');
  if (!clean) return existsSync(join(root, 'index.html'));
  return existsSync(join(root, clean)) ||
    existsSync(join(root, `${clean}.html`)) ||
    existsSync(join(root, clean, 'index.html'));
};

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const label = relative(root, file).replaceAll('\\','/');
  const titleCount = (html.match(/<title>/g) || []).length;
  const canonicalCount = (html.match(/rel="canonical"/g) || []).length;
  const headerCount = (html.match(/<header\b/g) || []).length;
  const footerCount = (html.match(/<footer\b/g) || []).length;
  const hreflangs = [...html.matchAll(/hreflang="([^"]+)"/g)].map((match) => match[1]);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const lang = html.match(/<html lang="([^"]+)"/)?.[1];
  const alternates = Object.fromEntries([...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((match) => [match[1],match[2]]));
  const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => match[1]);
  const parsedSchemas = [];
  for (const block of jsonLdBlocks) {
    try {
      const value = JSON.parse(block);
      parsedSchemas.push(...(Array.isArray(value) ? value : [value]));
    } catch (error) {
      errors.push(`${label}: invalid JSON-LD (${error.message})`);
    }
  }
  const organizations = parsedSchemas.filter((schema) => schema?.['@type'] === 'Organization');
  const organization = organizations[0];
  const isTurkishPage = label === 'index.html' || label.startsWith('tr/');
  const isPersianLanding = label === persianLandingLabel;
  const tradeRecord = tradeRecordsByLabel.get(label);
  if (!label.startsWith('404') && canonical && ['tr','en','de','it','fr'].includes(lang)) pageRecords.push({ label, canonical, lang, alternates });
  if (titleCount !== 1) errors.push(`${label}: expected one title, found ${titleCount}`);
  if ((html.match(/<meta charset="UTF-8">/g) || []).length !== 1) errors.push(`${label}: expected exactly one UTF-8 charset declaration`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) errors.push(`${label}: missing description`);
  if (canonicalCount !== 1) errors.push(`${label}: expected one canonical, found ${canonicalCount}`);
  if (headerCount !== 1 || footerCount !== 1) errors.push(`${label}: header/footer count ${headerCount}/${footerCount}`);
  if (/CTSEG Koz\u006Detik|\bKoz\u006Detik\b/i.test(html)) errors.push(`${label}: prohibited company wording remains`);
  if (/\u00C3|\u00C2|\u00E2[\u20AC\u201D\u2013\u2014\u2122\u0153]|\u00C4[\u0178\u00B1]|\u00C5[\u0178\u017E]|\uFFFD/.test(html)) {
    errors.push(`${label}: mojibake text remains`);
  }
  if (!html.includes(companyName)) {
    errors.push(`${label}: localized footer company identity missing`);
  }
  if (isTurkishPage && !html.includes('Türkiye merkezli stratejik tedarik, doğrulanmış ticari ürünler ve uluslararası ticari karar desteği.')) {
    errors.push(`${label}: exact Turkish footer description missing`);
  }
  if (isTurkishPage && !html.includes(`© ${new Date().getFullYear()} CTSEG. Tüm hakları saklıdır.`)) {
    errors.push(`${label}: exact Turkish footer copyright missing`);
  }
  if (organizations.length !== 1) errors.push(`${label}: expected one Organization schema, found ${organizations.length}`);
  if (organization && (
    organization.name !== companyName ||
    organization.alternateName !== 'CTSEG' ||
    organization.foundingDate !== '2022' ||
    organization.founder?.['@type'] !== 'Person' ||
    organization.founder?.name !== 'Teyfik Gökdemir' ||
    organization.address?.['@type'] !== 'PostalAddress' ||
    organization.address?.streetAddress !== 'Fevzipaşa Caddesi' ||
    organization.address?.addressLocality !== 'Fatih' ||
    organization.address?.addressRegion !== 'İstanbul' ||
    organization.address?.addressCountry !== 'TR'
  )) errors.push(`${label}: Organization schema company identity is incomplete`);
  if (aboutPages.has(label) && (!html.includes('company-profile-section') || !html.includes('Teyfik Gökdemir') || !html.includes('2022'))) {
    errors.push(`${label}: localized company history section missing`);
  }
  if (contactPages.has(label) && (!html.includes('company-card--contact') || !html.includes('Fevzipaşa Caddesi') || !html.includes('Teyfik Gökdemir'))) {
    errors.push(`${label}: localized company contact card missing`);
  }
  if (html.includes('fonts.googleapis.com') || html.includes('fonts.gstatic.com')) errors.push(`${label}: external Google Fonts dependency remains`);
  if (!html.includes('/fonts/dm-sans-latin-ext-variable.woff2') || !html.includes('/fonts/source-serif-4-latin-ext-variable.woff2')) {
    errors.push(`${label}: local font preloads missing`);
  }
  if (!label.startsWith('404') && !isPersianLanding && !['tr','en','de','it','fr','x-default'].every((code) => hreflangs.includes(code))) {
    errors.push(`${label}: incomplete hreflang set`);
  }
  const expectedLang = label === 'index.html' ? 'tr' : label.split('/')[0];
  if (['tr','en','de','it','fr'].includes(expectedLang) && !html.includes(`<html lang="${expectedLang}"`)) {
    errors.push(`${label}: incorrect html lang`);
  }
  if (productCatalogs.has(label)) {
    const descriptions = [...html.matchAll(/<a class="product-card[^"]*"[^>]*>[\s\S]*?<h2>[\s\S]*?<\/h2><p>(.*?)<\/p>/g)]
      .map((match) => match[1].replace(/<[^>]+>/g, '').trim());
    if (descriptions.length !== 18) errors.push(`${label}: expected 18 product-card descriptions, found ${descriptions.length}`);
    if (new Set(descriptions).size !== descriptions.length) errors.push(`${label}: duplicate product-card description`);
    if (!html.includes('Kalleh Ghouchi') && !html.includes('Kalleh-Ghouchi')) errors.push(`${label}: corrected Kalleh Ghouchi name missing`);
    const cardBlocks = [...html.matchAll(/<a class="product-card[^"]*"[^>]*>[\s\S]*?<\/a>/g)].map((match) => match[0]);
    const catalogueImages = cardBlocks
      .map((card) => card.match(/<img[^>]+src="([^"]+)"/)?.[1])
      .filter(Boolean);
    if (new Set(catalogueImages).size !== catalogueImages.length) errors.push(`${label}: repeated catalogue image source`);
    const catalogueGroups = [...html.matchAll(/data-catalogue-group="([^"]+)"/g)].map((match) => match[1]);
    if (catalogueGroups.length !== 6 || new Set(catalogueGroups).size !== 6) errors.push(`${label}: expected six unique catalogue groups`);
  }
  const isHome = ['index.html','en/index.html','de/index.html','it/index.html','fr/index.html'].includes(label);
  if (isHome && !/class="hero-visual"[\s\S]*?srcset="[^"]*\/images\/generated\/ctseg-global-trade-hero-premium-640\.webp/.test(html)) {
    errors.push(`${label}: responsive premium homepage hero missing`);
  }
  const imagePreloadCount = (html.match(/rel="preload" as="image"/g) || []).length;
  if (imagePreloadCount !== (isHome || isPersianLanding ? 1 : 0)) errors.push(`${label}: unexpected responsive image preload count ${imagePreloadCount}`);
  if (isHome) {
    const showcase = html.match(/<div class="product-editorial-grid" data-home-showcase>([\s\S]*?)<\/div>\s*<div class="actions">/)?.[1] ?? '';
    const showcaseProducts = [...showcase.matchAll(/data-product-id="([^"]+)"/g)].map((match) => match[1]);
    const showcaseFamilies = [...showcase.matchAll(/data-product-family="([^"]+)"/g)].map((match) => match[1]);
    if (showcaseProducts.length !== 6) errors.push(`${label}: expected six homepage showcase products`);
    if (showcaseProducts.filter((id) => id.includes('pistachio')).length !== 1) errors.push(`${label}: homepage showcase must contain one pistachio product`);
    if (new Set(showcaseFamilies).size < 5) errors.push(`${label}: homepage showcase must represent at least five product families`);
  }
  if (!isPersianLanding && !tradeRecord) {
    const desktopLocales = html.match(/id="language-panel"[\s\S]*?<\/div>/)?.[0] ?? '';
    const mobileLocales = html.match(/class="mobile-locales"[\s\S]*?<\/div>\s*<\/div>/)?.[0] ?? '';
    const desktopTrigger = html.match(/<button[^>]+data-language-toggle[\s\S]*?<\/button>/)?.[0] ?? '';
    if ((desktopLocales.match(/data-locale-option/g) || []).length !== 6 || !desktopLocales.includes('href="/fa/tamin-beynolmelali-iran/"')) errors.push(`${label}: desktop locale panel must contain six languages and a safe Persian fallback`);
    if ((mobileLocales.match(/data-locale-option/g) || []).length !== 6 || !mobileLocales.includes('href="/fa/tamin-beynolmelali-iran/"')) errors.push(`${label}: mobile locale panel must contain six languages and a safe Persian fallback`);
    if (!/class="locale-code">(?:TR|EN|DE|IT|FR)<\/span>/.test(desktopTrigger) || /locale-name/.test(desktopTrigger)) {
      errors.push(`${label}: desktop language trigger must show only the active locale code`);
    }
  }
  if (tradeRecord) {
    const expectedCanonical = encodeURI(`https://ctseg.com.tr${tradeRecord.pathname}`);
    const expectedDirection = tradeRecord.lang === 'fa' ? 'rtl' : 'ltr';
    if (lang !== tradeRecord.lang) errors.push(`${label}: sourcing html lang must be ${tradeRecord.lang}`);
    if (!html.includes(`<html lang="${tradeRecord.lang}" dir="${expectedDirection}"`)) errors.push(`${label}: sourcing html direction must be ${expectedDirection}`);
    if (canonical !== expectedCanonical) errors.push(`${label}: sourcing canonical does not match its route family`);
    if ((html.match(/<h1\b/g) || []).length !== 1) errors.push(`${label}: sourcing page must contain one H1`);
    if (!html.includes('data-trade-menu-toggle') || !html.includes('aria-controls="trade-locale-nav"') || !html.includes('data-trade-locale-nav')) {
      errors.push(`${label}: sourcing mobile locale menu controls missing`);
    }
    const localeTags = [...html.matchAll(/<a\b[^>]*data-trade-locale="([^"]+)"[^>]*>/g)].map((match) => ({code:match[1],tag:match[0]}));
    if (localeTags.length !== 6 || !tradeLocaleCodes.every((code) => localeTags.some((item) => item.code === code))) {
      errors.push(`${label}: sourcing locale navigation must expose all six languages`);
    }
    const activeLocales = localeTags.filter((item) => item.tag.includes('aria-current="page"'));
    if (activeLocales.length !== 1 || activeLocales[0]?.code !== tradeRecord.lang) errors.push(`${label}: sourcing active locale is incorrect`);
    for (const code of tradeLocaleCodes) {
      const targetPath = tradeRecord.routes[code];
      const expectedAlternate = encodeURI(`https://ctseg.com.tr${targetPath}`);
      const localeLink = localeTags.find((item) => item.code === code)?.tag ?? '';
      if (alternates[code] !== expectedAlternate) errors.push(`${label}: sourcing hreflang ${code} points outside its content family`);
      if (!localeLink.includes(`href="${encodeURI(targetPath)}"`)) errors.push(`${label}: sourcing locale switch ${code} points outside its content family`);
      if (!targetExists(targetPath)) errors.push(`${label}: sourcing locale switch ${code} target is missing`);
    }
    if (alternates['x-default'] !== encodeURI(`https://ctseg.com.tr${tradeRecord.routes.en}`)) errors.push(`${label}: sourcing x-default must point to the English family route`);
    if (tradeRecord.lang === 'fa') {
      for (const untranslated of ['Skip to content','Language selection','Open language menu','CTSEG home','Submit a commercial enquiry','Related sourcing areas']) {
        if (html.includes(untranslated)) errors.push(`${label}: untranslated interface text remains (${untranslated})`);
      }
      for (const required of ['برای تولیدکنندگان و صادرکنندگان ایرانی','معرفی محصول به بازارهای بین‌المللی','ارزیابی آمادگی صادرات','مدیریت استعلام قیمت و RFQ','هماهنگی اسناد و لجستیک','ترکیه، اروپا، آمریکا','CTSEG کارخانه یا خریدار تضمینی نیست','معرفی محصول خود','آغاز همکاری صادراتی']) {
        if (!html.includes(required)) errors.push(`${label}: Persian producer/exporter content missing (${required})`);
      }
      const expectedAudiences = tradeRecord.family === 'textiles'
        ? ['تولیدکنندگان پارچه','تولیدکنندگان حوله و حوله تن‌پوش','تولیدکنندگان منسوجات خانگی','تولیدکنندگان پوشاک','برندهای private label']
        : ['کارگاه‌های فرش دستباف','تولیدکنندگان فرش ابریشم','تولیدکنندگان فرش ماشینی','صادرکنندگان فرش'];
      for (const audience of expectedAudiences) if (!html.includes(audience)) errors.push(`${label}: Persian target audience missing (${audience})`);
      if ((html.match(/data-producer-cta/g) || []).length !== 5) errors.push(`${label}: five producer/export CTA links required`);
    } else if (html.includes('data-persian-producer-section')) {
      errors.push(`${label}: Persian producer section leaked into a non-Persian locale`);
    }
  }
  if (isPersianLanding) {
    if (!html.includes('<html lang="fa" dir="rtl">')) errors.push(`${label}: Persian html lang/RTL declaration missing`);
    if (canonical !== persianLandingCanonical) errors.push(`${label}: incorrect standalone canonical`);
    if (html.includes('<link rel="alternate" hreflang=')) errors.push(`${label}: standalone page must not publish fake locale alternates`);
    const persianLocaleTags = [...html.matchAll(/<a\b[^>]*data-locale-option[^>]*>/g)].map((match) => match[0]);
    const persianLocalePaths = {tr:'/tr/pazarlar/',en:'/en/markets/',de:'/de/maerkte/',it:'/it/mercati/',fr:'/fr/marches/',fa:'/fa/tamin-beynolmelali-iran/'};
    if (persianLocaleTags.length !== 6) errors.push(`${label}: Persian header must expose six locale options`);
    for (const [code,path] of Object.entries(persianLocalePaths)) {
      const tag = persianLocaleTags.find((item) => item.includes(`hreflang="${code}"`)) ?? '';
      if (!tag.includes(`href="${path}"`) || !targetExists(path)) errors.push(`${label}: Persian locale switch ${code} target is incorrect or missing`);
      if ((code === 'fa') !== tag.includes('aria-current="page"')) errors.push(`${label}: Persian locale active state is incorrect for ${code}`);
    }
    if ((html.match(/<h1\b/g) || []).length !== 1) errors.push(`${label}: expected one Persian H1`);
    if ((html.match(/<details\b/g) || []).length !== 11) errors.push(`${label}: expected eleven visible Persian FAQs`);
    for (const type of ['WebPage','Service','FAQPage','BreadcrumbList']) {
      if (!parsedSchemas.some((schema) => schema?.['@type'] === type)) errors.push(`${label}: ${type} schema missing`);
    }
    if (!html.includes('data-fa-sourcing-form') || !html.includes('name="website"') || !html.includes('name="privacyConsent"') ||
      !html.includes('id="fa-form-errors" role="alert"') || !html.includes('id="fa-form-fallback"')) {
      errors.push(`${label}: accessible secure-fallback form controls missing`);
    }
    const fields = [...html.matchAll(/<(?:input|select|textarea)\b[^>]*\bid="([^"]+)"/g)]
      .map((match) => match[1]).filter((id) => id !== 'website');
    if (!fields.every((id) => new RegExp(`<label[^>]+for="${id}"`).test(html))) errors.push(`${label}: every user-facing form field must have an explicit label`);
    if (!html.includes('form.dataset.startedAt=String(Date.now())') || !html.includes('10*1024*1024')) {
      errors.push(`${label}: client-side minimum-time or upload-size guard missing`);
    }
    for (const eventName of ['fa_landing_view','fa_form_start','fa_form_submit_attempt','fa_form_submission_success','fa_email_cta_click','fa_english_link_click']) {
      if (!html.includes(eventName)) errors.push(`${label}: analytics event ${eventName} missing`);
    }
    if (!html.includes('اما هنوز برای CTSEG ارسال نشده است') || !html.includes('Generated locally; not yet submitted.')) {
      errors.push(`${label}: transparent no-backend fallback disclosure missing`);
    }
    for (const forbidden of ['تحریم‌ها را دور می‌زنیم','هر محصولی را به ایران ارسال می‌کنیم','پرداخت تضمینی','انتقال بانکی بدون مشکل','تحویل در هر شرایط','تضمین گمرک','تضمین مجوز واردات']) {
      if (html.includes(forbidden)) errors.push(`${label}: prohibited commercial claim remains`);
    }
    if (/(?:Ana Sayfa|Hizmetler|Hakkımızda|İletişim|Teklif İste|Tüm hakları saklıdır)/.test(html)) {
      errors.push(`${label}: Turkish interface placeholder remains in Persian content`);
    }
    if (/href="\/fa\/(?!tamin-beynolmelali-iran\/)/.test(html)) errors.push(`${label}: nonexistent Persian internal route linked`);
    if (/data-language-toggle|class="mobile-locales"/.test(html)) errors.push(`${label}: Persian page must keep its dedicated locale chrome`);
    if (!html.includes('CTSEG Sanayi ve Ticaret Limited Şirketi') || !html.includes('Teyfik Gökdemir') ||
      !html.includes('Fevzipaşa Caddesi، فاتح، استانبول، ترکیه')) {
      errors.push(`${label}: company information block missing`);
    }
  }
  const portfolioImageCount = (html.match(/src="\/images\/generated\/2-\d+\.webp\?v=[a-f0-9]+"/g) || []).length;
  if (portfolioImageCount !== (isHome ? 1 : 0)) errors.push(`${label}: unexpected 2.webp usage count ${portfolioImageCount}`);
  if (html.includes('contact-email-panel')) {
    contactEmailPanels++;
    const panel = html.match(/<aside class="side-panel contact-email-panel">[\s\S]*?<\/aside>/)?.[0] ?? '';
    if ((panel.match(/info@ctseg\.com\.tr/g) || []).length !== 2) errors.push(`${label}: contact panel must render one linked email address`);
    if ((panel.match(/class="contact-email-link"/g) || []).length !== 1) errors.push(`${label}: expected one contact email link`);
    if (!panel.includes('href="mailto:info@ctseg.com.tr?subject=CTSEG%20Commercial%20Enquiry"')) errors.push(`${label}: incorrect contact mailto`);
    if (panel.includes('class="button"')) errors.push(`${label}: duplicate contact email button remains`);
  }
  if (html.includes('"@type":"Product"')) {
    productSchemaPages++;
    const schemaImage = html.match(/"@type":"Product"[\s\S]*?"image":"([^"]+)"/)?.[1];
    if (!schemaImage || schemaImage.endsWith('/images/2.webp')) errors.push(`${label}: invalid Product schema image`);
    const detailMedia = [...html.matchAll(/data-product-media="(?:primary|secondary)"[^>]*>[\s\S]*?<img[^>]+src="([^"]+)"/g)].map((match) => match[1]);
    if (new Set(detailMedia).size !== detailMedia.length) errors.push(`${label}: duplicate primary/secondary product media`);
    if (!/data-product-media="primary" data-media-type="(?:poster|photo)"/.test(html)) errors.push(`${label}: primary product media type missing`);
  }
  for (const match of html.matchAll(/<img\b([^>]+)>/g)) {
    const attributes = match[1];
    const src = attributes.match(/\bsrc="([^"]+)"/)?.[1];
    if (!/\bwidth="\d+"/.test(attributes) || !/\bheight="\d+"/.test(attributes)) errors.push(`${label}: image missing intrinsic dimensions`);
    if (src?.startsWith('/images/') && !existsSync(join(root, src.split('?')[0]))) errors.push(`${label}: missing image file ${src}`);
  }
  for (const card of html.matchAll(/data-product-card[\s\S]*?<\/a>/g)) {
    const image = card[0].match(/<img\b([^>]+)>/)?.[1];
    if (image && (!/\bsrcset="[^"]+"/.test(image) || !/\bsizes="[^"]+"/.test(image) || !/\bloading="lazy"/.test(image))) {
      errors.push(`${label}: product card image is not responsive and lazy`);
    }
  }
  if (html.includes('product-hero-media') && html.includes('src="/images/2.webp"')) errors.push(`${label}: 2.webp used as a product hero`);
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    let href = match[1];
    if (/^(#|mailto:|tel:|javascript:|data:)/.test(href)) continue;
    if (/^https?:\/\//.test(href)) {
      const url = new URL(href);
      if (url.hostname !== 'ctseg.com.tr') continue;
      href = url.pathname;
    }
    if (!href.startsWith('/')) continue;
    checkedLinks++;
    const pathname = href.split(/[?#]/)[0];
    if (!targetExists(pathname) && !pathname.startsWith('/images/') && !['/favicon.svg'].includes(pathname)) {
      errors.push(`${label}: broken link ${pathname}`);
    }
  }
}
const builtTradeRecords = [...tradeRecordsByLabel.entries()].filter(([label]) => existsSync(join(root, label)));
if (builtTradeRecords.length !== 18) errors.push(`expected 18 sourcing routes, found ${builtTradeRecords.length}`);
for (const [sourceLabel, sourceRecord] of builtTradeRecords) {
  const sourceHtml = readFileSync(join(root, sourceLabel), 'utf8');
  const sourceCanonical = sourceHtml.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  for (const targetLang of tradeLocaleCodes) {
    const targetPath = sourceRecord.routes[targetLang];
    const targetLabel = decodeURI(targetPath).replace(/^\//,'') + 'index.html';
    if (!existsSync(join(root, targetLabel))) {
      errors.push(`${sourceLabel}: ${targetLang} reciprocal sourcing target is missing`);
      continue;
    }
    const targetHtml = readFileSync(join(root, targetLabel), 'utf8');
    const targetBackLink = targetHtml.match(new RegExp(`<link rel="alternate" hreflang="${sourceRecord.lang}" href="([^"]+)"`))?.[1];
    if (targetBackLink !== sourceCanonical) {
      errors.push(`${sourceLabel}: ${targetLang} counterpart does not reciprocate ${sourceRecord.lang} hreflang`);
    }
  }
}
if (productSchemaPages !== 90) errors.push(`expected 90 Product schema pages, found ${productSchemaPages}`);
if (contactEmailPanels !== 5) errors.push(`expected five localized contact email panels, found ${contactEmailPanels}`);
if (!existsSync(join(root, persianLandingLabel))) errors.push('standalone Persian landing page build output missing');
const sitemapXml = files.filter((file) => /sitemap-\d+\.xml$/.test(file)).map((file) => readFileSync(file,'utf8')).join('\n');
if (!sitemapXml.includes(`<loc>${persianLandingCanonical}</loc>`)) errors.push('Persian landing canonical missing from sitemap');
const llms = readFileSync(join(root, 'llms.txt'), 'utf8');
if (!llms.includes(persianLandingCanonical) || !llms.includes('standalone resource, not a full Persian site locale')) {
  errors.push('llms.txt Persian standalone resource declaration missing');
}
const englishMarkets = readFileSync(join(root, 'en', 'markets', 'index.html'), 'utf8');
if (!englishMarkets.includes('data-fa-landing-link') || !englishMarkets.includes('/fa/tamin-beynolmelali-iran/')) {
  errors.push('English markets page Persian landing referral missing');
}
for (const file of htmlFiles) {
  const label = relative(root, file).replaceAll('\\','/');
  const html = readFileSync(file,'utf8');
  const tradeRecord = tradeRecordsByLabel.get(label);
  const navLinks = [...html.matchAll(/<a\b([^>]*data-fa-nav-link[^>]*)>/g)].map((match) => match[1]);
  const usesEnglishNavigation = /<html\b[^>]*\blang="en"/.test(html);
  if (usesEnglishNavigation && !tradeRecord) {
    if (navLinks.length !== 1) errors.push(`${label}: English navigation must contain one Persian landing link`);
    const link = navLinks[0] ?? '';
    if (!link.includes('href="/fa/tamin-beynolmelali-iran/"') || /\btarget=/.test(link)) {
      errors.push(`${label}: English Persian landing navigation link target is incorrect`);
    }
    if (!html.includes('For Iranian Businesses') || !html.includes('Persian landing page')) {
      errors.push(`${label}: English navigation landing-page labels missing`);
    }
  } else if (navLinks.length) {
    errors.push(`${label}: Persian landing navigation link must remain English-only`);
  }
  if (!label.startsWith('404') && label !== persianLandingLabel && !tradeRecord) {
    const globalFaLinks = [...html.matchAll(/<a\b[^>]*data-locale-option[^>]*>/g)].filter((match)=>match[0].includes('hreflang="fa"')&&match[0].includes('href="/fa/tamin-beynolmelali-iran/"'));
    if (globalFaLinks.length !== 2) errors.push(`${label}: desktop and mobile global locale menus must expose the Persian fallback`);
  }
}
for (const localizedMarkets of [
  ['tr','pazarlar'],['de','maerkte'],['it','mercati'],['fr','marches']
]) {
  const localizedHtml = readFileSync(join(root, ...localizedMarkets, 'index.html'), 'utf8');
  if (/<a\b[^>]*data-fa-landing-link/.test(localizedHtml)) {
    errors.push(`${localizedMarkets.join('/')}: promotional Persian referral must remain English-only`);
  }
}
const css = files.filter((file) => file.endsWith('.css')).map((file) => readFileSync(file,'utf8')).join('\n');
const deploymentHeaders = readFileSync(join(root, '_headers'), 'utf8');
for (const routePattern of ['/', '/*/', '/*.html']) {
  const escaped = routePattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  if (!new RegExp(`(?:^|\\n)${escaped}\\r?\\n\\s+Content-Type: text/html; charset=utf-8(?:\\r?\\n|$)`).test(deploymentHeaders)) {
    errors.push(`deployment headers: UTF-8 HTML rule missing for ${routePattern}`);
  }
}
if (!css.includes(':focus-visible')) errors.push('compiled CSS: focus-visible treatment missing');
if (!css.includes('prefers-reduced-motion:reduce')) errors.push('compiled CSS: reduced-motion treatment missing');
if (!css.includes('.product-media--poster') || !css.includes('object-fit:contain') || !css.includes('.product-media--photo')) {
  errors.push('compiled CSS: poster/photo media treatment missing');
}
if (!css.includes('--header-height:88px') || !css.includes('.page-hero+.section') || !css.includes('.portfolio-visual img') || !css.includes('object-fit:contain')) {
  errors.push('compiled CSS: final hero/header/portfolio regression guards missing');
}
if (!css.includes('.contact-email-link:hover') || !css.includes('.contact-email-link:focus-visible') || !css.includes('overflow-wrap:anywhere')) {
  errors.push('compiled CSS: contact email hover/focus/wrapping treatment missing');
}
for (const locale of ['tr','en','de','it','fr']) {
  if (!css.includes(`html[data-locale=${locale}]`)) errors.push(`compiled CSS: ${locale} locale treatment missing`);
}

const pagesByCanonical = new Map(pageRecords.map((page) => [page.canonical,page]));
for (const page of pageRecords) {
  for (const code of ['tr','en','de','it','fr'].filter((locale) => page.alternates[locale])) {
    const targetUrl = page.alternates[code];
    const target = pagesByCanonical.get(targetUrl);
    if (!target) {
      errors.push(`${page.label}: hreflang ${code} target is not canonical`);
      continue;
    }
    if (target.alternates[page.lang] !== page.canonical) {
      errors.push(`${page.label}: hreflang ${code} is not reciprocal`);
    }
  }
}

if (errors.length) {
  console.error(`Site check failed with ${errors.length} error(s):`);
  for (const error of [...new Set(errors)]) console.error(`- ${error}`);
  process.exit(1);
}
console.log(`Site check passed: ${htmlFiles.length} HTML pages, all 18 sourcing routes with explicit locale/canonical/hreflang/x-default/H1/chrome/Persian-content assertions and reciprocal six-locale counterparts, ${checkedLinks} internal links, 90 product schemas with verified media, sitemap/llms coverage and complete metadata checks.`);
