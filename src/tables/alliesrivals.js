const { Entry, RandomTable } = require('./table');

const ally_relationships = new RandomTable([
    new Entry(1,10, "This ally is a loyal pet. Rather than rolling on the Ally and Rival Identities table, choose one beast of CR 1/8 or lower as your pet."),
    new Entry(11,20, "This person once lost a bet to you and is still trying to scrounge up the cash to pay you back. They’ve decided you’d both be better off if they put you in their debt instead."),
    new Entry(21,30, "This person was once a beggar to whom you gave a large sum of money. They have transformed their life thanks to you, and now want to repay your generosity."),
    new Entry(31,40, "You were this person’s favorite drinking buddy, and their home is always open to you and your friends."),
    new Entry(41,50, "This person was once your mentor, but you left before you could complete your training. You are welcome to return and finish what you started, but only when you are ready."),
    new Entry(51,60, "You bonded with this person over a traumatic event such as a battle or an armed robbery. If you ever tell them that you are in danger, they will try to aid you."),
    new Entry(61,70, "You and this person share a terrible secret, and you have sworn to never reveal it to anyone. They will help you keep this secret if it is ever in danger of being revealed."),
    new Entry(71,80, "This person fell in love with you. If you reciprocated, they always stand at your side. If you didn’t, they took it well, and still consider you their closest friend."),
    new Entry(81,90, "You and this person were affected by powerful magic, and now you both share a telepathic connection that functions while you are within 1 mile of each other."),
    new Entry(91,100, "This person owes you their life. Even if they can’t follow you everywhere you go, they will do anything they can to protect you."),
]);

const rival_relationships = new RandomTable([
    new Entry(1,10, "This person believes that you murdered their sibling. Regardless of your guilt or innocence, they are out for your blood."),
    new Entry(11,20, "You bested this person in combat, but they believe you cheated to defeat them. They long to prove that they are the superior warrior."),
    new Entry(21,30, "You broke a promise to this person, and it caused them to suffer greatly. Now they conspire to make someone else break a valuable promise to you."),
    new Entry(31,40, "You once loved this person, but broke their heart. They are now obsessed with making you feel the same pain they felt."),
    new Entry(41,50, "This person was ordered to arrest you, and doggedly hunts you wherever you go."),
    new Entry(51,60, "This person thinks that you were replaced by a doppelganger or possessed by a spirit or monster. They are now trying to defeat you, so as to find or free the original you."),
    new Entry(61,70, "You fled from your home under mysterious circumstances. This person is obsessed with finding out the truth of what caused you to leave."),
    new Entry(71,80, "You and this person tried to harness power beyond your control, and it left them disfigured and in constant pain. Having since mastered the power that nearly destroyed them, they now seek to turn it upon you."),
    new Entry(81,90, "You helped this person out once when they were down on their luck, and now they go to you whenever they need help."),
    new Entry(91,100, "This person wants to be your friend, but their help has always made your life harder."),
]);

module.exports = {
    ally_relationships,
    rival_relationships
}