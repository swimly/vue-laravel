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
      console.log(res.data.data)
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  setuserinfo (state, This) {
    const data = This.edit
    const id = data.id
    delete data.id
    axios.get(config.server + 'users/edit/' + id, {
      params: data
    })
    .then(function (res) {
      if (res) {
        This.closeModal('modal_edit')
        This.$message({
          message: '恭喜，修改' + id + '成功！',
          type: 'success'
        })
      }
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  deleteuser (state, This) {
    const id = This.edit.id
    axios.get(config.server + 'users/delete/' + id)
    .then(function (res) {
      if (res) {
        This.closeModal('modal_delete')
        This.$message({
          message: '恭喜，删除' + id + '成功！',
          type: 'success'
        })
      }
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}
const actions = {
  getuserlist ({commit}, This) {
    commit('getuserlist', This)
  },
  setuserinfo ({commit}, This) {
    commit('setuserinfo', This)
  },
  deleteuser ({commit}, This) {
    commit('deleteuser', This)
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
