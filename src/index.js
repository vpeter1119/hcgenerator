const { d8, d100 } = require('./dice');
const { HeroicChronicle } = require('./generator');
const fs = require('fs');
const inquirer = require('inquirer');
const pjson = require('../package.json');

console.log(`\n\n=== Heroic Chronicle Generator v${pjson.version} ===\n`);
console.log('created by Peter Vertesi\n');

inquirer
  .prompt([
    {type: 'input', name: 'player', message: 'Enter player name: ', default: 'PlayerName'},
    {type: 'input', name: 'character', message: 'Enter character name: ', default: 'CharacterName'},
  ])
  .then((answers) => {
    var hc = new HeroicChronicle(answers);
    hc.generate().then(txt => {
        console.log(txt);
        fs.writeFileSync(`${answers.player}_${answers.character}.txt`, txt);
        fs.writeFileSync('log.txt', hc.getLog());
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
