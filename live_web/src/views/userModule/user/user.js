import { mapGetters } from 'vuex'
import addUserBox from './addUser'
import addStatus from './userStatus'
import changeUser from './changeUser'
import { time } from '@/utils/common'
import { set, get } from '@/utils/storage'
export default {
  components: {
    addUserBox,
    addStatus,
    changeUser
  },
  data() {
    return {
      listLoading: false,
      loading: false,
      urlParams: '',
      username: '',
      nickname: '',
      room: '',
      groupname: '',
      delData: [],
      usergroupName: '',
      isAble: false,
      userChange: '',
      value: 2,
      users: get('userInfo').value,
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
    ...mapGetters([
      'userData',
      'openMerchantBox',
      'getMerchant',
      'groupArray',
      'singleUser'
    ])
  },
  mounted() {
    this.params = this.$route.query.groupName
    this.userSearch()
  },
  methods: {
    userSearch(params) {
      const data = {
        username: this.username,
        nicename: this.nickname,
        room: this.room,
        groupName: !this.params ? this.groupname : this.params,
        status: this.value === 2 ? '' : this.value,
        f_status: this.value1 === 2 ? '' : this.value1,
        a_status: this.value2 === 2 ? '' : this.value2,
        page: 1
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
    // operatingPermission() {
    //   const userInfo = sessionStorage.getItem('userInfo')
    //   const userGroup = JSON.parse(userInfo).value.groupName
    //   const arrayGroupName = this.userData.data
    //   const list = []
    //   for (let i = 0; i < arrayGroupName.length; i++) {
    //     if (arrayGroupName[i].groupName === userGroup) {
    //       console.log(arrayGroupName[0].groupName)
    //     }
    //   }
    //   // this.usergroupName = list
    // },
    addUser() {
      this.$store.dispatch('dialogFormVisible')
      if (!this.getMerchant) {
        this.$store.dispatch('getMerchant')
      }
      if (!this.groupArray) {
        this.$store.dispatch('findMerchantGroup')
      }
    },
    handleLookMsg(row) {
      this.userChange = row
      this.$store.dispatch('changeUserBoxShow', row)
    },
    handleStatus(row) {
      this.$store.dispatch('userBoxOpen', row)
    },
    handleDel(row) {
      const da = []
      da.push(row.id)
      this.delData = da
      this.delMethods({ id: this.delData })
    },
    delSelectUser() {
      if (this.delData.length === 0) {
        this.$message({
          message: `没有勾选的用户`,
          type: 'error'
        })
      } else {
        this.delMethods({ id: this.delData.toString() })
      }
    },
    delMethods(da) {
      this.$confirm('是否删除该用户', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.listLoading = true
          this.$store
            .dispatch('delUser', da)
            .then(rs => {
              this.listLoading = false
              this.handleCurrentChange(1)
              this.$message({
                message: `删除成功`,
                type: 'success'
              })
            })
            .catch(err => {
              this.listLoading = false
              return err
            })
        })
        .catch(() => {
          this.listLoading = false
        })
    },
    handleCurrentChange(page) {
      this.listLoading = true
      this.pages = page
      set('pages', this.pages)
      this.$store
        .dispatch('findUser', { page: this.pages })
        .then(() => {
          this.listLoading = false
        })
        .catch(err => {
          this.listLoading = false
          return err
        })
    },
    handleSelectionChange(row) {
      const arr = []
      for (let i = 0; i < row.length; i++) {
        arr.push(row[i].id)
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
      return row.roomId + '号'
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
