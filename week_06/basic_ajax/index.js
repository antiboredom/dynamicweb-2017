var express = require('express')
var app = express()

app.use(express.static('public'));

app.get('/hello', function(req, res) {
  res.send('<b>HELLLOOOOO</b> ' + req.query.name + '. You are ' + req.query.adj);
});

app.get('/favoritebooks', function(req, res){
  var books = [
    {title: 'moby dick', author: 'melville'},
    {title: 'the man without qualities', author: 'musil'},
    {title: 'magic mountain', author: 'mann'}
  ];

  res.send(books);

});

app.listen(process.env.PORT || 3000);
