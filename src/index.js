const { d8, d100 } = require('./dice');
const { HeroicChronicle } = require('./generator');
const fs = require('fs');

var hc = new HeroicChronicle();
hc.generate().then(txt => {
    console.log(txt);
    fs.writeFileSync('output.txt', txt);
    fs.writeFileSync('log.txt', hc.getLog());
})