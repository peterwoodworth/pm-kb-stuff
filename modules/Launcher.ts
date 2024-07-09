import { calculateKb } from "../knockback";
import { Character } from "./characters/Character";

export interface ILauncher {
    readonly angle: number;
    readonly kbScaling: number;
    readonly kbBase: number;
    readonly damage: number;
    readonly isThrow?: boolean;
}

export interface ILaunched {
    readonly xUnitsTraveled: number;
    readonly yUnitsTraveled: number;
    readonly verticallyKillableUnitsTraveled: number;
}

export function launchCharacter(launcher: ILauncher, opp: Character, di: number = 0): ILaunched {
    const weight = launcher.isThrow ? 100 : opp.weight;
    const angle = launcher.angle + di;
    const kb = calculateKb(opp.percent, launcher.damage, weight, launcher.kbScaling, launcher.kbBase);
    let currentVel = kb.initialVelocity;
    let yUnitsTraveled = 0;
    let verticallyKillableUnitsTraveled = yUnitsTraveled;
    let xUnitsTraveled = 0;
    let currentFallspeed = opp.gravity;
    
    // Loop through knockback frames
    for (let i = 1; i <= kb.framesInKb; i++) {
      // Update position
      yUnitsTraveled = yUnitsTraveled + (currentVel * Math.sin((angle) * (Math.PI/180))) - currentFallspeed;
      xUnitsTraveled += currentVel * Math.cos((angle) * (Math.PI/180));
      if ((currentVel * Math.sin((angle) * (Math.PI/180))) > 2.4 && ((currentVel * Math.sin((angle) * (Math.PI/180))) - currentFallspeed) > 0) 
        verticallyKillableUnitsTraveled = verticallyKillableUnitsTraveled + (currentVel * Math.sin((angle) * (Math.PI/180))) - currentFallspeed;

      // Update velocity
      currentVel -= .051;

      // Update current fallspeed
      if (currentFallspeed < opp.fallspeed) {
        if ((currentFallspeed + opp.gravity) > opp.fallspeed) {
          currentFallspeed = opp.fallspeed;
        }
        else {
          currentFallspeed += opp.gravity;
        }
      }
    }

    return { 
      yUnitsTraveled,
      xUnitsTraveled,
      verticallyKillableUnitsTraveled,
    };
}