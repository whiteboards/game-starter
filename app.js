var express = require('express');
var port = process.env.PORT || 3000
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.get('*', function(req, res){
  res.sendFile('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(port, function(){
  console.log('Example app listening on port ' + port);
});

