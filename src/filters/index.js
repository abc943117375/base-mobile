// 创建过滤器
const test = (value) => {
  console.log('测试过滤器', value);
  return '测试过滤器'
}
// 整合
const filters = {
  test,
}
// 在main.js中引入,然后Vue.use即可挂载
export default {
  // Vue.use(xxxx)会自动调用xxxx.install()
  install(Vue) {
    Object.keys(filters).forEach(key => {
      Vue.filter([key], filters[key])
    })
  }
}
