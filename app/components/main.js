var axios = require('axios');

// Include React 
var React = require('react');
var createReactClass = require('create-react-class');

// Here we include all of the sub-components
var Search = require('./Children/Search');
var Results = require('./Children/Results');
var Saved = require('./Children/Saved');

// Helper Function
var helpers = require('./utils/helpers.js');


// This is the main component. 
var Main = createReactClass({

	// Here we set a generic state associated with the number of clicks
	getInitialState: function(){
		return {
			topic: "",
			startYear: "",
			endYear: "",
			results: [],
			savedArticles: []
		}
	},	

	// We use this function to allow children to update the parent with searchTerms.
	setTerm: function(topic, startYear, endYear){
		this.setState({
			topic: topic,
			startYear: startYear,
			endYear: endYear
		})
	},

	saveArticle: function(title, date, url){
		helpers.postArticle(title, date, url);
		this.getArticle();
	},

	deleteArticle: function(article){
		console.log(article);
		axios.delete('/api/saved/' + article._id)
			.then(function(response){
				this.setState({
					savedArticles: response.data
				});
				return response;
			}.bind(this));

		this.getArticle();
	},

	getArticle: function(){
		axios.get('/api/saved')
			.then(function(response){
				this.setState({
					savedArticles: response.data
				});
			}.bind(this));
	},

	// If the component updates we'll run this code
	componentDidUpdate: function(prevProps, prevState){

		if(prevState.topic != this.state.topic){
			console.log("UPDATED");

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
		}
	},

	componentDidMount: function(){
		axios.get('/api/saved')
			.then(function(response){
				this.setState({
					savedArticles: response.data
				});
			}.bind(this));
	},

	// Here we render the function
	render: function(){
		console.log("inside main.js and render function!")
		return(

			<div className="container">

				<div className="row">
					<div className="jumbotron"> 
						<h1 className="text-center">New York Times Article Search</h1>
						<p className="text-center">Search for articles of interest and save them for later enjoyment!</p>
					</div>
				</div>

				<div className="row">
					<Search setTerm={this.setTerm}/>
				</div>

				<div className="row">			
					<Results results={this.state.results} saveArticle={this.saveArticle}/>
				</div>

				<div className="row">
					<Saved savedArticles={this.state.savedArticles} deleteArticle={this.deleteArticle} />
				</div>
			</div>
		)
	}
});

module.exports = Main;