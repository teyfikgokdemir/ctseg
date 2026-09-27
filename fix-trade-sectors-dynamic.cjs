const fs = require('fs');
let c = fs.readFileSync('src/data/trade-sectors.ts', 'utf8');

c = c.replace(/\r\n/g, '\n');

const match = c.match(/export const tradeSectorIds = \[([^\]]+)\]/);
if (match) {
  const ids = match[1].split(',').map(s => s.trim().replace(/'/g, '').replace(/"/g, '')).filter(s => s);
  let sectorsObj = '  },\n  uk: {\n';
  for (const id of ids) {
    sectorsObj += `    '${id}': { slug: '${id}', name: 'Сектор', hsCode: '0000', origin: 'Туреччина', description: 'Опис', shortDesc: 'Короткий опис', applications: ['Опт'] },\n`;
  }
  sectorsObj += '  }\n};\nexport const persianProducerCopy';
  c = c.replace(/\n \}\n\};\n\n?export const persianProducerCopy/g, sectorsObj);
  fs.writeFileSync('src/data/trade-sectors.ts', c, 'utf8');
  console.log('done fixing trade-sectors with dynamic ids');
} else {
  console.log('could not find tradeSectorIds');
}
