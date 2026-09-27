const fs = require('fs');
let t = fs.readFileSync('src/data/locales.ts', 'utf8');

const newLocales = `
  { code:'uk', label:'Українська', locale:'uk-UA', direction:'ltr', prefix:'/uk/', ogLocale:'uk_UA', active:true, order:9 },
  { code:'ro', label:'Română', locale:'ro-RO', direction:'ltr', prefix:'/ro/', ogLocale:'ro_RO', active:true, order:10 },
  { code:'bg', label:'Български', locale:'bg-BG', direction:'ltr', prefix:'/bg/', ogLocale:'bg_BG', active:true, order:11 },
  { code:'sr', label:'Srpski', locale:'sr-RS', direction:'ltr', prefix:'/sr/', ogLocale:'sr_RS', active:true, order:12 }
] as const;`;

t = t.replace(/\{\s*code:'uk'.*?\] as const;/s, newLocales.trim());

fs.writeFileSync('src/data/locales.ts', t);
console.log('Added ro, bg, sr to locales.ts');
