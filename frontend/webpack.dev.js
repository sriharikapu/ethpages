var merge = require('webpack-merge');
var common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: './dist',
	disableHostCheck: true
    }
});
