var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 5000);

app.use(express.static('public'));

io.on('connection', function(client) {

  client.on('message', function(data) {
    console.log('message recieved', data);
    client.broadcast.emit('message', data);
  });

});
