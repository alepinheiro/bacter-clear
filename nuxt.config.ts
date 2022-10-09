// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  css: ["@/assets/css/main.css"],

  modules: ["@nuxtjs/tailwindcss"],

  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ['@pinia/nuxt', '@swiper'],
      },
    },
  },
});
