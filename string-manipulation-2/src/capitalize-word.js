/* exported capitalizeWord */

function capitalizeWord(word) {
  var newWord = word.toLowerCase();
  var lowercase = newWord.slice(1);
  var i;
  for (i = 0; i <= newWord.length; i++) {
    if (newWord[i] === newWord[0]) {
      newWord = newWord[i].toUpperCase();
      newWord = newWord + lowercase;
    }
  }
  if (newWord === 'Javascript') {
    return 'JavaScript';
  }
  return newWord;
}
