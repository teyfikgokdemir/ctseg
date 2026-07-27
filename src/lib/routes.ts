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
    title:`CTSEG | ${lang === 'tr' ? 'Stratejik Tedarik ve Uluslararası Ticaret' : lang === 'en' ? 'Strategic Sourcing & International Trade' : lang === 'de' ? 'Strategische Beschaffung & Internationaler Handel' : lang === 'it' ? 'Approvvigionamento Strategico e Commercio Internazionale' : 'Sourcing Stratégique et Commerce International'}`,
    description: lang === 'tr' ? 'CTSEG; stratejik tedarik, doğrulanmış ticari ürünler, tedarikçi doğrulama ve uluslararası ticaret çözümleri sunar.' :
      lang === 'en' ? 'CTSEG delivers strategic sourcing, verified trade products, supplier verification and international trade solutions.' :
      lang === 'de' ? 'CTSEG bietet strategische Beschaffung, verifizierte Handelsprodukte, Lieferantenprüfung und internationale Handelslösungen.' :
      lang === 'it' ? 'CTSEG offre sourcing strategico, prodotti commerciali verificati, verifica fornitori e soluzioni di commercio internazionale.' :
      'CTSEG propose sourcing stratégique, produits commerciaux vérifiés, vérification fournisseurs et solutions de commerce international.'
  };
  if (key === 'services' && id) return { title:`${services[id as keyof typeof services].names[lang]} | CTSEG`, description:services[id as keyof typeof services].descriptions[lang] };
  if (key === 'products' && id) return { title:`${products[id as keyof typeof products].names[lang]} B2B | CTSEG`, description:products[id as keyof typeof products].descriptions[lang] };
  if (key === 'insights' && id) return { title:`${insights[id as keyof typeof insights].titles[lang]} | CTSEG`, description:insights[id as keyof typeof insights].descriptions[lang] };
  if (key === 'how-we-work' && (lang === 'tr' || lang === 'en')) return {title:`${processPages[lang].title} | CTSEG`,description:processPages[lang].description};
  if (key === 'scenarios' && (lang === 'tr' || lang === 'en')) return {title:`${scenarioPages[lang].title} | CTSEG`,description:scenarioPages[lang].description};
  if (key === 'guides' && id && (lang === 'tr' || lang === 'en')) {
    const guide=guides[id as keyof typeof guides][lang];
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
