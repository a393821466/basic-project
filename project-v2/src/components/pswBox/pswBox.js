/**
 * 交易密码弹出组件
 * 使用方法：父级组件传入isTrue,true为显示组件,false为隐藏组件
 */
const keys = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0]
// let sendFlag = true // 防止重复发送密码
export default {
  props: {
    isTrue: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      items: [0, 1, 2, 3, 4, 5],
      keys: keys(),
      password: [],
      pswDatas: {}
    }
  },
  methods: {
    backHandle () {
      this.clearPasswordHandle() // 返回时清除password
      this.pswDatas.isTrue = false
      this.$emit('backFnc', this.pswDatas) // 返回上级
    },
    keyUpHandle (e) {
      let text = e.currentTarget.innerText
      let len = this.password.length
      if (!text || len >= 6) return
      this.password.push(text)
      this.ajaxData()
    },
    delHandle () {
      if (this.password.length <= 0) return false
      this.password.pop()
    },
    ajaxData () {
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
    clearPasswordHandle: function () {
      this.password = []
    }
  }
}
