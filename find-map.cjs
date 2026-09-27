const fs = require('fs');
let t = fs.readFileSync('src/components/PageContent.astro', 'utf8');
// Find where product is rendered and look for '.certifications' or similar array
let idx = t.indexOf('product.certifications');
if (idx === -1) idx = t.indexOf('product.applications');
if (idx === -1) idx = t.indexOf('{...product}');
console.log('found at:', idx);
if (idx > 0) {
  let searchArea = t.substring(Math.max(0, idx-200), idx+300);
  console.log(searchArea);
}
// Also check what maps on product
let maps = [];
let pos = 0;
while (true) {
  let m = t.indexOf('.map(', pos);
  if (m === -1) break;
  maps.push({pos: m, ctx: t.substring(Math.max(0,m-100), m+50)});
  pos = m + 1;
}
console.log('Total .map() calls:', maps.length);
// Find the one related to product
for (let m of maps) {
  if (m.ctx.includes('product') || m.ctx.includes('certif') || m.ctx.includes('applic')) {
    console.log('PRODUCT MAP:', m.ctx);
  }
}
