import { ClassBase } from "./ClassBase";

export const rogueClass: ClassBase = {
    className: "Rogue",
    hitDie: "d8",
    description: "",
    primaryAbility: "Dexterity",
    savingThrowProf: ["Dexterity", "Intelligence"],
    skillProf: ["Choose 4", "Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Persuasion, Sleight of Hand, or Stealth"],
    weaponProf: ["Simple Weapons and Martial weapons with the Finesse or Light property."],
    toolProf: ["Thieves' Tools"],
    armorProf: ["Light Armor"],
    startingEquip: [["Leather Armor, 2 Daggers, Shortsword, Shortbow, 20 Arrows, Quiver, Thieves' Tools, Burglar's Pack, and 8gp"], ["100gp"]],
    multiSkillProf: ["Choose 1", "Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Persuasion, Sleight of Hand, Stealth"],
    multiToolProf: ["Thieves' Tools"],
    multiArmorProf: ["Light Armor"],
};

export interface RogueLevelData {
    level: number;
    feature1?: string[];
    feature2?: string[];
    feature3?: string[];
    feature4?: string[];
    sneakAttack: string;
}

export const rogueLevels: RogueLevelData[] = [
    {
        level: 1,
        feature1: ["Expertise",
            `You gain Expertise in two of your skill proficiencies of your choice. Sleight of Hand and Stealth are recommended if you have proficiency in them.`
        ],
        feature2: ["Sneak Attack",
            `You know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack roll if you have Advantage on the roll and the attack uses a Finesse or a Ranged weapon. The extra damage's type is the same as the weapon's type.
            You don't need Advantage on the attack roll if at least one of your allies is within 5 feet of the target, the ally doesn't have the Incapacitated condition, and you don't have Disadvantage on the attack roll.
            The extra damage increases as you gain Rogue levels, as shown in the Sneak Attack column of the Rogue Features table.`
        ],
        feature3: ["Thieves' Cant",
            `You picked up various languages in the communities where you plied your roguish talents. You know Thieves' Cant and one other language of your choice, which you choose from the language tables.`
        ],
        feature4: ["Weapon Mastery",
            `Your training with weapons allows you to use the mastery properties of two kinds of weapons of your choice with which you have proficiency, such as Daggers and Shortbows.
            Whenever you finish a Long Rest, you can change the kinds of weapons you chose. For example, you could switch to using the mastery properties of Scimitars and Shortswords.`
        ],
        sneakAttack: "1d6"
    },
    {
        level: 2,
        feature1: ["Cunning Action",
            `Your quick thinking and agility allow you to move and act quickly. On your turn, you can take one of the following actions as a Bonus Action: Dash, Disengage, or Hide.`
        ],
        sneakAttack: "1d6",
    },
    {
        level: 3,
        feature1: ["Rogue Subclass Feature",
            `You gain a Rogue subclass of your choice. A subclass is a specialization that grants you features at certain Rogue levels. For the rest of your career, you gain each of your subclass's features that are of your Rogue level or lower.`
        ],
        feature2: ["Steady Aim",
            `As a Bonus Action, you give yourself Advantage on your next attack roll on the current turn. You can use this feature only if you haven't moved during this turn, and after you use it, your Speed is 0 until the end of the current turn.`
        ],
        sneakAttack: "2d6",
    },
    {
        level: 4,
        feature1: ["Ability Score Improvment",
            `You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.`
        ],
        sneakAttack: "2d6",
    },
    {
        level: 5,
        feature1: ["Cunning Strike",
            `You've developed cunning ways to use your Sneak Attack. When you deal Sneak Attack damage, you can add one of the following Cunning Strike effects. Each effect has a die cost, which is the number of Sneak Attack damage dice you must forgo to add the effect. You remove the die before rolling, and the effect occurs immediately after the attack's damage is dealt. For example, if you add the Poison effect, remove 1d6 from the Sneak Attack's damage before rolling.
            If a Cunning Strike effect requires a saving throw, the DC equals 8 plus your Dexterity modifier and Proficiency Bonus.`,
            "Poison (Cost: 1d6).",
            `You add a toxin to your strike, forcing the target to make a Constitution saving throw. On a failed save, the target has the Poisoned condition for 1 minute. At the end of each of its turns, the Poisoned target repeats the save, ending the effect on itself on a success.
            To use this effect, you must have a Poisoner's Kit on your person.`,
            "Trip (Cost 1d6)",
            `If the target is Large or smaller, it must succeed on a Dexterity saving throw or have the Prone condition.`,
            "Withdraw (Cost: 1d6).",
            `Immediately after the attack, you move up to half your Speed without provoking Opportunity Attacks.`
        ],
        feature2: ["Uncanny Dodge",
            `When an attacker that you can see hits you with an attack roll, you can take a Reaction to halve the attack's damage against you (round down).`
        ],
        sneakAttack: "3d6"
    },
    {
        level: 6,
        feature1: ["Expertise",
            `You gain Expertise in two of your Skill Proficiencies of your choice.`
        ],
        sneakAttack: "3d6"
    },
    {
        level: 7,
        feature1: ["Evasion",
            `You can nimbly dodge out of the way of certain dangers. When you're subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw and only half damage if you fail. You can't use this feature if you have the Incapacitated condition.`
        ],
        feature2: ["Reliable Talent",
            `Whenever you make an ability check that uses one of your skill or tool proficiencies, you can treat a d20 roll of 9 or lower as a 10.`
        ],
        sneakAttack: "4d6"
    },
    {
        level: 8,
        feature1: ["Ability Score Improvement",
            `You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.`
        ],
        sneakAttack: "4d6"
    },
    {
        level: 9,
        feature1: ["Rogue Subclass Feature",
            `You gain a Rogue subclass of your choice. A subclass is a specialization that grants you features at certain Rogue levels. For the rest of your career, you gain each of your subclass's features that are of your Rogue level or lower.`
        ],
        sneakAttack: "5d6"
    },
    {
        level: 10,
        feature1: ["Ability Score Improvement",
            `You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.`
        ],
        sneakAttack: "5d6"
    },
    {
        level: 11,
        feature1: ["You can use up to two Cunning Strike effects when you deal Sneak Attack damage, paying the die cost for each effect."
        ],
        sneakAttack: "6d6"
    },
    {
        level: 12,
        feature1: ["Ability Score Improvement",
            `You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.`
        ],
        sneakAttack: "6d6"
    },
    {
        level: 13,
        feature1: ["Rogue Subclass Feature",
            `You gain a Rogue subclass of your choice. A subclass is a specialization that grants you features at certain Rogue levels. For the rest of your career, you gain each of your subclass's features that are of your Rogue level or lower.`
        ],
        sneakAttack: "7d6"
    },
    {
        level: 14,
        feature1: ["Devious Strikes",
            `You've practiced new ways to use your Sneak Attack deviously. The following effects are now among your Cunning Strike options.`,
            "Daze (Cost: 2d6)",
            `The target must succeed on a Constitution saving throw, or on its next turn, it can do only one of the following: move or take an action or a Bonus Action.`,
            "Knock Out (Cost: 6d6)",
            `The target must succeed on a Constitution saving throw, or it has the Unconscious condition for 1 minute or until it takes any damage. The Unconscious target repeats the save at the end of each of its turns, ending the effect on itself on a success.`,
            "Obscure (Cost: 3d6)",
            `The target must succeed on a Dexterity saving throw, or it has the Blinded condition until the end of its next turn.`
        ],
        sneakAttack: "7d6"
    },
    {
        level: 15,
        feature1: ["Slippery Mind",
            `Your cunning mind is exceptionally difficult to control. You gain proficiency in Wisdom and Charisma saving throws.`
        ],
        sneakAttack: "8d6"
    },
    {
        level: 16,
        feature1: ["Ability Score Improvement",
            `You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.`
        ],
        sneakAttack: "8d6"
    },
    {
        level: 17,
        feature1: ["Rogue Subclass Feature",
            `You gain a Rogue subclass of your choice. A subclass is a specialization that grants you features at certain Rogue levels. For the rest of your career, you gain each of your subclass's features that are of your Rogue level or lower.`
        ],
        sneakAttack: "9d6"
    },
    {
        level: 18,
        feature1: ["Elusive",
            `You're so evasive that attackers rarely gain the upper hand against you. No attack roll can have Advantage against you unless you have the Incapacitated condition.`
        ],
        sneakAttack: "9d6"
    },
    {
        level: 19,
        feature1: ["Epic Boon",
            `You gain an Epic Boon feat or another feat of your choice for which you qualify. Boon of the Night Spirit is recommended.`
        ],
        sneakAttack: "10d6"
    },
    {
        level: 20,
        feature1: ["Stroke of Luck",
            `You have a marvelous knack for succeeding when you need to. If you fail a D20 Test, you can turn the roll into a 20.
            Once you use this feature, you can't use it again until you finish a Short or Long Rest.`
        ],
        sneakAttack: "10d6"
    }
];