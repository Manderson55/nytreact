// Include React
var React = require("react");

// Create the Saved component

var Saved = React.createClass({
  	render: function() {
   		return (
   			    <div className="panel panel-warning">
        		  		<div className="panel-heading">
          						<h3>Saved Articles</h3>
        				</div>
        				<div className="panel-body">
          					 I will put the saved articles here
        				</div>
     			</div>
    	);
  	}
});

// Export the component back for use in other files
module.exports = Saved;
