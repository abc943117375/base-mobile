import router from './router'
import store from './store'
import { getToken } from './utils/auth'
import { Dialog } from 'vant'

const { getters } = store
const token = getToken()
console.log(token);
router.beforeEach((to, form, next) => {
  if (getters.token || token) {
    console.log('token存在,允许跳转');
    next()
  } else {
    Dialog.confirm({
      title: '提示',
      message: 'token异常,请退出后重试'
    }).then(res => {
      console.log('重新获取');
    })
      .catch(() => {
        console.log('退出重试');
      })
  }
})

router.afterEach((ro, form) => {
})



