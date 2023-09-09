<template>
  <div class="max-w-6xl flex md:flex-row flex-col w-full mx-auto py-10 gap-10">
    <div class="flex flex-col gap-5 flex-1 w-full px-5 justify-between">
      <h1>Entre em contato</h1>
      <p>
        Se você tem dúvidas, deseja receber uma proposta e quer saber mais sobre
        a BacterClear ou sobre os produtos que utilizamos ou os serviços que
        prestamos, entre em contato conosco através do formulário, você será
        redirecionado para o WhatsApp.
      </p>
      <div class="flex flex-col gap-5">
        <ContactForm />
      </div>
    </div>
    <div div class="flex flex-col gap-5 flex-1 w-full px-5">
      <h1>Canais de contato</h1>
      <p>
        Entre em contato conosco através de um de nossos canais de atendimento:
      </p>
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

<script setup lang="ts">

import VueScrollTo from "vue-scrollto";

const env = useRuntimeConfig();
const route = useRoute();

useHead({
  title: "Contato",
});

const formData = ref({
  name: "",
  email: "",
  phone: "",
  interest: "" || null,
});

onMounted(() => {
  if (process.client) {
    (window as any).dataLayer.push({
      event: "Pageview",
      pagePath: route.fullPath,
      pageTitle: route.name,
      send_to: env.public.GA4,
    });
  }
  VueScrollTo.scrollTo("#__nuxt", 300, {
    offset: 0,
  });
});
</script>
