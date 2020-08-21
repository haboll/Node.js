const Router = require("koa-router")

const router = new Router({
    prefix: "/api"
})

const User = require("./user.js")
const Auth = require("./auth.js")
const Goods = require("./goods.js")
const QA = require("./qa.js")


router.use("", User.routes(), User.allowedMethods());
router.use("", Auth.routes(), Auth.allowedMethods());
router.use("", Goods.routes(), Goods.allowedMethods());
router.use("", QA.routes(), QA.allowedMethods());


module.exports = router