var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

var db;

MongoClient.connect('mongodb://sam:samsamsam@ds015478.mlab.com:15478/justatest', function(err, database){
  if (err) return console.log(err);

  db = database;
  app.listen(process.env.PORT || 3000);
});

app.get('/items', function(req, res){
  db.collection('todos').find().toArray(function(err, results){
    res.send(results);
  });
});

app.post('/create', function(req, res){
  db.collection('todos').insert({
    item: req.body.item,
    date: new Date()
  }, function(err){
    if (err) res.send('FAILED');
    else res.send('OK');
  });
});
