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
    <section class="service-page">

        <!-- wrapper -->
        <div class="flex flex-col gap-10 px-5">

            <!-- service -->
            <div class="flex flex-col-reverse md:flex-row gap-5 items-center">
                <!-- text -->
                <div class="item-text ">
                    <div>
                        <h2>Serviços</h2>
                        <h1>{{service.title}}</h1>
                    </div>
                    <p v-html="service.fullText" />
                </div>
                <!-- img -->
                <div class=" flex-1 w-full">
                    <img :src="service.imageURL" alt="" class="w-full rounded-md">
                </div>
            </div>

            <ContactForm />
        </div>

    </section>
</template>

<style lang="scss">
.service-page {
    @apply w-full max-w-6xl py-10 mx-auto;

    .item-text {
        @apply flex flex-col flex-1 items-center text-center gap-5;

        @media screen and (min-width: 768px) {
            p {
                @apply text-left;


            }
        }
    }
}
</style>