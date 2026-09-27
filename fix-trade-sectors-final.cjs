const fs = require('fs');
let c = fs.readFileSync('src/data/trade-sectors.ts', 'utf8');

c = c.replace(/\r\n/g, '\n');

const ukIdx = c.lastIndexOf('uk: {');
const nextIdx = c.indexOf('export const persianProducerCopy', ukIdx);

const newUkBlock = `uk: {
    'iranian-carpets': { slug: 'iranian-carpets', eyebrow: 'Килими', title: 'Іранські килими', description: 'Опис', lead: 'Лід', scopeTitle: 'Сфера', items: [], cta: 'Запит' },
    'silk-carpets': { slug: 'silk-carpets', eyebrow: 'Килими', title: 'Шовкові килими', description: 'Опис', lead: 'Лід', scopeTitle: 'Сфера', items: [], cta: 'Запит' },
    'wholesale-textiles': { slug: 'wholesale-textiles', eyebrow: 'Текстиль', title: 'Оптовий текстиль', description: 'Опис', lead: 'Лід', scopeTitle: 'Сфера', items: [], cta: 'Запит' },
    'duzce-cam-flat-glass': { slug: 'duzce-cam-flat-glass', eyebrow: 'Скло', title: 'Düzce Cam', description: 'Опис', lead: 'Лід', scopeTitle: 'Сфера', items: [], cta: 'Запит' }
  }
};
`;

c = c.substring(0, ukIdx) + newUkBlock + c.substring(nextIdx);

fs.writeFileSync('src/data/trade-sectors.ts', c, 'utf8');
console.log('done fixing trade-sectors permanently');
