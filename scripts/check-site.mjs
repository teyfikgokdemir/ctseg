import { existsSync, readdirSync, readFileSync } from 'node:fs';
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
  if (!label.startsWith('404') && canonical && lang) pageRecords.push({ label, canonical, lang, alternates });
  if (titleCount !== 1) errors.push(`${label}: expected one title, found ${titleCount}`);
  if ((html.match(/<meta charset="UTF-8">/g) || []).length !== 1) errors.push(`${label}: expected exactly one UTF-8 charset declaration`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) errors.push(`${label}: missing description`);
  if (canonicalCount !== 1) errors.push(`${label}: expected one canonical, found ${canonicalCount}`);
  if (headerCount !== 1 || footerCount !== 1) errors.push(`${label}: header/footer count ${headerCount}/${footerCount}`);
  if (/CTSEG Koz\u006Detik|\bKoz\u006Detik\b/i.test(html)) errors.push(`${label}: prohibited company wording remains`);
  if (/\u00C3|\u00C2|\u00E2[\u20AC\u201D\u2013\u2014\u2122\u0153]|\u00C4[\u0178\u00B1]|\u00C5[\u0178\u017E]|\uFFFD/.test(html)) {
    errors.push(`${label}: mojibake text remains`);
  }
  if (!html.includes(`<strong>${companyName}</strong>`)) errors.push(`${label}: localized footer company identity missing`);
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
  if (!label.startsWith('404') && !['tr','en','de','it','fr','x-default'].every((code) => hreflangs.includes(code))) {
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
  if (imagePreloadCount !== (isHome ? 1 : 0)) errors.push(`${label}: unexpected responsive image preload count ${imagePreloadCount}`);
  if (isHome) {
    const showcase = html.match(/<div class="product-editorial-grid" data-home-showcase>([\s\S]*?)<\/div>\s*<div class="actions">/)?.[1] ?? '';
    const showcaseProducts = [...showcase.matchAll(/data-product-id="([^"]+)"/g)].map((match) => match[1]);
    const showcaseFamilies = [...showcase.matchAll(/data-product-family="([^"]+)"/g)].map((match) => match[1]);
    if (showcaseProducts.length !== 6) errors.push(`${label}: expected six homepage showcase products`);
    if (showcaseProducts.filter((id) => id.includes('pistachio')).length !== 1) errors.push(`${label}: homepage showcase must contain one pistachio product`);
    if (new Set(showcaseFamilies).size < 5) errors.push(`${label}: homepage showcase must represent at least five product families`);
  }
  const desktopLocales = html.match(/id="language-panel"[\s\S]*?<\/div>/)?.[0] ?? '';
  const mobileLocales = html.match(/class="mobile-locales"[\s\S]*?<\/div>\s*<\/div>/)?.[0] ?? '';
  const desktopTrigger = html.match(/<button[^>]+data-language-toggle[\s\S]*?<\/button>/)?.[0] ?? '';
  if ((desktopLocales.match(/data-locale-option/g) || []).length !== 5) errors.push(`${label}: desktop locale panel must contain five languages`);
  if ((mobileLocales.match(/data-locale-option/g) || []).length !== 5) errors.push(`${label}: mobile locale panel must contain five languages`);
  if (!/class="locale-code">(?:TR|EN|DE|IT|FR)<\/span>/.test(desktopTrigger) || /locale-name/.test(desktopTrigger)) {
    errors.push(`${label}: desktop language trigger must show only the active locale code`);
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
if (productSchemaPages !== 90) errors.push(`expected 90 Product schema pages, found ${productSchemaPages}`);
if (contactEmailPanels !== 5) errors.push(`expected five localized contact email panels, found ${contactEmailPanels}`);
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
const localeAtmospheres = [...css.matchAll(/html\[data-locale=(?:tr|en|de|it|fr)\]\{([^}]+)\}/g)].map((match) => match[1]);
if (localeAtmospheres.length !== 5 || new Set(localeAtmospheres).size !== 5) errors.push('compiled CSS: five distinct locale atmospheres missing');

const pagesByCanonical = new Map(pageRecords.map((page) => [page.canonical,page]));
for (const page of pageRecords) {
  for (const code of ['tr','en','de','it','fr']) {
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
console.log(`Site check passed: ${htmlFiles.length} HTML pages, ${checkedLinks} internal links, 90 product schemas with verified media, unique five-language product cards, reciprocal hreflang and complete metadata/chrome checks.`);
