// ClassesData/AllSubclasses.ts
// This needs to be updated for further subclasses
import { BardCulture, BardSynesthesia } from "./BardSubclasses";
import { RogueArcaneTrickster, RogueMemoryThief } from "./RogueSubclasses";
import { SubclassBase } from "./ClassBase";

export const allBardSubclasses: SubclassBase[] = [BardCulture, BardSynesthesia];
export const allRogueSubclasses: SubclassBase[] = [RogueArcaneTrickster, RogueMemoryThief];

export const subclassMap: Record<string, SubclassBase[]> = {
  bard: allBardSubclasses,
  rogue: allRogueSubclasses,
};
