const routes = [
  {
    path: "/approve/home",
    name: "ApproveHome",
    component: () =>
      import(/* webpackChunkName: "approveHome" */ "@/views/approve/home/home"),
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "approveAbout" */ "@/views/About.vue")
  // }
]
export default routes 