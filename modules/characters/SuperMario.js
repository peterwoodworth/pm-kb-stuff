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
exports.Yoshi = exports.Wario = exports.Bowser = exports.Peach = exports.Luigi = exports.Mario = void 0;
var Character_1 = require("./Character");
var Mario = /** @class */ (function (_super) {
    __extends(Mario, _super);
    function Mario(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Mario";
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        _this.percent = 168;
        return _this;
    }
    return Mario;
}(Character_1.Character));
exports.Mario = Mario;
var Luigi = /** @class */ (function (_super) {
    __extends(Luigi, _super);
    function Luigi(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Luigi";
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        _this.percent = 168;
        return _this;
    }
    return Luigi;
}(Character_1.Character));
exports.Luigi = Luigi;
var Peach = /** @class */ (function (_super) {
    __extends(Peach, _super);
    function Peach(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Peach";
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        _this.percent = 168;
        return _this;
    }
    return Peach;
}(Character_1.Character));
exports.Peach = Peach;
var Bowser = /** @class */ (function (_super) {
    __extends(Bowser, _super);
    function Bowser(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Bowser";
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        _this.percent = 168;
        return _this;
    }
    return Bowser;
}(Character_1.Character));
exports.Bowser = Bowser;
var Wario = /** @class */ (function (_super) {
    __extends(Wario, _super);
    function Wario(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Wario";
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        _this.percent = 168;
        return _this;
    }
    return Wario;
}(Character_1.Character));
exports.Wario = Wario;
var Yoshi = /** @class */ (function (_super) {
    __extends(Yoshi, _super);
    function Yoshi(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Yoshi";
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        _this.percent = 168;
        return _this;
    }
    return Yoshi;
}(Character_1.Character));
exports.Yoshi = Yoshi;
