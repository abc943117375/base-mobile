/*
 * @Author: your name
 * @Date: 2020-05-12 11:01:02
 * @LastEditTime: 2020-05-13 08:43:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \approve\src\store\modules\user.js
 */
import api from "../../plugins/request";
// import {responseFailFunc} from '../../plugins/request/axios'
import axios from "axios";
import { BASE_URL as baseURL } from "../../settings";
import { setToken } from "../../utils/auth";
// 审核页面状态管理器
const state = {
  token: "",
  userInfo: {
    college: "",
    grade: "",
    identityType: "",
    name: "",
    profession: "",
    roleId: "",
    sex: "",
    userId: ""
  },
  schoolConfig: {
    schoolCode: "",
    schoolName: ""
  },
  manageMenu: null
};

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_USER_INFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  SET_SCHOOL_CONFIG(state, schoolConfig) {
    state.schoolConfig = schoolConfig;
  }
};

const actions = {
  /**
   *
   * @param {type Object} param0: state,commit
   * @param {type Object} param1 : 学校配置信息,用户配置信息,token
   */
  login({ state, commit }, { schoolConfig, userInfo, token } = {}) {
    const { schoolCode } = schoolConfig;
    const { userId } = userInfo;
    console.log(schoolConfig, userInfo);
    const http = axios.create({
      baseURL
    });
    // http.interceptors.response.use(() =>{}, responseFailFunc)
    return new Promise(async (resolve, reject) => {
      http
        .post(
          "/applet/login",
          {
            schoolCode,
            userId
          },
          { headers: { "X-Token": token } }
        )
        .then(res => {
          const { code, msg, success, data } = res.data;
          if (code !== "200") {
            reject(res.data);
            return;
          } else {
            resolve(res);
            setToken(data);
            commit("SET_TOKEN", data);
            commit("SET_USER_INFO", userInfo);
          }
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }
};

export default {
  namespaced: true, // 开启命名空间
  state, // 状态
  mutations,
  actions
};
