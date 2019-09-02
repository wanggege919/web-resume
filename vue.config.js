module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/vue-resume/dist' : '/',
    configureWebpack: {
      resolve: {
        alias: {
          'styles': 'src/assets/styles'
        }
      }
    }
  }