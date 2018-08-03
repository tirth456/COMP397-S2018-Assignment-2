var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.check = function (object1, object2) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            if (math.Vec2.Distance(P1, P2) <
                object1.halfHeight + object2.halfHeight) {
                if (!object2.isColliding) {
                    object2.isColliding = true;
                    switch (object2.name) {
                        case "coin":
                            var yaySound = createjs.Sound.play("yay");
                            yaySound.volume = 0.1;
                            managers.Game.ScoreBoardManager.Score += 100;
                            if (managers.Game.ScoreBoardManager.Score >
                                managers.Game.ScoreBoardManager.HighScore) {
                                managers.Game.ScoreBoardManager.HighScore =
                                    managers.Game.ScoreBoardManager.Score;
                            }
                            break;
                        case "redcar":
                            var thunderSound = createjs.Sound.play("thunder");
                            thunderSound.volume = 0.1;
                            managers.Game.ScoreBoardManager.Lives -= 1;
                            // check if lives falls below 1
                            if (managers.Game.ScoreBoardManager.Lives <= 0) {
                                // change scenes to the END scene
                                managers.Game.CurrentState = config.Scene.END;
                            }
                            break;
                        case "yellowcar":
                            var thunderSound1 = createjs.Sound.play("thunder");
                            thunderSound1.volume = 0.1;
                            managers.Game.ScoreBoardManager.Lives -= 1;
                            // check if lives falls below 1
                            if (managers.Game.ScoreBoardManager.Lives <= 0) {
                                // change scenes to the END scene
                                managers.Game.CurrentState = config.Scene.END;
                            }
                            break;
                        case "greencar":
                            var thunderSound2 = createjs.Sound.play("thunder");
                            thunderSound2.volume = 0.1;
                            managers.Game.ScoreBoardManager.Lives -= 1;
                            // check if lives falls below 1
                            if (managers.Game.ScoreBoardManager.Lives <= 0) {
                                // change scenes to the END scene
                                managers.Game.CurrentState = config.Scene.END;
                            }
                            break;
                    }
                }
            }
            else {
                object2.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map