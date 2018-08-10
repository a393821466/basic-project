import { mapGetters } from 'vuex'
import addGroup from './addGroup/'
export default {
  data() {
    return {
      da: '',
      value: '',
      merchanrNickname: '',
      listLoading: false
    }
  },
  components: {
    addGroup
  },
  computed: {
    ...mapGetters(['groupMerchant', 'groupArray', 'openMerchantBox'])
  },
  mounted() {
    this.getMerchant()
    this.groupSearch()
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
    addGroup() {
      this.$store.dispatch('dialogFormVisible')
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
