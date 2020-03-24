const path = require('path');

module.exports = {
  pages: { index: { entry: path.resolve(__dirname, './client/main.ts') } },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
    overlay: {
      warnings: false,
      errors: false,
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, './client'))
      .set('vue$', 'vue/dist/vue.runtime.esm.js');
  },
};
