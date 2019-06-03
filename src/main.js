import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLocalStorage from 'vue-localstorage'
import '../node_modules/semantic-ui-css/semantic.min.css'
import Ads from 'vue-google-adsense'

Vue.use(VueLocalStorage)

Vue.use(require('vue-script2'))

Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')


/*
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

*/