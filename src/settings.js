module.exports = {
  // axios 默认配置
  AXIOS_DEFAULT_CONFIG: {
    // 请求超时时间
    timeout: process.env.NODE_ENV !== 'production' ? 40000 : 30000,
    // 内容长度
    maxContentLength: 20000,
    // 内容类型
    headers: { 'Content-Type': 'application/json' },
  },

  // BASE_URL: 'https://xwx.gzzmedu.com:9080/', 
  BASE_URL: 'http://192.168.6.64:9080', // 活动配置平台
  // staticUrl: 'https://xwx.gzzmedu.com:6899',
  staticUrl: 'http://manage.ittun.com',
  // staticUrl: 'http://192.168.6.24:9080', // 活动配置平台
  // meta头部显示默认内容
  title: '审批',
  // API 默认配置
  API_DEFAULT_CONFIG: {
    debug: process.env.NODE_ENV !== 'production',
    sep: '/',
    // proxy: process.env.NODE_ENV !== 'production'
    proxy: false
  },
  // 开启请求参数打印
  CONSOLE_REQUEST_ENABLE: process.env.NODE_ENV !== 'production',
  // 开启响应参数打印
  CONSOLE_RESPONSE_ENABLE: process.env.NODE_ENV !== 'production'
}
