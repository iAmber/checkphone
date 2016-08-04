/**
 * Created by leexiaosi on 16/2/23.
 */
var config = require('./webpack.base.config');
config.devtool = 'source-map';
config.debug = true;
config.devServer = {
    noInfo: true
};
config.output.pathinfo = true;

module.exports = config;