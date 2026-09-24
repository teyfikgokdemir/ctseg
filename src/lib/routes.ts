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
    if (lang === 'tr' || lang === 'en' || lang === 'fa') records.push({lang,path:iranTradeContent[lang].slug,key:'iran-trade'});
    if (lang === 'vi' && vietnamMarketEntryContent.vi) records.push({lang,path:vietnamMarketEntryContent.vi.slug,key:'vietnam-market-entry'});
    if (lang === 'tr' && vietnamTurkiyeContent.tr) records.push({lang,path:vietnamTurkiyeContent.tr.slug,key:'vietnam-turkiye'});
    if (lang === 'zh' && chinaMarketEntryContent.zh) records.push({lang,path:chinaMarketEntryContent.zh.slug,key:'china-market-entry'});
    if (lang === 'tr' && chinaTurkiyeContent.tr) records.push({lang,path:chinaTurkiyeContent.tr.slug,key:'china-turkiye'});
    if (lang === 'tr') records.push({lang,path:ukraineTurkiyeContent.slug,key:'ukraine-turkiye'});
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
    for (const id of insightIds) records.push({
      lang, path:`${sectionSlugs.insights[lang]}/${insights[id].slugs[lang]}`, key:'insights', id
    });
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
           lang === 'de' ? 'CTSEG | Globaler Handel, strategische Beschaffung & Markteintritt' :
           lang === 'it' ? 'CTSEG | Commercio Globale, Sourcing Strategico & Market Entry' :
           lang === 'fa' ? 'CTSEG | تجارت جهانی، تأمین استراتژیک و ورود به بازار' :
           lang === 'zh' ? 'CTSEG | 双向全球贸易、战略采购与市场进入' :
           lang === 'vi' ? 'CTSEG | Thương mại Toàn cầu, Sourcing Chiến lược & Thâm nhập Thị trường' :
           lang === 'ru' ? 'CTSEG | Международная торговля, стратегический сорсинг и выход на рынок' :
           'CTSEG | Global Trade, Strategic Sourcing & Market Entry',
    description: lang === 'tr' ? 'CTSEG, Türkiye ile dünya pazarları arasında iki yönlü B2B ticaret, stratejik tedarik, tedarikçi doğrulama, RFQ yönetimi ve ihracat/pazara giriş koordinasyonu yürütür.' :
      lang === 'de' ? 'CTSEG verbindet die Türkei mit internationalen Märkten durch bidirektionalen B2B-Handel, strategische Beschaffung, Lieferantenprüfung, RFQ-Management und Markteintritt.' :
      lang === 'it' ? 'CTSEG collega la Turchia ai mercati internazionali con commercio B2B bidirezionale, sourcing strategico, verifica fornitori, gestione RFQ e market entry.' :
      lang === 'fa' ? 'CTSEG تجارت B2B دوطرفه میان ترکیه و بازارهای جهانی، تأمین استراتژیک، راستی‌آزمایی تأمین‌کننده، مدیریت RFQ و ورود به بازار را هماهنگ می‌کند.' :
      lang === 'zh' ? 'CTSEG连接土耳其与全球市场，提供双向B2B贸易、战略采购、供应商核验、RFQ管理与跨境市场进入协调。' :
      lang === 'vi' ? 'CTSEG kết nối Thổ Nhĩ Kỳ với thị trường quốc tế thông qua thương mại B2B hai chiều, sourcing chiến lược, thẩm định nhà cung cấp, quản lý RFQ và thâm nhập thị trường.' :
      lang === 'ru' ? 'CTSEG связывает Турцию с международными рынками через двустороннюю B2B-торговлю, стратегический сорсинг, проверку поставщиков, RFQ и сопровождение выхода на рынок.' :
      'CTSEG connects Türkiye with international markets through two-way B2B trade, strategic sourcing, supplier verification, RFQ management and market-entry coordination.'
  };
  if (key === 'services' && id) return { title:`${services[id as keyof typeof services].names[lang]} — B2B Sourcing Advisory | CTSEG`, description:services[id as keyof typeof services].descriptions[lang] };
  if (key === 'products' && id) return { title:`${products[id as keyof typeof products].names[lang]} — Wholesale B2B | CTSEG`, description:products[id as keyof typeof products].descriptions[lang] };
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
    description:`${legal[id as keyof typeof legal].titles[lang]}. ${copy.legalIntro}`
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
    name:title,description,url:canonicalFor(record),inLanguage:record.lang,
    serviceType:'Two-way global trade, strategic sourcing, supplier verification and market entry',
    provider:{'@id':'https://ctseg.com.tr/#organization'},
    areaServed:['Türkiye','Europe','Middle East','Asia','International'],
    audience:[
      {'@type':'BusinessAudience',name:'Buyers seeking verified suppliers and sourcing routes'},
      {'@type':'BusinessAudience',name:'Manufacturers and producers seeking buyers and international market entry'}
    ]
  };
}
