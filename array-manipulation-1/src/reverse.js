/* exported reverse */
function reverse(array) {
  var newArray = [];
  var i = 0;
  for (i = array.length - 1; i >= 0; i--) {
    var word = array[i];
    newArray.push(word);
  }
  return newArray;
}
