const router=require("koa-router")();
const api=require("../models/api");
const authToken=require("../utils/authToken");
router.post("/login",api.login)
.post("/register",api.register)
.get("/findAll",authToken(),api.findAll)

module.exports=router;