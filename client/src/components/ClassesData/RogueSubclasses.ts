import { SubclassBase } from "./ClassBase";

// 5e Subclasses

// Arcane Trickster
export const RogueArcaneTrickster: SubclassBase = {
    subclassName: "Arcane Trickster",
    description: "The Arcane Trickster is a rogue who blends stealth and magic, using spells to enhance their thievery and deception. They are skilled in illusion and enchantment magic, allowing them to manipulate their surroundings and outsmart their foes.",
    casterType: "ThirdCasting",
    features: [
        {
            level: 3,
            subclassFeature1: ["Spellcasting",
                `You have learned to cast spells.`,
                "Cantrips.",
                `You know three cantrips: Mage Hand and two other cantrips of your choice from the Wizard spell list (see that class's section for its list). Mind Sliver and Minor Illusion are recommended.
                Whenever you gain a Rogue level, you can replace one of your cantrips, except Mage Hand, with another Wizard cantrip of your choice.
                When you reach Rogue level 10, you learn another Wizard cantrip of your choice.`,
                "Spell Slots.",
                `The Arcane Trickster Spellcasting table shows how many spell slots you have to cast your level 1+ spells. You regain all expended spell slots when you finish a Long Rest.`,
                "Prepared Spells of 1st Level and Higher.",
                `You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose three level 1 Wizard spells. Charm Person, Disguise Self, and Fog Cloud are recommended.
                The number of spells on your list increases as you gain Rogue levels, as shown in the Prepared Spells column of the Arcane Trickster Spellcasting table. Whenever that number increases, choose additional Wizard spells until the number of spells on your list matches the number in the Arcane Trickster Spellcasting table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 7 Rogue, your list of prepared spells can include five Wizard spells of level 1 or 2 in any combination.`,
                "Changing your Prepared Spells",
                `Whenever you gain a Rogue level, you can replace one spell on your list with another Wizard spell for which you have spell slots.`,
                "Spellcasting Ability.",
                `Intelligence is your spellcasting ability for your Wizard spells.`,
                "Spellcasting Focus.",
                `You can use an Arcane Focus as a Spellcasting Focus for your Wizard spells.`
            ],
            subclassFeature2: ["Mage Hand Legerdemain",
                "When you cast Mage Hand, you can cast it as a Bonus Action, and you can make the spectral hand Invisible. You can control the hand as a Bonus Action, and through it, you can make Dexterity (Sleight of Hand) checks."
            ],
        },
        {
            level: 13,
            subclassFeature1: ["Versatile Trickster",
                "You gain the ability to distract targets with your Mage Hand. When you use the Trip option of your Cunning Strike on a creature, you can also use that option on another creature within 5 feet of the spectral hand."
            ]
        },
        {
            level: 17,
            subclassFeature1: ["Spell Thief",
                `You gain the ability to magically steal the knowledge of how to cast a spell from another spellcaster.
                Immediately after a creature casts a spell that targets you or includes you in its area of effect, you can take a Reaction to force the creature to make an Intelligence saving throw. The DC equals your spell save DC. On a failed save, you negate the spell's effect against you, and you steal the knowledge of the spell if it is at least level 1 and of a level you can cast (it doesn't need to be a Wizard spell). For the next 8 hours, you have the spell prepared. The creature can't cast it until the 8 hours have passed.
                Once you steal a spell with this feature, you can't use this feature again until you finish a Long Rest.`
            ]
        }
    ],
    subclassCredits: "This subclass belongs to Dungeons & Dragons 5th Edition and Wizards of the Coast."
};

//Custom Subclasses

//Memory Thief
export const RogueMemoryThief: SubclassBase = {
    subclassName: "Memory Thief Rogue",
    description: "The intricate processes of the mind are no mystery to you. Everything movement, twitch, or glance can be a gateway to information that is often only found between two people. You would rather not get your hands dirty, and have specialized in the best magic to do so.",
    features: [
        {
            level: 3,
            subclassFeature1: ["Little Secret",
                `Starting at 3rd level, you have an unnatural affinity for rooting out lies. When you make a successful Insight roll, you can choose to get a small snippet of information that is connected to the subject at hand. This information must be true from the target’s point of view.
                Once you use this feature, you must finish a long rest before you can use it again.`,
            ],
            subclassFeature2: ["Three Can Keep a Secret",
                `When you choose this archetype at 3rd level, you gain the ability to cast the Encode Thoughts cantrip at will. Once you reach 5th level, you can cast the Detect Thoughts spell without providing material components; you must finish a long rest in order to cast the spell again using this trait. Once you reach 11th level, you can cast the Modify Memory spell at 6th level; you must finish a long rest in order to cast the spell again using this trait. Intelligence is your spellcasting ability for these spells.`
            ]
        },
        {
            level: 9,
            subclassFeature1: ["One in the Grave",
                `At 9th level, you learn that sometimes the best way to keep a secret is when the people that know it are dead. You can choose for the damage you deal with Sneak Attack to become psychic damage against targets who you have successfully used Little Secret, Three Can Keep a Secret, White Lies, or You Don’t Even Know Yourself on. Additionally, you gain 2 extra dice of sneak attack against these targets as you can at the seams of what they hold dear.`
            ]
        },
        {
            level: 13,
            subclassFeature1: ["White Lies",
                `Starting at 13th level, those that see you sometimes have trouble remembering if you were even there. After making a successful stealth check within 1 minute of first being perceived by a number of creatures up to your Intelligence modifier (minimum of 1), you can choose to make them forget they noticed you in the first place.
                Once you use this feature, you must finish a long rest before you can use it again.`
            ]
        },
        {
            level: 17,
            subclassFeature1: ["You Don't Even Know Yourself",
                `Starting at 17th level, you know the minds you have invaded very well. You have advantage on the first attack roll you do on your turn against those whose minds have failed the save from your Detect Thoughts within the last 24 hours.`
            ]
        }
    ],
    subclassCredits: "This subclas was created by BlackFingerCult"
}