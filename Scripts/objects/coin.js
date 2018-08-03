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
var objects;
(function (objects) {
    var Coin = /** @class */ (function (_super) {
        __extends(Coin, _super);
        /**
         * Creates an instance of Car.
         * @memberof Car
         */
        function Coin() {
            var _this = _super.call(this, "coin") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Coin.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.y > config.Screen.HEIGHT + this.halfHeight) {
                this.Reset();
            }
        };
        // public methods
        Coin.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._verticalSpeed = 5;
            this.Reset();
        };
        Coin.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this._checkBounds();
        };
        Coin.prototype.Reset = function () {
            this.y = -this.height;
            this.x = Math.floor(Math.random() * (config.Screen.WIDTH - this.width) + this.halfWidth);
        };
        return Coin;
    }(objects.GameObject));
    objects.Coin = Coin;
})(objects || (objects = {}));
//# sourceMappingURL=coin.js.map