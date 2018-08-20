import { isvalidMerchant, isvalidCode } from '@/utils/validate'
import { getNoParser } from '@/utils/storage'
export default {
  props: {
    openMerchantBox: {
      type: Boolean,
      required: true
    }
  },
  data() {
    const merchantNames = (rule, value, callback) => {
      if (!isvalidMerchant(value)) {
        callback(new Error('品牌名称只能是汉字、字母、数字'))
      }
      if (value.length < 2 || value.length > 16) {
        callback(new Error('品牌名称只能是2-16位'))
      }
      callback()
    }
    const validateCode = (rule, value, callback) => {
      if (!isvalidCode(value)) {
        callback(new Error('品牌别名只能输入字母、数字，需字母开头'))
      }
      callback()
    }
    return {
      slots: `添加品牌`,
      loading: false,
      ruleForm: {
        merchantName: '',
        merchantViceName: '',
        value: '1'
      },
      rules: {
        merchantName: [
          { required: true, validator: merchantNames, trigger: 'blur' }
        ],
        merchantViceName: [
          { required: true, validator: validateCode, trigger: 'blur' }
        ],
        value: [{ required: true, message: '请选择状态', trigger: 'change' }]
      },
      options: [
        {
          value: '1',
          label: '启用'
        },
        {
          value: '0',
          label: '不启用'
        }
      ],
      close: false,
      formLabelWidth: '100px'
    }
  },
  methods: {
    common() {
      this.ruleForm.merchantName = ''
      this.ruleForm.merchantViceName = ''
    },
    dialogOff() {
      this.$store.dispatch('dialogOff')
      this.common()
    },
    closeDialog() {
      this.$store.dispatch('dialogOff')
      this.common()
    },
    getMerchants(val) {
      this.$store.dispatch('getMerchant', { page: val })
    },
    onConfirm() {
      this.loading = true
      this.$refs.ruleForm.validate(valid => {
        this.loading = false
        if (valid) {
          this.$store.dispatch('addMerchant', this.ruleForm).then(rs => {
            if (rs.statusCode) {
              this.$message({
                message: `成功添加 ${this.ruleForm.merchantName} 品牌`,
                type: 'success'
              })
              this.common()
              this.getMerchants(getNoParser('pages'))
              this.$store.dispatch('dialogOff')
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
