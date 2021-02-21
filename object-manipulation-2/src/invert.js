/* exported invert */
function invert(source) {
  var newObject = {};
  var keysArray = Object.keys(source);
  var valuesArray = Object.values(source);
  var i;
  for (i = 0; i < keysArray.length; i++) {
    newObject[valuesArray[i]] = keysArray[i];
  }
  return newObject;
}
