import webpack from 'webpack';
import path from 'path';

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');


module.exports = {
    devtool: 'inline-sourcemap',
    entry: {
        client: path.resolve(APP_PATH, 'js/client.js'),
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ],
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].min.js',
    },
};
