import type { Locale } from './site';

export type SearchLandingId = 'turkiye-supplier-sourcing' | 'private-label-manufacturer' | 'rfq-bid-comparison' | 'food-origin-compliance';
export type SearchLandingContent = {
  eyebrow:string; title:string; description:string; answerTitle:string; directAnswer:string;
  audienceTitle:string; audience:string; criteriaTitle:string; criteria:readonly string[];
  processTitle:string; process:readonly string[]; evidenceTitle:string; evidence:string;
  serviceType:string; ctaTitle:string; ctaText:string; ctaLabel:string;
  faq:readonly {question:string;answer:string}[];
};

export const searchLandingIds = [
  "turkiye-supplier-sourcing",
  "private-label-manufacturer",
  "rfq-bid-comparison",
  "food-origin-compliance"
] as const satisfies readonly SearchLandingId[];

export const searchLandingIndexCopy = {
  "en": {
    "title": "Solutions for specific commercial decisions",
    "lead": "Focused pages for companies that need a supplier, manufacturer, comparable RFQ or documented food-sourcing assessment."
  },
  "tr": {
    "title": "Belirli ticari kararlar için çözümler",
    "lead": "Tedarikçi, üretici, karşılaştırılabilir RFQ veya belgelenmiş gıda tedarik değerlendirmesi ihtiyacı olan şirketler için odaklanmış sayfalar."
  },
  "de": {
    "title": "Lösungen für spezifische kommerzielle Entscheidungen",
    "lead": "Fokussierte Seiten für Unternehmen, die einen Lieferanten, Hersteller, vergleichbare RFQ oder eine dokumentierte Bewertung der Lebensmittelbeschaffung benötigen."
  },
  "it": {
    "title": "Soluzioni per decisioni commerciali specifiche",
    "lead": "Pagine dedicate per aziende che necessitano di un fornitore, un produttore, RFQ comparabili o una valutazione documentata delle forniture alimentari."
  },
  "ru": {
    "title": "Решения для конкретных коммерческих задач",
    "lead": "Специализированные материалы для компаний, которым требуется поставщик или производитель, сопоставимый RFQ либо документированная оценка закупок пищевой продукции."
  },
  "fa": {
    "title": "راهکار برای تصمیم‌گیری‌های تجاری مشخص",
    "lead": "صفحات متمرکز برای شرکت‌هایی که به یک تأمین‌کننده، تولیدکننده، RFQ قابل مقایسه یا ارزیابی مستند تدارکات مواد غذایی نیاز دارند."
  },
  "zh": {
    "title": "针对关键商业采购决策的专项解决方案",
    "lead": "面向需要物色土耳其源头工厂、OEM 代工制造商、编制高可比性标准 RFQ 或完成全套食品批次合规评估的企业。"
  },
  "vi": {
    "title": "Giải pháp cho các quyết định thương mại chuyên biệt",
    "lead": "Các trang chuyên sâu dành cho doanh nghiệp cần tìm nhà cung cấp, nhà sản xuất OEM, lập RFQ so sánh chuẩn hóa hoặc đánh giá nguồn cung thực phẩm có chứng từ."
  }
} as Record<Locale,{title:string;lead:string}>;

export const searchLandings = {
  "turkiye-supplier-sourcing": {
    "content": {
      "en": {
        "eyebrow": "Türkiye · supplier sourcing",
        "title": "Supplier sourcing and verification in Türkiye",
        "description": "Structured research and evidence-led verification of manufacturers and suppliers in Türkiye for defined B2B requirements.",
        "answerTitle": "How do you find and verify a supplier in Türkiye?",
        "directAnswer": "CTSEG first defines the product, volume, quality, document and delivery criteria. It then researches suitable candidates in Türkiye and cross-checks company registration, activity, capacity, references, documents and commercial terms. Findings, open questions and recommended next checks are reported without presenting verification as an unconditional guarantee.",
        "audienceTitle": "Who this solution is for",
        "audience": "B2B buyers entering the Turkish supply market, replacing a current source, building a second source or independently reviewing candidates before a material order.",
        "criteriaTitle": "Core assessment criteria",
        "criteria": [
          "Legal company identity and authorised contacts",
          "Relevant production or supply capability",
          "Quality, traceability and requested documents",
          "MOQ, lead time, Incoterms, payment and delivery conditions"
        ],
        "processTitle": "Assessment process",
        "process": [
          "Define the requirement and exclusion criteria",
          "Research and screen manufacturer or supplier candidates",
          "Cross-check evidence and clarify inconsistencies",
          "Deliver a shortlist, risk notes and recommended next steps"
        ],
        "evidenceTitle": "Evidence and responsibility boundary",
        "evidence": "The review records evidence available at the time of assessment and identifies missing checks. Samples, audits, laboratory tests, legal review or authorised specialist advice may still be required depending on product and transaction risk.",
        "serviceType": "Supplier sourcing and verification in Türkiye",
        "ctaTitle": "Define your supplier requirement",
        "ctaText": "Share the product, specification, estimated volume, delivery country and required documents for an initial commercial assessment.",
        "ctaLabel": "Request supplier assessment",
        "faq": [
          {
            "question": "Does supplier verification guarantee future performance?",
            "answer": "No. Verification reduces uncertainty and records available evidence, but it cannot guarantee future quality, delivery or commercial conduct."
          },
          {
            "question": "Can CTSEG compare several candidates?",
            "answer": "Yes. Candidates can be evaluated against the same product, quality, capacity, document and commercial criteria so differences remain visible."
          },
          {
            "question": "What information is needed to start?",
            "answer": "Provide the product or service, specification, estimated quantity, target delivery point, timing and any mandatory quality or document requirements."
          }
        ]
      },
      "tr": {
        "eyebrow": "Türkiye · tedarikçi tespiti",
        "title": "Türkiye'de tedarikçi bulma ve doğrulama",
        "description": "Belirlenmiş B2B gereksinimleri için Türkiye'deki üretici ve tedarikçilerin yapılandırılmış araştırması ve kanıta dayalı doğrulaması.",
        "answerTitle": "Türkiye'de tedarikçi nasıl bulunur ve doğrulanır?",
        "directAnswer": "CTSEG önce ürün, hacim, kalite, belge ve teslimat kriterlerini tanımlar. Ardından Türkiye'de uygun adayları araştırır; ticari kayıt, faaliyet alanı, kapasite, referanslar, belgeler ve ticari koşulları çapraz kontrol eder. Bulgular, açık sorular ve önerilen ek kontroller rapor edilir; doğrulama koşulsuz bir garanti olarak sunulmaz.",
        "audienceTitle": "Bu çözüm kimler içindir",
        "audience": "Türk tedarik pazarına giren, mevcut bir kaynağı değiştiren, ikinci bir kaynak kuran veya önemli bir sipariş öncesi adayları bağımsız olarak gözden geçirmek isteyen B2B alıcılar.",
        "criteriaTitle": "Temel değerlendirme kriterleri",
        "criteria": [
          "Yasal şirket kimliği ve yetkili iletişimler",
          "İlgili üretim veya tedarik kapasitesi",
          "Kalite, izlenebilirlik ve talep edilen belgeler",
          "MOQ, teslim süresi, Incoterms, ödeme ve teslim şartları"
        ],
        "processTitle": "Değerlendirme süreci",
        "process": [
          "Gereksinimi ve hariç tutma kriterlerini tanımlayın",
          "Üretici veya tedarikçi adaylarını araştırın ve ön eleme yapın",
          "Kanıtları çapraz kontrol edin ve tutarsızlıkları netleştirin",
          "Kısa liste, risk notları ve önerilen sonraki adımları teslim edin"
        ],
        "evidenceTitle": "Kanıtlar ve sorumluluk sınırı",
        "evidence": "İnceleme değerlendirme anında mevcut kanıtları kaydeder ve eksik kontrolleri belirtir. Ürüne ve işlem riskine bağlı olarak numuneler, denetimler, laboratuvar testleri, hukuki inceleme veya yetkili uzman görüşü gerekebilir.",
        "serviceType": "Türkiye'de tedarikçi bulma ve doğrulama",
        "ctaTitle": "Tedarikçi gereksiniminizi tanımlayın",
        "ctaText": "İlk ticari değerlendirme için ürün, spesifikasyon, tahmini hacim, teslimat ülkesi ve gerekli belgeleri paylaşın.",
        "ctaLabel": "Tedarikçi değerlendirmesi isteyin",
        "faq": [
          {
            "question": "Tedarikçi doğrulaması gelecekteki performansı garanti eder mi?",
            "answer": "Hayır. Doğrulama belirsizliği azaltır ve mevcut kanıtları kayıt altına alır, ancak gelecekteki kalite, teslimat veya ticari davranışı garanti edemez."
          },
          {
            "question": "CTSEG birkaç adayı karşılaştırabilir mi?",
            "answer": "Evet. Adaylar aynı ürün, kalite, kapasite, belge ve ticari kriterlere göre değerlendirilerek farkların görünür kalması sağlanır."
          },
          {
            "question": "Başlamak için hangi bilgiler gerekli?",
            "answer": "Ürün veya hizmet, spesifikasyon, tahmini miktar, hedef teslim noktası, zamanlama ve zorunlu kalite veya belge gereksinimlerini sağlayın."
          }
        ]
      },
      "de": {
        "eyebrow": "Türkei · Lieferantensuche",
        "title": "Lieferantensuche und Verifizierung in Türkiye",
        "description": "Strukturierte Recherche und evidenzbasierte Verifizierung von Herstellern und Lieferanten in Türkiye für definierte B2B-Anforderungen.",
        "answerTitle": "Wie findet und prüft man einen Lieferanten in Türkiye?",
        "directAnswer": "CTSEG definiert zunächst Produkt, Menge, Qualitäts-, Dokumenten- und Lieferkriterien. Anschließend recherchiert es geeignete Kandidaten in Türkiye und überprüft Handelsregister, Tätigkeitsfeld, Kapazität, Referenzen, Dokumente und kommerzielle Bedingungen. Ergebnisse, offene Fragen und empfohlene weitere Prüfungen werden berichtet; die Verifizierung wird nicht als bedingungslose Garantie dargestellt.",
        "audienceTitle": "Für wen diese Lösung gedacht ist",
        "audience": "B2B-Einkäufer, die in den türkischen Beschaffungsmarkt eintreten, eine bestehende Quelle ersetzen, eine Zweitquelle aufbauen oder Kandidaten vor einer kaufmännisch bedeutenden Bestellung unabhängig prüfen möchten.",
        "criteriaTitle": "Kernkriterien der Bewertung",
        "criteria": [
          "Rechtliche Firmenidentität und autorisierte Kontakte",
          "Relevante Produktions- oder Lieferkapazität",
          "Qualität, Rückverfolgbarkeit und angeforderte Dokumente",
          "MOQ, Vorlaufzeit, Incoterms, Zahlungs- und Lieferbedingungen"
        ],
        "processTitle": "Bewertungsprozess",
        "process": [
          "Anforderung und Ausschlusskriterien definieren",
          "Hersteller- oder Lieferantenkandidaten recherchieren und sichten",
          "Belege prüfen und Unstimmigkeiten klären",
          "Eine Shortlist, Risikohinweise und empfohlene nächste Schritte liefern"
        ],
        "evidenceTitle": "Belege und Verantwortungsgrenze",
        "evidence": "Die Prüfung dokumentiert die zum Bewertungszeitpunkt verfügbaren Belege und benennt fehlende Prüfungen. Proben, Audits, Laboranalysen, rechtliche Prüfungen oder fachliche Gutachten können je nach Produkt und Transaktionsrisiko weiterhin erforderlich sein.",
        "serviceType": "Lieferantensuche und Verifizierung in Türkiye",
        "ctaTitle": "Definieren Sie Ihre Lieferantenanforderung",
        "ctaText": "Teilen Sie Produkt, Spezifikation, geschätztes Volumen, Lieferland und benötigte Dokumente für eine erste kommerzielle Bewertung mit.",
        "ctaLabel": "Lieferantenbewertung anfordern",
        "faq": [
          {
            "question": "Gewährleistet die Lieferantenverifizierung die zukünftige Leistung?",
            "answer": "Nein. Verifizierung verringert Unsicherheit und dokumentiert verfügbare Belege, kann jedoch keine zukünftige Qualität, Lieferung oder kommerzielles Verhalten garantieren."
          },
          {
            "question": "Kann CTSEG mehrere Kandidaten vergleichen?",
            "answer": "Ja. Kandidaten können nach denselben Produkt-, Qualitäts-, Kapazitäts-, Dokumenten- und kommerziellen Kriterien bewertet werden, sodass Unterschiede sichtbar bleiben."
          },
          {
            "question": "Welche Informationen werden zum Start benötigt?",
            "answer": "Bitte Produkt oder Dienstleistung, Spezifikation, geschätzte Menge, Ziel-Lieferpunkt, Zeitrahmen und alle zwingenden Qualitäts- oder Dokumentanforderungen angeben."
          }
        ]
      },
      "it": {
        "eyebrow": "Turchia · ricerca fornitori",
        "title": "Ricerca e verifica fornitori in Türkiye",
        "description": "Ricerca strutturata e verifica basata su evidenze di produttori e fornitori in Türkiye per requisiti B2B definiti.",
        "answerTitle": "Come trovare e verificare un fornitore in Türkiye?",
        "directAnswer": "CTSEG definisce innanzitutto prodotto, volume, criteri di qualità, documentazione e consegna. Poi ricerca i candidati idonei in Türkiye e verifica registrazione aziendale, attività, capacità, referenze, documenti e termini commerciali. I risultati, le questioni aperte e i controlli successivi consigliati vengono riportati; la verifica non è presentata come garanzia incondizionata.",
        "audienceTitle": "A chi è rivolta questa soluzione",
        "audience": "Acquirenti B2B che entrano nel mercato di approvvigionamento turco, sostituiscono una fonte esistente, costruiscono una seconda fonte o rivedono autonomamente i candidati prima di un ordine significativo.",
        "criteriaTitle": "Criteri principali di valutazione",
        "criteria": [
          "Identità legale dell’azienda e contatti autorizzati",
          "Capacità produttiva o di fornitura rilevante",
          "Qualità, tracciabilità e documenti richiesti",
          "MOQ, tempi di consegna, Incoterms, termini di pagamento e condizioni di resa"
        ],
        "processTitle": "Processo di valutazione",
        "process": [
          "Definire il requisito e i criteri di esclusione",
          "Ricercare e selezionare candidati produttori o fornitori",
          "Verificare le evidenze e chiarire le incongruenze",
          "Fornire una shortlist, note sui rischi e i passi successivi consigliati"
        ],
        "evidenceTitle": "Evidenze e limiti di responsabilità",
        "evidence": "La revisione registra le evidenze disponibili al momento della valutazione e individua i controlli mancanti. A seconda del prodotto e del rischio della transazione possono essere necessari campioni, audit, test di laboratorio, revisione legale o consulenze specialistiche autorizzate.",
        "serviceType": "Ricerca e verifica fornitori in Türkiye",
        "ctaTitle": "Definite il requisito per il fornitore",
        "ctaText": "Condividete prodotto, specifica, volume stimato, paese di consegna e documenti richiesti per una prima valutazione commerciale.",
        "ctaLabel": "Richiedi valutazione fornitore",
        "faq": [
          {
            "question": "La verifica del fornitore garantisce la performance futura?",
            "answer": "No. La verifica riduce l’incertezza e registra le evidenze disponibili, ma non può garantire qualità, consegne o comportamenti commerciali futuri."
          },
          {
            "question": "CTSEG può confrontare più candidati?",
            "answer": "Sì. I candidati possono essere valutati sugli stessi criteri di prodotto, qualità, capacità, documenti e condizioni commerciali per mantenere visibili le differenze."
          },
          {
            "question": "Quali informazioni servono per iniziare?",
            "answer": "Fornire prodotto o servizio, specifica, quantità stimata, punto di consegna previsto, tempistiche e eventuali requisiti di qualità o documentazione obbligatori."
          }
        ]
      },
      "ru": {
        "eyebrow": "Türkiye · поиск поставщика",
        "title": "Поиск и верификация поставщика в Türkiye",
        "description": "Структурированное исследование и проверка производителей и поставщиков в Türkiye на основе имеющихся доказательств для определённых B2B-требований.",
        "answerTitle": "Как найти и проверить поставщика в Türkiye?",
        "directAnswer": "CTSEG сначала определяет продукт, объём, критерии качества, документы и условия поставки. Затем выполняется поиск подходящих кандидатов в Türkiye и перекрёстная проверка регистрации компании, направления деятельности, мощности, рекомендаций, документов и коммерческих условий. Результаты, открытые вопросы и рекомендованные дальнейшие проверки фиксируются; проверка не представляется как безусловная гарантия.",
        "audienceTitle": "Для кого это решение",
        "audience": "B2B-покупатели, выходящие на турецкий рынок поставок, меняющие текущий источник, формирующие второй источник или самостоятельно оценивающие кандидатов перед существенным заказом.",
        "criteriaTitle": "Основные критерии оценки",
        "criteria": [
          "Юридическая идентичность компании и уполномоченные контакты",
          "Соответствующие производственные или поставочные мощности",
          "Качество, прослеживаемость и требуемые документы",
          "MOQ, срок поставки, Incoterms, условия оплаты и доставки"
        ],
        "processTitle": "Процесс оценки",
        "process": [
          "Определить требование и критерии исключения",
          "Исследовать и отобрать кандидатов-производителей или поставщиков",
          "Перепроверить доказательства и прояснить несоответствия",
          "Предоставить шорт-лист, заметки о рисках и рекомендованные следующие шаги"
        ],
        "evidenceTitle": "Доказательства и границы ответственности",
        "evidence": "Обзор фиксирует доказательства, доступные на момент оценки, и указывает отсутствующие проверки. В зависимости от продукта и рискa сделки могут потребоваться образцы, аудиты, лабораторные испытания, юридическая экспертиза или заключение уполномоченного специалиста.",
        "serviceType": "Поиск и верификация поставщика в Türkiye",
        "ctaTitle": "Определите требование к поставщику",
        "ctaText": "Поделитесь информацией о продукте, спецификации, предполагаемом объёме, стране поставки и необходимых документах для первичной коммерческой оценки.",
        "ctaLabel": "Запросить оценку поставщика",
        "faq": [
          {
            "question": "Гарантирует ли верификация поставщика будущую работоспособность?",
            "answer": "Нет. Верификация снижает неопределённость и фиксирует доступные доказательства, но не может гарантировать будущие качество, поставки или коммерческое поведение."
          },
          {
            "question": "Может ли CTSEG сравнить нескольких кандидатов?",
            "answer": "Да. Кандидаты могут быть оценены по одинаковым критериям продукта, качества, мощности, документов и коммерческих условий, чтобы различия оставались видимыми."
          },
          {
            "question": "Какая информация нужна для начала?",
            "answer": "Предоставьте информацию о продукте или услуге, спецификации, предполагаемом объёме, целевой точке поставки, сроках и любых обязательных требованиях к качеству или документам."
          }
        ]
      },
      "fa": {
        "eyebrow": "ترکیه · شناسایی تأمین‌کننده",
        "title": "یافتن و راستی‌آزمایی تأمین‌کننده در Türkiye",
        "description": "تحقیق ساختاریافته و راستی‌آزمایی مبتنی بر شواهد دربارهٔ تولیدکنندگان و تأمین‌کنندگان در Türkiye برای نیازهای مشخص B2B.",
        "answerTitle": "چطور یک تأمین‌کننده در Türkiye پیدا و راستی‌آزمایی کنیم؟",
        "directAnswer": "CTSEG ابتدا محصول، حجم، معیارهای کیفیت، اسناد و شرایط تحویل را تعریف می‌کند. سپس نامزدهای مناسب در Türkiye را بررسی و ثبت شرکت، فعالیت، ظرفیت، مراجع، اسناد و شرایط تجاری را تطبیق می‌دهد. یافته‌ها، سوالات باز و بررسی‌های بعدی پیشنهادی گزارش می‌شوند؛ راستی‌آزمایی به‌عنوان تضمین مطلق ارائه نمی‌شود.",
        "audienceTitle": "این راهکار مناسب چه کسانی است",
        "audience": "خریداران B2B که وارد بازار تأمین ترکیه می‌شوند، منبع فعلی را جایگزین می‌کنند، منبع ثانوی ایجاد می‌کنند یا پیش از ثبت سفارش مهم به‌طور مستقل نامزدها را بازبینی می‌کنند.",
        "criteriaTitle": "معیارهای اصلی ارزیابی",
        "criteria": [
          "هویت حقوقی شرکت و ارتباطات مجاز",
          "قابلیت تولید یا تامین مرتبط",
          "کیفیت، ردیابی و اسناد درخواستی",
          "MOQ، زمان تحویل، Incoterms، شرایط پرداخت و تحویل"
        ],
        "processTitle": "فرآیند ارزیابی",
        "process": [
          "نیازمندی و معیارهای حذف را تعریف کنید",
          "نامزدهای تولیدکننده یا تأمین‌کننده را پژوهش و غربال کنید",
          "شواهد را بررسی و ناسازگاری‌ها را روشن کنید",
          "فهرست کوتاه، یادداشت‌های ریسک و مراحل پیشنهادی بعدی را ارائه دهید"
        ],
        "evidenceTitle": "شواهد و محدوده مسئولیت",
        "evidence": "بازبینی شواهد موجود در زمان ارزیابی را ثبت و بررسی‌های ناقص را مشخص می‌کند. بسته به محصول و ریسک معامله ممکن است نمونه‌ها، بازرسی‌ها، آزمایشگاه، بررسی حقوقی یا نظر تخصصی مجاز لازم باشد.",
        "serviceType": "یافتن و راستی‌آزمایی تأمین‌کننده در Türkiye",
        "ctaTitle": "نیاز تأمین‌کننده‌تان را تعریف کنید",
        "ctaText": "برای ارزیابی تجاری اولیه، محصول، مشخصات، حجم تخمینی، کشور تحویل و اسناد موردنیاز را ارسال کنید.",
        "ctaLabel": "درخواست ارزیابی تأمین‌کننده",
        "faq": [
          {
            "question": "آیا راستی‌آزمایی تأمین‌کننده عملکرد آینده را تضمین می‌کند؟",
            "answer": "خیر. راستی‌آزمایی عدم‌قطعیت را کاهش و شواهد موجود را ثبت می‌کند، اما نمی‌تواند کیفیت، تحویل یا رفتار تجاری آینده را تضمین کند."
          },
          {
            "question": "آیا CTSEG می‌تواند چند نامزد را مقایسه کند؟",
            "answer": "بله. نامزدها می‌توانند بر اساس یکسان بودن محصول، کیفیت، ظرفیت، اسناد و معیارهای تجاری ارزیابی شوند تا تفاوت‌ها قابل مشاهده بمانند."
          },
          {
            "question": "برای شروع چه اطلاعاتی لازم است؟",
            "answer": "محصول یا خدمت، مشخصات، مقدار تخمینی، نقطه تحویل هدف، زمان‌بندی و هرگونه الزام کیفیت یا سند را ارائه دهید."
          }
        ]
      },
      "zh": {
        "eyebrow": "土耳其本土供应链 · 供应商深度核验",
        "title": "土耳其源头工厂与供应商背景核验与战略寻源",
        "description": "基于清晰界定的 B2B 采购规格，对土耳其境内的实体生产厂家与大宗供应商实施结构化调研与基于证据的背景尽调。",
        "answerTitle": "如何在土耳其高效寻找并深度核验一家真实的生产商？",
        "directAnswer": "CTSEG 首先与您共同界定产品技术参数、采购体量 (MOQ)、质量认证、必备单证及交货口岸标准。随后在土耳其本土产业带展开精准筛选，并官方交叉核验企业商业登记 (Commercial Registration)、实际经营地址、产线排产产能、历史出口记录、银行信誉及商贸交易条款。所有核验结果、待查疑点及后续验厂建议均以透明报告呈现，不作脱离事实的绝对担保。",
        "audienceTitle": "本专项解决方案适用对象",
        "audience": "计划进入土耳其供应链集群、寻找替代货源、构建第二供应备份渠道，或在下达重大采购订单 (PO) 前需要对候选工厂进行独立第三方背调的跨国采购决策层。",
        "criteriaTitle": "核心尽调与核验维度",
        "criteria": [
                "企业法定商业注册登记与实际签约授权人资质",
                "工厂实际生产制造产能、产线设备与排产负荷",
                "ISO/CE 等质量认证体系、全批次流向溯源及质检单证",
                "起订量 (MOQ)、生产交期、Incoterms 交付及跨境结算方式"
        ],
        "processTitle": "结构化核验作业流程",
        "process": [
                "明确技术采购规格书与关键排除指标",
                "在土耳其对应产业集群筛选候选制造工厂",
                "多源交叉核验证据并排查信息疑点",
                "交付优选供应商短名单、显性风险提示及验厂建议"
        ],
        "evidenceTitle": "证据依据与职责边界说明",
        "evidence": "本项核验如实记录评估节点所获取的真实有效凭证，并明确标识尚未覆盖的盲区。依据具体行业与资金风险，后续可能仍需安排实地验厂、权威实验室化验或法律顾问专项复核。",
        "serviceType": "土耳其源头供应商寻源与背景核验服务",
        "ctaTitle": "明确您的土耳其采购与供应商核验需求",
        "ctaText": "请提供产品类别、规格说明、预估批次采购量、目标交付国及必备单证要求，我们将为您启动初步商业评估。",
        "ctaLabel": "申请供应商核验评估",
        "faq": [
                {
                        "question": "供应商背景核验是否等同于对未来履约的绝对担保？",
                        "answer": "不是。背景核验旨在最大限度消除信息不对称、排查欺诈风险并记录现有证据，但无法替代对未来生产波动、国际航运延误或市场波动的动态商业管控。"
                },
                {
                        "question": "CTSEG 能否同时横向对比多家土耳其候选工厂？",
                        "answer": "可以。所有候选工厂均置于完全相同的技术参数、产能规模、质量标准及商业交易条款下进行横向加权比对，确保差异清晰透明。"
                },
                {
                        "question": "启动土耳其供应商核验项目需要提供哪些基础信息？",
                        "answer": "请提供产品或服务名称、详细技术规格书、预估采购数量、目标交付口岸、交期要求以及任何强制性的认证或质检单证标准。"
                }
        ]
},
      "vi": {
        "eyebrow": "Thổ Nhĩ Kỳ · Tìm nguồn cung ứng",
        "title": "Tìm kiếm và thẩm định nhà cung cấp tại Thổ Nhĩ Kỳ",
        "description": "Nghiên cứu có cấu trúc và xác minh dựa trên bằng chứng về các nhà sản xuất và nhà cung cấp tại Thổ Nhĩ Kỳ cho các yêu cầu B2B xác định.",
        "answerTitle": "Làm thế nào để tìm và thẩm định nhà cung cấp tại Thổ Nhĩ Kỳ?",
        "directAnswer": "CTSEG trước hết xác định rõ tiêu chí sản phẩm, sản lượng, chất lượng, chứng từ và giao hàng. Chúng tôi sau đó nghiên cứu các ứng viên phù hợp tại Thổ Nhĩ Kỳ và đối chiếu chéo đăng ký doanh nghiệp, hoạt động thực tế, năng lực sản xuất, tài liệu tham khảo và điều khoản thương mại. Các phát hiện và khuyến nghị kiểm tra tiếp theo được báo cáo minh bạch mà không đưa ra bảo đảm vô điều kiện.",
        "audienceTitle": "Giải pháp này dành cho ai",
        "audience": "Người mua B2B gia nhập thị trường cung ứng Thổ Nhĩ Kỳ, thay thế nguồn cung hiện tại, xây dựng nguồn dự phòng hoặc đánh giá độc lập ứng viên trước khi đặt đơn hàng lớn.",
        "criteriaTitle": "Tiêu chí đánh giá cốt lõi",
        "criteria": [
                "Tư cách pháp nhân doanh nghiệp và người đại diện ủy quyền",
                "Năng lực sản xuất hoặc cung ứng thực tế phù hợp",
                "Hồ sơ chất lượng, tài liệu phân tích và khả năng truy xuất",
                "Tính khả thi thương mại về MOQ, thời gian giao hàng và Incoterms"
        ],
        "processTitle": "Quy trình làm việc từng bước",
        "process": [
                "Xác định hồ sơ yêu cầu và tiêu chí loại trừ",
                "Lập danh sách nhà sản xuất và nhà cung cấp phù hợp tại Thổ Nhĩ Kỳ",
                "Đối chiếu chéo tài liệu, cơ sở thực tế và thông tin xác minh",
                "Báo cáo danh sách chọn lọc cùng các phát hiện và khoảng trống dữ liệu"
        ],
        "evidenceTitle": "Bằng chứng và giới hạn trách nhiệm",
        "evidence": "Đánh giá ghi nhận các bằng chứng xác minh được tại thời điểm rà soát và nêu rõ những nội dung chưa kiểm tra. Tùy thuộc vào rủi ro, có thể cần kiểm toán tại chỗ, phân tích mẫu tại phòng thí nghiệm hoặc ý kiến pháp lý.",
        "serviceType": "Dịch vụ tìm kiếm và thẩm định nhà cung cấp Thổ Nhĩ Kỳ",
        "ctaTitle": "Xác định nhu cầu tìm nguồn cung ứng tại Thổ Nhĩ Kỳ",
        "ctaText": "Gửi thông tin về sản phẩm, thông số kỹ thuật, số lượng ước tính, quốc gia đích và chứng từ cần thiết để chúng tôi đánh giá.",
        "ctaLabel": "Yêu cầu đánh giá nhà cung cấp",
        "faq": [
                {
                        "question": "Thẩm định nhà cung cấp có phải là bảo đảm hoàn toàn không?",
                        "answer": "Không. Thẩm định giúp giảm thiểu rủi ro thông tin và làm rõ bằng chứng thực tế, nhưng không thay thế cho việc kiểm soát chất lượng liên tục và quản lý hợp đồng."
                },
                {
                        "question": "CTSEG có thể so sánh nhiều nhà sản xuất cùng lúc không?",
                        "answer": "Có. Chúng tôi cấu trúc tiêu chí kỹ thuật và thương mại để so sánh các ứng viên trên cùng một cơ sở chuẩn hóa."
                },
                {
                        "question": "Cần cung cấp thông tin gì để bắt đầu?",
                        "answer": "Cần cung cấp thông số sản phẩm, số lượng dự kiến, địa điểm giao hàng, thời hạn và các yêu cầu chứng từ pháp lý bắt buộc."
                }
        ]
}
    },
    "paths": {
      "tr": "/tr/cozumler/turkiyede-tedarikci-bulma-dogrulama/",
      "en": "/en/solutions/supplier-sourcing-verification-turkiye/",
      "de": "/de/loesungen/lieferantensuche-pruefung-tuerkei/",
      "it": "/it/soluzioni/ricerca-verifica-fornitori-turchia/",
      "ru": "/ru/resheniya/poisk-proverka-postavshchikov-turciya/",
      "fa": "/fa/solutions/supplier-sourcing-verification-turkiye/",
      "zh": "/zh/solutions/turkiye-supplier-sourcing-verification/",
      "vi": "/vi/solutions/turkiye-supplier-sourcing-verification/"
    }
  },
  "private-label-manufacturer": {
    "content": {
      "en": {
        "eyebrow": "Private label · manufacturer research",
        "title": "Private-label manufacturer research and qualification",
        "description": "Manufacturer research structured around product specification, MOQ, packaging, labelling, documents, capacity and target-market requirements.",
        "answerTitle": "How do you assess a private-label manufacturer?",
        "directAnswer": "A private-label project should be assessed as a complete operating model, not only as a product quote. CTSEG structures the requirement, researches suitable manufacturers and compares product capability, MOQ, packaging, artwork, quality documents, lead time, commercial terms and responsibilities before a shortlist is proposed.",
        "audienceTitle": "Who this solution is for",
        "audience": "Brands, distributors and B2B buyers developing a new private-label line, changing a contract manufacturer or testing whether a product concept is commercially feasible.",
        "criteriaTitle": "Core assessment criteria",
        "criteria": [
          "Product formula, specification and permitted tolerances",
          "MOQ by product, packaging format and artwork variation",
          "Quality system, testing, traceability and target-market documents",
          "Tooling, sampling, production lead time, ownership and change control"
        ],
        "processTitle": "Assessment process",
        "process": [
          "Translate the concept into a comparable manufacturer brief",
          "Research and pre-screen relevant production capabilities",
          "Coordinate RFQ, samples and document questions where applicable",
          "Compare commercial feasibility, risks and next-stage requirements"
        ],
        "evidenceTitle": "Evidence and responsibility boundary",
        "evidence": "Packaging visuals, certificates and sample statements are not treated as final proof. Product, producer, formula, artwork, market claims and batch documents must be confirmed for the actual project before production or sale.",
        "serviceType": "Private-label manufacturer research and qualification",
        "ctaTitle": "Prepare a manufacturer brief",
        "ctaText": "Share the product concept, target market, expected volume, packaging format and required launch window.",
        "ctaLabel": "Request manufacturer research",
        "faq": [
          {
            "question": "Can CTSEG promise a specific MOQ?",
            "answer": "No. MOQ depends on the manufacturer, formulation, production line, packaging, artwork and order structure and must be confirmed in the RFQ."
          },
          {
            "question": "Is a sample enough to approve a manufacturer?",
            "answer": "No. A sample is one input. Company evidence, capacity, quality controls, documents, repeatability and commercial conditions should also be reviewed."
          },
          {
            "question": "Can packaging and labelling be included?",
            "answer": "Yes. Packaging format, artwork responsibilities, label information, language versions and target-market requirements can be included in the comparison scope."
          }
        ]
      },
      "tr": {
        "eyebrow": "Özel etiket · üretici araştırması",
        "title": "Özel etiket üretici araştırması ve yeterlilik değerlendirmesi",
        "description": "Ürün spesifikasyonu, MOQ, ambalaj, etiketleme, belgeler, kapasite ve hedef pazar gereksinimlerine göre yapılandırılmış üretici araştırması.",
        "answerTitle": "Özel etiket üreticisi nasıl değerlendirilir?",
        "directAnswer": "Özel etiket projesi yalnızca bir ürün teklifi olarak değil, eksiksiz bir işletme modeli olarak değerlendirilmelidir. CTSEG gereksinimi yapılandırır, uygun üreticileri araştırır ve ürün kabiliyeti, MOQ, ambalaj, artwork, kalite belgeleri, teslim süresi, ticari şartlar ve sorumlulukları karşılaştırdıktan sonra bir kısa liste önerir.",
        "audienceTitle": "Bu çözüm kimler içindir",
        "audience": "Yeni bir özel etiket hattı geliştiren markalar, distribütörler ve B2B alıcılar; sözleşmeli üreticiyi değiştiren veya bir ürün konseptinin ticari olarak uygulanabilir olup olmadığını test eden taraflar.",
        "criteriaTitle": "Temel değerlendirme kriterleri",
        "criteria": [
          "Ürün formülasyonu, spesifikasyonu ve izin verilen toleranslar",
          "Ürün, ambalaj formatı ve artwork varyasyonuna göre MOQ",
          "Kalite sistemi, testler, izlenebilirlik ve hedef-pazar belgeleri",
          "Kalıplama, numune alma, üretim teslim süresi, mülkiyet ve değişiklik kontrolü"
        ],
        "processTitle": "Değerlendirme süreci",
        "process": [
          "Konsepti karşılaştırılabilir bir üretici briefine çevirin",
          "İlgili üretim kapasitelerini araştırın ve ön eleme yapın",
          "Uygulanabilir olduğunda RFQ, numuneler ve belge sorularını koordine edin",
          "Ticari uygulanabilirliği, riskleri ve sonraki aşama gereksinimlerini karşılaştırın"
        ],
        "evidenceTitle": "Kanıtlar ve sorumluluk sınırı",
        "evidence": "Ambalaj görselleri, sertifikalar ve numune beyanları nihai kanıt olarak değerlendirilmez. Ürün, üretici, formül, artwork, pazar iddiaları ve parti belgeleri gerçek proje için üretim veya satış öncesi doğrulanmalıdır.",
        "serviceType": "Özel etiket üretici araştırması ve yeterlilik değerlendirmesi",
        "ctaTitle": "Bir üretici brief’i hazırlayın",
        "ctaText": "Ürün konseptini, hedef pazarı, beklenen hacmi, ambalaj formatını ve istenen lansman zamanını paylaşın.",
        "ctaLabel": "Üretici araştırması isteyin",
        "faq": [
          {
            "question": "CTSEG belirli bir MOQ taahhüt edebilir mi?",
            "answer": "Hayır. MOQ üreticiye, formülasyona, üretim hattına, ambalaja, artwork’e ve sipariş yapısına bağlıdır ve RFQ'da doğrulanmalıdır."
          },
          {
            "question": "Bir üreticiyi onaylamak için numune yeterli midir?",
            "answer": "Hayır. Numune bir girdidir. Şirket kanıtı, kapasite, kalite kontrolleri, belgeler, tekrarlanabilirlik ve ticari koşullar da incelenmelidir."
          },
          {
            "question": "Ambalaj ve etiketleme dahil edilebilir mi?",
            "answer": "Evet. Ambalaj formatı, artwork sorumlulukları, etiket bilgileri, dil versiyonları ve hedef pazar gereksinimleri karşılaştırma kapsamına dahil edilebilir."
          }
        ]
      },
      "de": {
        "eyebrow": "Private Label · Herstellerrecherche",
        "title": "Herstellerrecherche und Qualifikation für Private Label",
        "description": "Herstellerrecherche, strukturiert nach Produktspezifikation, MOQ, Verpackung, Kennzeichnung, Dokumentenlage, Kapazität und Zielmarktanforderungen.",
        "answerTitle": "Wie bewertet man einen Private-Label-Hersteller?",
        "directAnswer": "Ein Private-Label-Projekt sollte als vollständiges Betriebsmodell bewertet werden, nicht nur als Produktangebot. CTSEG strukturiert die Anforderung, recherchiert geeignete Hersteller und vergleicht Produktfähigkeit, MOQ, Verpackung, Artwork, Qualitätsdokumente, Lieferzeit, kommerzielle Bedingungen und Verantwortlichkeiten, bevor eine Shortlist vorgeschlagen wird.",
        "audienceTitle": "Für wen diese Lösung gedacht ist",
        "audience": "Marken, Händler und B2B-Einkäufer, die eine neue Private-Label-Linie entwickeln, einen Lohnhersteller wechseln oder prüfen, ob ein Produktkonzept kommerziell realisierbar ist.",
        "criteriaTitle": "Kernkriterien der Bewertung",
        "criteria": [
          "Produktformel, Spezifikation und zulässige Toleranzen",
          "MOQ nach Produkt, Verpackungsformat und Artwork-Varianten",
          "Qualitätssystem, Prüfungen, Rückverfolgbarkeit und Zielmarkt-Dokumente",
          "Werkzeuge, Musterserien, Produktionsvorlaufzeiten, Eigentum und Änderungssteuerung"
        ],
        "processTitle": "Bewertungsprozess",
        "process": [
          "Konzept in ein vergleichbares Herstellerbriefing übersetzen",
          "Relevante Produktionskapazitäten recherchieren und vorsortieren",
          "RFQ, Muster und Dokumentenfragen koordinieren, wo anwendbar",
          "Kommerzielle Machbarkeit, Risiken und Anforderungen für die nächste Phase vergleichen"
        ],
        "evidenceTitle": "Belege und Verantwortungsgrenze",
        "evidence": "Verpackungsvisuals, Zertifikate und Musterangaben gelten nicht als abschließender Nachweis. Produkt, Produzent, Rezeptur, Artwork, Marktangaben und Chargendokumente müssen für das konkrete Projekt vor Produktion oder Verkauf bestätigt werden.",
        "serviceType": "Herstellerrecherche und Qualifikation für Private Label",
        "ctaTitle": "Erstellen Sie ein Herstellerbriefing",
        "ctaText": "Teilen Sie Konzept, Zielmarkt, erwartetes Volumen, Verpackungsformat und gewünschten Launch-Zeitraum mit.",
        "ctaLabel": "Herstellerrecherche anfragen",
        "faq": [
          {
            "question": "Kann CTSEG ein spezifisches MOQ zusagen?",
            "answer": "Nein. Das MOQ hängt vom Hersteller, der Formulierung, der Produktionslinie, der Verpackung, dem Artwork und der Bestellstruktur ab und muss im RFQ bestätigt werden."
          },
          {
            "question": "Reicht eine Probe, um einen Hersteller freizugeben?",
            "answer": "Nein. Eine Probe ist ein Input. Unternehmensnachweise, Kapazität, Qualitätskontrollen, Dokumente, Reproduzierbarkeit und kommerzielle Bedingungen sollten ebenfalls geprüft werden."
          },
          {
            "question": "Können Verpackung und Kennzeichnung einbezogen werden?",
            "answer": "Ja. Verpackungsformat, Artwork-Verantwortlichkeiten, Etikettenangaben, Sprachversionen und Zielmarktanforderungen können in den Vergleich aufgenommen werden."
          }
        ]
      },
      "it": {
        "eyebrow": "Private label · ricerca produttore",
        "title": "Ricerca e qualificazione del produttore per private label",
        "description": "Ricerca di produttori strutturata su specifica prodotto, MOQ, imballaggio, etichettatura, documenti, capacità e requisiti del mercato target.",
        "answerTitle": "Come si valuta un produttore per private label?",
        "directAnswer": "Un progetto private label va valutato come un modello operativo completo, non solo come un preventivo di prodotto. CTSEG struttura il requisito, ricerca produttori idonei e confronta capacità di prodotto, MOQ, imballaggio, artwork, documenti di qualità, tempi di consegna, termini commerciali e responsabilità prima di proporre una shortlist.",
        "audienceTitle": "A chi è rivolta questa soluzione",
        "audience": "Brand, distributori e acquirenti B2B che sviluppano una nuova linea private label, cambiano un produttore a contratto o valutano la fattibilità commerciale di un concept di prodotto.",
        "criteriaTitle": "Criteri principali di valutazione",
        "criteria": [
          "Formula prodotto, specifica e tolleranze ammesse",
          "MOQ per prodotto, formato di imballaggio e variazioni artwork",
          "Sistema qualità, test, tracciabilità e documenti per il mercato target",
          "Stampi, campionatura, tempi di produzione, proprietà e controllo delle modifiche"
        ],
        "processTitle": "Processo di valutazione",
        "process": [
          "Trasformare il concept in un brief comparabile per il produttore",
          "Ricercare e preselezionare capacità produttive rilevanti",
          "Coordinare RFQ, campioni e richieste documentali dove applicabile",
          "Confrontare fattibilità commerciale, rischi e requisiti per la fase successiva"
        ],
        "evidenceTitle": "Evidenze e limiti di responsabilità",
        "evidence": "Visual packaging, certificati e dichiarazioni sui campioni non sono considerati prova definitiva. Prodotto, produttore, formula, artwork, dichiarazioni di mercato e documenti di lotto devono essere confermati per il progetto reale prima della produzione o vendita.",
        "serviceType": "Ricerca e qualificazione produttore private label",
        "ctaTitle": "Preparate un brief per il produttore",
        "ctaText": "Condividete concept di prodotto, mercato target, volume previsto, formato di imballaggio e finestra di lancio desiderata.",
        "ctaLabel": "Richiedi ricerca produttore",
        "faq": [
          {
            "question": "CTSEG può garantire un MOQ specifico?",
            "answer": "No. Il MOQ dipende dal produttore, dalla formulazione, dalla linea produttiva, dall’imballaggio, dall’artwork e dalla struttura dell’ordine e deve essere confermato nell’RFQ."
          },
          {
            "question": "Un campione è sufficiente per approvare un produttore?",
            "answer": "No. Un campione è un input. Vanno valutate anche evidenze aziendali, capacità, controlli qualità, documentazione, ripetibilità e condizioni commerciali."
          },
          {
            "question": "Si possono includere imballaggio ed etichettatura?",
            "answer": "Sì. Formato di imballaggio, responsabilità artwork, informazioni sull’etichetta, versioni linguistiche e requisiti del mercato target possono essere inclusi nell’ambito di confronto."
          }
        ]
      },
      "ru": {
        "eyebrow": "Private label · исследование производителя",
        "title": "Исследование и квалификация производителя для собственной торговой марки (СТМ)",
        "description": "Исследование производителей, структурированное по спецификации продукта, MOQ, упаковке, маркировке, документам, мощности и требованиям целевого рынка.",
        "answerTitle": "Как оценить производителя собственной торговой марки?",
        "directAnswer": "Проект собственной торговой марки следует оценивать как полную операционную модель, а не только как ценовое предложение по продукту. CTSEG формирует требования, анализирует подходящих производителей и сравнивает производственные возможности, MOQ, упаковку, дизайн и оформление, документацию по качеству, сроки и коммерческие условия, прежде чем предложить финальный перечень.",
        "audienceTitle": "Для кого это решение",
        "audience": "Бренды, дистрибьюторы и B2B‑покупатели, которые разрабатывают новую линейку собственной торговой марки (СТМ), меняют контрактного производителя или проверяют коммерческую осуществимость продуктовой концепции.",
        "criteriaTitle": "Ключевые критерии оценки",
        "criteria": [
          "Формула продукта, спецификация и допустимые допуски",
          "MOQ по продукту, формату упаковки и вариантам artwork",
          "Система качества, тестирование, прослеживаемость и документы для целевого рынка",
          "Оборудование, отбор образцов, время производства, право собственности и контроль изменений"
        ],
        "processTitle": "Процесс оценки",
        "process": [
          "Перевести концепт в сопоставимое техническое задание для производителя",
          "Исследовать и предварительно отобрать релевантные производственные мощности",
          "Координировать RFQ, образцы и вопросы по документам, где применимо",
          "Сравнить коммерческую реализуемость, риски и требования для следующего этапа"
        ],
        "evidenceTitle": "Доказательства и границы ответственности",
        "evidence": "Визуалы упаковки, сертификаты и заявления по образцам не считаются окончательным подтверждением. Продукт, производитель, формула, artwork, рыночные утверждения и партийные документы должны быть подтверждены для конкретного проекта перед производством или продажей.",
        "serviceType": "Исследование и квалификация производителя для собственной торговой марки (СТМ)",
        "ctaTitle": "Подготовьте бриф для производителя",
        "ctaText": "Поделитесь концептом продукта, целевым рынком, ожидаемым объёмом, форматом упаковки и бажаними сроками запуска.",
        "ctaLabel": "Запросить исследование производителя",
        "faq": [
          {
            "question": "Может ли CTSEG гарантировать конкретный MOQ?",
            "answer": "Нет. MOQ зависит от производителя, формулы, производственной линии, упаковки, artwork и структуры заказа и должен быть подтверждён в RFQ."
          },
          {
            "question": "Достаточно ли образца для утверждения производителя?",
            "answer": "Нет. Образец — это один из входных данных. Следует также проверить данные о компании, мощностях, системах качества, документации, воспроизводимости и коммерческих условиях."
          },
          {
            "question": "Можно ли включить упаковку и маркировку?",
            "answer": "Да. Формат упаковки, ответственность за artwork, информация на этикетке, языковые версии и требования целевого рынка можно включить в область сравнения."
          }
        ]
      },
      "fa": {
        "eyebrow": "برند خصوصی · پژوهش تولیدکننده",
        "title": "پژوهش و صلاحیت‌سنجی تولیدکننده برای برند خصوصی",
        "description": "پژوهش تولیدکننده که حول مشخصات محصول، MOQ، بسته‌بندی، برچسب‌گذاری، مدارک، ظرفیت و نیازهای بازار هدف ساختاربندی شده است.",
        "answerTitle": "چگونه یک تولیدکننده برند خصوصی را ارزیابی می‌کنید؟",
        "directAnswer": "پروژهٔ برند خصوصی باید به‌عنوان یک مدل عملیاتی کامل ارزیابی شود، نه صرفاً یک پیشنهاد قیمتی محصول. CTSEG نیازمندی را ساختاربندی می‌کند، تولیدکنندگان مناسب را تحقیق می‌کند و توانایی محصول، MOQ، بسته‌بندی، artwork، مدارک کیفیت، زمان تولید، شرایط تجاری و مسئولیت‌ها را مقایسه می‌نماید و سپس فهرست کوتاهی پیشنهاد می‌کند.",
        "audienceTitle": "این راهکار مناسب چه کسانی است",
        "audience": "برندها، توزیع‌کنندگان و خریداران B2B که یک خط برند خصوصی جدید توسعه می‌دهند، تولیدکننده قراردادی را تغییر می‌دهند یا بررسی می‌کنند که آیا یک مفهوم محصول از نظر تجاری قابل اجراست یا نه.",
        "criteriaTitle": "معیارهای اصلی ارزیابی",
        "criteria": [
          "فرمول محصول، مشخصات و تلرانس‌های مجاز",
          "MOQ بر پایه محصول، قالب بسته‌بندی و تغییرات artwork",
          "سیستم کیفیت، تست‌ها، ردیابی و مدارک بازار هدف",
          "ابزارسازی، نمونه‌گیری، زمان تولید، مالکیت و کنترل تغییرات"
        ],
        "processTitle": "فرآیند ارزیابی",
        "process": [
          "تبدیل مفهوم به یک brief سازگار برای تولیدکننده",
          "تحقیق و پیش‌غربال ظرفیت‌های تولید مرتبط",
          "هماهنگی RFQ، نمونه‌ها و سوالات مدارکی در صورت نیاز",
          "مقایسهٔ امکان‌سنجی تجاری، ریسک‌ها و نیازهای مرحلهٔ بعدی"
        ],
        "evidenceTitle": "شواهد و مرز مسئولیت",
        "evidence": "تصاویر بسته‌بندی، گواهی‌ها و بیانیه‌های نمونه به‌عنوان مدرک نهایی تلقی نمی‌شوند. محصول، تولیدکننده، فرمول، artwork، ادعاهای بازاری و مدارک بچ باید برای پروژهٔ واقعی قبل از تولید یا فروش تأیید شوند.",
        "serviceType": "پژوهش و صلاحیت‌سنجی تولیدکننده برند خصوصی",
        "ctaTitle": "یک brief تولیدکننده آماده کنید",
        "ctaText": "مفهوم محصول، بازار هدف، حجم مورد انتظار، قالب بسته‌بندی و بازهٔ راه‌اندازی موردنظر را ارسال کنید.",
        "ctaLabel": "درخواست پژوهش تولیدکننده",
        "faq": [
          {
            "question": "آیا CTSEG می‌تواند MOQ مشخصی را تضمین کند؟",
            "answer": "خیر. MOQ به تولیدکننده، فرمول، خط تولید، بسته‌بندی، artwork و ساختار سفارش بستگی دارد و باید در RFQ تأیید شود."
          },
          {
            "question": "آیا یک نمونه برای تأیید تولیدکننده کافی است؟",
            "answer": "خیر. نمونه یکی از ورودی‌هاست. باید شواهد شرکتی، ظرفیت، کنترل‌های کیفیت، مدارک، قابلیت تکرار و شرایط تجاری نیز بررسی شوند."
          },
          {
            "question": "آیا بسته‌بندی و برچسب‌گذاری قابل گنجاندن هستند؟",
            "answer": "بله. قالب بسته‌بندی، مسئولیت‌های artwork، اطلاعات برچسب، نسخه‌های زبانی و نیازهای بازار هدف می‌توانند در دامنه مقایسه گنجانده شوند."
          }
        ]
      },
      "zh": {
        "eyebrow": "OEM / 贴牌定制 · 实体代工厂尽调",
        "title": "自有品牌 (Private Label) 与 OEM 代工生产商寻源及核验",
        "description": "面向定制配方、专属包装及自有品牌分装需求，系统化发掘并严密核验具备真实代工实力的生产厂家。",
        "answerTitle": "如何甄选并核验一家靠谱的自有品牌 (Private Label) 代工厂？",
        "directAnswer": "CTSEG 首先梳理您的产品定制配方要求、外包装形态、最低起订量 (MOQ) 容忍度与目标上市时间。随后全面筛查具备合规代工资质的源头工厂，实地核查其专属模具开发能力、印刷包装配套、自动化产线洁净等级、配方保密机制及批次留样管理体系，输出具备落地执行力的比价与验厂建议。",
        "audienceTitle": "本专项解决方案适用对象",
        "audience": "计划打造自主品牌、拓展特色产品线、寻找高性价比海外 OEM/ODM 代工基地，或需要摆脱贴牌中介直连源头实力工厂的品牌商、大型连锁商超及跨境电商企业。",
        "criteriaTitle": "代工厂核心考量指标",
        "criteria": [
                "OEM/ODM 生产线自动化程度与专属打样开模周期",
                "配方工艺保密协议 (NDA) 机制与知识产权合规",
                "定制包材配合度、外箱印刷标准与起订梯度 (MOQ)",
                "各批次出品一致性检验、留样复检与质保条款"
        ],
        "processTitle": "代工厂评估实施步骤",
        "process": [
                "明确定制技术规格、包装设计参数与目标单价区间",
                "筛选具备同类成熟出口经验的专业代工制造企业",
                "核查打样能力、原料溯源凭单及代工合规资质",
                "交付综合评估矩阵并协助推进产线试产与封样"
        ],
        "evidenceTitle": "证据依据与职责边界说明",
        "evidence": "代工生产涉及专有模具、定制包材与长周期排产，所有原料批次质检证书 (COA)、打样实物确认单及质量公差容限均须在正式量产合同签署前完成法律与技术双重确认。",
        "serviceType": "自有品牌与 OEM 代工厂寻源核验服务",
        "ctaTitle": "开启您的自有品牌代工项目评估",
        "ctaText": "请提供产品类别、定制配方或包装要求、首期采购计划量及目标销售市场，我们的专业团队将为您快速梳理可行的代工落地路径。",
        "ctaLabel": "申请代工厂评估",
        "faq": [
                {
                        "question": "OEM 代工厂的最低起订量 (MOQ) 通常如何界定？",
                        "answer": "代工厂的 MOQ 主要受定制原料批次投入量、包材制版印刷起印量以及自动化产线换线清洗成本决定。CTSEG 协助您测算不同起订量下的 TCO 综合成本。"
                },
                {
                        "question": "如何确保代工厂严格执行定制配方保密？",
                        "answer": "我们建议并在前期协助建立具备法律约束力的保密协议 (NDA)，并严格核查工厂对于客户专有配方、模具资产的物理隔离与知识产权管理制度。"
                },
                {
                        "question": "是否支持在量产前进行产线试机与小批量试产？",
                        "answer": "支持。在正式签署大批量订单前，协调实验室样品打样及工业级产线小批量试机验证是降低量产风险的关键步骤。"
                }
        ]
},
      "vi": {
        "eyebrow": "Nhãn hàng riêng · Sản xuất OEM",
        "title": "Tìm kiếm và thẩm định nhà sản xuất gia công & nhãn hàng riêng (Private Label)",
        "description": "Nghiên cứu và thẩm định có cấu trúc các nhà sản xuất có năng lực gia công OEM/Private Label theo công thức và bao bì tùy chỉnh.",
        "answerTitle": "Làm thế nào để tìm và đánh giá nhà máy gia công nhãn hàng riêng uy tín?",
        "directAnswer": "CTSEG trước hết làm rõ công thức tùy chỉnh, quy cách đóng gói, mức dung sai MOQ và tiến độ ra mắt thị trường. Chúng tôi sau đó sàng lọc các nhà máy có năng lực gia công thực tế, kiểm tra khả năng phát triển khuôn mẫu, in ấn bao bì, tiêu chuẩn phòng sạch, bảo mật công thức và quy trình lưu mẫu đối chứng.",
        "audienceTitle": "Giải pháp này dành cho ai",
        "audience": "Chủ sở hữu thương hiệu, chuỗi bán lẻ hoặc nhà phân phối muốn mở rộng dòng sản phẩm nhãn riêng hoặc tìm kiếm cơ sở gia công đáng tin cậy.",
        "criteriaTitle": "Tiêu chí đánh giá nhà máy gia công",
        "criteria": [
                "Năng lực sản xuất OEM/ODM thực tế và thiết bị đóng gói",
                "Quy trình bảo mật công thức và tài sản trí tuệ (NDA)",
                "Khả năng đáp ứng bao bì, nhãn mác và linh hoạt MOQ",
                "Kiểm soát chất lượng đồng đều giữa các lô và chứng nhận"
        ],
        "processTitle": "Quy trình đánh giá",
        "process": [
                "Làm rõ thông số kỹ thuật, bao bì và dung sai chấp nhận",
                "Sàng lọc các nhà sản xuất có kinh nghiệm gia công phù hợp",
                "Đánh giá năng lực mẫu thử, nguyên liệu và hồ sơ pháp lý",
                "Cung cấp ma trận so sánh và hỗ trợ các bước thử nghiệm"
        ],
        "evidenceTitle": "Bằng chứng và ranh giới trách nhiệm",
        "evidence": "Hợp đồng gia công đòi hỏi làm rõ thông số kỹ thuật chi tiết, quyền sở hữu nhãn hiệu và quy chuẩn bao bì trước khi tiến hành sản xuất hàng loạt.",
        "serviceType": "Dịch vụ tìm kiếm nhà sản xuất nhãn hàng riêng",
        "ctaTitle": "Bắt đầu dự án nhãn hàng riêng của bạn",
        "ctaText": "Gửi thông tin sản phẩm, yêu cầu công thức/bao bì, sản lượng dự kiến và thị trường mục tiêu để nhận tư vấn khả thi.",
        "ctaLabel": "Đánh giá khả năng gia công",
        "faq": [
                {
                        "question": "MOQ cho đơn hàng Private Label được xác định thế nào?",
                        "answer": "MOQ phụ thuộc vào mẻ sản xuất tối thiểu của nguyên liệu, số lượng in bao bì tối thiểu và chi phí chuyển đổi dây chuyền của nhà máy."
                },
                {
                        "question": "Làm thế nào để bảo vệ công thức độc quyền?",
                        "answer": "Cần ký kết thỏa thuận bảo mật (NDA) và hợp đồng gia công chặt chẽ quy định rõ quyền sở hữu trí tuệ trước khi chia sẻ dữ liệu kỹ thuật."
                },
                {
                        "question": "Có thể làm mẫu thử trước khi ký hợp đồng chính thức không?",
                        "answer": "Có. Giai đoạn thử nghiệm mẫu trong phòng lab và chạy thử pilot trên dây chuyền là bước bắt buộc để đảm bảo chất lượng."
                }
        ]
}
    },
    "paths": {
      "tr": "/tr/cozumler/ozel-markali-uretici-arastirmasi/",
      "en": "/en/solutions/private-label-manufacturer-research/",
      "de": "/de/loesungen/private-label-herstellerrecherche/",
      "it": "/it/soluzioni/ricerca-produttore-marchio-privato/",
      "ru": "/ru/resheniya/poisk-proizvoditelya-chastnoy-marki/",
      "fa": "/fa/solutions/private-label-manufacturer-research/",
      "zh": "/zh/solutions/private-label-contract-manufacturer-sourcing/",
      "vi": "/vi/solutions/private-label-contract-manufacturer-sourcing/"
    }
  },
  "rfq-bid-comparison": {
    "content": {
      "en": {
        "eyebrow": "RFQ · comparable offers",
        "title": "International RFQ preparation and bid comparison",
        "description": "A controlled RFQ structure that makes supplier offers comparable across specification, quality, MOQ, delivery, payment, documents and total cost.",
        "answerTitle": "How do you make international supplier quotations comparable?",
        "directAnswer": "Comparable bids require one agreed requirement and one response structure. CTSEG defines the technical and commercial fields, prepares the RFQ, records clarifications and normalises offers across price basis, MOQ, Incoterms, lead time, payment, quality documents, logistics and open risk before presenting a decision view.",
        "audienceTitle": "Who this solution is for",
        "audience": "Procurement, operations and management teams that receive incomplete or differently structured quotations and need a transparent basis for negotiation and selection.",
        "criteriaTitle": "Core comparison criteria",
        "criteria": [
          "Technical specification, included scope and exclusions",
          "Unit basis, currency, MOQ, price breaks and payment terms",
          "Incoterms, logistics assumptions, lead time and validity",
          "Quality documents, samples, warranties, exceptions and total-cost drivers"
        ],
        "processTitle": "Assessment process",
        "process": [
          "Confirm requirement, decision criteria and bidder instructions",
          "Issue the RFQ and control supplier clarifications",
          "Normalise commercial and technical responses",
          "Report comparison, exceptions, risks and negotiation priorities"
        ],
        "evidenceTitle": "Evidence and responsibility boundary",
        "evidence": "A comparison is only as reliable as the requirement and evidence supplied. Unconfirmed assumptions, conditional prices and missing documents are kept visible rather than converted into false certainty.",
        "serviceType": "International RFQ preparation and bid comparison",
        "ctaTitle": "Make your offers comparable",
        "ctaText": "Share the requirement, current quotations or bidder list and the decision deadline for an initial scope review.",
        "ctaLabel": "Request RFQ assessment",
        "faq": [
          {
            "question": "Is the lowest unit price always the best bid?",
            "answer": "No. Freight, defects, delay, payment, inventory, compliance and supply-continuity risk can materially change the commercial result."
          },
          {
            "question": "Can existing quotations be normalised?",
            "answer": "Yes, if the underlying assumptions can be identified. Missing or conditional fields are flagged and clarification questions are prepared."
          },
          {
            "question": "Does CTSEG make the final supplier decision?",
            "answer": "CTSEG structures evidence and comparison. The buyer retains the final decision, approval and contractual responsibility."
          }
        ]
      },
      "tr": {
        "eyebrow": "RFQ · karşılaştırılabilir teklifler",
        "title": "Uluslararası RFQ hazırlığı ve teklif karşılaştırması",
        "description": "Teknik, kalite, MOQ, teslimat, ödeme, belgeler ve toplam maliyet açısından tedarikçi tekliflerini karşılaştırılabilir kılan kontrollü RFQ yapısı.",
        "answerTitle": "Uluslararası tedarikçi tekliflerini nasıl karşılaştırılabilir hale getirirsiniz?",
        "directAnswer": "Karşılaştırılabilir teklifler için tek bir üzerinde anlaşılmış gereksinim ve tek bir cevap yapısı gerekir. CTSEG teknik ve ticari alanları tanımlar, RFQ'yi hazırlar, açıklamaları kaydeder ve fiyat bazı, MOQ, Incoterms, teslim süresi, ödeme, kalite belgeleri, lojistik ve açık riskler açısından teklifleri normalleştirir; ardından karar görüşünü sunar.",
        "audienceTitle": "Bu çözüm kimler içindir",
        "audience": "Eksik veya farklı yapıda teklifler alan ve müzakere ile seçim için şeffaf bir dayanak arayan tedarik, operasyon ve yönetim ekipleri.",
        "criteriaTitle": "Temel karşılaştırma kriterleri",
        "criteria": [
          "Teknik spesifikasyon, dahil olan kapsam ve dışlamalar",
          "Birim esas, para birimi, MOQ, fiyat kademeleri ve ödeme koşulları",
          "Incoterms, lojistik varsayımları, teslim süresi ve geçerlilik",
          "Kalite belgeleri, numuneler, garantiler, istisnalar ve toplam maliyete etki eden unsurlar"
        ],
        "processTitle": "Değerlendirme süreci",
        "process": [
          "Gereksinimi, karar kriterlerini ve teklifçi talimatlarını doğrulayın",
          "RFQ'yi yayınlayın ve tedarikçi açıklamalarını yönetin",
          "Ticari ve teknik yanıtları normalleştirin",
          "Karşılaştırma, istisnalar, riskler ve müzakere önceliklerini raporlayın"
        ],
        "evidenceTitle": "Kanıtlar ve sorumluluk sınırı",
        "evidence": "Bir karşılaştırma, gereksinim ve sağlanan kanıt kadar güvenilirdir. Doğrulanmamış varsayımlar, koşullu fiyatlar ve eksik belgeler sahte kesinliğe dönüştürülmek yerine görünür tutulur.",
        "serviceType": "Uluslararası RFQ hazırlığı ve teklif karşılaştırması",
        "ctaTitle": "Tekliflerinizi karşılaştırılabilir hale getirin",
        "ctaText": "İlk kapsam incelemesi için gereksinimi, mevcut teklifleri veya teklifçi listesini ve karar tarihini paylaşın.",
        "ctaLabel": "RFQ değerlendirmesi isteyin",
        "faq": [
          {
            "question": "Her zaman en düşük birim fiyat en iyi teklif midir?",
            "answer": "Hayır. Navlun, kusurlar, gecikme, ödeme, stok, uyum ve tedarik devamlılığı riski ticari sonucu önemli ölçüde değiştirebilir."
          },
          {
            "question": "Mevcut teklifler normalleştirilebilir mi?",
            "answer": "Evet, temel varsayımlar tespit edilebilirse. Eksik veya koşullu alanlar işaretlenir ve açıklama soruları hazırlanır."
          },
          {
            "question": "CTSEG nihai tedarikçi kararını veriyor mu?",
            "answer": "Hayır. CTSEG kanıtları ve karşılaştırmayı yapılandırır. Nihai karar, onay ve sözleşme sorumluluğu alıcıya aittir."
          }
        ]
      },
      "de": {
        "eyebrow": "RFQ · vergleichbare Angebote",
        "title": "Internationale RFQ-Vorbereitung und Angebotsvergleich",
        "description": "Eine kontrollierte RFQ-Struktur, die Lieferantenangebote in Spezifikation, Qualität, MOQ, Lieferung, Zahlung, Dokumentenstand und Total Cost vergleichbar macht.",
        "answerTitle": "Wie machen Sie internationale Lieferantenangebote vergleichbar?",
        "directAnswer": "Vergleichbare Angebote erfordern eine vereinbarte Anforderung und eine einheitliche Antwortstruktur. CTSEG definiert die technischen und kommerziellen Felder, bereitet die RFQ vor, protokolliert Klarstellungen und normalisiert Angebote über Preisbasis, MOQ, Incoterms, Lieferzeit, Zahlung, Qualitätsdokumente, Logistik und offene Risiken, bevor eine Entscheidungsübersicht präsentiert wird.",
        "audienceTitle": "Für wen diese Lösung gedacht ist",
        "audience": "Beschaffungs-, Betriebs- und Managementteams, die unvollständige oder unterschiedlich strukturierte Angebote erhalten und eine transparente Basis für Verhandlung und Auswahl benötigen.",
        "criteriaTitle": "Kernvergleichskriterien",
        "criteria": [
          "Technische Spezifikation, eingeschlossener Umfang und Ausschlüsse",
          "Einheitenbasis, Währung, MOQ, Preisstaffeln und Zahlungsbedingungen",
          "Incoterms, logistische Annahmen, Lieferzeit und Gültigkeit",
          "Qualitätsdokumente, Muster, Garantien, Ausnahmen und Total-Cost-Treiber"
        ],
        "processTitle": "Bewertungsprozess",
        "process": [
          "Anforderung, Entscheidungskriterien und Bieterinstruktionen bestätigen",
          "RFQ ausgeben und Lieferantenklärungen steuern",
          "Kommerzielle und technische Antworten normalisieren",
          "Vergleich, Ausnahmen, Risiken und Verhandlungsprioritäten berichten"
        ],
        "evidenceTitle": "Belege und Verantwortungsgrenze",
        "evidence": "Ein Vergleich ist nur so zuverlässig wie die Anforderung und die gelieferten Belege. Unbestätigte Annahmen, Konditionalpreise und fehlende Dokumente werden sichtbar gehalten, statt in falsche Sicherheit umgewandelt zu werden.",
        "serviceType": "Internationale RFQ-Vorbereitung und Angebotsvergleich",
        "ctaTitle": "Machen Sie Ihre Angebote vergleichbar",
        "ctaText": "Teilen Sie die Anforderung, aktuelle Angebote oder die Bieterliste und die Entscheidungsfrist für eine erste Scope-Überprüfung.",
        "ctaLabel": "RFQ-Bewertung anfordern",
        "faq": [
          {
            "question": "Ist der niedrigste Stückpreis immer das beste Angebot?",
            "answer": "Nein. Fracht, Mängel, Verzögerungen, Zahlung, Inventar, Compliance und Versorgungskontinuität können das kommerzielle Ergebnis deutlich verändern."
          },
          {
            "question": "Können bestehende Angebote normalisiert werden?",
            "answer": "Ja, wenn die zugrundeliegenden Annahmen identifiziert werden können. Fehlende oder bedingte Felder werden gekennzeichnet und Klärungsfragen vorbereitet."
          },
          {
            "question": "Trifft CTSEG die finale Lieferantenentscheidung?",
            "answer": "CTSEG strukturiert Belege und Vergleich. Die finale Entscheidung, Freigabe und vertragliche Verantwortung verbleiben beim Käufer."
          }
        ]
      },
      "it": {
        "eyebrow": "RFQ · offerte comparabili",
        "title": "Preparazione internazionale RFQ e confronto offerte",
        "description": "Una struttura RFQ controllata che rende le offerte dei fornitori comparabili su specifica, qualità, MOQ, consegna, pagamento, documenti e costo totale.",
        "answerTitle": "Come rendere comparabili le quotazioni internazionali dei fornitori?",
        "directAnswer": "Offerte comparabili richiedono un requisito concordato e un’unica struttura di risposta. CTSEG definisce i campi tecnici e commerciali, prepara la RFQ, registra chiarimenti e normalizza le offerte su base di prezzo, MOQ, Incoterms, tempi di consegna, pagamento, documenti di qualità, logistica e rischi aperti prima di presentare un quadro decisionale.",
        "audienceTitle": "A chi è rivolta questa soluzione",
        "audience": "Team di procurement, operations e management che ricevono quotazioni incomplete o strutturate diversamente e necessitano di una base trasparente per negoziazione e selezione.",
        "criteriaTitle": "Criteri principali di confronto",
        "criteria": [
          "Specificazione tecnica, ambito incluso ed esclusioni",
          "Base per unità, valuta, MOQ, scaglioni di prezzo e condizioni di pagamento",
          "Incoterms, ipotesi logistiche, tempi di consegna e validità",
          "Documenti di qualità, campioni, garanzie, eccezioni e driver di costo totale"
        ],
        "processTitle": "Processo di valutazione",
        "process": [
          "Confermare requisito, criteri decisionali e istruzioni per i bidder",
          "Emettere la RFQ e gestire i chiarimenti dei fornitori",
          "Normalizzare risposte commerciali e tecniche",
          "Riportare confronto, eccezioni, rischi e priorità di negoziazione"
        ],
        "evidenceTitle": "Evidenze e limiti di responsabilità",
        "evidence": "Un confronto è affidabile solo quanto il requisito e le evidenze fornite. Assunzioni non confermate, prezzi condizionali e documenti mancanti sono mantenuti visibili invece di trasformarsi in falsa certezza.",
        "serviceType": "Preparazione RFQ internazionale e confronto offerte",
        "ctaTitle": "Rendete comparabili le vostre offerte",
        "ctaText": "Condividete il requisito, le quotazioni correnti o la lista dei bidder e la scadenza decisionale per una prima revisione dell’ambito.",
        "ctaLabel": "Richiedi valutazione RFQ",
        "faq": [
          {
            "question": "Il prezzo unitario più basso è sempre la migliore offerta?",
            "answer": "No. Trasporto, difetti, ritardi, pagamento, inventario, conformità e rischio di continuità di fornitura possono modificare sensibilmente l'esito commerciale."
          },
          {
            "question": "È possibile normalizzare quotazioni esistenti?",
            "answer": "Sì, se è possibile identificare le assunzioni di base. Campi mancanti o condizionali vengono segnalati e vengono preparate domande di chiarimento."
          },
          {
            "question": "CTSEG prende la decisione finale sul fornitore?",
            "answer": "CTSEG struttura evidenze e confronto. La decisione finale, l'approvazione e la responsabilità contrattuale restano in capo all'acquirente."
          }
        ]
      },
      "ru": {
        "eyebrow": "RFQ · сопоставимые предложения",
        "title": "Подготовка международного RFQ и сравнение заявок",
        "description": "Контролируемая структура RFQ, которая делает предложения поставщиков сопоставимыми по спецификации, качеству, MOQ, доставке, оплате, документам и полной стоимости.",
        "answerTitle": "Как сделать международные коммерческие предложения сопоставимыми?",
        "directAnswer": "Сопоставимые заявки требуют единых согласованных требований и единой структуры ответа. CTSEG определяет технические и коммерческие поля, готовит RFQ, фиксирует уточнения и нормализует предложения по ценовой базе, MOQ, Incoterms, срокам, оплате, качественным документам, логистике и открытым рискам, прежде чем представить обзор для решения.",
        "audienceTitle": "Для кого это решение",
        "audience": "Команды закупок, операций и руководства, которые получают неполные или по-разному структурированные предложения и нуждаются в прозрачной базе для переговоров и выбора.",
        "criteriaTitle": "Ключевые критерии сравнения",
        "criteria": [
          "Техническая спецификация, включённый объём и исключения",
          "Единичная база, валюта, MOQ, ценовые уровни и условия оплаты",
          "Incoterms, логистические допущения, сроки и срок действия",
          "Качественные документы, образцы, гарантии, исключения и драйверы полной стоимости"
        ],
        "processTitle": "Процесс оценки",
        "process": [
          "Подтвердить требование, критерии решения и инструкции для претендентов",
          "Разослать RFQ и контролировать уточнения от поставщиков",
          "Нормализовать коммерческие и технические ответы",
          "Предоставить отчёт сравнения, исключений, рисков и приоритетов для переговоров"
        ],
        "evidenceTitle": "Доказательства и границы ответственности",
        "evidence": "Сравнение надёжно лишь настолько, насколько надёжны требование и предоставленные доказательства. Неподтверждённые допущения, условные цены и отсутствующие документы остаются видимыми, а не превращаются в ложную уверенность.",
        "serviceType": "Подготовка международного RFQ и сравнение заявок",
        "ctaTitle": "Сделайте свои предложения сопоставимыми",
        "ctaText": "Поделитесь требованием, текущими предложениями или списком претендентов и сроком принятия решения для первичного обзора объёма работ.",
        "ctaLabel": "Запросить оценку RFQ",
        "faq": [
          {
            "question": "Всегда ли самая низкая цена за единицу — лучший выбор?",
            "answer": "Нет. Фрахт, дефекты, задержки, оплата, запасы, соответствие требованиям и риск непрерывности поставок могут существенно изменить коммерческий результат."
          },
          {
            "question": "Можно ли нормализовать существующие предложения?",
            "answer": "Да, если можно идентифицировать базовые допущения. Отсутствующие или условные поля помечаются, и готовятся вопросы для уточнения."
          },
          {
            "question": "Принимает ли CTSEG окончательное решение по поставщику?",
            "answer": "CTSEG структурирует доказательства и сравнение. Окончательное решение, утверждение и договорная ответственность остаются за покупателем."
          }
        ]
      },
      "fa": {
        "eyebrow": "RFQ · پیشنهادات قابل مقایسه",
        "title": "تهیه بین‌المللی RFQ و مقایسه پیشنهادها",
        "description": "یک ساختار RFQ کنترل‌شده که پیشنهادهای تأمین‌کنندگان را از نظر مشخصات، کیفیت، MOQ، تحویل، پرداخت، مدارک و هزینه کل قابل مقایسه می‌کند.",
        "answerTitle": "چگونه پیشنهادهای بین‌المللی تأمین‌کنندگان را قابل مقایسه کنیم؟",
        "directAnswer": "پیشنهادهای قابل مقایسه نیاز به یک الزام مورد توافق و یک ساختار پاسخ واحد دارند. CTSEG فیلدهای فنی و تجاری را تعریف می‌کند، RFQ را آماده می‌سازد، توضیحات را ثبت می‌کند و پیشنهادها را از نظر پایه قیمت، MOQ، Incoterms، زمان تحویل، پرداخت، مدارک کیفیت، لجستیک و ریسک‌های باز نرمال‌سازی می‌کند و سپس دیدگاه تصمیم‌گیری را ارائه می‌دهد.",
        "audienceTitle": "این راهکار مناسب چه کسانی است",
        "audience": "تیم‌های خرید، عملیات و مدیریت که پیشنهادهای ناتمام یا ساختاربندی‌شده متفاوت دریافت می‌کنند و به مبنایی شفاف برای مذاکره و انتخاب نیاز دارند.",
        "criteriaTitle": "معیارهای اصلی مقایسه",
        "criteria": [
          "مشخصه فنی، دامنه شامل و موارد مستثنی",
          "پایه واحد، ارز، MOQ، پلکان‌های قیمت و شرایط پرداخت",
          "Incoterms، فروض لجستیکی، زمان تحویل و اعتبار",
          "مدارک کیفیت، نمونه‌ها، تضمین‌ها، استثناها و عوامل تعیین‌کننده هزینهٔ کل"
        ],
        "processTitle": "فرآیند ارزیابی",
        "process": [
          "نیازمندی، معیارهای تصمیم‌گیری و دستورالعمل‌های شرکت‌کنندگان را تأیید کنید",
          "RFQ را صادر و توضیحات تأمین‌کنندگان را کنترل کنید",
          "پاسخ‌های تجاری و فنی را نرمال‌سازی کنید",
          "مقایسه، استثناها، ریسک‌ها و اولویت‌های مذاکره را گزارش دهید"
        ],
        "evidenceTitle": "شواهد و مرز مسئولیت",
        "evidence": "یک مقایسه تنها به اندازهٔ نیازمندی و شواهد ارائه‌شده قابل اتکا است. فروض تأییدنشده، قیمت‌های مشروط و مدارک ناقص نمایان نگه داشته می‌شوند تا به اطمینان کاذب تبدیل نشوند.",
        "serviceType": "تهیه بین‌المللی RFQ و مقایسه پیشنهادها",
        "ctaTitle": "پیشنهادهای خود را قابل مقایسه کنید",
        "ctaText": "برای بررسی اولیه دامنه، نیازمندی، پیشنهادهای فعلی یا لیست شرکت‌کنندگان و مهلت تصمیم‌گیری را ارسال کنید.",
        "ctaLabel": "درخواست ارزیابی RFQ",
        "faq": [
          {
            "question": "آیا همیشه پایین‌ترین قیمت واحد بهترین پیشنهاد است؟",
            "answer": "خیر. حمل‌ونقل، معیوبی‌ها، تأخیر، پرداخت، موجودی، تطابق و ریسک تداوم عرضه می‌توانند نتیجهٔ تجاری را به‌طور چشمگیری تغییر دهند."
          },
          {
            "question": "آیا می‌توان پیشنهادهای موجود را نرمال‌سازی کرد؟",
            "answer": "بله، اگر فروض زیرین قابل شناسایی باشند. فیلدهای ناقص یا مشروط نشانه‌گذاری و سوالات شفاف‌سازی تهیه می‌شوند."
          },
          {
            "question": "آیا CTSEG تصمیم نهایی تأمین‌کننده را می‌گیرد؟",
            "answer": "خیر. CTSEG شواهد و مقایسه را ساختاربندی می‌کند. تصمیم نهایی، تصویب و مسئولیت قراردادی با خریدار است."
          }
        ]
      },
      "zh": {
        "eyebrow": "国际比价 · 商业谈判赋能",
        "title": "跨国采购标准 RFQ 编制与多源供应商横向比价矩阵",
        "description": "将不同工厂碎片化的非标报价转换为统一度量衡、同等交货条款与可比权重的专业评估矩阵，还原真实 TCO 综合拥有成本。",
        "answerTitle": "如何跨语言、跨币种公允对比多家跨国供应商的非标报价？",
        "directAnswer": "CTSEG 深度拆解各工厂报价中的隐形成本：剔除不具可比性的包装差异、将不同 Incoterms 条款（如 FOB vs CIF）折算至相同口岸基准、核算起订量差异带来的资金占用成本、分析付款结算账期及单证认证附加费。最终为您呈现一份指标透明、加权清晰的横向比价分析矩阵，支撑高层精准决策。",
        "audienceTitle": "本专项解决方案适用对象",
        "audience": "正在面对多家海外供应商混杂报价、无法准确核算到岸真实成本、怀疑现有供应商报价虚高，或需向投资人/采购委员会汇报比价依据的专业采购与供应链管理团队。",
        "criteriaTitle": "RFQ 核心比价维度",
        "criteria": [
                "基准产品技术公差、用料纯度与质检等级一致性",
                "Incoterms 交付条款、国际海运/陆运附加费与保险",
                "阶梯订购量 (MOQ) 单价与模具包材摊销成本",
                "结算货币汇率风险、信用证条款与延期付款成本"
        ],
        "processTitle": "标准 RFQ 编制与比价流程",
        "process": [
                "编制标准统一的结构化 RFQ 询价模板与参数表",
                "向多家具备资质的工厂定向发放并规范回填格式",
                "统一换算计量单位、交付条款与综合落地税费",
                "输出多维度加权比价报告及关键商业谈判筹码建议"
        ],
        "evidenceTitle": "数据来源与商业中立声明",
        "evidence": "比价矩阵完全基于工厂盖章生效的正式报价单 (Proforma Invoice / Quotation)、公布的国际海运运价指数及法定海关税则归类进行客观测算，保持严格的商业独立与中立性。",
        "serviceType": "国际商业 RFQ 编制与供应链比价服务",
        "ctaTitle": "提交您当前的 RFQ 或供应商报价明细",
        "ctaText": "发送您收到的工厂原始报价单或采购需求清单，我们将协助您梳理标准化比价模型并识别隐性成本漏洞。",
        "ctaLabel": "申请 RFQ 比价分析",
        "faq": [
                {
                        "question": "为什么看似单价最低的工厂最终总成本反而更高？",
                        "answer": "低单价往往隐藏了高额包装费、严苛的港口杂费、较差的装柜容积率、更高的报废率或苛刻的现金预付要求。TCO 模型能够彻底还原真实成本。"
                },
                {
                        "question": "CTSEG 是否直接参与最终采购合同的价格谈判？",
                        "answer": "我们提供客观翔实的数据矩阵、同行成本基准与谈判策略建议，由买卖双方在充分知情的基础上自主达成商业协议。"
                },
                {
                        "question": "比价周期通常需要多长时间？",
                        "answer": "在所有候选工厂按标准格式提交完整技术与商务数据后，通常在 2-4 个工作日内即可完成多维矩阵建模与分析报告。"
                }
        ]
},
      "vi": {
        "eyebrow": "So sánh báo giá · Phân tích RFQ",
        "title": "Lập RFQ quốc tế và ma trận so sánh báo giá nhà cung cấp",
        "description": "Chuyển đổi các báo giá phân mảnh thành ma trận so sánh chuẩn hóa theo cùng điều kiện giao hàng, dung sai kỹ thuật và tổng chi phí sở hữu (TCO).",
        "answerTitle": "Làm thế nào để so sánh công bằng báo giá từ nhiều nhà cung cấp quốc tế?",
        "directAnswer": "CTSEG bóc tách chi tiết các cấu phần chi phí: chuẩn hóa quy cách đóng gói, quy đổi các điều kiện Incoterms (FOB, CIF, CFR) về cùng mặt bằng giao hàng, tính toán chi phí vốn theo các mức MOQ, điều khoản thanh toán và chi phí chứng từ. Kết quả là một ma trận so sánh đa chiều giúp doanh nghiệp ra quyết định mua hàng tối ưu.",
        "audienceTitle": "Giải pháp này dành cho ai",
        "audience": "Trưởng phòng mua hàng, giám đốc chuỗi cung ứng và doanh nghiệp cần đánh giá khách quan các báo giá phức tạp từ nhiều nhà cung cấp quốc tế.",
        "criteriaTitle": "Tiêu chí so sánh RFQ",
        "criteria": [
                "Tính tương đương về thông số kỹ thuật và dung sai chất lượng",
                "Chuẩn hóa điều kiện Incoterms, cước vận chuyển và bảo hiểm",
                "Đơn giá theo các bậc số lượng đặt hàng tối thiểu (MOQ)",
                "Điều khoản thanh toán, rủi ro tỷ giá và chi phí tài chính"
        ],
        "processTitle": "Quy trình thực hiện",
        "process": [
                "Xây dựng mẫu RFQ chuẩn hóa với các tiêu chí bắt buộc",
                "Gửi yêu cầu và thu thập báo giá theo cấu trúc đồng nhất",
                "Quy đổi đơn vị tính, điều kiện giao hàng và chi phí phụ",
                "Lập ma trận so sánh TCO và đưa ra khuyến nghị đàm phán"
        ],
        "evidenceTitle": "Dữ liệu và tính khách quan",
        "evidence": "Ma trận so sánh dựa trên báo giá chính thức, tài liệu kỹ thuật và biểu thuế quan hiện hành, đảm bảo tính khách quan và độc lập thương mại.",
        "serviceType": "Dịch vụ lập RFQ và so sánh báo giá quốc tế",
        "ctaTitle": "Chuẩn hóa quy trình RFQ của bạn",
        "ctaText": "Gửi danh sách yêu cầu hoặc các báo giá hiện có để chúng tôi hỗ trợ xây dựng ma trận so sánh chi tiết.",
        "ctaLabel": "Yêu cầu phân tích RFQ",
        "faq": [
                {
                        "question": "Tại sao báo giá đơn vị thấp nhất chưa chắc là lựa chọn tối ưu?",
                        "answer": "Giá xuất xưởng thấp có thể đi kèm chi phí đóng gói cao, điều khoản giao hàng bất lợi, tỷ lệ hao hụt lớn hoặc rủi ro thanh toán trả trước toàn bộ."
                },
                {
                        "question": "CTSEG có thay mặt khách hàng đàm phán giá không?",
                        "answer": "Chúng tôi cung cấp dữ liệu phân tích, điểm chuẩn thị trường và luận điểm đàm phán để khách hàng tự tin thương thảo trực tiếp."
                },
                {
                        "question": "Thời gian lập ma trận so sánh mất bao lâu?",
                        "answer": "Sau khi nhận đủ thông tin chuẩn hóa từ các nhà cung cấp, bản phân tích so sánh hoàn chỉnh thường được hoàn thành trong 2-4 ngày làm việc."
                }
        ]
}
    },
    "paths": {
      "tr": "/tr/cozumler/uluslararasi-rfq-teklif-karsilastirma/",
      "en": "/en/solutions/international-rfq-bid-comparison/",
      "de": "/de/loesungen/internationaler-rfq-angebotsvergleich/",
      "it": "/it/soluzioni/rfq-internazionale-confronto-offerte/",
      "ru": "/ru/resheniya/mezhdunarodnyi-rfq-sravnenie-predlozheniy/",
      "fa": "/fa/solutions/international-rfq-bid-comparison/",
      "zh": "/zh/solutions/international-rfq-bid-comparison-matrix/",
      "vi": "/vi/solutions/international-rfq-bid-comparison-matrix/"
    }
  },
  "food-origin-compliance": {
    "content": {
      "en": {
        "eyebrow": "Food sourcing · origin and batch evidence",
        "title": "Food origin, batch documentation and sourcing assessment",
        "description": "Evidence-led assessment of origin, producer, specification, traceability, quality documents and target-market requirements for B2B food sourcing.",
        "answerTitle": "What should be checked when sourcing food internationally?",
        "directAnswer": "International food sourcing should identify the actual producer and origin, define the product and batch specification, review traceability and quality documents, and compare target-market requirements before shipment. CTSEG coordinates the commercial evidence and keeps unverified claims, missing tests and specialist approvals explicit.",
        "audienceTitle": "Who this solution is for",
        "audience": "Importers, distributors, food manufacturers, HORECA suppliers and private-label buyers assessing nuts, dried fruit, ingredients or other selected food categories.",
        "criteriaTitle": "Core assessment criteria",
        "criteria": [
          "Actual producer, country of origin and batch traceability",
          "Product grade, variety, processing, moisture and microbiological specification",
          "COA and relevant contaminant, pesticide or aflatoxin evidence where required",
          "Packaging, labelling, storage, transport and target-market responsibilities"
        ],
        "processTitle": "Assessment process",
        "process": [
          "Define product, use, destination and mandatory evidence",
          "Research suitable sources and confirm declared origin",
          "Review specification, documents and commercial conditions",
          "Record gaps, required specialist checks and shipment decisions"
        ],
        "evidenceTitle": "Evidence and responsibility boundary",
        "evidence": "Requirements vary by product, origin, destination and intended use. CTSEG does not replace accredited laboratories, competent authorities, customs, legal or food-safety specialists; their approval must be obtained where required.",
        "serviceType": "Food sourcing origin and batch documentation assessment",
        "ctaTitle": "Define the food-sourcing evidence",
        "ctaText": "Share the product, origin or source region, intended use, destination, volume and required documents.",
        "ctaLabel": "Request food-sourcing assessment",
        "faq": [
          {
            "question": "Does a COA prove every target-market requirement?",
            "answer": "No. The test scope, method, laboratory, batch identity, limits and destination requirements must all be checked."
          },
          {
            "question": "Can origin be assumed from a product name or image?",
            "answer": "No. Origin should be supported by producer, batch and commercial documentation and must not be concealed or misleadingly relabelled."
          },
          {
            "question": "Who confirms legal and food-safety compliance?",
            "answer": "Competent authorities and authorised legal, customs, laboratory or food-safety specialists should confirm regulated requirements where applicable."
          }
        ]
      },
      "tr": {
        "eyebrow": "Gıda tedariki · menşe ve parti belgesi",
        "title": "Gıda menşei, parti dokümantasyonu ve tedarik değerlendirmesi",
        "description": "B2B gıda tedariki için menşe, üretici, spesifikasyon, izlenebilirlik, kalite belgeleri ve hedef pazar gereksinimlerinin kanıta dayalı değerlendirmesi.",
        "answerTitle": "Uluslararası gıda tedarikinde neler kontrol edilmelidir?",
        "directAnswer": "Uluslararası gıda tedariki gerçek üreticiyi ve menşeyi belirlemeli, ürün ve parti spesifikasyonunu tanımlamalı, izlenebilirlik ve kalite belgelerini incelemeli ve sevkiyat öncesi hedef pazar gereksinimleriyle karşılaştırmalıdır. CTSEG ticari kanıtları koordine eder ve doğrulanmamış iddiaları, eksik testleri ve uzman onaylarını açıkça belirtir.",
        "audienceTitle": "Bu çözüm kimler içindir",
        "audience": "İthalatçılar, distribütörler, gıda üreticileri, HORECA tedarikçileri ve yemiş, kuru meyve, hammaddeler veya seçili diğer gıda kategorilerini değerlendiren özel etiket alıcıları.",
        "criteriaTitle": "Temel değerlendirme kriterleri",
        "criteria": [
          "Gerçek üretici, menşe ülke ve parti izlenebilirliği",
          "Ürün sınıfı, çeşit, işleme, nem ve mikrobiyolojik spesifikasyon",
          "Gerekliyse COA ve ilgili kontaminant, pestisit veya aflatoksin kanıtı",
          "Ambalaj, etiketleme, depolama, taşıma ve hedef-pazar sorumlulukları"
        ],
        "processTitle": "Değerlendirme süreci",
        "process": [
          "Ürünü, kullanımını, varış noktasını ve zorunlu kanıtı tanımlayın",
          "Uygun kaynakları araştırın ve beyan edilen menşeyi doğrulayın",
          "Spesifikasyonu, belgeleri ve ticari koşulları inceleyin",
          "Boşlukları, gerekli uzman kontrollerini ve sevkiyat kararlarını kaydedin"
        ],
        "evidenceTitle": "Kanıtlar ve sorumluluk sınırı",
        "evidence": "Gereksinimler ürün, menşe, varış yeri ve kullanım amacına göre değişir. CTSEG akredite laboratuvarların, yetkili makamların, gümrük veya gıda güvenliği uzmanlarının yerini almaz; gerektiğinde onların onayı alınmalıdır.",
        "serviceType": "Gıda tedariki menşei ve parti dokümantasyonu değerlendirmesi",
        "ctaTitle": "Gıda-tedarik kanıtlarını tanımlayın",
        "ctaText": "Ürünü, menşe veya kaynak bölgesini, kullanım amacını, varış yerini, hacmi ve gerekli belgeleri paylaşın.",
        "ctaLabel": "Gıda-tedarik değerlendirmesi isteyin",
        "faq": [
          {
            "question": "Bir COA her hedef-pazar gereksinimini kanıtlar mı?",
            "answer": "Hayır. Test kapsamı, yöntem, laboratuvar, parti kimliği, limitler ve varış yeri gereksinimleri hepsi kontrol edilmelidir."
          },
          {
            "question": "Menşei bir ürün adı veya görselinden varsayılabilir mi?",
            "answer": "Hayır. Menşei üretici, parti ve ticari belgelerle desteklenmeli; yanıltıcı etiketleme veya gizleme kabul edilemez."
          },
          {
            "question": "Yasal ve gıda güvenliği uygunluğunu kim doğrular?",
            "answer": "Düzenlenen gereksinimler için yetkili makamlar ile yetkili hukuki, gümrük, laboratuvar veya gıda güvenliği uzmanları onay vermelidir."
          }
        ]
      },
      "de": {
        "eyebrow": "Lebensmittelbeschaffung · Herkunft und Chargendokumente",
        "title": "Herkunft, Chargendokumentation und Beschaffungsbewertung für Lebensmittel",
        "description": "Evidenzbasierte Bewertung von Herkunft, Produzent, Spezifikation, Rückverfolgbarkeit, Qualitätsdokumenten und Zielmarktanforderungen für B2B-Lebensmittelbeschaffung.",
        "answerTitle": "Was ist bei internationaler Lebensmittelbeschaffung zu prüfen?",
        "directAnswer": "Internationale Lebensmittelbeschaffung sollte den tatsächlichen Produzenten und die Herkunft identifizieren, Produkt- und Chargenspezifikation definieren, Rückverfolgbarkeit und Qualitätsdokumente prüfen und Zielmarktanforderungen vor dem Versand vergleichen. CTSEG koordiniert die kommerziellen Nachweise und hält nicht verifizierte Angaben, fehlende Tests und fachliche Genehmigungen ausdrücklich sichtbar.",
        "audienceTitle": "Für wen diese Lösung gedacht ist",
        "audience": "Importeure, Händler, Lebensmittelhersteller, HORECA-Lieferanten und Private-Label-Einkäufer, die Nüsse, Trockenfrüchte, Zutaten oder andere ausgewählte Lebensmittelkategorien bewerten.",
        "criteriaTitle": "Kernkriterien der Bewertung",
        "criteria": [
          "Tatsächlicher Produzent, Herkunftsland und Chargenrückverfolgbarkeit",
          "Produktklasse, Sorte, Verarbeitung, Feuchte- und mikrobiologische Spezifikation",
          "COA und relevante Nachweise zu Kontaminanten, Pestiziden oder Aflatoxinen, wo erforderlich",
          "Verpackung, Kennzeichnung, Lagerung, Transport und Zielmarktverantwortlichkeiten"
        ],
        "processTitle": "Bewertungsprozess",
        "process": [
          "Produkt, Verwendungszweck, Bestimmungsort und erforderliche Nachweise definieren",
          "Geeignete Quellen recherchieren und deklarierte Herkunft bestätigen",
          "Spezifikation, Dokumente und kommerzielle Bedingungen prüfen",
          "Lücken, erforderliche Fachprüfungen und Versandentscheidungen dokumentieren"
        ],
        "evidenceTitle": "Belege und Verantwortungsgrenze",
        "evidence": "Anforderungen variieren nach Produkt, Herkunft, Bestimmungsort und Verwendungszweck. CTSEG ersetzt nicht akkreditierte Labore, zuständige Behörden, Zoll oder lebensmittelsicherheitsrechtliche Spezialisten; deren Genehmigung ist erforderlichenfalls einzuholen.",
        "serviceType": "Bewertung Herkunft und Chargendokumentation für Lebensmittelbeschaffung",
        "ctaTitle": "Definieren Sie die Nachweise für die Lebensmittelbeschaffung",
        "ctaText": "Teilen Sie Produkt, Herkunft oder Quellregion, Verwendungszweck, Bestimmungsort, Volumen und erforderliche Dokumente für eine erste Prüfung.",
        "ctaLabel": "Bewertung Lebensmittelbeschaffung anfordern",
        "faq": [
          {
            "question": "Beweist ein COA alle Anforderungen des Zielmarktes?",
            "answer": "Nein. Prüfumfang, Methode, Labor, Chargenidentität, Grenzwerte und Bestimmungslandanforderungen müssen alle geprüft werden."
          },
          {
            "question": "Kann Herkunft aus Produktname oder Bild angenommen werden?",
            "answer": "Nein. Herkunft sollte durch Produzent-, Chargen- und Handelsdokumente belegt sein und darf nicht irreführend umetikettiert oder verschleiert werden."
          },
          {
            "question": "Wer bestätigt die rechtliche und lebensmittelsicherheitsbezogene Konformität?",
            "answer": "Zuständige Behörden sowie autorisierte juristische, zoll- oder lebensmittelsicherheitsrelevante Spezialisten sollten regulierte Anforderungen dort bestätigen, wo es nötig ist."
          }
        ]
      },
      "it": {
        "eyebrow": "Approvvigionamento alimentare · origine e documenti lotto",
        "title": "Origine alimentare, documentazione di lotto e valutazione di approvvigionamento",
        "description": "Valutazione basata su evidenze di origine, produttore, specifica, tracciabilità, documenti di qualità e requisiti del mercato target per approvvigionamento alimentare B2B.",
        "answerTitle": "Cosa va verificato nel sourcing internazionale di alimenti?",
        "directAnswer": "Il sourcing internazionale di alimenti dovrebbe identificare il produttore reale e l’origine, definire la specifica di prodotto e lotto, esaminare tracciabilità e documenti di qualità e confrontare i requisiti del mercato target prima della spedizione. CTSEG coordina le evidenze commerciali e mantiene esplicite le dichiarazioni non verificate, i test mancanti e le approvazioni specialistiche.",
        "audienceTitle": "A chi è rivolta questa soluzione",
        "audience": "Importatori, distributori, produttori alimentari, fornitori HORECA e acquirenti private-label che valutano noci, frutta secca, ingredienti o altre categorie alimentari selezionate.",
        "criteriaTitle": "Criteri principali di valutazione",
        "criteria": [
          "Produttore effettivo, paese d’origine e tracciabilità di lotto",
          "Grado del prodotto, varietà, processo, umidità e specifica microbiologica",
          "COA e prove pertinenti su contaminanti, pesticidi o aflatossine ove richiesto",
          "Imballaggio, etichettatura, stoccaggio, trasporto e responsabilità verso il mercato di destinazione"
        ],
        "processTitle": "Processo di valutazione",
        "process": [
          "Definire prodotto, uso, destinazione e evidenze obbligatorie",
          "Ricercare fonti idonee e confermare l’origine dichiarata",
          "Rivedere specifica, documenti e condizioni commerciali",
          "Registrare lacune, controlli specialistici necessari e decisioni sulla spedizione"
        ],
        "evidenceTitle": "Evidenze e limiti di responsabilità",
        "evidence": "I requisiti variano per prodotto, origine, destinazione e uso previsto. CTSEG non sostituisce laboratori accreditati, autorità competenti, dogana o specialisti in materia di sicurezza alimentare; è necessario ottenere le loro approvazioni quando richiesto.",
        "serviceType": "Valutazione origine e documentazione lotto per approvvigionamento alimentare",
        "ctaTitle": "Definite le evidenze per l'approvvigionamento alimentare",
        "ctaText": "Condividete il prodotto, l'origine o la regione di provenienza, l'uso previsto, la destinazione, il volume e i documenti richiesti per una prima valutazione.",
        "ctaLabel": "Richiedi valutazione per l'approvvigionamento alimentare",
        "faq": [
          {
            "question": "Un COA dimostra tutti i requisiti del mercato di destinazione?",
            "answer": "No. Ambito dei test, metodo, laboratorio, identità della partita, limiti e requisiti della destinazione devono essere tutti verificati."
          },
          {
            "question": "Si può presumere l'origine dal nome del prodotto o da un'immagine?",
            "answer": "No. L'origine deve essere supportata da documenti del produttore, documentazione di partita e documenti commerciali; non deve essere nascosta né etichettata in modo fuorviante."
          },
          {
            "question": "Chi conferma la conformità legale e la sicurezza alimentare?",
            "answer": "Le autorità competenti e gli specialisti autorizzati in ambito legale, doganale, laboratoristico o della sicurezza alimentare devono confermare i requisiti regolamentari quando applicabile."
          }
        ]
      },
      "ru": {
        "eyebrow": "Снабжение продуктами · происхождение и документация по партиям",
        "title": "Происхождение продукта, документация партий и оценка источников поставок",
        "description": "Оценка на основе доказательств происхождения, производителя, спецификации, прослеживаемости, документов качества и требований целевого рынка для B2B-поставок продуктов.",
        "answerTitle": "Что нужно проверять при международной закупке продовольствия?",
        "directAnswer": "Международная закупка продуктов должна идентифицировать фактического производителя и происхождение, определить спецификацию продукта и партии, проверить прослеживаемость и документы качества и сравнить требования целевого рынка до отгрузки. CTSEG координирует коммерческие доказательства и явно фиксирует непроверенные утверждения, отсутствующие тесты и необходимость экспертных подтверждений.",
        "audienceTitle": "Для кого это решение",
        "audience": "Импортёры, дистрибьюторы, пищевые производители, поставщики HORECA и покупатели собственной торговой марки (СТМ), оценивающие орехи, сухофрукты, ингредиенты или другие выбранные категории пищевой продукции.",
        "criteriaTitle": "Ключевые критерии оценки",
        "criteria": [
          "Фактический производитель, страна происхождения и прослеживаемость партии",
          "Класс продукта, сорт, обработка, влажность и микробиологическая спецификация",
          "COA и соответствующие доказательства по загрязнителям, пестицидам или афлатоксинам при необходимости",
          "Упаковка, маркировка, хранение, транспорт и обязанности относительно целевого рынка"
        ],
        "processTitle": "Процесс оценки",
        "process": [
          "Определить продукт, назначение, пункт назначения и обязательные доказательства",
          "Исследовать подходящие источники и подтвердить заявленное происхождение",
          "Проверить спецификацию, документы и коммерческие условия",
          "Задокументировать пробелы, необходимые специализированные проверки и решение по отгрузке"
        ],
        "evidenceTitle": "Доказательства и границы ответственности",
        "evidence": "Требования отличаются в зависимости от продукта, происхождения, пункта назначения и предполагаемого использования. CTSEG не заменяет аккредитованные лаборатории, компетентные органы, таможню или специалистов по безопасности пищевых продуктов; их подтверждения должны быть получены там, где это необходимо.",
        "serviceType": "Оценка происхождения и документации партий для закупок продовольствия",
        "ctaTitle": "Определите доказательства для закупки продуктов",
        "ctaText": "Поделитесь информацией о продукте, регионе происхождения или источнике, назначении, пункте назначения, объёме и необходимых документах.",
        "ctaLabel": "Запросить оценку подбора поставщиков для пищевой продукции",
        "faq": [
          {
            "question": "Подтверждает ли COA соответствие всем требованиям целевого рынка?",
            "answer": "Нет. Объём тестирования, метод, лаборатория, идентичность партии, пределы и требования пункта назначения должны быть проверены."
          },
          {
            "question": "Можно ли предположить происхождение по названию продукта или изображению?",
            "answer": "Нет. Происхождение должно подтверждаться документами производителя, партии и коммерческими документами и не должно быть скрыто или вводяще перенесено этикеткой."
          },
          {
            "question": "Кто подтверждает юридическое и пищебезопасное соответствие?",
            "answer": "Компетентные органы и уполномоченные юридические, таможенные, лабораторные или специалисты по безопасности пищевых продуктов должны подтверждать регулируемые требования там, где это применимо."
          }
        ]
      },
      "fa": {
        "eyebrow": "تهیه مواد غذایی · منشأ و اسناد بچ",
        "title": "منشأ غذایی، مستندات بچ و ارزیابی منابع تأمین",
        "description": "ارزیابی مبتنی بر شواهد از منشأ، تولیدکننده، مشخصات، ردیابی، مدارک کیفیت و الزامات بازار هدف برای تأمین مواد غذایی B2B.",
        "answerTitle": "در تهیه بین‌المللی غذا چه مواردی باید کنترل شود؟",
        "directAnswer": "تأمین بین‌المللی غذا باید تولیدکننده و منشأ واقعی را شناسایی کند، مشخصات محصول و بچ را تعریف کند، ردیابی و مدارک کیفیت را بررسی کند و پیش از ارسال با الزامات بازار هدف مقایسه نماید. CTSEG شواهد تجاری را هماهنگ می‌کند و ادعاهای راستی‌آزمایی‌نشده، تست‌های ناقص و نیاز به تاییدهای تخصصی را صریحاً مشخص نگه می‌دارد.",
        "audienceTitle": "این راهکار مناسب چه کسانی است",
        "audience": "واردکنندگان، توزیع‌کنندگان، تولیدکنندگان مواد غذایی، تأمین‌کنندگان HORECA و خریداران private-label که آجیل‌ها، میوه‌های خشک، مواد اولیه یا سایر دسته‌های انتخابی غذایی را ارزیابی می‌کنند.",
        "criteriaTitle": "معیارهای اصلی ارزیابی",
        "criteria": [
          "تولیدکننده واقعی، کشور منشأ و ردیابی بچ",
          "درجه محصول، واریته، فرآوری، رطوبت و مشخصه میکروبیولوژیک",
          "COA و شواهد مرتبط آلودگی‌ها، آفت‌کش‌ها یا آفلاتوکسین در صورت نیاز",
          "بسته‌بندی، برچسب‌گذاری، نگهداری، حمل‌ونقل و مسئولیت‌های مربوط به بازار هدف"
        ],
        "processTitle": "فرآیند ارزیابی",
        "process": [
          "محصول، کاربرد، مقصد و مدارک اجباری را تعریف کنید",
          "منابع مناسب را تحقیق و منشأ اعلام‌شده را تأیید کنید",
          "مشخصه، مدارک و شرایط تجاری را بازبینی کنید",
          "شکاف‌ها، بررسی‌های تخصصی مورد نیاز و تصمیمات ارسال را ثبت کنید"
        ],
        "evidenceTitle": "شواهد و محدوده مسئولیت",
        "evidence": "نیازمندی‌ها با توجه به محصول، منشأ، مقصد و کاربرد متفاوت است. CTSEG جایگزین آزمایشگاه‌های معتبر، مراجع ذی‌صلاح، گمرک یا متخصصان ایمنی غذایی نمی‌شود؛ در صورت نیاز باید تأیید آن‌ها اخذ گردد.",
        "serviceType": "ارزیابی منشأ و مستندات بچ برای تأمین غذایی",
        "ctaTitle": "شواهد موردنیاز sourcing غذایی را تعریف کنید",
        "ctaText": "محصول، منشأ یا منطقه منبع، کاربرد موردنظر، مقصد، حجم و مدارک لازم را ارسال کنید.",
        "ctaLabel": "درخواست ارزیابی sourcing غذایی",
        "faq": [
          {
            "question": "آیا یک COA همهٔ الزامات بازار هدف را اثبات می‌کند؟",
            "answer": "خیر. دامنه تست، روش، آزمایشگاه، هویت بچ، حد مجازها و الزامات مقصد همگی باید بررسی شوند."
          },
          {
            "question": "آیا می‌توان منشأ را از نام محصول یا تصویر حدس زد؟",
            "answer": "خیر. منشأ باید توسط مدارک تولیدکننده، بچ و مدارک تجاری پشتیبانی شود و نباید مخفی یا به‌صورت گمراه‌کننده برچسب‌گذاری شود."
          },
          {
            "question": "چه کسی انطباق حقوقی و ایمنی غذایی را تأیید می‌کند؟",
            "answer": "مراجع ذی‌صلاح و متخصصان مجاز حقوقی، گمرکی، آزمایشگاهی یا ایمنی غذایی باید الزامات مقرراتی را در صورت لزوم تأیید کنند."
          }
        ]
      },
      "zh": {
        "eyebrow": "食品原产地合规 · 批次单证尽调",
        "title": "进口食品原产地真实性核验与批次质检单证全流程尽调",
        "description": "面向大宗农产品与包装食品，严格核验真实原产地溯源码、批次质量检测报告 (COA) 与海关法定准入合规单证。",
        "answerTitle": "如何核实进口食品的真实产地并确保每批次单证合规合法？",
        "directAnswer": "CTSEG 针对大宗食品与特色农产品执行全链条单证交叉比对：从源头种植基地/压榨工厂的营业资质、产地证明 (C/O)、批次健康证书 (Health Certificate)、植检证 (Phytosanitary Certificate)、第三方权威实验室农残及理化检验单 (COA)，到外箱合规标签声明进行全盘核查，彻底排查虚假产地混充与伪造质检单证风险。",
        "audienceTitle": "本专项解决方案适用对象",
        "audience": "从事特色坚果、食用植物油、鲜黑椰枣、顶级藏红花等大宗食品进口的商贸公司、食品工业加工厂、品牌连锁超市及清关合规风控部门。",
        "criteriaTitle": "食品合规核心尽调维度",
        "criteria": [
                "真实生产工厂地理位置、种植加工许可与卫生注册号",
                "官方原产地证书 (Certificate of Origin) 防伪与签发机构",
                "各生产批号 (Batch/Lot) 与 COA 实验室检测报告严格对应",
                "重金属、黄曲霉毒素、农残限量及目标国强制卫生标准"
        ],
        "processTitle": "批次单证合规审查流程",
        "process": [
                "明确目标进口国家/地区的最新食品安全法规与限量指标",
                "收集工厂全套企业资质、生产许可及往期出口报关单证",
                "逐批次核验第三方实验室检测项目、测试方法与代表性",
                "出具单证合规性评估意见书及潜在清关风险阻断建议"
        ],
        "evidenceTitle": "专业职责与法定监管边界说明",
        "evidence": "CTSEG 依托专业外贸经验执行细致的商业与单证比对，但不能替代海关检验检疫机构 (Customs CIQ) 或具备法定资质的国家级实验室所出具的法定通关检测报告。",
        "serviceType": "食品原产地与批次质检单证合规评估服务",
        "ctaTitle": "提交您的食品进口合规与单证核验委托",
        "ctaText": "请提供产品品类、拟进口产地、目标清关口岸及现有单证扫描件，我们将为您评估单证完备度与合规风险。",
        "ctaLabel": "申请食品合规评估",
        "faq": [
                {
                        "question": "工厂提供了一份 COA 检测报告，是否意味着该批次货物百分之百合格？",
                        "answer": "不一定。必须核查该 COA 是否与当前提货批号完全一致、测试项目是否覆盖目标国强制指标、检测机构是否具备 ISO 17025 认证资质。"
                },
                {
                        "question": "能否仅凭产品包装上的文字或图片判定原产地？",
                        "answer": "绝对不能。原产地必须依据官方签发的原产地证书 (C/O)、工厂提单及完税凭证等法定链条综合认定，严禁虚假产地标注。"
                },
                {
                        "question": "如发现批次单证存在缺失或疑点，应如何处理？",
                        "answer": "在货物出厂发运前要求工厂补全官方单证或指定权威第三方实验室（如 SGS、Eurofins）进行独立抽样复测，坚决杜绝带险出运。"
                }
        ]
},
      "vi": {
        "eyebrow": "Nguồn gốc thực phẩm · Chứng từ lô hàng",
        "title": "Xác minh nguồn gốc thực phẩm và thẩm định chứng từ chất lượng theo lô",
        "description": "Đánh giá có cấu trúc về tính xác thực của xuất xứ nông sản/thực phẩm, chứng nhận kiểm nghiệm (COA) và hồ sơ tuân thủ pháp lý theo từng lô hàng.",
        "answerTitle": "Làm thế nào để xác minh xuất xứ thực phẩm và kiểm soát chứng từ lô hàng?",
        "directAnswer": "CTSEG đối chiếu chéo toàn diện chuỗi chứng từ: đăng ký nhà máy sản xuất, chứng nhận xuất xứ (C/O), chứng thư kiểm dịch thực vật/y tế, phiếu phân tích kiểm nghiệm (COA) từ phòng lab độc lập và quy chuẩn ghi nhãn hàng hóa. Quy trình này giúp loại bỏ rủi ro gian lận xuất xứ và chứng từ giả mạo trước khi giao dịch.",
        "audienceTitle": "Giải pháp này dành cho ai",
        "audience": "Nhà nhập khẩu thực phẩm, đơn vị chế biến, chuỗi siêu thị và phòng quản lý chất lượng cần bảo đảm nguồn gốc minh bạch cho các lô hàng nông sản và thực phẩm.",
        "criteriaTitle": "Tiêu chí thẩm định thực phẩm",
        "criteria": [
                "Địa điểm sản xuất thực tế và đăng ký cơ sở đủ điều kiện an toàn thực phẩm",
                "Chứng nhận xuất xứ (C/O) hợp lệ từ cơ quan có thẩm quyền",
                "Tính nhất quán giữa số lô (Batch/Lot) và kết quả kiểm nghiệm COA",
                "Chỉ tiêu vi sinh, kim loại nặng, dư lượng thuốc BVTV theo chuẩn thị trường đích"
        ],
        "processTitle": "Quy trình thẩm định hồ sơ",
        "process": [
                "Rà soát quy định an toàn thực phẩm của thị trường nhập khẩu",
                "Thu thập và kiểm tra tính xác thực của bộ hồ sơ nhà sản xuất",
                "Đối chiếu phương pháp kiểm nghiệm và phạm vi phân tích trong COA",
                "Lập báo cáo đánh giá rủi ro và các điểm cần làm rõ trước khi ký hợp đồng"
        ],
        "evidenceTitle": "Bằng chứng và ranh giới chuyên môn",
        "evidence": "Đánh giá của CTSEG dựa trên việc đối chiếu chứng từ và dữ liệu thương mại, không thay thế chức năng kiểm nghiệm chính thức của cơ quan hải quan và kiểm dịch nhà nước.",
        "serviceType": "Dịch vụ thẩm định nguồn gốc và chứng từ thực phẩm",
        "ctaTitle": "Bảo đảm tuân thủ cho lô hàng thực phẩm của bạn",
        "ctaText": "Gửi thông tin sản phẩm, xuất xứ dự kiến, thị trường nhập khẩu và các chứng từ hiện có để được rà soát chi tiết.",
        "ctaLabel": "Yêu cầu thẩm định thực phẩm",
        "faq": [
                {
                        "question": "Một bản COA có đủ chứng minh sự phù hợp với mọi quy định thị trường không?",
                        "answer": "Không. Cần đối chiếu phạm vi kiểm nghiệm, phương pháp thử, phòng lab thực hiện, tính đại diện của mẫu và giới hạn cho phép của thị trường nhập khẩu."
                },
                {
                        "question": "Có thể suy đoán xuất xứ từ tên gọi thương mại hay hình ảnh không?",
                        "answer": "Tuyệt đối không. Xuất xứ phải được chứng minh qua hồ sơ nhà sản xuất, chứng từ lô hàng và chứng nhận C/O chính thức, không che giấu hay dán nhãn sai lệch."
                },
                {
                        "question": "Ai là người xác nhận cuối cùng về sự tuân thủ an toàn thực phẩm?",
                        "answer": "Cơ quan hải quan và cơ quan quản lý an toàn thực phẩm nước sở tại chịu trách nhiệm cấp phép thông quan; CTSEG giúp nhận diện và phòng ngừa rủi ro trước khi xuất hàng."
                }
        ]
}
    },
    "paths": {
      "tr": "/tr/cozumler/gida-mense-parti-belge-tedarik-degerlendirmesi/",
      "en": "/en/solutions/food-origin-batch-document-sourcing-assessment/",
      "de": "/de/loesungen/lebensmittel-herkunft-chargendokumente-beschaffung/",
      "it": "/it/soluzioni/origine-alimenti-documenti-lotto-approvvigionamento/",
      "ru": "/ru/resheniya/proiskhozhdenie-pishchevyh-produktov-dokumenty-partii/",
      "fa": "/fa/solutions/food-origin-batch-document-sourcing-assessment/",
      "zh": "/zh/solutions/food-origin-batch-document-sourcing-assessment/",
      "vi": "/vi/solutions/food-origin-batch-document-sourcing-assessment/"
    }
  }
} as unknown as Record<SearchLandingId,{
  paths:Record<Locale,string>;
  content:Record<Locale,SearchLandingContent>;
}>;

/* Balkan native search-intent landing rollout */
Object.assign(searchLandingIndexCopy as any,{
  ro:{title:'Soluții pentru decizii comerciale specifice',lead:'Pagini dedicate companiilor care au nevoie de un furnizor, producător, RFQ comparabil sau evaluare documentată pentru sourcing alimentar.'},
  bg:{title:'Решения за конкретни търговски решения',lead:'Специализирани страници за компании, които търсят доставчик, производител, сравним RFQ или документирана оценка на снабдяването с храни.'},
  sr:{title:'Rešenja za konkretne komercijalne odluke',lead:'Specijalizovane stranice za kompanije kojima je potreban dobavljač, proizvođač, uporediv RFQ ili dokumentovana procena sourcinga hrane.'}
});

const balkanSearchLandingContent:any = {
  'turkiye-supplier-sourcing':{
    ro:{eyebrow:'Türkiye · sourcing furnizori',title:'Identificarea și verificarea furnizorilor în Türkiye',description:'Cercetare structurată și verificare bazată pe dovezi a producătorilor și furnizorilor din Türkiye pentru cerințe B2B definite.',answerTitle:'Cum găsești și verifici un furnizor în Türkiye?',directAnswer:'CTSEG definește mai întâi produsul, volumul, criteriile de calitate, documentația și livrarea. Apoi cercetează candidați potriviți în Türkiye și verifică încrucișat înregistrarea companiei, activitatea, capacitatea, referințele, documentele și condițiile comerciale. Constatările, întrebările deschise și verificările suplimentare recomandate sunt raportate fără a prezenta verificarea ca o garanție necondiționată.',audienceTitle:'Cui se adresează această soluție',audience:'Cumpărătorilor B2B care intră pe piața de aprovizionare din Türkiye, înlocuiesc o sursă existentă, construiesc o a doua sursă sau doresc o revizuire independentă înaintea unei comenzi importante.',criteriaTitle:'Criterii principale de evaluare',criteria:['Identitatea juridică a companiei și contactele autorizate','Capacitatea relevantă de producție sau furnizare','Calitatea, trasabilitatea și documentele solicitate','MOQ, termen de livrare, Incoterms, plată și condiții de livrare'],processTitle:'Procesul de evaluare',process:['Definirea cerinței și a criteriilor de excludere','Cercetarea și preselecția producătorilor sau furnizorilor','Verificarea încrucișată a dovezilor și clarificarea neconcordanțelor','Livrarea unei liste scurte, a notelor de risc și a pașilor următori recomandați'],evidenceTitle:'Dovezi și limita responsabilității',evidence:'Evaluarea consemnează dovezile disponibile la momentul analizei și indică verificările lipsă. În funcție de produs și riscul tranzacției pot fi necesare mostre, audituri, teste de laborator, analiză juridică sau opinia unui specialist autorizat.',serviceType:'Identificarea și verificarea furnizorilor în Türkiye',ctaTitle:'Definiți cerința pentru furnizor',ctaText:'Trimiteți produsul, specificația, volumul estimat, țara de livrare și documentele necesare pentru o evaluare comercială inițială.',ctaLabel:'Solicită evaluarea furnizorului',faq:[{question:'Verificarea furnizorului garantează performanța viitoare?',answer:'Nu. Verificarea reduce incertitudinea și documentează dovezile disponibile, dar nu poate garanta calitatea, livrarea sau conduita comercială viitoare.'},{question:'Poate CTSEG compara mai mulți candidați?',answer:'Da. Candidații pot fi evaluați după aceleași criterii de produs, calitate, capacitate, documentație și condiții comerciale pentru ca diferențele să rămână vizibile.'},{question:'Ce informații sunt necesare pentru a începe?',answer:'Furnizați produsul sau serviciul, specificația, cantitatea estimată, punctul de livrare, calendarul și orice cerințe obligatorii de calitate sau documentație.'}]},
    bg:{eyebrow:'Türkiye · снабдяване с доставчици',title:'Откриване и проверка на доставчици в Türkiye',description:'Структурирано проучване и основана на доказателства проверка на производители и доставчици в Türkiye за конкретни B2B изисквания.',answerTitle:'Как се намира и проверява доставчик в Türkiye?',directAnswer:'CTSEG първо дефинира продукта, обема, критериите за качество, документите и доставката. След това проучва подходящи кандидати в Türkiye и проверява фирмена регистрация, дейност, капацитет, референции, документи и търговски условия. Констатациите, откритите въпроси и препоръчаните допълнителни проверки се отчитат, без проверката да се представя като безусловна гаранция.',audienceTitle:'За кого е това решение',audience:'За B2B купувачи, които навлизат на пазара за снабдяване в Türkiye, сменят настоящ източник, изграждат втори източник или искат независим преглед на кандидати преди съществена поръчка.',criteriaTitle:'Основни критерии за оценка',criteria:['Юридическа идентичност на фирмата и упълномощени контакти','Релевантен производствен или доставен капацитет','Качество, проследимост и изисквани документи','MOQ, срок, Incoterms, плащане и условия за доставка'],processTitle:'Процес на оценка',process:['Дефиниране на изискването и критериите за изключване','Проучване и предварителен подбор на производители или доставчици','Кръстосана проверка на доказателствата и изясняване на несъответствия','Кратък списък, рискови бележки и препоръчани следващи стъпки'],evidenceTitle:'Доказателства и граница на отговорността',evidence:'Оценката записва доказателствата, налични към момента, и посочва липсващите проверки. Според продукта и риска на сделката може да са нужни мостри, одити, лабораторни тестове, правен преглед или становище на оторизиран специалист.',serviceType:'Откриване и проверка на доставчици в Türkiye',ctaTitle:'Дефинирайте нуждата от доставчик',ctaText:'Споделете продукта, спецификацията, ориентировъчния обем, държавата на доставка и необходимите документи за първоначална търговска оценка.',ctaLabel:'Поискай оценка на доставчик',faq:[{question:'Проверката на доставчика гарантира ли бъдещо изпълнение?',answer:'Не. Проверката намалява несигурността и документира наличните доказателства, но не може да гарантира бъдещо качество, доставка или търговско поведение.'},{question:'Може ли CTSEG да сравни няколко кандидата?',answer:'Да. Кандидатите могат да се оценят по еднакви критерии за продукт, качество, капацитет, документи и търговски условия.'},{question:'Каква информация е нужна за старт?',answer:'Посочете продукта или услугата, спецификацията, ориентировъчното количество, мястото на доставка, срока и задължителните изисквания за качество или документи.'}]},
    sr:{eyebrow:'Türkiye · sourcing dobavljača',title:'Pronalaženje i provera dobavljača u Türkiye',description:'Strukturisano istraživanje i provera proizvođača i dobavljača u Türkiye zasnovana na dokazima za definisane B2B zahteve.',answerTitle:'Kako pronaći i proveriti dobavljača u Türkiye?',directAnswer:'CTSEG prvo definiše proizvod, obim, kriterijume kvaliteta, dokumentaciju i isporuku. Zatim istražuje odgovarajuće kandidate u Türkiye i unakrsno proverava registraciju kompanije, delatnost, kapacitet, reference, dokumentaciju i komercijalne uslove. Nalazi, otvorena pitanja i preporučene dodatne provere prikazuju se bez predstavljanja provere kao bezuslovne garancije.',audienceTitle:'Kome je ovo rešenje namenjeno',audience:'B2B kupcima koji ulaze na tržište nabavke u Türkiye, menjaju postojeći izvor, grade drugi izvor ili žele nezavisnu proveru kandidata pre značajne porudžbine.',criteriaTitle:'Ključni kriterijumi procene',criteria:['Pravni identitet kompanije i ovlašćeni kontakti','Relevantni proizvodni ili dobavljački kapacitet','Kvalitet, sledljivost i zahtevana dokumentacija','MOQ, rok isporuke, Incoterms, plaćanje i uslovi isporuke'],processTitle:'Proces procene',process:['Definisanje zahteva i kriterijuma isključenja','Istraživanje i predselekcija proizvođača ili dobavljača','Unakrsna provera dokaza i razjašnjenje nedoslednosti','Kratka lista, napomene o riziku i preporučeni naredni koraci'],evidenceTitle:'Dokazi i granica odgovornosti',evidence:'Procena beleži dokaze dostupne u trenutku analize i označava provere koje nedostaju. U zavisnosti od proizvoda i rizika transakcije mogu biti potrebni uzorci, auditi, laboratorijska ispitivanja, pravni pregled ili mišljenje ovlašćenog stručnjaka.',serviceType:'Pronalaženje i provera dobavljača u Türkiye',ctaTitle:'Definišite zahtev za dobavljača',ctaText:'Pošaljite proizvod, specifikaciju, procenjeni obim, zemlju isporuke i potrebnu dokumentaciju za početnu komercijalnu procenu.',ctaLabel:'Zatraži procenu dobavljača',faq:[{question:'Da li provera dobavljača garantuje budući učinak?',answer:'Ne. Provera smanjuje neizvesnost i dokumentuje dostupne dokaze, ali ne može garantovati budući kvalitet, isporuku ili komercijalno ponašanje.'},{question:'Može li CTSEG da uporedi više kandidata?',answer:'Da. Kandidati se mogu proceniti prema istim kriterijumima proizvoda, kvaliteta, kapaciteta, dokumentacije i komercijalnih uslova.'},{question:'Koje informacije su potrebne za početak?',answer:'Navedite proizvod ili uslugu, specifikaciju, procenjenu količinu, mesto isporuke, rok i sve obavezne zahteve kvaliteta ili dokumentacije.'}]}
  },
  'private-label-manufacturer':{
    ro:{eyebrow:'Private label · cercetare producător',title:'Cercetarea și calificarea producătorilor private label',description:'Cercetare de producători structurată în jurul specificației, MOQ, ambalării, etichetării, documentelor, capacității și cerințelor pieței țintă.',answerTitle:'Cum evaluezi un producător private label?',directAnswer:'Un proiect private label trebuie evaluat ca model operațional complet, nu doar ca ofertă de produs. CTSEG structurează cerința, cercetează producători potriviți și compară capacitatea de produs, MOQ, ambalarea, grafica, documentele de calitate, termenul, condițiile comerciale și responsabilitățile înainte de propunerea unei liste scurte.',audienceTitle:'Cui se adresează această soluție',audience:'Brandurilor, distribuitorilor și cumpărătorilor B2B care dezvoltă o linie private label, schimbă producătorul contractual sau testează fezabilitatea comercială a unui concept.',criteriaTitle:'Criterii principale de evaluare',criteria:['Formula, specificația și toleranțele permise','MOQ pe produs, format de ambalare și variantă grafică','Sistemul de calitate, testarea, trasabilitatea și documentele pieței țintă','Matrițe, mostre, termen de producție, proprietate și controlul modificărilor'],processTitle:'Procesul de evaluare',process:['Transformarea conceptului într-un brief comparabil pentru producători','Cercetarea și preselecția capacităților de producție relevante','Coordonarea RFQ-ului, mostrelor și întrebărilor documentare','Compararea fezabilității comerciale, riscurilor și cerințelor pentru etapa următoare'],evidenceTitle:'Dovezi și limita responsabilității',evidence:'Vizualurile de ambalaj, certificatele și declarațiile despre mostre nu sunt tratate ca dovadă finală. Produsul, producătorul, formula, grafica, afirmațiile de piață și documentele de lot trebuie confirmate pentru proiectul real înainte de producție sau vânzare.',serviceType:'Cercetare și calificare producător private label',ctaTitle:'Pregătiți brief-ul producătorului',ctaText:'Trimiteți conceptul de produs, piața țintă, volumul estimat, formatul ambalajului și fereastra dorită de lansare.',ctaLabel:'Solicită cercetare de producător',faq:[{question:'Poate CTSEG promite un MOQ specific?',answer:'Nu. MOQ depinde de producător, formulă, linie, ambalaj, grafică și structura comenzii și trebuie confirmat în RFQ.'},{question:'Este o mostră suficientă pentru aprobarea unui producător?',answer:'Nu. Mostra este doar un element. Trebuie analizate și compania, capacitatea, controlul calității, documentele, repetabilitatea și condițiile comerciale.'},{question:'Pot fi incluse ambalarea și etichetarea?',answer:'Da. Formatul ambalajului, responsabilitățile grafice, informațiile de pe etichetă, versiunile lingvistice și cerințele pieței țintă pot fi incluse în comparație.'}]},
    bg:{eyebrow:'Private label · проучване на производител',title:'Проучване и квалификация на private-label производители',description:'Проучване на производители според спецификация, MOQ, опаковка, етикетиране, документи, капацитет и изисквания на целевия пазар.',answerTitle:'Как се оценява private-label производител?',directAnswer:'Private-label проектът трябва да се оценява като цялостен оперативен модел, а не само като продуктова оферта. CTSEG структурира изискването, проучва подходящи производители и сравнява продуктови възможности, MOQ, опаковка, дизайн, документи за качество, срокове, търговски условия и отговорности преди изготвяне на кратък списък.',audienceTitle:'За кого е това решение',audience:'За марки, дистрибутори и B2B купувачи, които разработват нова private-label линия, сменят контрактен производител или проверяват търговската приложимост на продуктова концепция.',criteriaTitle:'Основни критерии за оценка',criteria:['Формула, спецификация и допустими отклонения','MOQ по продукт, формат на опаковка и вариант на дизайна','Система за качество, изпитване, проследимост и документи за целевия пазар','Инструментална екипировка, мостри, производствен срок, собственост и контрол на промените'],processTitle:'Процес на оценка',process:['Превръщане на концепцията в сравним brief за производители','Проучване и предварителен подбор на релевантни производствени възможности','Координация на RFQ, мостри и документални въпроси','Сравнение на търговска приложимост, рискове и изисквания за следващия етап'],evidenceTitle:'Доказателства и граница на отговорността',evidence:'Визуализации на опаковки, сертификати и твърдения за мостри не се приемат като окончателно доказателство. Продуктът, производителят, формулата, дизайнът, пазарните твърдения и партидните документи трябва да се потвърдят за конкретния проект.',serviceType:'Проучване и квалификация на private-label производител',ctaTitle:'Подгответе brief за производител',ctaText:'Споделете продуктовата концепция, целевия пазар, очаквания обем, формата на опаковката и желания срок за стартиране.',ctaLabel:'Поискай проучване на производител',faq:[{question:'Може ли CTSEG да обещае конкретен MOQ?',answer:'Не. MOQ зависи от производителя, формулата, линията, опаковката, дизайна и структурата на поръчката и трябва да се потвърди в RFQ.'},{question:'Достатъчна ли е мостра за одобрение на производител?',answer:'Не. Мострата е само един елемент. Трябва да се прегледат фирмени доказателства, капацитет, контрол на качеството, документи, повторяемост и търговски условия.'},{question:'Могат ли да се включат опаковка и етикетиране?',answer:'Да. Форматът, отговорностите за дизайна, информацията на етикета, езиковите версии и изискванията на целевия пазар могат да бъдат включени в сравнението.'}]},
    sr:{eyebrow:'Private label · istraživanje proizvođača',title:'Istraživanje i kvalifikacija private-label proizvođača',description:'Istraživanje proizvođača strukturisano prema specifikaciji proizvoda, MOQ-u, pakovanju, deklarisanju, dokumentaciji, kapacitetu i zahtevima ciljnog tržišta.',answerTitle:'Kako proceniti private-label proizvođača?',directAnswer:'Private-label projekat treba procenjivati kao kompletan operativni model, a ne samo kao cenu proizvoda. CTSEG strukturira zahtev, istražuje odgovarajuće proizvođače i poredi proizvodne mogućnosti, MOQ, pakovanje, grafičko rešenje, dokumentaciju kvaliteta, rok, komercijalne uslove i odgovornosti pre predlaganja uže liste.',audienceTitle:'Kome je ovo rešenje namenjeno',audience:'Brendovima, distributerima i B2B kupcima koji razvijaju novu private-label liniju, menjaju ugovornog proizvođača ili proveravaju komercijalnu izvodljivost koncepta.',criteriaTitle:'Ključni kriterijumi procene',criteria:['Formula, specifikacija i dozvoljene tolerancije','MOQ po proizvodu, formatu pakovanja i varijanti dizajna','Sistem kvaliteta, testiranje, sledljivost i dokumentacija ciljnog tržišta','Alati, uzorkovanje, rok proizvodnje, vlasništvo i kontrola izmena'],processTitle:'Proces procene',process:['Pretvaranje koncepta u uporediv brief za proizvođače','Istraživanje i predselekcija relevantnih proizvodnih kapaciteta','Koordinacija RFQ-a, uzoraka i pitanja dokumentacije','Poređenje komercijalne izvodljivosti, rizika i zahteva naredne faze'],evidenceTitle:'Dokazi i granica odgovornosti',evidence:'Vizuali ambalaže, sertifikati i izjave o uzorcima ne tretiraju se kao konačan dokaz. Proizvod, proizvođač, formula, grafika, tržišne tvrdnje i dokumentacija serije moraju biti potvrđeni za konkretan projekat pre proizvodnje ili prodaje.',serviceType:'Istraživanje i kvalifikacija private-label proizvođača',ctaTitle:'Pripremite brief za proizvođača',ctaText:'Pošaljite koncept proizvoda, ciljno tržište, očekivani obim, format pakovanja i željeni rok lansiranja.',ctaLabel:'Zatraži istraživanje proizvođača',faq:[{question:'Može li CTSEG obećati određeni MOQ?',answer:'Ne. MOQ zavisi od proizvođača, formulacije, linije, pakovanja, dizajna i strukture porudžbine i mora biti potvrđen kroz RFQ.'},{question:'Da li je uzorak dovoljan za odobravanje proizvođača?',answer:'Ne. Uzorak je samo jedan ulaz. Potrebno je pregledati i dokaze o kompaniji, kapacitet, kontrolu kvaliteta, dokumentaciju, ponovljivost i komercijalne uslove.'},{question:'Da li pakovanje i deklarisanje mogu biti uključeni?',answer:'Da. Format pakovanja, odgovornosti za dizajn, informacije na deklaraciji, jezičke verzije i zahtevi ciljnog tržišta mogu biti uključeni u poređenje.'}]}
  },
  'rfq-bid-comparison':{
    ro:{eyebrow:'RFQ · oferte comparabile',title:'Pregătirea RFQ internațional și compararea ofertelor',description:'O structură RFQ controlată care face ofertele furnizorilor comparabile după specificație, calitate, MOQ, livrare, plată, documente și cost total.',answerTitle:'Cum faci comparabile ofertele furnizorilor internaționali?',directAnswer:'Ofertele comparabile necesită o singură cerință agreată și o structură comună de răspuns. CTSEG definește câmpurile tehnice și comerciale, pregătește RFQ-ul, înregistrează clarificările și normalizează ofertele după baza de preț, MOQ, Incoterms, termen, plată, documente de calitate, logistică și riscuri deschise.',audienceTitle:'Cui se adresează această soluție',audience:'Echipelor de achiziții, operațiuni și management care primesc oferte incomplete sau structurate diferit și au nevoie de o bază transparentă pentru negociere și selecție.',criteriaTitle:'Criterii principale de comparație',criteria:['Specificația tehnică, domeniul inclus și excluderile','Baza unității, moneda, MOQ, pragurile de preț și condițiile de plată','Incoterms, ipotezele logistice, termenul și valabilitatea','Documente de calitate, mostre, garanții, excepții și factorii costului total'],processTitle:'Procesul de evaluare',process:['Confirmarea cerinței, criteriilor de decizie și instrucțiunilor pentru ofertanți','Emiterea RFQ-ului și controlul clarificărilor furnizorilor','Normalizarea răspunsurilor comerciale și tehnice','Raportarea comparației, excepțiilor, riscurilor și priorităților de negociere'],evidenceTitle:'Dovezi și limita responsabilității',evidence:'Comparația este la fel de fiabilă ca cerința și dovezile furnizate. Ipotezele neconfirmate, prețurile condiționate și documentele lipsă rămân vizibile și nu sunt transformate în certitudine falsă.',serviceType:'Pregătirea RFQ internațional și compararea ofertelor',ctaTitle:'Faceți ofertele comparabile',ctaText:'Trimiteți cerința, ofertele existente sau lista de ofertanți și termenul deciziei pentru o evaluare inițială.',ctaLabel:'Solicită evaluare RFQ',faq:[{question:'Cel mai mic preț unitar este întotdeauna cea mai bună ofertă?',answer:'Nu. Transportul, defectele, întârzierile, plata, stocurile, conformitatea și riscul de continuitate pot schimba semnificativ rezultatul comercial.'},{question:'Pot fi normalizate ofertele existente?',answer:'Da, dacă ipotezele de bază pot fi identificate. Câmpurile lipsă sau condiționate sunt marcate și se pregătesc întrebări de clarificare.'},{question:'CTSEG ia decizia finală privind furnizorul?',answer:'CTSEG structurează dovezile și comparația. Cumpărătorul păstrează decizia finală, aprobarea și responsabilitatea contractuală.'}]},
    bg:{eyebrow:'RFQ · сравними оферти',title:'Подготовка на международен RFQ и сравнение на оферти',description:'Контролирана RFQ структура, която прави офертите сравними по спецификация, качество, MOQ, доставка, плащане, документи и общ разход.',answerTitle:'Как международните оферти на доставчици стават сравними?',directAnswer:'Сравнимите оферти изискват едно договорено изискване и еднаква структура на отговор. CTSEG дефинира техническите и търговските полета, подготвя RFQ, записва уточненията и нормализира офертите по ценова база, MOQ, Incoterms, срок, плащане, документи за качество, логистика и открит риск.',audienceTitle:'За кого е това решение',audience:'За екипи по снабдяване, операции и управление, които получават непълни или различно структурирани оферти и се нуждаят от прозрачна база за преговори и избор.',criteriaTitle:'Основни критерии за сравнение',criteria:['Техническа спецификация, включен обхват и изключения','Единична база, валута, MOQ, ценови стъпки и условия за плащане','Incoterms, логистични допускания, срок и валидност','Документи за качество, мостри, гаранции, изключения и фактори на общия разход'],processTitle:'Процес на оценка',process:['Потвърждаване на изискването, критериите за решение и инструкциите към участниците','Издаване на RFQ и контрол на уточненията','Нормализиране на търговските и техническите отговори','Отчет за сравнение, изключения, рискове и приоритети за преговори'],evidenceTitle:'Доказателства и граница на отговорността',evidence:'Сравнението е толкова надеждно, колкото изискването и предоставените доказателства. Непотвърдените допускания, условните цени и липсващите документи остават видими.',serviceType:'Подготовка на международен RFQ и сравнение на оферти',ctaTitle:'Направете офертите сравними',ctaText:'Споделете изискването, наличните оферти или списъка с участници и срока за решение за първоначален преглед.',ctaLabel:'Поискай RFQ оценка',faq:[{question:'Най-ниската единична цена винаги ли е най-добрата оферта?',answer:'Не. Транспорт, дефекти, закъснения, плащане, склад, съответствие и риск за непрекъснатостта могат съществено да променят търговския резултат.'},{question:'Могат ли съществуващи оферти да бъдат нормализирани?',answer:'Да, ако основните допускания могат да бъдат идентифицирани. Липсващите или условни полета се маркират и се подготвят уточняващи въпроси.'},{question:'CTSEG взема ли окончателното решение за доставчик?',answer:'CTSEG структурира доказателствата и сравнението. Купувачът запазва окончателното решение, одобрението и договорната отговорност.'}]},
    sr:{eyebrow:'RFQ · uporedive ponude',title:'Priprema međunarodnog RFQ-a i poređenje ponuda',description:'Kontrolisana RFQ struktura koja čini ponude dobavljača uporedivim prema specifikaciji, kvalitetu, MOQ-u, isporuci, plaćanju, dokumentaciji i ukupnom trošku.',answerTitle:'Kako međunarodne ponude dobavljača učiniti uporedivim?',directAnswer:'Uporedive ponude zahtevaju jedan usaglašen zahtev i istu strukturu odgovora. CTSEG definiše tehnička i komercijalna polja, priprema RFQ, beleži pojašnjenja i normalizuje ponude prema cenovnoj osnovi, MOQ-u, Incoterms-u, roku, plaćanju, dokumentaciji kvaliteta, logistici i otvorenim rizicima.',audienceTitle:'Kome je ovo rešenje namenjeno',audience:'Timovima nabavke, operacija i menadžmenta koji dobijaju nepotpune ili različito strukturisane ponude i trebaju transparentnu osnovu za pregovore i izbor.',criteriaTitle:'Ključni kriterijumi poređenja',criteria:['Tehnička specifikacija, uključeni obim i izuzeci','Jedinična osnova, valuta, MOQ, cenovni pragovi i uslovi plaćanja','Incoterms, logističke pretpostavke, rok i važenje ponude','Dokumentacija kvaliteta, uzorci, garancije, izuzeci i faktori ukupnog troška'],processTitle:'Proces procene',process:['Potvrda zahteva, kriterijuma odluke i uputstava ponuđačima','Slanje RFQ-a i kontrola pojašnjenja dobavljača','Normalizacija komercijalnih i tehničkih odgovora','Izveštaj o poređenju, izuzecima, rizicima i prioritetima pregovora'],evidenceTitle:'Dokazi i granica odgovornosti',evidence:'Poređenje je pouzdano koliko i zahtev i dostavljeni dokazi. Nepotvrđene pretpostavke, uslovne cene i nedostajuća dokumentacija ostaju vidljivi umesto da se pretvaraju u lažnu sigurnost.',serviceType:'Priprema međunarodnog RFQ-a i poređenje ponuda',ctaTitle:'Učinite ponude uporedivim',ctaText:'Pošaljite zahtev, postojeće ponude ili listu ponuđača i rok za odluku radi početnog pregleda obima.',ctaLabel:'Zatraži RFQ procenu',faq:[{question:'Da li je najniža jedinična cena uvek najbolja ponuda?',answer:'Ne. Transport, škart, kašnjenje, plaćanje, zalihe, usklađenost i rizik kontinuiteta mogu značajno promeniti komercijalni rezultat.'},{question:'Mogu li postojeće ponude da se normalizuju?',answer:'Da, ako se osnovne pretpostavke mogu identifikovati. Nedostajuća ili uslovna polja se označavaju i pripremaju se pitanja za pojašnjenje.'},{question:'Da li CTSEG donosi konačnu odluku o dobavljaču?',answer:'CTSEG strukturira dokaze i poređenje. Kupac zadržava konačnu odluku, odobrenje i ugovornu odgovornost.'}]}
  },
  'food-origin-compliance':{
    ro:{eyebrow:'Sourcing alimentar · origine și dovezi de lot',title:'Evaluarea originii alimentelor, documentației de lot și sourcingului',description:'Evaluare bazată pe dovezi a originii, producătorului, specificației, trasabilității, documentelor de calitate și cerințelor pieței țintă pentru sourcing alimentar B2B.',answerTitle:'Ce trebuie verificat când aprovizionezi alimente internațional?',directAnswer:'Sourcingul alimentar internațional trebuie să identifice producătorul real și originea, să definească produsul și specificația lotului, să analizeze trasabilitatea și documentele de calitate și să compare cerințele pieței țintă înainte de expediere. CTSEG coordonează dovezile comerciale și menține explicite afirmațiile neverificate, testele lipsă și aprobările de specialitate.',audienceTitle:'Cui se adresează această soluție',audience:'Importatorilor, distribuitorilor, producătorilor alimentari, furnizorilor HORECA și cumpărătorilor private label care evaluează nuci, fructe uscate, ingrediente sau alte categorii alimentare selectate.',criteriaTitle:'Criterii principale de evaluare',criteria:['Producătorul real, țara de origine și trasabilitatea lotului','Clasa produsului, varietatea, procesarea, umiditatea și specificația microbiologică','COA și dovezi privind contaminanții, pesticidele sau aflatoxinele, unde este necesar','Ambalarea, etichetarea, depozitarea, transportul și responsabilitățile pentru piața țintă'],processTitle:'Procesul de evaluare',process:['Definirea produsului, utilizării, destinației și dovezilor obligatorii','Cercetarea surselor potrivite și confirmarea originii declarate','Analiza specificației, documentelor și condițiilor comerciale','Înregistrarea lacunelor, verificărilor de specialitate și deciziilor înainte de expediere'],evidenceTitle:'Dovezi și limita responsabilității',evidence:'Cerințele variază în funcție de produs, origine, destinație și utilizare. CTSEG nu înlocuiește laboratoarele acreditate, autoritățile competente, vama sau specialiștii juridici și de siguranță alimentară; aprobarea acestora trebuie obținută unde este necesar.',serviceType:'Evaluarea originii și documentației de lot pentru sourcing alimentar',ctaTitle:'Definiți dovezile necesare pentru sourcing alimentar',ctaText:'Trimiteți produsul, originea sau regiunea sursă, utilizarea, destinația, volumul și documentele necesare.',ctaLabel:'Solicită evaluare de sourcing alimentar',faq:[{question:'Un COA demonstrează toate cerințele pieței țintă?',answer:'Nu. Domeniul testului, metoda, laboratorul, identitatea lotului, limitele și cerințele destinației trebuie verificate împreună.'},{question:'Poate originea fi presupusă din numele sau imaginea produsului?',answer:'Nu. Originea trebuie susținută de documentația producătorului, lotului și documentele comerciale și nu trebuie ascunsă sau reetichetată înșelător.'},{question:'Cine confirmă conformitatea juridică și siguranța alimentară?',answer:'Autoritățile competente și specialiștii autorizați juridici, vamali, de laborator sau de siguranță alimentară trebuie să confirme cerințele reglementate, unde este cazul.'}]},
    bg:{eyebrow:'Снабдяване с храни · произход и партидни доказателства',title:'Оценка на произхода на храните, партидната документация и снабдяването',description:'Оценка, основана на доказателства, на произход, производител, спецификация, проследимост, документи за качество и изисквания на целевия пазар за B2B снабдяване с храни.',answerTitle:'Какво трябва да се проверява при международно снабдяване с храни?',directAnswer:'Международното снабдяване с храни трябва да идентифицира реалния производител и произход, да дефинира продукта и партидната спецификация, да прегледа проследимостта и документите за качество и да сравни изискванията на целевия пазар преди експедиция. CTSEG координира търговските доказателства и ясно маркира непроверени твърдения, липсващи тестове и специализирани одобрения.',audienceTitle:'За кого е това решение',audience:'За вносители, дистрибутори, производители на храни, HORECA доставчици и private-label купувачи, които оценяват ядки, сушени плодове, съставки или други избрани хранителни категории.',criteriaTitle:'Основни критерии за оценка',criteria:['Реален производител, държава на произход и проследимост на партидата','Клас, сорт, обработка, влажност и микробиологична спецификация','COA и доказателства за замърсители, пестициди или афлатоксини, когато се изискват','Опаковка, етикетиране, съхранение, транспорт и отговорности за целевия пазар'],processTitle:'Процес на оценка',process:['Дефиниране на продукта, употребата, дестинацията и задължителните доказателства','Проучване на подходящи източници и потвърждение на декларирания произход','Преглед на спецификация, документи и търговски условия','Регистриране на пропуски, специализирани проверки и решения преди експедиция'],evidenceTitle:'Доказателства и граница на отговорността',evidence:'Изискванията варират според продукта, произхода, дестинацията и употребата. CTSEG не замества акредитирани лаборатории, компетентни органи, митници, правни или хранително-безопасностни специалисти; техните одобрения трябва да бъдат получени, когато се изискват.',serviceType:'Оценка на произход и партидна документация при снабдяване с храни',ctaTitle:'Дефинирайте доказателствата за снабдяване с храни',ctaText:'Споделете продукта, произхода или региона, употребата, дестинацията, обема и необходимите документи.',ctaLabel:'Поискай оценка на снабдяването с храни',faq:[{question:'COA доказва ли всички изисквания на целевия пазар?',answer:'Не. Обхватът на теста, методът, лабораторията, идентичността на партидата, лимитите и изискванията на дестинацията трябва да бъдат проверени.'},{question:'Може ли произходът да се предполага от име или снимка?',answer:'Не. Произходът трябва да се доказва чрез документи на производителя, партидата и търговските документи и не трябва да се прикрива или подвеждащо преетикетира.'},{question:'Кой потвърждава правното съответствие и безопасността на храните?',answer:'Компетентни органи и оторизирани правни, митнически, лабораторни или хранително-безопасностни специалисти трябва да потвърдят регулираните изисквания, когато е приложимо.'}]},
    sr:{eyebrow:'Sourcing hrane · poreklo i dokazi serije',title:'Procena porekla hrane, dokumentacije serije i sourcinga',description:'Procena porekla, proizvođača, specifikacije, sledljivosti, dokumentacije kvaliteta i zahteva ciljnog tržišta zasnovana na dokazima za B2B sourcing hrane.',answerTitle:'Šta treba proveriti pri međunarodnom sourcingu hrane?',directAnswer:'Međunarodni sourcing hrane treba da identifikuje stvarnog proizvođača i poreklo, definiše proizvod i specifikaciju serije, pregleda sledljivost i dokumentaciju kvaliteta i uporedi zahteve ciljnog tržišta pre otpreme. CTSEG koordinira komercijalne dokaze i jasno označava neproverene tvrdnje, nedostajuća testiranja i stručna odobrenja.',audienceTitle:'Kome je ovo rešenje namenjeno',audience:'Uvoznicima, distributerima, proizvođačima hrane, HORECA dobavljačima i private-label kupcima koji procenjuju orašaste plodove, suvo voće, sastojke ili druge odabrane kategorije hrane.',criteriaTitle:'Ključni kriterijumi procene',criteria:['Stvarni proizvođač, zemlja porekla i sledljivost serije','Klasa proizvoda, sorta, obrada, vlaga i mikrobiološka specifikacija','COA i dokazi o kontaminantima, pesticidima ili aflatoksinima kada su potrebni','Pakovanje, deklarisanje, skladištenje, transport i odgovornosti za ciljno tržište'],processTitle:'Proces procene',process:['Definisanje proizvoda, namene, destinacije i obaveznih dokaza','Istraživanje odgovarajućih izvora i potvrda deklarisanog porekla','Pregled specifikacije, dokumentacije i komercijalnih uslova','Evidentiranje nedostataka, stručnih provera i odluka pre otpreme'],evidenceTitle:'Dokazi i granica odgovornosti',evidence:'Zahtevi zavise od proizvoda, porekla, destinacije i namene. CTSEG ne zamenjuje akreditovane laboratorije, nadležne organe, carinu, pravne ili stručnjake za bezbednost hrane; njihova odobrenja moraju se pribaviti kada je potrebno.',serviceType:'Procena porekla i dokumentacije serije za sourcing hrane',ctaTitle:'Definišite potrebne dokaze za sourcing hrane',ctaText:'Pošaljite proizvod, poreklo ili izvorni region, namenu, destinaciju, obim i potrebnu dokumentaciju.',ctaLabel:'Zatraži procenu sourcinga hrane',faq:[{question:'Da li COA dokazuje sve zahteve ciljnog tržišta?',answer:'Ne. Obim testa, metoda, laboratorija, identitet serije, granice i zahtevi destinacije moraju se proveriti zajedno.'},{question:'Može li se poreklo pretpostaviti na osnovu naziva ili slike proizvoda?',answer:'Ne. Poreklo mora biti potkrepljeno dokumentacijom proizvođača, serije i komercijalnim dokumentima i ne sme se prikrivati ili obmanjujuće preoznačavati.'},{question:'Ko potvrđuje pravnu usklađenost i bezbednost hrane?',answer:'Nadležni organi i ovlašćeni pravni, carinski, laboratorijski ili stručnjaci za bezbednost hrane treba da potvrde regulisane zahteve kada je primenljivo.'}]}
  }
};
const balkanSearchPaths:any = {
  'turkiye-supplier-sourcing':{ro:'/ro/solutii/sourcing-verificare-furnizori-turkiye/',bg:'/bg/resheniya/snabdyavane-proverka-dostavchitsi-turkiye/',sr:'/sr/resenja/sourcing-provera-dobavljaca-turkiye/'},
  'private-label-manufacturer':{ro:'/ro/solutii/cercetare-producator-private-label/',bg:'/bg/resheniya/private-label-proizvoditel-prouchvane/',sr:'/sr/resenja/private-label-proizvodjac-istrazivanje/'},
  'rfq-bid-comparison':{ro:'/ro/solutii/rfq-comparare-oferte-internationale/',bg:'/bg/resheniya/rfq-sravnenie-mezhdunarodni-oferti/',sr:'/sr/resenja/rfq-poredjenje-medjunarodnih-ponuda/'},
  'food-origin-compliance':{ro:'/ro/solutii/origine-alimente-documente-lot-sourcing/',bg:'/bg/resheniya/proizhod-hrani-partidni-dokumenti-snabdyavane/',sr:'/sr/resenja/poreklo-hrane-dokumentacija-serije-sourcing/'}
};
for(const id of searchLandingIds){
  for(const lang of ['ro','bg','sr']){
    (searchLandings[id].content as any)[lang]=balkanSearchLandingContent[id][lang];
    (searchLandings[id].paths as any)[lang]=balkanSearchPaths[id][lang];
  }
}

export function searchLandingPath(lang:Locale,id:SearchLandingId):string {
  return searchLandings[id].paths[lang];
}

export function searchLandingAlternates(id:string):Record<Locale,string> {
  const landing=searchLandings[id as SearchLandingId];
  return Object.fromEntries(Object.entries(landing.paths).map(([lang,path])=>[lang,`https://ctseg.com.tr${path}`])) as Record<Locale,string>;
}
