import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/lib/mui/css/mui.min.css"
import "./assets/lib/mui/css/icons-extra.css"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
