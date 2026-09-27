const fs = require('fs');

let c = fs.readFileSync('src/data/trade-platform.ts', 'utf8');
c = c.replace(/\r\n/g, '\n');

c = c.replace(/corridorsLead: 'Ми об'єднуємо глобальні ринки.'/, "corridorsLead: 'Ми об\\'єднуємо глобальні ринки.'");
fs.writeFileSync('src/data/trade-platform.ts', c, 'utf8');
console.log('done fixing quote');
