// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  modules: ['@nuxthq/studio'],
  compatibilityDate: '2024-07-06',
  studio: {
    enabled: true
  },
  // GitHub Pages deployment
  app: {
    baseURL: process.env.GITHUB_ACTIONS ? '/arch-mod-dev-docs/' : '/',
    buildAssetsDir: '/assets/'
  },
  // Static site generation
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  }
});
