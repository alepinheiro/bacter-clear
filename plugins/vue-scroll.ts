import VueScrollTo from "vue-scrollto";

export default defineNuxtPlugin((nuxtApp) => {
  return nuxtApp.vueApp.use(VueScrollTo);
});
