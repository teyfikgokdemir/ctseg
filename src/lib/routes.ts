import { schemaLanguage } from '../data/locales';
import {
  insightIds, insights, legal, legalIds, locales, localizedPath, pageCopy, productIds, products,
  sectionSlugs, serviceIds, services, ui, type Locale
} from '../data/site';
import { guideIds, guides, guideSlugs, processPages, scenarioPages, specialSlugs } from '../data/completion';
import { searchLandingIds, searchLandings, searchLandingPath } from '../data/search-landings';
import { iranTradeContent } from '../data/iran-trade';
import { vietnamMarketEntryContent } from '../data/vietnam-market-entry';
import { vietnamTurkiyeContent } from '../data/vietnam-turkiye';
import { chinaMarketEntryContent } from '../data/china-market-entry';
import { chinaTurkiyeContent } from '../data/china-turkiye';
import { ukraineTurkiyeContent } from '../data/ukraine-market';
import { regionalIntentHomes } from '../data/regional-intent-homes';
import { termsOfUseCopy } from '../data/legal';
import { syriaMarketContent } from '../data/syria-market';

const localizedMetaLabels: Record<string,{service:string;product:string;serviceType:string;buyerAudience:string;producerAudience:string}> = {
  tr:{service:'B2B Tedarik Danışmanlığı',product:'Toptan B2B',serviceType:'İki yönlü küresel ticaret, stratejik tedarik, tedarikçi doğrulama ve pazara giriş',buyerAudience:'Doğrulanmış tedarikçi ve tedarik rotası arayan alıcılar',producerAudience:'Alıcı ve uluslararası pazara giriş arayan üreticiler'},
  en:{service:'B2B Sourcing Advisory',product:'Wholesale B2B',serviceType:'Two-way global trade, strategic sourcing, supplier verification and market entry',buyerAudience:'Buyers seeking verified suppliers and sourcing routes',producerAudience:'Manufacturers and producers seeking buyers and international market entry'},
  de:{service:'B2B-Beschaffungsberatung',product:'B2B-Großhandel',serviceType:'Bidirektionaler Welthandel, strategische Beschaffung, Lieferantenprüfung und Markteintritt',buyerAudience:'Käufer auf der Suche nach geprüften Lieferanten und Beschaffungswegen',producerAudience:'Hersteller auf der Suche nach Käufern und internationalem Markteintritt'},
  it:{service:'Consulenza sourcing B2B',product:'B2B all’ingrosso',serviceType:'Commercio globale bidirezionale, sourcing strategico, verifica fornitori e ingresso sul mercato',buyerAudience:'Acquirenti alla ricerca di fornitori verificati e canali di approvvigionamento',producerAudience:'Produttori alla ricerca di buyer e accesso ai mercati internazionali'},
  ru:{service:'B2B-консалтинг по снабжению',product:'Оптовый B2B',serviceType:'Двусторонняя международная торговля, стратегический сорсинг, проверка поставщиков и выход на рынок',buyerAudience:'Покупатели, ищущие проверенных поставщиков и маршруты снабжения',producerAudience:'Производители, ищущие покупателей и выход на международные рынки'},
  fa:{service:'مشاوره تأمین B2B',product:'عمده‌فروشی B2B',serviceType:'تجارت جهانی دوسویه، تأمین راهبردی، اعتبارسنجی تأمین‌کننده و ورود به بازار',buyerAudience:'خریدارانی که به دنبال تأمین‌کنندگان تأییدشده و مسیرهای تأمین هستند',producerAudience:'تولیدکنندگانی که به دنبال خریدار و ورود به بازارهای بین‌المللی هستند'},
  zh:{service:'B2B 采购咨询',product:'B2B 批发',serviceType:'双向国际贸易、战略采购、供应商核验与市场准入',buyerAudience:'寻找经核验供应商及采购路径的企业买家',producerAudience:'寻找买家及国际市场准入机会的制造商与生产企业'},
  vi:{service:'Tư vấn sourcing B2B',product:'B2B bán buôn',serviceType:'Thương mại toàn cầu hai chiều, sourcing chiến lược, xác minh nhà cung cấp và thâm nhập thị trường',buyerAudience:'Người mua cần nhà cung cấp đã xác minh và tuyến sourcing phù hợp',producerAudience:'Nhà sản xuất cần buyer và cơ hội thâm nhập thị trường quốc tế'},
  ro:{service:'Consultanță B2B pentru aprovizionare',product:'Comerț B2B angro',serviceType:'Comerț global bidirecțional, aprovizionare strategică, verificarea furnizorilor și intrare pe piață',buyerAudience:'Cumpărători care caută furnizori verificați și rute de aprovizionare',producerAudience:'Producători care caută cumpărători și acces pe piețe internaționale'},
  bg:{service:'B2B консултиране за снабдяване',product:'B2B на едро',serviceType:'Двупосочна глобална търговия, стратегическо снабдяване, проверка на доставчици и навлизане на пазара',buyerAudience:'Купувачи, които търсят проверени доставчици и маршрути за снабдяване',producerAudience:'Производители, които търсят купувачи и достъп до международни пазари'},
  sr:{service:'B2B savetovanje za nabavku',product:'B2B veleprodaja',serviceType:'Dvosmerna globalna trgovina, strateška nabavka, provera dobavljača i ulazak na tržište',buyerAudience:'Kupci koji traže proverene dobavljače i rute nabavke',producerAudience:'Proizvođači koji traže kupce i pristup međunarodnim tržištima'}
};

export type RouteRecord = {
  lang: Locale;
  path?: string;
  key: string;
  id?: string;
};

export function getRouteRecords(): RouteRecord[] {
  const records: RouteRecord[] = [];
  for (const lang of locales) {
    if (lang !== 'tr') records.push({ lang, key:'home' });
    records.push({lang,path:specialSlugs['how-we-work'][lang],key:'how-we-work'});
    records.push({lang,path:specialSlugs.scenarios[lang],key:'scenarios'});
    if (lang === 'tr' || lang === 'en') records.push({lang,path:iranTradeContent[lang].slug,key:'iran-trade'});
    if (lang === 'tr' && vietnamTurkiyeContent.tr) records.push({lang,path:vietnamTurkiyeContent.tr.slug,key:'vietnam-turkiye'});
    if (lang === 'tr' && chinaTurkiyeContent.tr) records.push({lang,path:chinaTurkiyeContent.tr.slug,key:'china-turkiye'});
    if (lang === 'tr') records.push({lang,path:ukraineTurkiyeContent.slug,key:'ukraine-turkiye'});
    if (lang === 'tr' || lang === 'en') records.push({lang,path:syriaMarketContent[lang].slug,key:'syria-market'});
    for (const id of searchLandingIds) records.push({
      lang,path:searchLandingPath(lang,id).replace(`/${lang}/`,'').replace(/^\//,'').replace(/\/$/,''),key:'search-landing',id
    });
    for (const key of ['services','products','markets','insights','about','contact']) {
      records.push({ lang, path:sectionSlugs[key][lang], key });
    }
    for (const id of serviceIds) records.push({
      lang, path:`${sectionSlugs.services[lang]}/${services[id].slugs[lang]}`, key:'services', id
    });
    for (const id of productIds) records.push({
      lang, path:`${sectionSlugs.products[lang]}/${products[id].slugs[lang]}`, key:'products', id
    });
    if (!['ro','bg','sr'].includes(lang)) {
      for (const id of insightIds) records.push({
        lang, path:`${sectionSlugs.insights[lang]}/${insights[id].slugs[lang]}`, key:'insights', id
      });
    }
    for (const id of legalIds) records.push({
      lang, path:legal[id].slugs[lang], key:'legal', id
    });
    if (lang === 'tr' || lang === 'en') {
      for (const id of guideIds) records.push({
        lang,path:`${sectionSlugs.insights[lang]}/${guideSlugs[id][lang]}`,key:'guides',id
      });
    }
  }
  return records;
}

export function getMeta(record: RouteRecord) {
  const { lang, key, id } = record;
  const copy = pageCopy[lang];
  const t = ui[lang];
  if (key === 'home') return {
    title: lang === 'tr' ? 'CTSEG | Küresel Ticaret, Stratejik Tedarik ve Pazara Giriş' :
           lang === 'de' ? `${regionalIntentHomes.de.title} | CTSEG` :
           lang === 'it' ? `${regionalIntentHomes.it.title} | CTSEG` :
           lang === 'fa' ? `${iranTradeContent.fa.title} | CTSEG` :
           lang === 'zh' ? `${chinaMarketEntryContent.zh!.title} | CTSEG` :
           lang === 'vi' ? `${vietnamMarketEntryContent.vi!.title} | CTSEG` :
           lang === 'ru' ? `${regionalIntentHomes.ru.title} | CTSEG` :
           lang === 'ro' ? 'CTSEG | Sourcing strategic în Türkiye, verificare furnizori și intrare pe piață' :
           lang === 'bg' ? 'CTSEG | Стратегическо снабдяване от Türkiye, проверка на доставчици и пазарен достъп' :
           lang === 'sr' ? 'CTSEG | Strateški sourcing iz Türkiye, provera dobavljača i ulazak na tržište' :
           'CTSEG | Global Trade, Strategic Sourcing & Market Entry',
    description: lang === 'tr' ? 'CTSEG, Türkiye ile dünya pazarları arasında iki yönlü B2B ticaret, stratejik tedarik, tedarikçi doğrulama, RFQ yönetimi ve ihracat/pazara giriş koordinasyonu yürütür.' :
      lang === 'de' ? regionalIntentHomes.de.description :
      lang === 'it' ? regionalIntentHomes.it.description :
      lang === 'fa' ? iranTradeContent.fa.description :
      lang === 'zh' ? chinaMarketEntryContent.zh!.description :
      lang === 'vi' ? vietnamMarketEntryContent.vi!.description :
      lang === 'ru' ? regionalIntentHomes.ru.description :
      lang === 'ro' ? 'CTSEG conectează România și piețele europene cu producători și furnizori din Türkiye prin sourcing strategic, verificare furnizori, RFQ, analiză TCO și coordonare de intrare pe piață.' :
      lang === 'bg' ? 'CTSEG свързва България и европейските пазари с производители и доставчици от Türkiye чрез стратегическо снабдяване, проверка на доставчици, RFQ, TCO анализ и координация при навлизане на пазара.' :
      lang === 'sr' ? 'CTSEG povezuje Srbiju i evropska tržišta sa proizvođačima i dobavljačima iz Türkiye kroz strateški sourcing, proveru dobavljača, RFQ, TCO analizu i koordinaciju ulaska na tržište.' :
      'CTSEG connects Türkiye with international markets through two-way B2B trade, strategic sourcing, supplier verification, RFQ management and market-entry coordination.'
  };
  if (key === 'services' && id) return { title:`${services[id as keyof typeof services].names[lang]} — ${localizedMetaLabels[lang].service} | CTSEG`, description:services[id as keyof typeof services].descriptions[lang] };
  if (key === 'products' && id) return { title:`${products[id as keyof typeof products].names[lang]} — ${localizedMetaLabels[lang].product} | CTSEG`, description:products[id as keyof typeof products].descriptions[lang] };
  if (key === 'insights' && id) return { title:`${insights[id as keyof typeof insights].titles[lang]} | CTSEG`, description:insights[id as keyof typeof insights].descriptions[lang] };
  if (key === 'how-we-work') return {title:`${processPages[lang].title} | CTSEG`,description:processPages[lang].description};
  if (key === 'scenarios') return {title:`${scenarioPages[lang].title} | CTSEG`,description:scenarioPages[lang].description};
  if (key === 'iran-trade') {
    const page=iranTradeContent[lang];
    return {title:`${page.title} | CTSEG`,description:page.description};
  }
  if (key === 'vietnam-market-entry') {
    const page=vietnamMarketEntryContent.vi!;
    return {title:`${page.title} | CTSEG`,description:page.description};
  }
  if (key === 'vietnam-turkiye') {
    const page=vietnamTurkiyeContent.tr!;
    return {title:`${page.title} | CTSEG`,description:page.description};
  }
  if (key === 'china-market-entry') {
    const page=chinaMarketEntryContent.zh!;
    return {title:`${page.title} | CTSEG`,description:page.description};
  }
  if (key === 'china-turkiye') {
    const page=chinaTurkiyeContent.tr!;
    return {title:`${page.title} | CTSEG`,description:page.description};
  }
  if (key === 'ukraine-turkiye') {
    return {title:`${ukraineTurkiyeContent.title} | CTSEG`,description:ukraineTurkiyeContent.description};
  }
  if (key === 'syria-market' && (lang === 'tr' || lang === 'en')) {
    const page=syriaMarketContent[lang];
    return {title:`${page.title} | CTSEG`,description:page.description};
  }
  if (key === 'search-landing' && id) {
    const landing=searchLandings[id as keyof typeof searchLandings].content[lang];
    return {title:`${landing.title} | CTSEG`,description:landing.description};
  }
  if (key === 'guides' && id) {
    const guideLang = (lang === 'tr' || lang === 'en') ? lang : 'en';
    const guide = guides[id as keyof typeof guides]?.[guideLang] || { title: 'Guide', description: 'Commercial guide' };
    return {title:`${guide.title} | CTSEG`,description:guide.description};
  }
  if (key === 'legal' && id) return {
    title:`${legal[id as keyof typeof legal].titles[lang]} | CTSEG`,
    description:id === 'terms'
      ? termsOfUseCopy[lang].intro
      : `${legal[id as keyof typeof legal].titles[lang]}. ${copy.legalIntro}`
  };
  const map: Record<string, [string,string]> = {
    services:[copy.servicesTitle,copy.servicesLead], products:[copy.productsTitle,copy.productsLead],
    markets:[copy.marketsTitle,copy.marketsLead], insights:[copy.insightsTitle,copy.insightsLead],
    about:[copy.aboutTitle,copy.aboutLead], contact:[copy.contactTitle,t.contactLead]
  };
  return { title:`${map[key][0]} | CTSEG`, description:map[key][1] };
}

export function canonicalFor(record: RouteRecord) {
  if (record.key === 'home' && record.lang === 'tr') return 'https://ctseg.com.tr/';
  const suffix = record.path ? `${record.path}/` : '';
  return `https://ctseg.com.tr/${record.lang}/${suffix}`;
}

export function breadcrumbSchema(record: RouteRecord, title: string) {
  const home = localizedPath(record.lang, 'home');
  const canonical = canonicalFor(record);
  return {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      {'@type':'ListItem',position:1,name:ui[record.lang].home,item:`https://ctseg.com.tr${home}`},
      {'@type':'ListItem',position:2,name:title,item:canonical}
    ]
  };
}

export function tradeMatchingServiceSchema(record:RouteRecord, title:string, description:string) {
  return {
    '@context':'https://schema.org','@type':'Service','@id':`${canonicalFor(record)}#trade-matching-service`,
    name:title,description,url:canonicalFor(record),inLanguage:schemaLanguage(record.lang),
    serviceType:localizedMetaLabels[record.lang].serviceType,
    provider:{'@id':'https://ctseg.com.tr/#organization'},
    areaServed:['Türkiye','Europe','Middle East','Asia','International'],
    audience:[
      {'@type':'BusinessAudience',name:localizedMetaLabels[record.lang].buyerAudience},
      {'@type':'BusinessAudience',name:localizedMetaLabels[record.lang].producerAudience}
    ]
  };
}
