module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/web-resume/dist' : '/',
    configureWebpack: {
      resolve: {
        alias: {
          'styles': 'src/assets/styles'
        }
      }
    }
  }