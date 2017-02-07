var express = require('express');

var app = express();

app.use('/static', express.static('public'))

app.get('/', function(req, res) {
  res.send('punch a <i>nazi</i>?<br>yes/no');
});

app.get('/querytest', function(req, res) {
  res.send(req.query.name + ' ' + req.query.location);
});

app.get('/yes', function(req, res) {
  res.send('ok we will punch a nazi');
});

app.get('/no', function(req, res) {
  res.send('ok we will NOT punch a nazi');
});

app.get('/punch/:yes_or_no', function(req, res) {
  res.send("You said: " + req.params.yes_or_no);
});

app.get('/users/:username', function(req, res) {
  res.send("You are looking at: " + req.params.username);
});

app.listen(process.env.PORT || 3000);
