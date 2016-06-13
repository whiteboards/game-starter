import Phaser from 'phaser'
import Bullets from './Bullets'

export default class extends Phaser.Sprite {

  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)

    this.game = game
    this.anchor.setTo(0.5)
    
    this.bulletTime = 0;
    
    this.bullets = new Bullets({
      game: this.game,
      enableBody: true,
      physicsBodyType: Phaser.Physics.ARCADE,
      asset: 'bullet',
      amount: 5
    })
  }

  update () {

    if (this.game.cursors.up.isDown)
    {
        this.game.physics.arcade.accelerationFromRotation(this.rotation, 200, this.body.acceleration);
    }
    else
    {
        this.body.acceleration.set(0);
    }

    if (this.game.cursors.left.isDown)
    {
        this.body.angularVelocity = -300;
    }
    else if (this.game.cursors.right.isDown)
    {
        this.body.angularVelocity = 300;
    }
    else
    {
        this.body.angularVelocity = 0;
    }
    
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
    {
        this.fireBullet();
    }
    this.screenWrap()
  }
  
  screenWrap () {

    if (this.x < 0)
    {
        this.x = this.game.width;
    }
    else if (this.x > this.game.width)
    {
        this.x = 0;
    }

    if (this.y < 0)
    {
        this.y = this.game.height;
    }
    else if (this.y > this.game.height)
    {
        this.y = 0;
    }
  }
  
  fireBullet () {

    if (this.game.time.now > this.bulletTime)
    {
        let bullet = this.bullets.getFirstExists(false);

        if (bullet)
        {
            bullet.reset(this.body.x + 63, this.body.y + 23);
            bullet.lifespan = 2000;
            bullet.rotation = this.rotation;
            this.game.physics.arcade.velocityFromRotation(this.rotation, 400, bullet.body.velocity);
            this.bulletTime = this.game.time.now + 50;
        }
    }

}

}
