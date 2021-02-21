/* exported union */
function union(first, second) {
  var newArray = [];
  var i;
  var j;
  for (i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }
  for (j = 0; j < second.length; j++) {
    if(!newArray.includes(second[j])) {
      newArray.push(second[j])
    }
  }
  return newArray
}
