const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MODULE_NAME = 'BazzoinkLoadingDots';

// https://webpack.js.org/guides/author-libraries/
// Base html and less requires
// Using style loader since this is very small
module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        library: MODULE_NAME,
        libraryTarget: 'umd'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({
            MODULE_NAME: JSON.stringify(MODULE_NAME)
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            }
        ]
    },
    externals: {
        'angular': 'angular'
    }
};
