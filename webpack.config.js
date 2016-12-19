var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

var BUILD_DIR = path.resolve(__dirname, 'build');
var PUBLIC_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var ENV = 'development';

process.env['NODE_ENV'] = ENV;
process.env['BABEL_ENV'] = ENV;

const API_HOST = 'http://localhost:5000';
const API_PATH = '/api';

const REWRITE_RE = '^' + API_PATH;
var API_PATH_REWRITE = {};
API_PATH_REWRITE[REWRITE_RE] = '';

const API_PATH_RE = API_PATH + '/*';

var config = {
    entry: [
        'babel-polyfill',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        //'react-hot-loader/patch',
        APP_DIR + '/index.jsx'
    ],
    output: {
        path: BUILD_DIR,
        publicPath: '/',
        filename: 'bundle.js'
    },
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [ {
            test: /\.(js|jsx)$/,
            include: APP_DIR,
            loader: 'babel-loader',
            query: {
                // @remove-on-eject-begin
                babelrc: false,
                presets: ['es2015', 'react', 'stage-2'],
                plugins: ['transform-decorators-legacy'],
                // @remove-on-eject-end
                cacheDirectory: false
            }
        }, {
            test: /\.scss$|\.sass$/,
            loaders: [
                'style-loader',
                'css-loader?sourceMap',
                'postcss-loader',
                'sass-loader?sourceMap&sourceMapContents&includePaths[]=' +
                        (path.resolve(__dirname, "./node_modules"))
            ]
        },
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml'},
        {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
        {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/octet-stream"},
        {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
        {test: /\.gif(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
        ]
    },
    postcss:  [ autoprefixer({ browsers: ['last 2 versions'] }) ],
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: PUBLIC_DIR + '/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            API: API_PATH
        })
    ],
    devServer: {
        proxy: {
            '/api/*': {
                target: API_HOST,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                },
                logLevel: 'debug'
            }
        }
    }
};

module.exports = config;

