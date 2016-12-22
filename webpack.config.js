var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: [
        './src/index.js', // The application entry point
        'webpack-hot-middleware/client', // some webpack HR code to inject
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