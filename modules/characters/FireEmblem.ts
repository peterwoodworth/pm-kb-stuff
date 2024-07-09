import { ILauncher } from "../Launcher";
import { Character, CharacterProps } from "./Character";

export class Marth extends Character {
  public readonly name: string;
  public readonly weight: number;
  public readonly gravity: number;
  public readonly fallspeed: number;
  public readonly uthrowstats?: ILauncher;
  public readonly percent: number;
  public readonly displacements?: any;

  constructor(props: CharacterProps) {
    super(props);
    this.name = "Marth";
    this.displacements = {
      mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
    }
    this.weight = 80;
    this.gravity = .125;
    this.fallspeed = 2.3;
    this.percent = 168;
  }
}

export class Roy extends Character {
    public readonly name: string;
    public readonly weight: number;
    public readonly gravity: number;
    public readonly fallspeed: number;
    public readonly uthrowstats?: ILauncher;
    public readonly percent: number;
    public readonly displacements?: any;
  
    constructor(props: CharacterProps) {
      super(props);
      this.name = "Roy";
      this.displacements = {
        mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
      }
      this.weight = 80;
      this.gravity = .125;
      this.fallspeed = 2.3;
      this.percent = 168;
    }
  }

  export class Ike extends Character {
    public readonly name: string;
    public readonly weight: number;
    public readonly gravity: number;
    public readonly fallspeed: number;
    public readonly uthrowstats?: ILauncher;
    public readonly percent: number;
    public readonly displacements?: any;
  
    constructor(props: CharacterProps) {
      super(props);
      this.name = "Ike";
      this.displacements = {
        mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
      }
      this.weight = 80;
      this.gravity = .125;
      this.fallspeed = 2.3;
      this.percent = 168;
    }
  }