import webpack from 'webpack';
import path from 'path';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');


module.exports = {
    devtool: 'inline-sourcemap',
    entry: {
        app: path.resolve(APP_PATH, 'js/app.js'),
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader?sourceMap=true',
                        'postcss-loader?sourceMap=true',
                        'sass-loader?outputStyle=compressed&sourceMap=true',
                    ],
                }),
            },
        ],
    },

	plugins: [
        new ExtractTextPlugin('[name].min.css'),
    ],

    output: {
        path: BUILD_PATH,
        filename: '[name].min.js',
    },
};
