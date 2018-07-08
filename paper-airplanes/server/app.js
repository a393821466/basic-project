const Koa=require("koa");
const router=require("./controller/router");
const bodyparser=require("koa-bodyparser");
const static=require("koa-static");
const path=require("path");
// const cors=require("koa-cors");
const err=require("./controller/err").errorMiddleware;
const app=new Koa();
app.use(static(path.join(__dirname, './public')))
app.use(bodyparser());
// app.use(cors());
app.use(err());
app.use(router.routes()).use(router.allowedMethods());

module.exports=app;