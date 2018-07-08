const mongoose=require("mongoose");
const db=require("./db");
const Schema=mongoose.Schema;

const addUser=new Schema({
  username:{type:String,required:true},
  password:{type:String,required:true},
  icon:{type:String},
  ip:{type:String},
  nicname:{type:String,required:true},
  create_time:{type:String,default:Date.now}
})

const registerModel = db.model("user", addUser);

module.exports={
  registerModel
}