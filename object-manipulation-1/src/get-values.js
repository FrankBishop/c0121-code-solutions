/* exported getValues */
function getValues(object) {
  var newArray = [];
  var key;
  for (key in object) {
    var value = object[key];
    newArray.push(value);
  }
  return newArray;
}
