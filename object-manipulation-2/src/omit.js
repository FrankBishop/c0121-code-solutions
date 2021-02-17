/* exported omit */
function omit(source, keys) {
  var newObject = {};
  var keysArray = Object.keys(source);
  var i = 0;
  for (i = 0; i <= keysArray.length; i++) {
    if (keys.indexOf(keysArray[i]) <= 0) {
      newObject[keysArray[i]] = source[keysArray[i]]
    }
  }
  return newObject
}
