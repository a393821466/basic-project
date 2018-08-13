import { mapGetters } from 'vuex'
import { isvalidMerchant } from '@/utils/validate'
import ImgInputer from 'vue-img-inputer'
export default {
  props: {
    openGroupBox: Boolean,
    required: true
  },
  data() {
    const groupName = (rule, value, callback) => {
      if (!isvalidMerchant(value)) {
        callback(new Error('用户组名称只能是汉字、字母、数字'))
      }
      if (value.length < 2 || value.length > 16) {
        callback(new Error('用户组名称只能是2-16位'))
      }
      callback()
    }
    return {
      formLabelWidth: '100px',
      loading: false,
      groupMerchantName: '',
      bigSize: 0,
      ruleForm: {
        name: '',
        introduce: '',
        value: '',
        file: ''
      },
      rules: {
        name: [{ required: true, validator: groupName, trigger: 'blur' }],
        value: [{ required: true, message: '选择品牌别名', trigger: 'change' }]
      }
    }
  },
  computed: {
    ...mapGetters(['groupMerchant'])
  },
  methods: {
    clearInput() {
      this.ruleForm.name = ''
      this.ruleForm.value = ''
      this.ruleForm.introduce = ''
    },
    onConfirm(ruleForm) {
      const file = document.querySelector('.img-inputer__preview-img').src
      this.ruleForm.file = file
      if (this.bigSize === 1) {
        this.$message({ message: '图标不能大于200k', type: 'error' })
        return
      }
      this.$refs.ruleForm.validate(valid => {
        const da = {
          code: this.ruleForm.value,
          groupName: this.ruleForm.name
        }
        if (valid) {
          this.$store
            .dispatch('addGroup', this.ruleForm)
            .then(rs => {
              this.$message({
                message: `成功给${this.ruleForm.value}添加 ${
                  this.ruleForm.name
                } 用户组`,
                type: 'success'
              })
              this.$store.dispatch('dialogOff')
              this.$store.dispatch('findMerchantGroup', da)
              this.clearInput()
            })
            .catch(err => {
              return err
            })
        } else {
          return false
        }
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
    dialogOff() {
      this.$store.dispatch('dialogOff')
    },
    closeDialog() {
      this.$store.dispatch('dialogOff')
    }
  },
  components: {
    imgInputer: ImgInputer
  }
}
