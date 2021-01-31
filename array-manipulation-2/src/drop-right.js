/* exported dropRight */
function dropRight(array, count) {
  var newArray = array.length;
  newArray = array.slice(0, -count);
  return newArray;
}
