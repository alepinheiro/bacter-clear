<template>
  <div class="flex flex-col">
    <header class="sticky top-0 border-b-2 border-b-primary shadow-lg bg-base-100 z-30">
      <div class="navbar justify-between max-w-6xl mx-auto ">
        <div class="navbar-start">
          <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">
            <img src="/logo-bacter-clear.png" alt="" srcset="">
          </NuxtLink>
        </div>
        <div class="navbar-center md:hidden">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <NuxtLink to="/servicos/">
                  Serviços
                </NuxtLink>
              </li>
              <li><a>Sobre Nós</a></li>
              <li><a>Contato</a></li>

            </ul>
          </div>
        </div>
        <div class="navbar-end hidden md:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <NuxtLink to="/servicos/">
                Serviços
              </NuxtLink>
            </li>
            <li><a>Sobre Nós</a></li>
            <li><a>Contato</a></li>
            <li><a>🔎 47 99999-9999</a></li>
          </ul>
        </div>

      </div>
    </header>
    <NuxtPage />
    <footer class="bg-slate-900 py-10">
      <div class="w-full max-w-4xl flex flex-col text-white mx-auto gap-10">
        <div class="w-2/3 mx-auto flex flex-col md:flex-row  gap-10 items-center">
          <div class="text-center flex flex-col items-center gap-2 flex-1">
            <p>Contato:</p>
            <p>Orçamentos - Whatsapp:</p>
            <p>48 9999-9999</p>
            <p>Orçamentos - email:</p>
            <p>bacterclear@gmail.com</p>
            <p>SIGA NOSSAS REDES</p>
            <div class="flex flex-row">
              <p>🔎</p>
              <p>🔎</p>
              <p>🔎</p>
            </div>
          </div>
          <div class="flex flex-col gap-4 flex-1">
            <button class="btn">Serviços</button>
            <button class="btn">Sobre nós</button>
            <button class="btn">Contato</button>
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-2 text-xs text-center mx-auto">
          <p>Copyright © 2022 BACTERCLEAR</p>
          <p>Política de privacidade</p>
          <p>Desenvolvido por AlePinheiro</p>
        </div>
      </div>
    </footer>
  </div>
</template>
