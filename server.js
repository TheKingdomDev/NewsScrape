//Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var logger = require("logger");
var mongoose = require('mongoose');

//Models

var Note = require("./models/Note.js");
var Article = require("./models/Article.js");

//Scraping Tools
var request = require("request");
var cheerio = require("cheerio");

mongoose.Promise = Promise;

// Init Express
var app = express();

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static("public"));


mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connected to db")
});

// Routes
// ======

// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});