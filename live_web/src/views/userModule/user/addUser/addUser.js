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
      if (value.length < 3 || value.length > 16) {
        callback(new Error('用户名称只能是3-16位'))
      }
      callback()
    }
    return {
      formLabelWidth: '100px',
      loading: false,
      ruleForm: {
        username: '',
        password: '',
        nicename: '',
        roomId: '',
        code: '',
        status: '',
        groupId: '',
        file: '',
        qq: '',
        phone: '',
        superior_user: !this.info
          ? get('userInfo').value.username
          : this.info.username
      },
      status: [{ value: 0, label: '不通过' }, { value: 1, label: '通过' }],
      gArray: [],
      rules: {
        username: [{ required: true, validator: userName, trigger: 'blur' }],
        nickname: [{ required: true, validator: nickName, trigger: 'blur' }],
        code: [{ required: true, message: '选择品牌别名', trigger: 'change' }],
        groupId: [{ required: true, message: '选择角色', trigger: 'change' }],
        value: [{ required: true, message: '选择审核状态', trigger: 'change' }]
      }
    }
  },
  computed: {
    ...mapGetters(['info', 'getMerchant', 'groupArray'])
  },
  mounted() {},
  watch: {
    'ruleForm.code': function(newValue, oldValue) {
      this.ruleForm.groupId = ''
    }
  },
  methods: {
    handleFile(file) {
      console.log(file)
    },
    // handleEdit() {
    //   console.log(111)
    // },
    common() {
      this.ruleForm.username = ''
      this.ruleForm.password = ''
      this.ruleForm.nicename = ''
      this.ruleForm.roomId = ''
      this.ruleForm.code = ''
      this.ruleForm.qq = ''
      this.ruleForm.phone = ''
    },
    onConfirm() {
      this.loading = true
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$store
            .dispatch('addUsers', this.ruleForm)
            .then(rs => {
              this.$message({
                message: `添加成功`,
                type: 'success'
              })
              this.$store.dispatch('dialogOff')
              this.$store.dispatch('findUser')
              this.common()
              this.loading = false
            })
            .catch(err => {
              this.loading = false
              return err
            })
        } else {
          this.loading = false
        }
      })
    },
    checkMerchant(val) {
      const groupData = this.groupArray.data
      const list = []
      for (let i = 0; i < groupData.length; i++) {
        if (groupData[i].group_code === val) {
          list.push(groupData[i])
        }
      }
      this.gArray = list
    },
    dialogOff() {
      this.$store.dispatch('dialogOff')
    },
    closeDialog() {
      this.$store.dispatch('dialogOff')
    }
  }
}
