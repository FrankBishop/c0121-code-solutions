/* exported numVowels */
function numVowels(string) {
  var vowels = 0;
  var i;
  for (i = 0; i < string.length; i++) {
    if (string.charAt(i) === 'a' || string.charAt(i) === 'A' || string.charAt(i) === 'e' || string.charAt(i) === 'E' || string.charAt(i) === 'i' ||
      string.charAt(i) === 'I' || string.charAt(i) === 'o' || string.charAt(i) === 'O' || string.charAt(i) === 'u' || string.charAt(i) === 'U') {
      vowels++;
    }
  }
  return vowels;
}
