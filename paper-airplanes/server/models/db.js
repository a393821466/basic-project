const mongoose=require('mongoose');
const db=mongoose.createConnection('mongodb://localhost/plane');
db.on("error",(error)=>{
  console.log("连接数据库出错了"+error);
})
db.on("open",()=>{
  console.log("连接数据库成功");
})
module.exports=db;
