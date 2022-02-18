class Dice {
    constructor(sides) {
        this.sides = sides;
    }

    roll(times = 1) {
        var result = 0;
        for (let index = 0; index < times; index++) {
            var randomNumber = Math.floor(Math.random() * this.sides) + 1;
            result += randomNumber;
        }
        return result;
    }
}

const d4 = new Dice(4);
const d6 = new Dice(6);
const d8 = new Dice(8);
const d10 = new Dice(10);
const d12 = new Dice(12);
const d20 = new Dice(20);
const d100 = new Dice(100);

module.exports = {
    Dice,
    d4,
    d6,
    d8,
    d10,
    d12,
    d20,
    d100
}