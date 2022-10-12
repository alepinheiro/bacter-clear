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
                        <input type="text" placeholder="Digite seu nome" class="input input-bordered flex-1 w-full" />
                    </label>
                    <label class="input-group">
                        <span class="w-32">Email</span>
                        <input type="text" placeholder="Digite seu email" class="input input-bordered flex-1 w-full" />
                    </label>
                    <label class="input-group">
                        <span class="w-32">Telefone</span>
                        <input type="text" placeholder="Digite seu telefone"
                            class="input input-bordered flex-1 w-full" />
                    </label>
                    <label class="input-group">
                        <span class="w-32">Interesse</span>
                        <select type="text" placeholder="Digite seu telefone"
                            class="input input-bordered flex-1 w-full">
                            <option disabled selected>Selecione o interesse</option>
                            <option>Detetização</option>
                            <option>DetetizaçãoControle Integrado de Pragas (CIP)</option>
                            <option>Desratização</option>
                            <option>Descupinização</option>
                            <option>Manejo de pombos e morcegos</option>
                            <option>Limpeza de caixa d’água</option>
                            <option>Conserto de persianas</option>
                            <option>Telas para insetos</option>
                        </select>
                    </label>
                    <button class="btn btn-primary">
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