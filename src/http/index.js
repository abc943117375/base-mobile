// 引入modules下的所有js文件
const modulesFiles = require.context('./modules', true, /\.js$/)
// 开启命名空间
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
export default modules
