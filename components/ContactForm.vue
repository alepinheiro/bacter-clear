<script setup>
const route = useRoute()
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
        const text = `Olá, me chamo *${formData.value.name}*, estou no seu site e gostaria de falar sobre seus serviços
        - meus dados para contato são: Telefone: *${formData.value.phone}* | e-mail: *${formData.value.email}*`
        window.open(encodeURI(`https://wa.me/5548988654105?text=${text}`))
    }

}

</script>

<template>
    <section class="max-w-4xl mx-auto py-10 px-5" >
            <div class="flex md:flex-row flex-col w-full gap-10 justify-center items-center">
                <div class="flex flex-col gap-4 text-center flex-1">
                    <img src="/logo-bacter-clear.png" alt="">
                    <h2>Entre em contato</h2>
                    <h3>Especialistas em segurança biológica</h3>
                    <p>Se você tem dúvidas, deseja receber uma proposta e quer saber mais sobre a BacterClear ou sobre os produtos
                        que utilizamos ou os serviços que prestamos, entre em contato conosco através do formulário, você será redirecionado para o WhatsApp.</p>
                </div>
                <div id="contato"
                    class="w-full border-2 border-primary rounded-lg p-5 flex flex-col items-center text-center flex-1 gap-4 shadow-lg">
                    <h1>Fale com um especialista</h1>
                    <p>Que tal agendar agora mesmo um bate papo com o nosso time?</p>
                    <form class="w-full flex flex-col gap-2">

                        <label class="input-group">
                            <span class="w-32">Nome</span>
                            <input v-model="formData.name" type="text" id="name" name="name" placeholder="Digite seu nome"
                                class="input input-bordered flex-1 w-full" />
                        </label>
                        <label class="input-group">
                            <span class="w-32">Email</span>
                            <input v-model="formData.email" type="email" placeholder="Digite seu email" id="email" name="email"
                                class="input input-bordered flex-1 w-full" />
                        </label>
                        <label class="input-group">
                            <span class="w-32">Telefone</span>
                            <input v-model="formData.phone" type="phone" placeholder="Digite seu telefone" id="phone" name="phone"
                                class="input input-bordered flex-1 w-full" />
                        </label>
                        <button @click.prevent="sendToWhats" class="btn btn-primary">
                            Solicitar contato
                        </button>
                    </form>
                </div>
            </div>
        </section>
</template>