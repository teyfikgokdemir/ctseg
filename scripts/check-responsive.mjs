import { existsSync, mkdirSync } from 'node:fs';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';
import { chromium } from 'playwright-core';

const executables = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
];
const executablePath = executables.find(existsSync);
if (!executablePath) {
  console.error('Chrome or Edge executable was not found.');
  process.exit(1);
}

const dist = resolve('dist');
const server = createServer(async (request, response) => {
  const pathname = decodeURI(new URL(request.url ?? '/', 'http://127.0.0.1').pathname);
  let file = join(dist, pathname.replace(/^\/+/, ''));
  if (!extname(file)) file = join(file, 'index.html');
  try {
    const body = await readFile(file);
    const type = extname(file) === '.html' ? 'text/html; charset=utf-8' : extname(file) === '.css' ? 'text/css' : extname(file) === '.png' ? 'image/png' : extname(file) === '.webp' ? 'image/webp' : 'application/octet-stream';
    response.writeHead(200, { 'content-type':type }); response.end(body);
  } catch {
    response.writeHead(404); response.end('Not found');
  }
});
await new Promise((resolvePromise) => server.listen(4321, '127.0.0.1', resolvePromise));
let browser;
try {
  const output = resolve('.artifacts/visual');
  mkdirSync(output, { recursive:true });
  browser = await chromium.launch({ executablePath, headless:true });
  const cases = [
    { name:'wide-tr-home', path:'/', width:1600, height:1000 },
    { name:'desktop-en-home', path:'/en/', width:1440, height:1000 },
    { name:'desktop-de-home', path:'/de/', width:1280, height:800 },
    { name:'compact-it-home', path:'/it/', width:1024, height:768 },
    { name:'tablet-fr-home', path:'/fr/', width:820, height:1180 },
    { name:'desktop-en-products', path:'/en/trade-products/', width:1440, height:1000 },
    { name:'tablet-de-products', path:'/de/handelsprodukte/', width:820, height:1180 },
    { name:'mobile-fr-products', path:'/fr/produits-commerciaux/', width:430, height:932 },
    { name:'mobile-de-long-product', path:'/de/handelsprodukte/getrocknete-aprikosen-aprikosenkerne/', width:390, height:844 },
    { name:'small-it-product', path:'/it/prodotti-commerciali/pistacchio-verde-sgusciato/', width:360, height:800 },
    { name:'desktop-tr-service', path:'/tr/hizmetler/tedarikci-bulma-ve-dogrulama/', width:1280, height:800 },
    { name:'mobile-en-insight', path:'/en/insights/strategic-sourcing-vs-procurement/', width:390, height:844 },
    { name:'mobile-fr-contact', path:'/fr/contact/', width:430, height:932 }
  ];
  const failures = [];
  for (const testCase of cases) {
    const page = await browser.newPage({ viewport:{ width:testCase.width, height:testCase.height } });
    await page.goto(`http://127.0.0.1:4321${testCase.path}`, { waitUntil:'networkidle' });
    await page.addStyleTag({ content:'*,*:before,*:after{animation:none!important;transition:none!important}.product-media img{transform:none!important}' });
    await page.locator('[data-cookie-reject]').click();
    await page.evaluate(() => {
      document.documentElement.style.scrollBehavior='auto';
      document.querySelectorAll('img[loading="lazy"]').forEach((image) => image.setAttribute('loading','eager'));
    });
    await page.evaluate(async () => {
      for (let y=0; y<document.documentElement.scrollHeight; y+=window.innerHeight) {
        window.scrollTo(0,y);
        await new Promise((resolve) => setTimeout(resolve,120));
      }
      window.scrollTo(0,0);
    });
    await page.waitForFunction(() => [...document.images].every((image) => image.complete && image.naturalWidth > 0), undefined, { timeout:10000 });
    await page.waitForTimeout(250);
    let mobileMenu = true;
    if (testCase.width <= 860) {
      await page.locator('[data-menu-toggle]').click();
      mobileMenu = await page.locator('[data-primary-nav]').isVisible();
      await page.locator('[data-menu-toggle]').click();
    }
    const result = await page.evaluate(() => ({
      overflow:document.documentElement.scrollWidth - window.innerWidth,
      headers:document.querySelectorAll('header.site-header').length,
      footers:document.querySelectorAll('footer.site-footer').length,
      logo:[...document.querySelectorAll('.brand img')].every((image) => {
        const naturalRatio = image.naturalWidth / image.naturalHeight;
        const box = image.getBoundingClientRect();
        const renderedRatio = box.width / box.height;
        return image.naturalWidth > 0 && box.height > 0 && Math.abs(naturalRatio - renderedRatio) < .06;
      }),
      lang:document.documentElement.lang
      ,images:[...document.images].every((image) => image.complete && image.naturalWidth > 0 && image.hasAttribute('width') && image.hasAttribute('height'))
      ,brokenImages:[...document.images].filter((image) => !image.complete || image.naturalWidth === 0 || !image.hasAttribute('width') || !image.hasAttribute('height')).map((image) => image.getAttribute('src'))
      ,overflowNodes:[...document.querySelectorAll('body *')]
        .filter((element) => {
          const box=element.getBoundingClientRect();
          return box.right>window.innerWidth+1||box.left<-1;
        })
        .slice(0,8)
        .map((element) => {
          const box=element.getBoundingClientRect();
          return `${element.tagName.toLowerCase()}.${[...element.classList].join('.')}:${Math.round(box.left)}..${Math.round(box.right)}`;
        })
      ,overflowText:(() => {
        const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
        const offenders=[];
        while(walker.nextNode()){
          const value=walker.currentNode.nodeValue?.trim();
          if(!value) continue;
          const range=document.createRange();
          range.selectNodeContents(walker.currentNode);
          const boxes=[...range.getClientRects()];
          if(boxes.some((box)=>box.right>window.innerWidth+1||box.left<-1)){
            offenders.push(`${walker.currentNode.parentElement?.tagName.toLowerCase()}:${value.slice(0,60)}`);
          }
          if(offenders.length===8) break;
        }
        return offenders;
      })()
      ,layout:(() => {
        const intersects=(a,b)=>Boolean(a&&b&&a.left<b.right&&a.right>b.left&&a.top<b.bottom&&a.bottom>b.top);
        const heading=document.querySelector('.hero h1,.page-hero h1');
        const visual=document.querySelector('.hero-visual,.product-hero-media');
        const header=document.querySelector('.site-header');
        const first=document.querySelector('main>section');
        const headingBox=heading?.getBoundingClientRect();
        const visualBox=visual?.getBoundingClientRect();
        const headerBox=header?.getBoundingClientRect();
        const firstBox=first?.getBoundingClientRect();
        const lineHeight=heading ? Number.parseFloat(getComputedStyle(heading).lineHeight) : 0;
        const catalogueCards=[...document.querySelectorAll('.catalogue-grid [data-product-card]')];
        const cardImages=catalogueCards.map((card)=>card.querySelector('img')?.getAttribute('src')).filter(Boolean);
        const detailMedia=[...document.querySelectorAll('[data-product-media] img')].map((image)=>image.getAttribute('src'));
        return {
          headingVisualOverlap:intersects(headingBox,visualBox),
          headerOverlap:Boolean(headerBox&&firstBox&&firstBox.top<headerBox.bottom-1),
          headingLines:headingBox&&lineHeight ? Math.round(headingBox.height/lineHeight) : 0,
          cardOverflow:catalogueCards.some((card)=>card.getBoundingClientRect().right>window.innerWidth+1||card.getBoundingClientRect().left<-1),
          maxCardHeight:catalogueCards.reduce((max,card)=>Math.max(max,card.getBoundingClientRect().height),0),
          repeatedAdjacentImage:cardImages.some((src,index)=>index>0&&src===cardImages[index-1]),
          duplicateDetailMedia:new Set(detailMedia).size!==detailMedia.length,
          productCount:catalogueCards.length
        };
      })()
    }));
    await page.screenshot({ path:resolve(output, `${testCase.name}.png`), fullPage:true });
    const badLayout = result.layout.headingVisualOverlap || result.layout.headerOverlap || result.layout.cardOverflow ||
      result.layout.repeatedAdjacentImage || result.layout.duplicateDetailMedia ||
      (testCase.width <= 620 && result.layout.headingLines > 6) ||
      (testCase.width >= 1100 && result.layout.maxCardHeight > 700) ||
      (result.layout.productCount > 0 && result.layout.productCount !== 18);
    if (result.overflow > 1 || result.headers !== 1 || result.footers !== 1 || !result.logo || !result.images || !mobileMenu || badLayout) {
      failures.push(`${testCase.name}: ${JSON.stringify({...result,mobileMenu})}`);
    }
    console.log(`${testCase.name}: ${testCase.width}x${testCase.height}, lang=${result.lang}, overflow=${result.overflow}px`);
    await page.close();
  }
  if (failures.length) {
    console.error(failures.join('\n'));
    process.exitCode = 1;
  } else {
    console.log(`Responsive check passed. Screenshots: ${output}`);
  }
} finally {
  await browser?.close();
  server.close();
}
