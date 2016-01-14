
var React = require('react');
var ReactDOM = require('react-dom');

var First = require('./components/first');

ReactDOM.render(<First />, document.getElementById('app'), () => {
  console.log("First rendered");
});
