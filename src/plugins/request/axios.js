import axios from 'axios'
import {
  AXIOS_DEFAULT_CONFIG,
  CONSOLE_REQUEST_ENABLE, // 请求参数打印
  CONSOLE_RESPONSE_ENABLE // 响应参数打印
} from '../../settings'
// 创建一个axios实例
const http = axios.create(AXIOS_DEFAULT_CONFIG)

// 请求发送成功
function requestSuccessFunc(requestObj) {
  if (CONSOLE_REQUEST_ENABLE) {
    console.log(requestObj.data, '请求参数');
  }
  // 此处可以做请求拦截
  return requestObj
}
// 请求发送失败
function requestFailFunc(requestError) {
  // 自定义发送请求失败逻辑，断网，请求发送监控等
  return Promise.reject('亲，您的网络不太顺畅喔')
}

// 响应成功
function responseSuccessFunc(responseObj) {
  if (CONSOLE_RESPONSE_ENABLE) {
    console.log(responseObj, '响应结果');
  }
  // 这里可以做响应拦截,处理状态码
  const resData = responseObj.data
}

// 响应异常方法
function responseFailFunc(responseError) {
  // 这里可以做异常处理
  const err = responseError
  if (err.response) {
    const status = err.response.status
    switch (status) {
      case 403:
        return Promise.reject('当前用户无相关操作权限')
      default:
        return Promise.reject('服务器错误!请联系相关管理员！')
    }
  } else {
    return Promise.reject('请求超时,请检查您网络!')
  }
}
//                             请求拦截             异常处理
http.interceptors.request.use(requestSuccessFunc, responseFailFunc)
//                             响应拦截             异常处理
http.interceptors.response.use(responseSuccessFunc, responseFailFunc)
export default http