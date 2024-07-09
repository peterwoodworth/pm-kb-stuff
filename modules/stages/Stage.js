"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Platform = exports.Stage = void 0;
// Center of Stage is 0,0
var Stage = /** @class */ (function () {
    function Stage() {
    }
    return Stage;
}());
exports.Stage = Stage;
var Platform = /** @class */ (function () {
    function Platform(position, width) {
        this.position = position;
        this.width = width;
    }
    return Platform;
}());
exports.Platform = Platform;
