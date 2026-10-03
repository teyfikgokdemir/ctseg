import type { GlassMarketSlug } from './glass-market-seo';

type ArGlassMarketCopy={
  title:string; metaTitle:string; description:string; eyebrow:string; lead:string;
  buyersTitle:string; buyers:string[]; scopeTitle:string; scope:string[];
  logisticsTitle:string; logistics:string[]; rfqTitle:string; rfq:string[];
  faqTitle:string; faq:[string,string][]; ctaTitle:string; ctaText:string; ctaLabel:string;
};

const common={
  buyersTitle:'لمن تناسب الخدمة',
  buyers:['مستوردو وموزعو الزجاج','مصنّعو IGU والنوافذ','شركات الواجهات والأنظمة المعمارية','معالجو الزجاج','فرق المشاريع والمشتريات','مشترو مواد البناء والمشاريع'],
  scopeTitle:'نطاق التوريد',
  scope:['الزجاج المسطح وLow-Iron','الزجاج المقسى والمعالج حرارياً','الزجاج المصفح للأمان','Low-E وزجاج التحكم الشمسي','الزجاج العازل / IGU','القص والثقوب ومعالجة الحواف والمعالجة حسب المشروع'],
  logisticsTitle:'التنسيق التجاري واللوجستي',
  logistics:['تحديد مسار الشحن وفق السوق وشروط المشروع','تحديد الصناديق وA-frame والتعبئة الخاصة بالمشروع قبل التسعير','توحيد نقطة التسليم وIncoterm وشروط التفريغ للمقارنة','مراجعة الوثائق والأدلة الفنية المطلوبة لكل مورد'],
  rfqTitle:'المعلومات اللازمة لعرض دقيق',
  rfq:['نوع الزجاج وتركيبه','السماكة والمقاسات أو cut list','كمية المشروع أو الاحتياج الشهري','المعالجة ومتطلبات الأداء','الدولة والمدينة المستهدفة','Incoterm والموعد المطلوب'],
  faqTitle:'الأسئلة الشائعة',
  faq:[
    ['هل تعمل CTSEG مع مصنع زجاج واحد فقط في Türkiye؟','لا. يتم اختيار مسار التوريد وفق المنتج والمعالجة والطاقة والتعبئة والوثائق وشروط التسليم.'],
    ['هل يمكن تقييم احتياجات المشاريع أو الكميات الأصغر؟','نعم. يتم تقييم MOQ والجدوى الفنية والخدمات اللوجستية حسب المنتج والمورد.'],
    ['كيف تتم مقارنة العروض؟','كلما أمكن، يتم توحيد العروض على نفس المواصفة والكمية والتعبئة وIncoterm قبل المقارنة.']
  ] as [string,string][],
  ctaLabel:'إنشاء طلب'
};

const markets:Record<GlassMarketSlug,Omit<ArGlassMarketCopy,keyof typeof common>>={
  'europe-balkans':{
    title:'توريد الزجاج من Türkiye إلى أوروبا والبلقان',
    metaTitle:'مورّد زجاج من Türkiye لأوروبا والبلقان | CTSEG',
    description:'توريد الزجاج المسطح والمقسى والمصفح وLow-E وIGU وزجاج المشاريع من Türkiye إلى أوروبا والبلقان.',
    eyebrow:'أوروبا والبلقان · توريد الزجاج من TÜRKİYE',
    lead:'تربط CTSEG الموزعين ومعالجي الزجاج وشركات الواجهات ومصنّعي النوافذ ومشتري المشاريع بقدرات إنتاج ومعالجة مناسبة في Türkiye.',
    ctaTitle:'أنشئ طلب زجاج لأوروبا أو البلقان',
    ctaText:'شارك نوع المنتج والمقاسات والكمية والمعالجة والوجهة والموعد المطلوب لتقييم الجدوى الفنية والتجارية.'
  },
  'gulf-middle-east':{
    title:'توريد الزجاج من Türkiye للخليج والشرق الأوسط',
    metaTitle:'زجاج معماري من Türkiye للخليج والشرق الأوسط | CTSEG',
    description:'توريد زجاج معماري وزجاج واجهات ومقسى ومصفح وLow-E وتحكم شمسي وIGU لمشاريع الخليج والشرق الأوسط.',
    eyebrow:'الخليج والشرق الأوسط · زجاج المشاريع',
    lead:'تنسق CTSEG قدرات الإنتاج والمعالجة المناسبة في Türkiye لفرق الواجهات والبناء والتصميم الداخلي والمشاريع في المنطقة.',
    ctaTitle:'أنشئ طلباً لمشروع في الخليج أو الشرق الأوسط',
    ctaText:'أرسل glass schedule أو BOQ أو المواصفات الفنية أو قائمة القطع لتنظيم متطلبات الإنتاج والتسعير التجاري.'
  },
  'global-project-sourcing':{
    title:'توريد عالمي للزجاج المعماري وزجاج المشاريع',
    metaTitle:'توريد عالمي للزجاج المعماري من Türkiye | CTSEG',
    description:'توريد فني للزجاج المعماري وزجاج الواجهات والمقسى والمصفح وLow-E وIGU والزجاج المعالج من Türkiye للمشاريع الدولية.',
    eyebrow:'زجاج المشاريع العالمي · توريد فني',
    lead:'تحول CTSEG مواصفات المشروع إلى طلب تجاري منظم، وتحدد قدرات الإنتاج والمعالجة المناسبة في Türkiye، ثم تنسق العروض والتسليم.',
    ctaTitle:'أنشئ طلباً عالمياً لزجاج المشاريع',
    ctaText:'أرسل المواصفات أو BOQ أو glass schedule أو cut list لتنظيمها للإنتاج والعرض التجاري.'
  }
};

export const getArGlassMarketPage=(slug:GlassMarketSlug):ArGlassMarketCopy=>({...common,...markets[slug]});
