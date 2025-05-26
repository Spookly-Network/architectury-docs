// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  modules: ['@nuxthq/studio'],
  compatibilityDate: '2024-07-06',
  studio: {
    enabled: true
  }
});
