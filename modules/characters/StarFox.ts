import { ILauncher } from "../Launcher";
import { Character, CharacterProps } from "./Character";

export class Fox extends Character {
  public readonly name: string;
    public readonly weight: number;
    public readonly gravity: number;
    public readonly fallspeed: number;
    public readonly uthrowstats?: ILauncher;
    public readonly percent: number;
    public readonly displacements?: any;

    // mewtwo uthrow displacement between 17.03 and 17.24
    constructor(props: CharacterProps) {
        super(props);
        this.name = "Fox";
        this.displacements = {
          mewtwouthrow: 17.1
        }
        this.weight = 75;
        this.gravity = .23;
        this.fallspeed = 2.8;
        this.percent = 185;
    }
}

export class Falco extends Character {
    public readonly name: string;
    public readonly weight: number;
    public readonly gravity: number;
    public readonly fallspeed: number;
    public readonly uthrowstats?: ILauncher;
    public readonly percent: number;
    public readonly displacements?: any;

    // 17.7 18.6

    // PS2 DI away dies at 176
    // Dreamland DI away dies at 208

    constructor(props: CharacterProps) {
        super(props);
        this.name = "Falco";
        this.displacements = {
          mewtwouthrow: 18
        }
        this.weight = 80;
        this.gravity = .17;
        this.fallspeed = 3.1;
        this.percent = 176;
    }
}

export class Wolf extends Character {
    public readonly name: string;
    public readonly weight: number;
    public readonly gravity: number;
    public readonly fallspeed: number;
    public readonly uthrowstats?: ILauncher;
    public readonly percent: number;
    public readonly displacements?: any;

    // 18.2

    // ps2 178

    constructor(props: CharacterProps) {
        super(props);
        this.name = "Wolf";
        this.displacements = {
          mewtwouthrow: 18
        }
        this.weight = 85;
        this.gravity = .16;
        this.fallspeed = 3.2;
        this.percent = 177;
    }
}