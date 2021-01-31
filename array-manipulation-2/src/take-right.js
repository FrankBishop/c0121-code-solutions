/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  newArray = array.slice(-count);
  return newArray;
}
