// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Grabs the Routes
// var routes = require("./config/routes");

// We need to include all of the components we are using
var Main = require("./components/Main");



ReactDOM.render(
// Here we dump all of the components into a single main-container
// Again, treat them like they are any other HTML elements.

  	<Main />, 
   document.getElementById("app")
);
