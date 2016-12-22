var React = require('react')
var ReactDOM = require('react-dom')

// For HR to work, the component must be in another file, not here
ReactDOM.render(
  new React.createFactory(require('./Hello.js'))(), // JSX is overrated
  document.getElementById('app')
);