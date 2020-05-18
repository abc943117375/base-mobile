/**
 * 获取url参数
 * @param {*参数} name
 */
export function getUrlParam(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [',', ''])[1].replace(/\+/g, '%20')) || ''
  // let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  // let r = window.location.search.substr(1).match(reg)
  // if (r != null) {
  //   return unescape(r[2])
  // } else {
  //   return null
  // }
}