<script setup>
const route = useRoute()
const formData = ref({
    name: '',
    email: '',
    phone: '',
    interest: '' || route.fullPath,
})

const successMessage = ref('')
const errorMessage = ref('')

async function sendToWhats() {

    let validName = formData.value.name.length > 5
    let validPhone = formData.value.phone.length > 10 // 47 99949-3409
    let validEmail = formData.value.email.length > 6 && formData.value.email.includes('@')

    if (validName && validPhone && validEmail){
        window.dataLayer.push({
            event: 'Conversion',
            pagePath: route.fullPath,
            pageTitle: route.name,
            'send_to': 'AW-11003766313/Cu4lCP7tmIAYEKnMgP8o',
        });
        const text = `Olá, me chamo *${formData.value.name}*, estou no seu site e gostaria de falar sobre seus serviços
        - meus dados para contato são: Telefone: *${formData.value.phone}* | e-mail: *${formData.value.email}*`
        window.open(encodeURI(`https://wa.me/5548988654105?text=${text}`))
        await useFetch('https://en22p2mwpsrjwj.x.pipedream.net/', {
            method: 'POST',
            body: formData.value,
            key: new Date().toString()
        })
        successMessage.value = 'Mensagem enviada com sucesso!'

    } else {
        errorMessage.value = 'Você deve preencher todos os campos para continuar.'
    }

}

</script>

<template>
    <section class="max-w-4xl mx-auto py-10 px-5">
        <div class="flex md:flex-row flex-col w-full gap-10 justify-center items-center">
            <div class="flex flex-col gap-4 text-center flex-1">
                <img src="/logo-bacter-clear.png" alt="">
                <h2>Entre em contato</h2>
                <h3>Especialistas em segurança biológica</h3>
                <p>Se você tem dúvidas, deseja receber uma proposta e quer saber mais sobre a BacterClear ou sobre os
                    produtos
                    que utilizamos ou os serviços que prestamos, entre em contato conosco através do formulário, você
                    será redirecionado para o WhatsApp.</p>
            </div>
            <div id="contato"
                class="w-full border-2 border-primary rounded-lg p-5 flex flex-col items-center text-center flex-1 gap-4 shadow-lg">
                <h1>Fale com um especialista</h1>
                <p>Que tal agendar agora mesmo um bate papo com o nosso time?</p>

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
                        <input v-model="formData.email" type="email" placeholder="Digite seu email" id="email"
                            name="email" class="input input-bordered flex-1 w-full" />
                    </label>
                    <label class="input-group">
                        <span class="w-32">Telefone</span>
                        <input v-model="formData.phone" type="phone" placeholder="Digite seu telefone" id="phone"
                            name="phone" class="input input-bordered flex-1 w-full" />
                    </label>
                    <button  class="btn btn-primary">
                        Solicitar contato
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>