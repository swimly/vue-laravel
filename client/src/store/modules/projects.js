import config from '../../config'
// import axios from 'axios'
const state = {
  pcatory: config.projectCatory,
  list: [],
  info: {},
  isNull: true
}
const getters = {
  isnull (state) {
    return state.isNull
  },
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
  isnull (state, params) {
    state.isNull = params
  },
  projectlist (state, params) {
    state.list = params
  },
  projectInfo (state, params) {
    state.info = params
  }
}
const actions = {
  isnull ({commit}, params) {
    commit('isnull', params)
  },
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
