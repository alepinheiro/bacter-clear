<script setup>
import VueScrollTo from 'vue-scrollto'

useHead({
    title: 'Contato',
})

const formData = ref({
    name: '',
    email: '',
    phone: '',
    interest: '' || null,
})

function sendToWhats() {
    if (process.client){
        window.dataLayer.push({
            event: 'Conversion',
            pagePath: route.fullPath,
            pageTitle: route.name
        });
        const text = `Olá, me chamo *${formData.value.name}* e gostaria de falar sobre *${formData.value.interest}*
    - meus dados para contato são: Telefone: *${formData.value.phone}* | e-mail: *${formData.value.email}*`
    window.open(encodeURI(`https://wa.me/5548988654105?text=${text}`))
    }

}

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
    <div class="max-w-6xl flex md:flex-row flex-col w-full mx-auto py-10 gap-10">
        <div class="flex flex-col gap-5 flex-1 w-full px-5 justify-between ">
            <h1>Entre em contato</h1>
            <p>
                Se você tem dúvidas, deseja receber uma proposta e quer saber mais sobre a BacterClear
                ou sobre os produtos que utilizamos ou os serviços que prestamos, entre em
                contato conosco através do formulário, você será redirecionado para o WhatsApp.
            </p>
            <div>
                <form class="w-full flex flex-col gap-2">

                    <label class="input-group">
                        <span class="w-32">Nome</span>
                        <input v-model="formData.name" type="text" placeholder="Digite seu nome" class="input input-bordered flex-1 w-full" />
                    </label>
                    <label class="input-group">
                        <span class="w-32">Email</span>
                        <input v-model="formData.email" type="text" placeholder="Digite seu email" class="input input-bordered flex-1 w-full" />
                    </label>
                    <label class="input-group">
                        <span class="w-32">Telefone</span>
                        <input v-model="formData.phone" type="text" placeholder="Digite seu telefone"
                            class="input input-bordered flex-1 w-full" />
                    </label>
                    <label class="input-group">
                        <span class="w-32">Interesse</span>
                        <select v-model="formData.interest" type="text" placeholder="Digite seu telefone"
                            class="input input-bordered flex-1 w-full">
                            <option disabled selected value="null">Selecione o interesse</option>
                            <option value="Detetização">Detetização</option>
                            <option value="Controle Integrado de Pragas (CIP)">Controle Integrado de Pragas (CIP)</option>
                            <option value="Desratização">Desratização</option>
                            <option value="Descupinização">Descupinização</option>
                            <option value="Manejo de pombos e morcegos">Manejo de pombos e morcegos</option>
                            <option value="Limpeza de caixa d’água">Limpeza de caixa d’água</option>
                            <option value="Conserto de persianas">Conserto de persianas</option>
                            <option value="Telas para insetos">Telas para insetos</option>
                        </select>
                    </label>
                    <button @click.prevent="sendToWhats" class="btn btn-primary">
                        Solicitar contato
                    </button>
                </form>
            </div>
        </div>
        <div div class="flex flex-col gap-5 flex-1 w-full px-5">
            <h1>
                Canais de contato
            </h1>
            <p>Entre em contato conosco através de um de nossos canais de atendimento:</p>
            <div class="flex flex-col gap-5">
                <div>
                    <h2>WhatsApp</h2>
                    <p>(48) 98865-4105</p>
                </div>
                <div>
                    <h2>E-mail</h2>
                    <p>suporte@bacterclear.com.br</p>
                    <p>bacterclearoficial@gmail.com</p>
                </div>
                <div>
                    <h2>Instagram</h2>
                    <p>bacterclearoficial</p>
                </div>
                <div>
                    <h2>Facebook</h2>
                    <p>bacterclearoficial</p>
                </div>
                <div>
                    <h2>Youtube</h2>
                    <p>bacterclearoficial</p>
                </div>

            </div>
        </div>
    </div>
</template>