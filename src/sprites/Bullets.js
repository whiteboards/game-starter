import Phaser from 'phaser'

export default class extends Phaser.Group {
    
  constructor ({ game, parent, name, addToStage, enableBody, physicsBodyType, amount, asset }) {
    super(game, parent, name, addToStage, enableBody, physicsBodyType)

    this.game = game
    
    this.createMultiple(amount, asset);
    this.setAll('anchor.x', 0.5);
    this.setAll('anchor.y', 0.5);
  }

  update () {
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

}
