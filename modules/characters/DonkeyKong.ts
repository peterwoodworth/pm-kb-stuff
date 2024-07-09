import { ILauncher } from "../Launcher";
import { Character, CharacterProps } from "./Character";

export class DonkeyKong extends Character {
  public readonly name: string;
  public readonly weight: number;
  public readonly gravity: number;
  public readonly fallspeed: number;
  public readonly uthrowstats?: ILauncher;
  public readonly displacements?: any;

  constructor(props: CharacterProps) {
    super(props);
    this.name = 'Donkey Kong';
    this.displacements = {
      mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
    }
    this.weight = 80;
    this.gravity = .125;
    this.fallspeed = 2.3;
  }
}

export class DiddyKong extends Character {
    public readonly name: string;
    public readonly weight: number;
    public readonly gravity: number;
    public readonly fallspeed: number;
    public readonly uthrowstats?: ILauncher;
    public readonly displacements?: any;
  
    constructor(props: CharacterProps) {
      super(props);
      this.name = 'Diddy Kong';
      this.displacements = {
        mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
      }
      this.weight = 80;
      this.gravity = .125;
      this.fallspeed = 2.3;
    }
  }