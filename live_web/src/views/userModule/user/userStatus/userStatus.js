export default {
  data() {
    return {
      loading: false,
      ruleForm: {
        f_status: '',
        f_time: '',
        a_status: '',
        a_time: ''
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
      console.log(1111)
    }
  }
}
