/* exported zip */
function zip(first, second) {
  var newArray = [];
  var i;
  for (i = 0; i <= first.length; i++) {
    if (first[i] !== undefined && second[i] !== undefined) {
      var miniArray = [];
      miniArray.push(first[i]);
      miniArray.push(second[i]);
      newArray.push(miniArray);
    }
  }
  return newArray;
}
