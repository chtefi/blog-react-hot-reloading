var React = require('react')
var ReactDOM = require('react-dom')

var AppContainer = require('react-hot-loader').AppContainer
var Hello = require('./Hello.js')

ReactDOM.render(
  new React.createElement(AppContainer, null, React.createElement(Hello, null)),
  document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./Hello', () => {
    const NextApp = require('./Hello')
    ReactDOM.render(
      new React.createElement(AppContainer, null, React.createElement(NextApp, null)),
      document.getElementById('app')
    )
  })
}
