/*
 * @Author: achao
 * @Date: 2020-05-12 11:01:02
 * @LastEditTime: 2020-05-12 16:30:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \approve\src\permission.js
 */
import router from "./router";
import store from "./store";
import { getUrlParam } from "./utils/url";
import { getToken } from "./utils/auth";
import { Dialog } from "vant";
const beforeEach = async (to, form, next) => {
  const localToken = getToken();
  if (localToken) {
    next();
    return;
  }
  // 这里写地址栏的参数
  const query = getUrlParam('query')
  if (query) {
    const { userInfo, schoolConfig, token } = JSON.parse(query);
    // const { userInfo, schoolConfig, token } = query;
    try {
      // 这里写你要执行的逻辑
      next();
    } catch (error) {
      Dialog.confirm({
        title: "提示",
        message: "token异常,请退出后重试"
      })
        .then(async res => {
          next();
        })
        .catch(() => {
          console.log("退出重试");
          wx.miniProgram.reLaunch({
            url: "/pages/home/index"
          });
        });
    }
  } else {
    Dialog.alert({ title: "提示", message: "参数错误" }).then(() => {
      wx.miniProgram.reLaunch({
        url: "/pages/home/index"
      });
    });
  }
};
router.beforeEach(beforeEach);

router.afterEach((ro, form) => { });
