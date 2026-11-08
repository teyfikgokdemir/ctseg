import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { onRequest } from '../functions/_middleware.js';

const retired = JSON.parse(readFileSync('docs/migrations/2026-11-08-retired-glass-routes.json', 'utf8'));
const baseline = JSON.parse(readFileSync('docs/migrations/2026-11-08-baseline-url-decisions.json', 'utf8'));
const walk = dir => readdirSync(dir, { withFileTypes:true }).flatMap(entry => entry.isDirectory() ? walk(join(dir, entry.name)) : [join(dir, entry.name)]);
for (const record of baseline.filter(record => record.status === 200)) {
  assert(existsSync(join('dist', record.path, 'index.html')), `Retained baseline URL missing: ${record.path}`);
}
const redirects = new Map(readFileSync('dist/_redirects','utf8').split(/\r?\n/).filter(line=>line && !line.startsWith('#')).map(line=>line.trim().split(/\s+/)).map(([source,target,status])=>[source,{target,status}]));
for (const record of baseline.filter(record => record.status === 301)) {
  assert(!existsSync(join('dist',record.path,'index.html')), `Redirect source still emitted: ${record.path}`);
  assert(existsSync(join('dist',record.target,'index.html')), `Redirect target missing: ${record.target}`);
  for (const source of [record.path,record.path.replace(/\/$/,'')]) {
    assert.deepEqual(redirects.get(source),{target:record.target,status:'301'},`Missing direct canonical redirect: ${source}`);
  }
  assert(!redirects.has(record.target),`Redirect chain at ${record.target}`);
}
for (const route of retired) {
  assert(!existsSync(join('dist', route, 'index.html')), `Retired page still emitted: ${route}`);
  for (const path of [route, route.replace(/\/$/, '')]) {
    const response = await onRequest({ request:new Request(`https://ctseg.com.tr${path}`), next:() => { throw Error(`Retired route reached assets: ${path}`); } });
    assert.equal(response.status, 410, path);
    assert.equal(response.headers.get('X-Robots-Tag'), 'noindex');
  }
}
const head = await onRequest({request:new Request('https://ctseg.com.tr/en/glass/', {method:'HEAD'}),next:()=>null});
assert.equal(await head.text(), '');
for (const path of ['/api/contact','/en/industries/packaging/','/en/contact/']) {
  const passthrough = await onRequest({request:new Request(`https://ctseg.com.tr${path}`),next:()=> 'unchanged'});
  assert.equal(passthrough, 'unchanged');
}
for (const file of walk('dist').filter(file => /\.(html|xml)$/.test(file))) {
  const source = readFileSync(file,'utf8');
  assert(!/(?:href|src)=["'][^"']*\/(?:[a-z]{2}\/)?glass(?:\/|["'])/i.test(source), `Retired glass link in ${file}`);
  assert(!/<option\b[^>]*value=["']architectural_glass["']/i.test(source), `Retired glass qualification option in ${file}`);
  if (file.endsWith('.xml')) assert(!/<loc>[^<]*\/glass(?:\/|<)/i.test(source), `Retired glass sitemap URL in ${file}`);
}
console.log(`Portfolio migration passed: ${retired.length} retired URLs, ${baseline.filter(record=>record.status===301).length} direct overview redirects, ${baseline.filter(record=>record.status===200).length} retained URLs; slashless/HEAD HTTP semantics, API passthrough and published link/sitemap checks.`);
