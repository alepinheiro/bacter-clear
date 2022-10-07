<script setup lang="ts">
import VueScrollTo from 'vue-scrollto'
const services = useServices()
const route = useRoute()

const service = services.find(el => el.link == route.params.id)


onMounted(() => {
    VueScrollTo.scrollTo('#__nuxt', 300, {
        offset: 0,
    })
})
</script>
<template>
    <section class="w-full max-w-6xl py-10 mx-auto">

        <div class="flex flex-col gap-5 px-5">
            <div class="flex flex-col-reverse md:flex-row gap-5 items-center">
                <div class="flex flex-col flex-1 items-center text-center gap-5" >
                    <div>
                        <h2>Serviços</h2>
                        <h1>{{service.title}}</h1>
                    </div>
                    <p>{{service.fullText}}</p>
                </div>
                <div class=" flex-1 w-full">
                    <img :src="service.imageURL" alt="" class="w-full rounded-md">
                </div>
            </div>
            <div class="bg-zinc-200">
                <div class="w-full border-2 border-primary rounded-lg p-5 flex flex-col items-center text-center flex-1 gap-4 shadow-lg">
                    <h1>Fale com um especialista</h1>
                    <p>Que tal agendar agora mesmo um bate papo com o nosso time?</p>
                    <form class="w-full flex flex-col gap-2">

                        <label class="input-group">
                            <span class="w-32">Nome</span>
                            <input type="text" placeholder="Digite seu nome" class="input input-bordered flex-1 w-full" />
                        </label>
                        <label class="input-group">
                            <span class="w-32">Email</span>
                            <input type="text" placeholder="Digite seu email" class="input input-bordered flex-1 w-full" />
                        </label>
                        <label class="input-group">
                            <span class="w-32">Telefone</span>
                            <input type="text" placeholder="Digite seu telefone" class="input input-bordered flex-1 w-full" />
                        </label>
                        <button class="btn btn-primary">
                            Solicitar contato
                        </button>
                    </form>
                </div>
            </div>
        </div>

    </section>
</template>