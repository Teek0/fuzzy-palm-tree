import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://contador-santiago.netlify.app',
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ],
  output: 'static'
});
