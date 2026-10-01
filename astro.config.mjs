import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.leatamasiloniu.com',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      // match the site's own links and canonical tags, which have no trailing slash
      serialize: (item) => ({ ...item, url: item.url.replace(/(?<!\.com)\/$/, '') }),
    }),
  ],
});
