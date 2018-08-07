export default {
  props: {
    openMerchantBox: Boolean,
    required: true
  },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      close: false,
      formLabelWidth: '120px'
    }
  },
  methods: {
    dialogOff() {
      this.$store.dispatch('dialogOff')
    }
  }
}
