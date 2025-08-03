import { SubclassBase } from "./ClassBase";

//Bushi
export const RoninBushi: SubclassBase = {
    subclassName: "Bushi",
    description: "",
    features: [
        {
            level: 3,
            subclassFeature1: ["Practiced Art",
                `At 3rd level, you gain proficiency with your choice of painter's supplies, calligrapher's supplies, or persuasion. If you already have proficiency in your choice, you instead gain expertise.`,
            ],
            subclassFeature2: ["Pommel Strike",
                `At 3rd level as a Bushi, whenever you successfully hit an enemy with a melee weapon attack, you can use your bonus action to make a second strike with the hilt of your weapon. This strike deals a d4 of bludgeoning damage and reduces the target's next attack roll by your proficiency modifier. You can use this a number times equal to your Wisdom modifier and refreshes on a short or long rest.`
            ]
        },
        {
            level: 7,
            subclassFeature1: ["Intercept & Reposte",
                `At 7th level as a Bushi, you can now parry when an ally within 5ft of you is hit with a melee attack. Additionally, when a parry you make reduces the damage to 0, you can make an attack against the attacking creature as a part of the reaction.`
            ]
        },
        {
            level: 11,
            subclassFeature1: ["River's Flow",
                `At 11th level on your turn, if you successfully hit all the attacks available with your action, you can make one melee weapon attack as a bonus action against the attacker.`
            ]
        },
        {
            level: 15,
            subclassFeature1: ["Jin",
                `At 15th level, as a bonus action, you may grant up to 2 allies within 30 feet that can see or hear you temporary hit points equal to your Ronin level + your Wisdom modifier. This can be used once and refreshes on a long rest.`
            ]
        },
        {
            level: 18,
            subclassFeature1: ["Dawn of the Steel Sun",
                `At 18th level, when using a weapon that you are already proficient with, you can instead add double your proficiency bonus to the attack roll and multiply the damage dice by your Wisdom modifier. This can be used once and refreshes on a long rest.`
            ]
        }
    ],
    subclassCredits: "This subclass was created by BlackFingerCult."
};

// Kenshibu
export const RoninKenshibu: SubclassBase = {
    subclassName: "Kenshibu",
    description: "Mirror Fighter",
    features: [
        {
            level: 3,
            subclassFeature1: ["Glass Waltz",
                `At 3rd level, when you make an attack on a target 10 feet away, you can use your reaction before your next turn to make another attack on the target if they move closer to you. If this attack is successful, you can take a 5 foot step back as part of the reaction.`,
            ],
            subclassFeature2: ["Morale Booster",
                `When an ally attacks a target that you made an attack against on your last turn, they gain half of your proficiency as a bonus to their first attack roll. Additionally, when you provide the help action to allies, they gain a +2 to their roll in addition to advantage.`
            ]
        },
        {
            level: 7,
            subclassFeature1: ["Echo Strike",
                `At 7th level, when an ally within 5 feet of you makes an attack on a target, you can use your reaction to make an attack on the same target. You can use this a number times equal to your Wisdom modifier and refreshes on a long rest.`
            ]
        },
        {
            level: 11,
            subclassFeature1: ["Crescent Step",
                `At 11th level, when you make an attack on an enemy within 5 feet of you, you can use your bonus action to move your full speed as long as you end within 10 feet of an enemy.`
            ]
        },
        {
            level: 15,
            subclassFeature1: ["Combat Reflexes",
                `At 15th level, you gain a 2nd use of your reaction. This second reaction can only be used to make attacks of opportunity or your echo strike ability.`
            ]
        },
        {
            level: 18,
            subclassFeature1: ["Mirror Raid",
                `At 18th when you use echo strike, all allies within 10 feet of you may use their reaction to make an attack on the same target.`
            ]
        }
    ],
    subclassCredits: "This subclass was created by BlackFingerCult."
};

// Kyūdō
export const RoninKyudo: SubclassBase = {
    subclassName: "Kyūdō",
    description: "Archer",
    features: [
        {
            level: 3,
            subclassFeature1: ["Sanpaku",
                `When you see a creature that is hiding or invisible, you can use your reaction to call their exact location. The creature gains no benefits of being hidden to any creature that can hear you within 60 feet until they hide again. Additionally, you gain proficiency in perception checks. If you already have proficiency, you instead gain expertise.`,
            ],
            subclassFeature2: ["Twin Arrows",
                `Upon choosing Kyūdō at the 3rd level, your skill with the bow allows you to use your bonus action to nock a second arrow. On a hit, you deal the normal weapon damage plus an extra 1d8 Piercing Damage for every extra arrow. This increases to 2 extra arrows at 7th level and 3 at 15th.
`
            ]
        },
        {
            level: 7,
            subclassFeature1: ["Bowman's Reflex",
                `At the 7th level, when a projectile attack targets you, you can use your reaction to attempt to intercept it with an arrow. Make an attack roll using a ranged weapon, if it beats the enemy's attack roll, the damage is reduced to 0 and your attack continues to them as if it was a normal attack. You can use this a number of times equal to your dexterity modifier (minimum of 1). All uses refresh at the end of a long rest.`
            ]
        },
        {
            level: 11,
            subclassFeature1: ["Close Quarters Archer",
                `At 11th level, when you make a ranged attack with an enemy within 5 feet, it is no longer at disadvantage.`
            ]
        },
        {
            level: 15,
            subclassFeature1: ["Full Draw",
                `At 15th level, you can choose to use your bonus action to draw the string to its upper limit. Before the end of your next turn, the range for the bow doubles and your next attack roll applies to every creature in a 10 foot line behind your target.`
            ]
        },
        {
            level: 18,
            subclassFeature1: ["Kyudoka",
                `At 18th level, if you miss with an attack roll you can roll it again with advantage. Once you do so, you can't use this feature again until you finish a short or long rest.`
            ]
        }
    ],
    subclassCredits: "This subclass was created by BlackFingerCult."
};

// Shinobi
export const RoninShinobi: SubclassBase = {
    subclassName: "Shinobi",
    description: "",
    features: [
        {
            level: 3,
            subclassFeature1: ["Hidden Snake",
                `At 3rd level, you gain proficiency in poisoner's kit, thieves' tools, or stealth. If you already have proficiency in your choice, you instead gain expertise.`,
            ],
            subclassFeature2: ["Tsujigiri",
                `At 3rd level, once per turn, you can deal an extra 1d8 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.
                \nYou don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll.
                \nThe amount of the extra damage increases as you gain levels in this subclass. The damage dice increases to 2d8 at 7th level, 3d8 at 10th, 4d8 at 15th, and 5d8 at 17th.`
            ]
        },
        {
            level: 7,
            subclassFeature1: ["Coiling Slash",
                `At 7th level, you can use your bonus action to prepare a strike as long as there is one enemy or less within 5 feet of you. The next attack you make before the end of your next turn is made at advantage.`
            ]
        },
        {
            level: 11,
            subclassFeature1: ["Mobile Attacker",
                `Starting at 11th level, your speed increases by 10 feet while you aren't wearing medium or heavy armor.`
            ],
            subclassFeature2: ["Lightning Strike",
                `At 11th level as Shinobi, whenever you successfully deal a critical hit, the damage dice is tripled instead of doubled.`
            ]
        },
        {
            level: 15,
            subclassFeature1: ["Tiger Dodge",
                `At 15th level when a melee attack is made against you, as long as it is not a critical hit, you can use your reaction to cause the attack to miss and slip through the enemy's threat zone. You can make an attack on the enemy while moving anywhere within their reach. This movement does not trigger attacks of opportunity. This ability can be used once and refreshes on short or long rest.`
            ]
        },
        {
            level: 18,
            subclassFeature1: ["Shadow Slip",
                `At 18th level, when an enemy makes an attack against you and misses, you can use your reaction to teleport 60 feet away. If you end behind half-cover or greater, you can make a stealth check as part of that reaction. You can use this ability once, refreshing on a short or long rest.`
            ]
        }
    ],
    subclassCredits: "This subclass was created by BlackFingerCult."
};