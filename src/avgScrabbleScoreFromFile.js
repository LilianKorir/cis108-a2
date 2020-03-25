let fs = require('fs');
let avgScrabbleScore = require('./avgScrabbleScore');
let scrabbleScore = require('./scrabbleScore');
/**
 * Returns the average scrabble score of all the words the
 * given text file.
 *
 * Use fs.readFileSync to read the contents.
 *
 * Create some sample files yourself. We also supplied
 * sample-words.txt.
 */

function avgScrabbleScoreFromFile(fileName) {
  let array = fs.readFileSync(fileName).toString().split("\n");
  let arraySum = 0;
  for (let word of array) {
    arraySum += scrabbleScore(word);
  }
  return (arraySum / (array.length - 1))

  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScoreFromFile:');
  console.log(avgScrabbleScoreFromFile('sample-words.txt'));
  console.log(avgScrabbleScoreFromFile('names.txt'));
  console.log(avgScrabbleScoreFromFile('aaa.txt')); //7
  console.log(avgScrabbleScoreFromFile('days.txt'));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = avgScrabbleScoreFromFile;
