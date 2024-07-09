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
exports.Ike = exports.Roy = exports.Marth = void 0;
var Character_1 = require("./Character");
var Marth = /** @class */ (function (_super) {
    __extends(Marth, _super);
    function Marth(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Marth";
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        _this.percent = 168;
        return _this;
    }
    return Marth;
}(Character_1.Character));
exports.Marth = Marth;
var Roy = /** @class */ (function (_super) {
    __extends(Roy, _super);
    function Roy(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Roy";
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        _this.percent = 168;
        return _this;
    }
    return Roy;
}(Character_1.Character));
exports.Roy = Roy;
var Ike = /** @class */ (function (_super) {
    __extends(Ike, _super);
    function Ike(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Ike";
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        _this.percent = 168;
        return _this;
    }
    return Ike;
}(Character_1.Character));
exports.Ike = Ike;
