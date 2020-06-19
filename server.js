// ==============================================================================
// DEPENDENCIES

var express = require("express");
var fs = require("fs");
var path = require("path");

// ==============================================================================
// EXPRESS CONFIGURATION
var app = express();


// Sets an initial port. 
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTERS
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// // HTML
// app.get("/notes", function(req, res) {
//   res.sendFile(path.join(__dirname, "./public/notes.html"));
// });

// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });

// // Link to JSON file
// // 'use strict';
// // let data = require('./db/db.json');
// // console.log(data);

// let rawdata = fs.readFileSync('./db/db.json');
// let note = JSON.parse(rawdata);
// console.log(note);

// // API
// // GET `/api/note`
// // module.exports = function(app) {
// app.get("/api/notes", function(req, res) {
//   return res.json(note);
//   console.log(note);
// });
// };

// =============================================================================
// LISTENER

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
