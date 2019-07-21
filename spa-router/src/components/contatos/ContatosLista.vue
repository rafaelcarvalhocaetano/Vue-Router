<template>
    <div>
        <h3 class="font-weght-light">Contatos</h3>
        <ul class="list-group" v-if="contatos.lenght > 0">
            <ContatoListItem class="list-group-item" 
                v-for="contato in contatos"
                :key="contato.id"
                :contato="contato"/>
        </ul>
        <p v-else>Nenhum Contato Cadastrado</p>
        <button class="btn btn-secundary mb-4 mt-4"  @click="voltar">Home</button>
    </div>
</template>

<script>

import ContatosListItens from './ContatosListaItens';


export default {
    components: {
        ContatosListItens
    },
    data() {
        return {
            contatos: [
                {id: 1, nome: 'Rafael Carvalho', email: 'rapha.pse@outlook.com'},
                {id: 2, nome: 'Vitor Ribeiro', email: '1rapha.pse1@outlook.com'},
                {id: 3, nome: 'Hitor Ribeiro', email: '2rapha.pse2@outlook.com'},
                {id: 4, nome: 'Rose Ribeiro', email: '3rapha.pse3@outlook.com'},
                {id: 5, nome: 'Rafael 001 ', email: '4rapha.pse4@outlook.com'},
                {id: 6, nome: 'Rafael 002', email: '5rapha.pse5@outlook.com'},
                {id: 7, nome: 'Rafael 003', email: '6rapha.pse6@outlook.com'},
                {id: 8, nome: 'Rafael 004', email: '7rapha.pse7@outlook.com'},
                {id: 9, nome: 'Rafael 005', email: '8rapha.pse8@outlook.com'},
                {id: 10, nome: 'Rafael 006', email: '9rapha.pse9@outlook.com'},
                {id: 11, nome: 'Rafael 007', email: '10rapha.pse10@outlook.com'},
                {id: 12, nome: 'Rafael 008', email: '11rapha.pse11@outlook.com'}
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