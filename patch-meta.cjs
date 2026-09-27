const fs = require('fs');

let t = fs.readFileSync('src/lib/routes.ts', 'utf8');

if (!t.includes("key === 'trade-corridor'")) {
  t = t.replace(
    "if (key === 'how-we-work')",
    "if (key === 'trade-corridor' && id) { const corridor = tradeCorridors.find(c => c.id === id); if (corridor) return { title: corridor.seoMeta.title, description: corridor.seoMeta.description }; }\n    if (key === 'how-we-work')"
  );
}

fs.writeFileSync('src/lib/routes.ts', t);
console.log('done routes getMeta patch');
