import config from '../../config'
const state = {
  pcatory: config.projectCatory,
  list: [],
  info: {}
}
const getters = {
  pcatory (state) {
    return state.pcatory
  },
  Projectlist (state) {
    return state.list
  },
  projectInfo (state) {
    return state.info
  }
}
const mutations = {
  projectlist (state, params) {
    state.list = params
  },
  projectInfo (state, params) {
    state.info = params
  }
}
const actions = {
  projectlist ({commit}, params) {
    commit('projectlist', params)
  },
  projectInfo ({commit}, params) {
    commit('projectInfo', params)
  }
}
export default {
  state,
  mutations,
  getters,
  actions
}
