import { ILauncher } from "../Launcher";
import { Character, CharacterProps } from "./Character";

export class Mario extends Character {
  public readonly name: string;
  public readonly weight: number;
  public readonly gravity: number;
  public readonly fallspeed: number;
  public readonly uthrowstats?: ILauncher;
  public readonly percent: number;
  public readonly displacements?: any;

  constructor(props: CharacterProps) {
    super(props);
    this.name = "Mario";
    this.displacements = {
      mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
    }
    this.weight = 80;
    this.gravity = .125;
    this.fallspeed = 2.3;
    this.percent = 168;
  }
}

  export class Luigi extends Character {
    public readonly name: string;
    public readonly weight: number;
    public readonly gravity: number;
    public readonly fallspeed: number;
    public readonly uthrowstats?: ILauncher;
    public readonly percent: number;
    public readonly displacements?: any;
  
    constructor(props: CharacterProps) {
      super(props);
      this.name = "Luigi";
      this.displacements = {
        mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
      }
      this.weight = 80;
      this.gravity = .125;
      this.fallspeed = 2.3;
      this.percent = 168;
    }
  }

  export class Peach extends Character {
    public readonly name: string;
    public readonly weight: number;
    public readonly gravity: number;
    public readonly fallspeed: number;
    public readonly uthrowstats?: ILauncher;
    public readonly percent: number;
    public readonly displacements?: any;
  
    constructor(props: CharacterProps) {
      super(props);
      this.name = "Peach";
      this.displacements = {
        mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
      }
      this.weight = 80;
      this.gravity = .125;
      this.fallspeed = 2.3;
      this.percent = 168;
    }
  }

  export class Bowser extends Character {
    public readonly name: string;
    public readonly weight: number;
    public readonly gravity: number;
    public readonly fallspeed: number;
    public readonly uthrowstats?: ILauncher;
    public readonly percent: number;
    public readonly displacements?: any;
  
    constructor(props: CharacterProps) {
      super(props);
      this.name = "Bowser";
      this.displacements = {
        mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
      }
      this.weight = 80;
      this.gravity = .125;
      this.fallspeed = 2.3;
      this.percent = 168;
    }
  }

  export class Wario extends Character {
    public readonly name: string;
    public readonly weight: number;
    public readonly gravity: number;
    public readonly fallspeed: number;
    public readonly uthrowstats?: ILauncher;
    public readonly percent: number;
    public readonly displacements?: any;
  
    constructor(props: CharacterProps) {
      super(props);
      this.name = "Wario";
      this.displacements = {
        mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
      }
      this.weight = 80;
      this.gravity = .125;
      this.fallspeed = 2.3;
      this.percent = 168;
    }
  }

  export class Yoshi extends Character {
    public readonly name: string;
    public readonly weight: number;
    public readonly gravity: number;
    public readonly fallspeed: number;
    public readonly uthrowstats?: ILauncher;
    public readonly percent: number;
    public readonly displacements?: any;
  
    constructor(props: CharacterProps) {
      super(props);
      this.name = "Yoshi";
      this.displacements = {
        mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
      }
      this.weight = 80;
      this.gravity = .125;
      this.fallspeed = 2.3;
      this.percent = 168;
    }
  }