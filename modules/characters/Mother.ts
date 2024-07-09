import { ILauncher } from "../Launcher";
import { Character, CharacterProps } from "./Character";

export class Lucas extends Character {
  public readonly name: string;
  public readonly weight: number;
  public readonly gravity: number;
  public readonly fallspeed: number;
  public readonly uthrowstats?: ILauncher;
  public readonly percent: number;
  public readonly displacements?: any;

  constructor(props: CharacterProps) {
    super(props);
    this.name = "Lucas";
    this.displacements = {
      mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
    }
    this.weight = 80;
    this.gravity = .125;
    this.fallspeed = 2.3;
    this.percent = 168;
  }
}

export class Ness extends Character {
  public readonly name: string;
  public readonly weight: number;
  public readonly gravity: number;
  public readonly fallspeed: number;
  public readonly uthrowstats?: ILauncher;
  public readonly percent: number;
  public readonly displacements?: any;

  constructor(props: CharacterProps) {
    super(props);
    this.name = "Ness";
    this.displacements = {
      mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
    }
    this.weight = 80;
    this.gravity = .125;
    this.fallspeed = 2.3;
    this.percent = 168;
  }
}