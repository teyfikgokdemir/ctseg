const fs = require('fs');
const c = fs.readFileSync('src/data/trade-sectors.ts', 'utf8');
const match = c.match(/export const tradeSectorIds = \[([^\]]+)\]/);
if (match) {
  console.log(match[1]);
} else {
  console.log("NOT FOUND");
}
