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
exports.Wolf = exports.Falco = exports.Fox = void 0;
var Character_1 = require("./Character");
var Fox = /** @class */ (function (_super) {
    __extends(Fox, _super);
    // mewtwo uthrow displacement between 17.03 and 17.24
    function Fox(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Fox";
        _this.displacements = {
            mewtwouthrow: 17.1
        };
        _this.weight = 75;
        _this.gravity = .23;
        _this.fallspeed = 2.8;
        _this.percent = 185;
        return _this;
    }
    return Fox;
}(Character_1.Character));
exports.Fox = Fox;
var Falco = /** @class */ (function (_super) {
    __extends(Falco, _super);
    // 17.7 18.6
    // PS2 DI away dies at 176
    // Dreamland DI away dies at 208
    function Falco(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Falco";
        _this.displacements = {
            mewtwouthrow: 18
        };
        _this.weight = 80;
        _this.gravity = .17;
        _this.fallspeed = 3.1;
        _this.percent = 176;
        return _this;
    }
    return Falco;
}(Character_1.Character));
exports.Falco = Falco;
var Wolf = /** @class */ (function (_super) {
    __extends(Wolf, _super);
    // 18.2
    // ps2 178
    function Wolf(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Wolf";
        _this.displacements = {
            mewtwouthrow: 18
        };
        _this.weight = 85;
        _this.gravity = .16;
        _this.fallspeed = 3.2;
        _this.percent = 177;
        return _this;
    }
    return Wolf;
}(Character_1.Character));
exports.Wolf = Wolf;
