<script setup lang="ts">
import VueScrollTo from "vue-scrollto";

import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";

const services = useServices();
const route = useRoute();

function scrollTo(id: string) {
  if (import.meta.client) {
    (window as any).dataLayer.push({ event: "gtm.click" });
  }

  VueScrollTo.scrollTo(id, 300, {
    offset: -100,
  });
}

onMounted(() => {
  if (import.meta.client) {
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
        <div class="flex-1 z-0 h-96 relative">
          <div class="absolute inset-0">
            <NuxtImg
              alt="Slide"
              width="600"
              placeholder
              height="400"
              format="webp"
              loading="eager"
              src="/slide-01.jpg"
              fetchpriority="high"
              class="w-full object-cover h-96"
              :sizes="'(max-width: 600px) 100vw, 600px'"
            ></NuxtImg>
          </div>
          <Swiper
            :slides-per-view="1"
            :centered-slides="true"
            :auto-height="false"
            :autoplay="true"
            :modules="[Autoplay]"
          >
            <SwiperSlide
              v-for="(item, index) in [
                '/slide-01.jpg',
                '/slide-02.jpg',
                '/slide-03.jpeg',
              ]"
              :key="item"
            >
              <NuxtImg
                :src="item"
                width="600"
                placeholder
                height="400"
                format="webp"
                :alt="'Slide ' + (index + 1)"
                class="w-full object-cover h-96"
                :loading="index === 0 ? 'eager' : 'lazy'"
                :sizes="'(max-width: 600px) 100vw, 600px'"
                :fetchpriority="index === 0 ? 'high' : 'low'"
              >
                />
              </NuxtImg>
            </SwiperSlide>
          </Swiper>
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
            :autoplay="
              {
                delay: 5000,
              } as any
            "
            :modules="[Autoplay, Pagination]"
            :pagination="{ clickable: true } as any"
          >
            <SwiperSlide
              v-for="item in services"
              class="bg-white rounded-xl shadow-slate-300 shadow-lg overflow-clip p-5 flex flex-col gap-4 text-center flex-grow justify-between"
            >
              <NuxtImg
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
