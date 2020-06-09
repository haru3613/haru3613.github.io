module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  transpileDependencies: ['vuetify'],
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/haru3613.github.io/'
    : '/'
}