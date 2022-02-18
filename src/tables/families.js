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

const family_relationships = new RandomTable([
    new Entry(1,10, {text: "You thought you killed this family member, whether by accident or otherwise. You never expected to see them again—but now they’re out for your blood.", type: "Rival"}),
    new Entry(11,20, {text: "You insulted this family member so gravely that they left your life forever. If they ever return, it will be to settle the score.", type: "Rival"}),
    new Entry(21,30, {text: "You have always been better than this family member at a particular activity. They grew jealous and abandoned you, so that they could return and best you one day.", type: "Rival"}),
    new Entry(31,40, {text: "You uncovered a secret about this family member, whether a tiny embarrassment or a life-changing scandal. They now seek to unveil your darkest secret.", type: "Rival"}),
    new Entry(41,50, {text: "You and this family member have a friendly rivalry, and are constantly trying to best each other in an activity, craft, or other pursuit. You visit occasionally to test each other’s skills.", type: "Rival"}),
    new Entry(51,60, {text: "This family member owes you a debt, and they don’t like it. They’ll help you out when you need it, but only to clear the slate.", type: "Ally"}),
    new Entry(61,70, {text: "This family member loves you, but you were never that close. They’ll do anything to help you—as long as they won’t be at risk of injury or death.", type: "Ally"}),
    new Entry(71,80, {text: "This family member caused you to have a horrible accident when you were a child. They still feel incredible guilt, which they would do anything to assuage.", type: "Ally"}),
    new Entry(81,90, {text: "This family member left long ago for reasons you don’t understand or won’t talk about. Before they left, they promised you that they would return in your hour of greatest need.", type: "Ally"}),
    new Entry(91,100, {text: "This family member has always loved you with all their heart, and would do anything for you.", type: "Ally"}),
]);

module.exports = {
    family_size_village,
    family_size_city,
    family_relationships
}