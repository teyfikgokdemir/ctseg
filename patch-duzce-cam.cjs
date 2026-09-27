const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src', 'data', 'trade-sectors.ts');
let content = fs.readFileSync(file, 'utf8');

const additions = {
  tr: `  'duzce-cam-flat-glass': {
    slug: 'duzce-cam-duz-cam-ve-ayna',
    eyebrow: 'Düzce Cam · B2B İhracat',
    title: 'Düzce Cam: Float Cam, Lamine ve Ayna İhracat Koordinasyonu.',
    description: 'Düzce Cam\\'ın günlük 1500 ton kapasiteli düz cam, lamine cam ve ayna üretiminin uluslararası pazarlara güvenli ve yapılandırılmış ihracatı.',
    lead: 'Avrupa ve bölgesel pazarlar için, Düzce Cam\\'ın yüksek teknolojili float hatlarında üretilen düz, renkli, lamine cam ve aynalarını; özel lojistik filosu güvencesiyle stratejik alıcılara ulaştırıyoruz.',
    scopeTitle: 'Genişletilmiş Cam Portföyü',
    items: ['3mm - 12mm Float Düz Cam', 'Akustik ve Güvenlikli Lamine Cam', 'Dekoratif ve Mimari Ayna', 'Renkli ve Kaplamalı Solar Cam', 'Özel Tır Filosu ile Lojistik', 'Uluslararası Proje Koordinasyonu'],
    cta: 'Düzce Cam İhracat Teklifi Al'
  },`,
  en: `  'duzce-cam-flat-glass': {
    slug: 'duzce-cam-flat-glass-and-mirror',
    eyebrow: 'Düzce Cam · B2B Sourcing',
    title: 'Düzce Cam: Sourcing Float Glass, Laminated Glass and Mirrors.',
    description: 'Reliable sourcing and export coordination for Düzce Cam\\'s flat glass, laminated glass, and mirrors with a 1500-ton daily capacity.',
    lead: 'We connect international buyers with Düzce Cam\\'s high-tech float glass production. From acoustic laminated glass to architectural mirrors, we ensure secure logistics and structured procurement.',
    scopeTitle: 'Architectural Glass Portfolio',
    items: ['3mm - 12mm Float Glass', 'Acoustic & Safety Laminated Glass', 'Architectural & Decorative Mirrors', 'Tinted and Solar Coated Glass', 'Dedicated Logistics & Transport', 'International Project Supply'],
    cta: 'Request a Düzce Cam Quote'
  },`,
  de: `  'duzce-cam-flat-glass': {
    slug: 'duzce-cam-flachglas-und-spiegel',
    eyebrow: 'Düzce Cam · B2B-Beschaffung',
    title: 'Düzce Cam: Beschaffung von Flachglas, Verbundglas und Spiegeln.',
    description: 'Zuverlässige Beschaffung und Exportkoordination für Flachglas und Spiegel von Düzce Cam (1500 Tonnen Tageskapazität).',
    lead: 'Wir verbinden internationale Käufer mit der Hightech-Floatglasproduktion von Düzce Cam. Von Akustik-Verbundglas bis hin zu Architekturspiegeln.',
    scopeTitle: 'Architekturglas-Portfolio',
    items: ['3mm - 12mm Floatglas', 'Akustik- und Sicherheits-Verbundglas', 'Architektur- und Dekorspiegel', 'Getöntes und solarbeschichtetes Glas', 'Eigene Logistik & Transport', 'Internationale Projektbelieferung'],
    cta: 'Düzce Cam Angebot anfordern'
  },`,
  it: `  'duzce-cam-flat-glass': {
    slug: 'duzce-cam-vetro-piano-e-specchi',
    eyebrow: 'Düzce Cam · Sourcing B2B',
    title: 'Düzce Cam: Sourcing di vetro piano, vetro stratificato e specchi.',
    description: 'Sourcing e coordinamento per il vetro piano e gli specchi di Düzce Cam con capacità di 1500 tonnellate al giorno.',
    lead: 'Mettiamo in contatto acquirenti internazionali con la produzione di vetro float di Düzce Cam per progetti architettonici.',
    scopeTitle: 'Portafoglio Vetro Architettonico',
    items: ['Vetro Float 3mm - 12mm', 'Vetro Stratificato Acustico e di Sicurezza', 'Specchi Architettonici', 'Vetro Colorato e a Controllo Solare', 'Logistica e Trasporti Dedicati', 'Fornitura per Progetti Internazionali'],
    cta: 'Richiedi un preventivo Düzce Cam'
  },`,
  ru: `  'duzce-cam-flat-glass': {
    slug: 'duzce-cam-listovoye-steklo-i-zerkala',
    eyebrow: 'Düzce Cam · B2B-Поставки',
    title: 'Düzce Cam: Поставки листового стекла, триплекса и зеркал.',
    description: 'Надежные поставки и экспортная координация листового стекла Düzce Cam.',
    lead: 'Мы связываем международных покупателей с высокотехнологичным производством флоат-стекла Düzce Cam. От акустического триплекса до архитектурных зеркал.',
    scopeTitle: 'Портфолио архитектурного стекла',
    items: ['Флоат-стекло 3мм - 12мм', 'Акустический и безопасный триплекс', 'Архитектурные и декоративные зеркала', 'Тонированное и солнцезащитное стекло', 'Специализированная логистика', 'Международные проектные поставки'],
    cta: 'Запросить расчет Düzce Cam'
  },`,
  fa: `  'duzce-cam-flat-glass': {
    slug: 'duzce-cam-shishe-takht-va-ayeneh',
    eyebrow: 'شیشه دوزجه (Düzce Cam) · تأمین B2B',
    title: 'دوزجه جام: تأمین شیشه فلوت، شیشه لمینت و آینه.',
    description: 'تأمین و هماهنگی صادرات شیشه فلوت و آینه شرکت دوزجه جام با ظرفیت روزانه ۱۵۰۰ تن.',
    lead: 'ما خریداران بین‌المللی را به تولیدات پیشرفته شیشه فلوت دوزجه جام متصل می‌کنیم.',
    scopeTitle: 'سبد محصولات شیشه معماری',
    items: ['شیشه فلوت ۳ تا ۱۲ میلی‌متر', 'شیشه لمینت ایمنی و آکوستیک', 'آینه‌های معماری و دکوراتیو', 'شیشه‌های رنگی و کنترل خورشیدی', 'لجستیک و حمل و نقل اختصاصی', 'تأمین پروژه‌های بین‌المللی'],
    cta: 'درخواست قیمت شیشه دوزجه'
  },`,
  zh: `  'duzce-cam-flat-glass': {
    slug: 'duzce-cam-pingban-boli',
    eyebrow: 'Düzce Cam · B2B 采购',
    title: 'Düzce Cam: 浮法玻璃、夹层玻璃和镜子采购。',
    description: '为Düzce Cam的平板玻璃和镜子提供可靠的采购和出口协调。',
    lead: '我们将国际买家与Düzce Cam的高科技浮法玻璃生产联系起来。',
    scopeTitle: '建筑玻璃产品组合',
    items: ['3mm - 12mm 浮法玻璃', '隔音和安全夹层玻璃', '建筑和装饰镜子', '着色和太阳能镀膜玻璃', '专用物流和运输', '国际项目供应'],
    cta: '索取 Düzce Cam 报价'
  },`,
  vi: `  'duzce-cam-flat-glass': {
    slug: 'duzce-cam-kinh-phang-va-guong',
    eyebrow: 'Düzce Cam · Nguồn cung B2B',
    title: 'Düzce Cam: Tìm nguồn cung Kính nổi, Kính dán và Gương.',
    description: 'Tìm nguồn cung đáng tin cậy và điều phối xuất khẩu cho kính nổi và gương của Düzce Cam.',
    lead: 'Chúng tôi kết nối người mua quốc tế với dây chuyền sản xuất kính nổi công nghệ cao của Düzce Cam.',
    scopeTitle: 'Danh mục Kính Kiến trúc',
    items: ['Kính nổi 3mm - 12mm', 'Kính dán An toàn & Cách âm', 'Gương Kiến trúc & Trang trí', 'Kính màu và Kính cản nhiệt', 'Logistics & Vận tải chuyên dụng', 'Cung cấp cho Dự án Quốc tế'],
    cta: 'Yêu cầu Báo giá Düzce Cam'
  },`
};

for (const [lang, block] of Object.entries(additions)) {
  const marker = new RegExp(lang + ':\\\\s*\\\\{');
  content = content.replace(marker, lang + ': {\\n' + block);
}

fs.writeFileSync(file, content, 'utf8');
console.log('Patched Duzce Cam into trade-sectors.ts');
