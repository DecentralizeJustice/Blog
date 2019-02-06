import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import embraceFriction from './components/embraceFriction/main.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    { path: '/embraceFriction', component: embraceFriction }

  ]
})
