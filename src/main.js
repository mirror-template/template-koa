const Koa = require("koa")
const errorHandle = require("./middleware/errorHandle")
const init = require("./middleware/init")
const useRoutes = require("./router")

const app = new Koa()
// 初始化
init(app)
// 全局错误捕获
app.use(errorHandle)
// 注册路由
useRoutes(app)

app.listen(3000, () => {
  console.log("服务已启动：http://127.0.0.1:3000")
})
