import Vue from 'vue';
import VueRouter from 'vue-router';

import Contatos from './views/contatos/Contatos.vue';
import ContatoDetalhe from './views/contatos/ContatoDetalhe.vue';
import ContatoHome from './views/contatos/ContatoHome.vue';
import ContatoEditar from './views/contatos/ContatoEditar.vue';
import Erro404Contatos from './views/contatos/Erro404Contatos.vue';

import Home from './views/Home.vue';
import Erro404 from './views/Erro404.vue';

Vue.use(VueRouter);

const extrairParams = routex => ({ id: + routex.params.id });

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { 
      path: '/contatos',
      component: Contatos,
      alias: ['/meus-contatos', '/m-ctt'],
      props: (route) => {
        const bcd = route.query.busca;
        return bcd ? { bcd } : {};
      },
      children: [
        {
          // path: ':id', 
          path: ':id(\\d+)', 
          component: ContatoDetalhe,
          name: 'contato',
          // props: true
          props: extrairParams
          // props: {
          //   id: 10
          // }
        },
        {
          // path: ':id(\\d+)/editar',
          // path: ':id(\\d+)/editar/:zero*', 
          path: ':id(\\d+)/editar/:zero+', 
          alias: ':id(\\d+)/mtt',
          component: {
            default: ContatoEditar,
            'contato-detalhes': ContatoDetalhe
          },          
          // props: {
          //   default: true,
          //   'contato-detalhes': true
          // }
          props: {
            default: extrairParams,
            'contato-detalhes': extrairParams
          }
        },
        {
          path: '', 
          component: ContatoHome
        },
        {
          path: '/contatos*',
          component: Erro404Contatos
        }
      ]
    },
    // { path: '/contatos/:id', component: ContatoDetalhe},
    // {path: '/contatos', redirect: '/meus-contatos'},
    {path: '/home', component: Home , name: 'contatos'},
    // { path: '/', redirect: '/contatos'}
    { 
      path: '/', 
      redirect: to => {
        return '/contatos'
      } 
    },
    {
      path: '*',
      component: Erro404
      // redirect: to => {
      //   return '/contatos'
      // }
    }
  ]
})