// 审核页面状态管理器
const state = {
  token: '',
  userInfo: {
    userId: ''
  },
  schoolConfig: {
    schoolCode: '',
    schoolName: '',
  },
  manageMenu: null,
}

const mutations = {
}

const actions = {
}

export default {
  namespaced: true, // 开启命名空间
  state, // 状态
  mutations,
  actions
}
