// Include React
var React = require("react");

// Create the Results component

var Results = React.createClass({

 	render: function() {
    	return (
      		 <div className="panel panel-success">
        		    <div className="panel-heading">
          					<h3 className="panel-title text-center">Results</h3>
        			</div>
        			<div className="panel-body">
                    
                    <p>{this.props.newResults}</p>
        			</div>
     		</div>
   		);
  	}
});

// Export the component back for use in other files
module.exports = Results;
