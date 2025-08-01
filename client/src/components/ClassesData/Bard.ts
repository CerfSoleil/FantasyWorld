// Table should be something like...
// [Level], [Proficiency Bonus], [Feature1?, Feature2?, Feature3?], [Bardic Die], [Cantrips], [Prepared Spells], [Spell Slots: 1st, 2nd, 3rd, through 9th]

export interface BardCard {
    className: string;
    hitDie: string;
    description: string;
};

export const bardCard: BardCard = {
    className: "Bard",
    hitDie: "d8",
    description: "Bards are versatile spellcasters and performers, using their musical talents to inspire allies and manipulate foes. They can cast spells, heal, and provide support in various ways. Bards are known for their charisma and ability to charm others.",
};  

export interface BardLevelData {
    level: number;
    profBonus: number;
    feature1: string[];
    feature2?: string[];
    feature3?: string[];
    bardDice: string;
    cantrips: number;
    preparedSpells: number;
    spellSlots: number[];
}

export const bardLevels: BardLevelData[] = [
    {
        level: 1,
        profBonus: 2,
        feature1: ["Bardic Inspiration",
            "You can supernaturally inspire others through words, music, or dance. This inspiration is represented by your Bardic Inspiration die, which is a d6.",
            "Using Bardic Inspiration.",
            "As a Bonus Action, you can inspire another creature within 60 feet of yourself who can see or hear you. That creature gains one of your Bardic Inspiration dice. A creature can have only one Bardic Inspiration die at a time. Once within the next hour when the creature fails a D20 Test, the creature can roll the Bardic Inspiration die and add the number rolled to the d20, potentially turning the failure into a success. A Bardic Inspiration die is expended when it's rolled.",
            "Number of Uses.",
            "You can confer a Bardic Inspiration die a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.",
            "At Higher Levels.",
            "Your Bardic Inspiration die changes when you reach certain Bard levels, as shown in the Bardic Die column of the Bard Features table. The die becomes a d8 at level 5, a d10 at level 10, and a d12 at level 15."
        ],
        feature2: ["Spellcasting",
            "You have learned to cast spells through your bardic arts. The information below details how you use those rules with Bard spells, which appear in the Bard spell list later in the class's description.",
            "Cantrips",
            "You know two cantrips of your choice from the Bard spell list. Dancing Lights and Vicious Mockery are recommended.<br> Whenever you gain a Bard level, you can replace one of your cantrips with another cantrip of your choice from the Bard spell list.<br> When you reach Bard levels 4 and 10, you learn another cantrip of your choice from the Bard spell list, as shown in the Cantrips column of the Bard Features table.",
            "Spell Slots",
            "The Bard Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.",
            "Prepared Spells of 1st Level and Higher",
            "You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Bard spell list. Charm Person, Color Spray, Dissonant Whispers, and Healing Word are recommended.<br> The number of spells on your list increases as you gain Bard levels, as shown in the Prepared Spells column of the Bard Features table. Whenever that number increases, choose additional spells from the Bard spell list until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Bard, your list of prepared spells can include six spells of levels 1 and 2 in any combination.<br> If another Bard feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Bard spells for you.",
            "Changing Prepared Spells",
            "Whenever you gain a Bard level, you can replace one spell on your list with another Bard spell for which you have spell slots.",
            "Spellcasting Ability",
            "Charisma is your spellcasting ability for your Bard spells.",
            "Spellcasting Focus",
            "You can use a Musical Instrument as a Spellcasting Focus for your Bard spells."
        ],
        bardDice: "d6",
        cantrips: 2,
        preparedSpells: 4,
        spellSlots: [2, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        level: 2,
        profBonus: 2,
        feature1: ["Expertise",
            "You gain Expertise in two of your skill proficiencies of your choice. Performance and Persuasion are recommended if you have proficiency in them.<br> At Bard level 9, you gain Expertise in two more of your skill proficiencies of your choice."
        ],
        feature2: ["Jack of All Trades",
            "You gain a bonus to any ability check that doesn't already include your proficiency bonus. The bonus equals half your proficiency bonus (rounded down)."
        ],
        bardDice: "d6",
        cantrips: 2,
        preparedSpells: 5,
        spellSlots: [3, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        level: 3,
        profBonus: 2,
        feature1: ["Bard Subclass",
            `You gain a Bard subclass of your choice. A subclass is a specialization that grants you features at certain Bard levels. For the rest of your career, you gain each of your subclass's features that are of your Bard level or lower.<br>
            Select a Subclass to see its features.`
        ],
        bardDice: "d6",
        cantrips: 2,
        preparedSpells: 6,
        spellSlots: [4, 2, 0, 0, 0, 0, 0, 0, 0]
    },
]