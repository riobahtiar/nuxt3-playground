// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
  ],
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  routeRules: {
    '/': { prerender: true },
    '/editor': { ssr: false },
  }
})
