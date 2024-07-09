"use strict";
// https://smashboards.com/threads/tool-knockback-launch-speed-hitstun-hitlag-shieldstun-calculation-v1-11.324878/
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateHitlag = exports.calculateShieldstun = exports.calculateKb = void 0;
function calculateKb(percent, damage, weight, kbScaling, kbBase, ratios) {
    var totalRatio = 1;
    if (ratios) {
        for (var _i = 0, ratios_1 = ratios; _i < ratios_1.length; _i++) {
            var ratio = ratios_1[_i];
            totalRatio *= ratio;
        }
    }
    var modifiedPercent = percent + damage;
    var kb = (((((((modifiedPercent / 10) + ((modifiedPercent * damage * .05))) * ((200 / (weight + 100))) * 1.4) + 18) * kbScaling * .01) + kbBase) * totalRatio);
    return {
        knockback: kb,
        framesInKb: Math.floor(kb * .4),
        initialVelocity: kb * .03,
    };
}
exports.calculateKb = calculateKb;
function calculateShieldstun(damage) {
    return Math.floor((4.45 + damage) / 2.235);
}
exports.calculateShieldstun = calculateShieldstun;
function calculateHitlag(damage, electric, cc) {
    if (electric === void 0) { electric = 1; }
    if (cc === void 0) { cc = 1; }
    return Math.floor(Math.floor(Math.floor((damage / 3) + 3) * electric) * cc);
}
exports.calculateHitlag = calculateHitlag;
