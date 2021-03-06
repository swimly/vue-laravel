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
    const param = This.search === '' ? {pageSize: This.pageSize, page: This.currentPage} : {pageSize: This.pageSize, page: This.currentPage, name: This.search}
    axios.get(config.server + 'users/paging', {
      params: param
    })
    .then(function (res) {
      // This.$notify({
      //   title: '成功',
      //   message: '数据获取成功！',
      //   offset: This.height - 20,
      //   type: 'success'
      // })
      console.log(res.data)
      This.total = res.data.total
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
          message: '恭喜，修改' + This.edit.email + '成功！',
          type: 'success'
        })
      }
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  deleteuser (state, This) {
    console.log(This)
    This.closeModal('modal_deletes')
    This.closeModal('modal_delete')
    for (const item in This.delete) {
      const id = This.delete[item].id
      const email = This.delete[item].email
      for (const item in state.UserList) {
        if (state.UserList[item].id === id) {
          for (const i in state.UserList) {
            if (state.UserList[i] === state.UserList[item]) {
              state.UserList.splice(i, 1)
            }
          }
        }
      }
      axios.get(config.server + 'users/delete/' + id)
      .then(function (res) {
        if (res) {
          This.$message({
            message: '恭喜，删除' + email + '成功！',
            type: 'success'
          })
          This.getuserlist(This)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  },
  adduser (state, This) {
    const email = This.add.email
    axios.get(config.server + 'signUp', {
      params: This.add
    })
    .then(function (res) {
      if (res) {
        state.UserList.push(This.add)
        This.closeModal('modal_delete')
        This.$message({
          message: '恭喜，添加用户' + email + '成功！',
          type: 'success'
        })
        This.closeModal('modal_add')
        This.getuserlist(This)
      }
    })
    .catch(function (error) {
      console.log(error)
      if (This.add.email === '') {
        This.$message({
          message: '邮箱不能为空！',
          type: 'warning'
        })
      } else {
        This.$message({
          message: This.add.email + '已被注册，请更换邮箱！',
          type: 'error'
        })
      }
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
