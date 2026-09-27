const fs = require('fs');
const c = fs.readFileSync('src/data/trade-sectors.ts', 'utf8');
const ukIndex = c.lastIndexOf('uk: {');
console.log(c.substring(ukIndex, ukIndex + 500));
