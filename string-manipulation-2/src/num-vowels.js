/* exported numVowels */
function numVowels(string) {
  var vowels = 0;
  var i;
  for (i = 0; i < string.length; i++) {
    var charAt = string.charAt(i);
    if (charAt === 'a' || charAt === 'A' || charAt === 'e' || charAt === 'E' || charAt === 'i' ||
      charAt === 'I' || charAt === 'o' || charAt === 'O' || charAt === 'u' || charAt === 'U') {
      vowels++;
    }
  }
  return vowels;
}
