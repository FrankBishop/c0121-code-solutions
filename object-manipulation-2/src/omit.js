/* exported omit */
function omit(source, keys) {
  var newObject = {};
  var keysArray = Object.keys(source);
  var valuesArray = Object.values(source);
  var i = 0;
  for (i = 0; i < keysArray.length; i++) {
    if (keys.includes(keysArray[i])) {
      keysArray.splice(i, 1);
      valuesArray.splice(i, 1);
    }
  }
  for (i = 0; i <= keysArray.length; i++) {
    if (keysArray[i] !== undefined) { newObject[keysArray[i]] = valuesArray[i]; }
  }
  return newObject;
}
