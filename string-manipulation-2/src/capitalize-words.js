/* exported capitalizeWords */
function capitalizeWords(string) {
  var splitString = string.split(' ');
  var newString = '';
  var newWord = '';
  var i;
  var length = splitString.length;
  for (i = 0; i < length; i++) {
    newWord = splitString[i];
    newWord = newWord.toLowerCase();
    var upperCase = newWord.slice(0, 1);
    var lowercase = newWord.slice(1);
    upperCase = upperCase.toUpperCase();
    newWord = upperCase + lowercase;
    newString = newString + ' ' + newWord;
  }
  newString = newString.trim();
  return newString;
}
