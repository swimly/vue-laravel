export default {
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
