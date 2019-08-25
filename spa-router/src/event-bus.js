import Vue from 'vue';

export default new Vue({
    data: {
        autenticado: false,
        contatos: [
            {id: 1, nome: 'Rafael Carvalho', email: 'rapha.pse@outlook.com'},
            {id: 2, nome: 'Vitor Ribeiro', email: 'vitor@outlook.com'},
            {id: 3, nome: 'Hitor Ribeiro', email: 'heitor@outlook.com'},
            {id: 4, nome: 'Rose Ribeiro', email: 'rose@outlook.com'}
        ]
    },
    created() {
        this.$on('autenticado', (auth) => {
            this.autenticado = auth;
        })
    },
    methods: {
        buscarContatos(id) {
            return Object.assign({}, this.contatos.find(x => x.id === id));
        },
        editarContato(cont) {
            const indice = this.contatos.findIndex(x => x.id === cont.id);
            this.contatos.splice(indice, 1, cont);
        }
    }
})