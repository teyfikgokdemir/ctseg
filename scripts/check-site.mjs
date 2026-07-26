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
console.log(`Site check passed: ${htmlFiles.length} HTML pages, ${checkedLinks} internal links, reciprocal hreflang and complete metadata/chrome checks.`);
