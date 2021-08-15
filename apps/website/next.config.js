const withPreact = require('next-plugin-preact')
const withLinaria = require('next-linaria')
const withPlugins = require('next-compose-plugins')

const config = {
  reactStrictMode: true,
  webpack(config) {
     // Let Babel compile outside of src/.
    const tsRule = config.module.rules.find(
      (rule) => rule.test && rule.test.toString().includes('tsx|ts')
    )
    tsRule.include = undefined
    tsRule.exclude = /node_modules/

    return config
  },
}

module.exports = withPlugins([[withPreact], [withLinaria]], config) 
