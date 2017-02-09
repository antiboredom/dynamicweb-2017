var express = require('express');
var handlebars = require('express-handlebars');

var app = express();
app.use(express.static('public'));

app.engine('handlebars', handlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var users = [
  {username: "sam", realname: "Sam", age: 35, avatar: "http://greetingsfellowalienatedsubjectoflatecapitalism.com/images/jobcreator2.jpg"},
  {username: "cooldad", realname: "Obamaaaa", age: 55},
  {username: "easyd", realname: "The Donald", age: 70, hipHopName: "Easy D"}
];

function getUser(username) {
  var user;
  for (var i = 0; i < users.length; i++) {
    if (username == users[i].username) {
      user = users[i];
    }
  }
  return user;
}

app.get('/users', function(req, res){
  res.render('allusers', {users: users});
});

app.get('/users/:username', function(req, res){
  var username = req.params.username;
  var user = getUser(username);
  res.render('user', {user: user, friends: users});
});

app.get('/', function(req, res) {
  res.render('home', {
    message: "Easy D?",
    someNumber: Math.random(),
    anotherThing: '<p>hiiii</p>'
  });
});

app.get('/d', function(req, res) {
  var message = req.query.message;
  res.render('d', {shouldSayHi: true, message: message});
});


app.listen(process.env.PORT || 3000);
