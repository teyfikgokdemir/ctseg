const fs = require('fs');
let t = fs.readFileSync('src/components/PageContent.astro', 'utf8');
// find where copy is set for products
let idx = t.indexOf('const copy = ');
while (idx !== -1) {
  console.log(t.substring(idx, idx+300));
  console.log('---');
  idx = t.indexOf('const copy = ', idx+1);
}
