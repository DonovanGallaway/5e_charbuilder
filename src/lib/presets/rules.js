import { LLMonkSubclasses, createLLMonk } from "./ll_monk.js";

export const getProficiencyBonus = (level) => {
    return Math.ceil(level / 4) + 1;
};

export const getAbilityModifier = (abilityScore, returnString = false) => {
    const modifier = Math.floor((abilityScore - 10) / 2);
    if (!returnString) {
        return modifier;
    } else {
        return modifier > 0 ? `+${modifier}` : `${modifier}`;
    }
}

export const mapSkills = {
    acrobatics: "dexterity",
    animalHandling: "wisdom",
    arcana: "intelligence",
    athletics: "strength",
    deception: "charisma",
    history: "intelligence",
    insight: "wisdom",
    intimidation: "charisma",
    investigation: "intelligence",
    medicine: "wisdom",
    nature: "intelligence",
    perception: "wisdom",
    performance: "charisma",
    persuasion: "charisma",
    religion: "intelligence",
    sleightOfHand: "dexterity",
    stealth: "dexterity",
    survival: "wisdom",
}

export const getSkillModifier = (abilityScore, proficiencyBonus, isProficient) => { // Also works for saving throws
    let modifier = Math.floor((abilityScore - 10) / 2);
    console.log(modifier)
    if (isProficient) {
        modifier += proficiencyBonus;
        console.log(modifier)
    }
    return modifier > 0 ? `+${modifier}` : `${modifier}`;
}

export const roll4d6DropLowest = () => {
    let rolls = [];
    for (let i = 0; i < 4; i++) {
        rolls.push(Math.floor(Math.random() * 6) + 1);
    }
    rolls.sort((a, b) => a - b);
    rolls.shift();
    return rolls.reduce((a, b) => a + b);
}

const subclasses = {
    "LLMonk": LLMonkSubclasses
}

const classes = {
    "LLMonk": createLLMonk
}

const updateCharacter = (character) => {
    const className = character.class;
    if (classes[className]) {
        return classes[className](character);
    }
    return character;
}

export const Rules = {
    getProficiencyBonus,
    getAbilityModifier,
    getSkillModifier,
    mapSkills,
    roll4d6DropLowest,
    subclasses,
    updateCharacter,
}


