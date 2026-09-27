const fs = require('fs');
let t = fs.readFileSync('src/data/site.ts', 'utf8');

// First fix the broken line
t = t.replace(
  "if (key === 'trade-corridor' && id) return pathLang === 'tr' ? /turkey-sourcing-for-/ : //turkey-sourcing-for-/;",
  "if (key === 'trade-corridor' && id) return pathLang === 'tr' ? `/turkey-sourcing-for-${id}/` : `/${pathLang}/turkey-sourcing-for-${id}/`;"
);

fs.writeFileSync('src/data/site.ts', t);
console.log('Fixed site.ts localizedPath');
