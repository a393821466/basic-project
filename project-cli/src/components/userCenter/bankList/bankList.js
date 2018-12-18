/*
由于是用在银行卡，所以按获取银行卡接口返回数据来使用
参数1 dialogData : Object类型,里面包括(参数1：Dialog:Boolean类型,打开遮罩层;参数2:title:String类型,组件标题;参数3:maskTitle:String类型，弹出层列表标题)
参数2 bankList : Array类型,默认值无，动态数据 (name列表:参数为bankName,code列表:bankCode))
使用:
<dialog-box @actionIsFalse="actionIsFalse" :dialogData="dialogData" :bankList="bankList"></dialog-box>
actionIsFalse:父级接收的数据
dialogData:弹出框状态以及一些属性
bankList:银行卡数据
*/
import BScroll from '../../public/betterScroll'
export default {
  components: {
    BScroll
  },
  props: {
    dialogData: {
      type: Object
    },
    bankList: {
      type: Array
    }
  },
  data() {
    return {
      boxHeight: 0,
      listenScroll: true,
      isShowBox: false,
      das: {
        valueList: '',
        valueCode: ''
      }
    }
  },
  methods: {
    clickPopup(item) {
      this.$emit('actionIsFalse', item)
    },
    // 打开popup
    actionClick() {
      this.clickPopup(true)
      if (this.bankList) {
        this.isShowBox = true
        // this.getUlHeight()
      }
    },
    // 关闭popup
    clickMask(e) {
      this.clickPopup(false)
      // this.$emit('actionIsFalse', false)
    },
    radio_close() {
      this.clickMask()
    },
    radioClick(e, item) {
      // this.$emit('radioData', item)
      this.clickPopup(item)
    }
    // getUlHeight() {
    //   setTimeout(() => {
    //     const offsetBox = document.querySelector('.ms-radio')
    //     const Redis_title = document.querySelector('.Radio_title')
    //     const bankListBox = document.querySelector('.bankListBox')
    //     this.boxHeight = parseInt(
    //       offsetBox.offsetHeight - Redis_title.offsetHeight
    //     )
    //     const aLi = document.getElementsByTagName('li')
    //     let sum = 0
    //     const _this = this
    //     for (let i = 0; i < aLi.length; i++) {
    //       sum += aLi[i].offsetHeight
    //     }
    //     if (sum > _this.boxHeight) {
    //       bankListBox.style.overflowY = 'auto'
    //     }
    //   }, 100)
    // }
  }
}
