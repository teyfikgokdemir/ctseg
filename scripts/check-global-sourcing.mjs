import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
const languages=['tr','en','de','it','fa','ru','zh','vi','uk','ro','bg','he','ar'];
const ids=['industrial','textiles','beauty','agriculture','construction','packaging','food'];
for(const lang of languages){
  const home=readFileSync(lang==='tr'?'dist/index.html':`dist/${lang}/index.html`,'utf8');
  assert(home.includes('data-global-sourcing'),`${lang}: worldwide sourcing homepage missing`);
  assert(!/href="[^"]*\/(?:glass|cam)[\/\"]/.test(home),`${lang}: retired glass link`);
  for(const id of ids){
    const file=`dist/${lang}/industries/${id}/index.html`;
    assert(existsSync(file),`${lang}/${id}: industry page missing`);
    const html=readFileSync(file,'utf8');
    assert(html.includes(`https://ctseg.com.tr/${lang}/industries/${id}/`),'industry canonical missing');
    for(const alt of languages) assert(html.includes(`hreflang="${alt}"`),`${lang}/${id}: alternate ${alt} absent`);
    assert(!html.includes('"@type":"Product"'),'service page must not claim stocked Product');
  }
  for(const id of ['import-sourcing','export-development','buyer-supplier-matching','oem-odm','private-label','distributor-discovery','industrial-procurement']) {
    assert(existsSync(`dist/${lang}/solutions/${id}/index.html`),`${lang}/${id}: capability missing`);
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
  const menuItems=[...home.matchAll(/<a\\b[^>]*class="desktop-solution-item"[^>]*>/g)].map(match=>match[0]);
  const solutionLinks=menuItems.filter(tag=>tag.includes(`href="/${lang}/solutions/"`));
  assert(solutionLinks.length===1,`${lang}: global trade dropdown must contain one solutions index link`);
  assert(existsSync(`dist/${lang}/${slug}/${lang==='tr'?'stratejik-tedarik':'strategic-sourcing'}/index.html`),
    `${lang}: established advisory detail route missing`);
}
console.log('Legacy advisory URLs and unified global solutions menu passed.');
