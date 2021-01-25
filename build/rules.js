const path = require('path');

const rules = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-transform-regenerator'
            ]
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
    },
    {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
    },
    {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    },
    {
        test: /\.js$/,
        use: [{
            loader: 'eslint-loader',
            options: {
                fix:true,
                // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
                formatter: require('eslint-friendly-formatter'), // 指定错误报告的格式规范
                enforce: 'pre',
            }
        }],
        include: [path.resolve(__dirname, 'src')], // 指定检查的目录
        
    }
];

module.exports = rules;
