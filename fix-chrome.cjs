const fs = require('fs');
const file = 'src/pages/[lang]/sourcing/[sector].astro';
let t = fs.readFileSync(file, 'utf8');

t = t.replace(/\{chrome\.skip\}/g, "{chrome?.skip || 'Skip to main content'}");
t = t.replace(/\{chrome\.language\}/g, "{chrome?.language || 'Language selection'}");
t = t.replace(/\{chrome\.menu\}/g, "{chrome?.menu || 'Open language menu'}");
t = t.replace(/\{chrome\.close\}/g, "{chrome?.close || 'Close language menu'}");

fs.writeFileSync(file, t);
console.log('Fixed chrome properties');
