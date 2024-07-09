"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.launchCharacter = void 0;
var knockback_1 = require("../knockback");
function launchCharacter(launcher, opp, di) {
    if (di === void 0) { di = 0; }
    var weight = launcher.isThrow ? 100 : opp.weight;
    var angle = launcher.angle + di;
    var kb = knockback_1.calculateKb(opp.percent, launcher.damage, weight, launcher.kbScaling, launcher.kbBase);
    var currentVel = kb.initialVelocity;
    var yUnitsTraveled = 0;
    var verticallyKillableUnitsTraveled = yUnitsTraveled;
    var xUnitsTraveled = 0;
    var currentFallspeed = opp.gravity;
    // Loop through knockback frames
    for (var i = 1; i <= kb.framesInKb; i++) {
        // Update position
        yUnitsTraveled = yUnitsTraveled + (currentVel * Math.sin((angle) * (Math.PI / 180))) - currentFallspeed;
        xUnitsTraveled += currentVel * Math.cos((angle) * (Math.PI / 180));
        if ((currentVel * Math.sin((angle) * (Math.PI / 180))) > 2.4 && ((currentVel * Math.sin((angle) * (Math.PI / 180))) - currentFallspeed) > 0)
            verticallyKillableUnitsTraveled = verticallyKillableUnitsTraveled + (currentVel * Math.sin((angle) * (Math.PI / 180))) - currentFallspeed;
        // Update velocity
        currentVel -= .051;
        // Update current fallspeed
        if (currentFallspeed < opp.fallspeed) {
            if ((currentFallspeed + opp.gravity) > opp.fallspeed) {
                currentFallspeed = opp.fallspeed;
            }
            else {
                currentFallspeed += opp.gravity;
            }
        }
    }
    return {
        yUnitsTraveled: yUnitsTraveled,
        xUnitsTraveled: xUnitsTraveled,
        verticallyKillableUnitsTraveled: verticallyKillableUnitsTraveled,
    };
}
exports.launchCharacter = launchCharacter;
