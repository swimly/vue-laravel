import config from '../../config'
const state = {
  catory: config.articleCatory,
  list: [],
  pageSize: config.pageSize,
  current: 1,
  search: '',
  type: ''
}
const getters = {
  searchText (state) {
    return state.search
  },
  catory (state) {
    return state.catory
  },
  current (state) {
    return state.current
  },
  pages (state) {
    return Math.ceil(state.list.length / state.pageSize)
  },
  list (state) {
    return state.list.slice((state.current - 1) * state.pageSize, state.current * state.pageSize)
  }
}
const mutations = {
  getList (state, params) {
    state.list = params
    console.log('articels')
  },
  next (state, pages) {
    if (state.current < pages) {
      state.current ++
    } else {
      return false
    }
  },
  prev (state) {
    if (state.current > 1) {
      state.current --
    } else {
      return false
    }
  },
  search (state, params) {
  },
  type (state, params) {
    state.type = params
  }
}
const actions = {
  getList ({commit}, params) {
    commit('getList', params)
  }
}
export default {
  state,
  mutations,
  getters,
  actions
}
