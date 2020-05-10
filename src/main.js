import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'vant/lib/index.css'
import { Dialog } from 'vant';
Vue.use(Dialog)
// 路由守卫
import './permission'

import inject from './plugins'
Vue.use(inject)
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
