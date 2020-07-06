/**
 * Created by PanJiaChen on 16/11/18.
 */
/**
 * @see 生成随机字符串
 */
export function randomString(len) {
  len = len || 32;
  var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  var maxPos = $chars.length;
  var pwd = '';
  for (var i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

/**
 * @see 判断一个值是否是nan
 */
export function cIsNaN(n) {
  if (n !== n) {
    return true;
  } else {
    return false;
  }
}

/**
 * @see 计算一年有多少周
 */
export function getNumOfWeeks(year) {
  let d = new Date(year, 0, 1);
  let yt = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 366 : 365;
  return Math.ceil((yt - d.getDay()) / 7.0);
}

/**
 * @see 判断当前浏览器环境
 */
export function Device(key) {
  const { userAgent: UA } = navigator;
  const UA_L = UA.toLowerCase();
  const judgeDevice = {
    trident: UA.includes("Trident"), //IE内核
    presto: UA.includes("Presto"), //opera内核
    iPad: UA.includes("iPad"), //是否iPad
    iPhone: UA.includes("iPhone"), //是否为iPhone或者QQHD浏览器
    webKit: UA.includes("AppleWebKit"), //苹果、谷歌内核
    webApp: UA.indexOf("Safari") === -1, //是否web应用程序，没有头部与底部
    mobile: !!UA.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
    ios: !!UA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: UA.includes("Android") || UA.includes("Linux"), //android终端或uc浏览器
    gecko: UA.includes("Gecko") && UA.indexOf("KHTML") === -1, //火狐内核
    wechat: UA_L.toLowerCase().match(/MicroMessenger/i) == "micromessenger" // 微信
  };
  return judgeDevice[key]
}

/**
 * @see 获取滚动条高度的函数
 */
export const getScrollTop = function () {
  let scroll_top = 0;
  if (document.documentElement && document.documentElement.scrollTop) {
    scroll_top = document.documentElement.scrollTop;
  }
  else if (document.body) {
    scroll_top = document.body.scrollTop;
  }
  return scroll_top;
}


/**
 * @see 传递一个对象,一个key值,回调中传递对象中取出层级深处的引用类型值和key,必须引用类型使用,否则无效
 * @param {(Object)} params
 * @param {string} key : 'a.b.c.d.e.f'
 * @return {Function} cb : cb('层级最深的引用类型值','最后一个key: f')
 */
export function splitKey({ params, key, cb } = {}) {
  const keyArr = key.split(".");
  // 如果切割后的数组长度大于1,说明 key='a.b.c' 需要深度查找到最后一个并修改,引用类型直接改会触发更新
  if (keyArr.length > 1) {
    // ['a','b','c']  =>  a:{b:{c:1}}
    // 声明变量保存前一次的值
    let temporary;
    // key值数组
    keyArr.forEach((v, i, arr) => {
      // 第一次时,没有前一个的值
      if (!temporary) {
        temporary = params[v];
        return;
      }
      // 如果循环的下标等于数组的下标减1,说明已经到最后一个了
      if (arr.length - 1 === i) {
        // 执行回调
        cb(temporary, v)
      } else {
        // 当前的 = 上次的[这次的key值]
        temporary = temporary[v];
      }
    });
  } else {
    cb(params, key)
  }
}

/**
 *  @see 将base64转换为文件
 * @param {string} base64
 * @returns {string | null}
 */
export function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename || 'img', { type: mime });
}


export function formatJson(filterVal, jsonData) {
  return jsonData.map(v => filterVal.map(j => {
    return v[j]
  }))
}

/**
 * Parse the time to string 解析时间戳
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * 传递时间戳,返回距离当前时间的 '人话' 例如:xxx 分钟||小时||天 前
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * 解析url,返回url对象.类似于express帮你解析的req
 * @param {string} url
 * @returns {Object}
 */
export function getQueryObject(url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

/**
 * 返回utf8字符串的字节长度
 * @param {string} input value
 * @returns {number} output value
 */
export function byteLength(str) {
  // returns the byte length of an utf8 string
  let s = str.length
  for (var i = str.length - 1; i >= 0; i--) {
    const code = str.charCodeAt(i)
    if (code > 0x7f && code <= 0x7ff) s++
    else if (code > 0x7ff && code <= 0xffff) s += 2
    if (code >= 0xDC00 && code <= 0xDFFF) i--
  }
  return s
}

/**
 * 过滤掉数组中为false的值
 * @param {Array} actual
 * @returns {Array}
 */
export function cleanArray(actual) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}

/**
 * @param {Object} json
 * @returns {Array}
 */
export function param(json) {
  if (!json) return ''
  return cleanArray(
    Object.keys(json).map(key => {
      if (json[key] === undefined) return ''
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
    })
  ).join('&')
}

/**
 * 将url中的查询字符串转为对象
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
    decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
      .replace(/\+/g, ' ') +
    '"}'
  )
}

/**
 * @param {string} val
 * @returns {string}
 */
export function html2Text(val) {
  const div = document.createElement('div')
  div.innerHTML = val
  return div.textContent || div.innerText
}

/**
 * 合并两个对象，给出最后一个优先级
 * Merges two objects, giving the last one precedence
 * @param {Object} target
 * @param {(Object|Array)} source
 * @returns {Object}
 */
export function objectMerge(target, source) {
  if (typeof target !== 'object') {
    target = {}
  }
  if (Array.isArray(source)) {
    return source.slice()
  }
  Object.keys(source).forEach(property => {
    const sourceProperty = source[property]
    if (typeof sourceProperty === 'object') {
      target[property] = objectMerge(target[property], sourceProperty)
    } else {
      target[property] = sourceProperty
    }
  })
  return target
}

/**
 * 切换某个dom元素上的某个class
 * @param {HTMLElement} element
 * @param {string} className
 */
export function toggleClass(element, className) {
  if (!element || !className) {
    return
  }
  let classString = element.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += '' + className
  } else {
    classString =
      classString.substr(0, nameIndex) +
      classString.substr(nameIndex + className.length)
  }
  element.className = classString
}

/**
 * @param {string} type
 * @returns {Date} 距离当前时间90天前的时间戳    ????
 */
export function getTime(type) {
  if (type === 'start') {
    return new Date().getTime() - 3600 * 1000 * 24 * 90
  } else {
    return new Date(new Date().toDateString())
  }
}

/**
 * 防抖
 * @param {Function} func  要防抖的函数 
 * @param {number} wait  防抖的间隔
 * @param {boolean} immediate  未知,没看懂 
 * @return {*}
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function (...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

/**
 * 深克隆(不完全版,建议使用lodash)
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

/**
 * @param {Array} arr
 * @returns {Array}
 */
export function uniqueArr(arr) {
  return Array.from(new Set(arr))
}

/**
 * 生成一个十三位随机字符串
 * @returns {string}
 */
export function createUniqueString() {
  const timestamp = +new Date() + ''
  const randomNum = parseInt((1 + Math.random()) * 65536) + ''
  return (+(randomNum + timestamp)).toString(32)
}

/**
 * 检查一个元素是否有一个类
 * Check if an element has a class
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/**
 * 将类添加到元素
 * Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls
}

/**
 * 从元素中删除类
 * Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}
/**
 * @see 检测传递的参数是不是number
 */
export const checknumber = (str) => {
  var reg = /^[0-9]+.?[0-9]*$/
  if (reg.test(str)) {
    return true
  }
  return false
}

