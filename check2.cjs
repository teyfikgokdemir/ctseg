const fs = require('fs');
const t = fs.readFileSync('src/data/search-landings.ts','utf8');
console.log(t.includes('"uk"'));
console.log('all content locales:');
const matches = [...t.matchAll(/"content":\s*\{([\s\S]*?)\}/gm)];
console.log('matches count:', matches.length);
