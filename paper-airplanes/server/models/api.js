const sql = require('./dbSchema');
const util = require('../utils/utils');
const fs = require("fs");
const md5 = require('../utils/md5');
const uid = require("uuid/v1");
const users = sql.registerModel;
class routerApi {
  constructor() {

  }
  static async a(dataBuffer, type) {
    var name = Date.now() + '.' + type;
    var url = __dirname + '/../public/uploads/' + name
    return new Promise(function (resolve, reject) {
      fs.writeFile(url, dataBuffer, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(
            '/uploads/' + name
          );
        }
      });
    });
  }
  static async register(ctx) {
    let query = ctx.request.body
    let ip = ctx.request.headers['x-forwarded-for'] ||
      ctx.request.remoteAddress ||
      ctx.request.remoteAddress ||
      ctx.request.socket.remoteAddress;
    let data = {
      username: query.username,
      password: query.password,
      comfrmpassword: query.comfrmpassword,
      icon: query.icon,
      ip: ip,
      nicname: query.nicname,
      create_name: Date.now()
    }
    var base64Data = data.icon.replace(/^data:image\/\w+;base64,/, "");
    var type = data.icon.replace(/data:image\/([^;]+).*/i, '$1');//取类型
    var dataBuffer = new Buffer(base64Data, 'base64');
    var img = await routerApi.a(dataBuffer, type);
    
    let validate = await util(data);
    if (validate) {
      ctx.status = 500;
      ctx.error(validate)
    }
    let findUser = await users.find({ "username": data.username });
    if (findUser.length) {
      ctx.status = 500;
      ctx.error(500, "用户已存在");
    }
    let people = new users({
      username: data.username,
      password: md5(md5(data.password) + 'maple'),
      icon: img,
      ip: data.ip,
      nicname: data.nicname,
      create_name: data.create_name
    })
    let addUser = await people.save(people);
    if (!addUser) {
      ctx.error(500, "新建用户失败!");
    }
    ctx.body = {
      code: true
    }
  }

  static async login(ctx) {
    let query = ctx.request.body
    let uuid = uid();
    let data = {
      username: query.username,
      password: query.password
    }
    let findUser = await users.find({ username: data.username });
    if (findUser.length == 0) {
      ctx.status = 500;
      ctx.error(500, "用户不存在");
    }
    data.password = md5(md5(data.password) + 'maple');
    if (findUser[0].password !== data.password) {
      ctx.status = 403;
      ctx.error(403, "密码错误");
    }
    let params = {
      code: true,
      value: [{
        username: findUser[0].username,
        ip: findUser[0].ip,
        nicname: findUser[0].nicname,
        create_time: findUser[0].create_time
      }],
      token: uuid,
      token_create_time: Date.now()
    }
    global.user = params;
    ctx.body = params;
  }

  static async findAll(ctx) {
    let allUser = await users.find({});
    ctx.body = allUser;
  }
}

module.exports = routerApi;