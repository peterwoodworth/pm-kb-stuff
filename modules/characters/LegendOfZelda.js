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
exports.Ganondorf = exports.Sheik = exports.Zelda = exports.ToonLink = exports.Link = void 0;
var Character_1 = require("./Character");
var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link(props) {
        var _this = _super.call(this, props) || this;
        _this.name = 'Link';
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        return _this;
    }
    return Link;
}(Character_1.Character));
exports.Link = Link;
var ToonLink = /** @class */ (function (_super) {
    __extends(ToonLink, _super);
    function ToonLink(props) {
        var _this = _super.call(this, props) || this;
        _this.name = 'Toon Link';
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        return _this;
    }
    return ToonLink;
}(Character_1.Character));
exports.ToonLink = ToonLink;
var Zelda = /** @class */ (function (_super) {
    __extends(Zelda, _super);
    function Zelda(props) {
        var _this = _super.call(this, props) || this;
        _this.name = 'Zelda';
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        return _this;
    }
    return Zelda;
}(Character_1.Character));
exports.Zelda = Zelda;
var Sheik = /** @class */ (function (_super) {
    __extends(Sheik, _super);
    function Sheik(props) {
        var _this = _super.call(this, props) || this;
        _this.name = 'Sheik';
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        return _this;
    }
    return Sheik;
}(Character_1.Character));
exports.Sheik = Sheik;
var Ganondorf = /** @class */ (function (_super) {
    __extends(Ganondorf, _super);
    function Ganondorf(props) {
        var _this = _super.call(this, props) || this;
        _this.name = 'Ganondorf';
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        return _this;
    }
    return Ganondorf;
}(Character_1.Character));
exports.Ganondorf = Ganondorf;
