import socket from 'socket.io-client'

let io = socket('//secret-temple-20459.herokuapp.com')

function onSocketConnected () {
  console.log('Connected to socket server')
}

function onSocketDisconnect () {
  console.log('Disconnected from socket server')
}

function onNewPlayer (data) {
  console.log('New player connected: ' + data.id)
}

function onMovePlayer (data) {

}

function onRemovePlayer (data) {

};

io.on('connect', onSocketConnected)
io.on('disconnect', onSocketDisconnect)
io.on('new player', onNewPlayer)
io.on('move player', onMovePlayer)
io.on('remove player', onRemovePlayer)
export default io
