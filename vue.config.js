const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  configureWebpack: {
    externals : [{ canvas: "{}", "utf-8-validate": "{}", "bufferutil": "{}" }]
  }
})
