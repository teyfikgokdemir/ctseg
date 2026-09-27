const fs = require('fs');
let t = fs.readFileSync('src/lib/routes.ts', 'utf8');

// Fix all lang-indexed data accesses to fall back to 'en'
t = t.replace(/products\[lang\]/g, "(products[lang] || products['en'])");
t = t.replace(/insights\[lang\]/g, "(insights[lang] || insights['en'])");
t = t.replace(/services\[lang\]/g, "(services[lang] || services['en'])");
t = t.replace(/sectionSlugs\[lang\]/g, "(sectionSlugs[lang] || sectionSlugs['en'])");

fs.writeFileSync('src/lib/routes.ts', t);
console.log('Fixed all lang-indexed data accesses in routes.ts');
