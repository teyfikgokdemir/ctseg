const fs = require('fs');
let t = fs.readFileSync('src/data/site.ts', 'utf8');

t = t.replace(
  "if (key === 'trade-corridor' && id) return pathLang === 'tr' ? `/turkey-sourcing-for-${id}/` : `/${pathLang}/turkey-sourcing-for-${id}/`;",
  "if (key === 'trade-corridor' && id) return `/${pathLang}/turkey-sourcing-for-${id}/`;"
);

fs.writeFileSync('src/data/site.ts', t);
console.log('Fixed site.ts localizedPath for trade-corridor');
