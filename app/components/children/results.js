// Include React
var React = require("react");

// Create the Results component

var Results = React.createClass({
    getInitialState: function(){
        return {
            title: "",
            date: "",
            url: "",
            results: []
        }
    },

    // When a user clicks save article
    clickToSave: function(result){

        this.props.saveArticle(result.headline.main, result.pub_date, result.web_url);

     },

    componentWillReceiveProps: function(nextProps){
          var that = this;
          var myResults = nextProps.results.map(function(search, i){
          var boundClick = that.clickToSave.bind(that, search);
              return <div
                          className="list-group-item" 
                          key={i}>
                          <a href={search.web_url} 
                          target="_blank">
                          {search.headline.main}
                          </a>
                          <br />
                          {search.pub_date}
                          <br />
                          <button
                           type="button" 
                           className="btn btn-warning"  
                           onClick={boundClick}>
                           Save
                           </button>
                     </div>
          });

          this.setState({results: myResults});
    },

 	render: function() {
    	return (
      		 <div className="panel panel-success">
        		    <div className="panel-heading">
          					<h3 className="panel-title text-center">Results</h3>
        			</div>
        			<div className="panel-body">
                    
                    <p>{this.state.results}</p>
        			</div>
     		</div>
   		);
  	}
});

// Export the component back for use in other files
module.exports = Results;
