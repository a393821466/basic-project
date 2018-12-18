/**
 * 交易密码弹出组件
 * 使用方法：接收参数:isTrue,参数类型为Boolean,true为显示,false为隐藏
 * 该组件发送监听参数:backFnc,参数类型为Object,分别为组件状态以及组件执行后的数据{isTrue:'',password:''}
 */
const keys = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0]
// let sendFlag = true // 防止重复发送密码
export default {
  name: 'pswBox',
  props: {
    isTrue: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      items: [0, 1, 2, 3, 4, 5],
      keys: keys(),
      password: [],
      pswDatas: {}
    }
  },
  methods: {
    backHandle() {
      this.clearPasswordHandle() // 返回时清除password
      this.pswDatas.isTrue = false
      this.$emit('backFnc', this.pswDatas) // 返回上级
    },
    keyUpHandle(e) {
      let text = e.currentTarget.innerText
      let len = this.password.length
      if (!text || len >= 6) return
      this.password.push(text)
      this.ajaxData()
    },
    delHandle() {
      if (this.password.length <= 0) return false
      this.password.pop()
    },
    ajaxData() {
      if (this.password.length >= 6) {
        let pswData = parseInt(this.password.join(' ').replace(/\s/g, ''))
        this.pswDatas = {
          isTrue: false,
          password: pswData
        }
        this.$emit('backFnc', this.pswDatas)
        this.password = []
      }
      return false
    },
    clearPasswordHandle: function() {
      this.password = []
    }
  }
}
