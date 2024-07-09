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
exports.DiddyKong = exports.DonkeyKong = void 0;
var Character_1 = require("./Character");
var DonkeyKong = /** @class */ (function (_super) {
    __extends(DonkeyKong, _super);
    function DonkeyKong(props) {
        var _this = _super.call(this, props) || this;
        _this.name = 'Donkey Kong';
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        return _this;
    }
    return DonkeyKong;
}(Character_1.Character));
exports.DonkeyKong = DonkeyKong;
var DiddyKong = /** @class */ (function (_super) {
    __extends(DiddyKong, _super);
    function DiddyKong(props) {
        var _this = _super.call(this, props) || this;
        _this.name = 'Diddy Kong';
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        return _this;
    }
    return DiddyKong;
}(Character_1.Character));
exports.DiddyKong = DiddyKong;
