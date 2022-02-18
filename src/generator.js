const { d100 } = require('./dice');
const { homelands } = require('./tables/homelands');
const { backgrounds } = require('./tables/backgrounds');
const { 
    settlements_la,
    settlements_dfn,
    settlements_ik,
    settlements_ir,
    settlements_ud
} = require('./tables/settlements');
const {
    family_size_village,
    family_size_city
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
                this.generateFamily()
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
            case "Island Nations":
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
}

module.exports = {
    HeroicChronicle
}