<script setup lang="ts">
import VueScrollTo from 'vue-scrollto'

import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'

const services = useServices()

onMounted(() => {
    VueScrollTo.scrollTo('#__nuxt', 300, {
        offset: 0,
    })
})

</script>

<template>
    <div>
        <section class="block w-full shadow-lg">
            <div class="relative h-full">
                <div class=" flex-1 z-0">
                    <ClientOnly>
                        <Swiper :slides-per-view="1" :centered-slides="true" :auto-height="false" :autoplay="(true as any)"
                            :modules="[Autoplay]">
                            <SwiperSlide>
                                <img src='/slide-01.jpg' width="600" height="400" class="w-full object-cover h-96"
                                    alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='/slide-02.jpg' width="600" height="400" class="w-full object-cover h-96"
                                    alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='/slide-03.jpeg' width="600" height="400" class="w-full object-cover h-96"
                                    alt='' />
                            </SwiperSlide>
                        </Swiper>
                    </ClientOnly>

                </div>
                <div class="absolute -bottom-40 md:-bottom-10 w-full z-10">
                    <div class="mx-auto p-5 rounded-md flex flex-col items-center gap-5 w-4/5  bg-white/50 shadow-lg text-center"
                        style="backdrop-filter: blur(20px);">
                        <h1>Serviços de controle de pragas, higienização e sanitização</h1>
                        <p>Atuando em toda Grande Florianópolis e Região</p>
                        <button class="btn btn-primary ">solicitar orçamento</button>
                    </div>

                </div>

            </div>
        </section>
        <section class="bg-zinc-100 pt-56 pb-10 md:pt-20">
            <div class="max-w-6xl mx-auto flex flex-col items-center gap-5 ">
                <h2 class="text-center px-5">
                    Especialistas em <br>
                    controle de pragas e desinfecção
                </h2>
                <div class="w-full" id="cards">
                    <ClientOnly>
                        <Swiper class="h-full" :space-between="20" :loop="true" :autoheight="false" :breakpoints="{
                        // when window width is >= 480px
                        480: {
                        slidesPerView: 1,
                        spaceBetween: 30
                        },
                        // when window width is >= 640px
                        768: {
                        slidesPerView: 3,
                        spaceBetween: 40
                        }}" :autoplay="{
                          delay: 5000,
                        } as any" :modules="[Autoplay, Pagination]" :pagination="{ clickable: true, } as any">
                            <SwiperSlide v-for="item in services"
                                class="bg-white rounded-xl shadow-slate-300 shadow-lg overflow-clip p-5 flex flex-col gap-4 text-center flex-grow justify-between">
                                <img :src='item.imageURL' class="rounded-md object-cover w-full h-52"
                                    :alt='`Serviço de ${item.title}`' />
                                <h3>{{item.title}}</h3>
                                <p>{{item.intro}}</p>
                                <NuxtLink :to="`/servicos/${item.link}`" class="btn btn-primary">Ver mais</NuxtLink>
                            </SwiperSlide>

                        </Swiper>
                    </ClientOnly>
                </div>
            </div>
        </section>
        <section class="max-w-4xl mx-auto py-10 px-5">
            <div class="flex md:flex-row flex-col w-full gap-10 justify-center items-center">
                <div class="flex flex-col gap-4 text-center flex-1">
                    <img src="/logo-bacter-clear.png" alt="">
                    <h2>BatcerClear</h2>
                    <h3>Especialistas em segurança biológica</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper felis, eu est turpis tortor quis
                        mauris. Bibendum enim molestie nulla netus tellus. Pharetra turpis adipiscing sapien habitant.
                        Justo, commodo amet cursus tristique et vitae vitae cursus.</p>
                </div>
                <div
                    class="w-full border-2 border-primary rounded-lg p-5 flex flex-col items-center text-center flex-1 gap-4 shadow-lg">
                    <h1>Fale com um especialista</h1>
                    <p>Que tal agendar agora mesmo um bate papo com o nosso time?</p>
                    <form class="w-full flex flex-col gap-2">

                        <label class="input-group">
                            <span class="w-32">Nome</span>
                            <input type="text" placeholder="Digite seu nome"
                                class="input input-bordered flex-1 w-full" />
                        </label>
                        <label class="input-group">
                            <span class="w-32">Email</span>
                            <input type="text" placeholder="Digite seu email"
                                class="input input-bordered flex-1 w-full" />
                        </label>
                        <label class="input-group">
                            <span class="w-32">Telefone</span>
                            <input type="text" placeholder="Digite seu telefone"
                                class="input input-bordered flex-1 w-full" />
                        </label>
                        <button class="btn btn-primary">
                            Solicitar contato
                        </button>
                    </form>
                </div>
            </div>
        </section>
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

#cards .swiper-horizontal>.swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
    bottom: -5px;
}
</style>