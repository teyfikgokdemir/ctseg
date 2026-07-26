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
    { name:'desktop-tr-home', path:'/', width:1440, height:1000 },
    { name:'desktop-en-home', path:'/en/', width:1440, height:1000 },
    { name:'tablet-de-products', path:'/de/handelsprodukte/', width:820, height:1180 },
    { name:'mobile-fr-products', path:'/fr/produits-commerciaux/', width:390, height:844 },
    { name:'mobile-it-product', path:'/it/prodotti-commerciali/pistacchio-verde-sgusciato/', width:390, height:844 },
    { name:'desktop-tr-mazafati', path:'/tr/ticari-urunler/mazafati-hurmasi/', width:1440, height:1000 },
    { name:'mobile-en-insight', path:'/en/insights/strategic-sourcing-vs-procurement/', width:390, height:844 }
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
    }));
    await page.screenshot({ path:resolve(output, `${testCase.name}.png`), fullPage:true });
    if (result.overflow > 1 || result.headers !== 1 || result.footers !== 1 || !result.logo || !result.images || !mobileMenu) {
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
