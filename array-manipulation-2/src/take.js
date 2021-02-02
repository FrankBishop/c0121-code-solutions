/* exported take */
function take(array, count) {
  var newArray = [];
  newArray = array.slice(0, count);
  return newArray;
}
