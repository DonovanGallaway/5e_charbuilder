import { get } from "svelte/store";
import { getAbilityModifier } from "./rules";



export const LLMonkSubclasses = [
    "Way of the Astral Warrior",
    "Way of the Drunken Fist",
    "Way of Radiance",
    "Way of the Reaper",
    "Way of the Rising Dragon",
    "Way of Wuxia",
    "Way of Yin & Yang",
    "Way of the Boulder",
    "Way of the Flowing River",
    "Way of Sacred Inks",
    "Way of the Brawler",
    "Way of the Hurricane",
    "Way of the Vigilante",
    "Way of Ferocity",
    "Way of the Mystic",
    "Way of the Void",
    "Way of the Open Hand",
    "Way of the Shadow Arts",
    "Way of the Wu Jen",
  ];

  
const getFlowingRiverFeatures = (level) => {
    const features = [];
    if (level >= 3) {
        features.push(["Flowing River Stance", "Flowing Techniques", "Monastic Acrobat"]);
    }
    if (level >= 6) {
        features.push("Enchanting Flow");
    }
    if (level >= 10) {
        features.push("Graceful Step");
    }
    if (level >= 17) {
        features.push("Master of the Flowing River");
    }
    return features;
}

const getOpenHandFeatures = (level) => {
    const features = [];
    if (level >= 3) {
        features.push(["Open Hand Technique", "Praticed Strikes"]);
    }
    if (level >= 6) {
        features.push("Ebb and Flow");
    }
    if (level >= 10) {
        features.push("Open Hand Strike", "Master of Many Forms");
    }
    if (level >= 17) {
        features.push("Master of the Open Hand");
    }
    return features;
}

const getShadowArtsFeatures = (level) => {
    const features = [];
    if (level >= 3) {
        features.push(["Shadow Arts", "Eyes of Night", "Shadow Techniques"]);
    }
    if (level >= 6) {
        features.push("Shadow Steps");
    }
    if (level >= 10) {
        features.push("Cloak of Shadows");
    }
    if (level >= 17) {
        features.push("Master of the Shadow Arts");
    }
    return features;
}

const getWuJenFeatures = (level) => {
    const features = [];
    if (level >= 3) {
        features.push(["Disciple of the Elements"]);
    }
    if (level >= 6) {
        features.push("Fist of the Five Ways");
    }
    if (level >= 10) {
        features.push("Spiritual Flow");
    }
    if (level >= 17) {
        features.push("Master of the Elements");
    }
    return features;
}

const getAstralWarriorFeatures = (level) => {
    const features = [];
    if (level >= 3) {
        features.push(["Astral Self", "Astral Techniques"]);
    }
    if (level >= 6) {
        features.push("Astral Visage");
    }
    if (level >= 10) {
        features.push("Mystical Defense");
    }
    if (level >= 17) {
        features.push("Master Astral Warrior");
    }
    return features;
}

const getDrunkenFistFeatures = (level) => {
    const features = [];
    if (level >= 3) {
        features.push(["Jovial Performer", "Drunken Fist Techniques", "Drunken Style"]);
    }
    if (level >= 6) {
        features.push("Unpredictable Sway");
    }
    if (level >= 10) {
        features.push("Chaotic Luck");
    }
    if (level >= 17) {
        features.push("Master of the Drunken Fist");
    }
    return features;
}

const getRadianceFeatures = (level) => {
    const features = [];
    if (level >= 3) {
        features.push(["Radiant Bolt", "Radiant Techniques"]);
    }
    if (level >= 6) {
        features.push("Searing Blast");
    }
    if (level >= 10) {
        features.push("Luminous Burst");
    }
    if (level >= 17) {
        features.push("Master of Light");
    }
    return features;
}

const getReaperFeatures = (level) => {
    const features = [];
    if (level >= 3) {
        features.push(["Frightful Touch", "Reaper Techniques", "Necrotic Spirit"]);
    }
    if (level >= 6) {
        features.push("Sinister Vitality");
    }
    if (level >= 10) {
        features.push("Armor of the Grave");
    }
    if (level >= 17) {
        features.push("Master of Death");
    }
    return features;
}

const getRisingDragonFeatures = (level) => {
    const features = [];
    if (level >= 3) {
        features.push(["Elemental Breath", "Draconic Disciple", "Rising Dragon Techniques"]);
    }
    if (level >= 6) {
        features.push("Ascendant Step");
    }
    if (level >= 10) {
        features.push("Draconic Mantle");
    }
    if (level >= 17) {
        features.push("Master of Draconic Might");
    }
    return features;
}

const getWuxiaFeatures = (level) => {
    const features = [];
    if (level >= 3) {
        features.push(["Wuxia Techniques", "Student of Steel"]);
    }
    if (level >= 6) {
        features.push("Ki-infused Weapons");
    }
    if (level >= 10) {
        features.push("Spirit Blade");
    }
    if (level >= 17) {
        features.push("Master of Steel");
    }
    return features;
}

const getYinYangFeatures = (level) => {
    const features = [];
    if (level >= 3) {
        features.push(["Yin & Yang Techniques", "Monastic Healer", "Touch of Life", "Touch of Death"]);
    }
    if (level >= 6) {
        features.push("Precise Manipulation");
    }
    if (level >= 10) {
        features.push("Mystical Touch");
    }
    if (level >= 17) {
        features.push("Master of Life and Death");
    }
    return features;
}

const getBoulderFeatures = (level) => {
    const features = [];
    if (level >= 3) {
        features.push(["Boulder Techniques", "Stone Fist"]);
    }
    if (level >= 6) {
        features.push("Stone Skin");
    }
    if (level >= 10) {
        features.push("Stone Heart");
    }
    if (level >= 17) {
        features.push("Master of the Boulder");
    }
    return features;
}

const getSacredInksFeatures = (level) => {
    const features = [];
    if (level >= 3) {
        features.push(["Sacred Ink Techniques", "Ink Magic"]);
    }
    if (level >= 6) {
        features.push("Ink Armor");
    }
    if (level >= 10) {
        features.push("Ink Mastery");
    }
    if (level >= 17) {
        features.push("Master of the Ink");
    }
    return features;
}

const getBrawlerFeatures = (level) => {
    const features = [];
    if (level >= 3) {
        features.push(["Brawler Techniques", "Unarmed Mastery"]);
    }
    if (level >= 6) {
        features.push("Unarmed Defense");
    }
    if (level >= 10) {
        features.push("Unarmed Strike");
    }
    if (level >= 17) {
        features.push("Master of the Brawler");
    }
    return features;
}

const getHurricaneFeatures = (level) => {
    const features = [];
    if (level >= 3) {
        features.push(["Hurricane Techniques", "Windwalker"]);
    }
    if (level >= 6) {
        features.push("Gale Strike");
    }
    if (level >= 10) {
        features.push("Wind Form");
    }
    if (level >= 17) {
        features.push("Master of the Hurricane");
    }
    return features;
}

const getVigilanteFeatures = (level) => {
    const features = [];
    if (level >= 3) {
        features.push(["Vigilante Techniques", "Shadow Step"]);
    }
    if (level >= 6) {
        features.push("Vigilante Strike");
    }
    if (level >= 10) {
        features.push("Vigilante Defense");
    }
    if (level >= 17) {
        features.push("Master of the Vigilante");
    }
    return features;
}

const getFerocityFeatures = (level) => {
    const features = [];
    if (level >= 3) {
        features.push(["Ferocity Techniques", "Feral Instinct"]);
    }
    if (level >= 6) {
        features.push("Feral Strike");
    }
    if (level >= 10) {
        features.push("Feral Defense");
    }
    if (level >= 17) {
        features.push("Master of Ferocity");
    }
    return features;
}

const getMysticFeatures = (level) => {
    const features = [];
    if (level >= 3) {
        features.push(["Mystic Techniques", "Mystic Arts"]);
    }
    if (level >= 6) {
        features.push("Mystic Defense");
    }
    if (level >= 10) {
        features.push("Mystic Strike");
    }
    if (level >= 17) {
        features.push("Master of the Mystic");
    }
    return features;
}

const getVoidFeatures = (level) => {
    const features = [];
    if (level >= 3) {
        features.push(["Void Techniques", "Void Strike"]);
    }
    if (level >= 6) {
        features.push("Void Defense");
    }
    if (level >= 10) {
        features.push("Void Form");
    }
    if (level >= 17) {
        features.push("Master of the Void");
    }
    return features;
}

  const getSubclassFeatures = {
    "Way of the Astral Warrior": getAstralWarriorFeatures,
    "Way of the Drunken Fist": getDrunkenFistFeatures,
    "Way of Radiance": getRadianceFeatures,
    "Way of the Reaper": getReaperFeatures,
    "Way of the Rising Dragon": getRisingDragonFeatures,
    "Way of Wuxia": getWuxiaFeatures,
    "Way of Yin & Yang": getYinYangFeatures,
    "Way of the Boulder": getBoulderFeatures,
    "Way of the Flowing River": getFlowingRiverFeatures,
    "Way of Sacred Inks": getSacredInksFeatures,
    "Way of the Brawler": getBrawlerFeatures,
    "Way of the Hurricane": getHurricaneFeatures,
    "Way of the Vigilante": getVigilanteFeatures,
    "Way of Ferocity": getFerocityFeatures,
    "Way of the Mystic": getMysticFeatures,
    "Way of the Void": getVoidFeatures,
    "Way of the Open Hand": getOpenHandFeatures,
    "Way of the Shadow Arts": getShadowArtsFeatures,
    "Way of the Wu Jen": getWuJenFeatures,
  };



export const createLLMonk = (character) => {
    character.class = 'Monk (LL)';
    const needSubclass = character.level >= 3;
    character.classFeatures = ['Simple weapon proficiency', 'Shortsword proficiency', 'Unarmored Defense'];
    character.savingThrows = ['strength', 'dexterity'];
    if (character.level >= 2) {
        character.classFeatures.push('Ki' + `: ${character.level + getAbilityModifier(character.attributes.wisdom)}`);
        character.classFeatures.push('Flurry of Blows');
        character.classFeatures.push('Unarmored Movement');
    }
    if (character.level >= 3) {
        character.classFeatures.push('Monastic Tradition');
    }
    if (character.level >= 5) {
        character.classFeatures.push('Extra Attack');
    }
    if (character.level >= 6) {
        character.classFeatures.push('Enlightened Fist');
    }
    if (character.level >= 7) {
        character.classFeatures.push('Evasion');
    }
    if (character.level >= 9) {
        character.classFeatures.push('Spirit of Tranquility');
    }
    if (character.level >= 11){
        character.classFeatures.push('Ki Adept');
    }
    if (character.level >= 13){
        character.classFeatures.push('Purity of Body');
    }
    if (character.level >= 14){
        character.classFeatures.push('Purity of Mind');
    }
    if (character.level >= 15){
        character.classFeatures.push('Timeless Body');
    }
    if (character.level >= 20){
        character.classFeatures.push('Purity of Spirit');
    }
    if (needSubclass) {
        const subclass = character.subclass;
        console.log(subclass);
        const subclassFeatures = getSubclassFeatures[subclass](character.level);
        subclassFeatures.map((feature) => character.classFeatures.push(feature));
    }
    return character;
}


export const LLMonk = {
    createLLMonk,
    LLMonkSubclasses
}