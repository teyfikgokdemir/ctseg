import type { GlassMarketSlug } from './glass-market-seo';

export type LocalizedGlassMarketLocale='de'|'it'|'ru'|'fa'|'zh'|'vi'|'uk'|'ro'|'bg'|'he'|'ar';

export type LocalizedGlassMarketCopy={
  title:string; metaTitle:string; description:string; eyebrow:string; lead:string;
  buyersTitle:string; buyers:string[];
  scopeTitle:string; scope:string[];
  logisticsTitle:string; logistics:string[];
  rfqTitle:string; rfq:string[];
  faqTitle:string; faq:[string,string][];
  ctaTitle:string; ctaText:string; ctaLabel:string;
};

type Common={
  buyersTitle:string; scopeTitle:string; logisticsTitle:string; infoTitle:string; faqTitle:string;
  buyers:string[]; scope:string[]; logistics:string[]; info:string[];
  q1:string; a1:string; q2:string; a2:string; q3:string; a3:string;
  ctaLabel:string;
};

type MarketText={
  title:string; metaTitle:string; description:string; eyebrow:string; lead:string;
  logisticsTitle?:string; ctaTitle:string; ctaText:string;
};

const common:Record<LocalizedGlassMarketLocale,Common>={
de:{
 buyersTitle:'Für wen geeignet',scopeTitle:'Lieferumfang',logisticsTitle:'Kommerzielle Koordination',infoTitle:'Angaben für ein belastbares Angebot',faqTitle:'Häufig gestellte Fragen',
 buyers:['Glasimporteure und Distributoren','IGU- und Fensterhersteller','Fassaden- und Architektursystemanbieter','Glasverarbeiter und Weiterveredler','Projekt- und Einkaufsteams','Bauprodukt- und Contract-Lieferanten'],
 scope:['Float- und Low-Iron-Glas','Vorgespanntes und wärmebehandeltes Glas','Verbundsicherheitsglas','Low-E- und Sonnenschutzglas','Isolierglas / IGU','Zuschnitt, Bohrungen, Kantenbearbeitung und projektbezogene Verarbeitung'],
 logistics:['Lieferweg nach Zielmarkt und Projektbedingungen abstimmen','Kisten-, A-Frame- und projektspezifische Verpackung vor Angebot klären','Lieferort, Incoterm und Entladebedingungen vergleichbar machen','Angeforderte Dokumente und technische Nachweise lieferantenbezogen prüfen'],
 info:['Glasart und Aufbau','Dicke, Maße oder Zuschnittliste','Projekt- oder Monatsmenge','Bearbeitungs- und Leistungsanforderungen','Zielland und Stadt','Ziel-Incoterm und Liefertermin'],
 q1:'Wird nur mit einem türkischen Glashersteller gearbeitet?',a1:'Nein. Der passende Lieferweg wird nach Produkt, Verarbeitung, Kapazität, Verpackung, Dokumentation und Lieferbedingungen ausgewählt.',
 q2:'Sind projektbezogene oder kleinere Anforderungen möglich?',a2:'Ja. MOQ, technische Machbarkeit und Logistik werden produkt- und lieferantenbezogen geprüft.',
 q3:'Wie werden Angebote verglichen?',a3:'Angebote werden soweit möglich auf identische Spezifikation, Menge, Verpackung und Incoterm normalisiert.',
 ctaLabel:'Anfrage erstellen'
},
it:{
 buyersTitle:'A chi è rivolto',scopeTitle:'Ambito di fornitura',logisticsTitle:'Coordinamento commerciale',infoTitle:'Dati necessari per un’offerta accurata',faqTitle:'Domande frequenti',
 buyers:['Importatori e distributori di vetro','Produttori di IGU e serramenti','Aziende di facciate e sistemi architettonici','Trasformatori e lavoratori del vetro','Team acquisti e procurement di progetto','Buyer di prodotti per edilizia e contract'],
 scope:['Vetro float e low-iron','Vetro temperato e trattato termicamente','Vetro stratificato di sicurezza','Vetro Low-E e controllo solare','Vetrate isolanti / IGU','Taglio a misura, foratura, molatura e lavorazioni di progetto'],
 logistics:['Definizione della rotta in base a destinazione e progetto','Imballo in cassa, A-frame o specifico di progetto definito prima dell’offerta','Confronto di destinazione, Incoterm e condizioni di scarico','Verifica di documenti e requisiti tecnici per singolo fornitore'],
 info:['Tipo di vetro e composizione','Spessore, dimensioni o cut list','Quantità mensile o di progetto','Lavorazioni e requisiti prestazionali','Paese e città di destinazione','Incoterm e tempistica target'],
 q1:'Lavorate con un solo produttore turco di vetro?',a1:'No. Il canale di fornitura viene selezionato in base a prodotto, lavorazioni, capacità, imballo, documentazione e consegna.',
 q2:'Valutate richieste di progetto o volumi più piccoli?',a2:'Sì. MOQ, fattibilità tecnica e logistica vengono verificati per prodotto e fornitore.',
 q3:'Come vengono confrontate le offerte?',a3:'Quando possibile, le offerte vengono normalizzate sulla stessa specifica, quantità, imballo e Incoterm.',
 ctaLabel:'Crea richiesta'
},
ru:{
 buyersTitle:'Для кого подходит',scopeTitle:'Объём поставки',logisticsTitle:'Коммерческая координация',infoTitle:'Данные для точного предложения',faqTitle:'Частые вопросы',
 buyers:['Импортёры и дистрибьюторы стекла','Производители стеклопакетов и окон','Фасадные и архитектурные системные компании','Переработчики стекла','Проектные и закупочные команды','Покупатели строительной и контрактной продукции'],
 scope:['Float и low-iron стекло','Закалённое и термообработанное стекло','Ламинированное безопасное стекло','Low-E и солнцезащитное стекло','Стеклопакеты / IGU','Резка, сверление, обработка кромки и проектная обработка'],
 logistics:['Выбор маршрута по рынку назначения и условиям проекта','Согласование ящиков, A-frame и проектной упаковки до предложения','Сопоставление пункта доставки, Incoterm и условий разгрузки','Проверка требуемых документов и технических подтверждений по поставщику'],
 info:['Тип и состав стекла','Толщина, размеры или cut list','Проектный или месячный объём','Обработка и целевые характеристики','Страна и город доставки','Incoterm и требуемый срок'],
 q1:'Работает ли CTSEG только с одним турецким производителем?',a1:'Нет. Канал поставки выбирается по продукту, обработке, мощности, упаковке, документации и условиям доставки.',
 q2:'Можно ли рассматривать проектные или небольшие объёмы?',a2:'Да. MOQ, техническая выполнимость и логистика проверяются по продукту и поставщику.',
 q3:'Как сравниваются предложения?',a3:'По возможности предложения приводятся к одинаковой спецификации, количеству, упаковке и Incoterm.',
 ctaLabel:'Создать запрос'
},
fa:{
 buyersTitle:'مناسب برای چه خریدارانی',scopeTitle:'دامنه تأمین',logisticsTitle:'هماهنگی تجاری',infoTitle:'اطلاعات لازم برای پیشنهاد دقیق',faqTitle:'پرسش‌های متداول',
 buyers:['واردکنندگان و توزیع‌کنندگان شیشه','تولیدکنندگان IGU و پنجره','شرکت‌های نما و سیستم‌های معماری','واحدهای فرآوری شیشه','تیم‌های خرید و تدارکات پروژه','خریداران محصولات ساختمانی و قراردادی'],
 scope:['شیشه فلوت و Low-Iron','شیشه سکوریت و عملیات حرارتی','شیشه لمینت ایمنی','شیشه Low-E و کنترل خورشیدی','شیشه دوجداره / IGU','برش، سوراخ‌کاری، لبه‌زنی و فرآوری پروژه‌ای'],
 logistics:['انتخاب مسیر حمل بر اساس مقصد و شرایط پروژه','تعیین جعبه، A-frame و بسته‌بندی پروژه قبل از پیشنهاد','مقایسه مقصد، Incoterm و شرایط تخلیه','بررسی اسناد و الزامات فنی به تفکیک تأمین‌کننده'],
 info:['نوع و ساختار شیشه','ضخامت، ابعاد یا cut list','مقدار پروژه یا ماهانه','فرآوری و الزامات عملکردی','کشور و شهر مقصد','Incoterm و زمان تحویل هدف'],
 q1:'آیا فقط با یک تولیدکننده شیشه در ترکیه کار می‌شود؟',a1:'خیر. مسیر تأمین بر اساس محصول، فرآوری، ظرفیت، بسته‌بندی، اسناد و شرایط تحویل انتخاب می‌شود.',
 q2:'آیا سفارش‌های پروژه‌ای یا حجم کمتر قابل بررسی است؟',a2:'بله. MOQ، امکان فنی و لجستیک برای هر محصول و تأمین‌کننده جداگانه بررسی می‌شود.',
 q3:'پیشنهادها چگونه مقایسه می‌شوند؟',a3:'در صورت امکان پیشنهادها بر مبنای مشخصات، مقدار، بسته‌بندی و Incoterm یکسان مقایسه می‌شوند.',
 ctaLabel:'ایجاد درخواست'
},
zh:{
 buyersTitle:'适用买家',scopeTitle:'供应范围',logisticsTitle:'商务协调',infoTitle:'准确报价所需信息',faqTitle:'常见问题',
 buyers:['玻璃进口商与分销商','IGU及门窗制造商','幕墙与建筑系统企业','玻璃深加工企业','项目采购与供应链团队','建筑及工程产品采购方'],
 scope:['浮法及超白低铁玻璃','钢化及热处理玻璃','夹层安全玻璃','Low-E及遮阳镀膜玻璃','中空玻璃 / IGU','定尺切割、钻孔、磨边及项目深加工'],
 logistics:['根据目的市场和项目条件规划运输路线','报价前确认木箱、A架及项目专用包装','统一比较交付地点、Incoterm及卸货条件','按供应商核验所需文件及技术证明'],
 info:['玻璃类型与构造','厚度、尺寸或cut list','项目或月度数量','加工及性能要求','目的国家和城市','目标Incoterm及交期'],
 q1:'是否只与一家土耳其玻璃制造商合作？',a1:'不是。供应路径根据产品、加工能力、产能、包装、文件和交付条件选择。',
 q2:'是否接受项目型或较小数量需求？',a2:'可以。MOQ、技术可行性和物流条件会按产品及供应商分别评估。',
 q3:'如何比较不同报价？',a3:'在可能的情况下，报价会统一到相同规格、数量、包装和Incoterm进行比较。',
 ctaLabel:'创建需求'
},
vi:{
 buyersTitle:'Phù hợp với ai',scopeTitle:'Phạm vi cung ứng',logisticsTitle:'Điều phối thương mại',infoTitle:'Thông tin cần thiết cho báo giá chính xác',faqTitle:'Câu hỏi thường gặp',
 buyers:['Nhà nhập khẩu và phân phối kính','Nhà sản xuất IGU và cửa','Công ty mặt dựng và hệ kiến trúc','Đơn vị gia công kính','Đội thu mua và procurement dự án','Buyer sản phẩm xây dựng và contract'],
 scope:['Kính float và low-iron','Kính cường lực và xử lý nhiệt','Kính dán an toàn','Kính Low-E và solar control','Kính hộp / IGU','Cắt theo kích thước, khoan, mài cạnh và gia công dự án'],
 logistics:['Chọn tuyến vận chuyển theo thị trường đích và điều kiện dự án','Xác định thùng, A-frame và đóng gói dự án trước báo giá','So sánh điểm giao, Incoterm và điều kiện dỡ hàng','Kiểm tra chứng từ và bằng chứng kỹ thuật theo từng nhà cung cấp'],
 info:['Loại kính và cấu hình','Độ dày, kích thước hoặc cut list','Số lượng dự án hoặc hàng tháng','Gia công và yêu cầu hiệu suất','Quốc gia và thành phố giao hàng','Incoterm và thời gian mục tiêu'],
 q1:'CTSEG có chỉ làm việc với một nhà sản xuất kính Türkiye không?',a1:'Không. Kênh cung ứng được chọn theo sản phẩm, gia công, công suất, đóng gói, chứng từ và điều kiện giao hàng.',
 q2:'Có thể đánh giá đơn dự án hoặc số lượng nhỏ hơn không?',a2:'Có. MOQ, tính khả thi kỹ thuật và logistics được kiểm tra theo từng sản phẩm và nhà cung cấp.',
 q3:'Báo giá được so sánh như thế nào?',a3:'Khi có thể, báo giá được chuẩn hóa theo cùng thông số, số lượng, đóng gói và Incoterm.',
 ctaLabel:'Tạo yêu cầu'
},
uk:{
 buyersTitle:'Для кого підходить',scopeTitle:'Обсяг постачання',logisticsTitle:'Комерційна координація',infoTitle:'Дані для точної пропозиції',faqTitle:'Поширені запитання',
 buyers:['Імпортери та дистриб’ютори скла','Виробники IGU та вікон','Фасадні й архітектурні системні компанії','Переробники скла','Проєктні та закупівельні команди','Покупці будівельної та контрактної продукції'],
 scope:['Float і low-iron скло','Загартоване й термооброблене скло','Ламіноване безпечне скло','Low-E та сонцезахисне скло','Склопакети / IGU','Різання, свердління, обробка кромки та проєктна обробка'],
 logistics:['Вибір маршруту відповідно до ринку та умов проєкту','Погодження ящиків, A-frame і проєктного пакування до пропозиції','Порівняння точки доставки, Incoterm і умов розвантаження','Перевірка документів і технічних підтверджень по постачальнику'],
 info:['Тип і склад скла','Товщина, розміри або cut list','Проєктний або місячний обсяг','Обробка та цільові характеристики','Країна і місто доставки','Incoterm і потрібний термін'],
 q1:'Чи працює CTSEG лише з одним турецьким виробником?',a1:'Ні. Канал постачання обирається за продуктом, обробкою, потужністю, пакуванням, документацією та доставкою.',
 q2:'Чи можна розглядати проєктні або менші обсяги?',a2:'Так. MOQ, технічна можливість і логістика перевіряються окремо.',
 q3:'Як порівнюються пропозиції?',a3:'За можливості пропозиції нормалізуються до однакової специфікації, кількості, пакування та Incoterm.',
 ctaLabel:'Створити запит'
},
ro:{
 buyersTitle:'Pentru cine este potrivit',scopeTitle:'Domeniul furnizării',logisticsTitle:'Coordonare comercială',infoTitle:'Date pentru o ofertă corectă',faqTitle:'Întrebări frecvente',
 buyers:['Importatori și distribuitori de sticlă','Producători de IGU și ferestre','Companii de fațade și sisteme arhitecturale','Procesatori de sticlă','Echipe de achiziții și procurement de proiect','Cumpărători de produse pentru construcții și contract'],
 scope:['Sticlă float și low-iron','Sticlă securizată și tratată termic','Sticlă laminată de siguranță','Sticlă Low-E și control solar','Unități de geam termoizolant / IGU','Debitare, găurire, prelucrare muchii și procesare de proiect'],
 logistics:['Alegerea rutei după piața de destinație și condițiile proiectului','Definirea lăzilor, A-frame și ambalării de proiect înaintea ofertei','Compararea destinației, Incoterm și condițiilor de descărcare','Verificarea documentelor și cerințelor tehnice pentru fiecare furnizor'],
 info:['Tip și configurație sticlă','Grosime, dimensiuni sau cut list','Cantitate de proiect sau lunară','Procesare și cerințe de performanță','Țara și orașul destinației','Incoterm și termen țintă'],
 q1:'CTSEG lucrează cu un singur producător turc de sticlă?',a1:'Nu. Ruta de furnizare este selectată după produs, procesare, capacitate, ambalare, documentație și livrare.',
 q2:'Pot fi evaluate cerințe de proiect sau volume mai mici?',a2:'Da. MOQ, fezabilitatea tehnică și logistica sunt verificate pe produs și furnizor.',
 q3:'Cum sunt comparate ofertele?',a3:'Unde este posibil, ofertele sunt normalizate la aceeași specificație, cantitate, ambalare și Incoterm.',
 ctaLabel:'Creează solicitare'
},
bg:{
 buyersTitle:'За кого е подходящо',scopeTitle:'Обхват на доставката',logisticsTitle:'Търговска координация',infoTitle:'Данни за точна оферта',faqTitle:'Често задавани въпроси',
 buyers:['Вносители и дистрибутори на стъкло','Производители на IGU и прозорци','Фасадни и архитектурни системни компании','Преработватели на стъкло','Проектни и снабдителни екипи','Купувачи на строителни и contract продукти'],
 scope:['Float и low-iron стъкло','Закалено и термично обработено стъкло','Ламинирано безопасно стъкло','Low-E и слънцезащитно стъкло','Стъклопакети / IGU','Рязане, пробиване, обработка на ръб и проектна обработка'],
 logistics:['Избор на маршрут според пазара и условията на проекта','Уточняване на каси, A-frame и проектна опаковка преди офертата','Сравнение на място на доставка, Incoterm и условия за разтоварване','Проверка на документи и технически доказателства по доставчик'],
 info:['Тип и структура на стъклото','Дебелина, размери или cut list','Проектно или месечно количество','Обработка и изисквания за ефективност','Държава и град на доставка','Incoterm и целеви срок'],
 q1:'CTSEG работи ли само с един турски производител?',a1:'Не. Каналът се избира според продукта, обработката, капацитета, опаковката, документите и доставката.',
 q2:'Могат ли да се оценят проектни или по-малки количества?',a2:'Да. MOQ, техническата приложимост и логистиката се проверяват по продукт и доставчик.',
 q3:'Как се сравняват офертите?',a3:'Когато е възможно, офертите се нормализират към еднаква спецификация, количество, опаковка и Incoterm.',
 ctaLabel:'Създай запитване'
},
he:{
 buyersTitle:'למי זה מתאים',scopeTitle:'היקף האספקה',logisticsTitle:'תיאום מסחרי',infoTitle:'נתונים להצעה מדויקת',faqTitle:'שאלות נפוצות',
 buyers:['יבואני ומפיצי זכוכית','יצרני IGU וחלונות','חברות חזיתות ומערכות אדריכליות','מעבדי זכוכית','צוותי רכש ופרויקטים','רוכשי מוצרי בנייה ו-contract'],
 scope:['זכוכית float ו-low-iron','זכוכית מחוסמת ומטופלת בחום','זכוכית רבודה בטיחותית','זכוכית Low-E ובקרת שמש','יחידות בידוד / IGU','חיתוך לפי מידה, קידוח, עיבוד קצה ועיבוד לפרויקט'],
 logistics:['בחירת מסלול לפי שוק היעד ותנאי הפרויקט','הגדרת ארגזים, A-frame ואריזה ייעודית לפני ההצעה','השוואת יעד, Incoterm ותנאי פריקה','בדיקת מסמכים ודרישות טכניות לפי ספק'],
 info:['סוג ומבנה הזכוכית','עובי, מידות או cut list','כמות לפרויקט או לחודש','עיבוד ודרישות ביצועים','מדינת ועיר יעד','Incoterm ומועד יעד'],
 q1:'האם CTSEG עובדת עם יצרן זכוכית טורקי יחיד?',a1:'לא. מסלול האספקה נבחר לפי מוצר, עיבוד, קיבולת, אריזה, מסמכים ותנאי אספקה.',
 q2:'האם ניתן לבחון דרישות פרויקט או כמויות קטנות יותר?',a2:'כן. MOQ, היתכנות טכנית ולוגיסטיקה נבדקים לפי מוצר וספק.',
 q3:'כיצד משווים הצעות?',a3:'ככל האפשר, ההצעות מושוות לפי מפרט, כמות, אריזה ו-Incoterm זהים.',
 ctaLabel:'יצירת בקשה'
},
  ar:{
    buyersTitle:'لمن تناسب الخدمة',scopeTitle:'نطاق التوريد',logisticsTitle:'التنسيق التجاري واللوجستي',infoTitle:'المعلومات اللازمة لعرض دقيق',faqTitle:'الأسئلة الشائعة',
    buyers:['مستوردو وموزعو الزجاج','مصنّعو IGU والنوافذ','شركات الواجهات والأنظمة المعمارية','معالجو الزجاج','فرق المشاريع والمشتريات','مشترو مواد البناء والمشاريع'],
    scope:['الزجاج المسطح وLow-Iron','الزجاج المقسى والمعالج حرارياً','الزجاج المصفح للأمان','Low-E وزجاج التحكم الشمسي','الزجاج العازل / IGU','القص والثقوب ومعالجة الحواف والمعالجة حسب المشروع'],
    logistics:['تحديد مسار الشحن وفق السوق وشروط المشروع','تحديد الصناديق وA-frame والتعبئة الخاصة بالمشروع قبل التسعير','توحيد نقطة التسليم وIncoterm وشروط التفريغ للمقارنة','مراجعة الوثائق والأدلة الفنية المطلوبة لكل مورد'],
    info:['نوع الزجاج وتركيبه','السماكة والمقاسات أو cut list','كمية المشروع أو الاحتياج الشهري','المعالجة ومتطلبات الأداء','الدولة والمدينة المستهدفة','Incoterm والموعد المطلوب'],
    q1:'هل تعمل CTSEG مع مصنع زجاج واحد فقط في Türkiye؟',a1:'لا. يتم اختيار مسار التوريد وفق المنتج والمعالجة والطاقة والتعبئة والوثائق وشروط التسليم.',
    q2:'هل يمكن تقييم احتياجات المشاريع أو الكميات الأصغر؟',a2:'نعم. يتم تقييم MOQ والجدوى الفنية والخدمات اللوجستية حسب المنتج والمورد.',
    q3:'كيف تتم مقارنة العروض؟',a3:'كلما أمكن، يتم توحيد العروض على نفس المواصفة والكمية والتعبئة وIncoterm قبل المقارنة.',
    ctaLabel:'إنشاء طلب'
  }
};

const marketText:Record<LocalizedGlassMarketLocale,Record<GlassMarketSlug,MarketText>>={
de:{
 'europe-balkans':{title:'Glasbeschaffung aus Türkiye für Europa & den Balkan',metaTitle:'Glaslieferant Türkiye für Europa & Balkan | CTSEG',description:'Beschaffung von Float-, ESG-, VSG-, Low-E-, IGU- und Projektglas aus Türkiye für Europa und den Balkan mit Lieferantenabgleich, Verpackung und Exportkoordination.',eyebrow:'EUROPA & BALKAN · GLASBESCHAFFUNG AUS TÜRKİYE',lead:'CTSEG verbindet Distributoren, Verarbeiter, Fassadenunternehmen, Fensterhersteller und Projektkäufer in Europa und auf dem Balkan mit geeigneten Herstellern und Verarbeitungskapazitäten in Türkiye.',ctaTitle:'Glasanfrage für Europa oder den Balkan erstellen',ctaText:'Teilen Sie Produkt, Maße, Menge, Verarbeitung, Zielort und Termin. CTSEG prüft zunächst technische und kommerzielle Machbarkeit.'},
 'gulf-middle-east':{title:'Glasbeschaffung aus Türkiye für Golf & Nahost',metaTitle:'Architekturglas Türkiye für Golf & Nahost | CTSEG',description:'Projektbezogene Beschaffung von Architektur-, Fassaden-, ESG-, VSG-, Low-E-, Sonnenschutz- und IGU-Glas aus Türkiye für Golf- und Nahostprojekte.',eyebrow:'GOLF & NAHOST · PROJEKTGLAS',lead:'CTSEG koordiniert geeignete Produktions- und Verarbeitungskapazitäten in Türkiye für Fassaden-, Bau-, Innenausbau- und Projektteams in der Golfregion und im Nahen Osten.',ctaTitle:'Projektanfrage für Golf oder Nahost erstellen',ctaText:'Teilen Sie Glass Schedule, BOQ, technische Spezifikation oder Stückliste. Wir strukturieren die Anforderung für Produktion und Angebot.'},
 'global-project-sourcing':{title:'Globale Beschaffung von Architektur- & Projektglas',metaTitle:'Globale Architekturglas-Beschaffung aus Türkiye | CTSEG',description:'Technische Beschaffung von Architektur-, Fassaden-, ESG-, VSG-, Low-E-, IGU- und verarbeitetem Projektglas aus Türkiye für internationale B2B-Projekte.',eyebrow:'GLOBAL PROJECT GLASS · TECHNICAL SOURCING',lead:'CTSEG überführt Projektspezifikationen in eine kommerziell verwertbare Anfrage, recherchiert passende Hersteller und Verarbeiter in Türkiye und koordiniert Angebot und Lieferung.',ctaTitle:'Globale Projektanfrage erstellen',ctaText:'Senden Sie Spezifikation, BOQ, Glass Schedule oder Cut List. CTSEG strukturiert die Anfrage für Produktion und kommerzielles Angebot.'}
},
it:{
 'europe-balkans':{title:'Sourcing vetro dalla Türkiye per Europa e Balcani',metaTitle:'Fornitore vetro Türkiye per Europa e Balcani | CTSEG',description:'Sourcing di vetro float, temperato, stratificato, Low-E, IGU e vetro di progetto dalla Türkiye per Europa e Balcani.',eyebrow:'EUROPA & BALCANI · SOURCING VETRO DALLA TÜRKİYE',lead:'CTSEG collega distributori, trasformatori, aziende di facciate, produttori di serramenti e buyer di progetto in Europa e nei Balcani con capacità produttive e di lavorazione idonee in Türkiye.',ctaTitle:'Crea una richiesta vetro per Europa o Balcani',ctaText:'Condividi prodotto, dimensioni, quantità, lavorazioni, destinazione e tempistica. CTSEG verifica prima la fattibilità tecnica e commerciale.'},
 'gulf-middle-east':{title:'Sourcing vetro dalla Türkiye per Golfo e Medio Oriente',metaTitle:'Vetro architettonico Türkiye per Golfo e Medio Oriente | CTSEG',description:'Sourcing di vetro architettonico, facciata, temperato, stratificato, Low-E, solar control e IGU per progetti nel Golfo e Medio Oriente.',eyebrow:'GOLFO & MEDIO ORIENTE · VETRO DI PROGETTO',lead:'CTSEG coordina capacità produttive e di lavorazione in Türkiye per team di facciata, costruzione, interior e progetto nel Golfo e Medio Oriente.',ctaTitle:'Crea una richiesta per il tuo progetto nel Golfo o Medio Oriente',ctaText:'Condividi glass schedule, BOQ, specifica tecnica o lista pezzi. Struttureremo la richiesta per produzione e offerta.'},
 'global-project-sourcing':{title:'Sourcing globale di vetro architettonico e di progetto',metaTitle:'Sourcing globale vetro architettonico dalla Türkiye | CTSEG',description:'Sourcing tecnico di vetro architettonico, facciata, temperato, stratificato, Low-E, IGU e lavorato dalla Türkiye per progetti B2B internazionali.',eyebrow:'GLOBAL PROJECT GLASS · TECHNICAL SOURCING',lead:'CTSEG trasforma le specifiche di progetto in una richiesta commerciale, ricerca capacità produttive e di lavorazione idonee in Türkiye e coordina offerte e consegne.',ctaTitle:'Crea una richiesta globale di vetro di progetto',ctaText:'Invia specifica, BOQ, glass schedule o cut list. CTSEG la struttura per produzione e offerta commerciale.'}
},
ru:{
 'europe-balkans':{title:'Поставка стекла из Türkiye для Европы и Балкан',metaTitle:'Поставщик стекла Türkiye для Европы и Балкан | CTSEG',description:'Поставка float, закалённого, ламинированного, Low-E, IGU и проектного стекла из Türkiye для Европы и Балкан.',eyebrow:'ЕВРОПА И БАЛКАНЫ · ПОСТАВКА СТЕКЛА ИЗ TÜRKİYE',lead:'CTSEG подбирает для дистрибьюторов, переработчиков, фасадных компаний, оконных производителей и проектных покупателей подходящих производителей и мощности в Türkiye.',ctaTitle:'Создать запрос на стекло для Европы или Балкан',ctaText:'Укажите продукт, размеры, количество, обработку, пункт назначения и срок. CTSEG сначала проверит техническую и коммерческую выполнимость.'},
 'gulf-middle-east':{title:'Поставка стекла из Türkiye для стран Персидского залива и Ближнего Востока',metaTitle:'Архитектурное стекло Türkiye для Залива и Ближнего Востока | CTSEG',description:'Проектная поставка архитектурного, фасадного, закалённого, ламинированного, Low-E, солнцезащитного и IGU-стекла.',eyebrow:'ЗАЛИВ И БЛИЖНИЙ ВОСТОК · ПРОЕКТНОЕ СТЕКЛО',lead:'CTSEG координирует подходящие производственные и перерабатывающие мощности в Türkiye для фасадных, строительных, интерьерных и проектных команд.',ctaTitle:'Создать запрос для проекта в Заливе или на Ближнем Востоке',ctaText:'Передайте glass schedule, BOQ, техническую спецификацию или список деталей. Мы структурируем запрос для производства и предложения.'},
 'global-project-sourcing':{title:'Глобальная поставка архитектурного и проектного стекла',metaTitle:'Глобальная поставка архитектурного стекла из Türkiye | CTSEG',description:'Технический sourcing архитектурного, фасадного, закалённого, ламинированного, Low-E, IGU и обработанного стекла из Türkiye.',eyebrow:'GLOBAL PROJECT GLASS · TECHNICAL SOURCING',lead:'CTSEG превращает проектные спецификации в коммерческий запрос, исследует подходящие мощности производителей и переработчиков в Türkiye и координирует предложения и поставку.',ctaTitle:'Создать глобальный запрос на проектное стекло',ctaText:'Отправьте спецификацию, BOQ, glass schedule или cut list. CTSEG структурирует запрос для производства и коммерческого предложения.'}
},
fa:{
 'europe-balkans':{title:'تأمین شیشه از ترکیه برای اروپا و بالکان',metaTitle:'تأمین‌کننده شیشه ترکیه برای اروپا و بالکان | CTSEG',description:'تأمین شیشه فلوت، سکوریت، لمینت، Low-E، IGU و شیشه پروژه از ترکیه برای اروپا و بالکان.',eyebrow:'اروپا و بالکان · تأمین شیشه از ترکیه',lead:'CTSEG توزیع‌کنندگان، واحدهای فرآوری، شرکت‌های نما، تولیدکنندگان پنجره و خریداران پروژه در اروپا و بالکان را با ظرفیت مناسب تولید و فرآوری در ترکیه متصل می‌کند.',ctaTitle:'برای اروپا یا بالکان درخواست شیشه ایجاد کنید',ctaText:'محصول، ابعاد، مقدار، فرآوری، مقصد و زمان هدف را ارسال کنید تا امکان فنی و تجاری بررسی شود.'},
 'gulf-middle-east':{title:'تأمین شیشه از ترکیه برای خلیج فارس و خاورمیانه',metaTitle:'شیشه معماری ترکیه برای خلیج فارس و خاورمیانه | CTSEG',description:'تأمین پروژه‌ای شیشه معماری، نما، سکوریت، لمینت، Low-E، کنترل خورشیدی و IGU از ترکیه.',eyebrow:'خلیج فارس و خاورمیانه · شیشه پروژه‌ای',lead:'CTSEG ظرفیت مناسب تولید و فرآوری شیشه در ترکیه را برای تیم‌های نما، ساخت‌وساز، معماری داخلی و پروژه در منطقه هماهنگ می‌کند.',ctaTitle:'برای پروژه خلیج فارس یا خاورمیانه درخواست ایجاد کنید',ctaText:'glass schedule، BOQ، مشخصات فنی یا لیست قطعات را ارسال کنید تا درخواست برای تولید و پیشنهاد ساختاربندی شود.'},
 'global-project-sourcing':{title:'تأمین جهانی شیشه معماری و پروژه‌ای',metaTitle:'تأمین جهانی شیشه معماری از ترکیه | CTSEG',description:'تأمین فنی شیشه معماری، نما، سکوریت، لمینت، Low-E، IGU و شیشه فرآوری‌شده از ترکیه برای پروژه‌های B2B بین‌المللی.',eyebrow:'GLOBAL PROJECT GLASS · TECHNICAL SOURCING',lead:'CTSEG مشخصات پروژه را به درخواست تجاری تبدیل می‌کند، ظرفیت مناسب تولید و فرآوری در ترکیه را بررسی کرده و جریان پیشنهاد و تحویل را هماهنگ می‌کند.',ctaTitle:'درخواست جهانی شیشه پروژه‌ای ایجاد کنید',ctaText:'مشخصات، BOQ، glass schedule یا cut list را ارسال کنید تا CTSEG آن را برای تولید و پیشنهاد تجاری ساختاربندی کند.'}
},
zh:{
 'europe-balkans':{title:'面向欧洲与巴尔干的Türkiye玻璃采购',metaTitle:'Türkiye玻璃供应商｜欧洲与巴尔干 | CTSEG',description:'从Türkiye采购浮法、钢化、夹层、Low-E、IGU及项目玻璃，服务欧洲与巴尔干市场。',eyebrow:'欧洲与巴尔干 · TÜRKİYE玻璃采购',lead:'CTSEG为欧洲及巴尔干的分销商、深加工企业、幕墙公司、门窗制造商和项目采购方匹配Türkiye合适的制造及加工能力。',ctaTitle:'创建欧洲或巴尔干玻璃需求',ctaText:'提交产品、尺寸、数量、加工、目的地和目标时间，CTSEG先评估技术和商务可行性。'},
 'gulf-middle-east':{title:'面向海湾与中东的Türkiye玻璃采购',metaTitle:'Türkiye建筑玻璃｜海湾与中东 | CTSEG',description:'为海湾和中东项目采购Türkiye建筑、幕墙、钢化、夹层、Low-E、遮阳及IGU玻璃。',eyebrow:'海湾与中东 · 项目玻璃采购',lead:'CTSEG为海湾及中东的幕墙、建筑、室内及项目团队协调Türkiye适配的玻璃制造和深加工能力。',ctaTitle:'创建海湾或中东项目需求',ctaText:'提交glass schedule、BOQ、技术规范或零件清单，我们将其整理为生产和报价要求。'},
 'global-project-sourcing':{title:'全球建筑与项目玻璃采购',metaTitle:'全球Türkiye建筑玻璃采购 | CTSEG',description:'面向国际B2B项目，从Türkiye采购建筑、幕墙、钢化、夹层、Low-E、IGU及深加工项目玻璃。',eyebrow:'GLOBAL PROJECT GLASS · TECHNICAL SOURCING',lead:'CTSEG将项目玻璃规范转化为商务需求，匹配Türkiye合适的制造与加工能力，并协调报价和交付流程。',ctaTitle:'创建全球项目玻璃需求',ctaText:'提交规范、BOQ、glass schedule或cut list，CTSEG将其整理为生产与商务报价格式。'}
},
vi:{
 'europe-balkans':{title:'Tìm nguồn cung kính từ Türkiye cho Châu Âu & Balkan',metaTitle:'Nhà cung cấp kính Türkiye cho Châu Âu & Balkan | CTSEG',description:'Sourcing kính float, cường lực, dán, Low-E, IGU và kính dự án từ Türkiye cho Châu Âu và Balkan.',eyebrow:'CHÂU ÂU & BALKAN · SOURCING KÍNH TỪ TÜRKİYE',lead:'CTSEG kết nối nhà phân phối, đơn vị gia công, công ty mặt dựng, nhà sản xuất cửa và buyer dự án với năng lực sản xuất và gia công phù hợp tại Türkiye.',ctaTitle:'Tạo yêu cầu kính cho Châu Âu hoặc Balkan',ctaText:'Chia sẻ sản phẩm, kích thước, số lượng, gia công, điểm đến và thời gian mục tiêu để đánh giá khả thi kỹ thuật và thương mại.'},
 'gulf-middle-east':{title:'Tìm nguồn cung kính từ Türkiye cho Vùng Vịnh & Trung Đông',metaTitle:'Kính kiến trúc Türkiye cho Vùng Vịnh & Trung Đông | CTSEG',description:'Sourcing kính kiến trúc, mặt dựng, cường lực, dán, Low-E, solar control và IGU cho các dự án Vùng Vịnh và Trung Đông.',eyebrow:'VÙNG VỊNH & TRUNG ĐÔNG · KÍNH DỰ ÁN',lead:'CTSEG điều phối năng lực sản xuất và gia công kính phù hợp tại Türkiye cho đội mặt dựng, xây dựng, nội thất và dự án trong khu vực.',ctaTitle:'Tạo yêu cầu cho dự án Vùng Vịnh hoặc Trung Đông',ctaText:'Chia sẻ glass schedule, BOQ, thông số kỹ thuật hoặc danh sách chi tiết để cấu trúc yêu cầu sản xuất và báo giá.'},
 'global-project-sourcing':{title:'Sourcing kính kiến trúc & dự án toàn cầu',metaTitle:'Sourcing kính kiến trúc toàn cầu từ Türkiye | CTSEG',description:'Sourcing kỹ thuật kính kiến trúc, mặt dựng, cường lực, dán, Low-E, IGU và kính gia công từ Türkiye cho dự án B2B quốc tế.',eyebrow:'GLOBAL PROJECT GLASS · TECHNICAL SOURCING',lead:'CTSEG chuyển thông số dự án thành yêu cầu thương mại, tìm năng lực sản xuất và gia công phù hợp tại Türkiye, đồng thời điều phối báo giá và giao hàng.',ctaTitle:'Tạo yêu cầu kính dự án toàn cầu',ctaText:'Gửi thông số, BOQ, glass schedule hoặc cut list để CTSEG cấu trúc cho sản xuất và báo giá thương mại.'}
},
uk:{
 'europe-balkans':{title:'Постачання скла з Türkiye для Європи та Балкан',metaTitle:'Постачальник скла Türkiye для Європи та Балкан | CTSEG',description:'Постачання float, загартованого, ламінованого, Low-E, IGU та проєктного скла з Türkiye для Європи та Балкан.',eyebrow:'ЄВРОПА ТА БАЛКАНИ · ПОСТАЧАННЯ СКЛА З TÜRKİYE',lead:'CTSEG підбирає для дистриб’юторів, переробників, фасадних компаній, виробників вікон і проєктних покупців відповідні виробничі та переробні потужності в Türkiye.',ctaTitle:'Створити запит на скло для Європи або Балкан',ctaText:'Надайте продукт, розміри, кількість, обробку, місце призначення та термін для оцінки технічної й комерційної можливості.'},
 'gulf-middle-east':{title:'Постачання скла з Türkiye для країн Затоки та Близького Сходу',metaTitle:'Архітектурне скло Türkiye для Затоки та Близького Сходу | CTSEG',description:'Проєктне постачання архітектурного, фасадного, загартованого, ламінованого, Low-E, сонцезахисного та IGU-скла.',eyebrow:'ЗАТОКА ТА БЛИЗЬКИЙ СХІД · ПРОЄКТНЕ СКЛО',lead:'CTSEG координує відповідні виробничі й переробні потужності в Türkiye для фасадних, будівельних, інтер’єрних і проєктних команд.',ctaTitle:'Створити запит для проєкту в Затоці або на Близькому Сході',ctaText:'Надайте glass schedule, BOQ, технічну специфікацію або список деталей для структурування виробничої та комерційної пропозиції.'},
 'global-project-sourcing':{title:'Глобальне постачання архітектурного та проєктного скла',metaTitle:'Глобальне постачання архітектурного скла з Türkiye | CTSEG',description:'Технічне постачання архітектурного, фасадного, загартованого, ламінованого, Low-E, IGU та обробленого скла з Türkiye.',eyebrow:'GLOBAL PROJECT GLASS · TECHNICAL SOURCING',lead:'CTSEG перетворює проєктні специфікації на комерційний запит, знаходить відповідні виробничі та переробні потужності в Türkiye й координує пропозиції та доставку.',ctaTitle:'Створити глобальний запит на проєктне скло',ctaText:'Надішліть специфікацію, BOQ, glass schedule або cut list. CTSEG структурує запит для виробництва й комерційної пропозиції.'}
},
ro:{
 'europe-balkans':{title:'Aprovizionare cu sticlă din Türkiye pentru Europa și Balcani',metaTitle:'Furnizor sticlă Türkiye pentru Europa și Balcani | CTSEG',description:'Aprovizionare cu sticlă float, securizată, laminată, Low-E, IGU și sticlă de proiect din Türkiye pentru Europa și Balcani.',eyebrow:'EUROPA & BALCANI · STICLĂ DIN TÜRKİYE',lead:'CTSEG conectează distribuitori, procesatori, companii de fațade, producători de ferestre și cumpărători de proiect cu capacități potrivite din Türkiye.',ctaTitle:'Creează o solicitare pentru Europa sau Balcani',ctaText:'Trimite produsul, dimensiunile, cantitatea, procesarea, destinația și termenul pentru o evaluare tehnică și comercială.'},
 'gulf-middle-east':{title:'Aprovizionare cu sticlă din Türkiye pentru Golf și Orientul Mijlociu',metaTitle:'Sticlă arhitecturală Türkiye pentru Golf și Orientul Mijlociu | CTSEG',description:'Aprovizionare pentru proiecte cu sticlă arhitecturală, fațadă, securizată, laminată, Low-E, solar control și IGU.',eyebrow:'GOLF & ORIENTUL MIJLOCIU · STICLĂ DE PROIECT',lead:'CTSEG coordonează capacități de producție și procesare din Türkiye pentru echipe de fațade, construcții, interior și proiect.',ctaTitle:'Creează o solicitare pentru proiectul din Golf sau Orientul Mijlociu',ctaText:'Trimite glass schedule, BOQ, specificația tehnică sau lista de piese pentru structurarea cererii de producție și ofertare.'},
 'global-project-sourcing':{title:'Aprovizionare globală cu sticlă arhitecturală și de proiect',metaTitle:'Aprovizionare globală sticlă arhitecturală din Türkiye | CTSEG',description:'Aprovizionare tehnică cu sticlă arhitecturală, fațadă, securizată, laminată, Low-E, IGU și procesată din Türkiye.',eyebrow:'GLOBAL PROJECT GLASS · TECHNICAL SOURCING',lead:'CTSEG transformă specificațiile proiectului într-o solicitare comercială, identifică producători și procesatori potriviți în Türkiye și coordonează ofertarea și livrarea.',ctaTitle:'Creează o solicitare globală de sticlă pentru proiect',ctaText:'Trimite specificația, BOQ, glass schedule sau cut list. CTSEG o structurează pentru producție și ofertă comercială.'}
},
bg:{
 'europe-balkans':{title:'Снабдяване със стъкло от Türkiye за Европа и Балканите',metaTitle:'Доставчик на стъкло Türkiye за Европа и Балканите | CTSEG',description:'Снабдяване с float, закалено, ламинирано, Low-E, IGU и проектно стъкло от Türkiye за Европа и Балканите.',eyebrow:'ЕВРОПА И БАЛКАНИ · СТЪКЛО ОТ TÜRKİYE',lead:'CTSEG свързва дистрибутори, преработватели, фасадни компании, производители на прозорци и проектни купувачи с подходящ производствен и преработвателен капацитет в Türkiye.',ctaTitle:'Създай запитване за Европа или Балканите',ctaText:'Изпратете продукт, размери, количество, обработка, дестинация и срок за техническа и търговска оценка.'},
 'gulf-middle-east':{title:'Снабдяване със стъкло от Türkiye за Залива и Близкия изток',metaTitle:'Архитектурно стъкло Türkiye за Залива и Близкия изток | CTSEG',description:'Проектно снабдяване с архитектурно, фасадно, закалено, ламинирано, Low-E, solar control и IGU стъкло.',eyebrow:'ЗАЛИВ И БЛИЗЪК ИЗТОК · ПРОЕКТНО СТЪКЛО',lead:'CTSEG координира подходящ производствен и преработвателен капацитет в Türkiye за фасадни, строителни, интериорни и проектни екипи.',ctaTitle:'Създай запитване за проект в Залива или Близкия изток',ctaText:'Изпратете glass schedule, BOQ, техническа спецификация или списък с детайли за структуриране на производственото и търговското предложение.'},
 'global-project-sourcing':{title:'Глобално снабдяване с архитектурно и проектно стъкло',metaTitle:'Глобално архитектурно стъкло от Türkiye | CTSEG',description:'Техническо снабдяване с архитектурно, фасадно, закалено, ламинирано, Low-E, IGU и обработено стъкло от Türkiye.',eyebrow:'GLOBAL PROJECT GLASS · TECHNICAL SOURCING',lead:'CTSEG превръща проектните спецификации в търговско запитване, намира подходящ производствен и преработвателен капацитет в Türkiye и координира офертата и доставката.',ctaTitle:'Създай глобално запитване за проектно стъкло',ctaText:'Изпратете спецификация, BOQ, glass schedule или cut list. CTSEG ще я структурира за производство и търговска оферта.'}
},
he:{
 'europe-balkans':{title:'אספקת זכוכית מ-Türkiye לאירופה ולבלקן',metaTitle:'ספק זכוכית Türkiye לאירופה ולבלקן | CTSEG',description:'אספקת זכוכית float, מחוסמת, רבודה, Low-E, IGU וזכוכית לפרויקטים מ-Türkiye לאירופה ולבלקן.',eyebrow:'אירופה והבלקן · אספקת זכוכית מ-TÜRKİYE',lead:'CTSEG מחברת מפיצים, מעבדי זכוכית, חברות חזיתות, יצרני חלונות ורוכשי פרויקטים באירופה ובבלקן ליכולות ייצור ועיבוד מתאימות ב-Türkiye.',ctaTitle:'יצירת בקשת זכוכית לאירופה או לבלקן',ctaText:'שתפו מוצר, מידות, כמות, עיבוד, יעד ומועד כדי שנוכל להעריך התאמה טכנית ומסחרית.'},
 'gulf-middle-east':{title:'אספקת זכוכית מ-Türkiye למפרץ ולמזרח התיכון',metaTitle:'זכוכית אדריכלית Türkiye למפרץ ולמזרח התיכון | CTSEG',description:'אספקת זכוכית אדריכלית, חזיתות, מחוסמת, רבודה, Low-E, בקרת שמש ו-IGU לפרויקטים במפרץ ובמזרח התיכון.',eyebrow:'המפרץ והמזרח התיכון · זכוכית לפרויקטים',lead:'CTSEG מתאמת יכולות ייצור ועיבוד מתאימות ב-Türkiye עבור צוותי חזיתות, בנייה, פנים ופרויקטים באזור.',ctaTitle:'יצירת בקשה לפרויקט במפרץ או במזרח התיכון',ctaText:'שתפו glass schedule, BOQ, מפרט טכני או רשימת חלקים כדי לבנות דרישת ייצור והצעה מסחרית.'},
 'global-project-sourcing':{title:'אספקה גלובלית של זכוכית אדריכלית ולפרויקטים',metaTitle:'אספקת זכוכית אדריכלית גלובלית מ-Türkiye | CTSEG',description:'אספקה טכנית של זכוכית אדריכלית, חזיתות, מחוסמת, רבודה, Low-E, IGU וזכוכית מעובדת מ-Türkiye לפרויקטי B2B בינלאומיים.',eyebrow:'GLOBAL PROJECT GLASS · TECHNICAL SOURCING',lead:'CTSEG הופכת מפרטי פרויקט לבקשה מסחרית, מאתרת יכולות ייצור ועיבוד מתאימות ב-Türkiye ומתאמת הצעות ואספקה.',ctaTitle:'יצירת בקשה גלובלית לזכוכית פרויקט',ctaText:'שלחו מפרט, BOQ, glass schedule או cut list. CTSEG תבנה את הדרישה לייצור ולהצעה מסחרית.'}
,
  ar:{
    'europe-balkans':{title:'توريد الزجاج من Türkiye إلى أوروبا والبلقان',metaTitle:'مورّد زجاج من Türkiye لأوروبا والبلقان | CTSEG',description:'توريد الزجاج المسطح والمقسى والمصفح وLow-E وIGU وزجاج المشاريع من Türkiye إلى أوروبا والبلقان.',eyebrow:'أوروبا والبلقان · توريد الزجاج من TÜRKİYE',lead:'تربط CTSEG الموزعين ومعالجي الزجاج وشركات الواجهات ومصنّعي النوافذ ومشتري المشاريع بقدرات إنتاج ومعالجة مناسبة في Türkiye.',ctaTitle:'أنشئ طلب زجاج لأوروبا أو البلقان',ctaText:'شارك نوع المنتج والمقاسات والكمية والمعالجة والوجهة والموعد المطلوب لتقييم الجدوى الفنية والتجارية.'},
    'gulf-middle-east':{title:'توريد الزجاج من Türkiye للخليج والشرق الأوسط',metaTitle:'زجاج معماري من Türkiye للخليج والشرق الأوسط | CTSEG',description:'توريد زجاج معماري وزجاج واجهات ومقسى ومصفح وLow-E وتحكم شمسي وIGU لمشاريع الخليج والشرق الأوسط.',eyebrow:'الخليج والشرق الأوسط · زجاج المشاريع',lead:'تنسق CTSEG قدرات الإنتاج والمعالجة المناسبة في Türkiye لفرق الواجهات والبناء والتصميم الداخلي والمشاريع في المنطقة.',ctaTitle:'أنشئ طلباً لمشروع في الخليج أو الشرق الأوسط',ctaText:'أرسل glass schedule أو BOQ أو المواصفات الفنية أو قائمة القطع لتنظيم متطلبات الإنتاج والتسعير التجاري.'},
    'global-project-sourcing':{title:'توريد عالمي للزجاج المعماري وزجاج المشاريع',metaTitle:'توريد عالمي للزجاج المعماري من Türkiye | CTSEG',description:'توريد فني للزجاج المعماري وزجاج الواجهات والمقسى والمصفح وLow-E وIGU والزجاج المعالج من Türkiye للمشاريع الدولية.',eyebrow:'زجاج المشاريع العالمي · توريد فني',lead:'تحول CTSEG مواصفات المشروع إلى طلب تجاري منظم، وتحدد قدرات الإنتاج والمعالجة المناسبة في Türkiye، ثم تنسق العروض والتسليم.',ctaTitle:'أنشئ طلباً عالمياً لزجاج المشاريع',ctaText:'أرسل المواصفات أو BOQ أو glass schedule أو cut list لتنظيمها للإنتاج والعرض التجاري.'}
  }
}};

export function getLocalizedGlassMarketPage(locale:LocalizedGlassMarketLocale,slug:GlassMarketSlug):LocalizedGlassMarketCopy{
 const c=common[locale];
 const m=marketText[locale][slug];
 return {
   ...m,
   buyersTitle:c.buyersTitle,buyers:c.buyers,
   scopeTitle:c.scopeTitle,scope:c.scope,
   logisticsTitle:m.logisticsTitle||c.logisticsTitle,logistics:c.logistics,
   rfqTitle:c.infoTitle,rfq:c.info,
   faqTitle:c.faqTitle,faq:[[c.q1,c.a1],[c.q2,c.a2],[c.q3,c.a3]],
   ctaLabel:c.ctaLabel
 };
}
