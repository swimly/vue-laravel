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
      This.$notify({
        title: '成功',
        message: '数据获取成功！',
        offset: This.height - 20,
        type: 'success'
      })
      state.UserList = res.data.data
    })
    .catch(function (error) {
      This.$notify.error({
        title: '错误',
        message: '服务器出错，获取数据失败，请稍后重试！' + error,
        offset: This.height - 20
      })
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
  },
  adduser (state, This) {
    const name = This.add.name
    axios.get(config.server + 'signUp', {
      params: This.add
    })
    .then(function (res) {
      if (res) {
        state.UserList.push(This.add)
        This.closeModal('modal_delete')
        This.$message({
          message: '恭喜，添加用户' + name + '成功！',
          type: 'success'
        })
        This.closeModal('modal_add')
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
  },
  adduser ({commit}, This) {
    commit('adduser', This)
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
