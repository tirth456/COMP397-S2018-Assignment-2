namespace objects {
  export class Redcar extends objects.GameObject {
    // member variables
    private _verticalSpeed: number;

    /**
     * Creates an instance of Redcar.
     * @memberof Redcar
     */
    constructor() {
      super("redcar");

      this.Start();
    }

    // private methods
    private _checkBounds(): void {
      // check bottom boundary
      if (this.y > config.Screen.HEIGHT + this.halfHeight) {
        this.Reset();
      }
    }

    // public methods
    public Start(): void {
      this.regX = this.halfWidth;
      this.regY = this.halfHeight;

      this.Reset();
    }

    public Update(): void {
      this.y += this._verticalSpeed;
      this._checkBounds();
    }

    public Reset(): void {
      this._verticalSpeed = Math.floor(Math.random() * 5 + 5); // between 5 and 10 ppf

      this.y = -this.height;
      this.x = Math.floor(
        Math.random() * (config.Screen.WIDTH - this.width) + this.halfWidth
      );
    }
  }
}
