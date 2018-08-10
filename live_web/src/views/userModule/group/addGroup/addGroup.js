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
    onConfirm(ruleForm) {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          console.log(111)
        } else {
          return false
        }
      })
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
