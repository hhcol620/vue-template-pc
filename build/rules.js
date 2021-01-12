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
    }
];

module.exports = rules;
