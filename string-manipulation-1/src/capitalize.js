/* exported capitalize */
function capitalize(word) {
  var uppercase = word.toUpperCase();
  uppercase = uppercase.slice(0, 1);
  var lowercase = word.slice(1);
  lowercase = lowercase.toLowerCase();
  var result = uppercase + '' + lowercase;
  return result;
}
