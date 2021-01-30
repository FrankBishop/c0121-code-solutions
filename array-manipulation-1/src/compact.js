/* exported compact */
function compact(array) {
  var newArray = [];
  var i = 0;
  for (i = 0; i <= array.length - 1; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
