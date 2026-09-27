export type TradeDirection = 'sourcing' | 'market-entry';

export type CorridorData = {
  id: string; // e.g., 'romania'
  targetCountry: string; // e.g., 'Romania'
  direction: TradeDirection;
  logistics: {
    mode: string;
    transitTime: string;
    description: string;
  };
  keyIndustries: string[];
  compliance: string;
  seoMeta: {
    title: string;
    description: string;
  };
  customCta: string;
};

export const tradeCorridors: CorridorData[] = [
  {
    id: 'romania',
    targetCountry: 'Romania',
    direction: 'sourcing',
    logistics: {
      mode: 'Road Freight (via Kapikule/Hamzabeyli)',
      transitTime: '2-4 Days',
      description: 'Direct highway access provides highly predictable and fast road freight into Bucharest and regional industrial hubs.'
    },
    keyIndustries: ['Automotive Parts', 'Construction Materials', 'Machinery & Equipment', 'Textiles'],
    compliance: 'EU Customs Union standards apply. Full ATR movement certificate integration for tariff-free industrial goods.',
    seoMeta: {
      title: 'Turkey Sourcing for Romania | Direct Manufacturer Access & Verification',
      description: 'Secure your supply chain from Turkey to Romania. Get verified Turkish manufacturers, RFQ management, and 2-4 day fast logistics integration.'
    },
    customCta: 'Connect with verified Turkish suppliers for the Romanian market'
  },
  {
    id: 'bulgaria',
    targetCountry: 'Bulgaria',
    direction: 'sourcing',
    logistics: {
      mode: 'Road Freight (Direct Border)',
      transitTime: '1-2 Days',
      description: 'Immediate cross-border trucking allows for Just-In-Time (JIT) manufacturing and rapid FMCG restocking.'
    },
    keyIndustries: ['Processed Food & FMCG', 'Metals & Steel', 'Apparel', 'Packaging'],
    compliance: 'Seamless EU compliance with rapid border clearance. Food sourcing requires strict phytosanitary and batch origin checks.',
    seoMeta: {
      title: 'Turkey Sourcing for Bulgaria | Rapid Supply Chain Solutions',
      description: 'Optimize your procurement from Turkey to Bulgaria. 1-2 day transit, factory audits, and direct manufacturer negotiation.'
    },
    customCta: 'Start sourcing from Turkey to Bulgaria today'
  },
  {
    id: 'serbia',
    targetCountry: 'Serbia',
    direction: 'sourcing',
    logistics: {
      mode: 'Road Freight',
      transitTime: '3-5 Days',
      description: 'Established transit corridor via Bulgaria allows consistent and reliable freight flow to Belgrade and Novi Sad.'
    },
    keyIndustries: ['Automotive Components', 'Textiles', 'Electronics', 'Chemicals'],
    compliance: 'Turkey-Serbia Free Trade Agreement (FTA) enables duty-free or preferential rates on thousands of tariff lines.',
    seoMeta: {
      title: 'Turkey Sourcing for Serbia | FTA Optimized Procurement',
      description: 'Leverage the Turkey-Serbia FTA. Find verified Turkish manufacturers, manage quality, and optimize landed costs.'
    },
    customCta: 'Explore duty-free sourcing opportunities in Turkey'
  },
  {
    id: 'germany',
    targetCountry: 'Germany',
    direction: 'sourcing',
    logistics: {
      mode: 'Intermodal & Road (Ro-Ro via Trieste)',
      transitTime: '5-7 Days',
      description: 'Highly robust intermodal networks (truck to ship to rail) provide eco-friendly and high-capacity freight to Munich, Stuttgart, and the Ruhr.'
    },
    keyIndustries: ['Automotive OEM', 'Heavy Machinery', 'Technical Textiles', 'Chemicals'],
    compliance: 'Strict adherence to EU directives, DIN standards, and the German Supply Chain Due Diligence Act (LkSG).',
    seoMeta: {
      title: 'Turkey Sourcing for Germany | LkSG Compliant Supply Chains',
      description: 'De-risk your procurement. Access Turkish manufacturers verified for German LkSG compliance, DIN standards, and EU Customs Union.'
    },
    customCta: 'Build a compliant, nearshore supply chain for Germany'
  },
  {
    id: 'italy',
    targetCountry: 'Italy',
    direction: 'sourcing',
    logistics: {
      mode: 'Maritime Ro-Ro (Pendik to Trieste/Bari)',
      transitTime: '4-6 Days',
      description: 'Frequent Ro-Ro vessels bypass land borders, offering highly predictable lead times to Northern Italian industrial zones.'
    },
    keyIndustries: ['Fashion & Apparel', 'Textile Yarns', 'Machinery', 'Food Ingredients'],
    compliance: 'EU Customs Union alignment. Specialized origin and quality traceability for fashion and food ingredients.',
    seoMeta: {
      title: 'Turkey Sourcing for Italy | Nearshore Manufacturing',
      description: 'Connect with premium Turkish manufacturers. 4-6 day Ro-Ro logistics, EU-compliant quality control, and direct factory negotiations.'
    },
    customCta: 'Partner with verified Turkish manufacturers for Italy'
  }
];
