import { existsSync, readFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { globalCopy } from '../src/data/global-sourcing-locales.ts';

const locales = ['tr','en','de','it','fa','ru','zh','vi','uk','ro','bg','he','ar'];
const industries = ['industrial','textiles','beauty','agriculture','construction','packaging','food'];
const capabilities = ['import-sourcing','export-development','buyer-supplier-matching','oem-odm','private-label','distributor-discovery','industrial-procurement'];
const dist = resolve('dist');
const failures = [];
const decode = value => value.replace(/&amp;/g,'&').replace(/&#39;|&apos;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const text = html => decode(html.replace(/<script\b[\s\S]*?<\/script>/gi,'').replace(/<style\b[\s\S]*?<\/style>/gi,'').replace(/<[^>]*>/g,' ')).replace(/\s+/g,' ').trim();
const normalized = value => value.replace(/\s+/g,' ').trim();
const attr = (tag,name) => decode(tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1] || '');
const homePath = locale => locale === 'tr' ? '/' : `/${locale}/`;
const targetFile = pathname => join(dist,decodeURIComponent(pathname),pathname.endsWith('/')?'index.html':'');
if(!existsSync(dist))throw new Error('dist/ not found; run build first');

for(const locale of locales){
  const prefix = `[${locale}]`;
  const fail = message => failures.push(`${prefix} ${message}`);
  const file = targetFile(homePath(locale));
  if(!existsSync(file)){fail('Homepage missing');continue}
  const html = readFileSync(file,'utf8');
  const copy = globalCopy[locale];
  const visible = text(html);
  if(!html.includes('data-global-sourcing') || !html.includes('data-global-mode="home"'))fail('Global sourcing homepage missing');
  const h1 = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)];
  if(h1.length!==1 || text(h1[0][1])!==copy.title)fail('Expected one localized global trade H1');
  for(const key of ['lead','intro','about','availability','research','scope','imageNote','secondary','processTitle','capabilitiesTitle','marketsTitle','industriesTitle']){
    if(!visible.includes(normalized(copy[key])))fail(`Localized ${key} missing`);
  }
  const sectionClasses=['gs-intro','gs-statement','gs-industries','gs-solutions','gs-markets','gs-process','gs-contact'];
  let previous=-1;
  for(const section of sectionClasses){
    const position=html.search(new RegExp(`<section\\b[^>]*class="${section}(?:[ "])[^>]*>`));
    if(position<0)fail(`Missing ${section} section`);
    else if(position<=previous)fail(`${section} section order incorrect`);
    previous=position;
  }
  if([...html.matchAll(/\bdata-industry="/g)].length!==6 || !/<aside\b[^>]*class="gs-food"/.test(html))fail('Expected six primary industries and one secondary food category');
  industries.forEach((id,index)=>{
    if(id!=='food'&&!html.includes(`data-industry="${id}"`))fail(`Industry ${id} missing`);
    if(!html.includes(`href="/${locale}/industries/${id}/"`))fail(`Industry ${id} detail link missing`);
    for(const value of [copy.industries[index],copy.sectors[index]])if(!visible.includes(normalized(value)))fail(`Localized ${id} content missing`);
  });
  if([...html.matchAll(/\bdata-capability="/g)].length!==7)fail('Expected seven capability cards');
  capabilities.forEach((id,index)=>{
    if(!html.includes(`data-capability="${id}"`)||!html.includes(`href="/${locale}/solutions/${id}/"`))fail(`Capability ${id} or detail link missing`);
    for(const value of [copy.solutions[index],copy.solutionDescriptions[index]])if(!visible.includes(normalized(value)))fail(`Localized capability ${id} content missing`);
  });
  const regions=html.match(/<ul\b[^>]*class="gs-regions"[^>]*>([\s\S]*?)<\/ul>/)?.[1] || '';
  const regionItems=[...regions.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/g)].map(match=>text(match[1]));
  if(JSON.stringify(regionItems)!==JSON.stringify(copy.regions))fail('Expected five localized regions in order');
  for(const step of copy.process)if(!visible.includes(normalized(step)))fail('Localized process step missing');
  const header=html.match(/<header\b[^>]*data-global-header[^>]*>([\s\S]*?)<\/header>/)?.[1] || '';
  for(const label of copy.nav)if(!text(header).includes(normalized(label)))fail(`Navigation label missing: ${label}`);
  const navs=[...header.matchAll(/<nav\b[^>]*>([\s\S]*?)<\/nav>/g)].map(match=>match[1]).join('');
  for(const match of navs.matchAll(/<a\b[^>]*>/g)){
    const href=attr(match[0],'href');
    if(!href.startsWith('/')){fail(`Invalid internal navigation: ${href}`);continue}
    if(!existsSync(targetFile(new URL(href,'https://ctseg.com.tr').pathname)))fail(`Navigation destination missing: ${href}`);
  }
  for(const intent of ['buyer','supplier']){
    const anchors=[...html.matchAll(/<a\b[^>]*href="([^"]*\?intent=[^"]*)"[^>]*>([\s\S]*?)<\/a>/g)];
    const cta=anchors.find(match=>new URL(decode(match[1]),'https://ctseg.com.tr').searchParams.get('intent')===intent);
    if(!cta){fail(`${intent} CTA missing`);continue}
    if(!text(cta[2]).includes(copy[intent]))fail(`${intent} CTA label is not localized`);
    const destination=targetFile(new URL(decode(cta[1]),'https://ctseg.com.tr').pathname);
    if(!existsSync(destination)){fail(`${intent} contact destination missing`);continue}
    const contact=readFileSync(destination,'utf8');
    for(const marker of ['data-commercial-form','action="/api/contact"','name="intent"','name="emailOrPhone"','name="privacy"','name="company"'])if(!contact.includes(marker))fail(`Contact workflow missing ${marker}`);
  }
  if(/<form\b[^>]*data-commercial-form/.test(html))fail('Commercial form should be on contact route');
  for(const match of html.matchAll(/<a\b[^>]*>/g)){
    const href=attr(match[0],'href');
    if(/\/(?:glass|cam)(?:\/|[?#]|$)/i.test(href))fail(`Retired glass destination remains active: ${href}`);
    if(href.startsWith('/')&&!href.startsWith('//')){
      const url=new URL(href,'https://ctseg.com.tr');
      if(!existsSync(targetFile(url.pathname)))fail(`Internal destination missing: ${href}`);
    }
  }
  if(/[\u{1F1E6}-\u{1F1FF}]/u.test(visible)||/<[^>]*(?:class|src)="[^"]*(?:flag-icon|flagcdn|\/flags\/)/i.test(html))fail('Country flags remain in visible navigation/content');
  if(visible.includes('\uFFFD'))fail('Replacement character found in visible content');
}
if(failures.length){console.error(failures.join('\n'));process.exit(1)}
console.log('Homepage parity passed: 13 localized global sourcing homes, seven industries, seven capabilities, five regions, process, navigation, working contact destinations and retired glass/flag checks.');
