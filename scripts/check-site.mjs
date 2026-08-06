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
for (const file of trackedFiles.filter((file)=>isTextFile(file)&&existsSync(resolve(file)))) scanUtf8AndMojibake(resolve(file), `source ${file}`);
for (const file of files.filter(isTextFile)) scanUtf8AndMojibake(file, `build ${relative(root, file).replaceAll('\\','/')}`);
let checkedLinks = 0;
const pageRecords = [];
let productSchemaPages = 0;
let productAssessmentServicePages = 0;
let contactEmailPanels = 0;
const companyName = 'CTSEG Sanayi ve Ticaret Limited Şirketi';
const aboutPages = new Set([
  'tr/hakkimizda/index.html',
  'en/about/index.html',
  'de/ueber-uns/index.html',
  'it/chi-siamo/index.html'
]);
const contactPages = new Set([
  'tr/iletisim/index.html',
  'en/contact/index.html',
  'de/kontakt/index.html',
  'it/contatti/index.html',
  'index.html','en/index.html','de/index.html','it/index.html','ru/index.html','fa/index.html'
]);
const productCatalogs = new Set([
  'tr/ticari-urunler/index.html',
  'en/trade-products/index.html',
  'de/handelsprodukte/index.html',
  'it/prodotti-commerciali/index.html'
]);
const persianLandingLabel = 'fa/index.html';
const persianLandingCanonical = 'https://ctseg.com.tr/fa/';
const tradeLocaleCodes = ['tr','en','de','it','fa','ru'];
const tradeRouteFamilies = {
  carpets:{tr:'/tr/sourcing/iran-halisi/',en:'/en/sourcing/iranian-carpets/',de:'/de/sourcing/persische-teppiche/',it:'/it/sourcing/tappeti-persiani/',fa:'/fa/sourcing/فرش-ایرانی/',ru:'/ru/sourcing/carpets/'},
  silk:{tr:'/tr/sourcing/el-dokumasi-ipek-hali/',en:'/en/sourcing/hand-knotted-silk-carpets/',de:'/de/sourcing/handgeknuepfte-seidenteppiche/',it:'/it/sourcing/tappeti-in-seta-annodati-a-mano/',fa:'/fa/sourcing/فرش-ابریشم-دستباف/',ru:'/ru/sourcing/hand-knotted-silk-carpets/'},
  textiles:{tr:'/tr/sourcing/toptan-tekstil-tedariki/',en:'/en/sourcing/wholesale-textile-sourcing/',de:'/de/sourcing/textil-grosshandel-beschaffung/',it:'/it/sourcing/approvvigionamento-tessile-ingrosso/',fa:'/fa/sourcing/تامین-عمده-منسوجات/',ru:'/ru/sourcing/textiles/'}
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
  const isHomepage = ['index.html','en/index.html','de/index.html','it/index.html','fa/index.html','ru/index.html'].includes(label);
  const tradeRecord = tradeRecordsByLabel.get(label);
  if (!label.startsWith('404') && canonical && ['tr','en','de','it','ru'].includes(lang)) pageRecords.push({ label, canonical, lang, alternates });
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
  if (isTurkishPage && !html.includes('Türkiye merkezli uluslararası ticaret eşleştirme ve bağımsız ticari koordinasyon.')) {
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
  if (contactPages.has(label)) {
    const form = html.match(/<form class="commercial-form"[\s\S]*?<\/form>/)?.[0] ?? '';
    const firstVisibleControl = form.match(/<(?:input|select|textarea)\b[^>]*(?:name="(?!locale|startedAt|website)([^"]+)")[^>]*>/)?.[1];
    if (firstVisibleControl !== 'intent' || !form.includes('value="buyer_request"') || !form.includes('value="supplier_market_entry"')) errors.push(`${label}: stable trade intent must be the first visible form control`);
    for (const field of ['name','company','emailOrPhone','message','privacy']) if (!form.includes(`name="${field}"`)) errors.push(`${label}: short form field ${field} missing`);
    if (!html.includes('data-contact-whatsapp') || !html.includes('data-contact-email') || !html.includes('<details class="commercial-details">')) errors.push(`${label}: direct contact cards or optional details disclosure missing`);
    const disclosure = html.match(/<details class="commercial-form-disclosure"[^>]*>/)?.[0] ?? '';
    if (!disclosure || /\sopen(?:\s|>)/.test(disclosure)) errors.push(`${label}: detailed request form must be initially closed`);
    if (html.indexOf('data-contact-whatsapp') > html.indexOf('commercial-form-disclosure') || html.indexOf('data-contact-email') > html.indexOf('commercial-form-disclosure')) errors.push(`${label}: WhatsApp and email must precede the form disclosure`);
  }
  if (html.includes('fonts.googleapis.com') || html.includes('fonts.gstatic.com')) errors.push(`${label}: external Google Fonts dependency remains`);
  if (!html.includes('/fonts/dm-sans-latin-ext-variable.woff2') || !html.includes('/fonts/source-serif-4-latin-ext-variable.woff2')) {
    errors.push(`${label}: local font preloads missing`);
  }
  const requiredHreflangs = isHomepage || tradeRecord ? [...tradeLocaleCodes,'x-default'] : ['tr','en','de','it','x-default'];
  if (!label.startsWith('404') && !requiredHreflangs.every((code) => hreflangs.includes(code))) {
    errors.push(`${label}: incomplete hreflang set`);
  }
  const expectedLang = label === 'index.html' ? 'tr' : label.split('/')[0];
  if (['tr','en','de','it','fa','ru'].includes(expectedLang) && !html.includes(`<html lang="${expectedLang}"`)) {
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
  const isHome = ['index.html','en/index.html','de/index.html','it/index.html','fa/index.html','ru/index.html'].includes(label);
  if (isHome && !/(?:class="hero-visual"|class="fa-hero-visual")[\s\S]*?srcset="[^"]*\/images\/generated\/ctseg-global-trade-hero-premium-640\.webp/.test(html)) {
    errors.push(`${label}: responsive premium homepage hero missing`);
  }
  const imagePreloadCount = (html.match(/rel="preload" as="image"/g) || []).length;
  if (imagePreloadCount !== (isHome || isPersianLanding ? 1 : 0)) errors.push(`${label}: unexpected responsive image preload count ${imagePreloadCount}`);
  if (isHome) {
    const intentHooks=(html.match(/data-(?:trade|fa)-intent=/g) || []).length;
    if (intentHooks < 2 || !html.includes('buyer_request') || !html.includes('supplier_market_entry')) errors.push(`${label}: two stable trade-intent user flows missing`);
    const hasTradeArchitecture=((html.match(/class="platform-sector-grid"/g) || []).length === 1 && html.includes('id="for-buyers"') && html.includes('id="for-producers"'))
      || (html.includes('data-persian-producer-entry') && html.includes('id="services"') && html.includes('id="sectors"'));
    if (!hasTradeArchitecture) errors.push(`${label}: trade-platform information architecture missing`);
    if (alternates.fa !== 'https://ctseg.com.tr/fa/') errors.push(`${label}: Persian homepage hreflang missing`);
  }
  if (!isPersianLanding && !tradeRecord) {
    const desktopLocales = html.match(/id="language-panel"[\s\S]*?<\/div>/)?.[0] ?? '';
    const mobileLocales = html.match(/class="mobile-locales"[\s\S]*?<\/div>\s*<\/div>/)?.[0] ?? '';
    const desktopTrigger = html.match(/<button[^>]+data-language-toggle[\s\S]*?<\/button>/)?.[0] ?? '';
    if ((desktopLocales.match(/data-locale-option/g) || []).length !== 6 || !desktopLocales.includes('href="/fa/"')) errors.push(`${label}: desktop locale panel must contain six languages and the Persian homepage`);
    if ((mobileLocales.match(/data-locale-option/g) || []).length !== 6 || !mobileLocales.includes('href="/fa/"')) errors.push(`${label}: mobile locale panel must contain six languages and the Persian homepage`);
    if (!/class="locale-code">(?:TR|EN|DE|IT|RU)<\/span>/.test(desktopTrigger) || /locale-name/.test(desktopTrigger)) {
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
    for (const code of tradeLocaleCodes) if (!alternates[code]) errors.push(`${label}: reciprocal homepage hreflang ${code} missing`);
    if (alternates['x-default'] !== 'https://ctseg.com.tr/en/') errors.push(`${label}: Persian x-default must point to English homepage`);
    const persianLocaleTags = [...html.matchAll(/<a\b[^>]*data-locale-option[^>]*>/g)].map((match) => match[0]);
    const persianLocalePaths = {tr:'/',en:'/en/',de:'/de/',it:'/it/',fa:'/fa/',ru:'/ru/'};
    if (persianLocaleTags.length !== 6) errors.push(`${label}: Persian header must expose six locale options`);
    for (const [code,path] of Object.entries(persianLocalePaths)) {
      const tag = persianLocaleTags.find((item) => item.includes(`hreflang="${code}"`)) ?? '';
      if (!tag.includes(`href="${path}"`) || !targetExists(path)) errors.push(`${label}: Persian locale switch ${code} target is incorrect or missing`);
      if ((code === 'fa') !== tag.includes('aria-current="page"')) errors.push(`${label}: Persian locale active state is incorrect for ${code}`);
    }
    if ((html.match(/<h1\b/g) || []).length !== 1) errors.push(`${label}: expected one Persian H1`);
    const visibleFaqBlock = html.match(/<div class="fa-faq">[\s\S]*?<\/div>/)?.[0] ?? '';
    if ((visibleFaqBlock.match(/<details\b/g) || []).length !== 8) errors.push(`${label}: expected eight visible Persian FAQs`);
    for (const type of ['WebSite','WebPage','Service','FAQPage','BreadcrumbList']) {
      if (!parsedSchemas.some((schema) => schema?.['@type'] === type)) errors.push(`${label}: ${type} schema missing`);
    }
    const persianFaqSchema = parsedSchemas.find((schema) => schema?.['@type'] === 'FAQPage');
    const persianServiceSchema = parsedSchemas.find((schema) => schema?.['@type'] === 'Service');
    if (!Array.isArray(persianFaqSchema?.mainEntity) || persianFaqSchema.mainEntity.length !== 8) errors.push(`${label}: FAQ schema must contain exactly eight questions`);
    const expectedPersianTitle = 'تطبیق تجاری و توسعه بازار بین‌المللی | CTSEG';
    const expectedPersianDescription = 'CTSEG خریداران ایرانی را به تأمین‌کنندگان قابل‌بررسی و تولیدکنندگان را به خریداران و بازارهای مناسب بین‌المللی در حوزه‌های غذایی، صنعتی، فرش و منسوجات متصل می‌کند.';
    if (!html.includes(`<title>${expectedPersianTitle}</title>`) || !html.includes(`<meta name="description" content="${expectedPersianDescription}">`)) {
      errors.push(`${label}: multisector Persian title or meta description missing`);
    }
    if (!html.includes('<h1>خریداران را به تولیدکنندگان و تأمین‌کنندگان مناسب متصل می‌کنیم.</h1>')) errors.push(`${label}: simplified trade-matching Persian H1 missing`);
    for (const term of ['خریداران','تأمین‌کنندگان','تولیدکنندگان','بازارهای مناسب بین‌المللی']) if (!persianServiceSchema?.description?.includes(term)) errors.push(`${label}: Service schema missing platform term (${term})`);
    const persianForm = html.match(/<form class="commercial-form"[\s\S]*?<\/form>/)?.[0] ?? '';
    for (const field of ['intent','name','company','emailOrPhone','message','privacy']) if (!persianForm.includes(`name="${field}"`)) errors.push(`${label}: Persian short-form field missing (${field})`);
    for (const optional of ['country','product','quantity','delivery','targetDate','requirements']) if (!persianForm.includes(`name="${optional}"`)) errors.push(`${label}: Persian optional-detail field missing (${optional})`);
    if (!persianForm.includes('action="/api/contact"') || !persianForm.includes('name="website"') || !persianForm.includes('name="startedAt"') || !html.includes('data-form-fallback')) errors.push(`${label}: secure server-backed form contract missing`);
    if (!html.includes('started.value=String(Date.now())')) errors.push(`${label}: client-side timing value missing`);
    for (const requiredCopy of ['برای تولیدکنندگان و صادرکنندگان ایرانی','چهار مسیر برای تأمین و توسعه بازار','درخواست تجاری خود را مطرح کنید','افزودن جزئیات (اختیاری)']) {
      if (!html.includes(requiredCopy)) errors.push(`${label}: strengthened Persian entry copy missing (${requiredCopy})`);
    }
    if ((html.match(/data-sector-card=/g) || []).length !== 4 || (html.match(/data-sector-cta/g) || []).length !== 4) {
      errors.push(`${label}: exactly four equal multisector cards and primary CTAs required`);
    }
    const expectedSectorCopy = [
      ['روغن‌های گیاهی و کالاهای غذایی','بررسی تأمین روغن و مواد غذایی'],
      ['خشکبار، خرما و میوه‌های خشک','بررسی بازار خشکبار'],
      ['فرش ایرانی و فرش ابریشم دستباف','بررسی بازار فرش'],
      ['منسوجات، بسته‌بندی و نهاده‌های تولید','بررسی تأمین منسوجات و نهاده‌ها']
    ];
    for (const [heading,cta] of expectedSectorCopy) if (!html.includes(heading) || !html.includes(cta)) errors.push(`${label}: multisector card copy missing (${heading})`);
    for (const product of ['پسته اکبری','کله‌قوچی','فندقی','احمدآقایی','خرمای مضافتی','سایر','زاهدی','کشمش','زعفران','زرشک','توت خشک','بادام','گردو']) {
      if (!html.includes(product)) errors.push(`${label}: Persian nuts/date product coverage missing (${product})`);
    }
    const expectedSectorLinks = ['/fa/sourcing/فرش-ایرانی/','/fa/sourcing/فرش-ابریشم-دستباف/','/fa/sourcing/تامین-عمده-منسوجات/'];
    for (const href of expectedSectorLinks) if (!html.includes(`href="${href}"`)) errors.push(`${label}: Persian entry sector link missing (${href})`);
    for (const stem of ['ctseg-vegetable-oils-food-editorial','ctseg-mixed-nuts-premium','ctseg-iranian-carpets-editorial','ctseg-wholesale-textiles-editorial']) {
      if (!html.includes(`/images/generated/${stem}-1536.webp`) || !html.includes(`${stem}-640.webp`)) errors.push(`${label}: responsive Persian sector visual missing (${stem})`);
    }
    for (const eventName of ['fa_landing_view','fa_form_start','fa_form_submit_attempt','fa_form_submission_success','fa_email_cta_click','fa_english_link_click']) {
      if (!html.includes(eventName)) errors.push(`${label}: analytics event ${eventName} missing`);
    }
    if (!html.includes("fetch(form.action") || !html.includes("if(!response.ok)throw")) errors.push(`${label}: form submission must not report success before server acceptance`);
    const sensitivePersianPhrases = ['پرداخت از طریق CTSEG','بانک‌ها','کانال‌های مجاز','مسیر پرداخت','تشریفات گمرکی','کارگزار گمرکی','مجوز واردات','ارسال قانونی','حواله','انتقال وجه','انتقال بانکی','کانال پرداخت','تضمین بانکی','تحریم'];
    for (const forbidden of sensitivePersianPhrases) {
      if (html.includes(forbidden)) errors.push(`${label}: sensitive Persian trade phrase remains (${forbidden})`);
    }
    for (const removedQuestion of ['آیا پرداخت از طریق CTSEG انجام می‌شود؟','آیا هر محصولی را می‌توان به ایران ارسال کرد؟','آیا CTSEG حمل‌ونقل و تشریفات گمرکی را انجام می‌دهد؟']) {
      if (html.includes(removedQuestion) || persianFaqSchema?.mainEntity?.some((item) => item?.name === removedQuestion)) errors.push(`${label}: removed Persian FAQ remains (${removedQuestion})`);
    }
    const generalComplianceNote = 'هر درخواست تجاری بر اساس نوع کالا، طرف‌های معامله و الزامات جاری به‌صورت جداگانه ارزیابی می‌شود.';
    if (html.split(generalComplianceNote).length - 1 !== 1) errors.push(`${label}: neutral Persian compliance note must appear exactly once`);
    if (/(?:Ana Sayfa|Hizmetler|Hakkımızda|İletişim|Teklif İste|Tüm hakları saklıdır)/.test(html)) {
      errors.push(`${label}: Turkish interface placeholder remains in Persian content`);
    }
    if (/href="\/fa\/(?!sourcing\/|#|")/.test(html)) errors.push(`${label}: nonexistent Persian internal route linked`);
    if (/data-language-toggle|class="mobile-locales"/.test(html)) errors.push(`${label}: Persian page must keep its dedicated locale chrome`);
    const expectedPersianMobileLinks = [
      ['/fa/','صفحه اصلی'],['#services','برای خریداران'],['#markets','برای تولیدکنندگان'],['#sectors','حوزه‌ها'],
      ['#about','درباره ما'],['#contact','تماس'],['#request-form','درخواست بررسی']
    ];
    if (!html.includes('data-fa-menu-toggle') || !html.includes('aria-controls="fa-primary-nav"') || !html.includes('data-fa-primary-nav')) {
      errors.push(`${label}: accessible Persian mobile navigation controls missing`);
    }
    for (const [href,text] of expectedPersianMobileLinks) {
      if (!html.includes(`href="${href}"`) || !html.includes(`>${text}</a>`)) errors.push(`${label}: Persian mobile navigation link missing (${text})`);
    }
    if (!html.includes('CTSEG Sanayi ve Ticaret Limited Şirketi') || !html.includes('Teyfik Gökdemir') ||
      !html.includes('Fevzipaşa Caddesi، فاتح، استانبول، ترکیه')) {
      errors.push(`${label}: company information block missing`);
    }
  }
  const portfolioImageCount = (html.match(/src="\/images\/generated\/2-\d+\.webp\?v=[a-f0-9]+"/g) || []).length;
  if (portfolioImageCount !== 0) errors.push(`${label}: product-catalogue portfolio visual must not appear in the trade-platform architecture`);
  if (contactPages.has(label) && html.includes('data-contact-email')) contactEmailPanels++;
  if (html.includes('"@type":"Product"')) {
    productSchemaPages++;
    const schemaImage = html.match(/"@type":"Product"[\s\S]*?"image":"([^"]+)"/)?.[1];
    if (!schemaImage || schemaImage.endsWith('/images/2.webp')) errors.push(`${label}: invalid Product schema image`);
    const detailMedia = [...html.matchAll(/data-product-media="(?:primary|secondary)"[^>]*>[\s\S]*?<img[^>]+src="([^"]+)"/g)].map((match) => match[1]);
    if (new Set(detailMedia).size !== detailMedia.length) errors.push(`${label}: duplicate primary/secondary product media`);
    if (!/data-product-media="primary" data-media-type="(?:poster|photo)"/.test(html)) errors.push(`${label}: primary product media type missing`);
  }
  if (html.includes('#product-sourcing-service')) {
    productAssessmentServicePages++;
    if (!html.includes('"@type":"Service"') || !html.includes('"serviceType":"Specification-led B2B sourcing assessment"')) errors.push(`${label}: product route must use sourcing Service schema`);
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
if (productSchemaPages !== 0) errors.push(`Product schema must not be used without a concrete offer; found ${productSchemaPages}`);
if (productAssessmentServicePages !== 76) errors.push(`expected 76 specification-led product sourcing Service schemas across the four full catalogue locales and targeted Persian products, found ${productAssessmentServicePages}`);
if (contactEmailPanels !== 10) errors.push(`expected ten localized contact email panels across six homepages and four full contact pages, found ${contactEmailPanels}`);
if (!existsSync(join(root, persianLandingLabel))) errors.push('standalone Persian landing page build output missing');
const sitemapXml = files.filter((file) => /sitemap-\d+\.xml$/.test(file)).map((file) => readFileSync(file,'utf8')).join('\n');
if (!sitemapXml.includes(`<loc>${persianLandingCanonical}</loc>`)) errors.push('Persian landing canonical missing from sitemap');
const llms = readFileSync(join(root, 'llms.txt'), 'utf8');
if (!llms.includes(persianLandingCanonical) || !llms.includes('Persian homepage')) {
  errors.push('llms.txt Persian homepage declaration missing');
}
const englishMarkets = readFileSync(join(root, 'en', 'markets', 'index.html'), 'utf8');
if (!englishMarkets.includes('data-fa-landing-link') || !englishMarkets.includes('/fa/')) {
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
    if (!link.includes('href="/fa/"') || /\btarget=/.test(link)) {
      errors.push(`${label}: English Persian landing navigation link target is incorrect`);
    }
    if (!html.includes('For Iranian Businesses') || !html.includes('Persian landing page')) {
      errors.push(`${label}: English navigation landing-page labels missing`);
    }
  } else if (navLinks.length) {
    errors.push(`${label}: Persian landing navigation link must remain English-only`);
  }
  if (!label.startsWith('404') && label !== persianLandingLabel && !tradeRecord) {
    const globalFaLinks = [...html.matchAll(/<a\b[^>]*data-locale-option[^>]*>/g)].filter((match)=>match[0].includes('hreflang="fa"')&&match[0].includes('href="/fa/"'));
    if (globalFaLinks.length !== 2) errors.push(`${label}: desktop and mobile global locale menus must expose the Persian fallback`);
  }
}
for (const localizedMarkets of [
  ['tr','pazarlar'],['de','maerkte'],['it','mercati']
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
for (const locale of ['tr','en','de','it','ru']) {
  if (!css.includes(`html[data-locale=${locale}]`)) errors.push(`compiled CSS: ${locale} locale treatment missing`);
}

const pagesByCanonical = new Map(pageRecords.map((page) => [page.canonical,page]));
for (const page of pageRecords) {
  for (const code of ['tr','en','de','it','ru'].filter((locale) => page.alternates[locale])) {
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
console.log(`Site check passed: ${htmlFiles.length} HTML pages, two stable intent flows, all 18 sourcing routes with explicit locale/canonical/hreflang/x-default/H1/chrome/Persian-content assertions and reciprocal six-locale counterparts, ${checkedLinks} internal links, 72 catalogue sourcing Service schemas without Product schema, sitemap/llms coverage and complete metadata checks.`);
