import Vue from 'vue'
import Vuex from 'vuex'
import mutation from './mutation'
import state from './state'
Vue.use(Vuex)
export default new Vuex.Store({
  mutation,
  state,
  modules: {
  }
})
