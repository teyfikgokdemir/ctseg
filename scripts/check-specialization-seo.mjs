import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const source = readFileSync('src/data/industry-specializations.ts', 'utf8');
const topics = JSON.parse(source.slice(source.indexOf('= [') + 2, source.indexOf('\n];') + 2));
const locales = ['tr','en','de','it','fa','ru','zh','vi','uk','ro','bg','he','ar'];
const origin = 'https://ctseg.com.tr';
const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };
check(topics.length === 24, 'Expected the existing 24 topics, without page expansion');
check(new Set(topics.map(s => `${s.industryId}/${s.id}`)).size === topics.length, 'Duplicate specialization routes');
const pages = new Map();
const getPage = (lang, topic) => {
  const file = `dist/${lang}/industries/${topic.industryId}/${topic.id}/index.html`;
  if (!pages.has(file)) pages.set(file, readFileSync(file, 'utf8'));
  return pages.get(file);
};
const alternates = html => Object.fromEntries([...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map(m => [m[1], m[2]]));
for (const topic of topics) {
  for (const lang of locales) {
    const label = `${lang}/${topic.id}`;
    const copy = topic.content[lang];
    const html = getPage(lang, topic);
    const canonical = `${origin}/${lang}/industries/${topic.industryId}/${topic.id}/`;
    const title = html.match(/<title>(.*?)<\/title>/)?.[1] || '';
    check((title.match(/CTSEG/g) || []).length === 1, `${label}: duplicated title branding`);
    if (lang !== 'en') {
      for (const key of ['h1','metaDescription','lead','overview','categories','technicalSpecs','evaluationCriteria','productionAndMoq','logisticsAndCompliance']) {
        check(JSON.stringify(copy[key]) !== JSON.stringify(topic.content.en[key]), `${label}: English fallback in ${key}`);
      }
    }
    check(!copy.productionAndMoq.some(s => /\d/.test(s)), `${label}: unsupported numeric production/MOQ claim`);
    check(!copy.logisticsAndCompliance.some(s => /\d/.test(s)), `${label}: unsupported numeric logistics claim`);
    const links = alternates(html);
    check(links[lang] === canonical, `${label}: self alternate`);
    check(links['x-default'] === `${origin}/en/industries/${topic.industryId}/${topic.id}/`, `${label}: x-default`);
    for (const other of locales) {
      const target = `${origin}/${other}/industries/${topic.industryId}/${topic.id}/`;
      check(links[other] === target && alternates(getPage(other,topic))[lang] === canonical, `${label}: reciprocal ${other}`);
    }
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(m => JSON.parse(m[1]));
    const service = schemas.find(s => s['@type'] === 'Service');
    check(service?.url === canonical && service?.provider?.['@id'] === `${origin}/#organization`, `${label}: service identity`);
    check(!schemas.some(s => s['@type'] === 'Product'), `${label}: Product schema`);
    const breadcrumb = schemas.find(s => s['@type'] === 'BreadcrumbList');
    check(breadcrumb?.itemListElement?.length === 4, `${label}: breadcrumb schema`);
    check(html.includes('name="twitter:image"'), `${label}: Twitter image`);
    if (topic.image.src.startsWith('/images/global-sourcing/')) {
      check(html.includes(`${topic.image.src.replace('-1280.webp','-640.webp')} 640w`), `${label}: responsive category image`);
    }
    check(/href="[^\"]+intent=buyer_request[^\"]*"/.test(html), `${label}: buyer request path`);
    const processSection = html.match(/<section[^>]*class="section spec-process-section"[\s\S]*?<\/section>/)?.[0] || '';
    const serviceLinks = [...processSection.matchAll(/href="(\/[^\"]+\/solutions\/[^\"]+\/)"/g)].map(m => m[1]);
    check(serviceLinks.length > 0, `${label}: contextual sourcing service link`);
    for (const link of serviceLinks) check(existsSync(`dist${link}index.html`), `${label}: invalid contextual service ${link}`);
    check(!html.includes('href="/tr/"'), `${label}: noncanonical Turkish root link`);
  }
}
for (const file of ['public/llms.txt','public/ai-fact-sheet.md','public/ai-fact-sheet.txt']) {
  const text = readFileSync(file, 'utf8');
  for (const id of ['vietnam-textiles','korean-cosmetics','poultry-equipment','pumps-valves']) check(text.includes(`/${id}/`), `${file}: missing ${id} discovery link`);
}
for (const topic of topics) check(existsSync(`dist/en/industries/${topic.industryId}/${topic.id}/index.html`), topic.id);
assert.equal(errors.length, 0, `Specialization SEO defects (${errors.length}):\n${errors.slice(0,80).join('\n')}`);
console.log(`Specialization SEO passed: ${topics.length} topics × ${locales.length} locales, all-locale reciprocity, localized content, qualified commercial copy, schema, social and service pathways.`);
