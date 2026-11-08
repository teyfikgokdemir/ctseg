import {existsSync,mkdirSync} from 'node:fs';
import {readFile,writeFile} from 'node:fs/promises';
import {createServer} from 'node:http';
import {join,resolve,extname} from 'node:path';
import assert from 'node:assert/strict';
import {chromium} from 'playwright-core';
// Protect the current global commercial identity across every active language.
const locales=['tr','en','de','it','fa','ru','zh','vi','uk','ro','bg','he','ar'];
const executablePath=['C:/Program Files/Google/Chrome/Application/chrome.exe','C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe','/usr/bin/chromium'].find(existsSync);
assert(executablePath,'Browser missing');
const output=resolve('.artifacts/visual');mkdirSync(output,{recursive:true});
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2'};
const server=createServer(async(req,res)=>{let file=join(resolve('dist'),decodeURI(new URL(req.url,'http://localhost').pathname).replace(/^\/+/,''));if(!extname(file))file=join(file,'index.html');try{const body=await readFile(file);res.writeHead(200,{'content-type':types[extname(file)]||'application/octet-stream'});res.end(body);}catch{res.writeHead(404);res.end('Not found');}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));const base='http://127.0.0.1:'+server.address().port;
const failures=[],results=[],contacts={};let browser;
try{
 browser=await chromium.launch({executablePath,headless:true});const context=await browser.newContext();
 // No production or third-party delivery during browser verification.
 await context.route('**/*',r=>new URL(r.request().url()).origin===base?r.continue():r.abort());
 await context.addInitScript(()=>{if(window.name!=='consent-test'&&!localStorage.getItem('ctseg-consent-v2'))localStorage.setItem('ctseg-consent-v2','rejected');});
 const page=await context.newPage();
 async function check(name,path,lang,width,global=true,screenshot=false){try{
 await page.setViewportSize({width,height:width<900?900:1050});const response=await page.goto(base+path,{waitUntil:'load'});assert.equal(response.status(),200,'route HTTP status');
 await page.evaluate(async()=>{await document.fonts.ready;document.querySelectorAll('img').forEach(i=>i.loading='eager');await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));});
 const s=await page.evaluate(()=>({lang:document.documentElement.lang,dir:document.documentElement.dir,h1:document.querySelectorAll('h1').length,overflow:Math.max(document.documentElement.scrollWidth,document.body.scrollWidth)-innerWidth,broken:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),dimensions:[...document.querySelectorAll('.gs img')].every(i=>Number(i.getAttribute('width'))>0&&Number(i.getAttribute('height'))>0),global:!!document.querySelector('[data-global-sourcing]'),contact:document.querySelector('.gs-desktop-nav a:last-child')?.getAttribute('href')}));
 assert(s.lang===lang||s.lang.startsWith(lang+'-'),'HTML language '+s.lang);assert.equal(s.dir,['fa','he','ar'].includes(lang)?'rtl':'ltr','direction');assert.equal(s.h1,1,'single H1');assert(s.overflow<=1,'overflow '+s.overflow+'px');assert.deepEqual(s.broken,[],'broken image');assert(s.dimensions,'image dimensions');if(global)assert(s.global,'global component');if(s.contact)contacts[lang]=s.contact;
 const toggle=page.locator('[data-language-toggle]');await toggle.focus();await page.keyboard.press('Enter');assert(await page.locator('.gs-languages').isVisible(),'keyboard locale opening');assert.deepEqual((await page.locator('.gs-languages [data-locale-option]').evaluateAll(ns=>ns.map(n=>n.dataset.locale))).sort(),[...locales].sort(),'13 locale choices');await page.keyboard.press('Escape');assert.equal(await page.locator('#language-panel').getAttribute('open'),null,'locale Escape');
 if(width<=900){const menu=page.locator('[data-menu-toggle]');await menu.focus();await page.keyboard.press('Enter');assert.equal(await menu.getAttribute('aria-expanded'),'true');assert(await page.locator('#global-mobile-nav').isVisible());assert.equal(await page.locator('#global-mobile-nav [data-locale-option]').count(),13);await page.keyboard.press('Escape');assert.equal(await menu.getAttribute('aria-expanded'),'false');assert(await menu.evaluate(n=>document.activeElement===n),'focus restoration');}
 if(screenshot)await page.screenshot({path:join(output,name+'.png'),fullPage:true});results.push({name,path,width});console.log('PASS '+name);
 }catch(e){failures.push({name,path,width,error:e.message});console.error(name+': '+e.message);}}
 for(const lang of locales)for(const width of [390,768,1440])await check('home-'+lang+'-'+width,lang==='tr'?'/':'/'+lang+'/',lang,width,true,['tr','en','fa','he','ar'].includes(lang)&&width!==768);
 for(const lang of locales)for(const id of ['textiles','beauty'])await check(id+'-'+lang,'/'+lang+'/industries/'+id+'/',lang,390,true,lang==='en');
 for(const id of ['textiles','beauty'])for(const width of [768,1440])await check(id+'-en-'+width,'/en/industries/'+id+'/','en',width,true,true);
 for(const lang of locales)await check('contact-'+lang,contacts[lang],lang,390,false,['en','he'].includes(lang));
 for(const lang of ['tr','en','fa','he','ar']){await check('markets-'+lang,'/'+lang+'/global-markets/',lang,1440);await check('oem-'+lang,'/'+lang+'/solutions/oem-odm/',lang,390);}
 for(const [path,lang] of [['/en/natural-oils/','en'],['/tr/nasil-calisiyoruz/','tr'],['/en/representative-work-scenarios/','en']])await check('retained-'+path.split('/').filter(Boolean).at(-1),path,lang,390,false);
 // Consent is tested in existing browsing context with explicitly cleared storage.
 await page.goto(base+'/en/');await page.evaluate(()=>{window.name='consent-test';localStorage.clear();});await page.reload({waitUntil:'load'});assert(await page.locator('[data-cookie-consent]').isVisible());await page.locator('[data-cookie-reject]').click();assert.equal(await page.evaluate(()=>localStorage.getItem('ctseg-consent-v2')),'rejected');await page.reload();assert.equal(await page.locator('[data-cookie-consent]').isVisible(),false);
 await page.evaluate(()=>localStorage.clear());await page.reload();await page.locator('[data-cookie-accept]').click();assert.equal(await page.evaluate(()=>localStorage.getItem('ctseg-consent-v2')),'accepted');
 for(const intent of ['buyer_request','supplier_market_entry']){let payload;await page.route('**/api/contact',async r=>{payload=r.request().postDataJSON();await r.fulfill({status:200,contentType:'application/json',body:'{"success":true}'});});await page.goto(base+contacts.en+'?intent='+intent,{waitUntil:'load'});const form=page.locator('[data-commercial-form]');assert.equal(await form.locator('[name=intent]').inputValue(),intent);
 for(const name of ['supportNeed','tradeDirection','productFamily']){const s=form.locator('[name='+name+']');await s.selectOption(await s.locator('option').evaluateAll(ns=>ns.find(n=>n.value)?.value));}await form.locator('[data-reveal-contact-step]').click();assert(await form.locator('[name=name]').isVisible());await form.locator('details').evaluateAll(ns=>ns.forEach(n=>n.open=true));await form.locator('input[required]:not([type=hidden]):not([type=checkbox]),textarea[required]').evaluateAll(ns=>ns.forEach(n=>{if(!n.disabled){n.value=n.name==='emailOrPhone'?'test@example.invalid':n.name==='message'?'Browser verification only':'Test '+n.name;n.dispatchEvent(new Event('input',{bubbles:true}));}}));await form.locator('[name=privacy]').check();await form.locator('[type=submit]').click();await page.waitForFunction(()=>document.querySelector('[data-form-status]')?.textContent.trim());assert(payload,'mock request submitted');assert.equal(payload.intent,intent);assert.equal(payload.locale,'en');assert(payload.message.includes(intent==='buyer_request'?'Budget / target price:':'Manufacturing country:'),'qualifiers delivered inside message');assert(!Object.hasOwn(payload,'budget'));await page.unroute('**/api/contact');}
 await context.close();
}catch(e){failures.push({name:'interaction-contract',error:e.stack});console.error(e);}finally{await browser?.close();await new Promise(r=>server.close(r));}
await writeFile(join(output,'responsive-results.json'),JSON.stringify({passed:results.length,failures,results},null,2));console.log('Responsive: '+results.length+' page cases passed, '+failures.length+' failures. '+output);if(failures.length)process.exitCode=1;
