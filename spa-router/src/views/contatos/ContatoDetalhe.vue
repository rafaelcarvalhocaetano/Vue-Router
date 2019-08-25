<template>
    <div v-if="contato">
        <h3 class="font-weight-light">Nome: {{ contato.nome }}</h3>
        <p>Email: {{ contato.email }}</p>
        <button class="btn btn-econdary mr-2" @click="$router.back()">Voltar</button>
        <router-link
            :to="`/contatos/${id}/editar`"
            class="btn btn-primary"
        >Editar</router-link>
    </div>
</template>

<script>

import EventBus from '@/event-bus';

export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            contato: undefined
            // parametros: this.$route.params
        }
    },
    created() {
        this.contato = EventBus.buscarContatos(this.id);
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            // vm.contato = EventBus.buscarContatos(vm.id);
            // por rota
            vm.contato = EventBus.buscarContatos(+to.params.id);
        });
    },
    beforeRouteUpdate(to, from, next) {
        console.log(' beforeRouteUpdate');
        // this.parametros = to.params
        this.contato = EventBus.buscarContatos(+to.params.id);
        next();
    }
    // data() {
    //     return {
    //          id: this.$route.params.id
    //     }
    // },
    // // reagindo a alteração de parametros usando watch
    // // watch: {
    // //     '$route'(to, from) {
    // //         this.id = to.params.id;
    // //     }
    // // }

    // // usando guarda de rotas
    // beforeRouteUpdate(to, from, next) {
    //     this.id = to.params.id;
    //     if (this.id && this.id !== null) {
    //         next();
    //     } else {
    //         return alert('Sem o Id da do Contato');
    //     }
    // },
    // created() {
    //     // this.id = this.$route.params.id;
    //     console.log("TCL: created -> this.id", this.$props)
        
    // }
}
</script>
