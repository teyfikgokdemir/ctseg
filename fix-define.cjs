const fs = require('fs');
const file = 'src/pages/[lang]/sourcing/[sector].astro';
let t = fs.readFileSync(file, 'utf8');
t = t.replace(
  'define:vars={{openLabel:chrome.menu,closeLabel:chrome.close}}',
  "define:vars={{openLabel:chrome?.menu || 'Open language menu',closeLabel:chrome?.close || 'Close language menu'}}"
);
fs.writeFileSync(file, t);
console.log('Fixed define:vars');
