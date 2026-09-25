export type DuzceGlassLocale = 'tr' | 'en' | 'de' | 'it' | 'ru' | 'fa' | 'zh' | 'vi' | 'ro' | 'bg' | 'sr';

export const duzceGlassLocales: DuzceGlassLocale[] = ['tr','en','de','it','ru','fa','zh','vi','ro','bg','sr'];

export function duzceGlassPath(lang: DuzceGlassLocale): string {
  return lang === 'tr' ? '/glass/duzce-float-glass/' : `/${lang}/glass/duzce-float-glass/`;
}

export function duzceGlassAlternates(): Record<DuzceGlassLocale,string> {
  return Object.fromEntries(duzceGlassLocales.map((lang) => [lang, `https://ctseg.com.tr${duzceGlassPath(lang)}`])) as Record<DuzceGlassLocale,string>;
}

export interface DuzceGlassCopy {
  metaTitle:string; metaDescription:string; eyebrow:string; title:string; lead:string;
  primaryCta:string; secondaryCta:string; productsTitle:string; marketsTitle:string; roleTitle:string; roleText:string;
  products:string[]; markets:string[]; badges:string[]; rfqTitle:string; rfqText:string;
}

const en:DuzceGlassCopy = {
  metaTitle:'Düzce Float Glass Export & B2B Supply | CTSEG',
  metaDescription:'Commercial enquiries for Düzce Float Glass products: float, coated, laminated, mirror, solar, satin and lacquered glass. Export coordination for Ukraine, Syria, the Balkans and international markets.',
  eyebrow:'CTSEG × Düzce Float Glass · International Trade',
  title:'Turkish glass production, positioned for international markets.',
  lead:'CTSEG manages international commercial enquiries, buyer development and export coordination for Düzce Float Glass across selected markets. We connect importers, distributors, processors, façade companies and project buyers with the appropriate product and commercial route.',
  primaryCta:'Request Export Quotation', secondaryCta:'Explore Glass Portfolio',
  productsTitle:'Glass portfolio', marketsTitle:'Priority export markets', roleTitle:'CTSEG commercial role',
  roleText:'CTSEG operates as an external trade channel on a commission basis: qualifying buyer demand, structuring RFQs, coordinating commercial communication and progressing export opportunities with Düzce Float Glass.',
  products:['Clear Float Glass','Coloured Float Glass','Coated / Low-E Glass','Laminated Glass','Mirror','Solar Glass','Satin Glass','Lacquered Glass'],
  markets:['Ukraine','Syria','Balkans','Romania','Bulgaria','Georgia','Iraq','Iran · selected specifications'],
  badges:['B2B export enquiries','Distributor development','Project & processor demand','Commercial coordination'],
  rfqTitle:'Send a glass procurement requirement',
  rfqText:'Share glass type, thickness, dimensions, quantity, destination, delivery term and project/resale purpose. CTSEG will qualify the request and coordinate the commercial process.'
};

export const duzceGlassData: Record<DuzceGlassLocale,DuzceGlassCopy> = {
  en,
  tr:{...en,
    metaTitle:'Düzce Cam İhracat ve B2B Tedarik | CTSEG',
    metaDescription:'Düzce Cam düz cam, kaplamalı cam, lamine cam, ayna, solar cam, satina ve boyalı cam ürünleri için uluslararası ticari talepler ve ihracat koordinasyonu.',
    eyebrow:'CTSEG × Düzce Cam · Uluslararası Dış Ticaret',
    title:'Türkiye’nin cam üretim gücünü uluslararası pazarlara taşıyoruz.',
    lead:'CTSEG, Düzce Cam ürünleri için seçili dış pazarlarda ticari talep toplama, alıcı geliştirme ve ihracat koordinasyonunu yürütür. İthalatçıları, distribütörleri, cam işleme tesislerini, cephe firmalarını ve proje alıcılarını doğru ürün ve ticari süreçle buluşturur.',
    primaryCta:'Ticari Talep Gönder', secondaryCta:'Cam Portföyünü İncele',
    productsTitle:'Cam ürün portföyü', marketsTitle:'Öncelikli ihracat pazarları', roleTitle:'CTSEG dış ticaret rolü',
    roleText:'CTSEG komisyon usulü dış ticaret kanalı olarak çalışır; alıcı taleplerini doğrular, RFQ şartlarını yapılandırır, ticari iletişimi koordine eder ve Düzce Cam ile ihracat fırsatlarının ilerlemesini sağlar.',
    products:['Düz Cam','Renkli Düz Cam','Kaplamalı / Low-E Cam','Lamine Cam','Ayna','Solar Cam','Satina Cam','Boyalı Cam'],
    markets:['Ukrayna','Suriye','Balkanlar','Romanya','Bulgaristan','Gürcistan','Irak','İran · seçili spesifikasyonlar'],
    badges:['B2B ihracat talepleri','Distribütör geliştirme','Proje ve işlemeci talepleri','Ticari koordinasyon'],
    rfqTitle:'Cam tedarik talebinizi gönderin',
    rfqText:'Cam tipi, kalınlık, ölçü, miktar, hedef ülke/şehir, teslim şekli ve proje veya yeniden satış amacını paylaşın. CTSEG talebi nitelendirerek ticari süreci koordine eder.'
  },
  de:{...en, eyebrow:'CTSEG × Düzce Float Glass · Internationaler Handel', title:'Türkische Glasproduktion für internationale Märkte.', primaryCta:'Exportangebot anfragen', secondaryCta:'Glasportfolio ansehen', productsTitle:'Glasportfolio', marketsTitle:'Priorisierte Exportmärkte', roleTitle:'Kommerzielle Rolle von CTSEG'},
  it:{...en, eyebrow:'CTSEG × Düzce Float Glass · Commercio internazionale', title:'Produzione turca di vetro per i mercati internazionali.', primaryCta:'Richiedi offerta export', secondaryCta:'Esplora il portafoglio vetro', productsTitle:'Portafoglio vetro', marketsTitle:'Mercati export prioritari', roleTitle:'Ruolo commerciale CTSEG'},
  ru:{...en, eyebrow:'CTSEG × Düzce Float Glass · Международная торговля', title:'Турецкое производство стекла для международных рынков.', primaryCta:'Запросить экспортное предложение', secondaryCta:'Каталог стекла', productsTitle:'Ассортимент стекла', marketsTitle:'Приоритетные экспортные рынки', roleTitle:'Коммерческая роль CTSEG'},
  fa:{...en, eyebrow:'CTSEG × Düzce Float Glass · تجارت بین‌المللی', title:'تولید شیشه ترکیه برای بازارهای بین‌المللی.', primaryCta:'درخواست پیشنهاد صادراتی', secondaryCta:'مشاهده سبد شیشه', productsTitle:'سبد محصولات شیشه', marketsTitle:'بازارهای صادراتی اولویت‌دار', roleTitle:'نقش تجاری CTSEG'},
  zh:{...en, eyebrow:'CTSEG × Düzce Float Glass · 国际贸易', title:'面向国际市场的土耳其玻璃制造能力。', primaryCta:'申请出口报价', secondaryCta:'查看玻璃产品组合', productsTitle:'玻璃产品组合', marketsTitle:'重点出口市场', roleTitle:'CTSEG 商务角色'},
  vi:{...en, eyebrow:'CTSEG × Düzce Float Glass · Thương mại quốc tế', title:'Năng lực sản xuất kính Thổ Nhĩ Kỳ cho thị trường quốc tế.', primaryCta:'Yêu cầu báo giá xuất khẩu', secondaryCta:'Xem danh mục kính', productsTitle:'Danh mục kính', marketsTitle:'Thị trường xuất khẩu ưu tiên', roleTitle:'Vai trò thương mại của CTSEG'},
  ro:{...en,metaTitle:'Düzce Float Glass România | Export și furnizare B2B | CTSEG',metaDescription:'Solicitări comerciale pentru sticlă float Düzce: sticlă clară, colorată, cu peliculă, laminată, oglindă, solară, satinată și lăcuită. Coordonare export către România și piețe regionale.',eyebrow:'CTSEG × Düzce Float Glass · Comerț internațional',title:'Producție de sticlă din Türkiye pentru România și piețele internaționale.',lead:'CTSEG gestionează solicitările comerciale, dezvoltarea cumpărătorilor și coordonarea exportului pentru Düzce Float Glass. Conectăm importatori, distribuitori, procesatori, companii de fațade și cumpărători de proiecte cu produsul și ruta comercială potrivite.',primaryCta:'Solicită ofertă de export',secondaryCta:'Vezi portofoliul de sticlă',productsTitle:'Portofoliu de sticlă',marketsTitle:'Piețe prioritare de export',roleTitle:'Rolul comercial CTSEG',roleText:'CTSEG funcționează ca un canal comercial extern: califică cererea, structurează RFQ-urile, coordonează comunicarea și dezvoltă oportunitățile de export împreună cu Düzce Float Glass.',products:['Sticlă float clară','Sticlă float colorată','Sticlă cu peliculă / Low-E','Sticlă laminată','Oglindă','Sticlă solară','Sticlă satinată','Sticlă lăcuită'],markets:['România','Bulgaria','Serbia','Balcani','Ucraina','Georgia','Irak','Piețe regionale selectate'],badges:['Solicitări B2B de export','Dezvoltare distribuitori','Cerere de proiect și procesare','Coordonare comercială'],rfqTitle:'Trimiteți cerința de achiziție pentru sticlă',rfqText:'Indicați tipul sticlei, grosimea, dimensiunile, cantitatea, destinația, Incoterm-ul și utilizarea. CTSEG va califica solicitarea și va coordona procesul comercial.'},
  bg:{...en,metaTitle:'Düzce Float Glass България | B2B износ и доставки | CTSEG',metaDescription:'Търговски запитвания за Düzce Float Glass: флоат, цветно, покрито, ламинирано, огледално, соларно, сатинирано и боядисано стъкло. Координация на износа за България и региона.',eyebrow:'CTSEG × Düzce Float Glass · Международна търговия',title:'Производство на стъкло от Türkiye за България и международните пазари.',lead:'CTSEG управлява търговски запитвания, развитие на купувачи и координация на износа за Düzce Float Glass. Свързваме вносители, дистрибутори, преработватели, фасадни компании и проектни купувачи с правилния продукт и търговски маршрут.',primaryCta:'Поискай експортна оферта',secondaryCta:'Виж портфолиото от стъкло',productsTitle:'Портфолио от стъкло',marketsTitle:'Приоритетни експортни пазари',roleTitle:'Търговска роля на CTSEG',roleText:'CTSEG работи като външен търговски канал: квалифицира търсенето, структурира RFQ, координира комуникацията и развива експортни възможности заедно с Düzce Float Glass.',products:['Прозрачно флоат стъкло','Цветно флоат стъкло','Покрито / Low-E стъкло','Ламинирано стъкло','Огледало','Соларно стъкло','Сатинирано стъкло','Боядисано стъкло'],markets:['България','Румъния','Сърбия','Балкани','Украйна','Грузия','Ирак','Избрани регионални пазари'],badges:['B2B експортни запитвания','Развитие на дистрибутори','Проектно и преработвателно търсене','Търговска координация'],rfqTitle:'Изпратете заявка за снабдяване със стъкло',rfqText:'Посочете вида стъкло, дебелина, размери, количество, дестинация, Incoterm и предназначение. CTSEG ще квалифицира заявката и ще координира търговския процес.'},
  sr:{...en,metaTitle:'Düzce Float Glass Srbija | B2B izvoz i snabdevanje | CTSEG',metaDescription:'Komercijalni upiti za Düzce Float Glass: float, obojeno, premazano, laminirano, ogledalo, solarno, satinirano i lakirano staklo. Koordinacija izvoza za Srbiju i region.',eyebrow:'CTSEG × Düzce Float Glass · Međunarodna trgovina',title:'Proizvodnja stakla iz Türkiye za Srbiju i međunarodna tržišta.',lead:'CTSEG upravlja komercijalnim upitima, razvojem kupaca i koordinacijom izvoza za Düzce Float Glass. Povezujemo uvoznike, distributere, prerađivače, fasadne kompanije i projektne kupce sa odgovarajućim proizvodom i trgovinskom rutom.',primaryCta:'Zatraži izvoznu ponudu',secondaryCta:'Pogledaj portfolio stakla',productsTitle:'Portfolio stakla',marketsTitle:'Prioritetna izvozna tržišta',roleTitle:'Komercijalna uloga CTSEG-a',roleText:'CTSEG radi kao eksterni trgovinski kanal: kvalifikuje tražnju, strukturira RFQ, koordinira komercijalnu komunikaciju i razvija izvozne prilike zajedno sa Düzce Float Glass.',products:['Providno float staklo','Obojeno float staklo','Premazano / Low-E staklo','Laminirano staklo','Ogledalo','Solarno staklo','Satinirano staklo','Lakirano staklo'],markets:['Srbija','Rumunija','Bugarska','Balkan','Ukrajina','Gruzija','Irak','Odabrana regionalna tržišta'],badges:['B2B izvozni upiti','Razvoj distributera','Projektna i prerađivačka tražnja','Komercijalna koordinacija'],rfqTitle:'Pošaljite zahtev za nabavku stakla',rfqText:'Navedite tip stakla, debljinu, dimenzije, količinu, destinaciju, Incoterm i namenu. CTSEG će kvalifikovati zahtev i koordinirati komercijalni proces.'}
};
