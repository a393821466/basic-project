const http=require("./server/app.js");

http.listen(4000,'127.0.0.1',()=>{
  global.user={};
  console.log("4000端口已开启");
})