var express = require("express");
var path = require("path");

var app = express();

var note = 
  {
      "title":"Test Title",
      "text":"Test text"
  };


module.exports = function(app) {
  // API GET Requests
  // ---------------------------------------------------------------------------

  app.get("api/notes", function(req, res) {
    return res.json(note);
  });


  app.post("api/notes", function(req, res) {
    // req.body is available since we're using the body parsing middleware
      note.push(req.body);
      // res.json(true);
   });

  // add DELETE 
  app.delete("api/notes/:id", function(req, res) {

  });

};
