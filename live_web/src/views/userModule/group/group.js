import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      da: '',
      value: '',
      merchanrNickname: '',
      listLoading: false
    }
  },
  computed: {
    ...mapGetters(['groupMerchant', 'groupArray'])
  },
  mounted() {
    this.getMerchant()
    this.groupSearch()
  },
  methods: {
    addGroup() {
      console.log('addGroup')
    },
    groupSearch() {
      const da = {
        code: this.value === 'all' ? '' : this.value,
        groupname: this.merchanrNickname
      }
      this.listLoading = true
      this.$store.dispatch('findMerchantGroup', da).then(result => {
        this.listLoading = false
      }).catch(er => {
        this.listLoading = false
      })
    },
    getMerchant() {
      this.$store.dispatch('groupGetMerchant', { pagesize: 100 })
    },
    formatter(row, column) {
      return row.address
    },
    handleCurrentChange(val) {
      console.log(val)
    },
    handleEdit(row) {
      console.log(row)
    },
    handleLook(row) {
      console.log(row)
    },
    handleDel(row) {
      console.log(row)
    }
  }
}
