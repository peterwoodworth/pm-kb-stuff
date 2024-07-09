import { calculateKb } from "../../knockback";
import { ILauncher } from "../Launcher";

export abstract class Character {
    readonly abstract name: string;
    readonly abstract weight: number;
    readonly abstract gravity: number;
    readonly abstract fallspeed: number;
    readonly abstract displacements?: any;
    public percent: number;

    setPercent(percent: number) {
      this.percent = percent;
    }

    constructor(props: CharacterProps) {
      props.percent ? this.percent = props.percent  : this.percent = 0;
    }
}

export interface CharacterProps {
  readonly percent?: number;
}