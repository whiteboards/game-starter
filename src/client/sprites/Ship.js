import Phaser from 'phaser'
import Bullets from './Bullets'

export default class extends Phaser.Sprite {

  constructor ({ game, x, y, asset, physics }) {
    super(game, x, y, asset)

    this.game = game
    
    this.weapon = game.add.weapon(30, 'bullet');

    //  The bullets will be automatically killed when they are 2000ms old
    this.weapon.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
    this.weapon.bulletLifespan = 2000;

    //  The speed at which the bullet is fired
    this.weapon.bulletSpeed = 600;

    //  Speed-up the rate of fire, allowing them to shoot 1 bullet every 60ms
    this.weapon.fireRate = 100;

    //  Wrap bullets around the world bounds to the opposite side
    this.weapon.bulletWorldWrap = true;
    
    
    this.anchor.setTo(0.5)

    this.game.physics.arcade.enable(this)

    this.body.drag.set(100)
    this.body.maxVelocity.set(200)
    
    this.weapon.trackSprite(this, 0, 0, true);
    
  }

  update () {
    if (this.game.key_thrust.isDown) {
      this.game.physics.arcade.accelerationFromRotation(this.rotation, 200, this.body.acceleration)
    } else {
      this.body.acceleration.set(0)
    }

    if (this.game.key_left.isDown) {
      this.body.angularVelocity = -300
    } else if (this.game.key_right.isDown) {
      this.body.angularVelocity = 300
    } else {
      this.body.angularVelocity = 0
    }

    if (this.game.key_fire.isDown) {
      this.weapon.fire();
    }
    this.game.world.wrap(this, 16);
  }

}
