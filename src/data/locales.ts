export const localeRegistry = [
  { code:'tr', label:'Türkçe', locale:'tr-TR', direction:'ltr', prefix:'/', ogLocale:'tr_TR', active:true, order:1 },
  { code:'en', label:'English', locale:'en-GB', direction:'ltr', prefix:'/en/', ogLocale:'en_GB', active:true, order:2 },
  { code:'de', label:'Deutsch', locale:'de-DE', direction:'ltr', prefix:'/de/', ogLocale:'de_DE', active:true, order:3 },
  { code:'it', label:'Italiano', locale:'it-IT', direction:'ltr', prefix:'/it/', ogLocale:'it_IT', active:true, order:4 },
  { code:'fa', label:'فارسی', locale:'fa-IR', direction:'rtl', prefix:'/fa/', ogLocale:'fa_IR', active:true, order:5 },
  { code:'ru', label:'Русский', locale:'ru-RU', direction:'ltr', prefix:'/ru/', ogLocale:'ru_RU', active:true, order:6 }
] as const;

export type ActiveLocale = (typeof localeRegistry)[number]['code'];
export type SiteLocale = Exclude<ActiveLocale,'fa'>;
export type LocaleDirection = (typeof localeRegistry)[number]['direction'];

export const activeLocaleRegistry = localeRegistry.filter((entry) => entry.active).sort((a,b) => a.order-b.order);
export const activeLocales = activeLocaleRegistry.map((entry) => entry.code) as ActiveLocale[];
export const siteLocales = activeLocales.filter((code):code is SiteLocale => code !== 'fa');
export const localeByCode = Object.fromEntries(localeRegistry.map((entry) => [entry.code,entry])) as Record<ActiveLocale,(typeof localeRegistry)[number]>;

export const localeLabel = (code: string) => localeByCode[code as ActiveLocale]?.label ?? 'English';
export const localeDirection = (code: string) => localeByCode[code as ActiveLocale]?.direction ?? 'ltr';
export const localeOg = (code: string) => localeByCode[code as ActiveLocale]?.ogLocale ?? 'en_GB';
