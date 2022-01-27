import Vue from "vue"
import App from "./App.vue"
import iView from "iview"
import "iview/dist/styles/iview.css"
import router from "./router/index"
import VueRouter from "vue-router"

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueRouter)
new Vue({
  // el: "#app",
  render: (h) => h(App),
  router: router,
}).$mount("#app")
