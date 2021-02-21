/* exported intersection */
function intersection(first, second) {
  var newArray = [];
  var i;
  for (i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  return newArray;
}
