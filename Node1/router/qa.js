const router = require("koa-router")();
const controller = require("../controller/qa.js")

// 获取用户信息
router.get("/getQAData", controller.getQAData)
router.post("/addQAData", controller.addQAData)
router.post("/updateQAData", controller.updateQAData)
router.delete("/deleteQAData", controller.deleteQAData)
router.get("/getQAList", controller.getQAList)

module.exports = router