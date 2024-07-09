import { Mewtwo } from "./modules/characters/Pokemon";
import { Roster } from "./modules/characters/Roster";
import { Battlefield } from "./modules/stages/Battlefield";


export function run() {
  const mewtwo = new Mewtwo({});
  for (const character of Roster) {
    console.log(character.name, mewtwo.whenWillUthrowKill(character, new Battlefield()));
  }
}

run();