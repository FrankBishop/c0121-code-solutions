/* exported includes */
function includes(array, value) {
  var found = array.indexOf(value);
  var result = false;
  if (found >= 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
