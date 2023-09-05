<script setup>
import VueScrollTo from 'vue-scrollto'
const route = useRoute()
useHead({
    title: 'Contato',
})

const formData = ref({
    name: '',
    email: '',
    phone: '',
    interest: '' || null,
})

const successMessage = ref('')
const errorMessage = ref('')

async function sendToWhats() {

let validName = formData.value.name.length > 5
let validPhone = formData.value.phone.length > 10 // 47 99949-3409
let validEmail = formData.value.email.length > 6 && formData.value.email.includes('@')

if (validName && validPhone && validEmail){
    await useFetch('/api/saveContact',{
        method: 'POST',
        body: {
            name: formData.value.name,
            phone: formData.value.phone,
            email: formData.value.email,
            interest: formData.value.interest,
            hasSent: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    })
    window.dataLayer.push({
        event: 'Conversion',
        pagePath: route.fullPath,
        pageTitle: route.name,
        'send_to': 'AW-11003766313/Cu4lCP7tmIAYEKnMgP8o',
    });
    const text = `Olá, me chamo *${formData.value.name}*, estou no seu site e gostaria de falar sobre seus serviços
    - meus dados para contato são: Telefone: *${formData.value.phone}* | e-mail: *${formData.value.email}*`
    window.open(encodeURI(`https://wa.me/5548988654105?text=${text}`))
    await useFetch('https://eoxg63q0sv13tyw.m.pipedream.net', {
        method: 'POST',
        body: formData.value,
        key: new Date().toString()
    })
    successMessage.value = 'Mensagem enviada com sucesso!'

} else {
    errorMessage.value = 'Você deve preencher todos os campos para continuar.'
}

}

onMounted(() => {
    if (process.client) {
        window.dataLayer.push({
            event: 'Pageview',
            pagePath: route.fullPath,
            pageTitle: route.name,
            'send_to': 'AW-11003766313/Cu4lCP7tmIAYEKnMgP8o',
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
            <div class="flex flex-col gap-5">
                <div v-if="successMessage" class="alert alert-success shadow-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{{successMessage}}</span>
                    </div>
                </div>
                <div v-if="errorMessage" class="alert alert-error shadow-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{{errorMessage}}</span>
                    </div>
                </div>
                <form @submit.prevent="sendToWhats" class="w-full flex flex-col gap-2">

                    <label class="input-group">
                        <span class="w-32">Nome</span>
                        <input v-model="formData.name" type="text" id="name" name="name" placeholder="Digite seu nome"
                            class="input input-bordered flex-1 w-full" />
                    </label>
                    <label class="input-group">
                        <span class="w-32">Email</span>
                        <input v-model="formData.email" type="email" id="email" name="email"
                            placeholder="Digite seu email" class="input input-bordered flex-1 w-full" />
                    </label>
                    <label class="input-group">
                        <span class="w-32">Telefone</span>
                        <input v-model="formData.phone" type="phone" id="phone" name="phone"
                            placeholder="Digite seu telefone" class="input input-bordered flex-1 w-full" />
                    </label>
                    <label class="input-group">
                        <span class="w-32">Interesse</span>
                        <select v-model="formData.interest" type="text" placeholder="Digite seu telefone"
                            class="input input-bordered flex-1 w-full">
                            <option disabled selected value="null">Selecione o interesse</option>
                            <option value="Detetização">Detetização</option>
                            <option value="Controle Integrado de Pragas (CIP)">Controle Integrado de Pragas (CIP)
                            </option>
                            <option value="Desratização">Desratização</option>
                            <option value="Descupinização">Descupinização</option>
                            <option value="Manejo de pombos e morcegos">Manejo de pombos e morcegos</option>
                            <option value="Limpeza de caixa d’água">Limpeza de caixa d’água</option>
                            <option value="Conserto de persianas">Conserto de persianas</option>
                            <option value="Telas para insetos">Telas para insetos</option>
                        </select>
                    </label>
                    <button  class="btn btn-primary">
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