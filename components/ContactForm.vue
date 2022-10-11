<template>
    <section class="max-w-4xl mx-auto py-10 px-5" >
            <div class="flex md:flex-row flex-col w-full gap-10 justify-center items-center">
                <div class="flex flex-col gap-4 text-center flex-1">
                    <img src="/logo-bacter-clear.png" alt="">
                    <h2>Entre em contato</h2>
                    <h3>Especialistas em segurança biológica</h3>
                    <p>Nosso método permite a desinfecção de ambientes de forma rápida, limpa e segura.
                        <br>
                        Utilizamos a técnica de <b>névoa seca,</b> uma tecnologia que higieniza todos os cantos do ambiente, isso tudo com um produto atóxico e que
                        <b>garantimos a desinfecção por mais de 21 dias.</b></p>
                </div>
                <div id="contato"
                    class="w-full border-2 border-primary rounded-lg p-5 flex flex-col items-center text-center flex-1 gap-4 shadow-lg">
                    <h1>Fale com um especialista</h1>
                    <p>Que tal agendar agora mesmo um bate papo com o nosso time?</p>
                    <form class="w-full flex flex-col gap-2">

                        <label class="input-group">
                            <span class="w-32">Nome</span>
                            <input type="text" placeholder="Digite seu nome"
                                class="input input-bordered flex-1 w-full" />
                        </label>
                        <label class="input-group">
                            <span class="w-32">Email</span>
                            <input type="text" placeholder="Digite seu email"
                                class="input input-bordered flex-1 w-full" />
                        </label>
                        <label class="input-group">
                            <span class="w-32">Telefone</span>
                            <input type="text" placeholder="Digite seu telefone"
                                class="input input-bordered flex-1 w-full" />
                        </label>
                        <button class="btn btn-primary">
                            Solicitar contato
                        </button>
                    </form>
                </div>
            </div>
        </section>
</template>