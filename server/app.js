'use strict'
let http = require('http')
let path = require('path')
let ecstatic = require('ecstatic')
let io = require('socket.io')
let Game = require('./src/game')

let port = process.env.PORT || 8080

let server = http.createServer(
  ecstatic({ root: path.resolve(__dirname, '../public') })
).listen(port, function (err) {
  if (err) {
    throw err
  }
  console.log('listening on port ' + port)
  new Game(io.listen(server))
})
