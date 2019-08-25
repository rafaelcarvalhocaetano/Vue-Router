<template>
    <div>
        <!-- <h3 class="font-weight-light">Editar contato com id: {{ $route.params.id}}</h3> -->
        <h3 class="font-weight-light">Editar contato com id: {{ id }}</h3>
        <button class="btn btn-secundarymt-4 mb-4" @click="$router.back()">Voltar</button>
    </div>
</template>

<script>
export default {
    props: ['id'],
    beforeRouteEnter (to, from, next) {
        // console.log(' beforeRouter-ENTER')
        // if (to.query.autenticado === 'true') {
        //     return next();
        // } else {
        //     next('/contatos');
        // }
        next();
    },
    beforeRouteLeave(to, from, next) {
        console.log(' beforeRouteLeave')
        const confirmar = window.confirm('Desejá sair da Rota');
        if (confirmar) {
            next(true);
        } else {
            next()
        }
    }
    // hooks
    // created() {
    //     // console.log(' data ', this.$route.params);;
    // }
}
</script>