<template>
    <!-- <div>
        <h3 class="font-weght-light">Contatos</h3>
        <p>Meus contatos</p>
        <button class="btn btn-secundary mb-4 mt-4"  @click="voltar">Home</button>
    </div> -->
    <div>
        <router-view></router-view>
        <router-view name="contato-detalhes"></router-view>
    </div>
</template>