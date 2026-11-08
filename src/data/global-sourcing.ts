import { activeLocales } from './locales';
import { globalCopy } from './global-sourcing-locales';

export const industryIds = ['industrial','textiles','beauty','agriculture','construction','packaging','food'] as const;
export const capabilityIds = ['import-sourcing','export-development','buyer-supplier-matching','oem-odm','private-label','distributor-discovery','industrial-procurement'] as const;
export type GlobalMode = 'home'|'industries'|'industry'|'solutions'|'solution'|'markets'|'about'|'process';
export const globalHome = (lang:string) => lang === 'tr' ? '/' : `/${lang}/`;
export const globalPath = (lang:string,kind:string,id?:string) => `/${lang}/${kind}/${id ? `${id}/` : ''}`;
export const globalAlternates = (kind:string,id?:string) => Object.fromEntries(activeLocales.map(lang=>[lang,`https://ctseg.com.tr${kind === 'home' ? globalHome(lang) : globalPath(lang,kind,id)}`]));
export function globalTitle(lang:string,mode:GlobalMode,id?:string) {
  const c=globalCopy[lang];
  if(mode==='industry') return c.industries[industryIds.indexOf(id as any)];
  if(mode==='solution') return c.solutions[capabilityIds.indexOf(id as any)];
  return ({home:c.title,industries:c.industriesTitle,solutions:c.capabilitiesTitle,markets:c.marketsTitle,about:c.nav[1],process:c.processTitle})[mode];
}
export function globalDescription(lang:string,mode:GlobalMode,id?:string) {
  const c=globalCopy[lang];
  if(mode==='industry') return c.sectors[industryIds.indexOf(id as any)];
  if(mode==='solution') return c.solutionDescriptions[capabilityIds.indexOf(id as any)];
  return mode==='about'?c.about:mode==='markets'?`${c.intro} ${c.research}`:mode==='process'?c.process.join(' '):mode==='industries'?c.industries.join(' · ')+'. '+c.availability:mode==='solutions'?c.solutions.join(' · ')+'. '+c.intro:c.lead;
}
