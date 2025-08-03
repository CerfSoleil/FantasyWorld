import { SubclassBase } from "./ClassBase";

// 5e Subclasses

// Arcane Trickster
export const RogueArcaneTrickster: SubclassBase = {
    subclassName: "Arcane Trickster",
    description: "The Arcane Trickster is a rogue who blends stealth and magic, using spells to enhance their thievery and deception. They are skilled in illusion and enchantment magic, allowing them to manipulate their surroundings and outsmart their foes.",
    casterType: "ThirdCasting",
    castingAbility: "Intelligence",
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

// Assassin
export const RogueAssassin: SubclassBase = {
    subclassName: "Assassin",
    description: "An Assassin's training focuses on using stealth, poison, and disguise to eliminate foes with deadly efficiency. While some Rogues who follow this path are hired killers, spies, or bounty hunters, the capabilities of this subclass are equally useful for adventurers facing a variety of monstrous enemies.",
    features: [
        {
            level: 3,
            subclassFeature1: ["Assassinate",
                `You're adept at ambushing a target, granting you the following benefits.`,
                "Initiative.",
                `You're adept at ambushing a target, granting you the following benefits.`,
                "Surprising Strikes.",
                `During the first round of each combat, you have Advantage on attack rolls against any creature that hasn't taken a turn. If your Sneak Attack hits any target during that round, the target takes extra damage of the weapon's type equal to your Rogue level.`
            ],
            subclassFeature2: ["Assassin's Tools",
                `You gain a Disguise Kit and a Poisoner's Kit, and you have proficiency with them.`
            ]
        },
        {
            level: 9,
            subclassFeature1: ["Infiltration Expertise",
                `You are expert at the following techniques that aid your infiltrations.`,
                "Masterful Mimicry",
                `You can unerringly mimic another person's speech, handwriting, or both if you have spent at least 1 hour studying them.`,
                "Roving Aim",
                `You can unerringly mimic another person's speech, handwriting, or both if you have spent at least 1 hour studying them.`
            ]
        },
        {
            level: 13,
            subclassFeature1: ["Envenom Weapons",
                `When you use the Poison option of your Cunning Strike, the target also takes 2d6 Poison damage whenever it fails the saving throw. This damage ignores Resistance to Poison damage.`
            ]
        },
        {
            level: 17,
            subclassFeature1: ["Death Strike",
                `When you hit with your Sneak Attack on the first round of a combat, the target must succeed on a Constitution saving throw (DC 8 plus your Dexterity modifier and Proficiency Bonus), or the attack's damage is doubled against the target.`
            ]
        }
    ],
    subclassCredits: "This subclass belongs to Dungeons & Dragons 5th Edition and Wizards of the Coast."
}

// Inquisitive
export const RogueInquisitive: SubclassBase = {
    subclassName: "Inquisitive",
    description: "As an archetypal Inquisitive, you excel at rooting out secrets and unraveling mysteries. You rely on your sharp eye for detail, but also on your finely honed ability to read the words and deeds of other creatures to determine their true intent. You excel at defeating creatures that hide among and prey upon ordinary folk, and your mastery of lore and your keen deductions make you well equipped to expose and end hidden evils.",
    features: [
        {
            level: 3,
            subclassFeature1: ["Ear for Deceit",
                `When you choose this archetype at 3rd level, you develop a talent for picking out lies. Whenever you make a Wisdom (Insight) check to determine whether a creature is lying, treat a roll of 7 or lower on the d20 as an 8.`
            ],
            subclassFeature2: ["Eye For Detail",
                `Starting at 3rd level, you can use a bonus action to make a Wisdom (Perception) check to spot a hidden creature or object or to make an Intelligence (Investigation) check to uncover or decipher clues.`
            ],
            subclassFeature3: ["Insightful Fighting",
                `At 3rd level, you gain the ability to decipher an opponent's tactics and develop a counter to them. As a bonus action, you can make a Wisdom (Insight) check against a creature you can see that isn't incapacitated, contested by the target's Charisma (Deception) check. If you succeed, you can use your Sneak Attack against that target even if you don't have advantage on the attack roll, but not if you have disadvantage on it.
                This benefit lasts for 1 minute or until you successfully use this feature against a different target.`
            ]
        },
        {
            level: 9,
            subclassFeature1: ["Steady Eye",
                `Starting at 9th level, you have advantage on any Wisdom (Perception) or Intelligence (Investigation) check if you move no more than half your speed on the same turn.`
            ]
        },
        {
            level: 13,
            subclassFeature1: ["Unerring Eye",
                `Beginning at 13th level, your senses are almost impossible to foil. As an action, you sense the presence of illusions, shapechangers not in their original form, and other magic designed to deceive the senses within 30 feet of you, provided you aren't blinded or deafened. You sense that an effect is attempting to trick you, but you gain no insight into what is hidden or into its true nature.
                You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.`
            ]
        },
        {
            level: 17,
            subclassFeature1: ["Eye for Weakness",
                `At 17th level, you learn to exploit a creature's weaknesses by carefully studying its tactics and movement. While your Insightful Fighting feature applies to a creature, your Sneak Attack damage against that creature increases by 3d6.`
            ]
        }
    ],
    subclassCredits: "This subclass belongs to Dungeons & Dragons 5th Edition and Wizards of the Coast."
};

export const RogueMastermind: SubclassBase = {
    subclassName: "Mastermind",
    description: "Your focus is on people and on the influence and secrets they have. Many spies, courtiers, and schemers follow this archetype, leading lives of intrigue. Words are your weapons as often as knives or poison, and secrets and favors are some of your favorite treasures.",
    features: [
        {
            level: 3,
            subclassFeature1: ["Master of Intrigue",
                `When you choose this archetype at 3rd level, you gain proficiency with the disguise kit, the forgery kit, and one gaming set of your choice. You also learn two languages of your choice.
                Additionally, you can unerringly mimic the speech patterns and accent of a creature that you hear speak for at least 1 minute, enabling you to pass yourself off as a native speaker of a particular land, provided that you know the language.`
            ],
            subclassFeature2: ["Master of Tactics",
                `Starting at 3rd level, you can use the Help action as a bonus action. Additionally, when you use the Help action to aid an ally in attacking a creature, the target of that attack can be within 30 feet of you, rather than within 5 feet of you, if the target can see or hear you.`
            ]
        },
        {
            level: 9,
            subclassFeature1: ["Insightful Manipulator",
                `Starting at 9th level, if you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice:
                Intelligence Score
                Wisdom Score
                Charisma Score
                Class Levels (if any)
                At the DM's option, you might also realize you know a piece of the creature's history or one of its personality traits, if it has any.`
            ]
        },
        {
            level: 13,
            subclassFeature1: ["Misdirection",
                `Beginning at 13th level, you can sometimes cause another creature to suffer an attack meant for you. When you are targeted by an attack while a creature within 5 feet of you is granting you cover against that attack, you can use your reaction to have the attack target that creature instead of you.`
            ]
        },
        {
            level: 17,
            subclassFeature1: ["Soul of Deceit",
                `Starting at 17th level, your thoughts can't be read by telepathy or other means, unless you allow it. You can present false thoughts by succeeding on a Charisma (Deception) check contested by the mind reader's Wisdom (Insight) check.
                Additionally, no matter what you say, magic that would determine if you are telling the truth indicates you are being truthful if you so choose, and you can't be compelled to tell the truth by magic.`
            ]
        }
    ],
    subclassCredits: "This subclass belongs to Dungeons & Dragons 5th Edition and Wizards of the Coast."
}

//Custom Subclasses

//Memory Thief
export const RogueMemoryThief: SubclassBase = {
    subclassName: "Memory Thief",
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
    subclassCredits: "This subclass was created by BlackFingerCult."
};