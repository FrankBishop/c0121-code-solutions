/* exported truncate */
function truncate(length, string) {
  var newString = string.slice(0, length);
  var finalString = newString + '...';
  return finalString;
}
