var express = require('express');
var port = process.env.PORT || 80
var app = express();
var https = require('https').Server(app);
var io = require('socket.io')(https);

app.use(express.static('public'));

app.get('*', function(req, res){
  res.sendFile('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

https.listen(port, function(){
  console.log('Example app listening on port ' + port);
});
