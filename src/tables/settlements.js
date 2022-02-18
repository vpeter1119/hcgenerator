const { Entry, RandomTable } = require('./table');

const settlements_la = new RandomTable([
    new Entry(1,10,{name: "Amphail", type: "Village"}),
    new Entry(11,25,{name: "Baldur’s Gate", type: "City"}),
    new Entry(26,39,{name: "Daggerford", type: "Village"}),
    new Entry(40,40,{name: "Longsaddle", type: "Village"}),
    new Entry(41,50,{name: "Mirabar", type: "City"}),
    new Entry(51,60,{name: "Neverwinter", type: "City"}),
    new Entry(61,70,{name: "Silverymoon", type: "City"}),
    new Entry(71,90,{name: "Waterdeep", type: "City"}),
    new Entry(91,100,{name: "Yartar", type: "Village"}),
]);

const settlements_dfn = new RandomTable([
    new Entry(1,20,{name: "Citadel Adbar", type: "City"}),
    new Entry(21,40,{name: "Citadel Felbarr", type: "City"}),
    new Entry(41,60,{name: "Gauntlgrym", type: "City"}),
    new Entry(61,70,{name: "Ironmaster", type: "Village"}),
    new Entry(71,80,{name: "Mithral Hall", type: "Village"}),
    new Entry(81,99,{name: "Sundabar", type: "City"}),
    new Entry(100,100,{name: "Thornhold", type: "City"}),
]);

const settlements_ik = new RandomTable([
    new Entry(1,20,{name: "Mintarn", type: "City"}),
    new Entry(26,35,{name: "Northlander Isles", type: "Village"}),
    new Entry(36,85,{name: "Moonshae Isles", type: "City"}),
    new Entry(86,89,{name: "Orlumbor", type: "Village"}),
    new Entry(90,99,{name: "Southern Isles", type: "Village"}),
    new Entry(100,100,{name: "Evermeet", type: "City"}),
]);

const settlements_ir = new RandomTable([
    new Entry(1,1,{name: "Boareskyr Bridge (Fort Tamal)", type: "City"}),
    new Entry(2,4,{name: "Candlekeep", type: "City"}),
    new Entry(5,5,{name: "Darkhold", type: "Village"}),
    new Entry(6,31,{name: "Elturgard (Elturel)", type: "City"}),
    new Entry(32,41,{name: "Evereska", type: "City"}),
    new Entry(42,48,{name: "Hartsvale", type: "City"}),
    new Entry(49,49,{name: "Helm’s Hold", type: "City"}),
    new Entry(50,52,{name: "High Moor (Secomber)", type: "Village"}),
    new Entry(53,55,{name: "Trielta Hills (Hardbuckler)", type: "Village"}),
    new Entry(56,60,{name: "Uthgardt Lands", type: "Village"}),
    new Entry(61,90,{name: "Luskan", type: "City"}),
    new Entry(91,100,{name: "Icewind Dale (Ten-Towns)", type: "Village"}),
]);

const settlements_ud = new RandomTable([
    new Entry(1,20,{name: "Gracklstugh", type: "City"}),
    new Entry(21,30,{name: "Mantol-Derith", type: "Village"}),
    new Entry(31,80,{name: "Menzoberranzan", type: "City"}),
    new Entry(81,100,{name: "Blingdenstone", type: "City"}),
]);

module.exports = {
    settlements_la,
    settlements_dfn,
    settlements_ik,
    settlements_ir,
    settlements_ud
}