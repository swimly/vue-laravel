<template>
  <div class="h has-page has-search">
    <ul class="row w search">
      <li class="col v-m t-r" style="width:3em;">
        姓名：
      </li>
      <li class="col v-m">
        <el-input v-model="search" size="small" placeholder="请输入内容"></el-input>
      </li>
      <li class="col v-m t-r">
        <ui-button color="primary" size="small" @click="handleSearch()">查询</ui-button>
        <ui-button color="orange" size="small" @click="handleReset()">重置</ui-button>
        <ui-button color="green" size="small" @click="handleAdd()">新增</ui-button>
      </li>
    </ul>
    <div class="h table-content">
      <el-table
        :height= height
        ref="multipleTable"
        stripe
        :data="userlist"
        border
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          align="center"
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          align="center"
          prop="userId"
          label="ID"
          width="120">
          <template scope="scope">{{ scope.row.userId }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          align="center"
          sortable
          label="姓名"
          width="100">
        </el-table-column>
        <el-table-column
          prop="sex"
          align="center"
          label="性别"
          sortable
          width="90"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="phone"
          align="center"
          label="手机号码"
          sortable
          width="140"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="email"
          align="center"
          label="邮箱"
          sortable
          width="160"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="QQ"
          align="center"
          sortable
          label="QQ"
          width="150"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="wechat"
          align="center"
          width="120"
          label="微信"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="department"
          align="center"
          sortable
          label="部门"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="admin"
          align="center"
          sortable
          width='100'
          label="管理员"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="created_at"
          align="center"
          label="注册时间"
          sortable
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          show-overflow-tooltip>
          <template scope="scope" style="text-align:center;">
            <span class="text-btn" color="primary" @click="handleEdit(scope.$index, scope.row)">查看</span>
            <span class="text-btn" color="primary" @click="handleEdit(scope.$index, scope.row)">编辑</span>
            <span class="text-btn" color="primary" @click="handleDelete(scope.$index, scope.row)">删除</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="row w paging">
      <li class="col v-m">
        <el-button type="primary" size="small" :disabled="multipleSelection.length === 0" @click="handleDeletes()">删除所选</el-button>
        选中<span style="color:#f00;padding:0 5px;">{{multipleSelection.length}}</span>条
      </li>
      <li class="col v-m t-r">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[20, 50, 100, 200]"
          :page-size=pageSize
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </li>
    </div>
    <ui-modal ref="modal_delete" title="确认删除">
        您确认要删除此用户？该操作不可恢复！
        <div slot="footer">
            <ui-button color="primary" @click="handleDeleteOk()">确认</ui-button>
            <ui-button @click="closeModal('modal_delete')">取消</ui-button>
        </div>
    </ui-modal>
    <ui-modal ref="modal_deletes" title="确认删除">
        您确认要删除这<span class="c-red" style="font-size:18px;padding:0 5px;">{{multipleSelection.length}}</span>个用户？该操作不可恢复！
        <div slot="footer">
            <ui-button color="primary" @click="handleDeletesOk()">确认</ui-button>
            <ui-button @click="closeModal('modal_delete')">取消</ui-button>
        </div>
    </ui-modal>
    <!--编辑用户-->
    <ui-modal ref="modal_edit" size="large" title="编辑用户">
        <table class="form" style="width:80%;margin:0 auto;">
          <colgroup>
            <col width="15%">
            <col width="85%">
          </colgroup>
          <tr>
            <th>ID：</th>
            <td>{{edit.userId}}</td>
          </tr>
          <tr>
            <th>姓名：</th>
            <td>
              <el-input
                size="small"
                placeholder="请输入内容"
                v-model="edit.name">
              </el-input>
            </td>
          </tr>
          <tr>
            <th>性别：</th>
            <td>
              <el-radio class="radio" v-model="edit.sex" label="男">男</el-radio>
              <el-radio class="radio" v-model="edit.sex" label="女">女</el-radio>
            </td>
          </tr>
          <tr>
            <th>QQ：</th>
            <td>
              <el-input
                size="small"
                placeholder="请输入内容"
                v-model="edit.QQ">
              </el-input>
            </td>
          </tr>
          <tr>
            <th>微信：</th>
            <td>
              <el-input
                size="small"
                placeholder="请输入内容"
                v-model="edit.wechat">
              </el-input>
            </td>
          </tr>
          <tr>
            <th>户籍地：</th>
            <td>
              <el-input
                size="small"
                placeholder="请输入内容"
                v-model="edit.homeplace">
              </el-input>
            </td>
          </tr>
          <tr>
            <th>现住地：</th>
            <td>
              <el-input
                size="small"
                placeholder="请输入内容"
                v-model="edit.residence">
              </el-input>
            </td>
          </tr>
          <tr>
            <th>部门：</th>
            <td>
              <el-select v-model="edit.department" placeholder="请选择">
                <el-option
                  v-for="item in depart"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <th>职位：</th>
            <td>
              <el-input
                size="small"
                placeholder="请输入内容"
                v-model="edit.position">
              </el-input>
            </td>
          </tr>
          <tr>
            <th>是否管理员：</th>
            <td>
              <el-radio-group v-model="edit.admin" size="small">
                <el-radio-button label="是"></el-radio-button>
                <el-radio-button label="否"></el-radio-button>
              </el-radio-group>
            </td>
          </tr>
          <tr>
            <th>个人介绍：</th>
            <td>
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="edit.info">
              </el-input>
            </td>
          </tr>
        </table>
        <p class="t-r" style="width:80%;margin:0 auto;padding-top:30px;">
          <ui-button color="primary" size="normal" @click="handleEditFun()">修改</ui-button>
          <ui-button color="default" size="normal" @click="closeModal('modal_edit')">取消</ui-button>
        </p>
    </ui-modal>
    <!--添加用户-->
    <ui-modal ref="modal_add" size="large" title="添加用户">
        <table class="form" style="width:80%;margin:0 auto;">
          <colgroup>
            <col width="15%">
            <col width="85%">
          </colgroup>
          <tr>
            <th>ID：</th>
            <td>{{add.userId}}</td>
          </tr>
          <tr>
            <th>姓名：</th>
            <td>
              <el-input
                size="small"
                placeholder="请输入内容"
                v-model="add.name">
              </el-input>
            </td>
          </tr>
          <tr>
            <th>邮箱：</th>
            <td>
              <el-input
                size="small"
                placeholder="请输入内容"
                v-model="add.email">
              </el-input>
            </td>
          </tr>
          <tr>
            <th>性别：</th>
            <td>
              <el-radio class="radio" v-model="add.sex" label="男">男</el-radio>
              <el-radio class="radio" v-model="add.sex" label="女">女</el-radio>
            </td>
          </tr>
          <tr>
            <th>QQ：</th>
            <td>
              <el-input
                size="small"
                placeholder="请输入内容"
                v-model="add.QQ">
              </el-input>
            </td>
          </tr>
          <tr>
            <th>微信：</th>
            <td>
              <el-input
                size="small"
                placeholder="请输入内容"
                v-model="add.wechat">
              </el-input>
            </td>
          </tr>
          <tr>
            <th>户籍地：</th>
            <td>
              <el-input
                size="small"
                placeholder="请输入内容"
                v-model="add.homeplace">
              </el-input>
            </td>
          </tr>
          <tr>
            <th>现住地：</th>
            <td>
              <el-input
                size="small"
                placeholder="请输入内容"
                v-model="add.residence">
              </el-input>
            </td>
          </tr>
          <tr>
            <th>部门：</th>
            <td>
              <el-select v-model="add.department" placeholder="请选择">
                <el-option
                  v-for="item in depart"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <th>职位：</th>
            <td>
              <el-input
                size="small"
                placeholder="请输入内容"
                v-model="add.position">
              </el-input>
            </td>
          </tr>
          <tr>
            <th>是否管理员：</th>
            <td>
              <el-radio-group v-model="add.admin" size="small">
                <el-radio-button label="是"></el-radio-button>
                <el-radio-button label="否"></el-radio-button>
              </el-radio-group>
            </td>
          </tr>
          <tr>
            <th>个人介绍：</th>
            <td>
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="add.info">
              </el-input>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              友情提示：请牢记邮箱作为以后的登陆名，密码默认是： 888888。
            </td>
          </tr>
        </table>
        <p class="t-r" style="width:80%;margin:0 auto;padding-top:30px;">
          <ui-button color="primary" size="normal" @click="handleAddFun()">添加</ui-button>
          <ui-button color="default" size="normal" @click="closeModal('modal_add')">取消</ui-button>
        </p>
    </ui-modal>
  </div>
</template>
<script>
  import config from '../config'
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'userlist',
    data () {
      return {
        height: 0,
        pageSize: config.pageSize,
        multipleSelection: [],
        currentPage: 1,
        edit: {},
        delete: [],
        depart: config.depart,
        editSucces: true,
        add: config.userFields,
        search: '',
        total: 0
      }
    },
    created () {
      this.getuserlist(this)   // 获取用户列表
    },
    mounted () {
      const This = this
      this.height = document.querySelector('.table-content').clientHeight
      document.body.addEventListener('keyup', function (e) {
        if (e.keyCode === 13) {
          This.adduser(This)
        }
      })
    },
    computed: {
      ...mapGetters({
        userlist: 'userlist'
      })
    },
    methods: {
      handleSearch () {
        this.getuserlist(this)
      },
      handleReset () {
        this.search = ''
        this.getuserlist(this)
      },
      handleAdd () {
        this.openModal('modal_add')
      },
      handleAddFun () {
        this.adduser(this)
      },
      handleDelete (index, row) {
        this.openModal('modal_delete')
        this.delete.push(row)
        console.log(this.delete)
      },
      handleDeletes () {
        this.openModal('modal_deletes')
      },
      handleDeleteOk () {
        this.deleteuser(this)
      },
      handleDeletesOk () {
        this.deleteuser(this)
      },
      handleEdit (index, row) {
        this.openModal('modal_edit')
        console.log(row)
        this.edit = row
      },
      handleEditFun () {
        this.setuserinfo(this)
      },
      handleSizeChange (val) {
        console.log(val)
        this.pageSize = val
        this.getuserlist(this)
      },
      handleCurrentChange (val) {
        this.currentPage = val
        this.getuserlist(this)
      },
      toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
        this.delete = val
      },
      openModal (ref) {
        this.$refs[ref].open()
      },
      closeModal (ref) {
        this.$refs[ref].close()
      },
      ...mapActions({
        getuserlist: 'getuserlist',
        setuserinfo: 'setuserinfo',
        deleteuser: 'deleteuser',
        adduser: 'adduser'
      })
    }
  }
</script>
