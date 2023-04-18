const homeRoute = require("./home")
const aboutRoute = require("./about")

const routes = [homeRoute, aboutRoute]

const useRoutes = (app) => {
  for (const route of routes) {
    app.use(route.routes())
    app.use(route.allowedMethods())
  }
}

module.exports = useRoutes
