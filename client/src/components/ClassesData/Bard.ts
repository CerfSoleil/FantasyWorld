// Information gotten from here
// For the Class Card: BardCard
// For the Table: BardCard[castingType], Bard Level Data
// For the Level Guide: BardLevelData
import { ClassBase } from "./ClassBase"

export const ClassCredits = "This class belongs to Dungeons & Dragons 5th Edition, and is not an original work. All rights to the original content belong to Wizards of the Coast.";

export const bardClass: ClassBase = {
    className: "Bard",
    hitDie: "d8",
    description: "Bards are versatile spellcasters and performers, using their musical talents to inspire allies and manipulate foes. They can cast spells, heal, and provide support in various ways. Bards are known for their charisma and ability to charm others.",
    casterType: "FullCasting",
    primaryAbility: "Charisma",
    savingThrowProf: ["Dexterity", "Charisma"],
    skillProf: ["Choose 3"],
    weaponProf: ["Simple Weapons"],
    toolProf: ["Choose 3 Musical Instruments"],
    armorProf: ["Light Armor"],
    startingEquip: [["Leather Armor, 2x Dagger, Musical Instrument of your Choice, Entertainer's Pack, 19gp"], ["90gp"]],
    multiSkillProf: ["Choose 1"],
    multiToolProf: ["Choose one Musical Instrument"],
    multiArmorProf: ["Light Armor"]
};  

export interface BardLevelData {
    level: number;
    feature1?: string[];
    feature2?: string[];
    feature3?: string[];
    bardDice: string;
}

export const bardLevels: BardLevelData[] = [
    {
        level: 1,
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
        bardDice: "d6"
    },
    {
        level: 2,
        feature1: ["Expertise",
            "You gain Expertise in two of your skill proficiencies of your choice. Performance and Persuasion are recommended if you have proficiency in them.<br> At Bard level 9, you gain Expertise in two more of your skill proficiencies of your choice."
        ],
        feature2: ["Jack of All Trades",
            "You gain a bonus to any ability check that doesn't already include your proficiency bonus. The bonus equals half your proficiency bonus (rounded down)."
        ],
        bardDice: "d6"
    },
    {
        level: 3,
        feature1: ["Bard Subclass Feature",
            `You gain a Bard subclass of your choice. A subclass is a specialization that grants you features at certain Bard levels. For the rest of your career, you gain each of your subclass's features that are of your Bard level or lower.<br>
            Select a Subclass to see its features.`
        ],
        bardDice: "d6"
    },
    { 
        level: 4,
        feature1: ["Ability Score Improvement",
            "You gain the Ability Score Improvement feat or another feat of your choice for which you qualify."
        ],
        bardDice: "d6"
    },
    {
        level: 5,
        feature1: ["Font of Inspiration",
            `You now regain all your expended uses of Bardic Inspiration when you finish a Short or Long Rest.
            In addition, you can expend a spell slot (no action required) to regain one expended use of Bardic Inspiration.`
        ],
        bardDice: "d8"
    },
    {
        level: 6,
        feature1: ["Bard Subclass Feature",
            `You gain a Bard subclass of your choice. A subclass is a specialization that grants you features at certain Bard levels. For the rest of your career, you gain each of your subclass's features that are of your Bard level or lower.<br>
            Select a Subclass to see its features.`
        ],
        bardDice: "d8"
    },
    {
        level: 7,
        feature1: ["Countercharm",
            "You can use musical notes or words of power to disrupt mind-influencing effects. If you or a creature within 30 feet of you fails a saving throw against an effect that applies the Charmed or Frightened condition, you can take a Reaction to cause the save to be rerolled, and the new roll has Advantage."
        ],
        bardDice: "d8"
    },
    {
        level: 8,
        feature1: ["Ability Score Improvement",
            "You gain the Ability Score Improvement feat or another feat of your choice for which you qualify."
        ],
        bardDice: "d8"
    },
    {
        level: 9,
        feature1: ["Expertise",
            "You gain Expertise in two of your Skill Proficiencies of your choice."
        ],
        bardDice: "d8"
    },
    {
        level: 10,
        feature1: ["Magical Secrets",
            "You've learned secrets from various magical traditions. Whenever you reach a Bard level (including this level) and the Prepared Spells number in the Bard Features table increases, you can choose any of your new prepared spells from the Bard, Cleric, Druid, and Wizard spell lists, and the chosen spells count as Bard spells for you (see a class's section for its spell list). In addition, whenever you replace a spell prepared for this class, you can replace it with a spell from those lists."
        ],
        bardDice: "d10"
    },
    {
        level: 11,
        bardDice: "d10"
    },
    {
        level: 12,
        feature1: ["Ability Score Improvement",
            "You gain the Ability Score Improvement feat or another feat of your choice for which you qualify."
        ],
        bardDice: "d10"
    },
    {
        level: 13,
        bardDice: "d10"
    },
    {
        level: 14,
        feature1: ["Bard Subclass Feature",
            `You gain a Bard subclass of your choice. A subclass is a specialization that grants you features at certain Bard levels. For the rest of your career, you gain each of your subclass's features that are of your Bard level or lower.<br>
            Select a Subclass to see its features.`
        ],
        bardDice: "d10"
    },
    {
        level: 15,
        bardDice: "d12"
    },
    {
        level: 16,
        feature1: ["Ability Score Improvement",
            "You gain the Ability Score Improvement feat or another feat of your choice for which you qualify."
        ],
        bardDice: "d12"
    },
    {
        level: 17,
        bardDice: "d12"
    },
    {
        level: 18,
        feature1: ["Superior Inspiration",
            "When you roll Initiative, you regain expended uses of Bardic Inspiration until you have two if you have fewer than that."
        ],
        bardDice: "d12"
    },
    {
        level: 19,
        feature1: ["Epic Boon",
        "You gain an Epic Boon feat or another feat of your choice for which you qualify. Boon of Spell Recall is recommended."
        ],
        bardDice: "d12"
    },
    {
        level: 20,
        feature1: ["Words of Creation",
            "You have mastered two of the Words of Creation: the words of life and death. You therefore always have the Power Word Heal and Power Word Kill spells prepared. When you cast either spell, you can target a second creature with it if that creature is within 10 feet of the first target."
        ],
        bardDice: "d12",
    }
]