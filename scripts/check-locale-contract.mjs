import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

const dist=resolve('dist');
const source=readFileSync(resolve('src/data/locales.ts'),'utf8');
const active=[...source.matchAll(/code:'([^']+)'[^\n]*active:true/g)].map(m=>m[1]);
const errors=[];
if(!existsSync(dist)){console.error('dist/ not found');process.exit(1)}
const homePath=(code)=>code==='tr'?'index.html':`${code}/index.html`;
const read=(p)=>readFileSync(join(dist,p),'utf8');

const nativeMarkers={
  tr:['Karmaşık tedarik','Stratejik tedarik'],
  en:['Commercial certainty','Strategic sourcing'],
  de:['Beschaffung','Türkei'],
  it:['approvvigionamento','commerc'],
  fa:['تأمین','تجاری'],
  ru:['Турц','сорс'],
  zh:['采购','土耳其'],
  vi:['thu mua','Thổ Nhĩ Kỳ'],
  uk:['Комерційна','закупів'],
  ro:['Claritate comercială','aprovizionare'],
  bg:['Търговска яснота','снабдяване'],
  sr:['Komercijalna jasnoća','nabav']
};

for(const code of active){
  const path=homePath(code);
  if(!existsSync(join(dist,path))){errors.push(`${code}: homepage missing`);continue}
  const html=read(path);
  const title=html.match(/<title>([^<]*)<\/title>/)?.[1]?.trim()??'';
  const h1=(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]??'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
  if(!title||/undefined/i.test(title))errors.push(`${code}: invalid homepage title`);
  if(!h1)errors.push(`${code}: homepage H1 missing`);
  const expectedLang=code==='zh'?'zh-CN':code==='vi'?'vi-VN':code;
  if(!html.includes(`<html lang="${expectedLang}"`))errors.push(`${code}: incorrect html lang`);
  for(const marker of nativeMarkers[code]??[])if(!html.toLocaleLowerCase().includes(marker.toLocaleLowerCase()))errors.push(`${code}: native homepage marker missing (${marker})`);
  const links=[...html.matchAll(/<a\b[^>]*data-locale-option[^>]*>/g)].map(m=>m[0]);
  for(const target of active)if(!links.some(tag=>tag.includes(`hreflang="${target}"`)))errors.push(`${code}: locale switcher missing ${target}`);
  if(!html.includes(`hreflang="${code}"`)||!html.includes('hreflang="x-default"'))errors.push(`${code}: homepage hreflang contract incomplete`);
}

for(const code of ['uk','ro','bg','sr']){
  const dir=join(dist,code);
  if(!existsSync(dir))continue;
  const count=(function walk(d){return readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(join(d,e.name)):[join(d,e.name)]).filter(f=>f.endsWith('.html')).length})(dir);
  if(count<6)errors.push(`${code}: insufficient route parity (${count} HTML pages)`);
}

const unique=[...new Set(errors)];
if(unique.length){console.error(`Locale contract failed with ${unique.length} error(s):`);for(const e of unique)console.error('- '+e);process.exit(1)}
console.log(`Locale contract passed: ${active.length} active locales with homepage, native-copy and switcher parity checks.`);
