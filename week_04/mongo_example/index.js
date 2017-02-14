var express = require('express');
var handlebars = require('express-handlebars');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.engine('handlebars', handlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var db;

MongoClient.connect('mongodb://sam:samsamsam@ds015478.mlab.com:15478/justatest', function(err, database){
  if (err) return console.log(err);

  db = database;
  app.listen(process.env.PORT || 3000);
});


app.get('/', function(req, res) {
  db.collection("ducks").find({}).toArray(function(err, results){
    res.render('home', {ducks: results});
  });
});

app.get('/ducks/:name', function(req, res) {
  db.collection("ducks").findOne({name: req.params.name}, function(err, result) {
    if (err) console.log(err);
    res.render('duck', {duck: result});
  });
});

app.post('/ducks/:name', function(req, res) {
  db.collection("ducks").updateOne({name: req.params.name}, {$set: {age: req.body.age, color: req.body.color}}, function(err, result) {
    res.redirect('/ducks/' + req.params.name);
  }); 
});

app.get('/ducks/:name/edit', function(req, res) {
  db.collection("ducks").findOne({name: req.params.name}, function(err, result) {
    if (err) console.log(err);
    res.render('edit_duck', {duck: result});
  });
});

app.get('/ducks/:name/delete', function(req, res) {
  db.collection("ducks").remove({name: req.params.name}, function(err, result) {
    res.redirect('/');
  });
});

app.get('/create', function(req, res) {
  res.render('create_duck');
});



app.post('/create', function(req, res) {
  var duck = {
    name: req.body.name.trim(),
    color: req.body.color.trim(),
    age: parseInt(req.body.age),
    favoriteFoods: req.body.favoriteFoods.split(',')
  };
  
  if (duck.name != '' && duck.color != '') {
    db.collection('ducks').insert(duck, function(err, result){
      res.redirect('/');
    });
  } else {
    res.render('create_duck', {message: 'Please enter a name and a color', duck: req.body});
  }
  // res.send(req.body.color);
});

