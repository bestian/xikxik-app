import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import '../node_modules/semantic-ui-css/semantic.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')