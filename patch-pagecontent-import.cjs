const fs = require('fs');
let t = fs.readFileSync('src/components/PageContent.astro', 'utf8');

if (!t.includes("import { tradeCorridors }")) {
  t = t.replace(
    "---\n",
    "---\nimport { tradeCorridors } from '../data/trade-corridors';\n"
  );
}

fs.writeFileSync('src/components/PageContent.astro', t);
console.log('done PageContent import patch');
