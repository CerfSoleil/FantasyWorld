// ClassesData/AllSubclasses.ts
// This needs to be updated for further subclasses
import { BardDance, BardCulture, BardSynesthesia } from "./BardSubclasses";
import { RogueArcaneTrickster, RogueAssassin, RogueInquisitive, RogueMastermind, RogueMemoryThief } from "./RogueSubclasses";
import { SubclassBase } from "./ClassBase";

export const allBardSubclasses: SubclassBase[] = [BardDance, BardCulture, BardSynesthesia];
export const allRogueSubclasses: SubclassBase[] = [RogueArcaneTrickster, RogueAssassin, RogueInquisitive, RogueMastermind, RogueMemoryThief];

export const subclassMap: Record<string, SubclassBase[]> = {
  bard: allBardSubclasses,
  rogue: allRogueSubclasses,
};
