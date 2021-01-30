/* exported tail */
function tail(array) {
  var newArray = [];
  var i = 0;
  for (i = 1; i < array.length; i++) {
    var word = array[i];
    newArray.push(word);
  }
  return newArray;
}
