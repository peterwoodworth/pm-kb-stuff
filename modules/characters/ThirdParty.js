"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knuckles = exports.Snake = exports.Sonic = void 0;
var Character_1 = require("./Character");
var Sonic = /** @class */ (function (_super) {
    __extends(Sonic, _super);
    function Sonic(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Sonic";
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        _this.percent = 168;
        return _this;
    }
    return Sonic;
}(Character_1.Character));
exports.Sonic = Sonic;
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Snake";
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        _this.percent = 168;
        return _this;
    }
    return Snake;
}(Character_1.Character));
exports.Snake = Snake;
var Knuckles = /** @class */ (function (_super) {
    __extends(Knuckles, _super);
    function Knuckles(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Knuckles";
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        _this.percent = 168;
        return _this;
    }
    return Knuckles;
}(Character_1.Character));
exports.Knuckles = Knuckles;
