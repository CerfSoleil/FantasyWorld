export interface ClassBase {
    className: string;
    hitDie: string;
    description: string;
    castingType?: string;
    primaryAbility: string;
    savingThrowProf: string[];
    skillProf: string[];
    weaponProf: string[];
    toolProf: string[];
    armorProf: string[];
    startingEquip: string[][];
    multiSkillProf?: string[];
    multiToolProf?: string[];
    multiArmorProf?: string[];
    multiWeaponProf?: string[];
};

export interface ProfBonus {
    level: number;
    profBonus: number;
}

export const ProficiencyLevels: ProfBonus[] = Array.from({ length: 20 }, (_, i) => {
  const level = i + 1;
  const profBonus = 2 + Math.floor((level - 1) / 4);
  return { level, profBonus };
});