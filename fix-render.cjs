const fs = require('fs');
let t = fs.readFileSync('src/components/PageContent.astro', 'utf8');

const oldStart = "{key === 'trade-corridor' && record.id && (() => {";

const idx = t.indexOf(oldStart);
if (idx === -1) {
  console.log('Could not find trade-corridor block');
  process.exit(1);
}

const newBlock = `{key === 'trade-corridor' && record.id && (() => {
    const corridor = tradeCorridors.find(c => c.id === record.id);
    if (!corridor) return null;
    
    const dict = corridorLocales[lang] || corridorLocales.en;
    const countryName = getCountryName(corridor.id, lang);
    const tHead = dict.sourcing.replace('{country}', countryName);
    const tLead = dict.sourcingLead.replace('{country}', countryName);
    const tReady = dict.ready.replace('{country}', countryName);
    const tCta = dict.cta.replace('{country}', countryName);
    
    return (
      <>
        <PageHero lang={lang} eyebrow={\`Global Trade \${lang.toUpperCase()}\`} title={tHead} lead={tLead} />
        
        <section class="section trade-paths-section">
          <div class="container content-grid">
            <div class="prose">
              <div class="section-head">
                <h2>{tHead}</h2>
                <p>{tLead}</p>
              </div>
              
              <div class="content-block" style="margin-top: 40px;">
                <h3 style="font-size: 1.5rem; margin-bottom: 20px;">{dict.industries}</h3>
                <ul class="check-list" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                  {corridor.keyIndustries.map(ind => <li>{ind}</li>)}
                </ul>
              </div>
            </div>
            
            <aside class="side-panel">
              <div class="company-card" style="margin-bottom: 20px;">
                <span class="company-badge">{dict.logistics}</span>
                <div class="company-card-header">
                  <h3>{corridor.logistics.mode}</h3>
                </div>
                <p style="font-size: 0.9rem; margin-top: 10px;">{corridor.logistics.description}</p>
                <dl class="company-meta-dl" style="margin-top: 14px;">
                  <div><dt>{dict.transitTime}</dt><dd><strong>{corridor.logistics.transitTime}</strong></dd></div>
                </dl>
              </div>
              
              <div class="company-card">
                <span class="company-badge">{dict.compliance}</span>
                <p style="font-size: 0.9rem; line-height: 1.5; margin: 10px 0 0;">{corridor.compliance}</p>
              </div>
            </aside>
          </div>
        </section>
        
        <section class="section answer-section">
          <div class="container">
            <div class="section-head">
              <h2>{tReady}</h2>
              <p>{tCta}</p>
            </div>
            <div class="actions">
              <a class="button" href={sectionHref('contact')}>{contactCopy[lang as Locale]?.contactDesk || 'Contact our Trade Desk'}</a>
            </div>
          </div>
        </section>
      </>
    );
  })()}
`;

t = t.substring(0, idx) + newBlock;
fs.writeFileSync('src/components/PageContent.astro', t);
console.log('Fixed rendering block in PageContent.astro');
