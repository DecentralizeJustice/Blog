import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import embraceWeirdness from './components/embraceWeirdness/main.vue'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home },
    { path: '/embraceWeirdness', component: embraceWeirdness }
  ]
})
