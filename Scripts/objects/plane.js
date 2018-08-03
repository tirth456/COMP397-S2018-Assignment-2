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
    var Car = /** @class */ (function (_super) {
        __extends(Car, _super);
        /**
         * Creates an instance of Car.
         * @memberof Car
         */
        function Car() {
            var _this = _super.call(this, "car") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Car.prototype._checkBounds = function () {
            // check right boundary
            if (this.x > config.Screen.WIDTH - this.halfWidth) {
                this.x = config.Screen.WIDTH - this.halfWidth;
            }
            // check left boundary
            if (this.x < this.halfWidth) {
                this.x = this.halfWidth;
            }
        };
        // public methods
        Car.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.y = 430;
        };
        Car.prototype.Update = function () {
            this.x = managers.Game.Stage.mouseX;
            this._checkBounds();
        };
        Car.prototype.Reset = function () { };
        return Car;
    }(objects.GameObject));
    objects.Car = Car;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map