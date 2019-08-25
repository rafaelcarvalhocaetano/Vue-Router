<template>
    <ContatosLista :busca="busca"/>   
</template>

<script>

import ContatosLista from './../../components/contatos/ContatosLista';

export default {
    components: {
        ContatosLista
    },
    props: ['busca']
    // methods: {
    //     voltar(event) {
            // funciona normalmente as duas mas o push faz a mesma coisa que no IONIC igual ao angular
            // this.$router.push({ path: '/' });
            // this.$router.push('/');

            // O replace substitui a atual podendo usar como um objecto ou somente string
            // this.$router.replace({ path: '/' });
            // this.$router.replace('/');
            
            // Quantos passo vou avançar registro no histórico
            // this.$router.go(3);
            // Adiciona um passo na rota;
            // this.$router.forward();
            // Volta um passo na rota muito usado com push();
            // this.$router.back();

    //     }
    // }
}
</script>
