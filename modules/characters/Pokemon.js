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
exports.Lucario = exports.Squirtle = exports.Ivysaur = exports.Charizard = exports.Pikachu = exports.Jigglypuff = exports.Mewtwo = void 0;
var Launcher_1 = require("../Launcher");
var Character_1 = require("./Character");
var Mewtwo = /** @class */ (function (_super) {
    __extends(Mewtwo, _super);
    function Mewtwo(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Mewtwo";
        _this.weight = 87;
        _this.gravity = .082;
        _this.fallspeed = 1.5;
        _this.displacements = {
            mewtwouthrow: 15
        };
        _this.uthrowstats = {
            damage: 12,
            angle: 90,
            kbScaling: 67,
            kbBase: 100,
            isThrow: true
        };
        return _this;
    }
    Mewtwo.prototype.whenWillUthrowKill = function (opp, stage) {
        var originalPercent = opp.percent;
        var unitsNeeded = stage.height - opp.displacements.mewtwouthrow;
        var noDiKill = 0, diKill = 0;
        for (var i = 0; i < 300; i++) {
            opp.setPercent(i);
            if (noDiKill === 0 && Launcher_1.launchCharacter(this.uthrowstats, opp).verticallyKillableUnitsTraveled > unitsNeeded) {
                noDiKill = i;
            }
            else if (noDiKill !== 0 && diKill === 0 && Launcher_1.launchCharacter(this.uthrowstats, opp, -18).verticallyKillableUnitsTraveled > unitsNeeded) {
                diKill = i;
            }
        }
        opp.setPercent(originalPercent);
        return {
            noDiKill: noDiKill,
            diKill: diKill,
        };
    };
    return Mewtwo;
}(Character_1.Character));
exports.Mewtwo = Mewtwo;
var Jigglypuff = /** @class */ (function (_super) {
    __extends(Jigglypuff, _super);
    function Jigglypuff(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Jigglypuff";
        _this.displacements = {
            mewtwouthrow: 20 // mewtwo uthrow displacement between 20.8 and 19.9
        };
        _this.weight = 62;
        _this.gravity = .064;
        _this.fallspeed = 1.3;
        return _this;
    }
    return Jigglypuff;
}(Character_1.Character));
exports.Jigglypuff = Jigglypuff;
var Pikachu = /** @class */ (function (_super) {
    __extends(Pikachu, _super);
    function Pikachu(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Pikachu";
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .11;
        _this.fallspeed = 1.9;
        return _this;
    }
    return Pikachu;
}(Character_1.Character));
exports.Pikachu = Pikachu;
var Charizard = /** @class */ (function (_super) {
    __extends(Charizard, _super);
    function Charizard(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Charizard";
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        return _this;
    }
    return Charizard;
}(Character_1.Character));
exports.Charizard = Charizard;
var Ivysaur = /** @class */ (function (_super) {
    __extends(Ivysaur, _super);
    function Ivysaur(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Ivysaur";
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        return _this;
    }
    return Ivysaur;
}(Character_1.Character));
exports.Ivysaur = Ivysaur;
var Squirtle = /** @class */ (function (_super) {
    __extends(Squirtle, _super);
    function Squirtle(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Squirtle";
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        return _this;
    }
    return Squirtle;
}(Character_1.Character));
exports.Squirtle = Squirtle;
var Lucario = /** @class */ (function (_super) {
    __extends(Lucario, _super);
    function Lucario(props) {
        var _this = _super.call(this, props) || this;
        _this.name = "Lucario";
        _this.displacements = {
            mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
        };
        _this.weight = 80;
        _this.gravity = .125;
        _this.fallspeed = 2.3;
        return _this;
    }
    return Lucario;
}(Character_1.Character));
exports.Lucario = Lucario;
