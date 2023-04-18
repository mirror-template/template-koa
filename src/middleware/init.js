const logger = require("koa-logger")
const { koaBody } = require("koa-body")

// 日志打印、请求体解析
const init = (app) => {
  app.use(logger())
  app.use(koaBody())
}

module.exports = init