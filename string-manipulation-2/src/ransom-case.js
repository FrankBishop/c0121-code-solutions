/* exported ransomCase */

function ransomCase(string) {
  var result = '';
  var i;
  for (i = 0; i < string.length; i += 2) {
    result += string[i].toLowerCase();
    if (string[i + 1] === undefined) {
      return result;
    } else {
      result += string[i + 1].toUpperCase();
    }
  }
  return result;
}
