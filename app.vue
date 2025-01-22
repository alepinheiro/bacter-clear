<template>
  <div class="flex flex-col">
    <!-- <ClientOnly>
      <component is="noscript">
        <iframe
          :src="`https://www.googletagmanager.com/ns.html?id=${GOOGLE_TM_ID}`"
          height="0"
          width="0"
          style="display: none; visibility: hidden"
        ></iframe>
      </component>
    </ClientOnly> -->
    <header
      class="sticky top-0 border-b-2 border-b-primary shadow-lg bg-base-100 z-30"
    >
      <div class="navbar justify-between max-w-6xl mx-auto">
        <div class="navbar-start">
          <NuxtLink to="/" class="normal-case text-xl w-48">
            <NuxtImg
              src="/logo-bacter-clear.png"
              alt=""
              class="object-cover w-full"
              srcset=""
            />
          </NuxtLink>
        </div>
        <div class="navbar-center md:hidden">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NuxtLink to="/servicos/"> Serviços </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/sobre-nos/"> Sobre Nós </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contato/"> Contato </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-end hidden md:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <NuxtLink to="/servicos/"> Serviços </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/sobre-nos/"> Sobre Nós </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contato/"> Contato </NuxtLink>
            </li>
            <li>
              <a href="https://wa.me/5548988654105">
                <div>
                  <Icon icon="akar-icons:whatsapp-fill" />
                </div>
                (48) 98865-4105
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <NuxtPage />
    <footer class="bg-slate-900 py-10">
      <div class="w-full max-w-4xl flex flex-col text-white mx-auto gap-10 ite">
        <div
          class="w-2/3 mx-auto flex flex-col md:flex-row gap-10 items-center"
        >
          <div class="text-center flex flex-col items-center gap-2 flex-1">
            <p>Contato:</p>
            <p>Orçamentos - Whatsapp:</p>
            <p>(48) 98865-4105</p>
            <p>Orçamentos - email:</p>
            <p>bacterclear@gmail.com</p>
          </div>

          <div class="flex flex-col gap-4 flex-1 items-center">
            <NuxtLink to="/servicos/"> Serviços </NuxtLink>
            <NuxtLink to="/sobre-nos/"> Sobre Nós </NuxtLink>
            <NuxtLink to="/contato/"> Contato </NuxtLink>
          </div>
        </div>
        <div class="flex flex-col mx-auto items-center gap-4">
          <p class="text-center">SIGA NOSSAS REDES</p>
          <div class="flex md:flex-row flex-col items-center gap-5">
            <a
              href="https://instagram.com/bacterclearoficial"
              class="flex flex-row gap-2 items-center"
            >
              <div>
                <Icon icon="akar-icons:instagram-fill" />
              </div>
              <p>bacterclearoficial</p>
            </a>
            <a
              href="https://facebook.com/bacterclearoficial"
              class="flex flex-row gap-2 items-center"
            >
              <div>
                <Icon icon="akar-icons:facebook-fill" />
              </div>
              <p>bacterclearoficial</p>
            </a>
            <a
              href="https://youtube.com/bacterclearoficial"
              class="flex flex-row gap-2 items-center"
            >
              <div>
                <Icon icon="ant-design:youtube-outlined" />
              </div>
              <p>bacterclearoficial</p>
            </a>
          </div>
        </div>
        <div
          class="flex flex-col md:flex-row gap-2 text-xs text-center mx-auto"
        >
          <p>Copyright © 2022 BACTERCLEAR</p>
          <p>Política de privacidade</p>
          <p>Desenvolvido por AlePinheiro</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
const GOOGLE_TM_ID = "GTM-WC2Z8J2";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - BacterClear`
      : "BacterClear - Especialistas em controle de pragas e desinfecção";
  },
});
</script>
