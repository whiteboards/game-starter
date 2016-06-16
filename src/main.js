import 'pixi'
import 'p2'
import Phaser from 'phaser'
import socket from'socket.io-client'

import BootState from './states/Boot'
import SplashState from './states/Splash'
import GameState from './states/Game'

class Game extends Phaser.Game {

  constructor () {
    let io = socket('secret-temple-20459.herokuapp.com')
    io.on('connect', function(){console.log("connected!")});
    io.on('event', function(data){});
    io.on('disconnect', function(){});
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
