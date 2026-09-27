const fs = require('fs');

let t = fs.readFileSync('src/lib/routes.ts', 'utf8');

if (!t.includes('tradeCorridors')) {
  t = "import { tradeCorridors } from '../data/trade-corridors';\n" + t;
  t = t.replace(
    'for (const id of legalIds)',
    'for (const corridor of tradeCorridors) records.push({ lang, path: `turkey-sourcing-for-${corridor.id}`, key: \'trade-corridor\', id: corridor.id });\n      for (const id of legalIds)'
  );
}

fs.writeFileSync('src/lib/routes.ts', t);
console.log('done routes patch');
