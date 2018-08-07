export default {
  props: {
    openMerchantBox: Boolean,
    required: true
  },
  data() {
    return {
      slots: `添加品牌`,
      value: '1',
      options: [
        {
          value: '1',
          label: '启用'
        },
        {
          value: '0',
          label: '不启用'
        }
      ],
      form: {
        name: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      close: false,
      formLabelWidth: '100px'
    }
  },
  methods: {
    dialogOff() {
      this.$store.dispatch('dialogOff')
    },
    closeDialog() {
      this.$store.dispatch('dialogOff')
    }
  }
}
