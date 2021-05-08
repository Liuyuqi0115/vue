// 关闭eslint....
module.exports = {
  rules: {
    'no-new': 'off'
  }
}

module.exports = {
  devServer: {
    proxy: {
      '/ajax': {
        target: 'http://m.maoyan.com',
        changeOrigin: true
      }
    }
  }
}
