var Player = require('./player').Player
var util = require('util')

var players = []
function onClientDisconnect () {
  util.log('Player has disconnected: ' + this.id)
}

function onNewPlayer (data) {
  var newPlayer = new Player(data.x, data.y)
  newPlayer.id = this.id
  this.broadcast.emit('new player', {id: newPlayer.id, x: newPlayer.getX(), y: newPlayer.getY()})
  var i, existingPlayer
  for (i = 0; i < players.length; i++) {
    existingPlayer = players[i]
    this.emit('new player', {id: existingPlayer.id, x: existingPlayer.getX(), y: existingPlayer.getY()})
  }
}

function onMovePlayer (data) {

}

module.exports = function (io) {
  io.on('connection', function (client) {
    util.log('New player has connected: ' + client.id)
    client.on('disconnect', onClientDisconnect)
    client.on('new player', onNewPlayer)
    client.on('move player', onMovePlayer)
  })
}
