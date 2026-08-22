import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

const dist=resolve('dist');
const errors=[];
const active=['tr','en','de','it','fa','ru','zh','vi'];
const homes={tr:'index.html',en:'en/index.html',de:'de/index.html',it:'it/index.html',fa:'fa/index.html',ru:'ru/index.html',zh:'zh/index.html',vi:'vi/index.html'};
const ruSourcing=['ru/sourcing/carpets/index.html','ru/sourcing/hand-knotted-silk-carpets/index.html','ru/sourcing/textiles/index.html'];
const ruCore=[
  'ru/uslugi/index.html','ru/tovary/index.html','ru/rynki/index.html','ru/materialy/index.html','ru/o-kompanii/index.html','ru/kontakty/index.html',
  'ru/uslugi/strategicheskiy-sorsing/index.html','ru/uslugi/poisk-i-verifikatsiya-postavshchikov/index.html',
  'ru/resheniya/poisk-proverka-postavshchikov-turciya/index.html','ru/resheniya/poisk-proizvoditelya-chastnoy-marki/index.html',
  'ru/resheniya/mezhdunarodnyi-rfq-sravnenie-predlozheniy/index.html','ru/resheniya/proiskhozhdenie-pishchevyh-produktov-dokumenty-partii/index.html',
  'ru/politika-konfidentsialnosti/index.html','ru/politika-cookie/index.html','ru/usloviya-ispolzovaniya/index.html','ru/uvedomlenie-o-zashhite-dannykh/index.html'
];
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

for(const path of ruCore){
  if(!existsSync(join(dist,path))){errors.push(`${path}: Russian parity route missing`);continue}
  const html=read(path);
  if(!html.includes('<html lang="ru" dir="ltr"'))errors.push(`${path}: Russian lang/direction incorrect`);
  for(const code of [...active,'x-default'])if(!html.includes(`hreflang="${code}"`))errors.push(`${path}: hreflang ${code} missing`);
}
const walk=(dir)=>readdirSync(dir,{withFileTypes:true}).flatMap((entry)=>entry.isDirectory()?walk(join(dir,entry.name)):[join(dir,entry.name)]);
const ruHtml=walk(join(dist,'ru')).filter((path)=>path.endsWith('.html'));
if(ruHtml.length!==51)errors.push(`expected 51 indexable Russian HTML pages, found ${ruHtml.length}`);
const frenchLeak=/\b(?:Accueil|Français|fournisseurs?|produits?|marchés?|données|confidentialité|conditions|utilisation|recherche|approvisionnement|conformité|origine|demander|offre|politique|notre|votre|avec|pour|dans|sur|une|des|les)\b/i;
for(const path of ruHtml){
  const visibleText=readFileSync(path,'utf8').replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<style[\s\S]*?<\/style>/gi,'').replace(/<[^>]+>/g,' ');
  const leak=visibleText.match(frenchLeak)?.[0];
  if(leak)errors.push(`${path.slice(dist.length+1)}: French marker remains (${leak})`);
}

const sitemapFiles=readdirSync(dist).filter((name)=>name.startsWith('sitemap-')&&name.endsWith('.xml'));
const sitemap=sitemapFiles.map((name)=>readFileSync(join(dist,name),'utf8')).join('\n');
if(!sitemap.includes('https://ctseg.com.tr/ru/'))errors.push('Russian homepage missing from sitemap');
for(const path of ruSourcing)if(!sitemap.includes(`https://ctseg.com.tr/${path.replace(/index\.html$/,'')}`))errors.push(`${path}: missing from sitemap`);
for(const path of ruCore)if(!sitemap.includes(`https://ctseg.com.tr/${path.replace(/index\.html$/,'')}`))errors.push(`${path}: missing from sitemap`);
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
console.log('Locale contract passed: 8 active locales, 51-page Russian parity, localized solution landings, French cleanup and one-hop redirects.');
