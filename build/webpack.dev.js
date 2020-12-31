'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const baseWebpackConfig = require('./webpack.common.js');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  //  本地开发服务器  文件监控热更新
  devServer: {
    // 自动打开浏览器
    open: true,
    compress: true,
    host: '127.0.0.1',
    port: 9090,
    contentBase: path.resolve(__dirname, '../public/index.html'),
    publicPath: '/'
  }
});
