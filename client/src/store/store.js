import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import articles from './modules/articles'
import projects from './modules/projects'
import center from './modules/center'
import mutation from './mutation'
import state from './state'
Vue.use(Vuex)
export default new Vuex.Store({
  mutation,
  state,
  modules: {
    users,
    articles,
    projects,
    center
  }
})
