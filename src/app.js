const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

// INDEX HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const port = 8080;
app.listen(port, () => {
  console.log(`Le serveur est lancé : http://localhost:${port}`);
});

// SONGLIST
var songlist = [];

app.get('/api/songlist', (req, res) => {
  res.send(songlist);
});

app.post('/api/songlist', function (req, res) {
  songlist = req.body;
  res.send(songlist);
});


// SCOREBOARD
var scoreboard = [];

app.get('/api/scoreboard', (req, res) => {
  res.send(scoreboard);
});

app.post('/api/scoreboard', function (req, res) {
  scoreboard = req.body;
  res.send(scoreboard);
});
