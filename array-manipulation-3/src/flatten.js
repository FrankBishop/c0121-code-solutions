/* exported flatten */
function flatten(array) {
  var i = 0;
  var j = 0;
  var newArray = [];
  var miniArray = [];
  for (i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      miniArray = array[i];
      for (j = 0; j < miniArray.length; j++) 
        newArray.push(miniArray[j]);
    } else if (!Array.isArray(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray
}
