const checks = [
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
];

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

for (const check of checks) {
  let passed = false;
  let last = '';
  for (let attempt = 1; attempt <= 20; attempt++) {
    try {
      const response = await fetch(check.url, {
        redirect: 'manual',
        headers: { 'user-agent': 'CTSEG-Production-QA/1.0' },
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
