// Here we will utilize the axios library to perform GET/POST requests
var axios = require("axios");

// New York Times API
var nytAPI = "e82dedb2e4484274a1c85c25109204d3";


var helpers = {

	runQuery: function(topic, startYear, endYear){

		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPI + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";

		return axios.get(queryURL)
			.then(function(response){

				var newResults = [];
				var fullResults = response.data.response.docs;
				var counter = 0;

				//Gets first 5 articles that have all the information we need
				for(var i = 0; i < fullResults.length; i++){

					if(counter > 4) {
						return newResults;
					}

					if(fullResults[counter].headline.main && fullResults[counter].pub_date && fullResults[counter].web_url) {
						newResults.push(fullResults[counter]);
						counter++;
					}
				}

				return newResults;
		})

	},


	// This function posts saved articles to our database.
	postArticle: function(title, date, url){

		axios.post('/api/saved', {title: title, date: date, url: url})
		.then(function(results){

			console.log("Posted to MongoDB");
			return(results);
		})
	}

}


// We export the helper function 
module.exports = Helper;


// Exporting an object with methods for retrieving and posting data to our API
module.exports = {
  // Returns a promise object we can .then() off inside our Parent component
  getClicks: function() {
    return axios.get("/api");
  },
  // Also returns a promise object we can .then() off inside our Parent component
  // This method takes in an argument for what to post to the database
  saveClicks: function(clickData) {
    return axios.post("/api", clickData);
  }
};

