const fs = require('fs');

let c = fs.readFileSync('src/components/PageContent.astro', 'utf8');

c = c.replace(/const t = ui\[lang\];/, "const t = ui[lang] || ui['en'];");
c = c.replace(/const h = homeCopy\[lang\];/, "const h = homeCopy[lang] || homeCopy['en'];");
c = c.replace(/const gateway = tradeGateway\[lang\];/, "const gateway = tradeGateway[lang] || tradeGateway['en'];");
c = c.replace(/const copy = pageCopy\[lang\];/, "const copy = pageCopy[lang] || pageCopy['en'];");
c = c.replace(/const corporate = companyCopy\[lang\];/, "const corporate = companyCopy[lang] || companyCopy['en'];");
c = c.replace(/const editorial = editorialCopy\[lang\];/, "const editorial = editorialCopy[lang] || editorialCopy['en'];");
c = c.replace(/const completionHome = homeEnhancement\[lang\];/, "const completionHome = homeEnhancement[lang] || homeEnhancement['en'];");
c = c.replace(/const completionAbout = aboutEnhancement\[lang\];/, "const completionAbout = aboutEnhancement[lang] || aboutEnhancement['en'];");
c = c.replace(/const completionMarkets = marketsDetail\[lang\];/, "const completionMarkets = marketsDetail[lang] || marketsDetail['en'];");
c = c.replace(/const platform = tradePlatformCopy\[lang\];/, "const platform = tradePlatformCopy[lang] || tradePlatformCopy['en'];");
c = c.replace(/const contact = contactCopy\[lang\];/, "const contact = contactCopy[lang] || contactCopy['en'];");
c = c.replace(/const processPage = processPages\[lang\];/, "const processPage = processPages[lang] || processPages['en'];");
c = c.replace(/const scenarioPage = scenarioPages\[lang\];/, "const scenarioPage = scenarioPages[lang] || scenarioPages['en'];");

// One more place: aboutGovernance which is companyCopy[lang]
c = c.replace(/const aboutGovernance = companyCopy\[lang\];/, "const aboutGovernance = companyCopy[lang] || companyCopy['en'];");

fs.writeFileSync('src/components/PageContent.astro', c, 'utf8');
console.log('Added fallbacks to PageContent.astro');
