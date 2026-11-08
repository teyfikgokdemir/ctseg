import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const dist = resolve('dist');
const redirectsFile = join(dist, '_redirects');
if (!existsSync(dist) || !existsSync(redirectsFile)) {
  throw new Error('dist output or dist/_redirects is missing');
}

const walk = (dir) => readdirSync(dir, { withFileTypes:true }).flatMap((entry) =>
  entry.isDirectory() ? walk(join(dir, entry.name)) : [join(dir, entry.name)]
);

// A retired URL must never ship as a static 200 page (which could bypass the
// edge retirement response on a preview/static host). Fail rather than editing
// generated page content or silently deleting URLs from a generated sitemap.
const retiredPortfolioRoutes = JSON.parse(readFileSync(resolve('docs/migrations/2026-11-08-retired-glass-routes.json'), 'utf8'));
for (const route of retiredPortfolioRoutes) {
  if (existsSync(join(dist, route, 'index.html'))) throw new Error(`Retired portfolio route emitted: ${route}`);
}

const original = readFileSync(redirectsFile, 'utf8').trimEnd();
const configuredSources = new Set(
  original.split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'))
    .map((line) => line.split(/\s+/)[0])
);

const legacySlashlessRedirects = original.split(/\r?\n/)
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith('#'))
  .map((line) => line.split(/\s+/))
  .filter(([source,target,status]) => source?.endsWith('/') && source !== '/' && !source.includes('*') && target && status === '301')
  .map(([source,target]) => [source.slice(0,-1),target])
  .filter(([source]) => source && !configuredSources.has(source))
  .map(([source,target]) => `${source} ${target} 301`);

const slashRedirects = walk(dist)
  .filter((file) => file.endsWith(`${join('', 'index.html')}`))
  .map((file) => relative(dist, file).replaceAll('\\','/').replace(/\/index\.html$/, ''))
  .filter((route) => route && route !== 'index.html' && !route.startsWith('404'))
  .map((route) => `/${route}`)
  .filter((source) => !configuredSources.has(source))
  .sort((a,b) => a.localeCompare(b,'en'))
  .map((source) => `${source} ${source}/ 301`);

const output = `${original}\n\n# Slashless companions for explicit legacy routes\n${legacySlashlessRedirects.join('\n')}\n\n# Canonical trailing-slash redirects generated from public build routes\n${slashRedirects.join('\n')}\n`;
writeFileSync(redirectsFile, output, 'utf8');
console.log(`Added ${legacySlashlessRedirects.length} legacy slashless redirects and ${slashRedirects.length} deterministic canonical trailing-slash redirects to dist/_redirects.`);
