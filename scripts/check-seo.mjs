import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const dist = resolve('dist');
const errors = [];
const origin = 'https://ctseg.com.tr';
const coreLocales = ['tr','en','de','it','ru'];

if (!existsSync(dist)) {
  console.error('dist/ not found. Run npm run build first.');
  process.exit(1);
}

const walk = (dir) => readdirSync(dir, { withFileTypes:true }).flatMap((entry) =>
  entry.isDirectory() ? walk(join(dir, entry.name)) : [join(dir, entry.name)]
);
const files = walk(dist);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const indexablePages = new Map();
const titleOwners = new Map();
const descriptionOwners = new Map();
const internalLinkCounts = new Map();

const outputPath = (file) => {
  const label = relative(dist,file).replaceAll('\\','/');
  if (label === 'index.html') return '/';
  return `/${label.replace(/index\.html$/, '')}`;
};
const builtTargetExists = (pathname) => {
  const clean = decodeURI(pathname).replace(/^\/+|\/+$/g,'');
  return clean
    ? existsSync(join(dist,clean)) || existsSync(join(dist,clean,'index.html')) || existsSync(join(dist,`${clean}.html`))
    : existsSync(join(dist,'index.html'));
};
const addUnique = (map, value, label, kind, locale) => {
  const key = `${locale}\0${value}`;
  if (map.has(key)) errors.push(`${label}: duplicate ${kind} in ${locale} (also ${map.get(key)})`);
  else map.set(key,label);
};

for (const file of htmlFiles) {
  const html = readFileSync(file,'utf8');
  const label = relative(dist,file).replaceAll('\\','/');
  const is404 = label === '404.html';
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1] ?? '';
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1]?.trim() ?? '';
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1]?.trim() ?? '';
  const lang = html.match(/<html lang="([^"]+)"/)?.[1] ?? '';
  const h1Count = (html.match(/<h1\b/g) || []).length;
  const expectedPath = outputPath(file);
  const expectedCanonical = encodeURI(`${origin}${expectedPath}`);

  if (h1Count !== 1) errors.push(`${label}: expected one H1, found ${h1Count}`);
  if (!title) errors.push(`${label}: title is empty`);
  if (!description) errors.push(`${label}: meta description is empty`);
  for (const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(block[1]); } catch (error) { errors.push(`${label}: invalid JSON-LD (${error.message})`); }
  }
  if (is404) {
    if (!robots.includes('noindex')) errors.push('404.html: missing noindex');
    continue;
  }
  if (!robots.includes('index') || robots.includes('noindex')) errors.push(`${label}: not explicitly index,follow`);
  if (!canonical?.startsWith(`${origin}/`) && canonical !== `${origin}/`) errors.push(`${label}: canonical is not HTTPS non-www`);
  if (canonical !== expectedCanonical) errors.push(`${label}: canonical ${canonical} does not match output ${expectedCanonical}`);
  if (expectedPath !== '/' && !expectedPath.endsWith('/')) errors.push(`${label}: output path is not trailing-slash canonical`);
  if (indexablePages.has(canonical)) errors.push(`${label}: duplicate canonical (also ${indexablePages.get(canonical).label})`);
  else indexablePages.set(canonical,{label,html,lang});
  addUnique(titleOwners,title,label,'title',lang);
  addUnique(descriptionOwners,description,label,'description',lang);

  if (lang !== 'fa') {
    const alternates = Object.fromEntries([...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((match) => [match[1],match[2]]));
    if (!alternates['x-default']) errors.push(`${label}: missing x-default hreflang`);
    if (alternates[lang] !== canonical) errors.push(`${label}: self hreflang does not match canonical`);
  }
  for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    let href = match[1];
    if (href.startsWith(`${origin}/`)) href = new URL(href).pathname;
    if (!href.startsWith('/')) continue;
    const pathname = href.split(/[?#]/)[0];
    internalLinkCounts.set(pathname,(internalLinkCounts.get(pathname) ?? 0) + 1);
  }
}

for (const [canonical,page] of indexablePages) {
  const pathname = new URL(canonical).pathname;
  if (!internalLinkCounts.get(pathname)) errors.push(`${page.label}: orphaned canonical has no normal HTML internal link`);
  if (page.lang === 'fa') continue;
  const alternates = Object.fromEntries([...page.html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((match) => [match[1],match[2]]));
  for (const locale of coreLocales.filter((code) => alternates[code])) {
    const target = indexablePages.get(alternates[locale]);
    if (!target) {
      errors.push(`${page.label}: hreflang ${locale} target is not indexable`);
      continue;
    }
    const reciprocal = Object.fromEntries([...target.html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((match) => [match[1],match[2]]));
    if (reciprocal[page.lang] !== canonical) errors.push(`${page.label}: hreflang ${locale} is not reciprocal`);
  }
}

const sitemapFiles = files.filter((file) => /sitemap-\d+\.xml$/.test(file));
const sitemapUrls = sitemapFiles.flatMap((file) =>
  [...readFileSync(file,'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
);
if (new Set(sitemapUrls).size !== sitemapUrls.length) errors.push('sitemap contains duplicate URLs');
for (const url of sitemapUrls) {
  if (!url.startsWith(`${origin}/`) || url.includes('www.') || url.startsWith('http://')) errors.push(`sitemap contains non-canonical URL ${url}`);
  if (!indexablePages.has(url)) errors.push(`sitemap URL is not an indexable self-canonical page: ${url}`);
}
for (const canonical of indexablePages.keys()) {
  if (!sitemapUrls.includes(canonical)) errors.push(`indexable canonical missing from sitemap: ${canonical}`);
}

const redirectsText = readFileSync(join(dist,'_redirects'),'utf8');
const redirects = redirectsText.split(/\r?\n/)
  .map((line) => line.trim()).filter((line) => line && !line.startsWith('#'))
  .map((line) => {
    const [source,target,status] = line.split(/\s+/);
    return {source,target,status};
  });
const redirectsBySource = new Map(redirects.map((item) => [item.source,item]));
for (const redirect of redirects) {
  if (redirect.status !== '301') errors.push(`${redirect.source}: redirect status must be 301`);
  if (redirect.source === redirect.target) errors.push(`${redirect.source}: redirect loop`);
  if (redirectsBySource.has(redirect.target)) errors.push(`${redirect.source}: redirect chain through ${redirect.target}`);
  const targetPath = redirect.target.startsWith('http') ? new URL(redirect.target).pathname : redirect.target;
  if (!builtTargetExists(targetPath)) errors.push(`${redirect.source}: redirect target does not exist (${redirect.target})`);
}

const requiredRedirects = {
  '/tr':'/',
  '/tr/':'/',
  '/sitemap.xml':'/sitemap-index.xml',
  '/en/services/supplier-sourcing-verification/':'/en/services/supplier-sourcing-and-verification/',
  '/en/blog/supply-chain-risk-management/':'/en/insights/supply-chain-risk-management/',
  '/en/blog/total-cost-of-ownership-procurement/':'/en/insights/total-cost-of-ownership/',
  '/tr/blog/toplam-sahip-olma-maliyeti-tco/':'/tr/icgoruler/toplam-sahip-olma-maliyeti/',
  '/tr/kvkk/':'/tr/kvkk-aydinlatma-metni/'
  ,'/fa/tamin-beynolmelali-iran/':'/fa/'
};
for (const [source,target] of Object.entries(requiredRedirects)) {
  const rule = redirectsBySource.get(source);
  if (!rule || rule.target !== target || rule.status !== '301') errors.push(`${source}: required one-hop legacy redirect is missing`);
}
if (sitemapUrls.includes(`${origin}/sitemap.xml`)) errors.push('/sitemap.xml: compatibility redirect must not appear in the sitemap');

const requiredCanonicalPaths = [
  '/','/en/','/en/services/supplier-sourcing-and-verification/','/en/services/strategic-sourcing/',
  '/en/services/international-trade-advisory/','/en/cookie-policy/','/en/privacy-policy/',
  '/tr/hizmetler/uluslararasi-ticaret-danismanligi/','/tr/hizmetler/tedarikci-bulma-ve-dogrulama/',
  '/tr/hizmetler/stratejik-tedarik/'
  ,'/fa/'
];
for (const pathname of requiredCanonicalPaths) {
  if (!indexablePages.has(`${origin}${pathname}`)) errors.push(`${pathname}: required GSC canonical target is missing`);
}

const serviceSchemaPages = [...indexablePages.values()].filter((page) => page.html.includes('"@type":"Service"'));
const blogSchemaPages = [...indexablePages.values()].filter((page) => page.html.includes('"@type":"Blog"'));
const blogPostingPages = [...indexablePages.values()].filter((page) => page.html.includes('"@type":"BlogPosting"'));
if (serviceSchemaPages.length !== 139) errors.push(`expected 139 Service schema pages including homepages, sourcing pages, full catalogue assessments, and full service pages, found ${serviceSchemaPages.length}`);
if (blogSchemaPages.length !== 5) errors.push(`expected 5 Blog schema pages across full-content and Persian locales, found ${blogSchemaPages.length}`);
if (blogPostingPages.length !== 35) errors.push(`expected 35 BlogPosting pages across all 5 full-content locales, found ${blogPostingPages.length}`);

const deploymentHeaders = readFileSync(join(dist,'_headers'),'utf8');
if (/X-Robots-Tag\s*:\s*(?:noindex|none)/i.test(deploymentHeaders)) errors.push('deployment headers contain a blocking X-Robots-Tag');
const robotsTxt = readFileSync(join(dist,'robots.txt'),'utf8');
if (/Disallow:\s*\/(?:\s|$)/i.test(robotsTxt)) errors.push('robots.txt blocks the site');
if (!robotsTxt.includes('Sitemap: https://ctseg.com.tr/sitemap-index.xml')) errors.push('robots.txt has the wrong sitemap URL');

if (errors.length) {
  console.error(`SEO check failed with ${new Set(errors).size} error(s):`);
  for (const error of new Set(errors)) console.error(`- ${error}`);
  process.exit(1);
}
console.log(`SEO check passed: ${indexablePages.size} indexable self-canonical pages, ${sitemapUrls.length} sitemap URLs, ${redirects.length} one-hop 301 rules, reciprocal hreflang and complete schema/metadata checks.`);
