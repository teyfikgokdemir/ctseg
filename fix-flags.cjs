const fs = require('fs');
let t = fs.readFileSync('src/components/SiteHeader.astro', 'utf8');

const flagsCode = `const flags: Record<string, string> = {
  tr: '🇹🇷', en: '🇬🇧', de: '🇩🇪', it: '🇮🇹', fa: '🇮🇷',
  ru: '🇷🇺', zh: '🇨🇳', vi: '🇻🇳', uk: '🇺🇦'
};
const globalLocales`;

t = t.replace('const globalLocales', flagsCode);

// Desktop menu
t = t.replace(
  '<span>{code.toUpperCase()}</span>',
  '<span style="font-size: 1.2em;">{flags[code] || code.toUpperCase()}</span>'
);

// Mobile menu
t = t.replace(
  '<span class="lang-code">{code.toUpperCase()}</span>',
  '<span class="lang-code" style="font-size: 1.2em;">{flags[code] || code.toUpperCase()}</span>'
);

// The active language button
t = t.replace(
  '<span class="locale-code">{lang.toUpperCase()}</span>',
  '<span class="locale-code" style="font-size: 1.2em;">{flags[lang] || lang.toUpperCase()}</span>'
);

fs.writeFileSync('src/components/SiteHeader.astro', t);
console.log('Added flags to SiteHeader');
