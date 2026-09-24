import { readdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_ORIGIN = 'https://ctseg.com.tr';
const DEFAULT_SITEMAP_URL = `${SITE_ORIGIN}/sitemap-index.xml`;
const SITEMAP_URL = process.argv.find((arg) => arg.startsWith('http')) ?? DEFAULT_SITEMAP_URL;
const API_URL = 'https://api.indexnow.org/indexnow';
const KEY_DIR = fileURLToPath(new URL('../public/', import.meta.url));
const DRY_RUN = process.argv.includes('--dry-run');
const BATCH_SIZE = 10_000;

function decodeXml(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&apos;', "'");
}

function locs(xml) {
  return [...xml.matchAll(/<loc>\s*([\s\S]*?)\s*<\/loc>/gi)]
    .map((match) => decodeXml(match[1].trim()));
}

async function findKey() {
  const candidates = [];
  for (const name of await readdir(KEY_DIR)) {
    if (!name.endsWith('.txt')) continue;
    const stem=name.slice(0,-4);
    if (!/^[A-Za-z0-9-]{8,128}$/.test(stem)) continue;
    const value=(await readFile(resolve(KEY_DIR,name),'utf8')).trim();
    if (value===stem) candidates.push({name,key:value});
  }
  if (candidates.length !== 1) throw new Error(`Expected exactly one IndexNow verification key file, found ${candidates.length}.`);
  return candidates[0].key;
}

async function fetchXml(url) {
  const response = await fetch(url, { headers: { accept: 'application/xml,text/xml' } });
  if (!response.ok) throw new Error(`Sitemap request failed: HTTP ${response.status} (${url})`);
  return response.text();
}

async function readSitemap(url, visited = new Set()) {
  if (visited.has(url)) return [];
  visited.add(url);
  const xml = await fetchXml(url);
  const urls = locs(xml);
  if (/<sitemapindex\b/i.test(xml)) {
    const nested = [];
    for (const child of urls) nested.push(...await readSitemap(child, visited));
    return nested;
  }
  return urls;
}

async function submitBatch(key, urls, batchNumber, totalBatches) {
  const payload = {
    host: new URL(SITE_ORIGIN).host,
    key,
    keyLocation: `${SITE_ORIGIN}/${key}.txt`,
    urlList: urls,
  };
  if (DRY_RUN) {
    console.log(JSON.stringify({ dryRun: true, batch: batchNumber, totalBatches, urlCount: urls.length, firstUrl: urls[0], lastUrl: urls.at(-1) }, null, 2));
    return;
  }
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8', accept: 'application/json' },
    body: JSON.stringify(payload),
  });
  const body = await response.text();
  console.log(JSON.stringify({ batch: batchNumber, totalBatches, urlCount: urls.length, status: response.status, response: body || response.statusText }, null, 2));
  if (![200, 202].includes(response.status)) throw new Error(`IndexNow submission failed with HTTP ${response.status}.`);
}

const key = await findKey();
const urls = (await readSitemap(SITEMAP_URL))
  .filter((url) => url.startsWith(`${SITE_ORIGIN}/`))
  .filter((url, index, all) => all.indexOf(url) === index);
if (!urls.length) throw new Error('No CTSEG URLs found in the sitemap.');
const batches = [];
for (let index = 0; index < urls.length; index += BATCH_SIZE) batches.push(urls.slice(index, index + BATCH_SIZE));
console.log(`Preparing ${urls.length} unique CTSEG URLs in ${batches.length} batch(es).`);
for (let index = 0; index < batches.length; index += 1) await submitBatch(key, batches[index], index + 1, batches.length);
console.log(DRY_RUN ? 'IndexNow dry run completed.' : 'IndexNow submission completed.');
