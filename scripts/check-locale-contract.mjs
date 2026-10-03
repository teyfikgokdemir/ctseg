import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

const dist=resolve('dist');
const errors=[];
const active=['tr','en','de','it','fa','ru','zh','vi','uk','ro','bg','he','ar'];
const switchLocales=[...active];
const fullSiteLocales=active.filter((code)=>code!=='he');
const homes={tr:'index.html',en:'en/index.html',de:'de/index.html',it:'it/index.html',fa:'fa/index.html',ru:'ru/index.html',zh:'zh/index.html',vi:'vi/index.html',uk:'uk/index.html',ro:'ro/index.html',bg:'bg/index.html',he:'he/index.html',ar:'ar/index.html'};
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
  for(const code of switchLocales)if(!links.some((tag)=>tag.includes(`hreflang="${code}"`)))errors.push(`${path}: locale switcher missing ${code}`);
  if(links.some((tag)=>tag.includes('hreflang="fr"')))errors.push(`${path}: French remains in locale switcher`);
  const requiredAlternates = [...active,'x-default'];
  for(const code of requiredAlternates)if(!html.includes(`hreflang="${code}"`))errors.push(`${path}: homepage hreflang ${code} missing`);
}

const arHome=read(homes.ar);
if(!arHome.includes('<html lang="ar-SA" dir="rtl"'))errors.push('Arabic homepage lang/direction incorrect');
const arH1Text=([...arHome.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)][0]?.[1]??'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
if(!/[\u0600-\u06FF]/.test(arH1Text))errors.push('Arabic homepage H1 is not localized');
if(!/[\u0600-\u06FF]/.test(arHome))errors.push('Arabic homepage has no Arabic content');
for(const englishMarker of ['Trade needs disciplined coordination','We turn international trade','Quick contact','Global Sourcing Capacity'])if(arHome.includes(englishMarker))errors.push('Arabic homepage contains English fallback marker: '+englishMarker);
for(const requiredArabicHomeBlock of ['id="for-buyers"','id="for-producers"','id="external-trade-desk"','مكتب التجارة الخارجية'])if(!arHome.includes(requiredArabicHomeBlock))errors.push('Arabic homepage missing required trade path block: '+requiredArabicHomeBlock);
for(const ArabicNavLabel of ['التوريد الاستراتيجي','البحث عن الموردين والتحقق منهم','استشارات التجارة الدولية','تحليل وتحسين التكلفة الكلية TCO','دخول الأسواق','طريقة العمل','سيناريوهات عمل تمثيلية'])if(!arHome.includes(ArabicNavLabel))errors.push('Arabic navigation missing required item: '+ArabicNavLabel);
for(const ArabicGlassHref of ['/ar/glass/','/ar/glass/float-glass/','/ar/glass/tempered-glass/','/ar/glass/laminated-glass/','/ar/glass/low-e-coated-glass/','/ar/glass/insulated-glass-igu/','/ar/glass/architectural-project-glass/'])if(!arHome.includes(`href="${ArabicGlassHref}"`))errors.push('Arabic glass navigation missing item: '+ArabicGlassHref);
for(const ArabicHubHref of ['/ar/services/','/ar/trade-products/','/ar/markets/','/ar/insights/','/ar/about/','/ar/contact/'])if(!arHome.includes(`href="${ArabicHubHref}"`))errors.push('Arabic navigation missing hub link: '+ArabicHubHref);


const arCore=[
  'ar/services/index.html','ar/trade-products/index.html','ar/markets/index.html','ar/insights/index.html','ar/about/index.html','ar/contact/index.html',
  'ar/services/strategic-sourcing/index.html','ar/services/supplier-sourcing-and-verification/index.html','ar/services/international-trade-advisory/index.html','ar/services/cost-optimisation-tco/index.html','ar/services/market-entry/index.html',
  'ar/solutions/turkiye-supplier-sourcing/index.html','ar/solutions/private-label-manufacturer/index.html','ar/solutions/rfq-bid-comparison/index.html','ar/solutions/food-origin-batch-documents/index.html',
  'ar/privacy/index.html','ar/cookies/index.html','ar/terms/index.html','ar/data-protection/index.html',
  'ar/how-we-work/index.html','ar/representative-work-scenarios/index.html',
  'ar/trade-products/akbari-pistachio/index.html','ar/insights/strategic-sourcing-vs-procurement/index.html',
  'ar/glass/index.html','ar/glass/float-glass/index.html','ar/glass/markets/gulf-middle-east/index.html',
  'ar/sourcing/iranian-carpets/index.html','ar/sourcing/hand-knotted-silk-carpets/index.html','ar/sourcing/wholesale-textile-sourcing/index.html'
];
for(const path of arCore){
  if(!existsSync(join(dist,path))){errors.push(`${path}: Arabic parity route missing`);continue}
  const html=read(path);
  if(!html.includes('dir="rtl"'))errors.push(`${path}: Arabic direction missing`);
  if(!html.includes('lang="ar-SA"')&&!html.includes('lang="ar"'))errors.push(`${path}: Arabic lang missing`);
  const visibleText=html.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<style[\s\S]*?<\/style>/gi,'').replace(/<[^>]+>/g,' ');
  if(!/[\u0600-\u06FF]/.test(visibleText))errors.push(`${path}: Arabic visible content missing`);
  for(const marker of ['Commercial assessment information','Related resources','Explore sourcing insights','Trade Intelligence','Submit Commercial Request','Quick contact'])if(visibleText.includes(marker))errors.push(`${path}: English fallback marker remains (${marker})`);
}
const arService=read('ar/services/strategic-sourcing/index.html');
if((arService.match(/class="content-block/g)||[]).length<6||!arService.includes('الأسئلة الشائعة'))errors.push('Arabic strategic-sourcing detail depth incomplete');
const arProduct=read('ar/trade-products/akbari-pistachio/index.html');
if((arProduct.match(/<dt>/g)||[]).length<12||!arProduct.includes('معلومات التقييم التجاري'))errors.push('Arabic product-detail commercial facts incomplete');
const arInsight=read('ar/insights/strategic-sourcing-vs-procurement/index.html');
if((arInsight.match(/class="content-block article-block"/g)||[]).length<4||!arInsight.includes('التوريد الاستراتيجي'))errors.push('Arabic insight detail content/category incomplete');
const arGlass=read('ar/glass/index.html');
if(!arGlass.includes('الزجاج')||!arGlass.includes('dir="rtl"'))errors.push('Arabic glass hub localization incomplete');

const ruHome=read(homes.ru);
if(!ruHome.includes('<html lang="ru" dir="ltr"'))errors.push('Russian homepage lang/direction incorrect');
const ruH1Matches=[...ruHome.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)];
const ruH1Text=(ruH1Matches[0]?.[1]??'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
if(ruH1Matches.length!==1||!/[А-Яа-яЁё]/.test(ruH1Text)||!ruH1Text.includes('Турц'))errors.push('Russian homepage H1 missing, duplicated or not localized');
if(!/[А-Яа-яЁё]/.test(ruHome))errors.push('Russian homepage has no Cyrillic content');
for(const marker of ['Accueil','Français','Demander une offre','Tous droits réservés','Politique de confidentialité'])if(ruHome.includes(marker))errors.push(`Russian homepage contains French marker: ${marker}`);
for(const text of ['direct-answer','id="sectors"','КОМПЛАЕНС','external_trade_desk'])if(!ruHome.includes(text))errors.push(`Russian focused landing contract missing: ${text}`);
if(!ruHome.includes('property="og:locale" content="ru_RU"'))errors.push('Russian OG locale missing');

for(const path of ruSourcing){
  const html=read(path);
  const canonical=`https://ctseg.com.tr/${path.replace(/index\.html$/,'')}`;
  if(!html.includes(`<link rel="canonical" href="${canonical}"`))errors.push(`${path}: canonical incorrect`);
  for(const code of [...fullSiteLocales,'x-default'])if(!html.includes(`hreflang="${code}"`))errors.push(`${path}: hreflang ${code} missing`);
  if(!html.includes('property="og:locale" content="ru_RU"'))errors.push(`${path}: OG locale incorrect`);
  if(!html.includes('<html lang="ru" dir="ltr"'))errors.push(`${path}: lang/direction incorrect`);
  if((html.match(/<h1\b/g)||[]).length!==1)errors.push(`${path}: expected one H1`);
  for(const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g))try{JSON.parse(block[1])}catch{errors.push(`${path}: invalid schema JSON`)}
}

for(const path of ruCore){
  if(!existsSync(join(dist,path))){errors.push(`${path}: Russian parity route missing`);continue}
  const html=read(path);
  if(!html.includes('<html lang="ru" dir="ltr"'))errors.push(`${path}: Russian lang/direction incorrect`);
  for(const code of [...fullSiteLocales,'x-default'])if(!html.includes(`hreflang="${code}"`))errors.push(`${path}: hreflang ${code} missing`);
}
const walk=(dir)=>readdirSync(dir,{withFileTypes:true}).flatMap((entry)=>entry.isDirectory()?walk(join(dir,entry.name)):[join(dir,entry.name)]);
const ruHtml=walk(join(dist,'ru')).filter((path)=>path.endsWith('.html'));
if(ruHtml.length<84)errors.push(`expected at least 84 Russian HTML pages, found ${ruHtml.length}`);
const frenchLeak=/\b(?:Accueil|Français|fournisseurs?|produits?|marchés?|données|confidentialité|conditions|utilisation|recherche|approvisionnement|conformité|origine|demander|offre|politique|notre|votre|avec|pour|dans|sur|une|des|les)\b/i;
for(const path of ruHtml){
  const visibleText=readFileSync(path,'utf8').replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<style[\s\S]*?<\/style>/gi,'').replace(/<[^>]+>/g,' ');
  const leak=visibleText.match(frenchLeak)?.[0];
  if(leak)errors.push(`${path.slice(dist.length+1)}: French marker remains (${leak})`);
}

const sitemapFiles=readdirSync(dist).filter((name)=>name.startsWith('sitemap-')&&name.endsWith('.xml'));
const sitemap=sitemapFiles.map((name)=>readFileSync(join(dist,name),'utf8')).join('\n');
if(!sitemap.includes('https://ctseg.com.tr/ru/'))errors.push('Russian homepage missing from sitemap');
if(!sitemap.includes('https://ctseg.com.tr/ar/'))errors.push('Arabic homepage missing from sitemap');
for(const path of arCore)if(!sitemap.includes(`https://ctseg.com.tr/${path.replace(/index\.html$/,'')}`))errors.push(`${path}: missing from sitemap`);
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
console.log('Locale contract passed: Arabic is enforced as a full-site RTL locale alongside the existing production locales, with Russian parity, localized solution landings, legacy cleanup and one-hop redirects.');

