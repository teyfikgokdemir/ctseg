const fs = require('fs');

const ukSite = `  uk: {
    nav: { trade: 'Рішення', markets: 'Ринки', insights: 'Аналітика', company: 'Про нас' },
    actions: { cta: 'Почати', contact: 'Зв\\'язатися', readMore: 'Читати далі' },
    footer: {
      tagline: 'CTSEG B2B Платформа Експорту та Постачання.',
      legal: 'Юридична інформація',
      social: 'Соціальні мережі',
      quickLinks: 'Швидкі посилання'
    }
  }`;

const ukCompany = `  uk: {
    name: 'Глобальні Рішення CTSEG',
    legal: 'ТОВ CTSEG',
    slogan: 'Оптимізація Турецьких Ланцюгів Постачання'
  }`;

const ukCopyright = `  uk: 'Всі права захищені.'`;

const ukStatement = `  uk: 'Глобальний B2B торговий партнер.'`;

const ukTradePlatform = `  uk: {
    eyebrow: 'Експорт та Постачання',
    title: 'Надійне В2В постачання з Туреччини',
    lead: 'Комплексні рішення для постачання.',
    buyerCta: 'Знайти постачальника',
    producerCta: 'Вийти на нові ринки',
    pathsTitle: 'Шляхи постачання',
    pathsLead: 'Підтримка імпортерів.',
    buyerTitle: 'Стратегічне постачання',
    buyerText: 'Перевірка якості.',
    producerTitle: 'Експортні рішення',
    producerText: 'Збільшення продажів.',
    sectorsTitle: 'Ключові галузі',
    sectorsLead: 'Вибір галузей.',
    sectors: [
      { title: 'Текстиль', text: 'Постачання текстилю.' },
      { title: 'Будматеріали', text: 'Надійні матеріали.' },
      { title: 'Скло', text: 'Постачання скла.' },
      { title: 'Продукти', text: 'Харчова промисловість.' }
    ],
    corridorsTitle: 'Торгові коридори',
    corridorsLead: 'Зв\\'язок з Туреччиною.',
    corridors: ['Україна - Туреччина', 'Європа - Туреччина', 'Світ - Туреччина', 'Туреччина - Світ'],
    processTitle: 'Прозорий процес',
    process: ['Аналіз вимог', 'Пошук фабрик', 'Перевірка', 'Узгодження', 'Зразки', 'Доставка']
  }`;

const ukTradeUi = `  uk: {
    name: 'Українська',
    home: 'Головна CTSEG',
    contact: 'Надіслати запит',
    related: 'Пов\\'язані галузі',
    assurance: 'Гарантії якості',
    process: 'Контрольований процес',
    checks: ['Аналіз специфікацій', 'Перевірка потужностей', 'Порівняння пропозицій', 'Логістика']
  }`;

const ukTradeCopy = `  uk: {
    'iranian-carpets': { slug: 'kylymy', eyebrow: 'Килими', title: 'Постачання килимів', description: 'Надійне постачання.', lead: 'Найкращі килими.', scopeTitle: 'Каталог', items: ['Килими', 'Дизайн', 'Розміри', 'Якість', 'Логістика', 'Митниця'], cta: 'Запит' },
    'silk-carpets': { slug: 'shovkovi-kylymy', eyebrow: 'Шовкові килими', title: 'Шовкові килими', description: 'Оптові поставки.', lead: 'Якісні килими.', scopeTitle: 'Каталог', items: ['Шовк', 'Ручна робота', 'Якість', 'Розміри', 'Логістика', 'Митниця'], cta: 'Запит' },
    'wholesale-textiles': { slug: 'tekstyl', eyebrow: 'Текстиль', title: 'Текстиль оптом', description: 'Постачання текстилю.', lead: 'Оптові партії.', scopeTitle: 'Каталог', items: ['Тканини', 'Дизайн', 'Якість', 'Розміри', 'Логістика', 'Митниця'], cta: 'Запит' },
    'duzce-cam-flat-glass': { slug: 'duzce-cam', eyebrow: 'Скло Duzce', title: 'Листове скло', description: 'Постачання скла з Туреччини.', lead: 'Прямі поставки.', scopeTitle: 'Каталог скла', items: ['Флоат скло', 'Дзеркала', 'Ламіноване', 'Якість', 'Логістика', 'Митниця'], cta: 'Запит' }
  }`;

const ukMarketUi = `  uk: {
    marketTitle: 'Ринок',
    overview: 'Огляд ринку',
    keySectors: 'Ключові галузі',
    whyUs: 'Чому ми',
    sectorTitle: 'Торгівля',
    supplyTitle: 'Постачання'
  }`;

const ukMarketCopy = `  uk: {
    'germany': { slug: 'nimechchyna', eyebrow: 'Ринок Німеччини', title: 'Постачання до Німеччини', description: 'Експортні рішення.', lead: 'Надійне B2B постачання.', heading2: 'Можливості', body2: 'Оптимізація ланцюгів.', cta: 'Детальніше' },
    'italy': { slug: 'italiya', eyebrow: 'Ринок Італії', title: 'Постачання до Італії', description: 'Експортні рішення.', lead: 'Надійне B2B постачання.', heading2: 'Можливості', body2: 'Оптимізація ланцюгів.', cta: 'Детальніше' },
    'france': { slug: 'frantsiya', eyebrow: 'Ринок Франції', title: 'Постачання до Франції', description: 'Експортні рішення.', lead: 'Надійне B2B постачання.', heading2: 'Можливості', body2: 'Оптимізація ланцюгів.', cta: 'Детальніше' },
    'uk': { slug: 'velykobrytaniya', eyebrow: 'Ринок Великої Британії', title: 'Постачання до Великої Британії', description: 'Експортні рішення.', lead: 'Надійне B2B постачання.', heading2: 'Можливості', body2: 'Оптимізація ланцюгів.', cta: 'Детальніше' },
    'netherlands': { slug: 'niderlandy', eyebrow: 'Ринок Нідерландів', title: 'Постачання до Нідерландів', description: 'Експортні рішення.', lead: 'Надійне B2B постачання.', heading2: 'Можливості', body2: 'Оптимізація ланцюгів.', cta: 'Детальніше' },
    'poland': { slug: 'polshcha', eyebrow: 'Ринок Польщі', title: 'Постачання до Польщі', description: 'Експортні рішення.', lead: 'Надійне B2B постачання.', heading2: 'Можливості', body2: 'Оптимізація ланцюгів.', cta: 'Детальніше' },
    'uae': { slug: 'oae', eyebrow: 'Ринок ОАЕ', title: 'Постачання до ОАЕ', description: 'Експортні рішення.', lead: 'Надійне B2B постачання.', heading2: 'Можливості', body2: 'Оптимізація ланцюгів.', cta: 'Детальніше' },
    'saudi-arabia': { slug: 'saudivska-araviya', eyebrow: 'Ринок Саудівської Аравії', title: 'Постачання до Саудівської Аравії', description: 'Експортні рішення.', lead: 'Надійне B2B постачання.', heading2: 'Можливості', body2: 'Оптимізація ланцюгів.', cta: 'Детальніше' },
    'iran': { slug: 'iran', eyebrow: 'Ринок Ірану', title: 'Постачання до Ірану', description: 'Експортні рішення.', lead: 'Надійне B2B постачання.', heading2: 'Можливості', body2: 'Оптимізація ланцюгів.', cta: 'Детальніше' },
    'russia': { slug: 'rosiya', eyebrow: 'Ринок Росії', title: 'Постачання до Росії', description: 'Експортні рішення.', lead: 'Надійне B2B постачання.', heading2: 'Можливості', body2: 'Оптимізація ланцюгів.', cta: 'Детальніше' },
    'china': { slug: 'kytay', eyebrow: 'Ринок Китаю', title: 'Постачання до Китаю', description: 'Експортні рішення.', lead: 'Надійне B2B постачання.', heading2: 'Можливості', body2: 'Оптимізація ланцюгів.', cta: 'Детальніше' },
    'vietnam': { slug: 'vyetnam', eyebrow: 'Ринок В\\'єтнаму', title: 'Постачання до В\\'єтнаму', description: 'Експортні рішення.', lead: 'Надійне B2B постачання.', heading2: 'Можливості', body2: 'Оптимізація ланцюгів.', cta: 'Детальніше' },
    'india': { slug: 'indiya', eyebrow: 'Ринок Індії', title: 'Постачання до Індії', description: 'Експортні рішення.', lead: 'Надійне B2B постачання.', heading2: 'Можливості', body2: 'Оптимізація ланцюгів.', cta: 'Детальніше' },
    'albania': { slug: 'albaniya', eyebrow: 'Постачання на Балкани', title: 'Ринок Албанії: Надійне постачання B2B.', description: 'Безперебійний ланцюг поставок.', lead: 'Ми забезпечуємо стратегічні поставки.', heading2: 'Прямі рішення для Албанії', body2: 'Гнучкі експортні операції.', cta: 'Запит для Албанії' },
    'serbia': { slug: 'serbiya', eyebrow: 'Постачання на Балкани', title: 'Ринок Сербії: B2B-експорт.', description: 'Постачання промислової сировини.', lead: 'Стратегічні рішення для підприємств Сербії.', heading2: 'Міст для сербської промисловості', body2: 'Зв\\'язок покупців з турецькими виробниками.', cta: 'Запит для Сербії' },
    'macedonia': { slug: 'makedoniya', eyebrow: 'Постачання на Балкани', title: 'Північна Македонія: Торговий міст.', description: 'Експорт текстилю.', lead: 'Торгові можливості для покупців у Північній Македонії.', heading2: 'Ефективна логістика', body2: 'Керування постачанням B2B.', cta: 'Запит для Македонії' }
  }`;

const ukSearchLandings = `  uk: {
    'qct-sourcing-turkiye': { eyebrow: 'Пошук', title: 'Пошук надійних виробників', cta: 'Знайти' },
    'qct-textile-sourcing-turkiye': { eyebrow: 'Текстиль', title: 'Оптовий текстиль', cta: 'Запит' },
    'qct-machinery-sourcing-turkiye': { eyebrow: 'Обладнання', title: 'Постачання обладнання', cta: 'Запит' },
    'qct-medical-sourcing-turkiye': { eyebrow: 'Медицина', title: 'Медичні товари', cta: 'Запит' },
    'qct-food-sourcing-turkiye': { eyebrow: 'Продукти', title: 'Постачання продуктів', cta: 'Запит' },
    'qct-furniture-sourcing-turkiye': { eyebrow: 'Меблі', title: 'Меблі оптом', cta: 'Запит' },
    'qct-automotive-sourcing-turkiye': { eyebrow: 'Авто', title: 'Постачання автозапчастин', cta: 'Запит' },
    'qct-construction-sourcing-turkiye': { eyebrow: 'Будматеріали', title: 'Будівельні матеріали', cta: 'Запит' },
    'qct-chemicals-sourcing-turkiye': { eyebrow: 'Хімія', title: 'Хімічна сировина', cta: 'Запит' },
    'qct-electronics-sourcing-turkiye': { eyebrow: 'Електроніка', title: 'Електроніка', cta: 'Запит' },
    'qct-plastics-sourcing-turkiye': { eyebrow: 'Пластик', title: 'Постачання пластику', cta: 'Запит' },
    'qct-packaging-sourcing-turkiye': { eyebrow: 'Пакування', title: 'Пакувальні матеріали', cta: 'Запит' },
    'qct-agricultural-sourcing-turkiye': { eyebrow: 'Агро', title: 'Аграрна продукція', cta: 'Запит' },
    'qct-energy-sourcing-turkiye': { eyebrow: 'Енергетика', title: 'Енергетичне обладнання', cta: 'Запит' },
    'qct-metals-sourcing-turkiye': { eyebrow: 'Метали', title: 'Постачання металів', cta: 'Запит' },
    'qct-mining-sourcing-turkiye': { eyebrow: 'Видобуток', title: 'Гірничодобувна продукція', cta: 'Запит' },
    'qct-logistics-turkiye': { eyebrow: 'Логістика', title: 'Логістичні послуги', cta: 'Запит' },
    'qct-customs-turkiye': { eyebrow: 'Митниця', title: 'Митне оформлення', cta: 'Запит' },
    'qct-quality-control-turkiye': { eyebrow: 'Якість', title: 'Контроль якості', cta: 'Запит' }
  }`;

function insertAfterVi(filepath, constName, newBlock) {
  let content = fs.readFileSync(filepath, 'utf8');
  const parts = content.split('export const ' + constName);
  if (parts.length < 2) {
    console.log('Could not find ' + constName + ' in ' + filepath);
    return;
  }
  
  let before = parts[0];
  let after = 'export const ' + constName + parts[1];
  
  const objMatch = after.match(/=.*?\{/s);
  if (!objMatch) {
    console.log('Object start not found for ' + constName);
    return;
  }
  
  let startIdx = objMatch.index + objMatch[0].length;
  let braceCount = 1;
  let idx = startIdx;
  
  while (idx < after.length && braceCount > 0) {
    if (after[idx] === '{') braceCount++;
    else if (after[idx] === '}') braceCount--;
    idx++;
  }
  
  let insertPos = idx - 1; // This is the closing '}'

  // Step backwards past any spaces, newlines, or commas
  while (insertPos > 0) {
    let char = after[insertPos - 1];
    if (char === ' ' || char === '\\n' || char === '\\r' || char === ',') {
      insertPos--;
    } else {
      break;
    }
  }

  // Now insertPos points to the character exactly AFTER the last real character of the last property (e.g. `}`)
  const nl = "`n";
  const newAfter = after.substring(0, insertPos) + "," + nl + newBlock + nl + after.substring(idx - 1); // Note: we re-attach the rest starting from the `}`

  fs.writeFileSync(filepath, before + newAfter, 'utf8');
  console.log('Patched ' + constName + ' in ' + filepath);
}

insertAfterVi('src/data/site.ts', 'ui', ukSite);
insertAfterVi('src/data/site.ts', 'companyCopy', ukCompany);
insertAfterVi('src/data/site.ts', 'copyrightMap', ukCopyright);
insertAfterVi('src/data/site.ts', 'statementMap', ukStatement);
insertAfterVi('src/data/trade-platform.ts', 'tradePlatformCopy', ukTradePlatform);
insertAfterVi('src/data/trade-sectors.ts', 'tradeUi', ukTradeUi);
insertAfterVi('src/data/trade-sectors.ts', 'tradeCopy', ukTradeCopy);
insertAfterVi('src/data/trade-markets.ts', 'marketUi', ukMarketUi);
insertAfterVi('src/data/trade-markets.ts', 'marketCopy', ukMarketCopy);
insertAfterVi('src/data/search-landings.ts', 'searchLandings', ukSearchLandings);
