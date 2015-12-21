var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"dev"'
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src')
            },
            {test: /\.css$/, loader: "style-loader!css-loader", include: path.join(__dirname, 'src')},
            { test: /\.svg$/, loader: 'svg-inline' }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "src")]
    }
};
