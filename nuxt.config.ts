// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],

  app: {
    head: {
      script: [
        {
          hid: "gtm",
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WC2Z8J2');`,
          type: "text/javascript",
          defer: "true",
          async: "false",
        },
      ],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  nitro: {
    preset: "vercel",
  },

  runtimeConfig: {
    public: {
      GA4: "AW-11003766313/Cu4lCP7tmIAYEKnMgP8o",
    },
    apiSecret: {
      MONGODB_URI: process.env.DB_URL,
    },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ["@pinia/nuxt", "@swiper"],
      },
    },
  },

  modules: ["@nuxt/image"],
  compatibilityDate: "2025-01-21",
  image: {
    format: ["webp"],
  },
});
