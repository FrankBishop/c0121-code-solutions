/* exported unique */
function unique(array) {
  var newArray = [];
  var i;
  for (i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
