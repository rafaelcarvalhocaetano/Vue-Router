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
    // hooks
    created() {
        console.log(' data ', this.$route.params);
    }
}
</script>