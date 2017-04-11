const state = {
  logined: false,
  user: {
    name: '刘勇',
    face: ''
  }
}
const getters = {
  logined (state) {
    return state.logined
  },
  userInfo (state) {
    return state.user
  }
}
const mutations = {
  signIn (state, params) {
    state.logined = params.logined
    state.user.name = params.name
  }
}
const actions = {
  signIn ({commit}, params) {
    commit('signIn', params)
  }
}
export default {
  state,
  mutations,
  getters,
  actions
}
