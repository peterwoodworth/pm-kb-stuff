// https://smashboards.com/threads/tool-knockback-launch-speed-hitstun-hitlag-shieldstun-calculation-v1-11.324878/

export interface IKnockback {
  readonly knockback: number;
  readonly framesInKb: number;
  readonly initialVelocity: number;
}

export function calculateKb(percent: number, damage: number, weight: number, kbScaling: number, kbBase: number, ratios?: number[]): IKnockback {
  let totalRatio = 1;
  if (ratios) {
    for (let ratio of ratios) {
      totalRatio *= ratio;
    }
  }
  const modifiedPercent = percent + damage;

  const kb = (((((((modifiedPercent / 10) + ((modifiedPercent * damage * .05))) * ((200 / (weight + 100))) * 1.4) + 18) * kbScaling * .01) + kbBase) * totalRatio);

  return {
    knockback: kb,
    framesInKb: Math.floor(kb * .4),
    initialVelocity: kb * .03,
  }
}

export function calculateShieldstun(damage: number) {
    return Math.floor((4.45 + damage) / 2.235)
}

export function calculateHitlag(damage: number, electric = 1, cc = 1) {
    return Math.floor(Math.floor(Math.floor((damage / 3) + 3) * electric) * cc)
}
