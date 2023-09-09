<template>
  <section class="max-w-4xl mx-auto py-10 px-5">
    <div
      class="flex md:flex-row flex-col w-full gap-10 justify-center items-center"
    >
      <div class="flex flex-col gap-4 text-center flex-1">
        <img src="/logo-bacter-clear.png" alt="" />
        <h2>Entre em contato</h2>
        <h3>Especialistas em segurança biológica</h3>
        <p>
          Se você tem dúvidas, deseja receber uma proposta e quer saber mais
          sobre a BacterClear ou sobre os produtos que utilizamos ou os serviços
          que prestamos, entre em contato conosco através do formulário, você
          será redirecionado para o WhatsApp.
        </p>
      </div>
      <div
        id="contato"
        class="w-full border-2 border-primary rounded-lg p-5 flex flex-col items-center text-center flex-1 gap-4 shadow-lg"
      >
        <h1>Fale com um especialista</h1>
        <p>Que tal agendar agora mesmo um bate papo com o nosso time?</p>

        <form @submit.prevent="submitForm" class="w-full flex flex-col gap-2">
          <div
            v-for="input of formData"
            :key="input.id"
            :for="input.id"
            class="join join-vertical items-start"
          >
            <div
              :class="{
                'bg-secondary': input.status === 'idle',
                'bg-error': input.status === 'error',
                'bg-success': input.status === 'success',
              }"
              class="join join-horizontal items-center w-full"
            >
              <span class="w-32 join-item text-secondary-content">
                {{ input.label }}
              </span>
              <input
                v-model="input.data"
                :type="input.type"
                :id="input.id"
                :name="input.id"
                :placeholder="input.placeholder"
                class="input input-bordered flex-1 w-full join-item"
                :class="{
                  'input-secondary': input.status === 'idle',
                  'input-error': input.status === 'error',
                  'input-success': input.status === 'success',
                }"
                @blur="input.status = 'idle'"
              />
            </div>

            <span
              v-if="input.status === 'error' && input.errorMessage.length > 0"
              class="join-item text-error text-sm"
            >
              {{ input.errorMessage }}
            </span>
          </div>

          <button class="btn btn-primary text-primary-content">
            Solicitar contato
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const env = useRuntimeConfig();
const route = useRoute();

const formData = ref({
  name: {
    data: "",
    errorMessage: "",
    id: "nameInput",
    type: "text",
    placeholder: "Digite seu nome",
    label: "Nome",
    status: "idle",
  },
  email: {
    data: "",
    errorMessage: "",
    id: "phoneInput",
    type: "text",
    placeholder: "(00) 00000-0000",
    label: "WhatsApp",
    status: "idle",
  },
  phone: {
    data: "",
    errorMessage: "",
    id: "emailInput",
    type: "email",
    placeholder: "Digite seu email",
    label: "Email",
    status: "idle",
  },
});

function validateInputs() {
  let isValid = true;
  Object.keys(formData.value).forEach((key) => {
    if (!formData.value[key as keyof typeof formData.value].data) {
      formData.value[key as keyof typeof formData.value].errorMessage =
        "Esse campo não pode ficar vazio";
      formData.value[key as keyof typeof formData.value].status = "error";
      isValid = false;
    } else {
      formData.value[key as keyof typeof formData.value].status = "success";
    }
  });
  return isValid;
}

async function submitForm() {
  validateInputs();

  if (validateInputs()) {
    await useFetch("/api/saveContact", {
      method: "POST",
      body: {
        name: formData.value.name,
        phone: formData.value.phone,
        email: formData.value.email,
        interest: "Não especificado" || route.fullPath,
        hasSent: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    (window as any).dataLayer.push({
      event: "Conversion",
      pagePath: route.fullPath,
      pageTitle: route.name,
      send_to: env.public.GA4,
    });
    const text = `Olá, me chamo *${formData.value.name}*, estou no seu site e gostaria de falar sobre seus serviços
        - meus dados para contato são: Telefone: *${formData.value.phone}* | e-mail: *${formData.value.email}*`;
    window.open(encodeURI(`https://wa.me/5548988654105?text=${text}`));
    await useFetch("https://eoxg63q0sv13tyw.m.pipedream.net", {
      method: "POST",
      body: formData.value,
      key: new Date().toString(),
    });
  }
}
</script>
