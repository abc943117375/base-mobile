//账号正则
export const accReg = /^[A-Za-z_]*[A-Za-z_]+[A-Za-z0-9_]{5,20}$/;

//密码正则
export const passReg = /^\d+\S*[a-zA-Z]+$|^\d+[a-zA-Z]+\S*$|^[a-zA-Z]+\S*\d+$|^[a-zA-Z]+\d+\S*$|^\S*[a-zA-Z]+\d+$|^\S*\d+[a-zA-Z]+$/;

//汉字、英文、字符
export const chinese = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/g;

// 只能输入汉字
export const isChinese = /^[\u4e00-\u9fa5]{0,}$/;
//邮件
export const validaEail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.(com|cn|net)/;

//手机
export const validaPhone = /^1[3456789]\d{9}$/;
// export const validaPhone = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[189])\d{8}$/;

//电话
export const fixPhoneNum = /^([0-9]{3,4}-)?[0-9]{7,8}$/;

//邮编
export const postalCode = /^[0-9]\\d{5}$/;

//验证英文字符串
export const regEn = /[`~!@# $%^&*_+<>?:"{},./;'[\]]/im;
// export const regEn = /[`~!@# $%^&*()_+<>?:"{},.\/;'[\]]/im;

//验证中文字符串
// export const regu = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
export const regu = /[·！#￥——：；“”‘、，|《。》？、【】[\]]/im;

export const passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;

// 验证身份证号18位  (^\d{15}$)|(^\d{17}([0-9]|X|x)$)
export const idlengthReg = /^[1-9][a-zA-z0-9]{17,17}$/;
export const idReg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/g;
// 验证身份证15位
export const idlength15 = new RegExp(
  "^"
  + "\\d{6}" // 6位地区码
  + "\\d{2}" // 年YYYY
  + "((0[1-9])|(10|11|12))" // 月MM
  + "(([0-2][1-9])|10|20|30|31)" // 日DD
  + "\\d{3}"// 3位顺序码
  + "$"
)

// 验证姓名
export const nameReg = /^[\u4E00-\u9FA5A-Za-z]+$/;
export const cnEnNumber = /^[\u4E00-\u9FA5A-Za-z0-9-（）]+$/;

// 验证长度1-100、不能存在特殊字符
export const specialReg = /[\u4e00-\u9fa5_a-zA-Z0-9（）_]/img;

// 金额校验
export const prices = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;

// 银行卡正则
export const bankReg = /^([1-9]{1})(\d{14}|\d{18})$/;

// 校验特殊字符有为true patrn
export const patrn = /[`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/im;