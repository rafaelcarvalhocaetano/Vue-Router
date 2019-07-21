# Vue-Router

### Configs basics
  ````
  Rotas muito parecido com o Angular da versão 2 em diante.
  
  - Criar arquivo para o Router
    
      import Vue from 'vue';
      import VueRouter from 'vue-router';

      import Contatos from './views/contatos/Contatos.vue';
      import Home from './views/Home.vue';

      Vue.use(VueRouter);

      export default new VueRouter({
        mode: 'history',
        routes: [
          { path: '/contatos', component: Contatos },
          { path: '/', component: Home}
        ]
      })
      
 ----------------------------------------- HTML ---------------------------------------------
  - Arquivo principal:
    <router-view></router-view>
  
  - Para Navegação:
  
    <router-link class="btn btn-info mb-2 mr-2" active-class="active" exact to="/">Home</router-link>
    
    // Usando caminho relativo com data-bind :to="{ path: 'NomeDaRota' }"
    <router-link class="btn btn-info mb-2" active-class="active" :to="{ path: '/Contatos' }">Contatos</router-link>
  
  ````


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

