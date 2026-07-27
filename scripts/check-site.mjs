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
  if (!label.startsWith('404') && canonical && lang) pageRecords.push({ label, canonical, lang, alternates });
  if (titleCount !== 1) errors.push(`${label}: expected one title, found ${titleCount}`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) errors.push(`${label}: missing description`);
  if (canonicalCount !== 1) errors.push(`${label}: expected one canonical, found ${canonicalCount}`);
  if (headerCount !== 1 || footerCount !== 1) errors.push(`${label}: header/footer count ${headerCount}/${footerCount}`);
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
  }
  const isHome = ['index.html','en/index.html','de/index.html','it/index.html','fr/index.html'].includes(label);
  if (isHome && !html.includes('/images/ctseg-global-trade-hero-premium.webp')) errors.push(`${label}: premium homepage hero missing`);
  const portfolioImageCount = (html.match(/src="\/images\/2\.webp"/g) || []).length;
  if (portfolioImageCount !== (isHome ? 1 : 0)) errors.push(`${label}: unexpected 2.webp usage count ${portfolioImageCount}`);
  if (html.includes('"@type":"Product"')) {
    productSchemaPages++;
    const schemaImage = html.match(/"@type":"Product"[\s\S]*?"image":"([^"]+)"/)?.[1];
    if (!schemaImage || schemaImage.endsWith('/images/2.webp')) errors.push(`${label}: invalid Product schema image`);
    const detailMedia = [...html.matchAll(/data-product-media="(?:primary|secondary)"[^>]*>[\s\S]*?<img[^>]+src="([^"]+)"/g)].map((match) => match[1]);
    if (new Set(detailMedia).size !== detailMedia.length) errors.push(`${label}: duplicate primary/secondary product media`);
  }
  for (const match of html.matchAll(/<img\b([^>]+)>/g)) {
    const attributes = match[1];
    const src = attributes.match(/\bsrc="([^"]+)"/)?.[1];
    if (!/\bwidth="\d+"/.test(attributes) || !/\bheight="\d+"/.test(attributes)) errors.push(`${label}: image missing intrinsic dimensions`);
    if (src?.startsWith('/images/') && !existsSync(join(root, src))) errors.push(`${label}: missing image file ${src}`);
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
const css = files.filter((file) => file.endsWith('.css')).map((file) => readFileSync(file,'utf8')).join('\n');
if (!css.includes(':focus-visible')) errors.push('compiled CSS: focus-visible treatment missing');
if (!css.includes('prefers-reduced-motion:reduce')) errors.push('compiled CSS: reduced-motion treatment missing');

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
