var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  getInitialState(){
    return {
      contacts : ["Sp", "Dsp"],
      loader: true
    };
  },
  render(){
    var contacts = this.state.contacts.map((contact, i) => {
      return <li key={i}>{contact}</li>;
    });
    return (
      <div>
        <ul>{contacts}</ul>
      </div>
    );
  }
});

module.exports = App;
