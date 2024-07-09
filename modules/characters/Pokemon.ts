import { ILauncher, launchCharacter } from "../Launcher";
import { Stage } from "../stages/Stage";
import { Character, CharacterProps } from "./Character";

export class Mewtwo extends Character {
  public readonly name: string;
  public readonly weight: number;
  public readonly gravity: number;
  public readonly fallspeed: number;
  public readonly uthrowstats: ILauncher;
  public readonly displacements: any;

  constructor(props: CharacterProps) {
    super(props);
    this.name = "Mewtwo";
    this.weight = 87;
    this.gravity = .082;
    this.fallspeed = 1.5;
    this.displacements = {
      mewtwouthrow: 15
    }
    this.uthrowstats = {
      damage: 12,
      angle: 90,
      kbScaling: 67,
      kbBase: 100,
      isThrow: true
    }
  }

  public whenWillUthrowKill(opp: Character, stage: Stage) {
    const originalPercent = opp.percent;
    const unitsNeeded = stage.height - opp.displacements.mewtwouthrow;
    let noDiKill = 0, diKill = 0;
    for (let i = 0; i < 300; i++) {
      opp.setPercent(i);
      if (noDiKill === 0 && launchCharacter(this.uthrowstats, opp).verticallyKillableUnitsTraveled > unitsNeeded) {
        noDiKill = i;
      } else if (noDiKill !== 0 && diKill === 0 && launchCharacter(this.uthrowstats, opp, -18).verticallyKillableUnitsTraveled > unitsNeeded) {
        diKill = i;
      }
    }
    opp.setPercent(originalPercent);
    return {
      noDiKill,
      diKill,
    }
  }
}

export class Jigglypuff extends Character {
  public readonly name: string;
  public readonly weight: number;
  public readonly gravity: number;
  public readonly fallspeed: number;
  public readonly uthrowstats?: ILauncher;
  public readonly displacements?: any;

  constructor(props: CharacterProps) {
    super(props);
    this.name = "Jigglypuff";
    this.displacements = {
      mewtwouthrow: 20 // mewtwo uthrow displacement between 20.8 and 19.9
    }
    this.weight = 62;
    this.gravity = .064;
    this.fallspeed = 1.3;
  }
}

export class Pikachu extends Character {
  public readonly name: string;
  public readonly weight: number;
  public readonly gravity: number;
  public readonly fallspeed: number;
  public readonly uthrowstats?: ILauncher;
  public readonly displacements?: any;

  constructor(props: CharacterProps) {
    super(props);
    this.name = "Pikachu";
    this.displacements = {
      mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
    }
    this.weight = 80;
    this.gravity = .11;
    this.fallspeed = 1.9;
  }
}

export class Charizard extends Character {
  public readonly name: string;
  public readonly weight: number;
  public readonly gravity: number;
  public readonly fallspeed: number;
  public readonly uthrowstats?: ILauncher;
  public readonly displacements?: any;

  constructor(props: CharacterProps) {
    super(props);
    this.name = "Charizard";
    this.displacements = {
      mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
    }
    this.weight = 80;
    this.gravity = .125;
    this.fallspeed = 2.3;
  }
}

export class Ivysaur extends Character {
  public readonly name: string;
  public readonly weight: number;
  public readonly gravity: number;
  public readonly fallspeed: number;
  public readonly uthrowstats?: ILauncher;
  public readonly displacements?: any;

  constructor(props: CharacterProps) {
    super(props);
    this.name = "Ivysaur";
    this.displacements = {
      mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
    }
    this.weight = 80;
    this.gravity = .125;
    this.fallspeed = 2.3;
  }
}

export class Squirtle extends Character {
  public readonly name: string;
  public readonly weight: number;
  public readonly gravity: number;
  public readonly fallspeed: number;
  public readonly uthrowstats?: ILauncher;
  public readonly displacements?: any;

  constructor(props: CharacterProps) {
    super(props);
    this.name = "Squirtle";
    this.displacements = {
      mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
    }
    this.weight = 80;
    this.gravity = .125;
    this.fallspeed = 2.3;
  }
}

export class Lucario extends Character {
  public readonly name: string;
  public readonly weight: number;
  public readonly gravity: number;
  public readonly fallspeed: number;
  public readonly uthrowstats?: ILauncher;
  public readonly displacements?: any;

  constructor(props: CharacterProps) {
    super(props);
    this.name = "Lucario";
    this.displacements = {
      mewtwouthrow: 18.1 // mewtwo uthrow displacement between 18.07 and 18.19
    }
    this.weight = 80;
    this.gravity = .125;
    this.fallspeed = 2.3;
  }
}
