const router = require("koa-router")();
const controller = require("./../controller/user.js")

// 获取用户信息
router.get("/getUserInfo", controller.getUserInfo)
router.post("/addUser", controller.addUser)

module.exports = router