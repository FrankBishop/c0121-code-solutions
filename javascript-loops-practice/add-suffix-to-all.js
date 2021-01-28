/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var i;
  var suffixString = [];
  for (i = 0; i < words.length; i++) {
    var newWord = words[i] + '' + suffix;
    suffixString.push(newWord);
  }
  return suffixString;
}
