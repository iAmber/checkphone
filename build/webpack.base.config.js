/**
 * Created by leexiaosi on 16/2/23.
 */
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : {
        app : ['./src/main.js'],
        vendor : ['vue','vue-router','vue-resource','normalize.css']
    },
    devtool: '#source-map',
    output : {
        path : './dist',
        publicPath : '',
        filename : 'static/[name].build.js',
        chunkFilename : 'static/[id].[name].build.js'
    },
    plugins : [
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: 'index.html',
            inject: 'body'
        })
    ],
    module : {
        preLoaders : [
            {
                test : /hammer\.js$/,
                loader : 'preprocessor?line&file&config=' + path.join(__dirname,'preprocessor.json')
            }
        ],
        loaders : [
            {
                test : /\.vue$/,
                loader : 'vue'
            },
            {
                test : /\.css$/,
                loader : 'style-loader!css-loader'
            },
            {
                test : /\.json$/,
                loader : 'json-loader'
            },
            {
                test : /\.(png|jpg|gif|ttf)/,
                loader : 'url',
                query : {
                    limit : 10000,
                    name : 'static/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    vue : {
        loaders : {
            js : '',
            css : 'less'
        }
    }
};