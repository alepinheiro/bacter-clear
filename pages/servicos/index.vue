<script setup lang="ts">

import VueScrollTo from 'vue-scrollto'

const route = useRoute()
const services = useServices()

if (route.path === '/servicos') {
    await navigateTo({ path: '/servicos/' })
}

useHead({
    title: 'Serviços',
})

onMounted(() => {
    if (process.client){
        window.dataLayer.push({
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
    <section class="bg-zinc-100 py-10">
        <div class="max-w-6xl mx-auto flex flex-col items-center gap-5 px-5">
            <h2 class="text-center">
                Especialistas em <br>
                controle de pragas e desinfecção
            </h2>
            <div class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-5">
                <article v-for="item in services"
                    class="bg-white rounded-xl shadow-slate-300 shadow-lg overflow-clip p-5 flex flex-col gap-4 text-center flex-grow justify-between">
                    <img :src='item.imageURL' class="rounded-md object-cover w-full h-52"
                        :alt='`Serviço de ${item.title}`' />
                    <h3>{{item.title}}</h3>
                    <p>{{item.intro}}</p>
                    <NuxtLink :to="`${item.link}`" class="btn btn-primary ">
                        Ver mais
                    </NuxtLink>
                </article>
            </div>
        </div>
    </section>
</template>