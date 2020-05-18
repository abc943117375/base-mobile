// axios实例  已经处理了from
import axiosInstance from "./axios";
import API_CONFIG from "../../http";
import { API_DEFAULT_CONFIG } from "../../settings";
import store from "../../store";

class MakeApi {
  constructor(options) {
    this.api = {}; // 初始化api
    this.apiBuilder(options); //
  }
  //
  apiBuilder({ sep, config = {}, debug, proxy }) {
    Object.keys(config).map(namespace => {
      this._apiSingleBuilder({
        namespace,
        sep,
        debug,
        config: config[namespace],
        proxy
      });
    });
  }
  _apiSingleBuilder({ namespace, sep, config, debug, proxy }) {
    config.forEach(item => {
      const { name, desc, method, path, proxyName } = item;
      let { baseURL } = item;
      // 命名空间
      const apiname = `${namespace}${sep}${name}`;
      // 是否启用代理
      baseURL = proxy ? proxyName : baseURL;
      Object.defineProperty(this.api, `${namespace}${sep}${item.name}`, {
        value: (outerParams, outerOptions = {}) => {
          const { userInfo, schoolConfig, token } = store.state.user;
          const dataParams = Object.assign(
            // 向请求中全局添加两个参数
            {
              // schoolCode: schoolConfig.schoolCode,
              userId: userInfo.userId
            },
            outerParams // 外来参数
          );
          const config = _normoalize(
            Object.assign(
              //
              {
                url: path,
                desc,
                baseURL,
                method
              },
              outerOptions
            ),
            dataParams
          );
          if (config.headers) {
            // 如果定义了数据结构
            config.headers["X-Token"] = token;
          } else {
            config.headers = { "X-Token": token };
          }
          if (outerOptions && outerOptions.isExteriorAPI) {
            // 如果是注销操作,删除token
            delete config.headers["X-Token"];
          }
          // 通过全局配置开启调试模式。
          if (debug) {
            console.info(`调用服务层接口${apiname}，接口描述为${desc}`);
          }
          return axiosInstance(config);
        }
      });
    });
  }
}

// 处理请求配置方法
function _normoalize(options, params) {
  if (options.UploadFile) {
    return options;
  }
  if (options.method === "post") {
    // 如果请求方式为post
    options.data = params; // 参数放在data中
  } else if (options.method === "get") {
    // 如果请求方式为params
    options.params = params; // 参数放在params中
  }
  return options;
}
const api = new MakeApi({
  config: API_CONFIG,
  ...API_DEFAULT_CONFIG
}).api;
export default api;
