// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Grabs the Routes
// var routes = require("./config/routes");

// We need to include all of the components we are using
var Jumbotron = require("./components/Jumbotron");
var Results = require("./components/Results");
var Saved = require("./components/Saved");
var Search = require("./components/Search");



ReactDOM.render(
// Here we dump all of the components into a single main-container
// Again, treat them like they are any other HTML elements.

  	<div className="container">
  	  		<Jumbotron />
  	  		<Search />
  	  		<Results />
  	  		<Saved />

  	</div>
  , document.getElementById("app")
);
