import { ClassBase } from "./ClassBase"

export const ClassCredits = "This class belongs to Dungeons & Dragons 5th Edition, and is not an original work. All rights to the original content belong to Wizards of the Coast.";

export const fighterClass: ClassBase = {
    className: "Fighter",
    hitDie: "d10",
    description: "Fighters are versatile, durable warriors with unmatched combat training and extra attacks. They can focus on raw power, tactical maneuvers, or even limited spellcasting, depending on their subclass.",
    primaryAbility: "Strength or Dexterity",
    savingThrowProf: ["Strength", "Constitution"],
    skillProf: ["Choose 3", "Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Persuasion, Perception, Survival"],
    weaponProf: ["Simple and Martial weapons"],
    toolProf: [""],
    armorProf: ["Light, Medium, Heavy, Shields"],
    startingEquip: [["Chain Mail, Greatsword, Flail, 8 Javelins, Dungeoneer's Pack, and 4gp"], ["Studded Leather Armor, Schimitar, Shortsword, Longbow, 20 Arrows, Quiver, Dungeoneer's Pack, and 11gp"], ["155gp"]],
    multiWeaponProf: ["Martial weapons"],
    multiArmorProf: ["Light, Medium, Shields"]
};  

export interface FigherLevelData {
    level: number;
    feature1?: string[];
    feature2?: string[];
    feature3?: string[];
    secondWind: number;
    weaponMastery: number;
}

export const fighterLevels: FigherLevelData[] = [
    {
        level: 1,
        feature1: ["Fighting Style",
            `You have honed your martial prowess and gain a Fighting Style feat of your choice. Defense is recommended.
            Whenever you gain a Fighter level, you can replace the feat you chose with a different Fighting Style feat.`
        ],
        feature2: ["Second Wind",
            `You have a limited well of physical and mental stamina that you can draw on. As a Bonus Action, you can use it to regain Hit Points equal to 1d10 plus your Fighter level.
            You can use this feature twice. You regain one expended use when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest.
            When you reach certain Fighter levels, you gain more uses of this feature, as shown in the Second Wind column of the Fighter Features table.`
        ],
        feature3: ["Weapon Mastery",
            `Your training with weapons allows you to use the mastery properties of three kinds of Simple or Martial weapons of your choice. Whenever you finish a Long Rest, you can practice weapon drills and change one of those weapon choices.
            When you reach certain Fighter levels, you gain the ability to use the mastery properties of more kinds of weapons, as shown in the Weapon Mastery column of the Fighter Features table.`
        ],
        secondWind: 2,
        weaponMastery: 3
    },
    {
        level: 2,
        feature1: ["Action Surge",
            `You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action, except the Magic action.
            Once you use this feature, you can't do so again until you finish a Short or Long Rest. Starting at level 17, you can use it twice before a rest but only once on a turn.`
        ],
        feature2: ["Tactical Mind",
            `You have a mind for tactics on and off the battlefield. When you fail an ability check, you can expend a use of your Second Wind to push yourself toward success. Rather than regaining Hit Points, you roll 1d10 and add the number rolled to the ability check, potentially turning it into a success. If the check still fails, this use of Second Wind isn't expended.`
        ],
        secondWind: 2,
        weaponMastery: 3
    },
    {
        level: 3,
        feature1: ["Fighter Subclass Feature",
            `You gain a Fighter subclass of your choice. A subclass is a specialization that grants you features at certain Bard levels. For the rest of your career, you gain each of your subclass's features that are of your Bard level or lower.<br>
            Select a Subclass to see its features.`
        ],
        secondWind: 2,
        weaponMastery: 3
    },
    {
        level: 4,
        feature1: ["Ability Score Improvement",
            "You gain the Ability Score Improvement feat or another feat of your choice for which you qualify."
        ],
        secondWind: 3,
        weaponMastery: 4
    },
    {
        level: 5,
        feature1: ["Extra Attack",
            `You can attack twice instead of once whenever you take the Attack action on your turn.`
        ],
        feature2: ["Tactical Shift",
            `Whenever you activate your Second Wind with a Bonus Action, you can move up to half your Speed without provoking Opportunity Attacks.`
        ],
        secondWind: 3,
        weaponMastery: 4
    },
    {
        level: 6,
        feature1: ["Ability Score Improvement",
            "You gain the Ability Score Improvement feat or another feat of your choice for which you qualify."
        ],
        secondWind: 3,
        weaponMastery: 4
    },
    {
        level: 7,
        feature1: ["Fighter Subclass Feature",
            `You gain a Fighter subclass of your choice. A subclass is a specialization that grants you features at certain Bard levels. For the rest of your career, you gain each of your subclass's features that are of your Bard level or lower.<br>
            Select a Subclass to see its features.`
        ],
        secondWind: 3,
        weaponMastery: 4
    },
    {
        level: 8,
        feature1: ["Ability Score Improvement",
            "You gain the Ability Score Improvement feat or another feat of your choice for which you qualify."
        ],
        secondWind: 3,
        weaponMastery: 4
    },
    {
        level: 9,
        feature1: ["Indomitable",
            `If you fail a saving throw, you can reroll it with a bonus equal to your Fighter level. You must use the new roll, and you can't use this feature again until you finish a Long Rest.
            You can use this feature twice before a Long Rest starting at level 13 and three times before a Long Rest starting at level 17.`
        ],
        feature2: ["Tactical Master",
            `When you attack with a weapon whose mastery property you can use, you can replace that property with the Push, Sap, or Slow property for that attack.`
        ],
        secondWind: 3,
        weaponMastery: 4
    },
    {
        level: 10,
        feature1: ["Fighter Subclass Feature",
            `You gain a Fighter subclass of your choice. A subclass is a specialization that grants you features at certain Bard levels. For the rest of your career, you gain each of your subclass's features that are of your Bard level or lower.<br>
            Select a Subclass to see its features.`
        ],
        secondWind: 4,
        weaponMastery: 5
    },
    {
        level: 11,
        feature1: ["Two Extra Attacks",
            `You can attack three times instead of once whenever you take the Attack action on your turn.`
        ],
        secondWind: 4,
        weaponMastery: 5
    },
    {
        level: 12,
        feature1: ["Ability Score Improvement",
            "You gain the Ability Score Improvement feat or another feat of your choice for which you qualify."
        ],
        secondWind: 4,
        weaponMastery: 5
    },
    {
        level: 13,
        feature1: ["Indomitable",
            `If you fail a saving throw, you can reroll it with a bonus equal to your Fighter level. You must use the new roll, and you can't use this feature again until you finish a Long Rest.
            You can use this feature twice before a Long Rest starting at level 13 and three times before a Long Rest starting at level 17.`
        ],
        feature2: ["Studied Attacks",
            `You study your opponents and learn from each attack you make. If you make an attack roll against a creature and miss, you have Advantage on your next attack roll against that creature before the end of your next turn.`
        ],
        secondWind: 4,
        weaponMastery: 5
    },
    {
        level: 14,
        feature1: ["Ability Score Improvement",
            "You gain the Ability Score Improvement feat or another feat of your choice for which you qualify."
        ],
        secondWind: 4,
        weaponMastery: 5
    },
    {
        level: 15,
        feature1: ["Fighter Subclass Feature",
            `You gain a Fighter subclass of your choice. A subclass is a specialization that grants you features at certain Bard levels. For the rest of your career, you gain each of your subclass's features that are of your Bard level or lower.<br>
            Select a Subclass to see its features.`
        ],
        secondWind: 4,
        weaponMastery: 5
    },
    {
        level: 16,
        feature1: ["Ability Score Improvement",
            "You gain the Ability Score Improvement feat or another feat of your choice for which you qualify."
        ],
        secondWind: 4,
        weaponMastery: 6
    },
    {
        level: 17,
        feature1: ["Action Surge",
            `You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action, except the Magic action.
            Once you use this feature, you can't do so again until you finish a Short or Long Rest. Starting at level 17, you can use it twice before a rest but only once on a turn.`
        ],
        feature2: ["Indomitable",
            `If you fail a saving throw, you can reroll it with a bonus equal to your Fighter level. You must use the new roll, and you can't use this feature again until you finish a Long Rest.
            You can use this feature twice before a Long Rest starting at level 13 and three times before a Long Rest starting at level 17.`
        ],
        secondWind: 4,
        weaponMastery: 6
    },
    {
        level: 18,
        feature1: ["Fighter Subclass Feature",
            `You gain a Fighter subclass of your choice. A subclass is a specialization that grants you features at certain Bard levels. For the rest of your career, you gain each of your subclass's features that are of your Bard level or lower.<br>
            Select a Subclass to see its features.`
        ],
        secondWind: 4,
        weaponMastery: 6
    },
    {
        level: 19,
        feature1: ["Epic Boon",
        "You gain an Epic Boon feat or another feat of your choice for which you qualify. Boon of Spell Recall is recommended."
        ],
        secondWind: 4,
        weaponMastery: 6
    },
    {
        level: 20,
        feature1: ["Three Extra Attacks",
            `You can attack four times instead of once whenever you take the Attack action on your turn.`
        ],
        secondWind: 4,
        weaponMastery: 6
    }
]