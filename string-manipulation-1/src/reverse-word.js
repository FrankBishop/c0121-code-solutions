/* exported reverseWord */
function reverseWord(word) {
  var letter;
  var newWord = '';
  var i;
  for (i = word.length - 1; i >= 0; i--) {
    letter = word.charAt(i);
    newWord = newWord + letter;
  }
  return newWord;
}
