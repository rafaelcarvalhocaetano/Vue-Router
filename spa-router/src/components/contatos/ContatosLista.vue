<template>
    <div>
        <h3 class="font-weght-light">Contatos</h3>

        <div class="form-group">
            <input 
                type="text"
                class="form-control"
                placeholder="Buscar contatos"
                @keyup.enter="buscar"
                >
        </div>
        <hr class="color-secondary">

        <ul class="list-group" v-if="contatoFilter.length > 0">
            <ContatosListaItens 
                class="list-group-item" 
                v-for="contato in contatoFilter"
                :key="contato.id"
                :contato="contato"/>
        </ul>
        <p v-else>Nenhum Contato Cadastrado</p>
        <button class="btn btn-secundary mb-4 mt-4"  @click="voltar">Home</button>
    </div>
</template>

<script>

import ContatosListaItens from './ContatosListaItens.vue';

export default {
    components: {
        ContatosListaItens
    },
    data() {
        return {
            contatos: [
                {id: 1, nome: 'Rafael Carvalho', email: 'rapha.pse@outlook.com'},
                {id: 2, nome: 'Vitor Ribeiro', email: 'vitor@outlook.com'},
                {id: 3, nome: 'Hitor Ribeiro', email: 'heitor@outlook.com'},
                {id: 4, nome: 'Rose Ribeiro', email: 'rose@outlook.com'}
            ]
        }
    },
    computed: {
        contatoFilter() {
            const bsc = this.$route.query.busca;
            return bsc ? this.contatos.filter(x => x.nome.toLowerCase().includes(bsc.toLowerCase())) : this.contatos
        }
    },
    methods: {        
        buscar(event) {
            console.log("TCL: buscar -> event", event)
            this.$router.push({
                path: '/contatos',
                query: {
                    busca: event.target.value
                }
            });
        },
        voltar(event) {
            // this.$router.replace({path: '/'})
            this.$router.back();
        }
    }
}
</script>