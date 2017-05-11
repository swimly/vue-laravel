import config from '../../config'
import axios from 'axios'
const state = {
  UserList: []
}
const getters = {
  userlist (state) {
    return state.UserList
  }
}
const mutations = {
  getuserlist (state, This) {
    axios.get(config.server + 'users', {
    })
    .then(function (res) {
      state.UserList = res.data.data
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}
const actions = {
  getuserlist ({commit}, This) {
    commit('getuserlist')
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
