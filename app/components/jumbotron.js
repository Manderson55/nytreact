var React = require("react");

var Jumbotron = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>New York Times Article Search</h1>
        <p>Search for articles of interest and save them for later enjoyment!</p>
      </div>
    );
  }
});

module.exports = Jumbotron;