
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

mongoose.Promise = Promise;


//Create App
var app = express();

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Static Files
app.use(express.static("public"));

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

//api-routes
require("./controllers/api-routes.js")(app);


// Database configuration with mongoose
mongoose.connect("mongodb://localhost/nytscrapper");
var db = mongoose.connection;

// // Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// // Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});


var PORT = process.env.PORT || 3000;

// Listen on port 3000
app.listen(PORT, function() {
  console.log("App running on port 3000!");
});

