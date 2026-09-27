import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const dist=resolve('dist');
const origin='https://ctseg.com.tr';
const localeSource=readFileSync(resolve('src/data/locales.ts'),'utf8');
const active=[...localeSource.matchAll(/code:'([^']+)'[^\n]*active:true/g)].map(m=>m[1]);
const errors=[];
if(!existsSync(dist)){console.error('dist/ not found. Run npm run build first.');process.exit(1)}

const walk=(d)=>readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(join(d,e.name)):[join(d,e.name)]);
const files=walk(dist);
const htmlFiles=files.filter(f=>f.endsWith('.html'));
const pages=new Map();
const titleOwners=new Map();
const descriptionOwners=new Map();

const outputPath=(file)=>{
  const label=relative(dist,file).replaceAll('\\','/');
  if(label==='index.html')return '/';
  return '/'+label.replace(/index\.html$/,'');
};
const addUnique=(map,value,label,kind,lang)=>{
  if(!value)return;
  const key=`${lang}\0${value}`;
  if(map.has(key))errors.push(`${label}: duplicate ${kind} in ${lang} (also ${map.get(key)})`);
  else map.set(key,label);
};

for(const file of htmlFiles){
  const label=relative(dist,file).replaceAll('\\','/');
  const html=readFileSync(file,'utf8');
  const is404=label==='404.html';
  const title=html.match(/<title>([^<]*)<\/title>/)?.[1]?.trim()??'';
  const description=html.match(/<meta name="description" content="([^"]*)"/)?.[1]?.trim()??'';
  const canonical=html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const robots=html.match(/<meta name="robots" content="([^"]+)"/)?.[1]??'';
  const rawLang=html.match(/<html lang="([^"]+)"/)?.[1]??'';
  const lang=rawLang.startsWith('zh')?'zh':rawLang.startsWith('vi')?'vi':rawLang;
  if(is404){if(!robots.includes('noindex'))errors.push('404.html: missing noindex');continue}

  const expected=encodeURI(origin+outputPath(file));
  if(!title||/undefined|null/i.test(title))errors.push(`${label}: invalid title`);
  if(!description||/undefined|null/i.test(description))errors.push(`${label}: invalid description`);
  if(!robots.includes('index')||robots.includes('noindex'))errors.push(`${label}: not index,follow`);
  if(canonical!==expected)errors.push(`${label}: canonical ${canonical} does not match ${expected}`);
  if(!active.includes(lang))errors.push(`${label}: inactive/unknown lang ${rawLang}`);
  if(canonical){
    if(pages.has(canonical))errors.push(`${label}: duplicate canonical also used by ${pages.get(canonical).label}`);
    else pages.set(canonical,{label,html,lang});
  }
  addUnique(titleOwners,title,label,'title',lang);
  addUnique(descriptionOwners,description,label,'description',lang);

  const alternates=Object.fromEntries([...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map(m=>[m[1],m[2]]));
  if(Object.keys(alternates).length){
    if(!alternates['x-default'])errors.push(`${label}: missing x-default hreflang`);
    if(alternates[lang]!==canonical)errors.push(`${label}: self hreflang mismatch`);
  }
  for(const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)){
    try{JSON.parse(block[1])}catch(e){errors.push(`${label}: invalid JSON-LD (${e.message})`)}
  }
  if(/REFLEX|reflex-disposable-gloves/i.test(html))errors.push(`${label}: obsolete REFLEX SEO/content remains`);
}

for(const [canonical,page] of pages){
  const alt=Object.fromEntries([...page.html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map(m=>[m[1],m[2]]));
  for(const code of active.filter(c=>alt[c])){
    const target=pages.get(alt[code]);
    if(!target){errors.push(`${page.label}: hreflang ${code} target is not indexable`);continue}
    const reciprocal=Object.fromEntries([...target.html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map(m=>[m[1],m[2]]));
    if(reciprocal[page.lang]!==canonical)errors.push(`${page.label}: hreflang ${code} is not reciprocal`);
  }
}

const sitemapFiles=files.filter(f=>/sitemap-\d+\.xml$/.test(f));
const sitemapUrls=sitemapFiles.flatMap(f=>[...readFileSync(f,'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]));
if(new Set(sitemapUrls).size!==sitemapUrls.length)errors.push('sitemap contains duplicate URLs');
for(const url of sitemapUrls){
  if(!url.startsWith(origin+'/')||url.includes('www.')||url.startsWith('http://'))errors.push(`sitemap contains non-canonical URL ${url}`);
  if(!pages.has(url))errors.push(`sitemap URL is not an indexable self-canonical page: ${url}`);
}
for(const canonical of pages.keys())if(!sitemapUrls.includes(canonical))errors.push(`indexable canonical missing from sitemap: ${canonical}`);

const redirectsPath=join(dist,'_redirects');
if(existsSync(redirectsPath)){
  const lines=readFileSync(redirectsPath,'utf8').split(/\r?\n/).map(x=>x.trim()).filter(x=>x&&!x.startsWith('#'));
  const bySource=new Map();
  for(const line of lines){
    const [source,target,status]=line.split(/\s+/);
    if(!source||!target)continue;
    if(status!=='301')errors.push(`${source}: redirect status must be 301`);
    if(source===target)errors.push(`${source}: redirect loop`);
    if(bySource.has(source))errors.push(`${source}: duplicate redirect source`);
    bySource.set(source,{target,status});
  }
  for(const [source,{target}] of bySource)if(bySource.has(target))errors.push(`${source}: redirect chain through ${target}`);
}

const robots=readFileSync(join(dist,'robots.txt'),'utf8');
if(/Disallow:\s*\/(?:\s|$)/i.test(robots))errors.push('robots.txt blocks the site');
if(!robots.includes('Sitemap: https://ctseg.com.tr/sitemap-index.xml'))errors.push('robots.txt has wrong sitemap URL');

const unique=[...new Set(errors)];
if(unique.length){console.error(`SEO check failed with ${unique.length} error(s):`);for(const e of unique)console.error('- '+e);process.exit(1)}
console.log(`SEO check passed: ${pages.size} indexable self-canonical pages across ${active.length} active locales; sitemap, reciprocal hreflang, metadata, redirects and JSON-LD validated.`);
