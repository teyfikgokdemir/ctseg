const fs = require('fs');
const dir = 'dist/.prerender/chunks';
const file = fs.readdirSync(dir).filter(f => f.startsWith('routes_'))[0];
const lines = fs.readFileSync(dir + '/' + file, 'utf8').split('\n');

const line = lines[11709]; // 0-indexed for 11710
console.log('Line length:', line.length);
console.log('Substring around 135:', line.substring(125, 145));
console.log('Index of ".map":', line.indexOf('.map'));
console.log('All ".map" indexes:');
let idx = line.indexOf('.map');
while (idx !== -1) {
  console.log(idx, line.substring(idx - 20, idx + 20));
  idx = line.indexOf('.map', idx + 1);
}
