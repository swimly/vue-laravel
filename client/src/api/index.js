export default {
  signIn (_this, fn) {
    _this.$http.jsonp('http://localhost:8000/signUp', {
      params: {
        callback: 'jsonp',
        username: _this.form.username,
        password: _this.form.password
      }
    }).then(res => {
      if (res.body) {
        fn(_this)
        _this.$http.jsonp('http://localhost:8000/users/' + _this.form.username, {
          params: {
            callback: 'jsonp'
          }
        }).then(res => {
          localStorage.setItem('username', _this.form.username)
          localStorage.setItem('face', res.body.face)
          localStorage.setItem('logined', true)
          _this.$router.push('/home')
        })
      } else {
        console.log('用户名或者密码有误')
      }
    })
  },
  projects (_this) {
    _this.$http.jsonp('http://localhost:8000/projects', {
      params: {
        callback: 'jsonp'
      }
    }).then(res => {
      _this.list = res.body
      this.group(_this, 'http://localhost:8000/projects/groups')
    })
  },
  articles (_this) {
    _this.$http.jsonp('http://localhost:8000/articles', {
      params: {
        callback: 'jsonp'
      }
    }).then(res => {
      _this.getList(res.body)
      this.group(_this, 'http://localhost:8000/articles/groups')
    })
  },
  group (_this, url) {
    _this.$http.jsonp(url, {
      params: {
        callback: 'jsonp'
      }
    }).then(res => {
      var all = 0
      for (let item in res.body) {
        all += res.body[item].length
      }
      for (let item in res.body) {
        for (let val in _this.catory) {
          if (_this.catory[val].catory === 'all') {
            _this.catory[val].num = all
          } else if (_this.catory[val].catory === item) {
            _this.catory[val].num = res.body[item].length
          }
        }
      }
    })
  },
  projectInfo (_this) {
    const id = _this.$route.params.id
    _this.$http.jsonp('http://localhost:8000/project', {
      params: {
        callback: 'jsonp',
        id: id
      }
    }).then(res => {
      _this.data = res.body
      console.log(res)
    })
  },
  articleInfo (_this) {
    const id = _this.$route.params.id
    _this.$http.jsonp('http://localhost:8000/article', {
      params: {
        callback: 'jsonp',
        id: id
      }
    }).then(res => {
      _this.data = res.body
      console.log(res)
    })
  }
}
