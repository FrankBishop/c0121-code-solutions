/* exported capitalizeWord */

// function capitalize(word) {
//   var uppercase = word.toUpperCase();
//   uppercase = uppercase.slice(0, 1);
//   var lowercase = word.slice(1);
//   lowercase = lowercase.toLowerCase();
//   var result = uppercase + '' + lowercase;
//   return result;
// }
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
  return newWord;
}
