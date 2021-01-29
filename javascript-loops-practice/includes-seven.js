/* exported includesSeven */
function includesSeven(array) {
  var i;
  for (i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
