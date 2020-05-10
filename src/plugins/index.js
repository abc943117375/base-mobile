
import axios from './request/axios'
import api from './request'

export default {
  install: (Vue, options) => {
    // 需要挂载的都放在这里
    Vue.prototype.$ajax = axios
    Vue.prototype.$api = api
  }
}
