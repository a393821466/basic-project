const mongoose = require('mongoose')
const db = require('./db')
const Schema = mongoose.Schema

const addUser = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  icon: { type: String },
  ip: { type: String },
  address: { type: String },
  nicname: { type: String, required: true },
  create_time: { type: String, default: Date.now }
})

const checkAddress = new Schema({
  code: { type: Number, require: true },
  name: { type: String },
  children: [
    {
      code: { type: Number, require: true },
      name: { type: String },
      children: [
        {
          code: { type: Number, require: true },
          name: { type: String }
        }
      ]
    }
  ]
})

const Message = new Schema({
  username: { type: String, required: true },
  nicname: { type: String, required: true },
  icon: { type: String, required: true },
  address: { type: String, required: true },
  message: { type: String, required: true },
  sendTime: { type: String, default: Date.now, required: true }
})

const registerModel = db.model('user', addUser)
const sendMessage = db.model('sendMsg', Message)
const selectAddress = db.model('selectAdd', checkAddress)

module.exports = {
  registerModel,
  sendMessage,
  selectAddress
}
