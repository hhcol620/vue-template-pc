'use strict';

const path = require('path');

// 引入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const utils = require('./utils.js');

const rules = require('./rules.js');

module.exports = {
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js',
            '@': utils.resolve('src')
        },
        extensions: ['.js', '.vue', '.json', '.less', '.sass', '.css']
    },

    // 打包入口
    entry: {
        main: path.resolve(__dirname, '../src/main.js'),
        vendor: ['vue', 'vue-router', 'vuex']
    },
    // 打包出口
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        chunkFilename: '[name].chunk.js'
    },
    // 打包规则
    module: {
        rules
    },
    // 插件
    plugins: [new VueLoaderPlugin(), new FriendlyErrorsWebpackPlugin()]
};
