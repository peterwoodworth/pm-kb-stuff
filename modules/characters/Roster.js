"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roster = void 0;
var loz = __importStar(require("./LegendOfZelda"));
var supermario = __importStar(require("./SuperMario"));
var retro = __importStar(require("./Retro"));
var kirby = __importStar(require("./Kirby"));
var metroid = __importStar(require("./Metroid"));
var thirdparty = __importStar(require("./ThirdParty"));
var misc = __importStar(require("./NintendoPlease"));
var fe = __importStar(require("./FireEmblem"));
var mother = __importStar(require("./Mother"));
var pokemon = __importStar(require("./Pokemon"));
var starfox = __importStar(require("./StarFox"));
var dk = __importStar(require("./DonkeyKong"));
exports.Roster = [
    new supermario.Mario({}),
    new supermario.Luigi({}),
    new supermario.Peach({}),
    new supermario.Bowser({}),
    new supermario.Wario({}),
    new supermario.Yoshi({}),
    new dk.DonkeyKong({}),
    new dk.DiddyKong({}),
    new misc.CaptainFalcon({}),
    new loz.Link({}),
    new loz.ToonLink({}),
    new loz.Zelda({}),
    new loz.Sheik({}),
    new loz.Ganondorf({}),
    new fe.Ike({}),
    new fe.Marth({}),
    new fe.Roy({}),
    new metroid.Samus({}),
    new metroid.ZeroSuitSamus({}),
    new kirby.Kirby({}),
    new kirby.Dedede({}),
    new kirby.MetaKnight({}),
    new pokemon.Mewtwo({}),
    new pokemon.Charizard({}),
    new pokemon.Ivysaur({}),
    new pokemon.Squirtle({}),
    new pokemon.Pikachu({}),
    new pokemon.Lucario({}),
    new pokemon.Jigglypuff({}),
    new starfox.Wolf({}),
    new starfox.Fox({}),
    new starfox.Falco({}),
    new mother.Ness({}),
    new mother.Lucas({}),
    new misc.Olimar({}),
    new retro.IceClimbers({}),
    new retro.Pit({}),
    new retro.MrGameAndWatch({}),
    new retro.ROB({}),
    new thirdparty.Snake({}),
    new thirdparty.Sonic({}),
    new thirdparty.Knuckles({}),
];
