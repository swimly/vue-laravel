const state = {
  logined: false,
  user: {
    id: 0,
    name: '',
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
  init (state, params) {
    state.logined = params.logined
    state.user.name = params.username
    state.user.face = params.face
    console.log(params)
  },
  signIn (state, params) {
    state.logined = params.logined
    state.user.name = params.name
  },
  logout (state) {
    state.logined = false
    state.user.name = ''
    state.user.face = ''
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
