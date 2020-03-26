<template>
    <div>
        <h3 class="font-weght-light">Contatos</h3>

        <div class="form-group">
            <input 
                type="text"
                class="form-control"
                placeholder="Buscar contatos"
                @keyup.enter="buscar"
                :value="busca">
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

import EventBus from '@/event-bus';

export default {
    components: {
        ContatosListaItens
    },
    props: ['busca'],
    data() {
        return {
            contatos: []            
        }
    },
    computed: {
        contatoFilter() {
            const bsc = this.busca;
            return bsc ? this.contatos.filter(x => x.nome.toLowerCase().includes(bsc.toLowerCase())) : this.contatos
        }
    },
    created() {
        this.contatos = EventBus.contatos;
    },
    methods: {        
        buscar(event) {
            this.$router.push({
                path: '/contatos',
                query: { busca: event.target.value }
            });
        },
        voltar(event) {
            // this.$router.replace({path: '/'})
            this.$router.back();
        }
    }
}
</script>