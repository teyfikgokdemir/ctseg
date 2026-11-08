// Shared labels for existing industry and specialization templates.
export const specializationUi: Record<string, { areas: string; topics: string; overview: string; related: string; breadcrumb: string }> = Object.fromEntries(Object.entries({
  tr: ['Uzmanlık Alanları', 'Sektörel Tedarik ve Üretim Başlıkları', 'Ticari Tedarik Genel Bakışı', 'Diğer Sektörel Tedarik Alanları', 'Sayfa yolu'],
  en: ['Specialization Areas', 'Sector Sourcing & Manufacturing Categories', 'Commercial Sourcing Overview', 'Related Sourcing Specializations', 'Breadcrumb'],
  de: ['Spezialisierungen', 'Sektorale Beschaffungs- und Fertigungsthemen', 'Kommerzielle Beschaffungsübersicht', 'Weitere Spezialisierungen', 'Brotkrumennavigation'],
  it: ['Aree di specializzazione', 'Ambiti settoriali di approvvigionamento e produzione', 'Panoramica commerciale di approvvigionamento', 'Altre specializzazioni', 'Percorso di navigazione'],
  fa: ['حوزه‌های تخصصی', 'سرفصل‌های تأمین و تولید بخشی', 'نمای کلی تأمین تجاری', 'سایر حوزه‌های تخصصی', 'مسیر صفحه'],
  ru: ['Направления специализации', 'Секторальные направления поставок и производства', 'Обзор коммерческих поставок', 'Другие специализации', 'Навигационная цепочка'],
  zh: ['细分采购专业领域', '行业采购与制造重点分类', '商业采购概述', '相关采购细分领域', '面包屑导航'],
  vi: ['Lĩnh vực chuyên môn', 'Các danh mục sản xuất và cung ứng chuyên ngành', 'Tổng quan về nguồn cung ứng thương mại', 'Các lĩnh vực tìm nguồn cung liên quan', 'Đường dẫn điều hướng'],
  uk: ['Напрями спеціалізації', 'Галузеві напрями постачання та виробництва', 'Огляд комерційного постачання', 'Пов’язані напрями постачання', 'Навігаційний шлях'],
  ro: ['Domenii de specializare', 'Categorii sectoriale de aprovizionare și producție', 'Prezentarea aprovizionării comerciale', 'Specializări de aprovizionare conexe', 'Traseu de navigare'],
  bg: ['Области на специализация', 'Секторни категории за снабдяване и производство', 'Преглед на търговското снабдяване', 'Свързани специализации за снабдяване', 'Навигационна пътека'],
  he: ['תחומי התמחות', 'נושאי רכש וייצור ענפיים', 'סקירת רכש מסחרי', 'ענפי התמחות נוספים', 'נתיב ניווט'],
  ar: ['مجالات التخصص', 'مسارات التوريد والإنتاج القطاعية', 'نظرة عامة على التوريد التجاري', 'مجالات التوريد المتخصصة الأخرى', 'مسار التنقل']
}).map(([lang, [areas, topics, overview, related, breadcrumb]]) => [lang, { areas, topics, overview, related, breadcrumb }]));
