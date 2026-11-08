import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
const run = (args, xml, expectedPosts) => spawnSync(process.execPath, ['--input-type=module','-e', `
  import assert from 'node:assert/strict';
  process.argv = ['node', 'scripts/indexnow-submit.mjs', ...${JSON.stringify(args)}];
  let posts = 0;
  globalThis.fetch = async (url, options = {}) => {
    assert.equal(new URL(url).origin, options.method === 'POST' ? 'https://api.indexnow.org' : 'https://ctseg.com.tr');
    if (options.method === 'POST') {
      posts++;
      const payload = JSON.parse(options.body);
      assert.deepEqual(payload.urlList, ['https://ctseg.com.tr/en/']);
      return new Response('', {status:202});
    }
    return new Response(${JSON.stringify(xml)});
  };
  await import('./scripts/indexnow-submit.mjs');
  assert.equal(posts, ${expectedPosts});
`], {encoding:'utf8'});
const valid = '<urlset><url><loc>https://ctseg.com.tr/en/</loc></url></urlset>';
for (const [args, posts] of [[['--dry-run'],0], [[],1]]) {
  const result = run(args, valid, posts);
  assert.equal(result.status, 0, result.stderr);
}
for (const args of [
  ['https://preview.ctseg.pages.dev/sitemap-index.xml','--dry-run'],
  ['http://ctseg.com.tr/sitemap-index.xml','--dry-run'],
  ['https://ctseg.com.tr.evil.test/sitemap-index.xml','--dry-run']
]) {
  const result = run(args, valid, 0);
  assert.notEqual(result.status, 0, 'Non-production sitemap accepted');
  assert.match(result.stderr, /Production sitemap required/);
}
const nested = run(['--dry-run'], '<sitemapindex><sitemap><loc>https://preview.ctseg.pages.dev/sitemap.xml</loc></sitemap></sitemapindex>', 0);
assert.notEqual(nested.status, 0);
assert.match(nested.stderr, /Production sitemap required/);
console.log('IndexNow passed: dry-run sends no POST, mocked production 202, preview/HTTP/lookalike/nested sitemap rejection. All network mocked.');
