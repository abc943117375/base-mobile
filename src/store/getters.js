const getters = {
  userInfo: state => state.user.userInfo,
  token: state => state.user.token,
  schoolCode: state => state.user.schoolConfig.schoolCode
}
export default getters