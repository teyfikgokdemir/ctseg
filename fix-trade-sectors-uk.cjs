const fs = require('fs');
let c = fs.readFileSync('src/data/trade-sectors.ts', 'utf8');

c = c.replace(/\r\n/g, '\n');

// Inject uk to tradeUi
c = c.replace(/  \}\n\};\n\nexport const tradeCopy/g, `  },
  uk: {
    title: 'Торговельні сектори',
    description: 'Огляд секторів',
    metaTitle: 'Торговельні сектори',
    metaDescription: 'Огляд торговельних секторів',
    breadcrumbs: [{ label: 'Головна', url: '/uk/' }, { label: 'Сектори', url: '/uk/trade-products/' }],
    contactCta: 'Зв\\'язатися',
    allSectors: 'Всі сектори',
    relatedSectors: 'Пов\\'язані сектори',
    supplierProcess: ['Крок 1', 'Крок 2', 'Крок 3', 'Крок 4']
  }
};

export const tradeCopy`);

// Inject uk to tradeCopy
c = c.replace(/  \}\n\};\n\n?export const persianProducerCopy/g, `  },
  uk: {
    'akbari-pistachio': { slug: 'akbari-pistachio', name: 'Фісташки Акбарі', hsCode: '080251', origin: 'Туреччина', description: 'Опис', shortDesc: 'Короткий опис', applications: ['Снеки'] },
    'kaleghouchi-pistachio': { slug: 'kaleghouchi-pistachio', name: 'Фісташки Калегучі', hsCode: '080251', origin: 'Туреччина', description: 'Опис', shortDesc: 'Короткий опис', applications: ['Снеки'] },
    'fandoghi-pistachio': { slug: 'fandoghi-pistachio', name: 'Фісташки Фандогі', hsCode: '080251', origin: 'Туреччина', description: 'Опис', shortDesc: 'Короткий опис', applications: ['Снеки'] },
    'ahmad-aghaei-pistachio': { slug: 'ahmad-aghaei-pistachio', name: 'Фісташки Ахмад Агаеї', hsCode: '080251', origin: 'Туреччина', description: 'Опис', shortDesc: 'Короткий опис', applications: ['Снеки'] },
    'green-peeled-pistachio': { slug: 'green-peeled-pistachio', name: 'Очищені фісташки', hsCode: '080252', origin: 'Туреччина', description: 'Опис', shortDesc: 'Короткий опис', applications: ['Снеки'] },
    'pistachio-granules': { slug: 'pistachio-granules', name: 'Фісташкові гранули', hsCode: '080252', origin: 'Туреччина', description: 'Опис', shortDesc: 'Короткий опис', applications: ['Снеки'] },
    'mazafati-dates': { slug: 'mazafati-dates', name: 'Фініки Мазафаті', hsCode: '080410', origin: 'Туреччина', description: 'Опис', shortDesc: 'Короткий опис', applications: ['Снеки'] },
    'date-paste-syrup': { slug: 'date-paste-syrup', name: 'Фінікова паста', hsCode: '200799', origin: 'Туреччина', description: 'Опис', shortDesc: 'Короткий опис', applications: ['Снеки'] },
    'raisins': { slug: 'raisins', name: 'Родзинки', hsCode: '080620', origin: 'Туреччина', description: 'Опис', shortDesc: 'Короткий опис', applications: ['Снеки'] },
    'almonds': { slug: 'almonds', name: 'Мигдаль', hsCode: '080212', origin: 'Туреччина', description: 'Опис', shortDesc: 'Короткий опис', applications: ['Снеки'] },
    'walnuts': { slug: 'walnuts', name: 'Волоські горіхи', hsCode: '080232', origin: 'Туреччина', description: 'Опис', shortDesc: 'Короткий опис', applications: ['Снеки'] },
    'dried-apricots-kernels': { slug: 'dried-apricots-kernels', name: 'Курага', hsCode: '081310', origin: 'Туреччина', description: 'Опис', shortDesc: 'Короткий опис', applications: ['Снеки'] },
    'pumpkin-seeds': { slug: 'pumpkin-seeds', name: 'Гарбузове насіння', hsCode: '121299', origin: 'Туреччина', description: 'Опис', shortDesc: 'Короткий опис', applications: ['Снеки'] },
    'sunflower-seeds': { slug: 'sunflower-seeds', name: 'Соняшникове насіння', hsCode: '120600', origin: 'Туреччина', description: 'Опис', shortDesc: 'Короткий опис', applications: ['Снеки'] },
    'saffron': { slug: 'saffron', name: 'Шафран', hsCode: '091020', origin: 'Туреччина', description: 'Опис', shortDesc: 'Короткий опис', applications: ['Снеки'] },
    'dried-mulberries': { slug: 'dried-mulberries', name: 'Сушена шовковиця', hsCode: '081340', origin: 'Туреччина', description: 'Опис', shortDesc: 'Короткий опис', applications: ['Снеки'] },
    'zereshk': { slug: 'zereshk', name: 'Барбарис', hsCode: '081340', origin: 'Туреччина', description: 'Опис', shortDesc: 'Короткий опис', applications: ['Снеки'] },
    'mixed-nuts': { slug: 'mixed-nuts', name: 'Суміш горіхів', hsCode: '081350', origin: 'Туреччина', description: 'Опис', shortDesc: 'Короткий опис', applications: ['Снеки'] },
    'iranian-carpets': { slug: 'iranian-carpets', name: 'Іранські килими', hsCode: '570110', origin: 'Туреччина', description: 'Опис', shortDesc: 'Короткий опис', applications: ['Снеки'] },
    'duzce-cam-flat-glass': { slug: 'duzce-cam-flat-glass', name: 'Düzce Cam Flat Glass', hsCode: '700529', origin: 'Türkiye', description: 'High-quality float glass from Düzce Cam for architectural and industrial applications.', shortDesc: 'Float glass from Düzce Cam.', applications: ['Architecture', 'Automotive', 'Industrial'] }
  }
};
export const persianProducerCopy`);

fs.writeFileSync('src/data/trade-sectors.ts', c, 'utf8');
console.log('done fixing trade-sectors');
