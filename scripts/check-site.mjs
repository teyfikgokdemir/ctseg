import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { extname, join, relative, resolve } from 'node:path';

const root=resolve('dist');
const sourceLocales=readFileSync(resolve('src/data/locales.ts'),'utf8');
const active=[...sourceLocales.matchAll(/code:'([^']+)'[^\n]*active:true/g)].map(m=>m[1]);
const errors=[];
if(!existsSync(root)){console.error('dist/ not found. Run npm run build first.');process.exit(1)}

const walk=(dir)=>readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(join(dir,e.name)):[join(dir,e.name)]);
const files=walk(root);
const htmlFiles=files.filter(f=>f.endsWith('.html'));
const textExt=new Set(['.astro','.css','.html','.js','.json','.md','.mjs','.cjs','.svg','.ts','.txt','.xml','.yaml','.yml']);
const mojibake=['TÃ','ÄŸ','Ä±','Ã¼','Ã¶','Ã§','ÅŸ','Â©','�'];
const decoder=new TextDecoder('utf-8',{fatal:true});
const isText=(f)=>textExt.has(extname(f))||f.endsWith('_headers');
const scan=(f,label)=>{let t;try{t=decoder.decode(readFileSync(f))}catch{errors.push(`${label}: invalid UTF-8`);return}for(const x of mojibake)if(t.includes(x))errors.push(`${label}: mojibake sequence ${JSON.stringify(x)}`)};

const tracked=execFileSync('git',['ls-files'],{encoding:'utf8'}).trim().split(/\r?\n/).filter(Boolean);
for(const f of tracked.filter(f=>isText(f)&&existsSync(resolve(f))))scan(resolve(f),`source ${f}`);
for(const f of files.filter(isText))scan(f,`build ${relative(root,f).replaceAll('\\','/')}`);

const targetExists=(pathname)=>{
  let clean;
  try{clean=decodeURI(pathname).replace(/^\/+|\/+$/g,'')}catch{clean=pathname.replace(/^\/+|\/+$/g,'')}
  if(!clean)return existsSync(join(root,'index.html'));
  return existsSync(join(root,clean))||existsSync(join(root,clean,'index.html'))||existsSync(join(root,`${clean}.html`));
};

const canonicalPages=new Map();
let checkedLinks=0;
for(const file of htmlFiles){
  const html=readFileSync(file,'utf8');
  const label=relative(root,file).replaceAll('\\','/');
  const is404=label==='404.html';
  const title=html.match(/<title>([^<]*)<\/title>/)?.[1]?.trim()??'';
  const description=html.match(/<meta name="description" content="([^"]*)"/)?.[1]?.trim()??'';
  const canonical=html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const rawLang=html.match(/<html lang="([^"]+)"/)?.[1]??'';
  const lang=rawLang.startsWith('zh')?'zh':rawLang.startsWith('vi')?'vi':rawLang;
  const h1Count=(html.match(/<h1\b/g)||[]).length;

  if(is404)continue;
  if(!title||/^undefined\b/i.test(title)||/\bundefined\b/i.test(title))errors.push(`${label}: invalid title "${title}"`);
  if(!description||/\bundefined\b/i.test(description))errors.push(`${label}: invalid meta description`);
  if(h1Count!==1)errors.push(`${label}: expected one H1, found ${h1Count}`);
  if(!canonical)errors.push(`${label}: canonical missing`);
  else{
    if(!canonical.startsWith('https://ctseg.com.tr/'))errors.push(`${label}: non-canonical origin ${canonical}`);
    if(canonicalPages.has(canonical))errors.push(`${label}: duplicate canonical also used by ${canonicalPages.get(canonical)}`);
    else canonicalPages.set(canonical,label);
  }
  if(!active.includes(lang))errors.push(`${label}: html lang "${rawLang}" is not an active locale`);
  if((html.match(/<header\b/g)||[]).length!==1||(html.match(/<footer\b/g)||[]).length!==1)errors.push(`${label}: expected one header and one footer`);
  if(html.includes('fonts.googleapis.com')||html.includes('fonts.gstatic.com'))errors.push(`${label}: external Google Fonts dependency remains`);
  if(/REFLEX|reflex-disposable-gloves|ReflexPageContent|ReflexSection/i.test(html))errors.push(`${label}: removed REFLEX content/link remains`);

  const alternates=Object.fromEntries([...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map(m=>[m[1],m[2]]));
  if(Object.keys(alternates).length){
    if(!alternates['x-default'])errors.push(`${label}: x-default hreflang missing`);
    if(canonical&&alternates[lang]!==canonical)errors.push(`${label}: self hreflang does not match canonical`);
  }

  const localeLinks=[...html.matchAll(/<a\b[^>]*data-locale-option[^>]*>/g)].map(m=>m[0]);
  if(localeLinks.length){
    for(const code of active)if(!localeLinks.some(tag=>tag.includes(`hreflang="${code}"`)))errors.push(`${label}: locale switcher missing ${code}`);
  }

  for(const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)){
    try{JSON.parse(block[1])}catch(e){errors.push(`${label}: invalid JSON-LD (${e.message})`)}
  }

  for(const m of html.matchAll(/href="([^"]+)"/g)){
    let href=m[1];
    if(/^(#|mailto:|tel:|javascript:|data:)/.test(href))continue;
    if(/^https?:\/\//.test(href)){const u=new URL(href);if(u.hostname!=='ctseg.com.tr')continue;href=u.pathname}
    if(!href.startsWith('/'))continue;
    const pathname=href.split(/[?#]/)[0];
    checkedLinks++;
    if(!targetExists(pathname)&&!pathname.startsWith('/images/')&&pathname!=='/favicon.svg')errors.push(`${label}: broken internal link ${pathname}`);
  }
}

for(const code of active){
  const home=code==='tr'?join(root,'index.html'):join(root,code,'index.html');
  if(!existsSync(home))errors.push(`homepage missing for active locale ${code}`);
}

const sourceScan=tracked.filter(f=>isText(f)&&existsSync(resolve(f))).map(f=>readFileSync(resolve(f),'utf8')).join('\n');
if(/REFLEX|reflex-disposable-gloves|ReflexPageContent|ReflexSection/i.test(sourceScan))errors.push('source: removed REFLEX references remain');

const sitemap=files.filter(f=>/sitemap-\d+\.xml$/.test(f)).map(f=>readFileSync(f,'utf8')).join('\n');
for(const [canonical,label] of canonicalPages)if(!sitemap.includes(`<loc>${canonical}</loc>`))errors.push(`${label}: canonical missing from sitemap`);

const unique=[...new Set(errors)];
if(unique.length){console.error(`Site check failed with ${unique.length} error(s):`);for(const e of unique)console.error('- '+e);process.exit(1)}
console.log(`Site check passed: ${htmlFiles.length} HTML files, ${active.length} active locales, ${canonicalPages.size} unique canonicals and ${checkedLinks} internal links validated.`);
