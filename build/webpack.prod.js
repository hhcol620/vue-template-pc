'use strict'

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.common.js')

module.exports = merge(baseWebpackConfig, {
    mode: 'production'
})
