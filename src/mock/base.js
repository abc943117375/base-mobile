const BASE_URL = 'http://127.0.0.1:3000'
// 你要返回的数据结构
const dataList = {
  status: 200,
  message: 'success',
  data: {
    total: 100,
    'rows|30': [{
      id: '@guid',
      name: '夏伟',
      'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师'],
      'time|1500000000000-1600000000000': 1567483737744,
      'type|1': type,
      'status|1': [0, 1, 2],
    }]
  }
};
// 定义要拦截的接口和返回的值
export default {
  // 拦截post请求  拼接baseurl 接口后缀                    要返回的数据
  [`post|${BASE_URL}/api/static01/application/Details`]: applicationDetails,
  [`post|${BASE_URL}/api/static01/applicationList`]: applicationList,
  [`post|${BASE_URL}/api/static01/application`]: dataList,
  [`post|${BASE_URL}/api/static01/getMineInfo`]: getMineInfo,
}