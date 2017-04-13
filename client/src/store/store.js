import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import articles from './modules/articles'
import mutation from './mutation'
Vue.use(Vuex)
export default new Vuex.Store({
  mutation,
  modules: {
    users,
    articles
  }
})
