<template>
    <div v-if="contato">
        <!-- <h3 class="font-weight-light">Editar contato com id: {{ $route.params.id}}</h3> -->
        <h3 class="font-weight-light">Nome: {{ contato.nome }}</h3>

        <form @submit.prevent="salvar">
            <div class="form-group">
                <label for="nome">Nome</label>
                <input type="text" class="form-control" placeholder="Insira o nome" v-model="contato.nome">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" placeholder="Insira o email" v-model="contato.email">
            </div>
            <div class="form-group">
                <label for="nome">Nome</label>
                <input type="text" class="form-control" placeholder="Insira o nome" v-model="contato.nome">
            </div>
            <button type="button" class="btn btn-secondary mt-4 mb-4 mr-2" @click="$router.back()">Voltar</button>
            <button type="submit" class="btn btn-success">Salvar</button>
        </form>

        <button class="btn btn-secundarymt-4 mb-4" @click="$router.back()">Voltar</button>
    </div>
</template>

<script>

import EventBus from '@/event-bus';

export default {
    props: ['id'],
    data() {
        return {
            contato: undefined,
            cancelar: true
        }
    },
    beforeRouteEnter (to, from, next) {
        // console.log(' beforeRouter-ENTER')
        // if (to.query.autenticado === 'true') {
        //     return next();
        // } else {
        //     next('/contatos');
        // }
        next(vm => {
            // vm.contato = EventBus.buscarContatos(vm.id);
            // por rota
            vm.contato = EventBus.buscarContatos(+to.params.id);
        });
    },
    beforeRouteLeave(to, from, next) {
        console.log(' beforeRouteLeave')
        // const confirmar = window.confirm('Desejá sair da Rota');
        // if (confirmar) {
        //     next(true);
        // } else {
        //     next()
        // }
        this.cancelar ? next(window.confirm('Desejá sair da Rota')) : next();
    },
    methods: {
        salvar(event) {
            EventBus.editarContato(this.contato);
            this.cancelar = false;
            this.$router.push('/contatos');
        }
    }
    // hooks
    // created() {
    //     // console.log(' data ', this.$route.params);;
    // }
}
</script>