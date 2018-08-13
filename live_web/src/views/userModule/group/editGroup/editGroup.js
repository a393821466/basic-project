import { mapGetters } from 'vuex'
import ImgInputer from 'vue-img-inputer'
export default {
  props: {
    singData: Object,
    required: true
  },
  data() {
    return {
      formLabelWidth: '100px',
      loading: false,
      groupMerchantName: '',
      imgBoxShow: false,
      morenImg: require('../../../../assets/images/group/groupIcon.png'),
      bigSize: 0,
      ruleForm: {
        name: '',
        introduce: '',
        value: '',
        file: ''
      }
    }
  },
  computed: {
    ...mapGetters(['groupMerchant'])
  },
  mounted() {},
  methods: {
    clearInput() {
      this.ruleForm.name = ''
      this.ruleForm.introduce = ''
    },
    onConfirm() {
      const file = !document.querySelector('.img-inputer__preview-img')
        ? ''
        : document.querySelector('.img-inputer__preview-img').src
      this.ruleForm.file = file
      if (this.bigSize === 1) {
        this.$message({ message: '图标不能大于200k', type: 'error' })
        return
      }
      const da = {
        id: this.singData.id,
        code: !this.ruleForm.value ? this.singData.code : this.ruleForm.value,
        groupname: !this.ruleForm.name
          ? this.singData.name
          : this.ruleForm.name,
        introduce: !this.ruleForm.introduce
          ? this.singData.introduce
          : this.ruleForm.introduce,
        icon: !this.ruleForm.file ? '' : this.ruleForm.file
      }
      this.$store
        .dispatch('changeGroupConfirm', da)
        .then(rs => {
          this.$message({
            message: '更新成功',
            type: 'success'
          })
          this.$store.dispatch('changeGroupBoxHide')
          this.$store.dispatch('findMerchantGroup')
          this.clearInput()
        })
        .catch(err => {
          return err
        })
    },
    handleFile(e) {
      const inputDOM = e.size
      const size = Math.floor(inputDOM / 1024)
      if (size > 200) {
        // 这里可以加个文件大小控制
        this.$message({ message: '图标不能大于200k', type: 'error' })
        this.bigSize = 1
        return false
      }
      this.bigSize = 0
    },
    singImgShow() {
      this.imgBoxShow = true
    },
    dialogOff() {
      this.$store.dispatch('changeGroupBoxHide')
      this.imgBoxShow = false
    },
    closeDialog() {
      this.$store.dispatch('changeGroupBoxHide')
      this.imgBoxShow = false
    }
  },
  components: {
    ImgInputer
  }
}
