const express = require('express')
const path = require('path')

const app = express()
// Read "public/" physical folder as "/". eg: http://localhost:3000/index.html
app.use(express.static(path.join(__dirname, 'public')))
app.use('/dist', express.static(path.join(__dirname, 'dist'))) // JS bundles
app.get('/api', (req, res) => res.send('Hello World!'))
app.listen(3000, () => console.log("Listening to localhost:3000"))

// HR management
var webpack = require('webpack');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var config = require('./webpack.config.js');
var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { quiet: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));