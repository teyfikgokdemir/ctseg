import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import manifest from '../public/images/generated/manifest.json' with { type:'json' };
import { homeTradeVisualKeys, tradeVisuals } from '../src/data/trade-visuals.ts';

const root=fileURLToPath(new URL('..',import.meta.url));
const dist=join(root,'dist');
const failures=[];
const expectedWidths=[640,768,960,1280,1536];
const homeFiles=['index.html','en/index.html','de/index.html','it/index.html','fr/index.html','fa/index.html'];

const walk=(dir)=>readdirSync(dir,{withFileTypes:true}).flatMap((entry)=>{
  const path=join(dir,entry.name);
  return entry.isDirectory()?walk(path):[path];
});
const attr=(tag,name)=>tag.match(new RegExp(`\\s${name}="([^"]*)"`,'i'))?.[1]??null;
const htmlFiles=walk(dist).filter((file)=>file.endsWith('.html'));

for(const visual of Object.values(tradeVisuals)){
  const sourceName=visual.source.split('/').at(-1);
  if(!existsSync(join(root,'public',visual.source)))failures.push(`missing source: ${visual.source}`);
  for(const width of expectedWidths){
    if(!manifest[`${sourceName}:${width}`])failures.push(`manifest missing: ${sourceName}:${width}`);
  }
  for(const [locale,text] of Object.entries(visual.alt)){
    if(!text.trim())failures.push(`empty ${locale} alt: ${visual.key}`);
  }
}

for(const file of htmlFiles){
  const html=readFileSync(file,'utf8');
  const images=[...html.matchAll(/<img\b[^>]*data-trade-visual="[^"]+"[^>]*>/gi)].map((match)=>match[0]);
  if(!images.length)continue;
  const page=relative(dist,file).replaceAll('\\','/');
  const keys=images.map((tag)=>attr(tag,'data-trade-visual'));
  const sources=images.map((tag)=>attr(tag,'src')?.split('?')[0]);
  if(new Set(keys).size!==keys.length)failures.push(`${page}: duplicate visual key ${keys.join(', ')}`);
  if(new Set(sources).size!==sources.length)failures.push(`${page}: duplicate visual source ${sources.join(', ')}`);
  for(const tag of images){
    const key=attr(tag,'data-trade-visual');
    const src=attr(tag,'src')?.split('?')[0];
    const alt=attr(tag,'alt');
    if(!tradeVisuals[key])failures.push(`${page}: unknown visual key ${key}`);
    if(!alt?.trim())failures.push(`${page}: empty alt for ${key}`);
    if(!attr(tag,'width')||!attr(tag,'height'))failures.push(`${page}: missing dimensions for ${key}`);
    if(!attr(tag,'srcset')||!attr(tag,'sizes'))failures.push(`${page}: missing responsive attributes for ${key}`);
    if(!attr(tag,'decoding'))failures.push(`${page}: missing decoding for ${key}`);
    if(!attr(tag,'style')?.includes('object-position'))failures.push(`${page}: missing focal position for ${key}`);
    if(src&&!existsSync(join(dist,src)))failures.push(`${page}: emitted image missing ${src}`);
  }
  const hero=images.filter((tag)=>attr(tag,'data-trade-visual')==='global-trade-hero');
  if(hero.some((tag)=>attr(tag,'loading')!=='eager'||attr(tag,'fetchpriority')!=='high'))failures.push(`${page}: hero priority contract failed`);
  if(hero.length&&images.filter((tag)=>attr(tag,'data-trade-visual')!=='global-trade-hero').some((tag)=>attr(tag,'loading')!=='lazy'||attr(tag,'fetchpriority')==='high'))failures.push(`${page}: non-hero loading contract failed`);
}

for(const file of homeFiles){
  const html=readFileSync(join(dist,file),'utf8');
  const keys=[...html.matchAll(/data-trade-visual="([^"]+)"/g)].map((match)=>match[1]);
  const expected=['global-trade-hero',...homeTradeVisualKeys];
  if(JSON.stringify(keys)!==JSON.stringify(expected))failures.push(`${file}: expected ${expected.join(', ')}, got ${keys.join(', ')}`);
  const imagePreloads=[...html.matchAll(/<link\b[^>]*rel="preload"[^>]*as="image"[^>]*>/gi)];
  if(imagePreloads.length!==1)failures.push(`${file}: expected one hero image preload, got ${imagePreloads.length}`);
}

const targetSources=Object.values(tradeVisuals).map((visual)=>visual.source);
for(const file of ['src/components/PageContent.astro','src/pages/fa/index.astro','src/pages/[lang]/sourcing/[sector].astro']){
  const source=readFileSync(join(root,file),'utf8');
  for(const image of targetSources){
    if(source.includes(image))failures.push(`${file}: hard-coded trade visual ${image}`);
  }
}

if(failures.length){
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`Image audit passed: ${Object.keys(tradeVisuals).length} central assets, ${homeFiles.length} localized homepages, responsive manifest ${expectedWidths.join('/')}px.`);
