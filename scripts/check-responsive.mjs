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
    { name:'mobile-tr-markets', path:'/tr/pazarlar/', width:390, height:844 },
    { name:'mobile-tr-insights', path:'/tr/icgoruler/', width:390, height:844 },
    { name:'mobile-tr-contact', path:'/tr/iletisim/', width:390, height:844 },
    { name:'mobile-en-contact', path:'/en/contact/', width:390, height:844 },
    { name:'mobile-de-contact', path:'/de/kontakt/', width:390, height:844 },
    { name:'mobile-it-contact', path:'/it/contatti/', width:390, height:844 },
    { name:'mobile-fr-contact', path:'/fr/contact/', width:390, height:844 },
    { name:'mobile-tr-menu', path:'/', width:390, height:844, openMenu:true },
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
    { name:'wide-fa-landing', path:'/fa/tamin-beynolmelali-iran/', width:1600, height:1000, persian:true },
    { name:'tablet-fa-landing', path:'/fa/tamin-beynolmelali-iran/', width:820, height:1180, persian:true },
    { name:'mobile-fa-landing', path:'/fa/tamin-beynolmelali-iran/', width:390, height:844, persian:true },
    { name:'mobile430-fa-landing', path:'/fa/tamin-beynolmelali-iran/', width:430, height:932, persian:true }
  ];
  const failures = [];
  const localeAtmospheres = new Map();
  for (const testCase of cases) {
    const page = await browser.newPage({ viewport:{ width:testCase.width, height:testCase.height } });
    const navigationResponse = await page.goto(`http://127.0.0.1:4321${testCase.path}`, { waitUntil:'networkidle' });
    if (!navigationResponse || navigationResponse.status() !== 200) {
      failures.push(`${testCase.name}: expected HTTP 200, received ${navigationResponse?.status() ?? 'no response'}`);
    }
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
    let bodyScrollLocked = true;
    if (testCase.width <= 860 && !testCase.persian) {
      await page.locator('[data-menu-toggle]').click();
      mobileMenu = await page.locator('[data-primary-nav]').isVisible();
      bodyScrollLocked = await page.evaluate(() => document.body.classList.contains('menu-open') && getComputedStyle(document.body).overflow === 'hidden');
      if (!testCase.openMenu) await page.locator('[data-menu-toggle]').click();
    }
    if (testCase.openLanguage) await page.locator('[data-language-toggle]').click();
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
      ,persian:(() => {
        const form=document.querySelector('[data-fa-sourcing-form]');
        if(!form)return null;
        const fields=[...form.querySelectorAll('input[id],select[id],textarea[id]')].filter((field)=>field.id!=='website');
        const company=document.querySelector('.fa-company-facts');
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
          labeled:fields.every((field)=>form.querySelector(`label[for="${field.id}"]`)),
          companyVisible:Boolean(company&&company.getBoundingClientRect().width>0&&company.textContent?.includes('CTSEG Sanayi ve Ticaret Limited Şirketi')),
          headerVisible:Boolean(document.querySelector('.fa-header')?.getBoundingClientRect().height),
          footerVisible:Boolean(document.querySelector('.fa-footer')?.getBoundingClientRect().height),
          globalLocaleOptions:document.querySelectorAll('[data-locale-option]').length,
          heroStatic:Boolean(document.querySelector('.fa-hero h1')?.textContent?.trim()),
          emailLtr:getComputedStyle(document.querySelector('.fa-contact-box a')).direction==='ltr',
          brandLtr:getComputedStyle(document.querySelector('.fa-brand')).direction==='ltr',
          breadcrumbRtl:getComputedStyle(document.querySelector('.fa-hero nav')).direction==='rtl'
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
    if (!testCase.persian) localeAtmospheres.set(result.lang,result.localeAtmosphere);
    const gapLimit = testCase.width <= 860 ? 56 : 80;
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
    const badLocale = !testCase.persian && (result.localeOptions !== 5 || result.activeDesktopLocale !== 1 || !result.localeRouteMatch || !result.desktopLocaleCodeOnly ||
      (testCase.openMenu && (result.visibleMobileLocales !== 5 || result.mobilePanelHeight < testCase.height * .7)));
    const badPersian = testCase.persian && (!result.persian || result.persian.lang !== 'fa' || result.persian.dir !== 'rtl' ||
      result.persian.rootDirection !== 'rtl' || result.persian.bodyDirection !== 'rtl' || result.persian.h1s !== 1 ||
      result.persian.details !== 11 || result.persian.fields < 15 || !result.persian.labeled || !result.persian.companyVisible ||
      !result.persian.headerVisible || !result.persian.footerVisible || result.persian.globalLocaleOptions !== 0 ||
      !result.persian.heroStatic || !result.persian.emailLtr || !result.persian.brandLtr || !result.persian.breadcrumbRtl);
    if (result.overflow > 1 || result.headers !== 1 || result.footers !== 1 || !result.logo || !result.images || !mobileMenu || !bodyScrollLocked || badLayout || badLocale || badContactEmail || badPersian) {
      failures.push(`${testCase.name}: ${JSON.stringify({...result,mobileMenu,bodyScrollLocked})}`);
    }
    console.log(`${testCase.name}: ${testCase.width}x${testCase.height}, lang=${result.lang}, overflow=${result.overflow}px`);
    await page.close();
  }
  if (localeAtmospheres.size !== 5 || new Set(localeAtmospheres.values()).size !== 5) {
    failures.push(`locale atmospheres are not distinct: ${JSON.stringify(Object.fromEntries(localeAtmospheres))}`);
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
