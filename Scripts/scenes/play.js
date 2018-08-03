var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // constructors
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Play.prototype._buildRedcars = function () {
            for (var count = 0; count < this._redcarNum; count++) {
                this._redcars.push(new objects.Redcar());
                //this._redcars[count] = new objects.Redcar();
            }
        };
        // public methods
        Play.prototype.Start = function () {
            this.engineSound = createjs.Sound.play("engine");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;
            this._car = new objects.Car();
            this._ocean = new objects.Road();
            this._coin = new objects.Coin();
            // creates an empty array of type Redcar
            this._redcars = new Array();
            this._redcarNum = 1;
            this._buildRedcars();
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._car.Update();
            this._ocean.Update();
            this._coin.Update();
            managers.Collision.check(this._car, this._coin);
            this._redcars.forEach(function (redcar) {
                redcar.Update();
                managers.Collision.check(_this._car, redcar);
            });
        };
        Play.prototype.Reset = function () { };
        Play.prototype.Destroy = function () {
            this.engineSound.stop();
            this.removeAllChildren();
        };
        Play.prototype.Main = function () {
            console.log("Starting - PLAY SCENE");
            // adding the road to the scene
            this.addChild(this._ocean);
            // adding the coin to the scene
            this.addChild(this._coin);
            // adding the car to the scene
            this.addChild(this._car);
            // adding the redcar to the scene
            for (var _i = 0, _a = this._redcars; _i < _a.length; _i++) {
                var redcar = _a[_i];
                this.addChild(redcar);
            }
            this.addChild(managers.Game.ScoreBoardManager.LivesLabel);
            this.addChild(managers.Game.ScoreBoardManager.ScoreLabel);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map