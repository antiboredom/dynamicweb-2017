var express = require('express');
var handlebars = require('express-handlebars')

var app = express();

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/static', express.static('public'))

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/users/:username', function(req, res) {
  res.render('user', {name: req.params.username});
});

app.listen(process.env.PORT || 3000);

