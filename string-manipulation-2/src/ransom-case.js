/* exported ransomCase */
function ransomCase(string) {
  var lower = string.toLowerCase();
  var first = lower.slice(0, 1);
  var rest = lower.slice(1);
  var newWord = first;
  var i;
  for (i = 0; i < rest.length; i += 2) {
    var oneLetter = rest.slice(i, i + 1);
    oneLetter = oneLetter.toUpperCase();
    newWord = newWord + oneLetter;
    var twoLetter = rest.slice(i + 1, i + 2);
    newWord = newWord + twoLetter;
  }
  return newWord;
}
