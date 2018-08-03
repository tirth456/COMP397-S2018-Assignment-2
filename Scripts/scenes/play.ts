namespace scenes {
  export class Play extends objects.Scene {
    // member variables
    private _car: objects.Car;
    private _ocean: objects.Road;
    private _coin: objects.Coin;
    private _redcars: objects.Redcar[];
    private _redcarNum: number;

    public engineSound: createjs.AbstractSoundInstance;

    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods
    private _buildRedcars(): void {
      for (let count = 0; count < this._redcarNum; count++) {
        this._redcars.push(new objects.Redcar());
        //this._redcars[count] = new objects.Redcar();
      }
    }

    // public methods
    public Start(): void {
      this.engineSound = createjs.Sound.play("engine");
      this.engineSound.loop = -1;
      this.engineSound.volume = 0.1;

      this._car = new objects.Car();
      this._ocean = new objects.Road();
      this._coin = new objects.Coin();

      // creates an empty array of type Redcar
      this._redcars = new Array<objects.Redcar>();
      this._redcarNum = 1;

      this._buildRedcars();

      this.Main();
    }

    public Update(): void {
      this._car.Update();
      this._ocean.Update();
      this._coin.Update();

      managers.Collision.check(this._car, this._coin);

      this._redcars.forEach(redcar => {
        redcar.Update();
        managers.Collision.check(this._car, redcar);
      });
    }

    public Reset(): void {}

    public Destroy(): void {
      this.engineSound.stop();
      this.removeAllChildren();
    }

    public Main(): void {
      console.log(`Starting - PLAY SCENE`);

      // adding the road to the scene
      this.addChild(this._ocean);

      // adding the coin to the scene
      this.addChild(this._coin);

      // adding the car to the scene
      this.addChild(this._car);

      // adding the redcar to the scene
      for (const redcar of this._redcars) {
        this.addChild(redcar);
      }

      this.addChild(managers.Game.ScoreBoardManager.LivesLabel);
      this.addChild(managers.Game.ScoreBoardManager.ScoreLabel);
    }
  }
}
