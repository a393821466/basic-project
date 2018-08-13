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
      console.log(val)
    },
    handleEdit(row) {
      this.$store.dispatch('changeGroupBoxShow', row)
    },
    handleLook(row) {
      console.log(row)
    },
    handleDel(row) {
      console.log(row)
    }
  }
}
