import Vue from "vue";
import Vuex from "vuex";
import getters from './getters'
// 持久化vuex状态
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);

// 引入modules下的所有js文件
const modulesFiles = require.context('./modules', true, /\.js$/)

// 配置命名空间
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})


const store = new Vuex.Store({
  modules, // 模块化
  getters, // 统一getters
  plugins: [createPersistedState({ // 持久化状态
    storage: window.sessionStorage, // 持久化到sessionStorage,也可以持久化到localStorage
    reducer(val) {
      const user = { ...val.user }
      delete user.manageMenu
      return {
        user
      }
    }
  })]
})

export default store

