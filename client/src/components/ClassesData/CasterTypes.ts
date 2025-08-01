export interface CastingProgression {
    level: number;
    cantrips?: number;
    preparedSpells: number;
    spellSlots: number[];
}

export const FullCasting: CastingProgression[] = [
    {
        level: 1,
        cantrips: 2,
        preparedSpells: 4,
        spellSlots: [2, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        level: 2,
        cantrips: 2,
        preparedSpells: 5,
        spellSlots: [3, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        level: 3,
        cantrips: 2,
        preparedSpells: 6,
        spellSlots: [4, 2, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        level: 4,
        cantrips: 3,
        preparedSpells: 7,
        spellSlots: [4, 3, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        level: 5,
        cantrips: 3,
        preparedSpells: 9,
        spellSlots: [4, 3, 2, 0, 0, 0, 0, 0, 0]
    },
    {
        level: 6,
        cantrips: 3,
        preparedSpells: 10,
        spellSlots: [4, 3, 3, 0, 0, 0, 0, 0, 0]
    },
    {
        level: 7,
        cantrips: 3,
        preparedSpells: 11,
        spellSlots: [4, 3, 3, 1, 0, 0, 0, 0, 0]
    },
    {
        level: 8,
        cantrips: 4,
        preparedSpells: 12,
        spellSlots: [4, 3, 3, 2, 0, 0, 0, 0, 0]
    },
    {
        level: 9,
        cantrips: 4,
        preparedSpells: 14,
        spellSlots: [4, 3, 3, 3, 1, 0, 0, 0, 0]
    },
    {
        level: 10,
        cantrips: 4,
        preparedSpells: 15,
        spellSlots: [4, 3, 3, 3, 2, 0, 0, 0, 0]
    },
    {
        level: 11,
        cantrips: 4,
        preparedSpells: 16,
        spellSlots: [4, 3, 3, 3, 2, 1, 0, 0, 0]
    },
    {
        level: 12,
        cantrips: 4,
        preparedSpells: 16,
        spellSlots: [4, 3, 3, 3, 2, 1, 0, 0, 0]
    },
    {
        level: 13,
        cantrips: 4,
        preparedSpells: 17,
        spellSlots: [4, 3, 3, 3, 2, 1, 1, 0, 0]
    },
    {
        level: 14,
        cantrips: 4,
        preparedSpells: 17,
        spellSlots: [4, 3, 3, 3, 2, 1, 1, 0, 0]
    },
    {
        level: 15,
        cantrips: 4,
        preparedSpells: 18,
        spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 0]
    },
    {
        level: 16,
        cantrips: 4,
        preparedSpells: 18,
        spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 0]
    },
    {
        level: 17,
        cantrips: 4,
        preparedSpells: 19,
        spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 1]
    },
    {
        level: 18,
        cantrips: 4,
        preparedSpells: 20,
        spellSlots: [4, 3, 3, 3, 3, 1, 1, 1, 1]
    },
    {
        level: 19,
        cantrips: 4,
        preparedSpells: 21,
        spellSlots: [4, 3, 3, 3, 3, 2, 1, 1, 1]
    },
    {
        level: 20,
        cantrips: 4,
        preparedSpells: 22,
        spellSlots: [4, 3, 3, 3, 3, 2, 2, 1, 1]
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
        preparedSpells: 0,
        spellSlots: [0, 0, 0, 0, 0]
    },
    {
        level: 2,
        preparedSpells: 0,
        spellSlots: [0, 0, 0, 0, 0]
    },
    {
        level: 3,
        preparedSpells: 3,
        spellSlots: [2, 0, 0, 0, 0]
    },
    {
        level: 4,
        preparedSpells: 4,
        spellSlots: [3, 0, 0, 0, 0]
    },
    {
        level: 5,
        preparedSpells: 4,
        spellSlots: [3, 0, 0, 0, 0]
    },
    {
        level: 6,
        preparedSpells: 5,
        spellSlots: [4, 2, 0, 0, 0]
    },
    {
        level: 7,
        preparedSpells: 6,
        spellSlots: [4, 2, 0, 0, 0]
    },
    {
        level: 8,
        preparedSpells: 6,
        spellSlots: [4, 3, 0, 0, 0]
    },
    {
        level: 9,
        preparedSpells: 7,
        spellSlots: [4, 3, 1, 0, 0]
    },
    {
        level: 10,
        preparedSpells: 8,
        spellSlots: [4, 3, 1, 0, 0]
    },
    {
        level: 11,
        preparedSpells: 8,
        spellSlots: [4, 3, 2, 0, 0]
    },
    {
        level: 12,
        preparedSpells: 9,
        spellSlots: [4, 3, 2, 0, 0]
    },
    {
        level: 13,
        preparedSpells: 9,
        spellSlots: [4, 3, 3, 0, 0]
    },
    {
        level: 14,
        preparedSpells: 10,
        spellSlots: [4, 3, 3, 0, 0]
    },
    {
        level: 15,
        preparedSpells: 10,
        spellSlots: [4, 3, 3, 1, 0]
    },
    {
        level: 16,
        preparedSpells: 12,
        spellSlots: [4, 3, 3, 1, 0]
    },
    {
        level: 17,
        preparedSpells: 13,
        spellSlots: [4, 3, 3, 2, 1]
    },
    {
        level: 18,
        preparedSpells: 13,
        spellSlots: [4, 3, 3, 2, 1]
    },
    {
        level: 19,
        preparedSpells: 14,
        spellSlots: [4, 3, 3, 2, 2]
    },
    {
        level: 20,
        preparedSpells: 15,
        spellSlots: [4, 3, 3, 2, 2]
    }
]

export const QuarterCasting: CastingProgression[] = [

]

export const WarlockCasting: CastingProgression[] = [
    {
        level: 1,
        cantrips: 2,
        preparedSpells: 2,
        spellSlots: [1, 0, 0, 0, 0]
    },
    {
        level: 2,
        cantrips: 2,
        preparedSpells: 3,
        spellSlots: [2, 0, 0, 0, 0]
    },
    {
        level: 3,
        cantrips: 2,
        preparedSpells: 4,
        spellSlots: [1, 2, 0, 0, 0]
    },
    {
        level: 4,
        cantrips: 3,
        preparedSpells: 5,
        spellSlots: [1, 2, 0, 0, 0]
    },
    {
        level: 5,
        cantrips: 3,
        preparedSpells: 6,
        spellSlots: [1, 1, 2, 0, 0]
    },
    {
        level: 6,
        cantrips: 3,
        preparedSpells: 7,
        spellSlots: [1, 1, 2, 0, 0]
    },
    {
        level: 7,
        cantrips: 3,
        preparedSpells: 8,
        spellSlots: [1, 1, 1, 2, 0]
    },
    {
        level: 8,
        cantrips: 3,
        preparedSpells: 9,
        spellSlots: [1, 1, 1, 2, 0]
    },
    {
        level: 9,
        cantrips: 3,
        preparedSpells: 10,
        spellSlots: [1, 1, 1, 1, 2]
    },
    {
        level: 10,
        cantrips: 4,
        preparedSpells: 10,
        spellSlots: [1, 1, 1, 1, 2]
    },
    {
        level: 11,
        cantrips: 4,
        preparedSpells: 11,
        spellSlots: [1, 1, 1, 1, 3]
    },
    {
        level: 12,
        cantrips: 4,
        preparedSpells: 11,
        spellSlots: [1, 1, 1, 1, 3]
    },
    {
        level: 13,
        cantrips: 4,
        preparedSpells: 12,
        spellSlots: [1, 1, 1, 1, 3]
    },
    {
        level: 14,
        cantrips: 4,
        preparedSpells: 12,
        spellSlots: [1, 1, 1, 1, 3]
    },
    {
        level: 15,
        cantrips: 4,
        preparedSpells: 13,
        spellSlots: [1, 1, 1, 1, 3]
    },
    {
        level: 16,
        cantrips: 4,
        preparedSpells: 13,
        spellSlots: [1, 1, 1, 1, 3]
    },
    {
        level: 17,
        cantrips: 4,
        preparedSpells: 14,
        spellSlots: [1, 1, 1, 1, 4]
    },
    {
        level: 18,
        cantrips: 4,
        preparedSpells: 14,
        spellSlots: [1, 1, 1, 1, 4]
    },
    {
        level: 19,
        cantrips: 4,
        preparedSpells: 15,
        spellSlots: [1, 1, 1, 1, 4]
    },
    {
        level: 20,
        cantrips: 4,
        preparedSpells: 15,
        spellSlots: [1, 1, 1, 1, 4]
    }
]