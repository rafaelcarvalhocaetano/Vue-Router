<template>
    <form class="form-signin" @submit.prevent="entrar">
        <h1 class="h3 mb-3 font-weight-normal">Faça seu login</h1>
        
        <label class="sr-only">Email</label>
        <input type="email" class="form-control" placeholder="Email" required autofocus v-model="usuario.email">

        <label class="sr-only">Senha</label>
        <input type="password" class="form-control" placeholder="Senha" required v-model="usuario.senha">     

        <button class="btn btn-lg btn-primary btn-block">Entrar</button>
        <div class="alert alert-danger mt-3" v-if="mensagem">{{ mensagem }}</div>   
    </form>
</template>

<script>

import EventBus from './../../event-bus';


export default {
    data() {
        return {
            usuario: {
                email: null,
                senha: null
            },
            mensagem: null
        }
    },
    methods: {
        entrar(event) {
            if (this.usuario.email === 'a@gmail.com' && this.usuario.senha === '123') {
                EventBus.$emit('autenticado', true);
                const destino = this.$route.query.redirecionar || '/contatos';
                this.$router.push(destino);
            }
            this.mensagem = 'Dados incorretos';
            setTimeout(() => {
                this.mensagem = null;
            }, 3000);
        }
    }
}
</script>

<style scoped>
    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: auto;
    }

    .form-signin .checkbox {
        font-weight: 400;
    }

    .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }
</style>