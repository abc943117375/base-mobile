const getters = {
  // 例如: value:state => state.xxx.value
  userInfo: state => state.user.userInfo,
  token: state => state.user.token
}
export default getters