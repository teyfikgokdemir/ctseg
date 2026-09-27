const fs = require('fs');
let t = fs.readFileSync('src/components/PageContent.astro', 'utf8');
// Find where copy.productUses is set
let idx = t.indexOf('productUses');
while (idx !== -1) {
  console.log(t.substring(Math.max(0,idx-100), idx+200));
  console.log('---');
  idx = t.indexOf('productUses', idx+1);
}
