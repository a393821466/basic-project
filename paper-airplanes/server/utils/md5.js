const crypto=require("crypto");
const md5=(psw)=>{
  let addPsw = crypto.createHash('md5');
  let password = addPsw.update(psw).digest("base64");
  return password;
}
module.exports=md5;