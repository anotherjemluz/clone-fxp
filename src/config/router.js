import Vue from 'vue'
import Router from 'vue-router'

import Auth from '../views/Auth.vue'
import Painel from '../views/Painel.vue'

import Resumo from '../components/pages/Resumo.vue'
import Vendas from '../components/pages/Vendas.vue'
import Simulador from '../components/pages/Simulador.vue'
import Recebiveis from '../components/pages/Recebiveis.vue'
import Extrato from '../components/pages/Extrato.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'auth',
      component: Auth
    },
    {
      path: '/painel',
      name: 'painel',
      component: Painel,
      children: [
        { path: 'resumo', name: 'resumo', component: Resumo },
        { path: 'vendas', name: 'vendas', component: Vendas },
        { path: 'simulador', name: 'simulador', component: Simulador },
        { path: 'recebiveis', name: 'recebiveis', component: Recebiveis },
        { path: 'extrato', name: 'extrato', component: Extrato },
      ]
    },
  ]
})
