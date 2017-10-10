// Include React
var React = require("react");

// Helper Function
var helpers = require("./../../utils/helpers");
// Create the Search component
//class Search extends React.Component{
var Search = React.createClass({  // WHich one to use????????

 //  constructor(){   // do we do this ???????
 //    super();

 //    this.state = {
 //     	topic: "", 
 //    	startYear: "", 
 //    	endYear: "" 
 //    	}
	// }

 	// Here we set a generic state associated with the text being searched for

  	getInitialState: function() {    	//or this??????????
    	return { 
    			topic: "", 
    			startYear: "", 
    			endYear: "" 
    	}
  	},

  	// This function will respond to the user input
  	handleChange: function(event) {
    // Here we create syntax to capture any change in text to the query terms (pre-search).
   		var newState = {};
   		newState[event.target.id] = event.target.value;
   		console.log(event.target.value);
    	this.setState(newState);

  	},

  	handleSubmit: function(event){
  		console.log("inside handleSubmit, just clicked submit", helpers);
  	    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
console.log("Inside search.js : ", helpers)
    	// clicking the button
    	event.preventDefault();	
		// Set the parent to have the search term
		// this.props.setSearchParams(this.state.topic, this.state.startYear, this.state.endYear);
		console.log(this.state.topic);
		console.log(this.state.startYear);
		console.log(this.state.endYear);
		helpers.runQuery(this.state.topic, this.state.startYear, this.state.endYear)
		.then(function(data){
			console.log(data);
			if (data != this.state.results)
			{
				this.setState({
					results: data
				})
			}
		}.bind(this))		
    	// Clearing the input field after submitting
    	this.setState({ topic: "", 
    			startYear: "", 
    			endYear: ""  });

	},



  	render: function() {
    	return (
     		 
			<div className="panel panel-warning">
				<div className="panel-heading">
					<h2 className="panel-title text-center"><strong>Search</strong></h2>
				</div>
				<div className="panel-body text-center">

						<form onSubmit={this.handleSubmit}>
							<div className="form-group">
								<h4 className=""><strong>Topic</strong></h4>
								<input 
									type="text" 
									className="form-control text-center" 
									id="topic"
									value={this.state.topic} 
									onChange= {this.handleChange} 
									required
								/>
								<br />

								<h4 className=""><strong>Start Year</strong></h4>
								<input 
									type="text" 
									className="form-control text-center" 
									id="startYear"
									value={this.state.startYear}  
									onChange= {this.handleChange} 
									required
								/>
								<br />

								<h4 className=""><strong>End Year</strong></h4>
								<input 
									type="text" 
									className="form-control text-center" 
									id="endYear"
									value={this.state.endYear}  
									onChange= {this.handleChange} 
									required
								/>
								<br />
								
								<button 
									type="submit" 
									className="btn btn-warning" 
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