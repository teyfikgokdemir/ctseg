import {
  insightIds, insights, legal, legalIds, locales, localizedPath, pageCopy, productIds, products,
  sectionSlugs, serviceIds, services, ui, type Locale
} from '../data/site';
import { guideIds, guides, guideSlugs, processPages, scenarioPages, specialSlugs } from '../data/completion';

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
    if (lang === 'ru') continue;
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
      records.push({lang,path:specialSlugs['how-we-work'][lang],key:'how-we-work'});
      records.push({lang,path:specialSlugs.scenarios[lang],key:'scenarios'});
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
    title:`CTSEG | ${lang === 'tr' ? 'Uluslararası Ticaret Eşleştirme ve Koordinasyon' : lang === 'en' ? 'International Trade Matching & Coordination' : lang === 'de' ? 'Internationale Geschäftsanbahnung & Koordination' : lang === 'it' ? 'Matching Commerciale Internazionale' : lang === 'fa' ? 'تطبیق تجاری و توسعه بازار بین‌المللی' : 'Международный сорсинг и коммерческая координация'}`,
    description: lang === 'tr' ? 'CTSEG, alıcıları doğrulanabilir tedarikçilerle; üreticileri uygun alıcılar ve uluslararası pazar fırsatlarıyla buluşturan ticari koordinasyon platformudur.' :
      lang === 'en' ? 'CTSEG connects buyers with verifiable suppliers and producers with suitable buyers and international market opportunities through independent commercial coordination.' :
      lang === 'de' ? 'CTSEG verbindet Einkäufer mit prüfbaren Lieferanten und Hersteller mit geeigneten Abnehmern und internationalen Marktchancen.' :
      lang === 'it' ? 'CTSEG collega acquirenti a fornitori verificabili e produttori a buyer e opportunità internazionali tramite coordinamento commerciale indipendente.' :
      lang === 'fa' ? 'CTSEG خریداران را به تأمین‌کنندگان قابل‌بررسی و تولیدکنندگان را به خریداران و بازارهای مناسب بین‌المللی متصل می‌کند.' :
      'CTSEG помогает искать производителей и поставщиков, находить покупателей и координировать международные коммерческие процессы.'
  };
  if (key === 'services' && id) return { title:`${services[id as keyof typeof services].names[lang]} | CTSEG`, description:services[id as keyof typeof services].descriptions[lang] };
  if (key === 'products' && id) return { title:`${products[id as keyof typeof products].names[lang]} B2B | CTSEG`, description:products[id as keyof typeof products].descriptions[lang] };
  if (key === 'insights' && id) return { title:`${insights[id as keyof typeof insights].titles[lang]} | CTSEG`, description:insights[id as keyof typeof insights].descriptions[lang] };
  if (key === 'how-we-work' && (lang === 'tr' || lang === 'en')) return {title:`${processPages[lang].title} | CTSEG`,description:processPages[lang].description};
  if (key === 'scenarios' && (lang === 'tr' || lang === 'en')) return {title:`${scenarioPages[lang].title} | CTSEG`,description:scenarioPages[lang].description};
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
    serviceType:'International trade matching and commercial coordination',
    provider:{'@id':'https://ctseg.com.tr/#organization'},
    areaServed:['Türkiye','Europe','Iran','United States','International'],
    audience:[
      {'@type':'BusinessAudience',name:'Buyers seeking suppliers'},
      {'@type':'BusinessAudience',name:'Producers seeking buyers and international markets'}
    ]
  };
}
