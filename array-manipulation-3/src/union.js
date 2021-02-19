/* exported union */
function union(first, second) {
  var newArray = [];
  var i;
  for (i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArray.push(first[i]);
    } else if (!second.includes(first[i]) || first.includes(second[i])) { newArray.push(second[i]); }
  }
  return newArray;
}
