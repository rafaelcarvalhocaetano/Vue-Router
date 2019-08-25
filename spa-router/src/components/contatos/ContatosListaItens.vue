<template>
    <li>
        <span>{{ contato.nome }}</span>
        <!-- <button class="btn btn-info btn-sm float-right">Detalhes</button> -->
        <!-- OK -->
        <router-link 
            class="btn btn-info btn-sm float-right"
            :to="`/contatos/${contato.id}`">Detalhes</router-link>

        <!-- Só funciona com rotas nomeadas -->
        <!-- <router-link 
            class="btn btn-info btn-sm float-right"
            :to="{name: 'contatos', params: { id: contato.id } }"            
            >Detalhes</router-link> -->

        <!-- com @click -->
        <!-- <router-link 
            class="btn btn-info btn-sm float-right"
            @click="acessar">Detalhes</router-link> -->

        <!-- <button class="btn btn-info btn-sm float-right"
            @click="converterData"
        >Detalhes</button> -->
    </li>
</template>

<script>
export default {
    props: {
        contato: {
            type: Object,
            required: true
        }
    },
    methods: {
        converterData() {
            // this.$router.push(`/contato/${contato.id}`);
            // this.$router.push({path: `/contatos/${this.contato.id}`});
            this.$router.push({name: '/contatos/', params: {id: this.contato.id }});
            console.log(' data ', this.$route.params.id)
        }
    }
}
</script>
