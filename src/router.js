import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/BlogHome.vue'

const powerto = () => import('./components/powerto/main.vue')
const knowyourlimits = () => import('./components/knowyourlimits/main.vue')
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home },
    { path: '/powerto', component: powerto },
    { path: '/knowyourlimits', component: knowyourlimits }
  ]
})
