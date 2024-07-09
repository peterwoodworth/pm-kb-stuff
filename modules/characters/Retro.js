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
exports.IceClimbers = exports.Pit = exports.ROB = exports.MrGameAndWatch = void 0;
var Character_1 = require("./Character");
var MrGameAndWatch = /** @class */ (function (_super) {
    __extends(MrGameAndWatch, _super);
    function MrGameAndWatch(props) {
        var _this = _super.call(this, props) || this;
        _this.name = 'Mr. Game and Watch';
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 75;
        _this.gravity = .095;
        _this.fallspeed = 1.7;
        return _this;
    }
    return MrGameAndWatch;
}(Character_1.Character));
exports.MrGameAndWatch = MrGameAndWatch;
var ROB = /** @class */ (function (_super) {
    __extends(ROB, _super);
    function ROB(props) {
        var _this = _super.call(this, props) || this;
        _this.name = 'ROB';
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 104;
        _this.gravity = .09;
        _this.fallspeed = 2.0;
        return _this;
    }
    return ROB;
}(Character_1.Character));
exports.ROB = ROB;
var Pit = /** @class */ (function (_super) {
    __extends(Pit, _super);
    function Pit(props) {
        var _this = _super.call(this, props) || this;
        _this.name = 'Pit';
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .095;
        _this.fallspeed = 1.9;
        return _this;
    }
    return Pit;
}(Character_1.Character));
exports.Pit = Pit;
var IceClimbers = /** @class */ (function (_super) {
    __extends(IceClimbers, _super);
    function IceClimbers(props) {
        var _this = _super.call(this, props) || this;
        _this.name = 'Ice Climbers';
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 88;
        _this.gravity = .1;
        _this.fallspeed = 1.6;
        return _this;
    }
    return IceClimbers;
}(Character_1.Character));
exports.IceClimbers = IceClimbers;
