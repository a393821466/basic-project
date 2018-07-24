const formartDate = require('./formart')
const authToken = () => {
  return async (ctx, next) => {
    if (ctx.request.header['authorization']) {
      let userMsg = global.user
      let verifyToken = userMsg.token
      let createTime = !verifyToken
        ? ctx.error(401, 'token不存在')
        : formartDate(Date.now(), userMsg.token_create_time)
      console.log(createTime)
      if (createTime > 7200) {
        global.user = {}
        ctx.error(401, 'token已失效')
      }
      global.user = {
        code: true,
        value: {
          username: userMsg.value[0].username,
          ip: userMsg.value[0].ip,
          nicname: userMsg.value[0].nacname,
          create_time: userMsg.value[0].create_time
        },
        token: userMsg.token,
        token_create_time: Date.now()
      }
      await next()
    } else {
      ctx.error(401, '没有token')
    }
  }
}

module.exports = authToken
