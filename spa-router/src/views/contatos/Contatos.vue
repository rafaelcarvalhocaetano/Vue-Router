<template>
    <!-- <div>
        <h3 class="font-weght-light">Contatos</h3>
        <p>Meus contatos</p>
        <button class="btn btn-secundary mb-4 mt-4"  @click="voltar">Home</button>
    </div> -->
    <ContatoLista />
</template>


<script>

import ContatoLista from './../../components/contatos/ContatosLista';
// import ContatoLista from './../../components/contatos/ContatosLista';

export default {
    components: {
        ContatoLista
    }
    // methods: {
    //     voltar(event) {
            // funciona normalmente as duas mas o push faz a mesma coisa que no IONIC igual ao angular
            // this.$router.push({ path: '/' });
            // this.$router.push('/');

            // O replace substitui a atual podendo usar como um objecto ou somente string
            // this.$router({ path: '/' });
            // this.$router.push('/');
            
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
