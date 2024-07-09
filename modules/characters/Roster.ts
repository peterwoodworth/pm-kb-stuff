import { Character } from "./Character";
import * as loz from './LegendOfZelda';
import * as supermario from './SuperMario';
import * as retro from './Retro';
import * as kirby from './Kirby';
import * as metroid from './Metroid';
import * as thirdparty from './ThirdParty';
import * as misc from './NintendoPlease';
import * as fe from './FireEmblem'
import * as mother from "./Mother";
import * as pokemon from "./Pokemon";
import * as starfox from "./StarFox";
import * as dk from "./DonkeyKong";

export const Roster: Character[] = [
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
]