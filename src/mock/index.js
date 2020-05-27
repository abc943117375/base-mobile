// 首先引入Mock
const Mock = require('mockjs');

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: '300-600'
});

let configArray = [];
// 使用webpack的require.context()遍历所有mock文件夹下的js文件
const files = require.context('.', true, /\.js$/);
files.keys().forEach((key) => {
  // 下面这玩意代表着当前这个文件夹,所以要return
  if (key === './index.js') return;
  // 拿到每一个js文件的默认导出
  configArray = configArray.concat(files(key).default);
});

// 注册所有的mock服务
configArray.forEach((item) => {
  // path 为 post|http://127.0.0.1:3000/api/static01/application
  // target 为 你定义的,返回给上面这个接口的数据(data)
  for (let [path, target] of Object.entries(item)) {
    let protocol = path.split('|');
    Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target);
  }
});