// .storybook/main.js
const LINARIA_EXTENSION = '.linaria.module.css';
const util = require('util');
function extendWebpack(config) {
  console.log(util.inspect(config.module.rules, false, null));
  config.module.rules.push({
    test: /\.(tsx|ts|js|mjs|jsx)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('@linaria/webpack-loader'),
        options: {
          sourceMap: process.env.NODE_ENV !== 'production',
          extension: LINARIA_EXTENSION,
        },
      },
    ],
  });
}

module.exports = { extendWebpack };
