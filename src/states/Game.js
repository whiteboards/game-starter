/* globals __DEV__ */
import Phaser from 'phaser'
import Ship from '../sprites/Ship'
import {setResponsiveWidth} from '../utils'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    
    this.game.cursors = this.input.keyboard.createCursorKeys();

    this.ship = new Ship({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      asset: 'ship'
    })
    
    
    
    this.physics.startSystem(Phaser.Physics.ARCADE);
    
    this.physics.arcade.enable(this.ship);
    
    
    // set the sprite width to 30% of the game width
    //setResponsiveWidth(this.ship, 10, this.game.world)
    this.game.add.existing(this.ship)
    
    this.game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.ship, 32, 32)
    }
  }
  
  update(){
  }
}
