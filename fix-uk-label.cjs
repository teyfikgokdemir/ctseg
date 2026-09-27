const fs = require('fs');
let t = fs.readFileSync('src/data/locales.ts', 'utf8');

t = t.replace("label:'??????????'", "label:'Українська'");

fs.writeFileSync('src/data/locales.ts', t);
console.log('Fixed uk label');
