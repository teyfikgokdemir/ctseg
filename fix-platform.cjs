const fs = require('fs');

let c = fs.readFileSync('src/data/trade-platform.ts', 'utf8');
c = c.replace(/\r\n/g, '\n');

const correctUk = `uk: {
    eyebrow: 'CTSEG Україна',
    title: 'З України у світ. Зі світу в Україну.',
    lead: 'CTSEG керує виходом компаній на нові ринки та зустріччю з правильними виробниками, постачальниками та корпоративними покупцями.',
    buyerCta: 'Шукаю постачальника',
    producerCta: 'Хочу вийти на новий ринок',
    pathsTitle: 'Ваш комерційний шлях',
    pathsLead: 'Ми структуруємо вашу операційну модель для досягнення цілей.',
    buyerTitle: 'Для покупців',
    buyerText: 'Надійне джерело.',
    producerTitle: 'Для виробників',
    producerText: 'Міжнародне зростання.',
    sectorsTitle: 'Сектори',
    sectorsLead: 'Ми працюємо з ключовими індустріями.',
    sectors: [
      {title: 'Промисловість', text: 'Сировина та обладнання'},
      {title: 'Текстиль', text: 'Одяг та тканини'},
      {title: 'Продукти харчування', text: 'Сільське господарство'}
    ],
    corridorsTitle: 'Торгові коридори',
    corridorsLead: 'Ми об\'єднуємо глобальні ринки.',
    corridors: ['Україна - Туреччина', 'Європа - Азія', 'Близький Схід'],
    processTitle: 'Процес',
    process: ['Визначення вимог', 'Пошук', 'Перевірка', 'Замовлення']
  }`;

c = c.replace(/uk: \{\s*name: 'CTSEG Україна'[\s\S]*?process: \['Крок 1', 'Крок 2', 'Крок 3', 'Крок 4'\]\s*\}/, correctUk);
fs.writeFileSync('src/data/trade-platform.ts', c, 'utf8');
console.log('done fixing trade-platform uk');
