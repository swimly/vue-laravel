import axios from 'axios'
export default {
  signIn (_this, fn) {
    console.log(_this.form.email, _this.form.password)
    axios.get('http://192.168.4.151/vue-laravel/server/public/signIn', {
      params: {
        email: _this.form.email,
        password: _this.form.password
      }
    })
    .then(function (res) {
      if (res.data) {
        console.log(res)
        fn(_this, res.data)
        localStorage.setItem('login', true)
        localStorage.setItem('user', JSON.stringify(res.data[0]))
        _this.$router.push('/home')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  addProject (_this) {
    axios.get('http://192.168.4.151/vue-laravel/server/public/projects/add', {
      params: _this.form
    })
    .then(function (res) {
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  projects (_this, params) {
    const type = _this.$route.params.type
    console.log(type)
    var p
    if (params) {
      p = params
    } else {
      p = {
        catory: type
      }
    }
    axios.get('http://192.168.4.151/vue-laravel/server/public/projects', {
      params: p
    })
    .then(function (res) {
      if (res.data.data.length > 0) {
        _this.projectList(res.data.data)
        _this.isNull(false)
      } else {
        _this.projectList([])
        _this.isNull(true)
      }
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  projectInfo (_this) {
    const id = _this.$route.params.id
    axios.get('http://192.168.4.151/vue-laravel/server/public/projects/' + id, {
    })
    .then(function (res) {
      console.log(res)
      _this.projectInfo(res)
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  articles (_this) {
  },
  group (_this, url) {
  },
  articleInfo (_this) {
  }
}
