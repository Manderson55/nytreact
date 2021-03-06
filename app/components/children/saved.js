// Include React
var React = require("react");

// Create the Saved component

var Saved = React.createClass({

    getInitialState: function(){
        return {
            savedArticles: []
         }
    },

    clickToDelete: function(result){
        this.props.deleteArticle(result);

     },

    componentWillReceiveProps: function(nextProps){
         var that = this;
         console.log(nextProps);
         var myResults = nextProps.savedArticles.map(function(search, i){
         var boundClick = that.clickToDelete.bind(that, search);
         return <div className="list-group-item"
                     key={i}>
                     <a href={search.url} 
                     target="_blank">
                     {search.title}
                     </a><br />{search.date}
                     <br />
                     <button
                     type="button" 
                     className="btn btn-success" 
                     onClick={boundClick}>Delete
                     </button>
                </div>
    });

    this.setState({savedArticles: myResults});
  },
 
  	render: function() {
   		return (
   			    <div className="panel panel-danger">
        		  		<div className="panel-heading">
                      <h3 className="panel-title text-center">Saved Articles</h3>
                  </div>
        				  <div className="panel-body">
          					 {}
        				</div>
     			</div>
    	);
  	}
});

// Export the component back for use in other files
module.exports = Saved;
