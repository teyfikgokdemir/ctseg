const fs = require('fs');
let t = fs.readFileSync('src/components/SiteHeader.astro', 'utf8');

t = t.replace(
  "vi: '🇻🇳', uk: '🇺🇦'",
  "vi: '🇻🇳', uk: '🇺🇦', ro: '🇷🇴', bg: '🇧🇬', sr: '🇷🇸'"
);

fs.writeFileSync('src/components/SiteHeader.astro', t);
console.log('Fixed SiteHeader.astro');
