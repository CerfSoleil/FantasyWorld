// data/allSubclassesMap.ts
import { allBardSubclasses } from "./BardSubclasses";
import { allRogueSubclasses } from "./RogueSubclasses";
import { SubclassBase } from "./ClassBase";

export const subclassMap: Record<string, SubclassBase[]> = {
  bard: allBardSubclasses,
  rogue: allRogueSubclasses,
};
