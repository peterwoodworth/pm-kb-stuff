
// Center of Stage is 0,0
export abstract class Stage {
  abstract readonly width: number;
  abstract readonly platforms: Platform[];
  abstract readonly height: number;
}

export class Platform {
  public readonly width: number;
  public readonly position: Position;

  constructor(position: Position, width: number) {
    this.position = position;
    this.width = width;
  }
}

export interface Position {
  x: number,
  y: number,
}