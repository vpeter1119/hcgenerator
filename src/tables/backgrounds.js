const { Entry, RandomTable } = require('./table');

const backgrounds = new RandomTable([
    new Entry(1,4,"Acolyte"),
    new Entry(5,8,"Charlatan"),
    new Entry(9,12,"City Watch"),
    new Entry(13,16,"Clan Crafter"),
    new Entry(17,20,"Cloistered Scholar"),
    new Entry(21,24,"Courtier"),
    new Entry(25,28,"Criminal"),
    new Entry(29,32,"Entertainer"),
    new Entry(33,36,"Faction Agent"),
    new Entry(37,40,"Far Traveler"),
    new Entry(41,44,"Folk Hero"),
    new Entry(45,48,"Guild Artisan"),
    new Entry(49,52,"Hermit"),
    new Entry(53,56,"Inheritor"),
    new Entry(57,60,"Knight of the Order"),
    new Entry(61,64,"Mercenary Veteran"),
    new Entry(65,68,"Noble"),
    new Entry(69,72,"Outlander"),
    new Entry(73,76,"Sage"),
    new Entry(77,80,"Sailor"),
    new Entry(81,84,"Soldier"),
    new Entry(85,88,"Spy"),
    new Entry(89,92,"Urban Bounty Hunter"),
    new Entry(93,96,"Urchin"),
    new Entry(97,99,"Uthgardt Tribe Member"),
    new Entry(100,100,"Waterdhavian Noble"),
]);

module.exports = {
    backgrounds
}