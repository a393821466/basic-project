const router = require("koa-router")();
const api = require("../models/api");
// const multer = require('koa-multer'); //上传模块
const authToken = require("../utils/authToken");
// var storage = multer.diskStorage({
//   //文件保存路径
//   destination: function (req, file, cb) {
//     cb(null, 'public/uploads/')
//   },
//   //修改文件名称
//   filename: function (req, file, cb) {
//     var fileFormat = (file.originalname).split(".");
//     cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
//   }
// })
//加载配置
// var upload = multer({ storage: storage });upload.single('file')

router.post("/login", api.login)
  .post("/register", api.register)
  .get("/findAll", authToken(), api.findAll)

module.exports = router;