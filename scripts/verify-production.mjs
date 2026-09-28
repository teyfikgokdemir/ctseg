const redirectChecks = [
  {
    url: 'https://ctseg.com.tr/medical/reflex-disposable-gloves/',
    expected: 'https://ctseg.com.tr/tr/ticari-urunler/',
    label: 'retired REFLEX redirect',
  },
  {
    url: 'https://ctseg.com.tr/en/medical/reflex-disposable-gloves/',
    expected: 'https://ctseg.com.tr/en/trade-products/',
    label: 'retired English REFLEX redirect',
  },
  {
    url: 'https://ctseg.com.tr/en/terms/',
    expected: 'https://ctseg.com.tr/en/terms-of-use/',
    label: 'legacy English terms redirect',
  },
];

const pageChecks = [
  {
    url: 'https://ctseg.com.tr/',
    label: 'Turkish hub',
    verify: (response, body) =>
      response.ok &&
      body.includes('<html lang="tr"') &&
      body.includes('https://ctseg.com.tr/en/') &&
      body.includes('hreflang="fa"') &&
      body.includes('hreflang="sr"') &&
      !/reflex/i.test(body),
  },
  {
    url: 'https://ctseg.com.tr/fa/',
    label: 'Persian hub',
    verify: (response, body) =>
      response.ok &&
      body.includes('<html lang="fa" dir="rtl"') &&
      body.includes('hreflang="tr"') &&
      body.includes('hreflang="en"') &&
      body.includes('/fa/privacy/') &&
      !/reflex/i.test(body),
  },
  {
    url: 'https://ctseg.com.tr/ru/',
    label: 'Russian hub',
    verify: (response, body) =>
      response.ok &&
      body.includes('<html lang="ru" dir="ltr"') &&
      /[А-Яа-яЁё]/.test(body) &&
      body.includes('КОМПЛАЕНС') &&
      !body.includes('Accueil'),
  },
  {
    url: 'https://ctseg.com.tr/zh/',
    label: 'Chinese market-entry hub',
    verify: (response, body) =>
      response.ok &&
      body.includes('<html lang="zh"') &&
      body.includes('hreflang="vi"') &&
      body.includes('hreflang="uk"') &&
      !/reflex/i.test(body),
  },
  {
    url: 'https://ctseg.com.tr/vi/',
    label: 'Vietnam market-entry hub',
    verify: (response, body) =>
      response.ok &&
      body.includes('<html lang="vi"') &&
      body.includes('hreflang="zh"') &&
      body.includes('hreflang="ro"') &&
      !/reflex/i.test(body),
  },
];

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

for (const check of redirectChecks) {
  let passed = false;
  let last = '';
  for (let attempt = 1; attempt <= 20; attempt++) {
    try {
      const response = await fetch(check.url, {
        redirect: 'manual',
        headers: { 'user-agent': 'CTSEG-Production-QA/2.0', 'cache-control': 'no-cache' },
      });
      const location = response.headers.get('location');
      last = `status=${response.status} location=${location}`;
      const absolute = location ? new URL(location, check.url).toString() : '';
      if ([301, 302, 307, 308].includes(response.status) && absolute === check.expected) {
        console.log(`PASS: ${check.label} (attempt ${attempt})`);
        passed = true;
        break;
      }
    } catch (error) {
      last = String(error);
    }
    await wait(15000);
  }
  if (!passed) throw new Error(`Production verification failed: ${check.label}. Last response: ${last}`);
}

for (const check of pageChecks) {
  let passed = false;
  let last = '';
  for (let attempt = 1; attempt <= 20; attempt++) {
    try {
      const response = await fetch(check.url, {
        redirect: 'follow',
        headers: { 'user-agent': 'CTSEG-Production-QA/2.0', 'cache-control': 'no-cache' },
      });
      const body = await response.text();
      last = `status=${response.status} url=${response.url} body=${body.slice(0,180).replace(/\s+/g,' ')}`;
      if (check.verify(response, body)) {
        console.log(`PASS: ${check.label} (attempt ${attempt})`);
        passed = true;
        break;
      }
    } catch (error) {
      last = String(error);
    }
    await wait(15000);
  }
  if (!passed) throw new Error(`Production verification failed: ${check.label}. Last response: ${last}`);
}

{
  const response = await fetch('https://ctseg.com.tr/api/contact', {
    method: 'GET',
    headers: { 'user-agent': 'CTSEG-Production-QA/2.0', origin: 'https://ctseg.com.tr' },
  });
  if (response.status !== 405) throw new Error(`Production verification failed: contact API GET contract. status=${response.status}`);
  console.log('PASS: contact API method contract');
}

{
  const response = await fetch('https://ctseg.com.tr/api/contact', {
    method: 'POST',
    headers: {
      'user-agent': 'CTSEG-Production-QA/2.0',
      origin: 'https://ctseg.com.tr',
      'content-type': 'application/json',
    },
    body: 'null',
  });
  if (response.status !== 400) throw new Error(`Production verification failed: contact API payload contract. status=${response.status}`);
  console.log('PASS: contact API null-payload validation');
}
