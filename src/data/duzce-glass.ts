export type DuzceGlassLocale = 'tr' | 'en' | 'de' | 'it' | 'ru' | 'fa' | 'zh' | 'vi';

export const duzceGlassLocales: DuzceGlassLocale[] = ['tr','en','de','it','ru','fa','zh','vi'];

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
  vi:{...en, eyebrow:'CTSEG × Düzce Float Glass · Thương mại quốc tế', title:'Năng lực sản xuất kính Thổ Nhĩ Kỳ cho thị trường quốc tế.', primaryCta:'Yêu cầu báo giá xuất khẩu', secondaryCta:'Xem danh mục kính', productsTitle:'Danh mục kính', marketsTitle:'Thị trường xuất khẩu ưu tiên', roleTitle:'Vai trò thương mại của CTSEG'}
};
