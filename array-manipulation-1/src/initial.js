/* exported initial */
function initial(array) {
  var newArray = [];
  var i = 0;
  for (i = 0; i <= array.length - 2; i++) {
    var word = array[i];
    newArray.push(word);
  }
  return newArray;
}
