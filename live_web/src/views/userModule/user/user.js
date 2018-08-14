export default {
  data() {
    return {
      username: '',
      nickname: '',
      room: '',
      value: '2',
      optionStatus: [
        {
          value: '2',
          label: '全部'
        },
        {
          value: '1',
          label: '已审核'
        },
        {
          value: '0',
          label: '未审核'
        }
      ],
      value1: '2',
      f_status: [
        {
          value1: '2',
          label: '全部'
        },
        {
          value1: '1',
          label: '可登陆'
        },
        {
          value1: '0',
          label: '限时登陆'
        },
        {
          value1: '-1',
          label: '冻结'
        }
      ],
      value2: '2',
      a_status: [
        {
          value2: '2',
          label: '全部'
        },
        {
          value2: '1',
          label: '可发言'
        },
        {
          value2: '0',
          label: '限时发言'
        },
        {
          value2: '-1',
          label: '禁言'
        }
      ],
      superior_user: ''
    }
  },
  methods: {
    userSearch() {
      console.log('搜索')
    },
    addUser(row) {
      console.log(row)
    }
  }
}
