// ClassesData/AllSubclasses.ts
import { BardCulture, BardSynesthesia } from "./BardSubclasses";
import { RogueArcaneTrickster, RogueMemoryThief } from "./RogueSubclasses";
import { SubclassBase } from "./ClassBase";

export const allBardSubclasses: SubclassBase[] = [BardCulture, BardSynesthesia];
export const allRogueSubclasses: SubclassBase[] = [RogueArcaneTrickster, RogueMemoryThief];

export const subclassMap: Record<string, SubclassBase[]> = {
  bard: allBardSubclasses,
  rogue: allRogueSubclasses,
};
