const fs = require('fs');

// 1. site.ts
let site = fs.readFileSync('src/data/site.ts', 'utf8');
site = site.replace(/\r\n/g, '\n');
const siteUk = `  },
  uk: {
    description: 'B2B пошук в Туреччині',
    home: 'Головна',
    markets: 'Ринки',
    products: 'Продукти',
    contact: 'Контакти'
  }
};`;
if (!site.includes('uk: {')) {
  site = site.replace(/  \}\n\};\n/g, siteUk + '\n');
  fs.writeFileSync('src/data/site.ts', site, 'utf8');
}

// 2. trade-platform.ts
let platform = fs.readFileSync('src/data/trade-platform.ts', 'utf8');
platform = platform.replace(/\r\n/g, '\n');
const platformUk = `  },
  uk: {
    name: 'CTSEG Україна',
    home: 'Головна',
    contact: 'Зв\\'язатися',
    assurance: 'Гарантія якості',
    process: ['Крок 1', 'Крок 2', 'Крок 3', 'Крок 4']
  }
};`;
if (!platform.includes('uk: {')) {
  platform = platform.replace(/\n  \}\n\};\n/g, '\n' + platformUk + '\n');
  fs.writeFileSync('src/data/trade-platform.ts', platform, 'utf8');
}

// 3. search-landings.ts
let search = fs.readFileSync('src/data/search-landings.ts', 'utf8');
search = search.replace(/\r\n/g, '\n');
const searchUk = `  },
  uk: {
    'qct-sourcing-turkiye': { eyebrow: 'Пошук', title: 'Пошук в Туреччині', cta: 'Запит' },
    'qct-textile-sourcing-turkiye': { eyebrow: 'Текстиль', title: 'Текстиль', cta: 'Запит' },
    'qct-machinery-sourcing-turkiye': { eyebrow: 'Обладнання', title: 'Обладнання', cta: 'Запит' },
    'qct-medical-sourcing-turkiye': { eyebrow: 'Медицина', title: 'Медицина', cta: 'Запит' },
    'qct-food-sourcing-turkiye': { eyebrow: 'Їжа', title: 'Їжа', cta: 'Запит' },
    'qct-furniture-sourcing-turkiye': { eyebrow: 'Меблі', title: 'Меблі', cta: 'Запит' },
    'qct-automotive-sourcing-turkiye': { eyebrow: 'Авто', title: 'Авто', cta: 'Запит' },
    'qct-construction-sourcing-turkiye': { eyebrow: 'Будівництво', title: 'Будівництво', cta: 'Запит' },
    'qct-chemicals-sourcing-turkiye': { eyebrow: 'Хімія', title: 'Хімія', cta: 'Запит' },
    'qct-electronics-sourcing-turkiye': { eyebrow: 'Електроніка', title: 'Електроніка', cta: 'Запит' },
    'qct-plastics-sourcing-turkiye': { eyebrow: 'Пластик', title: 'Пластик', cta: 'Запит' },
    'qct-packaging-sourcing-turkiye': { eyebrow: 'Упаковка', title: 'Упаковка', cta: 'Запит' },
    'qct-agricultural-sourcing-turkiye': { eyebrow: 'Сільське господарство', title: 'Сільське господарство', cta: 'Запит' },
    'qct-energy-sourcing-turkiye': { eyebrow: 'Енергетика', title: 'Енергетика', cta: 'Запит' },
    'qct-metals-sourcing-turkiye': { eyebrow: 'Метали', title: 'Метали', cta: 'Запит' },
    'qct-mining-sourcing-turkiye': { eyebrow: 'Видобуток', title: 'Видобуток', cta: 'Запит' },
    'qct-logistics-turkiye': { eyebrow: 'Логістика', title: 'Логістика', cta: 'Запит' },
    'qct-customs-turkiye': { eyebrow: 'Митниця', title: 'Митниця', cta: 'Запит' },
    'qct-quality-control-turkiye': { eyebrow: 'Якість', title: 'Якість', cta: 'Запит' }
  }
};`;

if (!search.includes('uk: {')) {
  // search-landings has two objects: searchLandings and searchCopy
  // I'll just append it to searchCopy
  search = search.replace(/\n  \}\n\};\n\nconst landing/g, '\n' + searchUk + '\n\nconst landing');
  fs.writeFileSync('src/data/search-landings.ts', search, 'utf8');
}

console.log('done fixing remaining files');
