const { d100, d3 } = require('./dice');
const { homelands } = require('./tables/homelands');
const { backgrounds } = require('./tables/backgrounds');
const { social_status_table } = require('./tables/social');
const { ally_relationships, rival_relationships } = require('./tables/alliesrivals');
const { 
    settlements_la,
    settlements_dfn,
    settlements_ik,
    settlements_ir,
    settlements_ud
} = require('./tables/settlements');
const {
    family_size_village,
    family_size_city,
    family_relationships
} = require('./tables/families');

class HeroicChronicle {
    constructor() {
        this.text = '\n=== HEROIC CHRONICLE ===\n';
        this.data = {};
        this.logString = '';
    }

    log(str) {
        console.log(str);
        this.logString += `${str}\n`
    }

    getLog() {
        return this.logString;
    }

    generate() {
        return new Promise((resolve) => {
            Promise.all([
                this.generateHomeland(),
                this.generateBackground(),
                this.generateSettlement(),
                this.generateRace(),
                this.generateFamily(),
                this.generateFamilyRelationships(),
                this.generateAlliesAndRivals(),
            ])
            .then(() => {
                resolve(this.text);
            })
        })
    }

    async generateHomeland() {
        this.log('Generating homeland...');
        const roll = d100.roll();
        let homeland = homelands.select(roll);
        this.data.homeland = homeland;
        this.log(`Roll: ${roll} (${homeland})`);
        this.text += `Homeland: ${homeland}\n`;
        return this.text;
    }

    async generateBackground() {
        this.log('Generating background...');
        const roll = d100.roll();
        let bg = backgrounds.select(roll);
        this.data.background = bg;
        this.data.social = social_status_table[this.data.background][this.data.homeland];
        this.log(`Roll: ${roll} (${bg})`);
        this.text += `Background: ${bg}\n`;
        return this.text;
    }

    async generateSettlement() {
        this.log('Generating settlement...');
        const roll = d100.roll();
        let settlement = {};
        switch (this.data.homeland) {
            case "Lords' Alliance":
                settlement = settlements_la.select(roll);
                break;
            case "Dwarfholds of the North":
                settlement = settlements_dfn.select(roll);
                break;
            case "Island Kingdoms":
                settlement = settlements_ik.select(roll);
                break;
            case "Independent Realms":
                settlement = settlements_ir.select(roll);
                break;
            case "Underdark":
                settlement = settlements_ud.select(roll);
                break;
            default:
                settlement = settlements_la.select(roll);
                break;
        }
        this.data.settlement = settlement;
        this.log(`Roll: ${roll} (${settlement.name}, ${settlement.type})`);
        this.text += `Settlement: ${settlement.name} (${settlement.type})\n`;
        return this.text;
    }

    async generateRace() {
        this.log('Generating race...');
        this.log('<feature is not implemented>');
        this.data.race = null;
        this.text += `Race: <not yet implemented>\n`;
    }

    async generateFamily() {
        this.log('Generating family...');
        const roll = d100.roll();
        let family = {};
        if (this.data.settlement.type == 'Village') {
            family = family_size_village.select(roll);
        } else {
            family = family_size_city.select(roll);
        }
        this.log(`Roll: ${roll} (${family.parents} parent(s), ${family.siblings} sibling(s))`);
        this.data.family = family;
        this.text += `Family: ${family.parents} parent(s), ${family.siblings} sibling(s)\n`;
        return family;
    }

    async generateFamilyRelationships() {
        this.log('Generating family relationships...');
        const relationshipsCount = d3.roll();
        this.log(`${relationshipsCount} family relationship(s) will be rolled`);
        let relationships = [];
        this.text += `Family relationships: \n`
        for (let index = 0; index < relationshipsCount; index++) {
            const roll = d100.roll();
            let rel = family_relationships.select(roll);
            this.log(`Family relationships roll #${index+1} = ${roll}: ${rel.text}(${rel.type})`);
            relationships.push(rel);
            this.text += `\t*(${rel.type}) ${rel.text}\n`;
            if (index == relationshipsCount-1) this.data.family.relationships = relationships;
            if (rel.type == 'Ally') {
                this.data.social.allies++;
            } else if (rel.type == 'Rival') {
                this.data.social.rivals++;
            }
        }
        return relationships;
    }

    async generateAlliesAndRivals() {
        this.log('Generating allies and rivals...');
        this.text += `Allies: ${this.data.social.allies}\n`;
        this.data.allies = [];
        for (let index = 0; index < this.data.social.allies; index++) {
            const roll = d100.roll();
            let ally = ally_relationships.select(roll);
            this.data.allies.push(ally);
            this.text += `\t*${ally}\n`;
        }
        this.text += `Rivals: ${this.data.social.rivals}\n`;
        this.data.rivals = [];
        for (let index = 0; index < this.data.social.rivals; index++) {
            const roll = d100.roll();
            let rival = rival_relationships.select(roll);
            this.data.rivals.push(rival);
            this.text += `\t*${rival}\n`;
        }
        return true;
    }
}

module.exports = {
    HeroicChronicle
}