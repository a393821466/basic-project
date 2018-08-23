import { mapGetters } from 'vuex'
import userModules from '../../../../api/userModule'
import { getNoParser } from '@/utils/storage'
export default {
  props: ['changeUser'],
  data() {
    return {
      formLabelWidth: '100px',
      changeInput: false,
      disabled: true,
      loading: false,
      bigSize: 0,
      ruleForm: {
        nickname: '',
        roomId: '',
        status: 1,
        file: '',
        qq: '',
        phone: ''
      },
      optionStatus: [
        {
          value: 1,
          label: '通过'
        },
        {
          value: 0,
          label: '未通过'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['userSubTable'])
  },
  methods: {
    common() {
      this.ruleForm.nickname = ''
      this.ruleForm.roomId = ''
      this.ruleForm.qq = ''
      this.ruleForm.phone = ''
    },
    closeChangeUser() {
      this.$store.dispatch('closeUserBoxHide')
      this.disabled = true
    },
    dialogOff() {
      this.$store.dispatch('closeUserBoxHide')
      this.disabled = true
    },
    changeUserBack() {
      this.disabled = false
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
    changeUserInfo(e, v) {
      const file = !document.querySelector('.img-inputer__preview-img')
        ? ''
        : document.querySelector('.img-inputer__preview-img').src
      this.ruleForm.file = file
      if (this.bigSize === 1) {
        this.$message({ message: '图标不能大于200k', type: 'error' })
        return
      }
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          const dataset = {
            id: v,
            nickname: this.ruleForm.nickname,
            roomId: this.ruleForm.roomId,
            status: this.ruleForm.status,
            avator: this.ruleForm.file,
            qq: this.ruleForm.qq,
            phone: this.ruleForm.phone
          }
          this.loading = true
          userModules.updateUser(dataset).then(result => {
            this.$message({
              message: `更新资料成功`,
              type: 'success'
            })
            this.dialogOff()
            this.loading = false
            this.$store.dispatch('findUser', { page: getNoParser('pages') })
          })
        } else {
          return false
        }
      })
    }
  }
}
