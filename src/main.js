import Vue from 'vue';
import App from './App.vue';
// import VueRoter from 'vue-router';

// import Contatos from './views/contatos/Contatos.vue';
// import Home from './views/Home.vue';

import Router from './router';


Vue.config.productionTip = false;
// Vue.use(VueRoter);
// const router = new VueRoter({
//   mode: 'history',
//   routes: [
//     { path: '/contatos', component: Contatos },
//     { path: '/', component: Home}
//   ]
// })

new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')
