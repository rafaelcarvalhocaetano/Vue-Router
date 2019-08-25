<template>
    <div>
        <h3 class="font-weight-light">Detalhes sobre o contato número: {{ id }}</h3>
        <div class="height 900px">
            
        </div>
        <p>Parametro: {{ parametros }}</p>
        <router-link
            :to="`/contatos/${id}/editar`"
            class="btn btn-primary"
        >Editar</router-link>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            // contato: undefined
            parametros: this.$route.params
        }
    },
    beforeRouteUpdate(to, from, next) {
        console.log(' beforeRouteUpdate');
        this.parametros = to.params
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
