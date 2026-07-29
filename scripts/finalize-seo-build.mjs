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

const original = readFileSync(redirectsFile, 'utf8').trimEnd();
const configuredSources = new Set(
  original.split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'))
    .map((line) => line.split(/\s+/)[0])
);

const slashRedirects = walk(dist)
  .filter((file) => file.endsWith(`${join('', 'index.html')}`))
  .map((file) => relative(dist, file).replaceAll('\\','/').replace(/\/index\.html$/, ''))
  .filter((route) => route && route !== 'index.html' && !route.startsWith('404'))
  .map((route) => `/${route}`)
  .filter((source) => !configuredSources.has(source))
  .sort((a,b) => a.localeCompare(b,'en'))
  .map((source) => `${source} ${source}/ 301`);

const output = `${original}\n\n# Canonical trailing-slash redirects generated from public build routes\n${slashRedirects.join('\n')}\n`;
writeFileSync(redirectsFile, output, 'utf8');
console.log(`Added ${slashRedirects.length} deterministic one-hop trailing-slash redirects to dist/_redirects.`);
