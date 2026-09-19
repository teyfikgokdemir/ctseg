import { parseIntent } from './trade-os/lib/research/intent-parser';

async function test() {
  const scenarios = [
    'L-Threonine için tedarikçi araştır',
    'İran için haftalık 100 MT Feed Grade L-Threonine arıyoruz. Önce Türkiye, sonra global.',
    'Almanya ve Fransa\'da safran ithalatçısı ve distribütörü araştır',
    'Bulgaristan\'dan İran\'a 24 ton yük için kara, deniz ve alternatif taşıma firmaları araştır',
    'iranda müşteri var 100 ton l threonine istiyor tr den bul nakliyeye de bak',
    'İran için L-Threonine araştır'
  ];

  for (let i = 0; i < scenarios.length; i++) {
    console.log('\n============================================');
    console.log('Test ' + (i + 1) + ': ' + scenarios[i]);
    console.log('============================================');
    
    const intent = await parseIntent(scenarios[i]);
    console.log('Intent:', JSON.stringify(intent, null, 2));
  }
}

test().catch(console.error);
