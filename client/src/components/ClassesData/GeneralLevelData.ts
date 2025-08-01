export interface ProfBonus {
    level: number;
    profBonus: number;
}

export const ProficiencyLevels: ProfBonus[] = Array.from({ length: 20 }, (_, i) => {
  const level = i + 1;
  const profBonus = 2 + Math.floor((level - 1) / 4);
  return { level, profBonus };
});