// Include React
var React = require("react");

// Helper Function
var helpers = require("./utils/helpers");

// Create the Search component
var Search = React.createClass({

 	// Here we set a generic state associated with the text being searched for
  	getInitialState: function() {
    	return { 
    			topic: "", 
    			startYear: "", 
    			endYear: "" 
    	};
  	},

  	// This function will respond to the user input
  	handleChange: function(event) {
    // Here we create syntax to capture any change in text to the query terms (pre-search).
   		var newState = {};
   		newState[event.target.id] = event.target.value;
    	this.setState(newState);
  	},


  	render: function() {
    	return (
     		 
			<div className="panel panel-primary">
				<div className="panel-heading">
					<h2 className="panel-title text-center"><strong>Search</strong></h2>
				</div>
				<div className="panel-body text-center">

						<form>
							<div className="form-group">
								<h4 className=""><strong>Topic</strong></h4>
								<input 
									type="text" 
									className="form-control text-center" 
									id="topic" 
									onChange= {this.handleChange} 
									required
								/>
								<br />

								<h4 className=""><strong>Start Year</strong></h4>
								<input 
									type="text" 
									className="form-control text-center" 
									id="startYear" 
									onChange= {this.handleChange} 
									required
								/>
								<br />

								<h4 className=""><strong>End Year</strong></h4>
								<input 
									type="text" 
									className="form-control text-center" 
									id="endYear" 
									onChange= {this.handleChange} 
									required
								/>
								<br />
								
								<button 
									type="button" 
									className="btn btn-warning" 
									onClick={this.handleClick}
								>
								Search
								</button>
							</div>

						</form>
				</div>
			</div>
		)
  	}
});

// Export the component back for use in other files
module.exports = Search;