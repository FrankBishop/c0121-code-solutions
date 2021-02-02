/* exported chunk */

function chunk(array, size) {
  var finalArray = [];
  var miniArray = [];
  var i;
  for (i = 0; i < array.length; i += size) {
    miniArray = array.slice(i, size + i);
    finalArray.push(miniArray);
  }
  return finalArray;
}
