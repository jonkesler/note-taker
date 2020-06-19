// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var fs = require("fs");

var noteData = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/notes... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });


  app.post("/api/notes", function(req, res) {
      noteData.push(JSON.stringify(req.body));
      res.json(false);
      console.log(noteData);
  });

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    noteData.length = 0;
    res.json({ ok: true });
  });
}
