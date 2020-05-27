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
// 引入mock拦截请求并返回模拟数据  @/mock/index.js
// require('./mock') // 解开注释即可使用
Vue.use(inject)
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
