const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const { override, useEslintRc } = require('customize-cra');

const hot = () => config => rewireReactHotLoader(config, process.env.NODE_ENV);

module.exports = override(useEslintRc('.eslintrc.js'), hot());
