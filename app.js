var express = require('express');
var port = process.env.PORT || 80
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.get('*', function(req, res){
  res.sendFile('/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(port, function(){
  console.log('Stroids listening on port ' + port);
});
