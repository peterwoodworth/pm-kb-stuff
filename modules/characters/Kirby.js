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
exports.MetaKnight = exports.Dedede = exports.Kirby = void 0;
var Character_1 = require("./Character");
var Kirby = /** @class */ (function (_super) {
    __extends(Kirby, _super);
    function Kirby(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Kirby";
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        _this.percent = 168;
        return _this;
    }
    return Kirby;
}(Character_1.Character));
exports.Kirby = Kirby;
var Dedede = /** @class */ (function (_super) {
    __extends(Dedede, _super);
    function Dedede(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Dedede";
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        _this.percent = 168;
        return _this;
    }
    return Dedede;
}(Character_1.Character));
exports.Dedede = Dedede;
var MetaKnight = /** @class */ (function (_super) {
    __extends(MetaKnight, _super);
    function MetaKnight(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Meta Knight";
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        _this.percent = 168;
        return _this;
    }
    return MetaKnight;
}(Character_1.Character));
exports.MetaKnight = MetaKnight;
