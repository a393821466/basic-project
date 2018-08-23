import { formartDate } from '@/utils/common'
import { mapGetters } from 'vuex'
import { getNoParser } from '@/utils/storage'
import moment from 'moment'
export default {
  props: {
    openStatusBox: Object,
    required: true
  },
  computed: {
    ...mapGetters(['userSubTable'])
  },
  data() {
    return {
      loading: false,
      formLabelWidth: '100px',
      freeze: true,
      anexcuse: true,
      ruleForm: {
        f_status: 1,
        end_freeze: '',
        a_status: 1,
        end_anexcuse: ''
      },
      f_status: [
        {
          value: 1,
          label: '正常'
        },
        {
          value: 0,
          label: '限时冻结'
        },
        {
          value: -1,
          label: '永久冻结'
        }
      ],
      a_status: [
        {
          value: 1,
          label: '正常'
        },
        {
          value: 0,
          label: '限时禁言'
        },
        {
          value: -1,
          label: '永久禁言'
        }
      ]
    }
  },
  methods: {
    onConfirm() {
      const da = {
        id: this.$refs.refInput.$attrs.ids,
        f_status: this.ruleForm.f_status,
        end_freeze:
          this.ruleForm.f_status !== 0 ? '' : this.ruleForm.end_freeze,
        a_status: this.ruleForm.a_status,
        end_anexcuse:
          this.ruleForm.a_status !== 0
            ? ''
            : this.ruleForm.end_anexcuse
      }
      if (da.f_status === 0) {
        if (!da.end_freeze) {
          this.$message.error('请选择冻结时间')
          return
        }
      }
      if (da.a_status === 0) {
        if (!da.end_anexcuse) {
          this.$message.error('请选择禁言时间')
          return
        }
      }
      if (formartDate(da.end_freeze) < formartDate(new Date())) {
        this.$message.error('禁言时间不能小于当天时间')
        return
      }
      if (formartDate(da.end_anexcuse) < formartDate(new Date())) {
        this.$message.error('禁言时间不能小于当天时间')
        return
      }
      this.$store.dispatch('userStatus', da).then(result => {
        this.$message({
          message: '操作成功',
          type: 'success'
        })
        this.$store.dispatch('userBoxClose')
        this.getUserInfo(getNoParser('pages'))
      })
    },
    getUserInfo(val) {
      this.$store.dispatch('findUser', { page: val })
    },
    dialogOff() {
      this.freeze = true
      this.anexcuse = true
      this.$store.dispatch('userBoxClose')
    },
    closeDialog() {
      this.freeze = true
      this.anexcuse = true
      this.$store.dispatch('userBoxClose')
    },
    change_freeze() {
      this.freeze = false
    },
    change_anexcuse() {
      this.anexcuse = false
    },
    fMoment(t) {
      const s = typeof t === 'string' ? parseInt(t) * 1000 : t
      return moment(s).format('YYYY-MM-DD HH:mm')
      // return time('1', s)
    }
  }
}
