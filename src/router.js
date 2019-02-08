import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import embraceDifference from './components/embraceDifference/main.vue'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home },
    { path: '/embraceDifference', component: embraceDifference }
  ]
})
