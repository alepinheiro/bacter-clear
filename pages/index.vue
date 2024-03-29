<script setup lang="ts">
import VueScrollTo from "vue-scrollto";

import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";

const services = useServices();
const route = useRoute();

function scrollTo(id: string) {
  if (process.client) {
    (window as any).dataLayer.push({ event: "gtm.click" });
  }

  VueScrollTo.scrollTo(id, 300, {
    offset: -100,
  });
}

onMounted(() => {
  if (process.client) {
    (window as any).dataLayer.push({
      event: "Pageview",
      pagePath: route.fullPath,
      pageTitle: route.name,
    });
  }
  VueScrollTo.scrollTo("#__nuxt", 300, {
    offset: 0,
  });
});
</script>

<template>
  <div>
    <section class="block w-full shadow-lg">
      <div class="relative h-full">
        <div class="flex-1 z-0">
          <ClientOnly>
            <Swiper
              :slides-per-view="1"
              :centered-slides="true"
              :auto-height="false"
              :autoplay="(true as any)"
              :modules="[Autoplay]"
            >
              <SwiperSlide>
                <img
                  src="/slide-01.jpg"
                  width="600"
                  height="400"
                  class="w-full object-cover h-96"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/slide-02.jpg"
                  width="600"
                  height="400"
                  class="w-full object-cover h-96"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/slide-03.jpeg"
                  width="600"
                  height="400"
                  class="w-full object-cover h-96"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </ClientOnly>
        </div>
        <div class="absolute -bottom-40 md:-bottom-10 w-full z-10">
          <div
            class="mx-auto p-5 rounded-md flex flex-col items-center gap-5 w-4/5 bg-white/50 shadow-lg text-center"
            style="backdrop-filter: blur(20px)"
          >
            <h1>Serviços de controle de pragas, higienização e sanitização</h1>
            <p>Atuando em toda Grande Florianópolis e Região</p>
            <NuxtLink
              to="#contato"
              @click="scrollTo('#contato')"
              class="btn btn-primary"
            >
              solicitar orçamento
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-zinc-100 pt-56 pb-10 md:pt-20">
      <div class="max-w-6xl mx-auto flex flex-col items-center gap-5">
        <h2 class="text-center px-5">
          Especialistas em <br />
          controle de pragas e desinfecção
        </h2>
        <div class="w-full" id="cards">
          <ClientOnly>
            <Swiper
              class="h-full"
              :space-between="20"
              :loop="true"
              :autoheight="false"
              :breakpoints="{
                // when window width is >= 480px
                480: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                // when window width is >= 640px
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }"
              :autoplay="{
                          delay: 5000,
                        } as any"
              :modules="[Autoplay, Pagination]"
              :pagination="{ clickable: true, } as any"
            >
              <SwiperSlide
                v-for="item in services"
                class="bg-white rounded-xl shadow-slate-300 shadow-lg overflow-clip p-5 flex flex-col gap-4 text-center flex-grow justify-between"
              >
                <img
                  :src="item.imageURL"
                  class="rounded-md object-cover w-full h-52"
                  :alt="`Serviço de ${item.title}`"
                />
                <h3>{{ item.title }}</h3>
                <p>{{ item.intro }}</p>
                <NuxtLink :to="`/servicos/${item.link}`" class="btn btn-primary"
                  >Ver mais</NuxtLink
                >
              </SwiperSlide>
            </Swiper>
          </ClientOnly>
        </div>
      </div>
    </section>
    <ContactForm />
  </div>
</template>

<style>
#cards .swiper {
  @apply p-5;
}

#cards .swiper-slide {
  height: auto !important;
  @apply px-5;
}

#cards .swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: -5px;
}
</style>
