const { Entry, RandomTable } = require('./table');

const homelands = new RandomTable([
    new Entry(1,50,"Lords' Alliance"),
    new Entry(51,60,"Dwarfholds of the North"),
    new Entry(61,70,"Island Kingdoms"),
    new Entry(71,95,"Independent Realms"),
    new Entry(96,100,"Underdark")
]);

module.exports = {
    homelands
}