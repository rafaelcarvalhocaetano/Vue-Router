<template>
    <h3 class="font-weight-light">Detalhes sobre o contato número: {{ id }}</h3>
</template>

<script>
export default {
    data() {
        return {
             id: this.$route.params.id
        }
    },
    // reagindo a alteração de parametros usando watch
    // watch: {
    //     '$route'(to, from) {
    //         this.id = to.params.id;
    //     }
    // }

    // usando guarda de rotas
    beforeRouteUpdate(to, from, next) {
        this.id = to.params.id;
        if (this.id && this.id !== null) {
            next();
        } else {
            return alert('Sem o Id da do Contato');
        }
    }

    // created() {
    //     this.id = this.$route.params.id;
    // }
}
</script>
