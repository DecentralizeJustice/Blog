import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

const embraceWeirdness = () => import('./components/embraceWeirdness/main.vue')
const powerto = () => import('./components/powerto/main.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home },
    { path: '/embraceWeirdness', component: embraceWeirdness },
    { path: '/powerto', component: powerto }
  ]
})
