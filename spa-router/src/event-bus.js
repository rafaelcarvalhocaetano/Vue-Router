import Vue from 'vue';

export default new Vue({
    data: {
        autenticado: false
    },
    created() {
        this.$on('autenticado', (auth) => {
            this.autenticado = auth;
        })
    }
})