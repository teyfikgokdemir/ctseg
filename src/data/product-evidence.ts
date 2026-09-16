import type { Locale } from './locales';
import type { productIds } from './site';

export interface ProductCommercialSpec {
  origin: Record<Locale, string>;
  variety: Record<Locale, string>;
  packaging: Record<Locale, string>;
  moq: Record<Locale, string>;
  qualityDocs: Record<Locale, string>;
  samplePolicy: Record<Locale, string>;
  privateLabel: Record<Locale, string>;
  incoterms: Record<Locale, string>;
  leadTime: Record<Locale, string>;
  storage: Record<Locale, string>;
  intendedUse: Record<Locale, string>;
  quoteRequirements: Record<Locale, string>;
}

export const productEvidence: Record<(typeof productIds)[number], ProductCommercialSpec> = {
  'akbari-pistachio': {
    origin: {
      tr: 'İran (Kerman / Rafsanjan / Anar bahçeleri)',
      en: 'Iran (Kerman / Rafsanjan / Anar orchards)',
      de: 'Iran (Regionen Kerman / Rafsandschan / Anar)',
      it: 'Iran (Regioni di Kerman / Rafsanjan / Anar)',
      ru: 'Иран (сады Керман / Рафсанджан / Анар)',
      fa: 'ایران (باغات رفسنجان، کرمان و انار)',
      zh: '伊朗原产地（克尔曼省 / 拉夫桑詹 / 阿纳尔专属产区）',
      vi: 'Iran (Vùng trồng Kerman / Rafsanjan / Anar)'
    },
    variety: {
      tr: 'Akbari Süper Uzun Fıstık (20/22, 22/24 kalibre), doğal açık ağız (%95+), ham veya kavrulmuş',
      en: 'Akbari Super Long Pistachio (calibers 20/22, 22/24), natural open-mouth (95%+), raw or roasted',
      de: 'Akbari Super Long Pistazien (Kaliber 20/22, 22/24), natürlich geöffnet (95%+), roh oder geröstet',
      it: 'Pistacchio Akbari Super Long (calibri 20/22, 22/24), apertura naturale (95%+), crudo o tostato',
      ru: 'Фисташки Акбари Супер Лонг (калибры 20/22, 22/24), естественное раскрытие (95%+), сырые или обжаренные',
      fa: 'پسته اکبری اعلا سوپر بلند (انس ۲۰/۲۲ و ۲۲/۲۴)، خندان طبیعی (+۹۵٪)، خام یا بوداده',
      zh: '特级阿克巴里长粒开心果 (规格 20/22、22/24)，自然开壳率 95% 以上，原味生粒或定制烘烤',
      vi: 'Hạt dẻ cười Akbari hạt dài cao cấp (cỡ hạt 20/22, 22/24), mở tự nhiên (95%+), sống hoặc rang chín'
    },
    packaging: {
      tr: '10 kg ve 25 kg vakumlu gıda torbaları, dış karton koli; 50 kg dökme polipropilen çuval',
      en: '10 kg & 25 kg food-grade vacuum pouches in master cartons; 50 kg bulk PP woven bags',
      de: '10 kg & 25 kg lebensmittelechte Vakuumbeutel im Umkarton; 50 kg PP-Gewebesäcke',
      it: 'Buste sottovuoto per alimenti da 10 kg e 25 kg in cartone master; sacchi PP da 50 kg sfusi',
      ru: 'Пищевые вакуумные пакеты по 10 кг и 25 кг в гофрокоробах; мешки полипропиленовые по 50 кг',
      fa: 'کارتن‌های وکیوم ۱۰ و ۲۵ کیلوگرمی استاندارد صادراتی؛ کیسه‌های ۵۰ کیلویی لمینت',
      zh: '10 公斤与 25 公斤食品级充氮真空内袋外配高强出口纸箱；50 公斤大宗聚丙烯编织袋',
      vi: 'Túi hút chân không thực phẩm 10 kg & 25 kg trong thùng carton; bao dệt PP 50 kg số lượng lớn'
    },
    moq: {
      tr: '1 Metrik Ton (LCL deneme konsolidasyonu) / 1x20\' FCL (yaklaşık 15-18 MT)',
      en: '1 Metric Ton (LCL trial consolidation) / 1x20\' FCL (approx. 15-18 MT)',
      de: '1 Tonne (LCL-Probemischung) / 1x20\' FCL (ca. 15-18 t)',
      it: '1 Tonnellata (consolidamento prova LCL) / 1x20\' FCL (ca. 15-18 t)',
      ru: '1 метрическая тонна (сборный груз LCL) / 1x20\' FCL (около 15-18 т)',
      fa: '۱ تن متریک (تلفیق آزمایشی خرده‌بار LCL) / ۱ کانتینر ۲۰ فوت (حدود ۱۵ الی ۱۸ تن)',
      zh: '1 公吨（拼箱样品试单） / 1 个 20 尺整柜 FCL（约 15 至 18 公吨大宗直运）',
      vi: '1 tấn (ghép đơn thử nghiệm LCL) / 1 container 20 feet FCL (khoảng 15-18 tấn)'
    },
    qualityDocs: {
      tr: 'Parti Analiz Sertifikası (COA), Bitki Sağlık Sertifikası, Akredite Aflatoksin (B1+Toplam) Raporu, Menşe Şahadetnamesi',
      en: 'Batch Certificate of Analysis (COA), Phytosanitary Certificate, Accredited Aflatoxin (B1+Total) Lab Report, Certificate of Origin',
      de: 'Chargenprüfbericht (COA), Pflanzengesundheitszeugnis, akkreditiertes Aflatoxin-Laborzertifikat (B1+Gesamt), Ursprungszeugnis',
      it: 'Certificato di analisi del lotto (COA), Certificato fitosanitario, Rapporto aflatossine accreditato (B1+totale), Certificato d’origine',
      ru: 'Сертификат анализа партии (COA), фитосанитарный сертификат, аккредитованный протокол на афлатоксины (B1+Total), сертификат происхождения',
      fa: 'گواهی آنالیز آزمایشگاهی (COA)، گواهی بهداشت نباتی، برگه آزمایشگاه معتبر آفلاتوکسین (B1 و کل)، گواهی مبدأ',
      zh: '批次第三方化验单 (COA)、出入境植物检疫证书、符合欧盟及国际标准的黄曲霉毒素检测报告 (B1及总量)、官方原产地证',
      vi: 'Chứng nhận phân tích lô hàng (COA), Giấy chứng nhận kiểm dịch thực vật, Báo cáo xét nghiệm Aflatoxin kiểm định, Chứng nhận xuất xứ'
    },
    samplePolicy: {
      tr: 'Doğrulanmış kurumsal alıcılar için 500g ticari değerlendirme numunesi hava kargo ile sağlanır',
      en: '500g commercial evaluation sample dispatched via air courier for verified corporate buyers',
      de: '500 g kaufmännisches Bewertungsmuster per Luftfracht für verifizierte Unternehmenskunden',
      it: 'Campione di valutazione commerciale da 500 g inviato via corriere aereo per acquirenti verificati',
      ru: 'Коммерческий образец 500 г отправляется курьерской авиадоставкой для верифицированных компаний',
      fa: 'نمونه تجاری ۵۰۰ گرمی جهت بررسی کیفی خریداران شرکتی معتبر از طریق پست هوایی ارسال می‌شود',
      zh: '对具备资质的企业买家可提供 500 克航空快递商业品质核验样品',
      vi: 'Mẫu đánh giá thương mại 500g gửi chuyển phát nhanh hàng không cho người mua doanh nghiệp'
    },
    privateLabel: {
      tr: 'Özel marka perakende doypack, teneke kutu veya alıcı logolu ana koli baskısı desteklenir',
      en: 'Private label retail doypacks, tins, or custom-branded master cartons supported on contract volumes',
      de: 'Eigenmarken-Doypacks, Dosen oder bedruckte Umkartons bei Vertragsvolumen möglich',
      it: 'Confezionamento private label in doypack, barattoli o cartoni personalizzati con marchio cliente',
      ru: 'СТМ фасовка в дой-паки, жестяные банки или брендированные короба при контрактных объемах',
      fa: 'امکان بسته‌بندی با برند اختصاصی (Private Label) در دوی‌پک، قوطی یا کارتن مادر چاپ‌شده',
      zh: '按合同量支持 OEM 贴牌代工、自立拉链袋 (Doypack)、马口铁罐及买方定制外箱喷绘',
      vi: 'Hỗ trợ bao bì thương hiệu riêng (private label) dạng túi doypack, hộp thiếc hoặc thùng carton in logo'
    },
    incoterms: {
      tr: 'FOB Bandar Abbas / Mersin / İstanbul, CIF ana limanlar, Avrupa için DAP opsiyonu',
      en: 'FOB Bandar Abbas / Mersin / Istanbul, CIF major global destination ports, DAP options for Europe',
      de: 'FOB Bandar Abbas / Mersin / Istanbul, CIF Zielhäfen weltweit, DAP für Kontinentaleuropa',
      it: 'FOB Bandar Abbas / Mersin / Istanbul, CIF principali porti di destinazione, opzioni DAP per l’Europa',
      ru: 'FOB Бендер-Аббас / Мерсин / Стамбул, CIF основные мировые порты, DAP по Европе',
      fa: 'تحویل FOB بندرعباس / مرسین / استانبول، CIF بنادر اصلی مقصد، DAP در مقاصد اروپایی',
      zh: 'FOB 阿巴斯港 / 梅尔辛港 / 伊斯坦布尔，CIF 全球核心集装箱口岸，欧洲大陆可协商 DAP',
      vi: 'FOB Cảng Bandar Abbas / Mersin / Istanbul, CIF các cảng biển quốc tế chính, tùy chọn DAP đi châu Âu'
    },
    leadTime: {
      tr: 'Sözleşme ve parti rezervasyonu sonrası 10-14 iş günü sevkiyata hazırlık süresi',
      en: '10-14 business days production, batch inspection and port staging upon contract confirmation',
      de: '10-14 Werktage für Chargenprüfung, Verpackung und Bereitstellung ab Vertrag',
      it: '10-14 giorni lavorativi per preparazione lotto, ispezione e carico portuale dopo il contratto',
      ru: '10-14 рабочих дней на комплектацию партии, контроль качества и доставку в порт',
      fa: '۱۰ الی ۱۴ روز کاری جهت سورت، بسته‌بندی، اخذ مجوزهای بازرسی و آماده‌سازی حمل',
      zh: '合同签订与产地锁定后 10 至 14 个工作日完成品控分选、质检封签与集港排期',
      vi: '10-14 ngày làm việc để chuẩn bị lô hàng, kiểm định và đưa hàng ra cảng sau khi xác nhận hợp đồng'
    },
    storage: {
      tr: 'Kuru, havalandırmalı ortam (<15°C, bağıl nem <%60); uzun süreli depolama için +4°C soğuk hava deposu',
      en: 'Cool, ventilated warehouse (<15°C, RH <60%); cold storage at +4°C recommended for long-term holding',
      de: 'Kühl und trocken lagern (<15°C, relative Feuchte <60%); Kühllagerung bei +4°C für Langzeitbestand',
      it: 'Ambiente fresco e ventilato (<15°C, UR <60%); raccomandata cella frigorifera a +4°C per stoccaggio prolungato',
      ru: 'Прохладный сухой склад (<15°C, влажность <60%); для длительного хранения рекомендуется +4°C',
      fa: 'محیط خنک و خشک (دمای زیر ۱۵ درجه، رطوبت کمتر از ۶۰٪)؛ برای نگهداری طولانی‌مدت در دمای +۴ درجه',
      zh: '阴凉通风干燥仓储（温度低于 15°C，相对湿度低于 60%）；长期留仓建议配置 +4°C 冷库',
      vi: 'Kho thoáng mát, khô ráo (<15°C, độ ẩm <60%); khuyến nghị bảo quản lạnh +4°C nếu lưu kho dài hạn'
    },
    intendedUse: {
      tr: 'Gurme atıştırmalık, kuruyemiş kavurma tesisleri, lüks pastacılık ve premium hediye paketlemesi',
      en: 'Gourmet retail snacking, commercial nut roasting facilities, premium confectionery and pastry',
      de: 'Premium-Snacking, Röstbetriebe, gehobene Süßwarenherstellung und Geschenkverpackung',
      it: 'Snack al dettaglio gourmet, torrefazioni di frutta secca, pasticceria di alta gamma',
      ru: 'Премиальный ритейл снеков, обжарочные фабрики, кондитерское производство высшего класса',
      fa: 'آجیل لوکس صادراتی، کارخانجات برشته‌کاری، قنادی صنعتی ممتاز و بسته‌بندی هدایای تشریفاتی',
      zh: '高端坚果零售配料、专业坚果烘焙工厂深加工、高端糕点烘焙以及商务礼盒封装',
      vi: 'Ăn vặt cao cấp, nhà máy chế biến rang hạt dẻ cười, bánh kẹo và quà tặng cao cấp'
    },
    quoteRequirements: {
      tr: 'Hedef kalibre (20/22 veya 22/24), miktar, çiğ/kavrulmuş tercihi, teslim limanı ve ambalaj biçimi',
      en: 'Target caliber (20/22 or 22/24), quantity, raw/roasted requirement, delivery port and packaging type',
      de: 'Gewünschtes Kaliber (20/22 oder 22/24), Menge, Roh/Geröstet, Bestimmungshafen und Gebindeart',
      it: 'Calibro desiderato (20/22 o 22/24), quantità, opzione crudo/tostato, porto di destino e imballaggio',
      ru: 'Требуемый калибр (20/22 или 22/24), объем, сырой/жареный, порт назначения и вид упаковки',
      fa: 'انس مورد نظر (۲۰/۲۲ یا ۲۲/۲۴)، تناژ درخواستی، خام یا بو داده، بندر مقصد و نوع بسته‌بندی',
      zh: '明确目标颗粒规格 (20/22 或 22/24)、意向采购量、生熟与调味要求、目的港口及内包装方案',
      vi: 'Cỡ hạt mục tiêu (20/22 hoặc 22/24), số lượng, yêu cầu sống/rang, cảng đích và quy cách đóng gói'
    }
  },

  'kaleghouchi-pistachio': {
    origin: {
      tr: 'İran (Rafsanjan / Yazd / Kerman)',
      en: 'Iran (Rafsanjan / Yazd / Kerman)',
      de: 'Iran (Rafsandschan / Yazd / Kerman)',
      it: 'Iran (Rafsanjan / Yazd / Kerman)',
      ru: 'Иран (Рафсанджан / Йезд / Керман)',
      fa: 'ایران (رفسنجان، یزد و کرمان)',
      zh: '伊朗原产地（拉夫桑詹 / 亚兹德 / 克尔曼核心产区）',
      vi: 'Iran (Vùng trồng Rafsanjan / Yazd / Kerman)'
    },
    variety: {
      tr: 'Kalleh Ghouchi Jumbo İri Fıstık (18/20, 20/22 kalibre), yuvarlak dolgun gövde, doğal açık',
      en: 'Kalleh Ghouchi Jumbo Pistachio (calibers 18/20, 20/22), round bold kernel shape, natural open',
      de: 'Kalleh-Ghouchi-Jumbo-Pistazien (Kaliber 18/20, 20/22), runde volle Frucht, natürlich geöffnet',
      it: 'Pistacchio Jumbo Kalleh Ghouchi (calibri 18/20, 20/22), forma tonda e piena, apertura naturale',
      ru: 'Фисташки Калле-Гучи Джамбо (калибры 18/20, 20/22), крупная круглая форма, естественное раскрытие',
      fa: 'پسته کله‌قوچی درشت جومبو (انس ۱۸/۲۰ و ۲۰/۲۲)، دانه درشت گرد، خندان طبیعی',
      zh: '大颗粒特级巨头开心果 Jumbo (规格 18/20、20/22)，圆润饱满特大粒径，天然自然开壳',
      vi: 'Hạt dẻ cười Kalleh Ghouchi Jumbo (cỡ hạt 18/20, 20/22), hạt tròn mẩy, mở tự nhiên'
    },
    packaging: {
      tr: '10 kg vakumlu koruyucu koli; 25 kg ve 50 kg dış polipropilen çuvallar',
      en: '10 kg vacuum protective master cartons; 25 kg & 50 kg outer PP woven bags',
      de: '10 kg Vakuum-Schutzkartons; 25 kg & 50 kg äußere PP-Gewebesäcke',
      it: 'Cartoni protettivi sottovuoto da 10 kg; sacchi esterni in PP da 25 kg e 50 kg',
      ru: 'Вакуумные короба по 10 кг; полипропиленовые внешние мешки по 25 кг и 50 кг',
      fa: 'کارتن‌های وکیوم ۱۰ کیلوگرمی؛ کیسه‌های دولایه ۲۵ و ۵۰ کیلوگرمی استاندارد',
      zh: '10 公斤出口专用真空阻隔纸箱；25 公斤及 50 公斤聚丙烯复合编织外袋',
      vi: 'Thùng carton chân không 10 kg bảo vệ; bao dệt PP 25 kg & 50 kg'
    },
    moq: {
      tr: '1 Metrik Ton / 1x20\' FCL (yaklaşık 16-18 MT)',
      en: '1 Metric Ton / 1x20\' FCL (approx. 16-18 MT)',
      de: '1 Tonne / 1x20\' FCL (ca. 16-18 t)',
      it: '1 Tonnellata / 1x20\' FCL (ca. 16-18 t)',
      ru: '1 метрическая тонна / 1x20\' FCL (около 16-18 т)',
      fa: '۱ تن متریک / ۱ کانتینر ۲۰ فوت (حدود ۱۶ الی ۱۸ تن)',
      zh: '1 公吨（拼箱样品试单） / 1 个 20 尺整柜 FCL（约 16 至 18 公吨）',
      vi: '1 tấn / 1 container 20 feet FCL (khoảng 16-18 tấn)'
    },
    qualityDocs: {
      tr: 'Akredite parti analiz raporu (COA), Bitki Sağlık Belgesi, Aflatoksin B1/Toplam test sertifikası',
      en: 'Accredited batch analysis (COA), Phytosanitary Certificate, Aflatoxin B1/Total certified lab test',
      de: 'Akkreditierter Chargenprüfbericht (COA), Pflanzengesundheitszeugnis, Aflatoxin B1/Gesamt-Zertifikat',
      it: 'Rapporto di analisi accreditato (COA), Certificato fitosanitario, Certificazione aflatossine B1/totale',
      ru: 'Аккредитованный протокол испытаний (COA), фитосанитарный сертификат, тест на афлатоксины',
      fa: 'گواهی آنالیز معتبر آزمایشگاهی (COA)، گواهی بهداشت نباتی، گواهی تست آفلاتوکسین B1 و توتال',
      zh: '出具第三方权威批次 COA、植物检疫合格证、黄曲霉毒素合规检测单（符合欧盟及目标国标准）',
      vi: 'Chứng nhận phân tích lô hàng (COA), Giấy kiểm dịch thực vật, Báo cáo xét nghiệm Aflatoxin'
    },
    samplePolicy: {
      tr: '500g kurumsal değerlendirme numunesi sağlanır',
      en: '500g commercial evaluation sample dispatched upon validated inquiry',
      de: '500 g Bewertungsmuster für verifizierte Geschäftskunden bereitgestellt',
      it: 'Campione da 500 g disponibile su richiesta commerciale qualificata',
      ru: 'Предоставляется коммерческий образец 500 г по запросу предприятия',
      fa: 'امکان ارسال نمونه ۵۰۰ گرمی برای خریداران عمده و صنعتی',
      zh: '为已核实资信的企业采购商提供 500 克标准评级样品',
      vi: 'Mẫu đánh giá 500g được cung cấp theo yêu cầu thương mại hợp lệ'
    },
    privateLabel: {
      tr: 'Toptan koli ve perakende ambalaj için OEM marka desteği',
      en: 'OEM private label packaging supported for wholesale cartons and retail packs',
      de: 'OEM-Eigenmarkenverpackung für Großhandelskartons und Kleinpackungen',
      it: 'Confezionamento OEM a marchio del cliente per cartoni ingrosso e retail',
      ru: 'Поддержка OEM фасовки и брендирования для оптовых и розничных форматов',
      fa: 'پشتیبانی از چاپ برند خریدار روی کارتن‌های صادراتی و بسته‌های خرده‌فروشی',
      zh: '支持面向渠道商的 OEM 品牌代工与定制小包装封口贴标',
      vi: 'Hỗ trợ đóng gói nhãn riêng OEM cho thùng bán buôn và túi bán lẻ'
    },
    incoterms: {
      tr: 'FOB Bandar Abbas, CIF Akdeniz & Avrupa ana limanları, DAP',
      en: 'FOB Bandar Abbas, CIF Mediterranean & European ports, DAP destinations',
      de: 'FOB Bandar Abbas, CIF Mittelmeer- und europäische Haupthäfen, DAP',
      it: 'FOB Bandar Abbas, CIF principali porti del Mediterraneo e d’Europa, DAP',
      ru: 'FOB Бендер-Аббас, CIF средиземноморские и европейские порты, DAP',
      fa: 'FOB بندرعباس، CIF بنادر مدیترانه و بنادر اصلی اروپا، تحویل DAP',
      zh: 'FOB 阿巴斯港，CIF 地中海、欧洲及亚洲核心集装箱枢纽港，DAP 到厂交货',
      vi: 'FOB Cảng Bandar Abbas, CIF các cảng Địa Trung Hải & châu Âu, DAP'
    },
    leadTime: {
      tr: '10-14 iş günü parti hazırlığı ve gümrükleme',
      en: '10-14 business days batch preparation, laboratory testing and port loading',
      de: '10-14 Werktage Chargenvorbereitung, Laborfreigabe und Verladung',
      it: '10-14 giorni lavorativi per preparazione lotto, test e imbarco portuale',
      ru: '10-14 рабочих дней на подготовку партии, тесты и погрузку в порту',
      fa: '۱۰ الی ۱۴ روز کاری برای آماده‌سازی بار، اخذ آنالیز و بارگیری در بندر',
      zh: '10 至 14 个工作日完成大货筛选、批次质检送检及集港报关',
      vi: '10-14 ngày làm việc để chuẩn bị hàng, xét nghiệm và bốc xếp tại cảng'
    },
    storage: {
      tr: '<15°C sıcaklık ve <%60 nem oranına sahip kuru depolama alanı',
      en: 'Dry storage at <15°C and <60% relative humidity; refrigeration for long-term storage',
      de: 'Trockenlagerung bei <15°C und <60% relativer Luftfeuchtigkeit; Kühlung für Langzeitbestand',
      it: 'Stoccaggio a secco a <15°C e <60% di umidità relativa; refrigerazione a lungo termine',
      ru: 'Сухое хранение при температуре <15°C и относительной влажности <60%',
      fa: 'دمای کمتر از ۱۵ درجه و رطوبت زیر ۶۰٪ در انبار سرپوشیده استاندارد',
      zh: '在低于 15°C 及相对湿度 60% 以下环境下通风防潮贮存',
      vi: 'Kho khô ráo ở nhiệt độ <15°C và độ ẩm tương đối <60%'
    },
    intendedUse: {
      tr: 'Premium kuruyemiş kavurma, doğrudan tüketici lüks atıştırmalık pazarı',
      en: 'Premium nut roasting houses, high-end retail snack lines, gift boxes',
      de: 'Hochwertige Nussröstereien, Premium-Snackmarken, exklusive Geschenkverpackungen',
      it: 'Torrefazioni di frutta secca di alta qualità, snack di lusso, confezioni regalo',
      ru: 'Премиальные фабрики обжарки, премиальные линейки снеков, подарочные наборы',
      fa: 'برشته‌کاری ممتاز، فروش آجیل لوکس آجیلی، بازار صادرات به کشورهای حوزه خلیج فارس و اروپا',
      zh: '高档坚果精品炒货厂、精品商超坚果专柜及节庆大礼包定制',
      vi: 'Nhà máy rang hạt dẻ cao cấp, dòng sản phẩm ăn vặt sang trọng, hộp quà tặng'
    },
    quoteRequirements: {
      tr: 'Talep edilen kalibre (18/20 veya 20/22), miktar, ambalaj detayı ve teslim lokasyonu',
      en: 'Desired caliber (18/20 or 20/22), volume, packaging specification and destination port',
      de: 'Gewünschtes Kaliber (18/20 oder 20/22), Volumen, Verpackungsart und Bestimmungshafen',
      it: 'Calibro desiderato (18/20 o 20/22), volume, tipo di imballaggio e porto di destino',
      ru: 'Требуемый калибр (18/20 или 20/22), объем, требования к таре и порт назначения',
      fa: 'سایز انس درخواستی (۱۸/۲۰ یا ۲۰/۲۲)، تناژ مورد نظر، نوع بسته‌بندی و پورت مقصد',
      zh: '意向采购颗粒规格 (18/20 或 20/22)、总需求量、内外包装规格以及指定交货港口',
      vi: 'Cỡ hạt mong muốn (18/20 hoặc 20/22), khối lượng, quy cách đóng gói và cảng đến'
    }
  },

  'fandoghi-pistachio': {
    origin: {
      tr: 'İran (Kerman / Sirjan / Khorasan)',
      en: 'Iran (Kerman / Sirjan / Khorasan)',
      de: 'Iran (Kerman / Sirdschan / Khorasan)',
      it: 'Iran (Kerman / Sirjan / Khorasan)',
      ru: 'Иран (Керман / Сирджан / Хорасан)',
      fa: 'ایران (کرمان، سیرجان و خراسان)',
      zh: '伊朗原产地（克尔曼 / 锡尔詹 / 呼罗珊主产区）',
      vi: 'Iran (Kerman / Sirjan / Khorasan)'
    },
    variety: {
      tr: 'Fandoghi Yuvarlak Fıstık (28/30, 30/32 kalibre), yüksek tane adedi, standart ihracat derecesi',
      en: 'Fandoghi Round Pistachio (calibers 28/30, 30/32), high count per ounce, industrial & retail benchmark',
      de: 'Fandoghi runde Pistazien (Kaliber 28/30, 30/32), hohe Stückzahl je Unze, Standard für Handel und Industrie',
      it: 'Pistacchio tondo Fandoghi (calibri 28/30, 30/32), alto numero di frutti per oncia, standard export',
      ru: 'Фисташки Фандоги Круглые (калибры 28/30, 30/32), высокий выход зерен, экспортный стандарт',
      fa: 'پسته فندقی گرد (انس ۲۸/۳۰ و ۳۰/۳۲)، تعداد دانه بالا در کیلو، مناسب صادرات حجمی و فرآوری',
      zh: '圆粒开心果 Fandoghi (规格 28/30、30/32)，每盎司颗数多、出籽率高，大宗商贸主流规格',
      vi: 'Hạt dẻ cười tròn Fandoghi (cỡ hạt 28/30, 30/32), số hạt cao, tiêu chuẩn xuất khẩu phổ biến'
    },
    packaging: {
      tr: '25 kg ve 50 kg polipropilen dış çuval; isteğe bağlı 10 kg vakum ambalaj',
      en: '25 kg & 50 kg PP woven bags; optional 10 kg vacuum cartons for extended shelf life',
      de: '25 kg & 50 kg PP-Gewebesäcke; optional 10 kg Vakuumkartons für längere Haltbarkeit',
      it: 'Sacchi in PP da 25 kg e 50 kg; cartoni sottovuoto da 10 kg opzionali',
      ru: 'Полипропиленовые мешки по 25 кг и 50 кг; по запросу вакуумные короба по 10 кг',
      fa: 'کیسه‌های ۲۵ و ۵۰ کیلوگرمی استاندارد لمینت‌دار؛ کارتن وکیوم ۱۰ کیلوگرمی سفارشی',
      zh: '25 公斤及 50 公斤大宗编织外袋；可选 10 公斤真空保质高强纸箱',
      vi: 'Bao dệt PP 25 kg & 50 kg; tùy chọn thùng carton hút chân không 10 kg'
    },
    moq: {
      tr: '1 Metrik Ton / 1x20\' FCL (yaklaşık 18 MT)',
      en: '1 Metric Ton / 1x20\' FCL (approx. 18 MT)',
      de: '1 Tonne / 1x20\' FCL (ca. 18 t)',
      it: '1 Tonnellata / 1x20\' FCL (ca. 18 t)',
      ru: '1 метрическая тонна / 1x20\' FCL (около 18 т)',
      fa: '۱ تن متریک / ۱ کانتینر ۲۰ فوت (حدود ۱۸ تن)',
      zh: '1 公吨（样品试单） / 1 个 20 尺整柜 FCL（约 18 公吨）',
      vi: '1 tấn / 1 container 20 feet FCL (khoảng 18 tấn)'
    },
    qualityDocs: {
      tr: 'Akredite parti analiz raporu, Bitki Sağlık Belgesi, Aflatoksin limit uygunluk raporu',
      en: 'Accredited batch analysis, Phytosanitary Certificate, Aflatoxin compliance lab report',
      de: 'Akkreditierter Chargenprüfbericht, Pflanzengesundheitszeugnis, Aflatoxin-Konformitätsbericht',
      it: 'Rapporto di analisi del lotto, Certificato fitosanitario, Rapporto di conformità aflatossine',
      ru: 'Анализ партии аккредитованной лабораторией, фитосанитарный сертификат, тест на афлатоксины',
      fa: 'برگه آنالیز آزمایشگاهی معتبر، گواهی بهداشت نباتی، گزارش رسمی عدم آلودگی به آفلاتوکسین',
      zh: '第三方实验室出厂 COA、官方出入境动植物检疫报告、黄曲霉毒素限量合规化验单',
      vi: 'Báo cáo phân tích lô hàng, Giấy kiểm dịch thực vật, Báo cáo kiểm nghiệm Aflatoxin'
    },
    samplePolicy: {
      tr: '500g temsilî numune kurye ile gönderilir',
      en: '500g representative lot sample available for prospective buyers',
      de: '500 g repräsentatives Chargenmuster für gewerbliche Kunden verfügbar',
      it: 'Campione rappresentativo da 500 g disponibile per clienti professionali',
      ru: 'Предоставляется репрезентативный образец 500 г для потенциальных покупателей',
      fa: 'نمونه معرف ۵۰۰ گرمی جهت ارسال سریع با پست هوایی برای مشتریان تجاری',
      zh: '提供 500 克具有代表性的大货留样供核验物理指标',
      vi: 'Mẫu đại diện 500g sẵn sàng chuyển phát nhanh cho khách hàng tiềm năng'
    },
    privateLabel: {
      tr: 'Büyük ölçekli siparişlerde özel ambalaj ve fason etiketleme yapılabilir',
      en: 'Private label packaging and OEM labeling supported on high-volume agreements',
      de: 'Eigenmarkenverpackung und Lohnabfüllung bei Großvolumen-Kontrakten möglich',
      it: 'Confezionamento private label ed etichettatura personalizzata su volumi elevati',
      ru: 'Возможность фасовки под СТМ и контрактного этикетирования при крупных заказах',
      fa: 'امکان بسته‌بندی خصوصی و لیبل‌گذاری اختصاصی در قراردادهای با حجم بالا',
      zh: '针对大宗年度长约客户提供整柜级 OEM 包装定制与喷码服务',
      vi: 'Hỗ trợ đóng gói nhãn riêng và gắn nhãn OEM theo hợp đồng số lượng lớn'
    },
    incoterms: {
      tr: 'FOB Bandar Abbas, CIF ana limanlar, CFR',
      en: 'FOB Bandar Abbas, CIF major global ports, CFR terms',
      de: 'FOB Bandar Abbas, CIF Haupthäfen weltweit, CFR',
      it: 'FOB Bandar Abbas, CIF principali porti globali, condizioni CFR',
      ru: 'FOB Бендер-Аббас, CIF основные мировые порты, условия CFR',
      fa: 'FOB بندرعباس، CIF بنادر اصلی بین‌المللی، شرایط CFR',
      zh: 'FOB 阿巴斯港、CIF 全球主要集装箱海港及 CFR 港口交货条款',
      vi: 'FOB Bandar Abbas, CIF các cảng quốc tế lớn, điều kiện CFR'
    },
    leadTime: {
      tr: '7-12 iş günü içinde yüklemeye hazır',
      en: '7-12 business days processing, quality inspection and port staging',
      de: '7-12 Werktage Aufbereitung, Qualitätsprüfung und Verladung',
      it: '7-12 giorni lavorativi per lavorazione, controlli qualità e carico',
      ru: '7-12 рабочих дней на сортировку, контроль качества и доставку в порт',
      fa: '۷ الی ۱۲ روز کاری جهت بارگیری و اقدامات گمرکی در مبدأ',
      zh: '7 至 12 个工作日内完成产地统货分选、检测通关及装箱集港',
      vi: '7-12 ngày làm việc để xử lý, kiểm định chất lượng và bốc hàng'
    },
    storage: {
      tr: 'Maksimum 18°C, havadar ve nemsiz depolarda muhafaza edilir',
      en: 'Store at max 18°C in well-ventilated, dry facilities free from pests',
      de: 'Bei maximal 18°C in gut belüfteten, trockenen und schädlingsfreien Räumen lagern',
      it: 'Conservare a massimo 18°C in locali ben ventilati e privi di umidità',
      ru: 'Хранение при температуре не выше 18°C в хорошо проветриваемых сухих помещениях',
      fa: 'نگهداری در حداکثر دمای ۱۸ درجه در انبار خشک، دارای تهویه مناسب و بدون رطوبت',
      zh: '存放在低于 18°C、通风优良、无直射光与防虫蛀的标准化保税干仓',
      vi: 'Bảo quản ở nhiệt độ tối đa 18°C tại kho khô ráo, thông gió tốt'
    },
    intendedUse: {
      tr: 'Hacimli atıştırmalık pazarı, çikolata ve dondurma endüstrisi, kuruyemiş karışımları',
      en: 'High-volume retail snacking, confectionery inclusions, ice cream and snack mixes',
      de: 'Großvolumige Snackartikel, Schokoladen- und Eiskremindustrie, Nussmischungen',
      it: 'Snack su larga scala, inclusioni per cioccolato e gelateria, mix di frutta secca',
      ru: 'Массовый ритейл снеков, добавки в шоколад и мороженое, смеси орехов',
      fa: 'فروش عمده آجیلی، صنایع شکلات‌سازی و بستنی‌سازی، تهیه مغز فندقی و فرآوری',
      zh: '大流通渠道零售包装、巧克力工厂夹心坚果碎原料、冰淇淋工业以及混合坚果配方',
      vi: 'Ăn vặt bán lẻ quy mô lớn, nguyên liệu làm sô-cô-la và kem, hạt hỗn hợp'
    },
    quoteRequirements: {
      tr: 'Kalibre, miktar, çiğ veya kavrulmuş/tuzlu istekleri ve varış limanı',
      en: 'Caliber specification, quantity, raw vs roasted/salted request, and destination port',
      de: 'Kaliberangabe, Bestellmenge, Roh oder geröstet/gesalzen, Bestimmungshafen',
      it: 'Specifiche di calibro, quantità, richiesta crudo o tostato/salato e porto di arrivo',
      ru: 'Спецификация калибра, объем, сырой или жареный/соленый, порт назначения',
      fa: 'انس پسته، تناژ، خام یا شورشده/تفت‌داده و بندر مقصد مورد نظر',
      zh: '明确目标颗粒等级、采购总公吨数、生籽或烘焙加盐比例、目的港名称',
      vi: 'Quy cách cỡ hạt, khối lượng, yêu cầu hạt sống hoặc rang muối, và cảng nhận hàng'
    }
  },

  'ahmad-aghaei-pistachio': {
    origin: {
      tr: 'İran (Rafsanjan / Kerman)',
      en: 'Iran (Rafsanjan / Kerman)',
      de: 'Iran (Rafsandschan / Kerman)',
      it: 'Iran (Rafsanjan / Kerman)',
      ru: 'Иран (Рафсанджан / Керман)',
      fa: 'ایران (رفسنجان و کرمان)',
      zh: '伊朗原产地（拉夫桑詹 / 克尔曼核心绿洲产区）',
      vi: 'Iran (Rafsanjan / Kerman)'
    },
    variety: {
      tr: 'Ahmad Aghaei Yarı Uzun Fıstık (22/24, 24/26 kalibre), parlak kırmızı iç zarı, beyaz kabuk, yüksek açık ağız oranı',
      en: 'Ahmad Aghaei Semi-Long Pistachio (calibers 22/24, 24/26), vibrant red skin, white shell, high open ratio',
      de: 'Ahmad-Aghaei halblange Pistazien (Kaliber 22/24, 24/26), leuchtend rote Samenhaut, helle Schale, hohe Öffnungsrate',
      it: 'Pistacchio semi-lungo Ahmad Aghaei (calibri 22/24, 24/26), pellicola rosso brillante, guscio chiaro, elevata apertura',
      ru: 'Фисташки Ахмад Агаи Полудлинные (калибры 22/24, 24/26), яркая красная кожица, белая скорлупа, высокая степень раскрытия',
      fa: 'پسته احمدآقایی اعلا (انس ۲۲/۲۴ و ۲۴/۲۶)، مغز خوش‌رنگ با پوسته قرمز روشن، پوسته استخوانی سفید، درصد خندانی بسیار بالا',
      zh: '艾哈迈德阿加伊中长粒开心果 (规格 22/24、24/26)，果仁红衣鲜艳、外壳洁白光润、自然裂缝大',
      vi: 'Hạt dẻ cười Ahmad Aghaei hạt vừa (cỡ hạt 22/24, 24/26), vỏ lụa đỏ tươi, vỏ cứng trắng sáng, tỷ lệ mở cao'
    },
    packaging: {
      tr: '10 kg vakumlu korumalı karton koliler; 25 kg polipropilen dış çuval',
      en: '10 kg vacuum cartons with protective barrier; 25 kg outer PP woven bags',
      de: '10 kg Vakuumkartons mit Barriereschutz; 25 kg PP-Gewebesäcke',
      it: 'Cartoni sottovuoto da 10 kg con barriera protettiva; sacchi esterni in PP da 25 kg',
      ru: 'Вакуумные короба по 10 кг с барьерным слоем; внешние полипропиленовые мешки по 25 кг',
      fa: 'کارتن‌های وکیوم ۱۰ کیلوگرمی صادراتی ضد رطوبت؛ کیسه‌های ۲۵ کیلویی محکم پلی‌پروپیلن',
      zh: '10 公斤高阻隔真空内衬出口彩箱/硬箱；25 公斤覆膜编织外袋',
      vi: 'Thùng carton chân không 10 kg có màng bảo vệ; bao dệt PP 25 kg'
    },
    moq: {
      tr: '1 Metrik Ton / 1x20\' FCL (yaklaşık 16 MT)',
      en: '1 Metric Ton / 1x20\' FCL (approx. 16 MT)',
      de: '1 Tonne / 1x20\' FCL (ca. 16 t)',
      it: '1 Tonnellata / 1x20\' FCL (ca. 16 t)',
      ru: '1 метрическая тонна / 1x20\' FCL (около 16 т)',
      fa: '۱ تن متریک / ۱ کانتینر ۲۰ فوت (حدود ۱۶ تن)',
      zh: '1 公吨（散批试样） / 1 个 20 尺集装箱 FCL（约 16 公吨）',
      vi: '1 tấn / 1 container 20 feet FCL (khoảng 16 tấn)'
    },
    qualityDocs: {
      tr: 'Akredite COA, Bitki Sağlık Belgesi, AB uyumlu Aflatoksin test raporu, Menşe Şahadetnamesi',
      en: 'Accredited COA, Phytosanitary Certificate, EU-compliant Aflatoxin screening report, Certificate of Origin',
      de: 'Akkreditiertes COA, Pflanzengesundheitszeugnis, EU-konformer Aflatoxintest, Ursprungszeugnis',
      it: 'COA accreditato, Certificato fitosanitario, Rapporto screening aflatossine conforme UE, Certificato di origine',
      ru: 'Аккредитованный COA, фитосанитарный сертификат, тест на афлатоксины по стандартам ЕС, сертификат происхождения',
      fa: 'گواهی COA رسمی، گواهی بهداشت نباتی، آنالیز آزمایشگاهی آفلاتوکسین منطبق با استانداردهای اروپا، گواهی مبدأ',
      zh: '官方资质 COA 化验单、出境植物检疫证书、符合欧盟法规的黄曲霉毒素筛查报告、原产地证明书',
      vi: 'Chứng nhận COA kiểm định, Giấy kiểm dịch thực vật, Báo cáo Aflatoxin chuẩn EU, Chứng nhận xuất xứ'
    },
    samplePolicy: {
      tr: 'Kurumsal alıcılar için 500g standart parti numunesi hava kargo ile temin edilir',
      en: '500g standard lot sample dispatched via air express for corporate buyers',
      de: '500 g Standard-Chargenmuster per Expressluftfracht für gewerbliche Abnehmer',
      it: 'Campione standard da 500 g inviato tramite corriere aereo per acquirenti aziendali',
      ru: 'Стандартный образец 500 г экспресс-доставкой для корпоративных клиентов',
      fa: 'ارسال نمونه ۵۰۰ گرمی از بار آماده از طریق پست اکسپرس هوایی برای شرکت‌های خریدار',
      zh: '可通过国际空运快递向核实企业买家寄送 500 克标准批次检测样品',
      vi: 'Mẫu 500g tiêu chuẩn chuyển phát nhanh hàng không cho khách hàng doanh nghiệp'
    },
    privateLabel: {
      tr: 'Perakende paketleme, özel marka vakum ambalaj ve koli baskısı yapılabilir',
      en: 'Retail pouch packaging, branded vacuum packs and custom carton printing available',
      de: 'Einzelhandelsbeutel, Marken-Vakuumverpackungen und individueller Kartondruck verfügbar',
      it: 'Buste retail, confezioni sottovuoto a marchio e stampa cartoni personalizzata',
      ru: 'Розничные пакеты, брендированные вакуумные упаковки и индивидуальная печать коробов',
      fa: 'امکان بسته‌بندی در پاکت‌های ایستاده، بسته‌های وکیوم برنددار و چاپ کارتن با مشخصات مشتری',
      zh: '支持零售立袋分装、买方品牌真空外袋及高分辨率外箱定制彩印',
      vi: 'Hỗ trợ đóng gói túi bán lẻ, túi hút chân không gắn thương hiệu và in thùng carton riêng'
    },
    incoterms: {
      tr: 'FOB Bandar Abbas, CIF Rotterdam / Mersin / Qingdao, DAP',
      en: 'FOB Bandar Abbas, CIF Rotterdam / Mersin / Qingdao, DAP continental destinations',
      de: 'FOB Bandar Abbas, CIF Rotterdam / Mersin / Qingdao, DAP Zielorte',
      it: 'FOB Bandar Abbas, CIF Rotterdam / Mersin / Qingdao, DAP',
      ru: 'FOB Бендер-Аббас, CIF Роттердам / Мерсин / Циндао, DAP',
      fa: 'FOB بندرعباس، CIF روتردام / مرسین / چینگدائو، DAP در مقاصد نهایی',
      zh: 'FOB 阿巴斯港，CIF 鹿特丹 / 梅尔辛 / 青岛，欧洲及亚洲内陆 DAP 派送',
      vi: 'FOB Bandar Abbas, CIF Rotterdam / Mersin / Qingdao, DAP các điểm đến'
    },
    leadTime: {
      tr: '10-14 iş günü içinde hazırlık ve liman transferi tamamlanır',
      en: '10-14 business days production, lab verification and port transfer',
      de: '10-14 Werktage für Vorbereitung, Laborprüfung und Hafentransfer',
      it: '10-14 giorni lavorativi per preparazione, verifiche di laboratorio e trasferimento in porto',
      ru: '10-14 рабочих дней на подготовку, лабораторные испытания и доставку в порт',
      fa: '۱۰ الی ۱۴ روز کاری برای آماده‌سازی کالا، آزمایشات کنترلی و انتقال به بندر',
      zh: '10 至 14 个工作日内完成产地统选、理化复检与口岸集装箱装箱',
      vi: '10-14 ngày làm việc để chuẩn bị, kiểm nghiệm phòng lab và vận chuyển ra cảng'
    },
    storage: {
      tr: '<15°C ve <%60 bağıl nem; doğrudan güneş ışığından uzak, serin depo',
      en: 'Cool store at <15°C and <60% RH away from direct sunlight; cold room for prolonged holding',
      de: 'Kühllagerung bei <15°C und <60% relativer Feuchte, vor Sonnenlicht geschützt',
      it: 'Conservare a <15°C e <60% UR al riparo dalla luce solare diretta',
      ru: 'Хранение при температуре <15°C и относительной влажности <60% в защищенном от света месте',
      fa: 'انبارداری در دمای زیر ۱۵ درجه و رطوبت زیر ۶۰٪ به دور از تابش مستقیم خورشید',
      zh: '置于低于 15°C、相对湿度 60% 以下避光阴凉仓库；长周期贮存建议冷藏',
      vi: 'Bảo quản nơi thoáng mát <15°C và độ ẩm <60%, tránh ánh nắng trực tiếp'
    },
    intendedUse: {
      tr: 'Doğrudan lüks atıştırmalık, perakende kuruyemiş markaları, Doğu Asya ve Avrupa pazarları',
      en: 'High-end retail snacking, roasting companies, European and East Asian consumer markets',
      de: 'Hochwertige Snackmarken, Nussröstereien, europäische und ostasiatische Märkte',
      it: 'Snack al dettaglio di alta qualità, torrefazioni, mercati europei e dell’Asia orientale',
      ru: 'Премиальный розничный снек, обжарка, рынки Европы и Восточной Азии',
      fa: 'مصرف لوکس آجیلی، شرکت‌های بسته‌بندی آجیل، بازارهای مصرف اروپا، شرق آسیا و خاورمیانه',
      zh: '精品坚果零售终端、高档烘焙零食线、欧洲及东亚主流干果消费市场',
      vi: 'Ăn vặt bán lẻ cao cấp, công ty chế biến rang hạt, thị trường châu Âu và Đông Á'
    },
    quoteRequirements: {
      tr: 'Kalibre seçimi (22/24 veya 24/26), tonaj, ambalaj tipi ve teslim şartları',
      en: 'Caliber selection (22/24 or 24/26), volume, packaging configuration and delivery terms',
      de: 'Kaliberauswahl (22/24 oder 24/26), Tonnage, Verpackungskonfiguration und Lieferbedingungen',
      it: 'Scelta del calibro (22/24 o 24/26), tonnellaggio, configurazione dell’imballaggio e termini di resa',
      ru: 'Выбор калибра (22/24 или 24/26), тоннаж, тип упаковки и условия поставки',
      fa: 'انتخاب انس (۲۲/۲۴ یا ۲۴/۲۶)، تناژ درخواستی، پیکربندی بسته‌بندی و اینکوترمز تحویل',
      zh: '指定目标粒径（22/24 或 24/26）、总采购量、包装形式及期望贸易条款 Incoterms',
      vi: 'Lựa chọn cỡ hạt (22/24 hoặc 24/26), khối lượng, quy cách đóng gói và điều kiện giao hàng'
    }
  },

  'green-peeled-pistachio': {
    origin: {
      tr: 'İran (Kerman / Khorasan)',
      en: 'Iran (Kerman / Khorasan)',
      de: 'Iran (Kerman / Khorasan)',
      it: 'Iran (Kerman / Khorasan)',
      ru: 'Иран (Керман / Хорасан)',
      fa: 'ایران (کرمان و خراسان)',
      zh: '伊朗原产地（克尔曼省及呼罗珊特选高山产区）',
      vi: 'Iran (Kerman / Khorasan)'
    },
    variety: {
      tr: 'Yeşil Soyulmuş İç Fıstık (Grade S Süper Yeşil, Grade A, Grade B, Grade C), çift soyulmuş (GPPK)',
      en: 'Green Peeled Pistachio Kernels (GPPK - Grade S Super Green, Grade A, Grade B, Grade C), double-peeled',
      de: 'Grüne geschälte Pistazienkerne (GPPK - Grad S Super Grün, Grad A, Grad B, Grad C), doppelt geschält',
      it: 'Pistacchio verde sgusciato doppio pelato (GPPK - Grado S Super Verde, Grado A, Grado B, Grado C)',
      ru: 'Очищенные зеленые ядра фисташек (GPPK - сорт S супер-зеленый, сорт A, сорт B, сорт C)',
      fa: 'مغز پسته سبز دوپوست اعلا (GPPK - گرید S سوپر گرین، گرید A، گرید B و C)، کاملاً پوست‌گیری‌شده و یکدست',
      zh: '天然双脱皮纯绿开心果仁 (GPPK，包含特级纯绿 S 级 Super Green、A 级、B 级及 C 级分色定级)',
      vi: 'Nhân hạt dẻ cười xanh tách vỏ kép (GPPK - Hạng S Siêu Xanh, Hạng A, Hạng B, Hạng C)'
    },
    packaging: {
      tr: '10 kg ve 12.5 kg koruyucu vakumlu torbalar, neme dayanıklı dış karton koli',
      en: '10 kg & 12.5 kg nitrogen/vacuum barrier pouches in moisture-resistant master cartons',
      de: '10 kg & 12.5 kg Vakuum-Barrierebeutel in feuchtigkeitsbeständigen Umkartons',
      it: 'Buste barriera sottovuoto da 10 kg e 12.5 kg in cartoni resistenti all’umidità',
      ru: 'Вакуумные барьерные пакеты по 10 кг и 12.5 кг во влагостойких гофрокоробах',
      fa: 'کارتن‌های وکیوم ۱۰ و ۱۲.۵ کیلوگرمی مقاوم با گاز محافظ نیتروژن جهت تثبیت رنگ سبز',
      zh: '10 公斤与 12.5 公斤充氮高阻隔真空铝塑袋外配抗潮加厚瓦楞出口纸箱',
      vi: 'Túi hút chân không 10 kg & 12.5 kg có màng chắn bảo vệ trong thùng carton chống ẩm'
    },
    moq: {
      tr: '250 kg (LCL numune / hava kargo) / 1 Metrik Ton paletli sevkiyat',
      en: '250 kg (LCL trial / air freight) / 1 Metric Ton palletized consignment',
      de: '250 kg (LCL-Probe / Luftfracht) / 1 Tonne palettierte Sendung',
      it: '250 kg (prova LCL / via aerea) / 1 Tonnellata su bancali',
      ru: '250 кг (пробная партия / авиа) / 1 метрическая тонна на паллетах',
      fa: '۲۵۰ کیلوگرم (محموله آزمایشی با حمل هوایی) / ۱ تن متریک پالت‌شده',
      zh: '250 公斤起订（支持恒温拼箱或空运样品单） / 1 公吨标准打托托盘班轮运输',
      vi: '250 kg (thử nghiệm LCL / đường hàng không) / 1 tấn đóng pallet'
    },
    qualityDocs: {
      tr: 'Aflatoksin B1 (<2 ppb) ve Toplam (<4 ppb) AB uygunluk analiz raporu, Mikrobiyolojik COA, Bitki Sağlık Belgesi',
      en: 'EU Aflatoxin B1 (<2 ppb) & Total (<4 ppb) certified compliance COA, Microbiological report, Phytosanitary Certificate',
      de: 'EU-Aflatoxin-Zertifikat (B1 <2 ppb, Gesamt <4 ppb), Mikrobiologie-COA, Pflanzengesundheitszeugnis',
      it: 'COA di conformità UE aflatossine (B1 <2 ppb, totale <4 ppb), Rapporto microbiologico, Certificato fitosanitario',
      ru: 'Сертификат ЕС по афлатоксинам (B1 <2 ppb, Total <4 ppb), микробиологический COA, фитосанитарный сертификат',
      fa: 'آنالیز دقیق آفلاتوکسین مطابق استاندارد اتحادیه اروپا (B1 زیر ۲ ppb و توتال زیر ۴ ppb)، گواهی میکروبی، گواهی بهداشت نباتی',
      zh: '严格符合欧盟严苛限值的黄曲霉毒素全项检测（B1小于2ppb，总量小于4ppb）、微生物指标 COA、出境检疫证书',
      vi: 'Báo cáo xét nghiệm Aflatoxin chuẩn EU (B1 <2 ppb & Tổng <4 ppb), Báo cáo vi sinh vật, Chứng nhận kiểm dịch thực vật'
    },
    samplePolicy: {
      tr: 'Endüstriyel pastacılık ve dondurma üreticileri için 250g renk ve kalite değerlendirme numunesi',
      en: '250g laboratory color grading sample dispatched via air express for industrial manufacturers',
      de: '250 g Farbbewertungsmuster per Expressluftfracht für industrielle Verarbeiter',
      it: 'Campione di valutazione colore da 250 g inviato via aerea per produttori industriali',
      ru: 'Лабораторный образец 250 г для оценки цвета экспресс-доставкой для производств',
      fa: 'ارسال نمونه آزمایشگاهی ۲۵۰ گرمی سورت‌شده از لحاظ رنگ و کیفیت برای کارخانجات صنایع غذایی',
      zh: '可向大型烘焙冰淇淋工业客户提供 250 克标准色号比对与出光分析样品',
      vi: 'Mẫu phân loại màu phòng lab 250g chuyển phát nhanh cho các nhà sản xuất công nghiệp'
    },
    privateLabel: {
      tr: 'Nötr endüstriyel koli veya müşteri logosuyla fason üretim desteği',
      en: 'Neutral industrial master packaging or contract co-packing with buyer labeling',
      de: 'Neutrale Industriekartons oder Lohnabfüllung mit Kundenkennzeichnung',
      it: 'Cartoni industriali neutri o confezionamento conto terzi con etichetta cliente',
      ru: 'Нейтральные промышленные короба или контрактная фасовка с этикеткой заказчика',
      fa: 'بسته‌بندی در کارتن‌های صنعتی خنثی یا بسته‌بندی با لیبل و علائم تجاری خریدار',
      zh: '支持出口标准中性工业纸箱或加贴买家品控代码的定向 OEM 定制封装',
      vi: 'Bao bì công nghiệp trung tính hoặc đóng gói gia công gắn nhãn người mua'
    },
    incoterms: {
      tr: 'CIP Hava Kargo (ana havalimanları), CIF Frigorifik Deniz Konteyneri, DAP',
      en: 'CIP Air Freight (major airports), CIF Reefer Container, DAP facilities',
      de: 'CIP Luftfracht (internationale Flughäfen), CIF Kühlcontainer, DAP',
      it: 'CIP trasporto aereo (principali aeroporti), CIF container refrigerato, DAP',
      ru: 'CIP авиадоставка (крупные аэропорты), CIF рефрижераторный контейнер, DAP',
      fa: 'حمل هوایی CIP (فرودگاه‌های بین‌المللی)، حمل کانتینر یخچالی CIF، تحویل DAP',
      zh: 'CIP 国际空港空运专线（直达各枢纽机场）、CIF 恒温冷藏集装箱、欧洲 DAP 到厂',
      vi: 'CIP vận chuyển hàng không (các sân bay lớn), CIF container lạnh, DAP tới nhà máy'
    },
    leadTime: {
      tr: '7-10 iş günü optik ayıklama, paketleme ve hava kargo sevkiyatı',
      en: '7-10 business days optical sort, nitrogen packing and cold-chain dispatch',
      de: '7-10 Werktage für optische Sortierung, Vakuumverpackung und Kühlkettenversand',
      it: '7-10 giorni lavorativi per selezione ottica, confezionamento e spedizione refrigerata',
      ru: '7-10 рабочих дней на оптическую сортировку, вакуумацию и отгрузку с холодовой цепью',
      fa: '۷ الی ۱۰ روز کاری برای سورت نوری دقیق رنگ، بسته‌بندی و ارسال تحت زنجیره سرد',
      zh: '7 至 10 个工作日内完成光学色选分级、充氮抽真空与冷链集货发出',
      vi: '7-10 ngày làm việc để phân loại quang học, đóng gói hút chân không và giao hàng chuỗi lạnh'
    },
    storage: {
      tr: '+2°C ile +6°C arasında soğuk hava deposunda, nemden ve ışıktan korunarak saklanmalıdır',
      en: 'Mandatory cold chain at +2°C to +6°C in sealed barrier packs to preserve chlorophyll and green intensity',
      de: 'Kühlkettenlagerung bei +2°C bis +6°C in versiegelten Barrierebeuteln zum Erhalt der grünen Farbe',
      it: 'Conservazione obbligatoria tra +2°C e +6°C in buste barriera sigillate per preservare il colore verde',
      ru: 'Обязательное хранение при температуре от +2°C до +6°C в герметичной таре для сохранения цвета',
      fa: 'نگهداری الزامی در سردخانه در دمای +۲ الی +۶ درجه در بسته‌های غیرقابل نفوذ جهت حفظ کلروفیل و رنگ سبز',
      zh: '严禁常温暴露，须在 +2°C 至 +6°C 恒温冷库密封避光保存以锁住天然叶绿素与翠绿成色',
      vi: 'Bắt buộc bảo quản trong chuỗi lạnh từ +2°C đến +6°C trong bao bì kín để giữ sắc tố xanh tự nhiên'
    },
    intendedUse: {
      tr: 'Gourmet dondurma ve gelato üretimi, lüks İtalyan ve Fransız pastacılığı, çikolata ve makaron üretimi',
      en: 'Artisanal gelato and ice cream manufacturing, luxury French/Italian pastry, premium chocolatiers, macarons',
      de: 'Handwerkliches Gelato und Speiseeis, gehobene Pâtisserie, Premium-Chocolatiers, Macarons',
      it: 'Produzione artigianale di gelato, alta pasticceria francese e italiana, cioccolateria fine, macaron',
      ru: 'Производство премиального джелато и мороженого, французская и итальянская выпечка, шоколад, макаруны',
      fa: 'تولید ژلاتو و بستنی لوکس، قنادی و شیرینی‌پزی ممتاز ایتالیایی و فرانسوی، شکلات‌سازی دست‌ساز و ماکارون',
      zh: '意大利手工高端 Gelato 冰淇淋原料、法式高端甜点烘焙、生巧夹心以及高端马卡龙点缀',
      vi: 'Sản xuất kem gelato thủ công, bánh ngọt Pháp/Ý cao cấp, sô-cô-la thượng hạng, bánh macaron'
    },
    quoteRequirements: {
      tr: 'Talep edilen derece (Grade S, A, B, C), miktar, hava/deniz teslim türü ve varış noktası',
      en: 'Target grading (Grade S, A, B, C), required volume, air/sea cold-chain mode and destination',
      de: 'Gewünschter Gütegrad (Grad S, A, B, C), Menge, Luft-/Seefracht-Kühlkette und Zielort',
      it: 'Grado desiderato (Grado S, A, B, C), volume richiesto, modalità aerea/marittima e destinazione',
      ru: 'Целевой сорт (Grade S, A, B, C), необходимый объем, авиа/море и пункт назначения',
      fa: 'گرید رنگ درخواستی (S، A، B، C)، حجم سفارش، نحوه حمل (هوایی یا دریایی سردخانه‌ای) و مقصد',
      zh: '明确目标绿度等级 (S级/A级/B级/C级)、采购公斤数、指定运输方式（恒温海运/空运）及收货地',
      vi: 'Hạng cấp độ màu (Hạng S, A, B, C), số lượng, phương thức vận chuyển lạnh và điểm đến'
    }
  },

  'pistachio-granules': {
    origin: {
      tr: 'İran / Türkiye (Akredite işleme tesisleri)',
      en: 'Iran / Türkiye (Accredited processing facilities)',
      de: 'Iran / Türkei (Akkreditierte Verarbeitungsbetriebe)',
      it: 'Iran / Turchia (Stabilimenti di trasformazione accreditati)',
      ru: 'Иран / Турция (аккредитованные перерабатывающие предприятия)',
      fa: 'ایران / ترکیه (واحدهای فرآوری صنعتی معتبر)',
      zh: '伊朗 / 土耳其（具备 ISO/HACCP 认证的精深加工产业基地）',
      vi: 'Iran / Thổ Nhĩ Kỳ (Cơ sở chế biến đạt kiểm định)'
    },
    variety: {
      tr: 'İç fıstık granülleri (2-4 mm, 4-6 mm elek boyu), fıstık pirinci, dilimlenmiş yaprak fıstık ve fıstık tozu',
      en: 'Pistachio kernels & granules (sieve fractions 2-4 mm, 4-6 mm), slivered pieces and fine pistachio meal/flour',
      de: 'Pistazienkerne & Granulat (Siebung 2-4 mm, 4-6 mm), gestiftete Splitter und feines Pistazienmehl',
      it: 'Granella di pistacchio (calibri setaccio 2-4 mm, 4-6 mm), listelli e farina fine di pistacchio',
      ru: 'Крошка и гранулы фисташек (фракции сита 2-4 мм, 4-6 мм), лепестки и мука тонкого помола',
      fa: 'خلال، خلال پودری و گرانول مغز پسته (اندازه دانه‌بندی سرند ۲-۴ میلی‌متر و ۴-۶ میلی‌متر)، مغز دندانه‌شده و پودر خالص',
      zh: '工业级开心果碎与精细颗粒（标准过筛孔径 2-4mm、4-6mm）、精制开心果条丝片及超细开心果粉',
      vi: 'Nhân & hạt dẻ cười nghiền (kích thước rây 2-4 mm, 4-6 mm), dạng lát và bột hạt dẻ cười mịn'
    },
    packaging: {
      tr: '10 kg nitrojen gazlı koruyucu vakumlu koliler; metal detektöründen geçirilmiş',
      en: '10 kg nitrogen-flushed barrier vacuum master cartons; metal detected and lot coded',
      de: '10 kg stickstoffgespülte Vakuum-Schutzkartons; metalldetektiert und chargencodiert',
      it: 'Cartoni sottovuoto da 10 kg con azoto protettivo; metal detector e codice lotto',
      ru: 'Вакуумные короба по 10 кг с азотной средой; проверка металлодетектором, номер партии',
      fa: 'کارتن‌های وکیوم ۱۰ کیلوگرمی با تزریق گاز ازت؛ عبور داده‌شده از متال دتکتور با کد رهگیری',
      zh: '10 公斤充氮抽真空内胆加厚纸箱包装；全线经过高灵敏度金检机剔除杂质并喷涂批号',
      vi: 'Thùng carton chân không 10 kg bơm khí nitơ bảo vệ; qua máy dò kim loại và gắn mã lô'
    },
    moq: {
      tr: '500 kg / 1 Metrik Ton',
      en: '500 kg / 1 Metric Ton',
      de: '500 kg / 1 Tonne',
      it: '500 kg / 1 Tonnellata',
      ru: '500 кг / 1 метрическая тонна',
      fa: '۵۰۰ کیلوگرم / ۱ تن متریک',
      zh: '500 公斤起订 / 1 公吨（打托整托盘交付）',
      vi: '500 kg / 1 tấn'
    },
    qualityDocs: {
      tr: 'Elek fraksiyon analiz belgesi, Nem analizi (<%5), Mikrobiyolojik COA, Aflatoksin sertifikası',
      en: 'Sieve particle size certificate, Moisture analysis (<5%), Microbiological COA, Aflatoxin compliance',
      de: 'Siebanalyse-Zertifikat, Feuchtebestimmung (<5%), Mikrobiologie-COA, Aflatoxin-Konformität',
      it: 'Certificato granulometria al setaccio, Analisi umidità (<5%), COA microbiologico, Certificazione aflatossine',
      ru: 'Сертификат ситового анализа фракций, анализ влажности (<5%), микробиологический COA, тест на афлатоксины',
      fa: 'گواهی دانه‌بندی سرند و دبی ذرات، سنجش رطوبت (زیر ۵٪)، آنالیز میکروبی، گواهی استاندارد آفلاتوکسین',
      zh: '颗粒筛分粒径分布检测单、水分测定报告（小于5%）、微生物全项检测 COA、黄曲霉毒素合规凭据',
      vi: 'Chứng nhận kích thước hạt qua rây, Phân tích độ ẩm (<5%), COA vi sinh, Báo cáo Aflatoxin'
    },
    samplePolicy: {
      tr: 'Endüstriyel tesisler için 300g elek ve görsel kontrol numunesi temin edilir',
      en: '300g specification and particle verification sample available for food processors',
      de: '300 g Spezifikationsmuster zur Partikelprüfung für Lebensmittelhersteller',
      it: 'Campione di specifica da 300 g disponibile per verifiche granulometriche aziendali',
      ru: 'Образец 300 г для проверки фракции и спецификаций для пищевых производств',
      fa: 'ارسال نمونه ۳۰۰ گرمی جهت تست خط تولید و انطباق سایز دانه‌بندی کارخانجات',
      zh: '可为食品加工厂质检与研发打样提供 300 克标准筛分确认物料',
      vi: 'Mẫu kiểm tra kích cỡ hạt 300g sẵn sàng cho các nhà máy chế biến thực phẩm'
    },
    privateLabel: {
      tr: 'Endüstriyel müşteri spesifikasyonuna göre özel ebatlama ve özel etiket desteği',
      en: 'Custom fraction sieving, private labeling and bulk industrial packaging support',
      de: 'Kundenspezifische Siebung, Eigenmarke und industrielle Großverpackung',
      it: 'Setacciatura personalizzata, private label e confezionamento industriale sfuso',
      ru: 'Индивидуальное ситование, фасовка под СТМ и промышленная упаковка',
      fa: 'امکان دانه‌بندی سفارشی طبق درخواست فنی مشتری و بسته‌بندی با مشخصات کارخانه خریدار',
      zh: '支持依据买家流水线要求进行非标孔径定制过筛分选，及大宗工业 OEM 贴标',
      vi: 'Hỗ trợ rây kích thước tùy chỉnh, đóng gói nhãn riêng và bao bì công nghiệp'
    },
    incoterms: {
      tr: 'FOB, CIF, DAP (Avrupa ve bölgesel sanayi merkezlerine teslim)',
      en: 'FOB, CIF, DAP to European and regional industrial manufacturing hubs',
      de: 'FOB, CIF, DAP zu europäischen und regionalen Industriestandorten',
      it: 'FOB, CIF, DAP presso stabilimenti industriali in Europa e nell’area regionale',
      ru: 'FOB, CIF, DAP на европейские и региональные производственные площадки',
      fa: 'FOB، CIF، تحویل مستقیم درب کارخانه DAP در مراکز صنعتی منطقه و اروپا',
      zh: 'FOB、CIF，支持直抵欧洲与中东各大食品工业集聚区的 DAP 门点交货',
      vi: 'FOB, CIF, DAP tới các trung tâm sản xuất công nghiệp tại châu Âu và khu vực'
    },
    leadTime: {
      tr: '10-14 iş günü kırma, eleme, optik kontrol ve paketleme',
      en: '10-14 business days granulation, optical sorting, metal detection and packing',
      de: '10-14 Werktage Zerkleinerung, optische Sortierung, Metalldetektion und Verpackung',
      it: '10-14 giorni lavorativi per granulazione, selezione ottica, metal detector e imballo',
      ru: '10-14 рабочих дней на дробление, оптическую сортировку, металлодетектор и упаковку',
      fa: '۱۰ الی ۱۴ روز کاری برای خردایش، الک‌بندی، بازرسی سورت نوری و بسته‌بندی نهایی',
      zh: '10 至 14 个工作日完成低温颗粒破片、高精度过筛、全自动色选及包装入库',
      vi: '10-14 ngày làm việc để nghiền hạt, phân loại quang học, dò kim loại và đóng gói'
    },
    storage: {
      tr: '+4°C ile +10°C arasında serin ve kuru depolama önerilir',
      en: 'Store at +4°C to +10°C in airtight containers; avoid moisture uptake and odors',
      de: 'Lagerung bei +4°C bis +10°C in luftdichten Gebinden; Feuchtigkeit und Fremdgerüche vermeiden',
      it: 'Conservare a +4°C fino a +10°C in contenitori ermetici; evitare umidità e odori',
      ru: 'Хранение при температуре от +4°C до +10°C в герметичной таре без посторонних запахов',
      fa: 'نگهداری در دمای +۴ الی +۱۰ درجه در ظروف کاملاً دربسته به دور از رطوبت و بوهای نامطبوع',
      zh: '密封保存在 +4°C 至 +10°C 冷藏库；远离潮湿环境及强烈挥发异味源',
      vi: 'Bảo quản ở nhiệt độ +4°C đến +10°C trong bao bì kín; tránh ẩm và mùi lạ'
    },
    intendedUse: {
      tr: 'Endüstriyel pastacılık, bisküvi ve çikolata üretimi, geleneksel baklava ve tatlı imalatı',
      en: 'Industrial bakeries, biscuit and chocolate manufacturing, traditional baklava and dessert processing',
      de: 'Industriebäckereien, Keks- und Schokoladenherstellung, traditionelles Baklava und Desserts',
      it: 'Panificazione industriale, biscotterie e cioccolaterie, baklava tradizionale e dolciari',
      ru: 'Промышленные пекарни, производство печенья и шоколада, традиционная пахлава и десерты',
      fa: 'صنایع بیسکویت، کیک و شکلات، قنادی‌های صنعتی، تولید سنتی و مکانیزه باقلوا و حلوا',
      zh: '工业化大型烘焙中央厨房、饼干与巧克力夹层用料、传统巴卡拉瓦 (Baklava) 及冰点甜品',
      vi: 'Nhà máy bánh kẹo công nghiệp, sản xuất sô-cô-la, làm bánh baklava truyền thống và món tráng miệng'
    },
    quoteRequirements: {
      tr: 'İstenen granül fraksiyonu (mm), tonaj, ambalaj tipi ve hedef teslim tarihi',
      en: 'Desired particle fraction (mm), volume, packaging preference and target delivery schedule',
      de: 'Gewünschte Partikelfraktion (mm), Tonnage, Verpackungspräferenz und Liefertermin',
      it: 'Frazione granulometrica richiesta (mm), tonnellaggio, preferenza imballo e tempi di consegna',
      ru: 'Желаемая фракция частиц (мм), тоннаж, предпочтительная тара и сроки поставки',
      fa: 'سایز دانه‌بندی مورد نظر (میلی‌متر)، تناژ کل، نوع بسته‌بندی و زمان‌بندی تحویل کالا',
      zh: '采购目标颗粒尺寸孔径（毫米）、总吨位要求、内包装规格及期望到货排期',
      vi: 'Kích thước hạt yêu cầu (mm), khối lượng, loại bao bì và tiến độ giao hàng'
    }
  },

  'mazafati-dates': {
    origin: {
      tr: 'İran (Bam / Kerman bölgesi vahaları)',
      en: 'Iran (Bam / Kerman region oases)',
      de: 'Iran (Oasen der Region Bam / Kerman)',
      it: 'Iran (Oasi della regione di Bam / Kerman)',
      ru: 'Иран (оазисы региона Бам / Керман)',
      fa: 'ایران (نخلستان‌های بم و منطقه کرمان)',
      zh: '伊朗原产地（克尔曼省巴姆绿洲地理标志核心保护区）',
      vi: 'Iran (Vùng ốc đảo Bam / Kerman)'
    },
    variety: {
      tr: 'Taze Siyah Mazafati Hurması (Rotab), %20-25 nem, etli yumuşak doku, doğal tatlandırıcı',
      en: 'Fresh Black Mazafati Dates (Rotab), moisture 20-25%, soft fleshy texture, dark natural color',
      de: 'Frische schwarze Mazafati-Datteln (Rotab), Feuchte 20-25%, weiche fleischige Textur, tiefschwarz',
      it: 'Datteri Mazafati neri freschi (Rotab), umidità 20-25%, polpa morbida e carnosa, colore scuro naturale',
      ru: 'Свежие черные финики Мазафати (Ротаб), влажность 20-25%, мягкая мясистая текстура',
      fa: 'خرمای تازه رطب مضافتی بم اعلا، رطوبت ۲۰ الی ۲۵ درصد، بافت گوشتی و نرم، رنگ مشکی طبیعی، کاملاً دستچین',
      zh: '地理标志保护级原产地巴姆黑金鲜椰枣 (Rotab Mazafati)，含水率 20-25%，果肉软糯多汁、色泽漆黑纯正',
      vi: 'Chà là đen tươi Mazafati (Rotab), độ ẩm 20-25%, thịt quả mềm dày, màu đen tự nhiên'
    },
    packaging: {
      tr: '550g-650g iç kutular; 12 iç kutu içeren standart 7-8 kg ana koli (master carton)',
      en: '550g-650g consumer inner boxes; 12 inner boxes packed per master carton (approx. 7-8 kg)',
      de: '550 g-650 g Innenkartons; 12 Innenkartons je Umkarton (ca. 7-8 kg Masterkarton)',
      it: 'Scatole interne da 550 g-650 g; 12 scatole interne per cartone master (circa 7-8 kg)',
      ru: 'Внутренние коробочки по 550–650 г; по 12 коробочек в мастер-коробе (около 7-8 кг)',
      fa: 'جعبه‌های کوچک ۵۵۰ الی ۶۵۰ گرمی سورت‌شده؛ کارتن‌های مادر ۱۲ تایی (وزن حدود ۷ الی ۸ کیلوگرم)',
      zh: '550克至650克精制零售内盒；12内盒标准装入一出口外箱（每母箱约重 7-8 公斤）',
      vi: 'Hộp nhỏ 550g-650g; 12 hộp nhỏ trong mỗi thùng carton mẹ tiêu chuẩn (khoảng 7-8 kg)'
    },
    moq: {
      tr: '1x20\' Frigorifik Konteyner (yaklaşık 12-14 MT) / 1 Palet (LCL deneme)',
      en: '1x20\' Reefer Container (approx. 12-14 MT) / 1 Pallet (LCL trial)',
      de: '1x20\' Kühlcontainer (ca. 12-14 t) / 1 Palette (LCL-Probemenge)',
      it: '1x20\' Container refrigerato (ca. 12-14 t) / 1 Pallet (prova LCL)',
      ru: '1x20\' рефрижераторный контейнер (около 12-14 т) / 1 паллета (LCL тест)',
      fa: '۱ کانتینر یخچالی ۲۰ فوت (حدود ۱۲ الی ۱۴ تن) / ۱ پالت (آزمایشی)',
      zh: '1 个 20 尺恒温冷藏集装箱（约 12 至 14 公吨） / 支持 1 托盘试单',
      vi: '1 container lạnh 20 feet (khoảng 12-14 tấn) / 1 pallet (thử nghiệm LCL)'
    },
    qualityDocs: {
      tr: 'Bitki Sağlık Sertifikası, Pestisit Kalıntı Analizi (MRL AB standartları), Sağlık Sertifikası, Menşe Belgesi',
      en: 'Phytosanitary Certificate, Pesticide Residue Analysis (EU MRL limits), Health Certificate, Certificate of Origin',
      de: 'Pflanzengesundheitszeugnis, Pestizidrückstandsanalyse (EU-MRL-Werte), Gesundheitszertifikat, Ursprungszeugnis',
      it: 'Certificato fitosanitario, Analisi residui antiparassitari (MRL UE), Certificato sanitario, Certificato d’origine',
      ru: 'Фитосанитарный сертификат, анализ остаточных пестицидов (нормы ЕС), санитарный сертификат, сертификат происхождения',
      fa: 'گواهی بهداشت نباتی، برگه آزمایشگاه سموم و آفت‌کش‌ها مطابق حدود مجاز اتحادیه اروپا (MRL)، گواهی سلامت و بهداشت، گواهی مبدأ',
      zh: '官方植物检疫证书、农残检测报告（严格遵循欧盟与国际标准最高残留限量 MRL）、出境卫生证、原产地证明',
      vi: 'Giấy kiểm dịch thực vật, Báo cáo tồn dư thuốc bảo vệ thực vật (theo chuẩn EU MRL), Chứng nhận y tế, Chứng nhận xuất xứ'
    },
    samplePolicy: {
      tr: 'Toptancı ve perakende zincirleri için 1 ana koli değerlendirme numunesi temin edilir',
      en: '1 master carton commercial evaluation sample dispatched for verified retail chains and distributors',
      de: '1 Masterkarton zur Bewertung für verifizierte Handelsketten und Großhändler',
      it: '1 cartone master disponibile come campione per catene distributive e importatori',
      ru: '1 мастер-короб в качестве коммерческого образца для сетей и оптовиков',
      fa: 'امکان ارسال ۱ کارتن مادر نمونه جهت بررسی کیفی زنجیره‌های فروشگاهی و تجار معتبر',
      zh: '可向大型连锁商超采销团队与一级进口代理商直派一整箱实物大样',
      vi: '1 thùng carton mẹ mẫu được cung cấp cho chuỗi bán lẻ và nhà phân phối xác minh'
    },
    privateLabel: {
      tr: 'İç kutularda ve ana kolide alıcıya özel marka baskısı ve etiketleme',
      en: 'Buyer branding on inner retail boxes and outer export cartons supported',
      de: 'Kundenmarkendruck auf Innenkartons und Umkartons bei Großaufträgen',
      it: 'Personalizzazione del marchio del cliente su scatole interne e cartoni esterni',
      ru: 'Брендирование внутренних коробок и внешних коробов по макету заказчика',
      fa: 'چاپ برند اختصاصی روی جعبه‌های داخلی و کارتن مادر با طرح و لوگوی خریدار',
      zh: '全面支持买方零售小彩盒与外箱双向高保真 OEM 印刷定制',
      vi: 'Hỗ trợ in nhãn hiệu riêng của người mua trên hộp nhỏ bán lẻ và thùng carton mẹ xuất khẩu'
    },
    incoterms: {
      tr: 'FOB Bandar Abbas, CIF Mersin / İstanbul / Rotterdam / Dubai, DAP',
      en: 'FOB Bandar Abbas, CIF Mersin / Istanbul / Rotterdam / Dubai, DAP cold-chain',
      de: 'FOB Bandar Abbas, CIF Mersin / Istanbul / Rotterdam / Dubai, DAP Kühlkette',
      it: 'FOB Bandar Abbas, CIF Mersin / Istanbul / Rotterdam / Dubai, DAP refrigerato',
      ru: 'FOB Бендер-Аббас, CIF Мерсин / Стамбул / Роттердам / Дубай, DAP рефрижератор',
      fa: 'FOB بندرعباس، CIF مرسین / استانبول / روتردام / دبی، DAP تحت حمل یخچالی',
      zh: 'FOB 阿巴斯港，CIF 梅尔辛 / 伊斯坦布尔 / 鹿特丹 / 迪拜，全程冷链 DAP',
      vi: 'FOB Bandar Abbas, CIF Mersin / Istanbul / Rotterdam / Dubai, DAP chuỗi lạnh'
    },
    leadTime: {
      tr: '7-12 iş günü frigorifik konteyner yüklemesi ve soğuk zincir transferi',
      en: '7-12 business days reefer container loading, pre-cooling and port transfer',
      de: '7-12 Werktage für Vorkühlung, Beladung des Kühlcontainers und Hafentransfer',
      it: '7-12 giorni lavorativi per pre-raffreddamento, carico container refrigerato e spedizione',
      ru: '7-12 рабочих дней на предварительное охлаждение, загрузку рефконтейнера и отправку',
      fa: '۷ الی ۱۲ روز کاری جهت پیش‌سرمایش، بارگیری در کانتینر یخچالی و تشریفات صدور',
      zh: '7 至 12 个工作日内完成采后预冷排湿、恒温打托、冷藏集装箱装箱与口岸放行',
      vi: '7-12 ngày làm việc để làm lạnh sơ bộ, đóng container lạnh và vận chuyển ra cảng'
    },
    storage: {
      tr: 'Zorunlu soğuk zincir: -5°C ile 0°C arası veya +2°C ile +4°C kontrollü soğuk depo',
      en: 'Mandatory cold chain: store at -5°C to 0°C (ideal) or +2°C to +4°C in dry cold storage',
      de: 'Obligatorische Kühlkette: Lagerung bei -5°C bis 0°C (optimal) oder +2°C bis +4°C im Kühllager',
      it: 'Catena del freddo obbligatoria: conservazione a -5°C fino a 0°C o +2°C fino a +4°C',
      ru: 'Обязательная холодовая цепь: хранение от -5°C до 0°C (идеально) или от +2°C до +4°C',
      fa: 'زنجیره سرد الزامی: نگهداری در دمای منفی ۵ تا صفر درجه (ایده‌آل) یا مثبت ۲ تا مثبت ۴ درجه در سردخانه استاندارد',
      zh: '严禁常温堆存，须确保全程冷链控温：理想冷藏温度为 -5°C 至 0°C 或 +2°C 至 +4°C',
      vi: 'Chuỗi lạnh bắt buộc: bảo quản ở -5°C đến 0°C (lý tưởng) hoặc +2°C đến +4°C tại kho lạnh'
    },
    intendedUse: {
      tr: 'Doğrudan tüketici perakendesi, Ramazan dönemi satışları, taze meyve reyonları ve organik beslenme',
      en: 'Direct retail distribution, Ramadan seasonal surge, fresh produce markets, healthy snacking',
      de: 'Direkter Einzelhandel, Ramadan-Saison, Frischeabteilungen, gesunde Ernährung',
      it: 'Distribuzione al dettaglio, vendite stagionali per il Ramadan, banchi freschi ortofrutta',
      ru: 'Розничные сети, сезонные продажи в Рамадан, свежие фруктовые отделы, здоровое питание',
      fa: 'پخش مستقیم در شبکه‌های خرده‌فروشی، فروش پرحجم ایام رمضان، غرفه‌های میوه تازه و سبد مصرف سلامت',
      zh: '高端商超水果专柜直销、斋月传统节庆大宗集采消费、天然纯素健康代糖零食',
      vi: 'Phân phối bán lẻ trực tiếp, mùa vụ Ramadan, quầy hoa quả tươi, dinh dưỡng lành mạnh'
    },
    quoteRequirements: {
      tr: 'Kutu gramaj tercihi (550g veya 600g), konteyner sayısı, teslim limanı ve soğuk zincir şartları',
      en: 'Inner box weight specification (550g or 600g), container count, destination port and cold-chain specs',
      de: 'Grammatur je Innenbox (550 g oder 600 g), Containeranzahl, Bestimmungshafen und Kühlkettendaten',
      it: 'Specifiche peso scatola interna (550 g o 600 g), numero container, porto di arrivo e catena del freddo',
      ru: 'Вес коробочки (550 г или 600 г), количество контейнеров, порт назначения и параметры холодовой цепи',
      fa: 'وزن خالص درخواستی جعبه (۵۵۰ یا ۶۰۰ گرم)، تعداد کانتینر یخچالی، بندر مقصد و پروتکل زنجیره سرد',
      zh: '明确内盒克重需求（550克或600克净重）、柜数意向、冷链目的港及到港温控要求',
      vi: 'Quy cách trọng lượng hộp nhỏ (550g hoặc 600g), số lượng container, cảng đến và chuỗi lạnh'
    }
  },

  'date-paste-syrup': {
    origin: {
      tr: 'İran / Türkiye',
      en: 'Iran / Türkiye',
      de: 'Iran / Türkei',
      it: 'Iran / Turchia',
      ru: 'Иран / Турция',
      fa: 'ایران / ترکیه',
      zh: '伊朗 / 土耳其（现代标准化深加工厂）',
      vi: 'Iran / Thổ Nhĩ Kỳ'
    },
    variety: {
      tr: 'Homojen hurma ezmesi (çekirdeksiz mikro-öğütülmüş) ve %100 saf hurma şurubu (Brix 72-75°)',
      en: 'Homogeneous date paste (pitted & micro-milled) and 100% pure date syrup (Brix 72-75°)',
      de: 'Homogene Dattelpaste (entsteint & mikrogemahlen) und 100% reiner Dattelsirup (Brix 72-75°)',
      it: 'Pasta di datteri omogenea (denocciolata e micro-macinata) e sciroppo di datteri puro 100% (Brix 72-75°)',
      ru: 'Однородная финиковая паста (без косточек, микропомол) и 100% натуральный финиковый сироп (Brix 72-75°)',
      fa: 'خمیر خرما کاملاً یکدست و بدون هسته (میکرومیل‌شده) و شیره خرمای ۱۰۰٪ طبیعی غلیظ (بریکس ۷۲ الی ۷۵ درجه)',
      zh: '工业级微米均质去核无杂质纯椰枣原浆 (Date Paste) 与 100% 纯天然冷榨浓缩椰枣糖浆 (Brix 72-75°)',
      vi: 'Paste chà là mịn đồng nhất (tách hạt & xay siêu mịn) và siro chà là nguyên chất 100% (Brix 72-75°)'
    },
    packaging: {
      tr: 'Ezme: 10 kg / 15 kg aseptik blok koliler; Şurup: 25 kg gıda bidonları veya 1250 kg IBC tank',
      en: 'Paste: 10 kg / 15 kg aseptic block cartons; Syrup: 25 kg drums or 1250 kg IBC totes',
      de: 'Paste: 10 kg / 15 kg aseptische Blockkartons; Sirup: 25 kg Fässer oder 1250 kg IBC-Container',
      it: 'Pasta: blocchi asettici in cartone da 10 kg / 15 kg; Sciroppo: fusti da 25 kg o cisterne IBC da 1250 kg',
      ru: 'Паста: 10 кг / 15 кг асептические блоки в коробах; Сироп: бочки 25 кг или IBC-контейнеры 1250 кг',
      fa: 'خمیر خرما: کارتن‌های بلوک اسپتیک ۱۰ و ۱۵ کیلوگرمی؛ شیره خرما: گالن‌های ۲۵ کیلوگرمی و مخازن ۱۲۵۰ کیلویی IBC',
      zh: '椰枣泥：10 公斤与 15 公斤无菌食品袋装纸箱；椰枣浓缩汁：25 公斤食品级桶装或 1250 公斤标准 IBC 吨桶',
      vi: 'Paste: khối vô trùng 10 kg / 15 kg trong thùng; Siro: can 25 kg hoặc bồn IBC 1250 kg'
    },
    moq: {
      tr: '1 Metrik Ton (Ezme) / 1 IBC Tank (yaklaşık 1.25 MT Şurup)',
      en: '1 Metric Ton (Paste) / 1 IBC Tote (approx. 1.25 MT Syrup)',
      de: '1 Tonne (Paste) / 1 IBC-Container (ca. 1,25 t Sirup)',
      it: '1 Tonnellata (Pasta) / 1 Cisterna IBC (ca. 1,25 t Sciroppo)',
      ru: '1 метрическая тонна (паста) / 1 IBC-контейнер (около 1,25 т сироп)',
      fa: '۱ تن متریک (خمیر خرما) / ۱ مخزن IBC (حدود ۱.۲۵ تن شیره خرما)',
      zh: '1 公吨（原浆试单） / 1 个 IBC 吨桶（浓缩糖浆净重约 1.25 公吨）',
      vi: '1 tấn (Paste) / 1 bồn IBC (khoảng 1.25 tấn Siro)'
    },
    qualityDocs: {
      tr: 'Brix & pH analiz raporu, Mikrobiyolojik COA, Ağır metal analizi, Helal sertifikası',
      en: 'Brix & pH analysis report, Microbiological COA, Heavy metals screening, Halal certification',
      de: 'Brix- & pH-Analysenbericht, Mikrobiologie-COA, Schwermetallprüfung, Halal-Zertifikat',
      it: 'Rapporto di analisi Brix e pH, COA microbiologico, Controllo metalli pesanti, Certificazione Halal',
      ru: 'Протокол испытаний на Brix и pH, микробиологический COA, анализ тяжелых металлов, сертификат Халяль',
      fa: 'گزارش آزمون بریکس و pH، آنالیز میکروبیولوژی COA، سنجش فلزات سنگین، گواهی حلال و سلامت',
      zh: '白利糖度 Brix 与 pH 测定报告、微生物质检 COA、重金属理化分析表、国际清真 Halal 认证',
      vi: 'Báo cáo phân tích Brix & pH, COA vi sinh, Kiểm tra kim loại nặng, Chứng nhận Halal'
    },
    samplePolicy: {
      tr: 'Formülasyon ve Ar-Ge denemeleri için 500g numune kavanozu sağlanır',
      en: '500g product sample provided for R&D formulation and viscosity testing',
      de: '500 g Produktmuster für F&E-Formulierungen und Viskositätstests bereitgestellt',
      it: 'Campione da 500 g fornito per prove di formulazione R&S e test di viscosità',
      ru: 'Образец 500 г для НИОКР, тестирования рецептур и вязкости',
      fa: 'ارسال نمونه ۵۰۰ گرمی جهت آزمایشات فرمولاسیون، تست بریکس و ویسکوزیته در بخش تحقیق و توسعه R&D',
      zh: '可提供 500 克小样供企业研发实验室进行配方打样、热稳定性与粘度测试',
      vi: 'Mẫu thử 500g phục vụ thử nghiệm công thức R&D và độ nhớt'
    },
    privateLabel: {
      tr: 'Endüstriyel dökme ambalaj veya perakende sıkılabilir şişelerde özel marka dolumu',
      en: 'Industrial bulk supply or co-packing in branded retail squeeze bottles and jars',
      de: 'Industrielle Großgebinde oder Abfüllung in Retail-Squeeze-Flaschen und Gläser',
      it: 'Fornitura industriale sfusa o confezionamento conto terzi in bottiglie squeeze e vasetti',
      ru: 'Промышленные партии или фасовка под СТМ в бутылки с дозатором и банки',
      fa: 'تأمین فله صنعتی یا بسته‌بندی با برند اختصاصی در بطری‌های فشاری (Squeeze) و شیشه‌ای',
      zh: '支持大宗工业槽车/吨桶交付，亦可代工贴牌零售挤压瓶 (Squeeze bottle) 及玻璃罐',
      vi: 'Cung cấp số lượng lớn công nghiệp hoặc đóng gói chai bóp bán lẻ gắn nhãn thương hiệu'
    },
    incoterms: {
      tr: 'FOB, CIF, DAP',
      en: 'FOB, CIF, DAP',
      de: 'FOB, CIF, DAP',
      it: 'FOB, CIF, DAP',
      ru: 'FOB, CIF, DAP',
      fa: 'FOB، CIF، تحویل DAP',
      zh: 'FOB、CIF、工厂或保税仓交货 DAP',
      vi: 'FOB, CIF, DAP'
    },
    leadTime: {
      tr: '10-15 iş günü üretim ve parti kalite testleri',
      en: '10-15 business days production, aseptic packing and quality release',
      de: '10-15 Werktage für Produktion, aseptische Abfüllung und Qualitätsfreigabe',
      it: '10-15 giorni lavorativi per produzione, confezionamento asettico e rilascio qualità',
      ru: '10-15 рабочих дней на производство, асептический розлив и контроль качества',
      fa: '۱۰ الی ۱۵ روز کاری جهت تولید، بسته‌بندی اسپتیک و تأیید نهایی آزمایشگاه',
      zh: '10 至 15 个工作日完成定制浓缩提取、无菌罐装与全指标出厂放行',
      vi: '10-15 ngày làm việc để sản xuất, đóng gói vô trùng và kiểm định xuất xưởng'
    },
    storage: {
      tr: 'Serin ve kuru ortamda (15-20°C); açıldıktan sonra ezme için soğuk ortam tavsiye edilir',
      en: 'Ambient dry storage at 15-20°C in sealed packaging; refrigerate paste after opening',
      de: 'Trocken bei 15-20°C in versiegelten Gebinden; Paste nach dem Öffnen kühlen',
      it: 'Conservare a 15-20°C in confezioni sigillate; refrigerare la pasta dopo l’apertura',
      ru: 'Сухое хранение при температуре 15-20°C; после вскрытия пасту хранить в холоде',
      fa: 'نگهداری در دمای معتدل ۱۵ الی ۲۰ درجه در ظروف کاملاً دربسته؛ نگهداری در یخچال پس از باز شدن',
      zh: '常温密封保存于 15-20°C 通风干燥库内；椰枣原浆开封后建议冷藏保存',
      vi: 'Bảo quản khô ráo ở 15-20°C trong bao bì kín; để lạnh paste sau khi mở nắp'
    },
    intendedUse: {
      tr: 'Sağlıklı atıştırmalık barları, bisküvi ve çikolata dolguları, doğal tatlandırıcı, bebek mamaları',
      en: 'Energy and protein bars, biscuit fillings, industrial natural sweetener, confectionery, baby food',
      de: 'Energie- und Proteinriegel, Keksfüllungen, natürlicher Süßstoff, Süßwaren, Babynahrung',
      it: 'Barrette energetiche e proteiche, farciture per biscotti, dolcificante naturale, alimenti per l’infanzia',
      ru: 'Протеиновые и энергетические батончики, начинки для печенья, натуральный подсластитель, детское питание',
      fa: 'تولید بارهای انرژی‌زا و پروتئینی، مغزی کیک و بیسکویت، شیرین‌کننده طبیعی صنایع، غذای کودک',
      zh: '能量棒与蛋白棒基底原料、饼干烘焙夹心酱、纯天然清洁标签代糖甜味剂、天然婴儿辅食配料',
      vi: 'Thanh năng lượng & protein bar, nhân bánh quy, chất tạo ngọt tự nhiên, thức ăn trẻ em'
    },
    quoteRequirements: {
      tr: 'Şurup için Brix değeri, ezme için kıvam beklentisi, ambalaj boyutu ve tonaj',
      en: 'Brix value for syrup, texture/viscosity for paste, packaging unit size and required tonnage',
      de: 'Brix-Wert für Sirup, Textur für Paste, Gebindegröße und Tonnage',
      it: 'Grado Brix per lo sciroppo, consistenza per la pasta, formato imballaggio e tonnellaggio',
      ru: 'Показатель Brix для сиропа, консистенция пасты, размер фасовки и тоннаж',
      fa: 'بریکس درخواستی شیره خرما، بافت و اکستروژن مورد نظر خمیر خرما، نوع ظرف و حجم خرید',
      zh: '糖浆 Brix 糖度指标、原浆研磨目数与挤出质构要求、包装规格及意向采购吨位',
      vi: 'Độ Brix của siro, kết cấu của paste, kích cỡ bao bì và khối lượng'
    }
  },

  'raisins': {
    origin: {
      tr: 'Türkiye (Ege Bölgesi Sultani) / İran (Kashmar, Malayer)',
      en: 'Türkiye (Aegean Sultana) / Iran (Kashmar, Malayer)',
      de: 'Türkei (Ägäis-Sultani) / Iran (Kaschmar, Malayer)',
      it: 'Turchia (Sultani dell’Egeo) / Iran (Kashmar, Malayer)',
      ru: 'Турция (эгейская султана) / Иран (Кашмар, Малаер)',
      fa: 'ترکیه (سلطانی منطقه اژه) / ایران (کاشمر، ملایر)',
      zh: '土耳其（爱琴海苏丹娜 Sultana 黄金产区） / 伊朗（卡什马尔、马拉耶尔）',
      vi: 'Thổ Nhĩ Kỳ (Sultana vùng Aegean) / Iran (Kashmar, Malayer)'
    },
    variety: {
      tr: 'Sultani Kuru Üzüm (Tip 9/10), Doğal Kurutulmuş Thomson, Altın Sarısı ve Yeşil Uzun Üzüm',
      en: 'Sultana Raisins (Type 9/10), Sun-dried Thompson, Golden Bleached and Green Long Raisins',
      de: 'Sultana-Rosinen (Typ 9/10), sonnengetrocknete Thompson, goldene und grüne lange Rosinen',
      it: 'Uva passa Sultana (Tipo 9/10), Thompson essiccata al sole, dorata e verde lunga',
      ru: 'Изюм Султана (Тип 9/10), сушеный на солнце Томпсон, золотистый и зеленый длинный изюм',
      fa: 'کشمش تیزابی سلطانی اعلا (تیپ ۹ و ۱۰)، کشمش آفتابی، کشمش طلایی صادراتی و کشمش سبز قلمی کاشمر',
      zh: '无核苏丹娜葡萄干 Sultana (9号与10号顶级规格)、天然纯阳晒汤普森干、黄金葡萄干与特级绿长葡萄干',
      vi: 'Nho khô Sultana (Loại 9/10), nho khô tự nhiên Thompson, nho vàng và nho xanh dài'
    },
    packaging: {
      tr: '10 kg ve 12.5 kg standart ihracat kolileri, gıda ile temasa uygun iç polietilen torba',
      en: '10 kg & 12.5 kg standard export cartons with food-grade blue polyethylene liner',
      de: '10 kg & 12.5 kg Standard-Exportkartons mit lebensmittelechtem PE-Innenbeutel',
      it: 'Cartoni da export da 10 kg e 12.5 kg con sacco interno in PE per alimenti',
      ru: 'Экспортные гофрокороба по 10 кг и 12.5 кг с пищевым полиэтиленовым вкладышем',
      fa: 'کارتن‌های ۱۰ و ۱۲.۵ کیلوگرمی استاندارد صادراتی با کیسه پلی‌اتیلن آبی‌رنگ بهداشتی مخصوص مواد غذایی',
      zh: '10 公斤与 12.5 公斤出口纸箱内衬食品级蓝色聚乙烯防尘密封袋',
      vi: 'Thùng carton xuất khẩu tiêu chuẩn 10 kg & 12.5 kg có túi lót PE màu xanh đạt chuẩn thực phẩm'
    },
    moq: {
      tr: '1 Metrik Ton / 1x20\' FCL (yaklaşık 18-20 MT)',
      en: '1 Metric Ton / 1x20\' FCL (approx. 18-20 MT)',
      de: '1 Tonne / 1x20\' FCL (ca. 18-20 t)',
      it: '1 Tonnellata / 1x20\' FCL (ca. 18-20 t)',
      ru: '1 метрическая тонна / 1x20\' FCL (около 18-20 т)',
      fa: '۱ تن متریک / ۱ کانتینر ۲۰ فوت (حدود ۱۸ الی ۲۰ تن)',
      zh: '1 公吨起订 / 1 个 20 尺标准集装箱 FCL（净重约 18 至 20 公吨）',
      vi: '1 tấn / 1 container 20 feet FCL (khoảng 18-20 tấn)'
    },
    qualityDocs: {
      tr: 'Okratoksin A (OTA) analiz sertifikası, SO2 analiz raporu, Tane sayısı kontrolü, Bitki Sağlık Belgesi',
      en: 'Ochratoxin A (OTA) lab certificate, SO2 compliance report, Berry count per 100g, Phytosanitary Certificate',
      de: 'Ochratoxin-A-Zertifikat (OTA), SO2-Prüfbericht, Beerenanzahl je 100 g, Pflanzengesundheitszeugnis',
      it: 'Certificato Ocratossina A (OTA), Rapporto SO2, Conteggio bacche per 100 g, Certificato fitosanitario',
      ru: 'Сертификат на охратоксин А (OTA), отчет по SO2, калибровка ягод на 100 г, фитосанитарный сертификат',
      fa: 'برگه آنالیز اوکراتوکسین (OTA)، میزان مجاز گوگرد SO2، شمارش دانه در ۱۰۰ گرم، گواهی بهداشت نباتی',
      zh: '赭曲霉毒素 A (OTA) 检测报告、二氧化硫 SO2 残留检测、百克果粒粒数分级单、植物检疫证书',
      vi: 'Chứng nhận Ochratoxin A (OTA), Báo cáo kiểm định SO2, Đếm số quả trên 100g, Giấy kiểm dịch thực vật'
    },
    samplePolicy: {
      tr: '500g kalite ve renk sınıflandırma numunesi kargo ile gönderilir',
      en: '500g representative grading sample dispatched via express courier',
      de: '500 g Chargenmuster zur Qualitätsprüfung per Kurier verfügbar',
      it: 'Campione rappresentativo da 500 g inviato tramite corriere espresso',
      ru: 'Репрезентативный образец 500 г для оценки сорта отправляется курьером',
      fa: 'ارسال نمونه ۵۰۰ گرمی سورت‌شده برای ارزیابی رنگ و سایز از طریق پست سریع',
      zh: '支持寄递 500 克代表性批次实样供比对色泽、颗粒丰满度与净度',
      vi: 'Mẫu 500g phân loại chất lượng gửi chuyển phát nhanh'
    },
    privateLabel: {
      tr: 'Özel koli baskısı ve perakende poşet dolumu (250g, 500g, 1kg) yapılabilir',
      en: 'Custom master carton printing and retail bag packing (250g, 500g, 1kg) supported',
      de: 'Individueller Kartondruck und Kleinpackungsabfüllung (250 g, 500 g, 1 kg)',
      it: 'Stampa personalizzata cartoni e confezionamento retail in buste (250 g, 500 g, 1 kg)',
      ru: 'Печать коробов по макету и розничная фасовка (250 г, 500 г, 1 кг)',
      fa: 'چاپ کارتن اختصاصی و بسته‌بندی در بسته‌های خرده‌فروشی (۲۵۰ گرمی، ۵۰۰ گرمی و ۱ کیلوگرمی)',
      zh: '支持外箱全彩印刷及买方品牌定制零售小包装（250克、500克、1公斤立袋）',
      vi: 'In thùng carton riêng và đóng gói túi bán lẻ (250g, 500g, 1kg)'
    },
    incoterms: {
      tr: 'FOB İzmir / Mersin / Bandar Abbas, CIF küresel limanlar, DAP',
      en: 'FOB Izmir / Mersin / Bandar Abbas, CIF global destination ports, DAP Europe',
      de: 'FOB Izmir / Mersin / Bandar Abbas, CIF Zielhäfen weltweit, DAP Europa',
      it: 'FOB Izmir / Mersin / Bandar Abbas, CIF porti di destinazione mondiali, DAP Europa',
      ru: 'FOB Измир / Мерсин / Бендер-Аббас, CIF мировые порты, DAP Европа',
      fa: 'FOB ازمیر / مرسین / بندرعباس، CIF بنادر مقصد در سراسر جهان، تحویل DAP در اروپا',
      zh: 'FOB 伊兹密尔 / 梅尔辛 / 阿巴斯港，CIF 全球主流港口，欧洲大陆 DAP 门点',
      vi: 'FOB Izmir / Mersin / Bandar Abbas, CIF các cảng biển toàn cầu, DAP châu Âu'
    },
    leadTime: {
      tr: '7-12 iş günü optik ayıklama, yıkama, boyutlandırma ve sevkiyat',
      en: '7-12 business days optical sorting, washing, sizing, laser cleaning and packing',
      de: '7-12 Werktage für Waschen, Lasersortierung, Größensortierung und Verpackung',
      it: '7-12 giorni lavorativi per lavaggio, cernita laser, calibrazione e imballaggio',
      ru: '7-12 рабочих дней на мойку, лазерную сортировку, калибровку и упаковку',
      fa: '۷ الی ۱۲ روز کاری جهت شستشو، سورت لیزری، دانه‌بندی و بسته‌بندی نهایی',
      zh: '7 至 12 个工作日内完成工业清洗、激光色选除梗、标准定级与封装出运',
      vi: '7-12 ngày làm việc để phân loại quang học, rửa, sàng lọc kích thước và đóng gói'
    },
    storage: {
      tr: 'Serin, kuru depo (<15°C, <%55 bağıl nem); doğrudan ışıktan korunmalı',
      en: 'Cool, dry warehouse at <15°C and <55% RH away from direct light; avoid moisture spikes',
      de: 'Kühl und trocken lagern (<15°C, <55% relative Feuchte), lichtgeschützt',
      it: 'Magazzino fresco e asciutto a <15°C e <55% UR, al riparo dalla luce diretta',
      ru: 'Сухой прохладный склад при температуре <15°C и влажности <55%',
      fa: 'انبار خنک و خشک در دمای زیر ۱۵ درجه و رطوبت زیر ۵۵٪ دور از تابش مستقیم آفتاب',
      zh: '在低于 15°C 及相对湿度 55% 以下避光干燥通风仓库贮存，防止果糖析出析晶',
      vi: 'Kho khô mát ở <15°C và độ ẩm <55%, tránh ánh sáng trực tiếp'
    },
    intendedUse: {
      tr: 'Fırıncılık ve pastacılık ürünleri, kahvaltılık gevrekler, atıştırmalık kuruyemiş paketleri',
      en: 'Bakery and pastry manufacturing, breakfast cereals and muesli, snack packs, confectionery',
      de: 'Back- und Konditoreiwaren, Frühstückszerealien, Müsli, Snackmischungen, Süßwaren',
      it: 'Industria dolciaria e della panificazione, cereali per la colazione, snack, pasticceria',
      ru: 'Хлебопекарное и кондитерское производство, сухие завтраки, смеси снеков',
      fa: 'صنایع نان و شیرینی‌پزی، غلات صبحانه و گرانولا، ترکیب آجیل و بسته‌بندی تنقلات',
      zh: '工业面包烘焙辅料、麦片与谷物早餐饮品添加、混合果干零售分装及糖果夹心',
      vi: 'Bánh mì và bánh ngọt, ngũ cốc ăn sáng, gói hạt ăn vặt, bánh kẹo'
    },
    quoteRequirements: {
      tr: 'Üzüm çeşidi (Sultani Tip 9/10, Thomson vb.), miktar, SO2 gereksinimi ve varış limanı',
      en: 'Variety (Sultana Type 9/10, Thompson, etc.), volume, SO2 parameter and delivery port',
      de: 'Rosinenart (Sultana Typ 9/10, Thompson etc.), Menge, SO2-Parameter und Zielhafen',
      it: 'Varietà (Sultana Tipo 9/10, Thompson, ecc.), volume, parametro SO2 e porto di arrivo',
      ru: 'Сорт (Султана 9/10, Томпсон и т.д.), объем, допустимый уровень SO2 и порт назначения',
      fa: 'نوع کشمش (سلطانی تیپ ۹ یا ۱۰، آفتابی و غیره)، تناژ، حد مجاز گوگرد و بندر مقصد',
      zh: '明确目标品种（苏丹娜9号/10号、汤普森等）、采购吨位、二氧化硫残留要求与目的港',
      vi: 'Chủng loại nho (Sultana Loại 9/10, Thompson, v.v.), khối lượng, yêu cầu SO2 và cảng đến'
    }
  },

  'almonds': {
    origin: {
      tr: 'Türkiye (Ege & Akdeniz havzası) / İran (Chaharmahal Mamra)',
      en: 'Türkiye (Aegean & Mediterranean) / Iran (Chaharmahal Mamra)',
      de: 'Türkei (Ägäis & Mittelmeer) / Iran (Tschahār Mahāl Mamra)',
      it: 'Turchia (Bacino dell’Egeo e del Mediterraneo) / Iran (Chaharmahal Mamra)',
      ru: 'Турция (Эгейский и Средиземноморский бассейны) / Иран (Мамра)',
      fa: 'ترکیه (مناطق اژه و مدیترانه) / ایران (بادام مامایی چهارمحال و سامان)',
      zh: '土耳其（爱琴海与地中海产区） / 伊朗（恰哈马哈勒顶级玛姆拉 Mamra 特色产区）',
      vi: 'Thổ Nhĩ Kỳ (Vùng Aegean & Địa Trung Hải) / Iran (Mamra)'
    },
    variety: {
      tr: 'Doğal Badem İçi (Ferragnes, Nonpareil 25/27, 27/30 kalibre) ve Nadir Mamra Bademi (duble iri)',
      en: 'Natural Almond Kernels (Ferragnes, Nonpareil calibers 25/27, 27/30) and Rare Mamra Kernels',
      de: 'Natürliche Mandelkerne (Ferragnes, Nonpareil Kaliber 25/27, 27/30) und seltene Mamra-Mandeln',
      it: 'Mandorle sgusciate naturali (Ferragnes, Nonpareil calibri 25/27, 27/30) e rare mandorle Mamra',
      ru: 'Натуральные ядра миндаля (Ферраньес, Нонпарель 25/27, 27/30) и редкий сорт Мамра',
      fa: 'مغز بادام درختی طبیعی (ارقام فرانیس، نان‌پاریل کالیبر ۲۵/۲۷ و ۲۷/۳۰) و مغز بادام مامایی ممتاز (گرید دوبل و ۱۰۰ دان)',
      zh: '天然精选巴旦木仁（Ferragnes 及 Nonpareil 规格 25/27、27/30）与稀缺高油脂纯种 Mamra 玛姆拉仁',
      vi: 'Nhân hạnh nhân tự nhiên (Ferragnes, Nonpareil cỡ 25/27, 27/30) và hạnh nhân Mamra quý hiếm'
    },
    packaging: {
      tr: '10 kg vakumlu karton koliler; 25 kg polipropilen çuvallar',
      en: '10 kg vacuum export cartons; 25 kg PP woven sacks',
      de: '10 kg Vakuum-Exportkartons; 25 kg PP-Gewebesäcke',
      it: 'Cartoni sottovuoto per export da 10 kg; sacchi in PP da 25 kg',
      ru: 'Экспортные вакуумные короба по 10 кг; полипропиленовые мешки по 25 кг',
      fa: 'کارتن‌های وکیوم ۱۰ کیلوگرمی صادراتی؛ کیسه‌های ۲۵ کیلوگرمی استاندارد',
      zh: '10 公斤真空防潮高强出口纸箱；25 公斤编织袋内衬食品内膜',
      vi: 'Thùng carton chân không 10 kg xuất khẩu; bao dệt PP 25 kg'
    },
    moq: {
      tr: '1 Metrik Ton / 1x20\' FCL',
      en: '1 Metric Ton / 1x20\' FCL',
      de: '1 Tonne / 1x20\' FCL',
      it: '1 Tonnellata / 1x20\' FCL',
      ru: '1 метрическая тонна / 1x20\' FCL',
      fa: '۱ تن متریک / ۱ کانتینر ۲۰ فوت',
      zh: '1 公吨起订 / 1 个 20 尺整柜 FCL',
      vi: '1 tấn / 1 container 20 feet FCL'
    },
    qualityDocs: {
      tr: 'Akredite Aflatoksin analiz sertifikası, Nem analizi (<%6), Bitki Sağlık Belgesi, Menşe Belgesi',
      en: 'Accredited Aflatoxin COA, Moisture analysis (<6%), Phytosanitary Certificate, Certificate of Origin',
      de: 'Akkreditiertes Aflatoxin-COA, Feuchteprüfung (<6%), Pflanzengesundheitszeugnis, Ursprungszeugnis',
      it: 'COA aflatossine accreditato, Analisi umidità (<6%), Certificato fitosanitario, Certificato di origine',
      ru: 'Аккредитованный COA на афлатоксины, анализ влажности (<6%), фитосанитарный сертификат, сертификат происхождения',
      fa: 'برگه آنالیز معتبر آفلاتوکسین، رطوبت سنجی (زیر ۶٪)، گواهی بهداشت نباتی، گواهی مبدأ',
      zh: '黄曲霉毒素官方质检单、水分检测表（严格控制在6%以内）、出入境植物检疫证明书、原产地证',
      vi: 'Chứng nhận Aflatoxin kiểm định, Phân tích độ ẩm (<6%), Giấy kiểm dịch thực vật, Chứng nhận xuất xứ'
    },
    samplePolicy: {
      tr: '500g temsilî analiz numunesi hava yolu ile temin edilir',
      en: '500g representative grading sample dispatched via air express',
      de: '500 g repräsentatives Qualitätsmuster per Expressluftfracht',
      it: 'Campione rappresentativo da 500 g inviato tramite corriere aereo',
      ru: 'Репрезентативный образец 500 г для оценки качества экспресс-доставкой',
      fa: 'ارسال ۵۰۰ گرم نمونه نماینده بار با پست پیشتاز هوایی جهت بررسی کیفیت مغز',
      zh: '可通过国际空运快件向资质买方直递 500 克标准代表性留样',
      vi: 'Mẫu đại diện 500g gửi chuyển phát nhanh hàng không'
    },
    privateLabel: {
      tr: 'Özel marka paketleme ve koli baskısı desteklenir',
      en: 'Private label retail packing and customized outer cartons supported',
      de: 'Eigenmarkenverpackung und individualisierter Kartondruck',
      it: 'Confezionamento private label e stampa cartoni personalizzata',
      ru: 'Фасовка под СТМ и брендирование коробов по заказу',
      fa: 'پشتیبانی از بسته‌بندی با برند اختصاصی و چاپ اختصاصی کارتن‌ها',
      zh: '按合同量全面支持自立袋 OEM 包装代工与外箱喷码贴牌',
      vi: 'Hỗ trợ đóng gói nhãn riêng và in thùng carton theo yêu cầu'
    },
    incoterms: {
      tr: 'FOB, CIF, DAP',
      en: 'FOB, CIF, DAP',
      de: 'FOB, CIF, DAP',
      it: 'FOB, CIF, DAP',
      ru: 'FOB, CIF, DAP',
      fa: 'FOB، CIF، DAP',
      zh: 'FOB、CIF、目的地工商业现场 DAP',
      vi: 'FOB, CIF, DAP'
    },
    leadTime: {
      tr: '10-14 iş günü',
      en: '10-14 business days',
      de: '10-14 Werktage',
      it: '10-14 giorni lavorativi',
      ru: '10-14 рабочих дней',
      fa: '۱۰ الی ۱۴ روز کاری',
      zh: '10 至 14 个工作日',
      vi: '10-14 ngày làm việc'
    },
    storage: {
      tr: '5-12°C serin ve kuru ortamda saklanmalıdır',
      en: 'Store at 5-12°C in dry, temperature-controlled facilities',
      de: 'Lagerung bei 5-12°C in trockenen, temperaturkontrollierten Lagern',
      it: 'Conservare a 5-12°C in ambienti asciutti a temperatura controllata',
      ru: 'Хранить при температуре 5-12°C в сухих складах с климат-контролем',
      fa: 'نگهداری در دمای ۵ الی ۱۲ درجه در انبار خنک، خشک و دارای کنترل دما',
      zh: '在 5 至 12°C 恒温恒湿干燥保税库贮存，杜绝氧化哈败',
      vi: 'Bảo quản ở 5-12°C tại cơ sở khô ráo có kiểm soát nhiệt độ'
    },
    intendedUse: {
      tr: 'Kuruyemiş kavurma, badem unu ve ezmesi üretimi, çikolata ve marzipan endüstrisi',
      en: 'Nut roasting, almond flour/meal manufacturing, marzipan, chocolate inclusion, plant-based beverages',
      de: 'Röstbetriebe, Mandelmehl- und Pastenherstellung, Marzipan, Schokolade, pflanzliche Getränke',
      it: 'Torrefazione, produzione di farina e pasta di mandorle, marzapane, cioccolato, bevande vegetali',
      ru: 'Обжарка, производство миндальной муки и пасты, марципан, шоколад, растительные напитки',
      fa: 'برشته‌کاری، تولید آرد و خلال بادام، صنایع شکلات‌سازی، مارزیپان و فرآورده‌های نوشیدنی گیاهی',
      zh: '坚果专业烘焙加工、巴旦木果粉与果酱研磨、高端杏仁糖马卡龙原料、植物基坚果奶压榨',
      vi: 'Rang hạt, sản xuất bột/paste hạnh nhân, bánh marzipan, sô-cô-la, đồ uống thực vật'
    },
    quoteRequirements: {
      tr: 'Çeşit tercihi (Ferragnes, Nonpareil veya Mamra), kalibre, tonaj ve teslim şekli',
      en: 'Variety selection (Ferragnes, Nonpareil, or Mamra count), caliber, volume and delivery terms',
      de: 'Sortenauswahl (Ferragnes, Nonpareil oder Mamra), Kaliber, Menge und Lieferbedingungen',
      it: 'Selezione varietà (Ferragnes, Nonpareil o Mamra), calibro, volume e termini di consegna',
      ru: 'Выбор сорта (Ферраньес, Нонпарель или Мамра), калибр, объем и условия поставки',
      fa: 'نوع رقم (فرانیس، نان‌پاریل یا مامایی)، کالیبر، حجم سفارش و اینکوترمز تحویل',
      zh: '明确品种意向（法兰尼斯/标准无匹/玛姆拉数率）、规格孔径、采购总量及贸易条款',
      vi: 'Lựa chọn giống (Ferragnes, Nonpareil, hoặc Mamra), cỡ hạt, khối lượng và điều kiện giao hàng'
    }
  },

  'walnuts': {
    origin: {
      tr: 'Türkiye / Bölgesel anlaşmalı bahçeler',
      en: 'Türkiye / Regional vetted orchards',
      de: 'Türkei / Regionale Vertragsanbaugebiete',
      it: 'Turchia / Frutteti convenzionati regionali',
      ru: 'Турция / региональные проверенные сады',
      fa: 'ترکیه / باغات دستچین منطقه‌ای',
      zh: '土耳其及周边高海拔专属核桃合作果园',
      vi: 'Thổ Nhĩ Kỳ / Vườn trồng được kiểm định trong khu vực'
    },
    variety: {
      tr: 'Kabuklu Ceviz (30mm+, 32mm+, 34mm+ Chandler / Fernor) ve Açık Renk İç Ceviz (Kelebek %80+)',
      en: 'In-Shell Walnuts (30mm+, 32mm+, 34mm+ Chandler/Fernor) and Extra Light Halves Kernels (80%+)',
      de: 'Walnüsse in der Schale (30mm+, 32mm+, 34mm+ Chandler/Fernor) und extra helle Hälften (80%+)',
      it: 'Noci in guscio (30mm+, 32mm+, 34mm+ Chandler/Fernor) e gherigli extra light a metà (80%+)',
      ru: 'Грецкий орех в скорлупе (30мм+, 32мм+, 34мм+ Чандлер/Фернор) и светлые половинки ядер (80%+)',
      fa: 'گردوی با پوست (کالیبر ۳۰+، ۳۲+ و ۳۴+ میلیمتر ارقام چندلر و فرنور) و مغز گردوی پروانه‌ای روشن اعلا (۸۰٪+ دوقلو)',
      zh: '优选带壳核桃（Chandler / Fernor 粒径 30mm+、32mm+、34mm+）与特级特浅色半颗手工核桃仁（二分之一二分体 80% 以上）',
      vi: 'Quả óc chó nguyên vỏ (30mm+, 32mm+, 34mm+ Chandler/Fernor) và nhân óc chó nguyên nửa sáng màu (80%+)'
    },
    packaging: {
      tr: 'Kabuklu: 25 kg file/jüt çuval; İç ceviz: 10 kg vakumlu korumalı koli',
      en: 'In-shell: 25 kg mesh/poly bags; Kernels: 10 kg vacuum protective master cartons',
      de: 'In Schale: 25 kg Netz-/PP-Säcke; Kerne: 10 kg Vakuum-Schutzkartons',
      it: 'In guscio: sacchi a rete/PP da 25 kg; Gherigli: cartoni sottovuoto da 10 kg',
      ru: 'В скорлупе: сетчатые/полипропиленовые мешки по 25 кг; Ядра: вакуумные короба по 10 кг',
      fa: 'با پوست: کیسه‌های توری/پلی‌پروپیلن ۲۵ کیلوگرمی؛ مغز گردو: کارتن‌های وکیوم ۱۰ کیلوگرمی محافظت‌شده',
      zh: '带壳核桃：25 公斤透气网眼袋/编织袋；纯核桃仁：10 公斤充气避光真空阻隔纸箱',
      vi: 'Nguyên vỏ: bao lưới/bao PP 25 kg; Nhân óc chó: thùng carton chân không 10 kg bảo vệ'
    },
    moq: {
      tr: '1 Metrik Ton / 1x40\' FCL',
      en: '1 Metric Ton / 1x40\' FCL',
      de: '1 Tonne / 1x40\' FCL',
      it: '1 Tonnellata / 1x40\' FCL',
      ru: '1 метрическая тонна / 1x40\' FCL',
      fa: '۱ تن متریک / ۱ کانتینر ۴۰ فوت',
      zh: '1 公吨起订 / 1 个 40 尺整柜 FCL',
      vi: '1 tấn / 1 container 40 feet FCL'
    },
    qualityDocs: {
      tr: 'FFA (Serbest Yağ Asidi) analizi, Peroksit değeri, Nem testi (<%8), Bitki Sağlık Belgesi',
      en: 'FFA (Free Fatty Acid) analysis, Peroxide value, Moisture test (<8%), Phytosanitary Certificate',
      de: 'FFA-Wert, Peroxidzahl, Feuchtemessung (<8%), Pflanzengesundheitszeugnis',
      it: 'Analisi FFA (acidi grassi liberi), Numero di perossidi, Umidità (<8%), Certificato fitosanitario',
      ru: 'Анализ свободных жирных кислот (FFA), перекисное число, влажность (<8%), фитосанитарный сертификат',
      fa: 'آزمایش اسیدهای چرب آزاد (FFA)، عدد پراکسید، تست رطوبت (زیر ۸٪)، گواهی بهداشت نباتی',
      zh: '游离脂肪酸 FFA 测定表、过氧化值检验单、水分检验报告（低于8%）、官方植物检疫报告',
      vi: 'Phân tích axit béo tự do (FFA), Chỉ số peroxit, Độ ẩm (<8%), Giấy kiểm dịch thực vật'
    },
    samplePolicy: {
      tr: '500g kalite ve kabuk randıman numunesi temin edilir',
      en: '500g kernel grading and shell crack-out sample available',
      de: '500 g Qualitäts- und Ausbeutemuster bereitgestellt',
      it: 'Campione di valutazione resa e qualità da 500 g disponibile',
      ru: 'Образец 500 г для оценки качества и выхода ядра',
      fa: 'ارسال ۵۰۰ گرم نمونه جهت سنجش درصد سفیدی مغز، درصد چربی و راندمان شکستن پوست',
      zh: '可提供 500 克实物大样供核验出仁率、果壳饱满度与果仁色度',
      vi: 'Mẫu 500g đánh giá chất lượng và tỷ lệ nhân'
    },
    privateLabel: {
      tr: 'Koli baskısı ve perakende kilitli torba paketleme',
      en: 'Master carton branding and retail stand-up pouch packaging',
      de: 'Umkartonbedruckung und Doypack-Abfüllung für den Handel',
      it: 'Branding cartone master e confezionamento in buste richiudibili',
      ru: 'Печать внешних коробов и фасовка в розничные пакеты с замком zip-lock',
      fa: 'چاپ برند روی کارتن‌های مادر و بسته‌بندی در پاکت‌های زیپ‌دار زیپ‌کیپ',
      zh: '支持外箱企业品牌定制及零售级自立拉链袋分装',
      vi: 'In nhãn thùng carton mẹ và đóng gói túi zip bán lẻ'
    },
    incoterms: {
      tr: 'FOB Türkiye Limanları, CIF, DAP',
      en: 'FOB Turkish Ports, CIF, DAP',
      de: 'FOB türkische Häfen, CIF, DAP',
      it: 'FOB porti turchi, CIF, DAP',
      ru: 'FOB порты Турции, CIF, DAP',
      fa: 'FOB بنادر ترکیه، CIF، تحویل DAP',
      zh: 'FOB 土耳其出境口岸、CIF 全球海运航线、欧洲 DAP 到厂',
      vi: 'FOB Cảng Thổ Nhĩ Kỳ, CIF, DAP'
    },
    leadTime: {
      tr: '10-15 iş günü',
      en: '10-15 business days',
      de: '10-15 Werktage',
      it: '10-15 giorni lavorativi',
      ru: '10-15 рабочих дней',
      fa: '۱۰ الی ۱۵ روز کاری',
      zh: '10 至 15 个工作日',
      vi: '10-15 ngày làm việc'
    },
    storage: {
      tr: 'Oksidasyonu önlemek için +4°C ile +8°C kontrollü depolama',
      en: 'Controlled storage at +4°C to +8°C in dry conditions to prevent oil rancidity',
      de: 'Kühllagerung bei +4°C bis +8°C zur Vermeidung von Fettverderb',
      it: 'Conservazione a +4°C fino a +8°C in ambiente asciutto per prevenire l’irrancidimento',
      ru: 'Контролируемое хранение при температуре от +4°C до +8°C для предотвращения окисления',
      fa: 'نگهداری در سردخانه با دمای مثبت ۴ تا مثبت ۸ درجه جهت پیشگیری از اکسیداسیون و ترشیدگی چربی',
      zh: '存放在 +4°C 至 +8°C 控温冷藏库，严格隔绝高温与氧气，抑制油脂酸败',
      vi: 'Bảo quản có kiểm soát ở +4°C đến +8°C trong điều kiện khô ráo tránh ôi dầu'
    },
    intendedUse: {
      tr: 'Perakende tüketim, pastacılık ve tatlı üretimi, ceviz yağı ekstraksiyonu',
      en: 'Retail consumer packs, culinary pastry, walnut oil extraction, snack blends',
      de: 'Verbraucherpackungen, Konditorei, Walnussölextraktion, Snackmischungen',
      it: 'Confezioni retail, pasticceria e ristorazione, estrazione olio di noci, mix di noci',
      ru: 'Ритейл упаковка, кондитерское производство, отжим масла, смеси орехов',
      fa: 'خرده‌فروشی، صنایع کیک، شیرینی و باقلوا، روغن‌گیری صنعتی و ترکیبات آجیلی سالم',
      zh: '商超干果生鲜零售、高端烘焙调配、冷榨高端核桃食用油提炼以及混合坚果包',
      vi: 'Gói tiêu dùng bán lẻ, bánh ngọt ẩm thực, chiết xuất dầu óc chó, hỗn hợp ăn vặt'
    },
    quoteRequirements: {
      tr: 'Kabuklu kalibre veya iç ceviz kelebek oranı (%80 vb.), hasat yılı ve miktar',
      en: 'In-shell caliber or kernel halves percentage (e.g. 80%+), crop year and volume',
      de: 'Kaliber in der Schale oder Hälftenanteil bei Kernen (z.B. 80%+), Erntejahr und Tonnage',
      it: 'Calibro in guscio o percentuale gherigli a metà (es. 80%+), anno di raccolto e volume',
      ru: 'Калибр ореха в скорлупе или процент половинок ядра (напр. 80%+), год урожая и объем',
      fa: 'سایز گردوی با پوست یا درصد مغز پروانه‌ای دو نیمه (مثلاً بالای ۸۰٪)، سال زراعی و تناژ',
      zh: '明确带壳孔径（毫米）或核桃仁二分之一半颗比例（如 80%+ 浅色原仁）、产明年份与需求吨数',
      vi: 'Cỡ hạt nguyên vỏ hoặc tỷ lệ nhân nguyên nửa (vd: 80%+), vụ mùa và khối lượng'
    }
  },

  'dried-apricots-kernels': {
    origin: {
      tr: 'Türkiye (Malatya ili ve çevresi coğrafi işaretli koruma alanı)',
      en: 'Türkiye (Malatya province protected geographical indication area)',
      de: 'Türkei (Provinz Malatya, geschützte geografische Angabe)',
      it: 'Turchia (Provincia di Malatya, indicazione geografica protetta)',
      ru: 'Турция (провинция Малатья, географически защищенная зона)',
      fa: 'ترکیه (استان مالاتیا، منطقه انحصاری دارای نشان جغرافیایی حفاظت‌شده)',
      zh: '土耳其（马拉蒂亚 Malatya 欧盟原产地地理标志保护核心区）',
      vi: 'Thổ Nhĩ Kỳ (Vùng chỉ dẫn địa lý được bảo hộ tỉnh Malatya)'
    },
    variety: {
      tr: 'Doğal Gün Kurusu (koyu kahverengi) & Kükürtlü Kuru Kayısı (Jumbo, No: 1-6) ve Tatlı Kayısı Çekirdeği',
      en: 'Natural Sun-Dried (Günkurusu, dark brown) & Sulphured Dried Apricots (Jumbo, Size 1-6) and Sweet Kernels',
      de: 'Natürliche sonnengetrocknete (Günkurusu, dunkel) & geschwefelte Aprikosen (Jumbo, Gr. 1-6) & süße Kerne',
      it: 'Albicocche essiccate al sole naturali (Günkurusu) & solforate (Jumbo, cal. 1-6) e noccioli dolci',
      ru: 'Натуральная курага солнечной сушки (Гюнкурусу) и сернистая (Джамбо, № 1-6), сладкие ядрышки',
      fa: 'برگه زردآلوی طبیعی آفتاب‌خشک گونکوروسو (قهوه‌ای تیره ارگانیک)، زردآلوی گوگردی صادراتی (جومبو و سایزهای ۱ الی ۶) و مغز هسته زردآلو شیرین',
      zh: '天然日光晾晒深褐有机黑杏干 (Günkurusu)、传统脱水金黄干杏（Jumbo 及 1 至 6 号标准分级）与去皮甜杏仁',
      vi: 'Mơ sấy tự nhiên (Günkurusu, màu nâu sẫm) & Mơ sấy lưu huỳnh (Jumbo, Cỡ 1-6) và Hạt mơ ngọt'
    },
    packaging: {
      tr: '5 kg ve 10 kg teleskopik ihracat kolileri; 12.5 kg dökme; 200g-1kg perakende kilitli paketler',
      en: '5 kg & 10 kg telescopic master cartons; 12.5 kg bulk; 200g-1kg retail doy-packs',
      de: '5 kg & 10 kg Teleskop-Exportkartons; 12.5 kg Großpackung; 200 g-1 kg Retail-Doypacks',
      it: 'Cartoni telescopici da 5 kg e 10 kg; sfuso da 12.5 kg; doypack retail da 200 g-1 kg',
      ru: 'Телескопические гофрокороба по 5 кг и 10 кг; насыпью по 12.5 кг; дой-паки от 200 г до 1 кг',
      fa: 'کارتن‌های تلسکوپی مستحکم صادراتی ۵ و ۱۰ کیلوگرمی؛ فله ۱۲.۵ کیلویی؛ پاکت‌های زیپ‌دار خرده‌فروشی ۲۰۰ گرمی الی ۱ کیلویی',
      zh: '5 公斤与 10 公斤天地盖出口专用伸缩硬纸箱；12.5 公斤大宗箱；200克至1公斤定制立式拉链袋',
      vi: 'Thùng carton nắp chụp 5 kg & 10 kg; bao 12.5 kg; túi zip bán lẻ 200g-1kg'
    },
    moq: {
      tr: '1 Metrik Ton / 1x20\' FCL (yaklaşık 18 MT)',
      en: '1 Metric Ton / 1x20\' FCL (approx. 18 MT)',
      de: '1 Tonne / 1x20\' FCL (ca. 18 t)',
      it: '1 Tonnellata / 1x20\' FCL (ca. 18 t)',
      ru: '1 метрическая тонна / 1x20\' FCL (около 18 т)',
      fa: '۱ تن متریک / ۱ کانتینر ۲۰ فوت (حدود ۱۸ تن)',
      zh: '1 公吨起订 / 1 个 20 尺整柜 FCL（约 18 公吨）',
      vi: '1 tấn / 1 container 20 feet FCL (khoảng 18 tấn)'
    },
    qualityDocs: {
      tr: 'SO2 seviyesi sertifikası (kükürtlü için AB limiti <2000 ppm; gün kurusu için %0), Nem analizi (<%22), Bitki Sağlık Belgesi',
      en: 'SO2 certification (EU limit <2000 ppm for sulphured; 0 ppm for natural günkurusu), Moisture (<22%), Phytosanitary Certificate',
      de: 'SO2-Zertifikat (EU-Grenzwert <2000 ppm für geschwefelt; 0 ppm für natürlich), Feuchte (<22%), Pflanzengesundheitszeugnis',
      it: 'Certificato SO2 (limite UE <2000 ppm per solforate; 0 ppm naturali), Umidità (<22%), Certificato fitosanitario',
      ru: 'Сертификат SO2 (лимит ЕС <2000 ppm для сернистой; 0 ppm для натуральной), влажность (<22%), фитосанитарный сертификат',
      fa: 'برگه رسمی سنجش گوگرد SO2 (مطابق حدود اتحادیه اروپا زیر ۲۰۰۰ ppm برای گوگردی و صفر درصد برای گونکوروسو)، رطوبت زیر ۲۲٪، گواهی بهداشت نباتی',
      zh: '严格符合欧盟标准的二氧化硫 SO2 残留化验单（传统金黄杏干低于 2000ppm，黑杏干 0 残留）、水分检测报告（低于22%）、出境检疫单',
      vi: 'Chứng nhận SO2 (giới hạn EU <2000 ppm cho mơ lưu huỳnh; 0 ppm cho tự nhiên), Độ ẩm (<22%), Giấy kiểm dịch thực vật'
    },
    samplePolicy: {
      tr: '500g ebat ve kalite kontrol numunesi temin edilir',
      en: '500g grade classification and sizing sample dispatched upon request',
      de: '500 g Sortierungs- und Größenmuster auf Anfrage bereitgestellt',
      it: 'Campione di calibratura e qualità da 500 g inviato su richiesta',
      ru: 'Образец 500 г для проверки калибра и качества по запросу',
      fa: 'ارسال ۵۰۰ گرم نمونه تفکیک‌شده از نظر سایز و رنگ برای خریداران تجاری',
      zh: '可向意向进口商提供 500 克标准果号、柔软度与色泽比对实样',
      vi: 'Mẫu 500g kiểm tra kích cỡ và chất lượng cung cấp theo yêu cầu'
    },
    privateLabel: {
      tr: 'Özel marka perakende doypack, şeffaf kap veya alıcı logolu koli baskısı',
      en: 'Private label retail doy-packs, punnets or custom-branded cartons supported',
      de: 'Eigenmarken-Doypacks, Schalen oder bedruckte Umkartons',
      it: 'Doypack a marchio privato, vaschette trasparenti o cartoni personalizzati',
      ru: 'СТМ фасовка в дой-паки, лотки или брендированные короба заказчика',
      fa: 'بسته‌بندی در دوی‌پک‌های اختصاصی، ظروف شفاف پلیمری و چاپ کارتن با برند خریدار',
      zh: '支持全套零售品牌 OEM 代工：包括充气立式拉链袋、透明果盒与外箱印刷',
      vi: 'Hỗ trợ đóng gói túi doypack nhãn riêng, hộp nhựa trong hoặc in thùng carton'
    },
    incoterms: {
      tr: 'FOB Mersin / İzmir / İstanbul, CIF küresel limanlar, DAP Avrupa',
      en: 'FOB Mersin / Izmir / Istanbul, CIF global ports, DAP continental destinations',
      de: 'FOB Mersin / Izmir / Istanbul, CIF Haupthäfen weltweit, DAP Europa',
      it: 'FOB Mersin / Izmir / Istanbul, CIF porti globali, DAP Europa',
      ru: 'FOB Мерсин / Измир / Стамбул, CIF мировые порты, DAP Европа',
      fa: 'FOB مرسین / ازمیر / استانبول، CIF بنادر تجاری جهان، تحویل درب انبار DAP در اروپا',
      zh: 'FOB 梅尔辛 / 伊兹密尔 / 伊斯坦布尔，CIF 全球核心港口，欧洲陆运 DAP 派送',
      vi: 'FOB Mersin / Izmir / Istanbul, CIF các cảng toàn cầu, DAP châu Âu'
    },
    leadTime: {
      tr: '7-12 iş günü',
      en: '7-12 business days',
      de: '7-12 Werktage',
      it: '7-12 giorni lavorativi',
      ru: '7-12 рабочих дней',
      fa: '۷ الی ۱۲ روز کاری',
      zh: '7 至 12 个工作日',
      vi: '7-12 ngày làm việc'
    },
    storage: {
      tr: 'Kuru ve serin ortam (<15°C); parlak sarı rengi korumak için soğuk hava tavsiye edilir',
      en: 'Store in cool, dry conditions (<15°C); cold storage preserves color vibrancy and tenderness',
      de: 'Kühl und trocken lagern (<15°C); Kühllagerung bewahrt Frische und Farbe',
      it: 'Conservare in luogo fresco e asciutto (<15°C); la refrigerazione preserva colore e morbidezza',
      ru: 'Хранить в сухом прохладном месте (<15°C); холод сохраняет цвет и мягкость',
      fa: 'نگهداری در جای خشک و خنک (زیر ۱۵ درجه)؛ نگهداری در سردخانه باعث حفظ رنگ زرد درخشان و رطوبت بافت می‌شود',
      zh: '在低于 15°C 干燥阴凉仓库贮存；进驻冷库能够极大延长金黄鲜亮色泽与软糯口感',
      vi: 'Bảo quản nơi khô ráo, thoáng mát (<15°C); bảo quản lạnh giúp giữ màu sắc và độ mềm'
    },
    intendedUse: {
      tr: 'Sağlıklı atıştırmalık, kahvaltılık müsli ve granola, fırıncılık, endüstriyel meyve dolguları',
      en: 'Healthy snacks, muesli and cereal mixtures, industrial bakery fillings, culinary processing',
      de: 'Gesunde Snacks, Müsli- und Zerealienmischungen, Fruchtfüllungen, Bäckereien',
      it: 'Snack salutari, muesli e cereali, farciture alla frutta per panificazione, pasticceria',
      ru: 'Здоровые снеки, мюсли и хлопья, промышленные фруктовые начинки, пекарни',
      fa: 'تنقلات سلامت‌محور، غلات صبحانه و موسلی، تهیه مارمالاد و مغزی کیک، مصارف آشپزی و قنادی صنعتی',
      zh: '纯天然健康果干零食、营养谷物早餐饮品配料、工业果酱烘焙夹心酱及高端餐饮甜点',
      vi: 'Ăn vặt lành mạnh, ngũ cốc muesli, nhân bánh ngọt công nghiệp, chế biến ẩm thực'
    },
    quoteRequirements: {
      tr: 'Ebat numarası (Jumbo, No: 1-4), gün kurusu veya kükürtlü seçimi, ambalaj ve teslim limanı',
      en: 'Size grade (Jumbo, Size 1-4), natural günkurusu vs sulphured, packaging and destination port',
      de: 'Größenstufe (Jumbo, Gr. 1-4), naturbelassen (Günkurusu) oder geschwefelt, Verpackung und Hafen',
      it: 'Calibro (Jumbo, n. 1-4), scelta naturale günkurusu o solforata, imballaggio e porto di arrivo',
      ru: 'Номер калибра (Джамбо, № 1-4), выбор натуральной (Гюнкурусу) или сернистой, упаковка и порт',
      fa: 'شماره سایز کالیبر (جومبو، سایز ۱ الی ۴)، انتخاب نوع طبیعی آفتابی یا گوگردی، نوع کارتن و بندر مقصد',
      zh: '明确果号规格（Jumbo 或 1-4 号）、天然黑杏干与金黄杏干比例、内外包装方案及卸货港口',
      vi: 'Cỡ quả (Jumbo, Cỡ 1-4), chọn loại tự nhiên günkurusu hay lưu huỳnh, bao bì và cảng đích'
    }
  },

  'pumpkin-seeds': {
    origin: {
      tr: 'Türkiye (İç Anadolu / Nevşehir, Kayseri havzası)',
      en: 'Türkiye (Central Anatolia / Nevsehir, Kayseri basin)',
      de: 'Türkei (Zentralanatolien / Nevşehir, Kayseri-Becken)',
      it: 'Turchia (Anatolia Centrale / Bacino di Nevşehir, Kayseri)',
      ru: 'Турция (Центральная Анатолия / Невшехир, Кайсери)',
      fa: 'ترکیه (آناتولی مرکزی / حوزه نوشهیر و قیصریه)',
      zh: '土耳其（安纳托利亚中部 / 内夫谢希尔与开塞利种植走廊）',
      vi: 'Thổ Nhĩ Kỳ (Miền Trung Anatolia / Nevsehir, Kayseri)'
    },
    variety: {
      tr: 'Kabuklu Beyaz Çerezlik Kabak Çekirdeği (Ürgüp sivrisi / kadınparmağı) ve Kabuksuz Yeşil Çekirdek İçi (GWS)',
      en: 'In-Shell White Confectionery Pumpkin Seeds (Ladyfinger / Urgup) and Grown-Without-Shell (GWS) Kernels',
      de: 'Weiße Kürbiskerne in der Schale (Ladyfinger / Ürgüp) und schalenlos gewachsene Kerne (GWS)',
      it: 'Semi di zucca bianchi in guscio (Ladyfinger / Ürgüp) e semi nudi senza guscio (GWS)',
      ru: 'Белые тыквенные семечки в скорлупе (Ургюп / Дамские пальчики) и голосемянные зеленые ядра (GWS)',
      fa: 'تخمه کدو گوشتی سفید با پوست (ارقام مرغوب اورگوپ و قلمی)، خام یا شورشده، و مغز کدو طبی بدون پوست (GWS)',
      zh: '特级雪白大粒带壳食用南瓜籽（Ürgüp 特色细长白皮果壳）与纯绿光板无壳南瓜籽仁 (GWS)',
      vi: 'Hạt bí trắng nguyên vỏ (dạng thuôn dài) và nhân hạt bí xanh không vỏ (GWS)'
    },
    packaging: {
      tr: '25 kg polipropilen çuvallar; 10 kg vakumlu karton koliler',
      en: '25 kg multi-wall PP woven bags; 10 kg vacuum cartons for kernels',
      de: '25 kg mehrlagige PP-Gewebesäcke; 10 kg Vakuumkartons für Kerne',
      it: 'Sacchi in PP da 25 kg; cartoni sottovuoto da 10 kg per i semi sgusciati',
      ru: 'Многослойные полипропиленовые мешки по 25 кг; вакуумные короба по 10 кг для ядер',
      fa: 'کیسه‌های لمینت ۲۵ کیلوگرمی چندلایه؛ کارتن‌های وکیوم ۱۰ کیلوگرمی برای مغز',
      zh: '25 公斤加厚聚丙烯编织袋；纯籽仁配 10 公斤充氮真空出口纸箱',
      vi: 'Bao dệt PP nhiều lớp 25 kg; thùng carton chân không 10 kg cho nhân'
    },
    moq: {
      tr: '1 Metrik Ton / 1x20\' FCL (yaklaşık 12-14 MT kabuklu, 18 MT iç)',
      en: '1 Metric Ton / 1x20\' FCL (approx. 12-14 MT in-shell, 18 MT kernels)',
      de: '1 Tonne / 1x20\' FCL (ca. 12-14 t in Schale, 18 t Kerne)',
      it: '1 Tonnellata / 1x20\' FCL (ca. 12-14 t in guscio, 18 t gherigli)',
      ru: '1 метрическая тонна / 1x20\' FCL (около 12-14 т в скорлупе, 18 т ядра)',
      fa: '۱ تن متریک / ۱ کانتینر ۲۰ فوت (حدود ۱۲ الی ۱۴ تن با پوست، ۱۸ تن مغز)',
      zh: '1 公吨起订 / 1 个 20 尺整柜 FCL（带壳约 12-14 公吨，去壳纯仁约 18 公吨）',
      vi: '1 tấn / 1 container 20 feet FCL (khoảng 12-14 tấn nguyên vỏ, 18 tấn nhân)'
    },
    qualityDocs: {
      tr: 'Saflık analizi (%99.5+), Nem ölçümü (<%7), Mikrobiyolojik analiz, Bitki Sağlık Belgesi',
      en: 'Purity analysis (99.5%+), Moisture test (<7%), Microbiological COA, Phytosanitary Certificate',
      de: 'Reinheitsanalyse (99.5%+), Feuchtemessung (<7%), Mikrobiologie-COA, Pflanzengesundheitszeugnis',
      it: 'Analisi purezza (99.5%+), Test umidità (<7%), COA microbiologico, Certificato fitosanitario',
      ru: 'Анализ чистоты (99.5%+), влажность (<7%), микробиологический COA, фитосанитарный сертификат',
      fa: 'سنجش خلوص بالای ۹۹.۵٪، رطوبت‌سنجی (زیر ۷٪)، آنالیز میکروبیولوژی و بهداشت نباتی',
      zh: '纯度分析报告（99.5% 以上）、水分检测单（严格低于 7%）、微生物化验单、出入境植物检疫证明',
      vi: 'Phân tích độ tinh khiết (99.5%+), Độ ẩm (<7%), COA vi sinh, Giấy kiểm dịch thực vật'
    },
    samplePolicy: {
      tr: '500g ebat ve kalite doğrulama numunesi kargo ile sağlanır',
      en: '500g representative lot sample dispatched via courier',
      de: '500 g repräsentatives Chargenmuster per Kurier',
      it: 'Campione rappresentativo da 500 g inviato tramite corriere',
      ru: 'Репрезентативный образец 500 г отправляется курьерской службой',
      fa: 'ارسال ۵۰۰ گرم نمونه نماینده برای سنجش ابعاد و توپر بودن دانه‌ها با پست سریع',
      zh: '寄发 500 克代表性大货样品供核验颗粒白度、饱满度与水分指标',
      vi: 'Mẫu đại diện 500g gửi chuyển phát nhanh'
    },
    privateLabel: {
      tr: 'Özel fırınlama profili (tuzlu/çiğ), özel çuval ve paket etiketleme desteği',
      en: 'Custom roasting profile (raw/salted), private labeling and sack branding supported',
      de: 'Individuelles Röstprofil (roh/gesalzen), Eigenmarkenetikettierung und Sackbedruckung',
      it: 'Profilo di tostatura personalizzato (crudo/salato), etichettatura e branding sacchi',
      ru: 'Индивидуальный профиль обжарки (сырые/соленые), СТМ маркировка и печать мешков',
      fa: 'برشته‌کاری سفارشی (خام یا نمکی)، چاپ اختصاصی روی کیسه‌ها و بسته‌بندی شرکتی',
      zh: '支持按买家口感定制烘炒咸淡配方、OEM 包装袋印刷与外袋喷码',
      vi: 'Hồ sơ rang tùy chỉnh (sống/muối), hỗ trợ nhãn riêng và in bao bì'
    },
    incoterms: {
      tr: 'FOB Türkiye Limanları, CIF, DAP',
      en: 'FOB Turkish Ports, CIF, DAP',
      de: 'FOB türkische Häfen, CIF, DAP',
      it: 'FOB porti turchi, CIF, DAP',
      ru: 'FOB порты Турции, CIF, DAP',
      fa: 'FOB بنادر ترکیه، CIF، DAP',
      zh: 'FOB 土耳其主要港口、CIF、欧洲大陆 DAP',
      vi: 'FOB Cảng Thổ Nhĩ Kỳ, CIF, DAP'
    },
    leadTime: {
      tr: '10-14 iş günü eleme, optik ayıklama ve paketleme',
      en: '10-14 business days sieving, optical grading and bagging',
      de: '10-14 Werktage für Siebung, optische Sortierung und Absackung',
      it: '10-14 giorni lavorativi per setacciatura, selezione ottica e insacco',
      ru: '10-14 рабочих дней на калибровку, фотосепаратор и фасовку',
      fa: '۱۰ الی ۱۴ روز کاری برای بوجاری، سورت نوری و کیسه‌گیری',
      zh: '10 至 14 个工作日完成机械去杂、光电色选分级与自动灌包',
      vi: '10-14 ngày làm việc để sàng lọc, phân loại quang học và đóng bao'
    },
    storage: {
      tr: 'Kuru, havalandırmalı ortam (<18°C, <%60 bağıl nem)',
      en: 'Cool, well-ventilated dry warehouse (<18°C, RH <60%)',
      de: 'Kühl, gut belüftet und trocken (<18°C, relative Feuchte <60%)',
      it: 'Magazzino fresco e ben ventilato (<18°C, UR <60%)',
      ru: 'Сухой хорошо проветриваемый склад (<18°C, влажность <60%)',
      fa: 'انبار خشک، خنک و دارای تهویه مناسب (دمای زیر ۱۸ درجه و رطوبت زیر ۶۰٪)',
      zh: '贮藏于低于 18°C、相对湿度 60% 以下通风良好的标准化干粮仓',
      vi: 'Kho thoáng khí, khô ráo (<18°C, độ ẩm <60%)'
    },
    intendedUse: {
      tr: 'Çerezlik kavurma tesisleri, fırıncılık üst malzeme, soğuk sıkım tohum yağı üretimi',
      en: 'Commercial snack roasting, bakery topping, cold-pressed pumpkin seed oil, health bars',
      de: 'Snackröstereien, Bäckereitoppings, kaltgepresstes Kürbiskernöl, Riegelherstellung',
      it: 'Torrefazioni di semi per snack, decorazione prodotti da forno, olio spremuto a freddo',
      ru: 'Обжарочные производства, посыпка для выпечки, производство масла холодного отжима',
      fa: 'کارخانجات برشته‌کاری آجیل، صنایع نان و شیرینی‌پزی، روغن‌کشی پرس سرد و تولید بارهای سلامت',
      zh: '坚果炒货烘烤、欧包及各类高级烘焙表面点缀、冷榨高端南瓜籽油压榨原料',
      vi: 'Cơ sở rang hạt ăn vặt, rắc mặt bánh, ép dầu hạt bí lạnh, thanh dinh dưỡng'
    },
    quoteRequirements: {
      tr: 'Kabuklu veya iç çekirdek, çiğ veya kavrulmuş tercihi, miktar ve teslim limanı',
      en: 'In-shell vs kernels, raw or roasted preference, volume and destination port',
      de: 'In Schale oder Kerne, Roh oder geröstet, Tonnage und Bestimmungshafen',
      it: 'In guscio o gherigli, preferenza crudo o tostato, volume e porto di destino',
      ru: 'В скорлупе или ядра, сырые или жареные, объем и порт назначения',
      fa: 'با پوست یا مغز خالص، خام یا تفت‌داده، تناژ و بندر مقصد',
      zh: '明确带壳或纯仁、生籽或定制烘烤咸度、意向采购吨位与收货港',
      vi: 'Nguyên vỏ hay nhân, sống hay rang, khối lượng và cảng nhận'
    }
  },

  'sunflower-seeds': {
    origin: {
      tr: 'Türkiye (Trakya ve İç Anadolu verimli tarım havzaları)',
      en: 'Türkiye (Thrace and Central Anatolia agricultural basins)',
      de: 'Türkei (Thrakien und Zentralanatolien)',
      it: 'Turchia (Tracia e Anatolia Centrale)',
      ru: 'Турция (Фракия и Центральная Анатолия)',
      fa: 'ترکیه (دشت‌های حاصلخیز تراکیا و آناتولی مرکزی)',
      zh: '土耳其（色雷斯平原与安纳托利亚现代农业黑土走廊）',
      vi: 'Thổ Nhĩ Kỳ (Vùng Thrace và Miền Trung Anatolia)'
    },
    variety: {
      tr: 'İri Boy Çizgili Çerezlik Ayçekirdeği (361 tipi, 22/64 ve 24/64 kalibre) ve Siyah Yağlık/Çerezlik Çekirdek',
      en: 'Large Striped Confectionery Sunflower Seeds (Type 361, calibers 22/64, 24/64) and Black Confectionery',
      de: 'Gestreifte Konfektions-Sonnenblumenkerne (Typ 361, Kaliber 22/64, 24/64) und schwarze Kerne',
      it: 'Semi di girasole striati da confetteria (Tipo 361, calibri 22/64, 24/64) e semi neri',
      ru: 'Крупные полосатые кондитерские семечки (Тип 361, калибры 22/64, 24/64) и черные кондитерские',
      fa: 'تخمه آفتابگردان درشت قلمی دورسفید (تیپ ۳۶۱، کالیبرهای ۲۲/۶۴ و ۲۴/۶۴) و ارقام روغنی/آجیلی مشکی',
      zh: '大颗粒长条白边食用葵花籽（361经典大粒型，孔径 22/64、24/64）与优质油食兼用黑粒葵花籽',
      vi: 'Hạt hướng dương sọc lớn (Loại 361, cỡ 22/64, 24/64) và hạt hướng dương đen'
    },
    packaging: {
      tr: '20 kg ve 25 kg 3 katlı kraft torbalar veya polipropilen çuvallar',
      en: '20 kg & 25 kg 3-ply kraft paper bags or multi-wall PP woven bags',
      de: '20 kg & 25 kg 3-lagige Kraftpapiersäcke oder PP-Gewebesäcke',
      it: 'Sacchi in carta kraft a 3 strati o sacchi in PP da 20 kg e 25 kg',
      ru: '3-слойные крафт-мешки или полипропиленовые мешки по 20 кг и 25 кг',
      fa: 'کیسه‌های کاغذی ۳ لایه کرافت یا کیسه‌های لمینت ۲۵ کیلوگرمی استاندارد',
      zh: '20 公斤与 25 公斤三层加厚防潮牛皮纸复合袋或聚丙烯编织袋',
      vi: 'Bao giấy kraft 3 lớp hoặc bao dệt PP 20 kg & 25 kg'
    },
    moq: {
      tr: '1 Metrik Ton / 1x40\' FCL (yaklaşık 20-22 MT)',
      en: '1 Metric Ton / 1x40\' FCL (approx. 20-22 MT)',
      de: '1 Tonne / 1x40\' FCL (ca. 20-22 t)',
      it: '1 Tonnellata / 1x40\' FCL (ca. 20-22 t)',
      ru: '1 метрическая тонна / 1x40\' FCL (около 20-22 т)',
      fa: '۱ تن متریک / ۱ کانتینر ۴۰ فوت (حدود ۲۰ الی ۲۲ تن)',
      zh: '1 公吨起订 / 1 个 40 尺高柜 FCL（大宗实装约 20 至 22 公吨）',
      vi: '1 tấn / 1 container 40 feet FCL (khoảng 20-22 tấn)'
    },
    qualityDocs: {
      tr: 'Saflık (%99+), Nem oranı (maks <%8), Haşere ve kusur analizi (<%0.5), Bitki Sağlık Belgesi',
      en: 'Purity (99%+), Moisture (max <8%), Insect damage analysis (<0.5%), Phytosanitary Certificate',
      de: 'Reinheit (99%+), Feuchte (max. <8%), Schädlingsprüfung (<0.5%), Pflanzengesundheitszeugnis',
      it: 'Purezza (99%+), Umidità (max <8%), Danni da insetti (<0.5%), Certificato fitosanitario',
      ru: 'Чистота (99%+), влажность (макс <8%), повреждения (<0.5%), фитосанитарный сертификат',
      fa: 'خلوص بالای ۹۹٪، رطوبت حداکثر ۸٪، ضایعات و آسیب‌دیدگی زیر ۰.۵٪، گواهی بهداشت نباتی',
      zh: '净度分析报告（99% 以上）、水分测定单（最高限 8% 以下）、虫蚀残次粒率检测（低于0.5%）、植物检疫证书',
      vi: 'Độ tinh khiết (99%+), Độ ẩm (tối đa <8%), Tỷ lệ sâu hại (<0.5%), Giấy kiểm dịch thực vật'
    },
    samplePolicy: {
      tr: '500g temsilî analiz numunesi kargo ile gönderilir',
      en: '500g representative lot sample dispatched via air courier',
      de: '500 g Chargenmuster per Luftfrachtkurier',
      it: 'Campione rappresentativo da 500 g inviato tramite corriere aereo',
      ru: 'Репрезентативный образец 500 г отправляется курьером',
      fa: 'ارسال ۵۰۰ گرم نمونه نماینده برای بررسی کالیبر و یکدستی دانه',
      zh: '寄发 500 克代表性批次样品供过筛比对颗粒长短与饱满度',
      vi: 'Mẫu đại diện 500g gửi chuyển phát nhanh đường hàng không'
    },
    privateLabel: {
      tr: 'Alıcıya özel torba baskısı ve fason kavurma/tuzlama imkanı',
      en: 'Custom sack printing and contract processing/roasting support',
      de: 'Individuelle Sackbedruckung und Lohnröstung/-salzung',
      it: 'Stampa sacchi personalizzata e tostatura/salatura conto terzi',
      ru: 'Печать мешков по макету заказчика и контрактная обжарка',
      fa: 'چاپ طرح و برند مشتری بر روی کیسه‌ها و برشته‌کاری طبق فرمولاسیون درخواستی',
      zh: '支持买方定制纸袋印刷，以及大批量烘焙/咸度定制加工出口',
      vi: 'In bao bì riêng và hỗ trợ rang/muối gia công theo hợp đồng'
    },
    incoterms: {
      tr: 'FOB Tekirdağ / İstanbul / Mersin, CIF, DAP',
      en: 'FOB Tekirdag / Istanbul / Mersin, CIF, DAP',
      de: 'FOB Tekirdağ / Istanbul / Mersin, CIF, DAP',
      it: 'FOB Tekirdağ / Istanbul / Mersin, CIF, DAP',
      ru: 'FOB Текирдаг / Стамбул / Мерсин, CIF, DAP',
      fa: 'FOB تکیرداغ / استانبول / مرسین، CIF، تحویل DAP',
      zh: 'FOB 泰基尔达港 / 伊斯坦布尔 / 梅尔辛，CIF，欧洲 DAP',
      vi: 'FOB Tekirdağ / Istanbul / Mersin, CIF, DAP'
    },
    leadTime: {
      tr: '7-10 iş günü',
      en: '7-10 business days',
      de: '7-10 Werktage',
      it: '7-10 giorni lavorativi',
      ru: '7-10 рабочих дней',
      fa: '۷ الی ۱۰ روز کاری',
      zh: '7 至 10 个工作日',
      vi: '7-10 ngày làm việc'
    },
    storage: {
      tr: 'Havadar, nemsiz tahıl deposu (<18°C)',
      en: 'Dry, ventilated grain warehouse (<18°C)',
      de: 'Trockenes, belüftetes Getreidelager (<18°C)',
      it: 'Magazzino cereali asciutto e ventilato (<18°C)',
      ru: 'Сухой вентилируемый склад зернового типа (<18°C)',
      fa: 'سیلو یا انبار استاندارد غلات با تهویه مداوم (دمای زیر ۱۸ درجه)',
      zh: '干燥、控温、通风优良的标准化粮油大宗平房仓（低于 18°C）',
      vi: 'Kho nông sản khô ráo, thông gió tốt (<18°C)'
    },
    intendedUse: {
      tr: 'Çerezlik kavurma endüstrisi, toptan atıştırmalık dağıtımı, gıda üretimi',
      en: 'Snack roasting facilities, wholesale nut & seed distribution, food processing',
      de: 'Snackröstereien, Großhandel für Saaten und Nüsse, Lebensmittelindustrie',
      it: 'Industria di tostatura per snack, distribuzione all’ingrosso, trasformazione alimentare',
      ru: 'Обжарка снеков, оптовая торговля орехами и семенами, пищевая промышленность',
      fa: 'کارخانجات برشته‌کاری تخمه، شبکه بنکداری و توزیع خشکبار، صنایع غذایی',
      zh: '大宗炒货食品加工厂、全国性坚果炒货批发配货、休闲零食流水线',
      vi: 'Nhà máy rang hạt ăn vặt, phân phối hạt bán buôn, chế biến thực phẩm'
    },
    quoteRequirements: {
      tr: 'Kalibre oranı (22/64 veya 24/64), tonaj, ambalaj tipi ve teslim şartları',
      en: 'Caliber specification (22/64 or 24/64), volume, packaging type and delivery terms',
      de: 'Kaliberspezifikation (22/64 oder 24/64), Tonnage, Gebindeart und Lieferbedingungen',
      it: 'Specifica di calibro (22/64 o 24/64), volume, tipo di imballaggio e termini di resa',
      ru: 'Калибр (22/64 или 24/64), объем, вид упаковки и условия поставки',
      fa: 'سایز کالیبر (۲۲/۶۴ یا ۲۴/۶۴)، تناژ مورد نظر، نوع بسته‌بندی و اینکوترمز حمل',
      zh: '明确籽粒目数尺寸（22/64 或 24/64 筛孔）、采购吨位、包装袋类型与交付方式',
      vi: 'Quy cách kích thước hạt (22/64 hoặc 24/64), khối lượng, loại bao bì và điều kiện giao hàng'
    }
  },

  'saffron': {
    origin: {
      tr: 'İran (Güney Horasan / Qaen, Gonabad, Ferdows)',
      en: 'Iran (South Khorasan / Qaen, Gonabad, Ferdows)',
      de: 'Iran (Süd-Khorasan / Qaen, Gonabad, Ferdows)',
      it: 'Iran (Khorasan Meridionale / Qaen, Gonabad, Ferdows)',
      ru: 'Иран (Южный Хорасан / Каэн, Гонабад, Фердоус)',
      fa: 'ایران (خراسان جنوبی / قائنات، گناباد و فردوس)',
      zh: '伊朗原产地（南呼罗珊省盖恩 Qaen、贡纳巴德世界农业文化遗产核心产区）',
      vi: 'Iran (Nam Khorasan / Qaen, Gonabad, Ferdows)'
    },
    variety: {
      tr: 'Süper Negin & Negin Doğal Safran (ISO 3632 Kategori 1), tam boy kırmızı lifler, sarı stil içermez',
      en: 'Super Negin & Negin Saffron (ISO 3632-1 Category I), all-red full stigma threads, zero style/yellow waste',
      de: 'Super Negin & Negin Safran (ISO 3632-1 Kategorie I), rein rote Fäden, ohne gelben Griffel',
      it: 'Zafferano Super Negin & Negin (ISO 3632-1 Categoria I), stimmi interamente rossi, senza residui gialli',
      ru: 'Шафран Супер Негин и Негин (ISO 3632-1 Категория I), чисто красные длинные нити без желтых частей',
      fa: 'زعفران سوپر نگین و نگین فاخر قائنات (دارای استاندارد بین‌المللی ISO 3632 رده ۱)، کلاله کاملاً قرمز، درشت و بدون خامه (سفیدی)',
      zh: '顶级特级藏红花 Super Negin 超级涅金及 Negin 涅金（符合 ISO 3632 一类标准，全红特长花丝，零黄色花柱杂质）',
      vi: 'Saffron Super Negin & Negin (ISO 3632-1 Hạng I), sợi nhụy dài đỏ hoàn toàn, không lẫn gốc vàng'
    },
    packaging: {
      tr: 'Dökme: 1 kg ve 5 kg mühürlü gıda tenekeleri; Perakende: 1g, 2g, 5g, 10g lüks akrilik/cam kutular',
      en: 'Bulk: 1 kg & 5 kg hermetic food-grade tins; Retail: 1g, 2g, 5g, 10g luxury acrylic/glass jars',
      de: 'Großgebinde: 1 kg & 5 kg versiegelte Dosen; Retail: 1 g, 2 g, 5 g, 10 g Acryl-/Glasdosen',
      it: 'Sfuso: barattoli sigillati da 1 kg e 5 kg; Retail: vasetti in acrilico/vetro da 1 g, 2 g, 5 g, 10 g',
      ru: 'Опт: 1 кг и 5 кг герметичные металлические банки; Ритейл: 1 г, 2 г, 5 г, 10 г акриловые/стеклянные баночки',
      fa: 'فله: قوطی‌های فلزی بهداشتی پلمپ‌شده ۱ و ۵ کیلوگرمی؛ خرده‌فروشی: ظروف لوکس کریستالی و شیشه‌ای ۱، ۲، ۵ و ۱۰ گرمی',
      zh: '大宗工业原料装：1 公斤与 5 公斤特制密封防潮马口铁桶；高端零售装：1克、2克、5克、10克水晶亚克力礼盒或玻璃瓶',
      vi: 'Bán buôn: hộp thiếc thực phẩm kín 1 kg & 5 kg; Bán lẻ: lọ thủy tinh/acrylic cao cấp 1g, 2g, 5g, 10g'
    },
    moq: {
      tr: '500g / 1 kg (Ekspres hava kurye teslimatı)',
      en: '500g / 1 kg (Express air courier consignment)',
      de: '500 g / 1 kg (Express-Luftfrachtversand)',
      it: '500 g / 1 kg (Spedizione aerea espressa)',
      ru: '500 г / 1 кг (экспресс авиадоставка)',
      fa: '۵۰۰ گرم / ۱ کیلوگرم (ارسال مستقیم اکسپرس هوایی)',
      zh: '500 克 / 1 公斤（支持全球主流空运专线与特快直邮专递）',
      vi: '500g / 1 kg (Vận chuyển chuyển phát nhanh hàng không)'
    },
    qualityDocs: {
      tr: 'ISO 3632-1 Spektrofotometrik Analiz (Krosin >240, Safranal >30, Pikrokrosin >75), Pestisit ve Ağır Metal COA, Bitki Sağlık Belgesi',
      en: 'ISO 3632-1 Spectrophotometry Lab Report (Crocin >240, Safranal >30, Picrocrocin >75), Chemical & Microbial COA, Phytosanitary Certificate',
      de: 'ISO 3632-1 Laborzertifikat (Crocin >240, Safranal >30, Picrocrocin >75), Pestizid- & Mikrobiologie-COA, Pflanzengesundheitszeugnis',
      it: 'Rapporto spettrofotometrico ISO 3632-1 (Crocina >240, Safranale >30, Picrocrocina >75), COA chimico e microbiologico, Certificato fitosanitario',
      ru: 'Спектрофотометрия по ISO 3632-1 (Кроцин >240, Сафранал >30, Пикрокроцин >75), химический и микробиологический COA, фитосанитарный сертификат',
      fa: 'شناسنامه آنالیز اسپکتروفتومتری بر اساس استاندارد ISO 3632 (کروسین رنگ‌دهی بالای ۲۴۰، سافرانال عطر بالای ۳۰، پیکروکروسین طعم بالای ۷۵)، گواهی سلامت و بهداشت نباتی',
      zh: '国际权威 ISO 3632-1 分光光度法权威化验单（天然着色度 Crocin 超过 240、香气成分 Safranal 超过 30、苦味素 Picrocrocin 超过 75）、农残重金属 COA、植物检疫单',
      vi: 'Báo cáo quang phổ ISO 3632-1 (Crocin >240, Safranal >30, Picrocrocin >75), COA hóa học & vi sinh, Giấy kiểm dịch thực vật'
    },
    samplePolicy: {
      tr: 'Akredite laboratuvar testleri ve renk doğrulaması için 5g-10g sertifikalı analiz numunesi',
      en: '5g-10g certified lab evaluation sample provided for institutional buyers',
      de: '5 g-10 g zertifiziertes Labormuster für institutionelle Abnehmer',
      it: 'Campione di analisi certificato da 5 g-10 g per acquirenti istituzionali',
      ru: 'Сертифицированный образец 5-10 г для лабораторных испытаний предприятиям',
      fa: 'ارسال ۵ الی ۱۰ گرم نمونه پلمپ‌شده دارای برگه آزمون آزمایشگاهی جهت تست کنترل کیفیت خریداران شرکتی',
      zh: '对制药厂与高端食品进口商可提供 5 至 10 克带原厂密封封签的标准实验室化验小样',
      vi: 'Mẫu kiểm nghiệm được chứng nhận 5g-10g cho người mua doanh nghiệp'
    },
    privateLabel: {
      tr: 'Lüks perakende ambalaj, özel tasarım kutu, emniyet mühürlü cam tüp ve private label desteği',
      en: 'Luxury retail gifting, custom branded acrylic boxes, tamper-evident glass tubes and private labeling',
      de: 'Luxus-Geschenkpackungen, Acryldosen mit Kundenbranding, versiegelte Glasröhrchen',
      it: 'Confezioni regalo di lusso, scatole in acrilico con logo cliente, provette in vetro sigillate',
      ru: 'Люксовая подарочная упаковка, акриловые коробочки с логотипом, запечатанные стеклянные колбы',
      fa: 'طراحی و چاپ بسته‌بندی لوکس کادویی، جعبه‌های کریستالی با برند اختصاصی، ظروف شیشه‌ای پلمپ‌دار',
      zh: '全流程奢华礼品级私标 OEM 定制：包括激光雕刻防伪水晶盒、定制防拆封玻璃试管及礼品烫金锦盒',
      vi: 'Hộp quà bán lẻ sang trọng, hộp acrylic in thương hiệu riêng, ống thủy tinh niêm phong'
    },
    incoterms: {
      tr: 'CIP Hava Kargo (DHL/FedEx veya direkt havalimanı kargosu), CIF',
      en: 'CIP Air Freight (courier or airline cargo to major international airports), CIF',
      de: 'CIP Luftfracht (Kurier oder Luftfracht zu internationalen Flughäfen), CIF',
      it: 'CIP trasporto aereo (corriere o cargo verso i principali aeroporti), CIF',
      ru: 'CIP авиадоставка (курьерская или авиакарго в международные аэропорты), CIF',
      fa: 'تحویل CIP هوایی (ارسال پستی اکسپرس یا کارگو مستقیم فرودگاهی به تمام مقاصد بین‌المللی)',
      zh: 'CIP 航空货运专线（国际特快专递或直飞国际空港货站提货）、CIF 海空联合条款',
      vi: 'CIP Vận tải hàng không (chuyển phát nhanh hoặc đường hàng không tới các sân bay lớn), CIF'
    },
    leadTime: {
      tr: '3-5 iş günü içinde parti hazırlığı, laboratuvar kontrolü ve hava kargo sevkiyatı',
      en: '3-5 business days laboratory testing, tamper-evident packing and air dispatch',
      de: '3-5 Werktage Laborprüfung, versiegelte Verpackung und Luftfrachtabfertigung',
      it: '3-5 giorni lavorativi per test di laboratorio, imballaggio sigillato e spedizione aerea',
      ru: '3-5 рабочих дней на лабораторный контроль, защитную упаковку и авиаотправку',
      fa: '۳ الی ۵ روز کاری برای اخذ آزمون نهایی، بسته‌بندی پلمپ و ارسال هوایی',
      zh: '3 至 5 个工作日内完成批次理化全项检测、防伪防潮包装封装与空运出运',
      vi: '3-5 ngày làm việc để kiểm nghiệm lab, đóng gói niêm phong và gửi hàng không'
    },
    storage: {
      tr: 'Işıktan tamamen korumalı, hava almayan kaplarda, serin ve kuru yerde saklanmalıdır (<20°C)',
      en: 'Airtight, dry, dark storage (<20°C, RH <40%) strictly shielded from UV light to preserve crocin and safranal',
      de: 'Luftdicht, trocken und dunkel (<20°C, relative Feuchte <40%), vor UV-Licht geschützt',
      it: 'Conservare a tenuta d’aria in luogo fresco e asciutto (<20°C, UR <40%), rigorosamente al riparo dalla luce UV',
      ru: 'Хранить в герметичной таре в сухом темном месте (<20°C, влажность <40%), беречь от УФ-лучей',
      fa: 'نگهداری در ظروف غیرقابل نفوذ به هوا، در محیط تاریک، خنک و خشک (دمای زیر ۲۰ درجه) به دور از نور فرابنفش جهت پایداری کروسین و عطر',
      zh: '必须严格在阴凉干燥避光避紫外线密闭环境（低于 20°C，相对湿度低于 40%）中密闭贮藏',
      vi: 'Bảo quản kín khí, nơi khô ráo, tối (<20°C, độ ẩm <40%), tránh hoàn toàn tia UV'
    },
    intendedUse: {
      tr: 'Gourmet mutfak, lüks restoran ve otelcilik (HoReCa), ilaç ve takviye edici gıda, doğal bakım formülleri ve ekstrakt',
      en: 'Gourmet culinary, luxury HoReCa, pharmaceutical extraction, nutraceutical supplements, natural cosmetics',
      de: 'Gehobene Gastronomie, Luxus-HoReCa, pharmazeutische Extrakte, Nahrungsergänzungsmittel, Naturkosmetik',
      it: 'Alta gastronomia, HoReCa di lusso, estratti farmaceutici, nutraceutica, cosmetica naturale',
      ru: 'Высокая кухня, премиальный сектор HoReCa, фармацевтические экстракты, БАД, натуральная косметика',
      fa: 'مصارف آشپزی تشریفاتی و رستوران‌های مجلل HoReCa، صنایع داروسازی و مکمل‌های غذایی، فرآورده‌های طبیعی عصاره‌گیری',
      zh: '米其林与五星级酒店高端烹饪配料、现代植物医药活性成分萃取、高端膳食补充剂与天然芳疗',
      vi: 'Ẩm thực cao cấp, chuỗi nhà hàng khách sạn HoReCa, chiết xuất dược phẩm, thực phẩm bảo vệ sức khỏe'
    },
    quoteRequirements: {
      tr: 'İstenen derece (Süper Negin / Negin / Sargol), gramaj/koli miktarı, perakende ambalaj tercihi ve varış şehri',
      en: 'Target saffron grade (Super Negin / Negin / Sargol), quantity (kg), packaging type and delivery destination',
      de: 'Güteklasse (Super Negin / Negin / Sargol), Menge (kg), Verpackungsart und Bestimmungsort',
      it: 'Grado desiderato (Super Negin / Negin / Sargol), quantità (kg), tipo di confezione e città di destino',
      ru: 'Сорт шафрана (Супер Негин / Негин / Саргол), количество (кг), тип упаковки и город доставки',
      fa: 'درجه زعفران درخواستی (سوپر نگین / نگین / سرگل)، وزن کل، نوع بسته‌بندی و شهر یا فرودگاه مقصد',
      zh: '明确目标成色等级（Super Negin / Negin / Sargol）、意向采购公斤数、包装规格及目的地机场/城市',
      vi: 'Hạng saffron yêu cầu (Super Negin / Negin / Sargol), khối lượng (kg), loại bao bì và thành phố nhận hàng'
    }
  },

  'dried-mulberries': {
    origin: {
      tr: 'İran / Türkiye (Malatya, Elazığ, Horasan doğal vadileri)',
      en: 'Iran / Türkiye (Malatya, Elazig, Khorasan natural valleys)',
      de: 'Iran / Türkei (Täler von Malatya, Elazığ, Khorasan)',
      it: 'Iran / Turchia (Valli naturali di Malatya, Elazığ, Khorasan)',
      ru: 'Иран / Турция (долины Малатьи, Элязыга, Хорасана)',
      fa: 'ایران / ترکیه (دره‌های طبیعی خراسان، ملایر، مالاتیا و الازیغ)',
      zh: '伊朗 / 土耳其（高海拔无污染天然山谷产区）',
      vi: 'Iran / Thổ Nhĩ Kỳ (Malatya, Elazig, Khorasan)'
    },
    variety: {
      tr: 'Doğal Güneşte Kurutulmuş Beyaz Dut (kumsuz, lazerle ayıklanmış, ilave şekersiz)',
      en: 'Natural Sun-Dried White Mulberries (grit-free, laser sorted, unbleached, no added sugar)',
      de: 'Natürliche sonnengetrocknete weiße Maulbeeren (sandfrei, lasersortiert, ungeschwefelt, ohne Zuckerzusatz)',
      it: 'Gelsi bianchi essiccati al sole naturali (senza sabbia, cernita laser, non sbiancati, senza zuccheri aggiunti)',
      ru: 'Натуральный сушеный на солнце белый шелковица (без песка, лазерная сортировка, без добавления сахара)',
      fa: 'توت سفید خشک طبیعی رسمی، آفتاب‌خشک، دانه‌درشت، شیرین طبیعی و کاملاً شن‌گیری و سورت‌شده با لیزر',
      zh: '纯天然阳光晾晒特级无沙白桑葚干（全激光色选去砂除杂、无熏硫漂白、零添加天然本味）',
      vi: 'Dâu tằm trắng sấy khô tự nhiên (sạch cát, phân loại laser, không tẩy trắng, không thêm đường)'
    },
    packaging: {
      tr: '10 kg ihracat kolileri, gıda uyumlu iç polietilen bariyer torba',
      en: '10 kg export master cartons with food-grade polyethylene barrier liner',
      de: '10 kg Exportkartons mit lebensmittelechtem PE-Barrierebeutel',
      it: 'Cartoni per export da 10 kg con sacco barriera in PE per alimenti',
      ru: 'Экспортные короба по 10 кг с пищевым полиэтиленовым вкладышем',
      fa: 'کارتن‌های ۱۰ کیلوگرمی استاندارد صادراتی با کیسه داخلی پلی‌اتیلن محافظ بهداشتی',
      zh: '10 公斤出口专用高强度瓦楞纸箱内衬食品级聚乙烯防潮密闭阻隔袋',
      vi: 'Thùng carton xuất khẩu 10 kg có túi lót màng chắn PE đạt chuẩn thực phẩm'
    },
    moq: {
      tr: '500 kg / 1 Metrik Ton',
      en: '500 kg / 1 Metric Ton',
      de: '500 kg / 1 Tonne',
      it: '500 kg / 1 Tonnellata',
      ru: '500 кг / 1 метрическая тонна',
      fa: '۵۰۰ کیلوگرم / ۱ تن متریک',
      zh: '500 公斤起订 / 1 公吨标准打托运输',
      vi: '500 kg / 1 tấn'
    },
    qualityDocs: {
      tr: 'Nem analizi (<%12), Kum ve yabancı madde yokluk raporu, Mikrobiyolojik COA, Bitki Sağlık Belgesi',
      en: 'Moisture test (<12%), Grit/foreign matter absence report, Microbiological COA, Phytosanitary Certificate',
      de: 'Feuchtemessung (<12%), Bericht zur Sand-/Fremdkörperfreiheit, Mikrobiologie-COA, Pflanzengesundheitszeugnis',
      it: 'Umidità (<12%), Certificato di assenza impurità e sabbia, COA microbiologico, Certificato fitosanitario',
      ru: 'Влажность (<12%), протокол об отсутствии песка и примесей, микробиологический COA, фитосанитарный сертификат',
      fa: 'سنجش رطوبت (زیر ۱۲٪)، گواهی تایید عدم وجود شن و ناخالصی خارجی، برگه آزمایشات میکروبی، گواهی بهداشت نباتی',
      zh: '水分检测分析单（严格低于 12%）、无杂质无沙净度化验单、微生物指标出厂 COA、植物检疫合格证书',
      vi: 'Độ ẩm (<12%), Báo cáo không lẫn tạp chất/cát, COA vi sinh, Giấy kiểm dịch thực vật'
    },
    samplePolicy: {
      tr: '400g lezzet ve temizlik kontrol numunesi sağlanır',
      en: '400g representative tasting and cleanliness sample available',
      de: '400 g Geschmacks- und Reinheitsmuster bereitgestellt',
      it: 'Campione di assaggio e pulizia da 400 g disponibile',
      ru: 'Образец 400 г для оценки вкуса и чистоты по запросу',
      fa: 'ارسال ۴۰۰ گرم نمونه بار برای تست پاکیزگی، شیرینی طبیعی و بافت نرم',
      zh: '提供 400 克样品供买方品鉴天然糖度、软糯口感与微观洁净度',
      vi: 'Mẫu 400g nếm thử và kiểm tra độ sạch được cung cấp theo yêu cầu'
    },
    privateLabel: {
      tr: 'Perakende doypack (200g, 400g, 1kg) veya alıcı markalı koli desteği',
      en: 'Retail doy-packs (200g, 400g, 1kg) or customized outer cartons supported',
      de: 'Retail-Doypacks (200 g, 400 g, 1 kg) oder bedruckte Umkartons',
      it: 'Doypack retail (200 g, 400 g, 1 kg) o cartoni personalizzati con marchio',
      ru: 'Дой-паки (200 г, 400 г, 1 кг) или индивидуальная маркировка коробов',
      fa: 'بسته‌بندی در پاکت‌های دوی‌پک ۲۰۰، ۴۰۰ گرمی و ۱ کیلوگرمی با برند خریدار',
      zh: '支持 200克、400克、1公斤等不同规格的零售立袋 OEM 贴牌代工',
      vi: 'Túi doypack bán lẻ (200g, 400g, 1kg) hoặc thùng carton mang thương hiệu riêng'
    },
    incoterms: {
      tr: 'FOB, CIF, DAP',
      en: 'FOB, CIF, DAP',
      de: 'FOB, CIF, DAP',
      it: 'FOB, CIF, DAP',
      ru: 'FOB, CIF, DAP',
      fa: 'FOB، CIF، تحویل DAP',
      zh: 'FOB、CIF、欧洲与中东 DAP 到库',
      vi: 'FOB, CIF, DAP'
    },
    leadTime: {
      tr: '7-12 iş günü',
      en: '7-12 business days',
      de: '7-12 Werktage',
      it: '7-12 giorni lavorativi',
      ru: '7-12 рабочих дней',
      fa: '۷ الی ۱۲ روز کاری',
      zh: '7 至 12 个工作日',
      vi: '7-12 ngày làm việc'
    },
    storage: {
      tr: 'Kuru ve serin yerde saklanmalıdır (<14°C, düşük nem)',
      en: 'Store in cool, dry warehouse (<14°C, low humidity) away from pests and direct light',
      de: 'Kühl und trocken lagern (<14°C, geringe Feuchte), vor Licht und Schädlingen geschützt',
      it: 'Conservare in luogo fresco e asciutto (<14°C, bassa umidità)',
      ru: 'Хранить в сухом прохладном месте (<14°C, низкая влажность)',
      fa: 'نگهداری در محیط کاملاً خشک و خنک (دمای زیر ۱۴ درجه، رطوبت اندک)',
      zh: '贮存于低于 14°C、干燥无异味、通风防虫的标准仓库',
      vi: 'Bảo quản nơi khô ráo, thoáng mát (<14°C, độ ẩm thấp)'
    },
    intendedUse: {
      tr: 'Doğal tatlandırıcı, bitki çayları harmanı, müsli ve granola üretimi, sağlıklı kuru meyve paketleri',
      en: 'Natural sugar substitute, herbal tea blends, muesli & granola production, healthy snack mixes',
      de: 'Natürlicher Zuckerersatz, Kräuterteemischungen, Müsli- & Granolaherstellung, gesunde Snackmischungen',
      it: 'Sostituto naturale dello zucchero, miscele di tisane, produzione di muesli e granola, snack salutari',
      ru: 'Натуральный заменитель сахара, смеси травяных чаев, производство мюсли и гранолы, снеки',
      fa: 'جایگزین طبیعی قند، ترکیبات چای و دمنوش‌های گیاهی، تولید گرانولا و صبحانه رژیمی، آجیل سلامت',
      zh: '天然零添加养生健康茶饮拼配辅料、燕麦片与谷物棒天然代糖原料、高端有机健康干果零食',
      vi: 'Thay thế đường tự nhiên, pha trộn trà thảo mộc, sản xuất muesli & granola, hạt ăn vặt'
    },
    quoteRequirements: {
      tr: 'Tonaj, ambalaj tipi (dökme koli veya perakende poşet) ve varış noktası',
      en: 'Volume, packaging format (bulk carton vs retail pouches) and destination',
      de: 'Menge, Verpackungsformat (Großkarton vs. Retail-Beutel) und Zielort',
      it: 'Volume, formato dell’imballaggio (cartone sfuso o buste retail) e destinazione',
      ru: 'Объем, формат упаковки (оптовый короб или розничные пакеты) и пункт назначения',
      fa: 'حجم سفارش، نوع بسته‌بندی (فله کارتن یا پاکت‌های کوچک) و مقصد نهایی',
      zh: '采购总吨位、包装规格要求（大宗散装纸箱或定制零售包装）及收货地',
      vi: 'Khối lượng, quy cách đóng gói (thùng bán buôn hoặc túi bán lẻ) và điểm đến'
    }
  },

  'zereshk': {
    origin: {
      tr: 'İran (Güney Horasan / Birjand, Qaen vahaları)',
      en: 'Iran (South Khorasan / Birjand, Qaen oases)',
      de: 'Iran (Süd-Khorasan / Oasen Birjand, Qaen)',
      it: 'Iran (Khorasan Meridionale / Oasi di Birjand, Qaen)',
      ru: 'Иран (Южный Хорасан / Бирджанд, оазисы Каэн)',
      fa: 'ایران (خراسان جنوبی / باغات بیرجند و قائنات)',
      zh: '伊朗原产地（南呼罗珊省比尔詹德 Birjand 与盖恩核心古老绿洲）',
      vi: 'Iran (Nam Khorasan / Birjand, Qaen)'
    },
    variety: {
      tr: 'Zereşk Pofaki (gölgede kurutulmuş kabarık parlak yakut kırmızısı) ve Anari (güneşte kurutulmuş)',
      en: 'Zereshk Pofaki (air/shade-dried puffy ruby barberries) and Anari (sun-dried pomegranate grade)',
      de: 'Zereshk Pofaki (schattengetrocknete rubinrote Berberitzen) und Anari (sonnengetrocknet)',
      it: 'Zereshk Pofaki (berberis essiccato all’ombra, colore rubino) e Anari (essiccato al sole)',
      ru: 'Зерешк Пофаки (теневой сушки, рубиново-красный барбарис) и Анари (солнечной сушки)',
      fa: 'زرشک پفکی اعلا صادراتی (خشک‌شده در تالار و سایه، پف‌دار، دانه درشت و یاقوتی) و زرشک اناری آفتاب‌خشک',
      zh: '纯天然特级无籽红刺檗果干 Zereshk Pofaki（传统阴房风干特级蓬松鲜红宝石果）与标准纯阳晒级 Anari',
      vi: 'Zereshk Pofaki (sấy trong bóng râm, màu đỏ ruby mọng) và Anari (sấy nắng tự nhiên)'
    },
    packaging: {
      tr: '10 kg ihracat karton kolileri, neme karşı koruyucu gıda iç poşeti',
      en: '10 kg export cartons with moisture-barrier food-grade inner liner',
      de: '10 kg Exportkartons mit feuchtigkeitsbeständigem Lebensmittelinliner',
      it: 'Cartoni per export da 10 kg con liner interno per alimenti antiumidità',
      ru: 'Экспортные короба по 10 кг с влагозащитным пищевым вкладышем',
      fa: 'کارتن‌های ۱۰ کیلوگرمی استاندارد صادراتی با کیسه بهداشتی محافظ رطوبت و رنگ',
      zh: '10 公斤出口彩箱内衬高保鲜防潮防氧化高阻隔薄膜袋',
      vi: 'Thùng carton xuất khẩu 10 kg có túi lót chống ẩm đạt chuẩn thực phẩm'
    },
    moq: {
      tr: '500 kg / 1 Metrik Ton',
      en: '500 kg / 1 Metric Ton',
      de: '500 kg / 1 Tonne',
      it: '500 kg / 1 Tonnellata',
      ru: '500 кг / 1 метрическая тонна',
      fa: '۵۰۰ کیلوگرم / ۱ تن متریک',
      zh: '500 公斤起订 / 1 公吨标准集港托盘发运',
      vi: '500 kg / 1 tấn'
    },
    qualityDocs: {
      tr: 'Nem oranı (%14-16), Yabancı madde analiz raporu, Mikrobiyolojik COA, Bitki Sağlık Belgesi',
      en: 'Moisture analysis (14-16%), Foreign matter clearance test, Microbiological COA, Phytosanitary Certificate',
      de: 'Feuchtebestimmung (14-16%), Fremdkörperprüfung, Mikrobiologie-COA, Pflanzengesundheitszeugnis',
      it: 'Analisi umidità (14-16%), Test assenza corpi estranei, COA microbiologico, Certificato fitosanitario',
      ru: 'Влажность (14-16%), тест на отсутствие посторонних примесей, микробиологический COA, фитосанитарный сертификат',
      fa: 'سنجش رطوبت استاندارد (۱۴ الی ۱۶ درصد)، گواهی سورتینگ و عاری بودن از مواد خارجی، آنالیز میکروبیولوژی، گواهی بهداشت نباتی',
      zh: '标准含水率检验报告（14-16% 保鲜区间）、去石清选无杂质单证、微生物理化检验 COA、植物检疫证书',
      vi: 'Phân tích độ ẩm (14-16%), Báo cáo kiểm tra tạp chất, COA vi sinh, Giấy kiểm dịch thực vật'
    },
    samplePolicy: {
      tr: '300g renk ve tazelik doğrulama numunesi kargo ile gönderilir',
      en: '300g color vibrancy and freshness sample dispatched via express courier',
      de: '300 g Farbkraft- und Frischemuster per Expresskurier',
      it: 'Campione da 300 g per verifica freschezza e colore inviato tramite corriere',
      ru: 'Образец 300 г для оценки свежести и цвета отправляется курьером',
      fa: 'ارسال ۳۰۰ گرم نمونه جهت مشاهده تازگی، قرمزی یاقوتی و میزان خشکی و گوشتی بودن دانه',
      zh: '寄递 300 克高保鲜度实物样品供查验鲜红成色与颗粒完整度',
      vi: 'Mẫu 300g kiểm tra màu sắc tươi mới gửi chuyển phát nhanh'
    },
    privateLabel: {
      tr: 'Özel marka perakende doypack (250g, 500g) ve koli etiketleme',
      en: 'Private label retail doy-packs (250g, 500g) and custom carton branding',
      de: 'Eigenmarken-Doypacks (250 g, 500 g) und individuelle Kartonkennzeichnung',
      it: 'Doypack retail a marchio privato (250 g, 500 g) ed etichettatura cartoni',
      ru: 'Фасовка под СТМ в дой-паки (250 г, 500 г) и брендирование коробов',
      fa: 'بسته‌بندی در پاکت‌های دوی‌پک با برند مشتری (۲۵۰ و ۵۰۰ گرمی) و چاپ اختصاصی کارتن',
      zh: '支持 250克及500克立式自立拉链袋 OEM 代工及外箱买家信息定制印刷',
      vi: 'Túi doypack bán lẻ nhãn riêng (250g, 500g) và in thương hiệu thùng'
    },
    incoterms: {
      tr: 'FOB Bandar Abbas, CIF küresel limanlar, DAP',
      en: 'FOB Bandar Abbas, CIF global destination ports, DAP destinations',
      de: 'FOB Bandar Abbas, CIF Zielhäfen weltweit, DAP',
      it: 'FOB Bandar Abbas, CIF porti di destinazione mondiali, DAP',
      ru: 'FOB Бендер-Аббас, CIF мировые порты, DAP',
      fa: 'FOB بندرعباس، CIF بنادر بین‌المللی، تحویل DAP',
      zh: 'FOB 阿巴斯港，CIF 全球核心口岸，欧洲大陆冷链直达 DAP',
      vi: 'FOB Bandar Abbas, CIF các cảng toàn cầu, DAP'
    },
    leadTime: {
      tr: '7-10 iş günü',
      en: '7-10 business days',
      de: '7-10 Werktage',
      it: '7-10 giorni lavorativi',
      ru: '7-10 рабочих дней',
      fa: '۷ الی ۱۰ روز کاری',
      zh: '7 至 10 个工作日',
      vi: '7-10 ngày làm việc'
    },
    storage: {
      tr: 'Koyu yakut kırmızısı rengini korumak için zorunlu soğuk hava (+2°C ile +5°C arası depolama)',
      en: 'Cold storage at +2°C to +5°C mandatory to preserve bright ruby color and prevent darkening',
      de: 'Kühllagerung bei +2°C bis +5°C zwingend erforderlich, um die rubinrote Farbe zu bewahren',
      it: 'Cella frigorifera a +2°C fino a +5°C obbligatoria per preservare il colore rubino brillante',
      ru: 'Холодное хранение при температуре от +2°C до +5°C обязательно для сохранения рубинового цвета',
      fa: 'نگهداری الزامی در سردخانه در دمای مثبت ۲ الی مثبت ۵ درجه جهت ممانعت از تیرگی و حفظ رنگ یاقوتی روشن',
      zh: '严禁常温积压，必须常年保存在 +2°C 至 +5°C 恒温冷库中，防止花青素氧化变黑',
      vi: 'Bắt buộc bảo quản lạnh ở +2°C đến +5°C để giữ màu đỏ ruby và tránh bị thâm đen'
    },
    intendedUse: {
      tr: 'Gastronomi, gurme restoranlar, içecek ve şurup ekstraksiyonu, reçel, şekerleme ve çay karışımları',
      en: 'Fine dining gastronomy, beverage and cordial extraction, gourmet jams, confectionery, specialty teas',
      de: 'Gehobene Gastronomie, Getränke- und Sirupextraktion, Konfitüren, Süßwaren, Spezialtees',
      it: 'Alta gastronomia, estrazione per bevande e sciroppi, confetture gourmet, pasticceria, tè speciali',
      ru: 'Гастрономия, экстракты для напитков, джемы, кондитерские изделия, специализированные чаи',
      fa: 'مصارف در آشپزی رستورانی و پذیرایی تشریفاتی، عصاره‌گیری نوشیدنی و شربت، تولید مربا و فرآورده‌های قنادی',
      zh: '中东与欧洲高端特色餐饮调味、天然果汁与功能饮品原汁浓缩、高级果酱及养生拼配茶',
      vi: 'Ẩm thực cao cấp, chiết xuất đồ uống, mứt chất lượng cao, bánh kẹo, trà đặc sản'
    },
    quoteRequirements: {
      tr: 'Çeşit seçimi (Pofaki kabarık veya Anari), tonaj, ambalaj detayı ve soğuk zincir teslim şekli',
      en: 'Variety selection (Pofaki puffy vs Anari), volume, packaging specification and cold-chain destination',
      de: 'Sortenwahl (Pofaki oder Anari), Tonnage, Verpackungsdetails und Kühlkettenbestimmung',
      it: 'Selezione varietà (Pofaki o Anari), tonnellaggio, dettagli imballaggio e destinazione catena del freddo',
      ru: 'Выбор сорта (Пофаки или Анари), тоннаж, параметры тары и пункт доставки с холодовой цепью',
      fa: 'نوع زرشک (پفکی یا اناری)، تناژ درخواستی، مشخصات بسته‌بندی و پورت مقصد با زنجیره سرد',
      zh: '明确品种级别（特级风干 Pofaki 或经典生晒 Anari）、采购吨位、包装形式与冷藏要求',
      vi: 'Lựa chọn chủng loại (Pofaki hay Anari), khối lượng, bao bì và điểm đến chuỗi lạnh'
    }
  },

  'mixed-nuts': {
    origin: {
      tr: 'Türkiye / Bölgesel anlaşmalı birinci sınıf üretici ağı',
      en: 'Türkiye / Regional vetted tier-1 producer network',
      de: 'Türkei / Regionales Netzwerk verifizierter Tier-1-Hersteller',
      it: 'Turchia / Rete regionale di produttori selezionati di primo livello',
      ru: 'Турция / региональная сеть верифицированных производителей 1-го уровня',
      fa: 'ترکیه / شبکه یکپارچه از تأمین‌کنندگان و تولیدکنندگان دست‌اول منطقه',
      zh: '土耳其及欧亚核心特色产区一手合规供应商直供网络',
      vi: 'Thổ Nhĩ Kỳ / Mạng lưới nhà sản xuất cấp 1 được kiểm định trong khu vực'
    },
    variety: {
      tr: 'Müşteriye Özel Kuruyemiş Karışımları: Fıstık, Badem, Ceviz, Kaju, Kuru Üzüm ve Fındık (Çiğ veya Kavrulmuş)',
      en: 'Customized B2B Nut Blends: Pistachios, Almonds, Walnuts, Cashews, Raisins & Hazelnuts (Raw or Roasted)',
      de: 'Individuelle B2B-Nussmischungen: Pistazien, Mandeln, Walnüsse, Cashews, Rosinen & Haselnüsse (roh/geröstet)',
      it: 'Miscele di frutta secca B2B personalizzate: Pistacchi, Mandorle, Noci, Anacardi, Uvetta e Nocciole (crudi/tostati)',
      ru: 'Индивидуальные смеси орехов B2B: фисташки, миндаль, грецкий орех, кешью, изюм и фундук (сырые/жареные)',
      fa: 'ترکیبات سفارشی خشکبار و آجیل صادراتی: پسته، بادام، گردو، کاشو، کشمش و فندق (با فرمولاسیون خام یا برشته اختصاصی)',
      zh: '企业级大宗高端混合坚果定制配比方案：开心果、巴旦木、核桃仁、腰果、精选葡萄干与臻品榛子（原味生粒或定制温控烘烤）',
      vi: 'Hạt hỗn hợp B2B tùy chỉnh: Hạt dẻ cười, Hạnh nhân, Óc chó, Điều, Nho khô & Hạt phỉ (Sống hoặc Rang)'
    },
    packaging: {
      tr: '5 kg ve 10 kg koruyucu gazlı (MAP) vakum koliler; 100g-500g perakende doypack paketleme',
      en: '5 kg & 10 kg modified atmosphere (MAP) cartons; 100g-500g retail nitrogen-flushed doy-packs',
      de: '5 kg & 10 kg Schutzgas-Kartons (MAP); 100 g-500 g Retail-Doypacks mit Stickstoffbegasung',
      it: 'Cartoni in atmosfera modificata (MAP) da 5 kg e 10 kg; doypack retail da 100 g-500 g con azoto',
      ru: 'Короба с модифицированной газовой средой (МГС) по 5 кг и 10 кг; дой-паки 100–500 г с азотом',
      fa: 'کارتن‌های ۵ و ۱۰ کیلوگرمی بسته‌بندی تحت گاز محافظ (MAP)؛ پاکت‌های دوی‌پک ۱۰۰ الی ۵۰۰ گرمی با تزریق ازت',
      zh: '5 公斤与 10 公斤充氮气调保鲜 (MAP) 出口箱；100克至500克全自动立式充氮锁鲜拉链小包装',
      vi: 'Thùng carton màng khí quyển biến đổi (MAP) 5 kg & 10 kg; túi doypack bơm khí nitơ bán lẻ 100g-500g'
    },
    moq: {
      tr: '1 Metrik Ton',
      en: '1 Metric Ton',
      de: '1 Tonne',
      it: '1 Tonnellata',
      ru: '1 метрическая тонна',
      fa: '۱ تن متریک',
      zh: '1 公吨起订（支持定制配比独立排产）',
      vi: '1 tấn'
    },
    qualityDocs: {
      tr: 'Bileşen parti analiz raporları (COA), Alerjen beyanı, Aflatoksin sertifikası, Bitki Sağlık Belgesi',
      en: 'Component batch COAs, Allergen declaration, Aflatoxin compliance, Phytosanitary Certificate',
      de: 'Chargenanalysen je Komponente (COA), Allergennachweis, Aflatoxin-Konformität, Pflanzengesundheitszeugnis',
      it: 'COA di lotto dei componenti, Dichiarazione allergeni, Conformità aflatossine, Certificato fitosanitario',
      ru: 'COA на каждый компонент смеси, декларация аллергенов, тест на афлатоксины, фитосанитарный сертификат',
      fa: 'آنالیزهای مجزای آزمایشگاهی تک‌تک اجزا (COA)، اظهارنامه آلرژن، گواهی استاندارد آفلاتوکسین و بهداشت نباتی',
      zh: '各项单一坚果原料出厂 COA 汇总单、过敏原声明报告、全项黄曲霉毒素合规检测、出入境动植物检疫报告',
      vi: 'COA từng thành phần, Tuyên bố chất gây dị ứng, Báo cáo Aflatoxin, Giấy kiểm dịch thực vật'
    },
    samplePolicy: {
      tr: '500g özel formülasyon karışım numunesi hazırlanır',
      en: '500g bespoke mix formulation sample provided for buyer approval',
      de: '500 g Muster der gewünschten Mischungsrezeptur zur Freigabe bereitgestellt',
      it: 'Campione da 500 g con formulazione del mix personalizzata fornito per approvazione',
      ru: 'Образец 500 г индивидуальной рецептуры смеси предоставляется на утверждение',
      fa: 'ارسال ۵۰۰ گرم نمونه میکس طبق درصد فرمولاسیون درخواستی خریدار جهت ارزیابی طعم و ظاهر',
      zh: '可按照买方指定的坚果比例试制 500 克定制配方实物打样大样供品鉴',
      vi: 'Mẫu hỗn hợp tùy chỉnh 500g cung cấp để người mua phê duyệt'
    },
    privateLabel: {
      tr: 'Tam OEM özel marka üretimi, barkodlama ve alıcı grafik tasarımıyla paketleme',
      en: 'Full OEM private label manufacturing, retail barcoding and custom graphic packaging',
      de: 'Vollständige OEM-Eigenmarkenherstellung, Barcode-Kennzeichnung und Verpackung nach Kundendesign',
      it: 'Produzione OEM completa a marchio del cliente, codici a barre e grafica personalizzata',
      ru: 'Полный цикл контрактного производства под СТМ, штрихкодирование и упаковка по макету',
      fa: 'تولید کامل تحت برند خریدار (OEM Private Label)، درج بارکد بین‌المللی و چاپ گرافیکی کامل بسته‌ها',
      zh: '全案支持 OEM 私模品牌定制：包括买方图稿打样、EAN 国际条形码喷印及全自动贴标',
      vi: 'Sản xuất nhãn riêng OEM toàn diện, mã vạch bán lẻ và bao bì thiết kế riêng'
    },
    incoterms: {
      tr: 'FOB İstanbul / Mersin, CIF, DAP',
      en: 'FOB Istanbul / Mersin, CIF, DAP',
      de: 'FOB Istanbul / Mersin, CIF, DAP',
      it: 'FOB Istanbul / Mersin, CIF, DAP',
      ru: 'FOB Стамбул / Мерсин, CIF, DAP',
      fa: 'FOB استانبول / مرسین، CIF، DAP',
      zh: 'FOB 伊斯坦布尔 / 梅尔辛，CIF，欧洲 DAP 到厂',
      vi: 'FOB Istanbul / Mersin, CIF, DAP'
    },
    leadTime: {
      tr: '12-16 iş günü özel harmanlama, gazlı paketleme ve kalite onayı',
      en: '12-16 business days custom formulation, MAP packaging and quality sign-off',
      de: '12-16 Werktage individuelle Mischung, MAP-Verpackung und Qualitätsfreigabe',
      it: '12-16 giorni lavorativi per miscelazione, confezionamento MAP e approvazione qualità',
      ru: '12-16 рабочих дней на смешивание, упаковку в МГС и подтверждение качества',
      fa: '۱۲ الی ۱۶ روز کاری برای مخلوط‌سازی، بسته‌بندی اتمسفر اصلاح‌شده و کنترل کیفی نهایی',
      zh: '12 至 16 个工作日完成定制配比混料、充氮气调包装与全批次出厂检验',
      vi: '12-16 ngày làm việc phối trộn tùy chỉnh, đóng gói MAP và kiểm định chất lượng'
    },
    storage: {
      tr: 'Serin ve kuru depoda muhafaza (<15°C, <%60 bağıl nem)',
      en: 'Store at <15°C and <60% RH in dry, pest-controlled facilities',
      de: 'Lagerung bei <15°C und <60% relativer Feuchte, trocken und schädlingsgeschützt',
      it: 'Conservare a <15°C e <60% UR in locali asciutti e controllati',
      ru: 'Хранение при температуре <15°C и влажности <60% в защищенных сухих помещениях',
      fa: 'نگهداری در انبار خنک و خشک با دمای کمتر از ۱۵ درجه و رطوبت زیر ۶۰٪',
      zh: '在低于 15°C 与相对湿度 60% 以下避光干燥标准仓房储运',
      vi: 'Bảo quản ở <15°C và độ ẩm <60% tại cơ sở khô ráo'
    },
    intendedUse: {
      tr: 'Süpermarket perakende markaları, havayolu ikramı, otel mini bar ikramları ve kurumsal hediyeler',
      en: 'Supermarket private labels, airline catering, hospitality minibar offerings, corporate gifting',
      de: 'Supermarkt-Eigenmarken, Airline-Catering, Hotel-Minibar, Firmenpräsente',
      it: 'Private label per supermercati, catering aereo, minibar alberghieri, regalistica aziendale',
      ru: 'Собственные торговые марки сетей, бортовое питание авиакомпаний, мини-бары отелей, подарки',
      fa: 'برندهای اختصاصی سوپرمارکتی، کترینگ خطوط هوایی، بار پذیرایی هتل‌های لوکس و هدایای تشریفاتی شرکتی',
      zh: '大型连锁商超自有品牌专线、国际航司头等舱航空配餐、高端五星级酒店客房配食及商务伴手礼',
      vi: 'Nhãn hàng riêng siêu thị, suất ăn hàng không, minibar khách sạn, quà tặng doanh nghiệp'
    },
    quoteRequirements: {
      tr: 'Karışım içerik yüzdeleri, kavurma/tuz tercihi, ambalaj boyutu ve teslim şartları',
      en: 'Exact component percentage ratios, roast/salt profile, packaging size and delivery terms',
      de: 'Genaue Komponentenanteile, Röst-/Salzprofil, Gebindegröße und Lieferbedingungen',
      it: 'Percentuali esatte dei componenti, profilo tostatura/sale, formato imballaggio e termini di resa',
      ru: 'Точные процентные соотношения компонентов, профиль обжарки/соли, размер упаковки и условия',
      fa: 'درصد دقیق هر یک از اقلام تشکیل‌دهنده، مشخصات تفت و نمک، سایز بسته و شرایط تحویل',
      zh: '明确各项坚果成分的具体百分比配方、生熟咸淡工艺、内包装克重及贸易结算要求',
      vi: 'Tỷ lệ phần trăm thành phần chính xác, yêu cầu rang/muối, kích cỡ bao bì và điều kiện giao hàng'
    }
  }
};
