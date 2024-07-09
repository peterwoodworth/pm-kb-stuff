import { ILauncher } from "../Launcher";
import { Character, CharacterProps } from "./Character";

export class MrGameAndWatch extends Character {
  public readonly name: string;
  public readonly weight: number;
  public readonly gravity: number;
  public readonly fallspeed: number;
  public readonly uthrowstats?: ILauncher;
  public readonly displacements?: any;

  constructor(props: CharacterProps) {
    super(props);
    this.name = 'Mr. Game and Watch';
    this.displacements = {
      mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
    }
    this.weight = 75;
    this.gravity = .095;
    this.fallspeed = 1.7;
  }
}

export class ROB extends Character {
    public readonly name: string;
    public readonly weight: number;
    public readonly gravity: number;
    public readonly fallspeed: number;
    public readonly uthrowstats?: ILauncher;
    public readonly displacements?: any;
  
    constructor(props: CharacterProps) {
      super(props);
      this.name = 'ROB';
      this.displacements = {
        mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
      }
      this.weight = 104;
      this.gravity = .09;
      this.fallspeed = 2.0;
    }
  }

  export class Pit extends Character {
    public readonly name: string;
    public readonly weight: number;
    public readonly gravity: number;
    public readonly fallspeed: number;
    public readonly uthrowstats?: ILauncher;
    public readonly displacements?: any;
  
    constructor(props: CharacterProps) {
      super(props);
      this.name = 'Pit';
      this.displacements = {
        mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
      }
      this.weight = 80;
      this.gravity = .095;
      this.fallspeed = 1.9;
    }
  }

  export class IceClimbers extends Character {
    public readonly name: string;
    public readonly weight: number;
    public readonly gravity: number;
    public readonly fallspeed: number;
    public readonly uthrowstats?: ILauncher;
    public readonly displacements?: any;
  
    constructor(props: CharacterProps) {
      super(props);
      this.name = 'Ice Climbers';
      this.displacements = {
        mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
      }
      this.weight = 88;
      this.gravity = .1;
      this.fallspeed = 1.6;
    }
  }