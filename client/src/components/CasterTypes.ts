export interface CastingProgression {
    level: number;
    preparedSpells: number;
    spellSlots: number[];
}

export const FullCasting: CastingProgression[] = [
    {
        level: 1,
        preparedSpells: 4,
        spellSlots: [2, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        level: 2,
        preparedSpells: 5,
        spellSlots: [2, 0, 0, 0, 0, 0, 0, 0, 0]
    }
]

export const HalfCasting: CastingProgression[] = [
    {
        level: 1,
        preparedSpells: 2,
        spellSlots: [2, 0, 0, 0, 0]
    },
    {
        level: 2,
        preparedSpells: 3,
        spellSlots: [2, 0, 0, 0, 0]
    }
]

export const ThirdCasting: CastingProgression[] = [
    {
        level: 1,
        preparedSpells: 2,
        spellSlots: [2, 0, 0, 0, 0]
    },
    {
        level: 2,
        preparedSpells: 3,
        spellSlots: [3, 0, 0, 0, 0]
    },
    {
        level: 20,
        preparedSpells: 13,
        spellSlots: [4, 3, 3, 2, 2]
    }
]

export const QuarterCasting: CastingProgression[] = [

]

export const WarlockCasting: CastingProgression[] = [

]