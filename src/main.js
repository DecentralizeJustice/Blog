import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import { createProvider } from './vue-apollo'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init({ })
  },

  router,
  apolloProvider: createProvider(),
  vuetify,
  render: h => h(App)
}).$mount('#app')
