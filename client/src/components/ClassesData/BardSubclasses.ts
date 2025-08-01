export interface BardSubclasses {
    subclassName: string;
    description: string;
    features: {
        level: number;
        feature1: string[];
        feature2?: string[];
        feature3?: string[];
    }[];
}

// Custom Subclasses
// College of Culture
export const BardCulture = {
    subclassName: "College of Culture",
    description: "Bards of the College of Culture are light and nimble artists whose tales are told through the fanciful skill of dancing. These bards perform with the assistance of their instrumental kin to attract the eye of those passing by and leave a story of cultures far and wide. They travel the land, often nomads, to gather the knowledge and traditions of those they come across. With their entrancing dance and inclusive teachings, they inspire others to practice these traditions.",
    features: [
        {
            level: 3,
            feature1: ["Bonus Proficiencies",
                "When you join the College of Culture at 3rd level, you gain proficiency in history and performance. You also know two more languages of your choice."
            ],
            feature2: ["Friendly Motivation",
                "Also at 3rd level, when you use your Bardic Inspiration, in addition to the die you may also add half of your Charisma modifier, rounded down (minimum of 1) to the result of their roll.",
            ],
            feature3: ["Far and Wide",
                "Also at 3rd level, when you use your Bardic Inspiration, in addition to the die you may also add half of your Charisma modifier, rounded down (minimum of 1) to the result of their roll.",
            ]
        },
        {
            level: 6,
            feature1: ["The Dance of Battle",
                "Starting at 6th level, you learn to handle the blade while you work your feet. When you use your action to dodge, you may make one melee attack with a light weapon against a target within range as a bonus action. This ability can be used a number of times equal to your Charisma Modifier (Minimum of 1), regaining expended uses on a short rest."
            ],
        },
        {
            level: 14,
            feature1: ["History Remembers",
                "At 14th level, once per day when an ally becomes unconscious within 30ft, you can use your reaction to expend one use of Bardic Inspiration to use the last class ability they used on your next turn. If the last thing used was spellcasting, you gain access to the last spell used which can be used once as a Bard spell using your spell slots. Alternatively, when an ally is killed within 60ft, you may expend all remaining uses of Bardic Inspiration, minimum one, to choose a class ability that they can use. If you choose spellcasting, you gain access to the use of one spell on their spell list, which can be used as a bard spell casted using your spell slots. You now have access to one use of that ability until the end of a long rest. This ability can only be used once and refreshes on a long rest."
            ],
        }
    ]
}

// College of Synesthesia
export const BardSynesthesia = {
    subclassName: "College of Synesthesia",
    description: `Bards of the College of Synesthesia are artists who use their music to create vivid and immersive experiences. They cross sound, color, and feeling to captivate their audience, allowing people to feel things they've never seen. These bards are known for their unique ability to evoke strong sensory responses through their performances.<br> "With them, I saw a new world. Or the same one, through new eyes. Ears? Anyhow it was wonderful, and a little frightening how music could spill so much blood. I may need to work on my illusion spells..." - Gaius Evergill, triton conjuration wizard`,
    features: [
        {
            level: 3,
            feature1: ["Frissive Synesthesia",
                "When you expend bardic dice on a target and there is an enemy in a line between you and the target, you can roll the bardic dice to deal the result in slashing or bludgeoning damage, depending on the music being percussive or melodic, as a wave of sound forms musical notes that cut or hammer away at them."
            ],
            feature2: ["Mixing the Senses",
                "As an action, you can touch an object and cause another sense to be triggered when interacting with it. For example, when a creature looks at a coin you've touched, they smell oranges, or when touched they taste rotten meat. At any given time, you can use this on a number of objects equal to your charisma modifier and the effects last 24 hours."
            ]
        },
        {
            level: 6,
            feature1: ["Sympathetic Touch",
                "As an action, you can connect the senses between you and one other willing target you can touch. If you touch an unwilling creature, the creature must make a Charisma save against your bard DC. Anything one can touch, the other can see as though they had the appropriate vision to see the object or creature. Anything one can taste, the other can smell. As a reaction, any damage one takes can be halved for the other to take the remaining. This ability lasts for 1 hour, and refreshes on a long rest."
            ],
        },
        {
            level: 14,
            feature1: ["Sensory Lockdown",
                `When a creature you hit with, or fails a saving throw from, a 1st level or higher spell, you can expend a bardic inspiration to cause the target to lose a sense of your choice. The effects last for 1 minute or until the target succeeds on a Constitution save at the end of each of their turns.<br>
                If the spell is a touch attack or has a somatic component, you can choose for the creature to lose their sense of touch. This negates their ability to perceive pain from weapon and spells. This includes the spell or attack that triggered this effect.<br>
                If the spell has a verbal component, you can choose for the creature to lose their sense of hearing. The creature becomes deafened.<br>
                If the spell produces light, you can choose for the creature to lose their sight. The creature is blinded.<br>
                If the spell has a material component, you can choose for the creature to lose their taste or smell. If a creature loses its sense taste, they cannot perceive ingested poisons. If a creature loses its sense of smell, they cannot perceive inhaled poisons. The creature has disadvantage on saves against what they cannot perceive.`
            ],
        }
    ]
};