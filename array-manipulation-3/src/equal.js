/* exported equal */
function equal(first, second) {
  var i;
  var equals = null;
  for (i = 0; i <= second.length; i++) {
    if (second[i] !== first[i]) {
      equals = false;
      return equals;
    } else {
      equals = true;
    }
  }
  return equals;
}
