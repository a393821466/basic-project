const sql = require('../models/dbSchema')
const fs = require('fs')
const path = require('path')
const sqlAddress = sql.selectAddress
class init {
  static getInstance() {
    if (!init.instance) {
      init.instance = new init()
    }
    return init.instance
  }
  constructor() {
    init.InSql()
  }
  static async initSql() {
    let src = path.join(__dirname, '/../public/json/threeAdd.json')

    return new Promise((resolve, reject) => {
      fs.readFile(src, 'utf-8', (err, result) => {
        if (err) {
          reject(err)
        }
        resolve(result)
      })
    })
  }
  static async InSql() {
    let getJson = await init.initSql()
    if (!getJson) {
      return
    }
    let addJson = JSON.parse(getJson),
      pro = '',
      city = '',
      area='';
      for(let i of addJson){
        let t=i.children;
        for(let j of t){
          let d=j.children;
        }
      }
    // for (let i = 0; i < addJson.length; i++) {
    //   let province = addJson[i]
    //   for (let j = 0; j < province.children.length; j++) {
    //     let city = province.children[j]
    //     for (let k = 0; k < city.children.length; k++) {
    //       let area = city.children[k]
    //       console.log(area);
    //     }
    //   }
    // }
  }
}
//初始化
init.getInstance()
