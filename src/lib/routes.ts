import {
  insightIds, insights, legal, legalIds, locales, localizedPath, pageCopy, productIds, products,
  sectionSlugs, serviceIds, services, ui, type Locale
} from '../data/site';
import { guideIds, guides, guideSlugs, processPages, scenarioPages, specialSlugs } from '../data/completion';
import { searchLandingIds, searchLandings, searchLandingPath } from '../data/search-landings';

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
    title: lang === 'tr' ? 'CTSEG | Türkiye\'den Tedarikçi Bul, Doğrulat ve İhracat Yap' :
           lang === 'de' ? 'CTSEG | B2B-Lieferanten aus der Türkei finden & prüfen' :
           lang === 'it' ? 'CTSEG | Fornitori B2B dalla Turchia — Ricerca e Verifica' :
           lang === 'fa' ? 'CTSEG | یافتن و تأیید تأمینکنندگان از ترکیه برای تجارت B2B' :
           lang === 'zh' ? 'CTSEG | 土耳其B2B供应商寻源与验证' :
           lang === 'vi' ? 'CTSEG | Tìm & Xác minh Nhà cung cấp B2B từ Thổ Nhĩ Kỳ' :
           lang === 'ru' ? 'CTSEG | Поиск и проверка B2B-поставщиков из Турции' :
           'CTSEG | Find & Verify B2B Suppliers from Türkiye',
    description: lang === 'tr' ? 'CTSEG, Türkiye ve uluslararası pazarlarda B2B tedarikçi araştırması, doğrulama, teklif karşılaştırma ve ticari koordinasyon hizmeti sunar. Doğrulanmış tedarikçiye bağlanın.' :
      lang === 'de' ? 'CTSEG bietet B2B-Lieferantensuche, Verifizierung, Angebotskoordination und Handelsanbahnung aus der Türkei und internationalen Märkten. Jetzt verifizierte Lieferanten finden.' :
      lang === 'it' ? 'CTSEG offre ricerca fornitori B2B, verifica, coordinamento RFQ e matching commerciale dalla Turchia e dai mercati internazionali. Connettiti con fornitori verificati.' :
      lang === 'fa' ? 'CTSEG خدمات تأمین تأمینکننده B2B، تأیید، هماهنگی RFQ و تطبیق تجاری از ترکیه و بازارهای بینالمللی ارائه میدهد. امروز با تأمینکنندگان تأیید شده ارتباط برقرار کنید.' :
      lang === 'zh' ? 'CTSEG提供来自土耳其及国际市场的B2B供应商寻源、验证、RFQ协调和贸易匹配服务。立即联系经过验证的供应商。' :
      lang === 'vi' ? 'CTSEG cung cấp tìm kiếm nhà cung cấp B2B, xác minh, phối hợp RFQ và kết nối thương mại từ Thổ Nhĩ Kỳ và các thị trường quốc tế. Kết nối với nhà cung cấp đã được xác minh ngay hôm nay.' :
      lang === 'ru' ? 'CTSEG предоставляет услуги поиска поставщиков B2B, верификации, координации RFQ и торгового сопровождения из Турции и международных рынков. Найдите проверенных поставщиков.' :
      'CTSEG provides B2B supplier sourcing, verification, RFQ coordination and trade matching from Türkiye and international markets. Connect with verified suppliers today.'
  };
  if (key === 'services' && id) return { title:`${services[id as keyof typeof services].names[lang]} — B2B Sourcing Advisory | CTSEG`, description:services[id as keyof typeof services].descriptions[lang] };
  if (key === 'products' && id) return { title:`${products[id as keyof typeof products].names[lang]} — Wholesale B2B | CTSEG`, description:products[id as keyof typeof products].descriptions[lang] };
  if (key === 'insights' && id) return { title:`${insights[id as keyof typeof insights].titles[lang]} | CTSEG`, description:insights[id as keyof typeof insights].descriptions[lang] };
  if (key === 'how-we-work') return {title:`${processPages[lang].title} | CTSEG`,description:processPages[lang].description};
  if (key === 'scenarios') return {title:`${scenarioPages[lang].title} | CTSEG`,description:scenarioPages[lang].description};
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
    serviceType:'International trade matching and commercial coordination',
    provider:{'@id':'https://ctseg.com.tr/#organization'},
    areaServed:['Türkiye','Europe','Iran','United States','International'],
    audience:[
      {'@type':'BusinessAudience',name:'Buyers seeking suppliers'},
      {'@type':'BusinessAudience',name:'Producers seeking buyers and international markets'}
    ]
  };
}
