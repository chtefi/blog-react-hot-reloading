var React = require('react')
var ReactDOM = require('react-dom')

ReactDOM.render(
  new React.createFactory(require('./Hello.js'))(),
  document.getElementById('app'));