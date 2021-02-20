/* exported reverseWords */
function reverseWords(string) {
  var newString = '';
  var splitString = string.split(' ');
  var i;
  var j;
  for (i = 0; i < splitString.length; i++) {
    var reverseWord = splitString[i];
    var reverse = '';
    for (j = reverseWord.length - 1; j >= 0; j--) {
      reverse += reverseWord[j];
    }
    newString += reverse + ' '
  }
  newString = newString.trim();

  return newString
}
