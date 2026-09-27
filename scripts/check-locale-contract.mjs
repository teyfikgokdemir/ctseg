import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, resolve, relative } from 'node:path';

const dist = resolve('dist');
const errors = [];
const active = ['tr','en','de','it','fa','ru','zh','vi','uk','ro','bg','sr'];
const homes = Object.fromEntries(active.map((locale) => [locale, locale === 'tr' ? 'index.html' : `${locale}/index.html`]));
const expectedHomeMarkers = {
  tr:'Türkiye’den dünyaya',
  en:'From Türkiye',
  de:'Von Türkiye',
  it:'Dalla Türkiye',
  fa:'از ترکیه',
  ru:'Из Турции',
  zh:'从土耳其',
  vi:'Thổ Nhĩ Kỳ',
  uk:'З Türkiye',
  ro:'Din Türkiye',
  bg:'От Türkiye',
  sr:'Iz Türkiye'
};
const coreRoutes = {
  uk:['services','trade-products','markets','insights','about','contact'],
  ro:['servicii','produse-comerciale','piete','analize','despre-noi','contact'],
  bg:['uslugi','targovski-produkti','pazari','analizi','za-nas','kontakti'],
  sr:['usluge','trgovinski-proizvodi','trzista','uvidi','o-nama','kontakt']
};

if (!existsSync(dist)) throw new Error('dist/ not found; run build first');
const read = (path) => readFileSync(join(dist,path),'utf8');
const walk = (dir) => readdirSync(dir,{withFileTypes:true}).flatMap((entry) =>
  entry.isDirectory() ? walk(join(dir,entry.name)) : [join(dir,entry.name)]
);

for (const [locale,path] of Object.entries(homes)) {
  if (!existsSync(join(dist,path))) { errors.push(`${path}: homepage missing`); continue; }
  const html = read(path);
  if (!html.includes(`<html lang="${locale}"`)) errors.push(`${path}: html lang must be ${locale}`);
  if ((html.match(/<h1\b/g)||[]).length !== 1) errors.push(`${path}: expected exactly one H1`);
  if (!html.includes(expectedHomeMarkers[locale])) errors.push(`${path}: expected localized homepage marker missing`);
  if (/(?:<title>\s*undefined|content="undefined|href="[^"]*\/undefined\/|>\s*undefined\s*<|\?\?\?\?\?)/i.test(html)) errors.push(`${path}: unresolved locale/content token`);
  if (/REFLEX/i.test(html)) errors.push(`${path}: retired REFLEX content remains`);

  const switcher = [...html.matchAll(/<a\b[^>]*data-locale-option[^>]*>/g)].map((m)=>m[0]);
  for (const code of active) {
    if (!switcher.some((tag)=>tag.includes(`hreflang="${code}"`))) errors.push(`${path}: locale switcher missing ${code}`);
  }
  for (const code of [...active,'x-default']) {
    if (!html.includes(`hreflang="${code}"`)) errors.push(`${path}: hreflang ${code} missing`);
  }
}

for (const [locale,slugs] of Object.entries(coreRoutes)) {
  for (const slug of slugs) {
    const path = join(dist,locale,slug,'index.html');
    if (!existsSync(path)) errors.push(`${locale}/${slug}/: core locale route missing`);
  }
}

const htmlFiles = walk(dist).filter((path)=>path.endsWith('.html'));
for (const path of htmlFiles) {
  const html = readFileSync(path,'utf8');
  const label = relative(dist,path).replaceAll('\\','/');
  if (/(?:<title>\s*undefined|content="undefined|href="[^"]*\/undefined\/|>\s*undefined\s*<|\?\?\?\?\?)/i.test(html)) errors.push(`${label}: unresolved locale/content token`);
  if (/REFLEX/i.test(html)) errors.push(`${label}: retired REFLEX content remains`);
}

const sitemapFiles = readdirSync(dist).filter((name)=>/^sitemap-\d+\.xml$/.test(name));
const sitemap = sitemapFiles.map((name)=>readFileSync(join(dist,name),'utf8')).join('\n');
for (const locale of active) {
  const url = locale === 'tr' ? 'https://ctseg.com.tr/' : `https://ctseg.com.tr/${locale}/`;
  if (!sitemap.includes(`<loc>${url}</loc>`)) errors.push(`${locale}: homepage missing from sitemap`);
}
if (/\/undefined\//.test(sitemap)) errors.push('sitemap contains /undefined/');
if (/reflex-disposable-gloves/i.test(sitemap)) errors.push('sitemap contains retired REFLEX route');
if (sitemap.includes('https://ctseg.com.tr/fr/')) errors.push('French URL remains in sitemap');

const redirects = readFileSync(join(dist,'_redirects'),'utf8');
for (const legacy of ['/medical/reflex-disposable-gloves/','/en/medical/reflex-disposable-gloves/','/de/medical/reflex-disposable-gloves/','/it/medical/reflex-disposable-gloves/','/fa/medical/reflex-disposable-gloves/','/ru/medical/reflex-disposable-gloves/','/zh/medical/reflex-disposable-gloves/','/vi/medical/reflex-disposable-gloves/']) {
  if (!redirects.includes(legacy)) errors.push(`${legacy}: retired REFLEX URL needs an explicit legacy redirect`);
}

if (errors.length) {
  console.error(`Locale contract failed with ${new Set(errors).size} error(s):`);
  for (const error of new Set(errors)) console.error(`- ${error}`);
  process.exit(1);
}
console.log(`Locale contract passed: ${active.length} active locales, core route parity, localized homepages, no unresolved tokens and no indexed REFLEX routes.`);
