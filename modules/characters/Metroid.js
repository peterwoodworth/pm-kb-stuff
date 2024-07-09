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
exports.ZeroSuitSamus = exports.Samus = void 0;
var Character_1 = require("./Character");
var Samus = /** @class */ (function (_super) {
    __extends(Samus, _super);
    function Samus(props) {
        var _this = _super.call(this, props) || this;
        _this.name = 'Samus';
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 110;
        _this.gravity = .066;
        _this.fallspeed = 1.4;
        return _this;
    }
    return Samus;
}(Character_1.Character));
exports.Samus = Samus;
var ZeroSuitSamus = /** @class */ (function (_super) {
    __extends(ZeroSuitSamus, _super);
    function ZeroSuitSamus(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Zero Suit Samus";
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 85;
        _this.gravity = .135;
        _this.fallspeed = 2.05;
        return _this;
    }
    return ZeroSuitSamus;
}(Character_1.Character));
exports.ZeroSuitSamus = ZeroSuitSamus;
