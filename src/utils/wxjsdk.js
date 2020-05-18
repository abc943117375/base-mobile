import { Dialog } from 'vant'

export default {
  mounted() {
    this.wxJSDKConfig()
  },
  methods: {
    async wxJSDKConfig() {
      const request = {
        url: location.href.split('#')[0]
      }
      const config = {
        method: 'post',
        url: 'api/jsConfig',
        headers: {
          'X-Authorization': this.token
        },
        baseURL: 'https://xwx.gzzmedu.com:9080/',
        data: request
      }
      try {
        console.log('调用微信jsdk 参数为: ', config)
        const result = await this.$ajax(config)
        const { appId, timestamp, noncestr, signature } = result.data[0]
        wx.config({
          debug: false,
          appId,
          timestamp,
          nonceStr: noncestr,
          signature,
          jsApiList: ['checkJsApi', 'scanQRCode', 'chooseImage', 'uploadImage', 'previewImage', 'getLocation', 'getLocalImgData']
        })
        wx.error(errmsg => {
          Dialog.alert({ title: '提示', message: 'wxjsdk配置异常，请重试' }).then(() => {
            wx.miniProgram.reLaunch({
              url: '/pages/home/index'
            })
          })
        })
      } catch (error) {
        Dialog.alert({ title: '提示', message: 'wxConfig接口异常，请退出再试' }).then(() => {
          wx.miniProgram.reLaunch({
            url: '/pages/home/index'
          })
        })
      }
    }
  }
}
