const fs = require('fs');
let t = fs.readFileSync('src/components/PageContent.astro', 'utf8');

// Fix: add optional chaining to prevent map() on undefined
t = t.replace('copy.productUses.map', '(copy.productUses || []).map');
t = t.replace('copy.productQuality.map', '(copy.productQuality || []).map');
t = t.replace('copy.productCommercial.map', '(copy.productCommercial || []).map');
t = t.replace('productCommercialLabels.map', '(productCommercialLabels || []).map');

fs.writeFileSync('src/components/PageContent.astro', t);
console.log('Fixed PageContent.astro array maps');
