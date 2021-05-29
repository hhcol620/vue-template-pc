'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseWebpackConfig = require('./webpack.common.js');

const { _Proxy } = require('./devProxy.js');
console.log(_Proxy);

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    target: 'web',
    //  本地开发服务器  文件监控热更新
    devServer: {
        // 自动打开浏览器
        open: true,
        host: '127.0.0.1',
        port: 3000,
        contentBase: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        quiet: true,
        proxy: _Proxy,
        overlay: true,
        hot: true,
        compress: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            favicon: path.resolve(__dirname, '../public/static/favicon.ico')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ESLintPlugin({
            emitWarning: true,
            emitError: true,
            failOnWarning: false,
            failOnError: false
        })
    ],
    optimization: {
        runtimeChunk: 'single'
    }
});
