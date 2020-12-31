const path = require('path');
// 引入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  devServer: {
    // 指定服务器目录
    contentBase: path.join(__dirname, '../dist'),
    // 自动打开浏览器
    open: true,
    hot: true,
  },
  // 打包入口
  entry: path.resolve(__dirname, '../src/main.js'),
  // 打包出口
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
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
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
