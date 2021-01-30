/* exported ransomCase */
function ransomCase(string) {
  var newWord = '';
  var i;

  for (i = 1; i <= string.length; i += 2) {
    newWord = newWord[i].toUpperCase();
    // newWord = newWord + lowercase;
  }
  return newWord;
}
