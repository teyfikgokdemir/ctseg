import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
const languages=['tr','en','de','it','fa','ru','zh','vi','uk','ro','bg','he','ar'];
const ids=['industrial','textiles','beauty','agriculture','construction','packaging','food'];
// Visitor-facing sector pages must not display AI provenance banners.
// Generation provenance remains documented in docs/global-sourcing-assets.json.
const visualDisclosureCopy = [
  'Yapay zekâyla oluşturulmuş sektör görselleridir',
  'AI-generated industry illustrations',
  'KI-generierte Branchenillustrationen',
  'Illustrazioni di settore generate con IA',
  'تصاویر صنایع با هوش مصنوعی تولید شده‌اند',
  'Отраслевые иллюстрации созданы ИИ',
  '行业插图由人工智能生成',
  'Minh họa ngành được tạo bằng trí tuệ nhân tạo',
  'Галузеві ілюстрації створено ШІ',
  'Ilustrații de industrie generate cu inteligență artificială',
  'Отраслови илюстрации, създадени с изкуствен интелект',
  'איורי הענפים נוצרו בבינה מלאכותית',
  'رسوم قطاعية مولّدة بالذكاء الاصطناعي'
];
function assertNoMarketingImageDisclaimer(html, label) {
  assert(!html.includes('gs-image-note'), `${label}: obsolete image disclaimer UI remains`);
  for (const phrase of visualDisclosureCopy) {
    assert(!html.includes(phrase), `${label}: visitor-facing image disclaimer remains: ${phrase}`);
  }
}
for(const lang of languages){
  const home=readFileSync(lang==='tr'?'dist/index.html':`dist/${lang}/index.html`,'utf8');
  assert(home.includes('data-global-sourcing'),`${lang}: worldwide sourcing homepage missing`);
  assertNoMarketingImageDisclaimer(home, `${lang}/home`);
  assert(!/href="[^"]*\/(?:glass|cam)[\/\"]/.test(home),`${lang}: retired glass link`);
  for(const id of ids){
    const file=`dist/${lang}/industries/${id}/index.html`;
    assert(existsSync(file),`${lang}/${id}: industry page missing`);
    const html=readFileSync(file,'utf8');
    assertNoMarketingImageDisclaimer(html, `${lang}/industries/${id}`);
    assert(html.includes(`https://ctseg.com.tr/${lang}/industries/${id}/`),'industry canonical missing');
    for(const alt of languages) assert(html.includes(`hreflang="${alt}"`),`${lang}/${id}: alternate ${alt} absent`);
    assert(!html.includes('"@type":"Product"'),'service page must not claim stocked Product');
  }
  for(const id of ['import-sourcing','export-development','buyer-supplier-matching','oem-odm','private-label','distributor-discovery','industrial-procurement']) {
    assert(existsSync(`dist/${lang}/solutions/${id}/index.html`),`${lang}/${id}: capability missing`);
    assertNoMarketingImageDisclaimer(readFileSync(`dist/${lang}/solutions/${id}/index.html`,'utf8'), `${lang}/solutions/${id}`);
  }
  assert(existsSync(`dist/${lang}/global-markets/index.html`));
}
console.log('Global sourcing contract passed: 13 homes, 91 industry pages, 91 capability pages, 13 region directories.');
for(const [file,expected] of [
  ['dist/en/contact/index.html','/de/kontakt/'],
  ['dist/en/privacy-policy/index.html','/de/datenschutzerklaerung/']
]){
  const html=readFileSync(file,'utf8');
  const german=[...html.matchAll(/<a\b[^>]*data-locale-option[^>]*>/g)].map(m=>m[0]).filter(tag=>tag.includes('data-locale="de"'));
  assert(german.length===2 && german.every(tag=>tag.includes(`href="${expected}"`)),`${file}: language switch must retain its counterpart`);
}

/* The legacy service indexes were intentionally consolidated into the global
 * solutions index. Keep those redirects and the distinct legacy detail URLs.
 * An earlier attempt to render a separate legacy hub was unreachable because
 * getRouteRecords() excludes those indexes. Guard the actual URL contract. */
const legacyServiceIndex = {
  tr:'hizmetler',en:'services',de:'dienstleistungen',it:'servizi',
  ru:'uslugi',fa:'services',zh:'services',vi:'services',
  uk:'posluhy',ro:'servicii',bg:'uslugi',ar:'services',he:'שירותים'
};
const redirects=readFileSync('public/_redirects','utf8');
for(const [lang,slug] of Object.entries(legacyServiceIndex)){
  const legacy=`/${lang}/${slug}/`;
  const destination=`/${lang}/solutions/`;
  assert(redirects.split(/\r?\n/).some(line=>line.trim()===`${legacy} ${destination} 301`),
    `${lang}: legacy index must 301 to the global solutions index`);
  assert(existsSync(`dist/${lang}/solutions/index.html`),
    `${lang}: global solutions index missing`);
  assert(!existsSync(`dist/${lang}/${slug}/index.html`),
    `${lang}: legacy index must not emit a conflicting static page`);
}
for(const [lang,slug] of [['tr','hizmetler'],['en','services']]){
  const home=readFileSync(lang==='tr'?'dist/index.html':`dist/${lang}/index.html`,'utf8');
  const menuItems=[...home.matchAll(/<a\b[^>]*class="desktop-solution-item"[^>]*>/g)].map(match=>match[0]);
  const solutionLinks=menuItems.filter(tag=>tag.includes(`href="/${lang}/solutions/"`));
  assert(solutionLinks.length===1,`${lang}: global trade dropdown must contain one solutions index link`);
  assert(existsSync(`dist/${lang}/${slug}/${lang==='tr'?'stratejik-tedarik':'strategic-sourcing'}/index.html`),
    `${lang}: established advisory detail route missing`);
}
console.log('Legacy advisory URLs and unified global solutions menu passed.');
