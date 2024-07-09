import { Platform, Stage } from "./Stage";

export class Battlefield extends Stage {
  public readonly width: number;
  public readonly platforms: Platform[];
  public readonly height: number;

  constructor() {
    super();

    this.width = 100;
    this.height = 200;
    this.platforms = [
      new Platform({x:-25,y:27.2}, 25),
      new Platform({x:0,y:54.4}, 25),
    ];
  }
}