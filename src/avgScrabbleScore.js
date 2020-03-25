let scrabbleScore = require('./scrabbleScore');

/**
 * Given an array of words, return the average scrabble
 * score.
 *
 * Use your implementation of scrabbleScore.
 */
function avgScrabbleScore(words) {
  let wordsSum = 0;
  for (let word of words) {
    wordsSum += scrabbleScore(word);
  }
  return wordsSum / words.length;
  //total scores of the words in an array/Array.lenght
  // This is your job. :)

}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScore:');
  console.log(avgScrabbleScore(['aaa', 'bbb'])); //6
  console.log(avgScrabbleScore(['AAA', 'BbB'])); //6
  console.log(avgScrabbleScore(['Father', 'MOTHER', 'Son', 'DauGhther'])); //10.75
  console.log(avgScrabbleScore(['sanity', 'Checks', 'are', 'Awesome'])); //10.25
  console.log(avgScrabbleScore(['aaa'])); //10.25

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = avgScrabbleScore;
