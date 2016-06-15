import 'pixi'
import 'p2'
import Phaser from 'phaser'
var socket = require('socket.io-client')('http://stroids-crodeheaver.c9users.io/');

import BootState from './states/Boot'
import SplashState from './states/Splash'
import GameState from './states/Game'

class Game extends Phaser.Game {

  constructor () {
    socket.on('connect', function(){console.log("connected!")});
    socket.on('event', function(data){});
    socket.on('disconnect', function(){});
    let width = document.documentElement.clientWidth 
    let height = document.documentElement.clientHeight

    super(width, height, Phaser.AUTO, 'content', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Splash', SplashState, false)
    this.state.add('Game', GameState, false)

    this.state.start('Boot')
  }
}

window.game = new Game()
