import { ILauncher } from "../Launcher";
import { Character, CharacterProps } from "./Character";

export class Samus extends Character {
  public readonly name: string;
  public readonly weight: number;
  public readonly gravity: number;
  public readonly fallspeed: number;
  public readonly uthrowstats?: ILauncher;
  public readonly displacements?: any;

  constructor(props: CharacterProps) {
    super(props);
    this.name = 'Samus';
    this.displacements = {
      mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
    }
    this.weight = 110;
    this.gravity = .066;
    this.fallspeed = 1.4;
  }
}

export class ZeroSuitSamus extends Character {
    public readonly name: string;
    public readonly weight: number;
    public readonly gravity: number;
    public readonly fallspeed: number;
    public readonly uthrowstats?: ILauncher;
    public readonly displacements?: any;
  
    constructor(props: CharacterProps) {
      super(props);
      this.name = "Zero Suit Samus";
      this.displacements = {
        mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
      }
      this.weight = 85;
      this.gravity = .135;
      this.fallspeed = 2.05;
    }
  }