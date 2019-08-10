<template>
    <div>
        <h3 class="font-weght-light">Contatos</h3>
        <ul class="list-group" v-if="contatos.length > 0">
            <ContatosListaItens 
                class="list-group-item" 
                v-for="contato in contatos"
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
    methods: {
        voltar(event) {
            // this.$router.replace({path: '/'})
            this.$router.back();
        }
    }
}
</script>