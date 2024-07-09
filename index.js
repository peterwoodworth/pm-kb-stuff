"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var Pokemon_1 = require("./modules/characters/Pokemon");
var Roster_1 = require("./modules/characters/Roster");
var Battlefield_1 = require("./modules/stages/Battlefield");
function run() {
    var mewtwo = new Pokemon_1.Mewtwo({});
    for (var _i = 0, Roster_2 = Roster_1.Roster; _i < Roster_2.length; _i++) {
        var character = Roster_2[_i];
        console.log(character.name, mewtwo.whenWillUthrowKill(character, new Battlefield_1.Battlefield()));
    }
}
exports.run = run;
run();
