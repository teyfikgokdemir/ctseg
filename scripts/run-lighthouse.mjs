import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, resolve } from 'node:path';
import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';

const chromePaths = [
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
];
const chromePath = chromePaths.find(existsSync);
if (!chromePath) throw new Error('Chrome or Edge executable was not found.');
const dist = resolve('dist');
if (!existsSync(dist)) throw new Error('dist/ not found. Run npm run build first.');
const lighthouseUrl=process.env.LIGHTHOUSE_URL ?? 'http://127.0.0.1:4323/';

let server;
if (!process.env.LIGHTHOUSE_URL) {
  server = createServer((request,response)=>{
    const pathname = decodeURI(new URL(request.url ?? '/','http://127.0.0.1').pathname);
    let file = join(dist,pathname.replace(/^\/+/,''));
    if (!extname(file)) file=join(file,'index.html');
    if (!existsSync(file)) { response.writeHead(404); response.end('Not found'); return; }
    const extension=extname(file);
    const type=extension==='.html'?'text/html; charset=utf-8':extension==='.css'?'text/css':
      extension==='.webp'?'image/webp':extension==='.woff2'?'font/woff2':'application/octet-stream';
    response.writeHead(200,{'content-type':type});
    response.end(readFileSync(file));
  });
  await new Promise((resolvePromise)=>server.listen(4323,'127.0.0.1',resolvePromise));
}

const outputDir=resolve('.artifacts/lighthouse');
mkdirSync(outputDir,{recursive:true});
const runs=[];
try {
  for(let index=1;index<=3;index++){
    const chrome=await launch({chromePath,chromeFlags:['--headless','--no-sandbox','--disable-gpu','--disable-extensions','--disable-background-networking']});
    let result;
    try {
      result=await lighthouse(lighthouseUrl,{
        port:chrome.port,
        output:'json',
        logLevel:'error',
        onlyCategories:['performance','accessibility','best-practices','seo'],
        formFactor:'mobile',
        throttlingMethod:'simulate'
      });
    } finally {
      try { await chrome.kill(); } catch (error) { console.warn(`Chrome cleanup warning: ${error.code ?? error.message}`); }
    }
    const lhr=result.lhr;
    const run={
      run:index,
      performance:Math.round(lhr.categories.performance.score*100),
      accessibility:Math.round(lhr.categories.accessibility.score*100),
      bestPractices:Math.round(lhr.categories['best-practices'].score*100),
      seo:Math.round(lhr.categories.seo.score*100),
      fcp:Math.round(lhr.audits['first-contentful-paint'].numericValue),
      lcp:Math.round(lhr.audits['largest-contentful-paint'].numericValue),
      tbt:Math.round(lhr.audits['total-blocking-time'].numericValue),
      cls:lhr.audits['cumulative-layout-shift'].numericValue
    };
    runs.push(run);
    writeFileSync(join(outputDir,`mobile-run-${index}.json`),result.report);
    console.log(`Lighthouse ${index}: ${JSON.stringify(run)}`);
  }
} finally {
  server?.close();
}

const median=(key)=>[...runs].sort((a,b)=>a[key]-b[key])[1][key];
const summary={
  runs,
  median:{
    performance:median('performance'),accessibility:median('accessibility'),
    bestPractices:median('bestPractices'),seo:median('seo'),fcp:median('fcp'),
    lcp:median('lcp'),tbt:median('tbt'),cls:median('cls')
  }
};
writeFileSync(join(outputDir,'summary.json'),`${JSON.stringify(summary,null,2)}\n`);
console.log(`Lighthouse median: ${JSON.stringify(summary.median)}`);
const medianResult=summary.median;
if (medianResult.performance<85 || medianResult.accessibility!==100 || medianResult.bestPractices!==100 ||
  medianResult.seo!==100 || medianResult.cls>.001 || medianResult.tbt>350 || medianResult.lcp>=5000) {
  console.error('Lighthouse thresholds were not met.');
  process.exit(1);
}
