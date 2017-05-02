const state = {
  login: false,
  user: {}
}
const getters = {
  login (state) {
    return state.login
  },
  userInfo (state) {
    return state.user
  }
}
const mutations = {
  init (state, params) {
    state.login = params.login
    state.user = params.user
    console.log(params)
  },
  signIn (state, params) {
    state.login = params.login
    state.user = params.user[0]
    console.log(params)
  },
  logout (state) {
    state.login = false
    state.user = null
  }
}
const actions = {
  signIn ({commit}, params) {
    commit('signIn', params)
  },
  init ({commit}, params) {
    commit('init', params)
  },
  logout ({commit}) {
    commit('logout')
  }
}
export default {
  state,
  mutations,
  getters,
  actions
}
