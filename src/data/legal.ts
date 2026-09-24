import type { Locale } from './site';

type LegalCopy = {
  intro: string;
  sections: Array<[string, string]>;
};

export const termsOfUseCopy: Record<Locale, LegalCopy> = {
  tr: {
    intro: 'Bu Kullanım Koşulları, CTSEG web sitesine erişimi ve sitede sunulan kurumsal, ticari ve bilgilendirici içeriğin kullanım esaslarını açıklar.',
    sections: [
      ['Kapsam ve kabul', 'Bu siteyi kullanarak yürürlükteki mevzuata ve bu koşullara uygun hareket etmeyi kabul edersiniz. Web sitesi üzerinden sunulan bilgiler, aksi açıkça belirtilmedikçe genel bilgilendirme ve ticari ön değerlendirme amacı taşır.'],
      ['Teklifler ve ticari bağlayıcılık', 'Web sitesindeki ürün, hizmet, kapasite, teslim, fiyat veya pazar bilgileri tek başına bağlayıcı teklif ya da garanti oluşturmaz. Ticari kapsam, ücretlendirme, teslim modeli, Incoterms, kalite kriterleri ve tarafların sorumlulukları proje veya işlem bazında ayrıca yazılı olarak teyit edilir.'],
      ['Tedarikçi ve üçüncü taraf bilgileri', 'CTSEG tedarikçi, üretici, alıcı, lojistik sağlayıcı veya diğer üçüncü taraflardan alınan bilgileri makul doğrulama yöntemleriyle değerlendirebilir; ancak bağımsız üçüncü tarafların beyan, performans veya yükümlülüklerini kendiliğinden garanti etmez. Doğrulama seviyesi ve kullanılan kanıtlar ilgili çalışmanın kapsamına göre belirlenir.'],
      ['Fikri mülkiyet', 'Sitedeki CTSEG markası, metinler, grafikler, rapor yapıları, yöntemler ve diğer özgün içerikler ilgili hak sahiplerine aittir. Yazılı izin olmadan ticari amaçla çoğaltılamaz, yeniden yayımlanamaz veya CTSEG tarafından onaylanmış izlenimi yaratacak biçimde kullanılamaz.'],
      ['Kabul edilemez kullanım', 'Site; hukuka aykırı faaliyet, yanıltıcı kimlik veya belge kullanımı, sisteme yetkisiz erişim, zararlı kod gönderimi, otomatik kötüye kullanım, fikri mülkiyet ihlali veya üçüncü tarafların haklarını zedeleyen amaçlarla kullanılamaz.'],
      ['Sorumluluk sınırları', 'CTSEG, web sitesinin erişilebilirliğini ve içeriğin güncelliğini korumak için makul çaba gösterir. Bununla birlikte, yalnızca web sitesindeki genel bilgilere dayanılarak alınan ticari kararların sonuçlarından veya CTSEG kontrolü dışındaki üçüncü taraf sistem, hizmet ya da içeriklerinden doğan kayıplardan, uygulanabilir hukukun izin verdiği ölçüde sorumlu tutulamaz.'],
      ['Değişiklikler ve iletişim', 'Bu koşullar hizmet modeli, mevzuat veya site işlevleri değiştikçe güncellenebilir. Güncel sürüm bu sayfada yayımlanır. Kullanım koşullarıyla ilgili sorular info@ctseg.com.tr adresine iletilebilir.']
    ]
  },
  en: {
    intro: 'These Terms of Use govern access to the CTSEG website and the use of its corporate, commercial and informational content.',
    sections: [
      ['Scope and acceptance', 'By using this website, you agree to comply with applicable law and these terms. Unless expressly stated otherwise, website content is provided for general information and preliminary commercial assessment purposes.'],
      ['Quotations and commercial commitment', 'Product, service, capacity, delivery, pricing or market information published on the website does not by itself constitute a binding quotation or guarantee. Scope, fees, delivery model, Incoterms, quality criteria and party responsibilities are confirmed separately in writing for each project or transaction.'],
      ['Supplier and third-party information', 'CTSEG may assess information received from suppliers, manufacturers, buyers, logistics providers and other third parties using reasonable verification methods. CTSEG does not automatically guarantee independent third-party statements, performance or obligations. The verification level and evidence used depend on the agreed scope of work.'],
      ['Intellectual property', 'The CTSEG brand, original texts, graphics, report structures, methodologies and other proprietary website content belong to their respective rights holders. They may not be commercially reproduced, republished or used in a manner implying CTSEG approval without written permission.'],
      ['Prohibited use', 'The website may not be used for unlawful activity, misleading identity or documentation, unauthorized system access, malicious code, abusive automation, intellectual-property infringement or activity that violates third-party rights.'],
      ['Limitation of responsibility', 'CTSEG uses reasonable efforts to maintain website availability and content accuracy. To the extent permitted by applicable law, CTSEG is not responsible for losses arising solely from decisions based on general website information or from third-party systems, services or content outside CTSEG control.'],
      ['Changes and contact', 'These terms may be updated when the service model, applicable requirements or website functionality changes. The current version is published on this page. Questions regarding these terms may be sent to info@ctseg.com.tr.']
    ]
  },
  de: {
    intro: 'Diese Nutzungsbedingungen regeln den Zugang zur CTSEG-Website und die Nutzung ihrer unternehmensbezogenen, kommerziellen und informativen Inhalte.',
    sections: [
      ['Geltungsbereich und Zustimmung', 'Mit der Nutzung dieser Website verpflichten Sie sich zur Einhaltung des anwendbaren Rechts und dieser Bedingungen. Sofern nicht ausdrücklich anders angegeben, dienen die Inhalte der allgemeinen Information und einer ersten geschäftlichen Bewertung.'],
      ['Angebote und Verbindlichkeit', 'Produkt-, Leistungs-, Kapazitäts-, Liefer-, Preis- oder Marktangaben auf der Website stellen für sich allein kein verbindliches Angebot und keine Garantie dar. Umfang, Vergütung, Liefermodell, Incoterms, Qualitätskriterien und Verantwortlichkeiten werden je Projekt oder Transaktion gesondert schriftlich bestätigt.'],
      ['Lieferanten- und Drittinformationen', 'CTSEG kann Angaben von Lieferanten, Herstellern, Käufern, Logistikdienstleistern und anderen Dritten mit angemessenen Prüfmethoden bewerten. Aussagen, Leistungen oder Verpflichtungen unabhängiger Dritter werden dadurch nicht automatisch garantiert.'],
      ['Geistiges Eigentum', 'Marke, Texte, Grafiken, Berichtsstrukturen, Methoden und sonstige originäre Inhalte von CTSEG sind geschützt und dürfen ohne schriftliche Genehmigung nicht kommerziell vervielfältigt, veröffentlicht oder als von CTSEG gebilligt dargestellt werden.'],
      ['Unzulässige Nutzung', 'Untersagt sind insbesondere rechtswidrige Nutzung, irreführende Identitäten oder Dokumente, unbefugter Systemzugriff, Schadcode, missbräuchliche Automatisierung sowie Verletzungen geistiger Eigentums- oder sonstiger Rechte Dritter.'],
      ['Haftungsgrenzen', 'CTSEG bemüht sich in angemessenem Umfang um Verfügbarkeit und Aktualität. Soweit gesetzlich zulässig, haftet CTSEG nicht für Verluste aus Entscheidungen, die ausschließlich auf allgemeinen Website-Informationen beruhen, oder aus Systemen und Leistungen Dritter außerhalb der Kontrolle von CTSEG.'],
      ['Änderungen und Kontakt', 'Diese Bedingungen können bei Änderungen des Leistungsmodells, der Anforderungen oder der Website-Funktionen aktualisiert werden. Die aktuelle Fassung wird auf dieser Seite veröffentlicht. Fragen: info@ctseg.com.tr.']
    ]
  },
  it: {
    intro: 'I presenti Termini di utilizzo disciplinano l’accesso al sito CTSEG e l’uso dei relativi contenuti societari, commerciali e informativi.',
    sections: [
      ['Ambito e accettazione', 'Utilizzando il sito si accetta di rispettare la normativa applicabile e i presenti termini. Salvo diversa indicazione, i contenuti hanno finalità informative e di valutazione commerciale preliminare.'],
      ['Offerte e vincolatività commerciale', 'Le informazioni su prodotti, servizi, capacità, consegna, prezzi o mercati non costituiscono da sole un’offerta vincolante o una garanzia. Ambito, compensi, modello di consegna, Incoterms, criteri qualitativi e responsabilità sono confermati separatamente per iscritto.'],
      ['Informazioni di fornitori e terzi', 'CTSEG può valutare informazioni ricevute da fornitori, produttori, acquirenti, operatori logistici e altri terzi con metodi di verifica ragionevoli, senza garantire automaticamente dichiarazioni, prestazioni o obblighi di soggetti indipendenti.'],
      ['Proprietà intellettuale', 'Marchio CTSEG, testi originali, grafica, strutture di report, metodologie e altri contenuti proprietari sono protetti e non possono essere riprodotti o ripubblicati commercialmente senza autorizzazione scritta.'],
      ['Usi vietati', 'Sono vietati usi illeciti, identità o documentazione ingannevoli, accessi non autorizzati, codice dannoso, automazioni abusive e violazioni dei diritti di proprietà intellettuale o di terzi.'],
      ['Limitazione di responsabilità', 'CTSEG adotta misure ragionevoli per mantenere disponibilità e accuratezza del sito. Nei limiti consentiti dalla legge, non risponde di perdite derivanti esclusivamente da decisioni basate su informazioni generali del sito o da sistemi e servizi di terzi fuori dal proprio controllo.'],
      ['Modifiche e contatti', 'I termini possono essere aggiornati in caso di modifiche al servizio, ai requisiti applicabili o alle funzionalità del sito. La versione corrente è pubblicata su questa pagina. Contatto: info@ctseg.com.tr.']
    ]
  },
  ru: {
    intro: 'Настоящие Условия использования регулируют доступ к сайту CTSEG и использование корпоративной, коммерческой и информационной информации на нем.',
    sections: [
      ['Сфера действия и принятие', 'Используя сайт, вы соглашаетесь соблюдать применимое законодательство и настоящие условия. Если прямо не указано иное, материалы предназначены для общей информации и предварительной коммерческой оценки.'],
      ['Предложения и обязательность', 'Информация о товарах, услугах, мощностях, поставке, ценах или рынках сама по себе не является обязательным предложением или гарантией. Объем работ, стоимость, модель поставки, Incoterms, критерии качества и ответственность сторон подтверждаются отдельно в письменной форме.'],
      ['Информация поставщиков и третьих лиц', 'CTSEG может проверять сведения поставщиков, производителей, покупателей, логистических компаний и иных третьих лиц разумными методами, но не гарантирует автоматически заявления, исполнение или обязательства независимых третьих сторон.'],
      ['Интеллектуальная собственность', 'Бренд CTSEG, оригинальные тексты, графика, структуры отчетов, методики и иной собственный контент защищены и не могут коммерчески воспроизводиться или публиковаться без письменного разрешения.'],
      ['Запрещенное использование', 'Запрещены незаконная деятельность, вводящие в заблуждение личности или документы, несанкционированный доступ, вредоносный код, злоупотребление автоматизацией и нарушение прав интеллектуальной собственности или иных прав третьих лиц.'],
      ['Ограничение ответственности', 'CTSEG принимает разумные меры для поддержания доступности и актуальности сайта. В пределах, допускаемых законом, CTSEG не отвечает за убытки от решений, основанных исключительно на общей информации сайта, либо от систем и услуг третьих лиц вне контроля CTSEG.'],
      ['Изменения и контакты', 'Условия могут обновляться при изменении модели услуг, требований или функций сайта. Актуальная версия публикуется на этой странице. Вопросы: info@ctseg.com.tr.']
    ]
  },
  fa: {
    intro: 'این شرایط استفاده، نحوه دسترسی به وب‌سایت CTSEG و استفاده از محتوای شرکتی، تجاری و اطلاعاتی آن را تعیین می‌کند.',
    sections: [
      ['دامنه و پذیرش', 'با استفاده از این وب‌سایت، رعایت قوانین قابل اجرا و این شرایط را می‌پذیرید. مگر آنکه صریحاً خلاف آن ذکر شود، محتوای سایت برای اطلاع‌رسانی عمومی و ارزیابی اولیه تجاری ارائه می‌شود.'],
      ['پیشنهادها و تعهد تجاری', 'اطلاعات مربوط به محصول، خدمات، ظرفیت، تحویل، قیمت یا بازار به تنهایی پیشنهاد الزام‌آور یا تضمین محسوب نمی‌شود. دامنه، هزینه، مدل تحویل، اینکوترمز، معیارهای کیفیت و مسئولیت طرفین برای هر پروژه یا معامله جداگانه و کتبی تأیید می‌شود.'],
      ['اطلاعات تأمین‌کنندگان و اشخاص ثالث', 'CTSEG می‌تواند اطلاعات دریافتی از تأمین‌کنندگان، تولیدکنندگان، خریداران، شرکت‌های لجستیک و سایر اشخاص ثالث را با روش‌های معقول بررسی کند، اما اظهارات، عملکرد یا تعهدات اشخاص مستقل را به طور خودکار تضمین نمی‌کند.'],
      ['مالکیت فکری', 'برند CTSEG، متون اصیل، گرافیک، ساختار گزارش‌ها، روش‌ها و سایر محتوای اختصاصی تحت حمایت است و بدون اجازه کتبی نباید برای مقاصد تجاری تکثیر یا بازنشر شود.'],
      ['استفاده ممنوع', 'استفاده غیرقانونی، هویت یا اسناد گمراه‌کننده، دسترسی غیرمجاز، کد مخرب، خودکارسازی سوءاستفاده‌گرانه و نقض حقوق مالکیت فکری یا حقوق اشخاص ثالث ممنوع است.'],
      ['محدودیت مسئولیت', 'CTSEG برای دسترس‌پذیری و دقت محتوا تلاش معقول انجام می‌دهد. در حدود مجاز قانون، مسئول زیان ناشی صرفاً از تصمیمات مبتنی بر اطلاعات عمومی سایت یا سامانه‌ها و خدمات اشخاص ثالث خارج از کنترل CTSEG نیست.'],
      ['تغییرات و تماس', 'این شرایط ممکن است با تغییر مدل خدمات، الزامات یا قابلیت‌های سایت به‌روزرسانی شود. نسخه جاری در همین صفحه منتشر می‌شود. تماس: info@ctseg.com.tr.']
    ]
  },
  zh: {
    intro: '本使用条款规定访问 CTSEG 网站以及使用其中企业、商业与信息内容的基本条件。',
    sections: [
      ['适用范围与接受', '使用本网站即表示同意遵守适用法律及本条款。除非另有明确说明，网站内容仅用于一般信息展示及初步商业评估。'],
      ['报价与商业约束力', '网站所载产品、服务、产能、交付、价格或市场信息本身不构成具有约束力的报价或保证。项目范围、费用、交付模式、Incoterms、质量标准及各方责任须针对具体项目或交易另行书面确认。'],
      ['供应商及第三方信息', 'CTSEG 可通过合理的核验方法评估供应商、制造商、买方、物流服务商及其他第三方提供的信息，但不因此自动保证独立第三方的陈述、履约能力或义务。'],
      ['知识产权', 'CTSEG 品牌、原创文本、图形、报告结构、方法论及其他专有内容受相应权利保护。未经书面许可，不得用于商业复制、再发布或以暗示获得 CTSEG 背书的方式使用。'],
      ['禁止使用', '不得将网站用于违法活动、虚假身份或文件、未经授权的系统访问、恶意代码、滥用自动化、侵犯知识产权或其他第三方权利的行为。'],
      ['责任限制', 'CTSEG 采取合理措施维护网站可用性及内容准确性。在适用法律允许的范围内，对于仅基于网站一般信息作出的商业决策，或 CTSEG 无法控制的第三方系统、服务和内容造成的损失，CTSEG 不承担责任。'],
      ['修改与联系', '当服务模式、适用要求或网站功能发生变化时，本条款可能更新。最新版本将在本页面公布。相关问题可发送至 info@ctseg.com.tr。']
    ]
  },
  vi: {
    intro: 'Điều khoản sử dụng này quy định việc truy cập website CTSEG và việc sử dụng các nội dung doanh nghiệp, thương mại và thông tin trên website.',
    sections: [
      ['Phạm vi và chấp thuận', 'Khi sử dụng website, người dùng đồng ý tuân thủ pháp luật áp dụng và các điều khoản này. Trừ khi có quy định rõ khác, nội dung chỉ phục vụ mục đích thông tin chung và đánh giá thương mại sơ bộ.'],
      ['Báo giá và tính ràng buộc thương mại', 'Thông tin về sản phẩm, dịch vụ, năng lực, giao hàng, giá hoặc thị trường trên website không tự thân tạo thành báo giá ràng buộc hoặc bảo đảm. Phạm vi, phí, mô hình giao hàng, Incoterms, tiêu chí chất lượng và trách nhiệm các bên được xác nhận riêng bằng văn bản.'],
      ['Thông tin từ nhà cung cấp và bên thứ ba', 'CTSEG có thể đánh giá thông tin từ nhà cung cấp, nhà sản xuất, người mua, đơn vị logistics và các bên thứ ba bằng phương pháp xác minh hợp lý, nhưng không mặc nhiên bảo đảm tuyên bố, hiệu suất hoặc nghĩa vụ của các bên độc lập.'],
      ['Sở hữu trí tuệ', 'Thương hiệu CTSEG, văn bản gốc, đồ họa, cấu trúc báo cáo, phương pháp và nội dung sở hữu khác được bảo hộ và không được sao chép hoặc tái xuất bản cho mục đích thương mại nếu chưa có cho phép bằng văn bản.'],
      ['Sử dụng bị cấm', 'Không được sử dụng website cho hoạt động trái pháp luật, danh tính hoặc tài liệu gây hiểu nhầm, truy cập trái phép, mã độc, tự động hóa lạm dụng hoặc hành vi xâm phạm quyền sở hữu trí tuệ hay quyền của bên thứ ba.'],
      ['Giới hạn trách nhiệm', 'CTSEG thực hiện các biện pháp hợp lý để duy trì tính sẵn sàng và độ chính xác của website. Trong phạm vi pháp luật cho phép, CTSEG không chịu trách nhiệm đối với tổn thất phát sinh chỉ từ quyết định dựa trên thông tin chung của website hoặc từ hệ thống, dịch vụ bên thứ ba ngoài tầm kiểm soát của CTSEG.'],
      ['Thay đổi và liên hệ', 'Điều khoản có thể được cập nhật khi mô hình dịch vụ, yêu cầu áp dụng hoặc chức năng website thay đổi. Phiên bản hiện hành được công bố tại trang này. Liên hệ: info@ctseg.com.tr.']
    ]
  }
};
