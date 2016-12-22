var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: [
        './src/index.js',
        'webpack-hot-middleware/client',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot-loader'],
            include: path.join(__dirname, 'src'),
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
}