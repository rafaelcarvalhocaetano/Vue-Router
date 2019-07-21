<template>
  <div id="app">
    <div class="jumbotron">
      <h1 class="display-4">Vue Router</h1>
        <p class="lead">Adicionando rotas a Single Page Applications no vue</p>
    </div>
    <div class="container">
      <!-- <h3 class="font-weight-light">Contatos</h3> -->
      <!-- <router-link class="btn btn-info mb-2 mr-2" active-class="active" exact to="/">Home</router-link>  
            Funciona igualmente
     
        <router-link class="btn btn-info mb-2 mr-2"  exact-active-class="active" to="/">Home</router-link>
        <router-link class="btn btn-info mb-2" active-class="active" :to="{ path: '/Contatos' }">Contatos</router-link>
      -->
      <!-- Criando configuração de active-class no diretório do arquivo de rotas -->
      <router-link class="btn btn-info mb-4 mr-2" exact to="/">Home</router-link>
      <router-link class="btn btn-info mb-4 mr-2" :to="{ path: '/Contatos' }">Contatos</router-link>


      <router-view></router-view>
    </div>
  </div>  
</template>