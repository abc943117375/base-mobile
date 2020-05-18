/*
 * @Author: ahcao
 * @Date: 2020-05-12 11:01:02
 * @LastEditTime: 2020-05-12 14:15:34
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \approve\src\settings.js
 */
module.exports = {
  // axios 默认配置
  AXIOS_DEFAULT_CONFIG: {
    // 请求超时时间
    timeout: process.env.NODE_ENV !== "production" ? 40000 : 30000,
    // 内容长度
    maxContentLength: 20000,
    // 内容类型
    headers: { "Content-Type": "application/json" }
  },

  BASE_URL: "基准地址,后面有 /",
  staticUrl: "静态资源地址",
  // meta头部显示默认内容
  title: "标题",
  // API 默认配置
  API_DEFAULT_CONFIG: {
    debug: process.env.NODE_ENV !== "production",
    sep: "/",
    // proxy: process.env.NODE_ENV !== 'production'
    proxy: false
  },
  // 开启请求参数打印
  CONSOLE_REQUEST_ENABLE: process.env.NODE_ENV !== "production",
  // 开启响应参数打印
  CONSOLE_RESPONSE_ENABLE: process.env.NODE_ENV !== "production"
};
