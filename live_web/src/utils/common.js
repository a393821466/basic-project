// 格式化时间戳
const commonMethods = {
  time: (v, nows) => {
    const now = new Date(nows)
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const date = now.getDate()
    const hour = now.getHours()
    const minute = now.getMinutes()
    const second = now.getSeconds()
    const mStr = minute < 10 ? '0' + minute : minute
    const sStr = second < 10 ? '0' + second : second
    const noHourse =
      v === '0'
        ? year + '-' + month + '-' + date
        : year + '-' + month + '-' + date + ' ' + hour + ':' + mStr + ':' + sStr
    return noHourse
  }
}

module.exports = commonMethods
