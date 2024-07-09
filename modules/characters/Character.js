"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
var Character = /** @class */ (function () {
    function Character(props) {
        props.percent ? this.percent = props.percent : this.percent = 0;
    }
    Character.prototype.setPercent = function (percent) {
        this.percent = percent;
    };
    return Character;
}());
exports.Character = Character;
