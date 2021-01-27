'use strict';

const path = require('path');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');

const baseWebpackConfig = require('./webpack.common.js');

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            favicon: path.resolve(__dirname, '../public/static/favicon.ico'),
            inject: true,
            minify: {
                // 压缩html
                collapseWhitespace: true, // 压缩空白
                removeComments: true // 去除注释
            }
        }),
        new BundleAnalyzerPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    }
});
