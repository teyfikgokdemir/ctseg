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
    { name:'desktop-tr-services', path:'/tr/hizmetler/', width:1440, height:1000 },
    { name:'desktop-tr-catalogue', path:'/tr/ticari-urunler/', width:1440, height:1000 },
    { name:'desktop-tr-markets', path:'/tr/pazarlar/', width:1440, height:1000 },
    { name:'desktop-tr-insights', path:'/tr/icgoruler/', width:1440, height:1000 },
    { name:'desktop-tr-about', path:'/tr/hakkimizda/', width:1440, height:1000 },
    { name:'desktop-tr-contact', path:'/tr/iletisim/', width:1440, height:1000 },
    { name:'desktop-en-contact', path:'/en/contact/', width:1440, height:1000 },
    { name:'desktop-de-contact', path:'/de/kontakt/', width:1440, height:1000 },
    { name:'desktop-it-contact', path:'/it/contatti/', width:1440, height:1000 },
    { name:'desktop-fr-contact', path:'/fr/contact/', width:1440, height:1000 },
    { name:'desktop-de-home', path:'/de/', width:1440, height:1000 },
    { name:'desktop-de-catalogue', path:'/de/handelsprodukte/', width:1440, height:1000 },
    { name:'desktop-de-locale-panel', path:'/de/', width:1440, height:1000, openLanguage:true },
    { name:'desktop-en-home', path:'/en/', width:1440, height:1000 },
    { name:'desktop-en-persian-nav', path:'/en/', width:1440, height:1000, openPersianNav:true, verifyPersianNav:true },
    { name:'desktop-it-home', path:'/it/', width:1440, height:1000 },
    { name:'desktop-it-catalogue', path:'/it/prodotti-commerciali/', width:1440, height:1000 },
    { name:'desktop-fr-home', path:'/fr/', width:1440, height:1000 },
    { name:'desktop-fr-catalogue', path:'/fr/produits-commerciaux/', width:1440, height:1000 },
    { name:'tablet-tr-about', path:'/tr/hakkimizda/', width:820, height:1180 },
    { name:'tablet-tr-contact', path:'/tr/iletisim/', width:820, height:1180 },
    { name:'tablet-en-contact', path:'/en/contact/', width:820, height:1180 },
    { name:'tablet-de-contact', path:'/de/kontakt/', width:820, height:1180 },
    { name:'tablet-it-contact', path:'/it/contatti/', width:820, height:1180 },
    { name:'tablet-fr-contact', path:'/fr/contact/', width:820, height:1180 },
    { name:'tablet-tr-process-1024', path:'/tr/nasil-calisiyoruz/', width:1024, height:900, allowLocaleFallback:true },
    { name:'tablet-en-scenarios-1024', path:'/en/representative-work-scenarios/', width:1024, height:900, allowLocaleFallback:true, gapLimit:100 },
    { name:'tablet-tr-guide-1024', path:'/tr/icgoruler/bitkisel-yag-tedarikinde-rfq-kontrol-listesi/', width:1024, height:900, allowLocaleFallback:true },
    { name:'wide-tr-home', path:'/', width:1600, height:1000 },
    { name:'wide-tr-services', path:'/tr/hizmetler/', width:1600, height:1000 },
    { name:'wide-tr-markets', path:'/tr/pazarlar/', width:1600, height:1000 },
    { name:'wide-tr-insights', path:'/tr/icgoruler/', width:1600, height:1000 },
    { name:'wide-tr-about', path:'/tr/hakkimizda/', width:1600, height:1000 },
    { name:'wide-tr-contact', path:'/tr/iletisim/', width:1600, height:1000 },
    { name:'wide-tr-catalogue', path:'/tr/ticari-urunler/', width:1600, height:1000 },
    { name:'wide-de-home', path:'/de/', width:1600, height:1000 },
    { name:'wide-de-locale-panel', path:'/de/', width:1600, height:1000, openLanguage:true },
    { name:'wide-it-home', path:'/it/', width:1600, height:1000 },
    { name:'wide-fr-home', path:'/fr/', width:1600, height:1000 },
    { name:'mobile-tr-home', path:'/', width:390, height:844 },
    { name:'mobile-en-home', path:'/en/', width:390, height:844 },
    { name:'mobile-it-home', path:'/it/', width:390, height:844 },
    { name:'mobile-fr-home', path:'/fr/', width:390, height:844 },
    { name:'mobile-tr-services', path:'/tr/hizmetler/', width:390, height:844 },
    { name:'mobile-tr-process', path:'/tr/nasil-calisiyoruz/', width:390, height:844, allowLocaleFallback:true },
    { name:'mobile-en-scenarios', path:'/en/representative-work-scenarios/', width:390, height:844, allowLocaleFallback:true, gapLimit:90 },
    { name:'mobile-tr-form', path:'/tr/iletisim/', width:390, height:844 },
    { name:'mobile-tr-markets', path:'/tr/pazarlar/', width:390, height:844 },
    { name:'mobile-tr-insights', path:'/tr/icgoruler/', width:390, height:844 },
    { name:'mobile-tr-contact', path:'/tr/iletisim/', width:390, height:844 },
    { name:'mobile-en-contact', path:'/en/contact/', width:390, height:844 },
    { name:'mobile-de-contact', path:'/de/kontakt/', width:390, height:844 },
    { name:'mobile-it-contact', path:'/it/contatti/', width:390, height:844 },
    { name:'mobile-fr-contact', path:'/fr/contact/', width:390, height:844 },
    { name:'mobile-tr-menu', path:'/', width:390, height:844, openMenu:true },
    { name:'mobile-en-persian-nav', path:'/en/', width:390, height:844, openMenu:true, verifyPersianNav:true },
    { name:'mobile-fr-catalogue', path:'/fr/produits-commerciaux/', width:390, height:844 },
    { name:'mobile-de-home', path:'/de/', width:390, height:844 },
    { name:'mobile430-tr-home', path:'/', width:430, height:932 },
    { name:'mobile430-tr-services', path:'/tr/hizmetler/', width:430, height:932 },
    { name:'mobile430-tr-markets', path:'/tr/pazarlar/', width:430, height:932 },
    { name:'mobile430-tr-insights', path:'/tr/icgoruler/', width:430, height:932 },
    { name:'mobile430-tr-contact', path:'/tr/iletisim/', width:430, height:932 },
    { name:'mobile430-tr-menu', path:'/', width:430, height:932, openMenu:true },
    { name:'mobile430-de-home', path:'/de/', width:430, height:932 },
    { name:'mobile430-fr-home', path:'/fr/', width:430, height:932 },
    { name:'desktop-fa-landing', path:'/fa/tamin-beynolmelali-iran/', width:1440, height:1000, persian:true },
    { name:'tablet-fa-landing', path:'/fa/tamin-beynolmelali-iran/', width:820, height:1180, persian:true },
    { name:'mobile320-fa-landing', path:'/fa/tamin-beynolmelali-iran/', width:320, height:800, persian:true },
    { name:'mobile360-fa-landing', path:'/fa/tamin-beynolmelali-iran/', width:360, height:800, persian:true },
    { name:'mobile-fa-landing', path:'/fa/tamin-beynolmelali-iran/', width:390, height:844, persian:true },
    { name:'mobile430-fa-landing', path:'/fa/tamin-beynolmelali-iran/', width:430, height:932, persian:true }
  ];
  const sourcingLocales = ['tr','en','de','it','fr','fa'];
  const sourcingFamilies = {
    carpets:{tr:'/tr/sourcing/iran-halisi/',en:'/en/sourcing/iranian-carpets/',de:'/de/sourcing/persische-teppiche/',it:'/it/sourcing/tappeti-persiani/',fr:'/fr/sourcing/tapis-persans/',fa:'/fa/sourcing/فرش-ایرانی/'},
    silk:{tr:'/tr/sourcing/el-dokumasi-ipek-hali/',en:'/en/sourcing/hand-knotted-silk-carpets/',de:'/de/sourcing/handgeknuepfte-seidenteppiche/',it:'/it/sourcing/tappeti-in-seta-annodati-a-mano/',fr:'/fr/sourcing/tapis-en-soie-noues-main/',fa:'/fa/sourcing/فرش-ابریشم-دستباف/'},
    textiles:{tr:'/tr/sourcing/toptan-tekstil-tedariki/',en:'/en/sourcing/wholesale-textile-sourcing/',de:'/de/sourcing/textil-grosshandel-beschaffung/',it:'/it/sourcing/approvvigionamento-tessile-ingrosso/',fr:'/fr/sourcing/sourcing-textile-en-gros/',fa:'/fa/sourcing/تامین-عمده-منسوجات/'}
  };
  const sourcingAudiences = {
    carpets:['کارگاه‌های فرش دستباف','تولیدکنندگان فرش ابریشم','تولیدکنندگان فرش ماشینی','صادرکنندگان فرش'],
    silk:['کارگاه‌های فرش دستباف','تولیدکنندگان فرش ابریشم','تولیدکنندگان فرش ماشینی','صادرکنندگان فرش'],
    textiles:['تولیدکنندگان پارچه','تولیدکنندگان حوله و حوله تن‌پوش','تولیدکنندگان منسوجات خانگی','تولیدکنندگان پوشاک','برندهای private label']
  };
  const failures = [];
  const localeAtmospheres = new Map();
  for (const testCase of cases) {
    const page = await browser.newPage({ viewport:{ width:testCase.width, height:testCase.height } });
    const navigationResponse = await page.goto(`http://127.0.0.1:4321${testCase.path}`, { waitUntil:'networkidle' });
    if (!navigationResponse || navigationResponse.status() !== 200) {
      failures.push(`${testCase.name}: expected HTTP 200, received ${navigationResponse?.status() ?? 'no response'}`);
    }
    await page.addStyleTag({ content:'*,*:before,*:after{animation:none!important;transition:none!important}.product-media img{transform:none!important}' });
    const cookieReject = page.locator('[data-cookie-reject]');
    if (await cookieReject.count()) await cookieReject.click();
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
    let bodyScrollLocked = true;
    let persianMobileMenu = null;
    if (testCase.width <= 860 && !testCase.persian) {
      await page.locator('[data-menu-toggle]').click();
      mobileMenu = await page.locator('[data-primary-nav]').isVisible();
      bodyScrollLocked = await page.evaluate(() => document.body.classList.contains('menu-open') && getComputedStyle(document.body).overflow === 'hidden');
      if (!testCase.openMenu) await page.locator('[data-menu-toggle]').click();
    }
    if (testCase.persian && testCase.width <= 820) {
      const toggle = page.locator('[data-fa-menu-toggle]');
      const panel = page.locator('[data-fa-primary-nav]');
      const initial = await page.evaluate(() => {
        const toggle=document.querySelector('[data-fa-menu-toggle]');
        const panel=document.querySelector('[data-fa-primary-nav]');
        return {
          toggleVisible:Boolean(toggle&&toggle.getBoundingClientRect().width>0&&toggle.getBoundingClientRect().height>0),
          expanded:toggle?.getAttribute('aria-expanded'),
          controls:toggle?.getAttribute('aria-controls'),
          label:toggle?.getAttribute('aria-label'),
          panelId:panel?.id
        };
      });
      await toggle.focus();
      await toggle.press('Enter');
      await page.waitForTimeout(100);
      const opened = await page.evaluate(async () => {
        const panel=document.querySelector('[data-fa-primary-nav]');
        const toggle=document.querySelector('[data-fa-menu-toggle]');
        const links=[...document.querySelectorAll('[data-fa-mobile-nav-link]')];
        const box=panel?.getBoundingClientRect();
        const header=document.querySelector('.fa-header')?.getBoundingClientRect();
        const hero=document.querySelector('.fa-hero')?.getBoundingClientRect();
        const statuses=await Promise.all(links.map(async(link)=>{
          try{return (await fetch(link.href,{redirect:'follow'})).status}catch{return 0}
        }));
        return {
          visible:Boolean(box&&box.width>0&&box.height>0&&getComputedStyle(panel).visibility==='visible'),
          expanded:toggle?.getAttribute('aria-expanded'),
          bodyLocked:document.body.classList.contains('fa-menu-open')&&getComputedStyle(document.body).overflow==='hidden',
          direction:panel?getComputedStyle(panel).direction:null,
          withinViewport:Boolean(box&&box.left>=-1&&box.right<=window.innerWidth+1&&box.top>=0&&box.bottom<=window.innerHeight+1),
          stickyHeader:getComputedStyle(document.querySelector('.fa-header')).position==='sticky',
          headerClear:Boolean(header&&hero&&hero.top>=header.bottom-1),
          focusedFirst:document.activeElement===links[0],
          labels:links.map((link)=>link.textContent?.trim()),
          hrefs:links.map((link)=>link.getAttribute('href')),
          statuses,
          localeCount:[...document.querySelectorAll('[data-fa-locale-switcher] [data-locale-option]')].filter((link)=>link.getBoundingClientRect().width>0).length
        };
      });
      await page.locator('[data-fa-mobile-nav-link]').last().focus();
      await page.keyboard.press('Tab');
      const focusTrapped = await toggle.evaluate((element)=>document.activeElement===element);
      await page.keyboard.press('Escape');
      const escapeClosed = await page.evaluate(() => document.querySelector('[data-fa-menu-toggle]')?.getAttribute('aria-expanded')==='false'&&!document.body.classList.contains('fa-menu-open'));
      await toggle.click();
      await page.evaluate(() => document.querySelector('.fa-brand')?.dispatchEvent(new PointerEvent('pointerdown',{bubbles:true})));
      const outsideClosed = await page.evaluate(() => document.querySelector('[data-fa-menu-toggle]')?.getAttribute('aria-expanded')==='false'&&!document.body.classList.contains('fa-menu-open'));
      persianMobileMenu={initial,opened,focusTrapped,escapeClosed,outsideClosed};
    }
    if (testCase.openLanguage) await page.locator('[data-language-toggle]').click();
    if (testCase.openPersianNav) await page.locator('[data-markets-nav-group]').hover();
    const contactEmailLink = page.locator('.contact-email-link');
    if (await contactEmailLink.count()) {
      await page.keyboard.press('Tab');
      await contactEmailLink.focus();
      await page.evaluate(() => window.scrollTo(0,0));
    }
    const result = await page.evaluate(() => ({
      overflow:document.documentElement.scrollWidth - window.innerWidth,
      headers:document.querySelectorAll('header').length,
      footers:document.querySelectorAll('footer').length,
      logo:[...document.querySelectorAll('.brand img,.fa-brand img')].every((image) => {
        const naturalRatio = image.naturalWidth / image.naturalHeight;
        const box = image.getBoundingClientRect();
        const renderedRatio = box.width / box.height;
        return image.naturalWidth > 0 && box.height > 0 && Math.abs(naturalRatio - renderedRatio) < .06;
      }),
      lang:document.documentElement.lang
      ,images:[...document.images].every((image) => image.complete && image.naturalWidth > 0 && image.hasAttribute('width') && image.hasAttribute('height'))
      ,brokenImages:[...document.images].filter((image) => !image.complete || image.naturalWidth === 0 || !image.hasAttribute('width') || !image.hasAttribute('height')).map((image) => image.getAttribute('src'))
      ,localeAtmosphere:[getComputedStyle(document.documentElement).getPropertyValue('--accent').trim(),getComputedStyle(document.documentElement).getPropertyValue('--locale-wash').trim()].join('|')
      ,localeOptions:document.querySelectorAll('#language-panel [data-locale-option]').length
      ,activeDesktopLocale:document.querySelectorAll('#language-panel [data-locale-option][aria-current="true"]').length
      ,mobilePanelHeight:document.querySelector('[data-primary-nav]')?.getBoundingClientRect().height ?? 0
      ,visibleMobileLocales:[...document.querySelectorAll('.mobile-locales [data-locale-option]')].filter((link) => {
        const box=link.getBoundingClientRect(); return box.width>0&&box.height>0;
      }).length
      ,localeRouteMatch:[...document.querySelectorAll('[data-locale-option]')].every((link) => {
        const code=link.getAttribute('hreflang');
        if(code==='fa')return new URL(link.href).pathname==='/fa/tamin-beynolmelali-iran/';
        const alternate=document.querySelector(`link[rel="alternate"][hreflang="${code}"]`);
        return alternate && new URL(link.href).pathname === new URL(alternate.href).pathname;
      })
      ,desktopLocaleCodeOnly:(() => {
        if (window.innerWidth <= 860) return true;
        const trigger=document.querySelector('[data-language-toggle]');
        return trigger?.textContent?.trim() === document.documentElement.lang.toUpperCase();
      })()
      ,contactEmail:(() => {
        const panel=document.querySelector('.contact-email-panel');
        if(!panel) return null;
        const links=[...panel.querySelectorAll('.contact-email-link')];
        const link=links[0];
        const occurrences=(panel.textContent?.match(/info@ctseg\.com\.tr/g) ?? []).length;
        const style=link ? getComputedStyle(link) : null;
        const focusVisible=Boolean(link?.matches(':focus-visible') && style?.outlineStyle !== 'none' && style?.outlineWidth !== '0px');
        return {
          occurrences,
          links:links.length,
          href:link?.getAttribute('href'),
          buttons:panel.querySelectorAll('.button').length,
          focusVisible
        };
      })()
      ,persianNav:(() => {
        const links=[...document.querySelectorAll('[data-fa-nav-link]')];
        const link=links[0];
        const box=link?.getBoundingClientRect();
        return {
          count:links.length,
          visible:Boolean(box&&box.width>0&&box.height>0&&getComputedStyle(link).visibility!=='hidden'&&getComputedStyle(link).opacity!=='0'),
          href:link?.getAttribute('href') ?? null,
          target:link?.getAttribute('target') ?? null,
          primary:link?.querySelector('strong')?.textContent?.trim() ?? null,
          helper:link?.querySelector('span')?.textContent?.trim() ?? null
        };
      })()
      ,persian:(() => {
        const form=document.querySelector('[data-fa-sourcing-form]');
        if(!form)return null;
        const fields=[...form.querySelectorAll('input[id],select[id],textarea[id]')].filter((field)=>field.id!=='website');
        const company=document.querySelector('.fa-company-facts');
        const heroVisual=document.querySelector('.fa-hero-visual');
        const heroImage=heroVisual?.querySelector('img');
        const heroCaption=heroVisual?.querySelector('figcaption');
        const chips=[...document.querySelectorAll('.fa-chip-list li')];
        const rgb=(value)=>value.match(/[\d.]+/g)?.slice(0,3).map(Number) ?? [0,0,0];
        const luminance=(value)=>rgb(value).map((channel)=>{
          const normalized=channel/255;
          return normalized<=.04045?normalized/12.92:((normalized+.055)/1.055)**2.4;
        }).reduce((sum,channel,index)=>sum+channel*[.2126,.7152,.0722][index],0);
        const contrast=(foreground,background)=>{
          const lighter=Math.max(luminance(foreground),luminance(background));
          const darker=Math.min(luminance(foreground),luminance(background));
          return (lighter+.05)/(darker+.05);
        };
        const rootStyle=getComputedStyle(document.documentElement);
        const bodyStyle=getComputedStyle(document.body);
        return {
          lang:document.documentElement.lang,
          dir:document.documentElement.dir,
          rootDirection:rootStyle.direction,
          bodyDirection:bodyStyle.direction,
          h1s:document.querySelectorAll('h1').length,
          details:document.querySelectorAll('.fa-faq details').length,
          fields:fields.length,
          fieldIds:fields.map((field)=>field.id),
          labeled:fields.every((field)=>form.querySelector(`label[for="${field.id}"]`)),
          companyVisible:Boolean(company&&company.getBoundingClientRect().width>0&&company.textContent?.includes('CTSEG Sanayi ve Ticaret Limited Şirketi')),
          headerVisible:Boolean(document.querySelector('.fa-header')?.getBoundingClientRect().height),
          footerVisible:Boolean(document.querySelector('.fa-footer')?.getBoundingClientRect().height),
          globalLocaleOptions:document.querySelectorAll('[data-locale-option]').length,
          activeLocale:document.querySelector('[data-locale-option][aria-current="page"]')?.getAttribute('hreflang') ?? null,
          localePaths:Object.fromEntries([...document.querySelectorAll('[data-locale-option]')].map((link)=>[link.getAttribute('hreflang'),new URL(link.href).pathname])),
          heroStatic:Boolean(document.querySelector('.fa-hero h1')?.textContent?.trim()),
          emailLtr:getComputedStyle(document.querySelector('.fa-contact-box a')).direction==='ltr',
          brandLtr:getComputedStyle(document.querySelector('.fa-brand')).direction==='ltr',
          breadcrumbRtl:getComputedStyle(document.querySelector('.fa-hero nav')).direction==='rtl',
          heroMedia:{
            imageNaturalWidth:heroImage?.naturalWidth ?? 0,
            imageNaturalHeight:heroImage?.naturalHeight ?? 0,
            imageHeight:heroImage?.getBoundingClientRect().height ?? 0,
            visualHeight:heroVisual?.getBoundingClientRect().height ?? 0,
            captionHeight:heroCaption?.getBoundingClientRect().height ?? 0,
            captionRowMax:Math.max(0,...[...heroCaption?.querySelectorAll('span') ?? []].map((span)=>span.getBoundingClientRect().height)),
            objectFit:heroImage ? getComputedStyle(heroImage).objectFit : null
          },
          chipCount:chips.length,
          chipContrastMin:Math.min(...chips.map((chip)=>contrast(getComputedStyle(chip).color,getComputedStyle(chip.closest('.fa-category')).backgroundColor))),
          producerVisible:Boolean(document.querySelector('[data-persian-producer-entry]')?.getBoundingClientRect().height),
          sectorsVisible:Boolean(document.querySelector('[data-carpet-textile-entry]')?.getBoundingClientRect().height),
          sectorPaths:[...document.querySelectorAll('[data-carpet-textile-entry] .fa-sector-link')].map((link)=>decodeURI(new URL(link.href).pathname))
        };
      })()
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
        const pageHero=document.querySelector('[data-page-hero]');
        const pageHeroBox=pageHero?.getBoundingClientRect();
        const nextSection=pageHero?.nextElementSibling;
        const nextContent=nextSection?.querySelector('.container > *') ?? nextSection?.querySelector('.container');
        const nextContentBox=nextContent?.getBoundingClientRect();
        const heroFocus=pageHero?.querySelector('.eyebrow,.breadcrumb,h1');
        const heroFocusBox=heroFocus?.getBoundingClientRect();
        const lineHeight=heading ? Number.parseFloat(getComputedStyle(heading).lineHeight) : 0;
        const catalogueCards=[...document.querySelectorAll('.catalogue-grid [data-product-card]')];
        const cardImages=catalogueCards.map((card)=>card.querySelector('img')?.getAttribute('src')).filter(Boolean);
        const detailMedia=[...document.querySelectorAll('[data-product-media] img')].map((image)=>image.getAttribute('src'));
        return {
          headingVisualOverlap:intersects(headingBox,visualBox),
          headerOverlap:Boolean(headerBox&&firstBox&&firstBox.top<headerBox.bottom-1),
          heroChromeOverlap:intersects(headerBox,heroFocusBox),
          pageHeroGap:pageHeroBox&&nextContentBox ? Math.round(nextContentBox.top-pageHeroBox.bottom) : null,
          headingLines:headingBox&&lineHeight ? Math.round(headingBox.height/lineHeight) : 0,
          cardOverflow:catalogueCards.some((card)=>card.getBoundingClientRect().right>window.innerWidth+1||card.getBoundingClientRect().left<-1),
          maxCardHeight:catalogueCards.reduce((max,card)=>Math.max(max,card.getBoundingClientRect().height),0),
          repeatedAdjacentImage:cardImages.some((src,index)=>index>0&&src===cardImages[index-1]),
          duplicateDetailMedia:new Set(detailMedia).size!==detailMedia.length,
          posterFit:[...document.querySelectorAll('[data-media-type="poster"] img')].every((image)=>getComputedStyle(image).objectFit==='contain'),
          photoFit:[...document.querySelectorAll('[data-media-type="photo"] img')].every((image)=>getComputedStyle(image).objectFit==='cover'),
          portfolioContain:[...document.querySelectorAll('.portfolio-visual img[src="/images/2.webp"]')].every((image)=>getComputedStyle(image).objectFit==='contain') &&
            document.querySelectorAll('.portfolio-visual img[src="/images/2.webp"]').length <= 1,
          marketTitleCentered:[...document.querySelectorAll('.market-line')].every((line)=>{
            const cards=[...line.children];
            const heights=cards.map((card)=>card.getBoundingClientRect().height);
            return Math.max(...heights)-Math.min(...heights)<2 && cards.every((card)=>{
              const title=card.querySelector('strong');
              if(!title) return false;
              const cardBox=card.getBoundingClientRect();
              const titleBox=title.getBoundingClientRect();
              return Math.abs((cardBox.left+cardBox.width/2)-(titleBox.left+titleBox.width/2))<2 &&
                Math.abs((cardBox.top+cardBox.height/2)-(titleBox.top+titleBox.height/2))<3;
            });
          }),
          compactHeroHeight:[...document.querySelectorAll('.page-hero--compact')].every((hero)=>hero.getBoundingClientRect().height < (window.innerWidth<=860 ? 500 : 600)),
          ctaAlignment:[...document.querySelectorAll('.cta-statement')].every((cta)=>{
            const heading=cta.querySelector('h2');
            const button=cta.querySelector('.button');
            if(!heading||!button) return false;
            const ctaBox=cta.getBoundingClientRect();
            const headingBox=heading.getBoundingClientRect();
            const buttonBox=button.getBoundingClientRect();
            const ctaCenter=ctaBox.left+ctaBox.width/2;
            const headingCenter=headingBox.left+headingBox.width/2;
            const buttonCenter=buttonBox.left+buttonBox.width/2;
            const style=getComputedStyle(cta);
            return Math.abs(ctaCenter-headingCenter)<2&&Math.abs(ctaCenter-buttonCenter)<2&&
              headingBox.width<=982&&Math.abs(Number.parseFloat(style.paddingTop)-Number.parseFloat(style.paddingBottom))<1;
          }),
          ctaMobileLines:[...document.querySelectorAll('.cta-statement h2')].reduce((max,heading)=>{
            const box=heading.getBoundingClientRect();
            const lineHeight=Number.parseFloat(getComputedStyle(heading).lineHeight);
            return Math.max(max,lineHeight?Math.round(box.height/lineHeight):0);
          },0),
          productCount:catalogueCards.length
        };
      })()
    }));
    await page.screenshot({ path:resolve(output, `${testCase.name}.png`), fullPage:!testCase.openMenu });
    let persianNavWorks = true;
    if (testCase.verifyPersianNav) {
      const [targetResponse] = await Promise.all([
        page.waitForNavigation({waitUntil:'domcontentloaded'}),
        page.locator('[data-fa-nav-link]').click()
      ]);
      persianNavWorks = targetResponse?.status() === 200 && new URL(page.url()).pathname === '/fa/tamin-beynolmelali-iran/';
    }
    if (!testCase.persian) localeAtmospheres.set(result.lang,result.localeAtmosphere);
    const gapLimit = testCase.gapLimit ?? (testCase.width <= 860 ? 56 : 80);
    const badLayout = result.layout.headingVisualOverlap || result.layout.headerOverlap || result.layout.heroChromeOverlap ||
      (result.layout.pageHeroGap !== null && (result.layout.pageHeroGap < 20 || result.layout.pageHeroGap > gapLimit)) || result.layout.cardOverflow ||
      result.layout.repeatedAdjacentImage || result.layout.duplicateDetailMedia ||
      !result.layout.posterFit || !result.layout.photoFit || !result.layout.portfolioContain ||
      !result.layout.marketTitleCentered || !result.layout.compactHeroHeight || !result.layout.ctaAlignment ||
      (testCase.width <= 620 && result.layout.ctaMobileLines > 5) ||
      (testCase.width <= 620 && result.layout.headingLines > 6) ||
      (testCase.width >= 1100 && result.layout.maxCardHeight > 700) ||
      (result.layout.productCount > 0 && result.layout.productCount !== 18);
    const badContactEmail = result.contactEmail && (result.contactEmail.occurrences !== 1 || result.contactEmail.links !== 1 ||
      result.contactEmail.href !== 'mailto:info@ctseg.com.tr?subject=CTSEG%20Commercial%20Enquiry' ||
      result.contactEmail.buttons !== 0 || !result.contactEmail.focusVisible);
    const badLocale = !testCase.persian && (result.localeOptions !== 6 || result.activeDesktopLocale !== 1 || (!testCase.allowLocaleFallback && !result.localeRouteMatch) || !result.desktopLocaleCodeOnly ||
      (testCase.openMenu && (result.visibleMobileLocales !== 6 || result.mobilePanelHeight < testCase.height * .7)));
    const badPersian = testCase.persian && (!result.persian || result.persian.lang !== 'fa' || result.persian.dir !== 'rtl' ||
      result.persian.rootDirection !== 'rtl' || result.persian.bodyDirection !== 'rtl' || result.persian.h1s !== 1 ||
      result.persian.details !== 8 || result.persian.fields !== 9 || !['full-name','company-name','business-email','phone','country-city','product-group','target-market','short-message','privacy-consent'].every((id)=>result.persian.fieldIds.includes(id)) || !result.persian.labeled || !result.persian.companyVisible ||
      !result.persian.headerVisible || !result.persian.footerVisible || result.persian.globalLocaleOptions !== 6 || result.persian.activeLocale !== 'fa' ||
      !['tr','en','de','it','fr','fa'].every((code)=>result.persian.localePaths[code]) ||
      !result.persian.heroStatic || !result.persian.emailLtr || !result.persian.brandLtr || !result.persian.breadcrumbRtl || result.persian.chipCount < 1 || result.persian.chipContrastMin < 4.5 ||
      result.persian.heroMedia.imageNaturalWidth < 1 || result.persian.heroMedia.imageNaturalHeight < 1 || result.persian.heroMedia.objectFit !== 'cover' ||
      (testCase.width <= 560 && (result.persian.heroMedia.imageHeight < 160 || result.persian.heroMedia.imageHeight > 210 || result.persian.heroMedia.visualHeight > 330 || result.persian.heroMedia.captionHeight > 120 || result.persian.heroMedia.captionRowMax > 42)) ||
      !result.persian.producerVisible || !result.persian.sectorsVisible ||
      !['/fa/sourcing/فرش-ایرانی/','/fa/sourcing/فرش-ابریشم-دستباف/','/fa/sourcing/تامین-عمده-منسوجات/'].every((path)=>result.persian.sectorPaths.includes(path)));
    const expectedPersianMenuLabels=['صفحه اصلی','خدمات','محصولات','بازارها','درباره ما','تماس','درخواست بررسی'];
    const expectedPersianMenuHrefs=['/fa/tamin-beynolmelali-iran/','#services','#sourcing','#markets','#about','#contact','#request-form'];
    const badPersianMobileMenu = testCase.persian && testCase.width <= 820 && (!persianMobileMenu ||
      !persianMobileMenu.initial.toggleVisible || persianMobileMenu.initial.expanded !== 'false' || persianMobileMenu.initial.controls !== persianMobileMenu.initial.panelId || !persianMobileMenu.initial.label ||
      !persianMobileMenu.opened.visible || persianMobileMenu.opened.expanded !== 'true' || !persianMobileMenu.opened.bodyLocked || persianMobileMenu.opened.direction !== 'rtl' ||
      !persianMobileMenu.opened.withinViewport || !persianMobileMenu.opened.stickyHeader || !persianMobileMenu.opened.headerClear || !persianMobileMenu.opened.focusedFirst || persianMobileMenu.opened.localeCount !== 6 ||
      JSON.stringify(persianMobileMenu.opened.labels) !== JSON.stringify(expectedPersianMenuLabels) || JSON.stringify(persianMobileMenu.opened.hrefs) !== JSON.stringify(expectedPersianMenuHrefs) ||
      !persianMobileMenu.opened.statuses.every((status)=>status===200) || !persianMobileMenu.focusTrapped || !persianMobileMenu.escapeClosed || !persianMobileMenu.outsideClosed);
    const badPersianNav = result.lang === 'en'
      ? result.persianNav.count !== 1 || result.persianNav.href !== '/fa/tamin-beynolmelali-iran/' ||
        result.persianNav.target !== null || result.persianNav.primary !== 'For Iranian Businesses' ||
        result.persianNav.helper !== 'Persian landing page' || (testCase.verifyPersianNav && !result.persianNav.visible)
      : result.persianNav.count !== 0;
    if (result.overflow > 1 || result.headers !== 1 || result.footers !== 1 || !result.logo || !result.images || !mobileMenu || !bodyScrollLocked || badLayout || badLocale || badContactEmail || badPersian || badPersianMobileMenu || badPersianNav || !persianNavWorks) {
      failures.push(`${testCase.name}: ${JSON.stringify({...result,mobileMenu,bodyScrollLocked,persianMobileMenu,persianNavWorks})}`);
    }
    console.log(`${testCase.name}: ${testCase.width}x${testCase.height}, lang=${result.lang}, overflow=${result.overflow}px`);
    await page.close();
  }
  const globalLocaleEntries = [
    {lang:'tr',path:'/',targets:{tr:'/',en:'/en/',de:'/de/',it:'/it/',fr:'/fr/',fa:'/fa/tamin-beynolmelali-iran/'}},
    {lang:'en',path:'/en/',targets:{tr:'/',en:'/en/',de:'/de/',it:'/it/',fr:'/fr/',fa:'/fa/tamin-beynolmelali-iran/'}},
    {lang:'de',path:'/de/',targets:{tr:'/',en:'/en/',de:'/de/',it:'/it/',fr:'/fr/',fa:'/fa/tamin-beynolmelali-iran/'}},
    {lang:'it',path:'/it/',targets:{tr:'/',en:'/en/',de:'/de/',it:'/it/',fr:'/fr/',fa:'/fa/tamin-beynolmelali-iran/'}},
    {lang:'fr',path:'/fr/',targets:{tr:'/',en:'/en/',de:'/de/',it:'/it/',fr:'/fr/',fa:'/fa/tamin-beynolmelali-iran/'}},
    {lang:'fa',path:'/fa/tamin-beynolmelali-iran/',targets:{tr:'/tr/pazarlar/',en:'/en/markets/',de:'/de/maerkte/',it:'/it/mercati/',fr:'/fr/marches/',fa:'/fa/tamin-beynolmelali-iran/'}}
  ];
  let globalLocaleChecks=0;
  for(const entry of globalLocaleEntries){
    for(const viewport of [{name:'desktop',width:1440,height:1000},{name:'mobile',width:390,height:844}]){
      globalLocaleChecks++;
      const page=await browser.newPage({viewport:{width:viewport.width,height:viewport.height}});
      const response=await page.goto(`http://127.0.0.1:4321${entry.path}`,{waitUntil:'domcontentloaded'});
      if(response?.status()!==200)failures.push(`global locale ${entry.lang}/${viewport.name}: HTTP ${response?.status()??'none'}`);
      if(entry.lang!=='fa'||viewport.name==='mobile'){
        const trigger=entry.lang==='fa'
          ? page.locator('[data-fa-menu-toggle]')
          : viewport.name==='desktop'?page.locator('[data-language-toggle]'):page.locator('[data-menu-toggle]');
        if(entry.lang==='fa')await page.waitForLoadState('networkidle');
        await trigger.focus();
        await trigger.press('Enter');
        if(entry.lang==='fa')await page.waitForFunction(()=>document.querySelector('[data-fa-menu-toggle]')?.getAttribute('aria-expanded')==='true'&&[...document.querySelectorAll('[data-fa-locale-switcher] [data-locale-option]')].every((link)=>link.getBoundingClientRect().width>0));
        await page.waitForTimeout(300);
      }
      const contract=await page.evaluate(({lang,targets,mobile})=>{
        const selector=lang==='fa'?'[data-locale-option]':mobile?'.mobile-locales [data-locale-option]':'#language-panel [data-locale-option]';
        const links=[...document.querySelectorAll(selector)];
        const visible=(element)=>{if(!element)return false;const box=element.getBoundingClientRect();const style=getComputedStyle(element);return box.width>0&&box.height>0&&style.visibility!=='hidden'&&style.display!=='none'};
        return{
          lang:document.documentElement.lang,
          direction:getComputedStyle(document.body).direction,
          options:links.length,
          active:links.filter(link=>link.getAttribute('aria-current')).map(link=>link.getAttribute('hreflang')),
          paths:Object.fromEntries(links.map(link=>[link.getAttribute('hreflang'),new URL(link.href).pathname])),
          targetsMatch:links.every(link=>new URL(link.href).pathname===targets[link.getAttribute('hreflang')]),
          keyboardAccessible:links.every(link=>link.tabIndex>=0),
          visibleOptions:links.filter(visible).length,
          overflow:document.documentElement.scrollWidth-window.innerWidth,
          canonical:document.querySelector('link[rel="canonical"]')?.href??null,
          coreAlternates:lang==='fa'?true:['tr','en','de','it','fr','x-default'].every(code=>document.querySelector(`link[rel="alternate"][hreflang="${code}"]`))
        };
      },{lang:entry.lang,targets:entry.targets,mobile:viewport.name==='mobile'});
      const statuses=[];
      for(const [code,path] of Object.entries(entry.targets)){
        const targetResponse=await page.request.get(`http://127.0.0.1:4321${encodeURI(path)}`);
        statuses.push([code,targetResponse.status()]);
      }
      if(contract.lang!==entry.lang||contract.options!==6||contract.active.length!==1||contract.active[0]!==entry.lang||
        !contract.targetsMatch||!contract.keyboardAccessible||contract.visibleOptions!==6||contract.overflow>1||!contract.canonical||
        !contract.coreAlternates||statuses.some(([,status])=>status!==200)){
        failures.push(`global locale ${entry.lang}/${viewport.name}: ${JSON.stringify({...contract,statuses})}`);
      }
      console.log(`global-locale-${entry.lang}-${viewport.name}: options=${contract.options}, active=${contract.active[0]}, overflow=${contract.overflow}px, targets=${statuses.map(item=>item[1]).join('/')}`);
      await page.close();
    }
  }
  if(globalLocaleChecks!==12)failures.push(`expected 12 global locale viewport checks, ran ${globalLocaleChecks}`);
  const sourcingViewports = [
    {name:'desktop',width:1440,height:1000},
    {name:'mobile',width:390,height:844}
  ];
  let sourcingChecks = 0;
  for (const [family,routes] of Object.entries(sourcingFamilies)) {
    for (const lang of sourcingLocales) {
      for (const viewport of sourcingViewports) {
        sourcingChecks++;
        const path = routes[lang];
        const page = await browser.newPage({viewport:{width:viewport.width,height:viewport.height}});
        const response = await page.goto(`http://127.0.0.1:4321${encodeURI(path)}`,{waitUntil:'networkidle'});
        if (response?.status() !== 200) failures.push(`sourcing ${family}/${lang}/${viewport.name}: HTTP ${response?.status() ?? 'none'}`);
        await page.addStyleTag({content:'*,*:before,*:after{animation:none!important;transition:none!important}'});
        await page.evaluate(async()=>{
          document.documentElement.style.scrollBehavior='auto';
          for(let y=0;y<document.documentElement.scrollHeight;y+=window.innerHeight){window.scrollTo(0,y);await new Promise(resolve=>setTimeout(resolve,40));}
          window.scrollTo(0,0);
        });
        const contract = await page.evaluate(({expectedLang,expectedPath,familyRoutes,audiences})=>{
          const visible = (element) => {
            if(!element)return false;
            const box=element.getBoundingClientRect();
            const style=getComputedStyle(element);
            return box.width>0&&box.height>0&&style.visibility!=='hidden'&&style.display!=='none';
          };
          const links=[...document.querySelectorAll('[data-trade-locale]')];
          const alternates=Object.fromEntries([...document.querySelectorAll('link[rel="alternate"][hreflang]')].map(link=>[link.hreflang,link.href]));
          const expectedUrl=(path)=>`https://ctseg.com.tr${path}`;
          const pathnameMatches=(url,path)=>decodeURI(new URL(url).pathname)===decodeURI(path);
          const bodyText=document.body.innerText;
          return {
            htmlLang:document.documentElement.lang,
            htmlDir:document.documentElement.dir,
            rootDirection:getComputedStyle(document.documentElement).direction,
            bodyDirection:getComputedStyle(document.body).direction,
            activeLocales:links.filter(link=>link.getAttribute('aria-current')==='page').map(link=>link.dataset.tradeLocale),
            localeCodes:links.map(link=>link.dataset.tradeLocale),
            localeTargets:Object.fromEntries(links.map(link=>[link.dataset.tradeLocale,decodeURI(new URL(link.href).pathname)])),
            localeTargetMatch:links.every(link=>pathnameMatches(link.href,familyRoutes[link.dataset.tradeLocale])),
            canonical:document.querySelector('link[rel="canonical"]')?.href,
            canonicalMatches:(()=>{const href=document.querySelector('link[rel="canonical"]')?.href;if(!href)return false;const url=new URL(href);return url.origin==='https://ctseg.com.tr'&&decodeURI(url.pathname)===decodeURI(expectedPath);})(),
            hreflangCodes:Object.keys(alternates),
            hreflangMatch:Object.entries(familyRoutes).every(([code,path])=>alternates[code]&&pathnameMatches(alternates[code],path)),
            xDefaultMatches:alternates['x-default']===expectedUrl(familyRoutes.en),
            h1s:document.querySelectorAll('h1').length,
            headers:document.querySelectorAll('header').length,
            footers:document.querySelectorAll('footer').length,
            headerVisible:visible(document.querySelector('header')),
            footerVisible:visible(document.querySelector('footer')),
            menuToggleVisible:visible(document.querySelector('[data-trade-menu-toggle]')),
            localeNavVisible:visible(document.querySelector('[data-trade-locale-nav]')),
            overflow:document.documentElement.scrollWidth-window.innerWidth,
            forbiddenPersianUi:['Skip to content','Language selection','Open language menu','CTSEG home','Submit a commercial enquiry','Related sourcing areas'].filter(text=>bodyText.includes(text)),
            producerSection:visible(document.querySelector('[data-persian-producer-section]')),
            producerCtas:document.querySelectorAll('[data-producer-cta]').length,
            producerAudiences:audiences.filter(text=>bodyText.includes(text)),
            producerHeading:bodyText.includes('برای تولیدکنندگان و صادرکنندگان ایرانی'),
            expectedLang
          };
        },{expectedLang:lang,expectedPath:path,familyRoutes:routes,audiences:sourcingAudiences[family]});
        const badDirection=lang==='fa'
          ? contract.htmlDir!=='rtl'||contract.rootDirection!=='rtl'||contract.bodyDirection!=='rtl'
          : contract.htmlDir!=='ltr'||contract.rootDirection!=='ltr'||contract.bodyDirection!=='ltr';
        const badProducer=lang==='fa'
          ? !contract.producerSection||contract.producerCtas!==5||contract.producerAudiences.length!==sourcingAudiences[family].length||!contract.producerHeading||contract.forbiddenPersianUi.length>0
          : contract.producerSection||contract.producerCtas!==0;
        if(viewport.name==='mobile'){
          await page.locator('[data-trade-menu-toggle]').click();
          const menu=await page.evaluate(()=>({
            expanded:document.querySelector('[data-trade-menu-toggle]')?.getAttribute('aria-expanded'),
            visible:(()=>{const el=document.querySelector('[data-trade-locale-nav]');if(!el)return false;const box=el.getBoundingClientRect();return box.width>0&&box.height>0&&getComputedStyle(el).visibility!=='hidden';})(),
            bodyLocked:document.body.classList.contains('trade-menu-open')&&getComputedStyle(document.body).overflow==='hidden'
          }));
          if(menu.expanded!=='true'||!menu.visible||!menu.bodyLocked) failures.push(`sourcing ${family}/${lang}/mobile menu: ${JSON.stringify(menu)}`);
        }
        const switchStatuses=[];
        for(const targetLang of sourcingLocales){
          const switchResponse=await page.request.get(`http://127.0.0.1:4321${encodeURI(routes[targetLang])}`);
          switchStatuses.push([targetLang,switchResponse.status()]);
        }
        const badSwitch=switchStatuses.some(([,status])=>status!==200);
        if(contract.htmlLang!==lang||badDirection||contract.activeLocales.length!==1||contract.activeLocales[0]!==lang||
          contract.localeCodes.length!==6||!sourcingLocales.every(code=>contract.localeCodes.includes(code))||!contract.localeTargetMatch||
          !contract.canonicalMatches||!contract.hreflangMatch||!contract.xDefaultMatches||contract.h1s!==1||
          contract.headers!==1||contract.footers!==1||!contract.headerVisible||!contract.footerVisible||contract.overflow>0||
          (viewport.name==='desktop'&&!contract.localeNavVisible)||badProducer||badSwitch){
          failures.push(`sourcing ${family}/${lang}/${viewport.name}: ${JSON.stringify({...contract,switchStatuses})}`);
        }
        console.log(`sourcing-${family}-${lang}-${viewport.name}: lang=${contract.htmlLang}, dir=${contract.rootDirection}, overflow=${contract.overflow}px, switches=${switchStatuses.map(item=>item[1]).join('/')}`);
        await page.close();
      }
    }
  }
  if(sourcingChecks!==36) failures.push(`expected 36 sourcing viewport checks, ran ${sourcingChecks}`);
  if (localeAtmospheres.size !== 5) {
    failures.push(`locale treatments are incomplete: ${JSON.stringify(Object.fromEntries(localeAtmospheres))}`);
  }
  const productSlugs = [
    'akbari-pistachio','kaleghouchi-pistachio','fandoghi-pistachio','ahmad-aghaei-pistachio',
    'green-peeled-pistachio-kernels','pistachio-kernels-granules','mazafati-dates','date-paste-syrup',
    'raisins','almonds','walnuts','dried-apricots-apricot-kernels','pumpkin-seeds','sunflower-seeds',
    'saffron','dried-mulberries','zereshk','mixed-nuts-specialities'
  ];
  const mediaViewports = [
    { name:'desktop', width:1440, height:1000 },
    { name:'tablet', width:820, height:1180 },
    { name:'mobile', width:390, height:844 }
  ];
  const mediaOutput = join(output,'product-media');
  mkdirSync(mediaOutput,{recursive:true});
  for (const viewport of mediaViewports) {
    const page = await browser.newPage({ viewport:{width:viewport.width,height:viewport.height} });
    for (const slug of productSlugs) {
      await page.goto(`http://127.0.0.1:4321/en/trade-products/${slug}/`,{waitUntil:'domcontentloaded'});
      await page.addStyleTag({content:'*,*:before,*:after{animation:none!important;transition:none!important}'});
      await page.locator('.product-hero-media img').waitFor({state:'visible'});
      await page.waitForFunction(() => {
        const image=document.querySelector('.product-hero-media img');
        return image?.complete && image.naturalWidth>0;
      });
      const media = await page.locator('.product-hero-media').evaluate((figure) => {
        const image=figure.querySelector('img');
        const type=figure.getAttribute('data-media-type');
        const style=image ? getComputedStyle(image) : null;
        return {
          type,
          fit:style?.objectFit,
          position:image?.style.objectPosition ?? '',
          overflow:document.documentElement.scrollWidth-window.innerWidth
        };
      });
      if (!['poster','photo'].includes(media.type) || (media.type==='poster'&&media.fit!=='contain') ||
        (media.type==='photo'&&(media.fit!=='cover'||!media.position)) || media.overflow>1) {
        failures.push(`product media ${viewport.name}/${slug}: ${JSON.stringify(media)}`);
      }
      await page.locator('.product-hero-media').screenshot({path:join(mediaOutput,`${viewport.name}-${slug}.png`)});
    }
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
