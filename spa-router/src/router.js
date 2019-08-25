import Vue from 'vue';
import VueRouter from 'vue-router';

// import Contatos from './views/contatos/Contatos.vue';
import ContatoDetalhe from './views/contatos/ContatoDetalhe.vue';
import ContatoHome from './views/contatos/ContatoHome.vue';
import ContatoEditar from './views/contatos/ContatoEditar.vue';
import Erro404Contatos from './views/contatos/Erro404Contatos.vue';

// import Home from './views/Home.vue';
import Erro404 from './views/Erro404.vue';
import Login from './views/login/Login.vue';

import EventBus from './event-bus';

// lazy-loader
const _home = () => import('./views/Home.vue');
const _contatos = () => import('./views/contatos/Contatos.vue');

Vue.use(VueRouter);

const extrairParams = routex => ({ id: + routex.params.id });

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { 
      path: '/contatos',
      // component: Contatos,
      // component: () => Promise.resolve({ template: ''}),
      // LAZY-LOADER
      // component: () => import('./views/contatos/Contatos.vue'),
      component: _contatos,
      alias: ['/meus-contatos', '/m-ctt'],
      props: (route) => {
        const bcd = route.query.busca;
        return bcd ? { bcd } : {};
      },
      children: [
        {
          path: ':id(\\d+)', 
          component: ContatoDetalhe,
          name: 'contato',
          props: extrairParams
        },
        {
          path: ':id(\\d+)/editar', 
          alias: ':id(\\d+)/mtt',
          meta: { requerAutenticacao: true },
          beforeEnter(to, from, next) {
            console.log(' beforeEnter');
            // if (to.query.id == 1) {
            //   return next();              
            // } else {
            //   next('/contatos/vai-caraio');
            // }
            // next(true); libera a rota
            // next(false); bloqueia a rota
            // next('/contatos');  redirecionamento
            // next({name: 'contatos'});  redirecionamento 2
            // next(new Error('Sem permissão'));
            next();
          },
          component: {
            default: ContatoEditar,
            'contato-detalhes': ContatoDetalhe
          },
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
    {
      path: '/home', 
      // lazy-loader
      component: _home,
      name: 'contatos'
    },
    {
      path: '/login',
      component: Login
    },
    { 
      path: '/', 
      redirect: to => {
        return '/contatos'
      } 
    },
    {
      path: '*',
      component: Erro404
    }
  ]
});

// Rotas Globais
router.beforeEach((to, from, next) => {
  console.log(' beforeEach ');
  console.log(' requerAutenticacao ', to.meta.requerAutenticacao);
  const authHere = EventBus.autenticado;
  console.log("TCL: authHere", to.matched);
  if (to.matched.some(rota => rota.meta.requerAutenticacao)) {
    if (!authHere) {
      next({
        path: '/login',
        query: { redirecionar: to.fullPath }
      });
      return;
    }
  }
  next();
});

// router.beforeResolve((to, from, next) => {
//   console.log(' beforeResolver');
// });

router.afterEach((to, from) => {
  console.log(' data  afterEach');
});

router.onError((e) => {
  console.log(' onError ', e.message);
});
export default router;

// export default new VueRouter({
//   mode: 'history',
//   linkActiveClass: 'active',
//   routes: [
//     { 
//       path: '/contatos',
//       component: Contatos,
//       alias: ['/meus-contatos', '/m-ctt'],
//       props: (route) => {
//         const bcd = route.query.busca;
//         return bcd ? { bcd } : {};
//       },
//       children: [
//         {
//           // path: ':id', 
//           path: ':id(\\d+)', 
//           component: ContatoDetalhe,
//           name: 'contato',
//           // props: true
//           props: extrairParams
//           // props: {
//           //   id: 10
//           // }
//         },
//         {
//           // path: ':id(\\d+)/editar',
//           // path: ':id(\\d+)/editar/:zero*', 
//           path: ':id(\\d+)/editar/:zero+', 
//           alias: ':id(\\d+)/mtt',
//           component: {
//             default: ContatoEditar,
//             'contato-detalhes': ContatoDetalhe
//           },          
//           // props: {
//           //   default: true,
//           //   'contato-detalhes': true
//           // }
//           props: {
//             default: extrairParams,
//             'contato-detalhes': extrairParams
//           }
//         },
//         {
//           path: '', 
//           component: ContatoHome
//         },
//         {
//           path: '/contatos*',
//           component: Erro404Contatos
//         }
//       ]
//     },
//     // { path: '/contatos/:id', component: ContatoDetalhe},
//     // {path: '/contatos', redirect: '/meus-contatos'},
//     {path: '/home', component: Home , name: 'contatos'},
//     // { path: '/', redirect: '/contatos'}
//     { 
//       path: '/', 
//       redirect: to => {
//         return '/contatos'
//       } 
//     },
//     {
//       path: '*',
//       component: Erro404
//       // redirect: to => {
//       //   return '/contatos'
//       // }
//     }
//   ]
// })