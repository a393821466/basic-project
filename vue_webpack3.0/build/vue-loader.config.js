// const docsLoader = require.resolve('./doc-loader')
module.exports = (isDev) => {
  return {
    preserveWhitepace: true,
    extractCSS: !isDev,
    // 配置css-modules
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true // 转化为驼峰式
    }
    // 高级配置
    // loaders: {
    //   'docs': docsLoader
    // },
    // preLoader:{},
    // postLoader:{}
  }
}
