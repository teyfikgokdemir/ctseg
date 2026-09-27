const fs = require('fs');

const ukBlocks = {
  'src/data/site.ts': [
    {
      find: `      emptyInsights: 'Chưa có bài viết nào bằng ngôn ngữ này.'
    }
  };`,
      replace: `      emptyInsights: 'Chưa có bài viết nào bằng ngôn ngữ này.'
    },
    uk: {
      nav: { trade: 'Рішення', markets: 'Ринки', insights: 'Аналітика', company: 'Про нас' },
      actions: { cta: 'Почати', contact: 'Зв\\'язатися', readMore: 'Читати далі' },
      footer: {
        tagline: 'CTSEG B2B Платформа Експорту та Постачання.',
        legal: 'Юридична інформація',
        social: 'Соціальні мережі',
        quickLinks: 'Швидкі посилання'
      }
    }
  };`
    },
    {
      find: `    vi: {
      name: 'CTSEG Global Solutions',
      legal: 'CTSEG Ltd.',
      slogan: 'Tối Ưu Chuỗi Cung Ứng Thổ Nhĩ Kỳ'
    }
  };`,
      replace: `    vi: {
      name: 'CTSEG Global Solutions',
      legal: 'CTSEG Ltd.',
      slogan: 'Tối Ưu Chuỗi Cung Ứng Thổ Nhĩ Kỳ'
    },
    uk: {
      name: 'Глобальні Рішення CTSEG',
      legal: 'ТОВ CTSEG',
      slogan: 'Оптимізація Турецьких Ланцюгів Постачання'
    }
  };`
    },
    {
      find: `    vi: 'Đã đăng ký Bản quyền.'
  };`,
      replace: `    vi: 'Đã đăng ký Bản quyền.',
    uk: 'Всі права захищені.'
  };`
    },
    {
      find: `    vi: 'Đối tác thương mại toàn cầu B2B của bạn.'
  };`,
      replace: `    vi: 'Đối tác thương mại toàn cầu B2B của bạn.',
    uk: 'Глобальний B2B торговий партнер.'
  };`
    }
  ],
  'src/data/trade-platform.ts': [
    {
      find: `    processTitle:'Quy trình minh bạch và chuẩn mực',process:['Xác định yêu cầu','Nghiên cứu thị trường & đối tác','Thẩm định xác minh','Lập RFQ & báo giá','Mẫu thử & điều phối','Quyết định & các bước tiếp theo']
  }
};`,
      replace: `    processTitle:'Quy trình minh bạch và chuẩn mực',process:['Xác định yêu cầu','Nghiên cứu thị trường & đối tác','Thẩm định xác minh','Lập RFQ & báo giá','Mẫu thử & điều phối','Quyết định & các bước tiếp theo']
  },
  uk: {
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
  }
};`
    }
  ],
  'src/data/trade-sectors.ts': [
    {
      find: `    checks: ['Đánh giá thông số kỹ thuật', 'Kiểm tra nhà máy', 'So sánh giá thầu đa nguồn', 'Tuân thủ hải quan']
  }
};`,
      replace: `    checks: ['Đánh giá thông số kỹ thuật', 'Kiểm tra nhà máy', 'So sánh giá thầu đa nguồn', 'Tuân thủ hải quan']
  },
  uk: {
    name: 'Українська',
    home: 'Головна CTSEG',
    contact: 'Надіслати запит',
    related: 'Пов\\'язані галузі',
    assurance: 'Гарантії якості',
    process: 'Контрольований процес',
    checks: ['Аналіз специфікацій', 'Перевірка потужностей', 'Порівняння пропозицій', 'Логістика']
  }
};`
    },
    {
      find: `    'duzce-cam-flat-glass': { slug: 'duzce-cam', eyebrow: 'Düzce Cam', title: 'Kính Phẳng & Gương', description: 'Nguồn cung kính phẳng, kính nhiều lớp và gương từ Düzce Cam cho các dự án quốc tế.', lead: 'Với công suất sản xuất 1500 tấn/ngày, chúng tôi quản lý việc xuất khẩu liên tục kính cường lực và kính kiến trúc từ Thổ Nhĩ Kỳ.', scopeTitle: 'Kính Düzce Cam', items: ['Kính Nổi Trắng', 'Kính Nhiều Lớp', 'Gương Nổi Trắng', 'Sản Phẩm Tùy Chỉnh'], cta: 'Yêu cầu Báo giá Kính' }
  }
};`,
      replace: `    'duzce-cam-flat-glass': { slug: 'duzce-cam', eyebrow: 'Düzce Cam', title: 'Kính Phẳng & Gương', description: 'Nguồn cung kính phẳng, kính nhiều lớp và gương từ Düzce Cam cho các dự án quốc tế.', lead: 'Với công suất sản xuất 1500 tấn/ngày, chúng tôi quản lý việc xuất khẩu liên tục kính cường lực và kính kiến trúc từ Thổ Nhĩ Kỳ.', scopeTitle: 'Kính Düzce Cam', items: ['Kính Nổi Trắng', 'Kính Nhiều Lớp', 'Gương Nổi Trắng', 'Sản Phẩm Tùy Chỉnh'], cta: 'Yêu cầu Báo giá Kính' }
  },
  uk: {
    'iranian-carpets': { slug: 'kylymy', eyebrow: 'Килими', title: 'Постачання килимів', description: 'Надійне постачання.', lead: 'Найкращі килими.', scopeTitle: 'Каталог', items: ['Килими', 'Дизайн', 'Розміри', 'Якість', 'Логістика', 'Митниця'], cta: 'Запит' },
    'silk-carpets': { slug: 'shovkovi-kylymy', eyebrow: 'Шовкові килими', title: 'Шовкові килими', description: 'Оптові поставки.', lead: 'Якісні килими.', scopeTitle: 'Каталог', items: ['Шовк', 'Ручна робота', 'Якість', 'Розміри', 'Логістика', 'Митниця'], cta: 'Запит' },
    'wholesale-textiles': { slug: 'tekstyl', eyebrow: 'Текстиль', title: 'Текстиль оптом', description: 'Постачання текстилю.', lead: 'Оптові партії.', scopeTitle: 'Каталог', items: ['Тканини', 'Дизайн', 'Якість', 'Розміри', 'Логістика', 'Митниця'], cta: 'Запит' },
    'duzce-cam-flat-glass': { slug: 'duzce-cam', eyebrow: 'Скло Duzce', title: 'Листове скло', description: 'Постачання скла з Туреччини.', lead: 'Прямі поставки.', scopeTitle: 'Каталог скла', items: ['Флоат скло', 'Дзеркала', 'Ламіноване', 'Якість', 'Логістика', 'Митниця'], cta: 'Запит' }
  }
};`
    }
  ],
  'src/data/trade-markets.ts': [
    {
      find: `  vi: { contact: 'Yêu cầu đánh giá', home: 'Trang chủ', related: 'Thị trường khác', allMarkets: 'Tất cả thị trường' }
};`,
      replace: `  vi: { contact: 'Yêu cầu đánh giá', home: 'Trang chủ', related: 'Thị trường khác', allMarkets: 'Tất cả thị trường' },
  uk: {
    marketTitle: 'Ринок',
    overview: 'Огляд ринку',
    keySectors: 'Ключові галузі',
    whyUs: 'Чому ми',
    sectorTitle: 'Торгівля',
    supplyTitle: 'Постачання',
    contact: 'Запит',
    home: 'Головна',
    related: 'Інші',
    allMarkets: 'Усі ринки'
  }
};`
    },
    {
      find: `    'macedonia': { slug: 'macedonia', eyebrow: 'Nguồn cung Balkan', title: 'Bắc Macedonia: Cầu nối Thương mại Chiến lược.', description: 'Xuất khẩu hàng dệt may và vật liệu xây dựng sang Bắc Macedonia.', lead: 'Cơ hội thương mại có cấu trúc cho người mua ở Bắc Macedonia.', heading2: 'Logistics hiệu quả', body2: 'Quản lý cung ứng B2B liền mạch tuân thủ các yêu cầu địa phương.', cta: 'Yêu cầu cho Macedonia' }
  }
};`,
      replace: `    'macedonia': { slug: 'macedonia', eyebrow: 'Nguồn cung Balkan', title: 'Bắc Macedonia: Cầu nối Thương mại Chiến lược.', description: 'Xuất khẩu hàng dệt may và vật liệu xây dựng sang Bắc Macedonia.', lead: 'Cơ hội thương mại có cấu trúc cho người mua ở Bắc Macedonia.', heading2: 'Logistics hiệu quả', body2: 'Quản lý cung ứng B2B liền mạch tuân thủ các yêu cầu địa phương.', cta: 'Yêu cầu cho Macedonia' }
  },
  uk: {
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
  }
};`
    }
  ],
  'src/data/search-landings.ts': [
    {
      find: `    'qct-quality-control-turkiye': { eyebrow: 'Chất lượng', title: 'Kiểm soát chất lượng tại Thổ Nhĩ Kỳ', cta: 'Yêu cầu Dịch vụ QC' }
  }
} as unknown as Record<SearchLandingId, {`,
      replace: `    'qct-quality-control-turkiye': { eyebrow: 'Chất lượng', title: 'Kiểm soát chất lượng tại Thổ Nhĩ Kỳ', cta: 'Yêu cầu Dịch vụ QC' }
  },
  uk: {
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
  }
} as unknown as Record<SearchLandingId, {`
    }
  ]
};

for (const [file, replaces] of Object.entries(ukBlocks)) {
  let content = fs.readFileSync(file, 'utf8');
  for (const rep of replaces) {
    if (content.includes(rep.find)) {
      content = content.replace(rep.find, rep.replace);
    } else {
      console.log('WARNING: Could not find block in ' + file);
    }
  }
  fs.writeFileSync(file, content, 'utf8');
  console.log('Patched ' + file);
}
