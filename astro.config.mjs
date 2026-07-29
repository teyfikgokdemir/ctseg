import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ctseg.com.tr',
  integrations: [sitemap({
    filter: (page) => page !== 'https://ctseg.com.tr/404/'
  })],
  trailingSlash: 'always'
});
