/* exported findIndex */
function findIndex(array, value) {
  var i;
  for (i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
