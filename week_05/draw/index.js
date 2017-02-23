var express = require('express');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 3000);

app.use(express.static('public'));

io.on('connection', function (client) {
  client.on('draw', function(data) {
    client.broadcast.emit('draw', data);
  });
});


