import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

const dist=resolve('dist');
const errors=[];
const active=['tr','en','de','it','fa','ru'];
const homes={tr:'index.html',en:'en/index.html',de:'de/index.html',it:'it/index.html',fa:'fa/index.html',ru:'ru/index.html'};
const ruSourcing=['ru/sourcing/carpets/index.html','ru/sourcing/hand-knotted-silk-carpets/index.html','ru/sourcing/textiles/index.html'];
const read=(path)=>readFileSync(join(dist,path),'utf8');

if(!existsSync(dist))throw new Error('dist/ not found; run build first');
if(existsSync(join(dist,'fr')))errors.push('French build directory still exists');

for(const [locale,path] of Object.entries(homes)){
  const html=read(path);
  const links=[...html.matchAll(/<a\b[^>]*data-locale-option[^>]*>/g)].map((match)=>match[0]);
  for(const code of active)if(!links.some((tag)=>tag.includes(`hreflang="${code}"`)))errors.push(`${path}: locale switcher missing ${code}`);
  if(links.some((tag)=>tag.includes('hreflang="fr"')))errors.push(`${path}: French remains in locale switcher`);
  if(!html.includes(`hreflang="${locale}"`)||!html.includes('hreflang="x-default"'))errors.push(`${path}: homepage hreflang contract incomplete`);
}

const ruHome=read(homes.ru);
if(!ruHome.includes('<html lang="ru" dir="ltr"'))errors.push('Russian homepage lang/direction incorrect');
if((ruHome.match(/<h1\b/g)||[]).length!==1||!ruHome.includes('Мы связываем покупателей с подходящими производителями и поставщиками.'))errors.push('Russian homepage H1 missing or duplicated');
if(!/[А-Яа-яЁё]/.test(ruHome))errors.push('Russian homepage has no Cyrillic content');
for(const marker of ['Accueil','Français','Demander une offre','Tous droits réservés','Politique de confidentialité'])if(ruHome.includes(marker))errors.push(`Russian homepage contains French marker: ${marker}`);
const disclosure=ruHome.match(/<details class="commercial-form-disclosure"[^>]*>/)?.[0]??'';
if(!disclosure||/\sopen(?:\s|>)/.test(disclosure))errors.push('Russian detailed form is not initially closed');
for(const text of ['Написать в WhatsApp','Отправить письмо','Отправить подробный запрос','buyer_request','supplier_market_entry'])if(!ruHome.includes(text))errors.push(`Russian contact contract missing: ${text}`);
if(ruHome.indexOf('Написать в WhatsApp')>ruHome.indexOf('commercial-form-disclosure')||ruHome.indexOf('Отправить письмо')>ruHome.indexOf('commercial-form-disclosure'))errors.push('Russian direct CTAs do not precede the form');
if(!ruHome.includes('property="og:locale" content="ru_RU"'))errors.push('Russian OG locale missing');

for(const path of ruSourcing){
  const html=read(path);
  const canonical=`https://ctseg.com.tr/${path.replace(/index\.html$/,'')}`;
  if(!html.includes(`<link rel="canonical" href="${canonical}"`))errors.push(`${path}: canonical incorrect`);
  for(const code of [...active,'x-default'])if(!html.includes(`hreflang="${code}"`))errors.push(`${path}: hreflang ${code} missing`);
  if(!html.includes('property="og:locale" content="ru_RU"'))errors.push(`${path}: OG locale incorrect`);
  if(!html.includes('<html lang="ru" dir="ltr"'))errors.push(`${path}: lang/direction incorrect`);
  if((html.match(/<h1\b/g)||[]).length!==1)errors.push(`${path}: expected one H1`);
  for(const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g))try{JSON.parse(block[1])}catch{errors.push(`${path}: invalid schema JSON`)}
}

const sitemapFiles=readdirSync(dist).filter((name)=>name.startsWith('sitemap-')&&name.endsWith('.xml'));
const sitemap=sitemapFiles.map((name)=>readFileSync(join(dist,name),'utf8')).join('\n');
if(!sitemap.includes('https://ctseg.com.tr/ru/'))errors.push('Russian homepage missing from sitemap');
for(const path of ruSourcing)if(!sitemap.includes(`https://ctseg.com.tr/${path.replace(/index\.html$/,'')}`))errors.push(`${path}: missing from sitemap`);
if(sitemap.includes('https://ctseg.com.tr/fr/'))errors.push('French URL remains in sitemap');

const redirects=readFileSync(join(dist,'_redirects'),'utf8');
const requiredRedirects=[
  '/fr /en/ 301','/fr/ /en/ 301',
  '/fr/sourcing/tapis-persans/ /en/sourcing/iranian-carpets/ 301',
  '/fr/sourcing/tapis-en-soie-noues-main/ /en/sourcing/hand-knotted-silk-carpets/ 301',
  '/fr/sourcing/sourcing-textile-en-gros/ /en/sourcing/wholesale-textile-sourcing/ 301',
  '/fr/* /en/ 301'
];
for(const rule of requiredRedirects)if(!redirects.split(/\r?\n/).includes(rule))errors.push(`redirect missing: ${rule}`);
for(const rule of requiredRedirects){
  const target=rule.split(/\s+/)[1];
  if(target.startsWith('/fr'))errors.push(`redirect chain risk: ${rule}`);
}

if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log('Locale contract passed: 6 active locales, Russian homepage + 3 sourcing routes, French cleanup and one-hop redirects.');
