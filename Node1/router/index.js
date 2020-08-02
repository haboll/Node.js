const Router = require("koa-router")

const router = new Router({
    prefix: "/api"
})

const User = require("./user.js")
const Goods = require("./goods.js")


router.use("", User.routes(), User.allowedMethods());
router.use("", Goods.routes(), Goods.allowedMethods());


module.exports = router