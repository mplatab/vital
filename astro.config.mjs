// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel(),
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
  }
});