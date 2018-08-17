import { mapGetters } from 'vuex'
import MerchantModel from './addMerchantBox/index'
import { time } from '@/utils/common'
import { get } from '@/utils/storage'
export default {
  components: {
    MerchantModel
  },
  data() {
    return {
      listLoading: false,
      status: 0,
      merchanrNickname: '',
      value: '2',
      options: [
        {
          value: '2',
          label: '全部'
        },
        {
          value: '1',
          label: '启用'
        },
        {
          value: '0',
          label: '未启用'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['getMerchant', 'openMerchantBox'])
  },
  mounted() {
    if (!this.getMerchant || !get('merchant')) {
      this.gettMerchant()
    }
  },
  methods: {
    filterId(value, row) {
      return value.id
    },
    formaState(row) {
      let state = ''
      if (row.status === 0) {
        state = '未启用'
      } else {
        state = '启用'
      }
      return state
    },
    formDates(row, column) {
      const date = row[column.property]
      if (date === undefined) {
        return ''
      }
      return time('0', JSON.parse(date))
    },
    gettMerchant(params) {
      this.listLoading = true
      this.$store
        .dispatch('getMerchant', params)
        .then(rs => {
          this.listLoading = false
        })
        .catch(xhr => {
          this.listLoading = false
        })
    },
    handleCurrentChange(val) {
      this.listLoading = true
      this.gettMerchant({ page: val })
    },
    handleClick(row) {
      this.$confirm(`您确定执行此操作吗？`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          row.loading = true
          this.$store
            .dispatch('postStatus', row)
            .then(rs => {
              if (rs.statusCode) {
                row.loading = false
                this.$message({
                  type: 'success',
                  message: `成功${row.edit === true ? '停用' : '启用'}了 [ ${
                    row.merchant
                  } ] 品牌`
                })
                return (row.edit = !row.edit)
              }
            })
            .catch(xhr => {
              row.loading = false
            })
        })
        .catch(() => {})
    },
    deleteMerchant(row) {
      this.$confirm(`您确定删除该品牌吗?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.listLoading = true
          this.$store
            .dispatch('delMerchant', row)
            .then(rs => {
              this.gettMerchant({ page: 1 })
              this.listLoading = false
              this.$message({
                type: 'success',
                message: `执行成功`
              })
            })
            .catch(xhr => {
              this.listLoading = false
            })
        })
        .catch(() => {})
    },
    MerchantSearch() {
      this.listLoading = true
      const da = {
        merchant: this.merchanrNickname,
        status: this.value
      }
      this.gettMerchant(da)
    },
    addMerchantBox() {
      this.$store.dispatch('dialogFormVisible')
    }
  }
}
