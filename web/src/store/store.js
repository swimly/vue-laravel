import Vue from 'vue'
import Vuex from 'vuex'
import mutation from './mutation'
import state from './state'
import users from './modules/users'
Vue.use(Vuex)
export default new Vuex.Store({
  mutation,
  state,
  modules: {
    users
  }
})
