// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

// set the proxy server to make api calls too.
module.exports = {
  devServer: {
    proxy: 'http://127.0.0.1:3000'
  }
}