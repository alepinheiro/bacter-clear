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
    compressPublicAssets: true,
    minify: true,
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
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

  modules: ["@nuxt/image", "nuxt-booster"],
  compatibilityDate: "2025-01-21",

  image: {
    provider: "ipx",
    ipx: {
      modifiers: {
        format: "webp",
        quality: "80",
      },
    },
    presets: {
      default: {
        modifiers: {
          format: "webp",
          quality: 80,
          loading: "lazy",
        },
      },
      thumbnail: {
        modifiers: {
          format: "webp",
          width: 100,
          height: 100,
          fit: "cover",
        },
      },
    },
  },

  booster: {
    detection: {
      performance: true,
      browserSupport: true,
    },
    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 },
      },
      timing: {
        fcp: 800,
        dcl: 1200,
      },
    },
    targetFormats: ["webp", "avif", "jpg|jpeg|png|gif"],
    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: "0%",
      asset: "0%",
    },
  },
});
