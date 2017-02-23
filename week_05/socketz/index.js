var express = require('express');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 3000);

app.use(express.static('public'));

io.on('connection', function (client) {
  console.log('user connected');
  client.emit('connected', {msg: "You're connected!"});
  client.on('message', function (data) {
    console.log('message recieved', data);
    client.broadcast.emit('message', data);
  });
});

