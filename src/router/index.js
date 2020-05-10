import Vue from "vue";
import VueRouter from "vue-router";
import approve from './modules/approve.js';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/home"),
  },
  ...approve,
];

const router = new VueRouter({
  routes
});

export default router;
