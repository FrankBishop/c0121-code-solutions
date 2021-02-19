/* exported difference */
function difference(first, second) {
  var newArray = [];
  var i;
  for (i = 0; i <= first.length; i++) {
    if (!second.includes(first[i])) {
      // newArray.push(first[i]);
      // console.log(newArray)
    // } else if(!first.includes(second[i])) {
    } else {
      newArray.push(second[i]);
      // console.log(newArray)
    }
  }
  return newArray;
}
