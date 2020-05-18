import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'vant/lib/index.css'
import { Dialog } from 'vant';
Vue.use(Dialog)
// 路由守卫
import './permission'

// 全局样式内置了类名flex布局
import './styles/style.scss'
// 这里写你页面里面的全局样式
import './styles/_pageVariables.scss'
// 挂载
import inject from './plugins'
// 手淘适配(移动端)
import 'lib-flexible';
Vue.use(inject)
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
