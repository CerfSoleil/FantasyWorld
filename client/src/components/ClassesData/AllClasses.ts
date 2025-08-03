// This needs to be updated for further classes

import { ClassBase } from "./ClassBase";
import { bardClass, bardLevels } from "./Bard";
import { fighterClass, fighterLevels } from "./Fighter";
import { rogueClass, rogueLevels } from "./Rogue";
import { roninClass, roninLevels } from "./Ronin";

export const allClassCards: ClassBase[] = [bardClass, fighterClass, rogueClass, roninClass];

export const classLevelMap: Record<string, { level: number; [key: string]: any }[]> = {
  bard: bardLevels,
  fighter: fighterLevels,
  rogue: rogueLevels,
  ronin: roninLevels,
};