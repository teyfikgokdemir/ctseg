const fs = require('fs');
let c = fs.readFileSync('src/data/trade-sectors.ts', 'utf8');

c = c.replace(/\r\n/g, '\n');

const ukBlock = `  },
  uk: {
    'iranian-carpets': { slug: 'iranian-carpets', eyebrow: 'Килими', title: 'Іранські килими', description: 'Опис', lead: 'Лід', scopeTitle: 'Сфера', items: [], cta: 'Запит' },
    'silk-carpets': { slug: 'silk-carpets', eyebrow: 'Килими', title: 'Шовкові килими', description: 'Опис', lead: 'Лід', scopeTitle: 'Сфера', items: [], cta: 'Запит' },
    'wholesale-textiles': { slug: 'wholesale-textiles', eyebrow: 'Текстиль', title: 'Оптовий текстиль', description: 'Опис', lead: 'Лід', scopeTitle: 'Сфера', items: [], cta: 'Запит' },
    'duzce-cam-flat-glass': { slug: 'duzce-cam', eyebrow: 'Скло', title: 'Düzce Cam', description: 'Опис', lead: 'Лід', scopeTitle: 'Сфера', items: [], cta: 'Запит' }
  }
};
export const persianProducerCopy`;

c = c.replace(/\n \}\n\};\n\n?export const persianProducerCopy/g, ukBlock);

fs.writeFileSync('src/data/trade-sectors.ts', c, 'utf8');
console.log('done fixing trade-sectors with hardcoded ids');
