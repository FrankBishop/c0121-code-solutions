/* exported chunk */
function chunk(array, size) {
  var finalArray = [];
  // var miniArray = array.slice(size);
  var miniArray = [];
  var i;
  for (i = 0; i <= array.length; i += size) {
    miniArray = array[i];
    finalArray.push(miniArray);
  }
  return finalArray;
}

// a mix of slice and push
