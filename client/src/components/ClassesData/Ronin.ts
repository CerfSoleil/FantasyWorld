import { ClassBase } from "./ClassBase"

export const ClassCredits = "This class was originally concepted and created by BlackFingerCult";

export const roninClass: ClassBase = {
    className: "Ronin",
    hitDie: 8,
    description: "",
    primaryAbility: "Strength or Dexterity",
    savingThrowProf: ["Constitution", "Wisdom"],
    skillProf: ["Choose 2", "Acrobatics, Athletics, History, Insight, Intimidation, Perception, Persuasion, Stealth"],
    weaponProf: ["Simple and Martial Weapons"],
    toolProf: ["Choose one Artisanal tool"],
    armorProf: ["Light, Medium, Heavy"],
    startingEquip: [["Chain mail, a martial weapon of your choice, a shortsword, a artisanal tool of your choice, diplomat's pack, 14gp"], ["Leather armor, a longbow, 20 arrows, a quiver, two daggers, one artisanal tool of your choice, an explorer's pack, 10gp"], ["95gp"]],
    multiWeaponProf: ["Simple and Martial Weapons"],
    multiArmorProf: ["Light, Medium"]
};  

export interface RoninLevelData {
    level: number;
    feature1?: string[];
    feature2?: string[];
    feature3?: string[];
    parry: number;
    weaponMastery: number;
}

export const roninLevels: RoninLevelData[] = [
    {
        level: 1,
        feature1: ["Fighting Style",
            `At 1st level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take the same Fighting Style option more than once, even if you get to choose again.`,
            "Archery",
            `You gain a +2 bonus to attack rolls you make with ranged weapons.`,
            "Defense",
            `While you are wearing armor, you gain a +1 bonus to AC.`,
            "Dueling",
            `When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.`,
            "Great Weapon Fighting",
            `When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.`,
            "Two-Weapon Fighting",
            `When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.`

        ],
        feature2: ["Steady Hand",
            `At 1st level, when making skill checks with tools in which you are proficient, you can treat any rolls on a d20 below your proficiency modifier as your proficiency modifier.`
        ],
        feature3: ["Vigorous Vitality",
            `At 1st level, when you make a successful weapon attack, you can add one of your hit dice to the damage that you deal.
            \nYou can add an additional dice when you reach 9th level in this class, and again at 14th.
`
        ],
        parry: 0,
        weaponMastery: 0

    },
    {
        level: 2,
        feature1: ["Parry",
            `Beginning at the 2nd level, when another creature hits you with a melee attack and you hold a weapon, you can use your reaction to reduce the damage dealt by the attack by 1d6 + your Dexterity or Strength modifier + your Ronin level. You can use this feature twice, you regain all expended uses when you finish a short or long rest. 
            \nYou gain an additional use of this feature at 8th and again at 16th level.
`
        ],
        feature2: ["Weapon Mastery",
            `Your training with weapons allows you to use the mastery properties of three kinds of Simple or Martial weapons of your choice. Whenever you finish a Long Rest, you can practice weapon drills and change one of those weapon choices.
            \nWhen you reach certain Fighter levels, you gain the ability to use the mastery properties of more kinds of weapons, as shown in the Weapon Mastery column of the Fighter Features table.`
        ],
        parry: 2,
        weaponMastery: 2
    },
    {
        level: 3,
        feature1: ["Ronin Subclass Feature",
            `You gain a Ronin archetype of your choice. An archetype is a specialization that grants you features at certain Ronin levels. For the rest of your career, you gain each of your archetype's features that are of your Ronin level or lower.`
        ],
        parry: 2,
        weaponMastery: 2
    },
    {
        level: 4,
        feature1: ["Ability Score Increase",
            `You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.`
        ],
        parry: 2,
        weaponMastery: 2
    },
    {
        level: 5,
        feature1: ["Extra Attack",
            `Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.
            \nThe number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class.`
        ],
        feature2: ["Stalwart Body",
            `As a reaction, starting at 5th level, when you are hit with an attack, you can use up to two of your hit dice to reduce the damage dealt to you.`
        ],
        parry: 2,
        weaponMastery: 3
    },
    {
        level: 6,
        feature1: ["Constant Vigilance",
            `At 6th level, you've learned to become distinctly aware of your surroundings, keeping an eye out for any signs of danger and keenly listening for any suspicious noises. You gain advantage on all Perception checks that rely on sight or sound. Additionally, if you are surprised, you can still make an unarmed or weapon attack with a weapon that isn't drawn on your turn.`
        ],
        parry: 2,
        weaponMastery: 3
    },
    {
        level: 7,
        feature1: ["Ronin Subclass Feature",
            `You gain a Ronin archetype of your choice. An archetype is a specialization that grants you features at certain Ronin levels. For the rest of your career, you gain each of your archetype's features that are of your Ronin level or lower.`
        ],
        parry: 2,
        weaponMastery: 3
    },
    {
        level: 8,
        feature1: ["Ability Score Increase",
            `You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.`
        ],
        parry: 3,
        weaponMastery: 3
    },
    {
        level: 9,
        feature1: ["Healthy Soul, Healthy Mind",
            `Starting at 9th level, you have bonus hit dice equal to double your wisdom modifier. These bonus hit dice cannot be used during a short rest, but you regain them if you take 10 minutes to meditate during a short rest.`
        ],
        feature2: ["Tough Discipline",
            `At 9th level, you have advantage on Constitution saves against conditions that would cause you to become incapacitated or receive the poisoned condition.`
        ],
        parry: 3,
        weaponMastery: 3
    },
    {
        level: 10,
        feature1: ["Steadying Sway",
            `At 10th level, you can take a step back from the battle and take a breath. Using your action, if there are no enemies within 5 feet of you you can use up to half of your hit dice (rounded down) to heal yourself. This ability can only be used once per long rest.`
        ],
        parry: 3,
        weaponMastery: 3
    },
    {
        level: 11,
        feature1: ["Ronin Subclass Feature",
            `You gain a Ronin archetype of your choice. An archetype is a specialization that grants you features at certain Ronin levels. For the rest of your career, you gain each of your archetype's features that are of your Ronin level or lower.`
        ],
        parry: 3,
        weaponMastery: 4
    },
    {
        level: 12,
        feature1: ["Ability Score Increase",
            `You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.`
        ],
        parry: 3,
        weaponMastery: 4
    },
    {
        level: 13,
        feature1: ["Two Extra Attacks",
            `You can attack three times instead of once whenever you take the Attack action on your turn.`
        ],
        parry: 3,
        weaponMastery: 4
    },
    {
        level: 14,
        feature1: ["Ability Score Increase",
            `You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.`
        ],
        parry: 3,
        weaponMastery: 4
    },
    {
        level: 15,
        feature1: ["Ronin Subclass Feature",
            `You gain a Ronin archetype of your choice. An archetype is a specialization that grants you features at certain Ronin levels. For the rest of your career, you gain each of your archetype's features that are of your Ronin level or lower.`
        ],
        parry: 3,
        weaponMastery: 4
    },
    {
        level: 16,
        feature1: ["Ability Score Increase",
            `You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.`
        ],
        parry: 4,
        weaponMastery: 4
    },
    {
        level: 17,
        feature1: ["Ritual Dueling",
            `At 17th level, you can use your bonus action to concentrate on an enemy that you can see. You gain a +5 to attack rolls against this creature as well as a +5 to damage, and can keep this bonus until you attack another creature, you lose concentration, or the targeted creature's health pool drops to 0. This can be used once per short or long rest.`
        ],
        parry: 3,
        weaponMastery: 5
    },
    {
        level: 18,
        feature1: ["Ronin Subclass Feature",
            `You gain a Ronin archetype of your choice. An archetype is a specialization that grants you features at certain Ronin levels. For the rest of your career, you gain each of your archetype's features that are of your Ronin level or lower.`
        ],
        parry: 3,
        weaponMastery: 5
    },
    {
        level: 19,
        feature1: ["Epic Boon",
        "You gain an Epic Boon feat or another feat of your choice for which you qualify. Boon of Spell Recall is recommended."
        ],
        parry: 4,
        weaponMastery: 5
    },
    {
        level: 20,
        feature1: ["Three Extra Attacks",
            `You can attack four times instead of once whenever you take the Attack action on your turn.`
        ],
        parry: 4,
        weaponMastery: 5
    }
]