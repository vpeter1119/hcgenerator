const { Entry, RandomTable } = require('./table');
const { d4 } = require('../dice');

const family_size_village = new RandomTable([
    new Entry(1,10, {parents: 3, siblings: d4.roll(2)+2}),
    new Entry(11,50, {parents: 2, siblings: d4.roll(2)}),
    new Entry(51,89, {parents: 1, siblings: d4.roll()}),
    new Entry(90,100, {parents: 0, siblings: 0}),
]);

const family_size_city = new RandomTable([
    new Entry(1,5, {parents: 3, siblings: d4.roll(2)+2}),
    new Entry(6,60, {parents: 2, siblings: d4.roll(2)}),
    new Entry(61,80, {parents: 1, siblings: d4.roll()}),
    new Entry(81,100, {parents: 0, siblings: 0}),
]);

module.exports = {
    family_size_village,
    family_size_city
}