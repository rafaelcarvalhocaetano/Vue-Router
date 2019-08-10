import Vue from 'vue';
import VueRouter from 'vue-router';

import Contatos from './views/contatos/Contatos.vue';
import ContatoDetalhe from './views/contatos/ContatoDetalhe.vue';
import ContatoHome from './views/contatos/ContatoHome.vue';
import Home from './views/Home.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { 
      path: '/contatos',
      component: Contatos,
      children: [
        {
          path: ':id', 
          component: ContatoDetalhe,
          name: 'contato_detalhes'
        },
        {
          path: '', 
          component: ContatoHome
        }
      ]
    },
    // { path: '/contatos/:id', component: ContatoDetalhe},
    { path: '/', component: Home}
  ]
})