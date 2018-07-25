<template>
  <div>
    <div id="loginMask">
      <div class="login" v-if="loginBox">
        <h1>登陆</h1>
        <form>
          <input type="text" name="username" placeholder="用户名" v-model="username">
          <input type="password" name="password" placeholder="密码" v-model="password">
        </form>
        <div class="login_btn">
          <input type="button" class="logins" @click="login" value="登陆">
          <input type="button" @click="toRegister" value="去注册">
        </div>
      </div>
      <div class="register" v-if="!loginBox">
        <form enctype="multipart/form-data">
          <img-inputer id="upload_file" v-model="icon" accept="image/*" theme="light" size="large" @onChange="handleFile" ref="inputer" />
          <input type="text" name="username" placeholder="用户名" v-model="reUsername">
          <input type="password" name="password" placeholder="密码" v-model="rePassword">
          <input type="password" name="comfrmpassword" placeholder="确认密码" v-model="reComfrmpassword">
          <input type="text" name="nicname" placeholder="昵称" v-model="nicname">
          <div class="three-level-address" id="three_level_address">
            <div class="region-div">
              <input type="text" placeholder="选择您所在位置" v-model="region" maxlength="80" readonly="readonly" @click="showAddressPicker" />
              <mt-popup v-model="regionVisible" position="bottom" class="region-popup">
                <mt-picker :slots="myAddressSlots" valueKey="name" :visibleItemCount="5" @change="addressChange" :itemHeight="40"></mt-picker>
              </mt-popup>
            </div>
          </div>
        </form>
        <div class="register_btn">
          <input type="button" class="registers" @click="register" value="注册">
          <input type="button" value="去登陆" @click="toLogin">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import axios from 'axios'
import ImgInputer from 'vue-img-inputer'
import api from '../../api/apis'
import { mapGetters } from 'vuex'
import threeLevelAddress from '../../assets/json/address.json'

export default {
  data() {
    return {
      loginBox: true,
      username: '',
      password: '',
      reUsername: '',
      rePassword: '',
      reComfrmpassword: '',
      nicname: '',
      icon: '',
      bigSize: 0,
      region: '', //三级地址
      province: '', //省
      city: '', //市
      county: '', //县

      regionVisible: false, //弹出框是否可见
      regionInit: false, //禁止地区选择器自动初始化，picker组件会默认进行初始化，导致一进入页面就会默认选中一个初始3级地址

      //picker组件插槽
      myAddressSlots: [
        //省
        {
          flex: 1,
          values: this.getProvinceArr(), //省份数组
          className: 'slot1',
          textAlign: 'center'
        },
        //分隔符
        {
          divider: true,
          content: '',
          className: 'slot2'
        },
        //市
        {
          flex: 1,
          values: this.getCityArr('北京市'),
          className: 'slot3',
          textAlign: 'center'
        },
        {
          divider: true,
          content: '',
          className: 'slot4'
        },
        //县
        {
          flex: 1,
          values: this.getCountyArr('北京市', '市辖区'),
          className: 'slot5',
          textAlign: 'center'
        }
      ]
    }
  },
  created() {
    //初始化设备高度为设备高度height 100%
    // let orderHeight = window.innerHeight
    // document.getElementById('three_level_address').style.height =
    //   orderHeight + 'px'
  },
  methods: {
    login() {
      let data = { username: this.username, password: this.password }
      api
        .fetchPost('/api/login', data)
        .then(rs => {
          this.$store.dispatch('login', rs)
          if (rs.token) {
            this.$router.push({ path: 'getMessage' })
          }
        })
        .catch(er => {
          MessageBox('提示', er.data.msg)
        })
    },
    register(e, b) {
      // let files = this.icon
      // let params = new FormData()
      // params.append('file',files.name)
      // let config = {
      //   headers: { 'Content-Type': 'multipart/form-data' }
      // }
      // axios.post('/api/register',params,config).then(rs=>{
      //   console.log(rs);
      // })

      let file = document.querySelector('img')
      if (!file) {
        MessageBox('提示', '虽然您不是很情愿,但是头像是必须的')
        return
      } else {
        file = document.querySelector('img').src
      }
      let data = {
        username: this.reUsername,
        password: this.rePassword,
        comfrmpassword: this.reComfrmpassword,
        nicname: this.nicname,
        region: this.region,
        icon: file
      }
      if (
        !data.username ||
        !data.password ||
        !data.comfrmpassword ||
        !data.nicname ||
        !data.region
      ) {
        MessageBox('提示', '信息缺一不可哦，必须要填完')
        return
      }
      if (this.bigSize == 1) {
        MessageBox('提示', '图片过大，不能大于200k')
        return
      }
      api
        .fetchPost('/api/register', data)
        .then(rs => {
          if (rs.code !== 500) {
            MessageBox.confirm('注册成功,直接登录?').then(ok => {
              if (ok) {
                this.username = data.username
                this.password = data.password
                this.login()
              }
            })
          } else {
            MessageBox('提示', rs.msg)
            return
          }
        })
        .catch(xhr => {
          MessageBox('提示', xhr.data.msg)
          return
        })
    },
    handleFile(e) {
      let inputDOM = e.size
      let size = Math.floor(inputDOM / 1024)
      if (size > 200) {
        // 这里可以加个文件大小控制
        MessageBox('提示', '不能大于200k')
        this.bigSize = 1
        return false
      }
      this.bigSize = 0
    },
    toLogin() {
      this.loginBox = !this.loginBox
    },
    toRegister() {
      this.loginBox = !this.loginBox
    },
    //打开地址选择器
    showAddressPicker() {
      this.regionVisible = true
    },
    //picker组件的change事件，进行取值赋值
    addressChange(picker, values) {
      if (this.regionInit) {
        console.log(values)
        picker.setSlotValues(1, this.getCityArr(values[0]['name']))
        picker.setSlotValues(
          2,
          this.getCountyArr(values[0]['name'], values[1]['name'])
        )
        this.region =
          values[0]['name'] + ',' + values[1]['name'] + ',' + values[2]['name']
      } else {
        this.regionInit = true
      }
    },
    //遍历json，返回省级对象数组
    getProvinceArr() {
      let provinceArr = []
      threeLevelAddress.forEach(function(item) {
        let obj = {}
        obj.name = item.name
        obj.code = item.code
        provinceArr.push(obj)
      })
      return provinceArr
    },
    //遍历json，返回市级对象数组
    getCityArr(province) {
      // console.log("省：" + province);
      let cityArr = []
      threeLevelAddress.forEach(function(item) {
        if (item.name === province) {
          item.children.forEach(function(args) {
            let obj = {}
            obj.name = args.name
            obj.code = args.code
            cityArr.push(obj)
          })
        }
      })
      return cityArr
    },
    //遍历json，返回县级对象数组
    getCountyArr(province, city) {
      let countyArr = []
      threeLevelAddress.forEach(function(item) {
        if (item.name === province) {
          item.children.forEach(function(args) {
            if (args.name === city) {
              args.children.forEach(function(param) {
                let obj = {}
                obj.name = param.name
                obj.code = param.code
                countyArr.push(obj)
              })
            }
          })
        }
      })
      return countyArr
    }
  },
  components: {
    imgInputer: ImgInputer
  }
}
</script>

<style lang="stylus" scoped>
#loginMask {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 99;
}

.img-inputer--large {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  display: block;
}

.login, .register {
  margin-top: 1rem;

  h1 {
    text-align: center;
    font-size: 0.8rem;
    color: #eee;
    margin: 1.4rem 0;
  }
}

input[name='username'], input[name='password'], input[name='comfrmpassword'], input[name='nicname'], .region-div input {
  width: 70%;
  height: 0.8rem;
  text-indent: 0.4rem;
  margin: 0.5rem auto;
  display: block;
  border-radius: 2rem;
  border: none;
  outline: none;
}

.login_btn, .register_btn {
  width: 70%;
  margin: 0 auto;

  .logins {
    background: deepskyblue !important;
    float: left !important;
  }

  .registers {
    background: deepskyblue !important;
    float: left !important;
  }

  input[type='button'] {
    width: 45%;
    height: 1rem;
    border-radius: 1rem;
    color: #fff;
    background: crimson;
    border: none;
    margin: 0.5rem auto 0;
    box-shadow: none;
    -webkit-appearance: none;
    float: right;
  }
}

.three-level-address {
  width: 100%;
  text-align: left;
  color: #ffffff;
}

.input-icon {
  display: inline-block;
  vertical-align: middle;
}

.input-icon i {
  font-size: 2rem;
}

.region-popup {
  width: 100%;
}

.data-show-div {
  margin-top: 1rem;
  margin-left: 1rem;
  color: #45C473;
}

.data-show-div span {
  color: #ffffff;
  font-size: 0.8rem;
}
</style>