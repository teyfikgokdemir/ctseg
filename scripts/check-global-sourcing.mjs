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
