const fs = require('fs');
let t = fs.readFileSync('src/lib/routes.ts', 'utf8');

t = t
  .replace(/= pageCopy\[lang\];/g, "= pageCopy[lang] || pageCopy['en'];")
  .replace(/= ui\[lang\];/g, "= ui[lang] || ui['en'];");

fs.writeFileSync('src/lib/routes.ts', t);
console.log('Fixed routes.ts fallbacks');
