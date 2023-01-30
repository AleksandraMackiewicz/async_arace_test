const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: './main.js',
        path: path.resolve(__dirname,'./dist')
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(jpg|png)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(scss)$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env']
                    }
                }
            }
        ]
    }
}