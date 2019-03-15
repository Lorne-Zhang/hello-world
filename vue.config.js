
module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8080,
    proxy: {
      '/v1': {
        target: 'https://api.coindesk.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
