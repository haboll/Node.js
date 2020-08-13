const router = require("koa-router")();
const controller = require("./../controller/user.js")

// 获取用户信息
router.get("/getUserInfo", controller.getUserInfo)
router.post("/addUserInfo", controller.addUserInfo)
router.post("/updateUserInfo", controller.updateUserInfo)
router.delete("/deleteUserInfo", controller.deleteUserInfo)
router.get("/getUserList", controller.getUserList)

module.exports = router