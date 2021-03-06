export function isvalidUsername(str) {
  const userRegexp = /^[a-zA-Z0-9_-]{5,16}$/
  return userRegexp.test(str.trim())
}

export function isvalidPssword(str) {
  const userRegexp = /^[a-zA-Z0-9_-]{6,16}$/
  return userRegexp.test(str)
}

export function isvalidMerchant(str) {
  const codeRegexp = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/
  return codeRegexp.test(str)
}

export function isvalidCode(str) {
  const merRegexp = /^(?!\d+$)[\da-zA-Z]+$/
  return merRegexp.test(str)
}

/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}
