import { mapGetters } from 'vuex'
import addGroup from './addGroup/'
import editGroup from './editGroup/'
export default {
  data() {
    return {
      da: '',
      value: '',
      merchanrNickname: '',
      listLoading: false
      // formLabelWidth: '100px'
    }
  },
  components: {
    addGroup,
    editGroup
  },
  computed: {
    ...mapGetters([
      'groupMerchant',
      'groupArray',
      'openMerchantBox',
      'singData'
    ])
  },
  mounted() {
    this.getMerchant()
    this.groupSearch()
    // console.log(this.groupMerchant)
  },
  methods: {
    groupSearch() {
      const da = {
        code: this.value === 'all' ? '' : this.value,
        groupname: this.merchanrNickname
      }
      this.listLoading = true
      this.$store
        .dispatch('findMerchantGroup', da)
        .then(result => {
          this.listLoading = false
        })
        .catch(er => {
          this.listLoading = false
        })
    },
    getMerchant() {
      this.$store.dispatch('groupGetMerchant', { pagesize: 100 })
    },
    addGroup(val) {
      this.$store.dispatch('dialogFormVisible')
    },
    handleCurrentChange(val) {
      this.listLoading = true
      this.$store.dispatch('findMerchantGroup', { page: val }).then(rs => {
        this.listLoading = false
      })
    },
    handleCompetence(row) {
      console.log('权限' + row)
    },
    handleEdit(row) {
      this.$store.dispatch('changeGroupBoxShow', row)
    },
    handleLook(row) {
      console.log(row)
    },
    handleDel(row) {
      this.$confirm(`您确定删除该用户组吗?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.listLoading = true
          this.$store
            .dispatch('delGroupUser', { id: row.id })
            .then(result => {
              this.listLoading = false
              this.$store.dispatch('findMerchantGroup')
            })
            .catch(err => {
              this.listLoading = false
              return err
            })
        })
        .catch(() => {})
    }
  }
}
