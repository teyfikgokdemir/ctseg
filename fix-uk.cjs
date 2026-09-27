const fs = require('fs');
let c = fs.readFileSync('src/data/trade-markets.ts', 'utf8');
c = c.replace(/\r\n/g, '\n');
c = c.replace(/  \},\n\};\n*$/, `  },
  uk: {
    'germany': { slug: 'nimechchyna', eyebrow: 'Ryrok Німеччини', title: 'Постачання до Німеччини', description: 'Експортні рішення.', lead: 'Надійне B2B постачання.', heading2: 'Можливості', body2: 'Оптимізація ланцюгів.', cta: 'Детальніше' },
    'italy': { slug: 'italy', eyebrow: 'Ryrok Італії', title: 'Постачання до Італії', description: 'Експортні рішення.', lead: 'Надійне B2B постачання.', heading2: 'Можливості', body2: 'Оптимізація ланцюгів.', cta: 'Детальніше' },
    'france': { slug: 'france', eyebrow: 'Ryrok Франції', title: 'Постачання до Франції', description: 'Експортні рішення.', lead: 'Надійне B2B постачання.', heading2: 'Можливості', body2: 'Оптимізація ланцюгів.', cta: 'Детальніше' },
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
  }
};`);
fs.writeFileSync('src/data/trade-markets.ts', c, 'utf8');
console.log('done fixing uk');
