import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, resolve } from 'node:path';
import { chromium } from 'playwright-core';

const executables = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
];
const executablePath = executables.find(existsSync);
if (!executablePath) throw new Error('Chrome or Edge executable was not found.');

const dist = resolve('dist');
if (!existsSync(dist)) throw new Error('dist/ not found. Run npm run build first.');
const redirects = new Map([['/tr','/'],['/tr/','/']]);
const server = createServer((request,response) => {
  const pathname = decodeURI(new URL(request.url ?? '/','http://127.0.0.1').pathname);
  if (redirects.has(pathname)) {
    response.writeHead(301,{location:redirects.get(pathname)}); response.end(); return;
  }
  let file = join(dist,pathname.replace(/^\/+/,''));
  if (!extname(file)) file = join(file,'index.html');
  if (!existsSync(file)) { response.writeHead(404); response.end('Not found'); return; }
  const type = extname(file)==='.html' ? 'text/html; charset=utf-8' :
    extname(file)==='.css' ? 'text/css' : extname(file)==='.webp' ? 'image/webp' :
    extname(file)==='.png' ? 'image/png' : 'application/octet-stream';
  response.writeHead(200,{'content-type':type,'content-length':statSync(file).size});
  response.end(readFileSync(file));
});
await new Promise((resolvePromise)=>server.listen(4322,'127.0.0.1',resolvePromise));

const cases = [
  {name:'tr-home',path:'/tr/'},
  {name:'tr-catalogue',path:'/tr/ticari-urunler/'},
  {name:'tr-mazafati',path:'/tr/ticari-urunler/mazafati-hurmasi/'},
  {name:'en-home',path:'/en/'},
  {name:'de-home',path:'/de/'},
  {name:'it-home',path:'/it/'},
  {name:'ru-home',path:'/ru/'}
];
const viewports = [
  {name:'mobile-390',width:390,height:844,deviceScaleFactor:2},
  {name:'mobile-430',width:430,height:932,deviceScaleFactor:2},
  {name:'tablet',width:820,height:1180,deviceScaleFactor:1},
  {name:'desktop',width:1440,height:1000,deviceScaleFactor:1}
];
const failures = [];
const reports = [];
let browser;
try {
  browser = await chromium.launch({executablePath,headless:true});
  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport:{width:viewport.width,height:viewport.height},
      deviceScaleFactor:viewport.deviceScaleFactor
    });
    await context.addInitScript(() => {
      window.__ctsegLayoutShift=0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) if (!entry.hadRecentInput) window.__ctsegLayoutShift += entry.value;
      }).observe({type:'layout-shift',buffered:true});
    });
    for (const testCase of cases) {
      const page = await context.newPage();
      const imageResponses = [];
      page.on('response',(response)=>{
        if (response.request().resourceType()==='image') {
          imageResponses.push(response.body().then((body)=>({
            url:new URL(response.url()).pathname,
            bytes:body.byteLength
          })).catch(()=>({url:new URL(response.url()).pathname,bytes:0})));
        }
      });
      await page.goto(`http://127.0.0.1:4322${testCase.path}`,{waitUntil:'networkidle'});
      await page.waitForTimeout(350);
      const images = await Promise.all(imageResponses);
      const result = await page.evaluate(() => {
        const hero=document.querySelector('.hero-visual img');
        const productImages=[...document.querySelectorAll('[data-product-card] img')];
        const secondary=[...document.querySelectorAll('[data-product-media="secondary"] img')];
        return {
          url:location.pathname,
          hero:hero ? {
            srcset:hero.getAttribute('srcset'),
            sizes:hero.getAttribute('sizes'),
            loading:hero.getAttribute('loading'),
            priority:hero.getAttribute('fetchpriority'),
            currentSrc:new URL(hero.currentSrc).pathname
          } : null,
          imagePreloads:document.querySelectorAll('link[rel="preload"][as="image"]').length,
          productResponsive:productImages.every((image)=>image.hasAttribute('srcset')&&image.hasAttribute('sizes')),
          productLazy:productImages.every((image)=>image.getAttribute('loading')==='lazy'),
          secondaryLazy:secondary.every((image)=>image.getAttribute('loading')==='lazy'),
          intrinsic:[...document.images].every((image)=>Number(image.getAttribute('width'))>0&&Number(image.getAttribute('height'))>0),
          highPriority:[...document.images].filter((image)=>image.getAttribute('fetchpriority')==='high').length,
          cls:Number(window.__ctsegLayoutShift ?? 0),
          selected:[...document.images].filter((image)=>image.currentSrc).map((image)=>new URL(image.currentSrc).pathname)
        };
      });
      const isHome = testCase.name.endsWith('home');
      const mobileProduct1536 = viewport.width <= 430 && result.selected.some((src)=>src.includes('/generated/')&&src.includes('-1536.webp')&&!src.includes('global-trade'));
      if (isHome && (!result.hero?.srcset || !result.hero.sizes || result.hero.loading!=='eager' || result.hero.priority!=='high' || result.imagePreloads!==1)) {
        failures.push(`${viewport.name}/${testCase.name}: invalid responsive LCP hero ${JSON.stringify(result.hero)}, preloads=${result.imagePreloads}`);
      }
      if (!isHome && result.imagePreloads!==0) failures.push(`${viewport.name}/${testCase.name}: unexpected image preload`);
      if (!result.productResponsive || !result.productLazy || !result.secondaryLazy || !result.intrinsic || result.highPriority>1 || result.cls>.001 || mobileProduct1536) {
        failures.push(`${viewport.name}/${testCase.name}: ${JSON.stringify(result)}`);
      }
      reports.push({
        viewport:viewport.name,page:testCase.name,path:result.url,
        imageBytes:images.reduce((sum,image)=>sum+image.bytes,0),
        requestedImages:images,selectedSources:result.selected,heroSource:result.hero?.currentSrc ?? null,cls:result.cls
      });
      console.log(`${viewport.name}/${testCase.name}: imageBytes=${reports.at(-1).imageBytes}, hero=${result.hero?.currentSrc ?? 'none'}, cls=${result.cls}`);
      await page.close();
    }
    await context.close();
  }
} finally {
  await browser?.close();
  server.close();
}

const generated = resolve('public/images/generated');
const manifestPath = join(generated, 'manifest.json');
if (!existsSync(manifestPath)) {
  failures.push('missing manifest.json in public/images/generated');
} else {
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  const manifestKeys = Object.keys(manifest);
  const expectedFiles = new Set(['manifest.json']);

  for (const key of manifestKeys) {
    const [source, width] = key.split(':');
    const stem = source.replace(/\.(webp|png)$/, '');
    const filename = source.endsWith('.png') ? 'ctseg-logo-transparent-320.webp' : `${stem}-${width}.webp`;
    expectedFiles.add(filename);
    if (!existsSync(join(generated, filename))) {
      failures.push(`missing generated image referenced in manifest: ${filename}`);
    }
  }

  const diskFiles = readdirSync(generated);
  for (const file of diskFiles) {
    if (!expectedFiles.has(file)) {
      failures.push(`orphaned generated image file on disk: ${file}`);
    }
  }
}

const siteReferencedGeneratedImages = new Set(
  reports.flatMap((r) => [...r.requestedImages.map((i) => i.url), ...r.selectedSources])
    .filter((url) => url.startsWith('/images/generated/'))
    .map((url) => url.replace('/images/generated/', '').split('?')[0])
);
for (const filename of siteReferencedGeneratedImages) {
  if (!existsSync(join(generated, filename))) {
    failures.push(`site referenced generated image missing on disk: ${filename}`);
  }
}
const headers = readFileSync('public/_headers','utf8');
if (!/\/images\/generated\/\*[\s\S]*max-age=31536000,\s*immutable/.test(headers)) failures.push('generated image immutable cache header missing');

const outputDir = resolve('.artifacts');
mkdirSync(outputDir,{recursive:true});
writeFileSync(join(outputDir,'performance-report.json'),`${JSON.stringify(reports,null,2)}\n`);
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
const mobileHome = reports.find((report)=>report.viewport==='mobile-390'&&report.page==='tr-home');
console.log(`Performance check passed: 28 viewport/page combinations; TR mobile home image payload ${mobileHome.imageBytes} bytes; hero ${mobileHome.heroSource}.`);
