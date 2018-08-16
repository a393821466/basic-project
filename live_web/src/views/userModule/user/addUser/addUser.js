import { mapGetters } from 'vuex'
import { isvalidUsername, isvalidMerchant } from '@/utils/validate'
import { get } from '@/utils/storage'
export default {
  props: {
    openUserBox: Boolean,
    required: true
  },
  data() {
    const userName = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('用户名为5-16位仅英文、数字和下划线组成'))
      }
      callback()
    }
    const nickName = (rule, value, callback) => {
      if (!isvalidMerchant(value)) {
        callback(new Error('用户名称只能是汉字、字母、数字'))
      }
      if (value.length < 4 || value.length > 16) {
        callback(new Error('用户名称只能是4-16位'))
      }
      callback()
    }
    return {
      formLabelWidth: '100px',
      loading: false,
      ruleForm: {
        username: '',
        password: '',
        nickname: '',
        room: '',
        value1: '',
        value2: '',
        superior_user: !this.info
          ? get('userInfo').value.username
          : this.info.username,
        file: ''
      },
      rules: {
        username: [{ required: true, validator: userName, trigger: 'blur' }],
        nickname: [{ required: true, validator: nickName, trigger: 'blur' }]
      }
    }
  },
  computed: {
    ...mapGetters(['info', 'getMerchant', 'groupArray'])
  },
  created() {},
  mounted() {},
  methods: {
    handleFile(file) {
      console.log(file)
    },
    handleLookMsg() {
      console.log(111)
    },
    onConfirm() {
      console.log('确认')
    },
    dialogOff() {
      this.$store.dispatch('dialogOff')
    },
    closeDialog() {
      this.$store.dispatch('dialogOff')
    }
  }
}
