import assert from 'node:assert/strict';
import { existsSync, readFileSync, mkdirSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join } from 'node:path';
import { chromium } from 'playwright-core';
const executablePath = ['C:/Program Files/Google/Chrome/Application/chrome.exe','C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe','/usr/bin/chromium','/usr/bin/google-chrome'].find(existsSync);
assert(executablePath, 'Chrome/Edge is required');
const source = readFileSync('src/data/industry-specializations.ts','utf8');
const topics = JSON.parse(source.slice(source.indexOf('= [')+2, source.indexOf('\n];')+2));
const server = createServer((req,res) => {
  const pathname = decodeURI(new URL(req.url,'http://127.0.0.1').pathname);
  let file = join('dist',pathname);
  if (!extname(file)) file=join(file,'index.html');
  if (!existsSync(file)) { res.writeHead(404); res.end(); return; }
  const mime = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.woff2':'font/woff2','.svg':'image/svg+xml','.webp':'image/webp','.jpg':'image/jpeg','.png':'image/png'};
  res.setHeader('content-type',mime[extname(file)] || 'application/octet-stream');
  res.end(readFileSync(file));
});
await new Promise(resolve=>server.listen(4325,'127.0.0.1',resolve));
let browser, count=0;
const failures=[];
try {
  browser=await chromium.launch({executablePath,headless:true});
  const page=await browser.newPage();
  await page.route('**/*',route => new URL(route.request().url()).hostname==='127.0.0.1' ? route.continue() : route.abort());
  const cases = topics.map(topic=>({lang:'en',topic,width:390}));
  for(const lang of ['tr','de','it','fa','ru','zh','vi','uk','ro','bg','he','ar']) {
    for(const width of [320,1440]) cases.push({lang,topic:topics.find(t=>t.id==='korean-cosmetics'),width});
  }
  mkdirSync('.artifacts/specializations',{recursive:true});
  for(const {lang,topic,width} of cases) {
    await page.setViewportSize({width,height:900});
    const path=`/${lang}/industries/${topic.industryId}/${topic.id}/`;
    const response=await page.goto(`http://127.0.0.1:4325${path}`,{waitUntil:'load'});
    await page.evaluate(()=>document.fonts.ready);
    const result=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth-innerWidth,h1:document.querySelector('h1')?.textContent,dir:document.documentElement.dir,image:document.querySelector('.spec-hero__media img')?.naturalWidth,process:document.querySelector('.detailed-process')?.tagName,cta:document.querySelector('[data-trade-intent="buyer_request"]')?.getAttribute('href')}));
    if(response.status()!==200 || result.overflow>1 || result.h1!==topic.content[lang].h1 || !result.image || result.process!=='OL' || !result.cta?.includes('intent=buyer_request') || (['ar','fa','he'].includes(lang) && result.dir!=='rtl')) failures.push({lang,width,path,...result});
    if(['vi','ar','fa','he'].includes(lang) && width===320) await page.screenshot({path:`.artifacts/specializations/${lang}-${width}.png`,fullPage:true});
    count++;
  }
  // A long translation must wrap even when fallback fonts have wider glyphs.
  await page.setViewportSize({width:320,height:900});
  await page.goto('http://127.0.0.1:4325/de/industries/beauty/korean-cosmetics/',{waitUntil:'load'});
  await page.locator('.spec-hero__actions .button, .spec-cta-card .button').evaluateAll(elements=>elements.forEach(el=>{el.textContent='Beschaffungsanfrage '.repeat(5).trim();}));
  const longCtaOverflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
  if(longCtaOverflow>1)failures.push({case:'long-translated-CTA',width:320,overflow:longCtaOverflow});
  count++;
  await page.locator('.spec-col-box .section-head h2').first().evaluate(el=>{el.textContent='Lieferantenqualifikationsanforderungen'.repeat(3);});
  const heading=await page.locator('.spec-col-box .section-head h2').first().evaluate(el=>({overflow:document.documentElement.scrollWidth-innerWidth,wrap:getComputedStyle(el).overflowWrap}));
  if(heading.overflow>1)failures.push({case:'long-translated-heading',width:320,...heading});
  count++;
  await page.locator('.spec-title').evaluate(el=>{el.textContent='Approvvigionamento'.repeat(5);});
  const heroHeading=await page.locator('.spec-title').evaluate(el=>({overflow:document.documentElement.scrollWidth-innerWidth,wrap:getComputedStyle(el).overflowWrap}));
  if(heroHeading.overflow>1)failures.push({case:'long-translated-hero-heading',width:320,...heroHeading});
  count++;
  assert.equal(failures.length,0,JSON.stringify(failures,null,2));
  console.log(`Specialization responsive passed: ${count} cases; all 24 topics, all 13 locales, 320/390/1440px, RTL, loaded images, semantic process, buyer paths and long translated CTAs. No external requests allowed.`);
} finally {
  await browser?.close();
  await new Promise(resolve=>server.close(resolve));
}
