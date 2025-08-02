// This needs to be updated for further classes

import { ClassBase } from "./ClassBase";
import { bardClass, bardLevels } from "./Bard";
import { fighterClass, fighterLevels } from "./Fighter";
import { rogueClass, rogueLevels } from "./Rogue";

export const allClassCards: ClassBase[] = [bardClass, fighterClass, rogueClass];

export const classLevelMap: Record<string, { level: number; [key: string]: any }[]> = {
  bard: bardLevels,
  fighter: fighterLevels,
  rogue: rogueLevels,
};