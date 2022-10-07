<script setup lang="ts">
const services = useServices()
</script>
<template>
    <section class="bg-zinc-300 py-10">
            <div class="max-w-6xl mx-auto flex flex-col items-center gap-5 px-5">
                <h2 class="text-center">
                    Especialistas em <br>
                    controle de pragas e desinfecção
                </h2>
                <div class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div v-for="item in services" class="bg-white rounded-xl shadow-slate-300 shadow-lg overflow-clip p-5 flex flex-col gap-4 text-center flex-grow justify-between">
                                <img :src='item.imageURL' width="300" height="200" class="rounded-md object-cover w-full" alt='' />
                                <h3>{{item.title}}</h3>
                                <p>{{item.intro}}</p>
                                <NuxtLink :to="`servicos/${item.link}`" class="btn btn-primary">
                                    Ver mais
                                </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
</template>