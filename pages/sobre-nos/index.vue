<script setup lang="ts">
import { Autoplay } from 'swiper'
import { Icon } from '@iconify/vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import VueScrollTo from 'vue-scrollto'

import 'swiper/css'
import 'swiper/css/pagination'

const route = useRoute()

useHead({
    title: 'Sobre nós',
})

function scrollTo(id: string) {
    VueScrollTo.scrollTo(id, 300, {
        offset: -100,
    })
}

onMounted(() => {
    if (process.client){
        (window as any).dataLayer.push({
            event: 'Pageview',
            pagePath: route.fullPath,
            pageTitle: route.name
        });
    }
    VueScrollTo.scrollTo('#__nuxt', 300, {
        offset: 0,
    })
})
</script>

<template>
    <div class="flex flex-col gap-10">
        <section class="max-w-6xl mx-auto w-full">

            <div class="flex flex-col-reverse md:flex-row py-10 gap-5 px-5">

                <div class="flex flex-col md:w-1/2 gap-5 text-center md:text-left">
                    <div>
                        <h2>Conheça mais</h2>
                        <h1>sobre a Bacter Clear</h1>
                    </div>
                    <p>
                        A Bacter clear foi fundada em 2004 e está instalada na cidade de Florianópolis/SC.
                        Atuando no mercado catarinense, na região da Grande Florianópolis, busca sempre soluções
                        inovadoras
                        para oferecer atendimento rápido, profissional e personalizado para sua residência e/ou ambiente
                        de
                        trabalho.
                        <br><br>
                        Dispondo de tecnologias específicas para cada caso de infestação, conta com equipe de
                        profissionais
                        treinados, que utilizam métodos eficazes e seguros no combate de todos os tipos de pragas.
                    </p>
                    <NuxtLink to="#contato" @click="scrollTo('#contato')" class="btn btn-primary ">
                        solicitar orçamento
                    </NuxtLink>
                </div>
                <div class="md:w-1/2">
                    <ClientOnly>
                        <Swiper class="md:h-full h-96  w-auto rounded-lg" :slides-per-view="1" :centered-slides="true"
                            :auto-height="false" :autoplay="(true as any)" :modules="[Autoplay]">
                            <SwiperSlide>
                                <img src='/slide-01.jpg' class=" object-cover h-full" alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='/slide-02.jpg' class=" object-cover h-full" alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='/slide-03.jpeg' class=" object-cover h-full" alt='' />
                            </SwiperSlide>
                        </Swiper>
                    </ClientOnly>
                </div>
            </div>

        </section>
        <section class="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-5 px-5">
            <div class="w-full">
                <iframe class="w-full h-96 md:h-full rounded-lg" src="https://www.youtube.com/embed/E2aWVdqiM-g" title="Conheça a Bacter Clear"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
            <div class="flex flex-col gap-5 w-full">
                <div>
                    <h2>Conheça mais</h2>
                    <h1>sobre a Bacter Clear</h1>
                </div>
                <p>
                    Buscando alternativas para atender as necessidades existentes no mercado, a Bacter não mediu
                    esforços para desenvolver um produto capaz de fazer uma Desinfecção por Névoa, tendo como
                    princípio ativo o Quartenário de Amônio.
                    <br><br>
                    Conforme informado pela Anvisa, através da
                    Nota Técnica Nº 26/2020, “a pandemia do Covid-19 vem causando aumento dos casos de pessoas infectadas,
                    devida à facilidade de transmissão do vírus.
                    <br><br>
                    Dentre os produtos listados nesta Nota, para a
                    desinfecção de superfícies e objetos, consta o “Quartenário de Amônio, amplamente empregado nas
                    indústrias de cosméticos, farmacêuticas e Domissanitário, tanto em produtos domésticos com
                    propriedades desinfetantes e cosméticas, quanto em medicamentos.”
                </p>
                <NuxtLink to="#contato" @click="scrollTo('#contato')" class="btn btn-primary ">
                    solicitar orçamento
                </NuxtLink>
            </div>
        </section>
        <section class="bg-zinc-100 py-10">
            <div class="max-w-6xl flex flex-col md:flex-row gap-5 mx-auto">
                <div class="bg-white flex-1 p-5 flex flex-col items-center text-center gap-2 border-yellow-600 border-2 rounded shadow-lg">
                    <div class="h-24 w-24">
                        <Icon icon="charm:rocket"  height="100%"  :inline="true"  />
                    </div>
                    <h2>Missão</h2>
                    <p>
                        Ter um relacionamento transparente com os clientes, agregando valores e contribuindo para
                        entregar o melhor atendimento com agilidade, trazendo a melhor tecnologia e satisfação.
                    </p>
                </div>
                <div class="bg-white flex-1 p-5 flex flex-col items-center text-center gap-2 border-yellow-600 border-2 rounded shadow-lg">
                    <div class="h-24 w-24">
                        <Icon icon="charm:eye"  height="100%"  :inline="true"  />
                    </div>
                    <h2>Visão</h2>
                    <p>
                        Ser referência na área de atuação, melhorando e aprimorando novos conhecimentos,
                        buscando maior qualidade de serviço.
                    </p>
                </div>
                <div class="bg-white flex-1 p-5 flex flex-col items-center text-center gap-2 border-yellow-600 border-2 rounded shadow-lg">
                    <div class="h-24 w-24">
                        <Icon icon="charm:shield-tick"  height="100%"  :inline="true"  />
                    </div>
                    <h2>Valores</h2>
                    <p>
                        Valorização das pessoas, priorizando a ética, transparência e confiança, com foco na
                        responsabilidade socio ambiental.
                    </p>
                </div>
            </div>
        </section>
        <ContactForm />
    </div>
</template>