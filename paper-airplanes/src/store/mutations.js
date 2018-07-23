import {
  GETMESSAGE,
  SHOWLOADING,
  HIDELOADING,
  GETINFO,
  PLANESCLOSE,
  NODEDATA,
  UPDATE_DIRECTION,
  LOGIN,
  SHOWPOSTMES
} from "./types"
const state = {
  loading: false,
  getinfo: false,
  postinfo: false,
  nodata: 0,
  footer: true,
  message: [],
  token: "",
  direction: 'forward',
};
const mutations = {
  [SHOWLOADING](state) {
    state.loading = true
  },
  [HIDELOADING](state) {
    state.loading = false
  },
  [GETMESSAGE](state, da) {
    function randomsort(a, b) {
      return Math.random() > 0.5 ? -1 : 1
    }
    let das = da.value;
    state.message = das.sort(randomsort)
  },
  [SHOWPOSTMES](state) {
    state.postinfo = !state.postinfo
  },
  [NODEDATA](state) {
    state.nodata = 0
  },
  [LOGIN](state, da) {
    state.token = da.token;
    sessionStorage.setItem("token", da.token);
    sessionStorage.setItem("username", JSON.stringify(da.value[0]));
  },
  [GETINFO](state) {
    let info = state.message;
    if (info[0].content == "") {
      state.getinfo = false
      state.nodata = 1
    } else {
      state.getinfo = true
      state.footer = false
      state.nodata = 0
    }
  },
  [PLANESCLOSE](state) {
    state.footer = true
    state.getinfo = false
  },
  [UPDATE_DIRECTION](state, payload) {
    state.direction = payload.direction
  }
};
const getters = {
  loading: state => state.loading,
  info: state => state.message,
  getInfo: state => state.getinfo,
  footers: state => state.footer,
  nodata: state => state.nodata,
  token: state => state.token,
  postinfo: state => state.postinfo
};

export default {
  state,
  mutations,
  getters
};
