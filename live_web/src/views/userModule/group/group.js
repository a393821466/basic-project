import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      da: '',
      value: '',
      merchanrNickname: '',
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['groupMerchant'])
  },
  mounted() {
    this.getMerchant()
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
      console.log(da)
      // this.$store.dispatch('findMerchantGroup',)
    },
    getMerchant() {
      this.$store.dispatch('groupGetMerchant', { pagesize: 100 })
    },
    formatter(row, column) {
      return row.address
    }
  }
}
