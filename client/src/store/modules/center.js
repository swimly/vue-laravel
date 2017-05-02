import config from '../../config'
const state = {
  ccatory: config.centerCatory,
  list: []
}
const getters = {
  ccatory (state) {
    return state.ccatory
  }
}
const mutations = {
}
const actions = {
}
export default {
  state,
  mutations,
  getters,
  actions
}
