export type TradeDeskLocale = 'tr'|'en'|'de'|'it'|'ru'|'fa'|'zh'|'vi'|'ro'|'bg'|'sr';

export type TradeDeskCopy = {
  eyebrow:string;
  title:string;
  text:string;
  cardTitle:string;
  cardText:string;
  points:string[];
  cta:string;
};

export const tradeDeskCopy: Record<TradeDeskLocale,TradeDeskCopy> = {
  tr:{
    eyebrow:'CTSEG · DIŞ TİCARET MASASI',
    title:'Dış ticaret operasyonunuzu CTSEG ile dışarıdan yönetin',
    text:'Tam zamanlı bir dış ticaret ekibi kurmadan; şirketiniz adına sourcing, ihracat geliştirme, buyer/distribütör araştırması, RFQ takibi, ilk temas ve ticari follow-up süreçlerini düzenli bir operasyon modeliyle yürütebiliriz. İstenirse şirketinize ait kurumsal e-posta hesabı üzerinden, rolümüz açıkça belirtilerek çalışırız.',
    cardTitle:'Dış Ticaret Masası',
    cardText:'Sourcing, ihracat geliştirme, buyer/distribütör araştırması ve RFQ takibini şirketiniz adına düzenli şekilde yürütürüz.',
    points:['Aylık retainer ile sürekli dış ticaret desteği','Sourcing, ihracat geliştirme ve buyer/distribütör takibi','Şirket e-postası, CRM/pipeline ve periyodik raporlama ile şeffaf operasyon'],
    cta:'Dış Ticaret Masası görüşmesi talep et'
  },
  en:{
    eyebrow:'CTSEG · EXTERNAL TRADE DESK',
    title:'Run an outsourced international trade desk with CTSEG',
    text:'Companies can use CTSEG as an external trade function for ongoing sourcing, export development, buyer/distributor research, RFQ follow-up and commercial coordination. Where appropriate, work can be conducted through a company-owned email account with CTSEG’s role clearly disclosed.',
    cardTitle:'External Trade Desk',
    cardText:'We run ongoing sourcing, export development, buyer/distributor research and RFQ follow-up as an external trade function.',
    points:['Monthly retainer for continuous trade support','Sourcing, export development and buyer/distributor follow-up','Company email, CRM pipeline and periodic reporting for transparent execution'],
    cta:'Discuss an External Trade Desk'
  },
  de:{
    eyebrow:'CTSEG · EXTERNER AUSSENHANDELSDESK',
    title:'Externe Außenhandelsfunktion für Beschaffung und Marktentwicklung',
    text:'CTSEG kann als externe Handelsfunktion für laufende Beschaffung, Exportentwicklung, Käufer- und Vertriebspartnersuche, RFQ-Nachverfolgung und kommerzielle Koordination arbeiten. Auf Wunsch erfolgt die Kommunikation über ein firmeneigenes E-Mail-Konto mit klar offengelegter CTSEG-Rolle.',
    cardTitle:'Externer Trade Desk',
    cardText:'Wir übernehmen laufendes Sourcing, Exportentwicklung, Käufer-/Distributorenrecherche und RFQ-Follow-up als externe Handelsfunktion.',
    points:['Monatlicher Retainer für kontinuierliche Unterstützung','Sourcing, Exportentwicklung und Käufer-/Distributoren-Follow-up','Firmene-Mail, CRM-Pipeline und regelmäßige Berichte'],
    cta:'Externen Trade Desk besprechen'
  },
  it:{
    eyebrow:'CTSEG · UFFICIO COMMERCIO ESTERO IN OUTSOURCING',
    title:'Una funzione esterna di commercio internazionale per la tua azienda',
    text:'CTSEG può operare come funzione esterna per sourcing, sviluppo export, ricerca buyer e distributori, follow-up RFQ e coordinamento commerciale continuativo. Se richiesto, la comunicazione può essere gestita tramite un account e-mail aziendale del cliente con il ruolo di CTSEG dichiarato in modo trasparente.',
    cardTitle:'Ufficio Commercio Estero',
    cardText:'Gestiamo sourcing, sviluppo export, ricerca buyer/distributori e follow-up RFQ come funzione commerciale esterna.',
    points:['Retainer mensile per supporto continuativo','Sourcing, export development e follow-up buyer/distributori','E-mail aziendale, pipeline CRM e report periodici'],
    cta:'Parla con noi dell’External Trade Desk'
  },
  ru:{
    eyebrow:'CTSEG · ВНЕШНИЙ ТОРГОВЫЙ ДЕСК',
    title:'Внешняя функция международной торговли для вашей компании',
    text:'CTSEG может вести постоянную работу по поиску поставщиков, развитию экспорта, исследованию покупателей и дистрибьюторов, сопровождению RFQ и коммерческой коммуникации при обязательном соблюдении применимых ограничений. При необходимости используется корпоративная почта клиента с прозрачным указанием роли CTSEG.',
    cardTitle:'Внешний торговый отдел',
    cardText:'Берём на себя сорсинг, развитие экспорта, поиск покупателей/дистрибьюторов и сопровождение RFQ как внешняя функция.',
    points:['Ежемесячный retainer за постоянную работу','Сорсинг, развитие экспорта и follow-up покупателей','Корпоративная почта, CRM-пайплайн и регулярная отчетность'],
    cta:'Обсудить внешний торговый desk'
  },
  fa:{
    eyebrow:'CTSEG · میز تجارت خارجی برون‌سپاری‌شده',
    title:'عملیات تجارت خارجی شرکت خود را با CTSEG به‌صورت مستمر مدیریت کنید',
    text:'CTSEG می‌تواند به‌عنوان یک واحد تجارت خارجی برون‌سپاری‌شده برای تأمین، توسعه صادرات، شناسایی خریدار و توزیع‌کننده، پیگیری RFQ و هماهنگی تجاری مستمر فعالیت کند. در صورت نیاز، ارتباطات از طریق ایمیل متعلق به شرکت مشتری و با اعلام شفاف نقش CTSEG انجام می‌شود.',
    cardTitle:'میز تجارت خارجی',
    cardText:'تأمین، توسعه صادرات، شناسایی خریدار و توزیع‌کننده و پیگیری RFQ را به‌صورت مستمر مدیریت می‌کنیم.',
    points:['قرارداد ماهانه برای پشتیبانی مستمر','تأمین، توسعه صادرات و پیگیری خریدار/توزیع‌کننده','ایمیل شرکتی، پایپ‌لاین CRM و گزارش‌دهی دوره‌ای'],
    cta:'درخواست جلسه میز تجارت خارجی'
  },
  zh:{
    eyebrow:'CTSEG · 外包国际贸易事业部',
    title:'让 CTSEG 作为您的外部国际贸易团队',
    text:'CTSEG 可持续承担供应商开发、出口市场拓展、买家/经销商研究、RFQ 跟进及跨境商务协调。根据合作模式，也可通过客户企业自有邮箱开展工作，并明确披露 CTSEG 的外部协调角色。',
    cardTitle:'外部国际贸易团队',
    cardText:'持续负责供应商开发、出口拓展、买家/经销商研究及 RFQ 跟进。',
    points:['月度顾问/运营服务费模式','供应链开发、出口拓展及买家/经销商跟进','企业邮箱、CRM 商机管道与周期性报告'],
    cta:'咨询外包国际贸易事业部'
  },
  vi:{
    eyebrow:'CTSEG · BỘ PHẬN NGOẠI THƯƠNG THUÊ NGOÀI',
    title:'Vận hành bộ phận ngoại thương thuê ngoài cùng CTSEG',
    text:'CTSEG có thể đảm nhiệm hoạt động sourcing, phát triển xuất khẩu, nghiên cứu buyer/nhà phân phối, theo dõi RFQ và điều phối thương mại liên tục như một bộ phận ngoại thương thuê ngoài. Khi phù hợp, chúng tôi có thể làm việc qua email thuộc sở hữu doanh nghiệp khách hàng với vai trò của CTSEG được công khai rõ ràng.',
    cardTitle:'Bộ phận Ngoại thương',
    cardText:'Chúng tôi phụ trách sourcing, phát triển xuất khẩu, nghiên cứu buyer/nhà phân phối và theo dõi RFQ như một bộ phận bên ngoài.',
    points:['Retainer hàng tháng cho hỗ trợ liên tục','Sourcing, phát triển xuất khẩu và theo dõi buyer/nhà phân phối','Email doanh nghiệp, pipeline CRM và báo cáo định kỳ'],
    cta:'Trao đổi về Bộ phận Ngoại thương thuê ngoài'
  }
};


/* Balkan locale rollout: ro, bg, sr */
Object.assign(tradeDeskCopy as any,{
  ro:{eyebrow:'CTSEG · BIROU EXTERN DE COMERȚ',title:'Operați un birou extern de comerț internațional cu CTSEG',text:'CTSEG poate funcționa ca echipă externă pentru sourcing, dezvoltare export, cercetarea cumpărătorilor și distribuitorilor, urmărirea RFQ și coordonare comercială continuă.',cardTitle:'Birou extern de comerț',cardText:'Gestionăm sourcingul, dezvoltarea exportului, cercetarea cumpărătorilor/distribuitorilor și urmărirea RFQ ca funcție externă.',points:['Retainer lunar pentru suport continuu','Sourcing, dezvoltare export și follow-up cumpărători','E-mail companie, pipeline CRM și raportare periodică'],cta:'Discută un birou extern de comerț'},
  bg:{eyebrow:'CTSEG · ВЪНШЕН ТЪРГОВСКИ ДЕСК',title:'Външна функция за международна търговия с CTSEG',text:'CTSEG може да работи като външна търговска функция за снабдяване, развитие на износ, проучване на купувачи и дистрибутори, RFQ follow-up и постоянна търговска координация.',cardTitle:'Външен търговски отдел',cardText:'Управляваме снабдяване, развитие на износ, проучване на купувачи/дистрибутори и RFQ follow-up като външна функция.',points:['Месечен retainer за постоянна поддръжка','Снабдяване, развитие на износ и follow-up на купувачи','Фирмен e-mail, CRM pipeline и периодични отчети'],cta:'Обсъдете външен търговски отдел'},
  sr:{eyebrow:'CTSEG · EKSTERNI TRGOVINSKI DESK',title:'Vodite eksternu funkciju međunarodne trgovine uz CTSEG',text:'CTSEG može raditi kao eksterna trgovinska funkcija za sourcing, razvoj izvoza, istraživanje kupaca i distributera, RFQ praćenje i kontinuiranu komercijalnu koordinaciju.',cardTitle:'Eksterni trgovinski desk',cardText:'Vodimo sourcing, razvoj izvoza, istraživanje kupaca/distributera i RFQ praćenje kao eksternu trgovinsku funkciju.',points:['Mesečni retainer za kontinuiranu podršku','Sourcing, razvoj izvoza i praćenje kupaca','Kompanijski e-mail, CRM pipeline i periodično izveštavanje'],cta:'Razgovarajmo o trgovinskom desku'}
});
