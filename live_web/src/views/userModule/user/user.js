import { mapGetters } from 'vuex'
import { time } from '@/utils/common'
export default {
  data() {
    return {
      listLoading: false,
      username: '',
      nickname: '',
      room: '',
      groupname: '',
      delData: [],
      isAble: false,
      value: 2,
      optionStatus: [
        {
          value: 2,
          label: '全部'
        },
        {
          value: 1,
          label: '已审核'
        },
        {
          value: 0,
          label: '未审核'
        }
      ],
      value1: 2,
      f_status: [
        {
          value1: 2,
          label: '全部'
        },
        {
          value1: 1,
          label: '正常'
        },
        {
          value1: 0,
          label: '限时登陆'
        },
        {
          value1: -1,
          label: '冻结'
        }
      ],
      value2: 2,
      a_status: [
        {
          value2: 2,
          label: '全部'
        },
        {
          value2: 1,
          label: '正常'
        },
        {
          value2: 0,
          label: '限时发言'
        },
        {
          value2: '-1',
          label: '禁言'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['userData'])
  },
  mounted() {
    this.userSearch()
  },
  methods: {
    userSearch() {
      const data = {
        username: this.username,
        nicename: this.nickname,
        room: this.room,
        groupName: this.groupname,
        status: this.value === 2 ? '' : this.value,
        f_status: this.value1 === 2 ? '' : this.value1,
        a_status: this.value2 === 2 ? '' : this.value2
      }
      this.listLoading = true
      this.$store
        .dispatch('findUser', data)
        .then(result => {
          this.listLoading = false
        })
        .catch(err => {
          this.listLoading = false
          return err
        })
    },
    addUser(row) {
      console.log(row)
    },
    handleEdit(row) {
      console.log(row)
    },
    handleDel(row) {
      console.log(row)
    },
    handleCurrentChange(page) {
      this.listLoading = true
      this.$store.dispatch('findUser', { page: page }).then(() => {
        this.listLoading = false
      }).catch((err) => {
        this.listLoading = false
        return err
      })
    },
    handleSelectionChange(row) {
      const arr = []
      for (let i = 0; i < row.length; i++) {
        arr.push(row[i].id.toString())
      }
      this.delData = arr
    },
    formStatus(row) {
      if (row.status === 0) {
        return '未审核'
      }
      if (row.status === 1) {
        return '已审核'
      }
    },
    formfstatus(row) {
      if (row.f_status === 0) {
        return '限时冻结中'
      }
      if (row.f_status === 1) {
        return '正常'
      }
      if (row.f_status === -1) {
        return '永久冻结'
      }
    },
    formastatus(row) {
      if (row.a_status === 0) {
        return '限时禁言中'
      }
      if (row.a_status === 1) {
        return '正常'
      }
      if (row.a_status === -1) {
        return '永久禁言'
      }
    },
    RoomNumber(row) {
      if (!row.roomId) {
        return '未分配'
      }
      return row.roomId
    },
    formDates(row, column) {
      const date = row[column.property]
      if (date === undefined) {
        return ''
      }
      return time('0', JSON.parse(date))
    },
    checkSelectable(row) {
      if (row.username === 'admin') {
        return 0
      } else {
        return 1
      }
    }
  }
}
