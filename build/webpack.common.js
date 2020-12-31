'use strict';

const path = require('path');
const webpack = require('webpack');

// 引入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': '../src'
    },
    extensions: ['.js', '.vue', '.json', '.less', '.sass', '.css']
  },

  // 打包入口
  entry: {
    main: './src/main.js',
    vendor: ['vue', 'vue-router', 'vuex']
  },
  // 打包出口
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: '[name].chunk.js'
  },
  // 打包规则
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
          limit: 2048
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  // 插件
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      favicon: path.resolve(__dirname, '../public/static/favicon.ico'),
      inject: true
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here:`]
      },
      clearConsole: true
    })
  ]
};
